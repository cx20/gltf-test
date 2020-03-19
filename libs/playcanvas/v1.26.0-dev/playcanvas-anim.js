Object.assign(window, function () {

    // *===============================================================================================================
    // * class AnimationKeyable
    // *
    // *===============================================================================================================
    /**
     * @enum {number}
     */
    var AnimationKeyableType = { NUM: 0, VEC: 1, QUAT: 2 };

    /**
     * @constructor
     * @param {AnimationKeyableType} [type]
     * @param {number} [time]
     * @param {BlendValue} [value]
     */

    var AnimationKeyable = function (type, time, value) {
        this.init(type, time, value);
    };

    /**
     * @param {AnimationKeyableType} [type]
     * @param {number} [time]
     * @param {BlendValue} [value]
     * @returns {AnimationKeyable}
     */

    AnimationKeyable.prototype.init = function (type, time, value) {
        this.type = type || AnimationKeyableType.NUM;
        this.time = time || 0;
        if (value)
            this.value = value;
        else {
            switch (type) {
                case AnimationKeyableType.NUM: this.value = 0; break;
                case AnimationKeyableType.VEC: this.value = new pc.Vec3(); break;
                case AnimationKeyableType.QUAT: this.value = new pc.Quat(); break;
            }
        }
        return this;
    };

    /**
     * @param {AnimationKeyable} keyable
     * @returns {AnimationKeyable}
     */

    AnimationKeyable.prototype.copy = function (keyable) {
        if (!keyable)
            return this;

        var value = AnimationKeyable._cloneValue(keyable.value);

        this.init(keyable.type, keyable.time, value);
        if(keyable.inTangent || keyable.inTangent === 0)
            this.inTangent = AnimationKeyable._cloneValue(keyable.inTangent);
        if(keyable.outTangent || keyable.outTangent === 0)
            this.outTangent = AnimationKeyable._cloneValue(keyable.outTangent);
        return this;
    };

    AnimationKeyable.prototype.clone = function () {
        var value = AnimationKeyable._cloneValue(this.value);
        var cloned = new AnimationKeyable(this.type, this.time, value);
        if(this.inTangent || this.inTangent === 0)
            cloned.inTangent = AnimationKeyable._cloneValue(this.inTangent);
        if(this.outTangent || this.outTangent === 0)
            cloned.outTangent = AnimationKeyable._cloneValue(this.outTangent);
        return cloned;
    };

    /**
     * @param {T} value Value to clone
     * @returns {T} Clone of the given value
     * @template T
     */

    AnimationKeyable._cloneValue = function (value) {
        if (value instanceof pc.Vec3 || value instanceof pc.Quat)
            return value.clone();
        // just in case there's something not covered by pc.Vec3 and pc.Quat
        if (value !== undefined && typeof value.clone === "function")
            return value.clone();
        // must be a primitive value or an undefined then
        return value;
    };

    /**
     * @param {AnimationKeyable} keyable1
     * @param {AnimationKeyable} keyable2
     * @returns {AnimationKeyable}
     * @summary
     * static function for lack of overloaded operator
     * return keyable1 + keyable2
     */

    AnimationKeyable.sum = function (keyable1, keyable2) {
        if (!keyable1 || !keyable2 || keyable1.type != keyable2.type)
            return null;

        var resKeyable = new AnimationKeyable(keyable1.type);
        switch (keyable1.type) {
            case AnimationKeyableType.NUM: resKeyable.value = keyable1.value + keyable2.value; break;
            case AnimationKeyableType.VEC: resKeyable.value.add2(keyable1.value, keyable2.value); break;
            case AnimationKeyableType.QUAT:
                resKeyable.value.x = keyable1.value.x + keyable2.value.x;
                resKeyable.value.y = keyable1.value.y + keyable2.value.y;
                resKeyable.value.z = keyable1.value.z + keyable2.value.z;
                resKeyable.value.w = keyable1.value.w + keyable2.value.w; break;
        }
        return resKeyable;
    };

    /**
     * @param {AnimationKeyable} keyable1
     * @param {AnimationKeyable} keyable2
     * @returns {AnimationKeyable}
     * @summary return keyable1 - keyable2
     */

    AnimationKeyable.minus = function (keyable1, keyable2) {
        if (!keyable1 || !keyable2 || keyable1.type != keyable2.type)
            return null;

        var resKeyable = new AnimationKeyable(keyable1.type);
        switch (keyable1.type) {
            case AnimationKeyableType.NUM: resKeyable.value = keyable1.value - keyable2.value; break;
            case AnimationKeyableType.VEC: resKeyable.value.sub2(keyable1.value, keyable2.value); break;
            case AnimationKeyableType.QUAT:
                resKeyable.value.x = keyable1.value.x - keyable2.value.x;
                resKeyable.value.y = keyable1.value.y - keyable2.value.y;
                resKeyable.value.z = keyable1.value.z - keyable2.value.z;
                resKeyable.value.w = keyable1.value.w - keyable2.value.w; break;
        }
        return resKeyable;
    };

    /**
     * @param {AnimationKeyable} keyable
     * @param {number} coeff
     * @returns {AnimationKeyable}
     * @summary return keyable * coeff
     */

    AnimationKeyable.mul = function (keyable, coeff) {
        if (!keyable)
            return null;

        var resKeyable = new AnimationKeyable();
        resKeyable.copy(keyable);
        switch (keyable.type) {
            case AnimationKeyableType.NUM: resKeyable.value *= coeff; break;
            case AnimationKeyableType.VEC: resKeyable.value.scale(coeff); break;
            case AnimationKeyableType.QUAT:
                resKeyable.value.x *= coeff;
                resKeyable.value.y *= coeff;
                resKeyable.value.z *= coeff;
                resKeyable.value.w *= coeff; break;
        }
        return resKeyable;
    };

    /**
     * @param {AnimationKeyable} keyable
     * @param {number} coeff
     * @returns {AnimationKeyable}
     */
    // return keyable / coeff
    AnimationKeyable.div = function (keyable, coeff) {
        if (coeff === 0)
            return null;

        return AnimationKeyable.mul(keyable, 1 / coeff);
    };

    /**
     * @param {AnimationKeyable} keyable1
     * @param {AnimationKeyable} keyable2
     * @param {number} p
     * @param {AnimationKeyable} [cacheValue]
     * @returns {AnimationKeyable}
     */

    AnimationKeyable.linearBlend = function (keyable1, keyable2, p, cacheValue) {
        if (!keyable1 || !keyable2 || keyable1.type !== keyable2.type)
            return null;

        var resKeyable;
        if (cacheValue) resKeyable = cacheValue;
        else resKeyable = new AnimationKeyable(keyable1.type);

        if (p === 0) {
            resKeyable.copy(keyable1);
            return resKeyable;
        }

        if (p === 1) {
            resKeyable.copy(keyable2);
            return resKeyable;
        }

        switch (keyable1.type) {
            case AnimationKeyableType.NUM:
                resKeyable.value = (1 - p) * keyable1.value + p * keyable2.value; break;
            case AnimationKeyableType.VEC:
                resKeyable.value.lerp(keyable1.value, keyable2.value, p); break;
            case AnimationKeyableType.QUAT:
                resKeyable.value.slerp(keyable1.value, keyable2.value, p); break;
        }
        return resKeyable;
    };

    /**
     * @param {SingleDOF} value1
     * @param {SingleDOF} value2
     * @param {number} p
     */

    AnimationKeyable.linearBlendValue = function (value1, value2, p) {
        var valRes;

        if (typeof value1 === "number" && typeof value2 === "number") {
            return (1 - p) * value1 + p * value2;
        }

        if ((value1 instanceof pc.Vec3 && value2 instanceof pc.Vec3) ||
           (value1 instanceof pc.Vec2 && value2 instanceof pc.Vec2)  ||
           (value1 instanceof pc.Vec4 && value2 instanceof pc.Vec4)) {
            valRes = value1.clone();
            valRes.lerp(value1, value2, p);
            return valRes;
        }

        if (value1 instanceof pc.Quat && value2 instanceof pc.Quat) {
            valRes = value1.clone();
            valRes.slerp(value1, value2, p);
            return valRes;
        }
        return null;
    };

    // *===============================================================================================================
    // * class AnimationTarget: organize target into an object, this allows 1-Curve-Multiple-Targets
    // *                        one AnimationCurve has a [] collection of AnimationTargets
    // *                        one AnimationClip has a {} dictionary of AnimationTargets, keyname matches curvename
    // *===============================================================================================================
    /**
     * @constructor
     * @param {pc.GraphNode} targetNode
     * @param {String} [targetPath]
     * @param {String} [targetProp]
     */
    var AnimationTarget = function (targetNode, targetPath, targetProp) {
        this.targetNode = targetNode;
        this.targetPath = targetPath;
        this.targetProp = targetProp;
    };

    // blend related
    AnimationTarget.prototype.toString = function (){
        var str = "";
        if (this.targetNode)
            str += this.targetNode.name;
        if (this.targetPath)
            str += ("_" + this.targetPath);
        if (this.targetProp)
            str += ("_" + this.targetProp);
        return str;
    };

    /**
     * @param {AnimationTarget} target
     */

    AnimationTarget.prototype.copy = function (target) {
        if (target) {
            this.targetNode = target.targetNode;
            this.targetPath = target.targetPath;
            this.targetProp = target.targetProp;
        }
        return this;
    };

    AnimationTarget.prototype.clone = function () {
        var cloned = new AnimationTarget(this.targetNode, this.targetPath, this.targetProp);
        return cloned;
    };

    /**
     * @param {pc.Vec3 | number} value
     * @param {number} p
     * @summary based on current target[path]'s value, blend in value by p
     */

    AnimationTarget.prototype.blendToTarget = function (value, p) {
        if ((typeof value === "undefined") || p > 1 || p <= 0)// p===0 remain prev
            return;

         // target needs scaling for retargetting
        if (this.targetPath === "localPosition" && (this.vScale instanceof pc.Vec3)) {
            if (value instanceof pc.Vec3) {
                value.x *= this.vScale.x;
                value.y *= this.vScale.y;
                value.z *= this.vScale.z;
            } else if ((typeof value === "number") && (typeof this.vScale[this.targetProp] === "number")) {
                value *= this.vScale[this.targetProp];
            }
        }

        if (p === 1) {
            this.updateToTarget(value);
            return;
        }

        // p*cur + (1-p)*prev
        if (this.targetNode && this.targetNode[this.targetPath] !== undefined) {
            var blendValue;
            if (this.targetProp && this.targetProp in this.targetNode[this.targetPath]) {
                blendValue = AnimationKeyable.linearBlendValue(this.targetNode[this.targetPath][this.targetProp], value, p);
                this.targetNode[this.targetPath][this.targetProp] = blendValue;
            } else {
                blendValue = AnimationKeyable.linearBlendValue(this.targetNode[this.targetPath], value, p);
                this.targetNode[this.targetPath] = blendValue;
            }

            // special wrapping for eulerangles
            if (this.targetPath == "localEulerAngles") {
                var vec3 = new pc.Vec3();
                if (this.targetProp === "x" || this.targetProp === "y" || this.targetProp === "z")
                    vec3[this.targetProp] = blendValue;
                else
                    vec3 = blendValue;
                this.targetNode.setLocalEulerAngles(vec3);
            }

            // execute update target
            if (typeof this.targetNode._dirtifyLocal === 'function') {
                this.targetNode._dirtifyLocal();
            }
        }

        /* /special wrapping for morph weights
        if (this.targetNode && this.targetPath === "weights" && this.targetNode.model)
        {
            var meshInstances = this.targetNode.model.meshInstances;
            for (var m = 0; m < meshInstances.length; m++)
            {
                var morphInstance = meshInstances[m].morphInstance;
                if (!morphInstance) continue;
                morphInstance.setWeight(this.targetProp, keyable.value);
            }
        }*/
    };

    /**
     * @param {pc.Vec3 | number} value
     */

    AnimationTarget.prototype.updateToTarget = function (value) {
        if ((typeof value === "undefined"))
            return;

        // target needs scaling for retargetting
        if (this.targetPath === "localPosition" && (this.vScale instanceof pc.Vec3)) {
            if (value instanceof pc.Vec3) {
                value.x *= this.vScale.x;
                value.y *= this.vScale.y;
                value.z *= this.vScale.z;
            } else if ((typeof value === "number") && (typeof this.vScale[this.targetProp] === "number")) {
                value *= this.vScale[this.targetProp];
            }
        }

        if (this.targetNode && this.targetNode[this.targetPath] !== undefined) {
            if (this.targetProp && this.targetProp in this.targetNode[this.targetPath])
                this.targetNode[this.targetPath][this.targetProp] = value;
            else
                this.targetNode[this.targetPath] = value;

            // special wrapping for eulerangles
            if (this.targetPath == "localEulerAngles") {
                var vec3 = new pc.Vec3();
                if (this.targetProp === "x" || this.targetProp === "y" || this.targetProp === "z")
                    vec3[this.targetProp] = value;
                else
                    vec3 = value;
                this.targetNode.setLocalEulerAngles(vec3);
            }

            // execute update target
            if (typeof this.targetNode._dirtifyLocal === 'function') {
                this.targetNode._dirtifyLocal();
            }
        }

        // special wrapping for morph weights
        if (this.targetNode && this.targetPath === "weights" && this.targetNode.model) {
            var meshInstances = this.targetNode.model.meshInstances;
            for (var m = 0; m < meshInstances.length; m++) {
                var morphInstance = meshInstances[m].morphInstance;
                if (!morphInstance) continue;
                morphInstance.setWeight(this.targetProp, value);
            }
        }
    };

    // static function
    /**
     * @param {pc.GraphNode} root
     * @param {pc.Vec3} vec3Scale
     * @param {Object} output
     */
    AnimationTarget.constructTargetNodes = function (root, vec3Scale, output) {
        if (!root)
            return;

        var vScale = vec3Scale || new pc.Vec3(1, 1, 1);
        var rootTargetNode = new AnimationTarget(root);
        if (root.localScale)
            rootTargetNode.vScale = new pc.Vec3(root.localScale.x * vScale.x, root.localScale.y * vScale.y, root.localScale.z * vScale.z);

        output[rootTargetNode.targetNode.name] = rootTargetNode;
        for (var i = 0; i < root.children.length; i ++) {
            AnimationTarget.constructTargetNodes(root.children[i], rootTargetNode.vScale, output);
        }
    };

    // static function
    /**
     * @param {pc.GraphNode} node
     * @param {pc.Vec3} localScale
     */
    AnimationTarget.getLocalScale = function (node, localScale) {
        localScale.set(1, 1, 1);

        if (!node)
            return;

        while (node) {
            if (node.localScale) {
                localScale.mul(node.localScale);
            }
            node = node.parent;
        }
    };

    // *===============================================================================================================
    // * class AnimationCurve: each curve corresponds to one channel
    // * member
    // *        animKeys: an array of Keys (knots) on the curve
    // *        type: how to interpolate between keys.
    // *
    // *===============================================================================================================

    /**
     * @enum {number}
     */

    var AnimationCurveType = { LINEAR: 0, STEP: 1, CUBIC: 2, CUBICSPLINE_GLTF: 3 };

    /**
     * @constructor
     */

    var AnimationCurve = function () {
        AnimationCurve.count ++;
        this.name = "curve" + AnimationCurve.count.toString();
        this.type = AnimationCurveType.LINEAR;
        this.keyableType = AnimationKeyableType.NUM;
        this.tension = 0.5;// 0.5 catmul-rom
        this.animTargets = [];// allow multiple targets
        this.duration = 0;
        this.animKeys = [];
    };
    AnimationCurve.count = 0;

    // getter and setter
    Object.defineProperty(AnimationCurve.prototype, 'isPlaying', {
        get: function () {
            if(this.session)
                return this.session.isPlaying;
            return false;
        },
        set: function (isPlaying) {
            if(this.session)
                this.session.isPlaying = isPlaying;
        }
    });
    Object.defineProperty(AnimationCurve.prototype, 'loop', {
        get: function () {
            if(this.session)
                return this.session.loop;
            return false;
        },
        set: function (loop) {
            if(this.session)
                this.session.loop = loop;
        }
    });
    Object.defineProperty(AnimationCurve.prototype, 'bySpeed', {
        get: function () {
            if(this.session)
                return this.session.bySpeed;
            return 0;
        },
        set: function (bySpeed) {
            if(this.session)
                this.session.bySpeed = bySpeed;
        }
    });

    /**
     * @param {AnimationCurve} curve
     */

    AnimationCurve.prototype.copy = function (curve) {
        var i;

        this.name = curve.name;
        this.type = curve.type;
        this.keyableType = curve.keyableType;
        this.tension = curve.tension;
        this.duration = curve.duration;

        this.animTargets = [];
        for (i = 0; i < curve.animTargets.length; i ++)
            this.animTargets.push(curve.animTargets[i].clone());

        this.animKeys = [];
        for (i = 0; i < curve.animKeys.length; i ++) {
            var key = new AnimationKeyable();
            key.copy(curve.animKeys[i]);
            this.animKeys.push(key);
        }
        return this;
    };

    AnimationCurve.prototype.clone = function () {
        return new AnimationCurve().copy(this);
    };

    /**
     * @param {pc.GraphNode} targetNode
     * @param {String} targetPath
     * @param {String} targetProp
     */

    AnimationCurve.prototype.addTarget = function (targetNode, targetPath, targetProp) {
        var target = new AnimationTarget(targetNode, targetPath, targetProp);
        this.animTargets.push(target);
    };

    /**
     * @param {pc.GraphNode} targetNode
     * @param {String} targetPath
     * @param {String} [targetProp]
     */

    AnimationCurve.prototype.setTarget = function (targetNode, targetPath, targetProp) {
        this.animTargets = [];
        this.addTarget(targetNode, targetPath, targetProp);
    };

    AnimationCurve.prototype.clearTargets = function () {
        this.animTargets = [];
    };

    AnimationCurve.prototype.resetSession = function () {
        if(this.session) { 
            this.session.playable = this;
            this.session.animTargets = this.getAnimTargets();
            this.session.isPlaying = true;
            this.session.begTime = 0;
            this.session.endTime = this.duration;
            this.session.curTime = 0;
            this.session.bySpeed = 1;
            this.session.loop = true;
        }
    };

    /**
     * @param {AnimationKeyable} keyable
     * @param {number} p
     */

    AnimationCurve.prototype.blendToTarget = function (keyable, p) {
        if (this.session)
            this.session.blendToTarget(keyable, p);
    };

    /**
     * @param {AnimationKeyable} keyable
     */

    AnimationCurve.prototype.updateToTarget = function (keyable) {
        if (this.session)
            this.session.updateToTarget(keyable);
    };

    // this.animTargets wrapped in object, with curve name
    /**
     * @returns {AnimationTargetsMap}
     */
    AnimationCurve.prototype.getAnimTargets = function () {
        /** @type {AnimationTargetsMap} */
        var result = {};
        result[this.name] = this.animTargets;// an array []
        return result;
    };

    // events related
    /**
     * @param {String} name
     * @param {number} time
     * @param {AnimationEventCallback} fnCallback
     * @param {any} context
     * @param {any} parameter
     */

    AnimationCurve.prototype.on = function (name, time, fnCallback, context, parameter) {
        if (this.session)
            this.session.on(name, time, fnCallback, context, parameter);
        return this;
    };

    /**
     * @param {String} name
     * @param {number} time
     * @param {AnimationEventCallback} fnCallback
     */

    AnimationCurve.prototype.off = function (name, time, fnCallback) {
        if (this.session)
            this.session.off(name, time, fnCallback);
        return this;
    };

    /**
     * @returns {AnimationCurve}
     */

    AnimationCurve.prototype.removeAllEvents = function () {
        if (this.session)
            this.session.removeAllEvents();
        return this;
    };

    /**
     * @param {number} duration
     */

    AnimationCurve.prototype.fadeIn = function (duration) {
        if (!this.session)
            this.session = new AnimationSession(this);
        this.session.fadeIn(duration, this);
    };

    /**
     * @param {number} duration
     */

    AnimationCurve.prototype.fadeOut = function (duration) {
        if (this.session)
            this.session.fadeOut(duration);
    };

    AnimationCurve.prototype.play = function () {
        if (!this.session)
            this.session = new AnimationSession(this);
        this.session.play(this);
    };

    AnimationCurve.prototype.resume = function () {
        if (this.session)
            this.session.resume();
    };

    AnimationCurve.prototype.stop = function () {
        if (this.session)
            this.session.stop();
    };

    AnimationCurve.prototype.pause = function () {
        if (this.session)
            this.session.pause();
    };

    /**
     * @param {number} time
     * @param {number} fadeDir
     * @param {number} fadeBegTime
     * @param {number} fadeEndTime
     * @param {number} fadeTime
     */

    AnimationCurve.prototype.showAt = function (time, fadeDir, fadeBegTime, fadeEndTime, fadeTime) {
        if (this.session)
            this.session.showAt(time, fadeDir, fadeBegTime, fadeEndTime, fadeTime);
    };

    /**
     * @param {AnimationKeyable[]} animKeys
     */

    AnimationCurve.prototype.setAnimKeys = function (animKeys) {
        this.animKeys = animKeys;
    };

    /**
     * @param {AnimationCurveType} type
     * @param {number} time
     * @param {SingleDOF} value
     */

    AnimationCurve.prototype.insertKey = function (type, time, value) {
        if (this.keyableType != type)
            return;

        var pos = 0;
        while (pos < this.animKeys.length && this.animKeys[pos].time < time)
            pos ++;

        // replace if existed at time
        if (pos < this.animKeys.length && this.animKeys[pos].time == time) {
            this.animKeys[pos].value = value;
            return;
        }

        var keyable = new AnimationKeyable(type, time, value);

        // append at the back
        if (pos >= this.animKeys.length) {
            this.animKeys.push(keyable);
            this.duration = time;
            return;
        }

        // insert at pos
        this.animKeys.splice(pos, 0, keyable);
    };

    // 10/15
    /**
     * @param {AnimationKeyable} keyable
     */
    AnimationCurve.prototype.insertKeyable = function (keyable) {
        if (!keyable || this.keyableType != keyable.type)
            return;

        var time = keyable.time;
        var pos = 0;
        while (pos < this.animKeys.length && this.animKeys[pos].time < time)
            pos ++;

        // replace if existed at time
        if (pos < this.animKeys.length && this.animKeys[pos].time == time) {
            this.animKeys[pos] = keyable;
            return;
        }

        // append at the back
        if (pos >= this.animKeys.length) {
            this.animKeys.push(keyable);
            this.duration = time;
            return;
        }

        // insert at pos
        this.animKeys.splice(pos, 0, keyable);
    };

    /**
     * @param {number} index
     */

    AnimationCurve.prototype.removeKey = function (index) {
        if (index <= this.animKeys.length) {
            if (index == this.animKeys.length - 1)
                this.duration = (index - 1) >= 0 ? this.animKeys[index - 1].time : 0;
            this.animKeys.splice(index, 1);
        }
    };

    AnimationCurve.prototype.removeAllKeys = function () {
        this.animKeys = [];
        this.duration = 0;
    };

    /**
     * @param {number} time
     */

    AnimationCurve.prototype.shiftKeyTime = function (time) {
        for (var i = 0; i < this.animKeys.length; i ++)
            this.animKeys[i].time += time;
    };

    /**
     * @param {number} tmBeg
     * @param {number} tmEnd
     */

    AnimationCurve.prototype.getSubCurve = function (tmBeg, tmEnd) {
        var i;
        var subCurve = new AnimationCurve();
        subCurve.type = this.type;
        subCurve.name = this.name + "_sub";
        subCurve.keyableType = this.keyableType;
        subCurve.animTargets = this.animTargets;
        subCurve.tension = this.tension;

        subCurve.animTargets = [];
        for (i = 0; i < this.animTargets.length; i ++)
            subCurve.animTargets.push(this.animTargets[i].clone());

        var tmFirst = -1;
        for (i = 0; i < this.animKeys.length; i++) {
            if (this.animKeys[i].time >= tmBeg && this.animKeys[i].time <= tmEnd) {
                if (tmFirst < 0)
                    tmFirst = this.animKeys[i].time;

                var key = new AnimationKeyable().copy(this.animKeys[i]);
                key.time -= tmFirst;
                subCurve.animKeys.push(key);
            }
        }

        subCurve.duration = (tmFirst === -1) ? 0 : (tmEnd - tmFirst);
        return subCurve;
    };

    /**
     * @param {number} time
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.evalLINEAR = function (time) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        // 1. find the interval [key1, key2]
        var resKey = new AnimationKeyable();
        var key1, key2;
        for (var i = 0; i < this.animKeys.length; i ++) {
            if (this.animKeys[i].time === time) {
                resKey.copy(this.animKeys[i]);
                return resKey;
            }

            if (this.animKeys[i].time > time) {
                key2 = this.animKeys[i];
                break;
            }
            key1 = this.animKeys[i];
        }

        // 2. only found one boundary
        if (!key1 || !key2) {
            resKey.copy(key1 ? key1 : key2);
            resKey.time = time;
            return resKey;
        }

        // 3. both found then interpolate
        var p = (time - key1.time) / (key2.time - key1.time);
        resKey = AnimationKeyable.linearBlend(key1, key2, p);
        resKey.time = time;
        return resKey;
    };

    /**
     * @param {number} time
     * @param {number} cacheKeyIdx
     * @param {AnimationKeyable} cacheValue
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.evalLINEAR_cache = function (time, cacheKeyIdx, cacheValue) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        // 1. find the interval [key1, key2]
        var resKey = cacheValue;// new AnimationKeyable();
        var key1, key2;

        var begIdx = 0;
        if (cacheKeyIdx) begIdx = cacheKeyIdx;
        var i = begIdx;

        for (var c = 0; c < this.animKeys.length; c ++) {
            i = (begIdx + c) % this.animKeys.length;
            if (this.animKeys[i].time === time) {
                resKey.copy(this.animKeys[i]);
                resKey._cacheKeyIdx = i;
                return resKey;
            }

            if (i === 0 && this.animKeys[i].time > time) { // earlier than first
                key1 = null;
                key2 = this.animKeys[i];
                break;
            }

            if (i == this.animKeys.length - 1 && this.animKeys[i].time < time) { // later than last
                key1 = this.animKeys[i];
                key2 = null;
                break;

            }
            if (this.animKeys[i].time > time &&
                (i - 1 < 0 || this.animKeys[i - 1].time < time)) {
                key1 = this.animKeys[i - 1];
                key2 = this.animKeys[i];
                break;
            }
        }

        // 2. only found one boundary
        if (!key1 || !key2) {
            resKey.copy(key1 ? key1 : key2);
            resKey.time = time;
            resKey._cacheKeyIdx = i;
            return resKey;
        }

        // 3. both found then interpolate
        var p = (time - key1.time) / (key2.time - key1.time);
        resKey = AnimationKeyable.linearBlend(key1, key2, p, resKey);
        resKey.time = time;
        resKey._cacheKeyIdx = i;
        return resKey;
    };

    /**
     * @param {number} time
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.evalSTEP = function (time) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        var key = this.animKeys[0];
        for (var i = 1; i < this.animKeys.length; i ++) {
            if (this.animKeys[i].time <= time)
                key = this.animKeys[i];
            else
                break;
        }
        var resKey = new AnimationKeyable();
        resKey.copy(key);
        resKey.time = time;
        return resKey;
    };

    /**
     * @param {number} time
     * @param {number} cacheKeyIdx
     * @param {AnimationKeyable} cacheValue
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.evalSTEP_cache = function (time, cacheKeyIdx, cacheValue) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        var begIdx = 0;
        if (cacheKeyIdx) begIdx = cacheKeyIdx;
        var i = begIdx;

        var key = this.animKeys[i];
        for (var c = 1; c < this.animKeys.length; c ++) {
            i = (begIdx + c) % this.animKeys.length;

            if (i === 0 && this.animKeys[i].time > time) { // earlier than first
                key = this.animKeys[i];
                break;
            }

            if (i === this.animKeys.length - 1 && this.animKeys[i].time <= time) { // later than last
                key = this.animKeys[i];
                break;
            }

            if (this.animKeys[i].time <= time && (i + 1 >= this.animKeys.length || this.animKeys[i + 1].time > time)) {
                key = this.animKeys[i];
                break;
            }
        }
        var resKey = cacheValue;// new AnimationKeyable();
        resKey.copy(key);
        resKey.time = time;
        resKey._cacheKeyIdx = i;
        return resKey;
    };

    /**
     * @param {number} time
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.evalCUBIC = function (time) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        // 1. find interval [key1, key2] enclosing time
        // key0, key3 are for tangent computation
        var key0, key1, key2, key3;
        var resKey = new AnimationKeyable();
        for (var i = 0; i < this.animKeys.length; i ++) {
            if (this.animKeys[i].time === time) {
                resKey.copy(this.animKeys[i]);
                return resKey;
            }
            if (this.animKeys[i].time > time) {
                key2 = this.animKeys[i];
                if (i + 1 < this.animKeys.length)
                    key3 = this.animKeys[i + 1];
                break;
            }
            key1 = this.animKeys[i];
            if (i - 1 >= 0)
                key0 = this.animKeys[i - 1];
        }

        // 2. only find one boundary
        if (!key1 || !key2) {
            resKey.copy(key1 ? key1 : key2);
            resKey.time = time;
            return resKey;
        }

        // 3. curve interpolation
        if (key1.type == AnimationKeyableType.NUM || key1.type == AnimationKeyableType.VEC) {
            resKey = AnimationCurve.cubicCardinal(key0, key1, key2, key3, time, this.tension);
            resKey.time = time;
            return resKey;
        }
        return null;// quaternion or combo
    };

    /**
     * @param {number} time
     * @param {number} cacheKeyIdx
     * @param {AnimationKeyable} cacheValue
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.evalCUBIC_cache = function (time, cacheKeyIdx, cacheValue) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        var begIdx = 0;
        if (cacheKeyIdx) begIdx = cacheKeyIdx;
        var i = begIdx;

        // 1. find interval [key1, key2] enclosing time
        // key0, key3 are for tangent computation
        var key0, key1, key2, key3;
        var resKey = cacheValue;// new AnimationKeyable();
        for (var c = 0; c < this.animKeys.length; c ++) {
            i = (begIdx + c) % this.animKeys.length;

            if (this.animKeys[i].time === time) {
                resKey.copy(this.animKeys[i]);
                resKey._cacheKeyIdx = i;
                return resKey;
            }

            if (i === 0 && this.animKeys[i].time > time) { // earlier than first
                key0 = null;
                key1 = null;
                key2 = this.animKeys[i];
                if (i + 1 < this.animKeys.length) key3 = this.animKeys[i + 1];
                break;
            }

            if (i == this.animKeys.length - 1 && this.animKeys[i].time < time) { // later than last
                if (i - 1 > 0) key0 = this.animKeys[i - 1];
                key1 = this.animKeys[i];
                key2 = null;
                key3 = null;
                break;

            }

            if (this.animKeys[i].time > time &&
                (i - 1 < 0 || this.animKeys[i - 1].time < time)) {

                if (i - 2 > 0) key0 = this.animKeys[i - 2];
                key1 = this.animKeys[i - 1];
                key2 = this.animKeys[i];
                if (i + 1 < this.animKeys.length) key3 = this.animKeys[i + 1];
                break;
            }
        }

        // 2. only find one boundary
        if (!key1 || !key2) {
            resKey.copy(key1 ? key1 : key2);
            resKey.time = time;
            resKey._cacheKeyIdx = i;
            return resKey;
        }

        // 3. curve interpolation
        if (key1.type == AnimationKeyableType.NUM || key1.type == AnimationKeyableType.VEC) {
            resKey = AnimationCurve.cubicCardinal(key0, key1, key2, key3, time, this.tension);
            resKey.time = time;
            resKey._cacheKeyIdx = i;
            return resKey;
        }
        return null;
    };

    /**
     * @param {number} time
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.evalCUBICSPLINE_GLTF = function (time) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        // 1. find the interval [key1, key2]
        var resKey = new AnimationKeyable();
        var key1, key2;
        for (var i = 0; i < this.animKeys.length; i ++) {
            if (this.animKeys[i].time === time) {
                resKey.copy(this.animKeys[i]);
                return resKey;
            }

            if (this.animKeys[i].time > time) {
                key2 = this.animKeys[i];
                break;
            }
            key1 = this.animKeys[i];
        }

        // 2. only found one boundary
        if (!key1 || !key2) {
            resKey.copy(key1 ? key1 : key2);
            resKey.time = time;
            return resKey;
        }

        // 3. both found then interpolate
        var p = (time - key1.time) / (key2.time - key1.time);
        var g = key2.time - key1.time;
        if (this.keyableType === AnimationKeyableType.NUM) {
            resKey.value = AnimationCurve.cubicHermite(g * key1.outTangent, key1.value, g * key2.inTangent, key2.value, p);
        } else if (this.keyableType === AnimationKeyableType.VEC) {
            resKey.value.x = AnimationCurve.cubicHermite(g * key1.outTangent.x, key1.value.x, g * key2.inTangent.x, key2.value.x, p);
            resKey.value.y = AnimationCurve.cubicHermite(g * key1.outTangent.y, key1.value.y, g * key2.inTangent.y, key2.value.y, p);
            resKey.value.z = AnimationCurve.cubicHermite(g * key1.outTangent.z, key1.value.z, g * key2.inTangent.z, key2.value.z, p);
        } else if (this.keyableType === AnimationKeyableType.QUAT) {
            resKey.value.w = AnimationCurve.cubicHermite(g * key1.outTangent.w, key1.value.w, g * key2.inTangent.w, key2.value.w, p);
            resKey.value.x = AnimationCurve.cubicHermite(g * key1.outTangent.x, key1.value.x, g * key2.inTangent.x, key2.value.x, p);
            resKey.value.y = AnimationCurve.cubicHermite(g * key1.outTangent.y, key1.value.y, g * key2.inTangent.y, key2.value.y, p);
            resKey.value.z = AnimationCurve.cubicHermite(g * key1.outTangent.z, key1.value.z, g * key2.inTangent.z, key2.value.z, p);
            resKey.value.normalize();
        }

        resKey.time = time;
        return resKey;

    };

    /**
     * @param {number} time
     * @param {number} cacheKeyIdx
     * @param {AnimationKeyable} cacheValue
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.evalCUBICSPLINE_GLTF_cache = function (time, cacheKeyIdx, cacheValue) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        var begIdx = 0;
        if (cacheKeyIdx) begIdx = cacheKeyIdx;
        var i = begIdx;

        // 1. find the interval [key1, key2]
        var resKey = cacheValue;// new AnimationKeyable(); 1215
        var key1, key2;
        for (var c = 0; c < this.animKeys.length; c ++) {
            i = (begIdx + c) % this.animKeys.length;

            if (this.animKeys[i].time === time) {
                resKey.copy(this.animKeys[i]);
                resKey._cacheKeyIdx = i;
                return resKey;
            }

            if (i === 0 && this.animKeys[i].time > time) { // earlier than first
                key1 = null;
                key2 = this.animKeys[i];
                break;
            }

            if (i === this.animKeys.length - 1 && this.animKeys[i].time < time) { // later than last
                key1 = this.animKeys[i];
                key2 = null;
                break;

            }

            if (this.animKeys[i].time > time &&
                (i - 1 < 0 || this.animKeys[i - 1].time < time)) {
                key1 = this.animKeys[i - 1];
                key2 = this.animKeys[i];
                break;
            }
        }

        // 2. only found one boundary
        if (!key1 || !key2) {
            resKey.copy(key1 ? key1 : key2);
            resKey.time = time;
            resKey._cacheKeyIdx = i;
            return resKey;
        }

        // 3. both found then interpolate
        var p = (time - key1.time) / (key2.time - key1.time);
        var g = key2.time - key1.time;
        if (this.keyableType === AnimationKeyableType.NUM) {
            resKey.value = AnimationCurve.cubicHermite(g * key1.outTangent, key1.value, g * key2.inTangent, key2.value, p);
        } else if (this.keyableType === AnimationKeyableType.VEC) {
            resKey.value.x = AnimationCurve.cubicHermite(g * key1.outTangent.x, key1.value.x, g * key2.inTangent.x, key2.value.x, p);
            resKey.value.y = AnimationCurve.cubicHermite(g * key1.outTangent.y, key1.value.y, g * key2.inTangent.y, key2.value.y, p);
            resKey.value.z = AnimationCurve.cubicHermite(g * key1.outTangent.z, key1.value.z, g * key2.inTangent.z, key2.value.z, p);
        } else if (this.keyableType === AnimationKeyableType.QUAT) {
            resKey.value.w = AnimationCurve.cubicHermite(g * key1.outTangent.w, key1.value.w, g * key2.inTangent.w, key2.value.w, p);
            resKey.value.x = AnimationCurve.cubicHermite(g * key1.outTangent.x, key1.value.x, g * key2.inTangent.x, key2.value.x, p);
            resKey.value.y = AnimationCurve.cubicHermite(g * key1.outTangent.y, key1.value.y, g * key2.inTangent.y, key2.value.y, p);
            resKey.value.z = AnimationCurve.cubicHermite(g * key1.outTangent.z, key1.value.z, g * key2.inTangent.z, key2.value.z, p);
            resKey.value.normalize();
        }

        resKey.time = time;
        resKey._cacheKeyIdx = i;
        return resKey;
    };

    /**
     * @param {number} time
     * @param {number} cacheKeyIdx
     * @param {AnimationKeyable} cacheValue
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.eval_cache = function (time, cacheKeyIdx, cacheValue) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        switch (this.type) {
            case AnimationCurveType.LINEAR: return this.evalLINEAR_cache(time, cacheKeyIdx, cacheValue);
            case AnimationCurveType.STEP: return this.evalSTEP_cache(time, cacheKeyIdx, cacheValue);
            case AnimationCurveType.CUBIC:
                if (this.keyableType == AnimationKeyableType.QUAT)
                    return this.evalLINEAR_cache(time, cacheKeyIdx, cacheValue);
                return this.evalCUBIC_cache(time, cacheKeyIdx, cacheValue);
            case AnimationCurveType.CUBICSPLINE_GLTF:// 10/15, keyable contains (inTangent, value, outTangent)
                return this.evalCUBICSPLINE_GLTF_cache(time, cacheKeyIdx, cacheValue);
        }
        return null;
    };

    /**
     * @param {number} time
     * @returns {AnimationKeyable}
     */

    AnimationCurve.prototype.eval = function (time) {
        if (!this.animKeys || this.animKeys.length === 0)
            return null;

        switch (this.type) {
            case AnimationCurveType.LINEAR: return this.evalLINEAR(time);
            case AnimationCurveType.STEP: return this.evalSTEP(time);
            case AnimationCurveType.CUBIC:
                if (this.keyableType == AnimationKeyableType.QUAT)
                    return this.evalLINEAR(time);
                return this.evalCUBIC(time);
            case AnimationCurveType.CUBICSPLINE_GLTF:// 10/15, keyable contains (inTangent, value, outTangent)
                return this.evalCUBICSPLINE_GLTF(time);
        }
        return null;
    };

    /**
     * @param {number} t1
     * @param {number} v1
     * @param {number} t2
     * @param {number} v2
     * @param {number} p
     * @returns {number}
     * @summary static method: tangent 1, value 1, tangent 2, value 2, proportion
     */

    AnimationCurve.cubicHermite = function (t1, v1, t2, v2, p) {
        // basis
        var p2 = p * p;
        var p3 = p2 * p;
        var h0 = 2 * p3 - 3 * p2 + 1;
        var h1 = -2 * p3 + 3 * p2;
        var h2 = p3 - 2 * p2 + p;
        var h3 = p3 - p2;

        // interpolation
        return v1 * h0 + v2 * h1 + t1 * h2 + t2 * h3;
    };

    /**
     * @param {AnimationKeyable} key0
     * @param {AnimationKeyable} key1
     * @param {AnimationKeyable} key2
     * @param {AnimationKeyable} key3
     * @param {number} time
     * @param {number} tension
     * @param {AnimationKeyable} [cacheValue]
     * @returns {AnimationKeyable}
     * @summary static: only for num or vec
     */

    AnimationCurve.cubicCardinal = function (key0, key1, key2, key3, time, tension, cacheValue) {
        var m1, m2;

        if (!key1 || !key2 || key1.type != key2.type)
            return null;

        if (key1.type != AnimationKeyableType.NUM && key1.type != AnimationKeyableType.VEC)
            return null;

        var p = (time - key1.time) / (key2.time - key1.time);
        var resKey;
        if (cacheValue) resKey = cacheValue;
        else resKey = new AnimationKeyable(key1.type);

        // adjust for non-unit-interval
        var factor = tension * (key2.time - key1.time);
        if (key1.type === AnimationKeyableType.NUM) {
            m1 = factor * (key2.value - key1.value) / (key2.time - key1.time);
            if (key0)
                m1 = 2 * factor * (key2.value - key0.value) / (key2.time - key0.time);

            m2 = factor * (key2.value - key1.value) / (key2.time - key1.time);
            if (key3)
                m2 = 2 * factor * (key3.value - key1.value) / (key3.time - key1.time);
            resKey.value = AnimationCurve.cubicHermite(m1, key1.value, m2, key2.value, p);
        }

        // each element in vector, direct x, y, z, w
        if (key1.type === AnimationKeyableType.VEC) {
            resKey.value = key1.value.clone();
            var props = ["x", "y", "z", "w"];
            for (var i = 0; i < props.length; i ++) {
                var pr = props[i];
                if (resKey.value[pr] === undefined)
                    continue;
                m1 = factor * (key2.value[pr] - key1.value[pr]) / (key2.time - key1.time);
                if (key0)
                    m1 = 2 * factor * (key2.value[pr] - key0.value[pr]) / (key2.time - key0.time);

                m2 = factor * (key2.value[pr] - key1.value[pr]) / (key2.time - key1.time);
                if (key3)
                    m2 = 2 * factor * (key3.value[pr] - key1.value[pr]) / (key3.time - key1.time);
                resKey.value[pr] = AnimationCurve.cubicHermite(m1, key1.value[pr], m2, key2.value[pr], p);
            }
        }
        return resKey;
    };

    // *===============================================================================================================
    // * class AnimationClipSnapshot: animation clip slice (pose) at a particular time
    // * member
    // *       curveKeyable: the collection of evaluated keyables on curves at a particular time
    // * e.g.: for an "walking" clip of a character, at time 1s, AnimationClipSnapshot corresponds to
    // *       evaluated keyables that makes a arm-swing pose
    // *===============================================================================================================

    /**
     * @constructor
     */

    var AnimationClipSnapshot = function () {
        this.curveKeyable = {};// curveKeyable[curveName]=keyable
        this.curveNames = [];
    };

    /**
     * @param {AnimationClipSnapshot} shot
     */

    AnimationClipSnapshot.prototype.copy = function (shot) {
        if (!shot)
            return this;

        this.curveKeyable = {};
        this.curveNames = [];
        for (var i = 0; i < shot.curveNames.length; i ++) {
            var cname = shot.curveNames[i];
            this.curveKeyable[cname] = new AnimationKeyable().copy(shot.curveKeyable[cname]);
            this.curveNames.push(cname);
        }
        return this;
    };

    AnimationClipSnapshot.prototype.clone = function () {
        var cloned = new AnimationClipSnapshot().copy(this);
        return cloned;
    };

    /**
     * @param {AnimationClipSnapshot} shot1
     * @param {AnimationClipSnapshot} shot2
     * @param {number} p
     * @returns {AnimationClipSnapshot}
     * @summary static function: linear blending
     */

    AnimationClipSnapshot.linearBlend = function (shot1, shot2, p) {
        if (!shot1 || !shot2)
            return null;

        if (p === 0) return shot1;
        if (p === 1) return shot2;

        var resShot = new AnimationClipSnapshot();
        resShot.copy(shot1);
        for (var i = 0; i < shot2.curveNames.length; i ++) {
            var cname = shot2.curveNames[i];
            if (shot1.curveKeyable[cname] && shot2.curveKeyable[cname]) {
                var resKey = AnimationKeyable.linearBlend(shot1.curveKeyable[cname], shot2.curveKeyable[cname], p);
                resShot.curveKeyable[cname] = resKey;
            } else if (shot1.curveKeyable[cname])
                resShot.curveKeyable[cname] = shot1.curveKeyable[cname];
            else if (shot2.curveKeyable[cname])
                resShot.curveKeyable[cname] = shot2.curveKeyable[cname];
        }
        return resShot;
    };

    /**
     * @param {AnimationClipSnapshot} shot1
     * @param {AnimationClipSnapshot} shot2
     * @param {number} p
     * @param {AnimationCurveMap} animCurveMap
     * @returns {AnimationClipSnapshot}
     * @summary static function: linear blending except for step curve
     */

    AnimationClipSnapshot.linearBlendExceptStep = function (shot1, shot2, p, animCurveMap) {
        if (!shot1 || !shot2)
            return null;

        if (p === 0) return shot1;
        if (p === 1) return shot2;

        var resShot = new AnimationClipSnapshot();
        resShot.copy(shot1);
        for (var i = 0; i < shot2.curveNames.length; i ++) {
            var cname = shot2.curveNames[i];
            if (shot1.curveKeyable[cname] && shot2.curveKeyable[cname]) {
                if (animCurveMap[cname] && animCurveMap[cname].type === AnimationCurveType.STEP) {
                    if (p > 0.5) resShot.curveKeyable[cname] = shot2.curveKeyable[cname];
                    else resShot.curveKeyable[cname] = shot1.curveKeyable[cname];
                } else {
                    var resKey = AnimationKeyable.linearBlend(shot1.curveKeyable[cname], shot2.curveKeyable[cname], p);
                    resShot.curveKeyable[cname] = resKey;
                }
            } else if (shot1.curveKeyable[cname])
                resShot.curveKeyable[cname] = shot1.curveKeyable[cname];
            else if (shot2.curveKeyable[cname])
                resShot.curveKeyable[cname] = shot2.curveKeyable[cname];
        }
        return resShot;
    };

    // *===============================================================================================================
    // * class AnimationClip:
    // * member
    // *       name: name of this animation clip
    // *       animCurves: an array of curves in the clip, each curve corresponds to one channel along timeline
    // *
    // * e.g.:   for an animation clip of a character, name = "walk"
    // *       each joint has one curve with keys on timeline, thus animCurves stores curves of all joints
    // *===============================================================================================================

    /**
     * @constructor
     * @param {pc.GraphNode} [root]
     */

    var AnimationClip = function (root) {
        AnimationClip.count ++;
        this.name = "clip" + AnimationClip.count.toString();
        this.duration = 0;
        this.animCurvesMap = {}; // a map for easy query
        this.animCurves = [];
        this.root = null;
        if (root) {
            this.root = root;
            this.constructFromRoot(root);
        }

        this.session = new AnimationSession(this);
    };
    AnimationClip.count = 0;

    // getter setter
    Object.defineProperty(AnimationClip.prototype, 'isPlaying', {
        get: function () {
            return this.session.isPlaying;
        },
        set: function (isPlaying) {
            this.session.isPlaying = isPlaying;
        }
    });
    Object.defineProperty(AnimationClip.prototype, 'loop', {
        get: function () {
            return this.session.loop;
        },
        set: function (loop) {
            this.session.loop = loop;
        }
    });
    Object.defineProperty(AnimationClip.prototype, 'bySpeed', {
        get: function () {
            return this.session.bySpeed;
        },
        set: function (bySpeed) {
            this.session.bySpeed = bySpeed;
        }
    });

    /**
     * @param {AnimationClip} clip
     * @returns {AnimationClip}
     */

    AnimationClip.prototype.copy = function (clip) {
        this.name = clip.name;
        this.duration = clip.duration;

        // copy curves
        this.animCurves.length = 0;
        this.animCurvesMap = {};

        for (var i = 0, len = clip.animCurves.length; i < len; i++) {
            var curve = clip.animCurves[i];
            this.addCurve(curve.clone());
        }

        return this;
    };

    AnimationClip.prototype.clone = function () {
        return new AnimationClip().copy(this);
    };

    AnimationClip.prototype.updateDuration = function () {
        this.duration = 0;
        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            this.duration = Math.max(this.duration, curve.duration);
        }
    };

    /**
     * @param {number} time
     * @param {number} fadeDir
     * @param {number} fadeBegTime
     * @param {number} fadeEndTime
     * @param {number} fadeTime
     */

    AnimationClip.prototype.showAt = function (time, fadeDir, fadeBegTime, fadeEndTime, fadeTime) {
        this.session.showAt(time, fadeDir, fadeBegTime, fadeEndTime, fadeTime);
    };

    /**
     * @param {AnimationClipSnapshot} snapshot
     * @param {number} p
     */

    AnimationClip.prototype.blendToTarget = function (snapshot, p) {
        this.session.blendToTarget(snapshot, p);
    };

    /**
     * @param {AnimationClipSnapshot} snapshot
     */

    AnimationClip.prototype.updateToTarget = function (snapshot) {
        this.session.updateToTarget(snapshot);
    };

    // a dictionary: retrieve animTargets with curve name
    /**
     * @returns {AnimationTargetsMap}
     */
    AnimationClip.prototype.getAnimTargets = function () {
        /** @type {AnimationTargetsMap} */
        var animTargets = {};
        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            var curveTarget = curve.getAnimTargets();
            animTargets[curve.name] = curveTarget[curve.name];
        }
        return animTargets;
    };

    AnimationClip.prototype.resetSession = function () {
        this.session.playable = this;
        this.session.animTargets = this.getAnimTargets();
        this.session.isPlaying = true;
        this.session.begTime = 0;
        this.session.endTime = this.duration;
        this.session.curTime = 0;
        this.session.bySpeed = 1;
        this.session.loop = true;
    };

    AnimationClip.prototype.play = function () {
        this.session.play(this);
    };

    AnimationClip.prototype.stop = function () {
        this.session.stop();
    };

    AnimationClip.prototype.pause = function () {
        this.session.pause();
    };

    AnimationClip.prototype.resume = function () {
        this.session.resume();
    };

    /**
     * @param {number} duration
     */

    AnimationClip.prototype.fadeIn = function (duration) {
        this.session.fadeIn(duration, this);
    };

    /**
     * @param {number} duration
     */

    AnimationClip.prototype.fadeOut = function (duration) {
        this.session.fadeOut(duration);
    };

    /**
     * @param {AnimationClip} toClip
     * @param {number} duration
     */

    AnimationClip.prototype.fadeTo = function (toClip, duration) {
        this.session.fadeTo(toClip, duration);
    };

    // curve related

    /**
     * @param {AnimationCurve} curve
     */

    AnimationClip.prototype.addCurve = function (curve) {
        if (curve && curve.name) {
            this.animCurves.push(curve);
            this.animCurvesMap[curve.name] = curve;
            if (curve.duration > this.duration)
                this.duration = curve.duration;
        }
    };

    /**
     * @param {String} name
     */

    AnimationClip.prototype.removeCurve = function (name) {
        if (name) {
            var curve = this.animCurvesMap[name];
            if (curve) {
                var idx = this.animCurves.indexOf(curve);
                if (idx !== -1) {
                    this.animCurves.splice(idx, 1);
                }
                delete this.animCurvesMap[name];
                this.updateDuration();
            }
        }
    };

    AnimationClip.prototype.removeAllCurves = function () {
        this.animCurves.length = 0;
        this.animCurvesMap = {};

        this.duration = 0;
    };


    // events related

    /**
     * @param {String} name
     * @param {number} time
     * @param {AnimationEventCallback} fnCallback
     * @param {any} context
     * @param {any} parameter
     */

    AnimationClip.prototype.on = function (name, time, fnCallback, context, parameter) {
        if (this.session)
            this.session.on(name, time, fnCallback, context, parameter);
        return this;
    };

    /**
     * @param {String} name
     * @param {number} time
     * @param {AnimationEventCallback} fnCallback
     */

    AnimationClip.prototype.off = function (name, time, fnCallback) {
        if (this.session)
            this.session.off(name, time, fnCallback);
        return this;
    };

    AnimationClip.prototype.removeAllEvents = function () {
        if (this.session)
            this.session.removeAllEvents();
        return this;
    };

    // clip related

    /**
     * @param {number} tmBeg
     * @param {number} tmEnd
     * @returns {AnimationClip}
     */

    AnimationClip.prototype.getSubClip = function (tmBeg, tmEnd) {
        var subClip = new AnimationClip();
        subClip.name = this.name + "_sub";
        subClip.root = this.root;

        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            var subCurve = curve.getSubCurve(tmBeg, tmEnd);
            subClip.addCurve(subCurve);
        }

        return subClip;
    };

    /**
     * @param {number} time
     * @param {MapStringToNumber} cacheKeyIdx
     * @param {AnimationClipSnapshot} cacheValue
     * @returns {AnimationClipSnapshot}
     */

    AnimationClip.prototype.eval_cache = function (time, cacheKeyIdx, cacheValue) { // 1226
        if (!cacheValue) {
            var ret = this.eval();
            ret._cacheKeyIdx = cacheKeyIdx;
            return ret;
        }

        var snapshot = cacheValue;
        snapshot.time = time;

        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            var ki;
            if (cacheKeyIdx) ki = cacheKeyIdx[curve.name];
            var kv;
            if (cacheValue) kv = cacheValue.curveKeyable[curve.name];
            else kv = new AnimationKeyable(curve.keyableType);
            var keyable = curve.eval_cache(time, ki, kv);// 0210
            if (cacheKeyIdx && keyable) cacheKeyIdx[curve.name] = keyable._cacheKeyIdx;
            snapshot.curveKeyable[curve.name] = keyable;
        }
        snapshot._cacheKeyIdx = cacheKeyIdx;
        return snapshot;
    };

    // take a snapshot of clip at this moment

    /**
     * @param {number} [time]
     * @returns {AnimationClipSnapshot}
     */

    AnimationClip.prototype.eval = function (time) {
        var snapshot = new AnimationClipSnapshot();
        snapshot.time = time;

        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            var keyable = curve.eval(time);
            snapshot.curveKeyable[curve.name] = keyable;
            snapshot.curveNames.push(curve.name);// 1226
        }
        return snapshot;
    };

    /**
     * @param {pc.GraphNode} root
     */

    AnimationClip.prototype.constructFromRoot = function (root) {
        if (!root)
            return;

        // scale
        var curveScale = new AnimationCurve();
        curveScale.keyableType = AnimationKeyableType.VEC;
        curveScale.name = root.name + ".localScale";
        curveScale.setTarget(root, "localScale");
        this.addCurve(curveScale);

        // translate
        var curvePos = new AnimationCurve();
        curvePos.keyableType = AnimationKeyableType.VEC;
        curvePos.name = root.name + ".localPosition";
        curvePos.setTarget(root, "localPosition");
        this.addCurve(curvePos);

        // rotate
        var curveRotQuat = new AnimationCurve();
        curveRotQuat.name = root.name + ".localRotation.quat";
        curveRotQuat.keyableType = AnimationKeyableType.QUAT;
        curveRotQuat.setTarget(root, "localRotation");
        this.addCurve(curveRotQuat);

        // children
        for (var i = 0; i < root.children.length; i ++)
            if (root.children[i]) this.constructFromRoot(root.children[i]);
    };

    /*
    //this animation clip's target will now to root
    //Note that animationclip's original target may be on different scale from new root, for "localPosition", this needs to be adjusted
    //Example: animation clip is made under AS scale,
    //         AS will never change no matter how many times this animation clip is transferred, because it is bound with how it is made
    //         when it is transferred to a new root, which is under RS scale, define standard scale SS=1,
    //thus
    //         standardPos = curvePos / AS;          converting curvePos from AS to SS
    //         newRootPos = standardPos * RS;        converting position under SS to new RS
    //thus
    //         target.vScale = RS / AS;              how to update curve pos to target
    //         newRootPos = curvePos * target.vScale
    //
    //given animation clip, it maybe transferred multiple times, and its original AS is unknown, to recover AS, we have
    //                      RS (scale of current root in scene) and
    //                      vScale (scale of animation curve's value update to target)
    //thus
    //         AS = RS / vScale;
    //
    //to transfer again to a new root with scale NS
    //
    //         standardPos = curvePos / AS = curvePos * vScale / RS
    //         newTargetPos = standardPos * NS = curvePos * vScale * NS / RS
    //
    //thus
    //         newTarget.vScale = NS / AS = vScale * NS / RS;
    //
    */

    /**
     * @param {pc.GraphNode} root
     */

    AnimationClip.prototype.transferToRoot = function (root) {
        var cScale = new pc.Vec3();
        var dictTarget = {};
        AnimationTarget.constructTargetNodes(root, null, dictTarget);// contains localScale information

        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            if (curve.animTargets.length === 0) {
                continue;
            }

            // ctrl-drag target root is specified as "model"
            // link targetNode to root properly
            if (curve.animTargets[0].targetNode === "model")
                curve.animTargets[0].targetNode = root;

            var ctarget = curve.animTargets[0];
            var atarget = dictTarget[ctarget.targetNode.name];
            if (atarget) { // match by target name
                AnimationTarget.getLocalScale(ctarget.targetNode, cScale);
                ctarget.targetNode = atarget.targetNode; // atarget contains scale information
                if (atarget.vScale) {
                    ctarget.vScale = cScale.clone();
                    if (atarget.vScale.x) ctarget.vScale.x /= atarget.vScale.x;
                    if (atarget.vScale.y) ctarget.vScale.y /= atarget.vScale.y;
                    if (atarget.vScale.z) ctarget.vScale.z /= atarget.vScale.z;
                }
            } // else // not found
                // console.warn("transferToRoot: " + ctarget.targetNode.name + "in animation clip " + this.name + " has no transferred target under " + root.name);
        }
    };

    // blend related
    AnimationClip.prototype.updateCurveNameFromTarget = function () {
        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            if (!curve.animTargets || curve.animTargets.length < 1)
                continue;

            // change name to target string
            var oldName = curve.name;// backup before change
            var newName = curve.animTargets[0].toString();
            if (oldName == newName)// no need to change name
                continue;

            curve.name = newName;
            delete this.animCurvesMap[oldName];
            this.animCurvesMap[newName] = curve;
        }
    };

    AnimationClip.prototype.removeEmptyCurves = function () {
        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            if (!curve || !curve.animKeys || curve.animKeys.length === 0) {
                this.removeCurve(curve.name);
            }
        }
    };

    /**
     * @param {AnimationCurveType} type
     */

    AnimationClip.prototype.setInterpolationType = function (type) {
        for (var i = 0, len = this.animCurves.length; i < len; i++) {
            var curve = this.animCurves[i];
            if (curve) {
                curve.type = type;
            }
        }
    };

    /**
     * @constructor
     * @param {String} name
     * @param {number} time
     * @param {AnimationEventCallback} fnCallback
     * @param {any} context
     * @param {any} parameter
     */

    var AnimationEvent = function (name, time, fnCallback, context, parameter) {
        this.name = name;
        this.triggerTime = time;
        this.fnCallback = fnCallback;
        this.context = context || this;
        this.parameter = parameter;

        this.triggered = false;
    };

    AnimationEvent.prototype.invoke = function () {
        if (this.fnCallback) {
            this.fnCallback.call(this.context, this.parameter);
            this.triggered = true;
        }
    };

    /*
    // note: used in line 2127, but undefined... never used so far
    AnimationEvent.prototype.clone = function () {
        return new pcAnimationEvent(
            this.name,
            this.triggerTime,
            this.fnCallback,
            this.context,
            this.parameter
        );
    }
    */

    // *===============================================================================================================
    // * class AnimationSession: playback/runtime related thing
    //                           AnimationCurve and AnimationClip are both playable, they are animation data container
    //                           AnimationSession is the runtime play of curve/clip
    //                           one clip can be played by multiple AnimationSession simultaneously
    // *===============================================================================================================

    /**
     * @constructor
     * @param {Playable} [playable]
     * @param {AnimationTargetsMap} [targets]
     */

    var AnimationSession = function AnimationSession(playable, targets) {
        this._cacheKeyIdx = undefined;// integer if playable is curve, object {} if playable is clip
        this._cacheValue = undefined;// 1215, keyable if playable is curve, snapshot if playable is clip, all pre allocated
        this._cacheBlendValues = {};// 1226

        this.begTime = -1;
        this.endTime = -1;
        this.curTime = 0;
        this.accTime = 0;// accumulate time since playing
        this.bySpeed = 1;
        this.isPlaying = false;
        this.loop = false;

         // fade related
        this.fadeBegTime = -1;
        this.fadeEndTime = -1;
        this.fadeTime = -1;
        this.fadeDir = 0;// 1 is in, -1 is out
        this.fadeSpeed = 1;
        /* fadeIn, speed starts 0
        fadeOut from fully-playing session, speed starts 1
        fadeOut from previously unfinished fading session, speed starts from value (0,1)
        this is solving such situation: session fadeIn a small amount unfinished yet, and it now fadeOut(it should not start updating 100% to target) */

        this.playable = null;
        this.animTargets = {};
        if (playable) {
            this.playable = playable;// curve or clip
            this.allocateCache();
            if (!targets)
                this.animTargets = playable.getAnimTargets();
        }
        if (targets)
            this.animTargets = targets;// collection of AnimationTarget

        this.animEvents = [];

        // blend related==========================================================
        this.blendables = {};
        this.blendWeights = {};

        // ontimer function for playback
        var self = this;
        this.onTimer = function (/** @type {number} */dt) {
            self.curTime += (self.bySpeed * dt);
            self.accTime += (self.bySpeed * dt);

            if (!self.isPlaying ||// not playing
                (!self.loop && (self.curTime < self.begTime || self.curTime > self.endTime))){ // not in range
                self.invokeByTime(self.curTime);
                self.stop();
                self.invokeByName("stop");
                return;
            }

            // round time to duration
            var duration = self.endTime - self.begTime;
            if (self.curTime > self.endTime) { // loop start
                self.invokeByTime(self.curTime);
                self.curTime -= duration;
                for (var i = 0; i < self.animEvents.length; i ++)
                    self.animEvents[i].triggered = false;
            }
            if (self.curTime < self.begTime)
                self.curTime += duration;

            if (self.fadeDir) {
                self.fadeTime +=  dt;// (self.bySpeed * dt);
                if (self.fadeTime >= self.fadeEndTime) {
                    if (self.fadeDir === 1) { // fadein completed
                        self.fadeDir = 0;
                        self.fadeBegTime = -1;
                        self.fadeEndTime = -1;
                        self.fadeTime = -1;
                    } else if (self.fadeDir === -1) { // fadeout completed
                        self.stop();
                        return;
                    }
                }
            }

            self.showAt(self.curTime, self.fadeDir, self.fadeBegTime, self.fadeEndTime, self.fadeTime);
            self.invokeByTime(self.curTime);
        };
    };

    /**
     * @param {Playable} playable
     * @returns {AnimationKeyable | AnimationClipSnapshot}
     */

    AnimationSession._allocatePlayableCache = function (playable) {
        if (!playable)
            return null;

        if (playable instanceof AnimationCurve) {
            return new AnimationKeyable(playable.keyableType);
        } else if (playable instanceof AnimationClip) {
            var snapshot = new AnimationClipSnapshot();
            for (var i = 0, len = playable.animCurves.length; i < len; i++) {
                var cname = playable.animCurves[i].name;
                snapshot.curveKeyable[cname] = new AnimationKeyable(playable.animCurves[i].keyableType);
                snapshot.curveNames.push(cname);
            }
            return snapshot;
        }
        return null;
    };

    AnimationSession.prototype.allocateCache = function () { // 1215
        if (!this.playable)
            return;

        if (this.playable instanceof AnimationCurve) this._cacheKeyIdx = 0;
        else if (this.playable instanceof AnimationClip) this._cacheKeyIdx = {};

        this._cacheValue = AnimationSession._allocatePlayableCache(this.playable);
    };

    AnimationSession.prototype.clone = function () {
        var i, key;
        var cloned = new AnimationSession();

        cloned.begTime = this.begTime;
        cloned.endTime = this.endTime;
        cloned.curTime = this.curTime;
        cloned.accTime = this.accTime;
        cloned.speed = this.speed;
        cloned.loop = this.loop;
        cloned.isPlaying = this.isPlaying;

        // fading
        cloned.fadeBegTime = this.fadeBegTime;
        cloned.fadeEndTime = this.fadeEndTime;
        cloned.fadeTime = this.fadeTime;
        cloned.fadeDir = this.fadeDir;// 1 is in, -1 is out
        cloned.fadeSpeed = this.fadeSpeed;

        cloned.playable = this.playable;
        cloned.allocateCache();// 1215

        // targets
        cloned.animTargets = {};
        for (key in this.animTargets) {
            if (!this.animTargets.hasOwnProperty(key)) continue;
            var ttargets = this.animTargets[key];
            var ctargets = [];
            for (i = 0; i < ttargets.length; i++) {
                ctargets.push(ttargets[i].clone());
            }
            cloned.animTargets[key] = ctargets;
        }

        // events
        cloned.animEvents = [];
        for (i = 0; i < this.animEvents.length; i ++)
            cloned.animEvents.push(this.animEvents[i].clone());

        // blending
        cloned.blendables = {};
        for (key in this.blendables) {
            if (this.blendables.hasOwnProperty(key)) {
                cloned.blendables[key] = this.blendables[key];
                cloned._cacheBlendValues[key] = AnimationSession._allocatePlayableCache(this.blendables[key]);// 1226, only animationclip has a snapshot cache, otherwise null
            }
        }

        cloned.blendWeights = {};
        for (key in this.blendWeights)
            if (this.blendWeights.hasOwnProperty(key))
                cloned.blendWeights[key] = this.blendWeights[key];

        return cloned;
    };

    // blend related==========================================================

    /**
     * @param {BlendValue} blendValue
     * @param {number} weight
     * @param {String} curveName
     */

    AnimationSession.prototype.setBlend = function (blendValue, weight, curveName){
        if (blendValue instanceof AnimationClip){
            if (!curveName || curveName === "")
                curveName = "__default__";
            this.blendables[curveName] = blendValue;
            this._cacheBlendValues[curveName] = AnimationSession._allocatePlayableCache(blendValue);// 1226
            this.blendWeights[curveName] = weight;
            return;
        }

        // blendable is just a single DOF=================================
        var keyType;
        if (typeof blendValue === "number")// 1 instanceof Number is false, don't know why
            keyType =  AnimationKeyableType.NUM;
        else if (blendValue instanceof pc.Vec3)
            keyType = AnimationKeyableType.VEC;
        else if (blendValue instanceof pc.Quat)
            keyType = AnimationKeyableType.QUAT;

        if (!curveName || curveName === "" || typeof keyType === "undefined")// has to specify curveName
            return;

        this.blendWeights[curveName] = weight;
        this.blendables[curveName] = new AnimationKeyable(keyType, 0, blendValue);
        this._cacheBlendValues[curveName] = null;// 1226, null if blendable is not animationclip
    };

    /**
     * @param {String} curveName
     */

    AnimationSession.prototype.unsetBlend = function (curveName) {
        if (!curveName || curveName === "")
            curveName = "__default__";

        // unset blendvalue
        if (this.blendables[curveName]) {
            delete this.blendables[curveName];
            delete this._cacheBlendValues[curveName]; // 1226
            delete this.blendWeights[curveName];
        }
    };

    // events related

    /**
     * @param {String} name
     * @param {number} time
     * @param {AnimationEventCallback} fnCallback
     * @param {any} context
     * @param {any} parameter
     */

    AnimationSession.prototype.on = function (name, time, fnCallback, context, parameter) {
        if (!name || !fnCallback)
            return;

        var event = new AnimationEvent(name, time, fnCallback, context, parameter);
        var pos = 0;
        for (; pos < this.animEvents.length; pos ++) {
            if (this.animEvents[pos].triggerTime > time)
                break;
        }

        if (pos >= this.animEvents.length)
            this.animEvents.push(event);
        else
            this.animEvents.splice(pos, 0, event);
    };

    /**
     * @param {String} name
     * @param {number} time
     * @param {AnimationEventCallback} fnCallback
     */

    AnimationSession.prototype.off = function (name, time, fnCallback) {
        var pos = 0;
        for ( ; pos < this.animEvents.length; pos ++) {
            var event = this.animEvents[pos];
            if (!event) continue;
            if (event.name === name && event.fnCallback === fnCallback)
                break;

            if (event.triggerTime === time && event.fnCallback === fnCallback)
                break;
        }

        if (pos < this.animEvents.length)
            this.animEvents.splice(pos, 1);
    };

    AnimationSession.prototype.removeAllEvents = function () {
        this.animEvents = [];
    };

    /**
     * @param {String} name
     */

    AnimationSession.prototype.invokeByName = function (name) {
        for (var i = 0; i < this.animEvents.length; i ++) {
            if (this.animEvents[i] && this.animEvents[i].name === name) {
                this.animEvents[i].invoke();
            }
        }
    };

    /**
     * @param {number} time
     */

    AnimationSession.prototype.invokeByTime = function (time) {
        for (var i = 0; i < this.animEvents.length; i ++) {
            if (!this.animEvents[i])
                continue;

            if (this.animEvents[i].triggerTime > time)
                break;

            if (!this.animEvents[i].triggered)
                this.animEvents[i].invoke();

        }
    };

    /**
     * @param {AnimationInput} input
     * @param {number} p
     */

    AnimationSession.prototype.blendToTarget = function (input, p) {
        var i, j;
        var cname, ctargets, blendUpdateNone;
        var eBlendType = { PARTIAL_BLEND: 0, FULL_UPDATE: 1, NONE: 2 };

        if (!input || p > 1 || p <= 0)// p===0 remain prev
            return;

        if (p === 1) {
            this.updateToTarget(input);
            return;
        }

        // playable is a curve, input is a AnimationKeyable, animTargets is an object {curvename:[]targets}
        if (this.playable instanceof AnimationCurve && input instanceof AnimationKeyable) {
            cname = this.playable.name;
            ctargets = this.animTargets[cname];
            if (!ctargets)
                return;

            // 10/10, if curve is step, let's not blend
            blendUpdateNone = eBlendType.PARTIAL_BLEND;
            if (this.playable.type === AnimationCurveType.STEP && this.fadeDir) {
                if ((this.fadeDir == -1 && p <= 0.5) || (this.fadeDir == 1 && p > 0.5)) blendUpdateNone = eBlendType.FULL_UPDATE;
                else blendUpdateNone = eBlendType.NONE;
            }

            for (j = 0; j < ctargets.length; j ++) {
                if (blendUpdateNone === eBlendType.PARTIAL_BLEND) ctargets[j].blendToTarget(input.value, p);
                else if (blendUpdateNone === eBlendType.FULL_UPDATE) ctargets[j].updateToTarget(input.value);
            }
            return;
        }

        // playable is a clip, input is a AnimationClipSnapshot, animTargets is an object {curvename1:[]targets, curvename2:[]targets, curvename3:[]targets}
        if (this.playable instanceof AnimationClip && input instanceof AnimationClipSnapshot) {
            for (i = 0; i < input.curveNames.length; i ++) {
                cname = input.curveNames[i];
                if (!cname) continue;

                blendUpdateNone = eBlendType.PARTIAL_BLEND;
                if (this.playable.animCurvesMap[cname] && this.playable.animCurvesMap[cname].type === AnimationCurveType.STEP && this.fadeDir) {
                    if ((this.fadeDir == -1 && p <= 0.5) || (this.fadeDir == 1 && p > 0.5)) blendUpdateNone = eBlendType.FULL_UPDATE;
                    else blendUpdateNone = eBlendType.NONE;
                }

                ctargets = this.animTargets[cname];
                if (!ctargets) continue;

                for (j = 0; j < ctargets.length; j ++) {
                    if (blendUpdateNone === eBlendType.PARTIAL_BLEND) ctargets[j].blendToTarget(input.curveKeyable[cname].value, p);
                    else if (blendUpdateNone === eBlendType.FULL_UPDATE) ctargets[j].updateToTarget(input.value);
                }
            }
        }
    };

    /**
     * @param {AnimationInput} input
     */

    AnimationSession.prototype.updateToTarget = function (input) {
        var i, j;
        var cname, ctargets;

        if (!input)
            return;

        // playable is a curve, input is a AnimationKeyable
        if (this.playable instanceof AnimationCurve && input instanceof AnimationKeyable) {
            cname = this.playable.name;
            ctargets = this.animTargets[cname];
            if (!ctargets)
                return;

            for (j = 0; j < ctargets.length; j ++)
                ctargets[j].updateToTarget(input.value);
            return;
        }

        // playable is a clip, input is a AnimationClipSnapshot
        if (this.playable instanceof AnimationClip && input instanceof AnimationClipSnapshot) {
            for (i = 0; i < input.curveNames.length; i ++) {
                cname = input.curveNames[i];
                if (!cname) continue;
                ctargets = this.animTargets[cname];
                if (!ctargets) continue;

                for (j = 0; j < ctargets.length; j ++) {
                    if (input.curveKeyable[cname]) {
                        ctargets[j].updateToTarget(input.curveKeyable[cname].value);
                    }
                }
            }
        }
    };

    /**
     * @param {number} time
     * @param {number} fadeDir
     * @param {number} fadeBegTime
     * @param {number} fadeEndTime
     * @param {number} fadeTime
     */

    AnimationSession.prototype.showAt = function (time, fadeDir, fadeBegTime, fadeEndTime, fadeTime) {
        var p;
        var input = this.playable.eval_cache(time, this._cacheKeyIdx, this._cacheValue);
        if (input)
            this._cacheKeyIdx = input._cacheKeyIdx;
        // blend related==========================================================
        // blend animations first
        for (var bname in this.blendables) {
            if (!this.blendables.hasOwnProperty(bname)) continue;
            p = this.blendWeights[bname];
            var blendClip = this.blendables[bname];
            if (blendClip && (blendClip instanceof AnimationClip) && (typeof p === "number")) {
                var blendInput = blendClip.eval_cache(this.accTime % blendClip.duration, null, this._cacheBlendValues[bname]);
                input = AnimationClipSnapshot.linearBlendExceptStep(input, blendInput, p, this.playable.animCurvesMap);
            }
        }
        // blend custom bone second
        for (var cname in this.blendables) {
            if (!this.blendables.hasOwnProperty(cname)) continue;
            p = this.blendWeights[cname];
            var blendkey = this.blendables[cname];
            if (!blendkey || !input.curveKeyable[cname] || (blendkey instanceof AnimationClip))
                continue;
            var resKey = AnimationKeyable.linearBlend(input.curveKeyable[cname], blendkey, p);
            input.curveKeyable[cname] = resKey;
        }

        if (fadeDir === 0 || fadeTime < fadeBegTime || fadeTime > fadeEndTime)
            this.updateToTarget(input);
        else {
            p = (fadeTime - fadeBegTime) / (fadeEndTime - fadeBegTime);
            if (fadeDir === -1)
                p = 1 - p;

            if (this.fadeSpeed < 1 && fadeDir === -1) { // fadeOut from non-100%
                p *= this.fadeSpeed;
            }

            this.blendToTarget(input, p);
        }
    };

    /**
     * @param {Playable} [playable]
     * @param {AnimationTargetsMap} [animTargets]
     * @returns {AnimationSession}
     */

    AnimationSession.prototype.play = function (playable, animTargets) {
        var i;

        if (playable) {
            this.playable = playable;
            this.allocateCache();
        }

        if (!(this.playable instanceof AnimationClip) && !(this.playable instanceof AnimationCurve))
            return this;

        if (this.isPlaying)// already playing
            return this;

        this.begTime = 0;
        this.endTime = this.playable.duration;
        this.curTime = 0;
        this.accTime = 0;
        this.isPlaying = true;
        if (playable && this !== playable.session) {
            this.bySpeed = playable.bySpeed;
            this.loop = playable.loop;
        }

        if (!animTargets && playable && typeof playable.getAnimTargets === "function")
            this.animTargets = playable.getAnimTargets();
        else if (animTargets)
            this.animTargets = animTargets;

        // reset events
        for (i = 0; i < this.animEvents.length; i ++)
            this.animEvents[i].triggered = false;

        var app = pc.Application.getApplication();
        app.on('update', this.onTimer);
        this.showAt(this.curTime, this.fadeDir, this.fadeBegTime, this.fadeEndTime, this.fadeTime);
        return this;
    };

    AnimationSession.prototype.stop = function () {
        var app = pc.Application.getApplication();
        app.off('update', this.onTimer);
        this.curTime = 0;
        this.isPlaying = false;
        this.fadeBegTime = -1;
        this.fadeEndTime = -1;
        this.fadeTime = -1;
        this.fadeDir = 0;
        this.fadeSpeed = 1;
        return this;
    };

    AnimationSession.prototype.pause = function () {
        var app = pc.Application.getApplication();
        app.off('update', this.onTimer);
        this.isPlaying = false;
        return this;
    };

    AnimationSession.prototype.resume = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            var app = pc.Application.getApplication();
            app.on('update', this.onTimer);
        }
    };

    /**
     * @param {number} duration
     */

    AnimationSession.prototype.fadeOut = function (duration) {
        if (this.fadeDir === 0) // fade out from normal playing session
            this.fadeSpeed = 1;
        else if (this.fadeDir === 1) // fade out from session in the middle of fading In
            this.fadeSpeed = (this.fadeTime - this.fadeBegTime) / (this.fadeEndTime - this.fadeBegTime);
        else // fade out from seesion that is fading out
            return;//

        if (typeof duration !== "number")
            duration = 0;

        this.fadeBegTime = this.curTime;
        this.fadeTime = this.fadeBegTime;
        this.fadeEndTime = this.fadeBegTime + duration;
        this.fadeDir = -1;
    };

    /**
     * @param {number} duration
     * @param {Playable} [playable]
     */

    AnimationSession.prototype.fadeIn = function (duration, playable) {
        if (this.isPlaying) {
            this.stop();
        }
        this.fadeSpeed = 0;
        this.curTime = 0;
        if (typeof duration !== "number")
            duration = 0;

        this.fadeBegTime = this.curTime;
        this.fadeTime = this.fadeBegTime;
        this.fadeEndTime = this.fadeBegTime + duration;
        this.fadeDir = 1;
        if (playable) {
            this.playable = playable;
            this.allocateCache();
        }
        this.play(playable);
    };

    /**
     * @param {Playable} playable
     * @param {number} duration
     */

    AnimationSession.prototype.fadeTo = function (playable, duration) {
        this.fadeOut(duration);
        var session = new AnimationSession();
        session.fadeIn(duration, playable);
        return session;
    };

    /**
     * @param {number} duration
     */

    AnimationSession.prototype.fadeToSelf = function (duration) {
        var session = this.clone();
        var app = pc.Application.getApplication();
        app.off('update', this.onTimer);
        session.fadeOut(duration);

        this.stop();
        this.fadeIn(duration);
    };

    // *===============================================================================================================
    // * class AnimationComponent:
    // * member
    // *       animClips: dictionary type, query animation clips animClips[clipName]
    // *
    // *===============================================================================================================

    /**
     * @constructor
     */

    var AnimationComponent = function () {
        this.name = "";
        this.animClipsMap = {}; // make it a map, easy to query clip by name
        this.animClips = [];
        this.curClip = "";

        // For storing AnimationSessions
        this.animSessions = {};
    };

    /**
     * @returns {number}
     */

    AnimationComponent.prototype.clipCount = function () {
        return this.animClips.length;
    };

    /**
     * @returns {AnimationClip}
     */

    AnimationComponent.prototype.getCurrentClip = function () {
        return this.animClipsMap[this.curClip];
    };

    /**
     * @param {number} index
     * @returns {AnimationClip}
     */

    AnimationComponent.prototype.clipAt = function (index) {
        if (this.animClips.length <= index)
            return null;
        return this.animClips[index];
    };

    /**
     * @param {AnimationClip} clip
     */

    AnimationComponent.prototype.addClip = function (clip) {
        if (clip && clip.name) {
            this.animClips.push(clip);
            this.animClipsMap[clip.name] = clip;
        }
    };

    /**
     * @param {String} name
     */

    AnimationComponent.prototype.removeClip = function (name) {
        var clip = this.animClipsMap[name];
        if (clip) {
            var idx = this.animClips.indexOf(clip);
            if (idx !== -1) {
                this.animClips.splice(idx, 1);
            }
            delete this.animClipsMap[name];
        }

        if (this.curClip === name)
            this.curClip = "";
    };

    /**
     * @param {String} name
     */

    AnimationComponent.prototype.playClip = function (name) {
        var clip = this.animClipsMap[name];
        if (clip) {
            this.curClip = name;
            clip.play();
        }
    };

    AnimationComponent.prototype.stopClip = function () {
        var session = this.animSessions[this.curClip];
        if (session)
            session.stop();
        var clip = this.animClipsMap[this.curClip];
        if (clip)
            clip.stop();
        this.curClip = "";
    };

    /**
     * @param {String} name
     * @param {number} duration
     */

    AnimationComponent.prototype.crossFadeToClip = function (name, duration) {
        var fromClip = this.animClipsMap[this.curClip];
        var toClip = this.animClipsMap[name];

        if (fromClip && toClip) {
            fromClip.fadeOut(duration);
            toClip.fadeIn(duration);
            this.curClip = name;
        } else if (fromClip) {
            fromClip.fadeOut(duration);
            this.curClip = "";
        } else if (toClip) {
            toClip.fadeIn(duration);
            this.curClip = name;
        }
    };


    // blend related

    /**
     * @param {BlendValue} blendValue
     * @param {number} weight
     * @param {String} curveName
     */

    AnimationComponent.prototype.setBlend = function (blendValue, weight, curveName) {
        var curClip = this.getCurrentClip();
        if (curClip && curClip.session)
            curClip.session.setBlend(blendValue, weight, curveName);
    };

    /**
     * @param {String} curveName
     */

    AnimationComponent.prototype.unsetBlend = function (curveName) {
        var curClip = this.getCurrentClip();
        if (curClip && curClip.session)
            curClip.session.unsetBlend(curveName);
    };


    // APIs for sessions =================================================
    AnimationComponent.prototype.getCurrentSession = function () {
        return this.animSessions[this.curClip];
    };

    /**
     * @param {String} name
     */

    AnimationComponent.prototype.playSession = function (name) {
        var session = this.animSessions[name];
        if (session) {
            session.play();
            this.curClip = name;
        }
    };

    AnimationComponent.prototype.stopSession = function () {
        var session = this.animSessions[this.curClip];
        if (session)
            session.stop();
        var clip = this.animClipsMap[this.curClip];
        if (clip)
            clip.stop();
        this.curClip = "";
    };

    /**
     * @param {String} name
     * @param {number} duration
     */

    AnimationComponent.prototype.crossFadeToSession = function (name, duration) {
        var fromSession = this.animSessions[this.curClip];
        var toSession = this.animSessions[name];

        if (fromSession && this.animSessions[name]) {
            fromSession.fadeOut(duration);
            toSession.fadeIn(duration);
            this.curClip = name;
        } else if (fromSession) {
            fromSession.fadeOut(duration);
            this.curClip = "";
        } else if (toSession) {
            toSession.fadeIn(duration);
            this.curClip = name;
        }
    };

    /**
     * @param {BlendValue} blendValue
     * @param {number} weight
     * @param {String} curveName
     */

    AnimationComponent.prototype.setBlendSession = function (blendValue, weight, curveName) {
        var curSession = this.animSessions[this.curClip];
        if (curSession) {
            curSession.setBlend(blendValue, weight, curveName);
        }
    };

    /**
     * @param {String} curveName
     */

    AnimationComponent.prototype.unsetBlendSession = function (curveName) {
        var curSession = this.animSessions[this.curClip];
        if (curSession) {
            curSession.unsetBlend(curveName);
        }
    };

    /**
     * @param {String} substr
     */

    AnimationComponent.prototype.playSubstring = function (substr) {
        var n = this.animClips.length;
        for (var i = 0; i < n; i++) {
            var clip = this.animClips[i];
            if (clip.isPlaying)
                clip.pause();
            if (clip.name.indexOf(substr) !== -1)
                clip.play();
        }
    };

    AnimationComponent.prototype.pauseAll = function () {
        var n = this.animClips.length;
        for (var i = 0; i < n; i++) {
            var clip = this.animClips[i];
            if (clip.isPlaying)
                clip.pause();
        }
    };

    return {
        AnimationKeyableType: AnimationKeyableType,
        AnimationKeyable: AnimationKeyable,
        AnimationTarget: AnimationTarget,
        AnimationCurveType: AnimationCurveType,
        AnimationCurve: AnimationCurve,
        AnimationClipSnapshot: AnimationClipSnapshot,
        AnimationClip: AnimationClip,
        AnimationEvent: AnimationEvent,
        AnimationSession: AnimationSession,
        AnimationComponent: AnimationComponent,
    };
}());
