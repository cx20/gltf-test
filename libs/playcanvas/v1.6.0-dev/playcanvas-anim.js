// *===============================================================================================================
// * class AnimationKeyable
// *
// *===============================================================================================================
var AnimationKeyableType = { NUM: 0, VEC: 1, QUAT: 2 };
var AnimationKeyable = function AnimationKeyable(type, time, value) {
    this.init(type, time, value);
};

AnimationKeyable.prototype.init = function (type, time, value) {
    this.type = type || AnimationKeyableType.NUM;
    this.time = time || 0;
    if (value)
        this.value = value;
    else {
        switch(type) {
            case AnimationKeyableType.NUM: this.value = 0; break;
            case AnimationKeyableType.VEC: this.value = new pc.Vec3(); break;
            case AnimationKeyableType.QUAT: this.value = new pc.Quat(); break;
        }
    }
    return this;
};

AnimationKeyable.prototype.copy = function (keyable) {
    if(!keyable)
        return this;

    var value = keyable.value;
    if(keyable.value instanceof pc.Vec3 || keyable.value instanceof pc.Quat)
        value = keyable.value.clone();

    this.init(keyable.type, keyable.time, value);
    return this;
};

AnimationKeyable.prototype.clone = function () {
    var value = this.value;
    if(this.value instanceof pc.Vec3 || this.value instanceof pc.Quat)
        value = this.value.clone();
    var cloned = new AnimationKeyable(this.type, this.time, value);
    return cloned;
};

// static function for lack of overloaded operator
// return keyable1 + keyable2
AnimationKeyable.sum = function (keyable1, keyable2) {
    if (!keyable1 || !keyable2 || keyable1.type != keyable2)
        return null;

    var resKeyable = new AnimationKeyable(keyable1.type);
    switch(keyable1.type) {
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

// return keyable1 - keyable2
AnimationKeyable.minus = function (keyable1, keyable2) {
    if (!keyable1 || !keyable2 || keyable1.type != keyable2)
        return null;

    var resKeyable = new AnimationKeyable(keyable1.type);
    switch(keyable1.type) {
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

// return keyable * coeff
AnimationKeyable.mul = function (keyable, coeff) {
    if (!keyable)
        return null;

    var resKeyable = new AnimationKeyable();
    resKeyable.copy(keyable);
    switch(keyable.type) {
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

// return keyable / coeff
AnimationKeyable.div = function (keyable, coeff) {
    if (coeff === 0)
        return null;

    return AnimationKeyable.mul(keyable, 1 / coeff);
};

AnimationKeyable.linearBlend = function (keyable1, keyable2, p) {
    if (!keyable1 || !keyable2 || keyable1.type !== keyable2.type)
        return null;

    var resKeyable = new AnimationKeyable(keyable1.type);
    if (p === 0) {
        resKeyable.copy(keyable1);
        return resKeyable;
    }

    if (p === 1) {
        resKeyable.copy(keyable2);
        return resKeyable;
    }

    switch(keyable1.type) {
        case AnimationKeyableType.NUM:
            resKeyable.value = (1 - p) * keyable1.value + p * keyable2.value; break;
        case AnimationKeyableType.VEC:
            resKeyable.value.lerp(keyable1.value, keyable2.value, p); break;
        case AnimationKeyableType.QUAT:
            resKeyable.value.slerp(keyable1.value, keyable2.value, p); break;
    }
    return resKeyable;
};

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
var AnimationTarget = function AnimationTarget(targetNode, targetPath, targetProp) {
    this.targetNode = targetNode;
    this.targetPath = targetPath;
    this.targetProp = targetProp;
};

//blend related
AnimationTarget.prototype.toString = function(){
    var str = "";
    if(this.targetNode)
        str += this.targetNode.name;
    if(this.targetPath)
        str += ("_" + this.targetPath);
    if(this.targetProp)
        str += ("_" + this.targetProp);
    return str;
};

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

// based on current target[path]'s value, blend in value by p
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
    if (this.targetNode && this.targetNode.hasOwnProperty(this.targetPath)) {
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
        this.targetNode._dirtify(true);
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

    if (this.targetNode && this.targetNode.hasOwnProperty(this.targetPath)) {
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
        this.targetNode._dirtify(true);
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
AnimationTarget.constructTargetNodes = function (root, vec3Scale) {
    if (!root)
        return;

    var vScale = vec3Scale || new pc.Vec3(1, 1, 1);
    var rootTargetNode = new AnimationTarget(root);
    if (root.localScale)
        rootTargetNode.vScale = new pc.Vec3(root.localScale.x * vScale.x, root.localScale.y * vScale.y, root.localScale.z * vScale.z);

    var arTargetsAll = [rootTargetNode];
    for (var i = 0; i < root.children.length; i ++) {
        var arTargets = AnimationTarget.constructTargetNodes(root.children[i], rootTargetNode.vScale);
        if (arTargets)
            arTargetsAll = arTargetsAll.concat(arTargets);
    }
    return arTargetsAll;
};

// static function
AnimationTarget.getLocalScale = function (node) {
    if (!node)
        return;

    var vScale = new pc.Vec3(1, 1, 1);
    var curNode = node;
    while(curNode) {
        if (curNode.localScale) {
            vScale.x *= curNode.localScale.x;
            vScale.y *= curNode.localScale.y;
            vScale.z *= curNode.localScale.z;
        }
        curNode = curNode.parent;
    }
    return vScale;
};

// *===============================================================================================================
// * class AnimationCurve: each curve corresponds to one channel
// * member
// *        animKeys: an array of Keys (knots) on the curve
// *        type: how to interpolate between keys.
// *
// *===============================================================================================================
var AnimationCurveType = { LINEAR: 0, STEP: 1, CUBIC: 2 };

var AnimationCurve = function AnimationCurve() {
    AnimationCurve.count ++;
    this.name = "curve" + AnimationCurve.count.toString();
    this.type = AnimationCurveType.LINEAR;
    this.keyableType = AnimationKeyableType.NUM;
    this.tension = 0.5;// 0.5 catmul-rom
    this.animTargets = [];// allow multiple targets
    this.duration = 0;
    this.animKeys = [];
    this.session = new AnimationSession(this);
};
AnimationCurve.count = 0;

// getter and setter
Object.defineProperty(AnimationCurve.prototype, 'isPlaying', {
    get: function () {
        return this.session.isPlaying;
    },
    set: function (isPlaying) {
        this.session.isPlaying = isPlaying;
    }
});
Object.defineProperty(AnimationCurve.prototype, 'loop', {
    get: function () {
        return this.session.loop;
    },
    set: function (loop) {
        this.session.loop = loop;
    }
});
Object.defineProperty(AnimationCurve.prototype, 'bySpeed', {
    get: function () {
        return this.session.bySpeed;
    },
    set: function (bySpeed) {
        this.session.bySpeed = bySpeed;
    }
});

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
    var cloned = new AnimationCurve().copy(this);
    return cloned;
};

AnimationCurve.prototype.addTarget = function (targetNode, targetPath, targetProp) {
    var target = new AnimationTarget(targetNode, targetPath, targetProp);
    this.animTargets.push(target);
};

AnimationCurve.prototype.setTarget = function (targetNode, targetPath, targetProp) {
    this.animTargets = [];
    this.addTarget(targetNode, targetPath, targetProp);
};

AnimationCurve.prototype.clearTargets = function () {
    this.animTargets = [];
};

AnimationCurve.prototype.resetSession = function () {
    this.session.playable = this;
    this.session.animTargets = this.getAnimTargets();
    this.session.isPlaying = true;
    this.session.begTime = 0;
    this.session.endTime = this.duration;
    this.session.curTime = 0;
    this.session.bySpeed = 1;
    this.session.loop = true;
};

AnimationCurve.prototype.blendToTarget = function (keyable, p) {
    this.session.blendToTarget(keyable, p);
};

AnimationCurve.prototype.updateToTarget = function (keyable) {
    this.session.updateToTarget(keyable);
};
// this.animTargets wrapped in object, with curve name
AnimationCurve.prototype.getAnimTargets = function () {
    var result = {};
    result[this.name] = this.animTargets;// an array []
    return result;
};

// events related
AnimationCurve.prototype.on = function (name, time, fnCallback, context, parameter) {
    if (this.session)
        this.session.on(name, time, fnCallback, context, parameter);
    return this;
};

AnimationCurve.prototype.off = function (name, time, fnCallback) {
    if (this.session)
        this.session.off(name, time, fnCallback);
    return this;
};

AnimationCurve.prototype.removeAllEvents = function () {
    if (this.session)
        this.session.removeAllEvents();
    return this;
};

AnimationCurve.prototype.fadeIn = function (duration) {
    this.session.fadeIn(duration, this);
};

AnimationCurve.prototype.fadeOut = function (duration) {
    this.session.fadeOut(duration);
};

AnimationCurve.prototype.play = function () {
    this.session.play(this);
};

AnimationCurve.prototype.resume = function () {
    this.session.resume();
};

AnimationCurve.prototype.stop = function () {
    this.session.stop();
};

AnimationCurve.prototype.pause = function () {
    this.session.pause();
};

AnimationCurve.prototype.showAt = function (time, fadeDir, fadeBegTime, fadeEndTime, fadeTime) {
    this.session.showAt(time, fadeDir, fadeBegTime, fadeEndTime, fadeTime);
};

AnimationCurve.prototype.setAnimKeys = function (animKeys) {
    this.animKeys = animKeys;
};

AnimationCurve.prototype.insertKey = function (type, time, value) {
    if (this.keyableType != type)
        return;

    var pos = 0;
    while(pos < this.animKeys.length && this.animKeys[pos].time < time)
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

AnimationCurve.prototype.shiftKeyTime = function (time) {
    for (var i = 0; i < this.animKeys.length; i ++)
        this.animKeys[i].time += time;
};

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

AnimationCurve.prototype.eval = function (time) {
    if (!this.animKeys || this.animKeys.length === 0)
        return null;

    switch(this.type) {
        case AnimationCurveType.LINEAR: return this.evalLINEAR(time);
        case AnimationCurveType.STEP: return this.evalSTEP(time);
        case AnimationCurveType.CUBIC:
            if (this.keyableType == AnimationKeyableType.QUAT)
                return this.evalLINEAR(time);
            return this.evalCUBIC(time);
    }
    return null;
};

// static method: tangent 1, value 1, tangent 2, value 2, proportion
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

// static: only for num or vec
AnimationCurve.cubicCardinal = function (key0, key1, key2, key3, time, tension) {
    var m1, m2;

    if (!key1 || !key2 || key1.type != key2.type)
        return null;

    if (key1.type != AnimationKeyableType.NUM && key1.type != AnimationKeyableType.VEC)
        return null;

    var p = (time - key1.time) / (key2.time - key1.time);
    var resKey = new AnimationKeyable();
    resKey.type = key1.type;

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

    // each element in vector
    if (key1.type === AnimationKeyableType.VEC) {
        resKey.value = key1.value.clone();
        for (var i = 0; i < resKey.value.data.length; i ++) {
            m1 = factor * (key2.value.data[i] - key1.value.data[i]) / (key2.time - key1.time);
            if (key0)
                m1 = 2 * factor * (key2.value.data[i] - key0.value.data[i]) / (key2.time - key0.time);

            m2 = factor * (key2.value.data[i] - key1.value.data[i]) / (key2.time - key1.time);
            if (key3)
                m2 = 2 * factor * (key3.value.data[i] - key1.value.data[i]) / (key3.time - key1.time);
            resKey.value.data[i] = AnimationCurve.cubicHermite(m1, key1.value.data[i], m2, key2.value.data[i], p);
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
var AnimationClipSnapshot = function AnimationClipSnapshot() {
    this.curveKeyable = {};// curveKeyable[curveName]=keyable
};

AnimationClipSnapshot.prototype.copy = function (shot) {
    if (!shot)
        return this;

    this.curveKeyable = {};
    var curveNames = Object.keys(shot.curveKeyable);
    for (var i = 0; i < curveNames.length; i ++) {
        var cname = curveNames[i];
        this.curveKeyable[cname] = new AnimationKeyable().copy(shot.curveKeyable[cname]);
    }
    return this;
};
AnimationClipSnapshot.prototype.clone = function () {
    var cloned = new AnimationClipSnapshot().copy(this);
    return cloned;
};

// static function: linear blending
AnimationClipSnapshot.linearBlend = function (shot1, shot2, p) {
    if (!shot1 || !shot2)
        return null;

    if (p === 0) return shot1;
    if (p === 1) return shot2;

    var resShot = new AnimationClipSnapshot();
    resShot.copy(shot1);
    var curveNames = Object.keys(shot2.curveKeyable);
    for (var i = 0; i < curveNames.length; i ++) {
        var cname = curveNames[i];
        if (shot1.curveKeyable[cname]) {
            var resKey = AnimationKeyable.linearBlend(shot1.curveKeyable[cname], shot2.curveKeyable[cname], p);
            resShot.curveKeyable[cname] = resKey;
        } else
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
var AnimationClip = function AnimationClip(root) {
    AnimationClip.count ++;
    this.name = "clip" + AnimationClip.count.toString();
    this.duration = 0;
    this.animCurves = {}; // a map for easy query
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

AnimationClip.prototype.copy = function (clip) {
    this.name = clip.name;
    this.duration = clip.duration;

    // copy curves
    this.animCurves = {};
    var curveNames = Object.keys(clip.animCurves);
    for (var i = 0; i < curveNames.length; i++) {
        var cname = curveNames[i];
        var curve = new AnimationCurve().copy(clip.animCurves[cname]);
        this.animCurves[curve.name] = curve;
    }
    return this;
};

AnimationClip.prototype.clone = function () {
    var cloned = new AnimationClip().copy(this);
    return cloned;
};

AnimationClip.prototype.updateDuration = function () {
    this.duration = 0;
    var curveNames = Object.keys(this.animCurves);
    for (var i = 0; i < curveNames.length; i++) {
        var cname = curveNames[i];
        this.duration = Math.max(this.duration, this.animCurves[cname].duration);
    }
};

AnimationClip.prototype.showAt = function (time, fadeDir, fadeBegTime, fadeEndTime, fadeTime) {
    this.session.showAt(time, fadeDir, fadeBegTime, fadeEndTime, fadeTime);
};

AnimationClip.prototype.blendToTarget = function (snapshot, p) {
    this.session.blendToTarget(snapshot, p);
};

AnimationClip.prototype.updateToTarget = function (snapshot) {
    this.session.updateToTarget(snapshot);
};

// a dictionary: retrieve animTargets with curve name
AnimationClip.prototype.getAnimTargets = function () {
    var animTargets = {};
    var curveNames = Object.keys(this.animCurves);
    for (var i = 0; i < curveNames.length; i ++) {
        if (!curveNames[i] || !this.animCurves[curveNames[i]])
            continue;

        var curveTarget = this.animCurves[curveNames[i]].getAnimTargets();
        animTargets[curveNames[i]] = curveTarget[curveNames[i]];
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

AnimationClip.prototype.fadeIn = function (duration) {
    this.session.fadeIn(duration, this);
};

AnimationClip.prototype.fadeOut = function (duration) {
    this.session.fadeOut(duration);
};

AnimationClip.prototype.fadeTo = function (toClip, duration) {
    this.session.fadeTo(toClip, duration);
};

// curve related
AnimationClip.prototype.addCurve = function (curve) {
    if (curve && curve.name) {
        this.animCurves[curve.name] = curve;
        if (curve.duration > this.duration)
            this.duration = curve.duration;
    }
};

AnimationClip.prototype.removeCurve = function (name) {
    if (name && this.animCurves[name]) {
        delete this.animCurves[name];
        this.updateDuration();
    }
};

AnimationClip.prototype.removeAllCurves = function () {
    this.animCurves = {};
    this.duration = 0;
};


// events related
AnimationClip.prototype.on = function (name, time, fnCallback, context, parameter) {
    if (this.session)
        this.session.on(name, time, fnCallback, context, parameter);
    return this;
};

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
AnimationClip.prototype.getSubClip = function (tmBeg, tmEnd) {
    var subClip = new AnimationClip();
    subClip.name = this.name + "_sub";
    subClip.root = this.root;

    var curveNames = Object.keys(this.animCurves);
    for (var i = 0; i < curveNames.length; i++) {
        if (!curveNames[i] || !this.animCurves[curveNames[i]])
            continue;

        var subCurve = this.animCurves[curveNames[i]].getSubCurve(tmBeg, tmEnd);
        subClip.addCurve(subCurve);
    }

    return subClip;
};

// take a snapshot of clip at this moment
AnimationClip.prototype.eval = function (time) {
    var snapshot = new AnimationClipSnapshot();
    snapshot.time = time;

    var curveNames = Object.keys(this.animCurves);
    for (var i = 0; i < curveNames.length; i++) {
        if (!curveNames[i] || !this.animCurves[curveNames[i]])
            continue;

        var keyable = this.animCurves[curveNames[i]].eval(time);
        snapshot.curveKeyable[curveNames[i]] = keyable;
    }
    return snapshot;
};

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
AnimationClip.prototype.transferToRoot = function (root) {
    var arTarget = AnimationTarget.constructTargetNodes(root);// contains localScale information

    var curveNames = Object.keys(this.animCurves);
    for (var i = 0; i < curveNames.length; i++) { // for each curve in clip
        if (!curveNames[i] || !this.animCurves[curveNames[i]])
            continue;

        var curve = this.animCurves[curveNames[i]];
        for (var t = 0; t < curve.animTargets.length; t ++) { // for all targets
            var ctarget = curve.animTargets[t];
            var bFound = false;
            for (var a = 0; a < arTarget.length; a ++) { // find matching under root
                var atarget = arTarget[a];

                if (ctarget.targetNode.name === atarget.targetNode.name) { // match by target name
                    bFound = true;
                    var cScale = AnimationTarget.getLocalScale(ctarget.targetNode);
                    ctarget.targetNode = atarget.targetNode; // atarget contains scale information
                    if (cScale && atarget.vScale) {
                        ctarget.vScale = new pc.Vec3(cScale.x, cScale.y, cScale.z);
                        if (atarget.vScale.x) ctarget.vScale.x /= atarget.vScale.x;
                        if (atarget.vScale.y) ctarget.vScale.y /= atarget.vScale.y;
                        if (atarget.vScale.z) ctarget.vScale.z /= atarget.vScale.z;
                    }
                }
            }
            if (!bFound)
                console.warn("transferToRoot: " + ctarget.targetNode.name + "in animation clip " + this.name + " has no transferred target under " + root.name);

        }
    }
};

//blend related
AnimationClip.prototype.updateCurveNameFromTarget = function () {
    var curveNames = Object.keys(this.animCurves);
    for (var i = 0; i < curveNames.length; i++) { // for each curve in clip
        var oldName = curveNames[i];
        if (!oldName || !this.animCurves[oldName])
            continue;
        var curve = this.animCurves[oldName];
        if(!curve.animTargets || curve.animTargets.length < 1)
            continue;

        // change name to target string
        var newName = curve.animTargets[0].toString();
        curve.name = newName;
        this.animCurves[newName] = curve;
        delete this.animCurves[oldName];
    }
};

AnimationClip.prototype.removeEmptyCurves = function () {
    var curveNames = Object.keys(this.animCurves);
    for (var i = 0; i < curveNames.length; i++) {
        if (!this.animCurves[curveNames[i]] ||
            !this.animCurves[curveNames[i]].animKeys || this.animCurves[curveNames[i]].animKeys.length == 0)
            delete this.animCurves[curveNames[i]];
    }
};

AnimationClip.prototype.setInterpolationType = function (type) {
    var curveNames = Object.keys(this.animCurves);
    for (var i = 0; i < curveNames.length; i++) {
        if (this.animCurves[curveNames[i]])
            this.animCurves[curveNames[i]].type = type;
    }
};

// *===============================================================================================================
// * class AnimationEvent:
// *===============================================================================================================
var AnimationEvent = function AnimationEvent(name, time, fnCallback, context, parameter) {
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

// *===============================================================================================================
// * class AnimationSession: playback/runtime related thing
//                           AnimationCurve and AnimationClip are both playable, they are animation data container
//                           AnimationSession is the runtime play of curve/clip
//                           one clip can be played by multiple AnimationSession simultaneously
// *===============================================================================================================
var AnimationSession = function AnimationSession(playable, targets) {
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

    this.playable = null;
    this.animTargets = {};
    if (playable) {
        this.playable = playable;// curve or clip
        if (!targets)
            this.animTargets = playable.getAnimTargets();
    }
    if (targets)
        this.animTargets = targets;// collection of AnimationTarget

    this.animEvents = [];

    //blend related========================================================== 
    this.blendables = {}; 
    this.blendWeights = {}; 

    // ontimer function for playback
    var self = this;  
    this.onTimer = function (dt) { 
        self.curTime += (self.bySpeed * dt);
        self.accTime += (self.bySpeed * dt); 

        if (!self.isPlaying ||// not playing
            (!self.loop && (self.curTime < self.begTime || self.curTime > self.endTime))){ // not in range 
            self.invokeByTime(self.curTime);
            self.stop();
            self.invokeByName("stop");
            return;
        }
        
        //round time to duration
        var duration = self.endTime - self.begTime;
        if (self.curTime > self.endTime) { // loop start
            self.invokeByTime(self.curTime);
            self.curTime -= duration;
            for (var i = 0; i < self.animEvents.length; i ++)
                self.animEvents[i].triggered = false;
        }
        if (self.curTime < self.begTime)
            self.curTime += duration; 
        
        if(self.fadeDir) { 
            self.fadeTime +=  dt;//(self.bySpeed * dt); 
            if(self.fadeTime >= self.fadeEndTime) { 
                if(self.fadeDir === 1) {//fadein completed
                    self.fadeDir = 0;
                    self.fadeBegTime = -1;
                    self.fadeEndTime = -1;
                    self.fadeTime = -1;
                } else if (self.fadeDir === -1) {//fadeout completed
                    self.stop();
                    return;
                }
            }
        }

        self.showAt(self.curTime, self.fadeDir, self.fadeBegTime, self.fadeEndTime, self.fadeTime);
        self.invokeByTime(self.curTime);
    };
}; 
 
AnimationSession.app = null;

//blend related==========================================================
AnimationSession.prototype.setBlend = function(blendValue, weight, curveName){
    if(blendValue instanceof AnimationClip){ 
        if(!curveName || curveName === "") 
            curveName = "__default__"; 
        this.blendables[curveName] = blendValue;
        this.blendWeights[curveName] = weight; 
        return;
    }

    //blendable is just a single DOF=================================
    var keyType;
    if(typeof blendValue === "number")//1 instanceof Number is false, don't know why
        keyType =  AnimationKeyableType.NUM;
    else if(blendValue instanceof pc.Vec3)
        keyType = AnimationKeyableType.VEC;
    else if(blendValue instanceof pc.Quat)
        keyType = AnimationKeyableType.QUAT;

    if(!curveName || curveName === "" || typeof keyType === "undefined")//has to specify curveName
        return;  

    this.blendWeights[curveName] = weight;  
    this.blendables[curveName] = new AnimationKeyable(keyType, 0, blendValue); 
};

AnimationSession.prototype.unsetBlend = function(curveName) {
    if(!curveName || curveName === "") 
        curveName = "__default__"; 

    //unset blendvalue 
    if(this.blendables[curveName]) {
        delete this.blendables[curveName];
        delete this.blendWeights[curveName];
    } 
}; 

// events related
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

AnimationSession.prototype.invokeByName = function (name) {
    for (var i = 0; i < this.animEvents.length; i ++) {
        if (this.animEvents[i] && this.animEvents[i].name === name) {
            this.animEvents[i].invoke();
        }
    }
};

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

AnimationSession.prototype.blendToTarget = function (input, p) {
    var i, j;
    var cname, ctargets;

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

        for (j = 0; j < ctargets.length; j ++)
            ctargets[j].blendToTarget(input.value, p);
        return;
    }

    // playable is a clip, input is a AnimationClipSnapshot, animTargets is an object {curvename1:[]targets, curvename2:[]targets, curvename3:[]targets}
    if (this.playable instanceof AnimationClip && input instanceof AnimationClipSnapshot) {
        var curveNames = Object.keys(input.curveKeyable);
        for (i = 0; i < curveNames.length; i ++) {
            cname = curveNames[i];
            if (!cname) continue;
            ctargets = this.animTargets[cname];
            if (!ctargets) continue;

            for (j = 0; j < ctargets.length; j ++)
                ctargets[j].blendToTarget(input.curveKeyable[cname].value, p);
        }
    }
};

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
        var curveNames = Object.keys(input.curveKeyable);
        for (i = 0; i < curveNames.length; i ++) {
            cname = curveNames[i];
            if (!cname) continue;
            ctargets = this.animTargets[cname];
            if (!ctargets) continue;

            for (j = 0; j < ctargets.length; j ++)
                ctargets[j].updateToTarget(input.curveKeyable[cname].value);
        }

    }
};

AnimationSession.prototype.showAt = function (time, fadeDir, fadeBegTime, fadeEndTime, fadeTime) {
    var input = this.playable.eval(time); 
    //blend related==========================================================
    //blend animations first
    var blendableNames = Object.keys(this.blendables);
    for (var i = 0; i < blendableNames.length; i ++) {
        var bname = blendableNames[i];
        var p = this.blendWeights[bname];
        var blendClip = this.blendables[bname];
        if(blendClip && (blendClip instanceof AnimationClip) && (typeof p === "number")) {
            var blendInput = blendClip.eval(this.accTime%blendClip.duration);  
            input = AnimationClipSnapshot.linearBlend(input, blendInput, p); 
        }
    } 
    //blend custom bone second 
    for (var i = 0; i < blendableNames.length; i ++) {
        var cname = blendableNames[i];
        var p = this.blendWeights[cname];
        var blendkey = this.blendables[cname];
        if(!blendkey || !input.curveKeyable[cname] || (blendkey instanceof AnimationClip))
            continue; 
        var resKey = AnimationKeyable.linearBlend(input.curveKeyable[cname], blendkey, p);
        input.curveKeyable[cname] = resKey;
    } 
    
    if(fadeDir === 0 || fadeTime < fadeBegTime || fadeTime > fadeEndTime)
        this.updateToTarget(input);
    else {
        var p = (fadeTime - fadeBegTime) / (fadeEndTime - fadeBegTime);
        if (fadeDir === -1)
            p = 1 - p;
        this.blendToTarget(input, p);
    } 
};  

AnimationSession.prototype.play = function (playable, animTargets) {
    if (playable)
        this.playable = playable;

    if (!(this.playable instanceof AnimationClip) && !(this.playable instanceof AnimationCurve))
        return this;

    if (this.isPlaying)// already playing
        return this;

    this.begTime = 0;
    this.endTime = playable.duration;
    this.curTime = 0;
    this.accTime = 0;
    this.isPlaying = true;
    if (this !== playable.session) {
        this.bySpeed = playable.bySpeed;
        this.loop = playable.loop;
    }

    if (!animTargets && typeof playable.getAnimTargets === "function")
        this.animTargets = playable.getAnimTargets();
    else
        this.animTargets = animTargets;
 
    //reset events  
    for (var i = 0; i < this.animEvents.length; i ++)
        this.animEvents[i].triggered = false;

    //reset events 
    for (var i = 0; i < this.animEvents.length; i ++)
        this.animEvents[i].triggered = false;

    if(AnimationSession.app)
        AnimationSession.app.on('update', this.onTimer);
    return this;
};

AnimationSession.prototype.stop = function () {
    if(AnimationSession.app)
        AnimationSession.app.off('update', this.onTimer);
    this.curTime = 0;
    this.isPlaying = false;
    this.fadeBegTime = -1;
    this.fadeEndTime = -1;
    this.fadeTime = -1;
    this.fadeDir = 0;
    return this;
};

AnimationSession.prototype.pause = function () {
    if(AnimationSession.app)
        AnimationSession.app.off('update', this.onTimer);
    this.isPlaying = false;
    return this;
};

AnimationSession.prototype.resume = function () {
    if (!this.isPlaying) {
        this.isPlaying = true;
        if(AnimationSession.app) AnimationSession.app.on('update', this.onTimer);
    }
};
 
AnimationSession.prototype.fadeOut = function (duration) { 
    this.fadeBegTime = this.curTime;   
    this.fadeTime = this.fadeBegTime;
    this.fadeEndTime = this.fadeBegTime + duration;
    this.fadeDir = -1;
};

AnimationSession.prototype.fadeIn = function (duration, playable) {
    this.fadeBegTime = this.curTime;
    this.fadeTime = this.fadeBegTime;
    this.fadeEndTime = this.fadeBegTime + duration;
    this.fadeDir = 1;
    if (playable)
        this.playable = playable;
    this.play(playable);
};

AnimationSession.prototype.fadeTo = function (playable, duration) {
    this.fadeOut(duration);
    var session = new AnimationSession();
    session.fadeIn(duration, playable);
    return session;
};

// *===============================================================================================================
// * class AnimationComponent:
// * member
// *       animClips: dictionary type, query animation clips animClips[clipName]
// *
// *===============================================================================================================
var AnimationComponent = function AnimationComponent() {
    this.name = "";
    this.animClips = {}; // make it a map, easy to query clip by name
    this.curClip = "";
};

AnimationComponent.prototype.clipCount = function () {
    var clipNames = Object.keys(this.animClips);
    return clipNames.length;
};

AnimationComponent.prototype.getCurrentClip = function () {
    return this.animClips[this.curClip];
};

AnimationComponent.prototype.clipAt = function (index) {
    var clipNames = Object.keys(this.animClips);
    if (clipNames.length <= index)
        return null;
    return this.animClips[clipNames[index]];
};

AnimationComponent.prototype.addClip = function (clip) {
    if (clip && clip.name)
        this.animClips[clip.name] = clip;
};

AnimationComponent.prototype.removeClip = function (name) {
    if (name && this.animClips[name])
        delete this.animClips[name];

    if (this.curClip === name)
        this.curClip = "";
};

AnimationComponent.prototype.playClip = function (name) {
    if (this.animClips[name]) {
        this.curClip = name;
        this.animClips[name].play();
    }
};

AnimationComponent.prototype.stopClip = function () {
    if (this.animClips[this.curClip]) {
        this.animClips[this.curClip].stop();
        this.curClip = "";
    }
};

AnimationComponent.prototype.crossFadeToClip = function (name, duration) {
    if (this.animClips[this.curClip] && this.animClips[name]) {
        //this.animClips[this.curClip].fadeTo(this.animClips[name], duration);
        this.animClips[this.curClip].fadeOut(duration);
        this.animClips[name].fadeIn(duration);
        this.curClip = name;
    } else if (this.animClips[this.curClip]) {
        this.animClips[this.curClip].fadeOut(duration);
        this.curClip = "";
    } else if (this.animClips[name]) {
        this.animClips[name].fadeIn(duration);
        this.curClip = name;
    }
};


//blend related
AnimationComponent.prototype.setBlend = function (blendValue, weight, curveName) {
    var curClip = this.getCurrentClip();
    if(curClip && curClip.session)
        curClip.session.setBlend(blendValue, weight, curveName);
};

AnimationComponent.prototype.unsetBlend = function(curveName) {
    var curClip = this.getCurrentClip();
    if(curClip && curClip.session)
        curClip.session.unsetBlend(curveName);
};

