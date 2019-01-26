(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.Ashes = {}));
}(this, function (exports) { 'use strict';

    class Texture {
        constructor(rawImage, sampler = undefined, width = 256, height = 256, border = 0) {
            this.texture = null;
            this.channel = null;
            this.isDirty = true;
            this.glType = WebGL2RenderingContext.TEXTURE_2D;
            this.isCubetex = false;
            this.data = null;
            this.level = 0;
            this.internalformat = WebGL2RenderingContext.RGBA;
            this.format = WebGL2RenderingContext.RGBA;
            this.type = WebGL2RenderingContext.UNSIGNED_BYTE;
            this.sampler = new Sampler(sampler);
            this.image = rawImage;
            this.width = width;
            this.height = height;
            this.border = border;
            if (rawImage && rawImage.length == 6) {
                this.isCubetex = true;
                this.glType = WebGL2RenderingContext.TEXTURE_CUBE_MAP;
            }
        }
        static clone(origin) {
            return new Texture(origin.image, origin.sampler);
        }
        static createTexture(gl, tex) {
            if (tex.texture) { // if the texuter is already exist
                gl.deleteTexture(tex.texture);
            }
            tex.texture = gl.createTexture();
            gl.bindTexture(tex.glType, tex.texture);
            if (tex.isCubetex) {
                for (let i in this.cubetexOrder) {
                    gl.texImage2D(this.cubetexOrder[i], tex.level, tex.internalformat, tex.format, tex.type, tex.image[i]);
                }
            }
            else {
                if (tex.image) {
                    gl.texImage2D(tex.glType, tex.level, tex.internalformat, tex.format, tex.type, tex.image);
                }
                else { // Data texture
                    gl.texImage2D(tex.glType, tex.level, tex.internalformat, tex.width, tex.height, tex.border, tex.format, tex.type, tex.data);
                }
            }
            gl.texParameterf(tex.glType, gl.TEXTURE_WRAP_S, tex.sampler.wrapS);
            gl.texParameterf(tex.glType, gl.TEXTURE_WRAP_T, tex.sampler.wrapT);
            if (tex.sampler.minFilter == WebGL2RenderingContext.NEAREST_MIPMAP_NEAREST || tex.sampler.minFilter == WebGL2RenderingContext.NEAREST_MIPMAP_LINEAR || tex.sampler.minFilter == WebGL2RenderingContext.LINEAR_MIPMAP_NEAREST || tex.sampler.minFilter == WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR) {
                gl.generateMipmap(tex.glType);
            }
            else {
                gl.texParameterf(tex.glType, gl.TEXTURE_MIN_FILTER, tex.sampler.minFilter);
                gl.texParameterf(tex.glType, gl.TEXTURE_MAG_FILTER, tex.sampler.magFilter);
            }
            gl.bindTexture(tex.glType, null);
        }
        static unbindTexture(gl, tex) {
            if (tex.channel != null) {
                gl.activeTexture(this.texChannels[tex.channel]);
            }
            gl.bindTexture(tex.glType, null);
        }
        static bindTexture(gl, tex) {
            if (tex.channel != null) {
                gl.activeTexture(this.texChannels[tex.channel]);
            }
            if (tex.texture == null) {
                this.createTexture(gl, tex);
            }
            gl.bindTexture(tex.glType, tex.texture);
        }
    }
    Texture.cubetexOrder = [
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_X,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_X,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Y,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Y,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_POSITIVE_Z,
        WebGL2RenderingContext.TEXTURE_CUBE_MAP_NEGATIVE_Z,
    ];
    // Reduce GC
    Texture.texChannels = [
        WebGL2RenderingContext.TEXTURE0,
        WebGL2RenderingContext.TEXTURE1,
        WebGL2RenderingContext.TEXTURE2,
        WebGL2RenderingContext.TEXTURE3,
        WebGL2RenderingContext.TEXTURE4,
        WebGL2RenderingContext.TEXTURE5,
        WebGL2RenderingContext.TEXTURE6,
        WebGL2RenderingContext.TEXTURE7,
    ];
    class Sampler {
        constructor({ magFilter = WebGL2RenderingContext.NEAREST, minFilter = WebGL2RenderingContext.NEAREST, wrapS = 10497, wrapT = 10497 } = { magFilter: WebGL2RenderingContext.NEAREST, minFilter: WebGL2RenderingContext.NEAREST, wrapS: 10497, wrapT: 10497 }) {
            this.magFilter = magFilter;
            this.minFilter = minFilter;
            this.wrapS = wrapS;
            this.wrapT = wrapT;
        }
    }

    class Mesh {
        constructor(attributes, indices, mode = WebGL2RenderingContext.TRIANGLES) {
            this.attributes = attributes;
            this.indices = indices;
            this.mode = mode;
        }
        static bindAccessorsVBO(target, gl, locationList) {
            for (let acc of target.attributes) {
                // Ignore indeces
                let loc = locationList[acc.attribute];
                if (acc.attribute && loc != undefined) {
                    bufferView.bindBuffer(acc.bufferView, gl);
                    gl.enableVertexAttribArray(loc);
                    let offset = acc.byteOffset;
                    gl.vertexAttribPointer(loc, acc.size, acc.componentType, acc.normalized, acc.bufferView.byteStride, offset);
                }
                else {
                    console.warn(`Attribute '${acc.attribute}' not found!`);
                }
            }
        }
        static bindIndecesEBO(target, gl) {
            bufferView.bindBuffer(target.indices.bufferView, gl);
        }
        static drawElement(target, gl) {
            let acc = target.indices;
            gl.drawElements(target.mode, acc.count, acc.componentType, acc.byteOffset);
        }
    }
    class Accessor {
        constructor({ bufferView, byteOffset = 0, componentType, normalized = false, count, type, max = [], min = [] }, name = '') {
            this.attribute = name;
            this.bufferView = bufferView;
            this.byteOffset = byteOffset;
            this.componentType = componentType;
            this.normalized = normalized;
            this.count = count;
            this.max = max;
            this.min = min;
            this.size = Accessor.types[type];
        }
    }
    Accessor.types = {
        "SCALAR": 1,
        'VEC1': 1,
        'VEC2': 2,
        'VEC3': 3,
        'VEC4': 4,
        "MAT2": 4,
        "MAT3": 9,
        "MAT4": 16,
    };
    class bufferView {
        constructor(rawData, { byteOffset = 0, byteLength, byteStride = 0, target = 34962 }) {
            this.buffer = null;
            // this.rawData = rawData;
            this.byteOffset = byteOffset;
            this.byteLength = byteLength;
            this.byteStride = byteStride;
            this.dataView = new DataView(rawData, this.byteOffset, this.byteLength);
            this.target = target;
        }
        static updateBuffer(bView, gl, usage = WebGL2RenderingContext.STATIC_DRAW) {
            if (bView.buffer) {
                gl.deleteBuffer(bView.buffer);
            }
            bView.buffer = gl.createBuffer();
            gl.bindBuffer(bView.target, bView.buffer);
            gl.bufferData(bView.target, bView.dataView, usage);
        }
        static bindBuffer(bView, gl) {
            if (!bView.buffer) {
                this.updateBuffer(bView, gl);
            }
            gl.bindBuffer(bView.target, bView.buffer);
        }
    }

    class Shader {
        constructor(vertCode = Shader.basicVS, fragCode = Shader.basicFS, macros = {}) {
            this.isDirty = true; // Shader sources status
            this.vertexSource = vertCode;
            this.fragmentSource = fragCode;
            this.macros = macros;
        }
        static clone(shader) {
            let temp = new Shader(shader.vertexSource, shader.fragmentSource);
            temp.macros = Object.assign({}, shader.macros);
            return temp;
        }
        static buildProgram(shader, ctx) {
            shader.isDirty = false;
            // if(!this.isDirty) return;
            // If current program needs recompile
            shader.ctx = ctx;
            // if WebGL shader is already exist, then dispose them
            if (shader.vertex) { // Vertex shader
                shader.ctx.deleteShader(shader.vertex);
            }
            shader.vertex = Shader.compileShader(shader.ctx, shader.ctx.VERTEX_SHADER, shader.vertexSource);
            this.fragcodeCache = '';
            for (let macro in shader.macros) {
                this.fragcodeCache += `\n#define ${macro} ${shader.macros[macro]}\n`;
            }
            this.fragcodeCache += shader.fragmentSource;
            if (shader.fragment) { // Fragment shader
                shader.ctx.deleteShader(shader.fragment);
            }
            shader.fragment = Shader.compileShader(shader.ctx, shader.ctx.FRAGMENT_SHADER, this.fragcodeCache);
            if (!shader.vertex || !shader.fragment) {
                return;
            }
            if (shader.program) { // Shader Program
                shader.ctx.deleteProgram(shader.program);
            }
            shader.program = Shader.createShaderProgram(shader.ctx, shader.vertex, shader.fragment);
            // Pickup details
            shader.attributes = Shader.pickupActiveAttributes(shader.ctx, shader.program);
            shader.uniforms = Shader.pickupActiveUniforms(shader.ctx, shader.program);
        }
        static updateUniform(shader) {
            let gl = shader.ctx;
            for (let k in shader.uniforms) {
                let uni = shader.uniforms[k];
                if (uni.value != null && uni.isDirty) {
                    uni.isDirty = false;
                    if (uni.argLength == 3) {
                        gl[uni.setter](uni.location, false, uni.value);
                    }
                    else {
                        gl[uni.setter](uni.location, uni.value);
                    }
                }
            }
        }
        static pickupActiveAttributes(ctx, shader) {
            const amount = ctx.getProgramParameter(shader, ctx.ACTIVE_ATTRIBUTES);
            let attributes = {};
            for (let i = 0; i < amount; i++) {
                const { name } = ctx.getActiveAttrib(shader, i);
                const location = ctx.getAttribLocation(shader, name);
                attributes[name] = location;
            }
            return attributes;
        }
        static pickupActiveUniforms(gl, shader) {
            const amount = gl.getProgramParameter(shader, gl.ACTIVE_UNIFORMS);
            let uniforms = {};
            for (let i = 0; i < amount; i++) {
                const { name, type } = gl.getActiveUniform(shader, i);
                const location = gl.getUniformLocation(shader, name);
                const setter = Uniform.getUnifSetter(type);
                let length = gl[setter].length;
                if (length == 0) { // prototype was modified by debugging tools
                    length = Uniform.getUnifArgLenght(type);
                }
                uniforms[name] = new Uniform(location, type, setter, length);
            }
            return uniforms;
        }
        static compileShader(gl, type, code) {
            let shader = gl.createShader(type);
            gl.shaderSource(shader, code);
            gl.compileShader(shader);
            if (gl.getShaderParameter(shader, gl.COMPILE_STATUS) === true) {
                return shader;
            }
            console.warn(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
        }
        static createShaderProgram(gl, vertexShader, fragmentShader) {
            let program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
                return program;
            }
            console.warn(gl.getProgramInfoLog(program));
            // Dispose
            gl.deleteProgram(program);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
        }
    }
    Shader.basicVS = `
attribute vec3 POSITION;
attribute vec2 TEXCOORD_0;

varying vec2 uv;
varying vec4 pos;

void main() {
  uv = TEXCOORD_0;
  vec4 position = vec4(POSITION, 1);
  pos = position;
  gl_Position = position;
}
    `;
    Shader.basicFS = `
precision mediump float;
uniform sampler2D base;

varying vec2 uv;
varying vec4 pos;

void main() {
    gl_FragColor = texture2D(base, uv);
    // gl_FragColor = vec4(uv, 1, 1);
}
    `;
    Shader.fragcodeCache = ''; // Reduce GC?
    class Uniform {
        constructor(location, type, setter, argLength) {
            this.value = null; // empty texture channel must be null
            this.isDirty = false;
            this.location = location;
            this.type = type;
            this.setter = setter;
            this.argLength = argLength;
        }
        static getUnifSetter(type) {
            switch (type) {
                case WebGLRenderingContext.FLOAT:
                    return 'uniform1f';
                case WebGLRenderingContext.FLOAT_VEC2:
                    return 'uniform2f';
                case WebGLRenderingContext.FLOAT_VEC3:
                    return 'uniform3fv';
                case WebGLRenderingContext.FLOAT_VEC4:
                    return 'uniform4f';
                case WebGLRenderingContext.INT:
                    return 'uniform1i';
                case WebGLRenderingContext.INT_VEC2:
                    return 'uniform2i';
                case WebGLRenderingContext.INT_VEC3:
                    return 'uniform3i';
                case WebGLRenderingContext.INT_VEC4:
                    return 'uniform4i';
                // case WebGLRenderingContext.BOOL:
                //     return WebGLRenderingContext.uniform1f;
                // case WebGLRenderingContext.BOOL_VEC2:
                //     return WebGLRenderingContext.uniform1f;
                // case WebGLRenderingContext.BOOL_VEC3:
                //     return WebGLRenderingContext.uniform1f;
                // case WebGLRenderingContext.BOOL_VEC4:
                //     return WebGLRenderingContext.uniform1f;
                case WebGLRenderingContext.FLOAT_MAT2:
                    return 'uniformMatrix2fv';
                case WebGLRenderingContext.FLOAT_MAT3:
                    return 'uniformMatrix3fv';
                case WebGLRenderingContext.FLOAT_MAT4:
                    return 'uniformMatrix4fv';
                case WebGLRenderingContext.SAMPLER_2D:
                    return 'uniform1i';
                case WebGLRenderingContext.SAMPLER_CUBE:
                    return 'uniform1i';
            }
        }
        static getUnifArgLenght(type) {
            switch (type) {
                case WebGLRenderingContext.FLOAT:
                case WebGLRenderingContext.FLOAT_VEC2:
                case WebGLRenderingContext.FLOAT_VEC3:
                case WebGLRenderingContext.FLOAT_VEC4:
                case WebGLRenderingContext.INT:
                case WebGLRenderingContext.INT_VEC2:
                case WebGLRenderingContext.INT_VEC3:
                case WebGLRenderingContext.INT_VEC4:
                case WebGLRenderingContext.SAMPLER_2D:
                case WebGLRenderingContext.SAMPLER_CUBE:
                    return 2;
                // case WebGLRenderingContext.BOOL:
                // case WebGLRenderingContext.BOOL_VEC2:
                // case WebGLRenderingContext.BOOL_VEC3:
                // case WebGLRenderingContext.BOOL_VEC4:
                case WebGLRenderingContext.FLOAT_MAT2:
                case WebGLRenderingContext.FLOAT_MAT3:
                case WebGLRenderingContext.FLOAT_MAT4:
                    return 3; // (location, transpose, value)
            }
        }
    }

    class Material {
        constructor(shader, name = null) {
            this.isDirty = true;
            // textures: Texture[] = [];
            this.textures = new Map();
            this.shader = Shader.clone(shader);
            this.name = name;
        }
        static useMaterial(mat, ctx) {
            ctx.useProgram(mat.shader.program);
        }
        static setUniform(mat, key, value) {
            if (mat.shader.uniforms[key] == null) {
                // console.warn(`${key} doesn't found!`);
                return;
            }
            mat.shader.uniforms[key].value = value;
            mat.shader.uniforms[key].isDirty = true;
            mat.isDirty = true;
        }
        static updateUniform(mat, ctx) {
            if (mat.shader.isDirty) {
                Shader.buildProgram(mat.shader, ctx);
                this.useMaterial(mat, ctx);
            }
            Shader.updateUniform(mat.shader);
            mat.isDirty = false;
        }
        static bindAllTextures(mat, ctx) {
            if (mat.textures.size == 0) ;
            for (let [uniform, tex] of mat.textures) {
                Texture.bindTexture(ctx, tex);
                if (tex.isDirty) {
                    Material.setUniform(mat, uniform, tex.channel);
                    tex.isDirty = false;
                }
            }
        }
        static unbindAllTextures(mat, ctx) {
            for (let [, tex] of mat.textures) {
                Texture.unbindTexture(ctx, tex);
            }
        }
        static setTexture(mat, name, tex) {
            if (mat.textures.has(name)) {
                tex.channel = mat.textures.get(name).channel;
            }
            else {
                tex.channel = mat.textures.size;
            }
            mat.textures.set(name, tex);
            mat.isDirty = true;
            tex.isDirty = true;
        }
    }
    Material.SHADER_PATH = 'res/shader/';

    class ComponentSystem {
    }

    class EntityMgr {
        static create(name = null) {
            this.hasNewMember = true;
            let gameObject = document.createElement(this.entityTag);
            if (name) {
                gameObject.dataset.name = name;
                gameObject.textContent = name;
            }
            gameObject.components = {};
            if (this.getDefaultComponent)
                this.addComponent(gameObject, this.getDefaultComponent());
            // Debug envent
            gameObject.addEventListener('pointerdown', e => {
                console.log('\t|-' + gameObject.dataset.name);
                console.log(gameObject.components);
                let trans = gameObject.components.Transform;
                // toggle visible
                if (trans != null) {
                    trans.isVisible = !trans.isVisible;
                }
                e.stopPropagation();
            });
            return gameObject;
        }
        static find(selector, root = document) {
            let nodes = Array.from(root.querySelectorAll(selector)); // convert NodeList to Array
            return nodes;
        }
        static getComponents(componentName) {
            return this.find(`${this.entityTag}[${componentName.toLowerCase()}]`).map(({ components }) => components[componentName]);
        }
        static getEntites(deps, root = document) {
            return this.find(`${this.entityTag}[${deps.join('][')}]`, root);
        }
        static addComponent(entity, component) {
            let componentName = component.constructor.name;
            entity.components[componentName] = component;
            entity.setAttribute(componentName, '');
            component.entity = entity;
            return component;
        }
    }
    EntityMgr.entityTag = 'ash-entity';
    EntityMgr.hasNewMember = false;

    class System {
        static loop() {
            for (let name in this.sysQueue) {
                let sys = this.sysQueue[name];
                if (EntityMgr.hasNewMember || sys.group.length == 0) {
                    sys.group = EntityMgr.getEntites(sys.depends);
                }
                sys.onUpdate();
            }
            EntityMgr.hasNewMember = false;
            this.deltaTime = (Date.now() - this.lastTime) / 1000;
            this.lastTime = Date.now();
            if (!this.isStoped)
                requestAnimationFrame(this.loop.bind(this));
        }
        static start() {
            if (!this.isStoped)
                return;
            this.isStoped = false;
            this.PID = requestAnimationFrame(this.loop.bind(this));
        }
        static stop() {
            cancelAnimationFrame(this.PID);
            this.isStoped = true;
        }
        static registSystem(system) {
            this.sysQueue[system.depends.toString()] = system;
        }
        static getSystem(system) {
            return this.sysQueue[system.depends.toString()];
        }
        static removeSystem(system) {
            this.sysQueue[system.depends.toString()] = null;
        }
    }
    System.lastTime = 0;
    System.deltaTime = 0;
    System.isStoped = true;
    System.sysQueue = {};
    System.start();

    class MeshRenderer {
        constructor(screen, mesh, material) {
            this.materials = [];
            this.isDirty = true;
            this.SID = MeshRendererSystem.regScreen(screen);
            this.mesh = mesh;
            MeshRendererSystem.attachMaterial(this, material);
        }
    }
    class MeshRendererSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [
                MeshRenderer.name
            ];
        }
        onUpdate() {
            // Before render
            for (let screen of MeshRendererSystem.ctxSet.values()) {
                if (screen.filters.length) {
                    screen.capture.bind();
                    screen.setViewport(screen.capture.width, screen.capture.height);
                    screen.clear();
                }
            }
            for (let { components } of this.group) {
                MeshRendererSystem.render(components.MeshRenderer);
            }
            // After render
            for (let screen of MeshRendererSystem.ctxSet.values()) {
                // post effects
                for (let [i, ft] of screen.filters.entries()) {
                    if (ft.renderToScreen) {
                        // Render to screen
                        ft.bind(null);
                        screen.setViewport();
                    }
                    else {
                        ft.bind();
                        screen.setViewport(ft.width, ft.height);
                        screen.clear(); // clear current framebuffer
                    }
                    MeshRendererSystem.render(ft.meshRender);
                }
                // // Render to screen
                // let lastft = screen.filters[screen.filters.length-1];
                // lastft.bind(null);
                // screen.setViewport();
                // MeshRendererSystem.render(lastft.meshRender);
            }
        }
        static regScreen(screen) {
            if (!this.ctxSet.has(screen)) {
                this.ctxSet.add(screen);
            }
            return this.ctxCache.push(screen) - 1;
        }
        static useMaterial(mr, index) {
            Material.useMaterial(mr.materials[index], this.ctxCache[mr.SID].gl);
        }
        static attachMaterial(mr, mat) {
            mr.materials.push(mat);
            Material.updateUniform(mat, this.ctxCache[mr.SID].gl); // the first time this material get context
            this.useMaterial(mr, 0);
            this.updateVAO(mr);
        }
        static bindVAO(mr, vao) {
            if (Screen.platform == 'iOS') {
                Mesh.bindAccessorsVBO(mr.mesh, this.ctxCache[mr.SID].gl, mr.materials[0].shader.attributes);
            }
            else {
                this.ctxCache[mr.SID].gl.bindVertexArray(vao);
            }
        }
        static updateVAO(mr) {
            if (mr.vao) {
                this.ctxCache[mr.SID].gl.deleteVertexArray(mr.vao);
            }
            mr.vao = this.ctxCache[mr.SID].gl.createVertexArray();
            this.bindVAO(mr, mr.vao);
            Mesh.bindAccessorsVBO(mr.mesh, this.ctxCache[mr.SID].gl, mr.materials[0].shader.attributes);
            this.bindVAO(mr, null);
        }
        static updateMaterial(target) {
            if (target.materials[0].isDirty) {
                Material.updateUniform(target.materials[0], this.ctxCache[target.SID].gl);
            }
        }
        static render(target) {
            // Enable material
            this.useMaterial(target, 0);
            if (target.entity) {
                if (!target.entity.components.Transform.isVisible)
                    return;
                let trans = target.entity.components.Transform;
                Material.setUniform(target.materials[0], 'M', trans.worldMatrix);
                Material.setUniform(target.materials[0], 'nM', trans.worldNormalMatrix);
            }
            // Update uniforms of material
            this.updateMaterial(target);
            // Bind all textures
            Material.bindAllTextures(target.materials[0], this.ctxCache[target.SID].gl);
            // Bind Mesh
            this.bindVAO(target, target.vao); // Bind VAO
            Mesh.bindIndecesEBO(target.mesh, this.ctxCache[target.SID].gl);
            // Drawcall
            Mesh.drawElement(target.mesh, this.ctxCache[target.SID].gl);
            // Clean texture channels
            Material.unbindAllTextures(target.materials[0], this.ctxCache[target.SID].gl);
        }
        // According those discussion below, having actors draw themselves is not a good design
        // https://gamedev.stackexchange.com/questions/50531/entity-component-based-engine-rendering-separation-from-logic
        // https://gamedev.stackexchange.com/questions/14133/should-actors-in-a-game-be-responsible-for-drawing-themselves/14138#14138
        static beforeRender() {
        }
        static afterRender() {
        }
    }
    MeshRendererSystem.ctxCache = [];
    MeshRendererSystem.ctxSet = new Set();
    System.registSystem(new MeshRendererSystem());

    class QuadMesh extends Mesh {
        constructor() {
            let meshVBO = new Float32Array([
                -1, 1, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
                1, 1, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0,
                1, -1, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0,
                -1, -1, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0
            ]);
            let meshEBO = new Uint16Array([
                0, 1, 2,
                0, 2, 3
            ]);
            let vbo = new bufferView(meshVBO.buffer, {
                byteOffset: meshVBO.byteOffset,
                byteLength: meshVBO.byteLength,
                byteStride: 8 * 4,
                target: WebGL2RenderingContext.ARRAY_BUFFER
            });
            let ebo = new bufferView(meshEBO.buffer, {
                byteOffset: meshEBO.byteOffset,
                byteLength: meshEBO.byteLength,
                byteStride: 0,
                target: WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER
            });
            let position = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 0,
                type: "VEC3",
                count: 4
            }, 'POSITION');
            let uv = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 3 * 4,
                type: "VEC2",
                count: 4
            }, 'TEXCOORD_0');
            let normal = new Accessor({
                bufferView: vbo,
                componentType: WebGL2RenderingContext.FLOAT,
                byteOffset: 5 * 4,
                type: "VEC3",
                count: 4
            }, 'NORMAL');
            let indices = new Accessor({
                bufferView: ebo,
                componentType: WebGL2RenderingContext.UNSIGNED_SHORT,
                byteOffset: 0,
                type: "SCALAR",
                count: 6
            });
            super([position, uv, normal], indices);
        }
    }

    // Post effect
    class Filter {
        constructor(screen, shader, width = screen.pow2width, height = screen.pow2height) {
            this.color = [];
            this.depth = [];
            this.renderToScreen = true;
            this.ctx = screen.gl;
            this.screen = screen;
            this.width = width;
            this.height = height;
            // Create framebuffer
            this.buffer = this.ctx.createFramebuffer();
            this.output = this.attachTexture();
            this.mesh = new QuadMesh();
            this.material = new Material(shader);
            this.meshRender = new MeshRenderer(screen, this.mesh, this.material);
        }
        clone(screen = this.screen) {
            return new Filter(screen, Shader.clone(this.material.shader), this.width, this.height);
        }
        setInput(tex, channel = 'base') {
            this.input = tex;
            Material.setTexture(this.material, channel, tex);
            this.material.isDirty = true;
        }
        bind(target = this.buffer) {
            this.ctx.bindFramebuffer(WebGL2RenderingContext.FRAMEBUFFER, target);
        }
        attachTexture() {
            this.bind();
            let color = new Texture(null, Filter.sampleColor, this.width, this.height);
            Texture.createTexture(this.ctx, color);
            this.ctx.framebufferTexture2D(Filter.FRAMEBUFFER, Filter.COLOR_ATTACH_BASE + this.color.length, color.glType, color.texture, color.level);
            this.color.push(color);
            let depth = new Texture(null, Filter.sampleDepth, this.width, this.height);
            depth.internalformat = WebGL2RenderingContext.DEPTH_COMPONENT24;
            depth.format = WebGL2RenderingContext.DEPTH_COMPONENT;
            depth.type = WebGL2RenderingContext.UNSIGNED_INT;
            Texture.createTexture(this.ctx, depth);
            this.ctx.framebufferTexture2D(Filter.FRAMEBUFFER, Filter.DEPTH_ATTACHMENT, depth.glType, depth.texture, depth.level);
            this.depth.push(depth);
            this.bind(null);
            return color;
        }
    }
    Filter.sampleColor = {
        magFilter: WebGL2RenderingContext.LINEAR,
        minFilter: WebGL2RenderingContext.LINEAR,
        wrapS: WebGL2RenderingContext.CLAMP_TO_EDGE,
        wrapT: WebGL2RenderingContext.CLAMP_TO_EDGE,
    };
    Filter.sampleDepth = {
        magFilter: WebGL2RenderingContext.NEAREST,
        minFilter: WebGL2RenderingContext.NEAREST,
        wrapS: WebGL2RenderingContext.CLAMP_TO_EDGE,
        wrapT: WebGL2RenderingContext.CLAMP_TO_EDGE,
    };
    Filter.COLOR_ATTACH_BASE = WebGL2RenderingContext.COLOR_ATTACHMENT0;
    Filter.DEPTH_ATTACHMENT = WebGL2RenderingContext.DEPTH_ATTACHMENT;
    Filter.FRAMEBUFFER = WebGL2RenderingContext.FRAMEBUFFER;

    class Screen {
        constructor(selector) {
            this.filters = [];
            this.output = null;
            // Detect device
            if (navigator.userAgent.indexOf('iPhone') != -1) {
                Screen.platform = 'iOS';
            }
            this.canvas = document.querySelector(selector);
            if (!this.canvas) {
                console.error('Canvas not found!');
                return;
            }
            this.gl = this.canvas.getContext('webgl2');
            if (!this.gl) {
                console.error('Get Context Failed');
                return;
            }
            this.gl.enable(this.gl.DEPTH_TEST);
            this.gl.enable(this.gl.BLEND);
            this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
            // this.ext = this.gl.getExtension('WEBGL_draw_buffers');
            this.setScreenSize(); // initial - full screen
            // initial capture
            this.pow2width = nearestPow2(this.width);
            this.pow2height = nearestPow2(this.height);
            this.capture = new Filter(this, new Shader(), this.pow2width, this.pow2height);
            this.capture.renderToScreen = false;
            // Bloom.initFilters(this)
            // this.attachFilter(new Vignetting(this));
        }
        setScreenSize(width = window.innerWidth, height = window.innerHeight) {
            let { devicePixelRatio } = window;
            console.log(devicePixelRatio);
            this.canvas.setAttribute('width', width * devicePixelRatio + '');
            this.canvas.setAttribute('height', height * devicePixelRatio + '');
            this.canvas.style.width = width + 'px';
            this.canvas.style.height = height + 'px';
            this.width = width * devicePixelRatio;
            this.height = height * devicePixelRatio;
            this.ratio = devicePixelRatio;
            this.setViewport();
        }
        setViewport(width = this.width, height = this.height) {
            this.gl.viewport(0, 0, width, height);
        }
        clear(r = 0, g = 0, b = 0, a = 0, mode = this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT) {
            this.gl.clearColor(r, g, b, a);
            this.gl.clear(mode);
        }
        attachFilter(ft) {
            if (this.output == null) {
                // filter head
                ft.setInput(this.capture.output);
            }
            else {
                // Attach to the filter chain
                this.output.renderToScreen = false;
                ft.setInput(this.output.output);
            }
            this.filters.push(ft);
            this.output = ft;
        }
    }
    Screen.platform = 'unknown';
    // https://bocoup.com/blog/find-the-closest-power-of-2-with-javascript#comment-351783898
    function nearestPow2(n) {
        var m = n;
        for (var i = 0; m > 1; i++) {
            m = m >>> 1;
        }
        // Round to nearest power
        if (n & 1 << i - 1) {
            i++;
        }
        return 1 << i;
    }

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    /**
     * Common utilities
     * @module glMatrix
     */

    // Configuration Constants
    var EPSILON = 0.000001;
    var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
    var RANDOM = Math.random;

    var degree = Math.PI / 180;

    /**
     * 3x3 Matrix
     * @module mat3
     */

    /**
     * Creates a new identity mat3
     *
     * @returns {mat3} a new 3x3 matrix
     */
    function create$2() {
      var out = new ARRAY_TYPE(9);
      if (ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
      }
      out[0] = 1;
      out[4] = 1;
      out[8] = 1;
      return out;
    }

    /**
     * 4x4 Matrix<br>Format: column-major, when typed out it looks like row-major<br>The matrices are being post multiplied.
     * @module mat4
     */

    /**
     * Creates a new identity mat4
     *
     * @returns {mat4} a new 4x4 matrix
     */
    function create$3() {
      var out = new ARRAY_TYPE(16);
      if (ARRAY_TYPE != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
      }
      out[0] = 1;
      out[5] = 1;
      out[10] = 1;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param {mat4} a matrix to clone
     * @returns {mat4} a new 4x4 matrix
     */
    function clone$3(a) {
      var out = new ARRAY_TYPE(16);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }

    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function copy$3(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }

    /**
     * Create a new mat4 with the given values
     *
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} A new mat4
     */
    function fromValues$3(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      var out = new ARRAY_TYPE(16);
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }

    /**
     * Set the components of a mat4 to the given values
     *
     * @param {mat4} out the receiving matrix
     * @param {Number} m00 Component in column 0, row 0 position (index 0)
     * @param {Number} m01 Component in column 0, row 1 position (index 1)
     * @param {Number} m02 Component in column 0, row 2 position (index 2)
     * @param {Number} m03 Component in column 0, row 3 position (index 3)
     * @param {Number} m10 Component in column 1, row 0 position (index 4)
     * @param {Number} m11 Component in column 1, row 1 position (index 5)
     * @param {Number} m12 Component in column 1, row 2 position (index 6)
     * @param {Number} m13 Component in column 1, row 3 position (index 7)
     * @param {Number} m20 Component in column 2, row 0 position (index 8)
     * @param {Number} m21 Component in column 2, row 1 position (index 9)
     * @param {Number} m22 Component in column 2, row 2 position (index 10)
     * @param {Number} m23 Component in column 2, row 3 position (index 11)
     * @param {Number} m30 Component in column 3, row 0 position (index 12)
     * @param {Number} m31 Component in column 3, row 1 position (index 13)
     * @param {Number} m32 Component in column 3, row 2 position (index 14)
     * @param {Number} m33 Component in column 3, row 3 position (index 15)
     * @returns {mat4} out
     */
    function set$3(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      out[0] = m00;
      out[1] = m01;
      out[2] = m02;
      out[3] = m03;
      out[4] = m10;
      out[5] = m11;
      out[6] = m12;
      out[7] = m13;
      out[8] = m20;
      out[9] = m21;
      out[10] = m22;
      out[11] = m23;
      out[12] = m30;
      out[13] = m31;
      out[14] = m32;
      out[15] = m33;
      return out;
    }

    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */
    function identity$3(out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Transpose the values of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function transpose$2(out, a) {
      // If we are transposing ourselves we can skip a few steps but have to cache some values
      if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        var a12 = a[6],
            a13 = a[7];
        var a23 = a[11];

        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
      } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
      }

      return out;
    }

    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function invert$3(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32;

      // Calculate the determinant
      var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }
      det = 1.0 / det;

      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

      return out;
    }

    /**
     * Calculates the adjugate of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */
    function adjoint$2(out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
      out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
      out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
      out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
      out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
      out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
      out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
      out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
      out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
      out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
      out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
      out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
      out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
      out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
      out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
      out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
      return out;
    }

    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */
    function determinant$3(a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      var b00 = a00 * a11 - a01 * a10;
      var b01 = a00 * a12 - a02 * a10;
      var b02 = a00 * a13 - a03 * a10;
      var b03 = a01 * a12 - a02 * a11;
      var b04 = a01 * a13 - a03 * a11;
      var b05 = a02 * a13 - a03 * a12;
      var b06 = a20 * a31 - a21 * a30;
      var b07 = a20 * a32 - a22 * a30;
      var b08 = a20 * a33 - a23 * a30;
      var b09 = a21 * a32 - a22 * a31;
      var b10 = a21 * a33 - a23 * a31;
      var b11 = a22 * a33 - a23 * a32;

      // Calculate the determinant
      return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    }

    /**
     * Multiplies two mat4s
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function multiply$3(out, a, b) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3];
      var a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];
      var a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];
      var a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];

      // Cache only the current line of the second matrix
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
      out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
      out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

      b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
      out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out;
    }

    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */
    function translate$2(out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];
      var a00 = void 0,
          a01 = void 0,
          a02 = void 0,
          a03 = void 0;
      var a10 = void 0,
          a11 = void 0,
          a12 = void 0,
          a13 = void 0;
      var a20 = void 0,
          a21 = void 0,
          a22 = void 0,
          a23 = void 0;

      if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
      } else {
        a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
        a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
        a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

        out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
        out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
        out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
      }

      return out;
    }

    /**
     * Scales the mat4 by the dimensions in the given vec3 not using vectorization
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/
    function scale$3(out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];

      out[0] = a[0] * x;
      out[1] = a[1] * x;
      out[2] = a[2] * x;
      out[3] = a[3] * x;
      out[4] = a[4] * y;
      out[5] = a[5] * y;
      out[6] = a[6] * y;
      out[7] = a[7] * y;
      out[8] = a[8] * z;
      out[9] = a[9] * z;
      out[10] = a[10] * z;
      out[11] = a[11] * z;
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    }

    /**
     * Rotates a mat4 by the given angle around the given axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function rotate$3(out, a, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2];
      var len = Math.sqrt(x * x + y * y + z * z);
      var s = void 0,
          c = void 0,
          t = void 0;
      var a00 = void 0,
          a01 = void 0,
          a02 = void 0,
          a03 = void 0;
      var a10 = void 0,
          a11 = void 0,
          a12 = void 0,
          a13 = void 0;
      var a20 = void 0,
          a21 = void 0,
          a22 = void 0,
          a23 = void 0;
      var b00 = void 0,
          b01 = void 0,
          b02 = void 0;
      var b10 = void 0,
          b11 = void 0,
          b12 = void 0;
      var b20 = void 0,
          b21 = void 0,
          b22 = void 0;

      if (len < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;

      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;

      a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
      a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
      a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

      // Construct the elements of the rotation matrix
      b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
      b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
      b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

      // Perform rotation-specific matrix multiplication
      out[0] = a00 * b00 + a10 * b01 + a20 * b02;
      out[1] = a01 * b00 + a11 * b01 + a21 * b02;
      out[2] = a02 * b00 + a12 * b01 + a22 * b02;
      out[3] = a03 * b00 + a13 * b01 + a23 * b02;
      out[4] = a00 * b10 + a10 * b11 + a20 * b12;
      out[5] = a01 * b10 + a11 * b11 + a21 * b12;
      out[6] = a02 * b10 + a12 * b11 + a22 * b12;
      out[7] = a03 * b10 + a13 * b11 + a23 * b12;
      out[8] = a00 * b20 + a10 * b21 + a20 * b22;
      out[9] = a01 * b20 + a11 * b21 + a21 * b22;
      out[10] = a02 * b20 + a12 * b21 + a22 * b22;
      out[11] = a03 * b20 + a13 * b21 + a23 * b22;

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }
      return out;
    }

    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateX(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      // Perform axis-specific matrix multiplication
      out[4] = a10 * c + a20 * s;
      out[5] = a11 * c + a21 * s;
      out[6] = a12 * c + a22 * s;
      out[7] = a13 * c + a23 * s;
      out[8] = a20 * c - a10 * s;
      out[9] = a21 * c - a11 * s;
      out[10] = a22 * c - a12 * s;
      out[11] = a23 * c - a13 * s;
      return out;
    }

    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateY(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a20 = a[8];
      var a21 = a[9];
      var a22 = a[10];
      var a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      // Perform axis-specific matrix multiplication
      out[0] = a00 * c - a20 * s;
      out[1] = a01 * c - a21 * s;
      out[2] = a02 * c - a22 * s;
      out[3] = a03 * c - a23 * s;
      out[8] = a00 * s + a20 * c;
      out[9] = a01 * s + a21 * c;
      out[10] = a02 * s + a22 * c;
      out[11] = a03 * s + a23 * c;
      return out;
    }

    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function rotateZ(out, a, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);
      var a00 = a[0];
      var a01 = a[1];
      var a02 = a[2];
      var a03 = a[3];
      var a10 = a[4];
      var a11 = a[5];
      var a12 = a[6];
      var a13 = a[7];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      // Perform axis-specific matrix multiplication
      out[0] = a00 * c + a10 * s;
      out[1] = a01 * c + a11 * s;
      out[2] = a02 * c + a12 * s;
      out[3] = a03 * c + a13 * s;
      out[4] = a10 * c - a00 * s;
      out[5] = a11 * c - a01 * s;
      out[6] = a12 * c - a02 * s;
      out[7] = a13 * c - a03 * s;
      return out;
    }

    /**
     * Creates a matrix from a vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    function fromTranslation$2(out, v) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from a vector scaling
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.scale(dest, dest, vec);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {vec3} v Scaling vector
     * @returns {mat4} out
     */
    function fromScaling$3(out, v) {
      out[0] = v[0];
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = v[1];
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = v[2];
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from a given angle around a given axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotate(dest, dest, rad, axis);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */
    function fromRotation$3(out, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2];
      var len = Math.sqrt(x * x + y * y + z * z);
      var s = void 0,
          c = void 0,
          t = void 0;

      if (len < EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;

      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;

      // Perform rotation-specific matrix multiplication
      out[0] = x * x * t + c;
      out[1] = y * x * t + z * s;
      out[2] = z * x * t - y * s;
      out[3] = 0;
      out[4] = x * y * t - z * s;
      out[5] = y * y * t + c;
      out[6] = z * y * t + x * s;
      out[7] = 0;
      out[8] = x * z * t + y * s;
      out[9] = y * z * t - x * s;
      out[10] = z * z * t + c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from the given angle around the X axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateX(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromXRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);

      // Perform axis-specific matrix multiplication
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = c;
      out[6] = s;
      out[7] = 0;
      out[8] = 0;
      out[9] = -s;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from the given angle around the Y axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateY(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromYRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);

      // Perform axis-specific matrix multiplication
      out[0] = c;
      out[1] = 0;
      out[2] = -s;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = s;
      out[9] = 0;
      out[10] = c;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from the given angle around the Z axis
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.rotateZ(dest, dest, rad);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */
    function fromZRotation(out, rad) {
      var s = Math.sin(rad);
      var c = Math.cos(rad);

      // Perform axis-specific matrix multiplication
      out[0] = c;
      out[1] = s;
      out[2] = 0;
      out[3] = 0;
      out[4] = -s;
      out[5] = c;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    }

    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */
    function fromRotationTranslation(out, q, v) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;

      out[0] = 1 - (yy + zz);
      out[1] = xy + wz;
      out[2] = xz - wy;
      out[3] = 0;
      out[4] = xy - wz;
      out[5] = 1 - (xx + zz);
      out[6] = yz + wx;
      out[7] = 0;
      out[8] = xz + wy;
      out[9] = yz - wx;
      out[10] = 1 - (xx + yy);
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;

      return out;
    }

    /**
     * Creates a new mat4 from a dual quat.
     *
     * @param {mat4} out Matrix
     * @param {quat2} a Dual Quaternion
     * @returns {mat4} mat4 receiving operation result
     */
    function fromQuat2(out, a) {
      var translation = new ARRAY_TYPE(3);
      var bx = -a[0],
          by = -a[1],
          bz = -a[2],
          bw = a[3],
          ax = a[4],
          ay = a[5],
          az = a[6],
          aw = a[7];

      var magnitude = bx * bx + by * by + bz * bz + bw * bw;
      //Only scale if it makes sense
      if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
      } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
      }
      fromRotationTranslation(out, a, translation);
      return out;
    }

    /**
     * Returns the translation vector component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslation,
     *  the returned vector will be the same as the translation vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive translation component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getTranslation(out, mat) {
      out[0] = mat[12];
      out[1] = mat[13];
      out[2] = mat[14];

      return out;
    }

    /**
     * Returns the scaling factor component of a transformation
     *  matrix. If a matrix is built with fromRotationTranslationScale
     *  with a normalized Quaternion paramter, the returned vector will be
     *  the same as the scaling vector
     *  originally supplied.
     * @param  {vec3} out Vector to receive scaling factor component
     * @param  {mat4} mat Matrix to be decomposed (input)
     * @return {vec3} out
     */
    function getScaling(out, mat) {
      var m11 = mat[0];
      var m12 = mat[1];
      var m13 = mat[2];
      var m21 = mat[4];
      var m22 = mat[5];
      var m23 = mat[6];
      var m31 = mat[8];
      var m32 = mat[9];
      var m33 = mat[10];

      out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
      out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
      out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

      return out;
    }

    /**
     * Returns a quaternion representing the rotational component
     *  of a transformation matrix. If a matrix is built with
     *  fromRotationTranslation, the returned quaternion will be the
     *  same as the quaternion originally supplied.
     * @param {quat} out Quaternion to receive the rotation component
     * @param {mat4} mat Matrix to be decomposed (input)
     * @return {quat} out
     */
    function getRotation(out, mat) {
      // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
      var trace = mat[0] + mat[5] + mat[10];
      var S = 0;

      if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (mat[6] - mat[9]) / S;
        out[1] = (mat[8] - mat[2]) / S;
        out[2] = (mat[1] - mat[4]) / S;
      } else if (mat[0] > mat[5] && mat[0] > mat[10]) {
        S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
        out[3] = (mat[6] - mat[9]) / S;
        out[0] = 0.25 * S;
        out[1] = (mat[1] + mat[4]) / S;
        out[2] = (mat[8] + mat[2]) / S;
      } else if (mat[5] > mat[10]) {
        S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
        out[3] = (mat[8] - mat[2]) / S;
        out[0] = (mat[1] + mat[4]) / S;
        out[1] = 0.25 * S;
        out[2] = (mat[6] + mat[9]) / S;
      } else {
        S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
        out[3] = (mat[1] - mat[4]) / S;
        out[0] = (mat[8] + mat[2]) / S;
        out[1] = (mat[6] + mat[9]) / S;
        out[2] = 0.25 * S;
      }

      return out;
    }

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @returns {mat4} out
     */
    function fromRotationTranslationScale(out, q, v, s) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;
      var sx = s[0];
      var sy = s[1];
      var sz = s[2];

      out[0] = (1 - (yy + zz)) * sx;
      out[1] = (xy + wz) * sx;
      out[2] = (xz - wy) * sx;
      out[3] = 0;
      out[4] = (xy - wz) * sy;
      out[5] = (1 - (xx + zz)) * sy;
      out[6] = (yz + wx) * sy;
      out[7] = 0;
      out[8] = (xz + wy) * sz;
      out[9] = (yz - wx) * sz;
      out[10] = (1 - (xx + yy)) * sz;
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;

      return out;
    }

    /**
     * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     mat4.translate(dest, origin);
     *     let quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *     mat4.scale(dest, scale)
     *     mat4.translate(dest, negativeOrigin);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @param {vec3} s Scaling vector
     * @param {vec3} o The origin vector around which to scale and rotate
     * @returns {mat4} out
     */
    function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var xy = x * y2;
      var xz = x * z2;
      var yy = y * y2;
      var yz = y * z2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;

      var sx = s[0];
      var sy = s[1];
      var sz = s[2];

      var ox = o[0];
      var oy = o[1];
      var oz = o[2];

      var out0 = (1 - (yy + zz)) * sx;
      var out1 = (xy + wz) * sx;
      var out2 = (xz - wy) * sx;
      var out4 = (xy - wz) * sy;
      var out5 = (1 - (xx + zz)) * sy;
      var out6 = (yz + wx) * sy;
      var out8 = (xz + wy) * sz;
      var out9 = (yz - wx) * sz;
      var out10 = (1 - (xx + yy)) * sz;

      out[0] = out0;
      out[1] = out1;
      out[2] = out2;
      out[3] = 0;
      out[4] = out4;
      out[5] = out5;
      out[6] = out6;
      out[7] = 0;
      out[8] = out8;
      out[9] = out9;
      out[10] = out10;
      out[11] = 0;
      out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
      out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
      out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
      out[15] = 1;

      return out;
    }

    /**
     * Calculates a 4x4 matrix from the given quaternion
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat} q Quaternion to create matrix from
     *
     * @returns {mat4} out
     */
    function fromQuat$1(out, q) {
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3];
      var x2 = x + x;
      var y2 = y + y;
      var z2 = z + z;

      var xx = x * x2;
      var yx = y * x2;
      var yy = y * y2;
      var zx = z * x2;
      var zy = z * y2;
      var zz = z * z2;
      var wx = w * x2;
      var wy = w * y2;
      var wz = w * z2;

      out[0] = 1 - yy - zz;
      out[1] = yx + wz;
      out[2] = zx - wy;
      out[3] = 0;

      out[4] = yx - wz;
      out[5] = 1 - xx - zz;
      out[6] = zy + wx;
      out[7] = 0;

      out[8] = zx + wy;
      out[9] = zy - wx;
      out[10] = 1 - xx - yy;
      out[11] = 0;

      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;

      return out;
    }

    /**
     * Generates a frustum matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Number} left Left bound of the frustum
     * @param {Number} right Right bound of the frustum
     * @param {Number} bottom Bottom bound of the frustum
     * @param {Number} top Top bound of the frustum
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function frustum(out, left, right, bottom, top, near, far) {
      var rl = 1 / (right - left);
      var tb = 1 / (top - bottom);
      var nf = 1 / (near - far);
      out[0] = near * 2 * rl;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = near * 2 * tb;
      out[6] = 0;
      out[7] = 0;
      out[8] = (right + left) * rl;
      out[9] = (top + bottom) * tb;
      out[10] = (far + near) * nf;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[14] = far * near * 2 * nf;
      out[15] = 0;
      return out;
    }

    /**
     * Generates a perspective projection matrix with the given bounds.
     * Passing null/undefined/no value for far will generate infinite projection matrix.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum, can be null or Infinity
     * @returns {mat4} out
     */
    function perspective(out, fovy, aspect, near, far) {
      var f = 1.0 / Math.tan(fovy / 2),
          nf = void 0;
      out[0] = f / aspect;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = f;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[15] = 0;
      if (far != null && far !== Infinity) {
        nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
      } else {
        out[10] = -1;
        out[14] = -2 * near;
      }
      return out;
    }

    /**
     * Generates a perspective projection matrix with the given field of view.
     * This is primarily useful for generating projection matrices to be used
     * with the still experiemental WebVR API.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function perspectiveFromFieldOfView(out, fov, near, far) {
      var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
      var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
      var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
      var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
      var xScale = 2.0 / (leftTan + rightTan);
      var yScale = 2.0 / (upTan + downTan);

      out[0] = xScale;
      out[1] = 0.0;
      out[2] = 0.0;
      out[3] = 0.0;
      out[4] = 0.0;
      out[5] = yScale;
      out[6] = 0.0;
      out[7] = 0.0;
      out[8] = -((leftTan - rightTan) * xScale * 0.5);
      out[9] = (upTan - downTan) * yScale * 0.5;
      out[10] = far / (near - far);
      out[11] = -1.0;
      out[12] = 0.0;
      out[13] = 0.0;
      out[14] = far * near / (near - far);
      out[15] = 0.0;
      return out;
    }

    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */
    function ortho(out, left, right, bottom, top, near, far) {
      var lr = 1 / (left - right);
      var bt = 1 / (bottom - top);
      var nf = 1 / (near - far);
      out[0] = -2 * lr;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = -2 * bt;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 2 * nf;
      out[11] = 0;
      out[12] = (left + right) * lr;
      out[13] = (top + bottom) * bt;
      out[14] = (far + near) * nf;
      out[15] = 1;
      return out;
    }

    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis.
     * If you want a matrix that actually makes an object look at another object, you should use targetTo instead.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function lookAt(out, eye, center, up) {
      var x0 = void 0,
          x1 = void 0,
          x2 = void 0,
          y0 = void 0,
          y1 = void 0,
          y2 = void 0,
          z0 = void 0,
          z1 = void 0,
          z2 = void 0,
          len = void 0;
      var eyex = eye[0];
      var eyey = eye[1];
      var eyez = eye[2];
      var upx = up[0];
      var upy = up[1];
      var upz = up[2];
      var centerx = center[0];
      var centery = center[1];
      var centerz = center[2];

      if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
        return identity$3(out);
      }

      z0 = eyex - centerx;
      z1 = eyey - centery;
      z2 = eyez - centerz;

      len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
      z0 *= len;
      z1 *= len;
      z2 *= len;

      x0 = upy * z2 - upz * z1;
      x1 = upz * z0 - upx * z2;
      x2 = upx * z1 - upy * z0;
      len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
      if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
      } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      y0 = z1 * x2 - z2 * x1;
      y1 = z2 * x0 - z0 * x2;
      y2 = z0 * x1 - z1 * x0;

      len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
      if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
      } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
      }

      out[0] = x0;
      out[1] = y0;
      out[2] = z0;
      out[3] = 0;
      out[4] = x1;
      out[5] = y1;
      out[6] = z1;
      out[7] = 0;
      out[8] = x2;
      out[9] = y2;
      out[10] = z2;
      out[11] = 0;
      out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
      out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
      out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
      out[15] = 1;

      return out;
    }

    /**
     * Generates a matrix that makes something look at something else.
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */
    function targetTo(out, eye, target, up) {
      var eyex = eye[0],
          eyey = eye[1],
          eyez = eye[2],
          upx = up[0],
          upy = up[1],
          upz = up[2];

      var z0 = eyex - target[0],
          z1 = eyey - target[1],
          z2 = eyez - target[2];

      var len = z0 * z0 + z1 * z1 + z2 * z2;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
      }

      var x0 = upy * z2 - upz * z1,
          x1 = upz * z0 - upx * z2,
          x2 = upx * z1 - upy * z0;

      len = x0 * x0 + x1 * x1 + x2 * x2;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      out[0] = x0;
      out[1] = x1;
      out[2] = x2;
      out[3] = 0;
      out[4] = z1 * x2 - z2 * x1;
      out[5] = z2 * x0 - z0 * x2;
      out[6] = z0 * x1 - z1 * x0;
      out[7] = 0;
      out[8] = z0;
      out[9] = z1;
      out[10] = z2;
      out[11] = 0;
      out[12] = eyex;
      out[13] = eyey;
      out[14] = eyez;
      out[15] = 1;
      return out;
    }
    /**
     * Returns a string representation of a mat4
     *
     * @param {mat4} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */
    function str$3(a) {
      return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
    }

    /**
     * Returns Frobenius norm of a mat4
     *
     * @param {mat4} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */
    function frob$3(a) {
      return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
    }

    /**
     * Adds two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function add$3(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      out[4] = a[4] + b[4];
      out[5] = a[5] + b[5];
      out[6] = a[6] + b[6];
      out[7] = a[7] + b[7];
      out[8] = a[8] + b[8];
      out[9] = a[9] + b[9];
      out[10] = a[10] + b[10];
      out[11] = a[11] + b[11];
      out[12] = a[12] + b[12];
      out[13] = a[13] + b[13];
      out[14] = a[14] + b[14];
      out[15] = a[15] + b[15];
      return out;
    }

    /**
     * Subtracts matrix b from matrix a
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */
    function subtract$3(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      out[4] = a[4] - b[4];
      out[5] = a[5] - b[5];
      out[6] = a[6] - b[6];
      out[7] = a[7] - b[7];
      out[8] = a[8] - b[8];
      out[9] = a[9] - b[9];
      out[10] = a[10] - b[10];
      out[11] = a[11] - b[11];
      out[12] = a[12] - b[12];
      out[13] = a[13] - b[13];
      out[14] = a[14] - b[14];
      out[15] = a[15] - b[15];
      return out;
    }

    /**
     * Multiply each element of the matrix by a scalar.
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {Number} b amount to scale the matrix's elements by
     * @returns {mat4} out
     */
    function multiplyScalar$3(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      out[4] = a[4] * b;
      out[5] = a[5] * b;
      out[6] = a[6] * b;
      out[7] = a[7] * b;
      out[8] = a[8] * b;
      out[9] = a[9] * b;
      out[10] = a[10] * b;
      out[11] = a[11] * b;
      out[12] = a[12] * b;
      out[13] = a[13] * b;
      out[14] = a[14] * b;
      out[15] = a[15] * b;
      return out;
    }

    /**
     * Adds two mat4's after multiplying each element of the second operand by a scalar value.
     *
     * @param {mat4} out the receiving vector
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @param {Number} scale the amount to scale b's elements by before adding
     * @returns {mat4} out
     */
    function multiplyScalarAndAdd$3(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      out[3] = a[3] + b[3] * scale;
      out[4] = a[4] + b[4] * scale;
      out[5] = a[5] + b[5] * scale;
      out[6] = a[6] + b[6] * scale;
      out[7] = a[7] + b[7] * scale;
      out[8] = a[8] + b[8] * scale;
      out[9] = a[9] + b[9] * scale;
      out[10] = a[10] + b[10] * scale;
      out[11] = a[11] + b[11] * scale;
      out[12] = a[12] + b[12] * scale;
      out[13] = a[13] + b[13] * scale;
      out[14] = a[14] + b[14] * scale;
      out[15] = a[15] + b[15] * scale;
      return out;
    }

    /**
     * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function exactEquals$3(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
    }

    /**
     * Returns whether or not the matrices have approximately the same elements in the same position.
     *
     * @param {mat4} a The first matrix.
     * @param {mat4} b The second matrix.
     * @returns {Boolean} True if the matrices are equal, false otherwise.
     */
    function equals$4(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var a4 = a[4],
          a5 = a[5],
          a6 = a[6],
          a7 = a[7];
      var a8 = a[8],
          a9 = a[9],
          a10 = a[10],
          a11 = a[11];
      var a12 = a[12],
          a13 = a[13],
          a14 = a[14],
          a15 = a[15];

      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      var b4 = b[4],
          b5 = b[5],
          b6 = b[6],
          b7 = b[7];
      var b8 = b[8],
          b9 = b[9],
          b10 = b[10],
          b11 = b[11];
      var b12 = b[12],
          b13 = b[13],
          b14 = b[14],
          b15 = b[15];

      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
    }

    /**
     * Alias for {@link mat4.multiply}
     * @function
     */
    var mul$3 = multiply$3;

    /**
     * Alias for {@link mat4.subtract}
     * @function
     */
    var sub$3 = subtract$3;

    var mat4 = /*#__PURE__*/Object.freeze({
        create: create$3,
        clone: clone$3,
        copy: copy$3,
        fromValues: fromValues$3,
        set: set$3,
        identity: identity$3,
        transpose: transpose$2,
        invert: invert$3,
        adjoint: adjoint$2,
        determinant: determinant$3,
        multiply: multiply$3,
        translate: translate$2,
        scale: scale$3,
        rotate: rotate$3,
        rotateX: rotateX,
        rotateY: rotateY,
        rotateZ: rotateZ,
        fromTranslation: fromTranslation$2,
        fromScaling: fromScaling$3,
        fromRotation: fromRotation$3,
        fromXRotation: fromXRotation,
        fromYRotation: fromYRotation,
        fromZRotation: fromZRotation,
        fromRotationTranslation: fromRotationTranslation,
        fromQuat2: fromQuat2,
        getTranslation: getTranslation,
        getScaling: getScaling,
        getRotation: getRotation,
        fromRotationTranslationScale: fromRotationTranslationScale,
        fromRotationTranslationScaleOrigin: fromRotationTranslationScaleOrigin,
        fromQuat: fromQuat$1,
        frustum: frustum,
        perspective: perspective,
        perspectiveFromFieldOfView: perspectiveFromFieldOfView,
        ortho: ortho,
        lookAt: lookAt,
        targetTo: targetTo,
        str: str$3,
        frob: frob$3,
        add: add$3,
        subtract: subtract$3,
        multiplyScalar: multiplyScalar$3,
        multiplyScalarAndAdd: multiplyScalarAndAdd$3,
        exactEquals: exactEquals$3,
        equals: equals$4,
        mul: mul$3,
        sub: sub$3
    });

    /**
     * 3 Dimensional Vector
     * @module vec3
     */

    /**
     * Creates a new, empty vec3
     *
     * @returns {vec3} a new 3D vector
     */
    function create$4() {
      var out = new ARRAY_TYPE(3);
      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }
      return out;
    }

    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param {vec3} a vector to clone
     * @returns {vec3} a new 3D vector
     */
    function clone$4(a) {
      var out = new ARRAY_TYPE(3);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }

    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} a new 3D vector
     */
    function fromValues$4(x, y, z) {
      var out = new ARRAY_TYPE(3);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }

    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */
    function copy$4(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    }

    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */
    function set$4(out, x, y, z) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    }

    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function add$4(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function subtract$4(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out;
    }

    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function multiply$4(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      return out;
    }

    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function divide(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      return out;
    }

    /**
     * Math.ceil the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to ceil
     * @returns {vec3} out
     */
    function ceil(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      out[2] = Math.ceil(a[2]);
      return out;
    }

    /**
     * Math.floor the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to floor
     * @returns {vec3} out
     */
    function floor(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      out[2] = Math.floor(a[2]);
      return out;
    }

    /**
     * Returns the minimum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function min(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      return out;
    }

    /**
     * Returns the maximum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function max(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      return out;
    }

    /**
     * Math.round the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to round
     * @returns {vec3} out
     */
    function round(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      out[2] = Math.round(a[2]);
      return out;
    }

    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */
    function scale$4(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      return out;
    }

    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec3} out
     */
    function scaleAndAdd(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      return out;
    }

    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      return Math.sqrt(x * x + y * y + z * z);
    }

    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      return x * x + y * y + z * z;
    }

    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      return x * x + y * y + z * z;
    }

    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */
    function negate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      return out;
    }

    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to invert
     * @returns {vec3} out
     */
    function inverse(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      return out;
    }

    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */
    function normalize(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var len = x * x + y * y + z * z;
      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
      }
      return out;
    }

    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    }

    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */
    function cross(out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      var bx = b[0],
          by = b[1],
          bz = b[2];

      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out;
    }

    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function lerp(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      return out;
    }

    /**
     * Performs a hermite interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {vec3} c the third operand
     * @param {vec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function hermite(out, a, b, c, d, t) {
      var factorTimes2 = t * t;
      var factor1 = factorTimes2 * (2 * t - 3) + 1;
      var factor2 = factorTimes2 * (t - 2) + t;
      var factor3 = factorTimes2 * (t - 1);
      var factor4 = factorTimes2 * (3 - 2 * t);

      out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
      out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
      out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

      return out;
    }

    /**
     * Performs a bezier interpolation with two control points
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {vec3} c the third operand
     * @param {vec3} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec3} out
     */
    function bezier(out, a, b, c, d, t) {
      var inverseFactor = 1 - t;
      var inverseFactorTimesTwo = inverseFactor * inverseFactor;
      var factorTimes2 = t * t;
      var factor1 = inverseFactorTimesTwo * inverseFactor;
      var factor2 = 3 * t * inverseFactorTimesTwo;
      var factor3 = 3 * factorTimes2 * inverseFactor;
      var factor4 = factorTimes2 * t;

      out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
      out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
      out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

      return out;
    }

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec3} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec3} out
     */
    function random(out, scale) {
      scale = scale || 1.0;

      var r = RANDOM() * 2.0 * Math.PI;
      var z = RANDOM() * 2.0 - 1.0;
      var zScale = Math.sqrt(1.0 - z * z) * scale;

      out[0] = Math.cos(r) * zScale;
      out[1] = Math.sin(r) * zScale;
      out[2] = z * scale;
      return out;
    }

    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */
    function transformMat4(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2];
      var w = m[3] * x + m[7] * y + m[11] * z + m[15];
      w = w || 1.0;
      out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
      out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
      out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
      return out;
    }

    /**
     * Transforms the vec3 with a mat3.
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat3} m the 3x3 matrix to transform with
     * @returns {vec3} out
     */
    function transformMat3(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2];
      out[0] = x * m[0] + y * m[3] + z * m[6];
      out[1] = x * m[1] + y * m[4] + z * m[7];
      out[2] = x * m[2] + y * m[5] + z * m[8];
      return out;
    }

    /**
     * Transforms the vec3 with a quat
     * Can also be used for dual quaternions. (Multiply it with the real part)
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */
    function transformQuat(out, a, q) {
      // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
      var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3];
      var x = a[0],
          y = a[1],
          z = a[2];
      // var qvec = [qx, qy, qz];
      // var uv = vec3.cross([], qvec, a);
      var uvx = qy * z - qz * y,
          uvy = qz * x - qx * z,
          uvz = qx * y - qy * x;
      // var uuv = vec3.cross([], qvec, uv);
      var uuvx = qy * uvz - qz * uvy,
          uuvy = qz * uvx - qx * uvz,
          uuvz = qx * uvy - qy * uvx;
      // vec3.scale(uv, uv, 2 * w);
      var w2 = qw * 2;
      uvx *= w2;
      uvy *= w2;
      uvz *= w2;
      // vec3.scale(uuv, uuv, 2);
      uuvx *= 2;
      uuvy *= 2;
      uuvz *= 2;
      // return vec3.add(out, a, vec3.add(out, uv, uuv));
      out[0] = x + uvx + uuvx;
      out[1] = y + uvy + uuvy;
      out[2] = z + uvz + uuvz;
      return out;
    }

    /**
     * Rotate a 3D vector around the x-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateX$1(out, a, b, c) {
      var p = [],
          r = [];
      //Translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];

      //perform rotation
      r[0] = p[0];
      r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
      r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

      //translate to correct position
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];

      return out;
    }

    /**
     * Rotate a 3D vector around the y-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateY$1(out, a, b, c) {
      var p = [],
          r = [];
      //Translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];

      //perform rotation
      r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
      r[1] = p[1];
      r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

      //translate to correct position
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];

      return out;
    }

    /**
     * Rotate a 3D vector around the z-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */
    function rotateZ$1(out, a, b, c) {
      var p = [],
          r = [];
      //Translate point to the origin
      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2];

      //perform rotation
      r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
      r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
      r[2] = p[2];

      //translate to correct position
      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];

      return out;
    }

    /**
     * Get the angle between two 3D vectors
     * @param {vec3} a The first operand
     * @param {vec3} b The second operand
     * @returns {Number} The angle in radians
     */
    function angle(a, b) {
      var tempA = fromValues$4(a[0], a[1], a[2]);
      var tempB = fromValues$4(b[0], b[1], b[2]);

      normalize(tempA, tempA);
      normalize(tempB, tempB);

      var cosine = dot(tempA, tempB);

      if (cosine > 1.0) {
        return 0;
      } else if (cosine < -1.0) {
        return Math.PI;
      } else {
        return Math.acos(cosine);
      }
    }

    /**
     * Returns a string representation of a vector
     *
     * @param {vec3} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str$4(a) {
      return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
    }

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals$4(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
    }

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec3} a The first vector.
     * @param {vec3} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals$5(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
    }

    /**
     * Alias for {@link vec3.subtract}
     * @function
     */
    var sub$4 = subtract$4;

    /**
     * Alias for {@link vec3.multiply}
     * @function
     */
    var mul$4 = multiply$4;

    /**
     * Alias for {@link vec3.divide}
     * @function
     */
    var div = divide;

    /**
     * Alias for {@link vec3.distance}
     * @function
     */
    var dist = distance;

    /**
     * Alias for {@link vec3.squaredDistance}
     * @function
     */
    var sqrDist = squaredDistance;

    /**
     * Alias for {@link vec3.length}
     * @function
     */
    var len = length;

    /**
     * Alias for {@link vec3.squaredLength}
     * @function
     */
    var sqrLen = squaredLength;

    /**
     * Perform some operation over an array of vec3s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    var forEach = function () {
      var vec = create$4();

      return function (a, stride, offset, count, fn, arg) {
        var i = void 0,
            l = void 0;
        if (!stride) {
          stride = 3;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
        }

        return a;
      };
    }();

    var vec3 = /*#__PURE__*/Object.freeze({
        create: create$4,
        clone: clone$4,
        length: length,
        fromValues: fromValues$4,
        copy: copy$4,
        set: set$4,
        add: add$4,
        subtract: subtract$4,
        multiply: multiply$4,
        divide: divide,
        ceil: ceil,
        floor: floor,
        min: min,
        max: max,
        round: round,
        scale: scale$4,
        scaleAndAdd: scaleAndAdd,
        distance: distance,
        squaredDistance: squaredDistance,
        squaredLength: squaredLength,
        negate: negate,
        inverse: inverse,
        normalize: normalize,
        dot: dot,
        cross: cross,
        lerp: lerp,
        hermite: hermite,
        bezier: bezier,
        random: random,
        transformMat4: transformMat4,
        transformMat3: transformMat3,
        transformQuat: transformQuat,
        rotateX: rotateX$1,
        rotateY: rotateY$1,
        rotateZ: rotateZ$1,
        angle: angle,
        str: str$4,
        exactEquals: exactEquals$4,
        equals: equals$5,
        sub: sub$4,
        mul: mul$4,
        div: div,
        dist: dist,
        sqrDist: sqrDist,
        len: len,
        sqrLen: sqrLen,
        forEach: forEach
    });

    /**
     * 4 Dimensional Vector
     * @module vec4
     */

    /**
     * Creates a new, empty vec4
     *
     * @returns {vec4} a new 4D vector
     */
    function create$5() {
      var out = new ARRAY_TYPE(4);
      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
      }
      return out;
    }

    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param {vec4} a vector to clone
     * @returns {vec4} a new 4D vector
     */
    function clone$5(a) {
      var out = new ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }

    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} a new 4D vector
     */
    function fromValues$5(x, y, z, w) {
      var out = new ARRAY_TYPE(4);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }

    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */
    function copy$5(out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    }

    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */
    function set$5(out, x, y, z, w) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    }

    /**
     * Adds two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function add$5(out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      return out;
    }

    /**
     * Subtracts vector b from vector a
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function subtract$5(out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      return out;
    }

    /**
     * Multiplies two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function multiply$5(out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      out[3] = a[3] * b[3];
      return out;
    }

    /**
     * Divides two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function divide$1(out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      out[3] = a[3] / b[3];
      return out;
    }

    /**
     * Math.ceil the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to ceil
     * @returns {vec4} out
     */
    function ceil$1(out, a) {
      out[0] = Math.ceil(a[0]);
      out[1] = Math.ceil(a[1]);
      out[2] = Math.ceil(a[2]);
      out[3] = Math.ceil(a[3]);
      return out;
    }

    /**
     * Math.floor the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to floor
     * @returns {vec4} out
     */
    function floor$1(out, a) {
      out[0] = Math.floor(a[0]);
      out[1] = Math.floor(a[1]);
      out[2] = Math.floor(a[2]);
      out[3] = Math.floor(a[3]);
      return out;
    }

    /**
     * Returns the minimum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function min$1(out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      out[3] = Math.min(a[3], b[3]);
      return out;
    }

    /**
     * Returns the maximum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */
    function max$1(out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      out[3] = Math.max(a[3], b[3]);
      return out;
    }

    /**
     * Math.round the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to round
     * @returns {vec4} out
     */
    function round$1(out, a) {
      out[0] = Math.round(a[0]);
      out[1] = Math.round(a[1]);
      out[2] = Math.round(a[2]);
      out[3] = Math.round(a[3]);
      return out;
    }

    /**
     * Scales a vec4 by a scalar number
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec4} out
     */
    function scale$5(out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      return out;
    }

    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec4} out
     */
    function scaleAndAdd$1(out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      out[3] = a[3] + b[3] * scale;
      return out;
    }

    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} distance between a and b
     */
    function distance$1(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      var w = b[3] - a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    }

    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} squared distance between a and b
     */
    function squaredDistance$1(a, b) {
      var x = b[0] - a[0];
      var y = b[1] - a[1];
      var z = b[2] - a[2];
      var w = b[3] - a[3];
      return x * x + y * y + z * z + w * w;
    }

    /**
     * Calculates the length of a vec4
     *
     * @param {vec4} a vector to calculate length of
     * @returns {Number} length of a
     */
    function length$1(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    }

    /**
     * Calculates the squared length of a vec4
     *
     * @param {vec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */
    function squaredLength$1(a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      return x * x + y * y + z * z + w * w;
    }

    /**
     * Negates the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to negate
     * @returns {vec4} out
     */
    function negate$1(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = -a[3];
      return out;
    }

    /**
     * Returns the inverse of the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to invert
     * @returns {vec4} out
     */
    function inverse$1(out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      out[3] = 1.0 / a[3];
      return out;
    }

    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */
    function normalize$1(out, a) {
      var x = a[0];
      var y = a[1];
      var z = a[2];
      var w = a[3];
      var len = x * x + y * y + z * z + w * w;
      if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = x * len;
        out[1] = y * len;
        out[2] = z * len;
        out[3] = w * len;
      }
      return out;
    }

    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */
    function dot$1(a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    }

    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {vec4} out
     */
    function lerp$1(out, a, b, t) {
      var ax = a[0];
      var ay = a[1];
      var az = a[2];
      var aw = a[3];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      out[3] = aw + t * (b[3] - aw);
      return out;
    }

    /**
     * Generates a random vector with the given scale
     *
     * @param {vec4} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec4} out
     */
    function random$1(out, scale) {
      scale = scale || 1.0;

      // Marsaglia, George. Choosing a Point from the Surface of a
      // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
      // http://projecteuclid.org/euclid.aoms/1177692644;
      var v1, v2, v3, v4;
      var s1, s2;
      do {
        v1 = RANDOM() * 2 - 1;
        v2 = RANDOM() * 2 - 1;
        s1 = v1 * v1 + v2 * v2;
      } while (s1 >= 1);
      do {
        v3 = RANDOM() * 2 - 1;
        v4 = RANDOM() * 2 - 1;
        s2 = v3 * v3 + v4 * v4;
      } while (s2 >= 1);

      var d = Math.sqrt((1 - s1) / s2);
      out[0] = scale * v1;
      out[1] = scale * v2;
      out[2] = scale * v3 * d;
      out[3] = scale * v4 * d;
      return out;
    }

    /**
     * Transforms the vec4 with a mat4.
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec4} out
     */
    function transformMat4$1(out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
      out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
      out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
      out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
      out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
      return out;
    }

    /**
     * Transforms the vec4 with a quat
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec4} out
     */
    function transformQuat$1(out, a, q) {
      var x = a[0],
          y = a[1],
          z = a[2];
      var qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3];

      // calculate quat * vec
      var ix = qw * x + qy * z - qz * y;
      var iy = qw * y + qz * x - qx * z;
      var iz = qw * z + qx * y - qy * x;
      var iw = -qx * x - qy * y - qz * z;

      // calculate result * inverse quat
      out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      out[3] = a[3];
      return out;
    }

    /**
     * Returns a string representation of a vector
     *
     * @param {vec4} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str$5(a) {
      return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }

    /**
     * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function exactEquals$5(a, b) {
      return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
    }

    /**
     * Returns whether or not the vectors have approximately the same elements in the same position.
     *
     * @param {vec4} a The first vector.
     * @param {vec4} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    function equals$6(a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      return Math.abs(a0 - b0) <= EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
    }

    /**
     * Alias for {@link vec4.subtract}
     * @function
     */
    var sub$5 = subtract$5;

    /**
     * Alias for {@link vec4.multiply}
     * @function
     */
    var mul$5 = multiply$5;

    /**
     * Alias for {@link vec4.divide}
     * @function
     */
    var div$1 = divide$1;

    /**
     * Alias for {@link vec4.distance}
     * @function
     */
    var dist$1 = distance$1;

    /**
     * Alias for {@link vec4.squaredDistance}
     * @function
     */
    var sqrDist$1 = squaredDistance$1;

    /**
     * Alias for {@link vec4.length}
     * @function
     */
    var len$1 = length$1;

    /**
     * Alias for {@link vec4.squaredLength}
     * @function
     */
    var sqrLen$1 = squaredLength$1;

    /**
     * Perform some operation over an array of vec4s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    var forEach$1 = function () {
      var vec = create$5();

      return function (a, stride, offset, count, fn, arg) {
        var i = void 0,
            l = void 0;
        if (!stride) {
          stride = 4;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
        }

        return a;
      };
    }();

    var vec4 = /*#__PURE__*/Object.freeze({
        create: create$5,
        clone: clone$5,
        fromValues: fromValues$5,
        copy: copy$5,
        set: set$5,
        add: add$5,
        subtract: subtract$5,
        multiply: multiply$5,
        divide: divide$1,
        ceil: ceil$1,
        floor: floor$1,
        min: min$1,
        max: max$1,
        round: round$1,
        scale: scale$5,
        scaleAndAdd: scaleAndAdd$1,
        distance: distance$1,
        squaredDistance: squaredDistance$1,
        length: length$1,
        squaredLength: squaredLength$1,
        negate: negate$1,
        inverse: inverse$1,
        normalize: normalize$1,
        dot: dot$1,
        lerp: lerp$1,
        random: random$1,
        transformMat4: transformMat4$1,
        transformQuat: transformQuat$1,
        str: str$5,
        exactEquals: exactEquals$5,
        equals: equals$6,
        sub: sub$5,
        mul: mul$5,
        div: div$1,
        dist: dist$1,
        sqrDist: sqrDist$1,
        len: len$1,
        sqrLen: sqrLen$1,
        forEach: forEach$1
    });

    /**
     * Quaternion
     * @module quat
     */

    /**
     * Creates a new identity quat
     *
     * @returns {quat} a new quaternion
     */
    function create$6() {
      var out = new ARRAY_TYPE(4);
      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
      }
      out[3] = 1;
      return out;
    }

    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */
    function identity$4(out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    }

    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/
    function setAxisAngle(out, axis, rad) {
      rad = rad * 0.5;
      var s = Math.sin(rad);
      out[0] = s * axis[0];
      out[1] = s * axis[1];
      out[2] = s * axis[2];
      out[3] = Math.cos(rad);
      return out;
    }

    /**
     * Gets the rotation axis and angle for a given
     *  quaternion. If a quaternion is created with
     *  setAxisAngle, this method will return the same
     *  values as providied in the original parameter list
     *  OR functionally equivalent values.
     * Example: The quaternion formed by axis [0, 0, 1] and
     *  angle -90 is the same as the quaternion formed by
     *  [0, 0, 1] and 270. This method favors the latter.
     * @param  {vec3} out_axis  Vector receiving the axis of rotation
     * @param  {quat} q     Quaternion to be decomposed
     * @return {Number}     Angle, in radians, of the rotation
     */
    function getAxisAngle(out_axis, q) {
      var rad = Math.acos(q[3]) * 2.0;
      var s = Math.sin(rad / 2.0);
      if (s > EPSILON) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
      } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
      }
      return rad;
    }

    /**
     * Multiplies two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     */
    function multiply$6(out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];

      out[0] = ax * bw + aw * bx + ay * bz - az * by;
      out[1] = ay * bw + aw * by + az * bx - ax * bz;
      out[2] = az * bw + aw * bz + ax * by - ay * bx;
      out[3] = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    }

    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateX$2(out, a, rad) {
      rad *= 0.5;

      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = Math.sin(rad),
          bw = Math.cos(rad);

      out[0] = ax * bw + aw * bx;
      out[1] = ay * bw + az * bx;
      out[2] = az * bw - ay * bx;
      out[3] = aw * bw - ax * bx;
      return out;
    }

    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateY$2(out, a, rad) {
      rad *= 0.5;

      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var by = Math.sin(rad),
          bw = Math.cos(rad);

      out[0] = ax * bw - az * by;
      out[1] = ay * bw + aw * by;
      out[2] = az * bw + ax * by;
      out[3] = aw * bw - ay * by;
      return out;
    }

    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */
    function rotateZ$2(out, a, rad) {
      rad *= 0.5;

      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bz = Math.sin(rad),
          bw = Math.cos(rad);

      out[0] = ax * bw + ay * bz;
      out[1] = ay * bw - ax * bz;
      out[2] = az * bw + aw * bz;
      out[3] = aw * bw - az * bz;
      return out;
    }

    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate W component of
     * @returns {quat} out
     */
    function calculateW(out, a) {
      var x = a[0],
          y = a[1],
          z = a[2];

      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
      return out;
    }

    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */
    function slerp(out, a, b, t) {
      // benchmarks:
      //    http://jsperf.com/quaternion-slerp-implementations
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      var bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];

      var omega = void 0,
          cosom = void 0,
          sinom = void 0,
          scale0 = void 0,
          scale1 = void 0;

      // calc cosine
      cosom = ax * bx + ay * by + az * bz + aw * bw;
      // adjust signs (if necessary)
      if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
      }
      // calculate coefficients
      if (1.0 - cosom > EPSILON) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
      } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
      }
      // calculate final values
      out[0] = scale0 * ax + scale1 * bx;
      out[1] = scale0 * ay + scale1 * by;
      out[2] = scale0 * az + scale1 * bz;
      out[3] = scale0 * aw + scale1 * bw;

      return out;
    }

    /**
     * Generates a random quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */
    function random$2(out) {
      // Implementation of http://planning.cs.uiuc.edu/node198.html
      // TODO: Calling random 3 times is probably not the fastest solution
      var u1 = RANDOM();
      var u2 = RANDOM();
      var u3 = RANDOM();

      var sqrt1MinusU1 = Math.sqrt(1 - u1);
      var sqrtU1 = Math.sqrt(u1);

      out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
      out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
      out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
      out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
      return out;
    }

    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @returns {quat} out
     */
    function invert$4(out, a) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var dot$$1 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
      var invDot = dot$$1 ? 1.0 / dot$$1 : 0;

      // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

      out[0] = -a0 * invDot;
      out[1] = -a1 * invDot;
      out[2] = -a2 * invDot;
      out[3] = a3 * invDot;
      return out;
    }

    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate conjugate of
     * @returns {quat} out
     */
    function conjugate(out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a[3];
      return out;
    }

    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {mat3} m rotation matrix
     * @returns {quat} out
     * @function
     */
    function fromMat3(out, m) {
      // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
      // article "Quaternion Calculus and Fast Animation".
      var fTrace = m[0] + m[4] + m[8];
      var fRoot = void 0;

      if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
      } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;

        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
      }

      return out;
    }

    /**
     * Creates a quaternion from the given euler angle x, y, z.
     *
     * @param {quat} out the receiving quaternion
     * @param {x} Angle to rotate around X axis in degrees.
     * @param {y} Angle to rotate around Y axis in degrees.
     * @param {z} Angle to rotate around Z axis in degrees.
     * @returns {quat} out
     * @function
     */
    function fromEuler(out, x, y, z) {
      var halfToRad = 0.5 * Math.PI / 180.0;
      x *= halfToRad;
      y *= halfToRad;
      z *= halfToRad;

      var sx = Math.sin(x);
      var cx = Math.cos(x);
      var sy = Math.sin(y);
      var cy = Math.cos(y);
      var sz = Math.sin(z);
      var cz = Math.cos(z);

      out[0] = sx * cy * cz - cx * sy * sz;
      out[1] = cx * sy * cz + sx * cy * sz;
      out[2] = cx * cy * sz - sx * sy * cz;
      out[3] = cx * cy * cz + sx * sy * sz;

      return out;
    }

    /**
     * Returns a string representation of a quatenion
     *
     * @param {quat} a vector to represent as a string
     * @returns {String} string representation of the vector
     */
    function str$6(a) {
      return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    }

    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {quat} a quaternion to clone
     * @returns {quat} a new quaternion
     * @function
     */
    var clone$6 = clone$5;

    /**
     * Creates a new quat initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} a new quaternion
     * @function
     */
    var fromValues$6 = fromValues$5;

    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the source quaternion
     * @returns {quat} out
     * @function
     */
    var copy$6 = copy$5;

    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */
    var set$6 = set$5;

    /**
     * Adds two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     * @function
     */
    var add$6 = add$5;

    /**
     * Alias for {@link quat.multiply}
     * @function
     */
    var mul$6 = multiply$6;

    /**
     * Scales a quat by a scalar number
     *
     * @param {quat} out the receiving vector
     * @param {quat} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {quat} out
     * @function
     */
    var scale$6 = scale$5;

    /**
     * Calculates the dot product of two quat's
     *
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */
    var dot$2 = dot$1;

    /**
     * Performs a linear interpolation between two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     * @function
     */
    var lerp$2 = lerp$1;

    /**
     * Calculates the length of a quat
     *
     * @param {quat} a vector to calculate length of
     * @returns {Number} length of a
     */
    var length$2 = length$1;

    /**
     * Alias for {@link quat.length}
     * @function
     */
    var len$2 = length$2;

    /**
     * Calculates the squared length of a quat
     *
     * @param {quat} a vector to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */
    var squaredLength$2 = squaredLength$1;

    /**
     * Alias for {@link quat.squaredLength}
     * @function
     */
    var sqrLen$2 = squaredLength$2;

    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */
    var normalize$2 = normalize$1;

    /**
     * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
     *
     * @param {quat} a The first quaternion.
     * @param {quat} b The second quaternion.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    var exactEquals$6 = exactEquals$5;

    /**
     * Returns whether or not the quaternions have approximately the same elements in the same position.
     *
     * @param {quat} a The first vector.
     * @param {quat} b The second vector.
     * @returns {Boolean} True if the vectors are equal, false otherwise.
     */
    var equals$7 = equals$6;

    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     *
     * Both vectors are assumed to be unit length.
     *
     * @param {quat} out the receiving quaternion.
     * @param {vec3} a the initial vector
     * @param {vec3} b the destination vector
     * @returns {quat} out
     */
    var rotationTo = function () {
      var tmpvec3 = create$4();
      var xUnitVec3 = fromValues$4(1, 0, 0);
      var yUnitVec3 = fromValues$4(0, 1, 0);

      return function (out, a, b) {
        var dot$$1 = dot(a, b);
        if (dot$$1 < -0.999999) {
          cross(tmpvec3, xUnitVec3, a);
          if (len(tmpvec3) < 0.000001) cross(tmpvec3, yUnitVec3, a);
          normalize(tmpvec3, tmpvec3);
          setAxisAngle(out, tmpvec3, Math.PI);
          return out;
        } else if (dot$$1 > 0.999999) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 1;
          return out;
        } else {
          cross(tmpvec3, a, b);
          out[0] = tmpvec3[0];
          out[1] = tmpvec3[1];
          out[2] = tmpvec3[2];
          out[3] = 1 + dot$$1;
          return normalize$2(out, out);
        }
      };
    }();

    /**
     * Performs a spherical linear interpolation with two control points
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {quat} c the third operand
     * @param {quat} d the fourth operand
     * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
     * @returns {quat} out
     */
    var sqlerp = function () {
      var temp1 = create$6();
      var temp2 = create$6();

      return function (out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));

        return out;
      };
    }();

    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param {vec3} view  the vector representing the viewing direction
     * @param {vec3} right the vector representing the local "right" direction
     * @param {vec3} up    the vector representing the local "up" direction
     * @returns {quat} out
     */
    var setAxes = function () {
      var matr = create$2();

      return function (out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];

        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];

        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];

        return normalize$2(out, fromMat3(out, matr));
      };
    }();

    var quat = /*#__PURE__*/Object.freeze({
        create: create$6,
        identity: identity$4,
        setAxisAngle: setAxisAngle,
        getAxisAngle: getAxisAngle,
        multiply: multiply$6,
        rotateX: rotateX$2,
        rotateY: rotateY$2,
        rotateZ: rotateZ$2,
        calculateW: calculateW,
        slerp: slerp,
        random: random$2,
        invert: invert$4,
        conjugate: conjugate,
        fromMat3: fromMat3,
        fromEuler: fromEuler,
        str: str$6,
        clone: clone$6,
        fromValues: fromValues$6,
        copy: copy$6,
        set: set$6,
        add: add$6,
        mul: mul$6,
        scale: scale$6,
        dot: dot$2,
        lerp: lerp$2,
        length: length$2,
        len: len$2,
        squaredLength: squaredLength$2,
        sqrLen: sqrLen$2,
        normalize: normalize$2,
        exactEquals: exactEquals$6,
        equals: equals$7,
        rotationTo: rotationTo,
        sqlerp: sqlerp,
        setAxes: setAxes
    });

    /**
     * 2 Dimensional Vector
     * @module vec2
     */

    /**
     * Creates a new, empty vec2
     *
     * @returns {vec2} a new 2D vector
     */
    function create$8() {
      var out = new ARRAY_TYPE(2);
      if (ARRAY_TYPE != Float32Array) {
        out[0] = 0;
        out[1] = 0;
      }
      return out;
    }

    /**
     * Perform some operation over an array of vec2s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */
    var forEach$2 = function () {
      var vec = create$8();

      return function (a, stride, offset, count, fn, arg) {
        var i = void 0,
            l = void 0;
        if (!stride) {
          stride = 2;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];vec[1] = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec[0];a[i + 1] = vec[1];
        }

        return a;
      };
    }();

    class Transform {
        constructor() {
            this.isVisible = true;
            this.isDirty = false;
            this.worldPos = fromValues$4(0, 0, 0);
            this.translate = fromValues$4(0, 0, 0);
            this.rotate = fromValues$4(0, 0, 0);
            this.scale = fromValues$4(1, 1, 1);
            this.quaternion = fromValues$5(0, 0, 0, 1);
            // RTS
            this.localMatrix = create$3();
            this.worldMatrix = create$3();
            this.worldNormalMatrix = create$3();
            identity$3(this.localMatrix);
            identity$3(this.worldMatrix);
            identity$3(this.worldNormalMatrix);
        }
    }
    EntityMgr.getDefaultComponent = () => new Transform();
    class TransformSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [Transform.name];
        }
        onUpdate() {
            for (let { components } of this.group) {
                // if(trans.isDirty)
                TransformSystem.updateMatrix(components.Transform);
            }
        }
        static decomposeMatrix(trans, mat = trans.localMatrix) {
            // https://math.stackexchange.com/questions/237369/given-this-transformation-matrix-how-do-i-decompose-it-into-translation-rotati
            // Get scaling
            set$4(trans.translate, mat[0], mat[1], mat[2]); // temp
            let sx = len(trans.translate);
            set$4(trans.translate, mat[4], mat[5], mat[6]); // temp
            let sy = len(trans.translate);
            set$4(trans.translate, mat[8], mat[9], mat[10]); // temp
            let sz = len(trans.translate);
            set$4(trans.scale, sx, sy, sz);
            if (determinant$3(mat) < 0) {
                sx = -sx;
            }
            // Get translation
            set$4(trans.translate, mat[12], mat[13], mat[14]);
            mat[12] = mat[13] = mat[14] = 0;
            // Get rotation
            mat[0] /= sx;
            mat[1] /= sx;
            mat[2] /= sx;
            mat[4] /= sy;
            mat[5] /= sy;
            mat[6] /= sy;
            mat[8] /= sz;
            mat[9] /= sz;
            mat[10] /= sz;
            getRotation(trans.quaternion, mat);
        }
        static updateMatrix(trans) {
            trans.isDirty = false;
            // Calculate local matrix
            fromRotationTranslationScale(trans.localMatrix, trans.quaternion, trans.translate, trans.scale);
            invert$3(trans.worldNormalMatrix, trans.worldMatrix);
            transpose$2(trans.worldNormalMatrix, trans.worldNormalMatrix);
            // Calculate world matrix
            let parent = trans.entity.parentElement;
            if (parent != null && parent.components) {
                let world = parent.components.Transform;
                // if(world.isDirty) {
                //     this.updateMatrix(world);
                // }
                // Update world matrix
                mul$3(trans.worldMatrix, world.worldMatrix, trans.localMatrix);
                // Update world position
                transformMat4(trans.worldPos, trans.translate, trans.worldMatrix);
            }
            else { // if current node is the root of world
                copy$3(trans.worldMatrix, trans.localMatrix);
            }
        }
    }
    System.registSystem(new TransformSystem());
    // (!) Circular dependency: src/ECS/system.ts -> src/ECS/entityMgr.ts -> src/transform.ts -> src/ECS/system.ts

    class gltfScene {
        constructor(gltf) {
            this.scene = EntityMgr.create('scene');
            this.gltf = gltf;
            let { scene, scenes, nodes } = gltf;
            //  BufferViews
            gltf.bufferViews = gltf.bufferViews.map(bv => new bufferView(gltf.buffers[bv.buffer], bv));
            // Materials
            // set default material if materials does not exist
            if (!gltf.materials) {
                gltf.materials = [{ name: 'Default_Material' }];
            }
            gltf.materials = gltf.materials.map(config => {
                let mat = new Material(gltf.commonShader, config.name);
                console.log(config);
                for (let key in config) {
                    let { index, texCoord } = config[key];
                    if (index != null) { // common texture
                        let { source, sampler } = gltf.textures[index];
                        let currentSampler;
                        if (gltf.samplers != null)
                            currentSampler = gltf.samplers[sampler];
                        let texture = new Texture(gltf.images[source], currentSampler);
                        Material.setTexture(mat, key, texture);
                    }
                    if (key == 'pbrMetallicRoughness') {
                        let pbrOptions = config[key];
                        for (let opt in pbrOptions) {
                            let { index, texCoord } = pbrOptions[opt];
                            if (index != null) { // common texture
                                let { source, sampler } = gltf.textures[index];
                                let currentSampler;
                                if (gltf.samplers != null)
                                    currentSampler = gltf.samplers[sampler];
                                let texture = new Texture(gltf.images[source], currentSampler);
                                Material.setTexture(mat, opt, texture);
                            }
                        }
                    }
                }
                Material.setTexture(mat, 'brdfLUT', Texture.clone(gltf.brdfLUT));
                if (gltf.hasEnvmap)
                    Material.setTexture(mat, 'env', Texture.clone(gltf.envmap));
                return mat;
            });
            // Set up all Vertexes
            gltf.accessors = gltf.accessors.map(acc => {
                let attr = new Accessor(acc);
                attr.bufferView = gltf.bufferViews[acc.bufferView];
                return attr;
            });
            // Create mesh
            gltf.meshes = gltf.meshes.map(mesh => {
                let meshData = mesh.primitives[0];
                let { attributes } = meshData;
                // Pick up attributes
                let accessors = [];
                for (let attr in attributes) {
                    let acc = gltf.accessors[attributes[attr]];
                    acc.attribute = attr; // Set attribute name
                    accessors.push(acc);
                }
                // Triangles
                let ebo = gltf.accessors[meshData.indices];
                // Ensure current buffer type is exist, considering the target value is not required at glTF
                ebo.bufferView.target = WebGL2RenderingContext.ELEMENT_ARRAY_BUFFER;
                let mf = new Mesh(accessors, ebo, meshData.mode);
                let mat = gltf.materials[meshData.material || 0];
                return [mf, mat];
            });
            let roots = scenes[scene || 0].nodes;
            for (let r of roots) {
                let root = this.parseNode(r, nodes);
                this.scene.appendChild(root);
            }
        }
        parseNode(nodeIndex, nodeList) {
            let node = nodeList[nodeIndex];
            let { mesh, name, matrix, rotation, scale, translation } = node;
            let entity = EntityMgr.create(name);
            let trans = entity.components.Transform;
            if (matrix != null) {
                set$3(trans.localMatrix, ...matrix);
                TransformSystem.decomposeMatrix(trans);
            }
            else {
                if (rotation != null) {
                    set$5(trans.quaternion, ...rotation);
                }
                else if (scale != null) {
                    set$4(trans.scale, ...scale);
                }
                else if (translation != null) {
                    set$4(trans.translate, ...translation);
                }
            }
            TransformSystem.updateMatrix(trans);
            if (mesh != null) {
                let [mf, mat] = this.gltf.meshes[mesh];
                EntityMgr.addComponent(entity, mf);
                EntityMgr.addComponent(entity, mat);
            }
            if (node.children) {
                for (let child of node.children) {
                    entity.appendChild(this.parseNode(child, nodeList));
                }
            }
            return entity;
        }
    }

    class Asset {
        static addTask() {
            this.totalTask++;
            if (this.taskObserve)
                this.taskObserve(this.finishedTask, this.totalTask);
        }
        ;
        static finishTask() {
            this.finishedTask++;
            if (this.taskObserve)
                this.taskObserve(this.finishedTask, this.totalTask);
        }
        ;
        static loadImage(url) {
            return new Promise((resolve, reject) => {
                this.addTask();
                let image = new Image();
                image.crossOrigin = "anonymous";
                image.src = url;
                image.onload = () => {
                    resolve(image);
                    this.finishTask();
                };
            });
        }
        static loadGLTF(path, screen, envmap, shader = 'stylize') {
            return __awaiter(this, void 0, void 0, function* () {
                // parse current path
                let root = path.split('/');
                root.pop();
                root = root.join('/') + '/';
                // Load gltf
                let gltf = yield (yield fetch(path)).json();
                // Download buffers
                gltf.buffers = yield Promise.all(gltf.buffers.map(({ uri }) => this.loadBuffer(root + uri)));
                // then download images
                if (gltf.images) {
                    gltf.images = yield Promise.all(gltf.images.map(({ uri }) => this.loadImage(root + uri)));
                }
                // Load shader
                gltf.commonShader = yield this.LoadShaderProgram(shader);
                // Load brdfLUT
                gltf.brdfLUT = yield this.loadTexture('https://raw.githubusercontent.com/KhronosGroup/glTF-WebGL-PBR/master/textures/brdfLUT.png', { minFilter: WebGL2RenderingContext.LINEAR });
                if (envmap != null) {
                    gltf.hasEnvmap = true;
                    gltf.envmap = yield this.loadCubemap(envmap);
                }
                else {
                    gltf.hasEnvmap = false;
                }
                // Parse scene
                let { scene } = new gltfScene(gltf);
                // Create meshRenders
                // filter mesh & material which meshRenderer required
                let renderTargets = EntityMgr.getEntites([Mesh.name, Material.name], scene);
                for (let entity of renderTargets) {
                    let mesh = entity.components.Mesh;
                    let material = entity.components.Material;
                    let mr = new MeshRenderer(screen, mesh, material);
                    if (material.name == 'outline') {
                        entity.components.Transform.isVisible = false;
                    }
                    EntityMgr.addComponent(entity, mr);
                }
                return scene;
            });
        }
        static loadBuffer(bufferPath) {
            return __awaiter(this, void 0, void 0, function* () {
                this.addTask();
                let buffer = yield (yield fetch(bufferPath)).arrayBuffer();
                this.finishTask();
                return buffer;
            });
        }
        static LoadShaderProgram(url) {
            return __awaiter(this, void 0, void 0, function* () {
                url = Material.SHADER_PATH + url;
                let vertPath = url + '.vs.glsl';
                let fragPath = url + '.fs.glsl';
                let [vert, frag] = yield Promise.all([vertPath, fragPath].map(path => fetch(path).then(e => e.text())));
                // console.log(vert);
                // console.log(frag);
                return new Shader(vert, frag);
            });
        }
        static LoadMaterial(matName) {
            return __awaiter(this, void 0, void 0, function* () {
                this.addTask();
                let shader = yield this.LoadShaderProgram(matName);
                this.finishTask();
                return new Material(shader);
            });
        }
        static loadCubeimg(folder, format = 'jpg') {
            return __awaiter(this, void 0, void 0, function* () {
                return yield Promise.all(this.cubemapOrder.map(name => this.loadImage(folder + name + format)));
            });
        }
        static loadCubemap(folder, format = 'jpg') {
            return __awaiter(this, void 0, void 0, function* () {
                let rawImages = yield this.loadCubeimg(folder, format);
                return new Texture(rawImages);
            });
        }
        static loadTexture(url, option) {
            return __awaiter(this, void 0, void 0, function* () {
                let image = yield this.loadImage(url);
                return new Texture(image, option);
            });
        }
    }
    // static load(url, type: XMLHttpRequestResponseType = 'json') {
    //     return new Promise((resolve, reject) => {
    //         let xhr = new XMLHttpRequest();
    //         xhr.open('GET', url);
    //         xhr.responseType = type;
    //         xhr.onload = function () {
    //             if (this.status >= 200 && this.status < 300) {
    //                 resolve(xhr.response);
    //             } else {
    //                 reject(xhr.statusText);
    //             }
    //         }
    //         xhr.onerror = function () {
    //             reject(xhr.statusText);
    //         }
    //         xhr.send();
    //     });
    // }
    // Analyze
    Asset.totalTask = 0;
    Asset.finishedTask = 0;
    Asset.taskObserve = null;
    Asset.cubemapOrder = [
        'posx.',
        'negx.',
        'posy.',
        'negy.',
        'posz.',
        'negz.',
    ];

    class Camera {
        constructor(aspect = 1, fov = 45, near = 0.1, far = 1000) {
            this.isDirty = true;
            this.aspect = aspect;
            this.fov = fov;
            this.near = near;
            this.far = far;
            this.projection = create$3();
            this.view = create$3();
            this.up = fromValues$4(0, 1, 0);
            this.lookAt = create$4();
            Camera.updateProjectionMatrix(this);
        }
        static updateProjectionMatrix(cam) {
            perspective(cam.projection, cam.fov * Math.PI / 180.0, cam.aspect, cam.near, cam.far);
        }
        static updateViewMatrix(cam) {
            let trans = cam.entity.components.Transform;
            lookAt(cam.view, trans.translate, cam.lookAt, cam.up);
        }
    }
    class CameraSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [
                Camera.name
            ];
        }
        onUpdate() {
            for (let { components } of this.group) {
                let camera = components.Camera;
                let trans = components.Transform;
                if (camera.isDirty) {
                    Camera.updateViewMatrix(camera);
                    // TODO: multiple scenes with multiple cameras
                    let meshRenderers = EntityMgr.getComponents(MeshRenderer.name);
                    for (let mr of meshRenderers) {
                        Material.setUniform(mr.materials[0], 'P', camera.projection);
                        Material.setUniform(mr.materials[0], 'V', camera.view);
                        Material.setUniform(mr.materials[0], 'u_Camera', trans.worldPos);
                    }
                    camera.isDirty = false;
                }
            }
        }
    }
    System.registSystem(new CameraSystem());

    class OrbitControl {
        constructor(screen, target, pitch = 90, yaw = 90, speed = 0.2, damping = 0.92) {
            this.movement = create$4();
            this.unprojectMatrix = create$3();
            this.X = fromValues$4(1, 0, 0);
            this.Y = fromValues$4(0, 1, 0);
            this.Z = fromValues$4(0, 0, 1);
            this.vx = 0;
            this.vy = 0;
            this.vz = 0;
            // Damping stuff
            this.vyaw = 0;
            this.vpitch = 0;
            this.vscale = 0;
            this.threshold = 0.001;
            this.moveHandler = (e) => {
                let { movementX, movementY, buttons } = e;
                if (buttons == 2) ;
                else { // Rotate
                    let deltaX = movementX * this.speed;
                    let deltaY = -movementY * this.speed;
                    this.vpitch += deltaY;
                    this.vyaw += deltaX;
                }
                // OrbitControlSystem.updatePosition(this);
            };
            this.touchHandler = (() => {
                let lastX, lastY;
                return (e) => {
                    let { pageX, pageY } = e.touches[0];
                    if (lastX || lastY) {
                        let dX = pageX - lastX;
                        let dY = pageY - lastY;
                        this.vpitch += -dY * this.speed;
                        this.vyaw += dX * this.speed;
                    }
                    lastY = pageY;
                    lastX = pageX;
                };
            });
            this.scrollHandler = ({ deltaY }) => {
                // vec3.scaleAndAdd(this.trans.translate, this.trans.translate, this.direction, deltaY);
                this.vscale += deltaY * this.speed * 0.05;
                // OrbitControlSystem.updatePosition(this);
            };
            this.pitch = pitch;
            this.yaw = yaw;
            this.speed = speed;
            this.damping = damping;
            this.camera = target.components.Camera;
            this.trans = target.components.Transform;
            this.distance = distance(this.trans.translate, this.camera.lookAt);
            EntityMgr.addComponent(target, this);
            OrbitControl.bindEvents(screen.canvas, this);
            OrbitControlSystem.updatePosition(this);
        }
        static bindEvents(screen, controler) {
            screen.oncontextmenu = () => false;
            screen.addEventListener('mousedown', () => {
                screen.addEventListener('mousemove', controler.moveHandler);
            });
            screen.addEventListener('mouseup', () => {
                screen.removeEventListener('mousemove', controler.moveHandler);
            });
            screen.addEventListener('wheel', controler.scrollHandler);
            // Mobile device
            screen.addEventListener('touchstart', () => {
                let handler = controler.touchHandler();
                screen.addEventListener('touchmove', handler);
                screen.addEventListener('touchend', () => {
                    screen.removeEventListener('touchmove', handler);
                });
            });
            screen.addEventListener('wheel', controler.scrollHandler);
        }
    }
    class OrbitControlSystem extends ComponentSystem {
        constructor() {
            super(...arguments);
            this.group = [];
            this.depends = [
                OrbitControl.name
            ];
        }
        onUpdate() {
            for (let { components } of this.group) {
                OrbitControlSystem.updatePosition(components.OrbitControl);
            }
        }
        static updatePosition(ctr) {
            if (Math.abs(ctr.vyaw) > ctr.threshold) {
                ctr.yaw += ctr.vyaw;
                ctr.vyaw *= ctr.damping;
            }
            if (Math.abs(ctr.vpitch) > ctr.threshold) {
                ctr.pitch += ctr.vpitch;
                ctr.vpitch *= ctr.damping;
            }
            if (Math.abs(ctr.vscale) > ctr.threshold) {
                ctr.distance += ctr.vscale;
                ctr.distance = Math.max(ctr.distance, 1.0);
                ctr.vscale *= ctr.damping;
            }
            ctr.pitch = Math.min(180, Math.max(0.01, ctr.pitch));
            // https://github.com/t01y/WebGL_Learning/blob/PBR/scripts/canvas.js#L752
            ctr.trans.translate[0] = ctr.camera.lookAt[0] + ctr.distance * Math.sin(ctr.pitch / 180 * Math.PI) * Math.cos(ctr.yaw / 180 * Math.PI);
            ctr.trans.translate[1] = ctr.camera.lookAt[1] + ctr.distance * Math.cos(ctr.pitch / 180 * Math.PI);
            ctr.trans.translate[2] = ctr.camera.lookAt[2] + ctr.distance * Math.sin(ctr.pitch / 180 * Math.PI) * Math.sin(ctr.yaw / 180 * Math.PI);
            ctr.camera.isDirty = true;
        }
    }
    System.registSystem(new OrbitControlSystem());

    class Bloom {
        static initFilters(screen) {
            let macro;
            // threshold filter
            macro = {
                THRESHOLD: '0.7'
            };
            let blurSize = 512;
            let threshold = new Filter(screen, new Shader(threshold_vs, threshold_fs, macro), blurSize, blurSize);
            // Two pass gaussian blur
            let radius = 2 * screen.ratio;
            let width = screen.width / screen.ratio;
            let height = screen.height / screen.ratio;
            macro = {
                OFFSET: `vec2(${radius / width}, 0)`
            };
            let blur1 = new Filter(screen, new Shader(blurvs, blurfs, macro));
            macro = {
                OFFSET: `vec2(0, ${radius / height})`
            };
            let blur2 = new Filter(screen, new Shader(blurvs, blurfs, macro));
            // Combiand
            macro = {
                BLOOM_INTENSITY: `0.6`
            };
            let comb = new Filter(screen, new Shader(combine_vs, combine_fs, macro));
            if (screen.output) {
                comb.setInput(screen.output.output, 'originTex');
            }
            else {
                comb.setInput(screen.capture.output, 'originTex');
            }
            // Assemble
            // The first stage must be attach to screen
            screen.attachFilter(threshold);
            screen.attachFilter(blur1);
            screen.attachFilter(blur2);
            screen.attachFilter(blur1.clone());
            screen.attachFilter(blur2.clone());
            screen.attachFilter(comb);
        }
    }
    let threshold_vs = `
attribute vec3 POSITION;
attribute vec2 TEXCOORD_0;

varying vec2 uv;
varying vec4 pos;

void main() {
  uv = TEXCOORD_0;
  vec4 position = vec4(POSITION, 1);
  pos = position;
  gl_Position = position;
}
`;
    let threshold_fs = `
precision mediump float;
uniform sampler2D base;

varying vec2 uv;
varying vec4 pos;


void main() {
    vec4 color = texture2D(base, uv);
    float brightness = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));
    if(brightness > THRESHOLD) {
        // gl_FragColor = vec4(vec3(brightness), color.a);
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0);
    }
}
`;
    let blurvs = `
attribute vec3 POSITION;
attribute vec2 TEXCOORD_0;

varying vec2 uv;
varying vec4 pos;

void main() {
  uv = TEXCOORD_0;
  vec4 position = vec4(POSITION, 1);
  pos = position;
  gl_Position = position;
}
`;
    let blurfs = `
#define PI 3.1415926535898
precision mediump float;
uniform sampler2D base;

varying vec2 uv;
varying vec4 pos;

vec4 blur9() {
    vec4 color = vec4(0);
    vec2 direction = OFFSET;
    vec2 off1 = vec2(1.3846153846) * direction;
    vec2 off2 = vec2(3.2307692308) * direction;
    color += texture2D(base, uv) * 0.2270270270;
    color += texture2D(base, uv + off1) * 0.3162162162;
    color += texture2D(base, uv - off1) * 0.3162162162;
    color += texture2D(base, uv + off2) * 0.0702702703;
    color += texture2D(base, uv - off2) * 0.0702702703;
    return color;
}
vec4 gaussianBlur() {
    vec2 offset = OFFSET;
    float weight[5];
    weight[0] = 0.227027;
    weight[1] = 0.1945946;
    weight[2] = 0.1216216;
    weight[3] = 0.054054;
    weight[4] = 0.016216;
    vec4 color = vec4(0);
    for(int i = 0; i < 5; i++) {
        color += texture2D(base, uv + offset * float(i+1) ) * weight[i];
        color += texture2D(base, uv + offset * float(-i-1) ) * weight[i];
    }
    return color;
}

void main() {
    gl_FragColor = gaussianBlur();
    // gl_FragColor = blur9();
}
`;
    let combine_vs = `
attribute vec3 POSITION;
attribute vec2 TEXCOORD_0;

varying vec2 uv;
varying vec4 pos;

void main() {
  uv = TEXCOORD_0;
  vec4 position = vec4(POSITION, 1);
  pos = position;
  gl_Position = position;
}
`;
    let combine_fs = `
precision mediump float;
uniform sampler2D base;
uniform sampler2D originTex;

varying vec2 uv;
varying vec4 pos;


void main() {
    vec4 origin = texture2D(originTex, uv);
    vec4 addition = texture2D(base, uv) * vec4(vec3(BLOOM_INTENSITY),1);
    gl_FragColor = origin + addition;
}
`;

    class Vignetting extends Filter {
        constructor(screen, factor = 0.4, hardness = 1) {
            super(screen, new Shader(vig_vs, vig_fs, {
                FACTOR: `float(${factor})`,
                HARDNESS: `float(${hardness})`,
            }));
        }
    }
    let vig_vs = `
attribute vec3 POSITION;
attribute vec2 TEXCOORD_0;

varying vec2 uv;
varying vec4 pos;

void main() {
  uv = TEXCOORD_0;
  vec4 position = vec4(POSITION, 1);
  pos = position;
  gl_Position = position;
}
`;
    let vig_fs = `
precision mediump float;
uniform sampler2D base;

varying vec2 uv;
varying vec4 pos;

void main() {
    vec2 offset = uv * 2.0 - 1.0;
    float mask = 1.0 - dot(offset, offset) * FACTOR;
    mask = clamp(0.5 + (mask - 0.5) * HARDNESS, 0.0, 1.0);
    vec4 color = texture2D(base, uv);
    gl_FragColor = mix(vec4(vec3(0),1), color, mask);
}
`;

    // export { Example } from "./example";

    exports.Screen = Screen;
    exports.Asset = Asset;
    exports.Material = Material;
    exports.EntityMgr = EntityMgr;
    exports.System = System;
    exports.Camera = Camera;
    exports.MeshRenderer = MeshRenderer;
    exports.vec3 = vec3;
    exports.vec4 = vec4;
    exports.mat4 = mat4;
    exports.quat = quat;
    exports.OrbitControl = OrbitControl;
    exports.QuadMesh = QuadMesh;
    exports.Texture = Texture;
    exports.Bloom = Bloom;
    exports.Vignetting = Vignetting;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
