(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(this, function () { 'use strict';

  var babelHelpers = {};
  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  babelHelpers.classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  babelHelpers.createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  babelHelpers.get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  babelHelpers.inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  babelHelpers.possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  babelHelpers.set = function set(object, property, value, receiver) {
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent !== null) {
        set(parent, property, value, receiver);
      }
    } else if ("value" in desc && desc.writable) {
      desc.value = value;
    } else {
      var setter = desc.set;

      if (setter !== undefined) {
        setter.call(receiver, value);
      }
    }

    return value;
  };

  babelHelpers;
  var global = ('global', eval)('this');

  (function (global) {
    var GLBoost = typeof global.GLBoost !== 'undefined' ? global.GLBoost : { REVISION: '1' };

    if (typeof define === 'function' && define.amd) {
      define(function () {
        return GLBoost;
      });
    } else if ((typeof exports === 'undefined' ? 'undefined' : babelHelpers.typeof(exports)) === 'object') {
      module.exports = GLBoost;
      global.GLBoost = GLBoost;
    } else {
      global.GLBoost = GLBoost;
    }

    GLBoost['POSITION'] = 'position';
    GLBoost['COLOR'] = 'color';
    GLBoost['NORMAL'] = 'normal';
    GLBoost['TEXCOORD'] = 'texcoord';
    GLBoost['JOINT'] = 'joint';
    GLBoost['WEIGHT'] = 'weight';
    GLBoost['POINTS'] = 'POINTS';
    GLBoost['LINES'] = 'LINES';
    GLBoost['LINE_STRIP'] = 'LINE_STRIP';
    GLBoost['LINE_LOOP'] = 'LINE_LOOP';
    GLBoost['TRIANGLES'] = 'TRIANGLES';
    GLBoost['TRIANGLE_STRIP'] = 'TRIANGLE_STRIP';
    GLBoost['STATIC_DRAW'] = 'STATIC_DRAW';
    GLBoost['STREAM_DRAW'] = 'STREAM_DRAW';
    GLBoost['DYNAMIC_DRAW'] = 'DYNAMIC_DRAW';
    GLBoost['BLENDTARGET1'] = 'shapetarget_1';
    GLBoost['BLENDTARGET2'] = 'shapetarget_2';
    GLBoost['BLENDTARGET3'] = 'shapetarget_3';
    GLBoost['BLENDTARGET4'] = 'shapetarget_4';
    GLBoost['BLENDTARGET5'] = 'shapetarget_5';
    GLBoost['BLENDTARGET6'] = 'shapetarget_6';
    GLBoost['BLENDTARGET7'] = 'shapetarget_7';
    GLBoost['BLENDTARGET8'] = 'shapetarget_8';
    GLBoost['BLENDTARGET9'] = 'shapetarget_9';
    GLBoost['BLENDTARGET10'] = 'shapetarget_10';
    GLBoost['RADIAN'] = 'radian';
    GLBoost['DEGREE'] = 'degree';
    GLBoost['RENDER_TARGET_NONE_COLOR'] = 0; // gl.NONE
    GLBoost['COLOR_ATTACHMENT0'] = 0x8CE0; // gl.COLOR_ATTACHMENT0
    GLBoost['UNPACK_FLIP_Y_WEBGL'] = 'UNPACK_FLIP_Y_WEBGL';
    GLBoost['TEXTURE_MAG_FILTER'] = 'TEXTURE_MAG_FILTER';
    GLBoost['TEXTURE_MIN_FILTER'] = 'TEXTURE_MIN_FILTER';
    GLBoost['LINEAR'] = 'LINEAR';
    GLBoost['LINEAR_MIPMAP_LINEAR'] = 'LINEAR_MIPMAP_LINEAR';
    GLBoost['NEAREST'] = 'NEAREST';
    GLBoost['TEXTURE_WRAP_S'] = 'TEXTURE_WRAP_S';
    GLBoost['TEXTURE_WRAP_T'] = 'TEXTURE_WRAP_T';
    GLBoost['REPEAT'] = 'REPEAT';
    GLBoost['CLAMP_TO_EDGE'] = 'CLAMP_TO_EDGE';
    GLBoost['MIRRORED_REPEAT'] = 'MIRRORED_REPEAT';
    GLBoost['LOG_SHADER_CODE'] = 'LOG_SHADER_CODE';
    GLBoost['LOG_GLBOOST_OBJECT_LIFECYCLE'] = 'LOG_GLBOOST_OBJECT_LIFECYCLE';
    GLBoost['LOG_GL_RESOURCE_LIFECYCLE'] = 'LOG_GL_RESOURCE_LIFECYCLE';

    GLBoost.isThisGLVersion_2 = function (gl) {
      if (typeof WebGL2RenderingContext === 'undefined') {
        return false;
      }
      return gl instanceof WebGL2RenderingContext;
    };
  })(global);

  var GLBoost$1 = global.GLBoost;

  var GLExtensionsManager = function () {
    function GLExtensionsManager(glContext) {
      babelHelpers.classCallCheck(this, GLExtensionsManager);

      var gl = glContext.gl;

      if (GLBoost$1.VALUE_WEBGL_ONE_USE_EXTENSIONS) {
        this._extVAO = gl.getExtension('OES_vertex_array_object');

        this._extDBs = gl.getExtension('WEBGL_draw_buffers');

        this._extTFA = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic');

        this._extEIUI = gl.getExtension('OES_element_index_uint');

        this._extDepthTex = gl.getExtension('WEBGL_depth_texture');
      }

      GLExtensionsManager._instances[glContext.belongingCanvasId] = this;
    }

    babelHelpers.createClass(GLExtensionsManager, [{
      key: 'createVertexArray',
      value: function createVertexArray(gl) {
        if (GLBoost$1.isThisGLVersion_2(gl)) {
          return gl.createVertexArray();
        } else if (this._extVAO) {
          return this._extVAO.createVertexArrayOES();
        } else {
          return null;
        }
      }
    }, {
      key: 'bindVertexArray',
      value: function bindVertexArray(gl, vao) {
        if (GLBoost$1.isThisGLVersion_2(gl)) {
          gl.bindVertexArray(vao);
          return true;
        } else if (this._extVAO) {
          this._extVAO.bindVertexArrayOES(vao);
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'drawBuffers',
      value: function drawBuffers(gl, buffers) {
        if (GLBoost$1.isThisGLVersion_2(gl)) {
          gl.drawBuffers(buffers);
          return true;
        } else if (this._extDBs) {
          this.extDBs.drawBuffersWEBGL(buffers);
          return true;
        } else {
          if (buffers[0] === gl.NONE) {
            gl.colorMask(false, false, false, false);
          } else {
            gl.colorMask(true, true, true, true);
          }
          return false;
        }
      }
    }, {
      key: 'colorAttachiment',
      value: function colorAttachiment(gl, index) {
        return this._extDBs ? this._extDBs['COLOR_ATTACHMENT' + index + '_WEBGL'] : gl['COLOR_ATTACHMENT' + index];
      }
    }, {
      key: 'elementIndexBitSize',
      value: function elementIndexBitSize(gl) {
        if (GLBoost$1.isThisGLVersion_2(gl) || this._extEIUI) {
          return gl.UNSIGNED_INT;
        } else {
          return gl.UNSIGNED_SHORT;
        }
      }
    }, {
      key: 'createUintArrayForElementIndex',
      value: function createUintArrayForElementIndex(gl, array) {
        if (GLBoost$1.isThisGLVersion_2(gl) || this._extEIUI) {
          return new Uint32Array(array);
        } else {
          return new Uint16Array(array);
        }
      }
    }, {
      key: 'extVAO',
      get: function get() {
        return this._extVAO;
      }
    }, {
      key: 'extDBs',
      get: function get() {
        return this._extDBs;
      }
    }, {
      key: 'extTFA',
      get: function get() {
        return this._extTFA;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance(glContext) {
        if (GLExtensionsManager._instances[glContext.belongingCanvasId]) {
          return GLExtensionsManager._instances[glContext.belongingCanvasId];
        }
        return new GLExtensionsManager(glContext);
      }
    }]);
    return GLExtensionsManager;
  }();

  GLExtensionsManager._instances = new Object();

  GLBoost$1['GLExtensionsManager'] = GLExtensionsManager;

  var Hash = function () {
    function Hash() {
      babelHelpers.classCallCheck(this, Hash);
    }

    babelHelpers.createClass(Hash, null, [{
      key: "toCRC32",
      value: function toCRC32(str) {
        var crc = 0,
            x = 0,
            y = 0;
        var table = Hash._crc32table;

        crc = crc ^ -1;
        for (var i = 0, iTop = str.length; i < iTop; ++i) {
          y = (crc ^ str.charCodeAt(i)) & 0xff;
          x = "0x" + table[y];
          crc = crc >>> 8 ^ x;
        }

        return (crc ^ -1) >>> 0;
      }
    }]);
    return Hash;
  }();

  Hash._crc32table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".split(' ');

  var MiscUtil = function () {
    function MiscUtil() {
      babelHelpers.classCallCheck(this, MiscUtil);
    }

    babelHelpers.createClass(MiscUtil, null, [{
      key: 'isDefinedAndTrue',
      value: function isDefinedAndTrue(value) {
        return !!(typeof value !== 'undefined' && value);
      }
    }, {
      key: 'getTheValueOrAlternative',
      value: function getTheValueOrAlternative(value, alternativeIfTheValueIsNullOrUndefined) {
        if (typeof value !== 'undefined' && value != null) {
          return value;
        } else {
          return alternativeIfTheValueIsNullOrUndefined;
        }
      }
    }, {
      key: 'consoleLog',
      value: function consoleLog(logType, text) {
        if (GLBoost$1.VALUE_CONSOLE_OUT_FOR_DEBUGGING && GLBoost$1['VALUE_' + logType]) {
          console.log(text);
        }
      }
    }]);
    return MiscUtil;
  }();

  var singleton$4 = Symbol();
  var singletonEnforcer$4 = Symbol();

  var GLBoostMonitor = function () {
    function GLBoostMonitor(enforcer) {
      babelHelpers.classCallCheck(this, GLBoostMonitor);

      if (enforcer !== singletonEnforcer$4) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }

      this._glBoostObjects = {};
      this._glResources = [];
    }

    babelHelpers.createClass(GLBoostMonitor, [{
      key: 'registerGLBoostObject',
      value: function registerGLBoostObject(glBoostObject) {
        this._glBoostObjects[glBoostObject.toString()] = glBoostObject;
        MiscUtil.consoleLog(GLBoost.LOG_GLBOOST_OBJECT_LIFECYCLE, 'GLBoost Resource: ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ') was created.');
      }
    }, {
      key: 'deregisterGLBoostObject',
      value: function deregisterGLBoostObject(glBoostObject) {
        delete this._glBoostObjects[glBoostObject.toString()];
        MiscUtil.consoleLog(GLBoost.LOG_GLBOOST_OBJECT_LIFECYCLE, 'GLBoost Resource: ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ') was ready for discard.');
      }
    }, {
      key: 'printGLBoostObjects',
      value: function printGLBoostObjects() {
        var objects = this._glBoostObjects;
        MiscUtil.consoleLog(GLBoost.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Object Lists [begin] ==========');
        for (var key in objects) {
          if (objects.hasOwnProperty(key)) {
            MiscUtil.consoleLog(key + '(' + objects[key].belongingCanvasId + ')');
          }
        }
        MiscUtil.consoleLog(GLBoost.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Object Lists [end] ==========');
      }
    }, {
      key: 'printGLBoostObjectsOrderByName',
      value: function printGLBoostObjectsOrderByName() {
        var objects = this._glBoostObjects;
        var objectArray = [];
        for (var key in objects) {
          if (objects.hasOwnProperty(key)) {
            objectArray.push(objects[key]);
          }
        }
        objectArray.sort(function (a, b) {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        });
        MiscUtil.consoleLog(GLBoost.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Object Lists [begin] ==========');
        objectArray.forEach(function (object) {
          MiscUtil.consoleLog(object.toString() + ' (' + object.belongingCanvasId + ')');
        });
        MiscUtil.consoleLog(GLBoost.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Object Lists [end] ==========');
      }
    }, {
      key: 'registerWebGLResource',
      value: function registerWebGLResource(glBoostObject, glResource) {
        var glResourceName = glResource.constructor.name;
        this._glResources.push([glBoostObject, glResourceName]);
        MiscUtil.consoleLog(GLBoost.LOG_GL_RESOURCE_LIFECYCLE, 'WebGL Resource: ' + glResourceName + ' was created by ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ').');
      }
    }, {
      key: 'deregisterWebGLResource',
      value: function deregisterWebGLResource(glBoostObject, glResource) {
        var _this = this;

        var glResourceName = glResource.constructor.name;
        this._glResources.forEach(function (glResource, i) {
          if (glResource[0] === glBoostObject && glResource[1] === glResourceName) {
            _this._glResources.splice(i, 1);
          }
        });
        MiscUtil.consoleLog(GLBoost.LOG_GL_RESOURCE_LIFECYCLE, 'WebGL Resource: ' + glResourceName + ' was deleted by ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ').');
      }
    }, {
      key: 'printWebGLResources',
      value: function printWebGLResources() {
        var glResources = this._glResources;
        glResources.sort(function (a, b) {
          if (a[0] < b[0]) return -1;
          if (a[0] > b[0]) return 1;
          return 0;
        });
        MiscUtil.consoleLog(GLBoost.LOG_GL_RESOURCE_LIFECYCLE, '========== WebGL Resource Lists [begin] ==========');
        glResources.forEach(function (glResource, i) {
          MiscUtil.consoleLog(i + 1 + ': ' + glResource[0].toString() + ' (' + glResource[0].belongingCanvasId + ') created ' + glResource[1]);
        });
        MiscUtil.consoleLog(GLBoost.LOG_GL_RESOURCE_LIFECYCLE, '========== WebGL Resource Lists [end] ==========');
      }
    }, {
      key: 'printHierarchy',
      value: function printHierarchy() {
        var glBoostObjects = this._glBoostObjects;
        var scenes = [];
        for (var key in glBoostObjects) {
          if (glBoostObjects.hasOwnProperty(key)) {
            if (key.match(/Scene/)) {
              scenes.push(glBoostObjects[key]);
            }
          }
        }

        function putWhiteSpace(level) {
          var str = '';
          for (var i = 0; i < level; i++) {
            str += '  ';
          }
          return str;
        }

        MiscUtil.consoleLog(GLBoost.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Objects Hierarchy of Scenes [begin] ==========');
        scenes.forEach(function (scene) {
          var outputText = function searchRecursively(element, level) {
            var outputText = '';
            outputText += putWhiteSpace(level) + element.toString() + ' (' + element.belongingCanvasId + ')\n';
            if (typeof element.getChildren === 'undefined') {
              return outputText;
            }
            var children = element.getChildren();
            children.forEach(function (child) {
              outputText += searchRecursively(child, level + 1);
            });
            return outputText += '\n';
          }(scene, 0);

          outputText = outputText.replace(/\n+/g, '\n');
          MiscUtil.consoleLog(outputText);
        });
        MiscUtil.consoleLog(GLBoost.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Objects Hierarchy of Scenes [end] ==========');
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton$4]) {
          this[singleton$4] = new GLBoostMonitor(singletonEnforcer$4);
        }
        return this[singleton$4];
      }
    }]);
    return GLBoostMonitor;
  }();

  GLBoost['GLBoostMonitor'] = GLBoostMonitor;

  var GLBoostObject = function () {
    function GLBoostObject(glBoostContext) {
      var toRegister = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      babelHelpers.classCallCheck(this, GLBoostObject);

      if (this.constructor === GLBoostObject) {
        throw new TypeError('Cannot construct GLBoostObject instances directly.');
      }
      this._setName();
      this._glBoostContext = glBoostContext;
      this._glContext = glBoostContext.glContext;
      this._glBoostMonitor = GLBoostMonitor.getInstance();
      this._toRegister = toRegister;
      if (this._toRegister) {
        this._glBoostMonitor.registerGLBoostObject(this);
      }
      this._userFlavorName = '';
      this._readyForDiscard = false;
    }

    babelHelpers.createClass(GLBoostObject, [{
      key: '_setName',
      value: function _setName() {
        if (typeof GLBoostObject.classInfoDic[this.constructor.name] === 'undefined') {
          GLBoostObject.classInfoDic[this.constructor.name] = {};
        }
        GLBoostObject.classInfoDic[this.constructor.name]._instanceCount = typeof GLBoostObject.classInfoDic[this.constructor.name]._instanceCount === 'undefined' ? 0 : GLBoostObject.classInfoDic[this.constructor.name]._instanceCount + 1;
        this._instanceName = this.constructor.name + '_' + GLBoostObject.classInfoDic[this.constructor.name]._instanceCount;
      }

      /**
       * [en] Return instance name.
       * [ja] インスタンス名を返します。
       * @returns {string} [en] the instance name. [ja] インスタンス名
       */

    }, {
      key: 'toString',
      value: function toString() {
        return this._instanceName;
      }
    }, {
      key: 'readyForDiscard',
      value: function readyForDiscard() {
        if (this._toRegister) {
          this._glBoostMonitor.deregisterGLBoostObject(this);
        }
        this._readyForDiscard = true;
      }
    }, {
      key: '_copy',
      value: function _copy(instance) {
        instance._userFlavorName = this._userFlavorName;
      }
    }, {
      key: 'belongingCanvasId',
      get: function get() {
        return this._glBoostContext.belongingCanvasId;
      }
    }, {
      key: 'userFlavorName',
      set: function set(name) {
        this._userFlavorName = name;
      },
      get: function get() {
        return this._userFlavorName;
      }
    }, {
      key: 'instanceNameWithUserFlavor',
      get: function get() {
        return this._instanceName + '_' + this._userFlavorName;
      }
    }, {
      key: 'isReadyForDiscard',
      get: function get() {
        return this._readyForDiscard;
      }
    }]);
    return GLBoostObject;
  }();

  GLBoostObject.classInfoDic = {};

  var Shader = function (_GLBoostObject) {
    babelHelpers.inherits(Shader, _GLBoostObject);

    function Shader(glBoostContext) {
      babelHelpers.classCallCheck(this, Shader);

      var _this = babelHelpers.possibleConstructorReturn(this, (Shader.__proto__ || Object.getPrototypeOf(Shader)).call(this, glBoostContext));

      _this._glslProgram = null;
      _this._dirty = true;
      return _this;
    }

    babelHelpers.createClass(Shader, [{
      key: '_removeDuplicatedLine',
      value: function _removeDuplicatedLine(shaderString) {
        var splittedShaderLines = shaderString.split('\n');
        for (var i = 0; i < splittedShaderLines.length; i++) {
          splittedShaderLines[i] += '\n';
          for (var j = 0; j < i; j++) {
            if (splittedShaderLines[j] === splittedShaderLines[i]) {
              splittedShaderLines[j] = '//                                                            commented out because of duplicated: ' + splittedShaderLines[i];
            }
          }
        }

        var processedShaderString = '';
        for (var _i = 0; _i < splittedShaderLines.length; _i++) {
          processedShaderString += splittedShaderLines[_i];
        }

        return processedShaderString;
      }
    }, {
      key: '_getVertexShaderString',
      value: function _getVertexShaderString(gl, functions, existCamera_f, lights, material, extraData) {
        var _this2 = this;

        var f = functions;
        var shaderText = '';

        var in_ = Shader._in_onVert(gl);
        var out_ = Shader._out_onVert(gl);

        shaderText += Shader._glslVer(gl);
        shaderText += 'precision highp float;\n';

        /// define variables
        // start defining variables. first, sub class Shader, ...
        // seconds, define variables as mixin shaders
        var vsDefineShaderText = '';
        this._classNamesOfVSDefine.forEach(function (className) {
          var method = _this2['VSDefine_' + className];
          if (method) {
            vsDefineShaderText += '//                                                            VSDefine_' + className + ' //\n';
            vsDefineShaderText += method.bind(_this2, in_, out_, f, lights, material, extraData)();
          }
        });
        shaderText += this._removeDuplicatedLine(vsDefineShaderText);

        // begin of main function
        shaderText += 'void main(void) {\n';

        /// define methods
        // start defining methods. first, sub class Shader, ...
        // seconds, define methods as mixin Shaders
        this._classNamesOfVSMethodDefine.forEach(function (className) {
          var method = _this2['VSMethodDefine_' + className];
          if (method) {
            shaderText += '//                                                            VSMethodDefine_' + className + ' //\n';
            shaderText += method.bind(_this2, existCamera_f, f, lights, material, extraData)();
          }
        });

        /// Transform
        // start transforming. first, sub class Shader, ...
        // seconds, transform as mixin Shaders
        this._classNamesOfVSTransform.forEach(function (className) {
          var method = _this2['VSTransform_' + className];
          if (method) {
            shaderText += '//                                                            VSTransform_' + className + ' //\n';
            shaderText += method.bind(_this2, existCamera_f, f, lights, material, extraData)();
          }
        });

        /// Shading
        // start shading. first, sub class Shader, ...
        // seconds, shade as mixin Shaders
        this._classNamesOfVSShade.forEach(function (className) {
          var method = _this2['VSShade_' + className];
          if (method) {
            shaderText += '//                                                            VSShade_' + className + ' //\n';
            shaderText += method.bind(_this2, existCamera_f, f, lights, material, extraData)();
          }
        });

        // end of main function
        shaderText += '}\n';

        return shaderText;
      }
    }, {
      key: '_getFragmentShaderString',
      value: function _getFragmentShaderString(gl, functions, lights, material, extraData) {
        var _this3 = this;

        var f = functions;
        var shaderText = '';

        var in_ = Shader._in_onFrag(gl);

        shaderText += Shader._glslVer(gl);
        var maxDrawBuffers = this._getMaxDrawBuffers();
        if (maxDrawBuffers > 1) {
          shaderText += Shader._glsl1DrawBufferExt(gl);
        }
        shaderText += 'precision mediump float;\n';

        for (var i = 0; i < maxDrawBuffers; i++) {
          shaderText += Shader._set_outColor_onFrag(gl, i);
        }

        /// define variables
        // start defining variables. first, sub class Shader, ...
        // seconds, define variables as mixin shaders
        var fsDefineShaderText = '';
        this._classNamesOfFSDefine.forEach(function (className) {
          var method = _this3['FSDefine_' + className];
          if (method) {
            fsDefineShaderText += '//                                                            FSDefine_' + className + ' //\n';
            fsDefineShaderText += method.bind(_this3, in_, f, lights, material, extraData)();
          }
        });
        shaderText += this._removeDuplicatedLine(fsDefineShaderText);

        /// define methods
        // start defining methods. first, sub class Shader, ...
        // seconds, define methods as mixin Shaders
        this._classNamesOfFSMethodDefine.forEach(function (className) {
          var method = _this3['FSMethodDefine_' + className];
          if (method) {
            shaderText += '//                                                            FSMethodDefine_' + className + ' //\n';
            shaderText += method.bind(_this3, in_, f, lights, material, extraData)();
          }
        });

        // begin of main function
        shaderText += 'void main(void) {\n';

        /// Shading
        // start shading. first, sub class Shaders, ...
        // second, shade as mixin Shaders
        this._classNamesOfFSShade.forEach(function (className) {
          var method = _this3['FSShade_' + className];
          if (method) {
            shaderText += '//                                                            FSShade_' + className + ' //\n';
            shaderText += method.bind(_this3, f, gl, lights, material, extraData)();
          }
        });

        // end of main function
        if (maxDrawBuffers > 1) {
          for (var _i2 = 0; _i2 < maxDrawBuffers; _i2++) {
            shaderText += Shader._set_glFragData_inGLVer1(gl, _i2);
          }
        } else {
          shaderText += Shader._set_glFragColor_inGLVer1(gl);
        }
        shaderText += '}\n';

        return shaderText;
      }
    }, {
      key: '_prepareAssetsForShaders',
      value: function _prepareAssetsForShaders(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData, canvas) {
        var _this4 = this;

        var temp = [];
        // and shade as mixin Prepare Functions
        this._classNamesOfPrepare.forEach(function (className) {
          var method = _this4['prepare_' + className];
          if (method) {
            var verAttirbs = method.bind(_this4, gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData, canvas)();
            temp = temp.concat(verAttirbs);
          }
        });
        var set = new Set(temp);

        var vertexAttribsAsResult = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var elem = _step.value;

            vertexAttribsAsResult.push(elem);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return vertexAttribsAsResult;
      }
    }, {
      key: 'setUniforms',
      value: function setUniforms() {}
    }, {
      key: '_getShader',
      value: function _getShader(gl, theSource, type) {
        var shader;

        if (type == 'x-shader/x-fragment') {
          shader = this._glContext.createShader(this, gl.FRAGMENT_SHADER);
        } else if (type == 'x-shader/x-vertex') {
          shader = this._glContext.createShader(this, gl.VERTEX_SHADER);
        } else {
          // Unknown shader type
          return null;
        }

        gl.shaderSource(shader, theSource);

        // Compile the shader program
        gl.compileShader(shader);

        // See if it compiled successfully
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          alert('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
          return null;
        }

        return shader;
      }
    }, {
      key: '_initShaders',
      value: function _initShaders(gl, vertexShaderStr, fragmentShaderStr) {
        MiscUtil.consoleLog(GLBoost.LOG_SHADER_CODE, 'Vertex Shader:');
        MiscUtil.consoleLog(GLBoost.LOG_SHADER_CODE, vertexShaderStr);
        MiscUtil.consoleLog(GLBoost.LOG_SHADER_CODE, 'Fragment Shader:');
        MiscUtil.consoleLog(GLBoost.LOG_SHADER_CODE, fragmentShaderStr);

        var vertexShader = this._getShader(gl, vertexShaderStr, 'x-shader/x-vertex');
        var fragmentShader = this._getShader(gl, fragmentShaderStr, 'x-shader/x-fragment');

        // Create the shader program
        var shaderProgram = this._glContext.createProgram(this);
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        this._glContext.deleteShader(this, vertexShader);
        this._glContext.deleteShader(this, fragmentShader);

        // If creating the shader program failed, alert
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
          alert('Unable to initialize the shader program.');
        }

        gl.useProgram(shaderProgram);

        return shaderProgram;
      }
    }, {
      key: 'getShaderProgram',
      value: function getShaderProgram(vertexAttribs, existCamera_f, lights, material) {
        var extraData = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

        var gl = this._glContext.gl;
        var canvasId = this._glContext.belongingCanvasId;

        lights = this.getDefaultPointLightIfNotExist(lights);

        var vertexShaderText = this._getVertexShaderString(gl, vertexAttribs, existCamera_f, lights, material, extraData);
        var fragmentShaderText = this._getFragmentShaderString(gl, vertexAttribs, lights, material, extraData);

        // lookup shaderHashTable
        var baseText = vertexShaderText + '\n###SPLIT###\n' + fragmentShaderText;
        var hash = Hash.toCRC32(baseText);
        if (!Shader._shaderHashTable[canvasId]) {
          Shader._shaderHashTable[canvasId] = {};
        }
        var programToReturn = null;
        var hashTable = Shader._shaderHashTable[canvasId];
        if (hash in hashTable) {
          if (hashTable[hash].code === baseText) {
            programToReturn = hashTable[hash].program;
          } else {
            for (var i = 0; i < hashTable[hash].collisionN; i++) {
              if (hashTable[hash + '_' + i].code === baseText) {
                programToReturn = hashTable[hash + '_' + i].program;
                break;
              }
            }
            hashTable[hash].collisionN++;
          }
        }

        if (programToReturn === null || !gl.isProgram(programToReturn)) {
          // if the current shader codes is not in shaderHashTable, create GLSL Shader Program.
          programToReturn = this._initShaders(gl, vertexShaderText, fragmentShaderText);

          // register it to shaderHashTable.
          var indexStr = null;
          if (typeof hashTable[hash] !== 'undefined' && hashTable[hash].collisionN > 0) {
            indexStr = hash + '_' + hashTable[hash].collisionN;
          } else {
            indexStr = hash;
          }
          hashTable[indexStr] = { code: baseText, program: programToReturn, collisionN: 0 };
          Shader._shaderHashTable[canvasId] = hashTable;
        } else {
          //gl.useProgram(programToReturn);
        }
        this._glslProgram = programToReturn;

        material._semanticsDic = {};
        material.uniformTextureSamplerDic = {};
        programToReturn._material = material;
        programToReturn.optimizedVertexAttribs = this._prepareAssetsForShaders(gl, programToReturn, vertexAttribs, existCamera_f, lights, material, extraData);

        return programToReturn;
      }
    }, {
      key: 'getDefaultPointLightIfNotExist',
      value: function getDefaultPointLightIfNotExist(lights) {

        if (lights.length === 0) {
          if (Shader._defaultLight === null) {
            Shader._defaultLight = this._glBoostContext.createPointLight(GLBoost.VALUE_DEFAULT_POINTLIGHT_INTENSITY);
          }
          return [Shader._defaultLight];
        } else {
          return lights;
        }
      }
    }, {
      key: '_getMaxDrawBuffers',
      value: function _getMaxDrawBuffers() {
        var gl = this._glContext.gl;
        var isWebGL2 = Shader.isThisGLVersion_2(gl);
        if (isWebGL2) {
          return gl.getParameter(gl.MAX_DRAW_BUFFERS);
        }

        var glem = GLExtensionsManager.getInstance(this._glContext);
        if (glem.extDBs) {
          return gl.getParameter(glem.extDBs.MAX_DRAW_BUFFERS_WEBGL);
        } else {
          return 1;
        }
      }
    }, {
      key: '_sampler2DShadow_func',
      value: function _sampler2DShadow_func() {
        var gl = this._glContext.gl;
        return GLBoost.isThisGLVersion_2(gl) ? 'sampler2DShadow' : 'sampler2D';
      }
    }, {
      key: 'readyForDiscard',
      value: function readyForDiscard() {
        if (this._glslProgram) {
          this._glContext.deleteProgram(this, this._glslProgram);
        }
        babelHelpers.get(Shader.prototype.__proto__ || Object.getPrototypeOf(Shader.prototype), 'readyForDiscard', this).call(this);
      }
    }, {
      key: 'dirty',
      get: function get() {
        return this._dirty;
      },
      set: function set(flg) {
        this._dirty = flg;
      }
    }, {
      key: 'glslProgram',
      get: function get() {
        return this._glslProgram;
      }
    }], [{
      key: 'initMixinMethodArray',
      value: function initMixinMethodArray() {
        this.prototype._classNamesOfVSDefine = this.prototype._classNamesOfVSDefine ? this.prototype._classNamesOfVSDefine : [];
        this.prototype._classNamesOfVSMethodDefine = this.prototype._classNamesOfVSMethodDefine ? this.prototype._classNamesOfVSMethodDefine : [];
        this.prototype._classNamesOfVSTransform = this.prototype._classNamesOfVSTransform ? this.prototype._classNamesOfVSTransform : [];
        this.prototype._classNamesOfVSShade = this.prototype._classNamesOfVSShade ? this.prototype._classNamesOfVSShade : [];

        this.prototype._classNamesOfFSDefine = this.prototype._classNamesOfFSDefine ? this.prototype._classNamesOfFSDefine : [];
        this.prototype._classNamesOfFSMethodDefine = this.prototype._classNamesOfFSMethodDefine ? this.prototype._classNamesOfFSMethodDefine : [];
        this.prototype._classNamesOfFSShade = this.prototype._classNamesOfFSShade ? this.prototype._classNamesOfFSShade : [];

        this.prototype._classNamesOfPrepare = this.prototype._classNamesOfPrepare ? this.prototype._classNamesOfPrepare : [];
      }
    }, {
      key: 'mixin',
      value: function mixin(source) {

        // create mixin method Array
        this.initMixinMethodArray();

        // register mixin methods to Array
        if (this.prototype._classNamesOfVSDefine.indexOf(source.name) === -1) {
          this.prototype._classNamesOfVSDefine.push(source.name);
        }
        if (this.prototype._classNamesOfVSMethodDefine.indexOf(source.name) === -1) {
          this.prototype._classNamesOfVSMethodDefine.push(source.name);
        }
        if (this.prototype._classNamesOfVSTransform.indexOf(source.name) === -1) {
          this.prototype._classNamesOfVSTransform.push(source.name);
        }
        if (this.prototype._classNamesOfVSShade.indexOf(source.name) === -1) {
          this.prototype._classNamesOfVSShade.push(source.name);
        }
        if (this.prototype._classNamesOfFSDefine.indexOf(source.name) === -1) {
          this.prototype._classNamesOfFSDefine.push(source.name);
        }
        if (this.prototype._classNamesOfFSMethodDefine.indexOf(source.name) === -1) {
          this.prototype._classNamesOfFSMethodDefine.push(source.name);
        }
        if (this.prototype._classNamesOfFSShade.indexOf(source.name) === -1) {
          this.prototype._classNamesOfFSShade.push(source.name);
        }
        if (this.prototype._classNamesOfPrepare.indexOf(source.name) === -1) {
          this.prototype._classNamesOfPrepare.push(source.name);
        }

        // mixin
        var target = this.prototype;source = source.prototype;
        Object.getOwnPropertyNames(source).forEach(function (name) {
          if (name !== 'constructor') Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name));
        });
      }
    }, {
      key: 'swapMixin',
      value: function swapMixin(current, newone) {
        // register mixin methods to Array
        var matchIdx = this.prototype._classNamesOfVSDefine.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSDefine[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfVSMethodDefine.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSMethodDefine[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfVSTransform.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSTransform[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfVSShade.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSShade[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfFSDefine.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSDefine[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfFSMethodDefine.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSMethodDefine[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfFSShade.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSShade[matchIdx] = newone.name;
        }
        matchIdx = this.prototype._classNamesOfPrepare.indexOf(current.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfPrepare[matchIdx] = newone.name;
        }

        // mixin
        var target = this.prototype;newone = newone.prototype;
        Object.getOwnPropertyNames(newone).forEach(function (name) {
          if (name !== 'constructor') Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(newone, name));
        });
      }
    }, {
      key: 'removeMixin',
      value: function removeMixin(source) {
        var matchIdx = this.prototype._classNamesOfVSDefine.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSDefine.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfVSMethodDefine.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSMethodDefine.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfVSTransform.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSTransform.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfVSShade.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfVSShade.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfFSDefine.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSDefine.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfFSMethodDefine.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSMethodDefine.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfFSShade.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfFSShade.splice(matchIdx, 1);
        }
        matchIdx = this.prototype._classNamesOfPrepare.indexOf(source.name);
        if (matchIdx !== -1) {
          this.prototype._classNamesOfPrepare.splice(matchIdx, 1);
        }
      }
    }, {
      key: '_exist',
      value: function _exist(functions, attribute) {
        return functions.indexOf(attribute) >= 0;
      }
    }, {
      key: 'isThisGLVersion_2',
      value: function isThisGLVersion_2(gl) {
        if (typeof WebGL2RenderingContext === 'undefined') {
          return false;
        }
        return gl instanceof WebGL2RenderingContext;
      }
    }, {
      key: '_glslVer',
      value: function _glslVer(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? '#version 300 es\n' : '';
      }
    }, {
      key: '_glsl1DrawBufferExt',
      value: function _glsl1DrawBufferExt(gl) {
        return !GLBoost.isThisGLVersion_2(gl) ? '#extension GL_EXT_draw_buffers : require\n' : '';
      }
    }, {
      key: '_in_onVert',
      value: function _in_onVert(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'in' : 'attribute';
      }
    }, {
      key: '_out_onVert',
      value: function _out_onVert(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'out' : 'varying';
      }
    }, {
      key: '_in_onFrag',
      value: function _in_onFrag(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'in' : 'varying';
      }
    }, {
      key: '_texture_func',
      value: function _texture_func(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'texture' : 'texture2D';
      }
    }, {
      key: '_textureProj_func',
      value: function _textureProj_func(gl) {
        return GLBoost.isThisGLVersion_2(gl) ? 'textureProj' : 'texture2DProj';
      }
    }, {
      key: '_set_outColor_onFrag',
      value: function _set_outColor_onFrag(gl, i) {
        return GLBoost.isThisGLVersion_2(gl) ? 'layout(location = ' + i + ') out vec4 rt' + i + ';\n' : 'vec4 rt' + i + ';\n';
      }
    }, {
      key: '_set_glFragColor_inGLVer1',
      value: function _set_glFragColor_inGLVer1(gl) {
        return !GLBoost.isThisGLVersion_2(gl) ? '  gl_FragColor = rt0;\n' : '';
      }
    }, {
      key: '_set_glFragData_inGLVer1',
      value: function _set_glFragData_inGLVer1(gl, i) {
        return !GLBoost.isThisGLVersion_2(gl) ? '  gl_FragData[' + i + '] = rt' + i + ';\n' : '';
      }
    }, {
      key: 'trySettingMatrix44ToUniform',
      value: function trySettingMatrix44ToUniform(gl, material, semanticsDir, semantics, matrixArray) {
        if (typeof semanticsDir[semantics] === 'undefined') {
          return;
        }
        if (typeof semanticsDir[semantics] === 'string') {
          gl.uniformMatrix4fv(material['uniform_' + semanticsDir[semantics]], false, matrixArray);
          return;
        }

        // it must be an Array...
        semanticsDir[semantics].forEach(function (uniformName) {
          gl.uniformMatrix4fv(material['uniform_' + uniformName], false, matrixArray);
        });
      }
    }, {
      key: 'trySettingMatrix33ToUniform',
      value: function trySettingMatrix33ToUniform(gl, material, semanticsDir, semantics, matrixArray) {
        if (typeof semanticsDir[semantics] === 'undefined') {
          return;
        }
        if (typeof semanticsDir[semantics] === 'string') {
          gl.uniformMatrix3fv(material['uniform_' + semanticsDir[semantics]], false, matrixArray);
          return;
        }

        // it must be an Array...
        semanticsDir[semantics].forEach(function (uniformName) {
          gl.uniformMatrix3fv(material['uniform_' + uniformName], false, matrixArray);
        });
      }
    }]);
    return Shader;
  }(GLBoostObject);

  Shader._instances = new Object();
  Shader._shaderHashTable = {};
  Shader._defaultLight = null;

  var VertexLocalShaderSource = function () {
    function VertexLocalShaderSource() {
      babelHelpers.classCallCheck(this, VertexLocalShaderSource);
    }

    babelHelpers.createClass(VertexLocalShaderSource, [{
      key: 'VSDefine_VertexLocalShaderSource',
      value: function VSDefine_VertexLocalShaderSource(in_, out_, f) {
        var shaderText = in_ + ' vec3 aVertex_position;\n';
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += in_ + ' vec3 aVertex_normal;\n';
          shaderText += out_ + ' vec3 v_normal;\n';
        }
        shaderText += out_ + ' vec4 position;\n';
        shaderText += 'uniform mat4 modelViewProjectionMatrix;\n';
        return shaderText;
      }
    }, {
      key: 'VSTransform_VertexLocalShaderSource',
      value: function VSTransform_VertexLocalShaderSource(existCamera_f, f) {
        var shaderText = '';
        if (existCamera_f) {
          shaderText += '  gl_Position = modelViewProjectionMatrix * vec4(aVertex_position, 1.0);\n';
          shaderText += '  mat4 pvwMatrix = modelViewProjectionMatrix;\n';
        } else {
          shaderText += '  gl_Position = vec4(aVertex_position, 1.0);\n';
        }
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += '  v_normal = aVertex_normal;\n';
        }
        shaderText += '  position = vec4(aVertex_position, 1.0);\n';

        return shaderText;
      }
    }, {
      key: 'FSDefine_VertexLocalShaderSource',
      value: function FSDefine_VertexLocalShaderSource(in_, f, lights, material, extraData) {
        var shaderText = '';
        if (lights.length > 0) {
          shaderText += 'uniform vec4 lightPosition[' + lights.length + '];\n';
          shaderText += 'uniform vec4 lightDiffuse[' + lights.length + '];\n';
        }
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += in_ + ' vec3 v_normal;\n';
        }
        shaderText += in_ + ' vec4 position;\n';

        return shaderText;
      }
    }, {
      key: 'prepare_VertexLocalShaderSource',
      value: function prepare_VertexLocalShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];

        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.POSITION || attribName === GLBoost.NORMAL) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        if (existCamera_f) {
          material.uniform_modelViewProjectionMatrix = gl.getUniformLocation(shaderProgram, 'modelViewProjectionMatrix');
          material._semanticsDic['MODELVIEWPROJECTION'] = 'modelViewProjectionMatrix';
        }

        for (var i = 0; i < lights.length; i++) {
          material['uniform_lightPosition_' + i] = gl.getUniformLocation(shaderProgram, 'lightPosition[' + i + ']');
          material['uniform_lightDiffuse_' + i] = gl.getUniformLocation(shaderProgram, 'lightDiffuse[' + i + ']');
        }

        return vertexAttribsAsResult;
      }
    }]);
    return VertexLocalShaderSource;
  }();

  GLBoost['VertexLocalShaderSource'] = VertexLocalShaderSource;

  var Matrix33 = function () {
    function Matrix33(m) {
      var isColumnMajor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      babelHelpers.classCallCheck(this, Matrix33);

      this.m = new Float32Array(9);
      if (arguments.length >= 9) {
        if (isColumnMajor === true) {
          var _m = arguments;
          this.setComponents(_m[0], _m[3], _m[6], _m[1], _m[4], _m[7], _m[2], _m[5], _m[8]);
        } else {
          this.setComponents.apply(this, arguments); // arguments[0-8] must be row major values if isColumnMajor is false
        }
      } else if (Array.isArray(m)) {
        if (isColumnMajor === true) {
          this.setComponents(m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]);
        } else {
          this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
        }
      } else if (m instanceof Float32Array) {
        if (isColumnMajor === true) {
          this.setComponents(m[0], m[3], m[6], m[1], m[4], m[7], m[2], m[5], m[8]);
        } else {
          this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
        }
      } else {
        this.identity();
      }
    }

    babelHelpers.createClass(Matrix33, [{
      key: 'setComponents',
      value: function setComponents(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        this.m00 = m00;this.m01 = m01;this.m02 = m02;
        this.m10 = m10;this.m11 = m11;this.m12 = m12;
        this.m20 = m20;this.m21 = m21;this.m22 = m22;

        return this;
      }

      /**
       * 単位行列にする
       */

    }, {
      key: 'identity',
      value: function identity() {
        this.setComponents(1, 0, 0, 0, 1, 0, 0, 0, 1);
        return this;
      }

      /**
       * 単位行列にする（static版）
       */

    }, {
      key: 'clone',
      value: function clone() {
        return new Matrix33(this.m[0], this.m[3], this.m[6], this.m[1], this.m[4], this.m[7], this.m[2], this.m[5], this.m[8]);
      }

      /**
       * Create X oriented Rotation Matrix
       */

    }, {
      key: 'rotateX',
      value: function rotateX(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(1, 0, 0, 0, cos, -sin, 0, sin, cos);
      }
      /**
       * Create X oriented Rotation Matrix
       */

    }, {
      key: 'rotateY',


      /**
       * Create Y oriented Rotation Matrix
       */
      value: function rotateY(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        this.setComponents(cos, 0, sin, 0, 1, 0, -sin, 0, cos);
        return this;
      }
      /**
       * Create Y oriented Rotation Matrix
       */

    }, {
      key: 'rotateZ',


      /**
       * Create Z oriented Rotation Matrix
       */
      value: function rotateZ(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(cos, -sin, 0, sin, cos, 0, 0, 0, 1);
      }
      /**
       * Create Z oriented Rotation Matrix
       */

    }, {
      key: 'zero',


      /**
       * ゼロ行列
       */
      value: function zero() {
        this.setComponents(0, 0, 0, 0, 0, 0, 0, 0, 0);
        return this;
      }
    }, {
      key: 'flatten',
      value: function flatten() {
        return this.m;
      }
    }, {
      key: 'flattenAsArray',
      value: function flattenAsArray() {
        return [this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5], this.m[6], this.m[7], this.m[8]];
      }
    }, {
      key: '_swap',
      value: function _swap(l, r) {
        this.m[r] = [this.m[l], this.m[l] = this.m[r]][0]; // Swap
      }

      /**
       * 転置
       */

    }, {
      key: 'transpose',
      value: function transpose() {
        this._swap(1, 3);
        this._swap(2, 6);
        this._swap(5, 8);

        return this;
      }

      /**
       * 転置（static版）
       */

    }, {
      key: 'multiplyVector',
      value: function multiplyVector(vec) {
        var x = this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z;
        var y = this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z;
        var z = this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z;

        return new Vector3(x, y, z);
      }

      /**
       * 行列同士の乗算
       */

    }, {
      key: 'multiply',
      value: function multiply(mat) {
        var m00 = this.m00 * mat.m00 + this.m01 * mat.m10 + this.m02 * mat.m20;
        var m01 = this.m00 * mat.m01 + this.m01 * mat.m11 + this.m02 * mat.m21;
        var m02 = this.m00 * mat.m02 + this.m01 * mat.m12 + this.m02 * mat.m22;

        var m10 = this.m10 * mat.m00 + this.m11 * mat.m10 + this.m12 * mat.m20;
        var m11 = this.m10 * mat.m01 + this.m11 * mat.m11 + this.m12 * mat.m21;
        var m12 = this.m10 * mat.m02 + this.m11 * mat.m12 + this.m12 * mat.m22;

        var m20 = this.m20 * mat.m00 + this.m21 * mat.m10 + this.m22 * mat.m20;
        var m21 = this.m20 * mat.m01 + this.m21 * mat.m11 + this.m22 * mat.m21;
        var m22 = this.m20 * mat.m02 + this.m21 * mat.m12 + this.m22 * mat.m22;

        return this.setComponents(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      }

      /**
       * 行列同士の乗算（static版）
       */

    }, {
      key: 'determinant',
      value: function determinant() {
        return this.m00 * this.m11 * this.m22 + this.m10 * this.m21 * this.m02 + this.m20 * this.m01 * this.m12 - this.m00 * this.m21 * this.m12 - this.m20 * this.m11 * this.m02 - this.m10 * this.m01 * this.m22;
      }
    }, {
      key: 'invert',
      value: function invert() {
        var det = this.determinant();
        var m00 = (this.m11 * this.m22 - this.m12 * this.m21) / det;
        var m01 = (this.m02 * this.m21 - this.m01 * this.m22) / det;
        var m02 = (this.m01 * this.m12 - this.m02 * this.m11) / det;
        var m10 = (this.m12 * this.m20 - this.m10 * this.m22) / det;
        var m11 = (this.m00 * this.m22 - this.m02 * this.m20) / det;
        var m12 = (this.m02 * this.m10 - this.m00 * this.m12) / det;
        var m20 = (this.m10 * this.m21 - this.m11 * this.m20) / det;
        var m21 = (this.m01 * this.m20 - this.m00 * this.m21) / det;
        var m22 = (this.m00 * this.m11 - this.m01 * this.m10) / det;

        return this.setComponents(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      }
    }, {
      key: 'toString',
      value: function toString() {
        return this.m00 + ' ' + this.m01 + ' ' + this.m02 + '\n' + this.m10 + ' ' + this.m11 + ' ' + this.m12 + '\n' + this.m20 + ' ' + this.m21 + ' ' + this.m22 + '\n';
      }
    }, {
      key: 'nearZeroToZero',
      value: function nearZeroToZero(value) {
        if (Math.abs(value) < 0.00001) {
          value = 0;
        } else if (0.99999 < value && value < 1.00001) {
          value = 1;
        } else if (-1.00001 < value && value < -0.99999) {
          value = -1;
        }
        return value;
      }
    }, {
      key: 'toStringApproximately',
      value: function toStringApproximately() {
        return this.nearZeroToZero(this.m00) + ' ' + this.nearZeroToZero(this.m01) + ' ' + this.nearZeroToZero(this.m02) + '\n' + this.nearZeroToZero(this.m10) + ' ' + this.nearZeroToZero(this.m11) + ' ' + this.nearZeroToZero(this.m12) + ' \n' + this.nearZeroToZero(this.m20) + ' ' + this.nearZeroToZero(this.m21) + ' ' + this.nearZeroToZero(this.m22) + '\n';
      }
    }, {
      key: 'm00',
      set: function set(val) {
        this.m[0] = val;
      },
      get: function get() {
        return this.m[0];
      }
    }, {
      key: 'm10',
      set: function set(val) {
        this.m[1] = val;
      },
      get: function get() {
        return this.m[1];
      }
    }, {
      key: 'm20',
      set: function set(val) {
        this.m[2] = val;
      },
      get: function get() {
        return this.m[2];
      }
    }, {
      key: 'm01',
      set: function set(val) {
        this.m[3] = val;
      },
      get: function get() {
        return this.m[3];
      }
    }, {
      key: 'm11',
      set: function set(val) {
        this.m[4] = val;
      },
      get: function get() {
        return this.m[4];
      }
    }, {
      key: 'm21',
      set: function set(val) {
        this.m[5] = val;
      },
      get: function get() {
        return this.m[5];
      }
    }, {
      key: 'm02',
      set: function set(val) {
        this.m[6] = val;
      },
      get: function get() {
        return this.m[6];
      }
    }, {
      key: 'm12',
      set: function set(val) {
        this.m[7] = val;
      },
      get: function get() {
        return this.m[7];
      }
    }, {
      key: 'm22',
      set: function set(val) {
        this.m[8] = val;
      },
      get: function get() {
        return this.m[8];
      }
    }], [{
      key: 'identity',
      value: function identity() {
        return new Matrix33(1, 0, 0, 0, 1, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateX',
      value: function rotateX(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix33(1, 0, 0, 0, cos, -sin, 0, sin, cos);
      }
    }, {
      key: 'rotateY',
      value: function rotateY(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix33(cos, 0, sin, 0, 1, 0, -sin, 0, cos);
      }
    }, {
      key: 'rotateZ',
      value: function rotateZ(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix33(cos, -sin, 0, sin, cos, 0, 0, 0, 1);
      }
    }, {
      key: 'zero',
      value: function zero() {
        return new Matrix33(0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: 'transpose',
      value: function transpose(mat) {

        var mat_t = new Matrix33(mat.m00, mat.m10, mat.m20, mat.m01, mat.m11, mat.m21, mat.m02, mat.m12, mat.m22);

        return mat_t;
      }
    }, {
      key: 'multiply',
      value: function multiply(l_m, r_m) {
        var m00 = l_m.m00 * r_m.m00 + l_m.m01 * r_m.m10 + l_m.m02 * r_m.m20;
        var m10 = l_m.m10 * r_m.m00 + l_m.m11 * r_m.m10 + l_m.m12 * r_m.m20;
        var m20 = l_m.m20 * r_m.m00 + l_m.m21 * r_m.m10 + l_m.m22 * r_m.m20;

        var m01 = l_m.m00 * r_m.m01 + l_m.m01 * r_m.m11 + l_m.m02 * r_m.m21;
        var m11 = l_m.m10 * r_m.m01 + l_m.m11 * r_m.m11 + l_m.m12 * r_m.m21;
        var m21 = l_m.m20 * r_m.m01 + l_m.m21 * r_m.m11 + l_m.m22 * r_m.m21;

        var m02 = l_m.m00 * r_m.m02 + l_m.m01 * r_m.m12 + l_m.m02 * r_m.m22;
        var m12 = l_m.m10 * r_m.m02 + l_m.m11 * r_m.m12 + l_m.m12 * r_m.m22;
        var m22 = l_m.m20 * r_m.m02 + l_m.m21 * r_m.m12 + l_m.m22 * r_m.m22;

        return new Matrix33(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      }
    }, {
      key: 'determinant',
      value: function determinant(mat) {
        return mat.m00 * mat.m11 * mat.m22 + mat.m10 * mat.m21 * mat.m02 + mat.m20 * mat.m01 * mat.m12 - mat.m00 * mat.m21 * mat.m12 - mat.m20 * mat.m11 * mat.m02 - mat.m10 * mat.m01 * mat.m22;
      }
    }, {
      key: 'invert',
      value: function invert(mat) {
        var det = mat.determinant();
        var m00 = (mat.m11 * mat.m22 - mat.m12 * mat.m21) / det;
        var m01 = (mat.m02 * mat.m21 - mat.m01 * mat.m22) / det;
        var m02 = (mat.m01 * mat.m12 - mat.m02 * mat.m11) / det;
        var m10 = (mat.m12 * mat.m20 - mat.m10 * mat.m22) / det;
        var m11 = (mat.m00 * mat.m22 - mat.m02 * mat.m20) / det;
        var m12 = (mat.m02 * mat.m10 - mat.m00 * mat.m12) / det;
        var m20 = (mat.m10 * mat.m21 - mat.m11 * mat.m20) / det;
        var m21 = (mat.m01 * mat.m20 - mat.m00 * mat.m21) / det;
        var m22 = (mat.m00 * mat.m11 - mat.m01 * mat.m10) / det;

        return new Matrix33(m00, m01, m02, m10, m11, m12, m20, m21, m22);
      }
    }]);
    return Matrix33;
  }();

  GLBoost$1['Matrix33'] = Matrix33;

  var Matrix44$1 = function () {
    function Matrix44(m) {
      var isColumnMajor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      babelHelpers.classCallCheck(this, Matrix44);

      this.m = new Float32Array(16);
      if (arguments.length >= 16) {
        if (isColumnMajor === true) {
          var _m = arguments;
          this.setComponents(_m[0], _m[4], _m[8], _m[12], _m[1], _m[5], _m[9], _m[13], _m[2], _m[6], _m[10], _m[14], _m[3], _m[7], _m[11], _m[15]);
        } else {
          this.setComponents.apply(this, arguments); // arguments[0-15] must be row major values if isColumnMajor is false
        }
      } else if (Array.isArray(m)) {
        if (isColumnMajor === true) {
          this.setComponents(m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]);
        } else {
          this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
        }
      } else if (m instanceof Float32Array) {
        if (isColumnMajor === true) {
          this.setComponents(m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]);
        } else {
          this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
        }
      } else {
        this.identity();
      }
    }

    babelHelpers.createClass(Matrix44, [{
      key: 'setComponents',
      value: function setComponents(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
        this.m00 = m00;this.m01 = m01;this.m02 = m02;this.m03 = m03;
        this.m10 = m10;this.m11 = m11;this.m12 = m12;this.m13 = m13;
        this.m20 = m20;this.m21 = m21;this.m22 = m22;this.m23 = m23;
        this.m30 = m30;this.m31 = m31;this.m32 = m32;this.m33 = m33;

        return this;
      }
    }, {
      key: 'clone',
      value: function clone() {
        return new Matrix44(this.m[0], this.m[4], this.m[8], this.m[12], this.m[1], this.m[5], this.m[9], this.m[13], this.m[2], this.m[6], this.m[10], this.m[14], this.m[3], this.m[7], this.m[11], this.m[15]);
      }

      /**
       * 単位行列にする
       */

    }, {
      key: 'identity',
      value: function identity() {
        this.setComponents(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return this;
      }

      /**
       * 単位行列にする（static版）
       */

    }, {
      key: 'translate',
      value: function translate(vec) {
        return this.setComponents(1, 0, 0, vec.x, 0, 1, 0, vec.y, 0, 0, 1, vec.z, 0, 0, 0, 1);
      }
    }, {
      key: 'scale',
      value: function scale(vec) {
        return this.setComponents(vec.x, 0, 0, 0, 0, vec.y, 0, 0, 0, 0, vec.z, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateX',


      /**
       * Create X oriented Rotation Matrix
       */
      value: function rotateX(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1);
      }
      /**
       * Create X oriented Rotation Matrix
      */

    }, {
      key: 'rotateY',


      /**
       * Create Y oriented Rotation Matrix
       */
      value: function rotateY(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(cos, 0, sin, 0, 0, 1, 0, 0, -sin, 0, cos, 0, 0, 0, 0, 1);
      }
      /**
       * Create Y oriented Rotation Matrix
       */

    }, {
      key: 'rotateZ',


      /**
       * Create Z oriented Rotation Matrix
       */
      value: function rotateZ(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return this.setComponents(cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      /**
       * Create Z oriented Rotation Matrix
       */

    }, {
      key: 'zero',


      /**
       * ゼロ行列
       */
      value: function zero() {
        this.setComponents(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return this;
      }
    }, {
      key: 'flatten',
      value: function flatten() {
        return this.m;
      }
    }, {
      key: 'flattenAsArray',
      value: function flattenAsArray() {
        return [this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5], this.m[6], this.m[7], this.m[8], this.m[9], this.m[10], this.m[11], this.m[12], this.m[13], this.m[14], this.m[15]];
      }
    }, {
      key: '_swap',
      value: function _swap(l, r) {
        this.m[r] = [this.m[l], this.m[l] = this.m[r]][0]; // Swap
      }

      /**
       * 転置
       */

    }, {
      key: 'transpose',
      value: function transpose() {
        this._swap(1, 4);
        this._swap(2, 8);
        this._swap(3, 12);
        this._swap(6, 9);
        this._swap(7, 13);
        this._swap(11, 14);

        return this;
      }

      /**
       * 転置（static版）
       */

    }, {
      key: 'multiplyVector',
      value: function multiplyVector(vec) {
        var x = this.m00 * vec.x + this.m01 * vec.y + this.m02 * vec.z + this.m03 * vec.w;
        var y = this.m10 * vec.x + this.m11 * vec.y + this.m12 * vec.z + this.m13 * vec.w;
        var z = this.m20 * vec.x + this.m21 * vec.y + this.m22 * vec.z + this.m23 * vec.w;
        var w = this.m30 * vec.x + this.m31 * vec.y + this.m32 * vec.z + this.m33 * vec.w;

        return new Vector4(x, y, z, w);
      }

      /**
       * 行列同士の乗算
       */

    }, {
      key: 'multiply',
      value: function multiply(mat) {
        var m00 = this.m00 * mat.m00 + this.m01 * mat.m10 + this.m02 * mat.m20 + this.m03 * mat.m30;
        var m01 = this.m00 * mat.m01 + this.m01 * mat.m11 + this.m02 * mat.m21 + this.m03 * mat.m31;
        var m02 = this.m00 * mat.m02 + this.m01 * mat.m12 + this.m02 * mat.m22 + this.m03 * mat.m32;
        var m03 = this.m00 * mat.m03 + this.m01 * mat.m13 + this.m02 * mat.m23 + this.m03 * mat.m33;

        var m10 = this.m10 * mat.m00 + this.m11 * mat.m10 + this.m12 * mat.m20 + this.m13 * mat.m30;
        var m11 = this.m10 * mat.m01 + this.m11 * mat.m11 + this.m12 * mat.m21 + this.m13 * mat.m31;
        var m12 = this.m10 * mat.m02 + this.m11 * mat.m12 + this.m12 * mat.m22 + this.m13 * mat.m32;
        var m13 = this.m10 * mat.m03 + this.m11 * mat.m13 + this.m12 * mat.m23 + this.m13 * mat.m33;

        var m20 = this.m20 * mat.m00 + this.m21 * mat.m10 + this.m22 * mat.m20 + this.m23 * mat.m30;
        var m21 = this.m20 * mat.m01 + this.m21 * mat.m11 + this.m22 * mat.m21 + this.m23 * mat.m31;
        var m22 = this.m20 * mat.m02 + this.m21 * mat.m12 + this.m22 * mat.m22 + this.m23 * mat.m32;
        var m23 = this.m20 * mat.m03 + this.m21 * mat.m13 + this.m22 * mat.m23 + this.m23 * mat.m33;

        var m30 = this.m30 * mat.m00 + this.m31 * mat.m10 + this.m32 * mat.m20 + this.m33 * mat.m30;
        var m31 = this.m30 * mat.m01 + this.m31 * mat.m11 + this.m32 * mat.m21 + this.m33 * mat.m31;
        var m32 = this.m30 * mat.m02 + this.m31 * mat.m12 + this.m32 * mat.m22 + this.m33 * mat.m32;
        var m33 = this.m30 * mat.m03 + this.m31 * mat.m13 + this.m32 * mat.m23 + this.m33 * mat.m33;

        return this.setComponents(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }

      /**
       * 行列同士の乗算（static版）
       */

    }, {
      key: 'toMatrix33',
      value: function toMatrix33() {
        return new Matrix33(this.m00, this.m01, this.m02, this.m10, this.m11, this.m12, this.m20, this.m21, this.m22);
      }
    }, {
      key: 'determinant',
      value: function determinant() {
        return this.m00 * this.m11 * this.m22 * this.m33 + this.m00 * this.m12 * this.m23 * this.m31 + this.m00 * this.m13 * this.m21 * this.m32 + this.m01 * this.m10 * this.m23 * this.m32 + this.m01 * this.m12 * this.m20 * this.m33 + this.m01 * this.m13 * this.m22 * this.m30 + this.m02 * this.m10 * this.m21 * this.m33 + this.m02 * this.m11 * this.m23 * this.m30 + this.m02 * this.m13 * this.m20 * this.m31 + this.m03 * this.m10 * this.m22 * this.m31 + this.m03 * this.m11 * this.m20 * this.m32 + this.m03 * this.m12 * this.m21 * this.m30 - this.m00 * this.m11 * this.m23 * this.m32 - this.m00 * this.m12 * this.m21 * this.m33 - this.m00 * this.m13 * this.m22 * this.m31 - this.m01 * this.m10 * this.m22 * this.m33 - this.m01 * this.m12 * this.m23 * this.m30 - this.m01 * this.m13 * this.m20 * this.m32 - this.m02 * this.m10 * this.m23 * this.m31 - this.m02 * this.m11 * this.m20 * this.m33 - this.m02 * this.m13 * this.m21 * this.m30 - this.m03 * this.m10 * this.m21 * this.m32 - this.m03 * this.m11 * this.m22 * this.m30 - this.m03 * this.m12 * this.m20 * this.m31;
      }
    }, {
      key: 'invert',
      value: function invert() {
        var det = this.determinant();
        var m00 = (this.m11 * this.m22 * this.m33 + this.m12 * this.m23 * this.m31 + this.m13 * this.m21 * this.m32 - this.m11 * this.m23 * this.m32 - this.m12 * this.m21 * this.m33 - this.m13 * this.m22 * this.m31) / det;
        var m01 = (this.m01 * this.m23 * this.m32 + this.m02 * this.m21 * this.m33 + this.m03 * this.m22 * this.m31 - this.m01 * this.m22 * this.m33 - this.m02 * this.m23 * this.m31 - this.m03 * this.m21 * this.m32) / det;
        var m02 = (this.m01 * this.m12 * this.m33 + this.m02 * this.m13 * this.m31 + this.m03 * this.m11 * this.m32 - this.m01 * this.m13 * this.m32 - this.m02 * this.m11 * this.m33 - this.m03 * this.m12 * this.m31) / det;
        var m03 = (this.m01 * this.m13 * this.m22 + this.m02 * this.m11 * this.m23 + this.m03 * this.m12 * this.m21 - this.m01 * this.m12 * this.m23 - this.m02 * this.m13 * this.m21 - this.m03 * this.m11 * this.m22) / det;
        var m10 = (this.m10 * this.m23 * this.m32 + this.m12 * this.m20 * this.m33 + this.m13 * this.m22 * this.m30 - this.m10 * this.m22 * this.m33 - this.m12 * this.m23 * this.m30 - this.m13 * this.m20 * this.m32) / det;
        var m11 = (this.m00 * this.m22 * this.m33 + this.m02 * this.m23 * this.m30 + this.m03 * this.m20 * this.m32 - this.m00 * this.m23 * this.m32 - this.m02 * this.m20 * this.m33 - this.m03 * this.m22 * this.m30) / det;
        var m12 = (this.m00 * this.m13 * this.m32 + this.m02 * this.m10 * this.m33 + this.m03 * this.m12 * this.m30 - this.m00 * this.m12 * this.m33 - this.m02 * this.m13 * this.m30 - this.m03 * this.m10 * this.m32) / det;
        var m13 = (this.m00 * this.m12 * this.m23 + this.m02 * this.m13 * this.m20 + this.m03 * this.m10 * this.m22 - this.m00 * this.m13 * this.m22 - this.m02 * this.m10 * this.m23 - this.m03 * this.m12 * this.m20) / det;
        var m20 = (this.m10 * this.m21 * this.m33 + this.m11 * this.m23 * this.m30 + this.m13 * this.m20 * this.m31 - this.m10 * this.m23 * this.m31 - this.m11 * this.m20 * this.m33 - this.m13 * this.m21 * this.m30) / det;
        var m21 = (this.m00 * this.m23 * this.m31 + this.m01 * this.m20 * this.m33 + this.m03 * this.m21 * this.m30 - this.m00 * this.m21 * this.m33 - this.m01 * this.m23 * this.m30 - this.m03 * this.m20 * this.m31) / det;
        var m22 = (this.m00 * this.m11 * this.m33 + this.m01 * this.m13 * this.m30 + this.m03 * this.m10 * this.m31 - this.m00 * this.m13 * this.m31 - this.m01 * this.m10 * this.m33 - this.m03 * this.m11 * this.m30) / det;
        var m23 = (this.m00 * this.m13 * this.m21 + this.m01 * this.m10 * this.m23 + this.m03 * this.m11 * this.m20 - this.m00 * this.m11 * this.m23 - this.m01 * this.m13 * this.m20 - this.m03 * this.m10 * this.m21) / det;
        var m30 = (this.m10 * this.m22 * this.m31 + this.m11 * this.m20 * this.m32 + this.m12 * this.m21 * this.m30 - this.m10 * this.m21 * this.m32 - this.m11 * this.m22 * this.m30 - this.m12 * this.m20 * this.m31) / det;
        var m31 = (this.m00 * this.m21 * this.m32 + this.m01 * this.m22 * this.m30 + this.m02 * this.m20 * this.m31 - this.m00 * this.m22 * this.m31 - this.m01 * this.m20 * this.m32 - this.m02 * this.m21 * this.m30) / det;
        var m32 = (this.m00 * this.m12 * this.m31 + this.m01 * this.m10 * this.m32 + this.m02 * this.m11 * this.m30 - this.m00 * this.m11 * this.m32 - this.m01 * this.m12 * this.m30 - this.m02 * this.m10 * this.m31) / det;
        var m33 = (this.m00 * this.m11 * this.m22 + this.m01 * this.m12 * this.m20 + this.m02 * this.m10 * this.m21 - this.m00 * this.m12 * this.m21 - this.m01 * this.m10 * this.m22 - this.m02 * this.m11 * this.m20) / det;

        return this.setComponents(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }
    }, {
      key: 'toString',
      value: function toString() {
        return this.m00 + ' ' + this.m01 + ' ' + this.m02 + ' ' + this.m03 + ' \n' + this.m10 + ' ' + this.m11 + ' ' + this.m12 + ' ' + this.m13 + ' \n' + this.m20 + ' ' + this.m21 + ' ' + this.m22 + ' ' + this.m23 + ' \n' + this.m30 + ' ' + this.m31 + ' ' + this.m32 + ' ' + this.m33 + ' \n';
      }
    }, {
      key: 'nearZeroToZero',
      value: function nearZeroToZero(value) {
        if (Math.abs(value) < 0.00001) {
          value = 0;
        } else if (0.99999 < value && value < 1.00001) {
          value = 1;
        } else if (-1.00001 < value && value < -0.99999) {
          value = -1;
        }
        return value;
      }
    }, {
      key: 'toStringApproximately',
      value: function toStringApproximately() {
        return this.nearZeroToZero(this.m00) + ' ' + this.nearZeroToZero(this.m01) + ' ' + this.nearZeroToZero(this.m02) + ' ' + this.nearZeroToZero(this.m03) + ' \n' + this.nearZeroToZero(this.m10) + ' ' + this.nearZeroToZero(this.m11) + ' ' + this.nearZeroToZero(this.m12) + ' ' + this.nearZeroToZero(this.m13) + ' \n' + this.nearZeroToZero(this.m20) + ' ' + this.nearZeroToZero(this.m21) + ' ' + this.nearZeroToZero(this.m22) + ' ' + this.nearZeroToZero(this.m23) + ' \n' + this.nearZeroToZero(this.m30) + ' ' + this.nearZeroToZero(this.m31) + ' ' + this.nearZeroToZero(this.m32) + ' ' + this.nearZeroToZero(this.m33) + ' \n';
      }
    }, {
      key: 'm00',
      set: function set(val) {
        this.m[0] = val;
      },
      get: function get() {
        return this.m[0];
      }
    }, {
      key: 'm10',
      set: function set(val) {
        this.m[1] = val;
      },
      get: function get() {
        return this.m[1];
      }
    }, {
      key: 'm20',
      set: function set(val) {
        this.m[2] = val;
      },
      get: function get() {
        return this.m[2];
      }
    }, {
      key: 'm30',
      set: function set(val) {
        this.m[3] = val;
      },
      get: function get() {
        return this.m[3];
      }
    }, {
      key: 'm01',
      set: function set(val) {
        this.m[4] = val;
      },
      get: function get() {
        return this.m[4];
      }
    }, {
      key: 'm11',
      set: function set(val) {
        this.m[5] = val;
      },
      get: function get() {
        return this.m[5];
      }
    }, {
      key: 'm21',
      set: function set(val) {
        this.m[6] = val;
      },
      get: function get() {
        return this.m[6];
      }
    }, {
      key: 'm31',
      set: function set(val) {
        this.m[7] = val;
      },
      get: function get() {
        return this.m[7];
      }
    }, {
      key: 'm02',
      set: function set(val) {
        this.m[8] = val;
      },
      get: function get() {
        return this.m[8];
      }
    }, {
      key: 'm12',
      set: function set(val) {
        this.m[9] = val;
      },
      get: function get() {
        return this.m[9];
      }
    }, {
      key: 'm22',
      set: function set(val) {
        this.m[10] = val;
      },
      get: function get() {
        return this.m[10];
      }
    }, {
      key: 'm32',
      set: function set(val) {
        this.m[11] = val;
      },
      get: function get() {
        return this.m[11];
      }
    }, {
      key: 'm03',
      set: function set(val) {
        this.m[12] = val;
      },
      get: function get() {
        return this.m[12];
      }
    }, {
      key: 'm13',
      set: function set(val) {
        this.m[13] = val;
      },
      get: function get() {
        return this.m[13];
      }
    }, {
      key: 'm23',
      set: function set(val) {
        this.m[14] = val;
      },
      get: function get() {
        return this.m[14];
      }
    }, {
      key: 'm33',
      set: function set(val) {
        this.m[15] = val;
      },
      get: function get() {
        return this.m[15];
      }
    }], [{
      key: 'identity',
      value: function identity() {
        return new Matrix44(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'translate',
      value: function translate(vec) {
        return new Matrix44(1, 0, 0, vec.x, 0, 1, 0, vec.y, 0, 0, 1, vec.z, 0, 0, 0, 1);
      }
    }, {
      key: 'scale',
      value: function scale(vec) {
        return new Matrix44(vec.x, 0, 0, 0, 0, vec.y, 0, 0, 0, 0, vec.z, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateX',
      value: function rotateX(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix44(1, 0, 0, 0, 0, cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateY',
      value: function rotateY(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix44(cos, 0, sin, 0, 0, 1, 0, 0, -sin, 0, cos, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'rotateZ',
      value: function rotateZ(angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }

        var cos = Math.cos(radian);
        var sin = Math.sin(radian);
        return new Matrix44(cos, -sin, 0, 0, sin, cos, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
    }, {
      key: 'zero',
      value: function zero() {
        return new Matrix44(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      }
    }, {
      key: 'transpose',
      value: function transpose(mat) {

        var mat_t = new Matrix44(mat.m00, mat.m10, mat.m20, mat.m30, mat.m01, mat.m11, mat.m21, mat.m31, mat.m02, mat.m12, mat.m22, mat.m32, mat.m03, mat.m13, mat.m23, mat.m33);

        return mat_t;
      }
    }, {
      key: 'multiply',
      value: function multiply(l_m, r_m) {
        var m00 = l_m.m00 * r_m.m00 + l_m.m01 * r_m.m10 + l_m.m02 * r_m.m20 + l_m.m03 * r_m.m30;
        var m10 = l_m.m10 * r_m.m00 + l_m.m11 * r_m.m10 + l_m.m12 * r_m.m20 + l_m.m13 * r_m.m30;
        var m20 = l_m.m20 * r_m.m00 + l_m.m21 * r_m.m10 + l_m.m22 * r_m.m20 + l_m.m23 * r_m.m30;
        var m30 = l_m.m30 * r_m.m00 + l_m.m31 * r_m.m10 + l_m.m32 * r_m.m20 + l_m.m33 * r_m.m30;

        var m01 = l_m.m00 * r_m.m01 + l_m.m01 * r_m.m11 + l_m.m02 * r_m.m21 + l_m.m03 * r_m.m31;
        var m11 = l_m.m10 * r_m.m01 + l_m.m11 * r_m.m11 + l_m.m12 * r_m.m21 + l_m.m13 * r_m.m31;
        var m21 = l_m.m20 * r_m.m01 + l_m.m21 * r_m.m11 + l_m.m22 * r_m.m21 + l_m.m23 * r_m.m31;
        var m31 = l_m.m30 * r_m.m01 + l_m.m31 * r_m.m11 + l_m.m32 * r_m.m21 + l_m.m33 * r_m.m31;

        var m02 = l_m.m00 * r_m.m02 + l_m.m01 * r_m.m12 + l_m.m02 * r_m.m22 + l_m.m03 * r_m.m32;
        var m12 = l_m.m10 * r_m.m02 + l_m.m11 * r_m.m12 + l_m.m12 * r_m.m22 + l_m.m13 * r_m.m32;
        var m22 = l_m.m20 * r_m.m02 + l_m.m21 * r_m.m12 + l_m.m22 * r_m.m22 + l_m.m23 * r_m.m32;
        var m32 = l_m.m30 * r_m.m02 + l_m.m31 * r_m.m12 + l_m.m32 * r_m.m22 + l_m.m33 * r_m.m32;

        var m03 = l_m.m00 * r_m.m03 + l_m.m01 * r_m.m13 + l_m.m02 * r_m.m23 + l_m.m03 * r_m.m33;
        var m13 = l_m.m10 * r_m.m03 + l_m.m11 * r_m.m13 + l_m.m12 * r_m.m23 + l_m.m13 * r_m.m33;
        var m23 = l_m.m20 * r_m.m03 + l_m.m21 * r_m.m13 + l_m.m22 * r_m.m23 + l_m.m23 * r_m.m33;
        var m33 = l_m.m30 * r_m.m03 + l_m.m31 * r_m.m13 + l_m.m32 * r_m.m23 + l_m.m33 * r_m.m33;

        return new Matrix44(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }
    }, {
      key: 'toMatrix33',
      value: function toMatrix33(mat) {
        return new Matrix33(mat.m00, mat.m01, mat.m02, mat.m10, mat.m11, mat.m12, mat.m20, mat.m21, mat.m22);
      }
    }, {
      key: 'determinant',
      value: function determinant(mat) {
        return mat.m00 * mat.m11 * mat.m22 * mat.m33 + mat.m00 * mat.m12 * mat.m23 * mat.m31 + mat.m00 * mat.m13 * mat.m21 * mat.m32 + mat.m01 * mat.m10 * mat.m23 * mat.m32 + mat.m01 * mat.m12 * mat.m20 * mat.m33 + mat.m01 * mat.m13 * mat.m22 * mat.m30 + mat.m02 * mat.m10 * mat.m21 * mat.m33 + mat.m02 * mat.m11 * mat.m23 * mat.m30 + mat.m02 * mat.m13 * mat.m20 * mat.m31 + mat.m03 * mat.m10 * mat.m22 * mat.m31 + mat.m03 * mat.m11 * mat.m20 * mat.m32 + mat.m03 * mat.m12 * mat.m21 * mat.m30 - mat.m00 * mat.m11 * mat.m23 * mat.m32 - mat.m00 * mat.m12 * mat.m21 * mat.m33 - mat.m00 * mat.m13 * mat.m22 * mat.m31 - mat.m01 * mat.m10 * mat.m22 * mat.m33 - mat.m01 * mat.m12 * mat.m23 * mat.m30 - mat.m01 * mat.m13 * mat.m20 * mat.m32 - mat.m02 * mat.m10 * mat.m23 * mat.m31 - mat.m02 * mat.m11 * mat.m20 * mat.m33 - mat.m02 * mat.m13 * mat.m21 * mat.m30 - mat.m03 * mat.m10 * mat.m21 * mat.m32 - mat.m03 * mat.m11 * mat.m22 * mat.m30 - mat.m03 * mat.m12 * mat.m20 * mat.m31;
      }
    }, {
      key: 'invert',
      value: function invert(mat) {
        var det = mat.determinant();
        var m00 = (mat.m11 * mat.m22 * mat.m33 + mat.m12 * mat.m23 * mat.m31 + mat.m13 * mat.m21 * mat.m32 - mat.m11 * mat.m23 * mat.m32 - mat.m12 * mat.m21 * mat.m33 - mat.m13 * mat.m22 * mat.m31) / det;
        var m01 = (mat.m01 * mat.m23 * mat.m32 + mat.m02 * mat.m21 * mat.m33 + mat.m03 * mat.m22 * mat.m31 - mat.m01 * mat.m22 * mat.m33 - mat.m02 * mat.m23 * mat.m31 - mat.m03 * mat.m21 * mat.m32) / det;
        var m02 = (mat.m01 * mat.m12 * mat.m33 + mat.m02 * mat.m13 * mat.m31 + mat.m03 * mat.m11 * mat.m32 - mat.m01 * mat.m13 * mat.m32 - mat.m02 * mat.m11 * mat.m33 - mat.m03 * mat.m12 * mat.m31) / det;
        var m03 = (mat.m01 * mat.m13 * mat.m22 + mat.m02 * mat.m11 * mat.m23 + mat.m03 * mat.m12 * mat.m21 - mat.m01 * mat.m12 * mat.m23 - mat.m02 * mat.m13 * mat.m21 - mat.m03 * mat.m11 * mat.m22) / det;
        var m10 = (mat.m10 * mat.m23 * mat.m32 + mat.m12 * mat.m20 * mat.m33 + mat.m13 * mat.m22 * mat.m30 - mat.m10 * mat.m22 * mat.m33 - mat.m12 * mat.m23 * mat.m30 - mat.m13 * mat.m20 * mat.m32) / det;
        var m11 = (mat.m00 * mat.m22 * mat.m33 + mat.m02 * mat.m23 * mat.m30 + mat.m03 * mat.m20 * mat.m32 - mat.m00 * mat.m23 * mat.m32 - mat.m02 * mat.m20 * mat.m33 - mat.m03 * mat.m22 * mat.m30) / det;
        var m12 = (mat.m00 * mat.m13 * mat.m32 + mat.m02 * mat.m10 * mat.m33 + mat.m03 * mat.m12 * mat.m30 - mat.m00 * mat.m12 * mat.m33 - mat.m02 * mat.m13 * mat.m30 - mat.m03 * mat.m10 * mat.m32) / det;
        var m13 = (mat.m00 * mat.m12 * mat.m23 + mat.m02 * mat.m13 * mat.m20 + mat.m03 * mat.m10 * mat.m22 - mat.m00 * mat.m13 * mat.m22 - mat.m02 * mat.m10 * mat.m23 - mat.m03 * mat.m12 * mat.m20) / det;
        var m20 = (mat.m10 * mat.m21 * mat.m33 + mat.m11 * mat.m23 * mat.m30 + mat.m13 * mat.m20 * mat.m31 - mat.m10 * mat.m23 * mat.m31 - mat.m11 * mat.m20 * mat.m33 - mat.m13 * mat.m21 * mat.m30) / det;
        var m21 = (mat.m00 * mat.m23 * mat.m31 + mat.m01 * mat.m20 * mat.m33 + mat.m03 * mat.m21 * mat.m30 - mat.m00 * mat.m21 * mat.m33 - mat.m01 * mat.m23 * mat.m30 - mat.m03 * mat.m20 * mat.m31) / det;
        var m22 = (mat.m00 * mat.m11 * mat.m33 + mat.m01 * mat.m13 * mat.m30 + mat.m03 * mat.m10 * mat.m31 - mat.m00 * mat.m13 * mat.m31 - mat.m01 * mat.m10 * mat.m33 - mat.m03 * mat.m11 * mat.m30) / det;
        var m23 = (mat.m00 * mat.m13 * mat.m21 + mat.m01 * mat.m10 * mat.m23 + mat.m03 * mat.m11 * mat.m20 - mat.m00 * mat.m11 * mat.m23 - mat.m01 * mat.m13 * mat.m20 - mat.m03 * mat.m10 * mat.m21) / det;
        var m30 = (mat.m10 * mat.m22 * mat.m31 + mat.m11 * mat.m20 * mat.m32 + mat.m12 * mat.m21 * mat.m30 - mat.m10 * mat.m21 * mat.m32 - mat.m11 * mat.m22 * mat.m30 - mat.m12 * mat.m20 * mat.m31) / det;
        var m31 = (mat.m00 * mat.m21 * mat.m32 + mat.m01 * mat.m22 * mat.m30 + mat.m02 * mat.m20 * mat.m31 - mat.m00 * mat.m22 * mat.m31 - mat.m01 * mat.m20 * mat.m32 - mat.m02 * mat.m21 * mat.m30) / det;
        var m32 = (mat.m00 * mat.m12 * mat.m31 + mat.m01 * mat.m10 * mat.m32 + mat.m02 * mat.m11 * mat.m30 - mat.m00 * mat.m11 * mat.m32 - mat.m01 * mat.m12 * mat.m30 - mat.m02 * mat.m10 * mat.m31) / det;
        var m33 = (mat.m00 * mat.m11 * mat.m22 + mat.m01 * mat.m12 * mat.m20 + mat.m02 * mat.m10 * mat.m21 - mat.m00 * mat.m12 * mat.m21 - mat.m01 * mat.m10 * mat.m22 - mat.m02 * mat.m11 * mat.m20) / det;

        return new Matrix44(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
      }
    }]);
    return Matrix44;
  }();

  GLBoost$1["Matrix44"] = Matrix44$1;

  var Quaternion = function () {
    function Quaternion(x, y, z, w) {
      babelHelpers.classCallCheck(this, Quaternion);

      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }

    babelHelpers.createClass(Quaternion, [{
      key: 'isEqual',
      value: function isEqual(vec) {
        if (this.x === vec.x && this.y === vec.y && this.z === vec.z && this.w === vec.w) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'clone',
      value: function clone() {
        return new Quaternion(this.x, this.y, this.z, this.w);
      }
    }, {
      key: 'axisAngle',
      value: function axisAngle(axisVec3, angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }
        var halfAngle = 0.5 * radian;
        var sin = Math.sin(halfAngle);

        var axis = Vector3.normalize(axisVec3);
        this.w = Math.cos(halfAngle);
        this.x = sin * axis.x;
        this.y = sin * axis.y;
        this.z = sin * axis.z;

        return this;
      }
    }, {
      key: 'add',
      value: function add(q) {
        this.x += q.x;
        this.y += q.y;
        this.z += q.z;
        this.w += q.w;

        return this;
      }
    }, {
      key: 'multiply',
      value: function multiply(val) {
        this.x *= val;
        this.y *= val;
        this.z *= val;
        this.w *= val;

        return this;
      }
    }, {
      key: 'rotationMatrix',
      get: function get() {
        var sx = this.x * this.x;
        var sy = this.y * this.y;
        var sz = this.z * this.z;
        var cx = this.y * this.z;
        var cy = this.x * this.z;
        var cz = this.x * this.y;
        var wx = this.w * this.x;
        var wy = this.w * this.y;
        var wz = this.w * this.z;

        return new Matrix44$1(1.0 - 2.0 * (sy + sz), 2.0 * (cz - wz), 2.0 * (cy + wy), 0.0, 2.0 * (cz + wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx - wx), 0.0, 2.0 * (cy - wy), 2.0 * (cx + wx), 1.0 - 2.0 * (sx + sy), 0.0, 0.0, 0.0, 0.0, 1.0);
      }
    }], [{
      key: 'invert',
      value: function invert(quat) {
        return new Quaternion(-quat.x, -quat.y, -quat.z, quat.w).multiply(1.0 / (quat.x * quat.x + quat.y * quat.y + quat.z * quat.z + quat.w * quat.w));
      }
    }, {
      key: 'qlerp',
      value: function qlerp(lhq, rhq, ratio) {

        var q = new Quaternion(0, 0, 0, 1);
        var qr = lhq.w * rhq.w + lhq.x * rhq.x + lhq.y * rhq.y + lhq.z * rhq.z;
        var ss = 1.0 - qr * qr;

        if (ss === 0.0) {
          q.w = lhq.w;
          q.x = lhq.x;
          q.y = lhq.y;
          q.z = lhq.z;

          return q;
        } else {

          if (qr > 1) {
            qr = 0.999;
          } else if (qr < -1) {
            qr = -0.999;
          }

          var ph = Math.acos(qr);
          var s2 = void 0;
          if (qr < 0.0 && ph > Math.PI / 2.0) {
            qr = -lhq.w * rhq.w - lhq.x * rhq.x - lhq.y * rhq.y - lhq.z * rhq.z;
            ph = Math.acos(qr);
            s2 = -1 * Math.sin(ph * ratio) / Math.sin(ph);
          } else {
            s2 = Math.sin(ph * ratio) / Math.sin(ph);
          }
          var s1 = Math.sin(ph * (1.0 - ratio)) / Math.sin(ph);

          q.x = lhq.x * s1 + rhq.x * s2;
          q.y = lhq.y * s1 + rhq.y * s2;
          q.z = lhq.z * s1 + rhq.z * s2;
          q.w = lhq.w * s1 + rhq.w * s2;

          return q;
        }
      }
    }, {
      key: 'axisAngle',
      value: function axisAngle(axisVec3, angle) {
        var radian = 0;
        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          radian = MathUtil.degreeToRadian(angle);
        } else {
          radian = angle;
        }
        var halfAngle = 0.5 * radian;
        var sin = Math.sin(halfAngle);

        var axis = Vector3.normalize(axisVec3);
        return new Quaternion(sin * axis.x, sin * axis.y, sin * axis.z, Math.cos(halfAngle));
      }
    }]);
    return Quaternion;
  }();

  GLBoost$1["Quaternion"] = Quaternion;

  var Vector2 = function () {
    function Vector2(x, y) {
      babelHelpers.classCallCheck(this, Vector2);

      this.x = x;
      this.y = y;
    }

    babelHelpers.createClass(Vector2, [{
      key: "clone",
      value: function clone() {
        return new Vector2(this.x, this.y);
      }
    }]);
    return Vector2;
  }();

  GLBoost$1["Vector2"] = Vector2;

  var MathUtil = function () {
    function MathUtil() {
      babelHelpers.classCallCheck(this, MathUtil);
    }

    babelHelpers.createClass(MathUtil, null, [{
      key: 'radianToDegree',
      value: function radianToDegree(rad) {
        return rad * 180 / Math.PI;
      }
    }, {
      key: 'degreeToRadian',
      value: function degreeToRadian(deg) {
        return deg * Math.PI / 180;
      }
    }, {
      key: 'arrayToVector',
      value: function arrayToVector(element) {
        if (Array.isArray(element)) {
          if (typeof element[3] !== 'undefined') {
            return new Vector4(element[0], element[1], element[2], element[3]);
          } else if (typeof element[2] !== 'undefined') {
            return new Vector3(element[0], element[1], element[2]);
          } else {
            return new Vector2(element[0], element[1]);
          }
        } else {
          return element;
        }
      }
    }, {
      key: 'makeSubArray',
      value: function makeSubArray(array, componentN) {
        if (componentN === 4) {
          return [array[0], array[1], array[2], array[3]];
        } else if (componentN === 3) {
          return [array[0], array[1], array[2]];
        } else if (componentN === 2) {
          return [array[0], array[1]];
        } else {
          return array[0];
        }
      }
    }, {
      key: 'vectorToArray',
      value: function vectorToArray(element) {
        if (element instanceof Vector2) {
          return [element.x, element.y];
        } else if (element instanceof Vector3) {
          return [element.x, element.y, element.z];
        } else if (element instanceof Vector4 || element instanceof Quaternion) {
          return [element.x, element.y, element.z, element.w];
        } else {
          return element;
        }
      }
    }, {
      key: 'compomentNumberOfVector',
      value: function compomentNumberOfVector(element) {
        if (element instanceof Vector2) {
          return 2;
        } else if (element instanceof Vector3) {
          return 3;
        } else if (element instanceof Vector4 || element instanceof Quaternion) {
          return 4;
        } else {
          return 0;
        }
      }
    }]);
    return MathUtil;
  }();

  GLBoost$1["MathUtil"] = MathUtil;

  var Vector3 = function () {
    function Vector3(x, y, z) {
      babelHelpers.classCallCheck(this, Vector3);

      this.x = x;
      this.y = y;
      this.z = z;
    }

    babelHelpers.createClass(Vector3, [{
      key: 'isEqual',
      value: function isEqual(vec) {
        if (this.x === vec.x && this.y === vec.y && this.z === vec.z) {
          return true;
        } else {
          return false;
        }
      }

      /**
       * Zero Vector
       */

    }, {
      key: 'clone',
      value: function clone() {
        return new Vector3(this.x, this.y, this.z);
      }
    }, {
      key: 'length',
      value: function length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
      }

      /*
       * disabled for now because Safari's Function.prototype.length is not configurable yet.
       */
      /*
      static length(vec3) {
        return Math.sqrt(vec3.x*vec3.x + vec3.y*vec3.y + vec3.z*vec3.z);
      }
      */

      /**
       * 長さの2乗
       */

    }, {
      key: 'lengthSquared',
      value: function lengthSquared() {
        return this.x * this.x + this.y * this.y + this.z * this.z;
      }

      /**
       * 長さの2乗（static版）
       */

    }, {
      key: 'lengthTo',
      value: function lengthTo(vec3) {
        var deltaX = vec3.x - this.x;
        var deltaY = vec3.y - this.y;
        var deltaZ = vec3.z - this.z;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
      }
    }, {
      key: 'dotProduct',


      /**
       * 内積
       */
      value: function dotProduct(vec3) {
        return this.x * vec3.x + this.y * vec3.y + this.z * vec3.z;
      }

      /**
       * 内積（static版）
       */

    }, {
      key: 'cross',


      /**
       * 外積
       */
      value: function cross(v) {
        var x = this.y * v.z - this.z * v.y;
        var y = this.z * v.x - this.x * v.z;
        var z = this.x * v.y - this.y * v.x;

        this.x = x;
        this.y = y;
        this.z = z;

        return this;
      }

      /**
      * 外積(static版)
      */

    }, {
      key: 'normalize',


      /**
       * 正規化
       */
      value: function normalize() {
        var length = this.length();
        this.divide(length);

        return this;
      }

      /**
       * 正規化（static版）
       */

    }, {
      key: 'add',


      /**
       * 加算
       */
      value: function add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;

        return this;
      }

      /**
       * 加算（static版）
       */

    }, {
      key: 'subtract',


      /**
       * 減算
       */
      value: function subtract(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;

        return this;
      }

      /**
       * 減算（static版）
       */

    }, {
      key: 'divide',


      /**
       * 除算
       */
      value: function divide(val) {
        console.assert(val != 0, "0 division!");
        this.x /= val;
        this.y /= val;
        this.z /= val;

        return this;
      }

      /**
       * 除算（static版）
       */

    }, {
      key: 'multiply',
      value: function multiply(val) {
        this.x *= val;
        this.y *= val;
        this.z *= val;

        return this;
      }

      /**
       * 除算（static版）
       */

    }, {
      key: 'toVector4',
      value: function toVector4() {
        return new Vector4(this.x, this.y, this.z, 1.0);
      }
    }, {
      key: 'toString',
      value: function toString() {
        return '(' + this.x + ', ' + this.y + ', ' + this.z + ')';
      }
    }], [{
      key: 'zero',
      value: function zero() {
        return new Vector3(0, 0, 0);
      }
    }, {
      key: 'lengthSquared',
      value: function lengthSquared(vec3) {
        return vec3.x * vec3.x + vec3.y * vec3.y + vec3.z * vec3.z;
      }
    }, {
      key: 'lengthBtw',
      value: function lengthBtw(lhv, rhv) {
        var deltaX = rhv.x - lhv.x;
        var deltaY = rhv.y - lhv.y;
        var deltaZ = rhv.z - lhv.z;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ);
      }
    }, {
      key: 'dotProduct',
      value: function dotProduct(lv, rv) {
        return lv.x * rv.x + lv.y * rv.y + lv.z * rv.z;
      }
    }, {
      key: 'cross',
      value: function cross(lv, rv) {
        var x = lv.y * rv.z - lv.z * rv.y;
        var y = lv.z * rv.x - lv.x * rv.z;
        var z = lv.x * rv.y - lv.y * rv.x;

        return new Vector3(x, y, z);
      }
    }, {
      key: 'normalize',
      value: function normalize(vec3) {
        var length = vec3.length();
        var newVec = new Vector3(vec3.x, vec3.y, vec3.z);
        newVec.divide(length);

        return newVec;
      }
    }, {
      key: 'add',
      value: function add(lv, rv) {
        return new Vector3(lv.x + rv.x, lv.y + rv.y, lv.z + rv.z);
      }
    }, {
      key: 'subtract',
      value: function subtract(lv, rv) {
        return new Vector3(lv.x - rv.x, lv.y - rv.y, lv.z - rv.z);
      }
    }, {
      key: 'divide',
      value: function divide(vec3, val) {
        console.assert(val != 0, "0 division!");
        return new Vector3(vec3.x / val, vec3.y / val, vec3.z / val);
      }
    }, {
      key: 'multiply',
      value: function multiply(vec3, val) {
        return new Vector3(vec3.x * val, vec3.y * val, vec3.z * val);
      }
    }, {
      key: 'angleOfVectors',
      value: function angleOfVectors(lhv, rhv) {
        var cos_sita = Vector3.dotProduct(lhv, rhv) / (lhv.length() * rhv.length());

        var sita = Math.acos(cos_sita);

        if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
          sita = MathUtil.radianToDegree(sita);
        }

        return sita;
      }
    }]);
    return Vector3;
  }();

  GLBoost$1['Vector3'] = Vector3;

  var Vector4 = function () {
    function Vector4(x, y, z, w) {
      babelHelpers.classCallCheck(this, Vector4);

      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }

    babelHelpers.createClass(Vector4, [{
      key: 'isEqual',
      value: function isEqual(vec) {
        if (this.x === vec.x && this.y === vec.y && this.z === vec.z && this.w === vec.w) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'clone',
      value: function clone() {
        return new Vector4(this.x, this.y, this.z, this.w);
      }

      /**
       * Zero Vector
       */

    }, {
      key: 'toVector3',
      value: function toVector3() {
        return new Vector3(this.x, this.y, this.z);
      }
    }], [{
      key: 'zero',
      value: function zero() {
        return new Vector4(0, 0, 0, 1);
      }
    }]);
    return Vector4;
  }();

  GLBoost$1["Vector4"] = Vector4;

  var AnimationUtil = function () {
    function AnimationUtil() {
      babelHelpers.classCallCheck(this, AnimationUtil);
    }

    babelHelpers.createClass(AnimationUtil, null, [{
      key: "lerp",
      value: function lerp(start, end, ratio, componentN) {
        if (componentN === 1) {
          return start * (1 - ratio) + end * ratio;
        } else {
          if (start instanceof Quaternion) {
            return Quaternion.qlerp(start, end, ratio);
          } else {
            return start.multiply(1 - ratio).add(end.multiply(ratio));
          }
        }
      }
    }, {
      key: "interpolate",
      value: function interpolate(inputArray, outputArray, input, componentN) {
        if (input < inputArray[0]) {
          return outputArray[0].clone(); // out of range!
        }
        if (inputArray[inputArray.length - 1] <= input) {
          return outputArray[outputArray.length - 1].clone(); // out of range!
        }

        for (var i = 0; i < inputArray.length; i++) {
          if (typeof inputArray[i + 1] === "undefined") {
            break;
          }
          if (inputArray[i] <= input && input < inputArray[i + 1]) {
            var ratio = (input - inputArray[i]) / (inputArray[i + 1] - inputArray[i]);
            var resultValue = this.lerp(outputArray[i].clone(), outputArray[i + 1].clone(), ratio, componentN);
            return resultValue;
          }
        }
        return outputArray[0].clone(); // out of range!
      }
    }]);
    return AnimationUtil;
  }();

  var L_Element = function (_GLBoostObject) {
    babelHelpers.inherits(L_Element, _GLBoostObject);

    function L_Element(glBoostContext) {
      var toRegister = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      babelHelpers.classCallCheck(this, L_Element);

      var _this = babelHelpers.possibleConstructorReturn(this, (L_Element.__proto__ || Object.getPrototypeOf(L_Element)).call(this, glBoostContext, toRegister));

      _this._translate = Vector3.zero();
      _this._scale = new Vector3(1, 1, 1);

      _this._rotate = Vector3.zero();
      _this._quaternion = new Quaternion(0, 0, 0, 1);
      _this._matrix = Matrix44$1.identity();

      _this._finalMatrix = Matrix44$1.identity();

      _this._dirtyAsElement = true;
      _this._currentCalcMode = 'euler'; // true: calc rotation matrix using quaternion. false: calc rotation matrix using Euler

      return _this;
    }

    babelHelpers.createClass(L_Element, [{
      key: '_needUpdate',
      value: function _needUpdate() {
        this._dirtyAsElement = true;
      }
    }, {
      key: 'multiplyMatrix',
      value: function multiplyMatrix(mat) {
        this._matrix = mat.clone();
        this._currentCalcMode = 'matrix';
        this._needUpdate();
      }
    }, {
      key: '_copy',
      value: function _copy(instance) {
        babelHelpers.get(L_Element.prototype.__proto__ || Object.getPrototypeOf(L_Element.prototype), '_copy', this).call(this, instance);

        instance._translate = this._translate.clone();
        instance._scale = this._scale.clone();
        instance._rotate = this._rotate.clone();
        instance._quaternion = this._quaternion.clone();
        instance._matrix = this._matrix.clone();
        instance._finalMatrix = this._finalMatrix.clone();
        instance._dirtyAsElement = this._dirtyAsElement;
        instance._currentCalcMode = this._currentCalcMode;
      }
    }, {
      key: 'translate',
      set: function set(vec) {
        if (this._translate.isEqual(vec)) {
          return;
        }
        if (this._currentCalcMode === 'matrix') {
          this.matrix.m03 = vec.x;
          this.matrix.m13 = vec.y;
          this.matrix.m23 = vec.z;
        }
        this._translate = vec;
        this._needUpdate();
      },
      get: function get() {
        return this._translate;
      }
    }, {
      key: 'rotate',
      set: function set(vec) {
        if (this._currentCalcMode !== 'euler') {
          this._currentCalcMode = 'euler';
          this._needUpdate();
        }
        if (this._rotate.isEqual(vec)) {
          return;
        }
        this._rotate = vec;
        this._needUpdate();
      },
      get: function get() {
        return this._rotate;
      }
    }, {
      key: 'scale',
      set: function set(vec) {
        if (this._scale.isEqual(vec)) {
          return;
        }
        this._scale = vec;
        this._needUpdate();
      },
      get: function get() {
        return this._scale;
      }
    }, {
      key: 'matrix',
      get: function get() {
        return this._matrix;
      }
    }, {
      key: 'quaternion',
      set: function set(quat) {
        if (this._currentCalcMode !== 'quaternion') {
          this._currentCalcMode = 'quaternion';
          this._needUpdate();
        }
        if (this._quaternion.isEqual(quat)) {
          return;
        }
        this._quaternion = quat;
        this._needUpdate();
      },
      get: function get() {
        return this._quaternion;
      }
    }, {
      key: 'transformMatrix',
      get: function get() {
        if (this._dirtyAsElement) {
          var matrix = Matrix44$1.identity();
          if (this._currentCalcMode === 'matrix') {
            this._finalMatrix = matrix.multiply(this.matrix);
            this._dirtyAsElement = false;
            return this._finalMatrix.clone();
          }

          var rotationMatrix = null;
          if (this._currentCalcMode === 'quaternion') {
            rotationMatrix = this.quaternion.rotationMatrix;
          } else {
            rotationMatrix = Matrix44$1.rotateX(this.rotate.x).multiply(Matrix44$1.rotateY(this.rotate.y)).multiply(Matrix44$1.rotateZ(this.rotate.z));
          }

          this._finalMatrix = matrix.multiply(Matrix44$1.scale(this.scale)).multiply(rotationMatrix);
          this._finalMatrix.m03 = this.translate.x;
          this._finalMatrix.m13 = this.translate.y;
          this._finalMatrix.m23 = this.translate.z;

          this._dirtyAsElement = false;
        }

        return this._finalMatrix.clone();
      }
    }, {
      key: 'currentCalcMode',
      set: function set(mode) {
        this._currentCalcMode = mode;
      },
      get: function get() {
        return this._currentCalcMode;
      }
    }]);
    return L_Element;
  }(GLBoostObject);

  var M_Element = function (_L_Element) {
    babelHelpers.inherits(M_Element, _L_Element);

    function M_Element(glBoostContext) {
      babelHelpers.classCallCheck(this, M_Element);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_Element.__proto__ || Object.getPrototypeOf(M_Element)).call(this, glBoostContext));

      _this._parent = null;
      _this._invMatrix = Matrix44$1.identity();
      _this._matrixGetMode = ''; // 'notanimated', 'animate_<input_value>'
      _this._calculatedInverseMatrix = false;
      _this._updateCountAsElement = 0;
      _this._accumulatedAncestryNameWithUpdateInfoString = '';
      _this._accumulatedAncestryNameWithUpdateInfoStringNormal = '';
      _this._accumulatedAncestryNameWithUpdateInfoStringInv = '';
      _this._animationLine = {};
      _this._transparentByUser = false;
      _this.opacity = 1.0;

      _this._activeAnimationLineName = null;
      _this._currentAnimationInputValues = {};
      _this._toInheritCurrentAnimationInputValue = true;

      _this._camera = null;
      _this._customFunction = null;
      return _this;
    }

    babelHelpers.createClass(M_Element, [{
      key: '_needUpdate',
      value: function _needUpdate() {
        this._dirtyAsElement = true;
        this._calculatedInverseMatrix = false;
        this._updateCountAsElement++;
      }
    }, {
      key: 'setCurrentAnimationValue',


      /**
       * [en] Set animation input value (for instance frame value), This value affect all child elements in this scene graph (recursively).<br>
       * [ja] アニメーションのための入力値（例えばフレーム値）をセットします。この値はシーングラフに属する全ての子孫に影響します。
       * @param {string} inputName [en] inputName name of input value. [ja] 入力値の名前
       * @param {number|Vector2|Vector3|Vector4|*} inputValue [en] input value of animation. [ja] アニメーションの入力値
       */
      value: function setCurrentAnimationValue(inputName, inputValue) {
        this._setDirtyToAnimatedElement(inputName);
        this._currentAnimationInputValues[inputName] = inputValue;
      }
    }, {
      key: '_getCurrentAnimationInputValue',
      value: function _getCurrentAnimationInputValue(inputName) {
        var value = this._currentAnimationInputValues[inputName];
        if (typeof value !== 'undefined') {
          return value;
        } else if (this._toInheritCurrentAnimationInputValue) {
          return this._parent._getCurrentAnimationInputValue(inputName);
        } else {
          return -1;
        }
      }
    }, {
      key: 'removeCurrentAnimationValue',
      value: function removeCurrentAnimationValue(inputName) {
        delete this._currentAnimationInputValues[inputName];
      }
    }, {
      key: '_setDirtyToAnimatedElement',
      value: function _setDirtyToAnimatedElement(inputName) {
        if (this.hasAnimation(inputName)) {
          this._needUpdate();
        }
      }
    }, {
      key: '_getAnimatedTransformValue',
      value: function _getAnimatedTransformValue(value, animation, type) {
        if (typeof animation !== 'undefined' && animation[type]) {
          return AnimationUtil.interpolate(animation[type].input, animation[type].output, value, animation[type].outputComponentN);
        } else {
          //  console.warn(this._instanceName + 'doesn't have ' + type + ' animation data. GLBoost returned default ' + type + ' value.');
          if (type == 'quaternion') {
            //        return new Quaternion(0, 0, 0, 1);
          }
          return this['_' + type];
        }
      }
    }, {
      key: 'getTranslateAt',
      value: function getTranslateAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'translate');
      }
    }, {
      key: 'getTranslateNotAnimated',
      value: function getTranslateNotAnimated() {
        return this._translate;
      }
    }, {
      key: 'getRotateAt',
      value: function getRotateAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'rotate');
      }
    }, {
      key: 'getRotateNotAnimated',
      value: function getRotateNotAnimated() {
        return this._rotate;
      }
    }, {
      key: 'getQuaternionNotAnimated',
      value: function getQuaternionNotAnimated() {
        return this._quaternion;
      }
    }, {
      key: 'getQuaternionAt',
      value: function getQuaternionAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'quaternion');
      }
    }, {
      key: 'getScaleAt',
      value: function getScaleAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'scale');
      }
    }, {
      key: 'getScaleNotAnimated',
      value: function getScaleNotAnimated() {
        return this._scale;
      }
    }, {
      key: 'getMatrixAt',
      value: function getMatrixAt(lineName, value) {
        return this._getAnimatedTransformValue(value, this._animationLine[lineName], 'matrix');
      }
    }, {
      key: 'getMatrixNotAnimated',
      value: function getMatrixNotAnimated() {
        return this._matrix;
      }
    }, {
      key: 'getTransformMatrixOnlyRotateOn',
      value: function getTransformMatrixOnlyRotateOn(value) {

        var rotationMatrix = null;
        if (this._currentCalcMode === 'quaternion') {
          rotationMatrix = this.getQuaternionAt('time', value).rotationMatrix;
        } else if (this._currentCalcMode === 'matrix') {
          rotationMatrix = this.getMatrixAt('time', value);
          rotationMatrix.m03 = 0;
          rotationMatrix.m13 = 0;
          rotationMatrix.m23 = 0;
          rotationMatrix.m30 = 0;
          rotationMatrix.m31 = 0;
          rotationMatrix.m32 = 0;
        } else {
          rotationMatrix = Matrix44$1.rotateX(this.getRotate('time', value).x).multiply(Matrix44$1.rotateY(this.getRotateAt('time', value).y)).multiply(Matrix44$1.rotateZ(this.getRotateAt('time', value).z));
        }

        return rotationMatrix.clone();
      }
    }, {
      key: '_accumulateMyAndParentNameWithUpdateInfo',
      value: function _accumulateMyAndParentNameWithUpdateInfo(currentElem) {
        if (currentElem._parent === null) {
          return currentElem.toStringWithUpdateInfo();
        } else {
          return this._accumulateMyAndParentNameWithUpdateInfo(currentElem._parent) + currentElem.toStringWithUpdateInfo();
        }
      }
    }, {
      key: '_multiplyMyAndParentTransformMatrices',
      value: function _multiplyMyAndParentTransformMatrices(currentElem, withMySelf) {
        if (currentElem._parent === null) {
          if (withMySelf) {
            return currentElem.transformMatrix;
          } else {
            return Matrix44$1.identity();
          }
        } else {
          var currentMatrix = Matrix44$1.identity();
          if (withMySelf) {
            currentMatrix = currentElem.transformMatrix;
          }
          return this._multiplyMyAndParentTransformMatrices(currentElem._parent, true).multiply(currentMatrix);
        }
      }
    }, {
      key: '_multiplyMyAndParentTransformMatricesInInverseOrder',
      value: function _multiplyMyAndParentTransformMatricesInInverseOrder(currentElem, withMySelf) {
        if (currentElem._parent === null) {
          if (withMySelf) {
            return currentElem.transformMatrix;
          } else {
            return Matrix44$1.identity();
          }
        } else {
          var currentMatrix = Matrix44$1.identity();
          if (withMySelf) {
            currentMatrix = currentElem.transformMatrix;
          }
          return currentMatrix.multiply(this._multiplyMyAndParentTransformMatricesInInverseOrder(currentElem._parent, true));
        }
      }
    }, {
      key: '_multiplyMyAndParentRotateMatrices',
      value: function _multiplyMyAndParentRotateMatrices(currentElem, withMySelf) {
        if (currentElem._parent === null) {
          if (withMySelf) {
            return currentElem.transformMatrixOnlyRotate;
          } else {
            return Matrix44$1.identity();
          }
        } else {
          var currentMatrix = Matrix44$1.identity();
          if (withMySelf) {
            currentMatrix = currentElem.transformMatrixOnlyRotate;
          }
          return this._multiplyMyAndParentRotateMatrices(currentElem._parent, true).multiply(currentMatrix);
        }
      }
    }, {
      key: '_accumulateMyAndParentOpacity',
      value: function _accumulateMyAndParentOpacity(currentElem) {
        if (currentElem._parent === null) {
          return currentElem.opacity;
        } else {
          return this._accumulateMyAndParentOpacity(currentElem._parent) * currentElem.opacity;
        }
      }
    }, {
      key: 'toStringWithUpdateInfo',


      // used by library (not Application)
      value: function toStringWithUpdateInfo() {
        //  return '&' + this._instanceName + '#' + this._updateCountAsElement;  // human readable
        return this._instanceName + this._updateCountAsElement; // faster
      }
    }, {
      key: 'setAnimationAtLine',
      value: function setAnimationAtLine(lineName, attributeName, inputArray, outputArray) {
        var outputComponentN = 0;
        if (outputArray[0] instanceof Vector2) {
          outputComponentN = 2;
        } else if (outputArray[0] instanceof Vector3) {
          outputComponentN = 3;
        } else if (outputArray[0] instanceof Vector4) {
          outputComponentN = 4;
        } else if (outputArray[0] instanceof Quaternion) {
          outputComponentN = 4;
        } else {
          outputComponentN = 1;
        }
        if (!this._animationLine[lineName]) {
          this._animationLine[lineName] = {};
        }
        this._animationLine[lineName][attributeName] = {
          input: inputArray,
          output: outputArray,
          outputAttribute: attributeName,
          outputComponentN: outputComponentN
        };
      }
    }, {
      key: 'setActiveAnimationLine',
      value: function setActiveAnimationLine(lineName) {
        this._activeAnimationLineName = lineName;
      }
    }, {
      key: 'hasAnimation',
      value: function hasAnimation(lineName) {
        if (this._animationLine[lineName]) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender() {}
    }, {
      key: '_copy',
      value: function _copy(instance) {
        babelHelpers.get(M_Element.prototype.__proto__ || Object.getPrototypeOf(M_Element.prototype), '_copy', this).call(this, instance);

        instance._parent = this._parent;
        instance._invMatrix = this._invMatrix.clone();
        instance._matrixGetMode = this._matrixGetMode;
        instance._calculatedInverseMatrix = this._calculatedInverseMatrix;
        instance._updateCountAsElement = this._updateCountAsElement;
        instance._accumulatedAncestryNameWithUpdateInfoString = this._accumulatedAncestryNameWithUpdateInfoString;
        instance._accumulatedAncestryNameWithUpdateInfoStringNormal = this._accumulatedAncestryNameWithUpdateInfoStringNormal;
        instance._accumulatedAncestryNameWithUpdateInfoStringInv = this._accumulatedAncestryNameWithUpdateInfoStringInv;
        instance._animationLine = {};

        for (var lineName in this._animationLine) {
          instance._animationLine[lineName] = {};
          for (var attributeName in this._animationLine[lineName]) {
            instance._animationLine[lineName][attributeName] = {};
            instance._animationLine[lineName][attributeName].input = this._animationLine[lineName][attributeName].input.concat();

            var instanceOutput = [];
            var thisOutput = this._animationLine[lineName][attributeName].output;
            for (var i = 0; i < thisOutput.length; i++) {
              instanceOutput.push(typeof thisOutput[i] === 'number' ? thisOutput[i] : thisOutput[i].clone());
            }
            instance._animationLine[lineName][attributeName].output = instanceOutput;

            instance._animationLine[lineName][attributeName].outputAttribute = this._animationLine[lineName][attributeName].outputAttribute;

            instance._animationLine[lineName][attributeName].outputComponentN = this._animationLine[lineName][attributeName].outputComponentN;
          }
        }

        instance._transparentByUser = this._transparentByUser;
        instance.opacity = this.opacity;
        instance._activeAnimationLineName = this._activeAnimationLineName;

        instance._currentAnimationInputValues = {};
        for (var inputName in this._currentAnimationInputValues) {
          instance._currentAnimationInputValues[inputName] = this._currentAnimationInputValues[inputName];
        }

        instance._toInheritCurrentAnimationInputValue = this._toInheritCurrentAnimationInputValue;

        instance._camera = this._camera;
        instance._customFunction = this._customFunction;
      }
    }, {
      key: 'updateCountAsElement',
      get: function get() {
        return this._updateCountAsElement;
      }
    }, {
      key: 'toInheritCurrentAnimationInputValue',
      set: function set(flg) {
        this._toInheritCurrentAnimationInputValue = flg;
      },
      get: function get() {
        return this._toInheritCurrentAnimationInputValue;
      }
    }, {
      key: 'translate',
      set: function set(vec) {
        if (this._translate.isEqual(vec)) {
          return;
        }
        if (this._currentCalcMode === 'matrix') {
          this.matrix.m03 = vec.x;
          this.matrix.m13 = vec.y;
          this.matrix.m23 = vec.z;
        }
        this._translate = vec;
        this._needUpdate();
      },
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getTranslateAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._translate;
        }
      }
    }, {
      key: 'rotate',
      set: function set(vec) {
        if (this._currentCalcMode !== 'euler') {
          this._currentCalcMode = 'euler';
          this._needUpdate();
        }
        if (this._rotate.isEqual(vec)) {
          return;
        }
        this._rotate = vec;
        this._needUpdate();
      },
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getRotateAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._rotate;
        }
      }
    }, {
      key: 'quaternion',
      set: function set(quat) {
        if (this._currentCalcMode !== 'quaternion') {
          this._currentCalcMode = 'quaternion';
          this._needUpdate();
        }
        if (this._quaternion.isEqual(quat)) {
          return;
        }
        this._quaternion = quat;
        this._needUpdate();
      },
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getQuaternionAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._quaternion;
        }
      }
    }, {
      key: 'scale',
      set: function set(vec) {
        if (this._scale.isEqual(vec)) {
          return;
        }
        this._scale = vec;
        this._needUpdate();
      },
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getScaleAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._scale;
        }
      }
    }, {
      key: 'matrix',
      get: function get() {
        if (this._activeAnimationLineName) {
          return this.getMatrixAt(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
        } else {
          return this._matrix;
        }
      }
    }, {
      key: 'transformMatrix',
      get: function get() {
        var input = -1;
        if (this._activeAnimationLineName !== null) {
          input = this._getCurrentAnimationInputValue(this._activeAnimationLineName);
        }
        if (this._dirtyAsElement || input < 0 || this._matrixGetMode !== 'animated_' + input) {
          var matrix = Matrix44$1.identity();

          if (this._currentCalcMode === 'matrix') {
            this._finalMatrix = matrix.multiply(this.matrix);
            this._dirtyAsElement = false;
            return this._finalMatrix.clone();
          }

          var rotationMatrix = null;
          if (this._currentCalcMode === 'quaternion') {
            rotationMatrix = this.quaternion.rotationMatrix;
          } else {
            rotationMatrix = Matrix44$1.rotateX(this.rotate.x).multiply(Matrix44$1.rotateY(this.rotate.y)).multiply(Matrix44$1.rotateZ(this.rotate.z));
          }

          this._finalMatrix = matrix.multiply(Matrix44$1.scale(this.scale)).multiply(rotationMatrix);
          this._finalMatrix.m03 = this.translate.x;
          this._finalMatrix.m13 = this.translate.y;
          this._finalMatrix.m23 = this.translate.z;

          this._dirtyAsElement = false;
          this._matrixGetMode = 'animated_' + input;
        }

        return this._finalMatrix.clone();
      }
    }, {
      key: 'transformMatrixOnlyRotate',
      get: function get() {

        var rotationMatrix = null;
        if (this._currentCalcMode === 'quaternion') {
          rotationMatrix = this.quaternion.rotationMatrix;
        } else if (this._currentCalcMode === 'matrix') {
          rotationMatrix = this.matrix;
          rotationMatrix.m03 = 0;
          rotationMatrix.m13 = 0;
          rotationMatrix.m23 = 0;
          rotationMatrix.m30 = 0;
          rotationMatrix.m31 = 0;
          rotationMatrix.m32 = 0;
        } else {
          rotationMatrix = Matrix44$1.rotateX(this.rotate.x).multiply(Matrix44$1.rotateY(this.rotate.y)).multiply(Matrix44$1.rotateZ(this.rotate.z));
        }

        return rotationMatrix.clone();
      }
    }, {
      key: 'transformMatrixOnlyRotateOnInit',
      get: function get() {
        return this.getTransformMatrixOnlyRotateOn(0);
      }
    }, {
      key: 'inverseTransformMatrix',
      get: function get() {
        if (!this._calculatedInverseMatrix) {
          this._invMatrix = this.transformMatrix.invert();
          this._calculatedInverseMatrix = true;
        }
        return this._invMatrix.clone();
      }
    }, {
      key: 'transformMatrixAccumulatedAncestry',
      get: function get() {
        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        //console.log(tempString);
        if (this._accumulatedAncestryNameWithUpdateInfoString !== tempString || typeof this._matrixAccumulatedAncestry === 'undefined') {
          this._matrixAccumulatedAncestry = this._multiplyMyAndParentTransformMatrices(this, true);
          this._accumulatedAncestryNameWithUpdateInfoString = tempString;
        }

        return this._matrixAccumulatedAncestry.clone();
      }
    }, {
      key: 'transformMatrixAccumulatedAncestryWithoutMySelf',
      get: function get() {
        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        //console.log(tempString);
        if (this._accumulatedAncestryNameWithUpdateInfoString !== tempString || typeof this._matrixAccumulatedAncestry === 'undefined') {
          this._matrixAccumulatedAncestry = this._multiplyMyAndParentTransformMatrices(this, false);
          this._accumulatedAncestryNameWithUpdateInfoString = tempString;
        }

        return this._matrixAccumulatedAncestry.clone();
      }
    }, {
      key: 'normalMatrixAccumulatedAncestry',
      get: function get() {
        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        //console.log(tempString);
        if (this._accumulatedAncestryNameWithUpdateInfoStringNormal !== tempString || typeof this._normalMatrixAccumulatedAncestry === 'undefined') {
          var world_m = this._multiplyMyAndParentTransformMatrices(this, true);
          this._normalMatrixAccumulatedAncestry = Matrix44$1.invert(world_m).transpose().toMatrix33();
          this._accumulatedAncestryNameWithUpdateInfoStringNormal = tempString;
        }

        return this._normalMatrixAccumulatedAncestry.clone();
      }
    }, {
      key: 'inverseTransformMatrixAccumulatedAncestryWithoutMySelf',
      get: function get() {
        if (this._parent === null) {
          return Matrix44$1.identity();
        }

        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        //console.log(tempString);
        if (this._accumulatedAncestryNameWithUpdateInfoStringInv !== tempString || typeof this._invMatrixAccumulatedAncestry === 'undefined') {
          this._invMatrixAccumulatedAncestry = this._multiplyMyAndParentTransformMatricesInInverseOrder(this, false).invert();
          this._accumulatedAncestryNameWithUpdateInfoStringInv = tempString;
        }

        return this._invMatrixAccumulatedAncestry.clone();
      }
    }, {
      key: 'rotateMatrixAccumulatedAncestry',
      get: function get() {
        /*
         var mat = this._multiplyMyAndParentTransformMatrices(this);
         var scaleX = Math.sqrt(mat.m00*mat.m00 + mat.m10*mat.m10 + mat.m20*mat.m20);
         var scaleY = Math.sqrt(mat.m01*mat.m01 + mat.m11*mat.m11 + mat.m21*mat.m21);
         var scaleZ = Math.sqrt(mat.m02*mat.m02 + mat.m12*mat.m12 + mat.m22*mat.m22);
          return new Matrix44(
         mat.m00/scaleX, mat.m01/scaleY, mat.m02/scaleZ, 0,
         mat.m10/scaleX, mat.m11/scaleY, mat.m12/scaleZ, 0,
         mat.m20/scaleX, mat.m21/scaleY, mat.m22/scaleZ, 0,
         0, 0, 0, 1
         );*/
        return this._multiplyMyAndParentRotateMatrices(this, true);
      }
    }, {
      key: 'inverseTransformMatrixAccumulatedAncestry',
      get: function get() {
        return this._multiplyMyAndParentTransformMatrices(this, true).invert();
      }
    }, {
      key: 'opacityAccumulatedAncestry',
      get: function get() {
        return this._accumulateMyAndParentOpacity(this);
      }
    }, {
      key: 'opacity',
      set: function set(opacity) {
        this._opacity = opacity;
      },
      get: function get() {
        return this._opacity;
      }
    }, {
      key: 'transparent',
      set: function set(flg) {
        this._transparentByUser = flg;
      }
    }, {
      key: 'dirty',
      set: function set(flg) {
        this._dirtyAsElement = flg;
        if (flg) {
          this._needUpdate();
        }
      }
    }, {
      key: 'parent',
      get: function get() {
        return this._parent;
      }
    }, {
      key: 'camera',
      set: function set(camera) {
        this._camera = camera;
      },
      get: function get() {
        return this._camera;
      }
    }, {
      key: 'customFunction',
      set: function set(func) {
        this._customFunction = func;
      },
      get: function get() {
        return this._customFunction;
      }
    }]);
    return M_Element;
  }(L_Element);

  /**
   * [en] This is the abstract class for all lights classes. Don't use this class directly.<br>
   * [ja] 全ての光源クラスのための抽象クラスです。直接このクラスは使わないでください。
   */

  var M_AbstractLight = function (_M_Element) {
    babelHelpers.inherits(M_AbstractLight, _M_Element);

    function M_AbstractLight(glBoostContext) {
      babelHelpers.classCallCheck(this, M_AbstractLight);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_AbstractLight.__proto__ || Object.getPrototypeOf(M_AbstractLight)).call(this, glBoostContext));

      if (_this.constructor === M_AbstractLight) {
        throw new TypeError('Cannot construct AbstractLight instances directly.');
      }

      _this._gl = _this._glContext.gl;
      return _this;
    }

    babelHelpers.createClass(M_AbstractLight, [{
      key: 'prepareToRender',
      value: function prepareToRender() {
        if (this._camera) {
          if (this._camera.customFunction) {
            this._camera.customFunction(this);
          }
        }
      }
    }]);
    return M_AbstractLight;
  }(M_Element);

  /**
   * [en] This is a Directional Light class.<br>
   * [ja] 平行光源クラスです。
   */

  var M_DirectionalLight = function (_M_AbstractLight) {
    babelHelpers.inherits(M_DirectionalLight, _M_AbstractLight);

    /**
     * [en] The constructor of DirectionalLight class. <br>
     * [ja] DirectionalLightクラスのコンストラクタ
     * @param {Vector4} intensity [en] intensity as Vector4 Color [ja] Vector4による色情報で指定する光の強度
     * @param {Vector4} direction [en] the light (traveling) direction [ja] 光が向かう方向
     */
    function M_DirectionalLight(glBoostContext, intensity, direction) {
      babelHelpers.classCallCheck(this, M_DirectionalLight);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_DirectionalLight.__proto__ || Object.getPrototypeOf(M_DirectionalLight)).call(this, glBoostContext));

      _this._intensity = intensity;
      _this._direction = direction;
      return _this;
    }

    babelHelpers.createClass(M_DirectionalLight, [{
      key: 'intensity',
      set: function set(vec) {
        this._intensity = vec;
      },
      get: function get() {
        return this._intensity;
      }
    }, {
      key: 'direction',
      set: function set(vec) {
        this._direction = vec;
        if (this._camera) {
          if (this._camera.customFunction) {
            this._camera.customFunction(this);
          }
        }
      },
      get: function get() {
        return this._direction;
      }
    }]);
    return M_DirectionalLight;
  }(M_AbstractLight);

  /**
   * [en] This is a Point Light class.<br>
   * [ja] 点光源クラスです。
   */

  var M_PointLight = function (_M_AbstractLight) {
    babelHelpers.inherits(M_PointLight, _M_AbstractLight);

    /**
     * [en] The constructor of PointLight class. <br>
     * [ja] PointLightクラスのコンストラクタ
     * @param {Vector4} intensity [en] intensity as Vector4 Color [ja] Vector4による色情報で指定する光の強度
     * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     */
    function M_PointLight(glBoostContext, intensity) {
      babelHelpers.classCallCheck(this, M_PointLight);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_PointLight.__proto__ || Object.getPrototypeOf(M_PointLight)).call(this, glBoostContext));

      _this._intensity = intensity;

      return _this;
    }

    babelHelpers.createClass(M_PointLight, [{
      key: 'intensity',
      set: function set(vec) {
        this._intensity = vec;
      },
      get: function get() {
        return this._intensity;
      }
    }]);
    return M_PointLight;
  }(M_AbstractLight);

  var singleton$2 = Symbol();
  var singletonEnforcer$2 = Symbol();

  var DrawKickerLocal = function () {
    function DrawKickerLocal(enforcer) {
      babelHelpers.classCallCheck(this, DrawKickerLocal);

      if (enforcer !== singletonEnforcer$2) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }
      this._glslProgram = null;
    }

    babelHelpers.createClass(DrawKickerLocal, [{
      key: 'draw',
      value: function draw(gl, glem, glContext, mesh, materials, camera, lights, scene, vertices, vaoDic, vboDic, iboArrayDic, geometry, geometryName, primitiveType, vertexN, renderPassIndex) {
        var isVAOBound = false;
        if (DrawKickerLocal._lastGeometry !== geometryName) {
          isVAOBound = glem.bindVertexArray(gl, vaoDic[geometryName]);
        }

        for (var i = 0; i < materials.length; i++) {
          var material = materials[i];
          var materialUpdateStateString = material.getUpdateStateString();
          if (materialUpdateStateString !== DrawKickerLocal._lastMaterialUpdateStateString) {
            this._glslProgram = material.shaderInstance.glslProgram;
            gl.useProgram(this._glslProgram);
          }
          var glslProgram = this._glslProgram;

          if (!isVAOBound) {
            if (DrawKickerLocal._lastGeometry !== geometryName) {
              for (var attribName in vboDic) {
                gl.bindBuffer(gl.ARRAY_BUFFER, vboDic[attribName]);
                geometry.setUpVertexAttribs(gl, glslProgram, Geometry._allVertexAttribs(vertices));
              }
            }
          }

          var opacity = mesh.opacityAccumulatedAncestry * scene.opacity;
          gl.uniform1f(glslProgram.opacity, opacity);

          if (camera) {
            var viewMatrix = camera.lookAtRHMatrix();
            var projectionMatrix = camera.projectionRHMatrix();
            var world_m = mesh.transformMatrixAccumulatedAncestry;
            var pvm_m = projectionMatrix.multiply(viewMatrix).multiply(camera.inverseTransformMatrixAccumulatedAncestryWithoutMySelf).multiply(world_m);
            Shader.trySettingMatrix44ToUniform(gl, glslProgram, glslProgram._semanticsDic, 'MODELVIEW', Matrix44.multiply(viewMatrix, world_m.flatten()));
            Shader.trySettingMatrix44ToUniform(gl, glslProgram, glslProgram._semanticsDic, 'MODELVIEWPROJECTION', pvm_m.flatten());
          }

          if (material['uniform_lightPosition_0']) {
            lights = material.shaderInstance.getDefaultPointLightIfNotExist(lights);
            if (material['uniform_viewPosition']) {
              var cameraPosInLocalCoord = null;
              if (camera) {
                var cameraPos = camera.transformMatrixAccumulatedAncestryWithoutMySelf.multiplyVector(new Vector4(camera.eyeInner.x, camera.eyeInner.y, camera.eyeInner.z, 1.0));
                cameraPosInLocalCoord = mesh.inverseTransformMatrixAccumulatedAncestry.multiplyVector(new Vector4(cameraPos.x, cameraPos.y, cameraPos.z, 1));
              } else {
                cameraPosInLocalCoord = mesh.inverseTransformMatrixAccumulatedAncestry.multiplyVector(new Vector4(0, 0, 1, 1));
              }
              gl.uniform3f(material['uniform_viewPosition'], cameraPosInLocalCoord.x, cameraPosInLocalCoord.y, cameraPosInLocalCoord.z);
            }

            for (var j = 0; j < lights.length; j++) {
              if (material['uniform_lightPosition_' + j] && material['uniform_lightDiffuse_' + j]) {
                var lightVec = null;
                var isPointLight = -9999;
                if (lights[j] instanceof M_PointLight) {
                  lightVec = new Vector4(0, 0, 0, 1);
                  lightVec = lights[j].transformMatrixAccumulatedAncestry.multiplyVector(lightVec);
                  isPointLight = 1.0;
                } else if (lights[j] instanceof M_DirectionalLight) {
                  lightVec = new Vector4(-lights[j].direction.x, -lights[j].direction.y, -lights[j].direction.z, 1);
                  lightVec = lights[j].rotateMatrixAccumulatedAncestry.multiplyVector(lightVec);
                  lightVec.w = 0.0;
                  isPointLight = 0.0;
                }

                var lightVecInLocalCoord = mesh.inverseTransformMatrixAccumulatedAncestry.multiplyVector(lightVec);
                gl.uniform4f(material['uniform_lightPosition_' + j], lightVecInLocalCoord.x, lightVecInLocalCoord.y, lightVecInLocalCoord.z, isPointLight);

                gl.uniform4f(material['uniform_lightDiffuse_' + j], lights[j].intensity.x, lights[j].intensity.y, lights[j].intensity.z, 1.0);
              }
            }
          }

          var isMaterialSetupDone = true;

          if (material.shaderInstance.dirty || materialUpdateStateString !== DrawKickerLocal._lastMaterialUpdateStateString) {
            var needTobeStillDirty = material.shaderInstance.setUniforms(gl, glslProgram, material, camera, mesh);
            material.shaderInstance.dirty = needTobeStillDirty ? true : false;
          }

          if (materialUpdateStateString !== DrawKickerLocal._lastMaterialUpdateStateString || DrawKickerLocal._lastRenderPassIndex !== renderPassIndex) {
            if (material) {
              isMaterialSetupDone = material.setUpTexture();
            }
          }
          if (!isMaterialSetupDone) {
            return;
          }

          if (iboArrayDic[geometryName].length > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboArrayDic[geometryName][i]);
            gl.drawElements(gl[primitiveType], material.getVertexN(geometry), glem.elementIndexBitSize(gl), 0);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          } else {
            gl.drawArrays(gl[primitiveType], 0, vertexN);
          }

          DrawKickerLocal._lastMaterialUpdateStateString = isMaterialSetupDone ? materialUpdateStateString : null;
        }

        //gl.bindBuffer(gl.ARRAY_BUFFER, null);

        DrawKickerLocal._lastGeometry = geometryName;
        DrawKickerLocal._lastRenderPassIndex = renderPassIndex;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton$2]) {
          this[singleton$2] = new DrawKickerLocal(singletonEnforcer$2);
        }
        return this[singleton$2];
      }
    }]);
    return DrawKickerLocal;
  }();

  DrawKickerLocal._lastMaterialUpdateStateString = null;
  DrawKickerLocal._lastGeometry = null;
  DrawKickerLocal._lastRenderPassIndex = -1;

  var VertexWorldShaderSource = function () {
    function VertexWorldShaderSource() {
      babelHelpers.classCallCheck(this, VertexWorldShaderSource);
    }

    babelHelpers.createClass(VertexWorldShaderSource, [{
      key: 'VSDefine_VertexWorldShaderSource',
      value: function VSDefine_VertexWorldShaderSource(in_, out_, f, lights, material, extraData) {
        var shaderText = in_ + ' vec3 aVertex_position;\n';

        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += in_ + ' vec3 aVertex_normal;\n';
          shaderText += out_ + ' vec3 v_normal;\n';
        }
        shaderText += out_ + ' vec4 position;\n';

        shaderText += 'uniform mat4 worldMatrix;\n';
        shaderText += 'uniform mat4 viewMatrix;\n';
        shaderText += 'uniform mat4 projectionMatrix;\n';
        shaderText += 'uniform mat3 normalMatrix;\n';
        return shaderText;
      }
    }, {
      key: 'VSTransform_VertexWorldShaderSource',
      value: function VSTransform_VertexWorldShaderSource(existCamera_f, f, lights, material, extraData) {
        var shaderText = '';
        if (existCamera_f) {
          shaderText += '  mat4 pvwMatrix = projectionMatrix * viewMatrix * worldMatrix;\n';
          shaderText += '  gl_Position = pvwMatrix * vec4(aVertex_position, 1.0);\n';
        } else {
          shaderText += '  gl_Position = worldMatrix * vec4(aVertex_position, 1.0);\n';
        }
        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += '  v_normal = normalMatrix * aVertex_normal;\n';
        }
        shaderText += '  position = worldMatrix * vec4(aVertex_position, 1.0);\n';

        return shaderText;
      }
    }, {
      key: 'FSDefine_VertexWorldShaderSource',
      value: function FSDefine_VertexWorldShaderSource(in_, f, lights, material, extraData) {
        var shaderText = '';

        if (lights.length > 0) {
          shaderText += 'uniform vec4 lightPosition[' + lights.length + '];\n';
          shaderText += 'uniform vec4 lightDiffuse[' + lights.length + '];\n';
        }

        if (Shader._exist(f, GLBoost.NORMAL)) {
          shaderText += in_ + ' vec3 v_normal;\n';
        }
        shaderText += in_ + ' vec4 position;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_VertexWorldShaderSource',
      value: function FSShade_VertexWorldShaderSource(f, gl, lights) {
        var shaderText = '';
        return shaderText;
      }
    }, {
      key: 'prepare_VertexWorldShaderSource',
      value: function prepare_VertexWorldShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];

        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.POSITION || attribName === GLBoost.NORMAL) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        material.uniform_worldMatrix = gl.getUniformLocation(shaderProgram, 'worldMatrix');
        material._semanticsDic['WORLD'] = 'worldMatrix';
        material.uniform_normalMatrix = gl.getUniformLocation(shaderProgram, 'normalMatrix');
        material._semanticsDic['MODELVIEWINVERSETRANSPOSE'] = 'normalMatrix';
        if (existCamera_f) {
          material.uniform_viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
          material._semanticsDic['VIEW'] = 'viewMatrix';
          material.uniform_projectionMatrix = gl.getUniformLocation(shaderProgram, 'projectionMatrix');
          material._semanticsDic['PROJECTION'] = 'projectionMatrix';
        }

        for (var i = 0; i < lights.length; i++) {
          material['uniform_lightPosition_' + i] = gl.getUniformLocation(shaderProgram, 'lightPosition[' + i + ']');
          material['uniform_lightDiffuse_' + i] = gl.getUniformLocation(shaderProgram, 'lightDiffuse[' + i + ']');
        }

        return vertexAttribsAsResult;
      }
    }]);
    return VertexWorldShaderSource;
  }();

  GLBoost['VertexWorldShaderSource'] = VertexWorldShaderSource;

  var singleton$3 = Symbol();
  var singletonEnforcer$3 = Symbol();

  var DrawKickerWorld = function () {
    function DrawKickerWorld(enforcer) {
      babelHelpers.classCallCheck(this, DrawKickerWorld);

      if (enforcer !== singletonEnforcer$3) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }
      this._glslProgram = null;
    }

    babelHelpers.createClass(DrawKickerWorld, [{
      key: 'draw',
      value: function draw(gl, glem, glContext, mesh, materials, camera, lights, scene, vertices, vaoDic, vboDic, iboArrayDic, geometry, geometryName, primitiveType, vertexN, renderPassIndex) {
        var _this = this;

        var isVAOBound = false;
        if (DrawKickerWorld._lastGeometry !== geometryName) {
          isVAOBound = glem.bindVertexArray(gl, vaoDic[geometryName]);
        }

        var _loop = function _loop(i) {
          var material = materials[i];
          var materialUpdateStateString = material.getUpdateStateString();
          if (materialUpdateStateString !== DrawKickerWorld._lastMaterialUpdateStateString) {
            _this._glslProgram = material.shaderInstance.glslProgram;
            gl.useProgram(_this._glslProgram);
          }
          var glslProgram = _this._glslProgram;

          if (!isVAOBound) {
            if (DrawKickerWorld._lastGeometry !== geometryName) {
              for (var attribName in vboDic) {
                gl.bindBuffer(gl.ARRAY_BUFFER, vboDic[attribName]);
                geometry.setUpVertexAttribs(gl, glslProgram, Geometry._allVertexAttribs(vertices));
              }
            }
          }

          var opacity = mesh.opacityAccumulatedAncestry * scene.opacity;
          gl.uniform1f(glslProgram.opacity, opacity);

          var world_m = mesh.transformMatrixAccumulatedAncestry;
          Shader.trySettingMatrix44ToUniform(gl, material, material._semanticsDic, 'WORLD', world_m.flatten());
          var normal_m = mesh.normalMatrixAccumulatedAncestry;
          Shader.trySettingMatrix33ToUniform(gl, material, material._semanticsDic, 'MODELVIEWINVERSETRANSPOSE', normal_m.flatten());
          if (camera) {
            var cameraMatrix = camera.lookAtRHMatrix();
            var viewMatrix = cameraMatrix.multiply(camera.inverseTransformMatrixAccumulatedAncestryWithoutMySelf);
            var projectionMatrix = camera.projectionRHMatrix();
            Shader.trySettingMatrix44ToUniform(gl, material, material._semanticsDic, 'VIEW', viewMatrix.flatten());
            Shader.trySettingMatrix44ToUniform(gl, material, material._semanticsDic, 'PROJECTION', projectionMatrix.flatten());
            Shader.trySettingMatrix44ToUniform(gl, material, material._semanticsDic, 'MODELVIEW', Matrix44$1.multiply(viewMatrix, world_m).flatten());
          }

          if (material['uniform_lightPosition_0']) {
            lights = material.shaderInstance.getDefaultPointLightIfNotExist(lights);
            if (material['uniform_viewPosition']) {
              var cameraPos = new Vector4(0, 0, 0, 1);
              if (camera) {
                cameraPos = camera.transformMatrixAccumulatedAncestryWithoutMySelf.multiplyVector(new Vector4(camera.eyeInner.x, camera.eyeInner.y, camera.eyeInner.z, 1.0));
                //  console.log(cameraPos);
              } else {
                var _cameraPos = new Vector4(0, 0, 1, 1);
              }
              gl.uniform3f(material['uniform_viewPosition'], cameraPos.x, cameraPos.y, cameraPos.z);
            }

            for (var j = 0; j < lights.length; j++) {
              if (material['uniform_lightPosition_' + j] && material['uniform_lightDiffuse_' + j]) {
                var lightVec = null;
                var isPointLight = -9999;
                if (lights[j] instanceof M_PointLight) {
                  lightVec = new Vector4(0, 0, 0, 1);
                  lightVec = lights[j].transformMatrixAccumulatedAncestry.multiplyVector(lightVec);
                  isPointLight = 1.0;
                } else if (lights[j] instanceof M_DirectionalLight) {
                  lightVec = new Vector4(-lights[j].direction.x, -lights[j].direction.y, -lights[j].direction.z, 1);
                  lightVec = lights[j].rotateMatrixAccumulatedAncestry.multiplyVector(lightVec);
                  lightVec.w = 0.0;
                  isPointLight = 0.0;
                }

                gl.uniform4f(material['uniform_lightPosition_' + j], lightVec.x, lightVec.y, lightVec.z, isPointLight);
                gl.uniform4f(material['uniform_lightDiffuse_' + j], lights[j].intensity.x, lights[j].intensity.y, lights[j].intensity.z, 1.0);
              }
            }
          }

          var isMaterialSetupDone = true;

          if (material.shaderInstance.dirty || materialUpdateStateString !== DrawKickerWorld._lastMaterialUpdateStateString) {
            needTobeStillDirty = material.shaderInstance.setUniforms(gl, glslProgram, material, camera, mesh, lights);

            material.shaderInstance.dirty = needTobeStillDirty ? true : false;
          }

          if (materialUpdateStateString !== DrawKickerWorld._lastMaterialUpdateStateString || DrawKickerWorld._lastRenderPassIndex !== renderPassIndex) {
            if (material) {
              material.setUpStates();
              isMaterialSetupDone = true;
              if (typeof material._semanticsDic['TEXTURE'] === 'undefined') {
                // do nothing
              } else if (typeof material._semanticsDic['TEXTURE'] === 'string') {
                var textureSamplerDic = material.uniformTextureSamplerDic[material._semanticsDic['TEXTURE']];
                var textureName = textureSamplerDic.textureName;
                var textureUnitIndex = textureSamplerDic.textureUnitIndex;
                isMaterialSetupDone = material.setUpTexture(textureName, textureUnitIndex);
              } else {
                // it must be an Array...
                material._semanticsDic['TEXTURE'].forEach(function (uniformName) {
                  var textureSamplerDic = material.uniformTextureSamplerDic[uniformName];
                  var textureName = textureSamplerDic.textureName;
                  var textureUnitIndex = textureSamplerDic.textureUnitIndex;
                  isMaterialSetupDone = material.setUpTexture(textureName, textureUnitIndex);
                });
              }
            }
          }

          if (!isMaterialSetupDone) {
            return {
              v: void 0
            };
          }

          _this._setupOtherTextures(lights);

          if (iboArrayDic[geometryName].length > 0) {
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboArrayDic[geometryName][i]);
            gl.drawElements(gl[primitiveType], material.getVertexN(geometry), glem.elementIndexBitSize(gl), 0);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
          } else {
            gl.drawArrays(gl[primitiveType], 0, vertexN);
          }

          _this._tearDownOtherTextures(lights);

          material.tearDownStates();

          DrawKickerWorld._lastMaterialUpdateStateString = isMaterialSetupDone ? materialUpdateStateString : null;
        };

        for (var i = 0; i < materials.length; i++) {
          var needTobeStillDirty;

          var _ret = _loop(i);

          if ((typeof _ret === 'undefined' ? 'undefined' : babelHelpers.typeof(_ret)) === "object") return _ret.v;
        }

        //  gl.bindBuffer(gl.ARRAY_BUFFER, null);

        DrawKickerWorld._lastRenderPassIndex = renderPassIndex;
        DrawKickerWorld._lastGeometry = geometryName;
      }
    }, {
      key: '_setupOtherTextures',
      value: function _setupOtherTextures(lights) {
        for (var i = 0; i < lights.length; i++) {
          if (lights[i].camera && lights[i].camera.texture) {
            lights[i].camera.texture.setUp();
          }
        }
      }
    }, {
      key: '_tearDownOtherTextures',
      value: function _tearDownOtherTextures(lights) {
        for (var i = 0; i < lights.length; i++) {
          if (lights[i].camera && lights[i].camera.texture) {
            lights[i].camera.texture.tearDown();
          }
        }
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton$3]) {
          this[singleton$3] = new DrawKickerWorld(singletonEnforcer$3);
        }
        return this[singleton$3];
      }
    }]);
    return DrawKickerWorld;
  }();

  DrawKickerWorld._lastMaterialUpdateStateString = null;
  DrawKickerWorld._lastGeometry = null;
  DrawKickerWorld._lastRenderPassIndex = -1;

  var AABB = function () {
    function AABB() {
      babelHelpers.classCallCheck(this, AABB);

      this._AABB_min = new Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      this._AABB_max = new Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      this._centerPoint = null;
      this._lengthCenterToCorner = null;
    }

    babelHelpers.createClass(AABB, [{
      key: 'clone',
      value: function clone() {
        var instance = new AABB();
        instance._AABB_max = this._AABB_max.clone();
        instance._AABB_min = this._AABB_min.clone();
        instance._centerPoint = this._centerPoint !== null ? this._centerPoint.clone() : null;
        instance._lengthCenterToCorner = this._lengthCenterToCorner;

        return instance;
      }
    }, {
      key: 'isVanilla',
      value: function isVanilla() {
        if (this._AABB_min.x == Number.MAX_VALUE && this._AABB_min.y == Number.MAX_VALUE && this._AABB_min.z == Number.MAX_VALUE && this._AABB_max.x == -Number.MAX_VALUE && this._AABB_max.y == -Number.MAX_VALUE && this._AABB_max.z == -Number.MAX_VALUE) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      key: 'addPosition',
      value: function addPosition(positionVector) {
        this._AABB_min.x = positionVector.x < this._AABB_min.x ? positionVector.x : this._AABB_min.x;
        this._AABB_min.y = positionVector.y < this._AABB_min.y ? positionVector.y : this._AABB_min.y;
        this._AABB_min.z = positionVector.z < this._AABB_min.z ? positionVector.z : this._AABB_min.z;
        this._AABB_max.x = this._AABB_max.x < positionVector.x ? positionVector.x : this._AABB_max.x;
        this._AABB_max.y = this._AABB_max.y < positionVector.y ? positionVector.y : this._AABB_max.y;
        this._AABB_max.z = this._AABB_max.z < positionVector.z ? positionVector.z : this._AABB_max.z;

        return positionVector;
      }
    }, {
      key: 'addPositionWithArray',
      value: function addPositionWithArray(array, index) {
        this._AABB_min.x = array[index + 0] < this._AABB_min.x ? array[index + 0] : this._AABB_min.x;
        this._AABB_min.y = array[index + 1] < this._AABB_min.y ? array[index + 1] : this._AABB_min.y;
        this._AABB_min.z = array[index + 2] < this._AABB_min.z ? array[index + 2] : this._AABB_min.z;
        this._AABB_max.x = this._AABB_max.x < array[index + 0] ? array[index + 0] : this._AABB_max.x;
        this._AABB_max.y = this._AABB_max.y < array[index + 1] ? array[index + 1] : this._AABB_max.y;
        this._AABB_max.z = this._AABB_max.z < array[index + 2] ? array[index + 2] : this._AABB_max.z;

        return array;
      }
    }, {
      key: 'updateAllInfo',
      value: function updateAllInfo() {
        this._centerPoint = Vector3.add(this._AABB_min, this._AABB_max).divide(2);
        this._lengthCenterToCorner = Vector3.lengthBtw(this._centerPoint, this._AABB_max);
      }
    }, {
      key: 'mergeAABB',
      value: function mergeAABB(aabb) {
        var isUpdated = false;

        if (aabb.isVanilla()) {
          return isUpdated;
        }

        if (this.isVanilla()) {
          this._AABB_min.x = aabb.minPoint.x;
          this._AABB_min.y = aabb.minPoint.y;
          this._AABB_min.z = aabb.minPoint.z;
          this._AABB_max.x = aabb.maxPoint.x;
          this._AABB_max.y = aabb.maxPoint.y;
          this._AABB_max.z = aabb.maxPoint.z;
          isUpdated = true;
          return isUpdated;
        }

        if (aabb.minPoint.x < this._AABB_min.x) {
          this._AABB_min.x = aabb.minPoint.x;
          isUpdated = true;
        }
        if (aabb.minPoint.y < this._AABB_min.y) {
          this._AABB_min.y = aabb.minPoint.y;
          isUpdated = true;
        }
        if (aabb.minPoint.z < this._AABB_min.z) {
          this._AABB_min.z = aabb.minPoint.z;
          isUpdated = true;
        }
        if (this._AABB_max.x < aabb.maxPoint.x) {
          this._AABB_max.x = aabb.maxPoint.x;
          isUpdated = true;
        }
        if (this._AABB_max.y < aabb.maxPoint.y) {
          this._AABB_max.y = aabb.maxPoint.y;
          isUpdated = true;
        }
        if (this._AABB_max.z < aabb.maxPoint.z) {
          this._AABB_max.z = aabb.maxPoint.z;
          isUpdated = true;
        }
        this.updateAllInfo();

        return isUpdated;
      }
    }, {
      key: 'toString',
      value: function toString() {
        return 'AABB_min: ' + this._AABB_min + '\n' + 'AABB_max: ' + this._AABB_max + '\n' + 'centerPoint: ' + this._centerPoint + '\n' + 'lengthCenterToCorner: ' + this._lengthCenterToCorner;
      }
    }, {
      key: 'minPoint',
      get: function get() {
        return this._AABB_min;
      }
    }, {
      key: 'maxPoint',
      get: function get() {
        return this._AABB_max;
      }
    }, {
      key: 'centerPoint',
      get: function get() {
        return this._centerPoint;
      }
    }, {
      key: 'lengthCenterToCorner',
      get: function get() {
        return this._lengthCenterToCorner;
      }
    }], [{
      key: 'multiplyMatrix',
      value: function multiplyMatrix(matrix, aabb) {
        if (aabb.isVanilla()) {
          return aabb.clone();
        }
        var newAabb = new AABB();

        var AABB_0 = new Vector4(aabb._AABB_min.x, aabb._AABB_min.y, aabb._AABB_min.z, 1);
        var AABB_1 = new Vector4(aabb._AABB_max.x, aabb._AABB_min.y, aabb._AABB_min.z, 1);
        var AABB_2 = new Vector4(aabb._AABB_min.x, aabb._AABB_max.y, aabb._AABB_min.z, 1);
        var AABB_3 = new Vector4(aabb._AABB_min.x, aabb._AABB_min.y, aabb._AABB_max.z, 1);
        var AABB_4 = new Vector4(aabb._AABB_min.x, aabb._AABB_max.y, aabb._AABB_max.z, 1);
        var AABB_5 = new Vector4(aabb._AABB_max.x, aabb._AABB_min.y, aabb._AABB_max.z, 1);
        var AABB_6 = new Vector4(aabb._AABB_max.x, aabb._AABB_max.y, aabb._AABB_min.z, 1);
        var AABB_7 = new Vector4(aabb._AABB_max.x, aabb._AABB_max.y, aabb._AABB_max.z, 1);
        newAabb.addPosition(matrix.multiplyVector(AABB_0).toVector3());
        newAabb.addPosition(matrix.multiplyVector(AABB_1).toVector3());
        newAabb.addPosition(matrix.multiplyVector(AABB_2).toVector3());
        newAabb.addPosition(matrix.multiplyVector(AABB_3).toVector3());
        newAabb.addPosition(matrix.multiplyVector(AABB_4).toVector3());
        newAabb.addPosition(matrix.multiplyVector(AABB_5).toVector3());
        newAabb.addPosition(matrix.multiplyVector(AABB_6).toVector3());
        newAabb.addPosition(matrix.multiplyVector(AABB_7).toVector3());
        newAabb.updateAllInfo();

        return newAabb;
      }
    }]);
    return AABB;
  }();

  GLBoost$1['AABB'] = AABB;

  var Geometry = function (_GLBoostObject) {
    babelHelpers.inherits(Geometry, _GLBoostObject);

    function Geometry(glBoostContext) {
      babelHelpers.classCallCheck(this, Geometry);

      var _this = babelHelpers.possibleConstructorReturn(this, (Geometry.__proto__ || Object.getPrototypeOf(Geometry)).call(this, glBoostContext));

      _this._materials = [];
      _this._vertexN = 0;
      _this._vertices = null;
      _this._indicesArray = null;
      _this._performanceHint = null;
      _this._defaultMaterial = glBoostContext.createClassicMaterial();
      _this._vertexData = [];
      _this._extraDataForShader = {};
      _this._vboObj = {};
      _this._AABB = new AABB();
      _this._drawKicker = DrawKickerWorld.getInstance();

      if (_this._drawKicker instanceof DrawKickerWorld) {} else if (_this._drawKicker instanceof DrawKickerLocal) {}
      return _this;
    }

    /**
     * 全ての頂点属性のリストを返す
     */


    babelHelpers.createClass(Geometry, [{
      key: '_checkAndSetVertexComponentNumber',
      value: function _checkAndSetVertexComponentNumber(allVertexAttribs) {
        var _this2 = this;

        allVertexAttribs.forEach(function (attribName) {
          var element = _this2._vertices[attribName][0];
          var componentN = MathUtil.compomentNumberOfVector(element);
          if (componentN === 0) {
            // if 0, it must be a number. so users must set components info.
            return;
          }
          if (typeof _this2._vertices.components === 'undefined') {
            _this2._vertices.components = {};
          }
          if (typeof _this2._vertices.componentType === 'undefined') {
            _this2._vertices.componentType = {};
          }

          _this2._vertices.components[attribName] = componentN;
          _this2._vertices.componentType[attribName] = 5126;
        });
      }
    }, {
      key: 'setVerticesData',
      value: function setVerticesData(vertices, indicesArray) {
        var _this3 = this;

        var primitiveType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : GLBoost$1.TRIANGLES;
        var performanceHint = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : GLBoost$1.STATIC_DRAW;

        this._vertices = vertices;

        var allVertexAttribs = Geometry._allVertexAttribs(this._vertices);

        this._checkAndSetVertexComponentNumber(allVertexAttribs);

        if (typeof this._vertices.position.buffer !== 'undefined') {
          // position (and maybe others) are a TypedArray
          var componentN = this._vertices.components.position;
          var vertexNum = this._vertices.position.length / componentN;
          for (var i = 0; i < vertexNum; i++) {
            this._AABB.addPositionWithArray(this._vertices.position, i * componentN);
          }
        } else {
          allVertexAttribs.forEach(function (attribName) {
            var vertexAttribArray = [];
            _this3._vertices[attribName].forEach(function (elem, index) {
              var element = _this3._vertices[attribName][index];
              Array.prototype.push.apply(vertexAttribArray, MathUtil.vectorToArray(element));
              if (attribName === 'position') {
                var _componentN = _this3._vertices.components[attribName];
                _this3._AABB.addPositionWithArray(vertexAttribArray, index * _componentN);
              }
            });
            _this3._vertices[attribName] = vertexAttribArray;
          });
        }

        this._AABB.updateAllInfo();

        this._indicesArray = indicesArray;
        this._primitiveType = primitiveType;

        var gl = this._glContext.gl;
        var hint = null;
        switch (performanceHint) {
          case GLBoost$1.STATIC_DRAW:
            hint = gl.STATIC_DRAW;
            break;
          case GLBoost$1.STREAM_DRAW:
            hint = gl.STREAM_DRAW;
            break;
          case GLBoost$1.DYNAMIC_DRAW:
            hint = gl.DYNAMIC_DRAW;
            break;
        }
        this._performanceHint = hint;
      }
    }, {
      key: 'updateVerticesData',
      value: function updateVerticesData(vertices) {
        var _this4 = this;

        var gl = this._glContext.gl;

        var _loop = function _loop(attribName) {
          var vertexAttribArray = [];
          _this4._vertices[attribName].forEach(function (elem, index) {
            var element = vertices[attribName][index];
            Array.prototype.push.apply(vertexAttribArray, MathUtil.vectorToArray(element));

            if (attribName === 'position') {
              var componentN = _this4._vertices.components[attribName];
              _this4._AABB.addPositionWithArray(vertexAttribArray, index * componentN);
            }
            _this4._vertices[attribName] = vertexAttribArray;
          });
        };

        for (var attribName in vertices) {
          _loop(attribName);
        }

        this._AABB.updateAllInfo();

        for (var _attribName in vertices) {
          var float32AryVertexData = new Float32Array(this._vertices[_attribName]);
          gl.bindBuffer(gl.ARRAY_BUFFER, this._vboObj[_attribName]);
          gl.bufferSubData(gl.ARRAY_BUFFER, 0, float32AryVertexData);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
        }
      }
    }, {
      key: 'setUpVertexAttribs',
      value: function setUpVertexAttribs(gl, glslProgram, allVertexAttribs) {
        var _this5 = this;

        var optimizedVertexAttribs = glslProgram.optimizedVertexAttribs;

        // 頂点レイアウト設定
        allVertexAttribs.forEach(function (attribName) {
          if (optimizedVertexAttribs.indexOf(attribName) != -1) {
            var vertexAttribName = null;
            gl.bindBuffer(gl.ARRAY_BUFFER, _this5._vboObj[attribName]);
            gl.vertexAttribPointer(glslProgram['vertexAttribute_' + attribName], _this5._vertices.components[attribName], _this5._vertices.componentType[attribName], gl.FALSE, 0, 0);
          }
        });
      }
    }, {
      key: 'prepareGLSLProgramAndSetVertexNtoMaterial',
      value: function prepareGLSLProgramAndSetVertexNtoMaterial(material, index, existCamera_f, lights) {
        var doSetupVertexAttribs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

        var gl = this._glContext.gl;
        var vertices = this._vertices;

        var glem = GLExtensionsManager.getInstance(this._glContext);
        var _optimizedVertexAttribs = Geometry._allVertexAttribs(vertices, material);

        if (doSetupVertexAttribs) {
          glem.bindVertexArray(gl, Geometry._vaoDic[this.toString()]);
        }

        var allVertexAttribs = Geometry._allVertexAttribs(vertices);

        if (material.shaderInstance === null) {
          var shaderClass = material.shaderClass;

          var basicShaderSource = null;
          if (this._drawKicker instanceof DrawKickerWorld) {
            basicShaderSource = VertexWorldShaderSource;
          } else if (this._drawKicker instanceof DrawKickerLocal) {
            basicShaderSource = VertexLocalShaderSource;
          }

          material.shaderInstance = new shaderClass(this._glBoostContext, basicShaderSource);
        }
        var glslProgram = material.shaderInstance.getShaderProgram(_optimizedVertexAttribs, existCamera_f, lights, material, this._extraDataForShader);
        if (doSetupVertexAttribs) {
          this.setUpVertexAttribs(gl, glslProgram, allVertexAttribs);
        }

        if (doSetupVertexAttribs) {
          glem.bindVertexArray(gl, null);
        }
        this._setVertexNtoSingleMaterial(material, index);

        return material;
      }
    }, {
      key: '_setVertexNtoSingleMaterial',
      value: function _setVertexNtoSingleMaterial(material, index) {
        // if this mesh has only one material...
        if (material.getVertexN(this) === 0) {
          if (this._indicesArray && this._indicesArray.length > 0) {
            material.setVertexN(this, this._indicesArray[index].length);
          } else {
            material.setVertexN(this, this._vertexN);
          }
        }
      }
    }, {
      key: '_getAppropriateMaterials',
      value: function _getAppropriateMaterials(mesh) {
        var materials = null;
        if (this._materials.length > 0) {
          materials = this._materials;
        } else if (mesh.material) {
          materials = [mesh.material];
        } else {
          materials = [this._defaultMaterial];
        }
        return materials;
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, lights, meshMaterial, mesh) {
        var _this6 = this;

        var vertices = this._vertices;
        var gl = this._glContext.gl;

        var glem = GLExtensionsManager.getInstance(this._glContext);

        this._vertexN = vertices.position.length / vertices.components.position;

        var allVertexAttribs = Geometry._allVertexAttribs(vertices);

        // create VAO
        if (Geometry._vaoDic[this.toString()]) {} else {
          var vao = this._glContext.createVertexArray(this);
          Geometry._vaoDic[this.toString()] = vao;
        }
        glem.bindVertexArray(gl, Geometry._vaoDic[this.toString()]);

        var doAfter = true;

        allVertexAttribs.forEach(function (attribName) {
          // create VBO
          if (_this6._vboObj[attribName]) {
            doAfter = false;
          } else {
            var vbo = _this6._glContext.createBuffer(_this6);
            _this6._vboObj[attribName] = vbo;
          }
        });

        var materials = this._getAppropriateMaterials(mesh);

        for (var i = 0; i < materials.length; i++) {
          this.prepareGLSLProgramAndSetVertexNtoMaterial(materials[i], i, existCamera_f, lights, doAfter);
        }

        if (doAfter) {

          allVertexAttribs.forEach(function (attribName) {
            gl.bindBuffer(gl.ARRAY_BUFFER, _this6._vboObj[attribName]);
            if (typeof _this6._vertices[attribName].buffer !== 'undefined') {
              gl.bufferData(gl.ARRAY_BUFFER, _this6._vertices[attribName], _this6._performanceHint);
            } else {
              gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(_this6._vertices[attribName]), _this6._performanceHint);
            }
            //gl.bindBuffer(gl.ARRAY_BUFFER, null);
          });

          Geometry._iboArrayDic[this.toString()] = [];
          if (this._indicesArray) {
            // create Index Buffer
            for (var _i = 0; _i < this._indicesArray.length; _i++) {
              var ibo = this._glContext.createBuffer(this);
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
              gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, glem.createUintArrayForElementIndex(gl, this._indicesArray[_i]), gl.STATIC_DRAW);
              gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
              Geometry._iboArrayDic[this.toString()][_i] = ibo;
              this._defaultMaterial.setVertexN(this._indicesArray[_i].length);
            }
          }
          glem.bindVertexArray(gl, null);
        }
        return true;
      }
    }, {
      key: 'draw',
      value: function draw(lights, camera, mesh, scene, renderPassIndex) {
        var gl = this._glContext.gl;
        var glem = GLExtensionsManager.getInstance(this._glContext);

        var materials = this._getAppropriateMaterials(mesh);

        var thisName = this.toString();

        this._drawKicker.draw(gl, glem, this._glContext, mesh, materials, camera, lights, scene, this._vertices, Geometry._vaoDic, this._vboObj, Geometry._iboArrayDic, this, thisName, this._primitiveType, this._vertexN, renderPassIndex);
      }
    }, {
      key: 'merge',
      value: function merge(geometrys) {
        var _this7 = this;

        if (Array.isArray(geometrys)) {
          (function () {
            var typedArrayDic = {};
            var allVertexAttribs = Geometry._allVertexAttribs(_this7._vertices);
            allVertexAttribs.forEach(function (attribName) {
              var thisLength = _this7._vertices[attribName].length;

              var allGeomLength = 0;
              geometrys.forEach(function (geometry) {
                allGeomLength += geometry._vertices[attribName].length;
              });
              typedArrayDic[attribName] = new Float32Array(thisLength + allGeomLength);
            });

            var lastThisLengthDic = {};
            allVertexAttribs.forEach(function (attribName) {
              lastThisLengthDic[attribName] = 0;
            });
            geometrys.forEach(function (geometry, index) {
              var typedSubArrayDic = {};
              allVertexAttribs.forEach(function (attribName) {
                var typedArray = typedArrayDic[attribName];

                if (index === 0) {
                  lastThisLengthDic[attribName] = geometrys[index]._vertices[attribName].length;
                }

                var end = typeof geometrys[index + 1] !== 'undefined' ? lastThisLengthDic[attribName] + geometrys[index + 1]._vertices[attribName].length : void 0;
                typedSubArrayDic[attribName] = typedArray.subarray(0, end);
                lastThisLengthDic[attribName] = end;
              });
              _this7.mergeInner(geometry, typedSubArrayDic, index === 0);
            });
          })();
        } else {
          (function () {
            var geometry = geometrys;
            var typedArrayDic = {};
            var allVertexAttribs = Geometry._allVertexAttribs(_this7._vertices);
            allVertexAttribs.forEach(function (attribName) {
              var thisLength = _this7._vertices[attribName].length;
              var geomLength = geometry._vertices[attribName].length;

              typedArrayDic[attribName] = new Float32Array(thisLength + geomLength);
            });

            _this7.mergeInner(geometry, typedArrayDic);
          })();
        }
      }

      /**
       *
       * @param geometry
       */

    }, {
      key: 'mergeInner',
      value: function mergeInner(geometry, typedArrayDic) {
        var _this8 = this;

        var isFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var gl = this._glContext.gl;
        var baseLen = this._vertices.position.length / this._vertices.components.position;;

        if (this === geometry) {
          console.assert('don\'t merge same geometry!');
        }

        var allVertexAttribs = Geometry._allVertexAttribs(this._vertices);

        allVertexAttribs.forEach(function (attribName) {
          var thisLength = _this8._vertices[attribName].length;
          var geomLength = geometry._vertices[attribName].length;

          var float32array = typedArrayDic[attribName];

          if (isFirst) {
            float32array.set(_this8._vertices[attribName], 0);
          }
          float32array.set(geometry._vertices[attribName], thisLength);

          _this8._vertices[attribName] = float32array;

          if (typeof _this8._vboObj[attribName] !== 'undefined') {
            gl.bindBuffer(gl.ARRAY_BUFFER, _this8._vboObj[attribName]);
            gl.bufferData(gl.ARRAY_BUFFER, _this8._vertices[attribName], _this8._performanceHint);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
          }
        });

        var geometryIndicesN = geometry._indicesArray.length;
        for (var i = 0; i < geometryIndicesN; i++) {
          for (var j = 0; j < geometry._indicesArray[i].length; j++) {
            geometry._indicesArray[i][j] += baseLen;
          }
          this._indicesArray.push(geometry._indicesArray[i]);
          if (geometry._materials[i]) {
            this._materials.push(geometry._materials[i]);
          }
        }
        this._vertexN += geometry._vertexN;
      }
    }, {
      key: 'mergeHarder',
      value: function mergeHarder(geometrys) {
        var _this9 = this;

        if (Array.isArray(geometrys)) {
          (function () {
            var typedArrayDic = {};
            var allVertexAttribs = Geometry._allVertexAttribs(_this9._vertices);
            allVertexAttribs.forEach(function (attribName) {
              var thisLength = _this9._vertices[attribName].length;

              var allGeomLength = 0;
              geometrys.forEach(function (geometry) {
                allGeomLength += geometry._vertices[attribName].length;
              });
              typedArrayDic[attribName] = new Float32Array(thisLength + allGeomLength);
            });

            var lastThisLengthDic = {};
            allVertexAttribs.forEach(function (attribName) {
              lastThisLengthDic[attribName] = 0;
            });
            geometrys.forEach(function (geometry, index) {
              var typedSubArrayDic = {};
              allVertexAttribs.forEach(function (attribName) {
                var typedArray = typedArrayDic[attribName];

                if (index === 0) {
                  lastThisLengthDic[attribName] = geometrys[index]._vertices[attribName].length;
                }

                var end = typeof geometrys[index + 1] !== 'undefined' ? lastThisLengthDic[attribName] + geometrys[index + 1]._vertices[attribName].length : void 0;
                typedSubArrayDic[attribName] = typedArray.subarray(0, end);
                lastThisLengthDic[attribName] = end;
              });
              _this9.mergeHarderInner(geometry, typedSubArrayDic, index === 0);
            });
          })();
        } else {
          (function () {
            var geometry = geometrys;
            var typedArrayDic = {};
            var allVertexAttribs = Geometry._allVertexAttribs(_this9._vertices);
            allVertexAttribs.forEach(function (attribName) {
              var thisLength = _this9._vertices[attribName].length;
              var geomLength = geometry._vertices[attribName].length;

              typedArrayDic[attribName] = new Float32Array(thisLength + geomLength);
            });

            _this9.mergeHarderInner(geometry, typedArrayDic);
          })();
        }
      }

      /**
       * take no thought geometry's materials
       *
       * @param geometry
       */

    }, {
      key: 'mergeHarderInner',
      value: function mergeHarderInner(geometry, typedArrayDic) {
        var _this10 = this;

        var isFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var gl = this._glContext.gl;
        var baseLen = this._vertices.position.length / this._vertices.components.position;
        if (this === geometry) {
          console.assert('don\'t merge same geometry!');
        }

        var allVertexAttribs = Geometry._allVertexAttribs(this._vertices);

        allVertexAttribs.forEach(function (attribName) {
          var thisLength = _this10._vertices[attribName].length;
          var geomLength = geometry._vertices[attribName].length;

          var float32array = typedArrayDic[attribName];

          if (isFirst) {
            float32array.set(_this10._vertices[attribName], 0);
          }
          float32array.set(geometry._vertices[attribName], thisLength);

          _this10._vertices[attribName] = float32array;

          if (typeof _this10._vboObj[attribName] !== 'undefined') {
            gl.bindBuffer(gl.ARRAY_BUFFER, _this10._vboObj[attribName]);
            gl.bufferData(gl.ARRAY_BUFFER, _this10._vertices[attribName], _this10._performanceHint);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
          }
        });

        for (var i = 0; i < this._indicesArray.length; i++) {
          var len = geometry._indicesArray[i].length;
          for (var j = 0; j < len; j++) {
            var idx = geometry._indicesArray[i][j];
            this._indicesArray[i].push(baseLen + idx);
          }
          if (this._materials[i]) {
            this._materials[i].setVertexN(this, this._materials[i].getVertexN(geometry));
          }
        }
        this._vertexN += geometry._vertexN;
      }
    }, {
      key: 'setExtraDataForShader',
      value: function setExtraDataForShader(name, value) {
        this._extraDataForShader[name] = value;
      }
    }, {
      key: 'getExtraDataForShader',
      value: function getExtraDataForShader(name) {
        return this._extraDataForShader[name];
      }
    }, {
      key: 'isTransparent',
      value: function isTransparent(mesh) {
        var materials = this._getAppropriateMaterials(mesh);
        var isTransparent = false;
        materials.forEach(function (material) {
          if (material.isTransparent()) {
            isTransparent = true;
          }
        });
        return isTransparent;
      }
    }, {
      key: 'materials',
      set: function set(materials) {
        this._materials = materials;
      },
      get: function get() {
        return this._materials;
      }
    }, {
      key: 'centerPosition',
      get: function get() {
        return this._AABB.centerPoint;
      }
    }, {
      key: 'AABB',
      get: function get() {
        return this._AABB;
      }
    }], [{
      key: '_allVertexAttribs',
      value: function _allVertexAttribs(vertices) {
        var attribNameArray = [];
        for (var attribName in vertices) {
          if (attribName !== 'components' && attribName !== 'componentBytes' && attribName !== 'componentType') {
            attribNameArray.push(attribName);
          }
        }

        return attribNameArray;
      }
    }, {
      key: 'clearMaterialCache',
      value: function clearMaterialCache() {
        Geometry._lastMaterial = null;
      }
    }]);
    return Geometry;
  }(GLBoostObject);

  Geometry._vaoDic = {};
  Geometry._iboArrayDic = {};

  /**
   * en: This class take a role as operator of rendering process. In order to render images to canvas, this Renderer class gathers other elements' data, decides a plan of drawing process, and then just execute it.<br>
   * ja: このクラスはレンダリングプロセスの制御を司ります。Canvasにイメージをレンダリングするために、このRendererクラスは他の要素のデータを集め、描画プロセスの計画を決定し、実行します。
   */

  var Renderer = function (_GLBoostObject) {
    babelHelpers.inherits(Renderer, _GLBoostObject);

    function Renderer(glBoostContext, parameters) {
      babelHelpers.classCallCheck(this, Renderer);

      var _this = babelHelpers.possibleConstructorReturn(this, (Renderer.__proto__ || Object.getPrototypeOf(Renderer)).call(this, glBoostContext));

      var _clearColor = parameters.clearColor;

      var gl = _this._glContext.gl;

      Renderer.reflectGlobalGLState(gl);

      gl.clearColor(_clearColor.red, _clearColor.green, _clearColor.blue, _clearColor.alpha);

      return _this;
    }

    babelHelpers.createClass(Renderer, [{
      key: 'draw',


      /**
       * en: draw elements of the scene.<br>
       * ja: sceneが持つオブジェクトを描画します
       * @param {Scene} scene a instance of Scene class
       */
      value: function draw(expression) {
        var _this2 = this;

        expression.renderPasses.forEach(function (renderPass, index) {
          if (!renderPass.scene) {
            return;
          }

          var camera = false;
          renderPass.scene.cameras.forEach(function (elm) {
            if (elm.isMainCamera(renderPass.scene)) {
              camera = elm;
            }
          });

          var glContext = _this2._glContext;
          var gl = glContext.gl;
          var glem = GLExtensionsManager.getInstance(_this2._glContext);

          var lights = renderPass.scene.lights;

          if (renderPass.fbo) {
            gl.bindTexture(gl.TEXTURE_2D, null);
            Geometry.clearMaterialCache();
            gl.bindFramebuffer(gl.FRAMEBUFFER, renderPass.fbo);
          }
          glem.drawBuffers(gl, renderPass.buffersToDraw); // set render target buffers for each RenderPass.

          if (renderPass.renderTargetColorTextures || renderPass.renderTargetDepthTexture) {
            gl.viewport(renderPass.viewport.x, renderPass.viewport.y, renderPass.viewport.z, renderPass.viewport.w);
          } else {
            gl.viewport(0, 0, glContext.width, glContext.height);
          }

          _this2._clearBuffer(gl, renderPass);

          // draw opacity meshes.
          var opacityMeshes = renderPass.opacityMeshes;
          opacityMeshes.forEach(function (mesh) {
            mesh.draw(lights, camera, renderPass.scene, index);
          });

          if (camera) {
            renderPass.sortTransparentMeshes(camera);
          }
          // draw transparent meshes.
          var transparentMeshes = renderPass.transparentMeshes;
          transparentMeshes.forEach(function (mesh) {
            mesh.draw(lights, camera, renderPass.scene, index);
          });

          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
          //      glem.drawBuffers(gl, [gl.BACK]);
        });
      }
    }, {
      key: '_clearBuffer',
      value: function _clearBuffer(gl, renderPass) {
        var clearColor = renderPass.clearColor;
        var clearDepth = renderPass.clearDepth;
        if (clearColor) {
          gl.clearColor(clearColor.x, clearColor.y, clearColor.z, clearColor.w);
        }
        if (clearDepth) {
          gl.clearDepth(clearDepth);
        }
        if (clearColor || clearDepth) {
          gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        } else if (clearColor) {
          gl.clear(gl.COLOR_BUFFER_BIT);
        } else {
          gl.clear(gl.DEPTH_BUFFER_BIT);
        }
      }

      /**
       * en: clear color/depth/stencil of canvas.<br>
       * ja: canvasのカラー、デプス、ステンシルのいずれか又は全てをクリアします。
       * @param {boolean} color_flg true: clear color, false: don't clear color
       * @param {boolean} depth_flg true: clear depth, false: don't clear depth
       * @param {boolean} stencil_flg  true: clear stencil, false: don't clear stencil
       */

    }, {
      key: 'clearCanvas',
      value: function clearCanvas(color_flg, depth_flg, stencil_flg) {

        var gl = this._glContext.gl;

        var bufferBits = 0;

        if (color_flg === void 0 || color_flg) bufferBits |= gl.COLOR_BUFFER_BIT;
        if (depth_flg === void 0 || depth_flg) bufferBits |= gl.DEPTH_BUFFER_BIT;
        if (stencil_flg === void 0 || stencil_flg) bufferBits |= gl.STENCIL_BUFFER_BIT;

        gl.clear(bufferBits);
      }

      /**
       * en: Get WebGL context.<br>
       * ja: WebGLコンテキストを取得します。
       * @returns {webglcontext} a context of WebGL
       */

    }, {
      key: 'resize',


      /**
       * en: resize canvas and viewport.<br>
       * ja: canvasとビューポートをリサイズします。
       * @param {number} width en: width to resize, ja: リサイズする幅
       * @param {number} height en: height to resize, ja:リサイズする高さ
       */
      value: function resize(width, height) {
        this._glContext.width = width;
        this._glContext.height = height;

        this._glContext.gl.viewport(0, 0, width, height);
      }
    }, {
      key: 'glContext',
      get: function get() {
        return this._glContext.gl;
      }
    }], [{
      key: 'reflectGlobalGLState',
      value: function reflectGlobalGLState(gl) {

        gl.enable(gl.DEPTH_TEST);
        gl.depthFunc(gl.LEQUAL);

        gl.enable(gl.BLEND);
        gl.blendEquation(gl.FUNC_ADD);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        gl.clearDepth(1);
        gl.clearStencil(0);
      }
    }, {
      key: 'disableAllGLState',
      value: function disableAllGLState(gl) {
        var states = [3042, 2884, 2929, 32823, 32926];

        states.forEach(function (state) {
          gl.disable(state);
        });
      }
    }]);
    return Renderer;
  }(GLBoostObject);

  var FragmentSimpleShaderSource = function () {
    function FragmentSimpleShaderSource() {
      babelHelpers.classCallCheck(this, FragmentSimpleShaderSource);
    }

    babelHelpers.createClass(FragmentSimpleShaderSource, [{
      key: 'FSDefine_FragmentSimpleShaderSource',
      value: function FSDefine_FragmentSimpleShaderSource(in_, f) {
        var shaderText = 'uniform float opacity;\n';
        return shaderText;
      }
    }, {
      key: 'FSShade_FragmentSimpleShaderSource',
      value: function FSShade_FragmentSimpleShaderSource(f, gl) {
        var shaderText = 'rt0 = vec4(1.0, 1.0, 1.0, opacity);\n';
        return shaderText;
      }
    }, {
      key: 'prepare_FragmentSimpleShaderSource',
      value: function prepare_FragmentSimpleShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f) {

        var vertexAttribsAsResult = [];

        shaderProgram.opacity = gl.getUniformLocation(shaderProgram, 'opacity');

        return vertexAttribsAsResult;
      }
    }]);
    return FragmentSimpleShaderSource;
  }();

  var SimpleShader = function (_Shader) {
    babelHelpers.inherits(SimpleShader, _Shader);

    function SimpleShader(glBoostContext) {
      var basicShader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VertexWorldShaderSource;
      babelHelpers.classCallCheck(this, SimpleShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (SimpleShader.__proto__ || Object.getPrototypeOf(SimpleShader)).call(this, glBoostContext));

      SimpleShader.mixin(basicShader);
      SimpleShader.mixin(FragmentSimpleShaderSource);
      return _this;
    }

    return SimpleShader;
  }(Shader);

  GLBoost['SimpleShader'] = SimpleShader;

  var VertexWorldShadowShaderSource = function () {
    function VertexWorldShadowShaderSource() {
      babelHelpers.classCallCheck(this, VertexWorldShadowShaderSource);
    }

    babelHelpers.createClass(VertexWorldShadowShaderSource, [{
      key: 'VSDefine_VertexWorldShadowShaderSource',
      value: function VSDefine_VertexWorldShadowShaderSource(in_, out_, f, lights, material, extraData) {
        var shaderText = '';
        var textureUnitIndex = 0;
        //for (let i=0; i<lights.length; i++) {
        //if (lights[i].camera && lights[i].camera.texture) {
        shaderText += 'uniform mat4 depthPVMatrix[' + lights.length + '];\n';
        shaderText += out_ + ' vec4 v_shadowCoord[' + lights.length + '];\n';
        textureUnitIndex++;
        //}
        //}

        return shaderText;
      }
    }, {
      key: 'VSTransform_VertexWorldShadowShaderSource',
      value: function VSTransform_VertexWorldShadowShaderSource(existCamera_f, f, lights, material, extraData) {
        var shaderText = '';

        shaderText += 'mat4 biasMatrix = mat4(\n      0.5, 0.0, 0.0, 0.0,\n      0.0, 0.5, 0.0, 0.0,\n      0.0, 0.0, 0.5, 0.0,\n      0.5, 0.5, 0.5, 1.0\n    );\n';

        //shaderText += `  for (int i=0; i<${lights.length}; i++) {\n`;
        for (var i = 0; i < lights.length; i++) {
          shaderText += '  { // ' + i + '\n';
          shaderText += '    mat4 depthBiasPV = biasMatrix * depthPVMatrix[' + i + ']; // ' + i + '\n';
          //shaderText += `    mat4 depthBiasPV = depthPVMatrix[${i}];\n`;
          shaderText += '    v_shadowCoord[' + i + '] = depthBiasPV * worldMatrix * vec4(aVertex_position, 1.0); // ' + i + '\n';
          shaderText += '  } // ' + i + '\n';
        }
        return shaderText;
      }
    }, {
      key: 'FSDefine_VertexWorldShadowShaderSource',
      value: function FSDefine_VertexWorldShadowShaderSource(in_, f, lights, material, extraData) {
        var shaderText = '';

        return shaderText;
      }
    }, {
      key: 'FSShade_VertexWorldShadowShaderSource',
      value: function FSShade_VertexWorldShadowShaderSource(f, gl, lights) {
        var shaderText = '';
        return shaderText;
      }
    }, {
      key: 'prepare_VertexWorldShadowShaderSource',
      value: function prepare_VertexWorldShadowShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];

        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.POSITION || attribName === GLBoost.NORMAL) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        material.uniform_worldMatrix = gl.getUniformLocation(shaderProgram, 'worldMatrix');
        material._semanticsDic['WORLD'] = 'worldMatrix';
        material.uniform_normalMatrix = gl.getUniformLocation(shaderProgram, 'normalMatrix');
        material._semanticsDic['MODELVIEWINVERSETRANSPOSE'] = 'normalMatrix';
        if (existCamera_f) {
          material.uniform_viewMatrix = gl.getUniformLocation(shaderProgram, 'viewMatrix');
          material._semanticsDic['VIEW'] = 'viewMatrix';
          material.uniform_projectionMatrix = gl.getUniformLocation(shaderProgram, 'projectionMatrix');
          material._semanticsDic['PROJECTION'] = 'projectionMatrix';
        }

        for (var i = 0; i < lights.length; i++) {
          material['uniform_lightPosition_' + i] = gl.getUniformLocation(shaderProgram, 'lightPosition[' + i + ']');
          material['uniform_lightDiffuse_' + i] = gl.getUniformLocation(shaderProgram, 'lightDiffuse[' + i + ']');
        }

        var textureUnitIndex = 0;
        for (var _i = 0; _i < lights.length; _i++) {
          //if (lights[i].camera && lights[i].camera.texture) {

          // matrices
          material['uniform_depthPVMatrix_' + textureUnitIndex] = gl.getUniformLocation(shaderProgram, 'depthPVMatrix[' + textureUnitIndex + ']');

          textureUnitIndex++;
          //}
          //shaderProgram['isShadowCasting' + i] = gl.getUniformLocation(shaderProgram, 'isShadowCasting[' + i + ']');
        }

        return vertexAttribsAsResult;
      }
    }]);
    return VertexWorldShadowShaderSource;
  }();

  GLBoost['VertexWorldShadowShaderSource'] = VertexWorldShadowShaderSource;

  var DecalShaderSource = function () {
    function DecalShaderSource() {
      babelHelpers.classCallCheck(this, DecalShaderSource);
    }

    babelHelpers.createClass(DecalShaderSource, [{
      key: 'VSDefine_DecalShaderSource',
      value: function VSDefine_DecalShaderSource(in_, out_, f) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += in_ + ' vec4 aVertex_color;\n';
          shaderText += out_ + ' vec4 color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += in_ + ' vec2 aVertex_texcoord;\n';
          shaderText += out_ + ' vec2 texcoord;\n';
        }
        return shaderText;
      }
    }, {
      key: 'VSTransform_DecalShaderSource',
      value: function VSTransform_DecalShaderSource(existCamera_f, f) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += '  color = aVertex_color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += '  texcoord = aVertex_texcoord;\n';
        }
        return shaderText;
      }
    }, {
      key: 'FSDefine_DecalShaderSource',
      value: function FSDefine_DecalShaderSource(in_, f, lights, material, extraData) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += in_ + ' vec4 color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += in_ + ' vec2 texcoord;\n\n';
        }
        if (material.hasAnyTextures()) {
          shaderText += 'uniform sampler2D uTexture;\n';
        }
        shaderText += 'uniform vec4 materialBaseColor;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_DecalShaderSource',
      value: function FSShade_DecalShaderSource(f, gl, lights, material, extraData) {
        var shaderText = '';
        var textureFunc = Shader._texture_func(gl);
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += '  rt0 *= color;\n';
        }
        shaderText += '    rt0 *= materialBaseColor;\n';
        if (Shader._exist(f, GLBoost.TEXCOORD) && material.hasAnyTextures()) {
          shaderText += '  rt0 *= ' + textureFunc + '(uTexture, texcoord);\n';
        }
        //shaderText += '    float shadowRatio = 0.0;\n';

        //shaderText += '    rt0 = vec4(1.0, 0.0, 0.0, 1.0);\n';
        return shaderText;
      }
    }, {
      key: 'prepare_DecalShaderSource',
      value: function prepare_DecalShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];
        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.COLOR || attribName === GLBoost.TEXCOORD) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        material.uniform_materialBaseColor = gl.getUniformLocation(shaderProgram, 'materialBaseColor');

        if (Shader._exist(vertexAttribs, GLBoost.TEXCOORD)) {
          if (material.getOneTexture()) {
            material.uniformTextureSamplerDic['uTexture'] = {};
            material.uniformTextureSamplerDic['uTexture'].uniformLocation = gl.getUniformLocation(shaderProgram, 'uTexture');
            material.uniformTextureSamplerDic['uTexture'].textureUnitIndex = 0;

            material.uniformTextureSamplerDic['uTexture'].textureName = material.getOneTexture().userFlavorName;

            // set texture unit 0 to the sampler
            gl.uniform1i(material.uniformTextureSamplerDic['uTexture'].uniformLocation, 0);
            material._semanticsDic['TEXTURE'] = 'uTexture';
          }
        }

        return vertexAttribsAsResult;
      }
    }]);
    return DecalShaderSource;
  }();

  var DecalShader = function (_Shader) {
    babelHelpers.inherits(DecalShader, _Shader);

    function DecalShader(glBoostContext) {
      var basicShader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VertexWorldShaderSource;
      babelHelpers.classCallCheck(this, DecalShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (DecalShader.__proto__ || Object.getPrototypeOf(DecalShader)).call(this, glBoostContext));

      DecalShader.mixin(basicShader);
      if (basicShader === VertexWorldShaderSource) {
        DecalShader.mixin(VertexWorldShadowShaderSource);
      }
      DecalShader.mixin(FragmentSimpleShaderSource);
      DecalShader.mixin(DecalShaderSource);
      return _this;
    }

    babelHelpers.createClass(DecalShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {

        var baseColor = material.baseColor;
        gl.uniform4f(material.uniform_materialBaseColor, baseColor.x, baseColor.y, baseColor.z, baseColor.w);
      }
    }]);
    return DecalShader;
  }(Shader);

  GLBoost['DecalShader'] = DecalShader;

  var ClassicMaterial = function (_GLBoostObject) {
    babelHelpers.inherits(ClassicMaterial, _GLBoostObject);

    function ClassicMaterial(glBoostContext) {
      babelHelpers.classCallCheck(this, ClassicMaterial);

      var _this = babelHelpers.possibleConstructorReturn(this, (ClassicMaterial.__proto__ || Object.getPrototypeOf(ClassicMaterial)).call(this, glBoostContext));

      _this._textureDic = {};
      _this._gl = _this._glContext.gl;
      _this._baseColor = new Vector4(1.0, 1.0, 1.0, 1.0);
      _this._diffuseColor = new Vector4(1.0, 1.0, 1.0, 1.0);
      _this._specularColor = new Vector4(0.5, 0.5, 0.5, 1.0);
      _this._ambientColor = new Vector4(0.0, 0.0, 0.0, 1.0);
      _this._name = '';
      _this._shaderClass = DecalShader;
      _this._shaderInstance = null;
      _this._vertexNofGeometries = {};
      _this._states = null;

      _this._stateFunctionsToReset = {
        "blendColor": [0.0, 0.0, 0.0, 0.0],
        "blendEquationSeparate": [32774, 32774],
        "blendFuncSeparate": [1, 0, 1, 0],
        "colorMask": [true, true, true, true],
        "cullFace": [1029],
        "depthFunc": [513],
        "depthMask": [true],
        "depthRange": [0.0, 1.0],
        "frontFace": [2305],
        "lineWidth": [1.0],
        "polygonOffset": [0.0, 0.0]
      };

      _this._countOfUpdate = 0;
      return _this;
    }

    babelHelpers.createClass(ClassicMaterial, [{
      key: 'clone',
      value: function clone() {
        var material = new ClassicMaterial(this._glBoostContext);
        material._baseColor = this._baseColor;
        material._diffuseColor = this._diffuseColor;
        material._specularColor = this._specularColor;
        material._ambientColor = this._ambientColor;
        material._shaderClass = this._shaderClass;
        material._shaderInstance = this._shaderInstance;

        for (var geom in this._vertexNofGeometries) {
          material._vertexNofGeometries[geom] = this._vertexNofGeometries[geom];
        }

        return material;
      }
    }, {
      key: '_updateCount',
      value: function _updateCount() {
        this._countOfUpdate += 1;
      }
    }, {
      key: 'getUpdateStateString',
      value: function getUpdateStateString() {
        return this.toString() + '_updateCount_' + this._countOfUpdate;
      }
    }, {
      key: 'setTexture',
      value: function setTexture(texture) {
        this._textureDic[texture.userFlavorName] = texture;
        this._updateCount();
      }
    }, {
      key: 'getTexture',
      value: function getTexture(userFlavorName) {
        return this._textureDic[userFlavorName];
      }
    }, {
      key: 'getOneTexture',
      value: function getOneTexture() {
        for (var userFlavorName in this._textureDic) {
          return this._textureDic[userFlavorName];
        }
        return null;
      }
    }, {
      key: 'hasAnyTextures',
      value: function hasAnyTextures() {
        var result = false;
        for (var userFlavorName in this._textureDic) {
          result = true;
        }

        return result;
      }
    }, {
      key: 'isTransparent',
      value: function isTransparent() {
        var isTransparent = false;
        if (this._states) {
          if (this._states.enable) {
            this._states.enable.forEach(function (state) {
              if (state === 3042) {
                isTransparent = true;
              }
            });
          }
        }

        return isTransparent;
      }
    }, {
      key: 'setVertexN',
      value: function setVertexN(geom, num) {
        this._vertexNofGeometries[geom] = num;
      }
    }, {
      key: 'getVertexN',
      value: function getVertexN(geom) {
        return typeof this._vertexNofGeometries[geom] === 'undefined' ? 0 : this._vertexNofGeometries[geom];
      }
    }, {
      key: 'setUpTexture',
      value: function setUpTexture(textureName, textureUnitIndex) {
        var gl = this._gl;
        var result = false;
        var texture = this.getTexture(textureName);
        if (texture) {
          result = texture.setUp(textureUnitIndex);
        } else {
          gl.bindTexture(gl.TEXTURE_2D, null);
          result = true;
        }

        return result;
      }
    }, {
      key: 'tearDownTexture',
      value: function tearDownTexture(textureName) {
        var texture = this.getTexture(textureName);
        if (texture) {
          texture.tearDown();
        }
      }
    }, {
      key: 'setUpStates',
      value: function setUpStates() {
        var gl = this._gl;

        if (this._states) {
          Renderer.disableAllGLState(gl);

          if (this._states.enable) {
            this._states.enable.forEach(function (state) {
              gl.enable(state);
            });
          }
          if (this._states.functions) {
            for (var functionName in this._states.functions) {
              gl[functionName].apply(gl, this._states.functions[functionName]);
            }
          }
        }
      }
    }, {
      key: 'tearDownStates',
      value: function tearDownStates() {
        var gl = this._gl;

        if (this._states) {
          if (this._states.enable) {
            this._states.enable.forEach(function (state) {
              gl.disable(state);
            });
          }
          if (this._states.functions) {
            for (var functionName in this._stateFunctionsToReset) {
              gl[functionName].apply(gl, this._stateFunctionsToReset[functionName]);
            }
          }
          Renderer.reflectGlobalGLState(gl);
        }
      }
    }, {
      key: 'shaderClass',
      set: function set(shaderClass) {
        if (this._shaderClass === shaderClass) {
          return;
        }
        this._shaderClass = shaderClass;
        if (this._shaderInstance) {
          this._shaderInstance.readyForDiscard();
        }
        this._shaderInstance = null;
      },
      get: function get() {
        return this._shaderClass;
      }
    }, {
      key: 'shaderInstance',
      set: function set(shaderInstance) {
        this._shaderInstance = shaderInstance;
        this._updateCount();
      },
      get: function get() {
        return this._shaderInstance;
      }
    }, {
      key: 'baseColor',
      set: function set(vec) {
        this._baseColor = vec;
        this._updateCount();
      },
      get: function get() {
        return this._baseColor;
      }
    }, {
      key: 'diffuseColor',
      set: function set(vec) {
        this._diffuseColor = vec;
        this._updateCount();
      },
      get: function get() {
        return this._diffuseColor;
      }
    }, {
      key: 'specularColor',
      set: function set(vec) {
        this._specularColor = vec;
        this._updateCount();
      },
      get: function get() {
        return this._specularColor;
      }
    }, {
      key: 'ambientColor',
      set: function set(vec) {
        this._ambientColor = vec;
        this._updateCount();
      },
      get: function get() {
        return this._ambientColor;
      }
    }, {
      key: 'states',
      set: function set(states) {
        this._states = states;
      },
      get: function get() {
        return this._states;
      }
    }, {
      key: 'name',
      set: function set(name) {
        this._name = name;
      },
      get: function get() {
        return this._name;
      }
    }]);
    return ClassicMaterial;
  }(GLBoostObject);

  GLBoost$1['ClassicMaterial'] = ClassicMaterial;

  var Grid = function (_Geometry) {
    babelHelpers.inherits(Grid, _Geometry);

    function Grid(glBoostContext, length, division, isXZ, isXY, isYZ) {
      babelHelpers.classCallCheck(this, Grid);

      var _this = babelHelpers.possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, glBoostContext));

      _this._setupVertexData(length, division, isXZ, isXY, isYZ);
      return _this;
    }

    babelHelpers.createClass(Grid, [{
      key: '_setupVertexData',
      value: function _setupVertexData(length, division, isXZ, isXY, isYZ) {

        var positions = [];

        for (var i = 0; i < division * 2 + 3; i++) {
          var start = -length;
          var oneUnitLength = length / (division + 1);

          // XZ grid
          if (isXZ) {
            positions.push(new Vector3(-length, 0, start + oneUnitLength * i));
            positions.push(new Vector3(length, 0, start + oneUnitLength * i));

            positions.push(new Vector3(start + oneUnitLength * i, 0, -length));
            positions.push(new Vector3(start + oneUnitLength * i, 0, length));
          }

          // XY grid
          if (isXY) {
            positions.push(new Vector3(-length, start + oneUnitLength * i, 0));
            positions.push(new Vector3(length, start + oneUnitLength * i, 0));

            positions.push(new Vector3(start + oneUnitLength * i, -length, 0));
            positions.push(new Vector3(start + oneUnitLength * i, length, 0));
          }

          // YZ grid
          if (isYZ) {
            positions.push(new Vector3(0, -length, start + oneUnitLength * i));
            positions.push(new Vector3(0, length, start + oneUnitLength * i));

            positions.push(new Vector3(0, start + oneUnitLength * i, -length));
            positions.push(new Vector3(0, start + oneUnitLength * i, length));
          }
        }

        this.setVerticesData({
          position: positions
        }, null, GLBoost$1.LINES);
      }
    }]);
    return Grid;
  }(Geometry);

  GLBoost$1["Grid"] = Grid;

  var M_Mesh = function (_M_Element) {
    babelHelpers.inherits(M_Mesh, _M_Element);

    function M_Mesh(glBoostContext, geometry, material) {
      babelHelpers.classCallCheck(this, M_Mesh);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_Mesh.__proto__ || Object.getPrototypeOf(M_Mesh)).call(this, glBoostContext));

      if (geometry) {
        _this.geometry = geometry;
      }
      if (material) {
        _this.material = material;
      }
      _this._transformedDepth = 0;
      return _this;
    }

    babelHelpers.createClass(M_Mesh, [{
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, lights) {
        this._geometry.prepareToRender(existCamera_f, lights, this._material, this);
        if (this._geometry._materials.length === 0 && this._material) {
          this._material = this._geometry.prepareGLSLProgramAndSetVertexNtoMaterial(this._material, 0, existCamera_f, lights);
        }
      }
    }, {
      key: 'draw',
      value: function draw(lights, camera, scene, renderPassIndex) {
        this._geometry.draw(lights, camera, this, scene, renderPassIndex);
      }
    }, {
      key: 'bakeTransformToGeometry',
      value: function bakeTransformToGeometry() {
        var positions = this._geometry._vertices.position;
        var mat = this.transformMatrixAccumulatedAncestry;
        var componentN = this._geometry._vertices.components.position;
        var length = positions.length / componentN;
        for (var i = 0; i < length; i++) {
          var posVector4 = new Vector4(positions[i * componentN], positions[i * componentN + 1], positions[i * componentN + 2], 1);
          var transformedPosVec = mat.multiplyVector(posVector4);
          positions[i * componentN] = transformedPosVec.x;
          positions[i * componentN + 1] = transformedPosVec.y;
          positions[i * componentN + 2] = transformedPosVec.z;
          if (componentN > 3) {
            positions[i * componentN + 3] = transformedPosVec.w;
          }
        }
        this._geometry._vertices.position = positions;

        if (this._geometry._vertices.normal) {
          var normals = this._geometry._vertices.normal;
          length = normals.length / 3;
          for (var _i = 0; _i < length; _i++) {
            var normalVector3 = new Vector3(normals[_i * 3], normals[_i * 3 + 1], normals[_i * 3 + 2]);
            var transformedNormalVec = Matrix44$1.invert(mat).transpose().toMatrix33().multiplyVector(normalVector3).normalize();
            normals[_i * 3] = transformedNormalVec.x;
            normals[_i * 3 + 1] = transformedNormalVec.y;
            normals[_i * 3 + 2] = transformedNormalVec.z;
          }
          this._geometry._vertices.normal = normals;
        }
      }
    }, {
      key: 'bakeInverseTransformToGeometry',
      value: function bakeInverseTransformToGeometry() {
        var positions = this._geometry._vertices.position;
        var invMat = this.inverseTransformMatrixAccumulatedAncestry;
        var componentN = this._geometry._vertices.components.position;
        var length = positions.length / componentN;
        for (var i = 0; i < length; i++) {
          var posVector4 = new Vector4(positions[i * componentN], positions[i * componentN + 1], positions[i * componentN + 2], 1);
          var transformedPosVec = invMat.multiplyVector(posVector4);
          positions[i * componentN] = transformedPosVec.x;
          positions[i * componentN + 1] = transformedPosVec.y;
          positions[i * componentN + 2] = transformedPosVec.z;
          if (componentN > 3) {
            positions[i * componentN + 3] = transformedPosVec.w;
          }
        }
        this._geometry._vertices.position = positions;

        var mat = this.transformMatrixAccumulatedAncestry;
        if (this._geometry._vertices.normal) {
          var normals = this._geometry._vertices.normal;
          length = normals.length / 3;
          for (var _i2 = 0; _i2 < length; _i2++) {
            var normalVector3 = new Vector3(normals[_i2 * 3], normals[_i2 * 3 + 1], normals[_i2 * 3 + 2]);
            var transformedNormalVec = Matrix44$1.invert(mat).transpose().invert().toMatrix33().multiplyVector(normalVector3).normalize();
            normals[_i2 * 3] = transformedNormalVec.x;
            normals[_i2 * 3 + 1] = transformedNormalVec.y;
            normals[_i2 * 3 + 2] = transformedNormalVec.z;
          }
          this._geometry._vertices.normal = normals;
        }
      }
    }, {
      key: '_copyMaterials',
      value: function _copyMaterials() {
        if (this.geometry._indicesArray.length !== this.geometry._materials.length) {
          for (var i = 0; i < this.geometry._indicesArray.length; i++) {
            this.geometry._materials[i] = this._material; //.clone();
            this.geometry._materials[i].setVertexN(this.geometry, this.geometry._indicesArray[i].length);
          }
        }
      }
    }, {
      key: 'merge',
      value: function merge(meshOrMeshes) {
        if (Array.isArray(meshOrMeshes)) {
          this.bakeTransformToGeometry();

          var meshes = meshOrMeshes;
          var geometries = [];
          for (var i = 0; i < meshes.length; i++) {
            meshes[i].bakeTransformToGeometry();
            geometries.push(meshes[i].geometry);
          }

          this.geometry.merge(geometries);

          for (var _i3 = 0; _i3 < meshes.length; _i3++) {
            delete meshes[_i3];
          }

          this._copyMaterials();

          this.bakeInverseTransformToGeometry();
        } else {
          //
          var mesh = meshOrMeshes;
          mesh.bakeTransformToGeometry();
          this.bakeTransformToGeometry();
          this.geometry.merge(mesh.geometry);

          this._copyMaterials();

          this.bakeInverseTransformToGeometry();
        }
      }
    }, {
      key: 'mergeHarder',
      value: function mergeHarder(meshOrMeshes) {

        if (Array.isArray(meshOrMeshes)) {

          this.bakeTransformToGeometry();

          var meshes = meshOrMeshes;
          var geometries = [];
          for (var i = 0; i < meshes.length; i++) {
            meshes[i].bakeTransformToGeometry();
            geometries.push(meshes[i].geometry);
          }

          this.geometry.mergeHarder(geometries);

          for (var _i4 = 0; _i4 < meshes.length; _i4++) {
            delete meshes[_i4];
          }

          this.bakeInverseTransformToGeometry();
        } else {
          //
          var mesh = meshOrMeshes;
          mesh.bakeTransformToGeometry();
          this.bakeTransformToGeometry();
          this.geometry.mergeHarder(mesh.geometry);

          this.bakeInverseTransformToGeometry();
        }
      }
    }, {
      key: 'calcTransformedDepth',
      value: function calcTransformedDepth(camera) {
        var viewMatrix = camera.lookAtRHMatrix();
        var m_m = this.transformMatrixAccumulatedAncestry;
        var mv_m = viewMatrix.multiply(camera.inverseTransformMatrixAccumulatedAncestryWithoutMySelf).multiply(m_m);

        var centerPosition = this.geometry.centerPosition.toVector4();
        var transformedCenterPosition = mv_m.multiplyVector(centerPosition);

        this._transformedDepth = transformedCenterPosition.z;
      }
    }, {
      key: 'isTransparent',
      value: function isTransparent() {
        var isTransparent = this._opacity < 1.0 || this._transparentByUser ? true : false;
        isTransparent |= this.geometry.isTransparent(this);
        return isTransparent;
      }
    }, {
      key: 'clone',
      value: function clone() {
        var instance = new M_Mesh(this._glBoostContext, this.geometry, this.material);
        this._copy(instance);

        return instance;
      }
    }, {
      key: '_copy',
      value: function _copy(instance) {
        babelHelpers.get(M_Mesh.prototype.__proto__ || Object.getPrototypeOf(M_Mesh.prototype), '_copy', this).call(this, instance);
        instance._transformedDepth = this._transformedDepth;
      }
    }, {
      key: 'geometry',
      set: function set(geometry) {
        this._geometry = geometry;
        geometry._parent = this;
        M_Mesh._geometries[geometry.toString()] = geometry;
      },
      get: function get() {
        return this._geometry;
      }
    }, {
      key: 'material',
      set: function set(material) {
        this._material = material;
      },
      get: function get() {
        return this._material;
      }
    }, {
      key: 'transformedDepth',
      get: function get() {
        return this._transformedDepth;
      }
    }, {
      key: 'AABBInWorld',
      get: function get() {
        var world_m = this.transformMatrixAccumulatedAncestry;
        return AABB.multiplyMatrix(world_m, this._geometry.AABB);
      }
    }]);
    return M_Mesh;
  }(M_Element);

  M_Mesh._geometries = {};

  GLBoost$1['M_Mesh'] = M_Mesh;

  var M_GridGizmo = function (_M_Mesh) {
    babelHelpers.inherits(M_GridGizmo, _M_Mesh);

    function M_GridGizmo(glBoostContext, length, division) {
      var isXZ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var isXY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var isYZ = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var colorVec = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new Vector4(0.5, 0.5, 0.5, 1);
      babelHelpers.classCallCheck(this, M_GridGizmo);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_GridGizmo.__proto__ || Object.getPrototypeOf(M_GridGizmo)).call(this, glBoostContext, null, null));

      _this._init(length, division, isXZ, isXY, isYZ, colorVec);
      return _this;
    }

    babelHelpers.createClass(M_GridGizmo, [{
      key: '_init',
      value: function _init(length, division, isXZ, isXY, isYZ, colorVec) {
        this.geometry = new Grid(glBoostContext, length, division, isXZ, isXY, isYZ, colorVec);
        this.material = new ClassicMaterial(glBoostContext);
        this.material.baseColor = colorVec;
      }
    }]);
    return M_GridGizmo;
  }(M_Mesh);

  var Axis = function (_Geometry) {
    babelHelpers.inherits(Axis, _Geometry);

    function Axis(glBoostContext, length) {
      babelHelpers.classCallCheck(this, Axis);

      var _this = babelHelpers.possibleConstructorReturn(this, (Axis.__proto__ || Object.getPrototypeOf(Axis)).call(this, glBoostContext));

      _this._setupVertexData(length);
      return _this;
    }

    babelHelpers.createClass(Axis, [{
      key: '_setupVertexData',
      value: function _setupVertexData(length) {

        // to avoid z fighting with GridGizmo
        var nearZeroValue = 0.0001;

        var positions = [
        // X Axis
        new Vector3(0, nearZeroValue, nearZeroValue), new Vector3(length, nearZeroValue, nearZeroValue),

        // Y Axis
        new Vector3(nearZeroValue, 0, nearZeroValue), new Vector3(nearZeroValue, length, nearZeroValue),

        // Z Axis
        new Vector3(nearZeroValue, nearZeroValue, 0), new Vector3(nearZeroValue, nearZeroValue, length)];

        var colors = [
        // X Axis
        new Vector4(1, 0, 0, 1), new Vector4(1, 0, 0, 1),

        // Y Axis
        new Vector4(0, 1, 0, 1), new Vector4(0, 1, 0, 1),

        // Z Axis
        new Vector4(0, 0, 1, 1), new Vector4(0, 0, 1, 1)];

        this.setVerticesData({
          position: positions,
          color: colors
        }, null, GLBoost$1.LINES);
      }
    }]);
    return Axis;
  }(Geometry);

  GLBoost$1["Axis"] = Axis;

  var M_AxisGizmo = function (_M_Mesh) {
    babelHelpers.inherits(M_AxisGizmo, _M_Mesh);

    function M_AxisGizmo(glBoostContext, length) {
      babelHelpers.classCallCheck(this, M_AxisGizmo);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_AxisGizmo.__proto__ || Object.getPrototypeOf(M_AxisGizmo)).call(this, glBoostContext, null, null));

      _this._init(length);
      return _this;
    }

    babelHelpers.createClass(M_AxisGizmo, [{
      key: '_init',
      value: function _init(length) {
        this.geometry = new Axis(glBoostContext, length);
      }
    }]);
    return M_AxisGizmo;
  }(M_Mesh);

  var M_Joint = function (_M_Element) {
    babelHelpers.inherits(M_Joint, _M_Element);

    function M_Joint(glBoostContext) {
      babelHelpers.classCallCheck(this, M_Joint);
      return babelHelpers.possibleConstructorReturn(this, (M_Joint.__proto__ || Object.getPrototypeOf(M_Joint)).call(this, glBoostContext));
    }

    babelHelpers.createClass(M_Joint, [{
      key: 'clone',
      value: function clone() {
        var instance = new M_Joint(this._glBoostContext);
        this._copy(instance);
        return instance;
      }
    }, {
      key: '_copy',
      value: function _copy(instance) {
        babelHelpers.get(M_Joint.prototype.__proto__ || Object.getPrototypeOf(M_Joint.prototype), '_copy', this).call(this, instance);
      }
    }]);
    return M_Joint;
  }(M_Element);

  var L_AbstractCamera = function (_L_Element) {
    babelHelpers.inherits(L_AbstractCamera, _L_Element);

    function L_AbstractCamera(glBoostContext, toRegister, lookat) {
      babelHelpers.classCallCheck(this, L_AbstractCamera);

      var _this = babelHelpers.possibleConstructorReturn(this, (L_AbstractCamera.__proto__ || Object.getPrototypeOf(L_AbstractCamera)).call(this, glBoostContext, toRegister));

      if (_this.constructor === L_AbstractCamera) {
        throw new TypeError('Cannot construct AbstractCamera instances directly.');
      }

      _this._translate = lookat.eye;
      _this._center = lookat.center;
      _this._up = lookat.up;

      _this._cameraController = null;

      _this._dirtyView = true;

      _this._middleLevelCamera = null;
      return _this;
    }

    babelHelpers.createClass(L_AbstractCamera, [{
      key: '_affectedByCameraController',
      value: function _affectedByCameraController() {
        if (this._cameraController !== null) {
          var results = this._cameraController.convert(this);
          this._translateInner = results[0];
          this._centerInner = results[1];
          this._upInner = results[2];
        } else {
          this._translateInner = babelHelpers.get(L_AbstractCamera.prototype.__proto__ || Object.getPrototypeOf(L_AbstractCamera.prototype), 'translate', this).clone();
          this._centerInner = this._center.clone();
          this._upInner = this._up.clone();
        }
      }
    }, {
      key: '_needUpdateView',
      value: function _needUpdateView() {
        var withTryingResetOfCameraController = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

        if (this._cameraController !== null && withTryingResetOfCameraController) {
          this._cameraController.tryReset();
        }
        this._dirtyView = true;
      }
    }, {
      key: 'lookAtRHMatrix',
      value: function lookAtRHMatrix() {
        if (this._dirtyView) {
          this._affectedByCameraController();
          this._viewMatrix = L_AbstractCamera.lookAtRHMatrix(this.translateInner, this.centerInner, this.upInner);
          this._dirtyView = false;
          return this._viewMatrix.clone();
        } else {
          return this._viewMatrix.clone();
        }
      }
    }, {
      key: 'setAsMainCamera',
      value: function setAsMainCamera(scene) {
        L_AbstractCamera._mainCamera[scene.toString()] = this;
      }
    }, {
      key: 'isMainCamera',
      value: function isMainCamera(scene) {
        return L_AbstractCamera._mainCamera[scene.toString()] === this;
      }
    }, {
      key: 'cameraController',
      set: function set(controller) {
        this._cameraController = controller;
        if (this._middleLevelCamera !== null) {
          controller.addCamera(this._middleLevelCamera);
        } else {
          controller.addCamera(this);
        }
      },
      get: function get() {
        return this._cameraController;
      }
    }, {
      key: 'middleLevelCamera',
      get: function get() {
        return this._middleLevelCamera;
      }
    }, {
      key: 'translate',
      set: function set(vec) {
        babelHelpers.set(L_AbstractCamera.prototype.__proto__ || Object.getPrototypeOf(L_AbstractCamera.prototype), 'translate', vec, this);
        this._needUpdateView();
      },
      get: function get() {
        return this._translate;
      }
    }, {
      key: 'translateInner',
      get: function get() {
        return this._translateInner;
      }
    }, {
      key: 'eye',
      set: function set(vec) {
        babelHelpers.set(L_AbstractCamera.prototype.__proto__ || Object.getPrototypeOf(L_AbstractCamera.prototype), 'translate', vec, this);
        this._needUpdateView();
      },
      get: function get() {
        return this._translate;
      }
    }, {
      key: 'eyeInner',
      get: function get() {
        return this._translateInner;
      }
    }, {
      key: 'center',
      set: function set(vec) {
        if (this._center.isEqual(vec)) {
          return;
        }
        this._center = vec;
        this._needUpdateView();
      },
      get: function get() {
        return this._center;
      }
    }, {
      key: 'centerInner',
      get: function get() {
        return this._centerInner;
      }
    }, {
      key: 'up',
      set: function set(vec) {
        if (this._up.isEqual(vec)) {
          return;
        }
        this._up = vec;
        this._needUpdateView();
      },
      get: function get() {
        return this._up;
      }
    }, {
      key: 'upInner',
      get: function get() {
        return this._upInner;
      }
    }, {
      key: 'texture',
      set: function set(texture) {
        this._texture = texture;
      },
      get: function get() {
        return this._texture;
      }
    }], [{
      key: 'lookAtRHMatrix',
      value: function lookAtRHMatrix(eye, center, up) {

        var f = Vector3.normalize(Vector3.subtract(center, eye));
        var s = Vector3.normalize(Vector3.cross(f, up));
        var u = Vector3.cross(s, f);

        return new Matrix44$1(s.x, s.y, s.z, -Vector3.dotProduct(s, eye), u.x, u.y, u.z, -Vector3.dotProduct(u, eye), -f.x, -f.y, -f.z, Vector3.dotProduct(f, eye), 0, 0, 0, 1);
      }
    }]);
    return L_AbstractCamera;
  }(L_Element);

  L_AbstractCamera._mainCamera = {};

  var L_OrthoCamera = function (_L_AbstractCamera) {
    babelHelpers.inherits(L_OrthoCamera, _L_AbstractCamera);

    function L_OrthoCamera(glBoostContext, toRegister, lookat, ortho) {
      babelHelpers.classCallCheck(this, L_OrthoCamera);

      var _this = babelHelpers.possibleConstructorReturn(this, (L_OrthoCamera.__proto__ || Object.getPrototypeOf(L_OrthoCamera)).call(this, glBoostContext, toRegister, lookat));

      _this._left = ortho.left;
      _this._right = ortho.right;
      _this._bottom = ortho.bottom;
      _this._top = ortho.top;
      _this._zNear = ortho.zNear;
      _this._zFar = ortho.zFar;
      _this._xmag = ortho.xmag;
      _this._ymag = ortho.ymag;

      _this._dirtyProjection = true;
      _this._updateCountAsCameraProjection = 0;
      return _this;
    }

    babelHelpers.createClass(L_OrthoCamera, [{
      key: '_needUpdateProjection',
      value: function _needUpdateProjection() {
        this._dirtyProjection = true;
        this._updateCountAsCameraProjection++;
      }
    }, {
      key: 'projectionRHMatrix',
      value: function projectionRHMatrix() {
        if (this._dirtyProjection) {
          this._projectionMatrix = L_OrthoCamera.orthoRHMatrix(this._left, this._right, this._bottom, this._top, this._zNear, this._zFar, this._xmag, this._ymag);
          this._dirtyProjection = false;
          return this._projectionMatrix.clone();
        } else {
          return this._projectionMatrix.clone();
        }
      }
    }, {
      key: 'updateCountAsCameraProjection',
      get: function get() {
        return this._updateCountAsCameraProjection;
      }
    }, {
      key: 'left',
      set: function set(value) {
        if (this._left === value) {
          return;
        }
        this._left = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._left;
      }
    }, {
      key: 'right',
      set: function set(value) {
        if (this._right === value) {
          return;
        }
        this._right = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._right;
      }
    }, {
      key: 'bottom',
      set: function set(value) {
        if (this._bottom === value) {
          return;
        }
        this._bottom = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._bottom;
      }
    }, {
      key: 'top',
      set: function set(value) {
        if (this._top === value) {
          return;
        }
        this._top = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._top;
      }
    }, {
      key: 'zNear',
      set: function set(value) {
        if (this._zNear === value) {
          return;
        }
        this._zNear = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._zNear;
      }
    }, {
      key: 'zFar',
      set: function set(value) {
        if (this._zFar === value) {
          return;
        }
        this._zFar = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._zFar;
      }
    }, {
      key: 'xmag',
      set: function set(value) {
        if (this._xmag === value) {
          return;
        }
        this._xmag = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._xmag;
      }
    }, {
      key: 'ymag',
      set: function set(value) {
        if (this._ymag === value) {
          return;
        }
        this._ymag = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._ymag;
      }
    }], [{
      key: 'orthoRHMatrix',
      value: function orthoRHMatrix(left, right, bottom, top, near, far, xmag, ymag) {

        if (xmag && ymag) {
          return new Matrix44$1(1 / xmag, 0.0, 0.0, 0, 0.0, 1 / ymag, 0.0, 0, 0.0, 0.0, -2 / (far - near), -(far + near) / (far - near), 0.0, 0.0, 0.0, 1.0);
        } else {
          return new Matrix44$1(2 / (right - left), 0.0, 0.0, -(right + left) / (right - left), 0.0, 2 / (top - bottom), 0.0, -(top + bottom) / (top - bottom), 0.0, 0.0, -2 / (far - near), -(far + near) / (far - near), 0.0, 0.0, 0.0, 1.0);
        }
      }
    }]);
    return L_OrthoCamera;
  }(L_AbstractCamera);

  var M_AbstractCamera = function (_M_Element) {
    babelHelpers.inherits(M_AbstractCamera, _M_Element);

    function M_AbstractCamera(glBoostContext, toRegister) {
      babelHelpers.classCallCheck(this, M_AbstractCamera);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_AbstractCamera.__proto__ || Object.getPrototypeOf(M_AbstractCamera)).call(this, glBoostContext, toRegister));

      if (_this.constructor === M_AbstractCamera) {
        throw new TypeError('Cannot construct M_AbstractCamera instances directly.');
      }

      _this._lowLevelCamera = null;

      _this._updateCountAsCameraView = 0;

      _this._texture = null; // for example, depth texture
      return _this;
    }

    babelHelpers.createClass(M_AbstractCamera, [{
      key: '_needUpdateView',
      value: function _needUpdateView() {
        this._lowLevelCamera._needUpdateView();
        this._updateCountAsCameraView++;
      }
    }, {
      key: 'setAsMainCamera',
      value: function setAsMainCamera(scene) {
        this._lowLevelCamera.setAsMainCamera(scene);
      }
    }, {
      key: 'isMainCamera',
      value: function isMainCamera(scene) {
        return this._lowLevelCamera.isMainCamera(scene);
      }
    }, {
      key: 'lookAtRHMatrix',
      value: function lookAtRHMatrix() {
        return this._lowLevelCamera.lookAtRHMatrix();
      }
    }, {
      key: 'cameraController',
      set: function set(controller) {
        this._lowLevelCamera.cameraController = controller;
      },
      get: function get() {
        return this._lowLevelCamera.cameraController;
      }
    }, {
      key: 'updateCountAsCameraView',
      get: function get() {
        return this._updateCountAsCameraView;
      }
    }, {
      key: 'latestViewStateInfoString',
      get: function get() {
        var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
        tempString += '_updateCountAsCameraView_' + this._updateCountAsCameraView;

        return tempString;
      }
    }, {
      key: 'texture',
      set: function set(texture) {
        this._texture = texture;
      },
      get: function get() {
        return this._texture;
      }
    }, {
      key: 'translate',
      set: function set(vec) {
        this._lowLevelCamera.translate = vec;
      },
      get: function get() {
        return this._lowLevelCamera.translate;
      }
    }, {
      key: 'translateInner',
      get: function get() {
        return this._lowLevelCamera.translateInner;
      }
    }, {
      key: 'eye',
      set: function set(vec) {
        this._lowLevelCamera.eye = vec;
      },
      get: function get() {
        return this._lowLevelCamera.eye;
      }
    }, {
      key: 'eyeInner',
      get: function get() {
        return this._lowLevelCamera.eyeInner;
      }
    }, {
      key: 'center',
      set: function set(vec) {
        this._lowLevelCamera.center = vec;
      },
      get: function get() {
        return this._lowLevelCamera.center;
      }
    }, {
      key: 'centerInner',
      get: function get() {
        return this._lowLevelCamera.centerInner;
      }
    }, {
      key: 'up',
      set: function set(vec) {
        this._lowLevelCamera.up = vec;
      },
      get: function get() {
        return this._lowLevelCamera.up;
      }
    }, {
      key: 'upInner',
      get: function get() {
        return this._lowLevelCamera.upInner;
      }
    }]);
    return M_AbstractCamera;
  }(M_Element);

  var M_OrthoCamera = function (_M_AbstractCamera) {
    babelHelpers.inherits(M_OrthoCamera, _M_AbstractCamera);

    function M_OrthoCamera(glBoostContext, toRegister, lookat, ortho) {
      babelHelpers.classCallCheck(this, M_OrthoCamera);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_OrthoCamera.__proto__ || Object.getPrototypeOf(M_OrthoCamera)).call(this, glBoostContext, toRegister));

      _this._lowLevelCamera = new L_OrthoCamera(_this, false, lookat, ortho);
      _this._lowLevelCamera._middleLevelCamera = _this;
      return _this;
    }

    // ===================== delegate to low level class ========================

    babelHelpers.createClass(M_OrthoCamera, [{
      key: '_needUpdateProjection',
      value: function _needUpdateProjection() {
        this._lowLevelCamera._needUpdateProjection();
      }
    }, {
      key: 'projectionRHMatrix',
      value: function projectionRHMatrix() {
        return this._lowLevelCamera.projectionRHMatrix();
      }
    }, {
      key: 'updateCountAsCameraProjection',
      get: function get() {
        return this._lowLevelCamera.updateCountAsCameraProjection;
      }
    }, {
      key: 'left',
      set: function set(value) {
        this._lowLevelCamera.left = value;
      },
      get: function get() {
        return this._lowLevelCamera.left;
      }
    }, {
      key: 'right',
      set: function set(value) {
        this._lowLevelCamera.right = value;
      },
      get: function get() {
        return this._lowLevelCamera.right;
      }
    }, {
      key: 'bottom',
      set: function set(value) {
        this._lowLevelCamera.bottom = value;
      },
      get: function get() {
        return this._lowLevelCamera.bottom;
      }
    }, {
      key: 'top',
      set: function set(value) {
        this._lowLevelCamera.top = value;
      },
      get: function get() {
        return this._lowLevelCamera.top;
      }
    }, {
      key: 'zNear',
      set: function set(value) {
        this._lowLevelCamera.zNear = value;
      },
      get: function get() {
        return this._lowLevelCamera.zNear;
      }
    }, {
      key: 'zFar',
      set: function set(value) {
        this._lowLevelCamera.zFar = value;
      },
      get: function get() {
        return this._lowLevelCamera.zFar;
      }
    }]);
    return M_OrthoCamera;
  }(M_AbstractCamera);

  var L_PerspectiveCamera = function (_L_AbstractCamera) {
    babelHelpers.inherits(L_PerspectiveCamera, _L_AbstractCamera);

    function L_PerspectiveCamera(glBoostContext, toRegister, lookat, perspective) {
      babelHelpers.classCallCheck(this, L_PerspectiveCamera);

      var _this = babelHelpers.possibleConstructorReturn(this, (L_PerspectiveCamera.__proto__ || Object.getPrototypeOf(L_PerspectiveCamera)).call(this, glBoostContext, toRegister, lookat));

      _this._fovy = perspective.fovy;
      _this._aspect = perspective.aspect;
      _this._zNear = perspective.zNear;
      _this._zFar = perspective.zFar;

      _this._dirtyProjection = true;
      _this._updateCountAsCameraProjection = 0;
      return _this;
    }

    babelHelpers.createClass(L_PerspectiveCamera, [{
      key: '_needUpdateProjection',
      value: function _needUpdateProjection() {
        this._dirtyProjection = true;
        this._updateCountAsCameraProjection++;
      }
    }, {
      key: 'projectionRHMatrix',
      value: function projectionRHMatrix() {
        if (this._dirtyProjection) {
          this._projectionMatrix = L_PerspectiveCamera.perspectiveRHMatrix(this._fovy, this._aspect, this._zNear, this._zFar);
          this._dirtyProjection = false;
          return this._projectionMatrix.clone();
        } else {
          return this._projectionMatrix.clone();
        }
      }
    }, {
      key: 'updateCountAsCameraProjection',
      get: function get() {
        return this._updateCountAsCameraProjection;
      }
    }, {
      key: 'fovy',
      set: function set(value) {
        if (this._fovy === value) {
          return;
        }
        this._fovy = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._fovy;
      }
    }, {
      key: 'aspect',
      set: function set(value) {
        if (this._aspect === value) {
          return;
        }
        this._aspect = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._aspect;
      }
    }, {
      key: 'zNear',
      set: function set(value) {
        if (this._zNear === value) {
          return;
        }
        this._zNear = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._zNear;
      }
    }, {
      key: 'zFar',
      set: function set(value) {
        if (this._zFar === value) {
          return;
        }
        this._zFar = value;
        this._needUpdateProjection();
      },
      get: function get() {
        return this._zFar;
      }
    }], [{
      key: 'perspectiveRHMatrix',
      value: function perspectiveRHMatrix(fovy, aspect, zNear, zFar) {

        var yscale = 1.0 / Math.tan(0.5 * fovy * Math.PI / 180);
        var xscale = yscale / aspect;

        if (zFar) {
          return new Matrix44$1(xscale, 0.0, 0.0, 0.0, 0.0, yscale, 0.0, 0.0, 0.0, 0.0, -(zFar + zNear) / (zFar - zNear), -(2.0 * zFar * zNear) / (zFar - zNear), 0.0, 0.0, -1.0, 0.0);
        } else {
          return new Matrix44$1(xscale, 0.0, 0.0, 0.0, 0.0, yscale, 0.0, 0.0, 0.0, 0.0, -1, 0, -2 * zNear, 0.0, 0.0, -1.0, 0.0);
        }
      }
    }]);
    return L_PerspectiveCamera;
  }(L_AbstractCamera);

  var M_PerspectiveCamera = function (_M_AbstractCamera) {
    babelHelpers.inherits(M_PerspectiveCamera, _M_AbstractCamera);

    function M_PerspectiveCamera(glBoostContext, toRegister, lookat, perspective) {
      babelHelpers.classCallCheck(this, M_PerspectiveCamera);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_PerspectiveCamera.__proto__ || Object.getPrototypeOf(M_PerspectiveCamera)).call(this, glBoostContext, toRegister));

      _this._lowLevelCamera = new L_PerspectiveCamera(_this, false, lookat, perspective);
      _this._lowLevelCamera._middleLevelCamera = _this;
      return _this;
    }

    // ===================== delegate to low level class ========================

    babelHelpers.createClass(M_PerspectiveCamera, [{
      key: '_needUpdateProjection',
      value: function _needUpdateProjection() {
        this._lowLevelCamera._needUpdateProjection();
      }
    }, {
      key: 'projectionRHMatrix',
      value: function projectionRHMatrix() {
        return this._lowLevelCamera.projectionRHMatrix();
      }
    }, {
      key: 'updateCountAsCameraProjection',
      get: function get() {
        return this._lowLevelCamera.updateCountAsCameraProjection;
      }
    }, {
      key: 'fovy',
      set: function set(value) {
        this._lowLevelCamera.fovy = value;
      },
      get: function get() {
        return this._lowLevelCamera.fovy;
      }
    }, {
      key: 'aspect',
      set: function set(value) {
        this._lowLevelCamera.aspect = value;
      },
      get: function get() {
        return this._lowLevelCamera.aspect;
      }
    }, {
      key: 'zNear',
      set: function set(value) {
        this._lowLevelCamera.zNear = value;
      },
      get: function get() {
        return this._lowLevelCamera.zNear;
      }
    }, {
      key: 'zFar',
      set: function set(value) {
        this._lowLevelCamera.zFar = value;
      },
      get: function get() {
        return this._lowLevelCamera.zFar;
      }
    }]);
    return M_PerspectiveCamera;
  }(M_AbstractCamera);

  var M_Group = function (_M_Element) {
    babelHelpers.inherits(M_Group, _M_Element);

    function M_Group(glBoostContext) {
      babelHelpers.classCallCheck(this, M_Group);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_Group.__proto__ || Object.getPrototypeOf(M_Group)).call(this, glBoostContext));

      _this._elements = [];
      _this._AABB = new AABB();
      _this._isRootJointGroup = false;
      return _this;
    }

    /**
     * [en] Add the element to this group as a child.<br>
     * [ja] このグループにelementを子供として追加します。
     * @param {Element} element  [en] a instance of Element class [ja] Elementクラスのインスタンス
     */


    babelHelpers.createClass(M_Group, [{
      key: 'addChild',
      value: function addChild(element) {
        this.removeChild(element);
        element._parent = this;
        this._elements.push(element);
      }

      /**
       * [en] remove the element from this group.
       * [ja] このグループから指定した要素を削除します。
       * @param {Element} element [en] the element to remove [ja] 削除したい要素
       */

    }, {
      key: 'removeChild',
      value: function removeChild(element) {
        this._elements = this._elements.filter(function (elem) {
          if (elem === element) {
            element._parent = null;
          }
          return elem !== element;
        });
      }

      /**
       * [en] remove all elements from this group.
       * [ja] このグループから全ての要素を削除します。
       */

    }, {
      key: 'removeAll',
      value: function removeAll() {
        this._elements = this._elements.filter(function (elem) {
          elem._parent = null;
        });
        this._elements.length = 0;
      }
    }, {
      key: 'getChildren',
      value: function getChildren() {
        return this._elements;
      }
    }, {
      key: '_setDirtyToAnimatedElement',
      value: function _setDirtyToAnimatedElement(inputName) {
        if (this.hasAnimation(inputName)) {
          this._needUpdate();
        }

        var children = this.getChildren();
        for (var i = 0; i < children.length; i++) {
          children[i]._setDirtyToAnimatedElement(inputName);
        }
      }
    }, {
      key: 'searchElement',
      value: function searchElement(userflavorName) {
        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

        if (element.userFlavorName === userflavorName) {
          return element;
        }

        if (element instanceof M_Group) {
          var children = element.getChildren();
          for (var i = 0; i < children.length; i++) {
            var hitChild = this.searchElement(userflavorName, children[i]);
            if (hitChild) {
              return hitChild;
            }
          }
        }
        return null;
      }
    }, {
      key: 'searchElementsByType',
      value: function searchElementsByType(type) {
        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;

        if (element instanceof type) {
          return element;
        }

        if (element instanceof M_Group) {
          var children = element.getChildren();
          var results = [];
          for (var i = 0; i < children.length; i++) {
            var hitChildOrChildren = this.searchElementsByType(type, children[i]);
            if (Array.isArray(hitChildOrChildren)) {
              Array.prototype.push.apply(results, hitChildOrChildren); // concat
            } else if (hitChildOrChildren != null) {
              results.push(hitChildOrChildren);
            }
          }
          return results;
        }
        return null;
      }
    }, {
      key: 'updateAABB',
      value: function updateAABB() {
        var aabb = function mergeAABBRecursively(elem) {
          if (elem instanceof M_Group) {
            var children = elem.getChildren();
            for (var i = 0; i < children.length; i++) {
              var aabb = mergeAABBRecursively(children[i]);
              if (aabb instanceof AABB) {
                elem.AABB.mergeAABB(aabb);
              } else {
                console.assert('calculation of AABB error!');
              }
            }
            return elem.AABB;
            //return AABB.multiplyMatrix(elem.transformMatrix, elem.AABB);
          }
          if (elem instanceof M_Mesh) {
            var _aabb = elem.AABBInWorld;
            //console.log(aabb.toString());
            return _aabb;
          }

          return null;
        }(this);
        this.AABB.mergeAABB(aabb);

        var newAABB = this.AABB;

        return newAABB;
      }
    }, {
      key: 'clone',
      value: function clone() {
        var clonedOriginalRootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        var clonedRootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var onCompleteFuncs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var instance = new M_Group(this._glBoostContext);
        if (clonedRootElement === null) {
          clonedRootElement = instance;
        }
        this._copy(instance);

        this._elements.forEach(function (element) {
          if (typeof element.clone !== 'undefined') {
            // && !MiscUtil.isDefinedAndTrue(element._isRootJointGroup)) {
            instance._elements.push(element.clone(clonedOriginalRootElement, clonedRootElement, onCompleteFuncs));
          } else {
            instance._elements.push(element);
          }
        });

        onCompleteFuncs.forEach(function (func) {
          func();
        });

        return instance;
      }
    }, {
      key: '_copy',
      value: function _copy(instance) {
        babelHelpers.get(M_Group.prototype.__proto__ || Object.getPrototypeOf(M_Group.prototype), '_copy', this).call(this, instance);
        instance._AABB = this._AABB.clone();
        instance._isRootJointGroup = this._isRootJointGroup;
      }
    }, {
      key: 'AABB',
      get: function get() {
        return this._AABB;
      }
    }]);
    return M_Group;
  }(M_Element);

  var RenderPass = function (_GLBoostObject) {
    babelHelpers.inherits(RenderPass, _GLBoostObject);

    function RenderPass(glBoostContext) {
      babelHelpers.classCallCheck(this, RenderPass);

      var _this = babelHelpers.possibleConstructorReturn(this, (RenderPass.__proto__ || Object.getPrototypeOf(RenderPass)).call(this, glBoostContext));

      _this._scene = null;
      _this._meshes = [];
      _this._opacityMeshes = [];
      _this._transparentMeshes = [];
      _this._drawBuffers = [_this._glContext.gl.BACK];
      _this._clearColor = null;
      _this._clearDepth = null; // default is 1.0
      _this._renderTargetColorTextures = null;
      _this._renderTargetDepthTexture = null;
      _this._expression = null;
      _this._fbo = null;

      _this._customFunction = null;
      return _this;
    }

    babelHelpers.createClass(RenderPass, [{
      key: 'specifyRenderTargetTextures',
      value: function specifyRenderTargetTextures(renderTargetTextures) {
        var _this2 = this;

        var gl = this._glContext.gl;

        var colorRenderTargetTextures = renderTargetTextures.filter(function (renderTargetTexture) {
          if (renderTargetTexture.colorAttachment) {
            return true;
          } else {
            return false;
          }
        });

        if (colorRenderTargetTextures.length > 0) {
          this._drawBuffers = [];
          colorRenderTargetTextures.forEach(function (texture) {
            var attachment = texture.colorAttachment;
            _this2._drawBuffers.push(attachment);
          });
          this._renderTargetColorTextures = colorRenderTargetTextures;
        } else {
          this._drawBuffers = [gl.NONE];
        }

        var depthRenderTargetTextures = renderTargetTextures.filter(function (renderTargetTexture) {
          if (renderTargetTexture.depthAttachment) {
            return true;
          } else {
            return false;
          }
        });

        this._renderTargetDepthTexture = depthRenderTargetTextures[0];
      }
    }, {
      key: 'setClearColor',
      value: function setClearColor(color) {
        this._clearColor = color;
      }
    }, {
      key: 'setClearDepth',
      value: function setClearDepth(depth) {
        this._clearDepth = depth;
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender() {
        var _this3 = this;

        var collectMeshes = function collectMeshes(elem) {
          if (elem instanceof M_Group) {
            var children = elem.getChildren();
            var meshes = [];
            children.forEach(function (child) {
              var childMeshes = collectMeshes(child);
              meshes = meshes.concat(childMeshes);
            });
            return meshes;
          } else if (elem instanceof M_Mesh) {
            return [elem];
          } else {
            return [];
          }
        };

        this._meshes = [];
        if (this._scene) {
          this._scene.getChildren().forEach(function (elm) {
            _this3._meshes = _this3._meshes.concat(collectMeshes(elm));
          });
        }

        this._opacityMeshes = [];
        this._transparentMeshes = [];
        this._meshes.forEach(function (mesh) {
          if (mesh.isTransparent()) {
            _this3._transparentMeshes.push(mesh);
          } else {
            _this3._opacityMeshes.push(mesh);
          }
        });

        if (this._scene) {
          this._scene.prepareToRender();
        }

        if (this._customFunction) {
          this._customFunction();
        }
      }
    }, {
      key: 'sortTransparentMeshes',
      value: function sortTransparentMeshes(camera) {

        this._transparentMeshes.forEach(function (mesh) {
          mesh.calcTransformedDepth(camera);
        });

        this._transparentMeshes.sort(function (a, b) {
          if (a.transformedDepth < b.transformedDepth) return -1;
          if (a.transformedDepth > b.transformedDepth) return 1;
          return 0;
        });
      }
    }, {
      key: 'expression',
      get: function get() {
        return this._expression;
      }
    }, {
      key: 'scene',
      set: function set(scene) {
        this._scene = scene;
      },
      get: function get() {
        return this._scene;
      }
    }, {
      key: 'meshes',
      get: function get() {
        return this._meshes;
      }
    }, {
      key: 'opacityMeshes',
      get: function get() {
        return this._opacityMeshes;
      }
    }, {
      key: 'transparentMeshes',
      get: function get() {
        return this._transparentMeshes;
      }
    }, {
      key: 'buffersToDraw',
      get: function get() {
        return this._drawBuffers;
      }
    }, {
      key: 'fbo',
      get: function get() {
        if (this._renderTargetColorTextures) {
          return this._renderTargetColorTextures[0].fbo;
        } else if (this._renderTargetDepthTexture) {
          return this._renderTargetDepthTexture.fbo;
        } else {
          return null;
        }
      }
    }, {
      key: 'viewport',
      get: function get() {
        var texture = null;
        if (this._renderTargetColorTextures) {
          texture = this._renderTargetColorTextures[0];
        } else if (this._renderTargetDepthTexture) {
          texture = this._renderTargetDepthTexture;
        }

        return new Vector4(0, 0, texture.width, texture.height);
      }
    }, {
      key: 'renderTargetColorTextures',
      get: function get() {
        return this._renderTargetColorTextures;
      }
    }, {
      key: 'renderTargetDepthTexture',
      get: function get() {
        return this._renderTargetDepthTexture;
      }
    }, {
      key: 'clearColor',
      get: function get() {
        return this._clearColor;
      }
    }, {
      key: 'clearDepth',
      get: function get() {
        return this._clearDepth;
      }

      /**
       * this function is called final part of prepareToRender
       */

    }, {
      key: 'customFunction',
      set: function set(func) {
        this._customFunction = func;
      },
      get: function get() {
        return this._customFunction;
      }
    }]);
    return RenderPass;
  }(GLBoostObject);

  var Expression = function (_GLBoostObject) {
    babelHelpers.inherits(Expression, _GLBoostObject);

    function Expression(glBoostContext) {
      babelHelpers.classCallCheck(this, Expression);

      var _this = babelHelpers.possibleConstructorReturn(this, (Expression.__proto__ || Object.getPrototypeOf(Expression)).call(this, glBoostContext));

      _this._renderPasses = [];
      return _this;
    }

    babelHelpers.createClass(Expression, [{
      key: 'addRenderPasses',
      value: function addRenderPasses(renderPasses) {
        var _this2 = this;

        renderPasses.forEach(function (renderPass) {
          renderPass._expression = _this2;
        });

        this._renderPasses = this._renderPasses.concat(renderPasses);
      }
    }, {
      key: 'addRenderPass',
      value: function addRenderPass(renderPass) {
        renderPath._expression = this;
        this._renderPasses.push(renderPass);
      }
    }, {
      key: 'clearRenderPasses',
      value: function clearRenderPasses() {
        this._renderPasses.forEach(function (renderPass) {
          renderPass._expression = null;
        });
        this._renderPasses.length = 0;
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender() {
        this._renderPasses.forEach(function (renderPass) {
          renderPass.prepareToRender();
        });
      }
    }, {
      key: 'renderPasses',
      get: function get() {
        return this._renderPasses;
      }
    }]);
    return Expression;
  }(GLBoostObject);

  GLBoost$1['Expression'] = Expression;

  var SkeletalShaderSource = function () {
    function SkeletalShaderSource() {
      babelHelpers.classCallCheck(this, SkeletalShaderSource);
    }

    babelHelpers.createClass(SkeletalShaderSource, [{
      key: 'VSDefine_SkeletalShaderSource',
      value: function VSDefine_SkeletalShaderSource(in_, out_, f, lights, material, extraData) {
        var shaderText = '';
        shaderText += in_ + ' vec4 aVertex_joint;\n';
        shaderText += in_ + ' vec4 aVertex_weight;\n';
        shaderText += 'uniform mat4 skinTransformMatrices[' + extraData.jointN + '];\n';
        return shaderText;
      }

      /**
       * @return {string}
       */

    }, {
      key: 'VSTransform_SkeletalShaderSource',
      value: function VSTransform_SkeletalShaderSource(existCamera_f, f, lights, material, extraData) {
        var shaderText = '';

        shaderText += 'vec4 weightVec = normalize(aVertex_weight);\n';
        shaderText += 'mat4 skinMat = weightVec.x * skinTransformMatrices[int(aVertex_joint.x)];\n';
        shaderText += 'skinMat += weightVec.y * skinTransformMatrices[int(aVertex_joint.y)];\n';
        shaderText += 'skinMat += weightVec.z * skinTransformMatrices[int(aVertex_joint.z)];\n';
        shaderText += 'skinMat += weightVec.w * skinTransformMatrices[int(aVertex_joint.w)];\n';

        shaderText += '  vec4 position = vec4(aVertex_position.x, aVertex_position.y, aVertex_position.z, 1.0);';

        if (existCamera_f) {
          shaderText += '  gl_Position = pvwMatrix * skinMat * position;\n';
        } else {
          shaderText += '  gl_Position = skinMat * vec4(aVertex_position, 1.0);\n';
        }

        return shaderText;
      }
    }, {
      key: 'prepare_SkeletalShaderSource',
      value: function prepare_SkeletalShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {
        var vertexAttribsAsResult = [];

        vertexAttribs.forEach(function (attribName) {
          if (attribName === GLBoost.JOINT || attribName === GLBoost.WEIGHT) {
            vertexAttribsAsResult.push(attribName);
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
          }
        });

        material['uniform_skinTransformMatrices'] = gl.getUniformLocation(shaderProgram, 'skinTransformMatrices');
        material._semanticsDic['JOINTMATRIX'] = 'skinTransformMatrices';
        // とりあえず単位行列で初期化
        var identityMatrices = [];
        for (var i = 0; i < extraData.jointN; i++) {
          Array.prototype.push.apply(identityMatrices, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
        }
        gl.uniformMatrix4fv(shaderProgram['uniform_skinTransformMatrices'], false, new Float32Array(identityMatrices));

        return vertexAttribsAsResult;
      }
    }]);
    return SkeletalShaderSource;
  }();

  var FreeShader = function (_Shader) {
    babelHelpers.inherits(FreeShader, _Shader);

    function FreeShader(glBoostContext, vertexShaderText, fragmentShaderText, attributes, uniforms, textureNames) {
      babelHelpers.classCallCheck(this, FreeShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (FreeShader.__proto__ || Object.getPrototypeOf(FreeShader)).call(this, glBoostContext));

      _this._vertexShaderText = vertexShaderText;
      _this._fragmentShaderText = fragmentShaderText;

      var newAttributes = {};
      for (var attributeName in attributes) {
        switch (attributes[attributeName]) {
          case 'POSITION':
            newAttributes.position = attributeName;
            break;
          case 'NORMAL':
            newAttributes.normal = attributeName;
            break;
          case 'COLOR':
            newAttributes.color = attributeName;
            break;
          case 'TEXCOORD_0':
            newAttributes.texcoord = attributeName;
            break;
          case 'JOINT':
            newAttributes.joint = attributeName;
            break;
          case 'WEIGHT':
            newAttributes.weight = attributeName;
            break;
          default:
            newAttributes[attributes[attributeName]] = attributeName;
            break;
        }
      }

      _this._attributes = newAttributes;
      _this._uniforms = uniforms;
      _this._textureNames = textureNames;
      return _this;
    }

    babelHelpers.createClass(FreeShader, [{
      key: '_getVertexShaderString',
      value: function _getVertexShaderString(gl, functions, existCamera_f, lights, material, extraData) {
        return this._vertexShaderText;
      }
    }, {
      key: '_getFragmentShaderString',
      value: function _getFragmentShaderString(gl, functions, lights, material, extraData) {
        return this._fragmentShaderText;
      }
    }, {
      key: '_prepareAssetsForShaders',
      value: function _prepareAssetsForShaders(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {
        var _this2 = this;

        var vertexAttribsAsResult = [];

        vertexAttribs.forEach(function (attribName) {
          shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, _this2._attributes[attribName]);
          if (shaderProgram['vertexAttribute_' + attribName] >= 0) {
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });

        var textureCount = 0;
        gl.useProgram(shaderProgram);

        for (var uniformName in this._uniforms) {
          if (this._uniforms[uniformName] === 'TEXTURE') {
            material.uniformTextureSamplerDic[uniformName] = {};
            var textureUniformLocation = gl.getUniformLocation(shaderProgram, uniformName);
            if (textureUniformLocation < 0) {
              continue;
            }
            material.uniformTextureSamplerDic[uniformName].uniformLocation = textureUniformLocation;
            material.uniformTextureSamplerDic[uniformName].textureName = this._textureNames[uniformName];
            material.uniformTextureSamplerDic[uniformName].textureUnitIndex = textureCount;

            gl.uniform1i(material.uniformTextureSamplerDic[uniformName].uniformLocation, textureCount);

            textureCount++;
          }

          switch (this._uniforms[uniformName]) {
            case 'MODELVIEW':
            case 'MODELVIEWINVERSETRANSPOSE':
            case 'PROJECTION':
            case 'JOINTMATRIX':
              material['uniform_' + uniformName] = gl.getUniformLocation(shaderProgram, uniformName);
            case 'TEXTURE':
              if (typeof material._semanticsDic[this._uniforms[uniformName]] === 'undefined') {
                material._semanticsDic[this._uniforms[uniformName]] = uniformName;
              } else if (typeof material._semanticsDic[this._uniforms[uniformName]] === 'string') {
                var tmpSemanticsStr = material._semanticsDic[this._uniforms[uniformName]];
                material._semanticsDic[this._uniforms[uniformName]] = [];
                material._semanticsDic[this._uniforms[uniformName]].push(tmpSemanticsStr);
                material._semanticsDic[this._uniforms[uniformName]].push(uniformName);
              } else {
                // it must be Array
                material._semanticsDic[this._uniforms[uniformName]].push(uniformName);
              }
              continue;
          }

          material['uniform_' + uniformName] = gl.getUniformLocation(shaderProgram, uniformName);
        }

        return vertexAttribsAsResult;
      }
    }, {
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {

        for (var uniformName in this._uniforms) {
          var value = this._uniforms[uniformName];

          if (typeof value === 'number') {
            gl.uniform1f(material['uniform_' + uniformName], value);
          } else if (value instanceof Vector2) {
            gl.uniform2f(material['uniform_' + uniformName], value.x, value.y);
          } else if (value instanceof Vector3) {
            gl.uniform3f(material['uniform_' + uniformName], value.x, value.y, value.z);
          } else if (value instanceof Vector4) {
            gl.uniform4f(material['uniform_' + uniformName], value.x, value.y, value.z, value.w);
          }
        }
      }
    }, {
      key: 'attributes',
      get: function get() {
        return this._attributes;
      }
    }]);
    return FreeShader;
  }(Shader);

  GLBoost['FreeShader'] = FreeShader;

  var M_SkeletalGeometry = function (_Geometry) {
    babelHelpers.inherits(M_SkeletalGeometry, _Geometry);

    function M_SkeletalGeometry(glBoostContext) {
      babelHelpers.classCallCheck(this, M_SkeletalGeometry);
      return babelHelpers.possibleConstructorReturn(this, (M_SkeletalGeometry.__proto__ || Object.getPrototypeOf(M_SkeletalGeometry)).call(this, glBoostContext));
    }

    babelHelpers.createClass(M_SkeletalGeometry, [{
      key: 'draw',
      value: function draw(lights, camera, skeletalMesh, scene, renderPass_index) {
        var gl = this._glContext.gl;
        if (this._materials.length > 0) {
          var materials = this._materials;
        } else if (skeletalMesh.material) {
          var materials = [skeletalMesh.material];
        } else {
          var materials = [];
        }

        var calcParentJointsMatricesRecursively = function calcParentJointsMatricesRecursively(joint) {
          var children = joint.parent.parent.getChildren();
          var parentJoint = null;
          for (var i = 0; i < children.length; i++) {
            if (children[i] instanceof M_Joint) {
              parentJoint = children[i];
            }
          }

          var results = [];
          if (parentJoint) {
            var result = calcParentJointsMatricesRecursively(parentJoint);
            if (Array.isArray(result)) {
              Array.prototype.push.apply(results, result);
            }

            results.push(parentJoint);

            return results;
          }

          return null;
        };

        var joints = skeletalMesh._joints; //skeletalMesh.jointsHierarchy.searchElementsByType(M_Joint);
        var matrices = [];
        var globalJointTransform = [];

        var areThereAnyJointsWhichHaveAnimation = false;
        for (var i = 0; i < joints.length; i++) {
          if (joints[i].parent._getCurrentAnimationInputValue(joints[i].parent._activeAnimationLineName) >= 0) {
            areThereAnyJointsWhichHaveAnimation = true;
          }
        }

        if (areThereAnyJointsWhichHaveAnimation) {
          for (var _i = 0; _i < joints.length; _i++) {
            var jointsHierarchy = calcParentJointsMatricesRecursively(joints[_i]);
            if (jointsHierarchy == null) {
              jointsHierarchy = [];
            }
            jointsHierarchy.push(joints[_i]);
            //console.log(jointsHierarchy);
            var tempMatrices = [];

            for (var j = 0; j < jointsHierarchy.length; j++) {
              var thisLoopMatrix = jointsHierarchy[j].parent.transformMatrix;
              //console.log(thisLoopMatrix.toStringApproximately());
              if (j > 0) {
                tempMatrices[j] = Matrix44$1.multiply(tempMatrices[j - 1], thisLoopMatrix);
              } else {
                var upperGroupsAccumulatedMatrix = Matrix44$1.identity();
                if (typeof jointsHierarchy[0].parent.parent != 'undefined' && jointsHierarchy[0].parent.parent instanceof M_Group) {
                  // if there are group hierarchies above the root joint ...
                  upperGroupsAccumulatedMatrix = skeletalMesh.transformMatrixAccumulatedAncestry;
                }
                tempMatrices[j] = upperGroupsAccumulatedMatrix.multiply(thisLoopMatrix);
              }
            }
            globalJointTransform[_i] = tempMatrices[jointsHierarchy.length - 1];
          }
          for (var _i2 = 0; _i2 < joints.length; _i2++) {
            matrices[_i2] = Matrix44$1.multiply(Matrix44$1.invert(skeletalMesh.transformMatrixAccumulatedAncestry), globalJointTransform[_i2]);
            var inverseBindMatrix = typeof skeletalMesh.inverseBindMatrices[_i2] !== 'undefined' ? skeletalMesh.inverseBindMatrices[_i2] : Matrix44$1.identity();
            matrices[_i2] = Matrix44$1.multiply(matrices[_i2], inverseBindMatrix);
            matrices[_i2] = Matrix44$1.multiply(matrices[_i2], skeletalMesh.bindShapeMatrix);
          }
        } else {
          for (var _i3 = 0; _i3 < joints.length; _i3++) {
            matrices[_i3] = skeletalMesh.bindShapeMatrix;
          }
        }

        var flatMatrices = [];
        for (var _i4 = 0; _i4 < matrices.length; _i4++) {
          Array.prototype.push.apply(flatMatrices, matrices[_i4].flattenAsArray());
        }

        if (matrices.length < 4) {
          var identityMatrices = [];
          for (var _i5 = 0; _i5 < 4 - matrices.length; _i5++) {
            Array.prototype.push.apply(identityMatrices, [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
          }
          Array.prototype.push.apply(flatMatrices, identityMatrices);
        }

        for (var _i6 = 0; _i6 < materials.length; _i6++) {
          var glslProgram = materials[_i6].shaderInstance.glslProgram;
          gl.useProgram(glslProgram);
          Shader.trySettingMatrix44ToUniform(gl, materials[_i6], materials[_i6]._semanticsDic, 'JOINTMATRIX', new Float32Array(flatMatrices));
        }

        babelHelpers.get(M_SkeletalGeometry.prototype.__proto__ || Object.getPrototypeOf(M_SkeletalGeometry.prototype), 'draw', this).call(this, lights, camera, skeletalMesh, scene, renderPass_index);
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, pointLight, meshMaterial, skeletalMesh) {
        var _this3 = this;

        // before prepareForRender of 'Geometry' class, a new 'BlendShapeShader'(which extends default shader) is assigned.

        if (this._materials.length > 0) {
          this._materialForSkeletal = this._materials[0];
        } else if (meshMaterial) {
          this._materialForSkeletal = meshMaterial;
        } else {
          this._materialForSkeletal = this._defaultMaterial;
        }

        if (!(this._materialForSkeletal.shaderInstance !== null && this._materialForSkeletal.shaderInstance.constructor === FreeShader)) {
          (function () {
            var SkeletalShader = function (_materialForSkeletal$) {
              babelHelpers.inherits(SkeletalShader, _materialForSkeletal$);

              function SkeletalShader(glBoostContext, basicShader) {
                babelHelpers.classCallCheck(this, SkeletalShader);

                var _this2 = babelHelpers.possibleConstructorReturn(this, (SkeletalShader.__proto__ || Object.getPrototypeOf(SkeletalShader)).call(this, glBoostContext, basicShader));

                SkeletalShader.mixin(SkeletalShaderSource);
                return _this2;
              }

              return SkeletalShader;
            }(_this3._materialForSkeletal.shaderClass);

            if (_this3._materials.length > 0) {
              for (var i = 0; i < _this3._materials.length; i++) {
                if (_this3._materials[i].shaderClass.name !== SkeletalShader.name) {
                  _this3._materials[i].shaderClass = SkeletalShader;
                }
              }
            } else if (meshMaterial) {
              if (meshMaterial.shaderClass.name !== SkeletalShader.name) {
                meshMaterial.shaderClass = SkeletalShader;
              }
            } else {
              if (_this3._defaultMaterial.shaderClass.name !== SkeletalShader.name) {
                _this3._defaultMaterial.shaderClass = SkeletalShader;
              }
            }
          })();
        }

        babelHelpers.get(M_SkeletalGeometry.prototype.__proto__ || Object.getPrototypeOf(M_SkeletalGeometry.prototype), 'prepareToRender', this).call(this, existCamera_f, pointLight, meshMaterial, skeletalMesh);
      }
    }]);
    return M_SkeletalGeometry;
  }(Geometry);

  var M_SkeletalMesh = function (_M_Mesh) {
    babelHelpers.inherits(M_SkeletalMesh, _M_Mesh);

    function M_SkeletalMesh(glBoostContext, geometry, material, rootJointName) {
      babelHelpers.classCallCheck(this, M_SkeletalMesh);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_SkeletalMesh.__proto__ || Object.getPrototypeOf(M_SkeletalMesh)).call(this, glBoostContext, geometry, material, rootJointName));

      _this._rootJointName = rootJointName;
      _this._jointsHierarchy = null;
      _this._inverseBindMatrices = [];
      _this._bindShapeMatrix = Matrix44$1.identity();
      _this._jointNames = [];
      _this._joints = [];
      return _this;
    }

    babelHelpers.createClass(M_SkeletalMesh, [{
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, lights, renderPasses) {
        var joints = this.jointsHierarchy.searchElementsByType(M_Joint);

        this._joints = [];

        for (var i = 0; i < this._jointNames.length; i++) {
          for (var j = 0; j < joints.length; j++) {
            if (this._jointNames[i] === joints[j]._userFlavorName) {
              this._joints.push(joints[j]);
              //this._inverseBindMatrices.push(this._rawInverseBindMatrices[j]);
            }
          }
        }
        //this._joints = joints;

        babelHelpers.get(M_SkeletalMesh.prototype.__proto__ || Object.getPrototypeOf(M_SkeletalMesh.prototype), 'prepareToRender', this).call(this, existCamera_f, lights, renderPasses);
      }
    }, {
      key: 'clone',
      value: function clone() {
        var clonedOriginalRootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;
        var clonedRootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var onCompleteFuncs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

        var instance = new M_SkeletalMesh(this._glBoostContext, this.geometry, this.material, this._rootJointName);
        this._copy(instance, clonedOriginalRootElement, clonedRootElement, onCompleteFuncs);

        return instance;
      }
    }, {
      key: '_copy',
      value: function _copy(instance, clonedOriginalRootElement, clonedRootElement, onCompleteFuncs) {
        babelHelpers.get(M_SkeletalMesh.prototype.__proto__ || Object.getPrototypeOf(M_SkeletalMesh.prototype), '_copy', this).call(this, instance);

        instance._jointsHierarchy = this._jointsHierarchy.clone();
        instance._inverseBindMatrices = this._inverseBindMatrices;
        instance._bindShapeMatrix = this._bindShapeMatrix;
        instance._jointNames = this._jointNames;
        instance._joints = this._joints;

        onCompleteFuncs.push(function (clonedSkeletalMesh, _clonedRootElement, jointRootGroupUserFlavorName) {
          return function () {
            var clonedJointRootGroup = _clonedRootElement.searchElement(jointRootGroupUserFlavorName);
            clonedSkeletalMesh._jointsHierarchy = clonedJointRootGroup;
          };
        }(instance, clonedRootElement, this._jointsHierarchy.userFlavorName));
      }
    }, {
      key: 'jointsHierarchy',
      set: function set(jointsHierarchy) {
        this._jointsHierarchy = jointsHierarchy;
      },
      get: function get() {
        return this._jointsHierarchy;
      }
    }, {
      key: 'rootJointName',
      get: function get() {
        return this._rootJointName;
      }
    }, {
      key: 'inverseBindMatrices',
      set: function set(inverseBindMatrices) {
        this._inverseBindMatrices = inverseBindMatrices;
        this._geometry.setExtraDataForShader('jointN', inverseBindMatrices.length < 4 ? 4 : inverseBindMatrices.length);
      },
      get: function get() {
        return this._inverseBindMatrices;
      }
    }, {
      key: 'bindShapeMatrix',
      set: function set(matrix) {
        this._bindShapeMatrix = matrix;
      },
      get: function get() {
        return this._bindShapeMatrix;
      }
    }, {
      key: 'jointNames',
      set: function set(names) {
        this._jointNames = names;
      },
      get: function get() {
        return this._jointNames;
      }
    }]);
    return M_SkeletalMesh;
  }(M_Mesh);

  GLBoost$1['M_SkeletalMesh'] = M_SkeletalMesh;

  /**
   * [en] This M_Scene class is the top level element of scene graph hierarchy.
   *       To render scene, pass this scene element to Renderer.draw method.<br>
   * [ja] このSceneクラスはシーングラフ階層のトップレベルに位置する要素です。
   *       シーンをレンダリングするには、このscene要素をRenderer.drawメソッドに渡します。
   */

  var M_Scene = function (_M_Group) {
    babelHelpers.inherits(M_Scene, _M_Group);

    /**
     * [en] constructor
     * [ja] コンストラクタ
     * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     */
    function M_Scene(glBoostContext) {
      babelHelpers.classCallCheck(this, M_Scene);

      var _this = babelHelpers.possibleConstructorReturn(this, (M_Scene.__proto__ || Object.getPrototypeOf(M_Scene)).call(this, glBoostContext));

      _this._gl = _this._glContext.gl;
      _this._reset();
      return _this;
    }

    babelHelpers.createClass(M_Scene, [{
      key: '_reset',
      value: function _reset() {
        this._meshes = [];
        this._lights = [];
        this._cameras = [];
      }
    }, {
      key: '_getCurrentAnimationInputValue',
      value: function _getCurrentAnimationInputValue(inputName) {
        var value = this._currentAnimationInputValues[inputName];
        if (typeof value === 'undefined') {
          return -1;
        } else {
          return value;
        }
      }

      /**
       * [en] Prepare for Rendering. You have to call this method before Renderer.draw method.
       * [ja] レンダリングのための前処理を行います。Renderer.drawメソッドの前にこのメソッドを呼ぶ必要があります。
       */

    }, {
      key: 'prepareToRender',
      value: function prepareToRender() {
        var _this2 = this;

        this._reset();

        var aabb = function setParentAndMergeAABBRecursively(elem) {
          if (elem instanceof M_Group) {
            var children = elem.getChildren();
            for (var i = 0; i < children.length; i++) {
              children[i]._parent = elem;
              var aabb = setParentAndMergeAABBRecursively(children[i]);
              if (aabb instanceof AABB) {
                elem.AABB.mergeAABB(aabb);
              } else {
                console.assert('calculation of AABB error!');
              }
            }
            return elem.AABB;
          }
          if (elem instanceof M_Mesh) {
            return elem.AABB;
          }

          return null;
        }(this);
        this.AABB.mergeAABB(aabb);

        var collectLights = function collectLights(elem) {
          if (elem instanceof M_Group) {
            var children = elem.getChildren();
            var lights = [];
            children.forEach(function (child) {
              var childLights = collectLights(child);
              lights = lights.concat(childLights);
            });
            return lights;
          } else if (elem instanceof M_AbstractLight) {
            return [elem];
          } else {
            return [];
          }
        };

        this._lights = [];
        this._elements.forEach(function (elm) {
          _this2._lights = _this2._lights.concat(collectLights(elm));
        });

        var existCamera_f = false;
        var collectCameras = function collectCameras(elem) {
          if (elem instanceof M_Group) {
            var children = elem.getChildren();
            var cameras = [];
            children.forEach(function (child) {
              var childCameras = collectCameras(child);
              cameras = cameras.concat(childCameras);
            });
            return cameras;
          } else if (elem instanceof M_AbstractCamera) {
            existCamera_f = true;
            return [elem];
          } else {
            return [];
          }
        };

        this._cameras = [];
        this._elements.forEach(function (elm) {
          _this2._cameras = _this2._cameras.concat(collectCameras(elm));
        });
        if (this._cameras.length !== 0) {
          this._cameras[0].setAsMainCamera(this);
        }

        var collectMeshes = function collectMeshes(elem) {
          if (elem instanceof M_Group) {
            var children = elem.getChildren();
            var meshes = [];
            children.forEach(function (child) {
              var childMeshes = collectMeshes(child);
              meshes = meshes.concat(childMeshes);
            });
            return meshes;
          } else if (elem instanceof M_Mesh) {
            return [elem];
          } else {
            return [];
          }
        };

        this._meshes = [];
        this._elements.forEach(function (elm) {
          _this2._meshes = _this2._meshes.concat(collectMeshes(elm));
        });

        var callPrepareToRenderMethodOfAllElements = function callPrepareToRenderMethodOfAllElements(elem) {
          if (elem instanceof M_Group) {
            var children = elem.getChildren();
            children.forEach(function (child) {
              callPrepareToRenderMethodOfAllElements(child);
            });
          } else if (elem instanceof M_Mesh) {
            elem.prepareToRender(existCamera_f, _this2._lights);
          } else if (elem instanceof M_Element) {
            elem.prepareToRender();
          } else {
            return;
          }
        };
        callPrepareToRenderMethodOfAllElements(this);
      }

      /**
       * [en] Get child elements which belong to this scene.<br>
       * [ja] このシーンに属していた子供の要素の配列を返します。
       * @return {Array<Element>} [en] child elements of this scene. [ja] このシーンの子供の要素
       */

    }, {
      key: 'getChildren',
      value: function getChildren() {
        return this._elements;
      }

      /**
       * [en] Get child elements which belong to this scene.<br>
       * [ja] このシーンに属していた子供の要素の配列を返します。
       * @return {Array<Element>} [en] child elements of this scene. [ja] このシーンの子供の要素
       */

    }, {
      key: 'elements',
      get: function get() {
        return this._elements;
      }

      /**
       * [en] Get child meshes which belong to this scene.<br>
       * [ja] このシーンに属していた子供のMesh要素の配列を返します。
       * @return {Array<M_Mesh>} [en] child meshes of this scene. [ja] このシーンの子供のMesh要素
       */

    }, {
      key: 'meshes',
      get: function get() {
        return this._meshes;
      }

      /**
       * [en] Get child lights which belong to this scene.<br>
       * [ja] このシーンに属していた子供のLight要素の配列を返します。
       * @return {Array<M_AbstractLight>} [en] child lights of this scene. [ja] このシーンの子供のLight要素
       */

    }, {
      key: 'lights',
      get: function get() {
        return this._lights;
      }

      /**
       * [en] Get child cameras which belong to this scene.<br>
       * [ja] このシーンに属していた子供のCamera要素の配列を返します。
       * @return {Array<PerspectiveCamera>} [en] child cameras of this scene. [ja] このシーンの子供のCamera要素
       */

    }, {
      key: 'cameras',
      get: function get() {
        return this._cameras;
      }
    }]);
    return M_Scene;
  }(M_Group);

  var GLContextImpl = function () {
    function GLContextImpl(canvas, parent) {
      babelHelpers.classCallCheck(this, GLContextImpl);

      //    if (new.target === GLContextImpl) {
      if (this.constructor === GLContextImpl) {
        throw new TypeError("Cannot construct GLContextImpl instances directly");
      }

      if (!(parent instanceof GLContext)) {
        throw new Error("This concrete class can only be instantiated from the 'GLContext' class.");
      }

      if (canvas === void 0) {
        throw new Error("Failed to create WebGL Context due to no canvas object.");
      }

      this._canvas = canvas;
    }

    babelHelpers.createClass(GLContextImpl, [{
      key: "init",
      value: function init(glVersionString, ContextType, gl) {

        if (gl) {
          this._gl = gl;
        } else {

          var _gl = this._canvas.getContext(glVersionString);

          if (!_gl) {
            _gl = this._canvas.getContext('experimental-' + glVersionString);
            if (!_gl) {
              throw new Error("This platform doesn't support WebGL.");
            }
          }

          if (!_gl instanceof ContextType) {
            throw new Error("Unexpected rendering context.");
          }

          this._gl = _gl;
        }
      }
    }, {
      key: "gl",
      get: function get() {
        return this._gl;
      },
      set: function set(gl) {
        this._gl = gl;
      }
    }, {
      key: "canvas",
      get: function get() {
        return this._canvas;
      }
    }]);
    return GLContextImpl;
  }();

  var GLContextWebGL2Impl = function (_GLContextImpl) {
    babelHelpers.inherits(GLContextWebGL2Impl, _GLContextImpl);

    function GLContextWebGL2Impl(canvas, parent, gl) {
      babelHelpers.classCallCheck(this, GLContextWebGL2Impl);

      var _this = babelHelpers.possibleConstructorReturn(this, (GLContextWebGL2Impl.__proto__ || Object.getPrototypeOf(GLContextWebGL2Impl)).call(this, canvas, parent));

      babelHelpers.get(GLContextWebGL2Impl.prototype.__proto__ || Object.getPrototypeOf(GLContextWebGL2Impl.prototype), 'init', _this).call(_this, 'webgl2', WebGL2RenderingContext, gl);

      return _this;
    }

    return GLContextWebGL2Impl;
  }(GLContextImpl);

  var GLContextWebGL1Impl = function (_GLContextImpl) {
    babelHelpers.inherits(GLContextWebGL1Impl, _GLContextImpl);

    function GLContextWebGL1Impl(canvas, parent, gl) {
      babelHelpers.classCallCheck(this, GLContextWebGL1Impl);

      var _this = babelHelpers.possibleConstructorReturn(this, (GLContextWebGL1Impl.__proto__ || Object.getPrototypeOf(GLContextWebGL1Impl)).call(this, canvas, parent));

      if (gl) {
        babelHelpers.get(GLContextWebGL1Impl.prototype.__proto__ || Object.getPrototypeOf(GLContextWebGL1Impl.prototype), 'init', _this).call(_this, 'webgl', null, gl);
      } else {
        babelHelpers.get(GLContextWebGL1Impl.prototype.__proto__ || Object.getPrototypeOf(GLContextWebGL1Impl.prototype), 'init', _this).call(_this, 'webgl', WebGLRenderingContext, gl);
      }
      return _this;
    }

    return GLContextWebGL1Impl;
  }(GLContextImpl);

  var GLContext = function () {
    function GLContext(canvas, gl, width, height) {
      babelHelpers.classCallCheck(this, GLContext);


      if (typeof gl !== 'undefined' && gl !== null) {
        this.impl = new GLContextWebGL1Impl(canvas, this, gl);
        this._width = width;
        this._height = height;
        GLContext._instances['nocanvas'] = this;
      } else {
        if (GLContext._instances[canvas.id] instanceof GLContext) {
          return GLContext._instances[canvas.id];
        }

        if (GLBoost.VALUE_TARGET_WEBGL_VERSION === 1) {
          this.impl = new GLContextWebGL1Impl(canvas, this);
        } else if (GLBoost.VALUE_TARGET_WEBGL_VERSION === 2) {
          this.impl = new GLContextWebGL2Impl(canvas, this);
        }

        GLContext._instances[canvas.id] = this;
        this._width = canvas.width;
        this._height = canvas.height;
      }

      this._monitor = GLBoostMonitor.getInstance();
    }

    babelHelpers.createClass(GLContext, [{
      key: 'createVertexArray',
      value: function createVertexArray(glBoostObject) {
        var gl = this.gl;
        var glem = GLExtensionsManager.getInstance(this);
        var glResource = glem.createVertexArray(gl);
        if (glResource) {
          this._monitor.registerWebGLResource(glBoostObject, glResource);
        }

        return glResource;
      }
    }, {
      key: 'createBuffer',
      value: function createBuffer(glBoostObject) {
        var glResource = this.gl.createBuffer();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'createFramebuffer',
      value: function createFramebuffer(glBoostObject) {
        var glResource = this.gl.createFramebuffer();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'deleteFramebuffer',
      value: function deleteFramebuffer(glBoostObject, frameBuffer) {
        this._monitor.deregisterWebGLResource(glBoostObject, frameBuffer);
        this.gl.deleteFramebuffer(frameBuffer);
        frameBuffer = null;
      }
    }, {
      key: 'createRenderbuffer',
      value: function createRenderbuffer(glBoostObject) {
        var glResource = this.gl.createRenderbuffer();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'createShader',
      value: function createShader(glBoostObject, shaderType) {
        var glResource = this.gl.createShader(shaderType);
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'deleteShader',
      value: function deleteShader(glBoostObject, shader) {
        this._monitor.deregisterWebGLResource(glBoostObject, shader);
        this.gl.deleteShader(shader);
        shader = null;
      }
    }, {
      key: 'createProgram',
      value: function createProgram(glBoostObject) {
        var glResource = this.gl.createProgram();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'deleteProgram',
      value: function deleteProgram(glBoostObject, program) {
        this._monitor.deregisterWebGLResource(glBoostObject, program);
        this.gl.deleteProgram(program);
      }
    }, {
      key: 'createTexture',
      value: function createTexture(glBoostObject) {
        var glResource = this.gl.createTexture();
        this._monitor.registerWebGLResource(glBoostObject, glResource);
        return glResource;
      }
    }, {
      key: 'deleteTexture',
      value: function deleteTexture(glBoostObject, texture) {
        this._monitor.deregisterWebGLResource(glBoostObject, texture);
        this.gl.deleteTexture(texture);
        texture = null;
      }
    }, {
      key: 'gl',
      get: function get() {
        return this.impl.gl;
      },
      set: function set(gl) {
        this.impl.gl = gl;
      }
    }, {
      key: 'belongingCanvasId',
      get: function get() {
        if (this.impl.canvas) {
          return this.impl.canvas.id;
        } else {
          return 'nocanvas';
        }
      }
    }, {
      key: 'canvas',
      get: function get() {
        return this.impl.canvas;
      }
    }, {
      key: 'width',
      get: function get() {
        return this._width;
      },
      set: function set(width) {
        if (this.impl.canvas) {
          this.impl.canvas.width = width;
        }
        this._width = width;
      }
    }, {
      key: 'height',
      get: function get() {
        return this._height;
      },
      set: function set(height) {
        if (this.impl.canvas) {
          this.impl.canvas.height = height;
        }
        this._height = height;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance(canvas, gl, width, height) {
        if (typeof canvas === 'string') {
          canvas = window.document.querySelector(canvas);
        }
        return new GLContext(canvas, gl, width, height);
      }
    }]);
    return GLContext;
  }();

  GLContext._instances = new Object();

  /**
   * [en] This is the abstract class for all texture classes. Don't use this class directly.<br>
   * [ja] 全てのテクスチャクラスのための抽象クラスです。直接このクラスは使わないでください。
   */

  var AbstractTexture = function (_GLBoostObject) {
    babelHelpers.inherits(AbstractTexture, _GLBoostObject);

    /**
     * [en] The constructor of PointLight class. Do not construct this class directly.<br>
     * [ja] PointLightクラスのコンストラクタ。直接このクラスを生成しようとしないでください。
     *
     * * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     */
    function AbstractTexture(glBoostContext) {
      babelHelpers.classCallCheck(this, AbstractTexture);

      var _this = babelHelpers.possibleConstructorReturn(this, (AbstractTexture.__proto__ || Object.getPrototypeOf(AbstractTexture)).call(this, glBoostContext));

      if (_this.constructor === AbstractTexture) {
        throw new TypeError('Cannot construct AbstractTexture instances directly.');
      }

      _this._textureUnitIndex = 0;
      return _this;
    }

    /**
     * [en] get the WebGL texture resource within this class. <br />
     * [ja] このクラス内部で管理しているWebGLテクスチャリソースを取得します。
     *
     * @returns {null|*} [en] WebGL texture resouce. [ja] WebGLテクスチャリソース
     */


    babelHelpers.createClass(AbstractTexture, [{
      key: 'setUp',


      /**
       * [en] bind the texture. <br />
       * [ja] テクスチャをバインドします。
       */
      value: function setUp(textureUnitIndex) {
        var gl = this._glContext.gl;
        if (this._texture === null) {
          return false;
        }
        var index = !(typeof textureUnitIndex === 'undefined') ? textureUnitIndex : this._textureUnitIndex;
        gl.activeTexture(gl['TEXTURE' + index]);
        gl.bindTexture(gl.TEXTURE_2D, this._texture);

        return true;
      }

      /**
       * [en] unbind the texture. <br />
       * [ja] テクスチャをバインド解除します。
       */

    }, {
      key: 'tearDown',
      value: function tearDown() {
        var gl = this._glContext.gl;
        gl.bindTexture(gl.TEXTURE_2D, null);
      }
    }, {
      key: 'getTexturePixelData',
      value: function getTexturePixelData() {
        // Create a framebuffer backed by the texture
        var framebuffer = this._glContext.createFramebuffer(this);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);

        // Read the contents of the framebuffer (data stores the pixel data)
        var data = new Uint8Array(this.width * this.height * 4);
        gl.readPixels(0, 0, this.width, this.height, gl.RGBA, gl.UNSIGNED_BYTE, data);

        this._glContext.deleteFramebuffer(this, framebuffer);

        return data;
      }
    }, {
      key: '_getResizedCanvas',
      value: function _getResizedCanvas(image) {
        var canvas = document.createElement("canvas");
        canvas.width = this._getNearestPowerOfTwo(image.width);
        canvas.height = this._getNearestPowerOfTwo(image.height);

        var ctx = canvas.getContext("2d");
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        return canvas;
      }
      /**
       * [en] check whether or not this texture size is power of two. <br />
       * [ja] テクスチャサイズが２の累乗かどうかを返します
       *
       * @param {number} x [en] texture size. [ja] テクスチャサイズ
       * @returns {boolean} [en] check whether or not the size x is power of two. [ja] xが２の累乗かどうか
       */

    }, {
      key: '_isPowerOfTwo',
      value: function _isPowerOfTwo(x) {
        return (x & x - 1) == 0;
      }

      /**
       * [en] get a value nearest power of two. <br />
       * [ja] 与えられた数から見て２の累乗に最も近い値を返します。
       *
       * @param {number} x [en] texture size. [ja] テクスチャサイズ
       * @returns {number} [en] a value nearest power of two. [ja] xに近い２の累乗の値
       */

    }, {
      key: '_getNearestPowerOfTwo',
      value: function _getNearestPowerOfTwo(x) {
        return Math.pow(2, Math.round(Math.log(x) / Math.LN2));
      }
    }, {
      key: 'glTextureResource',
      get: function get() {
        return this._texture;
      }
    }, {
      key: 'width',
      get: function get() {
        return this._width;
      }
    }, {
      key: 'height',
      get: function get() {
        return this._height;
      }
    }, {
      key: 'textureUnitIndex',
      set: function set(index) {
        this._textureUnitIndex = index;
      },
      get: function get() {
        return this._textureUnitIndex;
      }
    }]);
    return AbstractTexture;
  }(GLBoostObject);

  var MutableTexture = function (_AbstractTexture) {
    babelHelpers.inherits(MutableTexture, _AbstractTexture);

    function MutableTexture(glBoostContext, width, height) {
      var level = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var internalFormat = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0x1908;
      var format = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0x1908;
      var type = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0x1401;
      var magFileter = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0x2601;
      var minFilter = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0x2601;
      var wrapS = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 0x812F;
      var wrapT = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : 0x812F;
      babelHelpers.classCallCheck(this, MutableTexture);

      var _this = babelHelpers.possibleConstructorReturn(this, (MutableTexture.__proto__ || Object.getPrototypeOf(MutableTexture)).call(this, glBoostContext)); // gl.CLAMP_TO_EDGE


      _this._isTextureReady = false;
      _this._texture = null;
      _this._width = width;
      _this._height = height;
      _this._fbo = null;
      _this._colorAttachmentId = null;
      _this._depthAttachmentId = null;

      var gl = _this._glContext.gl;

      //var glem = GLExtensionsManager.getInstance(gl);

      _this._texture = _this._glContext.createTexture(_this);
      gl.bindTexture(gl.TEXTURE_2D, _this._texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFileter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, 0, format, type, null);
      gl.bindTexture(gl.TEXTURE_2D, null);

      return _this;
    }

    babelHelpers.createClass(MutableTexture, [{
      key: 'colorAttachment',
      set: function set(colorAttachmentId) {
        this._colorAttachmentId = colorAttachmentId;
      },
      get: function get() {
        return this._colorAttachmentId;
      }
    }, {
      key: 'depthAttachment',
      set: function set(depthAttachmentId) {
        this._depthAttachmentId = depthAttachmentId;
      },
      get: function get() {
        return this._depthAttachmentId;
      }
    }, {
      key: 'frameBufferObject',
      set: function set(fbo) {
        this._fbo = fbo;
      },
      get: function get() {
        return this._fbo;
      }
    }]);
    return MutableTexture;
  }(AbstractTexture);

  var Texture = function (_AbstractTexture) {
    babelHelpers.inherits(Texture, _AbstractTexture);

    function Texture(glBoostContext, src, userFlavorName) {
      var parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      babelHelpers.classCallCheck(this, Texture);

      var _this = babelHelpers.possibleConstructorReturn(this, (Texture.__proto__ || Object.getPrototypeOf(Texture)).call(this, glBoostContext));

      _this._isTextureReady = false;
      _this._texture = null;
      if (typeof userFlavorName === 'undefined' || userFlavorName === null) {
        _this.userFlavorName = _this._instanceName;
      } else {
        _this.userFlavorName = userFlavorName;
      }

      _this._parameters = parameters ? parameters : {};

      if (typeof src === 'undefined' || src === null) {
        // do nothing
      } else if (typeof src === 'string') {
        _this.generateTextureFromUri(src);
      } else {
        _this._generateTextureFromImageData(src);
      }
      return _this;
    }

    babelHelpers.createClass(Texture, [{
      key: '_getParameter',
      value: function _getParameter(paramName) {
        var isParametersExist = false;
        if (this._parameters) {
          isParametersExist = true;
        }
        var params = this._parameters;

        var gl = this._glContext.gl;
        var ret = null;
        switch (paramName) {
          case GLBoost$1['UNPACK_FLIP_Y_WEBGL']:
          case GLBoost$1['TEXTURE_MAG_FILTER']:
          case GLBoost$1['TEXTURE_MIN_FILTER']:
          case GLBoost$1['TEXTURE_WRAP_S']:
          case GLBoost$1['TEXTURE_WRAP_T']:
            if (isParametersExist && params[paramName]) {
              ret = params[paramName];
            }
            break;
        }
        return ret;
      }
    }, {
      key: '_getParamWithAlternative',
      value: function _getParamWithAlternative(param, alternative) {
        return MiscUtil.getTheValueOrAlternative(this._getParameter(GLBoost$1[param]), alternative);
      }
    }, {
      key: 'generateTextureFromUri',
      value: function generateTextureFromUri(imageUri) {
        var _this2 = this;

        var isKeepBound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        return new Promise(function (resolve, reject) {
          var isNode = typeof process !== "undefined" && typeof require !== "undefined";
          if (isNode) {
            var getPixels = require("get-pixels");

            var results = getPixels(imageUri, function (err, pixels) {
              if (err) {
                console.log("Bad image path");
                reject();
                return;
              }

              _this2._width = pixels.shape[0];
              _this2._height = pixels.shape[1];

              var texture = _this2._generateTextureInnerWithArrayBufferView(pixels.data, _this2._width, _this2._height, isKeepBound);

              _this2._texture = texture;
              _this2._isTextureReady = true;

              resolve();
            });
          } else {
            _this2._img = new Image();
            if (!imageUri.match(/^data:/)) {
              _this2._img.crossOrigin = 'Anonymous';
            }
            _this2._img.onload = function () {
              var imgCanvas = _this2._getResizedCanvas(_this2._img);
              _this2._width = imgCanvas.width;
              _this2._height = imgCanvas.height;

              var texture = _this2._generateTextureInner(imgCanvas, isKeepBound);

              _this2._texture = texture;
              _this2._isTextureReady = true;

              resolve();
            };

            _this2._img.src = imageUri;
          }
        });
      }
    }, {
      key: '_generateTextureFromImageData',
      value: function _generateTextureFromImageData(imageData) {
        var gl = this._glContext.gl;
        var glem = GLExtensionsManager.getInstance(this._glContext);

        var imgCanvas = this._getResizedCanvas(imageData);
        this._width = imgCanvas.width;
        this._height = imgCanvas.height;

        var texture = this._generateTextureInner(imgCanvas, false);

        this._texture = texture;
        this._isTextureReady = true;

        this._img = imageData;

        this._onLoad();
      }
    }, {
      key: '_generateTextureInnerWithArrayBufferView',
      value: function _generateTextureInnerWithArrayBufferView(imgCanvas, width, height, isKeepBound) {
        var gl = this._glContext.gl;
        var glem = GLExtensionsManager.getInstance(this._glContext);
        var texture = this._glContext.createTexture(this);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this._getParamWithAlternative('UNPACK_FLIP_Y_WEBGL', false));
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imgCanvas);

        if (glem.extTFA) {
          gl.texParameteri(gl.TEXTURE_2D, glem.extTFA.TEXTURE_MAX_ANISOTROPY_EXT, 4);
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this._getParamWithAlternative('TEXTURE_MAG_FILTER', gl.LINEAR));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this._getParamWithAlternative('TEXTURE_MIN_FILTER', gl.LINEAR_MIPMAP_LINEAR));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._getParamWithAlternative('TEXTURE_WRAP_S', gl.REPEAT));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._getParamWithAlternative('TEXTURE_WRAP_T', gl.REPEAT));
        gl.generateMipmap(gl.TEXTURE_2D);

        if (!isKeepBound) {
          gl.bindTexture(gl.TEXTURE_2D, null);
        }
        return texture;
      }
    }, {
      key: '_generateTextureInner',
      value: function _generateTextureInner(imgCanvas, isKeepBound) {
        var gl = this._glContext.gl;
        var glem = GLExtensionsManager.getInstance(this._glContext);
        var texture = this._glContext.createTexture(this);
        gl.bindTexture(gl.TEXTURE_2D, texture);

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this._getParamWithAlternative('UNPACK_FLIP_Y_WEBGL', false));
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgCanvas);

        if (glem.extTFA) {
          gl.texParameteri(gl.TEXTURE_2D, glem.extTFA.TEXTURE_MAX_ANISOTROPY_EXT, 4);
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this._getParamWithAlternative('TEXTURE_MAG_FILTER', gl.LINEAR));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this._getParamWithAlternative('TEXTURE_MIN_FILTER', gl.LINEAR_MIPMAP_LINEAR));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._getParamWithAlternative('TEXTURE_WRAP_S', gl.REPEAT));
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._getParamWithAlternative('TEXTURE_WRAP_T', gl.REPEAT));
        gl.generateMipmap(gl.TEXTURE_2D);

        if (!isKeepBound) {
          gl.bindTexture(gl.TEXTURE_2D, null);
        }
        return texture;
      }
    }, {
      key: '_onLoad',
      value: function _onLoad() {}
    }, {
      key: 'isTextureReady',
      get: function get() {
        return this._isTextureReady;
      }
    }, {
      key: 'isImageAssignedForTexture',
      get: function get() {
        return typeof this._img == 'undefined';
      }
    }]);
    return Texture;
  }(AbstractTexture);

  var PhinaTexture = function (_Texture) {
    babelHelpers.inherits(PhinaTexture, _Texture);

    function PhinaTexture(glBoostContext, width, height, fillStyle) {
      var parameters = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      babelHelpers.classCallCheck(this, PhinaTexture);

      var _this = babelHelpers.possibleConstructorReturn(this, (PhinaTexture.__proto__ || Object.getPrototypeOf(PhinaTexture)).call(this, glBoostContext, null, null, parameters));

      _this._parameters['UNPACK_FLIP_Y_WEBGL'] = true;

      _this._width = width;
      _this._height = height;
      _this._fillStyle = fillStyle;

      _this._phinaObjects = [];
      _this._setUpOffscreen();
      return _this;
    }

    babelHelpers.createClass(PhinaTexture, [{
      key: '_setUpOffscreen',
      value: function _setUpOffscreen() {
        this._offscreen = phina.display.OffScreenLayer({
          width: this.width,
          height: this.height,
          fillStyle: this._fillStyle
        });

        this._offscreen.reset();
      }
    }, {
      key: 'addPhinaObject',
      value: function addPhinaObject(object) {
        this._phinaObjects.push(object);
        return this;
      }
    }, {
      key: 'addPhinaObjects',
      value: function addPhinaObjects(objects) {
        this._phinaObjects = this._phinaObjects.concat(objects);
        return this;
      }
    }, {
      key: 'setPhinaObjects',
      value: function setPhinaObjects(objects) {
        this._phinaObjects = objects.concat();
        return this;
      }
    }, {
      key: 'clearPhinaObjects',
      value: function clearPhinaObjects() {
        this._phinaObjects.length = 0;
        return this;
      }
    }, {
      key: 'renderPhinaObjects',
      value: function renderPhinaObjects() {
        for (var i = 0; i < this._phinaObjects.length; i++) {
          this._offscreen.renderObject(this._phinaObjects[i]);
        }

        this._recreateTexture(this._offscreen.getImageDataURL());
        this._offscreen.reset();
      }
    }, {
      key: '_recreateTexture',
      value: function _recreateTexture(imageDataUri) {
        var oldTexture = this._texture;
        this.generateTextureFromUri(imageDataUri, true);
        if (typeof oldTexture !== 'undefined' && oldTexture !== null) {
          this._glContext.deleteTexture(this, oldTexture);
        }
      }
    }]);
    return PhinaTexture;
  }(Texture);

  var L_CameraController = function (_GLBoostObject) {
    babelHelpers.inherits(L_CameraController, _GLBoostObject);

    function L_CameraController(glBoostContext) {
      var isSymmetryMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var doResetWhenCameraSettingChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var isForceGrab = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var efficiency = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.0;
      babelHelpers.classCallCheck(this, L_CameraController);

      var _this = babelHelpers.possibleConstructorReturn(this, (L_CameraController.__proto__ || Object.getPrototypeOf(L_CameraController)).call(this, glBoostContext));

      _this._camaras = new Set();

      _this._isKeyUp = true;
      _this._isForceGrab = isForceGrab;
      _this._isSymmetryMode = isSymmetryMode;

      _this._efficiency = 0.5 * efficiency;

      _this._rot_bgn_x = 0;
      _this._rot_bgn_y = 0;
      _this._rot_x = 0;
      _this._rot_y = 0;
      _this._clickedMouseYOnCanvas = 0;
      _this._clickedMouseXOnCanvas = 0;

      _this._verticalAngleOfVectors = 0;

      _this._verticalAngleThrethold = 90;

      _this._wheel_y = 1;
      _this._mouse_translate_y = 0;
      _this._mouse_translate_x = 0;

      _this._mouseTranslateVec = new Vector3(0, 0, 0);

      _this._newUpVec = new Vector3(0, 0, 0);

      _this._target = null;

      _this._doResetWhenCameraSettingChanged = doResetWhenCameraSettingChanged;

      _this._onMouseDown = function (evt) {
        var rect = evt.target.getBoundingClientRect();
        _this._clickedMouseXOnCanvas = evt.clientX - rect.left;
        _this._clickedMouseYOnCanvas = evt.clientY - rect.top;
        _this._movedMouseYOnCanvas = -1;
        _this._movedMouseXOnCanvas = -1;
        _this._rot_bgn_x = _this._rot_x;
        _this._rot_bgn_y = _this._rot_y;

        _this._isKeyUp = false;

        if (typeof evt.buttons !== 'undefined') {
          var data = evt.buttons;
          var button_c = data & 0x0004 ? true : false;
          if (button_c) {
            _this._wheel_y = 1;
          }
          _this._camaras.forEach(function (camera) {
            camera._needUpdateView(false);
          });
        }
        return false;
      };

      _this._onMouseUp = function (evt) {
        _this._isKeyUp = true;
        _this._movedMouseYOnCanvas = -1;
        _this._movedMouseXOnCanvas = -1;
      };

      _this._onMouseMove = function (evt) {
        if (_this._isKeyUp) {
          return;
        }

        var rect = evt.target.getBoundingClientRect();
        _this._movedMouseXOnCanvas = evt.clientX - rect.left;
        _this._movedMouseYOnCanvas = evt.clientY - rect.top;

        if (typeof evt.buttons !== 'undefined') {
          var data = evt.buttons;
          var button_l = data & 0x0001 ? true : false;
          var button_r = data & 0x0002 ? true : false;
          if (button_r) {
            _this._mouse_translate_y = (_this._movedMouseYOnCanvas - _this._clickedMouseYOnCanvas) / 1000 * _this._efficiency;
            _this._mouse_translate_x = (_this._movedMouseXOnCanvas - _this._clickedMouseXOnCanvas) / 1000 * _this._efficiency;

            if (evt.shiftKey) {
              _this._mouseTranslateVec = Vector3.add(_this._mouseTranslateVec, Vector3.normalize(_this._newEyeToCenterVec).multiply(-_this._mouse_translate_y));
            } else {
              _this._mouseTranslateVec = Vector3.add(_this._mouseTranslateVec, Vector3.normalize(_this._newUpVec).multiply(_this._mouse_translate_y));
            }
            _this._mouseTranslateVec = Vector3.add(_this._mouseTranslateVec, Vector3.normalize(_this._newTangentVec).multiply(_this._mouse_translate_x));

            _this._clickedMouseYOnCanvas = _this._movedMouseYOnCanvas;
            _this._clickedMouseXOnCanvas = _this._movedMouseXOnCanvas;
          }

          _this._camaras.forEach(function (camera) {
            camera._needUpdateView(false);
          });

          if (!button_l) {
            return;
          }
        }

        // calc rotation angle
        var delta_y = (_this._movedMouseYOnCanvas - _this._clickedMouseYOnCanvas) * _this._efficiency;
        var delta_x = (_this._movedMouseXOnCanvas - _this._clickedMouseXOnCanvas) * _this._efficiency;
        _this._rot_y = _this._rot_bgn_y - delta_y;
        _this._rot_x = _this._rot_bgn_x - delta_x;

        // check if rotation angle is within range
        if (_this._verticalAngleThrethold - _this._verticalAngleOfVectors < _this._rot_y) {
          _this._rot_y = _this._verticalAngleThrethold + _this._verticalAngleOfVectors;
        }

        if (_this._rot_y < -_this._verticalAngleThrethold + _this._verticalAngleOfVectors) {
          _this._rot_y = -_this._verticalAngleThrethold - _this._verticalAngleOfVectors;
        }

        _this._camaras.forEach(function (camera) {
          camera._needUpdateView(false);
        });
      };

      _this._onMouseWheel = function (evt) {
        evt.preventDefault();
        _this._wheel_y -= evt.deltaY / 200;
        _this._wheel_y = Math.min(_this._wheel_y, 3);
        _this._wheel_y = Math.max(_this._wheel_y, 0.1);

        _this._camaras.forEach(function (camera) {
          camera._needUpdateView(false);
        });
      };

      _this._onContexMenu = function (evt) {
        if (evt.preventDefault) {
          evt.preventDefault();
        } else {
          event.returnValue = false;
        }
      };

      _this._onMouseDblClick = function (evt) {
        if (evt.shiftKey) {
          _this._mouseTranslateVec = new Vector3(0, 0, 0);
        } else {
          _this._rot_y = 0;
          _this._rot_x = 0;
          _this._rot_bgn_y = 0;
          _this._rot_bgn_x = 0;
        }
        _this._camaras.forEach(function (camera) {
          camera._needUpdateView(false);
        });
      };

      if (_this._glContext.canvas) {
        _this._glContext.canvas.addEventListener('mousedown', _this._onMouseDown);
        _this._glContext.canvas.addEventListener('mouseup', _this._onMouseUp);
        _this._glContext.canvas.addEventListener('mousemove', _this._onMouseMove);
        if (window.WheelEvent) {
          _this._glContext.canvas.addEventListener("wheel", _this._onMouseWheel);
        }
        _this._glContext.canvas.addEventListener('contextmenu', _this._onContexMenu, false);
        _this._glContext.canvas.addEventListener("dblclick", _this._onMouseDblClick);
      }
      return _this;
    }

    babelHelpers.createClass(L_CameraController, [{
      key: 'convert',
      value: function convert(camera) {
        var newEyeVec = null;
        var newCenterVec = null;
        var newUpVec = null;

        //if (this._isKeyUp) {

        //}

        if (this._isKeyUp || !this._isForceGrab) {
          this._eyeVec = camera.eye;
          this._centerVec = camera.center;
          this._upVec = camera.up;
        }

        if (this._isSymmetryMode) {
          var centerToEyeVec = Vector3.subtract(this._eyeVec, this._centerVec).multiply(this._wheel_y);
          var horizontalAngleOfVectors = Vector3.angleOfVectors(new Vector3(centerToEyeVec.x, 0, centerToEyeVec.z), new Vector3(0, 0, 1));
          var horizontalSign = Vector3.cross(new Vector3(centerToEyeVec.x, 0, centerToEyeVec.z), new Vector3(0, 0, 1)).y;
          if (horizontalSign >= 0) {
            horizontalSign = 1;
          } else {
            horizontalSign = -1;
          }
          horizontalAngleOfVectors *= horizontalSign;
          var rotateM_Reset = Matrix33.rotateY(horizontalAngleOfVectors);
          var rotateM_X = Matrix33.rotateX(this._rot_y);
          var rotateM_Y = Matrix33.rotateY(this._rot_x);
          var rotateM_Revert = Matrix33.rotateY(-horizontalAngleOfVectors);
          var rotateM = Matrix33.multiply(rotateM_Revert, Matrix33.multiply(rotateM_Y, Matrix33.multiply(rotateM_X, rotateM_Reset)));

          newUpVec = rotateM.multiplyVector(this._upVec);
          this._newUpVec = newUpVec;
          newEyeVec = rotateM.multiplyVector(centerToEyeVec).add(this._centerVec);
          newCenterVec = this._centerVec.clone();
          this._newEyeToCenterVec = Vector3.subtract(newCenterVec, newEyeVec);
          this._newTangentVec = Vector3.cross(this._newUpVec, this._newEyeToCenterVec);

          newEyeVec.add(this._mouseTranslateVec);
          newCenterVec.add(this._mouseTranslateVec);

          var horizonResetVec = rotateM_Reset.multiplyVector(centerToEyeVec);
          this._verticalAngleOfVectors = Vector3.angleOfVectors(horizonResetVec, new Vector3(0, 0, 1));
          var verticalSign = Vector3.cross(horizonResetVec, new Vector3(0, 0, 1)).x;
          if (verticalSign >= 0) {
            verticalSign = 1;
          } else {
            verticalSign = -1;
          }
          this._verticalAngleOfVectors *= verticalSign;
        } else {
          var _centerToEyeVec = Vector3.subtract(this._eyeVec, this._centerVec).multiply(this._wheel_y);
          var _rotateM_X = Matrix33.rotateX(this._rot_y);
          var _rotateM_Y = Matrix33.rotateY(this._rot_x);
          var _rotateM = _rotateM_Y.multiply(_rotateM_X);

          newUpVec = _rotateM.multiplyVector(this._upVec);
          this._newUpVec = newUpVec;
          newEyeVec = _rotateM.multiplyVector(_centerToEyeVec).add(this._centerVec);
          newCenterVec = this._centerVec.clone();
          this._newEyeToCenterVec = Vector3.subtract(newCenterVec, newEyeVec);
          this._newTangentVec = Vector3.cross(this._newUpVec, this._newEyeToCenterVec);

          newEyeVec.add(this._mouseTranslateVec);
          newCenterVec.add(this._mouseTranslateVec);
        }
        return [newEyeVec, newCenterVec, newUpVec];
      }
    }, {
      key: '_updateTargeting',
      value: function _updateTargeting(camera, eyeVec, centerVec, upVec, fovy) {
        if (this._target === null) {
          return [eyeVec, centerVec, upVec];
        }

        var targetAABB = null;
        if (typeof this._target.updateAABB !== 'undefined') {
          targetAABB = this._target.updateAABB();
        } else {
          targetAABB = this._target.AABB;
        }

        var lengthCameraToObject = targetAABB.lengthCenterToCorner / Math.sin(fovy * Math.PI / 180 / 2);

        var newCenterVec = targetAABB.centerPoint;

        var centerToCameraVec = Vector3.subtract(eyeVec, newCenterVec);
        var centerToCameraVecNormalized = Vector3.normalize(centerToCameraVec);

        var newEyeVec = Vector3.multiply(centerToCameraVecNormalized, lengthCameraToObject).add(newCenterVec);

        var newUpVec = null;
        if (camera instanceof M_AbstractCamera) {
          var mat = camera.inverseTransformMatrixAccumulatedAncestryWithoutMySelf;
          newEyeVec = mat.multiplyVector(new Vector4(newEyeVec.x, newEyeVec.y, newEyeVec.z, 1)).toVector3();
          newCenterVec = mat.multiplyVector(new Vector4(newCenterVec.x, newCenterVec.y, newCenterVec.z, 1)).toVector3();
          newUpVec = mat.multiplyVector(new Vector4(upVec.x, upVec.y, upVec.z, 1)).toVector3();
        } else {
          newUpVec = upVec;
        }

        return [newEyeVec, newCenterVec, newUpVec];
      }
    }, {
      key: 'tryReset',
      value: function tryReset() {
        if (this._doResetWhenCameraSettingChanged) {
          if (this._isKeyUp) {
            this._rot_y = 0;
            this._rot_x = 0;
            this._rot_bgn_y = 0;
            this._rot_bgn_x = 0;
          }
        }
      }
    }, {
      key: 'updateTargeting',
      value: function updateTargeting() {
        var _this2 = this;

        this._camaras.forEach(function (camera) {
          var vectors = _this2._updateTargeting(camera, camera.eye, camera.center, camera.up, camera.fovy);
          camera.eye = vectors[0];
          camera.center = vectors[1];
          camera.upVec = vectors[2];
        });
      }
    }, {
      key: 'addCamera',
      value: function addCamera(camera) {
        this._camaras.add(camera);
      }
    }, {
      key: 'target',
      set: function set(object) {
        this._target = object;
        this.updateTargeting();
      }
    }]);
    return L_CameraController;
  }(GLBoostObject);

  var ParticleShaderSource = function () {
    function ParticleShaderSource() {
      babelHelpers.classCallCheck(this, ParticleShaderSource);
    }

    babelHelpers.createClass(ParticleShaderSource, [{
      key: 'VSDefine_ParticleShaderSource',
      value: function VSDefine_ParticleShaderSource(in_, out_, f) {
        var shaderText = '';
        shaderText += in_ + ' vec3 aVertex_particleCenterPos;\n';
        shaderText += 'uniform mat4 projectionMatrix;\n';
        shaderText += 'uniform mat4 modelViewMatrix;\n';

        return shaderText;
      }
    }, {
      key: 'VSTransform_ParticleShaderSource',
      value: function VSTransform_ParticleShaderSource(existCamera_f, f) {
        var shaderText = '';

        shaderText += '  vec4 cameraCenterPos = modelViewMatrix * vec4(aVertex_particleCenterPos, 1.0);\n';
        shaderText += '  vec4 cameraEachPointPos = cameraCenterPos + vec4(aVertex_position - aVertex_particleCenterPos, 1.0);\n';
        shaderText += '  gl_Position = projectionMatrix * cameraEachPointPos;\n';

        return shaderText;
      }
    }, {
      key: 'prepare_ParticleShaderSource',
      value: function prepare_ParticleShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {
        var vertexAttribsAsResult = [];

        shaderProgram['vertexAttribute_' + 'particleCenterPos'] = gl.getAttribLocation(shaderProgram, 'aVertex_' + 'particleCenterPos');
        gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + 'particleCenterPos']);
        vertexAttribsAsResult.push('particleCenterPos');

        material.uniform_projectionMatrix = gl.getUniformLocation(shaderProgram, 'projectionMatrix');
        material.uniform_modelViewMatrix = gl.getUniformLocation(shaderProgram, 'modelViewMatrix');
        material._semanticsDic['PROJECTION'] = 'projectionMatrix';
        material._semanticsDic['MODELVIEW'] = 'modelViewMatrix';

        return vertexAttribsAsResult;
      }
    }]);
    return ParticleShaderSource;
  }();

  var ArrayUtil = function () {
    function ArrayUtil() {
      babelHelpers.classCallCheck(this, ArrayUtil);
    }

    babelHelpers.createClass(ArrayUtil, null, [{
      key: 'merge',
      value: function merge() {
        var key,
            result = false;
        if (arguments && arguments.length > 0) {
          result = [];
          for (var i = 0, len = arguments.length; i < len; i++) {
            if (arguments[i] && babelHelpers.typeof(arguments[i]) === 'object') {
              for (key in arguments[i]) {
                if (isFinite(key)) {
                  result.push(arguments[i][key]);
                } else {
                  result[key] = arguments[i][key];
                }
              }
            }
          }
        }
        return result;
      }
    }]);
    return ArrayUtil;
  }();

  /**
   * This Particle class handles particles expressions.
   * You can define particles behaviors in a custom vertex shader.
   * These particles are processed in GPU, so this is a very fast solution of particles expressions.
   */

  var Particle = function (_Geometry) {
    babelHelpers.inherits(Particle, _Geometry);

    /**
     * This is Particle class's constructor
     *
     * @param {Object} centerPointData [en] a JSON object consisted of position (by the particle) array and the other data (by the particle) array.
     * @param {Number} particleWidth Width of each particle
     * @param {Number} particleHeight Height of each particle
     * @param {Object} [en] a JSON which has other vertex attribute arrays you want (by the vertex of quad particle).
     * @param {CanvasElement or String} Canvas Element which is generation source of WebGL context in current use or String which indicates the Canvas Element in jQuery like query string
     */
    function Particle(glBoostContext, centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint) {
      babelHelpers.classCallCheck(this, Particle);

      var _this = babelHelpers.possibleConstructorReturn(this, (Particle.__proto__ || Object.getPrototypeOf(Particle)).call(this, glBoostContext));

      _this._setupVertexData(centerPointData, particleWidth / 2.0, particleHeight / 2.0, customVertexAttributes, performanceHint);
      return _this;
    }

    babelHelpers.createClass(Particle, [{
      key: '_setupVertexAndIndexData',
      value: function _setupVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, needDefaultWhiteColor) {
        var indices = this.indices;
        indices = [];
        var positionArray = centerPointData.position;

        for (var i = 0; i < positionArray.length; i++) {
          var offset = i * 4;
          indices.push(offset); // start Quad
          indices.push(offset + 1); //
          indices.push(offset + 2); // end Quad
          indices.push(offset + 3); //
          if (i === positionArray.length - 1) {
            break;
          }
          indices.push(offset + 3); // degenerated
          indices.push(offset + 4); // move another Particle
        }

        this.positions = [];
        var positions = this.positions;

        // if array, convert to vector[2/3/4]
        for (var _i = 0; _i < positionArray.length; _i++) {
          positionArray[_i] = MathUtil.arrayToVector(positionArray[_i]);
        }

        for (var _i2 = 0; _i2 < positionArray.length; _i2++) {
          positions.push(new Vector3(positionArray[_i2].x - pHalfWidth, positionArray[_i2].y + pHalfHeight, positionArray[_i2].z));
          positions.push(new Vector3(positionArray[_i2].x - pHalfWidth, positionArray[_i2].y - pHalfHeight, positionArray[_i2].z));
          positions.push(new Vector3(positionArray[_i2].x + pHalfWidth, positionArray[_i2].y + pHalfHeight, positionArray[_i2].z));
          positions.push(new Vector3(positionArray[_i2].x + pHalfWidth, positionArray[_i2].y - pHalfHeight, positionArray[_i2].z));
        }
        this.centerPositions = [];
        var centerPositions = this.centerPositions;

        for (var _i3 = 0; _i3 < positionArray.length; _i3++) {
          centerPositions.push(new Vector3(positionArray[_i3].x, positionArray[_i3].y, positionArray[_i3].z));
          centerPositions.push(new Vector3(positionArray[_i3].x, positionArray[_i3].y, positionArray[_i3].z));
          centerPositions.push(new Vector3(positionArray[_i3].x, positionArray[_i3].y, positionArray[_i3].z));
          centerPositions.push(new Vector3(positionArray[_i3].x, positionArray[_i3].y, positionArray[_i3].z));
        }
        this.texcoords = [];
        var texcoords = this.texcoords;
        for (var _i4 = 0; _i4 < positionArray.length; _i4++) {
          texcoords.push(new Vector2(0, 0));
          texcoords.push(new Vector2(0, 1));
          texcoords.push(new Vector2(1, 0));
          texcoords.push(new Vector2(1, 1));
        }

        this.normals = [];
        var normals = this.normals;
        var normal = new Vector3(0, 0, 1);
        for (var _i5 = 0; _i5 < positionArray.length; _i5++) {
          for (var j = 0; j < 4; j++) {
            normals.push(normal);
          }
        }
        this.pointData = {};
        var pointData = this.pointData;

        for (var type in centerPointData) {
          if (type !== 'position') {
            pointData[type] = [];
            for (var _i6 = 0; _i6 < positionArray.length; _i6++) {
              for (var _j = 0; _j < 4; _j++) {
                pointData[type].push(centerPointData[type][_i6]);
              }
            }
          }
        }

        var object = {
          position: positions,
          texcoord: texcoords,
          normal: normals,
          particleCenterPos: centerPositions
        };

        if (needDefaultWhiteColor) {
          this.colors = [];
          var colors = this.colors;
          var vertexColor = new Vector4(1, 1, 1, 1);
          for (var _i7 = 0; _i7 < positionArray.length; _i7++) {
            for (var _j2 = 0; _j2 < 4; _j2++) {
              colors.push(vertexColor);
            }
          }
          object.color = colors;
        }

        var tempAttributes = ArrayUtil.merge(object, pointData);
        var completeAttributes = ArrayUtil.merge(tempAttributes, customVertexAttributes);

        return {
          vertexAttributes: completeAttributes,
          indexArray: [indices]
        };
      }
    }, {
      key: '_updateVertexAndIndexData',
      value: function _updateVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, needDefaultWhiteColor) {
        var positionArray = centerPointData.position;
        var idx = 0;
        var positions = this.positions;
        for (var i = 0; i < positionArray.length; i++) {
          positions[idx + 0].x = positionArray[i].x - pHalfWidth;
          positions[idx + 0].y = positionArray[i].y + pHalfHeight;
          positions[idx + 0].z = positionArray[i].z;
          positions[idx + 1].x = positionArray[i].x - pHalfWidth;
          positions[idx + 1].y = positionArray[i].y - pHalfHeight;
          positions[idx + 1].z = positionArray[i].z;
          positions[idx + 2].x = positionArray[i].x + pHalfWidth;
          positions[idx + 2].y = positionArray[i].y + pHalfHeight;
          positions[idx + 2].z = positionArray[i].z;
          positions[idx + 3].x = positionArray[i].x + pHalfWidth;
          positions[idx + 3].y = positionArray[i].y - pHalfHeight;
          positions[idx + 3].z = positionArray[i].z;
          idx += 4;
        }

        var centerPositions = this.centerPositions;
        idx = 0;
        for (var _i8 = 0; _i8 < positionArray.length; _i8++) {
          centerPositions[idx].x = positionArray[_i8].x;
          centerPositions[idx].y = positionArray[_i8].y;
          centerPositions[idx].z = positionArray[_i8].z;
          centerPositions[idx + 1].x = positionArray[_i8].x;
          centerPositions[idx + 1].y = positionArray[_i8].y;
          centerPositions[idx + 1].z = positionArray[_i8].z;
          centerPositions[idx + 2].x = positionArray[_i8].x;
          centerPositions[idx + 2].y = positionArray[_i8].y;
          centerPositions[idx + 2].z = positionArray[_i8].z;
          centerPositions[idx + 3].x = positionArray[_i8].x;
          centerPositions[idx + 3].y = positionArray[_i8].y;
          centerPositions[idx + 3].z = positionArray[_i8].z;
          idx += 4;
        }
        idx = 0;
        var pointData = this.pointData;
        for (var type in centerPointData) {
          if (type !== 'position') {
            pointData[type] = [];
            for (var _i9 = 0; _i9 < positionArray.length; _i9++) {
              for (var j = 0; j < 4; j++) {
                pointData[type][idx].x = centerPointData[type][_i9].x;
                pointData[type][idx].y = centerPointData[type][_i9].y;
                pointData[type][idx].z = centerPointData[type][_i9].z;
                idx++;
              }
            }
          }
        }

        var object = {
          position: positions,
          texcoord: this.texcoords,
          normal: this.normals,
          particleCenterPos: centerPositions
        };

        if (needDefaultWhiteColor) {
          object.color = this.colors;
        }

        var tempAttributes = ArrayUtil.merge(object, pointData);
        var completeAttributes = ArrayUtil.merge(tempAttributes, customVertexAttributes);

        return {
          vertexAttributes: completeAttributes,
          indexArray: [this.indices]
        };
      }
    }, {
      key: '_setupVertexData',
      value: function _setupVertexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, performanceHint) {
        var result = this._setupVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, true);

        this.setVerticesData(result.vertexAttributes, result.indexArray, GLBoost$1.TRIANGLE_STRIP, performanceHint);
      }
    }, {
      key: 'updateVerticesData',
      value: function updateVerticesData(centerPointData, particleWidth, particleHeight, customVertexAttributes) {
        //var result = this._setupVertexAndIndexData(centerPointData, particleWidth/2.0, particleHeight/2.0, customVertexAttributes, false);
        var result = this._updateVertexAndIndexData(centerPointData, particleWidth / 2.0, particleHeight / 2.0, customVertexAttributes, false);
        babelHelpers.get(Particle.prototype.__proto__ || Object.getPrototypeOf(Particle.prototype), 'updateVerticesData', this).call(this, result.vertexAttributes);
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, pointLight, meshMaterial, renderPasses, mesh) {
        // before prepareForRender of 'Geometry' class, a new 'BlendShapeShader'(which extends default shader) is assigned.

        if (meshMaterial) {
          this._materialForBillboard = meshMaterial;
        } else {
          this._materialForBillboard = this._defaultMaterial;
        }

        var ParticleShader = function (_materialForBillboard) {
          babelHelpers.inherits(ParticleShader, _materialForBillboard);

          function ParticleShader(glBoostContext, basicShader) {
            babelHelpers.classCallCheck(this, ParticleShader);

            var _this2 = babelHelpers.possibleConstructorReturn(this, (ParticleShader.__proto__ || Object.getPrototypeOf(ParticleShader)).call(this, glBoostContext, basicShader, ParticleShaderSource));

            ParticleShader.mixin(ParticleShaderSource);

            _this2._meshTransformUpdateCount = -9999;
            _this2._cameraViewUpdateCount = -9999;
            _this2._cameraProjectionUpdateCount = -9999;
            return _this2;
          }

          babelHelpers.createClass(ParticleShader, [{
            key: 'setUniforms',
            value: function setUniforms(gl, glslProgram, material, camera, mesh) {
              babelHelpers.get(ParticleShader.prototype.__proto__ || Object.getPrototypeOf(ParticleShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material, camera, mesh);

              if (this._cameraProjectionUpdateCount !== mesh.updateCountAsCameraProjection) {
                Shader.trySettingMatrix44ToUniform(gl, material, material._semanticsDic, 'PROJECTION', camera.projectionRHMatrix().flatten());
              }

              if (this._cameraViewUpdateCount !== mesh.updateCountAsCameraView || this._meshTransformUpdateCount !== mesh.updateCountAsElement) {
                Shader.trySettingMatrix44ToUniform(gl, material, material._semanticsDic, 'MODELVIEW', camera.lookAtRHMatrix().multiply(mesh.transformMatrix).flatten());
              }

              this._meshTransformUpdateCount = mesh.updateCountAsElement;
              this._cameraViewUpdateCount = camera.updateCountAsCameraView;
              this._cameraProjectionUpdateCount = camera.updateCountAsCameraProjection;

              return true; // still dirty
            }
          }]);
          return ParticleShader;
        }(this._materialForBillboard.shaderClass);

        if (meshMaterial) {
          meshMaterial.shaderClass = ParticleShader;
        } else {
          this._defaultMaterial.shaderClass = ParticleShader;
        }

        /*
         let materials = this._materials;
         if (materials) {
         for (let i=0; i<materials.length;i++) {
         materials[i].shader = new BlendShapeShader(this._canvas);
         }
         }
         */

        babelHelpers.get(Particle.prototype.__proto__ || Object.getPrototypeOf(Particle.prototype), 'prepareToRender', this).call(this, existCamera_f, pointLight, meshMaterial, renderPasses, mesh);
      }
    }]);
    return Particle;
  }(Geometry);

  GLBoost$1["Particle"] = Particle;

  var Sphere = function (_Geometry) {
    babelHelpers.inherits(Sphere, _Geometry);

    function Sphere(glBoostContext, radius, widthSegments, heightSegments, vertexColor) {
      babelHelpers.classCallCheck(this, Sphere);

      var _this = babelHelpers.possibleConstructorReturn(this, (Sphere.__proto__ || Object.getPrototypeOf(Sphere)).call(this, glBoostContext));

      _this._setupVertexData(radius, widthSegments, heightSegments, vertexColor);
      return _this;
    }

    babelHelpers.createClass(Sphere, [{
      key: '_setupVertexData',
      value: function _setupVertexData(radius, widthSegments, heightSegments, vertexColor) {

        // See below:
        // WebGL Lesson 11 - spheres, rotation matrices, and mouse events
        // http://learningwebgl.com/blog/?p=1253
        //
        var positions = [];
        var texcoords = [];
        var colors = [];
        var normals = [];

        if (!vertexColor) {
          vertexColor = new Vector4(1, 1, 1, 1);
        }

        for (var latNumber = 0; latNumber <= heightSegments; latNumber++) {
          var theta = latNumber * Math.PI / heightSegments;
          var sinTheta = Math.sin(theta);
          var cosTheta = Math.cos(theta);

          for (var longNumber = 0; longNumber <= widthSegments; longNumber++) {
            var phi = longNumber * 2 * Math.PI / widthSegments;
            var sinPhi = Math.sin(phi);
            var cosPhi = Math.cos(phi);

            var x = radius * cosPhi * sinTheta;
            var y = radius * cosTheta;
            var z = radius * sinPhi * sinTheta;
            var position = new Vector3(x, y, z);
            positions.push(position);
            var u = 1 - longNumber / widthSegments;
            var v = latNumber / heightSegments;
            texcoords.push(new Vector2(u, v));
            colors.push(vertexColor);
            normals.push(Vector3.normalize(position));
          }
        }

        // first    first+1
        //    +-------+
        //    |     / |
        //    |   /   |
        //    | /     |
        //    +-------+
        // second   second+1
        //
        var indices = [];
        for (var latNumber = 0; latNumber < heightSegments; latNumber++) {
          for (var longNumber = 0; longNumber < widthSegments; longNumber++) {
            var first = latNumber * (widthSegments + 1) + longNumber;
            var second = first + widthSegments + 1;

            indices.push(first + 1);
            indices.push(second);
            indices.push(first);

            indices.push(first + 1);
            indices.push(second + 1);
            indices.push(second);
          }
        }

        var object = {
          position: positions,
          color: colors,
          texcoord: texcoords,
          normal: normals
        };

        this.setVerticesData(object, [indices], GLBoost$1.TRIANGLES);
      }
    }]);
    return Sphere;
  }(Geometry);

  GLBoost$1["Sphere"] = Sphere;

  var Plane = function (_Geometry) {
    babelHelpers.inherits(Plane, _Geometry);

    function Plane(glBoostContext, width, height, uSpan, vSpan, customVertexAttributes) {
      var isUVRepeat = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      babelHelpers.classCallCheck(this, Plane);

      var _this = babelHelpers.possibleConstructorReturn(this, (Plane.__proto__ || Object.getPrototypeOf(Plane)).call(this, glBoostContext));

      _this._setupVertexData(width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat);
      return _this;
    }

    babelHelpers.createClass(Plane, [{
      key: '_setupVertexData',
      value: function _setupVertexData(width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat) {

        var positions = [];

        for (var i = 0; i <= vSpan; i++) {
          for (var j = 0; j <= uSpan; j++) {
            positions.push(new Vector3((j / uSpan - 1 / 2) * width, 0, (i / vSpan - 1 / 2) * height));
          }
        }

        var indices = [];
        for (var _i = 0; _i < vSpan; _i++) {
          var degenerate_left_index = 0;
          var degenerate_right_index = 0;
          for (var _j = 0; _j <= uSpan; _j++) {
            indices.push(_i * (uSpan + 1) + _j);
            indices.push((_i + 1) * (uSpan + 1) + _j);
            if (_j === 0) {
              degenerate_left_index = (_i + 1) * (uSpan + 1) + _j;
            } else if (_j === uSpan) {
              degenerate_right_index = (_i + 1) * (uSpan + 1) + _j;
            }
          }
          indices.push(degenerate_right_index);
          indices.push(degenerate_left_index);
        }

        var colors = [];
        var vertexColor = new Vector4(1, 1, 1, 1);
        for (var _i2 = 0; _i2 <= vSpan; _i2++) {
          for (var _j2 = 0; _j2 <= uSpan; _j2++) {
            colors.push(vertexColor);
          }
        }

        var texcoords = [];
        for (var _i3 = 0; _i3 <= vSpan; _i3++) {
          for (var _j3 = 0; _j3 <= uSpan; _j3++) {
            if (isUVRepeat) {
              texcoords.push(new Vector2(_j3, 1.0 - _i3));
            } else {
              texcoords.push(new Vector2(_j3 / uSpan, 1.0 - _i3 / vSpan));
            }
          }
        }

        var normal = new Vector3(0, 1, 0);
        var normals = [];
        for (var _i4 = 0; _i4 <= vSpan; _i4++) {
          for (var _j4 = 0; _j4 <= uSpan; _j4++) {
            normals.push(normal);
          }
        }

        var object = {
          position: positions,
          color: colors,
          texcoord: texcoords,
          normal: normals
        };

        var completeAttributes = ArrayUtil.merge(object, customVertexAttributes);
        this.setVerticesData(completeAttributes, [indices], GLBoost$1.TRIANGLE_STRIP);
      }
    }]);
    return Plane;
  }(Geometry);

  GLBoost$1["Plane"] = Plane;

  var Cube = function (_Geometry) {
    babelHelpers.inherits(Cube, _Geometry);

    function Cube(glBoostContext, widthVector, vertexColor) {
      babelHelpers.classCallCheck(this, Cube);

      // if array, convert to vector[2/3/4]
      var _this = babelHelpers.possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).call(this, glBoostContext));

      widthVector = MathUtil.arrayToVector(widthVector);
      vertexColor = MathUtil.arrayToVector(vertexColor);

      _this._setupVertexData(widthVector.divide(2.0), vertexColor);
      return _this;
    }

    babelHelpers.createClass(Cube, [{
      key: '_setupVertexData',
      value: function _setupVertexData(widthVector, vertexColor) {
        var indices = [3, 1, 0, 2, 1, 3, 4, 5, 7, 7, 5, 6, 8, 9, 11, 11, 9, 10, 15, 13, 12, 14, 13, 15, 19, 17, 16, 18, 17, 19, 20, 21, 23, 23, 21, 22];

        var positions = [
        // upper
        new Vector3(-widthVector.x, widthVector.y, -widthVector.z), new Vector3(widthVector.x, widthVector.y, -widthVector.z), new Vector3(widthVector.x, widthVector.y, widthVector.z), new Vector3(-widthVector.x, widthVector.y, widthVector.z),
        // lower
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, -widthVector.y, widthVector.z), new Vector3(-widthVector.x, -widthVector.y, widthVector.z),
        // front
        new Vector3(-widthVector.x, -widthVector.y, widthVector.z), new Vector3(widthVector.x, -widthVector.y, widthVector.z), new Vector3(widthVector.x, widthVector.y, widthVector.z), new Vector3(-widthVector.x, widthVector.y, widthVector.z),
        // back
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, widthVector.y, -widthVector.z), new Vector3(-widthVector.x, widthVector.y, -widthVector.z),
        // right
        new Vector3(widthVector.x, -widthVector.y, -widthVector.z), new Vector3(widthVector.x, -widthVector.y, widthVector.z), new Vector3(widthVector.x, widthVector.y, widthVector.z), new Vector3(widthVector.x, widthVector.y, -widthVector.z),
        // left
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z), new Vector3(-widthVector.x, -widthVector.y, widthVector.z), new Vector3(-widthVector.x, widthVector.y, widthVector.z), new Vector3(-widthVector.x, widthVector.y, -widthVector.z)];
        var colors = [new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w), new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w)];
        var texcoords = [new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0), new Vector2(0.0, 0.0), new Vector2(1.0, 0.0), new Vector2(1.0, 1.0), new Vector2(0.0, 1.0)];

        var normals = [
        // upper
        new Vector3(0, 1, 0), new Vector3(0, 1, 0), new Vector3(0, 1, 0), new Vector3(0, 1, 0),
        // lower
        new Vector3(0, -1, 0), new Vector3(0, -1, 0), new Vector3(0, -1, 0), new Vector3(0, -1, 0),
        // front
        new Vector3(0, 0, 1), new Vector3(0, 0, 1), new Vector3(0, 0, 1), new Vector3(0, 0, 1),
        // back
        new Vector3(0, 0, -1), new Vector3(0, 0, -1), new Vector3(0, 0, -1), new Vector3(0, 0, -1),
        // right
        new Vector3(1, 0, 0), new Vector3(1, 0, 0), new Vector3(1, 0, 0), new Vector3(1, 0, 0),
        // left
        new Vector3(-1, 0, 0), new Vector3(-1, 0, 0), new Vector3(-1, 0, 0), new Vector3(-1, 0, 0)];

        this.setVerticesData({
          position: positions,
          color: colors,
          normal: normals,
          texcoord: texcoords
        }, [indices]);
      }
    }]);
    return Cube;
  }(Geometry);

  GLBoost$1["Cube"] = Cube;

  var BlendShapeShaderSource = function () {
    function BlendShapeShaderSource() {
      babelHelpers.classCallCheck(this, BlendShapeShaderSource);
    }

    babelHelpers.createClass(BlendShapeShaderSource, [{
      key: 'VSDefine_BlendShapeShaderSource',
      value: function VSDefine_BlendShapeShaderSource(in_, out_, f) {
        var _this = this;

        var shaderText = '';
        f.forEach(function (attribName) {
          if (_this.BlendShapeShaderSource_isShapeTarget(attribName)) {
            shaderText += in_ + ' vec3 aVertex_' + attribName + ';\n';
            shaderText += 'uniform float blendWeight_' + attribName + ';\n';
          }
        });
        return shaderText;
      }
    }, {
      key: 'VSTransform_BlendShapeShaderSource',
      value: function VSTransform_BlendShapeShaderSource(existCamera_f, f, lights, material, extraData) {
        var _this2 = this;

        var shaderText = '';
        shaderText += 'float sumOfWeights = 0.0;\n';
        f.forEach(function (attribName) {
          if (_this2.BlendShapeShaderSource_isShapeTarget(attribName)) {
            shaderText += 'sumOfWeights += blendWeight_' + attribName + ';\n';
          }
        });
        var numOfShapeTargets = this.BlendShapeShaderSource_numberOfShapeTargets(f);
        shaderText += '    vec3 blendedPosition = aVertex_position * max(1.0 - sumOfWeights/float(' + numOfShapeTargets + '), 0.0);\n';
        f.forEach(function (attribName) {
          if (_this2.BlendShapeShaderSource_isShapeTarget(attribName)) {
            shaderText += 'blendedPosition += aVertex_' + attribName + ' * blendWeight_' + attribName + '/float(' + numOfShapeTargets + ');\n';
          }
        });
        if (existCamera_f) {
          shaderText += '  gl_Position = pvwMatrix * vec4(blendedPosition, 1.0);\n';
        } else {
          shaderText += '  gl_Position = vec4(blendedPosition, 1.0);\n';
        }
        return shaderText;
      }
    }, {
      key: 'prepare_BlendShapeShaderSource',
      value: function prepare_BlendShapeShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {
        var _this3 = this;

        var vertexAttribsAsResult = [];
        vertexAttribs.forEach(function (attribName) {
          if (_this3.BlendShapeShaderSource_isShapeTarget(attribName)) {
            // if POSITION and ShapeTargets...
            vertexAttribsAsResult.push(attribName);
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
          }
        });

        vertexAttribs.forEach(function (attribName) {
          if (_this3.BlendShapeShaderSource_isShapeTarget(attribName)) {
            material['uniform_FloatSampler_blendWeight_' + attribName] = gl.getUniformLocation(shaderProgram, 'blendWeight_' + attribName);
            // とりあえずゼロ初期化
            gl.uniform1f(material['uniform_FloatSampler_blendWeight_' + attribName], 0.0);
          }
        });

        return vertexAttribsAsResult;
      }
    }, {
      key: 'BlendShapeShaderSource_isShapeTarget',
      value: function BlendShapeShaderSource_isShapeTarget(attribName) {
        return !Shader._exist(attribName, GLBoost.POSITION) && !Shader._exist(attribName, GLBoost.COLOR) && !Shader._exist(attribName, GLBoost.TEXCOORD);
      }
    }, {
      key: 'BlendShapeShaderSource_numberOfShapeTargets',
      value: function BlendShapeShaderSource_numberOfShapeTargets(attributes) {
        var _this4 = this;

        var count = 0;
        attributes.forEach(function (attribName) {
          if (_this4.BlendShapeShaderSource_isShapeTarget(attribName)) {
            count += 1;
          }
        });
        return count;
      }
    }]);
    return BlendShapeShaderSource;
  }();

  var BlendShapeGeometry = function (_Geometry) {
    babelHelpers.inherits(BlendShapeGeometry, _Geometry);

    function BlendShapeGeometry(glBoostContext) {
      babelHelpers.classCallCheck(this, BlendShapeGeometry);

      var _this = babelHelpers.possibleConstructorReturn(this, (BlendShapeGeometry.__proto__ || Object.getPrototypeOf(BlendShapeGeometry)).call(this, glBoostContext));

      _this._blendWeight_1 = 0.0;
      _this._blendWeight_2 = 0.0;
      _this._blendWeight_3 = 0.0;
      _this._blendWeight_4 = 0.0;
      _this._blendWeight_5 = 0.0;
      _this._blendWeight_6 = 0.0;
      _this._blendWeight_7 = 0.0;
      _this._blendWeight_8 = 0.0;
      _this._blendWeight_9 = 0.0;
      _this._blendWeight_10 = 0.0;

      _this._currentRenderPassIndex = 0;
      _this._materialForBlend = null;
      return _this;
    }

    babelHelpers.createClass(BlendShapeGeometry, [{
      key: 'draw',
      value: function draw(lights, camera, mesh, scene, renderPass_index) {
        this._currentRenderPassIndex = renderPass_index;
        babelHelpers.get(BlendShapeGeometry.prototype.__proto__ || Object.getPrototypeOf(BlendShapeGeometry.prototype), 'draw', this).call(this, lights, camera, mesh, scene, renderPass_index);
      }
    }, {
      key: 'prepareToRender',
      value: function prepareToRender(existCamera_f, pointLight, meshMaterial, mesh) {
        // before prepareForRender of 'Geometry' class, a new 'BlendShapeShader'(which extends default shader) is assigned.

        if (meshMaterial) {
          this._materialForBlend = meshMaterial;
        } else {
          this._materialForBlend = this._defaultMaterial;
        }

        var BlendShapeShader = function (_materialForBlend$sha) {
          babelHelpers.inherits(BlendShapeShader, _materialForBlend$sha);

          function BlendShapeShader(glBoostContext, basicShader) {
            babelHelpers.classCallCheck(this, BlendShapeShader);

            var _this2 = babelHelpers.possibleConstructorReturn(this, (BlendShapeShader.__proto__ || Object.getPrototypeOf(BlendShapeShader)).call(this, glBoostContext, basicShader));

            BlendShapeShader.mixin(BlendShapeShaderSource);
            return _this2;
          }

          return BlendShapeShader;
        }(this._materialForBlend.shaderClass);

        this._materialForBlend.shaderClass = BlendShapeShader;

        babelHelpers.get(BlendShapeGeometry.prototype.__proto__ || Object.getPrototypeOf(BlendShapeGeometry.prototype), 'prepareToRender', this).call(this, existCamera_f, pointLight, meshMaterial, mesh);
      }
    }, {
      key: '_setBlendWeightToGlslProgram',
      value: function _setBlendWeightToGlslProgram(blendTarget, weight) {
        var gl = this._glContext.gl;
        var materials = [this._materialForBlend];
        for (var i = 0; i < materials.length; i++) {
          gl.useProgram(materials[i].shaderInstance.glslProgram);
          gl.uniform1f(materials[i]['uniform_FloatSampler_blendWeight_' + blendTarget], weight);
        }
      }
    }, {
      key: 'blendWeight_1',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET1, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_1 = weight;
      },
      get: function get() {
        return this._blendWeight_1;
      }
    }, {
      key: 'blendWeight_2',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET2, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_2 = weight;
      },
      get: function get() {
        return this._blendWeight_2;
      }
    }, {
      key: 'blendWeight_3',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET3, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_3 = weight;
      },
      get: function get() {
        return this._blendWeight_3;
      }
    }, {
      key: 'blendWeight_4',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET4, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_4 = weight;
      },
      get: function get() {
        return this._blendWeight_4;
      }
    }, {
      key: 'blendWeight_5',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET5, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_5 = weight;
      },
      get: function get() {
        return this._blendWeight_5;
      }
    }, {
      key: 'blendWeight_6',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET6, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_6 = weight;
      },
      get: function get() {
        return this._blendWeight_6;
      }
    }, {
      key: 'blendWeight_7',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET7, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_7 = weight;
      },
      get: function get() {
        return this._blendWeight_7;
      }
    }, {
      key: 'blendWeight_8',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET8, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_8 = weight;
      },
      get: function get() {
        return this._blendWeight_8;
      }
    }, {
      key: 'blendWeight_9',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET9, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_9 = weight;
      },
      get: function get() {
        return this._blendWeight_9;
      }
    }, {
      key: 'blendWeight_10',
      set: function set(weight) {
        var gl = this._glContext.gl;
        var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

        this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET10, weight);
        gl.useProgram(currentProgram);
        this._blendWeight_10 = weight;
      },
      get: function get() {
        return this._blendWeight_10;
      }
    }]);
    return BlendShapeGeometry;
  }(Geometry);

  GLBoost$1['BlendShapeGeometry'] = BlendShapeGeometry;

  var GLBoostLowContext = function () {
    function GLBoostLowContext(canvas, gl, width, height) {
      babelHelpers.classCallCheck(this, GLBoostLowContext);

      this._setName();

      if (gl) {
        this._glContext = GLContext.getInstance(null, gl, width, height);
      } else {
        this._glContext = GLContext.getInstance(canvas);
      }
    }

    babelHelpers.createClass(GLBoostLowContext, [{
      key: '_setName',
      value: function _setName() {
        this.constructor._instanceCount = typeof this.constructor._instanceCount === 'undefined' ? 0 : this.constructor._instanceCount + 1;
        this._instanceName = this.constructor.name + '_' + this.constructor._instanceCount;
      }
    }, {
      key: 'toString',
      value: function toString() {
        return this._instanceName;
      }
    }, {
      key: 'createGeometry',
      value: function createGeometry() {
        return new Geometry(this);
      }
    }, {
      key: 'createBlendShapeGeometry',
      value: function createBlendShapeGeometry() {
        return new BlendShapeGeometry(this);
      }
    }, {
      key: 'createCube',
      value: function createCube(widthVector, vertexColor) {
        return new Cube(this, widthVector, vertexColor);
      }
    }, {
      key: 'createPlane',
      value: function createPlane(width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat) {
        return new Plane(this, width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat);
      }
    }, {
      key: 'createSphere',
      value: function createSphere(radius, widthSegments, heightSegments, vertexColor) {
        return new Sphere(this, radius, widthSegments, heightSegments, vertexColor);
      }
    }, {
      key: 'createAxis',
      value: function createAxis(length) {
        return new Axis(length);
      }
    }, {
      key: 'createParticle',
      value: function createParticle(centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint) {
        return new Particle(this, centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint);
      }
    }, {
      key: 'createClassicMaterial',
      value: function createClassicMaterial() {
        return new ClassicMaterial(this);
      }
    }, {
      key: 'createPerspectiveCamera',
      value: function createPerspectiveCamera(lookat, perspective) {
        return new L_PerspectiveCamera(this, true, lookat, perspective);
      }
    }, {
      key: 'createOrthoCamera',
      value: function createOrthoCamera(lookat, ortho) {
        return new L_OrthoCamera(this, true, lookat, ortho);
      }
    }, {
      key: 'createCameraController',
      value: function createCameraController(isSymmetryMode, doResetWhenCameraSettingChanged, isForceGrab, efficiency) {
        return new L_CameraController(this, isSymmetryMode, doResetWhenCameraSettingChanged, isForceGrab, efficiency);
      }
    }, {
      key: 'createTexture',
      value: function createTexture(src, userFlavorName) {
        var parameters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        return new Texture(this, src, userFlavorName, parameters);
      }
    }, {
      key: 'createPhinaTexture',
      value: function createPhinaTexture(width, height, fillStyle) {
        var parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        return new PhinaTexture(this, width, height, fillStyle, parameters);
      }

      /**
       * en: create textures as render target. (and attach it to framebuffer object internally.)<br>
       * ja:レンダーターゲットとしてテクスチャを作成します（内部的にframebuffer objectにアタッチされます）。
       * @param {number} width en: width of texture. ja: テクスチャの幅
       * @param {number} height en: height of texture. ja: テクスチャの高さ
       * @param {number} textureNum en: the number of creation. ja:テクスチャを作る個数
       * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
       * @returns {Array} en: an array of created textures. ja:作成されたテクスチャの配列
       */

    }, {
      key: 'createTexturesForRenderTarget',
      value: function createTexturesForRenderTarget(width, height, textureNum) {
        var glContext = this._glContext;
        var gl = glContext.gl;

        var glem = GLExtensionsManager.getInstance(glContext);

        // Create FBO
        var fbo = glContext.createFramebuffer(this);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        fbo.width = width;
        fbo.height = height;

        var renderTargetTextures = [];
        for (var i = 0; i < textureNum; i++) {
          var texture = new MutableTexture(this, fbo.width, fbo.height);
          texture.fbo = fbo;
          renderTargetTextures.push(texture);
        }

        // Create RenderBuffer
        var renderbuffer = glContext.createRenderbuffer(this);
        gl.bindRenderbuffer(gl.RENDERBUFFER, renderbuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, fbo.width, fbo.height);

        // Attach Buffers
        renderTargetTextures.forEach(function (texture, i) {
          var glTexture = texture.glTextureResource;
          var attachimentId = glem.colorAttachiment(gl, i);
          texture.colorAttachment = attachimentId;
          gl.framebufferTexture2D(gl.FRAMEBUFFER, attachimentId, gl.TEXTURE_2D, glTexture, 0);
        });
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderbuffer);

        gl.bindRenderbuffer(gl.RENDERBUFFER, null);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        return renderTargetTextures;
      }
    }, {
      key: 'createDepthTexturesForRenderTarget',
      value: function createDepthTexturesForRenderTarget(width, height) {
        var glContext = this._glContext;

        var gl = glContext.gl;

        var glem = GLExtensionsManager.getInstance(glContext);

        // Create FBO
        var fbo = glContext.createFramebuffer(this);
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        fbo.width = width;
        fbo.height = height;

        // Create color RenderBuffer
        var colorBuffer = gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, colorBuffer);
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA4, fbo.width, fbo.width);

        // Create MutableTexture for Depth Texture
        var depthTexture = new MutableTexture(this, fbo.width, fbo.height, 0, gl.DEPTH_COMPONENT, gl.DEPTH_COMPONENT, gl.UNSIGNED_INT, gl.NEAREST, gl.NEAREST, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
        depthTexture.fbo = fbo;

        /// Attach Buffers
        // color
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, colorBuffer);

        // depth
        var glTexture = depthTexture.glTextureResource;
        var attachimentId = gl.DEPTH_ATTACHMENT;
        depthTexture.depthAttachment = attachimentId;
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachimentId, gl.TEXTURE_2D, glTexture, 0);

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);

        return depthTexture;
      }
    }, {
      key: 'glContext',
      get: function get() {
        return this._glContext;
      }
    }, {
      key: 'belongingCanvasId',
      get: function get() {
        return this._glContext.belongingCanvasId;
      }
    }]);
    return GLBoostLowContext;
  }();

  GLBoost['GLBoostLowContext'] = GLBoostLowContext;

  var GLBoostMiddleContext = function (_GLBoostLowContext) {
    babelHelpers.inherits(GLBoostMiddleContext, _GLBoostLowContext);

    function GLBoostMiddleContext(canvas, gl, width, height) {
      babelHelpers.classCallCheck(this, GLBoostMiddleContext);
      return babelHelpers.possibleConstructorReturn(this, (GLBoostMiddleContext.__proto__ || Object.getPrototypeOf(GLBoostMiddleContext)).call(this, canvas, gl, width, height));
    }

    babelHelpers.createClass(GLBoostMiddleContext, [{
      key: 'createScene',
      value: function createScene() {
        return new M_Scene(this);
      }
    }, {
      key: 'createGroup',
      value: function createGroup() {
        return new M_Group(this);
      }
    }, {
      key: 'createMesh',
      value: function createMesh(geometry, material) {
        return new M_Mesh(this, geometry, material);
      }
    }, {
      key: 'createSkeletalMesh',
      value: function createSkeletalMesh(geometry, material, rootJointName) {
        return new M_SkeletalMesh(this, geometry, material, rootJointName);
      }
    }, {
      key: 'createSkeletalGeometry',
      value: function createSkeletalGeometry() {
        return new M_SkeletalGeometry(this);
      }
    }, {
      key: 'createRenderer',
      value: function createRenderer(parameters) {
        return new Renderer(this, parameters);
      }
    }, {
      key: 'createExpression',
      value: function createExpression() {
        return this.createExpressionAndRenderPasses(1);
      }
    }, {
      key: 'createExpressionAndRenderPasses',
      value: function createExpressionAndRenderPasses(number) {
        var expression = new Expression(this);
        var renderPasses = this.createRenderPasses(number);
        expression.addRenderPasses(renderPasses);

        return expression;
      }
    }, {
      key: 'createRenderPasses',
      value: function createRenderPasses(number) {
        var renderPasses = [];
        for (var i = 0; i < number; i++) {
          renderPasses.push(new RenderPass(this));
        }

        return renderPasses;
      }
    }, {
      key: 'createPerspectiveCamera',
      value: function createPerspectiveCamera(lookat, perspective) {
        return new M_PerspectiveCamera(this, true, lookat, perspective);
      }
    }, {
      key: 'createOrthoCamera',
      value: function createOrthoCamera(lookat, ortho) {
        return new M_OrthoCamera(this, true, lookat, ortho);
      }
    }, {
      key: 'createDirectionalLight',
      value: function createDirectionalLight(intensity, direction) {
        return new M_DirectionalLight(this, intensity, direction);
      }
    }, {
      key: 'createPointLight',
      value: function createPointLight(intensity) {
        return new M_PointLight(this, intensity);
      }
    }, {
      key: 'createJoint',
      value: function createJoint() {
        return new M_Joint(this);
      }
    }, {
      key: 'createAxisGizmo',
      value: function createAxisGizmo(length) {
        return new M_AxisGizmo(this, length);
      }
    }, {
      key: 'createGridGizmo',
      value: function createGridGizmo(length, division, isXZ, isXY, isYZ, colorVec) {
        return new M_GridGizmo(this, length, division, isXZ, isXY, isYZ, colorVec);
      }
    }]);
    return GLBoostMiddleContext;
  }(GLBoostLowContext);

  GLBoost['GLBoostMiddleContext'] = GLBoostMiddleContext;

  var DataUtil = function () {
    function DataUtil() {
      babelHelpers.classCallCheck(this, DataUtil);
    }

    babelHelpers.createClass(DataUtil, null, [{
      key: "btoa",
      value: function (_btoa) {
        function btoa(_x) {
          return _btoa.apply(this, arguments);
        }

        btoa.toString = function () {
          return _btoa.toString();
        };

        return btoa;
      }(function (str) {
        var isNode = typeof process !== "undefined" && typeof require !== "undefined";
        if (isNode) {
          var buffer = void 0;
          if (Buffer.isBuffer(str)) {
            buffer = str;
          } else {
            buffer = new Buffer(str.toString(), 'binary');
          }
          return buffer.toString('base64');
        } else {
          return btoa(str);
        }
      })
    }, {
      key: "atob",
      value: function (_atob) {
        function atob(_x2) {
          return _atob.apply(this, arguments);
        }

        atob.toString = function () {
          return _atob.toString();
        };

        return atob;
      }(function (str) {
        var isNode = typeof process !== "undefined" && typeof require !== "undefined";
        if (isNode) {
          return new Buffer(str, 'base64').toString('binary');
        } else {
          return atob(str);
        }
      })
    }, {
      key: "base64ToArrayBuffer",
      value: function base64ToArrayBuffer(dataUri) {
        var splittedDataUri = dataUri.split(',');
        var type = splittedDataUri[0].split(':')[1].split(';')[0];
        var byteString = DataUtil.atob(splittedDataUri[1]);
        var byteStringLength = byteString.length;
        var arrayBuffer = new ArrayBuffer(byteStringLength);
        var uint8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteStringLength; i++) {
          uint8Array[i] = byteString.charCodeAt(i);
        }
        return arrayBuffer;
      }
    }, {
      key: "arrayBufferToString",
      value: function arrayBufferToString(arrayBuffer) {
        if (typeof TextDecoder !== 'undefined') {
          var textDecoder = new TextDecoder();
          return textDecoder.decode(arrayBuffer);
        } else {
          var bytes = new Uint8Array(arrayBuffer);
          var result = "";
          var length = bytes.length;
          for (var i = 0; i < length; i++) {
            result += String.fromCharCode(bytes[i]);
          }
          return result;
        }
      }
    }, {
      key: "loadResourceAsync",
      value: function loadResourceAsync(resourceUri, isBinary, resolveCallback, rejectCallback) {
        return new Promise(function (resolve, reject) {
          var isNode = typeof process !== "undefined" && typeof require !== "undefined";

          if (isNode) {
            var fs = require('fs');
            var args = [resourceUri];
            var func = function func(err, response) {
              if (err) {
                if (rejectCallback) {
                  rejectCallback(reject, err);
                }
                return;
              }
              if (isBinary) {
                var buffer = new Buffer(response, 'binary');
                var uint8Buffer = new Uint8Array(buffer);
                response = uint8Buffer.buffer;
              }
              resolveCallback(resolve, response);
            };

            if (isBinary) {
              args.push(func);
            } else {
              args.push('utf8');
              args.push(func);
            }
            fs.readFile.apply(fs, args);
          } else {
            (function () {
              var xmlHttp = new XMLHttpRequest();
              if (isBinary) {
                xmlHttp.responseType = "arraybuffer";
                xmlHttp.onload = function (oEvent) {
                  var response = null;
                  if (isBinary) {
                    response = xmlHttp.response;
                  } else {
                    response = xmlHttp.responseText;
                  }
                  resolveCallback(resolve, response);
                };
              } else {
                xmlHttp.onreadystatechange = function () {
                  if (xmlHttp.readyState === 4 && (Math.floor(xmlHttp.status / 100) === 2 || xmlHttp.status === 0)) {
                    var response = null;
                    if (isBinary) {
                      response = xmlHttp.response;
                    } else {
                      response = xmlHttp.responseText;
                    }
                    resolveCallback(resolve, response);
                  } else {
                    if (rejectCallback) {
                      rejectCallback(reject, xmlHttp.status);
                    }
                  }
                };
              }

              xmlHttp.open("GET", resourceUri, true);
              xmlHttp.send(null);
            })();
          }
        });
      }
    }]);
    return DataUtil;
  }();

  var PhongShaderSource = function () {
    function PhongShaderSource() {
      babelHelpers.classCallCheck(this, PhongShaderSource);
    }

    babelHelpers.createClass(PhongShaderSource, [{
      key: 'FSDefine_PhongShaderSource',
      value: function FSDefine_PhongShaderSource(in_, f, lights) {
        var shaderText = '';
        shaderText += 'uniform vec3 viewPosition;\n';
        shaderText += 'uniform vec4 Kd;\n';
        shaderText += 'uniform vec4 Ks;\n';
        shaderText += 'uniform float power;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_PhongShaderSource',
      value: function FSShade_PhongShaderSource(f, gl, lights) {
        var shaderText = '';
        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
        shaderText += '  vec3 normal = normalize(v_normal);\n';

        shaderText += '  for (int i=0; i<' + lights.length + '; i++) {\n';
        // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0
        shaderText += '    vec3 light = normalize(lightPosition[i].xyz - position.xyz * lightPosition[i].w);\n';
        shaderText += '    float diffuse = max(dot(light, normal), 0.0);\n';
        shaderText += '    rt0 += Kd * lightDiffuse[i] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n';
        shaderText += '    vec3 view = normalize(viewPosition - position.xyz);\n';
        shaderText += '    vec3 reflect = reflect(-light, normal);\n';
        shaderText += '    float specular = pow(max(dot(reflect, view), 0.0), power);\n';
        shaderText += '    rt0 += Ks * lightDiffuse[i] * vec4(specular, specular, specular, 0.0);\n';
        shaderText += '  }\n';
        //    shaderText += '  rt0 *= (1.0 - shadowRatio);\n';
        //shaderText += '  rt0.a = 1.0;\n';


        return shaderText;
      }
    }, {
      key: 'prepare_PhongShaderSource',
      value: function prepare_PhongShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];

        material.uniform_Kd = gl.getUniformLocation(shaderProgram, 'Kd');
        material.uniform_Ks = gl.getUniformLocation(shaderProgram, 'Ks');
        material.uniform_power = gl.getUniformLocation(shaderProgram, 'power');

        material['uniform_viewPosition'] = gl.getUniformLocation(shaderProgram, 'viewPosition');

        return vertexAttribsAsResult;
      }
    }]);
    return PhongShaderSource;
  }();

  var PhongShader = function (_DecalShader) {
    babelHelpers.inherits(PhongShader, _DecalShader);

    function PhongShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, PhongShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (PhongShader.__proto__ || Object.getPrototypeOf(PhongShader)).call(this, glBoostContext, basicShader));

      PhongShader.mixin(PhongShaderSource);

      _this._power = 64.0;

      return _this;
    }

    babelHelpers.createClass(PhongShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {
        babelHelpers.get(PhongShader.prototype.__proto__ || Object.getPrototypeOf(PhongShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material);

        var Kd = material.diffuseColor;
        var Ks = material.specularColor;
        gl.uniform4f(material.uniform_Kd, Kd.x, Kd.y, Kd.z, Kd.w);
        gl.uniform4f(material.uniform_Ks, Ks.x, Ks.y, Ks.z, Ks.w);
        gl.uniform1f(material.uniform_power, this._power);
      }
    }, {
      key: 'Kd',
      set: function set(value) {
        this._Kd = value;
      },
      get: function get() {
        return this._Kd;
      }
    }, {
      key: 'Ks',
      set: function set(value) {
        this._Ks = value;
      },
      get: function get() {
        return this._Ks;
      }
    }, {
      key: 'power',
      set: function set(value) {
        this._power = value;
      },
      get: function get() {
        return this._power;
      }
    }]);
    return PhongShader;
  }(DecalShader);

  GLBoost['PhongShader'] = PhongShader;

  var singleton = Symbol();
  var singletonEnforcer = Symbol();

  /**
   * [en] This is a loader class of Obj file format.<br>
   * [ja] Objファイルを読み込むためのローダークラスです。
   */

  var ObjLoader = function () {

    /**
     * [en] The constructor of ObjLoader class. But you cannot use this constructor directly because of this class is a singleton class. Use getInstance() static method.<br>
     * [ja] ObjLoaderクラスのコンストラクタです。しかし本クラスはシングルトンであるため、このコンストラクタは直接呼び出せません。getInstance()静的メソッドを使ってください。
     * @param {Symbol} enforcer [en] a Symbol to forbid calling this constructor directly [ja] このコンストラクタの直接呼び出しを禁止するためのシンボル
     */
    function ObjLoader(enforcer) {
      babelHelpers.classCallCheck(this, ObjLoader);

      if (enforcer !== singletonEnforcer) {
        throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");
      }
    }

    /**
     * [en] The static method to get singleton instance of this class.<br>
     * [ja] このクラスのシングルトンインスタンスを取得するための静的メソッド。
     * @return {ObjLoader} [en] the singleton instance of ObjLoader class [ja] ObjLoaderクラスのシングルトンインスタンス
     */


    babelHelpers.createClass(ObjLoader, [{
      key: 'loadObj',


      /**
       * [en] the method to load Obj file.<br>
       * [ja] Obj fileをロードするためのメソッド。
       * @param {string} url [en] url of glTF file [ja] Objファイルのurl
       * @param {Shader} defaultShader [en] a shader to assign to loaded geometries [ja] 読み込んだジオメトリに適用するシェーダー
       * @param {string} mtlString [en] string of mtl file (optional) [ja] mtlファイルの内容の文字列情報（オプショナル。mtlファイルの読み込みが何らかの事情でできない場合に使います）
       * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
       * @return {Promise} [en] a promise object [ja] Promiseオブジェクト
       */
      value: function loadObj(glBoostContext, url) {
        var _this = this;

        var defaultShader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var mtlString = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        return DataUtil.loadResourceAsync(url, false, function (resolve, responseText) {
          var gotText = responseText;
          var partsOfPath = url.split('/');
          var basePath = '';
          for (var i = 0; i < partsOfPath.length - 1; i++) {
            basePath += partsOfPath[i] + '/';
          }
          _this._constructMesh(glBoostContext, gotText, basePath, defaultShader, mtlString, resolve);
        }, function (reject, err) {});
      }
    }, {
      key: '_loadMaterialsFromString',
      value: function _loadMaterialsFromString(glBoostContext, mtlString, defaultShader) {
        var basePath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        var resolve = arguments[4];


        var mtlTextRows = mtlString.split('\n');

        var numMaterial = 0;
        // checking the number of material
        for (var i = 0; i < mtlTextRows.length; i++) {
          var matchArray = mtlTextRows[i].match(/^(\w+) (\w+)/);
          if (matchArray === null) {
            continue;
          }

          if (matchArray[1] === "newmtl") {
            numMaterial++;
          }
        }

        var materials = new Array(numMaterial);
        var iMCount = -1;

        var promisesToLoadTexture = [];
        // main loading
        for (var _i2 = 0; _i2 < mtlTextRows.length; _i2++) {
          var _matchArray = mtlTextRows[_i2].match(/(\w+) ([\w:\/\-\.]+)/);

          if (_matchArray === null) {
            continue;
          }

          if (_matchArray[1] === "newmtl") {
            iMCount++;
            materials[iMCount] = glBoostContext.createClassicMaterial();
            if (defaultShader) {
              materials[iMCount].shaderClass = defaultShader;
            } else {
              materials[iMCount].shaderClass = PhongShader;
            }
            materials[iMCount].name = _matchArray[2];
          }

          if (_matchArray[1].toLowerCase() === "ka") {
            _matchArray = mtlTextRows[_i2].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
            materials[iMCount].ambientColor.x = parseFloat(_matchArray[2]);
            materials[iMCount].ambientColor.y = parseFloat(_matchArray[3]);
            materials[iMCount].ambientColor.z = parseFloat(_matchArray[4]);
          }

          if (_matchArray[1].toLowerCase() === "kd") {
            _matchArray = mtlTextRows[_i2].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
            materials[iMCount].diffuseColor.x = parseFloat(_matchArray[2]);
            materials[iMCount].diffuseColor.y = parseFloat(_matchArray[3]);
            materials[iMCount].diffuseColor.z = parseFloat(_matchArray[4]);
          }

          if (_matchArray[1].toLowerCase() === "ks") {
            _matchArray = mtlTextRows[_i2].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
            materials[iMCount].specularColor.x = parseFloat(_matchArray[2]);
            materials[iMCount].specularColor.y = parseFloat(_matchArray[3]);
            materials[iMCount].specularColor.z = parseFloat(_matchArray[4]);
          }

          if (_matchArray[1].toLowerCase() === "map_kd") {
            _matchArray = mtlTextRows[_i2].match(/(\w+) ([\w:\/\-\.]+)/);
            //var texture = glBoostContext.createTexture(basePath + matchArray[2], matchArray[2], {'UNPACK_FLIP_Y_WEBGL': true});
            var texture = glBoostContext.createTexture(null, _matchArray[2], { 'UNPACK_FLIP_Y_WEBGL': true });
            var promise = texture.generateTextureFromUri(basePath + _matchArray[2], false);
            promisesToLoadTexture.push(promise);
            materials[iMCount].setTexture(texture);
          }
        }

        var promiseAll = Promise.all(promisesToLoadTexture);
        promiseAll.then(function () {
          resolve(materials);
        });
      }
    }, {
      key: '_loadMaterialsFromFile',
      value: function _loadMaterialsFromFile(glBoostContext, basePath, fileName, defaultShader) {
        var _this2 = this;

        return DataUtil.loadResourceAsync(basePath + fileName, false, function (resolve, responseText) {
          _this2._loadMaterialsFromString(glBoostContext, responseText, defaultShader, basePath, resolve);
        }, function (reject, err) {});
      }
    }, {
      key: '_constructMesh',
      value: function _constructMesh(glBoostContext, objText, basePath, defaultShader, mtlString, resolve) {
        var _this3 = this;

        //console.log(basePath);

        var objTextRows = objText.split('\n');
        var promise = null;
        var vCount = 0;
        var fCount = 0;
        var vnCount = 0;
        var vtCount = 0;

        if (mtlString) {
          promise = function () {
            return new Promise(function (resolve, reject) {
              _this3._loadMaterialsFromString(glBoostContext, mtlString, defaultShader, '', resolve);
            });
          }();
        }

        for (var i = 0; i < objTextRows.length; i++) {
          var matchArray = objTextRows[i].match(/^(\w+) (\w+)/);
          if (matchArray === null) {
            continue;
          }

          // material file
          if (matchArray[1] === "mtllib" && mtlString === null) {
            promise = this._loadMaterialsFromFile(glBoostContext, basePath, matchArray[2] + '.mtl', defaultShader);
          }
        }

        promise.then(function (materials) {
          for (var _i3 = 0; _i3 < objTextRows.length; _i3++) {
            var _matchArray2 = objTextRows[_i3].match(/^(\w+) +(\w+)/);
            if (_matchArray2 === null) {
              continue;
            }

            // Vertex
            if (_matchArray2[1] === "v") {
              vCount++;
            }
            // Vertex Normal
            if (_matchArray2[1] === "vn") {
              vnCount++;
            }
            // Texcoord
            if (_matchArray2[1] === "vt") {
              vtCount++;
            }
            // Face
            if (_matchArray2[1] === "f") {
              _matchArray2 = objTextRows[_i3].match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
              if (_matchArray2 !== null) {
                // if this is a Quad Polygon
                fCount += 2;
              } else {
                fCount++;
              }
            }
          }

          var pvCoord = new Array(vCount);
          var pvNormal = new Array(vnCount);
          var pvTexture = new Array(vtCount);

          vCount = 0;
          vnCount = 0;
          vtCount = 0;

          for (var _i4 = 0; _i4 < objTextRows.length; _i4++) {
            //キーワード 読み込み
            var _matchArray3 = objTextRows[_i4].match(/^(\w+) /);

            if (_matchArray3 === null) {
              continue;
            }

            //頂点 読み込み
            if (_matchArray3[1] === "v") {
              _matchArray3 = objTextRows[_i4].match(/^(\w+) +(-?[0-9\.]+) (-?[0-9\.]+) (-?[0-9\.]+)/);
              //          pvCoord[vCount].x=-x;//OBJは右手、Direct3Dは左手座標系。
              pvCoord[vCount] = new Vector3();
              pvCoord[vCount].x = parseFloat(_matchArray3[2]);
              pvCoord[vCount].y = parseFloat(_matchArray3[3]);
              pvCoord[vCount].z = parseFloat(_matchArray3[4]);
              vCount++;
            }

            //法線 読み込み
            if (_matchArray3[1] === "vn") {
              _matchArray3 = objTextRows[_i4].match(/^(\w+) (-?[0-9\.]+) (-?[0-9\.]+) (-?[0-9\.]+)/);
              //          pvNormal[vnCount].x=-x;//OBJは右手、Direct3Dは左手座標系。
              pvNormal[vnCount] = new Vector3();
              pvNormal[vnCount].x = parseFloat(_matchArray3[2]);
              pvNormal[vnCount].y = parseFloat(_matchArray3[3]);
              pvNormal[vnCount].z = parseFloat(_matchArray3[4]);
              vnCount++;
            }

            //テクスチャー座標 読み込み
            if (_matchArray3[1] === "vt") {
              _matchArray3 = objTextRows[_i4].match(/^(\w+) (-?[0-9\.]+) (-?[0-9\.]+)/);
              pvTexture[vtCount] = new Vector2();
              pvTexture[vtCount].x = parseFloat(_matchArray3[2]);
              pvTexture[vtCount].y = parseFloat(_matchArray3[3]);
              //pvTexture[vtCount].y = 1 - pvTexture[vtCount].y; //Y成分が逆なので合わせる

              vtCount++;
            }
          }

          var positions = new Array();
          var texcoords = new Array();
          var normals = new Array();
          var indices = [];

          var boFlag = false;

          var FaceN = fCount;
          fCount = 0;
          var partFCount = 0;

          var geometry = glBoostContext.createGeometry();

          for (var _i5 = 0; _i5 < materials.length; _i5++) {
            partFCount = 0;
            var matIndices = new Array();
            var tmpIndices = new Array();
            var tmpPositions = new Array();
            var tmpTexcoords = new Array();
            var tmpNormals = new Array();

            var _i = 0;
            for (var j = 0; j < objTextRows.length && fCount < FaceN; j++) {
              var _matchArray4 = objTextRows[j].match(/^(\w+) (\w+)/);

              if (_matchArray4 === null) {
                continue;
              }

              if (_matchArray4[1] === "usemtl") {
                if (_matchArray4[2] === materials[_i5].name) {
                  boFlag = true;
                } else {
                  boFlag = false;
                }
              }

              if (_matchArray4[1] === "f" && boFlag) {
                var isQuad = true;
                var _matchArray5 = objTextRows[j].match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);if (_matchArray5 === null) {
                  _matchArray5 = objTextRows[j].match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
                }
                if (_matchArray5 === null) {
                  isQuad = false;
                }

                if (materials[_i5].hasAnyTextures()) {
                  if (isQuad) {
                    _this3._addQuadDataToArraysWithTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                  } else {
                    _this3._addTriangleDataToArraysWithTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                  }
                } else {
                  if (isQuad) {
                    _this3._addQuadDataToArraysWithoutTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                  } else {
                    _this3._addTriangleDataToArraysWithoutTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                  }
                }

                _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3, matIndices, tmpIndices, _i);
                _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 1, matIndices, tmpIndices, _i);
                _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 2, matIndices, tmpIndices, _i);

                /*
                iFaceBufferArray[partFCount*3]=fCount*3;
                iFaceBufferArray[partFCount*3+1]=fCount*3+1;
                iFaceBufferArray[partFCount*3+2]=fCount*3+2;
                */
                if (isQuad) {
                  /*
                  iFaceBufferArray[partFCount*3+3]=fCount*3+3;
                  iFaceBufferArray[partFCount*3+4]=fCount*3+4;
                  iFaceBufferArray[partFCount*3+5]=fCount*3+5;
                  */
                  _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 3, matIndices, tmpIndices, _i);
                  _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 4, matIndices, tmpIndices, _i);
                  _i = _this3._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount * 3 + 5, matIndices, tmpIndices, _i);

                  partFCount += 2;
                  fCount += 2;
                } else {
                  partFCount++;
                  fCount++;
                }
              }
            }

            if (fCount === 0) //使用されていないマテリアル対策
              {
                continue;
              }

            //        materials[i].setVertexN(geometry, partFCount*3);
            materials[_i5].setVertexN(geometry, matIndices.length);

            //indices[i] = iFaceBufferArray.concat();
            indices[_i5] = matIndices.concat();
          }

          var mesh = glBoostContext.createMesh(geometry, null);
          geometry.materials = materials;
          geometry.setVerticesData({
            position: positions,
            texcoord: texcoords,
            normal: normals
          }, indices);

          resolve(mesh);
        }).catch(function onRejected(error) {
          console.error(error);
        });
      }
    }, {
      key: '_reductionVertices',
      value: function _reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, vCount, matIndices, tmpIndices, _i) {
        var str = '' + tmpPositions[vCount].x + ',' + tmpPositions[vCount].y + ',' + tmpPositions[vCount].z + ',' + tmpNormals[vCount].x + ',' + tmpNormals[vCount].y + ',' + tmpNormals[vCount].z + ',' + tmpTexcoords[vCount].x + ',' + tmpTexcoords[vCount].y;

        var hashCode = Hash.toCRC32(str);
        if (typeof tmpIndices[hashCode] === 'undefined') {
          tmpIndices[hashCode] = _i;
          _i++;
          positions.push(tmpPositions[vCount]);
          normals.push(tmpNormals[vCount]);
          texcoords.push(tmpTexcoords[vCount]);
        }

        matIndices.push(tmpIndices[hashCode]);

        return _i;
      }
    }, {
      key: '_addTriangleDataToArraysWithTexture',
      value: function _addTriangleDataToArraysWithTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount) {
        var v1 = 0,
            v2 = 0,
            v3 = 0;
        var vn1 = 0,
            vn2 = 0,
            vn3 = 0;
        var vt1 = 0,
            vt2 = 0,
            vt3 = 0;
        var matchArray = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);

        if (matchArray !== null) {
          v1 = matchArray[2];
          vt1 = matchArray[3];
          vn1 = matchArray[4];
          v2 = matchArray[5];
          vt2 = matchArray[6];
          vn2 = matchArray[7];
          v3 = matchArray[8];
          vt3 = matchArray[9];
          vn3 = matchArray[10];
          positions[fCount * 3] = pvCoord[v1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
          texcoords[fCount * 3] = pvTexture[vt1 - 1];
          texcoords[fCount * 3 + 1] = pvTexture[vt2 - 1];
          texcoords[fCount * 3 + 2] = pvTexture[vt3 - 1];
        } else {
          var _matchArray6 = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
          v1 = _matchArray6[2];
          vn1 = _matchArray6[3];
          v2 = _matchArray6[4];
          vn2 = _matchArray6[5];
          v3 = _matchArray6[6];
          vn3 = _matchArray6[7];
          positions[fCount * 3] = pvCoord[v1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
        }
      }
    }, {
      key: '_addTriangleDataToArraysWithoutTexture',
      value: function _addTriangleDataToArraysWithoutTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount) {
        var v1 = 0,
            v2 = 0,
            v3 = 0;
        var vn1 = 0,
            vn2 = 0,
            vn3 = 0;
        var vt1 = 0,
            vt2 = 0,
            vt3 = 0;
        var matchArray = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);

        if (matchArray !== null) {
          v1 = matchArray[2];
          vn1 = matchArray[3];
          v2 = matchArray[4];
          vn2 = matchArray[5];
          v3 = matchArray[6];
          vn3 = matchArray[7];

          positions[fCount * 3] = pvCoord[v1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
        } else {
          var _matchArray7 = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
          v1 = _matchArray7[2];
          vt1 = _matchArray7[3];
          vn1 = _matchArray7[4];
          v2 = _matchArray7[5];
          vt2 = _matchArray7[6];
          vn2 = _matchArray7[7];
          v3 = _matchArray7[8];
          vt3 = _matchArray7[9];
          vn3 = _matchArray7[10];

          positions[fCount * 3] = pvCoord[v1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
          texcoords[fCount * 3] = pvTexture[vt1 - 1];
          texcoords[fCount * 3 + 1] = pvTexture[vt2 - 1];
          texcoords[fCount * 3 + 2] = pvTexture[vt3 - 1];
        }
      }
    }, {
      key: '_addQuadDataToArraysWithTexture',
      value: function _addQuadDataToArraysWithTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount) {
        var v1 = 0,
            v2 = 0,
            v3 = 0,
            v4 = 0;
        var vn1 = 0,
            vn2 = 0,
            vn3 = 0,
            vn4 = 0;
        var vt1 = 0,
            vt2 = 0,
            vt3 = 0,
            vt4 = 0;
        var matchArray = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);

        if (matchArray !== null) {
          v1 = matchArray[2];
          vt1 = matchArray[3];
          vn1 = matchArray[4];
          v2 = matchArray[5];
          vt2 = matchArray[6];
          vn2 = matchArray[7];
          v3 = matchArray[8];
          vt3 = matchArray[9];
          vn3 = matchArray[10];
          v4 = matchArray[11];
          vt4 = matchArray[12];
          vn4 = matchArray[13];

          positions[fCount * 3] = pvCoord[v1 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          texcoords[fCount * 3] = pvTexture[vt1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          texcoords[fCount * 3 + 1] = pvTexture[vt2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
          texcoords[fCount * 3 + 2] = pvTexture[vt3 - 1];

          positions[fCount * 3 + 3] = pvCoord[v3 - 1];
          normals[fCount * 3 + 3] = pvNormal[vn3 - 1];
          texcoords[fCount * 3 + 3] = pvTexture[vt3 - 1];
          positions[fCount * 3 + 4] = pvCoord[v4 - 1];
          normals[fCount * 3 + 4] = pvNormal[vn4 - 1];
          texcoords[fCount * 3 + 4] = pvTexture[vt4 - 1];
          positions[fCount * 3 + 5] = pvCoord[v1 - 1];
          normals[fCount * 3 + 5] = pvNormal[vn1 - 1];
          texcoords[fCount * 3 + 5] = pvTexture[vt1 - 1];
        } else {
          var _matchArray8 = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
          v1 = _matchArray8[2];
          vn1 = _matchArray8[3];
          v2 = _matchArray8[4];
          vn2 = _matchArray8[5];
          v3 = _matchArray8[6];
          vn3 = _matchArray8[7];
          v4 = _matchArray8[8];
          vn4 = _matchArray8[9];

          positions[fCount * 3] = pvCoord[v1 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];

          positions[fCount * 3 + 3] = pvCoord[v3 - 1];
          normals[fCount * 3 + 3] = pvNormal[vn3 - 1];
          positions[fCount * 3 + 4] = pvCoord[v4 - 1];
          normals[fCount * 3 + 4] = pvNormal[vn4 - 1];
          positions[fCount * 3 + 5] = pvCoord[v1 - 1];
          normals[fCount * 3 + 5] = pvNormal[vn1 - 1];
        }
      }
    }, {
      key: '_addQuadDataToArraysWithoutTexture',
      value: function _addQuadDataToArraysWithoutTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount) {
        var v1 = 0,
            v2 = 0,
            v3 = 0,
            v4 = 0;
        var vn1 = 0,
            vn2 = 0,
            vn3 = 0,
            vn4 = 0;
        var vt1 = 0,
            vt2 = 0,
            vt3 = 0,
            vt4 = 0;
        var matchArray = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
        if (matchArray !== null) {
          v1 = matchArray[2];
          vn1 = matchArray[3];
          v2 = matchArray[4];
          vn2 = matchArray[5];
          v3 = matchArray[6];
          vn3 = matchArray[7];
          v4 = matchArray[8];
          vn4 = matchArray[9];
          positions[fCount * 3] = pvCoord[v1 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];

          positions[fCount * 3 + 3] = pvCoord[v3 - 1];
          normals[fCount * 3 + 3] = pvNormal[vn3 - 1];
          positions[fCount * 3 + 4] = pvCoord[v4 - 1];
          normals[fCount * 3 + 4] = pvNormal[vn4 - 1];
          positions[fCount * 3 + 5] = pvCoord[v1 - 1];
          normals[fCount * 3 + 5] = pvNormal[vn1 - 1];
        } else {
          var _matchArray9 = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
          v1 = _matchArray9[2];
          vt1 = _matchArray9[3];
          vn1 = _matchArray9[4];
          v2 = _matchArray9[5];
          vt2 = _matchArray9[6];
          vn2 = _matchArray9[7];
          v3 = _matchArray9[8];
          vt3 = _matchArray9[9];
          vn3 = _matchArray9[10];
          v4 = _matchArray9[11];
          vt4 = _matchArray9[12];
          vn4 = _matchArray9[13];

          positions[fCount * 3] = pvCoord[v1 - 1];
          normals[fCount * 3] = pvNormal[vn1 - 1];
          texcoords[fCount * 3] = pvTexture[vt1 - 1];
          positions[fCount * 3 + 1] = pvCoord[v2 - 1];
          normals[fCount * 3 + 1] = pvNormal[vn2 - 1];
          texcoords[fCount * 3 + 1] = pvTexture[vt2 - 1];
          positions[fCount * 3 + 2] = pvCoord[v3 - 1];
          normals[fCount * 3 + 2] = pvNormal[vn3 - 1];
          texcoords[fCount * 3 + 2] = pvTexture[vt3 - 1];

          positions[fCount * 3 + 3] = pvCoord[v3 - 1];
          normals[fCount * 3 + 3] = pvNormal[vn3 - 1];
          texcoords[fCount * 3 + 3] = pvTexture[vt3 - 1];
          positions[fCount * 3 + 4] = pvCoord[v4 - 1];
          normals[fCount * 3 + 4] = pvNormal[vn4 - 1];
          texcoords[fCount * 3 + 4] = pvTexture[vt4 - 1];
          positions[fCount * 3 + 5] = pvCoord[v1 - 1];
          normals[fCount * 3 + 5] = pvNormal[vn1 - 1];
          texcoords[fCount * 3 + 5] = pvTexture[vt1 - 1];
        }
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton]) {
          this[singleton] = new ObjLoader(singletonEnforcer);
        }
        return this[singleton];
      }
    }]);
    return ObjLoader;
  }();

  GLBoost$1["ObjLoader"] = ObjLoader;

  GLBoost$1['VALUE_TARGET_WEBGL_VERSION'] = 1;
  GLBoost$1['VALUE_DEFAULT_POINTLIGHT_INTENSITY'] = new Vector3(1, 1, 1);
  GLBoost$1['VALUE_ANGLE_UNIT'] = GLBoost$1.DEGREE;
  GLBoost$1['VALUE_WEBGL_ONE_USE_EXTENSIONS'] = true;
  GLBoost$1['VALUE_CONSOLE_OUT_FOR_DEBUGGING'] = false;
  GLBoost$1['VALUE_LOG_SHADER_CODE'] = true;
  GLBoost$1['VALUE_LOG_GLBOOST_OBJECT_LIFECYCLE'] = true;
  GLBoost$1['VALUE_LOG_GL_RESOURCE_LIFECYCLE'] = true;

  var singleton$1 = Symbol();
  var singletonEnforcer$1 = Symbol();

  /**
   * [en] This is a loader class of glTF file format. You can see more detail of glTF format at https://github.com/KhronosGroup/glTF .<br>
   * [ja] glTFファイルを読み込むためのローダークラスです。glTFファイルフォーマットについての詳細は https://github.com/KhronosGroup/glTF をご覧ください。
   */

  var GLTFLoader = function () {

    /**
     * [en] The constructor of GLTFLoader class. But you cannot use this constructor directly because of this class is a singleton class. Use getInstance() static method.<br>
     * [ja] GLTFLoaderクラスのコンストラクタです。しかし本クラスはシングルトンであるため、このコンストラクタは直接呼び出せません。getInstance()静的メソッドを使ってください。
     * @param {Symbol} enforcer [en] a Symbol to forbid calling this constructor directly [ja] このコンストラクタの直接呼び出しを禁止するためのシンボル
     */
    function GLTFLoader(enforcer) {
      babelHelpers.classCallCheck(this, GLTFLoader);

      if (enforcer !== singletonEnforcer$1) {
        throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");
      }
    }

    /**
     * [en] The static method to get singleton instance of this class.<br>
     * [ja] このクラスのシングルトンインスタンスを取得するための静的メソッド。
     * @return {GLTFLoader} [en] the singleton instance of GLTFLoader class [ja] GLTFLoaderクラスのシングルトンインスタンス
     */


    babelHelpers.createClass(GLTFLoader, [{
      key: 'loadGLTF',


      /**
       * [en] the method to load glTF file.<br>
       * [ja] glTF fileをロードするためのメソッド。
       * @param {string} url [en] url of glTF file [ja] glTFファイルのurl
       * @param {Shader} defaultShader [en] a shader to assign to loaded geometries [ja] 読み込んだジオメトリに適用するシェーダー
       * @return {Promise} [en] a promise object [ja] Promiseオブジェクト
       */
      value: function loadGLTF(glBoostContext, url) {
        var _this = this;

        var defaultShader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        return DataUtil.loadResourceAsync(url, true, function (resolve, response) {
          var arrayBuffer = response;

          var dataView = new DataView(arrayBuffer, 0, 20);
          var isLittleEndian = true;

          // Magic field
          var magicStr = '';
          magicStr += String.fromCharCode(dataView.getUint8(0, isLittleEndian));
          magicStr += String.fromCharCode(dataView.getUint8(1, isLittleEndian));
          magicStr += String.fromCharCode(dataView.getUint8(2, isLittleEndian));
          magicStr += String.fromCharCode(dataView.getUint8(3, isLittleEndian));

          if (magicStr !== 'glTF') {
            // It must be normal glTF (NOT binary) file...
            var _gotText = DataUtil.arrayBufferToString(arrayBuffer);
            var partsOfPath = url.split('/');
            var basePath = '';
            for (var i = 0; i < partsOfPath.length - 1; i++) {
              basePath += partsOfPath[i] + '/';
            }
            var _json = JSON.parse(_gotText);

            var _glTFVer = _this._checkGLTFVersion(_json);

            _this._loadResourcesAndScene(glBoostContext, null, basePath, _json, defaultShader, _glTFVer, resolve);

            return;
          }

          var gltfVer = dataView.getUint32(4, isLittleEndian);
          if (gltfVer !== 1) {
            reject('invalid version field in this binary glTF file.');
          }

          var lengthOfThisFile = dataView.getUint32(8, isLittleEndian);
          var lengthOfContent = dataView.getUint32(12, isLittleEndian);
          var contentFormat = dataView.getUint32(16, isLittleEndian);

          if (contentFormat !== 0) {
            // 0 means JSON format
            reject('invalid contentFormat field in this binary glTF file.');
          }

          var arrayBufferContent = arrayBuffer.slice(20, lengthOfContent + 20);
          var gotText = DataUtil.arrayBufferToString(arrayBufferContent);
          var json = JSON.parse(gotText);
          var arrayBufferBinary = arrayBuffer.slice(20 + lengthOfContent);

          var glTFVer = _this._checkGLTFVersion(json);

          _this._loadResourcesAndScene(glBoostContext, arrayBufferBinary, null, json, defaultShader, glTFVer, resolve);
        }, function (reject, error) {});
      }
    }, {
      key: '_checkGLTFVersion',
      value: function _checkGLTFVersion(json) {
        var glTFVer = 1.0;
        if (json.asset) {
          glTFVer = parseFloat(json.asset.version);
        }
        return glTFVer;
      }
    }, {
      key: '_loadResourcesAndScene',
      value: function _loadResourcesAndScene(glBoostContext, arrayBufferBinary, basePath, json, defaultShader, glTFVer, resolve) {
        var _this2 = this;

        var shadersJson = json.shaders;
        var shaders = {};
        var buffers = {};
        var textures = {};
        var promisesToLoadResources = [];

        // Shaders Async load

        var _loop = function _loop(shaderName) {
          shaders[shaderName] = {};

          var shaderJson = shadersJson[shaderName];
          var shaderType = shaderJson.type;
          if (typeof shaderJson.extensions !== 'undefined' && typeof shaderJson.extensions.KHR_binary_glTF !== 'undefined') {
            shaders[shaderName].shaderText = _this2._accessBinaryAsShader(shaderJson.extensions.KHR_binary_glTF.bufferView, json, arrayBufferBinary);
            shaders[shaderName].shaderType = shaderType;
            return 'continue';
          }

          var shaderUri = shaderJson.uri;
          if (shaderUri.match(/^data:/)) {
            promisesToLoadResources.push(new Promise(function (fulfilled, rejected) {
              var arrayBuffer = DataUtil.base64ToArrayBuffer(shaderUri);
              shaders[shaderName].shaderText = DataUtil.arrayBufferToString(arrayBuffer);
              shaders[shaderName].shaderType = shaderType;
              fulfilled();
            }));
          } else {
            shaderUri = basePath + shaderUri;
            promisesToLoadResources.push(DataUtil.loadResourceAsync(shaderUri, false, function (resolve, response) {
              shaders[shaderName].shaderText = response;
              shaders[shaderName].shaderType = shaderType;
              resolve();
            }, function (reject, error) {}));
          }
        };

        for (var shaderName in shadersJson) {
          var _ret = _loop(shaderName);

          if (_ret === 'continue') continue;
        }

        // Buffers Async load

        var _loop2 = function _loop2(bufferName) {
          var bufferInfo = json.buffers[bufferName];

          if (bufferInfo.uri.match(/^data:application\/octet-stream;base64,/)) {
            promisesToLoadResources.push(new Promise(function (fulfilled, rejected) {
              var arrayBuffer = DataUtil.base64ToArrayBuffer(bufferInfo.uri);
              buffers[bufferName] = arrayBuffer;
              fulfilled();
            }));
          } else if (bufferInfo.uri === 'data:,') {
            buffers[bufferName] = arrayBufferBinary;
          } else {
            promisesToLoadResources.push(DataUtil.loadResourceAsync(basePath + bufferInfo.uri, true, function (resolve, response) {
              buffers[bufferName] = response;
              resolve();
            }, function (reject, error) {}));
          }
        };

        for (var bufferName in json.buffers) {
          _loop2(bufferName);
        }

        // Textures Async load
        for (var textureName in json.textures) {
          var textureJson = json.textures[textureName];
          var imageJson = json.images[textureJson.source];
          var samplerJson = json.samplers[textureJson.sampler];

          var textureUri = null;

          if (typeof imageJson.extensions !== 'undefined' && typeof imageJson.extensions.KHR_binary_glTF !== 'undefined') {
            textureUri = this._accessBinaryAsImage(imageJson.extensions.KHR_binary_glTF.bufferView, json, arrayBufferBinary, imageJson.extensions.KHR_binary_glTF.mimeType);
          } else {
            var imageFileStr = imageJson.uri;
            if (imageFileStr.match(/^data:/)) {
              textureUri = imageFileStr;
            } else {
              textureUri = basePath + imageFileStr;
            }
          }

          var texture = glBoostContext.createTexture(null, textureName, {
            'TEXTURE_MAG_FILTER': samplerJson.magFilter,
            'TEXTURE_MIN_FILTER': samplerJson.minFilter,
            'TEXTURE_WRAP_S': samplerJson.wrapS,
            'TEXTURE_WRAP_T': samplerJson.wrapT
          });
          var promise = texture.generateTextureFromUri(textureUri, false);
          textures[textureName] = texture;
          promisesToLoadResources.push(promise);
        }

        if (promisesToLoadResources.length > 0) {
          Promise.resolve().then(function () {
            return Promise.all(promisesToLoadResources);
          }).then(function () {
            _this2._IterateNodeOfScene(glBoostContext, buffers, basePath, json, defaultShader, shaders, textures, glTFVer, resolve);
          });
        } else {
          this._IterateNodeOfScene(glBoostContext, buffers, basePath, json, defaultShader, shaders, textures, glTFVer, resolve);
        }
      }
    }, {
      key: '_IterateNodeOfScene',
      value: function _IterateNodeOfScene(glBoostContext, buffers, basePath, json, defaultShader, shaders, textures, glTFVer, resolve) {
        var _this3 = this;

        var rootGroup = glBoostContext.createGroup();

        var _loop3 = function _loop3(sceneStr) {
          var sceneJson = json.scenes[sceneStr];
          var group = glBoostContext.createGroup();
          group.userFlavorName = 'TopGroup';
          var nodeStr = null;
          for (var i = 0; i < sceneJson.nodes.length; i++) {
            nodeStr = sceneJson.nodes[i];

            // iterate nodes and load meshes
            var element = _this3._recursiveIterateNode(glBoostContext, nodeStr, buffers, basePath, json, defaultShader, shaders, textures, glTFVer);
            group.addChild(element);
          }

          // register joints hierarchy to skeletal mesh
          var skeletalMeshes = group.searchElementsByType(M_SkeletalMesh);
          skeletalMeshes.forEach(function (skeletalMesh) {
            var rootJointGroup = group.searchElement(skeletalMesh.rootJointName);
            if (!rootJointGroup) {
              // This is a countermeasure when skeleton node does not exist in scene.nodes.
              rootJointGroup = _this3._recursiveIterateNode(glBoostContext, skeletalMesh.rootJointName, buffers, basePath, json, defaultShader, shaders, textures, glTFVer);
              group.addChild(rootJointGroup);
            }

            rootJointGroup._isRootJointGroup = true;
            skeletalMesh.jointsHierarchy = rootJointGroup;
          });

          // Animation
          _this3._loadAnimation(group, buffers, json, glTFVer);

          rootGroup.addChild(group);
        };

        for (var sceneStr in json.scenes) {
          _loop3(sceneStr);
        }

        resolve(rootGroup);
      }
    }, {
      key: '_recursiveIterateNode',
      value: function _recursiveIterateNode(glBoostContext, nodeStr, buffers, basePath, json, defaultShader, shaders, textures, glTFVer) {
        var nodeJson = json.nodes[nodeStr];
        var group = glBoostContext.createGroup();
        group.userFlavorName = nodeStr;

        if (nodeJson.translation) {
          group.translate = new Vector3(nodeJson.translation[0], nodeJson.translation[1], nodeJson.translation[2]);
        }
        if (nodeJson.scale) {
          group.scale = new Vector3(nodeJson.scale[0], nodeJson.scale[1], nodeJson.scale[2]);
        }
        if (nodeJson.rotation) {
          group.quaternion = new Quaternion(nodeJson.rotation[0], nodeJson.rotation[1], nodeJson.rotation[2], nodeJson.rotation[3]);
        }
        if (nodeJson.matrix) {
          group.multiplyMatrix(new Matrix44$1(nodeJson.matrix, true));
        }

        if (nodeJson.meshes) {
          for (var i = 0; i < nodeJson.meshes.length; i++) {
            // this node has mashes...
            var meshStr = nodeJson.meshes[i];
            var meshJson = json.meshes[meshStr];

            var rootJointStr = null;
            var skinStr = null;
            if (nodeJson.skeletons) {
              rootJointStr = nodeJson.skeletons[0];
              skinStr = nodeJson.skin;
            }
            var mesh = this._loadMesh(glBoostContext, meshJson, buffers, basePath, json, defaultShader, rootJointStr, skinStr, shaders, textures, glTFVer);
            mesh.userFlavorName = meshStr;
            group.addChild(mesh);
          }
        } else if (nodeJson.jointName) {
          var joint = glBoostContext.createJoint();
          joint.userFlavorName = nodeJson.jointName;
          group.addChild(joint);
        } else if (nodeJson.camera) {
          var cameraStr = nodeJson.camera;
          var cameraJson = json.cameras[cameraStr];
          var camera = null;
          if (cameraJson.type === 'perspective') {
            var perspective = cameraJson.perspective;
            camera = glBoostContext.createPerspectiveCamera({
              eye: new Vector3(0.0, 0.0, 0),
              center: new Vector3(0.0, 0.0, -1.0),
              up: new Vector3(0.0, 1.0, 0.0)
            }, {
              fovy: perspective.yfov,
              aspect: perspective.aspectRatio,
              zNear: perspective.znear,
              zFar: perspective.zfar
            });
          } else if (cameraJson.type === 'orthographic') {
            var orthographic = cameraJson.orthographic;
            camera = glBoostContext.createOrthoCamera({
              eye: new Vector3(0.0, 0.0, 0),
              center: new Vector3(0.0, 0.0, -1.0),
              up: new Vector3(0.0, 1.0, 0.0)
            }, {
              xmag: orthographic.xmag,
              ymag: orthographic.ymag,
              zNear: orthographic.znear,
              zFar: orthographic.zfar
            });
          }
          camera.userFlavorName = cameraStr;
          group.addChild(camera);
        }

        if (nodeJson.children) {
          for (var _i = 0; _i < nodeJson.children.length; _i++) {
            var _nodeStr = nodeJson.children[_i];
            var childElement = this._recursiveIterateNode(glBoostContext, _nodeStr, buffers, basePath, json, defaultShader, shaders, textures, glTFVer);
            group.addChild(childElement);
          }
        }

        return group;
      }
    }, {
      key: '_loadMesh',
      value: function _loadMesh(glBoostContext, meshJson, buffers, basePath, json, defaultShader, rootJointStr, skinStr, shaders, textures, glTFVer) {
        var mesh = null;
        var geometry = null;
        if (rootJointStr) {
          geometry = glBoostContext.createSkeletalGeometry();
          mesh = glBoostContext.createSkeletalMesh(geometry, null, rootJointStr);
          var skin = json.skins[skinStr];

          mesh.bindShapeMatrix = new Matrix44$1(skin.bindShapeMatrix, true);
          mesh.jointNames = skin.jointNames;

          var inverseBindMatricesAccessorStr = skin.inverseBindMatrices;
          mesh.inverseBindMatrices = this._accessBinary(inverseBindMatricesAccessorStr, json, buffers);
        } else {
          geometry = glBoostContext.createGeometry();
          mesh = glBoostContext.createMesh(geometry);
        }

        var _indicesArray = [];
        var _positions = [];
        var _normals = [];
        var vertexData = {
          position: _positions,
          normal: _normals,
          components: {},
          componentBytes: {},
          componentType: {}
        };
        var additional = {
          'joint': [],
          'weight': [],
          'texcoord': []
        };

        var dataViewMethodDic = {};

        var materials = [];
        var indicesAccumulatedLength = 0;
        for (var i = 0; i < meshJson.primitives.length; i++) {
          var primitiveJson = meshJson.primitives[i];

          // Geometry
          var positionsAccessorStr = primitiveJson.attributes.POSITION;
          var positions = this._accessBinary(positionsAccessorStr, json, buffers, false, true);
          _positions[i] = positions;
          vertexData.components.position = this._checkComponentNumber(positionsAccessorStr, json);
          vertexData.componentBytes.position = this._checkBytesPerComponent(positionsAccessorStr, json);
          vertexData.componentType.position = this._getDataType(positionsAccessorStr, json);
          dataViewMethodDic.position = this._checkDataViewMethod(positionsAccessorStr, json);

          var indices = null;
          if (typeof primitiveJson.indices !== 'undefined') {
            var indicesAccessorStr = primitiveJson.indices;
            indices = this._accessBinary(indicesAccessorStr, json, buffers);
            for (var j = 0; j < indices.length; j++) {
              indices[j] = indicesAccumulatedLength + indices[j];
            }
            _indicesArray[i] = indices;
            indicesAccumulatedLength += _positions[i].length / vertexData.components.position;
          }

          var normalsAccessorStr = primitiveJson.attributes.NORMAL;
          if (normalsAccessorStr) {
            var normals = this._accessBinary(normalsAccessorStr, json, buffers, false, true);
            //Array.prototype.push.apply(_normals, normals);
            _normals[i] = normals;
            vertexData.components.normal = this._checkComponentNumber(normalsAccessorStr, json);
            vertexData.componentBytes.normal = this._checkBytesPerComponent(normalsAccessorStr, json);
            vertexData.componentType.normal = this._getDataType(normalsAccessorStr, json);
            dataViewMethodDic.normal = this._checkDataViewMethod(normalsAccessorStr, json);
          }

          /// if Skeletal
          var jointAccessorStr = primitiveJson.attributes.JOINT;
          if (jointAccessorStr) {
            var joints = this._accessBinary(jointAccessorStr, json, buffers, false, true);
            additional['joint'][i] = joints;
            vertexData.components.joint = this._checkComponentNumber(jointAccessorStr, json);
            vertexData.componentBytes.joint = this._checkBytesPerComponent(jointAccessorStr, json);
            vertexData.componentType.joint = this._getDataType(jointAccessorStr, json);
            dataViewMethodDic.joint = this._checkDataViewMethod(jointAccessorStr, json);
          }
          var weightAccessorStr = primitiveJson.attributes.WEIGHT;
          if (weightAccessorStr) {
            var weights = this._accessBinary(weightAccessorStr, json, buffers, false, true);
            additional['weight'][i] = weights;
            vertexData.components.weight = this._checkComponentNumber(weightAccessorStr, json);
            vertexData.componentBytes.weight = this._checkBytesPerComponent(weightAccessorStr, json);
            vertexData.componentType.weight = this._getDataType(weightAccessorStr, json);
            dataViewMethodDic.weight = this._checkDataViewMethod(weightAccessorStr, json);
          }

          // Material
          if (primitiveJson.material) {
            var texcoords = null;
            var texcoords0AccessorStr = primitiveJson.attributes.TEXCOORD_0;

            var materialStr = primitiveJson.material;

            var material = glBoostContext.createClassicMaterial();

            texcoords = this._loadMaterial(glBoostContext, basePath, buffers, json, vertexData, indices, material, materialStr, positions, dataViewMethodDic, additional, texcoords, texcoords0AccessorStr, geometry, defaultShader, shaders, textures, i, glTFVer);

            materials.push(material);
          } else {
            var _material = glBoostContext.createClassicMaterial();
            _material.baseColor = new Vector4(0.5, 0.5, 0.5, 1);
            materials.push(_material);
          }
        }

        if (meshJson.primitives.length > 1) {
          var getTypedArray = function getTypedArray(dataViewMethod, length) {
            var vertexAttributeArray = null;
            if (dataViewMethod === 'getInt8') {
              vertexAttributeArray = new Int8Array(length);
            } else if (dataViewMethod === 'getUint8') {
              vertexAttributeArray = new Uint8Array(length);
            } else if (dataViewMethod === 'getInt16') {
              vertexAttributeArray = new Int16Array(length);
            } else if (dataViewMethod === 'getUint16') {
              vertexAttributeArray = new Uint16Array(length);
            } else if (dataViewMethod === 'getInt32') {
              vertexAttributeArray = new Int32Array(length);
            } else if (dataViewMethod === 'getUint32') {
              vertexAttributeArray = new Uint32Array(length);
            } else if (dataViewMethod === 'getFloat32') {
              vertexAttributeArray = new Float32Array(length);
            }

            return vertexAttributeArray;
          };

          var lengthDic = { index: 0, position: 0, normal: 0, joint: 0, weight: 0, texcoord: 0 };
          for (var _i2 = 0; _i2 < meshJson.primitives.length; _i2++) {
            //lengthDic.index += _indicesArray[i].length;
            lengthDic.position += _positions[_i2].length;
            lengthDic.normal += _normals[_i2].length;
            if (typeof additional['joint'][_i2] !== 'undefined') {
              lengthDic.joint += additional['joint'][_i2].length;
            }
            if (typeof additional['weight'][_i2] !== 'undefined') {
              lengthDic.weight += additional['weight'][_i2].length;
            }
            if (typeof additional['texcoord'][_i2] !== 'undefined') {
              lengthDic.texcoord += additional['texcoord'][_i2].length;
            }
          }

          for (var attribName in dataViewMethodDic) {
            var newTypedArray = getTypedArray(dataViewMethodDic[attribName], lengthDic[attribName]);
            var offset = 0;
            for (var _i3 = 0; _i3 < meshJson.primitives.length; _i3++) {

              var array = null;

              if (attribName === 'position') {
                array = _positions[_i3];
              } else if (attribName === 'normal') {
                array = _normals[_i3];
              } else if (attribName === 'joint') {
                array = additional['joint'][_i3];
              } else if (attribName === 'weight') {
                array = additional['weight'][_i3];
              } else if (attribName === 'texcoord') {
                array = additional['texcoord'][_i3];
              }

              newTypedArray.set(array, offset);
              offset += array.length;
            }

            if (attribName === 'position') {
              vertexData.position = newTypedArray;
            } else if (attribName === 'normal') {
              vertexData.normal = newTypedArray;
            } else if (attribName === 'joint') {
              additional['joint'] = newTypedArray;
            } else if (attribName === 'weight') {
              additional['weight'] = newTypedArray;
            } else if (attribName === 'texcoord') {
              additional['texcoord'] = newTypedArray;
            }
          }
        } else {
          vertexData.position = _positions[0];
          vertexData.normal = _normals[0];
          additional['joint'] = additional['joint'][0];
          additional['weight'] = additional['weight'][0];
          additional['texcoord'] = additional['texcoord'][0];
        }

        if (typeof vertexData.normal === 'undefined' || vertexData.normal.length === 0) {
          delete vertexData.normal;
        }
        if (typeof additional['joint'] === 'undefined' || additional['joint'].length === 0) {
          delete additional['joint'];
        }
        if (typeof additional['weight'] === 'undefined' || additional['weight'].length === 0) {
          delete additional['weight'];
        }
        if (typeof additional['texcoord'] === 'undefined' || additional['texcoord'].length === 0) {
          delete additional['texcoord'];
        }

        if (_indicesArray.length === 0) {
          _indicesArray = null;
        }

        geometry.setVerticesData(ArrayUtil.merge(vertexData, additional), _indicesArray);
        geometry.materials = materials;

        return mesh;
      }
    }, {
      key: '_loadMaterial',
      value: function _loadMaterial(glBoostContext, basePath, buffers, json, vertexData, indices, material, materialStr, positions, dataViewMethodDic, additional, texcoords, texcoords0AccessorStr, geometry, defaultShader, shaders, textures, idx, glTFVer) {
        var materialJson = json.materials[materialStr];

        if (typeof materialJson.extensions !== 'undefined' && typeof materialJson.extensions.KHR_materials_common !== 'undefined') {
          materialJson = materialJson.extensions.KHR_materials_common;
        }

        // Diffuse Texture
        if (texcoords0AccessorStr) {
          texcoords = this._accessBinary(texcoords0AccessorStr, json, buffers, false, true);
          additional['texcoord'][idx] = texcoords;
          vertexData.components.texcoord = this._checkComponentNumber(texcoords0AccessorStr, json);
          vertexData.componentBytes.texcoord = this._checkBytesPerComponent(texcoords0AccessorStr, json);
          vertexData.componentType.texcoord = this._getDataType(texcoords0AccessorStr, json);
          dataViewMethodDic.texcoord = this._checkDataViewMethod(texcoords0AccessorStr, json);

          var setTextures = function setTextures(values, isParameter) {
            for (var valueName in values) {
              var value = null;
              if (isParameter) {
                value = values[valueName].value;
                if (typeof value === 'undefined') {
                  continue;
                }
              } else {
                value = values[valueName];
              }
              if (glTFVer >= 1.1) {
                value = value[0];
              }
              if (typeof value === 'string') {
                var textureStr = value;
                material.setTexture(textures[textureStr]);
              }
            }
          };
          setTextures(materialJson.values, false);
          if (materialJson.technique) {
            setTextures(json.techniques[materialJson.technique].parameters, true);
          }
        } else {
          if (typeof vertexData.components.texcoord !== 'undefined') {
            // If texture coordinates existed even once in the previous loop
            var emptyTexcoords = [];
            var componentN = vertexData.components.position;
            var length = positions.length / componentN;
            for (var k = 0; k < length; k++) {
              emptyTexcoords.push(0);
              emptyTexcoords.push(0);
            }
            additional['texcoord'][idx] = new Float32Array(emptyTexcoords);
            vertexData.components.texcoord = 2;
            vertexData.componentBytes.texcoord = 4;
            dataViewMethodDic.texcoord = 'getFloat32';
          }
        }

        for (var valueName in materialJson.values) {
          var value = materialJson.values[valueName];
          if (typeof value !== 'string') {
            material[valueName + 'Color'] = new Vector4(value[0], value[1], value[2], value[3]);
          }
        }

        if (indices !== null) {
          material.setVertexN(geometry, indices.length);
        }

        var techniqueStr = materialJson.technique;
        if (defaultShader) {
          material.shaderClass = defaultShader;
        } else {
          if (typeof json.techniques !== 'undefined') {
            this._loadTechnique(glBoostContext, json, techniqueStr, material, materialJson, shaders, glTFVer);
          } else {
            material.shaderClass = DecalShader;
          }
        }

        return texcoords;
      }
    }, {
      key: '_loadTechnique',
      value: function _loadTechnique(glBoostContext, json, techniqueStr, material, materialJson, shaders, glTFVer) {
        var techniqueJson = json.techniques[techniqueStr];

        var programStr = techniqueJson.program;
        var uniformsJson = techniqueJson.uniforms;
        var parametersJson = techniqueJson.parameters;
        var attributesJson = techniqueJson.attributes;
        var attributes = {};
        for (var attributeName in attributesJson) {
          //attributes[attributesJson[attributeName]] = attributeName;
          var parameterName = attributesJson[attributeName];
          var parameterJson = parametersJson[parameterName];
          attributes[attributeName] = parameterJson.semantic;
        }

        var uniforms = {};
        var textureNames = {};
        for (var uniformName in uniformsJson) {
          var _parameterName = uniformsJson[uniformName];
          var _parameterJson = parametersJson[_parameterName];
          if (typeof _parameterJson.semantic !== 'undefined') {
            uniforms[uniformName] = _parameterJson.semantic;
          } else {
            var value = null;
            if (typeof materialJson.values !== 'undefined' && typeof materialJson.values[_parameterName] !== 'undefined') {
              value = materialJson.values[_parameterName];
            } else {
              value = _parameterJson.value;
            }

            switch (_parameterJson.type) {
              case 5126:
                uniforms[uniformName] = glTFVer < 1.1 ? value : value[0];
                break;
              case 35664:
                uniforms[uniformName] = new Vector2(value[0], value[1]);
                break;
              case 35665:
                uniforms[uniformName] = new Vector3(value[0], value[1], value[2]);
                break;
              case 35666:
                uniforms[uniformName] = new Vector4(value[0], value[1], value[2], value[3]);
                break;
              case 5124:
                uniforms[uniformName] = glTFVer < 1.1 ? value : value[0];
                break;
              case 35667:
                uniforms[uniformName] = new Vector2(value[0], value[1]);
                break;
              case 35668:
                uniforms[uniformName] = new Vector3(value[0], value[1], value[2]);
                break;
              case 35669:
                uniforms[uniformName] = new Vector4(value[0], value[1], value[2], value[3]);
                break;
              case 35678:
                uniforms[uniformName] = 'TEXTURE';
                textureNames[uniformName] = glTFVer < 1.1 ? value : value[0];
                break;
            }
          }
        }

        if (techniqueJson.states) {
          if (techniqueJson.states.functions) {
            for (var functionName in techniqueJson.states.functions) {
              if (!Array.isArray(techniqueJson.states.functions[functionName])) {
                techniqueJson.states.functions[functionName] = [techniqueJson.states.functions[functionName]];
              }
            }
          }

          material.states = techniqueJson.states;
        }

        this._loadProgram(glBoostContext, json, programStr, material, shaders, attributes, uniforms, textureNames);
      }
    }, {
      key: '_loadProgram',
      value: function _loadProgram(glBoostContext, json, programStr, material, shaders, attributes, uniforms, textureNames) {
        var programJson = json.programs[programStr];
        var fragmentShaderStr = programJson.fragmentShader;
        var vertexShaderStr = programJson.vertexShader;
        var fragmentShaderText = shaders[fragmentShaderStr].shaderText;
        var vertexShaderText = shaders[vertexShaderStr].shaderText;

        material.shaderInstance = new FreeShader(glBoostContext, vertexShaderText, fragmentShaderText, attributes, uniforms, textureNames);
      }
    }, {
      key: '_loadAnimation',
      value: function _loadAnimation(element, buffers, json, glTFVer) {
        var animationJson = null;
        for (var anim in json.animations) {
          animationJson = json.animations[anim];
          if (animationJson) {
            for (var i = 0; i < animationJson.channels.length; i++) {
              var channelJson = animationJson.channels[i];
              if (!channelJson) {
                continue;
              }

              var targetMeshStr = channelJson.target.id;
              var targetPathStr = channelJson.target.path;
              var samplerStr = channelJson.sampler;
              var samplerJson = animationJson.samplers[samplerStr];

              var animInputAccessorStr = null;
              var animOutputAccessorStr = null;
              if (glTFVer < 1.1) {
                var animInputStr = samplerJson.input;
                var animOutputStr = samplerJson.output;
                animInputAccessorStr = animationJson.parameters[animInputStr];
                animOutputAccessorStr = animationJson.parameters[animOutputStr];
              } else {
                animInputAccessorStr = samplerJson.input;
                animOutputAccessorStr = samplerJson.output;
              }

              var animInputArray = this._accessBinary(animInputAccessorStr, json, buffers);
              var animOutputArray = null;
              if (targetPathStr === 'translation') {
                animOutputArray = this._accessBinary(animOutputAccessorStr, json, buffers);
              } else if (targetPathStr === 'rotation') {
                animOutputArray = this._accessBinary(animOutputAccessorStr, json, buffers, true);
              } else {
                animOutputArray = this._accessBinary(animOutputAccessorStr, json, buffers);
              }

              var animationAttributeName = '';
              if (targetPathStr === 'translation') {
                animationAttributeName = 'translate';
              } else if (targetPathStr === 'rotation') {
                animationAttributeName = 'quaternion';
              } else {
                animationAttributeName = targetPathStr;
              }

              var hitElement = element.searchElement(targetMeshStr);
              if (hitElement) {
                hitElement.setAnimationAtLine('time', animationAttributeName, animInputArray, animOutputArray);
                hitElement.setActiveAnimationLine('time');
                hitElement.currentCalcMode = 'quaternion';
              }
            }
          }
        }
      }
    }, {
      key: '_accessBinaryAsShader',
      value: function _accessBinaryAsShader(bufferViewStr, json, arrayBuffer) {
        var bufferViewJson = json.bufferViews[bufferViewStr];
        var byteOffset = bufferViewJson.byteOffset;
        var byteLength = bufferViewJson.byteLength;

        var arrayBufferSliced = arrayBuffer.slice(byteOffset, byteOffset + byteLength);

        return DataUtil.arrayBufferToString(arrayBufferSliced);
      }
    }, {
      key: '_accessBinaryAsImage',
      value: function _accessBinaryAsImage(bufferViewStr, json, arrayBuffer, mimeType) {
        var bufferViewJson = json.bufferViews[bufferViewStr];
        var byteOffset = bufferViewJson.byteOffset;
        var byteLength = bufferViewJson.byteLength;

        var arrayBufferSliced = arrayBuffer.slice(byteOffset, byteOffset + byteLength);
        var bytes = new Uint8Array(arrayBufferSliced);
        var binaryData = '';
        for (var i = 0, len = bytes.byteLength; i < len; i++) {
          binaryData += String.fromCharCode(bytes[i]);
        }
        var imgSrc = '';
        if (mimeType == 'image/jpeg') {
          imgSrc = "data:image/jpeg;base64,";
        } else if (mimeType == 'image/png') {
          imgSrc = "data:image/png;base64,";
        } else if (mimeType == 'image/gif') {
          imgSrc = "data:image/gif;base64,";
        } else if (mimeType == 'image/bmp') {
          imgSrc = "data:image/bmp;base64,";
        } else {
          imgSrc = "data:image/unknown;base64,";
        }
        var dataUrl = imgSrc + DataUtil.btoa(binaryData);

        return dataUrl;
      }
    }, {
      key: '_checkComponentNumber',
      value: function _checkComponentNumber(accessorStr, json) {
        var accessorJson = json.accessors[accessorStr];

        var componentN = 0;
        switch (accessorJson.type) {
          case 'SCALAR':
            componentN = 1;
            break;
          case 'VEC2':
            componentN = 2;
            break;
          case 'VEC3':
            componentN = 3;
            break;
          case 'VEC4':
            componentN = 4;
            break;
          case 'MAT4':
            componentN = 16;
            break;
        }

        return componentN;
      }
    }, {
      key: '_checkBytesPerComponent',
      value: function _checkBytesPerComponent(accessorStr, json) {
        var accessorJson = json.accessors[accessorStr];

        var bytesPerComponent = 0;
        switch (accessorJson.componentType) {
          case 5120:
            // gl.BYTE
            bytesPerComponent = 1;
            break;
          case 5121:
            // gl.UNSIGNED_BYTE
            bytesPerComponent = 1;
            break;
          case 5122:
            // gl.SHORT
            bytesPerComponent = 2;
            break;
          case 5123:
            // gl.UNSIGNED_SHORT
            bytesPerComponent = 2;
            break;
          case 5124:
            // gl.INT
            bytesPerComponent = 4;
            break;
          case 5125:
            // gl.UNSIGNED_INT
            bytesPerComponent = 4;
            break;
          case 5126:
            // gl.FLOAT
            bytesPerComponent = 4;
            break;
          default:
            break;
        }
        return bytesPerComponent;
      }
    }, {
      key: '_checkDataViewMethod',
      value: function _checkDataViewMethod(accessorStr, json) {
        var accessorJson = json.accessors[accessorStr];
        var dataViewMethod = '';
        switch (accessorJson.componentType) {
          case 5120:
            // gl.BYTE
            dataViewMethod = 'getInt8';
            break;
          case 5121:
            // gl.UNSIGNED_BYTE
            dataViewMethod = 'getUint8';
            break;
          case 5122:
            // gl.SHORT
            dataViewMethod = 'getInt16';
            break;
          case 5123:
            // gl.UNSIGNED_SHORT
            dataViewMethod = 'getUint16';
            break;
          case 5124:
            // gl.INT
            dataViewMethod = 'getInt32';
            break;
          case 5125:
            // gl.UNSIGNED_INT
            dataViewMethod = 'getUint32';
            break;
          case 5126:
            // gl.FLOAT
            dataViewMethod = 'getFloat32';
            break;
          default:
            break;
        }
        return dataViewMethod;
      }
    }, {
      key: '_getDataType',
      value: function _getDataType(accessorStr, json) {
        var accessorJson = json.accessors[accessorStr];
        return accessorJson.componentType;
      }
    }, {
      key: '_adjustByteAlign',
      value: function _adjustByteAlign(typedArrayClass, arrayBuffer, alignSize, byteOffset, length) {
        if (byteOffset % alignSize != 0) {
          return new typedArrayClass(arrayBuffer.slice(byteOffset), 0, length);
        } else {
          return new typedArrayClass(arrayBuffer, byteOffset, length);
        }
      }
    }, {
      key: '_accessBinary',
      value: function _accessBinary(accessorStr, json, buffers) {
        var quaternionIfVec4 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var toGetAsTypedArray = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        var accessorJson = json.accessors[accessorStr];
        var bufferViewStr = accessorJson.bufferView;
        var bufferViewJson = json.bufferViews[bufferViewStr];
        var byteOffset = bufferViewJson.byteOffset + accessorJson.byteOffset;
        var bufferStr = bufferViewJson.buffer;
        var arrayBuffer = buffers[bufferStr];

        var componentN = this._checkComponentNumber(accessorStr, json);
        var bytesPerComponent = this._checkBytesPerComponent(accessorStr, json);
        var dataViewMethod = this._checkDataViewMethod(accessorStr, json);

        var byteLength = bytesPerComponent * componentN * accessorJson.count;

        var vertexAttributeArray = [];

        if (toGetAsTypedArray) {
          if (GLTFLoader._isSystemLittleEndian()) {
            if (dataViewMethod === 'getFloat32') {
              vertexAttributeArray = this._adjustByteAlign(Float32Array, arrayBuffer, 4, byteOffset, byteLength / bytesPerComponent);
            } else if (dataViewMethod === 'getInt8') {
              vertexAttributeArray = new Int8Array(arrayBuffer, byteOffset, byteLength / bytesPerComponent);
            } else if (dataViewMethod === 'getUint8') {
              vertexAttributeArray = new Uint8Array(arrayBuffer, byteOffset, byteLength / bytesPerComponent);
            } else if (dataViewMethod === 'getInt16') {
              vertexAttributeArray = this._adjustByteAlign(Int16Array, arrayBuffer, 2, byteOffset, byteLength / bytesPerComponent);
            } else if (dataViewMethod === 'getUint16') {
              vertexAttributeArray = this._adjustByteAlign(Uint16Array, arrayBuffer, 2, byteOffset, byteLength / bytesPerComponent);
            } else if (dataViewMethod === 'getInt32') {
              vertexAttributeArray = this._adjustByteAlign(Int32Array, arrayBuffer, 4, byteOffset, byteLength / bytesPerComponent);
            } else if (dataViewMethod === 'getUint32') {
              vertexAttributeArray = this._adjustByteAlign(Uint32Array, arrayBuffer, 4, byteOffset, byteLength / bytesPerComponent);
            }
          } else {
            var dataView = new DataView(arrayBuffer, byteOffset, byteLength);
            var byteDelta = bytesPerComponent * componentN;
            var littleEndian = true;
            for (var pos = 0; pos < byteLength; pos += byteDelta) {
              switch (accessorJson.type) {
                case 'SCALAR':
                  vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
                  break;
                case 'VEC2':
                  vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
                  vertexAttributeArray.push(dataView[dataViewMethod](pos + bytesPerComponent, littleEndian));
                  break;
                case 'VEC3':
                  vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
                  vertexAttributeArray.push(dataView[dataViewMethod](pos + bytesPerComponent, littleEndian));
                  vertexAttributeArray.push(dataView[dataViewMethod](pos + bytesPerComponent * 2, littleEndian));
                  break;
                case 'VEC4':
                  vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
                  vertexAttributeArray.push(dataView[dataViewMethod](pos + bytesPerComponent, littleEndian));
                  vertexAttributeArray.push(dataView[dataViewMethod](pos + bytesPerComponent * 2, littleEndian));
                  vertexAttributeArray.push(dataView[dataViewMethod](pos + bytesPerComponent * 3, littleEndian));
                  break;
              }
            }
            if (dataViewMethod === 'getInt8') {
              vertexAttributeArray = new Int8Array(vertexAttributeArray);
            } else if (dataViewMethod === 'getUint8') {
              vertexAttributeArray = new Uint8Array(vertexAttributeArray);
            } else if (dataViewMethod === 'getInt16') {
              vertexAttributeArray = new Int16Array(vertexAttributeArray);
            } else if (dataViewMethod === 'getUint16') {
              vertexAttributeArray = new Uint16Array(vertexAttributeArray);
            } else if (dataViewMethod === 'getInt32') {
              vertexAttributeArray = new Int32Array(vertexAttributeArray);
            } else if (dataViewMethod === 'getUint32') {
              vertexAttributeArray = new Uint32Array(vertexAttributeArray);
            } else if (dataViewMethod === 'getFloat32') {
              vertexAttributeArray = new Float32Array(vertexAttributeArray);
            }
          }
        } else {
          var _dataView = new DataView(arrayBuffer, byteOffset, byteLength);
          var _byteDelta = bytesPerComponent * componentN;
          var _littleEndian = true;
          for (var _pos = 0; _pos < byteLength; _pos += _byteDelta) {

            switch (accessorJson.type) {
              case 'SCALAR':
                vertexAttributeArray.push(_dataView[dataViewMethod](_pos, _littleEndian));
                break;
              case 'VEC2':
                vertexAttributeArray.push(new Vector2(_dataView[dataViewMethod](_pos, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent, _littleEndian)));
                break;
              case 'VEC3':
                vertexAttributeArray.push(new Vector3(_dataView[dataViewMethod](_pos, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent * 2, _littleEndian)));
                break;
              case 'VEC4':
                if (quaternionIfVec4) {
                  vertexAttributeArray.push(new Quaternion(_dataView[dataViewMethod](_pos, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent * 2, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent * 3, _littleEndian)));
                } else {
                  vertexAttributeArray.push(new Vector4(_dataView[dataViewMethod](_pos, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent * 2, _littleEndian), _dataView[dataViewMethod](_pos + bytesPerComponent * 3, _littleEndian)));
                }
                break;
              case 'MAT4':
                var matrixComponents = [];
                for (var i = 0; i < 16; i++) {
                  matrixComponents[i] = _dataView[dataViewMethod](_pos + bytesPerComponent * i, _littleEndian);
                }
                vertexAttributeArray.push(new Matrix44$1(matrixComponents, true));
                break;
            }
          }
        }

        return vertexAttributeArray;
      }
    }], [{
      key: 'getInstance',
      value: function getInstance() {
        if (!this[singleton$1]) {
          this[singleton$1] = new GLTFLoader(singletonEnforcer$1);
        }
        return this[singleton$1];
      }
    }, {
      key: '_isSystemLittleEndian',
      value: function _isSystemLittleEndian() {
        return !!new Uint8Array(new Uint16Array([0x00ff]).buffer)[0];
      }
    }]);
    return GLTFLoader;
  }();

  GLBoost$1["GLTFLoader"] = GLTFLoader;

  if (typeof phina !== 'undefined') {

    phina.namespace(function () {

      /**
       * @class
       */
      phina.define('phina.display.GLBoostLayer', {
        superClass: 'phina.display.Layer',

        scene: null,
        expression: null,
        camera: null,
        light: null,
        glBoostContext: null,
        renderer: null,
        canvas: null,

        /** 子供を 自分のCanvasRenderer で描画するか */
        renderChildBySelf: true,

        init: function init(params) {
          this.superInit(params);
          this.originX = 0;
          this.originY = 0;

          this.canvas = document.createElement("canvas");
          this.canvas.id = 'glboost_world';
          this.canvas.width = params.width;
          this.canvas.height = params.height;
          var bodyElm = document.getElementsByTagName("body").item(0);
          bodyElm.appendChild(this.canvas);
          this.canvas.style.display = "none";

          this.glBoostContext = new GLBoostMiddleContext(this.canvas);
          // レンダラーを生成
          this.renderer = this.glBoostContext.createRenderer({ clearColor: { red: 1, green: 1, blue: 1, alpha: 1 } });
          this.scene = this.glBoostContext.createScene();
          this.expression = this.glBoostContext.createExpressionAndRenderPasses(1);
          this.expression.renderPasses[0].scene = this.scene;

          this.on('enterframe', function () {
            if (this.scene) {
              this.renderer.clearCanvas();
              this.renderer.draw(this.expression);
            }
          });

          this.domElement = this.canvas;
        }
      });

      phina.define("phina.display.OffScreenLayer", {
        superClass: 'phina.display.Layer',

        /**
         * 子孫要素の描画の面倒を自分で見る
         */
        renderChildBySelf: true,

        /** 子孫要素を普通に描画するためのキャンバス */
        canvas2d: null,
        /** canvas2dに描画するレンダラー */
        renderer2d: null,

        width: 0,
        height: 0,

        init: function init(params) {
          this.superInit();

          this.width = params.width;
          this.height = params.height;

          if (params.fillStyle instanceof Vector3) {
            this.fillStyle = 'rgb(' + params.fillStyle.x * 255 + ',' + params.fillStyle.y * 255 + ',' + params.fillStyle.z * 255 + ',1)';
          } else if (params.fillStyle instanceof Vector4) {
            this.fillStyle = 'rgba(' + params.fillStyle.x * 255 + ',' + params.fillStyle.y * 255 + ',' + params.fillStyle.z * 255 + ',' + params.fillStyle.w + ')';
          } else {
            this.fillStyle = params.fillStyle;
          }

          this.canvas2d = phina.graphics.Canvas();
          this.canvas2d.setSize(this.width, this.height);

          this.renderer2d = phina.display.CanvasRenderer(this.canvas2d);
        },

        reset: function reset() {
          this.canvas2d.clearColor('white', 0, 0, this.width, this.height);
          this.canvas2d.clearColor(this.fillStyle, 0, 0, this.width, this.height);
          // this.canvas2d.clear(0, 0, this.width, this.height);
          /*
           this.canvas2d.init();
           this.canvas2d.setSize(this.width, this.height);
           this.renderer2d = phina.display.CanvasRenderer(this.canvas2d);
           */
        },

        renderObject: function renderObject(obj) {
          var layer = DisplayElement();
          obj.flare('enterframe');
          obj.addChildTo(layer);
          this.renderer2d.renderObject(layer);
        },

        getImageDataURL: function getImageDataURL() {
          return this.canvas2d.domElement.toDataURL('image/png');
        }
      });
    });
  }

  var BlinnPhongShaderSource = function () {
    function BlinnPhongShaderSource() {
      babelHelpers.classCallCheck(this, BlinnPhongShaderSource);
    }

    babelHelpers.createClass(BlinnPhongShaderSource, [{
      key: 'FSDefine_BlinnPhongShaderSource',
      value: function FSDefine_BlinnPhongShaderSource(in_, f, lights) {
        var shaderText = '';
        shaderText += 'uniform vec3 viewPosition;\n';
        shaderText += 'uniform vec4 Kd;\n';
        shaderText += 'uniform vec4 Ks;\n';
        shaderText += 'uniform float power;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_BlinnPhongShaderSource',
      value: function FSShade_BlinnPhongShaderSource(f, gl, lights) {
        var shaderText = '';
        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
        shaderText += '  vec3 normal = normalize(v_normal);\n';

        shaderText += '  for (int i=0; i<' + lights.length + '; i++) {\n';
        // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0

        shaderText += '    vec3 light = normalize(lightPosition[i].xyz - position.xyz * lightPosition[i].w);\n';
        shaderText += '    float diffuse = max(dot(light, normal), 0.0);\n';
        shaderText += '    rt0 += Kd * lightDiffuse[i] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n';
        shaderText += '    vec3 view = normalize(viewPosition - position.xyz);\n';
        shaderText += '    vec3 halfVec = normalize(light + view);\n';
        shaderText += '    float specular = pow(max(dot(halfVec, normal), 0.0), power);\n';
        shaderText += '    rt0 += Ks * lightDiffuse[i] * vec4(specular, specular, specular, 0.0);\n';

        shaderText += '  }\n';
        //    shaderText += '  rt0 *= (1.0 - shadowRatio);\n';
        //shaderText += '  rt0.a = 1.0;\n';


        return shaderText;
      }
    }, {
      key: 'prepare_BlinnPhongShaderSource',
      value: function prepare_BlinnPhongShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];

        material.uniform_Kd = gl.getUniformLocation(shaderProgram, 'Kd');
        material.uniform_Ks = gl.getUniformLocation(shaderProgram, 'Ks');
        material.uniform_power = gl.getUniformLocation(shaderProgram, 'power');

        material['uniform_viewPosition'] = gl.getUniformLocation(shaderProgram, 'viewPosition');

        return vertexAttribsAsResult;
      }
    }]);
    return BlinnPhongShaderSource;
  }();

  var BlinnPhongShader = function (_DecalShader) {
    babelHelpers.inherits(BlinnPhongShader, _DecalShader);

    function BlinnPhongShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, BlinnPhongShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (BlinnPhongShader.__proto__ || Object.getPrototypeOf(BlinnPhongShader)).call(this, glBoostContext, basicShader));

      BlinnPhongShader.mixin(BlinnPhongShaderSource);

      _this._power = 64.0;

      return _this;
    }

    babelHelpers.createClass(BlinnPhongShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {
        babelHelpers.get(BlinnPhongShader.prototype.__proto__ || Object.getPrototypeOf(BlinnPhongShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material);

        var Kd = material.diffuseColor;
        var Ks = material.specularColor;
        gl.uniform4f(material.uniform_Kd, Kd.x, Kd.y, Kd.z, Kd.w);
        gl.uniform4f(material.uniform_Ks, Ks.x, Ks.y, Ks.z, Ks.w);
        gl.uniform1f(material.uniform_power, this._power);
      }
    }, {
      key: 'Kd',
      set: function set(value) {
        this._Kd = value;
      },
      get: function get() {
        return this._Kd;
      }
    }, {
      key: 'Ks',
      set: function set(value) {
        this._Ks = value;
      },
      get: function get() {
        return this._Ks;
      }
    }, {
      key: 'power',
      set: function set(value) {
        this._power = value;
      },
      get: function get() {
        return this._power;
      }
    }]);
    return BlinnPhongShader;
  }(DecalShader);

  GLBoost['BlinnPhongShader'] = BlinnPhongShader;

  var LambertShaderSource = function () {
    function LambertShaderSource() {
      babelHelpers.classCallCheck(this, LambertShaderSource);
    }

    babelHelpers.createClass(LambertShaderSource, [{
      key: 'FSDefine_LambertShaderSource',

      /*
      VSDefine_LambertShaderSource(in_, out_, f, lights, material, extraData) {
        var shaderText = '';
         let textureUnitIndex = 0;
        for (let i=0; i<lights.length; i++) {
          if (lights[i].camera && lights[i].camera.texture) {
            shaderText += `${out_} vec4 projectedPosByLight[${textureUnitIndex+1}];\n`;
            shaderText +=      `uniform mat4 viewMatrixFromLight[${textureUnitIndex+1}];\n`;
            shaderText +=      `uniform mat4 projectionMatrixFromLight[${textureUnitIndex+1}];\n`;
            textureUnitIndex++;
          }
        }
        return shaderText;
      }
       VSTransform_LambertShaderSource(existCamera_f, f, lights, material, extraData) {
        var shaderText = '';
        let textureUnitIndex = 0;
        for (let i=0; i<lights.length; i++) {
          if (lights[i].camera && lights[i].camera.texture) {
            shaderText += `mat4 pvwLightMatrix = projectionMatrixFromLight[${textureUnitIndex}] * viewMatrixFromLight[${textureUnitIndex}] * worldMatrix;\n`;
            shaderText += `projectedPosByLight[${textureUnitIndex}] = pvwLightMatrix * vec4(aVertex_position, 1.0);\n`;
            textureUnitIndex++;
          }
        }
        return shaderText;
      }*/

      value: function FSDefine_LambertShaderSource(in_, f, lights) {

        var sampler2D = this._sampler2DShadow_func();
        var shaderText = '';
        shaderText += 'uniform vec4 Kd;\n';

        //for (let i=0; i<lights.length; i++) {
        //  if (lights[i].camera && lights[i].camera.texture) {
        shaderText += 'uniform mediump ' + sampler2D + ' uDepthTexture[' + lights.length + '];\n';

        shaderText += in_ + ' vec4 v_shadowCoord[' + lights.length + '];\n';

        //}
        //}
        shaderText += 'uniform int isShadowCasting[' + lights.length + '];\n';
        shaderText += in_ + ' vec4 temp[1];\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_LambertShaderSource',
      value: function FSShade_LambertShaderSource(f, gl, lights) {
        var shaderText = '';

        var textureProjFunc = Shader._textureProj_func(gl);

        var textureUnitIndex = 0;
        for (var i = 0; i < lights.length; i++) {
          if (lights[i].camera && lights[i].camera.texture) {
            textureUnitIndex++;
          }
        }

        shaderText += '  float depthBias = 0.005;\n';

        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
        shaderText += '  vec3 normal = normalize(v_normal);\n';
        for (var _i = 0; _i < lights.length; _i++) {
          shaderText += '  {\n';
          // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0
          shaderText += '    vec3 light = normalize(lightPosition[' + _i + '].xyz - position.xyz * lightPosition[' + _i + '].w);\n';

          shaderText += '    if (isShadowCasting[' + _i + '] == 1) {// ' + _i + '\n';

          shaderText += '      float depth = ' + textureProjFunc + '(uDepthTexture[' + _i + '], v_shadowCoord[' + _i + ']).r;\n';
          shaderText += '      if (depth < (v_shadowCoord[' + _i + '].z - depthBias) / v_shadowCoord[' + _i + '].w) {\n';
          shaderText += '        light *= 0.5;\n';
          shaderText += '      }\n';

          //shaderText += `        float visibility = texture2DProj(uDepthTexture[${i}], v_shadowCoord[${i}], depthBias).x;\n`;
          //shaderText += `        light *= visibility > 0.5 ? 1.0 : 0.0;\n`;

          shaderText += '    }\n';

          shaderText += '    float diffuse = max(dot(light, normal), 0.0);\n';
          shaderText += '    rt0 += Kd * lightDiffuse[' + _i + '] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n';
          shaderText += '  }\n';
        }
        //shaderText += '  rt0.a = 1.0;\n';
        //shaderText += '  rt0 = vec4(v_shadowCoord[0].x, v_shadowCoord[0].y, 0.0, 1.0);\n';


        return shaderText;
      }
    }, {
      key: 'prepare_LambertShaderSource',
      value: function prepare_LambertShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];

        material.uniform_Kd = gl.getUniformLocation(shaderProgram, 'Kd');

        var textureUnitIndex = 0;
        for (var i = 0; i < lights.length; i++) {
          material['uniform_isShadowCasting' + i] = gl.getUniformLocation(shaderProgram, 'isShadowCasting[' + i + ']');
          // depthTexture
          material['uniform_DepthTextureSampler_' + i] = gl.getUniformLocation(shaderProgram, 'uDepthTexture[' + i + ']');
          // set texture unit i+1 to the sampler
          gl.uniform1i(material['uniform_DepthTextureSampler_' + i], i + 1); // +1 because 0 is used for diffuse texture

          if (lights[i].camera && lights[i].camera.texture) {
            lights[i].camera.texture.textureUnitIndex = i + 1; // +1 because 0 is used for diffuse texture
          }
        }

        return vertexAttribsAsResult;
      }
    }]);
    return LambertShaderSource;
  }();

  var LambertShader = function (_DecalShader) {
    babelHelpers.inherits(LambertShader, _DecalShader);

    function LambertShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, LambertShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (LambertShader.__proto__ || Object.getPrototypeOf(LambertShader)).call(this, glBoostContext, basicShader));

      LambertShader.mixin(LambertShaderSource);
      return _this;
    }

    babelHelpers.createClass(LambertShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material, camera, mesh, lights) {
        babelHelpers.get(LambertShader.prototype.__proto__ || Object.getPrototypeOf(LambertShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material);

        var Kd = material.diffuseColor;
        gl.uniform4f(material.uniform_Kd, Kd.x, Kd.y, Kd.z, Kd.w);

        for (var j = 0; j < lights.length; j++) {
          if (lights[j].camera && lights[j].camera.texture) {
            var cameraMatrix = lights[j].camera.lookAtRHMatrix();
            var projectionMatrix = lights[j].camera.projectionRHMatrix();
            gl.uniformMatrix4fv(material['uniform_depthPVMatrix_' + j], false, Matrix44$1.multiply(projectionMatrix, cameraMatrix).flatten());
          }
        }

        for (var i = 0; i < lights.length; i++) {
          if (lights[i].camera && lights[i].camera.texture) {
            gl.uniform1i(material['uniform_isShadowCasting' + i], 1);
          } else {
            gl.uniform1i(material['uniform_isShadowCasting' + i], 0);
          }
        }
      }
    }]);
    return LambertShader;
  }(DecalShader);

  GLBoost['LambertShader'] = LambertShader;

  var HalfLambertShaderSource = function () {
    function HalfLambertShaderSource() {
      babelHelpers.classCallCheck(this, HalfLambertShaderSource);
    }

    babelHelpers.createClass(HalfLambertShaderSource, [{
      key: 'FSDefine_HalfLambertShaderSource',
      value: function FSDefine_HalfLambertShaderSource(in_, f, lights) {
        var shaderText = '';
        shaderText += 'uniform vec4 Kd;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_HalfLambertShaderSource',
      value: function FSShade_HalfLambertShaderSource(f, gl, lights) {
        var shaderText = '';

        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
        shaderText += '  vec3 normal = normalize(v_normal);\n';

        shaderText += '  for (int i=0; i<' + lights.length + '; i++) {\n';
        // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0
        shaderText += '    vec3 light = normalize(lightPosition[i].xyz - position.xyz * lightPosition[i].w);\n';
        shaderText += '    float halfLambert = max(dot(light, normal), 0.0)*0.5+0.5;\n';
        shaderText += '    float diffuse = halfLambert*halfLambert;\n';
        shaderText += '    rt0 += Kd * lightDiffuse[i] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n';
        shaderText += '  }\n';
        //    shaderText += '  rt0 *= (1.0 - shadowRatio);\n';
        //shaderText += '  rt0.a = 1.0;\n';
        //shaderText += '  rt0 = vec4(position.xyz, 1.0);\n';


        return shaderText;
      }
    }, {
      key: 'prepare_HalfLambertShaderSource',
      value: function prepare_HalfLambertShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];

        material.uniform_Kd = gl.getUniformLocation(shaderProgram, 'Kd');

        return vertexAttribsAsResult;
      }
    }]);
    return HalfLambertShaderSource;
  }();

  var HalfLambertShader = function (_DecalShader) {
    babelHelpers.inherits(HalfLambertShader, _DecalShader);

    function HalfLambertShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, HalfLambertShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (HalfLambertShader.__proto__ || Object.getPrototypeOf(HalfLambertShader)).call(this, glBoostContext, basicShader));

      HalfLambertShader.mixin(HalfLambertShaderSource);
      return _this;
    }

    babelHelpers.createClass(HalfLambertShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {
        babelHelpers.get(HalfLambertShader.prototype.__proto__ || Object.getPrototypeOf(HalfLambertShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material);

        var Kd = material.diffuseColor;
        gl.uniform4f(material.uniform_Kd, Kd.x, Kd.y, Kd.z, Kd.w);
      }
    }]);
    return HalfLambertShader;
  }(DecalShader);

  GLBoost['HalfLambertShader'] = HalfLambertShader;

  var HalfLambertAndWrapLightingShaderSource = function () {
    function HalfLambertAndWrapLightingShaderSource() {
      babelHelpers.classCallCheck(this, HalfLambertAndWrapLightingShaderSource);
    }

    babelHelpers.createClass(HalfLambertAndWrapLightingShaderSource, [{
      key: 'FSDefine_HalfLambertAndWrapLightingShaderSource',
      value: function FSDefine_HalfLambertAndWrapLightingShaderSource(in_, f, lights) {
        var shaderText = '';
        shaderText += 'uniform vec4 Kd;\n';
        shaderText += 'uniform vec3 wrap;\n';

        return shaderText;
      }
    }, {
      key: 'FSShade_HalfLambertAndWrapLightingShaderSource',
      value: function FSShade_HalfLambertAndWrapLightingShaderSource(f, gl, lights) {
        var shaderText = '';

        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
        shaderText += '  vec3 normal = normalize(v_normal);\n';

        shaderText += '  for (int i=0; i<' + lights.length + '; i++) {\n';
        // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0
        shaderText += '    vec3 light = normalize(lightPosition[i].xyz - position.xyz * lightPosition[i].w);\n';
        shaderText += '    float halfLambert = max(dot(light, normal), 0.0)*0.5+0.5;\n';
        shaderText += '    float diffuse = halfLambert*halfLambert;\n';
        shaderText += '    vec3 diffuseVec = vec3(diffuse, diffuse, diffuse);\n';
        shaderText += '    diffuseVec = (diffuseVec+wrap) / (1.0 + wrap);\n';
        shaderText += '    rt0 += Kd * lightDiffuse[i] * vec4(diffuseVec, 1.0) * surfaceColor;\n';
        shaderText += '  }\n';

        return shaderText;
      }
    }, {
      key: 'prepare_HalfLambertAndWrapLightingShaderSource',
      value: function prepare_HalfLambertAndWrapLightingShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f, lights, material, extraData) {

        var vertexAttribsAsResult = [];

        material.uniform_Kd = gl.getUniformLocation(shaderProgram, 'Kd');
        material.uniform_wrap = gl.getUniformLocation(shaderProgram, 'wrap');

        return vertexAttribsAsResult;
      }
    }]);
    return HalfLambertAndWrapLightingShaderSource;
  }();

  var HalfLambertAndWrapLightingShader = function (_DecalShader) {
    babelHelpers.inherits(HalfLambertAndWrapLightingShader, _DecalShader);

    function HalfLambertAndWrapLightingShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, HalfLambertAndWrapLightingShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (HalfLambertAndWrapLightingShader.__proto__ || Object.getPrototypeOf(HalfLambertAndWrapLightingShader)).call(this, glBoostContext, basicShader));

      HalfLambertAndWrapLightingShader.mixin(HalfLambertAndWrapLightingShaderSource);

      _this._wrap = new Vector3(0.6, 0.3, 0.0);
      return _this;
    }

    babelHelpers.createClass(HalfLambertAndWrapLightingShader, [{
      key: 'setUniforms',
      value: function setUniforms(gl, glslProgram, material) {
        babelHelpers.get(HalfLambertAndWrapLightingShader.prototype.__proto__ || Object.getPrototypeOf(HalfLambertAndWrapLightingShader.prototype), 'setUniforms', this).call(this, gl, glslProgram, material);

        var Kd = material.diffuseColor;
        gl.uniform4f(material.uniform_Kd, Kd.x, Kd.y, Kd.z, Kd.w);
        gl.uniform3f(material.uniform_wrap, this._wrap.x, this._wrap.y, this._wrap.z);
      }
    }, {
      key: 'wrap',
      set: function set(value) {
        this._wrap = value;
      },
      get: function get() {
        return this._wrap;
      }
    }]);
    return HalfLambertAndWrapLightingShader;
  }(DecalShader);

  GLBoost['HalfLambertAndWrapLightingShader'] = HalfLambertAndWrapLightingShader;

  var DepthDisplayShaderSource = function () {
    function DepthDisplayShaderSource() {
      babelHelpers.classCallCheck(this, DepthDisplayShaderSource);
    }

    babelHelpers.createClass(DepthDisplayShaderSource, [{
      key: 'FSShade_DepthDisplayShaderSource',
      value: function FSShade_DepthDisplayShaderSource(f, gl, lights) {
        var shaderText = '';

        shaderText += '  vec4 surfaceColor = rt0;\n';
        shaderText += '  rt0 = vec4(surfaceColor.r, surfaceColor.r, surfaceColor.r, 1.0);\n';

        //shaderText += '  rt0.a = 1.0;\n';
        //shaderText += '  rt0 = vec4(position.xyz, 1.0);\n';


        return shaderText;
      }
    }]);
    return DepthDisplayShaderSource;
  }();

  var DepthDisplayShader = function (_DecalShader) {
    babelHelpers.inherits(DepthDisplayShader, _DecalShader);

    function DepthDisplayShader(glBoostContext, basicShader) {
      babelHelpers.classCallCheck(this, DepthDisplayShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (DepthDisplayShader.__proto__ || Object.getPrototypeOf(DepthDisplayShader)).call(this, glBoostContext, basicShader));

      DepthDisplayShader.mixin(DepthDisplayShaderSource);
      return _this;
    }

    return DepthDisplayShader;
  }(DecalShader);

  GLBoost['DepthDisplayShader'] = DepthDisplayShader;

  var PassThroughShaderSource = function () {
    function PassThroughShaderSource() {
      babelHelpers.classCallCheck(this, PassThroughShaderSource);
    }

    babelHelpers.createClass(PassThroughShaderSource, [{
      key: 'VSDefine_PassThroughShaderSource',
      value: function VSDefine_PassThroughShaderSource(in_, out_, f) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += in_ + ' vec4 aVertex_color;\n';
          shaderText += out_ + ' vec4 color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += in_ + ' vec2 aVertex_texcoord;\n';
          shaderText += out_ + ' vec2 texcoord;\n';
        }
        return shaderText;
      }
    }, {
      key: 'VSTransform_PassThroughShaderSource',
      value: function VSTransform_PassThroughShaderSource(existCamera_f, f) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += '  color = aVertex_color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += '  texcoord = aVertex_texcoord;\n';
        }
        return shaderText;
      }
    }, {
      key: 'FSDefine_PassThroughShaderSource',
      value: function FSDefine_PassThroughShaderSource(in_, f) {
        var shaderText = '';
        if (Shader._exist(f, GLBoost.COLOR)) {
          shaderText += in_ + ' vec4 color;\n';
        }
        if (Shader._exist(f, GLBoost.TEXCOORD)) {
          shaderText += in_ + ' vec2 texcoord;\n\n';
        }

        return shaderText;
      }
    }, {
      key: 'FSShade_PassThroughShaderSource',
      value: function FSShade_PassThroughShaderSource(f, gl) {

        var shaderText = '    rt0 = vec4(1.0, 0.0, 0.0, 1.0);\n';
        return shaderText;
      }
    }, {
      key: 'prepare_DecalShaderSource',
      value: function prepare_DecalShaderSource(gl, shaderProgram, vertexAttribs, existCamera_f) {

        var vertexAttribsAsResult = [];
        /*
        vertexAttribs.forEach((attribName)=>{
          if (attribName === GLBoost.COLOR || attribName === GLBoost.TEXCOORD) {
            shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        });
        */
        return vertexAttribsAsResult;
      }
    }]);
    return PassThroughShaderSource;
  }();

  var PassThroughShader = function (_Shader) {
    babelHelpers.inherits(PassThroughShader, _Shader);

    function PassThroughShader(glBoostContext) {
      var basicShader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : VertexWorldShaderSource;
      babelHelpers.classCallCheck(this, PassThroughShader);

      var _this = babelHelpers.possibleConstructorReturn(this, (PassThroughShader.__proto__ || Object.getPrototypeOf(PassThroughShader)).call(this, glBoostContext));

      PassThroughShader.mixin(basicShader);
      PassThroughShader.mixin(PassThroughShaderSource);
      return _this;
    }

    return PassThroughShader;
  }(Shader);

  GLBoost['PassThroughShader'] = PassThroughShader;

}));