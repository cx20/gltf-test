(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  var global = (0, eval)('this');

  (function (global) {
    global.GLBoost = (typeof global.GLBoost !== 'undefined') ? global.GLBoost : {};
    const GLBoost = global.GLBoost;
    if (typeof define === 'function' && define.amd) {
      define(function() { return GLBoost; });
    } else if (typeof exports === 'object') {
      module.exports = GLBoost;
      global.GLBoost = GLBoost;
    } else {
      global.GLBoost = GLBoost;
    }

    (function(){
      GLBoost.GLBOOST_CONSTANT_NAMES = [];
      GLBoost.GLBOOST_CONSTANT_VALUES = [];
      let c = {
        count: 0,
        __existedConstants: [],
        define: function (constantName, glConstantValue, aliasName) {

          let value = null;

          if (glConstantValue !== void 0 ) {
            value = glConstantValue;
            this.__existedConstants.push(glConstantValue);
          } else {
            const checkUnique = ()=> {
              let result = true;
              for (let existValue of this.__existedConstants) {
                if (this.count === existValue) {
                  result = false;
                }
              }
              return result;
            };

            for (; checkUnique() === false; this.count++) {}

            value = this.count;
          }

          GLBoost[constantName] = value;
          GLBoost.GLBOOST_CONSTANT_NAMES[value] = constantName;
          GLBoost.GLBOOST_CONSTANT_VALUES[value] = (typeof aliasName !== 'undefined') ? aliasName:constantName;

          this.count++;
        }
      };

      // Define GLBoost Constants.
      /// copies of WebGL constants
      c.define('ACTIVE_ATTRIBUTES', 35721);
      c.define('ACTIVE_ATTRIBUTE_MAX_LENGTH', 35722);
      c.define('ACTIVE_TEXTURE', 34016);
      c.define('ACTIVE_UNIFORMS', 35718);
      c.define('ACTIVE_UNIFORM_MAX_LENGTH', 35719);
      c.define('ALIASED_LINE_WIDTH_RANGE', 33902);
      c.define('ALIASED_POINT_SIZE_RANGE', 33901);
      c.define('ALPHA', 6406);
      c.define('ALPHA_BITS', 3413);
      c.define('ALWAYS', 519);
      c.define('ARRAY_BUFFER', 34962);
      c.define('ARRAY_BUFFER_BINDING', 34964);
      c.define('ATTACHED_SHADERS', 35717);
      c.define('BACK', 1029);
      c.define('BLEND', 3042);
      c.define('BLEND_COLOR', 32773);
      c.define('BLEND_DST_ALPHA', 32970);
      c.define('BLEND_DST_RGB', 32968);
      c.define('BLEND_EQUATION', 32777);
      c.define('BLEND_EQUATION_ALPHA', 34877);
      c.define('BLEND_EQUATION_RGB', 32777);
      c.define('BLEND_SRC_ALPHA', 32971);
      c.define('BLEND_SRC_RGB', 32969);
      c.define('BLUE_BITS', 3412);
      c.define('BOOL', 35670);
      c.define('BOOL_VEC2', 35671);
      c.define('BOOL_VEC3', 35672);
      c.define('BOOL_VEC4', 35673);
      c.define('BROWSER_DEFAULT_WEBGL', 37444);
      c.define('BUFFER_SIZE', 34660);
      c.define('BUFFER_USAGE', 34661);
      c.define('BYTE', 5120);
      c.define('CCW', 2305);
      c.define('CLAMP_TO_EDGE', 33071);
      c.define('COLOR_ATTACHMENT0', 36064);
      c.define('COLOR_BUFFER_BIT', 16384);
      c.define('COLOR_CLEAR_VALUE', 3106);
      c.define('COLOR_WRITEMASK', 3107);
      c.define('COMPILE_STATUS', 35713);
      c.define('COMPRESSED_TEXTURE_FORMATS', 34467);
      c.define('CONSTANT_ALPHA', 32771);
      c.define('CONSTANT_COLOR', 32769);
      c.define('CONTEXT_LOST_WEBGL', 37442);
      c.define('CULL_FACE', 2884);
      c.define('CULL_FACE_MODE', 2885);
      c.define('CURRENT_PROGRAM', 35725);
      c.define('CURRENT_VERTEX_ATTRIB', 34342);
      c.define('CW', 2304);
      c.define('DECR', 7683);
      c.define('DECR_WRAP', 34056);
      c.define('DELETE_STATUS', 35712);
      c.define('DEPTH_ATTACHMENT', 36096);
      c.define('DEPTH_BITS', 3414);
      c.define('DEPTH_BUFFER_BIT', 256);
      c.define('DEPTH_CLEAR_VALUE', 2931);
      c.define('DEPTH_COMPONENT', 6402);
      c.define('DEPTH_COMPONENT16', 33189);
      c.define('DEPTH_FUNC', 2932);
      c.define('DEPTH_RANGE', 2928);
      c.define('DEPTH_STENCIL', 34041);
      c.define('DEPTH_STENCIL_ATTACHMENT', 33306);
      c.define('DEPTH_TEST', 2929);
      c.define('DEPTH_WRITEMASK', 2930);
      c.define('DITHER', 3024);
      c.define('DONT_CARE', 4352);
      c.define('DST_ALPHA', 772);
      c.define('DST_COLOR', 774);
      c.define('DYNAMIC_DRAW', 35048);
      c.define('ELEMENT_ARRAY_BUFFER', 34963);
      c.define('ELEMENT_ARRAY_BUFFER_BINDING', 34965);
      c.define('EQUAL', 514);
      c.define('FASTEST', 4353);
      c.define('FLOAT', 5126);
      c.define('FLOAT_MAT2', 35674);
      c.define('FLOAT_MAT3', 35675);
      c.define('FLOAT_MAT4', 35676);
      c.define('FLOAT_VEC2', 35664);
      c.define('FLOAT_VEC3', 35665);
      c.define('FLOAT_VEC4', 35666);
      c.define('FRAGMENT_SHADER', 35632);
      c.define('FRAMEBUFFER', 36160);
      c.define('FRAMEBUFFER_ATTACHMENT_OBJECT_NAME', 36049);
      c.define('FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE', 36048);
      c.define('FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE', 36051);
      c.define('FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL', 36050);
      c.define('FRAMEBUFFER_BINDING', 36006);
      c.define('FRAMEBUFFER_COMPLETE', 36053);
      c.define('FRAMEBUFFER_INCOMPLETE_ATTACHMENT', 36054);
      c.define('FRAMEBUFFER_INCOMPLETE_DIMENSIONS', 36057);
      c.define('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT', 36055);
      c.define('FRAMEBUFFER_UNSUPPORTED', 36061);
      c.define('FRONT', 1028);
      c.define('FRONT_AND_BACK', 1032);
      c.define('FRONT_FACE', 2886);
      c.define('FUNC_ADD', 32774);
      c.define('FUNC_REVERSE_SUBTRACT', 32779);
      c.define('FUNC_SUBTRACT', 32778);
      c.define('GENERATE_MIPMAP_HINT', 33170);
      c.define('GEQUAL', 518);
      c.define('GREATER', 516);
      c.define('GREEN_BITS', 3411);
      c.define('HIGH_FLOAT', 36338);
      c.define('HIGH_INT', 36341);
      c.define('INCR', 7682);
      c.define('INCR_WRAP', 34055);
      c.define('INFO_LOG_LENGTH', 35716);
      c.define('INT', 5124);
      c.define('INT_VEC2', 35667);
      c.define('INT_VEC3', 35668);
      c.define('INT_VEC4', 35669);
      c.define('INVALID_ENUM', 1280);
      c.define('INVALID_FRAMEBUFFER_OPERATION', 1286);
      c.define('INVALID_OPERATION', 1282);
      c.define('INVALID_VALUE', 1281);
      c.define('INVERT', 5386);
      c.define('KEEP', 7680);
      c.define('LEQUAL', 515);
      c.define('LESS', 513);
      c.define('LINEAR', 9729);
      c.define('LINEAR_MIPMAP_LINEAR', 9987);
      c.define('LINEAR_MIPMAP_NEAREST', 9985);
      c.define('LINES', 1);
      c.define('LINE_LOOP', 2);
      c.define('LINE_STRIP', 3);
      c.define('LINE_WIDTH', 2849);
      c.define('LINK_STATUS', 35714);
      c.define('LOW_FLOAT', 36336);
      c.define('LOW_INT', 36339);
      c.define('LUMINANCE', 6409);
      c.define('LUMINANCE_ALPHA', 6410);
      c.define('MAX_COMBINED_TEXTURE_IMAGE_UNITS', 35661);
      c.define('MAX_CUBE_MAP_TEXTURE_SIZE', 34076);
      c.define('MAX_FRAGMENT_UNIFORM_VECTORS', 36349);
      c.define('MAX_RENDERBUFFER_SIZE', 34024);
      c.define('MAX_TEXTURE_IMAGE_UNITS', 34930);
      c.define('MAX_TEXTURE_SIZE', 3379);
      c.define('MAX_VARYING_VECTORS', 36348);
      c.define('MAX_VERTEX_ATTRIBS', 34921);
      c.define('MAX_VERTEX_TEXTURE_IMAGE_UNITS', 35660);
      c.define('MAX_VERTEX_UNIFORM_VECTORS', 36347);
      c.define('MAX_VIEWPORT_DIMS', 3386);
      c.define('MEDIUM_FLOAT', 36337);
      c.define('MEDIUM_INT', 36340);
      c.define('MIRRORED_REPEAT', 33648);
      c.define('NEAREST', 9728);
      c.define('NEAREST_MIPMAP_LINEAR', 9986);
      c.define('NEAREST_MIPMAP_NEAREST', 9984);
      c.define('NEVER', 512);
      c.define('NICEST', 4354);
      c.define('NONE', 0);
      c.define('NOTEQUAL', 517);
      c.define('NO_ERROR', 0);
      c.define('NUM_COMPRESSED_TEXTURE_FORMATS', 34466);
      c.define('ONE', 1);
      c.define('ONE_MINUS_CONSTANT_ALPHA', 32772);
      c.define('ONE_MINUS_CONSTANT_COLOR', 32770);
      c.define('ONE_MINUS_DST_ALPHA', 773);
      c.define('ONE_MINUS_DST_COLOR', 775);
      c.define('ONE_MINUS_SRC_ALPHA', 771);
      c.define('ONE_MINUS_SRC_COLOR', 769);
      c.define('OUT_OF_MEMORY', 1285);
      c.define('PACK_ALIGNMENT', 3333);
      c.define('POINTS', 0);
      c.define('POLYGON_OFFSET_FACTOR', 32824);
      c.define('POLYGON_OFFSET_FILL', 32823);
      c.define('POLYGON_OFFSET_UNITS', 10752);
      c.define('RED_BITS', 3410);
      c.define('RENDERBUFFER', 36161);
      c.define('RENDERBUFFER_ALPHA_SIZE', 36179);
      c.define('RENDERBUFFER_BINDING', 36007);
      c.define('RENDERBUFFER_BLUE_SIZE', 36178);
      c.define('RENDERBUFFER_DEPTH_SIZE', 36180);
      c.define('RENDERBUFFER_GREEN_SIZE', 36177);
      c.define('RENDERBUFFER_HEIGHT', 36163);
      c.define('RENDERBUFFER_INTERNAL_FORMAT', 36164);
      c.define('RENDERBUFFER_RED_SIZE', 36176);
      c.define('RENDERBUFFER_STENCIL_SIZE', 36181);
      c.define('RENDERBUFFER_WIDTH', 36162);
      c.define('RENDERER', 7937);
      c.define('REPEAT', 10497);
      c.define('REPLACE', 7681);
      c.define('RGB', 6407);
      c.define('RGB5_A1', 32855);
      c.define('RGB565', 36194);
      c.define('RGBA', 6408);
      c.define('RGBA4', 32854);
      c.define('SAMPLER_2D', 35678);
      c.define('SAMPLER_CUBE', 35680);
      c.define('SAMPLES', 32937);
      c.define('SAMPLE_ALPHA_TO_COVERAGE', 32926);
      c.define('SAMPLE_BUFFERS', 32936);
      c.define('SAMPLE_COVERAGE', 32928);
      c.define('SAMPLE_COVERAGE_INVERT', 32939);
      c.define('SAMPLE_COVERAGE_VALUE', 32938);
      c.define('SCISSOR_BOX', 3088);
      c.define('SCISSOR_TEST', 3089);
      c.define('SHADER_COMPILER', 36346);
      c.define('SHADER_SOURCE_LENGTH', 35720);
      c.define('SHADER_TYPE', 35663);
      c.define('SHADING_LANGUAGE_VERSION', 35724);
      c.define('SHORT', 5122);
      c.define('SRC_ALPHA', 770);
      c.define('SRC_ALPHA_SATURATE', 776);
      c.define('SRC_COLOR', 768);
      c.define('STATIC_DRAW', 35044);
      c.define('STENCIL_ATTACHMENT', 36128);
      c.define('STENCIL_BACK_FAIL', 34817);
      c.define('STENCIL_BACK_FUNC', 34816);
      c.define('STENCIL_BACK_PASS_DEPTH_FAIL', 34818);
      c.define('STENCIL_BACK_PASS_DEPTH_PASS', 34819);
      c.define('STENCIL_BACK_REF', 36003);
      c.define('STENCIL_BACK_VALUE_MASK', 36004);
      c.define('STENCIL_BACK_WRITEMASK', 36005);
      c.define('STENCIL_BITS', 3415);
      c.define('STENCIL_BUFFER_BIT', 1024);
      c.define('STENCIL_CLEAR_VALUE', 2961);
      c.define('STENCIL_FAIL', 2964);
      c.define('STENCIL_FUNC', 2962);
      c.define('STENCIL_INDEX', 6401);
      c.define('STENCIL_INDEX8', 36168);
      c.define('STENCIL_PASS_DEPTH_FAIL', 2965);
      c.define('STENCIL_PASS_DEPTH_PASS', 2966);
      c.define('STENCIL_REF', 2967);
      c.define('STENCIL_TEST', 2960);
      c.define('STENCIL_VALUE_MASK', 2963);
      c.define('STENCIL_WRITEMASK', 2968);
      c.define('STREAM_DRAW', 35040);
      c.define('SUBPIXEL_BITS', 3408);
      c.define('TEXTURE', 5890);
      c.define('TEXTURE0', 33984);
      c.define('TEXTURE1', 33985);
      c.define('TEXTURE2', 33986);
      c.define('TEXTURE3', 33987);
      c.define('TEXTURE4', 33988);
      c.define('TEXTURE5', 33989);
      c.define('TEXTURE6', 33990);
      c.define('TEXTURE7', 33991);
      c.define('TEXTURE8', 33992);
      c.define('TEXTURE9', 33993);
      c.define('TEXTURE10', 33994);
      c.define('TEXTURE11', 33995);
      c.define('TEXTURE12', 33996);
      c.define('TEXTURE13', 33997);
      c.define('TEXTURE14', 33998);
      c.define('TEXTURE15', 33999);
      c.define('TEXTURE16', 34000);
      c.define('TEXTURE17', 34001);
      c.define('TEXTURE18', 34002);
      c.define('TEXTURE19', 34003);
      c.define('TEXTURE20', 34004);
      c.define('TEXTURE21', 34005);
      c.define('TEXTURE22', 34006);
      c.define('TEXTURE23', 34007);
      c.define('TEXTURE24', 34008);
      c.define('TEXTURE25', 34009);
      c.define('TEXTURE26', 34010);
      c.define('TEXTURE27', 34011);
      c.define('TEXTURE28', 34012);
      c.define('TEXTURE29', 34013);
      c.define('TEXTURE30', 34014);
      c.define('TEXTURE31', 34015);
      c.define('TEXTURE_2D', 3553);
      c.define('TEXTURE_BINDING_2D', 32873);
      c.define('TEXTURE_BINDING_CUBE_MAP', 34068);
      c.define('TEXTURE_CUBE_MAP', 34067);
      c.define('TEXTURE_CUBE_MAP_NEGATIVE_X', 34070);
      c.define('TEXTURE_CUBE_MAP_NEGATIVE_Y', 34072);
      c.define('TEXTURE_CUBE_MAP_NEGATIVE_Z', 34074);
      c.define('TEXTURE_CUBE_MAP_POSITIVE_X', 34069);
      c.define('TEXTURE_CUBE_MAP_POSITIVE_Y', 34071);
      c.define('TEXTURE_CUBE_MAP_POSITIVE_Z', 34073);
      c.define('TEXTURE_MAG_FILTER', 10240);
      c.define('TEXTURE_MIN_FILTER', 10241);
      c.define('TEXTURE_WRAP_S', 10242);
      c.define('TEXTURE_WRAP_T', 10243);
      c.define('TRIANGLES', 4);
      c.define('TRIANGLE_FAN', 6);
      c.define('TRIANGLE_STRIP', 5);
      c.define('UNPACK_ALIGNMENT', 3317);
      c.define('UNPACK_COLORSPACE_CONVERSION_WEBGL', 37443);
      c.define('UNPACK_FLIP_Y_WEBGL', 37440);
      c.define('UNPACK_PREMULTIPLY_ALPHA_WEBGL', 37441);
      c.define('UNSIGNED_BYTE', 5121);
      c.define('UNSIGNED_INT', 5125);
      c.define('UNSIGNED_SHORT', 5123);
      c.define('UNSIGNED_SHORT_4_4_4_4', 32819);
      c.define('UNSIGNED_SHORT_5_5_5_1', 32820);
      c.define('UNSIGNED_SHORT_5_6_5', 33635);
      c.define('VALIDATE_STATUS', 35715);
      c.define('VENDOR', 7936);
      c.define('VERSION', 7938);
      c.define('VERTEX_ATTRIB_ARRAY_BUFFER_BINDING', 34975);
      c.define('VERTEX_ATTRIB_ARRAY_ENABLED', 34338);
      c.define('VERTEX_ATTRIB_ARRAY_NORMALIZED', 34922);
      c.define('VERTEX_ATTRIB_ARRAY_POINTER', 34373);
      c.define('VERTEX_ATTRIB_ARRAY_SIZE', 34339);
      c.define('VERTEX_ATTRIB_ARRAY_STRIDE', 34340);
      c.define('VERTEX_ATTRIB_ARRAY_TYPE', 34341);
      c.define('VERTEX_SHADER', 35633);
      c.define('VIEWPORT', 2978);
      c.define('ZERO', 0);

      /// GLBoost original constants
      c.define('POSITION', void 0, 'position');
      c.define('COLOR', void 0, 'color');
      c.define('NORMAL', void 0, 'normal');
      c.define('TEXCOORD', void 0, 'texcoord');
      c.define('TANGENT', void 0, 'tangent');
      c.define('JOINT', void 0, 'joint');
      c.define('WEIGHT', void 0, 'weight');
      c.define('BLENDTARGET1', void 0, 'shapetarget_1');
      c.define('BLENDTARGET2', void 0, 'shapetarget_2');
      c.define('BLENDTARGET3', void 0, 'shapetarget_3');
      c.define('BLENDTARGET4', void 0, 'shapetarget_4');
      c.define('BLENDTARGET5', void 0, 'shapetarget_5');
      c.define('BLENDTARGET6', void 0, 'shapetarget_6');
      c.define('BLENDTARGET7', void 0, 'shapetarget_7');
      c.define('BLENDTARGET8', void 0, 'shapetarget_8');
      c.define('BLENDTARGET9', void 0, 'shapetarget_9');
      c.define('BLENDTARGET10', void 0, 'shapetarget_10');
      c.define('INTERPOLATION_LINEAR');
      c.define('INTERPOLATION_STEP');
      c.define('INTERPOLATION_CUBICSPLINE');
      c.define('RADIAN', void 0, 'radian');
      c.define('DEGREE', void 0, 'degree');

      c.define('TEXTURE_PURPOSE_DIFFUSE', void 0, 'diffuse');
      c.define('TEXTURE_PURPOSE_NORMAL', void 0, 'normal');
      c.define('QUERY_TYPE_INSTANCE_NAME');
      c.define('QUERY_TYPE_USER_FLAVOR_NAME');
      c.define('QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR');
      c.define('QUERY_FORMAT_STRING');
      c.define('QUERY_FORMAT_REGEXP');

      c.define('WORLD_MATRIX');

      c.define('SHADER_PARAMETER_TYPE_OBJECT');
      c.define('SHADER_PARAMETER_TYPE_MATERIAL');
      c.define('SHADER_PARAMETER_TYPE_LIGHT');
      c.define('SHADER_PARAMETER_TYPE_JOINTSET');
      c.define('SHADER_PARAMETER_TYPE_MORPH');
      
      c.define('GLOBAL_STATES_USAGE_DO_NOTHING');
      c.define('GLOBAL_STATES_USAGE_IGNORE');
      c.define('GLOBAL_STATES_USAGE_INCLUSIVE');
      c.define('GLOBAL_STATES_USAGE_EXCLUSIVE');

      c.define('LOG_GENERAL');
      c.define('LOG_SHADER_CODE');
      c.define('LOG_GLBOOST_OBJECT_LIFECYCLE');
      c.define('LOG_GL_RESOURCE_LIFECYCLE');
      c.define('LOG_GL_ERROR');
      c.define('LOG_OMISSION_PROCESSING');

    })();


    GLBoost.isThisGLVersion_2 = function(gl) {
      if (typeof WebGL2RenderingContext === 'undefined') {
        return false;
      }
      return gl instanceof WebGL2RenderingContext;
    };

    GLBoost.getNameOfGLBoostConstant = function(glboostConstant) {
      return GLBoost.GLBOOST_CONSTANT_NAMES[glboostConstant];
    };
    GLBoost.getValueOfGLBoostConstant = function(glboostConstant) {
      return GLBoost.GLBOOST_CONSTANT_VALUES[glboostConstant];
    };

  })(global);

  var GLBoost$1 = global.GLBoost;

  class MiscUtil {

    constructor() {

    }

    static isDefinedAndTrue(value) {
      return !!(typeof value !== 'undefined' && value);
    }

    static getTheValueOrAlternative(value, alternativeIfTheValueIsNullOrUndefined) {
      if (typeof value !== 'undefined' && value != null) {
        return value;
      } else {
        return alternativeIfTheValueIsNullOrUndefined;
      }
    }

    static isJavaScriptObjectType(type, obj) {
      var clas = Object.prototype.toString.call(obj).slice(8, -1);
      return obj !== undefined && obj !== null && clas === type;
    }
    
    static consoleLog(logType, text) {
      if (GLBoost$1.VALUE_CONSOLE_OUT_FOR_DEBUGGING && GLBoost$1.valueOfGLBoostConstants[logType]) {
        console.log(text);
      }
    }
  }

  GLBoost$1['MiscUtil'] = MiscUtil;

  class GLContextImpl {

    constructor(canvas, parent, initParameter) {
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

    init(glVersionString, ContextType, initParameter = { antialias: true, premultipliedAlpha: true }, gl) {

      if (gl) {
        this._gl = gl;
      } else {

        let gl = this._canvas.getContext(glVersionString, initParameter);

        if (!gl) {
          gl = this._canvas.getContext('experimental-' + glVersionString);
          if (!gl) {
            throw new Error("This platform doesn't support WebGL.");
          }
        }

        if (!gl instanceof ContextType) {
          throw new Error("Unexpected rendering context.");
        }

        this._gl = gl;
      }
    }

    get gl() {
      return this._gl;
    }

    set gl(gl) {
      this._gl = gl;
    }

    get canvas() {
      return this._canvas;
    }

  }

  class GLContextWebGL1Impl extends GLContextImpl {

    constructor(canvas, parent, initParameter, gl) {
      super(canvas, parent, initParameter);

      if (gl) {
        super.init('webgl', null, initParameter, gl);
      } else {
        super.init('webgl', WebGLRenderingContext, initParameter, gl);
      }
    }

  }

  class GLContextWebGL2Impl extends GLContextImpl {

    constructor(canvas, parent, initParameter, gl) {
      super(canvas, parent, initParameter);

      super.init('webgl2', WebGL2RenderingContext, initParameter, gl);

    }

  }

  class GLExtensionsManager {

    constructor(glContext) {
      var gl = glContext.gl;

      if (GLBoost$1.VALUE_WEBGL_ONE_USE_EXTENSIONS) {
        this._extVAO = gl.getExtension('OES_vertex_array_object');

        this._extDBs = gl.getExtension('WEBGL_draw_buffers');

        this._extTFA = gl.getExtension('EXT_texture_filter_anisotropic') ||
          gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') ||
          gl.getExtension('MOZ_EXT_texture_filter_anisotropic');

        this._extEIUI = gl.getExtension('OES_element_index_uint');

        this._extDepthTex = gl.getExtension('WEBGL_depth_texture');

        this._extStdDerivatives = gl.getExtension("OES_standard_derivatives");

        this._extTFL = gl.getExtension("OES_texture_float_linear");
      }

      GLExtensionsManager._instances[glContext.belongingCanvasId] = this;

      this._glContext = glContext;
    }
    static getInstance(glContext) {
      if (GLExtensionsManager._instances[glContext.belongingCanvasId]) {
        return GLExtensionsManager._instances[glContext.belongingCanvasId];
      }
      return new GLExtensionsManager(glContext);
    }

    get extVAO() {
      return this._extVAO;
    }

    get extDBs() {
      return this._extDBs;
    }

    get extTFA() {
      return this._extTFA;
    }

    get extDepthTex() {
      return this._extDepthTex;
    }

    createVertexArray(gl) {
      if (GLBoost$1.isThisGLVersion_2(gl)) {
        return gl.createVertexArray();
      } else if (this._extVAO) {
        return this._extVAO.createVertexArrayOES();
      } else {
        return null;
      }

      this._glContext.checkGLError();
    }

    bindVertexArray(gl, vao) {
      if (GLBoost$1.isThisGLVersion_2(gl)) {
        gl.bindVertexArray(vao);
        return true;
      } else if (this._extVAO) {
        this._extVAO.bindVertexArrayOES(vao);
        return true;
      } else {
        return false;
      }

      this._glContext.checkGLError();
    }

    drawBuffers(gl, buffers) {
      let buffer = buffers;
      if (GLBoost$1.isThisGLVersion_2(gl)) {
        gl.drawBuffers(buffers);
        buffer = buffer[0];
      } else if (this._extDBs) {
        this.extDBs.drawBuffersWEBGL(buffers);
        buffer = buffer[0];
      }

      if (buffer === gl.NONE) {
        gl.colorMask(false, false, false, false);
      } else {
        gl.colorMask(true, true, true, true);
      }

      this._glContext.checkGLError();
    }

    readBuffer(gl, buffers) {
      let buffer = buffers;
      if (GLBoost$1.isThisGLVersion_2(gl)) {
        buffer = buffer[0];
      } else if (this._extDBs) {
        buffer = buffer[0];
      }

      gl.readBuffer(buffer);

      this._glContext.checkGLError();
    }


    colorAttachiment(gl, index) {
      return this._extDBs ?
        this._extDBs[`COLOR_ATTACHMENT${index}_WEBGL`] :
        gl[`COLOR_ATTACHMENT${index}`];
    }

    elementIndexBitSizeGLConstant(gl) {
      if (GLBoost$1.isThisGLVersion_2(gl) || this._extEIUI) {
        return gl.UNSIGNED_INT;
      } else {
        return gl.UNSIGNED_SHORT;
      }
    }

    elementIndexByteSizeNumber(gl) {
      if (GLBoost$1.isThisGLVersion_2(gl) || this._extEIUI) {
        return 4;
      } else {
        return 2;
      }
    }

    createUintArrayForElementIndex(gl, array) {
      if (GLBoost$1.isThisGLVersion_2(gl) || this._extEIUI) {
        return new Uint32Array(array);
      } else {
        return new Uint16Array(array);
      }
    }

  }
  GLExtensionsManager._instances = new Object();

  GLBoost$1['GLExtensionsManager'] = GLExtensionsManager;

  let singleton = Symbol();

  class L_GLBoostMonitor {
    constructor(enforcer) {
      if (enforcer !== L_GLBoostMonitor._singletonEnforcer || !(this instanceof L_GLBoostMonitor)) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }

      this._glBoostObjects = {};
      this._glResources = [];
      L_GLBoostMonitor._singletonEnforcer = Symbol();
    }

    static getInstance() {
      if (!this[singleton]) {
        this[singleton] = new L_GLBoostMonitor(L_GLBoostMonitor._singletonEnforcer);
      }
      return this[singleton];
    }

    registerGLBoostObject(glBoostObject) {
      this._glBoostObjects[glBoostObject.toString()] = glBoostObject;
      MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, 'GLBoost Resource: ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ') was created.');
    }

    deregisterGLBoostObject(glBoostObject) {
      delete this._glBoostObjects[glBoostObject.toString()];
      MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, 'GLBoost Resource: ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ') was ready for discard.');
    }


    getGLBoostObjects(partOfGlBoostObjectClassName) {
      let glBoostObjects = [];
      for (let instanceName in this._glBoostObjects) {
        if (instanceName.indexOf(partOfGlBoostObjectClassName)>0) {
          glBoostObjects.push(this._glBoostObjects[instanceName]);
        }
      }

      return glBoostObjects;
    }

    getGLBoostObjectWhichHasThisObjectId(objectId) {
      for (let instanceName in this._glBoostObjects) {
        if (this._glBoostObjects[instanceName].objectIndex === objectId) {
          return this._glBoostObjects[instanceName];
        }
      }

      return null;
    }

    printGLBoostObjects() {
      var objects = this._glBoostObjects;
      MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Object Lists [begin] ==========');
      for (var key in objects) {
        if (objects.hasOwnProperty(key)) {
          MiscUtil.consoleLog(key + '(' + objects[key].belongingCanvasId + ')');
        }
      }
      MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Object Lists [end] ==========');
    }

    printGLBoostObjectsOrderByName() {
      var objects = this._glBoostObjects;
      var objectArray = [];
      for (var key in objects) {
        if (objects.hasOwnProperty(key)) {
          objectArray.push(objects[key]);
        }
      }
      objectArray.sort(
        function(a,b){
          if( a < b ) return -1;
          if( a > b ) return 1;
          return 0;
        }
      );
      MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Object Lists [begin] ==========');
      objectArray.forEach((object)=>{
        MiscUtil.consoleLog(object.toString() + ' (' + object.belongingCanvasId + ')');
      });
      MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Object Lists [end] ==========');
    }

    registerWebGLResource(glBoostObject, glResource) {
      var glResourceName = glResource.constructor.name;
      this._glResources.push([glBoostObject, glResource]);
      MiscUtil.consoleLog(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE, 'WebGL Resource: ' + glResourceName + ' was created by ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ').');
    }

    deregisterWebGLResource(glBoostObject, glResource) {
      var glResourceName = glResource.constructor.name;
      this._glResources.forEach((glResource, i)=>{
        if (glResource[0] === glBoostObject && glResource[1].constructor.name === glResourceName) {
          this._glResources.splice(i,1);
        }
      });
      MiscUtil.consoleLog(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE, 'WebGL Resource: ' + glResourceName + ' was deleted by ' + glBoostObject.toString() + ' (' + glBoostObject.belongingCanvasId + ').');
    }

    getWebGLResources(webglResourceName) {
      let webglResources = this._glResources.filter((glResourceArray)=>{
        if (glResourceArray[1].constructor.name === webglResourceName) {
          return true;
        } else {
          return false;
        }
      });//.map((glReourceArray)=>{return glReourceArray[1]});

      return webglResources;
    }

    printWebGLResources() {
      var glResources = this._glResources;
      glResources.sort(
        function(a,b){
          if( a[0] < b[0] ) return -1;
          if( a[0] > b[0] ) return 1;
          return 0;
        }
      );
      MiscUtil.consoleLog(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE, '========== WebGL Resource Lists [begin] ==========');
      glResources.forEach((glResource, i)=>{
        MiscUtil.consoleLog(i+1 +': ' + glResource[0].toString() + ' (' + glResource[0].belongingCanvasId + ') created ' + glResource[1]);
      });
      MiscUtil.consoleLog(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE, '========== WebGL Resource Lists [end] ==========');
    }

    printHierarchy() {
      var glBoostObjects = this._glBoostObjects;
      var scenes = [];
      for (var key in glBoostObjects) {
        if (glBoostObjects.hasOwnProperty(key)) {
          if ( key.match(/Scene/)) {
            scenes.push(glBoostObjects[key]);
          }
        }
      }

      function putWhiteSpace(level) {
        var str = '';
        for(var i=0; i<level; i++)  {
          str += '  ';
        }
        return str;
      }

      MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Objects Hierarchy of Scenes [begin] ==========');
      scenes.forEach((scene)=> {
        var outputText = (function searchRecursively(element, level) {
          var outputText = '';
          outputText += putWhiteSpace(level) + element.toString() + ' (' + element.belongingCanvasId + ')\n';
          if (typeof element.getChildren === 'undefined') {
            return outputText;
          }
          var children = element.getChildren();
          children.forEach((child)=>{
            outputText += searchRecursively(child, level+1);
          });
          return outputText += '\n';
        })(scene, 0);

        outputText = outputText.replace( /\n+/g , '\n');
        MiscUtil.consoleLog(outputText);
      });
      MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, '========== GLBoost Objects Hierarchy of Scenes [end] ==========');

    }

  }

  GLBoost$1['L_GLBoostMonitor'] = L_GLBoostMonitor;

  class GLContext {

    constructor(canvas, initParameter, gl, width, height) {

      if (typeof gl !== 'undefined' && gl !== null) {
        this.impl = new GLContextWebGL1Impl(canvas, initParameter, this, gl);
        this._canvasWidth = width;
        this._canvasHeight = height;
        GLContext._instances['nocanvas'] = this;
      } else {
        if (GLContext._instances[canvas.id] instanceof GLContext) {
          return GLContext._instances[canvas.id];
        }

        if (GLBoost$1.VALUE_TARGET_WEBGL_VERSION === 1) {
          this.impl = new GLContextWebGL1Impl(canvas, this, initParameter);
        } else if (GLBoost$1.VALUE_TARGET_WEBGL_VERSION === 2) {
          this.impl = new GLContextWebGL2Impl(canvas, this, initParameter);
        }

        GLContext._instances[canvas.id] = this;
        this._canvasWidth = canvas.width;
        this._canvasHeight = canvas.height;
      }

      this._monitor = L_GLBoostMonitor.getInstance();
      this._glslProgramsLatestUsageCount = 0;
    }

    static getInstance(canvas, initParameter, gl, width, height) {
      if (typeof canvas === 'string') {
        canvas = window.document.querySelector(canvas);
      }
      return new GLContext(canvas, initParameter, gl, width, height);
    }

    get gl() {
      return this.impl.gl;
    }

    set gl(gl) {
      this.impl.gl = gl;
    }

    get belongingCanvasId() {
      if (this.impl.canvas) {
        return this.impl.canvas.id;
      } else {
        return 'nocanvas';
      }
    }

    get canvas() {
      return this.impl.canvas;
    }

    checkGLError() {
      if (GLBoost$1.VALUE_CONSOLE_OUT_FOR_DEBUGGING === false) {
        return;
      }
      if (GLBoost$1.valueOfGLBoostConstants[GLBoost$1.LOG_GL_ERROR] === false) {
        return;
      }

      let gl = this.impl.gl;
      let errorCode = gl.getError();
      if (errorCode !== 0) {
        let errorTypes = ['INVALID_ENUM', 'INVALID_VALUE', 'INVALID_OPERATION', 'INVALID_FRAMEBUFFER_OPERATION',
          'OUT_OF_MEMORY', 'CONTEXT_LOST_WEBGL'];
        let errorMessages = [
          'An unacceptable value has been specified for an enumerated argument. The command is ignored and the error flag is set.',
          'A numeric argument is out of range. The command is ignored and the error flag is set.',
          'The specified command is not allowed for the current state. The command is ignored and the error flag is set.',
          'The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.',
          'Not enough memory is left to execute the command.',
          'If the WebGL context is lost, this error is returned on the first call to getError. Afterwards and until the context has been restored, it returns gl.NO_ERROR.'
        ];

        errorTypes.forEach((errorType, i)=>{
          if (gl[errorType] === errorCode) {
            MiscUtil.consoleLog(GLBoost$1.LOG_GL_ERROR, 'WebGL Error: gl.' + errorCode + '\n' + 'Meaning:' + errorMessages[i]);
          }
        });
      }
    }

    createVertexArray(glBoostObject) {
      var gl = this.gl;
      var glem = GLExtensionsManager.getInstance(this);
      var glResource = glem.createVertexArray(gl);
      if (glResource) {
        this._monitor.registerWebGLResource(glBoostObject, glResource);
      }

      this.checkGLError();

      return glResource;
    }

    createBuffer(glBoostObject) {
      var glResource = this.gl.createBuffer();
      this._monitor.registerWebGLResource(glBoostObject, glResource);

      this.checkGLError();

      return glResource;
    }

    createFramebuffer(glBoostObject) {
      var glResource = this.gl.createFramebuffer();
      this._monitor.registerWebGLResource(glBoostObject, glResource);

      this.checkGLError();

      return glResource;
    }

    deleteFramebuffer(glBoostObject, frameBuffer) {
      this._monitor.deregisterWebGLResource(glBoostObject, frameBuffer);
      this.gl.deleteFramebuffer(frameBuffer);

      this.checkGLError();

      frameBuffer = null;
    }

    createRenderbuffer(glBoostObject) {
      var glResource = this.gl.createRenderbuffer();
      this._monitor.registerWebGLResource(glBoostObject, glResource);

      this.checkGLError();

      return glResource;
    }

    deleteRenderbuffer(glBoostObject, renderBuffer) {
      this._monitor.deregisterWebGLResource(glBoostObject, renderBuffer);
      this.gl.deleteRenderbuffer(renderBuffer);

      this.checkGLError();

      renderBuffer = null;
    }

    createShader(glBoostObject, shaderType) {
      var glResource = this.gl.createShader(shaderType);
      this._monitor.registerWebGLResource(glBoostObject, glResource);

      this.checkGLError();

      return glResource;
    }

    deleteShader(glBoostObject, shader) {
      this._monitor.deregisterWebGLResource(glBoostObject, shader);
      this.gl.deleteShader(shader);

      this.checkGLError();

      shader = null;
    }

    createProgram(glBoostObject) {
      var glResource = this.gl.createProgram();
      this._monitor.registerWebGLResource(glBoostObject, glResource);

      this.checkGLError();

      return glResource;
    }

    useProgram(program) {
  //    if (!program) {
        this.gl.useProgram(program);
        this._currentProgramInuse = program;

        this.checkGLError();
        this._glslProgramsLatestUsageCount++;
  /*
        return;
      }

      if (program.glslProgramsSelfUsageCount < this.glslProgramsLatestUsageCount) {
        this.gl.useProgram(program);
        this.checkGLError();
        this._glslProgramsLatestUsageCount++;
        program.glslProgramsSelfUsageCount = this._glslProgramsLatestUsageCount;

        return;
      }

      MiscUtil.consoleLog(GLBoost.LOG_OMISSION_PROCESSING,
        'LOG_OMISSION_PROCESSING: gl.useProgram call has been omitted since this glsl program is already in use.');
        */
    }

    deleteProgram(glBoostObject, program) {
      this._monitor.deregisterWebGLResource(glBoostObject, program);
      this.gl.deleteProgram(program);

      this.checkGLError();
    }

    deleteAllPrograms() {
      let programObjs = this._monitor.getWebGLResources('WebGLProgram');
      for (let programObj of programObjs) {
        this.deleteProgram(programObj[0], programObj[1]);
      }
    }

    getUniformLocation(glslProgram, uniformVariableName) {
      let uniformLocation = this.gl.getUniformLocation(glslProgram, uniformVariableName);
      this.checkGLError();
      if (uniformLocation) {
        uniformLocation.glslProgram = glslProgram;
        uniformLocation.glslProgramUsageCountWhenLastSet = -1;
      }

      return uniformLocation;
    }

    _setUniformValues(uniformFuncStr, args, forceUpdate) {
      let uniformLocation = args[0];
      if (!uniformLocation) {
        MiscUtil.consoleLog(GLBoost$1.LOG_OMISSION_PROCESSING,
          'LOG_OMISSION_PROCESSING: gl.uniformXXX call has been omitted since the uniformLocation is falsy (undefined or something)');

        return;
      }

  //    this.gl[uniformFuncStr].apply(this.gl, args);
  /*
      if (uniformLocation.glslProgram.glslProgramsSelfUsageCount < this._glslProgramsLatestUsageCount) {
        MiscUtil.consoleLog(GLBoost.LOG_OMISSION_PROCESSING,
          'LOG_OMISSION_PROCESSING: gl.uniformXXX call has been omitted since the uniformLocation.glslProgram is not in use.');

        return;
      }
  */
      if (this._currentProgramInuse.createdAt !== uniformLocation.glslProgram.createdAt) {
  //       console.error('missmatch!')
        return;
      }

      if (uniformLocation.glslProgramUsageCountWhenLastSet < this._glslProgramsLatestUsageCount) {
        // Since I have never sent a uniform value to glslProgram which is currently in use, update it.
        this.gl[uniformFuncStr].apply(this.gl, args);
        this.checkGLError();

        return;
      }

      if (forceUpdate) {
        this.gl[uniformFuncStr].apply(this.gl, args);
        this.checkGLError();
      } else {
        MiscUtil.consoleLog(GLBoost$1.LOG_OMISSION_PROCESSING,
          'LOG_OMISSION_PROCESSING: gl.uniformXXX call has been omitted since the uniformLocation.glslProgram is not in use.');
      }
    }

    // Set forceUpdate to true if there is no way to check whether the values (x, y, z, w) change from the previous states or not.
    uniform4f(uniformLocation, x, y, z, w, forceUpdate) {
      this._setUniformValues('uniform4f', [uniformLocation, x, y, z, w], forceUpdate);
    }

    // Set forceUpdate to true if there is no way to check whether the values (x, y, z) change from the previous states or not.
    uniform3f(uniformLocation, x, y, z, forceUpdate) {
      this._setUniformValues('uniform3f', [uniformLocation, x, y, z], forceUpdate);
    }

    // Set forceUpdate to true if there is no way to check whether the values (x, y) change from the previous states or not.
    uniform2f(uniformLocation, x, y, forceUpdate) {
      this._setUniformValues('uniform2f', [uniformLocation, x, y], forceUpdate);
    }

    // Set forceUpdate to true if there is no way to check whether the value x changes from the previous state or not.
    uniform1f(uniformLocation, x, forceUpdate) {
      this._setUniformValues('uniform1f', [uniformLocation, x], forceUpdate);
    }

    // Set forceUpdate to true if there is no way to check whether the values (x, y, z, w) change from the previous states or not.
    uniform4i(uniformLocation, x, y, z, w, forceUpdate) {
      this._setUniformValues('uniform4i', [uniformLocation, x, y, z, w], forceUpdate);
    }

    // Set forceUpdate to true if there is no way to check whether the values (x, y, z) change from the previous states or not.
    uniform3i(uniformLocation, x, y, z, forceUpdate) {
      this._setUniformValues('uniform3i', [uniformLocation, x, y, z], forceUpdate);
    }

    // Set forceUpdate to true if there is no way to check whether the values (x, y) change from the previous states or not.
    uniform2i(uniformLocation, x, y, forceUpdate) {
      this._setUniformValues('uniform2i', [uniformLocation, x, y], forceUpdate);
    }

    // Set forceUpdate to true if there is no way to check whether the value x changes from the previous state or not.
    uniform1i(uniformLocation, x, forceUpdate) {
      this._setUniformValues('uniform1i', [uniformLocation, x], forceUpdate);
    }


    createTexture(glBoostObject) {
      var glResource = this.gl.createTexture();
      this._monitor.registerWebGLResource(glBoostObject, glResource);

      this.checkGLError();

      return glResource;
    }

    deleteTexture(glBoostObject, texture) {
      this._monitor.deregisterWebGLResource(glBoostObject, texture);
      this.gl.deleteTexture(texture);

      this.checkGLError();

      texture = null;
    }

    get canvasWidth() {
      return this._canvasWidth;
    }

    set canvasWidth(width) {
      if (this.impl.canvas) {
        this.impl.canvas.width = width;
      }
      this._canvasWidth = width;
    }

    get canvasHeight() {
      return this._canvasHeight;
    }

    set canvasHeight(height) {
      if (this.impl.canvas) {
        this.impl.canvas.height = height;
      }
      this._canvasHeight = height;
    }

    get glslProgramsLatestUsageCount() {
      return this._glslProgramsLatestUsageCount;
    }

  }
  GLContext._instances = new Object();

  /*       */

  class GLBoostObject {
                                       
                          
                         
                                      
                         
                            
                              
                               
                        

    constructor(glBoostContext                  , toRegister         = true) {
      if (this.constructor === GLBoostObject) {
        throw new TypeError('Cannot construct GLBoostObject instances directly.');
      }
      this._setName();
      this._glBoostContext = glBoostContext;
      this._glContext = glBoostContext.glContext;
      this._glBoostMonitor = glBoostContext._glBoostMonitor;
      this._toRegister = toRegister;
      if (this._toRegister) {
        this._glBoostMonitor.registerGLBoostObject(this);
      }
      this._userFlavorName = '';
      this._readyForDiscard = false;

      // generate the simple class-specific number.
      this._classUniqueNumber = 0;
      for(let i=0; i<this.className.length; i++) {
        this._classUniqueNumber += this.className.charCodeAt(i);
      }

      this.setupExistIndexAndArray();
    }

    setupExistIndexAndArray() {
      this._objectIndex = -1;
      this._materialIndex = -1;
      this._lightIndex = -1;
      this._jointSetIndex = -1;
      this._morphIndex = -1;

      const seekSpaceOfArrayAndSetIndexThere = (typeName)=>{
        let array = GLBoostObject['_' + typeName + 'ExistArray'];
        for (let i=0; i<array.length; i++) {
          if (array[i] === void 0) {
            this['_' + typeName + 'Index'] = i;
            array[i] = true;
            return;
          }
        }
        this['_' + typeName + 'Index'] = array.length;
        array[array.length] = true;
      };

      if (this.className.indexOf('Mesh') !== -1) {
        seekSpaceOfArrayAndSetIndexThere('object');
        if (this.className.indexOf('SkeletalMesh') !== -1) {
          seekSpaceOfArrayAndSetIndexThere('jointSet');
        }
      } else if (this.className.indexOf('Light') !== -1) {
        seekSpaceOfArrayAndSetIndexThere('light');
      } else if (this.className.indexOf('Material') !== -1) {
        seekSpaceOfArrayAndSetIndexThere('material');
      }

    }

    tearDownExistIndexAndArray() {
      const deleteIndex = (typeName)=>{
        let array = GLBoostObject['_' + typeName + 'ExistArray'];
        delete array[this['_' + typeName + 'Index']];
        this['_' + typeName + 'Index'] = -1;
      };

      if (this.className.indexOf('Mesh') !== -1) {
        deleteIndex('object');
        if (this.className.indexOf('SkeltalMesh') !== -1) {
          deleteIndex('jointSet');
        }
      } else if (this.className.indexOf('Light') !== -1) {
        deleteIndex('light');
      } else if (this.className.indexOf('Material') !== -1) {
        deleteIndex('material');
      }
    }

    _setName() {
      if (typeof GLBoostObject.classInfoDic[this.constructor.name] === 'undefined') {
        GLBoostObject.classInfoDic[this.constructor.name] = {};
      }
      GLBoostObject.classInfoDic[this.constructor.name]._instanceCount = (typeof GLBoostObject.classInfoDic[this.constructor.name]._instanceCount === 'undefined') ? 0 : (GLBoostObject.classInfoDic[this.constructor.name]._instanceCount + 1);
      this._instanceName = this.constructor.name + '_' + GLBoostObject.classInfoDic[this.constructor.name]._instanceCount;
    }

    /**
     * [en] Return instance name.
     * [ja] インスタンス名を返します。
     * @returns {string} [en] the instance name. [ja] インスタンス名
     */
    toString()        {
      return this._instanceName;
    }

    /**
     * Return the simple class-specific number.
     */
    get classUniqueNumber()        {
      return this._classUniqueNumber;
    }

    get className()        {
      return this.constructor.name;
    }

    get instanceName()        {
      return this._instanceName;
    }

    get belongingCanvasId() {
      return this._glBoostContext.belongingCanvasId;
    }

    set userFlavorName(name       ) {
      this._userFlavorName = name;
    }

    get userFlavorName()        {
      return this._userFlavorName;
    }

    get instanceNameWithUserFlavor()        {
      return this._instanceName + '__' + this._userFlavorName;
    }

    readyForDiscard() {
      if (this._toRegister) {
        this._glBoostMonitor.deregisterGLBoostObject(this);
      }

      this.tearDownExistIndexAndArray();

      this._readyForDiscard = true;
    }

    get isReadyForDiscard()         {
      return this._readyForDiscard;
    }

    _copy(instance) {
      instance._userFlavorName = this._userFlavorName;
    }

    get objectIndex()        {
      return this._objectIndex;
    }
  }

  GLBoostObject.classInfoDic = {};
  GLBoostObject._objectExistArray = [];
  GLBoostObject._materialExistArray = [];
  GLBoostObject._lightExistArray = [];
  GLBoostObject._jointSetExistArray = [];
  GLBoostObject._morphExistArray = [];

  GLBoost$1['GLBoostObject'] = GLBoostObject;

  /*       */

                                                                             
                                                                       

  class Vector2 {
                  

    constructor(x                  , y        ) {
      if (ArrayBuffer.isView(x)) {
        this.v = ((x    )           );
        return;
      } else {
        this.v = new Float32Array(2);
      }

      this.x = ((x    )       );
      this.y = ((y    )       );
    }

    clone() {
      return new Vector2(this.x, this.y);
    }

    multiply(val       ) {
      this.x *= val;
      this.y *= val;

      return this;
    }

    static multiply(vec2        , val       ) {
      return new Vector2(vec2.x * val, vec2.y * val);
    }

    get x() {
      return this.v[0];
    }

    set x(x       ) {
      this.v[0] = x;
    }

    get y() {
      return this.v[1];
    }

    set y(y       ) {
      this.v[1] = y;
    }

    get raw() {
      return this.v;
    }
  }

  GLBoost$1["Vector2"] = Vector2;

  /*       */

                                                                             
                                                                       

  class Vector4 {
                  

    constructor(x                  , y        , z        , w        ) {
      if (ArrayBuffer.isView(x)) {
        this.v = ((x    )           );
        return;
      } else {
        this.v = new Float32Array(4);
      }

      this.x = ((x    )       );
      this.y = ((y    )       );
      this.z = ((z    )       );
      this.w = ((w    )       );
    }

    isEqual(vec        )          {
      if (this.x === vec.x && this.y === vec.y && this.z === vec.z && this.w === vec.w) {
        return true;
      } else {
        return false;
      }
    }

    clone() {
      return new Vector4(this.x, this.y, this.z, this.w);
    }

    /**
     * Zero Vector
     */
    static zero() {
      return new Vector4(0, 0, 0, 1);
    }

    length() {
      return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z + this.w*this.w);
    }

    normalize() {
      var length = this.length();
      this.divide(length);

      return this;
    }

    static normalize(vec4        ) {
      var length = vec4.length();
      var newVec = new Vector4(vec4.x, vec4.y, vec4.z, vec4.w);
      newVec.divide(length);

      return newVec;
    }
    

    toVector3() {
      return new Vector3(this.x, this.y, this.z);
    }

    /**
     * add value
     */
    add(v        ) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      this.w += v.w;
      
      return this;
    }

    /**
     * add value（static version）
     */
    static add(lv        , rv        ) {
      return new Vector4(lv.x + rv.x, lv.y + rv.y, lv.z + rv.z, lv.z + rv.z);
    }

    /**
     * add value except w component
     */
    addWithOutW(v                ) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      
      return this;
    }

    subtract(v        ) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      this.w -= v.w;

      return this;
    }

    static subtract(lv        , rv        ) {
      return new Vector4(lv.x - rv.x, lv.y - rv.y, lv.z - rv.z, lv.w  - rv.w);
    }
    /**
     * add value except w component（static version）
     */
    static addWithOutW(lv        , rv        ) {
      return new Vector4(lv.x + rv.x, lv.y + rv.y, lv.z + rv.z, lv.z);
    }

    multiply(val       ) {
      this.x *= val;
      this.y *= val;
      this.z *= val;
      this.w *= val;
      
      return this;
    }

    multiplyVector(vec        ) {
      this.x *= vec.x;
      this.y *= vec.y;
      this.z *= vec.z;
      this.w *= vec.w;
      
      return this;
    }

    static multiply(vec4        , val       ) {
      return new Vector4(vec4.x * val, vec4.y * val, vec4.z * val, vec4.w * val);
    }

    static multiplyVector(vec4        , vec        ) {
      return new Vector4(vec4.x * vec.x, vec4.y * vec.y, vec4.z * vec.z, vec4.w * vec.w);
    }


    divide(val       ) {
      if (val !== 0) {
        this.x /= val;
        this.y /= val;
        this.z /= val;
        this.w /= val;
      } else {
        console.warn("0 division occured!");
        this.x = Infinity;
        this.y = Infinity;
        this.z = Infinity;
        this.w = Infinity;
      }
      return this;
    }

    static divide(vec4        , val       ) {
      if (val !== 0) {
        return new Vector4(vec4.x / val, vec4.y / val, vec4.z / val, vec4.w / val);
      } else {
        console.warn("0 division occured!");
        return new Vector4(Inifinity, Inifinity, Inifinity, Inifinity);
      }
    }

    divideVector(vec4        ) {
      this.x /= vec4.x;
      this.y /= vec4.y;
      this.z /= vec4.z;
      this.w /= vec4.w;

      return this;
    }

    static divideVector(lvec4        , rvec4        ) {
      return new Vector4(lvec4.x / rvec4.x, lvec4.y / rvec4.y, lvec4.z / rvec4.z, lvec4.w / rvec4.w);
    }

    toString() {
      return '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')';
    }

    get x() {
      return this.v[0];
    }

    set x(x       ) {
      this.v[0] = x;
    }

    get y() {
      return this.v[1];
    }

    set y(y       ) {
      this.v[1] = y;
    }

    get z() {
      return this.v[2];
    }

    set z(z       ) {
      this.v[2] = z;
    }

    get w() {
      return this.v[3];
    }

    set w(w       ) {
      this.v[3] = w;
    }

    get raw() {
      return this.v;
    }
  }

  GLBoost$1["Vector4"] = Vector4;

  /*       */

                                                                             
                                                                       

  class Vector3 {
                  

    constructor(x                  , y        , z        ) {
      if (ArrayBuffer.isView(x)) {
        this.v = ((x    )           );
        return;
      } else {
        this.v = new Float32Array(3);
      }

      this.x = ((x    )       );
      this.y = ((y    )       );
      this.z = ((z    )       );
    }

    isEqual(vec        ) {
      if (this.x === vec.x && this.y === vec.y && this.z === vec.z) {
        return true;
      } else {
        return false;
      }
    }

    /**
     * Zero Vector
     */
    static zero() {
      return new Vector3(0, 0, 0);
    }



    clone() {
      return new Vector3(this.x, this.y, this.z);
    }

    length() {
      return Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z);
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
    lengthSquared() {
      return this.x*this.x + this.y*this.y + this.z*this.z;
    }

    /**
     * 長さの2乗（static版）
     */
    static lengthSquared(vec3        ) {
      return vec3.x*vec3.x + vec3.y*vec3.y + vec3.z*vec3.z;
    }

    lengthTo(vec3        ) {
      var deltaX = vec3.x - this.x;
      var deltaY = vec3.y - this.y;
      var deltaZ = vec3.z - this.z;
      return Math.sqrt(deltaX*deltaX + deltaY*deltaY + deltaZ*deltaZ);
    }

    static lengthBtw(lhv        , rhv        ) {
      var deltaX = rhv.x - lhv.x;
      var deltaY = rhv.y - lhv.y;
      var deltaZ = rhv.z - lhv.z;
      return Math.sqrt(deltaX*deltaX + deltaY*deltaY + deltaZ*deltaZ);
    }

    /**
     * 内積
     */
    dotProduct(vec3        ) {
        return this.x * vec3.x + this.y * vec3.y + this.z * vec3.z;
    }

    /**
     * 内積（static版）
     */
    static dotProduct(lv        , rv        ) {
      return lv.x * rv.x + lv.y * rv.y + lv.z * rv.z;
    }

    /**
     * 外積
     */
    cross(v        ) {
      var x = this.y*v.z - this.z*v.y;
      var y = this.z*v.x - this.x*v.z;
      var z = this.x*v.y - this.y*v.x;

      this.x = x;
      this.y = y;
      this.z = z;

      return this;
    }

    /**
    * 外積(static版)
    */
    static cross(lv        , rv        ) {
      var x = lv.y*rv.z - lv.z*rv.y;
      var y = lv.z*rv.x - lv.x*rv.z;
      var z = lv.x*rv.y - lv.y*rv.x;

      return new Vector3(x, y, z);
    }

    /**
     * 正規化
     */
    normalize() {
      var length = this.length();
      this.divide(length);

      return this;
    }

    /**
     * 正規化（static版）
     */
    static normalize(vec3        ) {
      var length = vec3.length();
      var newVec = new Vector3(vec3.x, vec3.y, vec3.z);
      newVec.divide(length);

      return newVec;
    }

    /**
     * add value
     */
    add(v        ) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;

      return this;
    }

    /**
     * add value（static version）
     */
    static add(lv        , rv        ) {
      return new Vector3(lv.x + rv.x, lv.y + rv.y, lv.z + rv.z);
    }

    /**
     * 減算
     */
    subtract(v        ) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;

      return this;
    }

    /**
     * 減算（static版）
     */
    static subtract(lv        , rv        ) {
      return new Vector3(lv.x - rv.x, lv.y - rv.y, lv.z - rv.z);
    }

    /**
     * 除算
     */
    divide(val       ) {
      if (val !== 0) {
        this.x /= val;
        this.y /= val;
        this.z /= val;
      } else {
        console.warn("0 division occured!");
        this.x = Infinity;
        this.y = Infinity;
        this.z = Infinity;
      }

      return this;
    }

    /**
     * 除算（static版）
     */
    static divide(vec3        , val       ) {
      if (val !== 0) {
        return new Vector3(vec3.x / val, vec3.y / val, vec3.z / val);
      } else {
        console.warn("0 division occured!");
        return new Vector3(Inifinity, Inifinity, Inifinity);
      }
    }

    multiply(val       ) {
      this.x *= val;
      this.y *= val;
      this.z *= val;

      return this;
    }

    multiplyVector(vec        ) {
      this.x *= vec.x;
      this.y *= vec.y;
      this.z *= vec.z;

      return this;
    }

    static multiply(vec3        , val       ) {
      return new Vector3(vec3.x * val, vec3.y * val, vec3.z * val);
    }

    static multiplyVector(vec3        , vec        ) {
      return new Vector3(vec3.x * vec.x, vec3.y * vec.y, vec3.z * vec.z);
    }

    static angleOfVectors(lhv        , rhv        ) {
      let cos_sita = Vector3.dotProduct(lhv, rhv) / ( lhv.length() * rhv.length() );

      let sita = Math.acos(cos_sita);

      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        sita = MathUtil.radianToDegree(sita);
      }

      return sita;
    }

    divideVector(vec3        ) {
      this.x /= vec3.x;
      this.y /= vec3.y;
      this.z /= vec3.z;

      return this;
    }

    static divideVector(lvec3        , rvec3        ) {
      return new Vector3(lvec3.x / rvec3.x, lvec3.y / rvec3.y, lvec3.z / rvec3.z);
    }


    toVector4() {
      return new Vector4(this.x, this.y, this.z, 1.0);
    }

    toString() {
      return '(' + this.x + ', ' + this.y + ', ' + this.z +')';
    }

    get x() {
      return this.v[0];
    }

    set x(x       ) {
      this.v[0] = x;
    }

    get y() {
      return this.v[1];
    }

    set y(y       ) {
      this.v[1] = y;
    }

    get z() {
      return this.v[2];
    }

    set z(z       ) {
      this.v[2] = z;
    }

    get raw() {
      return this.v;
    }
  }

  GLBoost$1['Vector3'] = Vector3;

  class Matrix33 {

    constructor(m, isColumnMajor = false,
      shaderParameterType = void 0, shaderParameterEntityIndex = void 0, shaderParameterName = void 0
    ) {
      this.m = new Float32Array(9); // Data order is column major
      if (arguments.length >= 9) {
        if (isColumnMajor === true) {
          let m = arguments;
          this.setComponents(
            m[0], m[3], m[6],
            m[1], m[4], m[7],
            m[2], m[5], m[8]);
        } else {
          this.setComponents.apply(this, arguments);  // arguments[0-8] must be row major values if isColumnMajor is false
        }
      } else if (Array.isArray(m)) {
        if (isColumnMajor === true) {
          this.setComponents(
            m[0], m[3], m[6],
            m[1], m[4], m[7],
            m[2], m[5], m[8]);
        } else {
          this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
        }
      } else if (m instanceof Float32Array) {
        if (isColumnMajor === true) {
          this.setComponents(
            m[0], m[3], m[6],
            m[1], m[4], m[7],
            m[2], m[5], m[8]);
        } else {
          this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
        }
      } else {
        this.identity();
      }
    }

    setComponents(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
      this.m00 = m00; this.m01 = m01; this.m02 = m02;
      this.m10 = m10; this.m11 = m11; this.m12 = m12;
      this.m20 = m20; this.m21 = m21; this.m22 = m22;

      return this;
    }

    /**
     * 単位行列にする
     */
    identity() {
      this.setComponents(
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
      );
      return this;
    }

    /**
     * Make this identity matrix（static method version）
     */
    static identity() {
      return new Matrix33(
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
      );
    }

    clone() {
      return new Matrix33(
        this.m[0], this.m[3], this.m[6],
        this.m[1], this.m[4], this.m[7],
        this.m[2], this.m[5], this.m[8]
      );
    }

    /**
     * Create X oriented Rotation Matrix
     */
    rotateX(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return this.setComponents(
        1, 0, 0,
        0, cos, -sin,
        0, sin, cos
      );
    }
    /**
     * Create X oriented Rotation Matrix
     */
    static rotateX(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return new Matrix33(
        1, 0, 0,
        0, cos, -sin,
        0, sin, cos
      );
    }

    /**
     * Create Y oriented Rotation Matrix
     */
    rotateY(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      this.setComponents(
        cos, 0, sin,
        0, 1, 0,
        -sin, 0, cos
      );
      return this;
    }
    /**
     * Create Y oriented Rotation Matrix
     */
    static rotateY(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return new Matrix33(
        cos, 0, sin,
        0, 1, 0,
        -sin, 0, cos
      );
    }

    /**
     * Create Z oriented Rotation Matrix
     */
    rotateZ(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return this.setComponents(
        cos, -sin, 0,
        sin, cos, 0,
        0, 0, 1
      );
    }
    /**
     * Create Z oriented Rotation Matrix
     */
    static rotateZ(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return new Matrix33(
        cos, -sin, 0,
        sin, cos, 0,
        0, 0, 1
      );
    }

    static rotateXYZ(x, y, z) {
      return (Matrix33.rotateZ(z).multiply(Matrix33.rotateY(y).multiply(Matrix33.rotateX(x))));
    }

    static rotate(vec3) {
      return (Matrix33.rotateZ(vec3.z).multiply(Matrix33.rotateY(vec3.y).multiply(Matrix33.rotateX(vec3.x))));
    }

    scale(vec) {
      return this.setComponents(
        vec.x, 0, 0,
        0, vec.y, 0,
        0, 0, vec.z
      );
    }

    static scale(vec) {
      return new Matrix33(
        vec.x, 0, 0,
        0, vec.y, 0,
        0, 0, vec.z
      );
    }

    /**
     * ゼロ行列
     */
    zero() {
      this.setComponents(0, 0, 0, 0, 0, 0, 0, 0, 0);
      return this;
    }

    static zero() {
      return new Matrix33(0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    flatten() {
      return this.m;
    }

    flattenAsArray() {
      return [this.m[0], this.m[1], this.m[2],
        this.m[3], this.m[4], this.m[5],
        this.m[6], this.m[7], this.m[8]];
    }

    _swap(l, r) {
      this.m[r] = [this.m[l], this.m[l] = this.m[r]][0]; // Swap
    }

    /**
     * 転置
     */
    transpose() {
      this._swap(1, 3);
      this._swap(2, 6);
      this._swap(5, 8);

      return this;
    }

    /**
     * 転置（static版）
     */
    static transpose(mat) {

      var mat_t = new Matrix33(
        mat.m00, mat.m10, mat.m20,
        mat.m01, mat.m11, mat.m21,
        mat.m02, mat.m12, mat.m22
      );

      return mat_t;
    }

    multiplyVector(vec) {
      var x = this.m00*vec.x + this.m01*vec.y + this.m02*vec.z;
      var y = this.m10*vec.x + this.m11*vec.y + this.m12*vec.z;
      var z = this.m20*vec.x + this.m21*vec.y + this.m22*vec.z;

      return new Vector3(x, y, z);
    }

    /**
     * 行列同士の乗算
     */
    multiply(mat) {
      var m00 = this.m00*mat.m00 + this.m01*mat.m10 + this.m02*mat.m20;
      var m01 = this.m00*mat.m01 + this.m01*mat.m11 + this.m02*mat.m21;
      var m02 = this.m00*mat.m02 + this.m01*mat.m12 + this.m02*mat.m22;

      var m10 = this.m10*mat.m00 + this.m11*mat.m10 + this.m12*mat.m20;
      var m11 = this.m10*mat.m01 + this.m11*mat.m11 + this.m12*mat.m21;
      var m12 = this.m10*mat.m02 + this.m11*mat.m12 + this.m12*mat.m22;

      var m20 = this.m20*mat.m00 + this.m21*mat.m10 + this.m22*mat.m20;
      var m21 = this.m20*mat.m01 + this.m21*mat.m11 + this.m22*mat.m21;
      var m22 = this.m20*mat.m02 + this.m21*mat.m12 + this.m22*mat.m22;


      return this.setComponents(
        m00, m01, m02,
        m10, m11, m12,
        m20, m21, m22
      );
    }

    /**
     * 行列同士の乗算（static版）
     */
    static multiply(l_m, r_m) {
      var m00 = l_m.m00*r_m.m00 + l_m.m01*r_m.m10 + l_m.m02*r_m.m20;
      var m10 = l_m.m10*r_m.m00 + l_m.m11*r_m.m10 + l_m.m12*r_m.m20;
      var m20 = l_m.m20*r_m.m00 + l_m.m21*r_m.m10 + l_m.m22*r_m.m20;

      var m01 = l_m.m00*r_m.m01 + l_m.m01*r_m.m11 + l_m.m02*r_m.m21;
      var m11 = l_m.m10*r_m.m01 + l_m.m11*r_m.m11 + l_m.m12*r_m.m21;
      var m21 = l_m.m20*r_m.m01 + l_m.m21*r_m.m11 + l_m.m22*r_m.m21;

      var m02 = l_m.m00*r_m.m02 + l_m.m01*r_m.m12 + l_m.m02*r_m.m22;
      var m12 = l_m.m10*r_m.m02 + l_m.m11*r_m.m12 + l_m.m12*r_m.m22;
      var m22 = l_m.m20*r_m.m02 + l_m.m21*r_m.m12 + l_m.m22*r_m.m22;

      return new Matrix33(
        m00, m01, m02,
        m10, m11, m12,
        m20, m21, m22
      );
    }

    determinant() {
      return this.m00*this.m11*this.m22 + this.m10*this.m21*this.m02 + this.m20*this.m01*this.m12
        - this.m00*this.m21*this.m12 - this.m20*this.m11*this.m02 - this.m10*this.m01*this.m22;
    }

    static determinant(mat) {
      return mat.m00*mat.m11*mat.m22 + mat.m10*mat.m21*mat.m02 + mat.m20*mat.m01*mat.m12
        - mat.m00*mat.m21*mat.m12 - mat.m20*mat.m11*mat.m02 - mat.m10*mat.m01*mat.m22;
    }

    invert() {
      var det = this.determinant();
      var m00 = (this.m11*this.m22 - this.m12*this.m21) / det;
      var m01 = (this.m02*this.m21 - this.m01*this.m22) / det;
      var m02 = (this.m01*this.m12 - this.m02*this.m11) / det;
      var m10 = (this.m12*this.m20 - this.m10*this.m22) / det;
      var m11 = (this.m00*this.m22 - this.m02*this.m20) / det;
      var m12 = (this.m02*this.m10 - this.m00*this.m12) / det;
      var m20 = (this.m10*this.m21 - this.m11*this.m20) / det;
      var m21 = (this.m01*this.m20 - this.m00*this.m21) / det;
      var m22 = (this.m00*this.m11 - this.m01*this.m10) / det;

      return this.setComponents(
        m00, m01, m02,
        m10, m11, m12,
        m20, m21, m22
      );
    }

    static invert(mat) {
      var det = mat.determinant();
      var m00 = (mat.m11*mat.m22 - mat.m12*mat.m21) / det;
      var m01 = (mat.m02*mat.m21 - mat.m01*mat.m22) / det;
      var m02 = (mat.m01*mat.m12 - mat.m02*mat.m11) / det;
      var m10 = (mat.m12*mat.m20 - mat.m10*mat.m22) / det;
      var m11 = (mat.m00*mat.m22 - mat.m02*mat.m20) / det;
      var m12 = (mat.m02*mat.m10 - mat.m00*mat.m12) / det;
      var m20 = (mat.m10*mat.m21 - mat.m11*mat.m20) / det;
      var m21 = (mat.m01*mat.m20 - mat.m00*mat.m21) / det;
      var m22 = (mat.m00*mat.m11 - mat.m01*mat.m10) / det;

      return new Matrix33(
        m00, m01, m02,
        m10, m11, m12,
        m20, m21, m22
      );
    }

    set m00(val) {
      this.m[0] = val;
    }

    get m00() {
      return this.m[0];
    }

    set m10(val) {
      this.m[1] = val;
    }

    get m10() {
      return this.m[1];
    }

    set m20(val) {
      this.m[2] = val;
    }

    get m20() {
      return this.m[2];
    }


    set m01(val) {
      this.m[3] = val;
    }

    get m01() {
      return this.m[3];
    }

    set m11(val) {
      this.m[4] = val;
    }

    get m11() {
      return this.m[4];
    }

    set m21(val) {
      this.m[5] = val;
    }

    get m21() {
      return this.m[5];
    }

    set m02(val) {
      this.m[6] = val;
    }

    get m02() {
      return this.m[6];
    }

    set m12(val) {
      this.m[7] = val;
    }

    get m12() {
      return this.m[7];
    }

    set m22(val) {
      this.m[8] = val;
    }

    get m22() {
      return this.m[8];
    }

    toString() {
      return this.m00 + ' ' + this.m01 + ' ' + this.m02 + '\n' +
        this.m10 + ' ' + this.m11 + ' ' + this.m12 + '\n' +
        this.m20 + ' ' + this.m21 + ' ' + this.m22 + '\n';
    }

    nearZeroToZero(value) {
      if (Math.abs(value) < 0.00001) {
        value = 0;
      } else if (0.99999 < value && value < 1.00001) {
        value = 1;
      } else if (-1.00001 < value && value < -0.99999) {
        value = -1;
      }
      return value;
    }

    toStringApproximately() {
      return this.nearZeroToZero(this.m00) + ' ' + this.nearZeroToZero(this.m01) + ' ' + this.nearZeroToZero(this.m02) + '\n' +
        this.nearZeroToZero(this.m10) + ' ' + this.nearZeroToZero(this.m11) + ' ' + this.nearZeroToZero(this.m12) + ' \n' +
        this.nearZeroToZero(this.m20) + ' ' + this.nearZeroToZero(this.m21) + ' ' + this.nearZeroToZero(this.m22) + '\n';
    }

    toMatrix44() {
      return new Matrix44$2(
        this.m00, this.m01, this.m02, 0,
        this.m10, this.m11, this.m12, 0,
        this.m20, this.m21, this.m22, 0,
        0, 0, 0, 1
      );
    }

    static toMatrix44(mat) {
      return new Matrix44$2(
        mat.m00, mat.m01, mat.m02, 0,
        mat.m10, mat.m11, mat.m12, 0,
        mat.m20, mat.m21, mat.m22, 0,
        0, 0, 0, 1
      );
    }

    getScale() {
      return new Vector3(
        Math.sqrt(this.m00 * this.m00 + this.m01 * this.m01 + this.m02 * this.m02),
        Math.sqrt(this.m10 * this.m10 + this.m11 * this.m11 + this.m12 * this.m12),
        Math.sqrt(this.m20 * this.m20 + this.m21 * this.m21 + this.m22 * this.m22)
      );
    }

    addScale(vec) {
      this.m00 *= vec.x;
      this.m11 *= vec.y;
      this.m22 *= vec.z;

      return this;
    }
  }

  GLBoost$1['Matrix33'] = Matrix33;

  class Matrix44$2 {

    constructor(m, isColumnMajor = false, notCopyFloat32Array = false
    ) {
      if (arguments.length >= 16) {
        this.m = new Float32Array(16); // Data order is column major
        if (isColumnMajor === true) {
          let m = arguments;
          this.setComponents(
            m[0], m[4], m[8], m[12],
            m[1], m[5], m[9], m[13],
            m[2], m[6], m[10], m[14],
            m[3], m[7], m[11], m[15]);
        } else {
          this.setComponents.apply(this, arguments);  // arguments[0-15] must be row major values if isColumnMajor is false
        }
      } else if (Array.isArray(m)) {
        this.m = new Float32Array(16);
        if (isColumnMajor === true) {
          this.setComponents(
            m[0], m[4], m[8], m[12],
            m[1], m[5], m[9], m[13],
            m[2], m[6], m[10], m[14],
            m[3], m[7], m[11], m[15]);
        } else {
          this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
        }
      } else if (m instanceof Float32Array) {
        this.m = new Float32Array(16);
        if (notCopyFloat32Array) {
          this.m = m;
        } else {
          this.m = new Float32Array(16);
          if (isColumnMajor === true) {
            this.setComponents(
              m[0], m[4], m[8], m[12],
              m[1], m[5], m[9], m[13],
              m[2], m[6], m[10], m[14],
              m[3], m[7], m[11], m[15]);
          } else {
            this.setComponents.apply(this, m); // 'm' must be row major array if isColumnMajor is false
          }  
        }
      } else {
        this.m = new Float32Array(16);
        this.identity();
      }
    }

    setComponents(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
      this.m00 = m00; this.m01 = m01; this.m02 = m02; this.m03 = m03;
      this.m10 = m10; this.m11 = m11; this.m12 = m12; this.m13 = m13;
      this.m20 = m20; this.m21 = m21; this.m22 = m22; this.m23 = m23;
      this.m30 = m30; this.m31 = m31; this.m32 = m32; this.m33 = m33;

      return this;
    }

    copyComponents(mat4) {
      //this.m.set(mat4.m);
      this.setComponents.apply(this, mat4.m); // 'm' must be row major array if isColumnMajor is false    
    }

    clone() {
      return new Matrix44$2(
        this.m[0], this.m[4], this.m[8], this.m[12],
        this.m[1], this.m[5], this.m[9], this.m[13],
        this.m[2], this.m[6], this.m[10], this.m[14],
        this.m[3], this.m[7], this.m[11], this.m[15]
      );
    }

    /**
     * 単位行列にする
     */
    identity() {
      this.setComponents(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
      );
      return this;
    }

    /**
     * 単位行列にする（static版）
     */
    static identity() {
      return new Matrix44$2(
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1
      );
    }

    translate(vec) {
      return this.setComponents(
        1, 0, 0, vec.x,
        0, 1, 0, vec.y,
        0, 0, 1, vec.z,
        0, 0, 0, 1
      );
    }

    putTranslate(vec) {
      this.m03 = vec.x;
      this.m13 = vec.y;
      this.m23 = vec.z;
    }

    getTranslate() {
      return new Vector3(this.m03, this.m13, this.m23);
    }

    static translate(vec) {
      return new Matrix44$2(
        1, 0, 0, vec.x,
        0, 1, 0, vec.y,
        0, 0, 1, vec.z,
        0, 0, 0, 1
      );
    }

    scale(vec) {
      return this.setComponents(
        vec.x, 0, 0, 0,
        0, vec.y, 0, 0,
        0, 0, vec.z, 0,
        0, 0, 0, 1
      );
    }

    static scale(vec) {
      return new Matrix44$2(
        vec.x, 0, 0, 0,
        0, vec.y, 0, 0,
        0, 0, vec.z, 0,
        0, 0, 0, 1
      );
    }

    addScale(vec) {
      this.m00 *= vec.x;
      this.m11 *= vec.y;
      this.m22 *= vec.z;

      return this;
    }

    /**
     * Create X oriented Rotation Matrix
     */
    rotateX(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return this.setComponents(
        1, 0, 0, 0,
        0, cos, -sin, 0,
        0, sin, cos, 0,
        0, 0, 0, 1
      );
    }
    /**
     * Create X oriented Rotation Matrix
    */
    static rotateX(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return new Matrix44$2(
        1, 0, 0, 0,
        0, cos, -sin, 0,
        0, sin, cos, 0,
        0, 0, 0, 1
      );
    }

    /**
     * Create Y oriented Rotation Matrix
     */
    rotateY(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return this.setComponents(
        cos, 0, sin, 0,
        0, 1, 0, 0,
        -sin, 0, cos, 0,
        0, 0, 0, 1
      );
    }
    /**
     * Create Y oriented Rotation Matrix
     */
    static rotateY(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return new Matrix44$2(
        cos, 0, sin, 0,
        0, 1, 0, 0,
        -sin, 0, cos, 0,
        0, 0, 0, 1
      );
    }

    /**
     * Create Z oriented Rotation Matrix
     */
    rotateZ(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return this.setComponents(
        cos, -sin, 0, 0,
        sin, cos, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      );
    }
    /**
     * Create Z oriented Rotation Matrix
     */
    static rotateZ(angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }

      var cos = Math.cos(radian);
      var sin = Math.sin(radian);
      return new Matrix44$2(
        cos, -sin, 0, 0,
        sin, cos, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      );
    }

    static rotateXYZ(x, y, z) {
      return (Matrix33.rotateZ(z).multiply(Matrix33.rotateY(y).multiply(Matrix33.rotateX(x)))).toMatrix44();
    }

    /**
     * @return Euler Angles Rotation (x, y, z)
     */
    toEulerAngles() {
      let rotate = null;
      if (Math.abs(this.m20) != 1.0) {
        let y   = -Math.asin(this.m20);
        let x  = Math.atan2(this.m21 / Math.cos(y), this.m22 / Math.cos(y));
        let z = Math.atan2(this.m10 / Math.cos(y), this.m00 / Math.cos(y));
        rotate = new Vector3(x, y, z);
      } else if (this.m20 === -1.0) {
        rotate = new Vector3(Math.atan2(this.m01, this.m02), Math.PI/2.0, 0.0);
      } else {
        rotate = new Vector3(Math.atan2(-this.m01, -this.m02), -Math.PI/2.0, 0.0);
      }

      return rotate;
    }

    /**
     * ゼロ行列
     */
    zero() {
      this.setComponents(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      return this;
    }

    static zero() {
      return new Matrix44$2(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    flatten() {
      return this.m;
    }

    flattenAsArray() {
      return [this.m[0], this.m[1], this.m[2], this.m[3],
        this.m[4], this.m[5], this.m[6], this.m[7],
        this.m[8], this.m[9], this.m[10], this.m[11],
        this.m[12], this.m[13], this.m[14], this.m[15]];
    }

    _swap(l, r) {
      this.m[r] = [this.m[l], this.m[l] = this.m[r]][0]; // Swap
    }

    /**
     * 転置
     */
    transpose() {
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
    static transpose(mat) {

      var mat_t = new Matrix44$2(
        mat.m00, mat.m10, mat.m20, mat.m30,
        mat.m01, mat.m11, mat.m21, mat.m31,
        mat.m02, mat.m12, mat.m22, mat.m32,
        mat.m03, mat.m13, mat.m23, mat.m33
      );

      return mat_t;
    }

    multiplyVector(vec) {
      var x = this.m00*vec.x + this.m01*vec.y + this.m02*vec.z + this.m03*vec.w;
      var y = this.m10*vec.x + this.m11*vec.y + this.m12*vec.z + this.m13*vec.w;
      var z = this.m20*vec.x + this.m21*vec.y + this.m22*vec.z + this.m23*vec.w;
      var w = this.m30*vec.x + this.m31*vec.y + this.m32*vec.z + this.m33*vec.w;

      return new Vector4(x, y, z, w);
    }

    /**
     * 行列同士の乗算
     */
    multiply(mat) {
      var m00 = this.m00*mat.m00 + this.m01*mat.m10 + this.m02*mat.m20 + this.m03*mat.m30;
      var m01 = this.m00*mat.m01 + this.m01*mat.m11 + this.m02*mat.m21 + this.m03*mat.m31;
      var m02 = this.m00*mat.m02 + this.m01*mat.m12 + this.m02*mat.m22 + this.m03*mat.m32;
      var m03 = this.m00*mat.m03 + this.m01*mat.m13 + this.m02*mat.m23 + this.m03*mat.m33;

      var m10 = this.m10*mat.m00 + this.m11*mat.m10 + this.m12*mat.m20 + this.m13*mat.m30;
      var m11 = this.m10*mat.m01 + this.m11*mat.m11 + this.m12*mat.m21 + this.m13*mat.m31;
      var m12 = this.m10*mat.m02 + this.m11*mat.m12 + this.m12*mat.m22 + this.m13*mat.m32;
      var m13 = this.m10*mat.m03 + this.m11*mat.m13 + this.m12*mat.m23 + this.m13*mat.m33;

      var m20 = this.m20*mat.m00 + this.m21*mat.m10 + this.m22*mat.m20 + this.m23*mat.m30;
      var m21 = this.m20*mat.m01 + this.m21*mat.m11 + this.m22*mat.m21 + this.m23*mat.m31;
      var m22 = this.m20*mat.m02 + this.m21*mat.m12 + this.m22*mat.m22 + this.m23*mat.m32;
      var m23 = this.m20*mat.m03 + this.m21*mat.m13 + this.m22*mat.m23 + this.m23*mat.m33;

      var m30 = this.m30*mat.m00 + this.m31*mat.m10 + this.m32*mat.m20 + this.m33*mat.m30;
      var m31 = this.m30*mat.m01 + this.m31*mat.m11 + this.m32*mat.m21 + this.m33*mat.m31;
      var m32 = this.m30*mat.m02 + this.m31*mat.m12 + this.m32*mat.m22 + this.m33*mat.m32;
      var m33 = this.m30*mat.m03 + this.m31*mat.m13 + this.m32*mat.m23 + this.m33*mat.m33;

      return this.setComponents(
          m00, m01, m02, m03,
          m10, m11, m12, m13,
          m20, m21, m22, m23,
          m30, m31, m32, m33
      );
    }

    multiplyByLeft(mat) {
      var m00 = mat.m00*this.m00 + mat.m01*this.m10 + mat.m02*this.m20 + mat.m03*this.m30;
      var m01 = mat.m00*this.m01 + mat.m01*this.m11 + mat.m02*this.m21 + mat.m03*this.m31;
      var m02 = mat.m00*this.m02 + mat.m01*this.m12 + mat.m02*this.m22 + mat.m03*this.m32;
      var m03 = mat.m00*this.m03 + mat.m01*this.m13 + mat.m02*this.m23 + mat.m03*this.m33;

      var m10 = mat.m10*this.m00 + mat.m11*this.m10 + mat.m12*this.m20 + mat.m13*this.m30;
      var m11 = mat.m10*this.m01 + mat.m11*this.m11 + mat.m12*this.m21 + mat.m13*this.m31;
      var m12 = mat.m10*this.m02 + mat.m11*this.m12 + mat.m12*this.m22 + mat.m13*this.m32;
      var m13 = mat.m10*this.m03 + mat.m11*this.m13 + mat.m12*this.m23 + mat.m13*this.m33;

      var m20 = mat.m20*this.m00 + mat.m21*this.m10 + mat.m22*this.m20 + mat.m23*this.m30;
      var m21 = mat.m20*this.m01 + mat.m21*this.m11 + mat.m22*this.m21 + mat.m23*this.m31;
      var m22 = mat.m20*this.m02 + mat.m21*this.m12 + mat.m22*this.m22 + mat.m23*this.m32;
      var m23 = mat.m20*this.m03 + mat.m21*this.m13 + mat.m22*this.m23 + mat.m23*this.m33;

      var m30 = mat.m30*this.m00 + mat.m31*this.m10 + mat.m32*this.m20 + mat.m33*this.m30;
      var m31 = mat.m30*this.m01 + mat.m31*this.m11 + mat.m32*this.m21 + mat.m33*this.m31;
      var m32 = mat.m30*this.m02 + mat.m31*this.m12 + mat.m32*this.m22 + mat.m33*this.m32;
      var m33 = mat.m30*this.m03 + mat.m31*this.m13 + mat.m32*this.m23 + mat.m33*this.m33;

      return this.setComponents(
          m00, m01, m02, m03,
          m10, m11, m12, m13,
          m20, m21, m22, m23,
          m30, m31, m32, m33
      );
    }

    /**
     * 行列同士の乗算（static版）
     */
    static multiply(l_m, r_m) {
      var m00 = l_m.m00*r_m.m00 + l_m.m01*r_m.m10 + l_m.m02*r_m.m20 + l_m.m03*r_m.m30;
      var m10 = l_m.m10*r_m.m00 + l_m.m11*r_m.m10 + l_m.m12*r_m.m20 + l_m.m13*r_m.m30;
      var m20 = l_m.m20*r_m.m00 + l_m.m21*r_m.m10 + l_m.m22*r_m.m20 + l_m.m23*r_m.m30;
      var m30 = l_m.m30*r_m.m00 + l_m.m31*r_m.m10 + l_m.m32*r_m.m20 + l_m.m33*r_m.m30;

      var m01 = l_m.m00*r_m.m01 + l_m.m01*r_m.m11 + l_m.m02*r_m.m21 + l_m.m03*r_m.m31;
      var m11 = l_m.m10*r_m.m01 + l_m.m11*r_m.m11 + l_m.m12*r_m.m21 + l_m.m13*r_m.m31;
      var m21 = l_m.m20*r_m.m01 + l_m.m21*r_m.m11 + l_m.m22*r_m.m21 + l_m.m23*r_m.m31;
      var m31 = l_m.m30*r_m.m01 + l_m.m31*r_m.m11 + l_m.m32*r_m.m21 + l_m.m33*r_m.m31;

      var m02 = l_m.m00*r_m.m02 + l_m.m01*r_m.m12 + l_m.m02*r_m.m22 + l_m.m03*r_m.m32;
      var m12 = l_m.m10*r_m.m02 + l_m.m11*r_m.m12 + l_m.m12*r_m.m22 + l_m.m13*r_m.m32;
      var m22 = l_m.m20*r_m.m02 + l_m.m21*r_m.m12 + l_m.m22*r_m.m22 + l_m.m23*r_m.m32;
      var m32 = l_m.m30*r_m.m02 + l_m.m31*r_m.m12 + l_m.m32*r_m.m22 + l_m.m33*r_m.m32;

      var m03 = l_m.m00*r_m.m03 + l_m.m01*r_m.m13 + l_m.m02*r_m.m23 + l_m.m03*r_m.m33;
      var m13 = l_m.m10*r_m.m03 + l_m.m11*r_m.m13 + l_m.m12*r_m.m23 + l_m.m13*r_m.m33;
      var m23 = l_m.m20*r_m.m03 + l_m.m21*r_m.m13 + l_m.m22*r_m.m23 + l_m.m23*r_m.m33;
      var m33 = l_m.m30*r_m.m03 + l_m.m31*r_m.m13 + l_m.m32*r_m.m23 + l_m.m33*r_m.m33;

      return new Matrix44$2(
          m00, m01, m02, m03,
          m10, m11, m12, m13,
          m20, m21, m22, m23,
          m30, m31, m32, m33
      );
    }

    toMatrix33() {
      return new Matrix33(
        this.m00, this.m01, this.m02,
        this.m10, this.m11, this.m12,
        this.m20, this.m21, this.m22
      );
    }

    static toMatrix33(mat) {
      return new Matrix33(
        mat.m00, mat.m01, mat.m02,
        mat.m10, mat.m11, mat.m12,
        mat.m20, mat.m21, mat.m22
      );
    }

    determinant() {
      return this.m00*this.m11*this.m22*this.m33 + this.m00*this.m12*this.m23*this.m31 + this.m00*this.m13*this.m21*this.m32 +
        this.m01*this.m10*this.m23*this.m32 + this.m01*this.m12*this.m20*this.m33 + this.m01*this.m13*this.m22*this.m30 +
        this.m02*this.m10*this.m21*this.m33 + this.m02*this.m11*this.m23*this.m30 + this.m02*this.m13*this.m20*this.m31 +
        this.m03*this.m10*this.m22*this.m31 + this.m03*this.m11*this.m20*this.m32 + this.m03*this.m12*this.m21*this.m30 -

        this.m00*this.m11*this.m23*this.m32 - this.m00*this.m12*this.m21*this.m33 - this.m00*this.m13*this.m22*this.m31 -
        this.m01*this.m10*this.m22*this.m33 - this.m01*this.m12*this.m23*this.m30 - this.m01*this.m13*this.m20*this.m32 -
        this.m02*this.m10*this.m23*this.m31 - this.m02*this.m11*this.m20*this.m33 - this.m02*this.m13*this.m21*this.m30 -
        this.m03*this.m10*this.m21*this.m32 - this.m03*this.m11*this.m22*this.m30 - this.m03*this.m12*this.m20*this.m31;
    }

    static determinant(mat) {
      return mat.m00*mat.m11*mat.m22*mat.m33 + mat.m00*mat.m12*mat.m23*mat.m31 + mat.m00*mat.m13*mat.m21*mat.m32 +
        mat.m01*mat.m10*mat.m23*mat.m32 + mat.m01*mat.m12*mat.m20*mat.m33 + mat.m01*mat.m13*mat.m22*mat.m30 +
        mat.m02*mat.m10*mat.m21*mat.m33 + mat.m02*mat.m11*mat.m23*mat.m30 + mat.m02*mat.m13*mat.m20*mat.m31 +
        mat.m03*mat.m10*mat.m22*mat.m31 + mat.m03*mat.m11*mat.m20*mat.m32 + mat.m03*mat.m12*mat.m21*mat.m30 -

        mat.m00*mat.m11*mat.m23*mat.m32 - mat.m00*mat.m12*mat.m21*mat.m33 - mat.m00*mat.m13*mat.m22*mat.m31 -
        mat.m01*mat.m10*mat.m22*mat.m33 - mat.m01*mat.m12*mat.m23*mat.m30 - mat.m01*mat.m13*mat.m20*mat.m32 -
        mat.m02*mat.m10*mat.m23*mat.m31 - mat.m02*mat.m11*mat.m20*mat.m33 - mat.m02*mat.m13*mat.m21*mat.m30 -
        mat.m03*mat.m10*mat.m21*mat.m32 - mat.m03*mat.m11*mat.m22*mat.m30 - mat.m03*mat.m12*mat.m20*mat.m31;
    }

    invert() {
      var det = this.determinant();
      var m00 = (this.m11*this.m22*this.m33 + this.m12*this.m23*this.m31 + this.m13*this.m21*this.m32 - this.m11*this.m23*this.m32 - this.m12*this.m21*this.m33 - this.m13*this.m22*this.m31) / det;
      var m01 = (this.m01*this.m23*this.m32 + this.m02*this.m21*this.m33 + this.m03*this.m22*this.m31 - this.m01*this.m22*this.m33 - this.m02*this.m23*this.m31 - this.m03*this.m21*this.m32) / det;
      var m02 = (this.m01*this.m12*this.m33 + this.m02*this.m13*this.m31 + this.m03*this.m11*this.m32 - this.m01*this.m13*this.m32 - this.m02*this.m11*this.m33 - this.m03*this.m12*this.m31) / det;
      var m03 = (this.m01*this.m13*this.m22 + this.m02*this.m11*this.m23 + this.m03*this.m12*this.m21 - this.m01*this.m12*this.m23 - this.m02*this.m13*this.m21 - this.m03*this.m11*this.m22) / det;
      var m10 = (this.m10*this.m23*this.m32 + this.m12*this.m20*this.m33 + this.m13*this.m22*this.m30 - this.m10*this.m22*this.m33 - this.m12*this.m23*this.m30 - this.m13*this.m20*this.m32) / det;
      var m11 = (this.m00*this.m22*this.m33 + this.m02*this.m23*this.m30 + this.m03*this.m20*this.m32 - this.m00*this.m23*this.m32 - this.m02*this.m20*this.m33 - this.m03*this.m22*this.m30) / det;
      var m12 = (this.m00*this.m13*this.m32 + this.m02*this.m10*this.m33 + this.m03*this.m12*this.m30 - this.m00*this.m12*this.m33 - this.m02*this.m13*this.m30 - this.m03*this.m10*this.m32) / det;
      var m13 = (this.m00*this.m12*this.m23 + this.m02*this.m13*this.m20 + this.m03*this.m10*this.m22 - this.m00*this.m13*this.m22 - this.m02*this.m10*this.m23 - this.m03*this.m12*this.m20) / det;
      var m20 = (this.m10*this.m21*this.m33 + this.m11*this.m23*this.m30 + this.m13*this.m20*this.m31 - this.m10*this.m23*this.m31 - this.m11*this.m20*this.m33 - this.m13*this.m21*this.m30) / det;
      var m21 = (this.m00*this.m23*this.m31 + this.m01*this.m20*this.m33 + this.m03*this.m21*this.m30 - this.m00*this.m21*this.m33 - this.m01*this.m23*this.m30 - this.m03*this.m20*this.m31) / det;
      var m22 = (this.m00*this.m11*this.m33 + this.m01*this.m13*this.m30 + this.m03*this.m10*this.m31 - this.m00*this.m13*this.m31 - this.m01*this.m10*this.m33 - this.m03*this.m11*this.m30) / det;
      var m23 = (this.m00*this.m13*this.m21 + this.m01*this.m10*this.m23 + this.m03*this.m11*this.m20 - this.m00*this.m11*this.m23 - this.m01*this.m13*this.m20 - this.m03*this.m10*this.m21) / det;
      var m30 = (this.m10*this.m22*this.m31 + this.m11*this.m20*this.m32 + this.m12*this.m21*this.m30 - this.m10*this.m21*this.m32 - this.m11*this.m22*this.m30 - this.m12*this.m20*this.m31) / det;
      var m31 = (this.m00*this.m21*this.m32 + this.m01*this.m22*this.m30 + this.m02*this.m20*this.m31 - this.m00*this.m22*this.m31 - this.m01*this.m20*this.m32 - this.m02*this.m21*this.m30) / det;
      var m32 = (this.m00*this.m12*this.m31 + this.m01*this.m10*this.m32 + this.m02*this.m11*this.m30 - this.m00*this.m11*this.m32 - this.m01*this.m12*this.m30 - this.m02*this.m10*this.m31) / det;
      var m33 = (this.m00*this.m11*this.m22 + this.m01*this.m12*this.m20 + this.m02*this.m10*this.m21 - this.m00*this.m12*this.m21 - this.m01*this.m10*this.m22 - this.m02*this.m11*this.m20) / det;

      return this.setComponents(
        m00, m01, m02, m03,
        m10, m11, m12, m13,
        m20, m21, m22, m23,
        m30, m31, m32, m33
      );
    }

    static invert(mat) {
      var det = mat.determinant();
      var m00 = (mat.m11*mat.m22*mat.m33 + mat.m12*mat.m23*mat.m31 + mat.m13*mat.m21*mat.m32 - mat.m11*mat.m23*mat.m32 - mat.m12*mat.m21*mat.m33 - mat.m13*mat.m22*mat.m31) / det;
      var m01 = (mat.m01*mat.m23*mat.m32 + mat.m02*mat.m21*mat.m33 + mat.m03*mat.m22*mat.m31 - mat.m01*mat.m22*mat.m33 - mat.m02*mat.m23*mat.m31 - mat.m03*mat.m21*mat.m32) / det;
      var m02 = (mat.m01*mat.m12*mat.m33 + mat.m02*mat.m13*mat.m31 + mat.m03*mat.m11*mat.m32 - mat.m01*mat.m13*mat.m32 - mat.m02*mat.m11*mat.m33 - mat.m03*mat.m12*mat.m31) / det;
      var m03 = (mat.m01*mat.m13*mat.m22 + mat.m02*mat.m11*mat.m23 + mat.m03*mat.m12*mat.m21 - mat.m01*mat.m12*mat.m23 - mat.m02*mat.m13*mat.m21 - mat.m03*mat.m11*mat.m22) / det;
      var m10 = (mat.m10*mat.m23*mat.m32 + mat.m12*mat.m20*mat.m33 + mat.m13*mat.m22*mat.m30 - mat.m10*mat.m22*mat.m33 - mat.m12*mat.m23*mat.m30 - mat.m13*mat.m20*mat.m32) / det;
      var m11 = (mat.m00*mat.m22*mat.m33 + mat.m02*mat.m23*mat.m30 + mat.m03*mat.m20*mat.m32 - mat.m00*mat.m23*mat.m32 - mat.m02*mat.m20*mat.m33 - mat.m03*mat.m22*mat.m30) / det;
      var m12 = (mat.m00*mat.m13*mat.m32 + mat.m02*mat.m10*mat.m33 + mat.m03*mat.m12*mat.m30 - mat.m00*mat.m12*mat.m33 - mat.m02*mat.m13*mat.m30 - mat.m03*mat.m10*mat.m32) / det;
      var m13 = (mat.m00*mat.m12*mat.m23 + mat.m02*mat.m13*mat.m20 + mat.m03*mat.m10*mat.m22 - mat.m00*mat.m13*mat.m22 - mat.m02*mat.m10*mat.m23 - mat.m03*mat.m12*mat.m20) / det;
      var m20 = (mat.m10*mat.m21*mat.m33 + mat.m11*mat.m23*mat.m30 + mat.m13*mat.m20*mat.m31 - mat.m10*mat.m23*mat.m31 - mat.m11*mat.m20*mat.m33 - mat.m13*mat.m21*mat.m30) / det;
      var m21 = (mat.m00*mat.m23*mat.m31 + mat.m01*mat.m20*mat.m33 + mat.m03*mat.m21*mat.m30 - mat.m00*mat.m21*mat.m33 - mat.m01*mat.m23*mat.m30 - mat.m03*mat.m20*mat.m31) / det;
      var m22 = (mat.m00*mat.m11*mat.m33 + mat.m01*mat.m13*mat.m30 + mat.m03*mat.m10*mat.m31 - mat.m00*mat.m13*mat.m31 - mat.m01*mat.m10*mat.m33 - mat.m03*mat.m11*mat.m30) / det;
      var m23 = (mat.m00*mat.m13*mat.m21 + mat.m01*mat.m10*mat.m23 + mat.m03*mat.m11*mat.m20 - mat.m00*mat.m11*mat.m23 - mat.m01*mat.m13*mat.m20 - mat.m03*mat.m10*mat.m21) / det;
      var m30 = (mat.m10*mat.m22*mat.m31 + mat.m11*mat.m20*mat.m32 + mat.m12*mat.m21*mat.m30 - mat.m10*mat.m21*mat.m32 - mat.m11*mat.m22*mat.m30 - mat.m12*mat.m20*mat.m31) / det;
      var m31 = (mat.m00*mat.m21*mat.m32 + mat.m01*mat.m22*mat.m30 + mat.m02*mat.m20*mat.m31 - mat.m00*mat.m22*mat.m31 - mat.m01*mat.m20*mat.m32 - mat.m02*mat.m21*mat.m30) / det;
      var m32 = (mat.m00*mat.m12*mat.m31 + mat.m01*mat.m10*mat.m32 + mat.m02*mat.m11*mat.m30 - mat.m00*mat.m11*mat.m32 - mat.m01*mat.m12*mat.m30 - mat.m02*mat.m10*mat.m31) / det;
      var m33 = (mat.m00*mat.m11*mat.m22 + mat.m01*mat.m12*mat.m20 + mat.m02*mat.m10*mat.m21 - mat.m00*mat.m12*mat.m21 - mat.m01*mat.m10*mat.m22 - mat.m02*mat.m11*mat.m20) / det;

      return new Matrix44$2(
        m00, m01, m02, m03,
        m10, m11, m12, m13,
        m20, m21, m22, m23,
        m30, m31, m32, m33
      );
    }

    set m00(val) {
      this.m[0] = val;
    }

    get m00() {
      return this.m[0];
    }

    set m10(val) {
      this.m[1] = val;
    }

    get m10() {
      return this.m[1];
    }

    set m20(val) {
      this.m[2] = val;
    }

    get m20() {
      return this.m[2];
    }

    set m30(val) {
      this.m[3] = val;
    }

    get m30() {
      return this.m[3];
    }

    set m01(val) {
      this.m[4] = val;
    }

    get m01() {
      return this.m[4];
    }

    set m11(val) {
      this.m[5] = val;
    }

    get m11() {
      return this.m[5];
    }

    set m21(val) {
      this.m[6] = val;
    }

    get m21() {
      return this.m[6];
    }

    set m31(val) {
      this.m[7] = val;
    }

    get m31() {
      return this.m[7];
    }

    set m02(val) {
      this.m[8] = val;
    }

    get m02() {
      return this.m[8];
    }

    set m12(val) {
      this.m[9] = val;
    }

    get m12() {
      return this.m[9];
    }

    set m22(val) {
      this.m[10] = val;
    }

    get m22() {
      return this.m[10];
    }

    set m32(val) {
      this.m[11] = val;
    }

    get m32() {
      return this.m[11];
    }

    set m03(val) {
      this.m[12] = val;
    }

    get m03() {
      return this.m[12];
    }

    set m13(val) {
      this.m[13] = val;
    }

    get m13() {
      return this.m[13];
    }

    set m23(val) {
      this.m[14] = val;
    }

    get m23() {
      return this.m[14];
    }

    set m33(val) {
      this.m[15] = val;
    }

    get m33() {
      return this.m[15];
    }

    toString() {
      return this.m00 + ' ' + this.m01 + ' ' + this.m02 + ' ' + this.m03 + ' \n' +
        this.m10 + ' ' + this.m11 + ' ' + this.m12 + ' ' + this.m13 + ' \n' +
        this.m20 + ' ' + this.m21 + ' ' + this.m22 + ' ' + this.m23 + ' \n' +
        this.m30 + ' ' + this.m31 + ' ' + this.m32 + ' ' + this.m33 + ' \n';
    }

    nearZeroToZero(value) {
      if (Math.abs(value) < 0.00001) {
        value = 0;
      } else if (0.99999 < value && value < 1.00001) {
        value = 1;
      } else if (-1.00001 < value && value < -0.99999) {
        value = -1;
      }
      return value;
    }

    toStringApproximately() {
      return this.nearZeroToZero(this.m00) + ' ' + this.nearZeroToZero(this.m01) + ' ' + this.nearZeroToZero(this.m02) + ' ' + this.nearZeroToZero(this.m03) + ' \n' +
        this.nearZeroToZero(this.m10) + ' ' + this.nearZeroToZero(this.m11) + ' ' + this.nearZeroToZero(this.m12) + ' ' + this.nearZeroToZero(this.m13) + ' \n' +
        this.nearZeroToZero(this.m20) + ' ' + this.nearZeroToZero(this.m21) + ' ' + this.nearZeroToZero(this.m22) + ' ' + this.nearZeroToZero(this.m23) + ' \n' +
        this.nearZeroToZero(this.m30) + ' ' + this.nearZeroToZero(this.m31) + ' ' + this.nearZeroToZero(this.m32) + ' ' + this.nearZeroToZero(this.m33) + ' \n';
    }

    getScale() {
      return new Vector3(
        Math.sqrt(this.m00 * this.m00 + this.m01 * this.m01 + this.m02 * this.m02),
        Math.sqrt(this.m10 * this.m10 + this.m11 * this.m11 + this.m12 * this.m12),
        Math.sqrt(this.m20 * this.m20 + this.m21 * this.m21 + this.m22 * this.m22)
      );
    }
  }

  GLBoost$1["Matrix44"] = Matrix44$2;

  class Quaternion {

    constructor(x, y, z, w) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.w = w;
    }

    isEqual(vec) {
      if (this.x === vec.x && this.y === vec.y && this.z === vec.z && this.w === vec.w) {
        return true;
      } else {
        return false;
      }
    }

    clone() {
      return new Quaternion(this.x, this.y, this.z, this.w);
    }

    static invert(quat) {
      return new Quaternion(-quat.x, -quat.y, -quat.z, quat.w).multiply(1.0/(quat.x*quat.x + quat.y*quat.y + quat.z*quat.z + quat.w*quat.w));
    }

    static qlerp(lhq, rhq, ratio) {

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

        let ph = Math.acos(qr);
        let s2;
        if(qr < 0.0 && ph > Math.PI / 2.0){
          qr = - lhq.w * rhq.w - lhq.x * rhq.x - lhq.y * rhq.y - lhq.z * rhq.z;
          ph = Math.acos(qr);
          s2 = -1 * Math.sin(ph * ratio) / Math.sin(ph);
        } else {
          s2 = Math.sin(ph * ratio) / Math.sin(ph);
        }
        let s1 = Math.sin(ph * (1.0 - ratio)) / Math.sin(ph);

        q.x = lhq.x * s1 + rhq.x * s2;
        q.y = lhq.y * s1 + rhq.y * s2;
        q.z = lhq.z * s1 + rhq.z * s2;
        q.w = lhq.w * s1 + rhq.w * s2;

        return q;
      }
    }

    get rotationMatrix() {
      var sx = this.x * this.x;
      var sy = this.y * this.y;
      var sz = this.z * this.z;
      var cx = this.y * this.z;
      var cy = this.x * this.z;
      var cz = this.x * this.y;
      var wx = this.w * this.x;
      var wy = this.w * this.y;
      var wz = this.w * this.z;

      return new Matrix44$2(
        1.0 - 2.0 * (sy + sz), 2.0 * (cz - wz), 2.0 * (cy + wy), 0.0,
        2.0 * (cz + wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx - wx), 0.0,
        2.0 * (cy - wy), 2.0 * (cx + wx), 1.0 - 2.0 * (sx + sy), 0.0,
        0.0, 0.0, 0.0, 1.0
      );
    }

    get rotationMatrix33() {
      var sx = this.x * this.x;
      var sy = this.y * this.y;
      var sz = this.z * this.z;
      var cx = this.y * this.z;
      var cy = this.x * this.z;
      var cz = this.x * this.y;
      var wx = this.w * this.x;
      var wy = this.w * this.y;
      var wz = this.w * this.z;

      return new Matrix33(
        1.0 - 2.0 * (sy + sz), 2.0 * (cz - wz), 2.0 * (cy + wy),
        2.0 * (cz + wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx - wx),
        2.0 * (cy - wy), 2.0 * (cx + wx), 1.0 - 2.0 * (sx + sy)
      );
    }

    axisAngle(axisVec3, angle) {
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

    static axisAngle(axisVec3, angle) {
      var radian = 0;
      if (GLBoost$1["VALUE_ANGLE_UNIT"] === GLBoost$1.DEGREE) {
        radian = MathUtil.degreeToRadian(angle);
      } else {
        radian = angle;
      }
      var halfAngle = 0.5 * radian;
      var sin = Math.sin(halfAngle);

      var axis = Vector3.normalize(axisVec3);
      return new Quaternion(
        sin * axis.x,
        sin * axis.y,
        sin * axis.z,
        Math.cos(halfAngle));
    }

    add(q) {
      this.x += q.x;
      this.y += q.y;
      this.z += q.z;
      this.w += q.w;

      return this;
    }

    multiply(q) {
      let result = new Quaternion(0, 0, 0, 1);
      result.w = this.w*q.w - this.x*q.x - this.y*q.y - this.z*q.z;
      result.x = this.w*q.x + this.x*q.w + this.y*q.z - this.z*q.y;
      result.y = this.w*q.y + this.y*q.w + this.x*q.z - this.z*q.x;
      result.z = this.w*q.z + this.z*q.w + this.x*q.y - this.y*q.x;
      this.x = result.x;
      this.y = result.y;
      this.z = result.z;
      this.w = result.w;
      
      return this;
    }

    static multiply(q1, q2) {
      let result = new Quaternion(0, 0, 0, 1);
      result.w = q1.w*q2.w - q1.x*q2.x - q1.y*q2.y - q1.z*q2.z;
      result.x = q1.w*q2.x + q1.x*q2.w + q1.y*q2.z - q1.z*q2.y;
      result.y = q1.w*q2.y + q1.y*q2.w + q1.x*q2.z - q1.z*q2.x;
      result.z = q1.w*q2.z + q1.z*q2.w + q1.x*q2.y - q1.y*q2.x;
      return result;
    }

    static fromMatrix(m) {
      
      let q = new Quaternion();
      let tr = m.m00 + m.m11 + m.m22;

      if (tr > 0) { 
        let S = 0.5 / Math.sqrt(tr+1.0);
        q.w = 0.25 / S;
        q.x = (m.m21 - m.m12) * S;
        q.y = (m.m02 - m.m20) * S; 
        q.z = (m.m10 - m.m01) * S; 
      } else if ((m.m00 > m.m11) && (m.m00 > m.m22)) { 
        let S = Math.sqrt(1.0 + m.m00 - m.m11 - m.m22) * 2;
        q.w = (m.m21 - m.m12) / S;
        q.x = 0.25 * S;
        q.y = (m.m01 + m.m10) / S; 
        q.z = (m.m02 + m.m20) / S; 
      } else if (m.m11 > m.m22) { 
        let S = Math.sqrt(1.0 + m.m11 - m.m00 - m.m22) * 2;
        q.w = (m.m02 - m.m20) / S;
        q.x = (m.m01 + m.m10) / S; 
        q.y = 0.25 * S;
        q.z = (m.m12 + m.m21) / S; 
      } else { 
        let S = Math.sqrt(1.0 + m.m22 - m.m00 - m.m11) * 2;
        q.w = (m.m10 - m.m01) / S;
        q.x = (m.m02 + m.m20) / S;
        q.y = (m.m12 + m.m21) / S;
        q.z = 0.25 * S;
      }

      return q;
    }
  /*
    static fromMatrix(m) {
      let fTrace = m.m[0] + m.m[4] + m.m[8];
      let fRoot;
      let q = new Quaternion();
      if ( fTrace > 0.0 ) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0);  // 2w
        q.w = 0.5 * fRoot;
        fRoot = 0.5/fRoot;  // 1/(4w)
        q.x = (m.m[5]-m.m[7])*fRoot;
        q.y = (m.m[6]-m.m[2])*fRoot;
        q.z = (m.m[1]-m.m[3])*fRoot;
      } else {
        // |w| <= 1/2
        let i = 0;
        if ( m.m[4] > m.m[0] )
          i = 1;
        if ( m.m[8] > m.m[i*3+i] )
          i = 2;
        let j = (i+1)%3;
        let k = (i+2)%3;
        fRoot = Math.sqrt(m.m[i*3+i]-m.m[j*3+j]-m.m[k*3+k] + 1.0);
        
        let setValue = function(q, i, value) {
          switch (i) {
            case 0: q.x = value; break;
            case 1: q.y = value; break;
            case 2: q.z = value; break;
          }
        }

        setValue(q, i, 0.5 * fRoot); //      q[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        q.w = (m.m[j*3+k] - m.m[k*3+j]) * fRoot;

        setValue(q, j, (m.m[j*3+i] + m.m[i*3+j]) * fRoot); //      q[j] = (m.m[j*3+i] + m.m[i*3+j]) * fRoot;
        setValue(q, k, (m.m[k*3+i] + m.m[i*3+k]) * fRoot); //      q[k] = (m.m[k*3+i] + m.m[i*3+k]) * fRoot;
      }

      return q;
    }
  */

    static fromPosition(vec3) {
      let q = new Quaternion(vec3.x, vec3.y, vec3.z, 0);
      return q;
    }

    at(i) {
      switch (i%4) {
      case 0: return this.x;
      case 1: return this.y;
      case 2: return this.z;
      case 3: return this.w;
      }
    }

    setAt(i, val) {
      switch (i%4) {
      case 0: this.x = val; break;
      case 1: this.y = val; break;
      case 2: this.z = val; break;
      case 3: this.w = val; break;
      }
    }

    normalize() {
      let norm = Math.sqrt(this.x*this.x + this.y*this.y + this.z*this.z + this.w*this.w);
      this.x /= norm;
      this.y /= norm;
      this.z /= norm;
      this.w /= norm;
      return this;
    }

    toString() {
      return '(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')';
    }
  }

  GLBoost$1["Quaternion"] = Quaternion;

  class MathUtil {

    constructor() {

    }

    static radianToDegree(rad) {
      return rad * 180 / Math.PI;
    }

    static degreeToRadian(deg) {
      return deg * Math.PI / 180;
    }

    static arrayToVector(element) {
      if (Array.isArray(element)) {
        if(typeof(element[3]) !== 'undefined') {
          return new Vector4(element[0], element[1], element[2], element[3]);
        } else if (typeof(element[2]) !== 'undefined') {
          return new Vector3(element[0], element[1], element[2]);
        } else {
          return new Vector2(element[0], element[1]);
        }
      } else {
        return element;
      }
    }

    static makeSubArray(array, componentN) {
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

    static vectorToArray(element) {
      if(element instanceof Vector2) {
        return [element.x, element.y];
      } else if (element instanceof Vector3) {
        return [element.x, element.y, element.z];
      } else if (element instanceof Vector4 || element instanceof Quaternion) {
        return [element.x, element.y, element.z, element.w];
      } else {
        return element;
      }
    }

    static compomentNumberOfVector(element) {
      if(element instanceof Vector2) {
        return 2;
      } else if (element instanceof Vector3) {
        return 3;
      } else if (element instanceof Vector4 || element instanceof Quaternion) {
        return 4;
      } else if (Array.isArray(element)) {
        return element.length;
      } else {
        return 0;
      }
    }

    // values range must be [-1, 1]
    static packNormalizedVec4ToVec2(x, y, z, w, criteria) {
      let v0 = 0.0;
      let v1 = 0.0;
      
      x = (x + 1)/2.0;
      y = (y + 1)/2.0;
      z = (z + 1)/2.0;
      w = (w + 1)/2.0;

      let ir = Math.floor(x*(criteria-1.0));
      let ig = Math.floor(y*(criteria-1.0));
      let irg = ir*criteria + ig;
      v0 = irg / criteria; 

      let ib =  Math.floor(z*(criteria-1.0));
      let ia =  Math.floor(w*(criteria-1.0));
      let iba = ib*criteria + ia;
      v1 =iba / criteria; 
      
      return [v0, v1];
    }
  }

  GLBoost$1["MathUtil"] = MathUtil;

  class AnimationUtil {

    constructor() {

    }

    static lerp(start, end, ratio, componentN) {
      if (componentN === 1) {
        return start * (1 - ratio) + end * ratio;
      } else {
        if (start instanceof Quaternion) {
          return Quaternion.qlerp(start, end, ratio);
        } else {
          return start.multiply((1 - ratio)).add(end.multiply(ratio));
        }
      }
    }

    static interpolate(inputArray, outputArray, input, componentN, method = GLBoost$1.INTERPOLATION_LINEAR) {
      if (input < inputArray[0]) {
        return outputArray[0].clone(); // out of range!
      }
      if (inputArray[inputArray.length-1] <= input) {
        return outputArray[outputArray.length-1].clone(); // out of range!
      }

      if (method === GLBoost$1.INTERPOLATION_LINEAR) {
        for (let i = 0; i<inputArray.length; i++) {
          if (typeof inputArray[i+1] === "undefined") {
            break;
          }
          if (inputArray[i] <= input && input < inputArray[i+1]) {
            let ratio = (input - inputArray[i]) / (inputArray[i+1] - inputArray[i]);
            let resultValue = this.lerp(outputArray[i].clone(), outputArray[i+1].clone(), ratio, componentN);
            return resultValue;
          }
        }
      } else if (method === GLBoost$1.INTERPOLATION_STEP) {
        for (let i = 0; i<inputArray.length; i++) {
          if (typeof inputArray[i+1] === "undefined") {
            break;
          }
          if (inputArray[i] <= input && input < inputArray[i+1]) {
            return outputArray[i].clone();
          }
        }
      }
      return outputArray[0].clone(); // out of range!
    }
  }

  class L_Element extends GLBoostObject {
    constructor(glBoostContext, toRegister = true) {
      super(glBoostContext, toRegister);

      // Live (Static or Animation)
      this._translate = Vector3.zero();
      this._scale = new Vector3(1, 1, 1);
      this._rotate = Vector3.zero();
      this._quaternion = new Quaternion(0, 0, 0, 1);
      this._matrix = Matrix44$2.identity();

  //    this._finalMatrix = Matrix44.identity();

      this._updateCountAsElement = 0;
      this._animationLine = {};
      this._currentAnimationInputValues = {};
      this._activeAnimationLineName = null;

      this._is_trs_matrix_updated = true;
      this._is_translate_updated = true;
      this._is_scale_updated = true;
      this._is_quaternion_updated = true;
      this._is_euler_angles_updated = true;
      this._is_inverse_trs_matrix_updated = false;
    }


    get updateCountAsElement() {
      return this._updateCountAsElement;
    }

    _needUpdate() {
      this._is_inverse_trs_matrix_updated = false;
      this._updateCountAsElement++;
    }

    _getAnimatedTransformValue(value, animation, type) {
      if (typeof animation !== 'undefined' && animation[type] && value !== null && value !== void 0) {
        return AnimationUtil.interpolate(animation[type].input, animation[type].output, value, animation[type].outputComponentN, animation[type].interpolationMethod);
      } else {
        //  console.warn(this._instanceName + 'doesn't have ' + type + ' animation data. GLBoost returned default ' + type + ' value.');
        return null;
      }
    }

    _getCurrentAnimationInputValue(inputName) {
      let value = this._currentAnimationInputValues[inputName];
      if (typeof(value) === 'number') {
        return value;
      } else {
        return null;
      }
    }

    setAnimationAtLine(lineName, attributeName, inputArray, outputArray, interpolationMethod) {
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
        outputComponentN: outputComponentN,
        interpolationMethod: interpolationMethod
      };
    }

    hasAnimation(lineName) {
      if (this._animationLine[lineName]) {
        return true;
      } else {
        return false;
      }
    }

    getStartInputValueOfAnimation(lineName) {
      let inputLine = this._animationLine[lineName];
      let latestInputValue = Number.MAX_VALUE;
      if (typeof inputLine === 'undefined') {
        return latestInputValue;
      }
      for (let attributeName in inputLine) {
        let inputValueArray = inputLine[attributeName].input;
        let inputLatestValueAtThisAttribute = inputValueArray[0];
        if (inputLatestValueAtThisAttribute < latestInputValue) {
          latestInputValue = inputLatestValueAtThisAttribute;
        }
      }
      return latestInputValue;
    }

    getEndInputValueOfAnimation(lineName) {
      let inputLine = this._animationLine[lineName];
      let latestInputValue = - Number.MAX_VALUE;
      if (typeof inputLine === 'undefined') {
        return latestInputValue;
      }
      for (let attributeName in inputLine) {
        let inputValueArray = inputLine[attributeName].input;
        let inputLatestValueAtThisAttribute = inputValueArray[inputValueArray.length - 1];
        if (inputLatestValueAtThisAttribute > latestInputValue) {
          latestInputValue = inputLatestValueAtThisAttribute;
        }
      }
      return latestInputValue;
    }

    /**
     * [en] Set animation input value (for instance frame value), This value affect all child elements in this scene graph (recursively).<br>
     * [ja] アニメーションのための入力値（例えばフレーム値）をセットします。この値はシーングラフに属する全ての子孫に影響します。
     * @param {string} inputName [en] inputName name of input value. [ja] 入力値の名前
     * @param {number|Vector2|Vector3|Vector4|*} inputValue [en] input value of animation. [ja] アニメーションの入力値
     */
    setCurrentAnimationValue(inputName, inputValue) {
      this._setDirtyToAnimatedElement(inputName);
      this._currentAnimationInputValues[inputName] = inputValue;
    }

    removeCurrentAnimationValue(inputName) {
      delete this._currentAnimationInputValues[inputName];
    }

    setActiveAnimationLine(lineName) {
      this._activeAnimationLineName = lineName;
    }

    set translate(vec) {
      if (this._translate.isEqual(vec)) {
        return;
      }
      this._translate = vec.clone();
      if (this._is_trs_matrix_updated) ;
      this._is_trs_matrix_updated = false;
      this._is_translate_updated = true;
      this._needUpdate();
    }

    getTranslateNotAnimated() {
      if (this._is_translate_updated) {
        return this._translate.clone();
      } else if (this._is_trs_matrix_updated) {
        this._translate.x = this._matrix.m03;
        this._translate.y = this._matrix.m13;
        this._translate.z = this._matrix.m23;
        this._is_translate_updated = true;
      }
      return this._translate.clone();
    }

    get translate() {
      return this.getTranslateAtOrStatic(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
    }

    getTranslateAt(lineName, inputValue) {
      let value = this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'translate');
      if (value !== null) {
        this._translate = value;
        this._is_translate_updated = true;  
        this._is_trs_matrix_updated = false;
      }
      return value;
    }

    getTranslateAtOrStatic(lineName, inputValue) {
      let value = this.getTranslateAt(lineName, inputValue);
      if (value === null) {
        return this.getTranslateNotAnimated();
      }
      return value;
    }

    set rotate(vec) {
      if (this._rotate.isEqual(vec)) {
        return;
      }
      this._rotate = vec.clone();
      this._is_trs_matrix_updated = false;
      this._is_quaternion_updated = false;
      this._is_euler_angles_updated = true;
      this._needUpdate();
    }

    get rotate() {
      return this.getRotateAtOrStatic(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
    }

    getRotateAt(lineName, inputValue) {
      let value = this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'rotate');
      if (value !== null) {
        this._rotate = value;
        this._is_euler_angles_updated = true;  
      }
      return value;
    }

    getRotateAtOrStatic(lineName, inputValue) {
      let value = null;
      if (this._activeAnimationLineName) {
        value = this.getRotateAt(this._activeAnimationLineName, inputValue);
      }
      if (value === null) {
        return this.getRotateNotAnimated();
      }
      return value;
    }

    getRotateNotAnimated() {
      if (this._is_euler_angles_updated) {
        return this._rotate.clone();
      } else if (this._is_trs_matrix_updated) {
        this._rotate = this._matrix.toEulerAngles();
      } else if (this._is_quaternion_updated) {
        this._rotate = this._quaternion.rotationMatrix.toEulerAngles();
      }

      this._is_euler_angles_updated = true;
      return this._rotate.clone();
    }

    set scale(vec) {
      if (this._scale.isEqual(vec)) {
        return;
      }
      this._scale = vec.clone();
      if (this._is_trs_matrix_updated) ;
      this._is_trs_matrix_updated = false;
      this._is_scale_updated = true;
      this._needUpdate();
    }

    get scale() {
      return this.getScaleAtOrStatic(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
    }

    getScaleAt(lineName, inputValue) {
      let value = this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'scale');
      if (value !== null) {
        this._scale = value.clone();
        this._is_scale_updated = true;  
        this._is_trs_matrix_updated = false;
      }
      return value;
    }

    getScaleAtOrStatic(lineName, inputValue) {
      let value = this.getScaleAt(lineName, inputValue);
      if (value === null) {
        return this.getScaleNotAnimated();
      }
      return value;
    }

    getScaleNotAnimated() {    
      if (this._is_scale_updated) {
        return this._scale.clone();
      } else if (this._is_trs_matrix_updated) {
        let m = this._matrix;
        this._scale.x = Math.sqrt(m.m00*m.m00 + m.m01*m.m01 + m.m02*m.m02);
        this._scale.y = Math.sqrt(m.m10*m.m10 + m.m11*m.m11 + m.m12*m.m12);
        this._scale.z = Math.sqrt(m.m20*m.m20 + m.m21*m.m21 + m.m22*m.m22);
        this._is_scale_updated = true;
      }
      
      return this._scale.clone();
    }

    set matrix(mat) {
      this._matrix = mat.clone();
      this._is_trs_matrix_updated = true;
      this._is_scale_updated = false;
      this._is_translate_updated = false;
      this._is_quaternion_updated = false;
      this._is_euler_angles_updated = false;
      this._needUpdate();
    }

    get matrix() {
      let input = void 0;
      if (this._activeAnimationLineName !== null) {
        input = this._getCurrentAnimationInputValue(this._activeAnimationLineName);
      }

      let value = this.getMatrixAtOrStatic(this._activeAnimationLineName, input);
      return value;
    }

    getMatrixAt(lineName, inputValue) {
      let value = this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'matrix');
      if (value !== null) {
        this._translate = value;
        this._is_translate_updated = true;  
      }
      return value;
    }

    getMatrixNotAnimated() {

      if (this._is_trs_matrix_updated) {
        return this._matrix.clone();
      }

      let rotationMatrix = Matrix44$2.identity();
      rotationMatrix = this.getQuaternionNotAnimated().rotationMatrix;

      let scale = this.getScaleNotAnimated();

      this._matrix = Matrix44$2.multiply(rotationMatrix, Matrix44$2.scale(scale));
      let translateVec = this.getTranslateNotAnimated();
      this._matrix.m03 = translateVec.x;
      this._matrix.m13 = translateVec.y;
      this._matrix.m23 = translateVec.z;

      this._is_trs_matrix_updated = true;

      return this._matrix.clone();
    }

    get transformMatrix() {
      let input = void 0;
      if (this._activeAnimationLineName !== null) {
        input = this._getCurrentAnimationInputValue(this._activeAnimationLineName);
      }

      const matrix = this.getMatrixAtOrStatic(this._activeAnimationLineName, input);

      return matrix;
    }

    isTrsMatrixNeeded(lineName, inputValue) {
      //console.log(this._animationLine['time']);
      let result = (
        this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'translate') === null &&
        this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'rotate') === null &&
        this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'quaternion') === null &&
        this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'scale') === null
      );
      return result;
    }


    getMatrixAtOrStatic(lineName, inputValue) {
      let input = inputValue;

      //console.log(this.userFlavorName + ": " + this.isTrsMatrixNeeded(lineName, inputValue));
      if (this.isTrsMatrixNeeded(lineName, inputValue) && this._is_trs_matrix_updated) {
        return this.getMatrixNotAnimated();
      } else {

        let rotationMatrix = Matrix44$2.identity();
        let quaternion = this.getQuaternionAtOrStatic(lineName, input);
        rotationMatrix = quaternion.rotationMatrix;

        let scale = this.getScaleAtOrStatic(lineName, input);
        
        this._matrix = Matrix44$2.multiply(rotationMatrix, Matrix44$2.scale(scale));
        let translateVec = this.getTranslateAtOrStatic(lineName, input);
        this._matrix.m03 = translateVec.x;
        this._matrix.m13 = translateVec.y;
        this._matrix.m23 = translateVec.z;

        return this._matrix.clone();

      }

      this._is_trs_matrix_updated = true;
    }


    set quaternion(quat) {
      if (this._quaternion.isEqual(quat)) {
        return;
      }
      this._quaternion = quat.clone();
      this._is_trs_matrix_updated = false;
      this._is_euler_angles_updated = false;
      this._is_quaternion_updated = true;
      this._needUpdate();
    }

    get quaternion() {
      return this.getQuaternionAtOrStatic(this._activeAnimationLineName, this._getCurrentAnimationInputValue(this._activeAnimationLineName));
    }

    getQuaternionAt(lineName, inputValue) {
      let value = this._getAnimatedTransformValue(inputValue, this._animationLine[lineName], 'quaternion');
      if (value !== null) {
        this._quaternion = value;
        this._is_quaternion_updated = true;  
        this._is_trs_matrix_updated = false;
      }
      return value;
    }

    getQuaternionAtOrStatic(lineName, inputValue) {
      let value = this.getQuaternionAt(lineName, inputValue);
      if (value === null) {
        return this.getQuaternionNotAnimated();
      }
      return value;
    }
    
    getQuaternionNotAnimated() {
      let value = null;
      if (this._is_quaternion_updated) {
        return this._quaternion;
      } else if (!this._is_quaternion_updated) {
        if (this._is_trs_matrix_updated) {
          value = Quaternion.fromMatrix(this._matrix);
        } else if (this._is_euler_angles_updated) {
          value = Quaternion.fromMatrix(Matrix44$2.rotateXYZ(this._rotate.x, this._rotate.y, this._rotate.z));
        } else {
          console.log('jojjeoe');
        }
        this._quaternion = value;
        this._is_quaternion_updated = true;
      }

      return this._quaternion;
    }

    get inverseTransformMatrix() {
      if (!this._is_inverse_trs_matrix_updated) {
        this._invMatrix = this.transformMatrix.invert();
        this._is_inverse_trs_matrix_updated = true;
      }
      return this._invMatrix.clone();
    }

    get normalMatrix() {
      return Matrix44$2.invert(this.transformMatrix).transpose().toMatrix33();
    }

    _copy(instance) {
      super._copy(instance);

      instance._translate = this._translate.clone();
      instance._scale = this._scale.clone();
      instance._rotate = this._rotate.clone();
      instance._quaternion = this._quaternion.clone();
      instance._matrix = this._matrix.clone();


      instance._animationLine = {};

      for (let lineName in this._animationLine) {
        instance._animationLine[lineName] = {};
        for (let attributeName in this._animationLine[lineName]) {
          instance._animationLine[lineName][attributeName] = {};
          instance._animationLine[lineName][attributeName].input = this._animationLine[lineName][attributeName].input.concat();

          let instanceOutput = [];
          let thisOutput = this._animationLine[lineName][attributeName].output;
          for (let i=0; i<thisOutput.length; i++) {
            instanceOutput.push((typeof thisOutput[i] === 'number') ? thisOutput[i] : thisOutput[i].clone());
          }
          instance._animationLine[lineName][attributeName].output = instanceOutput;

          instance._animationLine[lineName][attributeName].outputAttribute = this._animationLine[lineName][attributeName].outputAttribute;

          instance._animationLine[lineName][attributeName].outputComponentN = this._animationLine[lineName][attributeName].outputComponentN;
        }
      }

      instance._is_trs_matrix_updated = this._is_trs_matrix_updated;
      instance._is_translate_updated = this._is_translate_updated;
      instance._is_scale_updated = this._is_scale_updated;
      instance._is_quaternion_updated = this._is_quaternion_updated;
      instance._is_euler_angles_updated = this._is_euler_angles_updated;
      instance._is_inverse_trs_matrix_updated = this._is_inverse_trs_matrix_updated;

      instance._updateCountAsElement = this._updateCountAsElement;
    }
  }

  class M_Element extends L_Element {
    constructor(glBoostContext) {
      super(glBoostContext);

      this._parent = null;
      this._invMatrix = Matrix44$2.identity();
      this._matrixGetMode = ''; // 'notanimated', 'animate_<input_value>'
      this._accumulatedAncestryObjectUpdateNumber = -Math.MAX_VALUE;
      this._accumulatedAncestryObjectUpdateNumberWithoutMySelf = -Math.MAX_VALUE;    
      this._accumulatedAncestryObjectUpdateNumberNormal = -Math.MAX_VALUE;
      this._accumulatedAncestryObjectUpdateNumberInv = -Math.MAX_VALUE;
      this._accumulatedAncestryObjectUpdateNumberJoint = -Math.MAX_VALUE;
      this._transparentByUser = false;
      this._opacity = 1.0;
      this._isAffectedByWorldMatrix = true;
      this._isAffectedByWorldMatrixAccumulatedAncestry = true;
      this._isAffectedByViewMatrix = true;
      this._isAffectedByProjectionMatrix = true;

      this._toInheritCurrentAnimationInputValue = true;

      this._camera = null;
      this._customFunction = null;
      this._isVisible = true;

      this._gizmos = [];
      this._masterElement = null;

      this._worldMatrix = new Matrix44$2();
    }

    _accumulateMyAndParentNameWithUpdateInfo(currentElem) {
      if (currentElem._parent === null) {
        return currentElem.elementUpdateNumber;
      } else {
        return this._accumulateMyAndParentNameWithUpdateInfo(currentElem._parent) + currentElem.elementUpdateNumber;
      }
    }

    set toInheritCurrentAnimationInputValue(flg) {
      this._toInheritCurrentAnimationInputValue = flg;
    }

    get toInheritCurrentAnimationInputValue() {
      return this._toInheritCurrentAnimationInputValue;
    }

    _getCurrentAnimationInputValue(inputName) {
      let value = this._currentAnimationInputValues[inputName];
      if (typeof(value) === 'number') {
        return value;
      } else if (this._toInheritCurrentAnimationInputValue && this._parent) {
        let val = this._parent._getCurrentAnimationInputValue(inputName);
        if (val === void 0) {
          val = null;
        }
        return val;
      } else {
        return null;
      }
    }

    _setDirtyToAnimatedElement(inputName) {
      if (this.hasAnimation(inputName)) {
        this._needUpdate();
      }
    }


    _multiplyMyAndParentTransformMatricesInInverseOrder(withMySelf, input) {
      if (input === void 0 && this._activeAnimationLineName !== null) {
        input = this._getCurrentAnimationInputValue(this._activeAnimationLineName);
      }

      let tempNumber = 0;
      if (this.__cache_input_multiplyMyAndParentTransformMatricesInInverseOrder !== input ||
        this.__updateInfoString_multiplyMyAndParentTransformMatricesInInverseOrder !== (tempNumber = this._accumulateMyAndParentNameWithUpdateInfo(this)) ||
        this.__cache_returnValue_multiplyMyAndParentTransformMatricesInInverseOrder === void 0)
      {

        let currentMatrix = null;
        if (withMySelf) {
          currentMatrix = this.getMatrixAtOrStatic(this._activeAnimationLineName, input);
        } else {
          currentMatrix = Matrix44$2.identity();
        }
    
        if (this._parent === null) {
          this.__cache_returnValue_multiplyMyAndParentTransformMatricesInInverseOrder = currentMatrix;
          return currentMatrix;
        }

        this.__cache_returnValue_multiplyMyAndParentTransformMatricesInInverseOrder = Matrix44$2.multiply(currentMatrix, this._parent._multiplyMyAndParentTransformMatricesInInverseOrder(true, input));
        this.__updateInfoString_multiplyMyAndParentTransformMatricesInInverseOrder = tempNumber;
        this.__cache_input_multiplyMyAndParentTransformMatricesInInverseOrder = input;
      }
      return this.__cache_returnValue_multiplyMyAndParentTransformMatricesInInverseOrder;
    }

    get worldMatrixWithoutMySelf() {
      return this.getWorldMatrixWithoutMySelfAt(void 0);
    }

    getWorldMatrixWithoutMySelfAt(input) {

      let tempNumber = this._accumulateMyAndParentNameWithUpdateInfo(this);
    
      if (this._accumulatedWithoutMySelfAncestryObjectUpdateNumber !== tempNumber || this._matrixAccumulatedWithoutMySelfAncestry === void 0) {
        this._matrixAccumulatedWithoutMySelfAncestry = this._multiplyMyAndParentTransformMatrices(false, input);
        this._accumulatedWithoutMySelfAncestryObjectUpdateNumber = tempNumber;
      }

      return this._matrixAccumulatedWithoutMySelfAncestry.clone();
    }

    get normalMatrix() {
      var tempNumber = this._accumulateMyAndParentNameWithUpdateInfo(this);
      //console.log(tempNumber);
      if (this._accumulatedAncestryObjectUpdateNumberNormal !== tempNumber || typeof this._normalMatrix === 'undefined') {
        let world_m = this._multiplyMyAndParentTransformMatrices(true, null);
        this._normalMatrix = Matrix44$2.invert(world_m).transpose().toMatrix33();
        this._accumulatedAncestryObjectUpdateNumberNormal = tempNumber;
      }

      return this._normalMatrix.clone();
    }


    get inverseWorldMatrixWithoutMySelf() {
      if (this._parent === null) {
        return Matrix44$2.identity();
      }

      return this._multiplyMyAndParentTransformMatricesInInverseOrder(false, null).clone().invert();
    }

    _multiplyMyAndParentRotateMatrices(currentElem, withMySelf) {
      if (currentElem._parent === null) {
        if (withMySelf) {
          return currentElem.transformMatrixOnlyRotate;
        } else {
          return Matrix44$2.identity();
        }
      } else {
        let currentMatrix = Matrix44$2.identity();
        if (withMySelf) {
          currentMatrix = currentElem.transformMatrixOnlyRotate;
        }
        return Matrix44$2.multiply(this._multiplyMyAndParentRotateMatrices(currentElem._parent, true), currentMatrix);
      }
    }

    get inverseWorldMatrix() {
      return this._multiplyMyAndParentTransformMatrices(true, null).clone().invert();
    }

    _accumulateMyAndParentOpacity(currentElem) {
      if (currentElem._parent === null) {
        return currentElem.opacity;
      } else {
        return this._accumulateMyAndParentOpacity(currentElem._parent) * currentElem.opacity;
      }
    }

    get opacityAccumulatedAncestry() {
      return this._accumulateMyAndParentOpacity(this);
    }

    set opacity(opacity) {
      this._opacity = opacity;
    }

    get opacity() {
      return this._opacity;
    }

    get isTransparent() {
      return this._transparentByUser;
    }

    set isTransparent(flg) {
      this._transparentByUser = flg;
    }

    set dirty(flg) {
      if (flg) {
        this._needUpdate();
      }
    }

    get parent() {
      return this._parent;
    }

    get elementUpdateNumber() {
      return this.classUniqueNumber + this._updateCountAsElement;
    }

    // used by library (not Application)
    toStringWithUpdateInfo() {
      //  return '&' + this._instanceName + '#' + this._updateCountAsElement;  // human readable
      return this._instanceName + this._updateCountAsElement;                // faster
    }

    set camera(camera) {
      this._camera = camera;
    }

    get camera() {
      return this._camera;
    }

    set customFunction(func) {
      this._customFunction = func;
    }

    get customFunction() {
      return this._customFunction;
    }

    prepareToRender() {

    }

    _copy(instance) {
      super._copy(instance);

      instance._parent = this._parent;
      instance._invMatrix = this._invMatrix.clone();
      instance._matrixGetMode = this._matrixGetMode;
      instance._is_inverse_trs_matrix_updated = this._is_inverse_trs_matrix_updated;
      instance._accumulatedAncestryObjectUpdateNumber = this._accumulatedAncestryObjectUpdateNumber;
      instance._accumulatedAncestryObjectUpdateNumberNormal = this._accumulatedAncestryObjectUpdateNumberNormal;
      instance._accumulatedAncestryObjectUpdateNumberInv = this._accumulatedAncestryObjectUpdateNumberInv;


      instance._transparentByUser = this._transparentByUser;
      instance.opacity = this.opacity;
      instance._activeAnimationLineName = this._activeAnimationLineName;

      instance._currentAnimationInputValues = {};
      for (let inputName in this._currentAnimationInputValues) {
        instance._currentAnimationInputValues[inputName] = this._currentAnimationInputValues[inputName];
      }

      instance._toInheritCurrentAnimationInputValue = this._toInheritCurrentAnimationInputValue;

      instance._camera = this._camera;
      instance._customFunction = this._customFunction;
    }

    set isVisible(flg) {
      this._isVisible = flg;
    }

    get isVisible() {
      return this._isVisible;
    }

    set isAffectedByWorldMatrix(flg) {
      this._isAffectedByWorldMatrix = flg;
    }

    get isAffectedByWorldMatrix() {
      return this._isAffectedByWorldMatrix;
    }

    set isAffectedByWorldMatrixAccumulatedAncestry(flg) {
      this._isAffectedByWorldMatrixAccumulatedAncestry = flg;
    }

    get isAffectedByWorldMatrixAccumulatedAncestry() {
      return this._isAffectedByWorldMatrixAccumulatedAncestry;
    }

    set isAffectedByViewMatrix(flg) {
      this._isAffectedByViewMatrix = flg;
    }

    get isAffectedByViewMatrix() {
      return this._isAffectedByViewMatrix;
    }

    set isAffectedByProjectionMatrix(flg) {
      this._isAffectedByProjectionMatrix = flg;
    }

    get isAffectedByProjectionMatrix() {
      return this._isAffectedByProjectionMatrix;
    }

    set gizmoScale(scale) {
      for (let gizmo of this._gizmos) {
        gizmo.scale = new Vector3(scale, scale, scale);
      }
    }

    get gizmoScale() {
      if (this._gizmos.length === 0) {
        return 1.0;
      }
      return this._gizmos[0].scale.x;
    }

    set isGizmoVisible(flg) {
      for (let gizmo of this._gizmos) {
        gizmo.isVisible = flg;
      }
    }

    get isGizmoVisible() {
      return this._gizmos[0].isVisible;
    }

    set masterElement(element) {
      this._masterElement = element;
    }

    get masterElement() {
      return this._masterElement;
    }

    get worldMatrixForJoints() {
      return this.getWorldMatrixForJointsAt(void 0);
    }

    getWorldMatrixForJointsAt(input) {

      let tempNumber = this._accumulateMyAndParentNameWithUpdateInfo(this);
      
      if (this._accumulatedAncestryObjectUpdateNumberForJoints !== tempNumber || this._matrixAccumulatedAncestryForJoints === void 0) {
        this._matrixAccumulatedAncestryForJoints = this._multiplyMyAndParentTransformMatricesForJoints(true, input);
        this._accumulatedAncestryObjectUpdateNumberForJoints = tempNumber;
      }

      return this._matrixAccumulatedAncestryForJoints.clone();
      
    }

    _multiplyMyAndParentTransformMatricesForJoints(withMySelf, input) {
      if (input === void 0 && this._activeAnimationLineName !== null) {
        input = this._getCurrentAnimationInputValue(this._activeAnimationLineName);
      }

      let tempNumber = 0;
      if (this.__cache_input_multiplyMyAndParentTransformMatricesForJoints !== input ||
        this.__updateInfoString_multiplyMyAndParentTransformMatricesForJoints !== (tempNumber = this._accumulateMyAndParentNameWithUpdateInfo(this)) ||
        this.__cache_returnValue_multiplyMyAndParentTransformMatricesForJoints === void 0)
      {

          let currentMatrix = null;
          if (withMySelf) {
            currentMatrix = this.getRotateTranslateAt(input);
          } else {
            currentMatrix = Matrix44$2.identity();
          }
      
          if (this._parent === null) {
            this.__cache_returnValue_multiplyMyAndParentTransformMatricesForJoints = currentMatrix;
            return currentMatrix;
          }

          this.__cache_returnValue_multiplyMyAndParentTransformMatricesForJoints = Matrix44$2.multiply(this._parent._multiplyMyAndParentTransformMatricesForJoints(true, input), currentMatrix);
          this.__updateInfoString_multiplyMyAndParentTransformMatricesForJoints = tempNumber;
          this.__cache_input_multiplyMyAndParentTransformMatricesForJoints = input;
      }
      return this.__cache_returnValue_multiplyMyAndParentTransformMatricesForJoints;
    
    }


    get worldMatrix() {
      return this.getWorldMatrixAt(void 0);
    }


    getWorldMatrixAt(input) {

      let tempNumber = this._accumulateMyAndParentNameWithUpdateInfo(this);
    
      if (this._accumulatedAncestryObjectUpdateNumber !== tempNumber || this._matrixAccumulatedAncestry === void 0) {
        this._matrixAccumulatedAncestry = this._multiplyMyAndParentTransformMatrices(true, input);
        this._accumulatedAncestryObjectUpdateNumber = tempNumber;
      }

      return this._matrixAccumulatedAncestry.clone();
    }

    _multiplyMyAndParentTransformMatrices(withMySelf, input) {
      if (input === void 0 && this._activeAnimationLineName !== null) {
        input = this._getCurrentAnimationInputValue(this._activeAnimationLineName);
      }

      let tempNumber = this._accumulateMyAndParentNameWithUpdateInfo(this);
      if (this.__updateInfoString_multiplyMyAndParentTransformMatrices !== tempNumber ||
        this.__cache_input_multiplyMyAndParentTransformMatrices !== input ||
        this.__cache_returnValue_multiplyMyAndParentTransformMatrices === void 0)
      {

        let currentMatrix = null;
        if (withMySelf) {
          currentMatrix = this.getMatrixAtOrStatic(this._activeAnimationLineName, input);
        } else {
          currentMatrix = Matrix44$2.identity();
        }
        if (this._parent === null) {
          this.__cache_returnValue_multiplyMyAndParentTransformMatrices = currentMatrix;
          return currentMatrix;
        }
        this.__cache_returnValue_multiplyMyAndParentTransformMatrices = Matrix44$2.multiply(this._parent._multiplyMyAndParentTransformMatrices(true, input), currentMatrix);
        this.__updateInfoString_multiplyMyAndParentTransformMatrices = tempNumber;
        this.__cache_input_multiplyMyAndParentTransformMatrices = input;
      }
      return this.__cache_returnValue_multiplyMyAndParentTransformMatrices;
    
    }

    get inverseTransformMatrixAccumulatedAncestryWithoutMySelf() {
      if (this._parent === null) {
        return Matrix44$1.identity();
      }

      return this._multiplyMyAndParentTransformMatricesInInverseOrder(false, null).clone().invert();
    }

    _multiplyMyAndParentTransformMatricesInInverseOrder(withMySelf, input) {
      if (input === null && this._activeAnimationLineName !== null) {
        input = this._getCurrentAnimationInputValue(this._activeAnimationLineName);
      }

      let tempNumber = 0;
      if (input === void 0 || this.__cache_input_multiplyMyAndParentTransformMatricesInInverseOrder !== input ||
        this.__updateInfoString_multiplyMyAndParentTransformMatricesInInverseOrder !== (tempNumber = this._accumulateMyAndParentNameWithUpdateInfo(this)) ||
        this.__cache_returnValue_multiplyMyAndParentTransformMatricesInInverseOrder === void 0)
      {

        let currentMatrix = null;
        if (withMySelf) {
          currentMatrix = this.getMatrixAtOrStatic(this._activeAnimationLineName, input);
        } else {
          currentMatrix = Matrix44$2.identity();
        }
    
        if (this._parent === null) {
          this.__cache_returnValue_multiplyMyAndParentTransformMatricesInInverseOrder = currentMatrix;
          return currentMatrix;
        }

        this.__cache_returnValue_multiplyMyAndParentTransformMatricesInInverseOrder = Matrix44$2.multiply(currentMatrix, this._parent._multiplyMyAndParentTransformMatricesInInverseOrder(true, input));
        this.__updateInfoString_multiplyMyAndParentTransformMatricesInInverseOrder = tempNumber;
        this.__cache_input_multiplyMyAndParentTransformMatricesInInverseOrder = input;
      }
      return this.__cache_returnValue_multiplyMyAndParentTransformMatricesInInverseOrder;
    }

    readyForDiscard() {
      if (this instanceof this.className.indexOf('Mesh') !== -1) {
        const materials = element.getAppropriateMaterials();
        for (let material of materials) {
          material.readyForDiscard();
        }
      }
    }
  }

  /**
   * This is the abstract class for all lights classes. Don't use this class directly.<br>
   */
  class M_AbstractLight extends M_Element {
    constructor(glBoostContext) {
      super(glBoostContext);

      if (this.constructor === M_AbstractLight) {
        throw new TypeError('Cannot construct AbstractLight instances directly.');
      }

      this._gl = this._glContext.gl;

      this._isCastingShadow = true;
      this._isLightType = '';
    }

    prepareToRender() {
      if (this._camera) {
        if (this._camera.customFunction) {
          this._camera.customFunction(this);
        }
      }
    }

    set isCastingShadow(flg) {
      this._isCastingShadow = flg;
    }

    get isCastingShadow() {
      return this._isCastingShadow;
    }

    get lightType() {
      return this._isLightType;
    }

    isTypeAmbient() {
      return this._isLightType === 'ambient';
    }

    isTypeDirectional() {
      return this._isLightType === 'directional';
    }

    isTypePoint() {
      return this._isLightType === 'point';
    }

    isTypeSpot() {
      return this._isLightType === 'spot';
    }
  }

  /**
   * This is a Point Light class.
   */
  class M_PointLight extends M_AbstractLight {

    /**
     * The constructor of PointLight class.
     * @param {Vector4} intensity intensity as Vector4 Color
     * @param {HTMLCanvas|string} canvas canvas or canvas' id string.
     */
    constructor(glBoostContext, intensity) {
      super(glBoostContext);

      this._intensity = intensity;
      
      this._isLightType = 'point';
      
    }

    set intensity(vec) {
      this._intensity = vec;
    }

    get intensity() {
      return this._intensity;
    }

  }

  class Hash {

    constructor() {

    }


    static toCRC32(str) {
      var crc = 0, x=0, y=0;
      var table = Hash._crc32table;

      crc = crc ^ (-1);
      for (var i=0, iTop=str.length; i<iTop; ++i) {
        y = (crc ^ str.charCodeAt(i)) & 0xff;
        x = "0x" + table[y];
        crc = (crc >>> 8) ^ x;
      }

      return (crc ^ (-1)) >>> 0;
    }
  }

  Hash._crc32table = "00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".split(' ');

  class SkeletalShaderSource {

    VSDefine_SkeletalShaderSource(in_, out_, f, lights, material, extraData) {
      var shaderText = '';
      shaderText += `${in_} vec4 aVertex_joint;\n`;
      shaderText += `${in_} vec4 aVertex_weight;\n`;

      if (!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL) {
        shaderText += 'uniform mat4 skinTransformMatrices[' + extraData.jointN  + '];\n';
      } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL === 1){
        shaderText += 'uniform vec4 quatArray[' + extraData.jointN  + '];\n';
        shaderText += 'uniform vec4 transArray[' + extraData.jointN  + '];\n';
        //    shaderText += 'uniform vec2 quatArray[' + extraData.jointN  + '];\n';

      } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL > 1) {
        // `OneVec4` Version [Begin]
        shaderText += 'uniform vec4 quatTranslationArray[' + extraData.jointN  + '];\n';
        shaderText += 'uniform vec3 translationScale;\n';
        // `OneVec4` Version [End]
      }
      
      return shaderText;
    }

    VSMethodDefine_SkeletalShaderSource(f, lights, material, extraData) {
      let shaderText = '';
      shaderText += `
    mat3 toNormalMatrix(mat4 m) {
      float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2], a03 = m[0][3],
      a10 = m[1][0], a11 = m[1][1], a12 = m[1][2], a13 = m[1][3],
      a20 = m[2][0], a21 = m[2][1], a22 = m[2][2], a23 = m[2][3],
      a30 = m[3][0], a31 = m[3][1], a32 = m[3][2], a33 = m[3][3];
    
      float b00 = a00 * a11 - a01 * a10,
      b01 = a00 * a12 - a02 * a10,
      b02 = a00 * a13 - a03 * a10,
      b03 = a01 * a12 - a02 * a11,
      b04 = a01 * a13 - a03 * a11,
      b05 = a02 * a13 - a03 * a12,
      b06 = a20 * a31 - a21 * a30,
      b07 = a20 * a32 - a22 * a30,
      b08 = a20 * a33 - a23 * a30,
      b09 = a21 * a32 - a22 * a31,
      b10 = a21 * a33 - a23 * a31,
      b11 = a22 * a33 - a23 * a32;
    
      float determinantVal = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    
      return mat3(
        a11 * b11 - a12 * b10 + a13 * b09, a12 * b08 - a10 * b11 - a13 * b07, a10 * b10 - a11 * b08 + a13 * b06,
        a02 * b10 - a01 * b11 - a03 * b09, a00 * b11 - a02 * b08 + a03 * b07, a01 * b08 - a00 * b10 - a03 * b06,
        a31 * b05 - a32 * b04 + a33 * b03, a32 * b02 - a30 * b05 - a33 * b01, a30 * b04 - a31 * b02 + a33 * b00) / determinantVal;
    }

    mat4 transposeMatrix(mat4 m) {
      return mat4(m[0][0], m[1][0], m[2][0], m[3][0],
                  m[0][1], m[1][1], m[2][1], m[3][1],
                  m[0][2], m[1][2], m[2][2], m[3][2],
                  m[0][3], m[1][3], m[2][3], m[3][3]);
    }

    mat4 createMatrixFromQuaternionTransform( vec4 quaternion, vec3 translation ) {
      vec4 q = quaternion;
      vec3 t = translation;

      float sx = q.x * q.x;
      float sy = q.y * q.y;
      float sz = q.z * q.z;
      float cx = q.y * q.z;
      float cy = q.x * q.z;
      float cz = q.x * q.y;
      float wx = q.w * q.x;
      float wy = q.w * q.y;
      float wz = q.w * q.z;

      
      return mat4(
        1.0 - 2.0 * (sy + sz), 2.0 * (cz + wz), 2.0 * (cy - wy), 0.0,
        2.0 * (cz - wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx + wx), 0.0,
        2.0 * (cy + wy), 2.0 * (cx - wx), 1.0 - 2.0 * (sx + sy), 0.0,
        t.x, t.y, t.z, 1.0
      );
      /*
     return mat4(
      1.0 - 2.0 * (sy + sz), 2.0 * (cz + wz), 2.0 * (cy - wy), t.x,
      2.0 * (cz - wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx + wx), t.y,
      2.0 * (cy + wy), 2.0 * (cx - wx), 1.0 - 2.0 * (sx + sy), t.z,
      0.0, 0.0, 0.0, 1.0
    );

   return mat4(
    1.0 - 2.0 * (sy + sz), 2.0 * (cz - wz), 2.0 * (cy + wy), 0.0,
    2.0 * (cz + wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx - wx), 0.0,
    2.0 * (cy - wy), 2.0 * (cx + wx), 1.0 - 2.0 * (sx + sy), 0.0,
    t.x, t.y, t.z, 1.0
  );

    return mat4(
      1.0 - 2.0 * (sy + sz), 2.0 * (cz - wz), 2.0 * (cy + wy), t.x,
      2.0 * (cz + wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx - wx), t.y,
      2.0 * (cy - wy), 2.0 * (cx + wx), 1.0 - 2.0 * (sx + sy), t.z,
      0.0, 0.0, 0.0, 1.0
    );
    */
  }

  mat4 createMatrixFromQuaternionTransformUniformScale( vec4 quaternion, vec4 translationUniformScale ) {
    vec4 q = quaternion;
    vec3 t = translationUniformScale.xyz;
    float scale = translationUniformScale.w;

    float sx = q.x * q.x;
    float sy = q.y * q.y;
    float sz = q.z * q.z;
    float cx = q.y * q.z;
    float cy = q.x * q.z;
    float cz = q.x * q.y;
    float wx = q.w * q.x;
    float wy = q.w * q.y;
    float wz = q.w * q.z;

    
    mat4 mat = mat4(
      1.0 - 2.0 * (sy + sz), 2.0 * (cz + wz), 2.0 * (cy - wy), 0.0,
      2.0 * (cz - wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx + wx), 0.0,
      2.0 * (cy + wy), 2.0 * (cx - wx), 1.0 - 2.0 * (sx + sy), 0.0,
      t.x, t.y, t.z, 1.0
    );
    /*
    mat4 mat = mat4(
    1.0 - 2.0 * (sy + sz), 2.0 * (cz + wz), 2.0 * (cy - wy), t.x,
    2.0 * (cz - wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx + wx), t.y,
    2.0 * (cy + wy), 2.0 * (cx - wx), 1.0 - 2.0 * (sx + sy), t.z,
    0.0, 0.0, 0.0, 1.0
  );

  mat4 mat = mat4(
  1.0 - 2.0 * (sy + sz), 2.0 * (cz - wz), 2.0 * (cy + wy), 0.0,
  2.0 * (cz + wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx - wx), 0.0,
  2.0 * (cy - wy), 2.0 * (cx + wx), 1.0 - 2.0 * (sx + sy), 0.0,
  t.x, t.y, t.z, 1.0
);

  mat4 mat = mat4(
    1.0 - 2.0 * (sy + sz), 2.0 * (cz - wz), 2.0 * (cy + wy), t.x,
    2.0 * (cz + wz), 1.0 - 2.0 * (sx + sz), 2.0 * (cx - wx), t.y,
    2.0 * (cy - wy), 2.0 * (cx + wx), 1.0 - 2.0 * (sx + sy), t.z,
    0.0, 0.0, 0.0, 1.0
  );
  */

  mat4 uniformScaleMat = mat4(
    scale, 0.0, 0.0, 0.0,
    0.0, scale, 0.0, 0.0,
    0.0, 0.0, scale, 0.0,
    0.0, 0.0, 0.0, 1.0
  );
 
//  mat[0][0] *= scale;
//  mat[0][1] *= scale;
//  mat[0][2] *= scale;
//  mat[1][0] *= scale;
//  mat[1][1] *= scale;
//  mat[1][2] *= scale;
//  mat[2][0] *= scale;
//  mat[2][1] *= scale;
//  mat[2][2] *= scale;
  
  return mat*uniformScaleMat;
}

/*
  mat4 createMatrixFromQuaternionTransform( vec4 quaternion, vec3 translation ) {
    vec4 q = quaternion;
    vec3 t = translation;
    float x = q.x;
    float y = q.y;
    float z = q.z;
    float w = q.w;
    float x2 = x + x;
    float y2 = y + y;
    float z2 = z + z;
    float xx = x * x2;
    float yx = y * x2;
    float yy = y * y2;
    float zx = z * x2;
    float zy = z * y2;
    float zz = z * z2;
    float wx = w * x2;
    float wy = w * y2;
    float wz = w * z2;
    float m_0 = 1.0 - yy - zz;
    float m_3 = yx - wz;
    float m_6 = zx + wy;
    float m_1 = yx + wz;
    float m_4 = 1.0 - xx - zz;
    float m_7 = zy - wx;
    float m_2 = zx - wy;
    float m_5 = zy + wx;
    float m_8 = 1.0 - xx - yy;

    return mat4(
      m_0, m_3, m_6, 0.0,
      m_1, m_4, m_7, 0.0,
      m_2, m_5, m_8, 0.0,
      t.x, t.y, t.z, 0.0
    );

    return mat4(
    m_0, m_3, m_6, t.x,
    m_1, m_4, m_7, t.y,
    m_2, m_5, m_8, t.z,
    0.0, 0.0, 0.0, 0.0
  );

 
   return mat4(
    m_0, m_1, m_2, 0.0,
    m_3, m_4, m_5, 0.0,
    m_6, m_7, m_8, 0.0,
    t.x, t.y, t.z, 0.0
  );

return mat4(
  m_0, m_1, m_2, t.x,
  m_3, m_4, m_5, t.y,
  m_6, m_7, m_8, t.z,
  0.0, 0.0, 0.0, 0.0
);

  }
  */

    vec4 unpackedVec2ToNormalizedVec4(vec2 vec_xy, float criteria){

      float r;
      float g;
      float b;
      float a;
      
      float ix = floor(vec_xy.x * criteria);
      float v1x = ix / criteria;
      float v1y = ix - floor(v1x) * criteria;
  
      r = ( v1x + 1.0 ) / (criteria-1.0);
      g = ( v1y + 1.0 ) / (criteria-1.0);
  
      float iy = floor( vec_xy.y * criteria);
      float v2x = iy / criteria;
      float v2y = iy - floor(v2x) * criteria;
  
      b = ( v2x + 1.0 ) / (criteria-1.0);
      a = ( v2y + 1.0 ) / (criteria-1.0);
  
      r -= 1.0/criteria;
      g -= 1.0/criteria;
      b -= 1.0/criteria;
      a -= 1.0/criteria;
        
      r = r*2.0-1.0;
      g = g*2.0-1.0;
      b = b*2.0-1.0;
      a = a*2.0-1.0;
  
      return vec4(r, g, b, a);
    }
    `;

      return shaderText;
    }

    /**
     * @return {string}
     */
    VSPreProcess_SkeletalShaderSource(existCamera_f, f, lights, material, extraData) {
      let shaderText = '';

      shaderText += 'vec4 weightVec = aVertex_weight;\n'; // DO NOT normalize as vec4!

      if (!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL) {
        shaderText += 'mat4 skinMat = weightVec.x * skinTransformMatrices[int(aVertex_joint.x)];\n';
        shaderText += 'skinMat += weightVec.y * skinTransformMatrices[int(aVertex_joint.y)];\n';
        shaderText += 'skinMat += weightVec.z * skinTransformMatrices[int(aVertex_joint.z)];\n';
        shaderText += 'skinMat += weightVec.w * skinTransformMatrices[int(aVertex_joint.w)];\n';
      } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL === 1) {

        // `Quaterion (Vec4) Transform(Vec3)` Version
        shaderText += 'mat4 skinMat = weightVec.x * createMatrixFromQuaternionTransformUniformScale(quatArray[int(aVertex_joint.x)], transArray[int(aVertex_joint.x)]);\n';
        shaderText += 'skinMat += weightVec.y * createMatrixFromQuaternionTransformUniformScale(quatArray[int(aVertex_joint.y)], transArray[int(aVertex_joint.y)]);\n';
        shaderText += 'skinMat += weightVec.z * createMatrixFromQuaternionTransformUniformScale(quatArray[int(aVertex_joint.z)], transArray[int(aVertex_joint.z)]);\n';
        shaderText += 'skinMat += weightVec.w * createMatrixFromQuaternionTransformUniformScale(quatArray[int(aVertex_joint.w)], transArray[int(aVertex_joint.w)]);\n';
      } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL > 1) {

        // `OneVec4` Version
        shaderText += `vec2 criteria = vec2(4096.0, 4096.0);\n`;
        shaderText += `mat4 skinMat = weightVec.x * createMatrixFromQuaternionTransform(
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.x)].xy, criteria.x),
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.x)].zw, criteria.y).xyz*translationScale);\n`;
        shaderText += `skinMat += weightVec.y * createMatrixFromQuaternionTransform(
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.y)].xy, criteria.x),
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.y)].zw, criteria.y).xyz*translationScale);\n`;
        shaderText += `skinMat += weightVec.z * createMatrixFromQuaternionTransform(
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.z)].xy, criteria.x),
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.z)].zw, criteria.y).xyz*translationScale);\n`;
        shaderText += `skinMat += weightVec.w * createMatrixFromQuaternionTransform(
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.w)].xy, criteria.x),
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.w)].zw, criteria.y).xyz*translationScale);\n`;
      
      }

      // Calc the following...
      // * position_world
      // * normal_world
      // * normalMatrix
      // * tangent_world
      shaderText += 'position_world = skinMat * position_local;\n';    
      if (Shader._exist(f, GLBoost$1.NORMAL)) {
        shaderText += 'mat3 normalMatrix = toNormalMatrix(skinMat);\n';
        shaderText += 'normal_world = normalize(normalMatrix * normal_local);\n';
        if (Shader._exist(f, GLBoost$1.TANGENT)) {
          shaderText += 'tangent_world = normalize(normalMatrix * tangent_local);\n';
        }
      }
      // So, you should not recompute the items in the list above. Check the isSkinning flag to avoid recalculation.
      shaderText += 'isSkinning = true;\n';


      return shaderText;
    }

    prepare_SkeletalShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {
      let vertexAttribsAsResult = [];

      vertexAttribs.forEach((attribName)=>{
        if (attribName === 'joint' || attribName === 'weight') {
          vertexAttribsAsResult.push(attribName);
          shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
          gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
        }
      });

      if (!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL) {
        let skinTransformMatricesUniformLocation = this._glContext.getUniformLocation(shaderProgram, 'skinTransformMatrices');
        material.setUniform(shaderProgram, 'uniform_skinTransformMatrices', skinTransformMatricesUniformLocation);
        material._semanticsDic['JOINTMATRIX'] = 'skinTransformMatrices';
      } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL === 1) {
        
        let quatArrayUniformLocation = this._glContext.getUniformLocation(shaderProgram, 'quatArray');
        material.setUniform(shaderProgram, 'uniform_quatArray', quatArrayUniformLocation);
        material._semanticsDic['JOINT_QUATERNION'] = 'quatArray';
        let transArrayUniformLocation = this._glContext.getUniformLocation(shaderProgram, 'transArray');
        material.setUniform(shaderProgram, 'uniform_transArray', transArrayUniformLocation);
        material._semanticsDic['JOINT_TRANSLATION'] = 'transArray';
        
      } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL > 1) {
        
        // `OneVec4` Version [Begin]
        let quatArrayUniformLocation = this._glContext.getUniformLocation(shaderProgram, 'quatTranslationArray');
        material.setUniform(shaderProgram, 'uniform_quatTranslationArray', quatArrayUniformLocation);
        material._semanticsDic['JOINT_QUATTRANSLATION'] = 'quatTranslationArray';
        let transArrayUniformLocation = this._glContext.getUniformLocation(shaderProgram, 'translationScale');
        material.setUniform(shaderProgram, 'uniform_translationScale', transArrayUniformLocation);
        // `OneVec4` Version [End]
        
      }
      
      /*
      // とりあえず単位行列で初期化
      let identityMatrices = [];
      for (let i=0; i<extraData.jointN; i++) {
        Array.prototype.push.apply(identityMatrices,
          [1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1]
        );
      }
      //gl.uniformMatrix4fv(skinTransformMatricesUniformLocation, false, new Float32Array(identityMatrices));
      */

      return vertexAttribsAsResult;
    }
  }

  class VertexWorldShaderSource {
    // In the context within these member methods,
    // this is the instance of the corresponding shader class.

    VSDefine_VertexWorldShaderSource(in_, out_, f, lights, material, extraData) {
      let shaderText = '';

      if (Shader._exist(f, GLBoost.NORMAL)) {
        shaderText += `${in_} vec3 aVertex_normal;\n`;
        shaderText += `${out_} vec3 v_normal_world;\n`;
        
        if (Shader._exist(f, GLBoost.TANGENT)) {
          shaderText += `${in_} vec3 aVertex_tangent;\n`;
          if (material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_NORMAL)) {
            shaderText += `${out_} vec3 v_tangent_world;\n`;
            shaderText += `${out_} vec3 v_binormal_world;\n`;  
          }
        }
      }
      shaderText +=      'uniform mat4 worldMatrix;\n';
      shaderText +=      'uniform mat4 viewMatrix;\n';
      shaderText +=      'uniform mat4 projectionMatrix;\n';
      shaderText +=      'uniform mat3 normalMatrix;\n';
      shaderText += `     uniform highp ivec2 objectIds;\n`;

      shaderText += `${out_} vec3 v_position_world;\n`;

      return shaderText;
    }

    VSPreProcess_VertexWorldShaderSource(existCamera_f, f, lights, material, extraData) {
      var shaderText = '';
      shaderText += '  vec4 position_world;\n';
      shaderText += '  vec3 normal_world;\n';
      shaderText += '  vec3 tangent_world;\n';
      return shaderText;
    }

    VSTransform_VertexWorldShaderSource(existCamera_f, f, lights, material, extraData) {
      var shaderText = '';

      // Calculate only when No skinning. If skinning, these have already been calculated by SkeletalShader.
      shaderText += '  if (!isSkinning) {\n';
      shaderText += '    position_world = worldMatrix * position_local;\n';
      if (Shader._exist(f, GLBoost.NORMAL)) {
        shaderText += '  normal_world = normalMatrix * normal_local;\n';
      }
      shaderText += '  }\n';

      // calc Projection * View * World matrix
      shaderText += '  mat4 pvwMatrix = projectionMatrix * viewMatrix * worldMatrix;\n';

      // calc vertex position in world space
      shaderText += '  v_position_world = position_world.xyz;\n';

      let normalTexture = material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_NORMAL);

      // Send normal, tangent, binormal vectors in world space to the rasterizer
      if (Shader._exist(f, GLBoost.NORMAL)) {
        // calc Normal vector in world space
        shaderText += '  v_normal_world = normal_world;\n';
        if (Shader._exist(f, GLBoost.TANGENT) && !material.isFlatShading && normalTexture) {
          // calc BiNormal vector and Tangent vector in world space
          
          {
            // Calculate only when No skinning. If skinning, it has already been calculated by SkeletalShader.
            shaderText += '  if (!isSkinning) {\n';
            shaderText += '    tangent_world = normalMatrix * tangent_local;\n';
            shaderText += '  }\n';
          }

          shaderText += '  v_binormal_world = cross(normal_world, tangent_world);\n';
          shaderText += '  v_tangent_world = cross(v_binormal_world, normal_world);\n';

        }
      }

      // Calc vertex positions in clip coordinate space.
      // (These will be converted in Normalized Device Coordinates by divided gl_Posiiton.w in after stage.)
      shaderText += '  gl_Position =  pvwMatrix * position_local;\n';

      return shaderText;
    }

    FSDefine_VertexWorldShaderSource(in_, f, lights, material, extraData) {
      let shaderText = '';

      shaderText += `uniform highp ivec2 objectIds;\n`;
      shaderText += `uniform vec3 viewPosition_world;\n`;

      let lightNumExceptAmbient = lights.filter((light)=>{return !light.isTypeAmbient();}).length;    
      if(lightNumExceptAmbient > 0) {
        shaderText += `uniform vec4 lightDiffuse[${lightNumExceptAmbient}];\n`;
        shaderText += `uniform vec3 lightSpotInfo[${lightNumExceptAmbient}];\n`;
        shaderText += `uniform vec3 lightPosition_world[${lightNumExceptAmbient}];\n`;
        shaderText += `uniform vec3 lightDirection_world[${lightNumExceptAmbient}];\n`;
      }

      if (Shader._exist(f, GLBoost.NORMAL)) {
        shaderText += `${in_} vec3 v_normal_world;\n`;
        if (Shader._exist(f, GLBoost.TANGENT) && material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_NORMAL)) {
          shaderText += `${in_} vec3 v_tangent_world;\n`;
          shaderText += `${in_} vec3 v_binormal_world;\n`;
        }
      }

      shaderText += `${in_} vec3 v_position_world;\n`;

      return shaderText;
    }


    FSShade_VertexWorldShaderSource(f, gl, lights) {
      var shaderText = '';
      return shaderText;
    }

    prepare_VertexWorldShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      vertexAttribs.forEach((attribName)=>{
        if (attribName === 'position' || attribName === 'normal' || attribName === 'tangent') {
          shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
          if (shaderProgram['vertexAttribute_' + attribName] !== -1) {
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);
          }
        }
      });

      material.setUniform(shaderProgram, 'uniform_objectIds', this._glContext.getUniformLocation(shaderProgram, 'objectIds'));

      material.setUniform(shaderProgram, 'uniform_worldMatrix', this._glContext.getUniformLocation(shaderProgram, 'worldMatrix'));
      material._semanticsDic['WORLD'] = 'worldMatrix';
      material.setUniform(shaderProgram, 'uniform_normalMatrix', this._glContext.getUniformLocation(shaderProgram, 'normalMatrix'));
      material._semanticsDic['MODELVIEWINVERSETRANSPOSE'] = 'normalMatrix';
      if (existCamera_f) {
        material.setUniform(shaderProgram, 'uniform_viewMatrix', this._glContext.getUniformLocation(shaderProgram, 'viewMatrix'));
        material._semanticsDic['VIEW'] = 'viewMatrix';
        material.setUniform(shaderProgram, 'uniform_projectionMatrix', this._glContext.getUniformLocation(shaderProgram, 'projectionMatrix'));
        material._semanticsDic['PROJECTION'] = 'projectionMatrix';
      }

      material.setUniform(shaderProgram, 'uniform_viewPosition', this._glContext.getUniformLocation(shaderProgram, 'viewPosition_world'));

      for(let i=0; i<lights.length; i++) {
        material.setUniform(shaderProgram, 'uniform_lightPosition_'+i, this._glContext.getUniformLocation(shaderProgram, `lightPosition_world[${i}]`));
        material.setUniform(shaderProgram, 'uniform_lightDirection_'+i, this._glContext.getUniformLocation(shaderProgram, `lightDirection_world[${i}]`));
        material.setUniform(shaderProgram, 'uniform_lightDiffuse_'+i, this._glContext.getUniformLocation(shaderProgram, `lightDiffuse[${i}]`));
        material.setUniform(shaderProgram, 'uniform_lightSpotInfo_'+i, this._glContext.getUniformLocation(shaderProgram, `lightSpotInfo[${i}]`));
      }


      return vertexAttribsAsResult;
    }
  }

  GLBoost['VertexWorldShaderSource'] = VertexWorldShaderSource;

  class Shader extends GLBoostObject {
    constructor(glBoostContext) {
      super(glBoostContext);

      this._glslProgram = null;
      this._dirty = true;
    }

    static initMixinMethodArray() {
      this.prototype._classNamesOfVSDefine = this.prototype._classNamesOfVSDefine ? this.prototype._classNamesOfVSDefine : [];
      this.prototype._classNamesOfVSMethodDefine = this.prototype._classNamesOfVSMethodDefine ? this.prototype._classNamesOfVSMethodDefine : [];
      this.prototype._classNamesOfVSPreProcess = this.prototype._classNamesOfVSPreProcess ? this.prototype._classNamesOfVSPreProcess : [];
      this.prototype._classNamesOfVSTransform = this.prototype._classNamesOfVSTransform ? this.prototype._classNamesOfVSTransform : [];

      this.prototype._classNamesOfFSDefine = this.prototype._classNamesOfFSDefine ? this.prototype._classNamesOfFSDefine : [];
      this.prototype._classNamesOfFSMethodDefine = this.prototype._classNamesOfFSMethodDefine ? this.prototype._classNamesOfFSMethodDefine : [];
      this.prototype._classNamesOfFSShade = this.prototype._classNamesOfFSShade ? this.prototype._classNamesOfFSShade : [];
      this.prototype._classNamesOfFSPostEffect = this.prototype._classNamesOfFSPostEffect ? this.prototype._classNamesOfFSPostEffect : [];
      this.prototype._classNamesOfFSFinalize = this.prototype._classNamesOfFSFinalize ? this.prototype._classNamesOfFSFinalize : [];

      this.prototype._classNamesOfPrepare = this.prototype._classNamesOfPrepare ? this.prototype._classNamesOfPrepare : [];
    }

    static mixin(source) {

      // create mixin method Array
      this.initMixinMethodArray();

      // register mixin methods to Array
      if(this.prototype._classNamesOfVSDefine.indexOf(source.name) === -1){
        this.prototype._classNamesOfVSDefine.push(source.name);
      }
      if(this.prototype._classNamesOfVSMethodDefine.indexOf(source.name) === -1){
        this.prototype._classNamesOfVSMethodDefine.push(source.name);
      }
      if(this.prototype._classNamesOfVSPreProcess.indexOf(source.name) === -1){
        this.prototype._classNamesOfVSPreProcess.push(source.name);
      }
      if(this.prototype._classNamesOfVSTransform.indexOf(source.name) === -1){
        this.prototype._classNamesOfVSTransform.push(source.name);
      }
      if(this.prototype._classNamesOfFSDefine.indexOf(source.name) === -1){
        this.prototype._classNamesOfFSDefine.push(source.name);
      }
      if(this.prototype._classNamesOfFSMethodDefine.indexOf(source.name) === -1){
        this.prototype._classNamesOfFSMethodDefine.push(source.name);
      }
      if(this.prototype._classNamesOfFSShade.indexOf(source.name) === -1){
        this.prototype._classNamesOfFSShade.push(source.name);
      }
      if(this.prototype._classNamesOfFSPostEffect.indexOf(source.name) === -1){
        this.prototype._classNamesOfFSPostEffect.push(source.name);
      }
      if(this.prototype._classNamesOfFSFinalize.indexOf(source.name) === -1){
        this.prototype._classNamesOfFSFinalize.push(source.name);
      }
      if(this.prototype._classNamesOfPrepare.indexOf(source.name) === -1){
        this.prototype._classNamesOfPrepare.push(source.name);
      }

      // mixin
      var target = this.prototype; source = source.prototype;
      Object.getOwnPropertyNames(source).forEach(function (name) {
        if (name !== 'constructor') Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(source, name));
      });
    }

    static swapMixin(current, newone) {
      // register mixin methods to Array
      let matchIdx = this.prototype._classNamesOfVSDefine.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfVSDefine[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfVSMethodDefine.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfVSMethodDefine[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfVSPreProcess.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfVSPreProcess[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfVSTransform.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfVSTransform[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfFSDefine.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSDefine[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfFSMethodDefine.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSMethodDefine[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfFSShade.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSShade[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfFSPostEffect.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSPostEffect[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfFSFinalize.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSFinalize[matchIdx] = newone.name;
      }
      matchIdx = this.prototype._classNamesOfPrepare.indexOf(current.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfPrepare[matchIdx] = newone.name;
      }

      // mixin
      var target = this.prototype; newone = newone.prototype;
      Object.getOwnPropertyNames(newone).forEach(function (name) {
        if (name !== 'constructor') Object.defineProperty(target, name, Object.getOwnPropertyDescriptor(newone, name));
      });
    }

    static removeMixin(source) {
      let matchIdx = this.prototype._classNamesOfVSDefine.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfVSDefine.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfVSMethodDefine.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfVSMethodDefineVSPreProcess.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfVSPreProcess.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfVSPreProcess.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfVSTransform.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfVSTransform.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfFSDefine.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSDefine.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfFSMethodDefine.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSMethodDefine.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfFSShade.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSShade.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfFSPostEffect.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSPostEffect.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfFSFinalize.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfFSFinalize.splice(matchIdx, 1);
      }
      matchIdx = this.prototype._classNamesOfPrepare.indexOf(source.name);
      if(matchIdx !== -1){
        this.prototype._classNamesOfPrepare.splice(matchIdx, 1);
      }
    }

    static isMixin(source) {

      // create mixin method Array
      this.initMixinMethodArray();

      // register mixin methods to Array
      if (this.prototype._classNamesOfVSDefine.indexOf(source.name) === -1) {
        return false;
      } else {
        return true;
      }
    }

    _removeDuplicatedLine(shaderString) {
      var splittedShaderLines = shaderString.split('\n');
      for (let i=0; i<splittedShaderLines.length; i++) {
        splittedShaderLines[i] += '\n';
        for (let j=0; j<i; j++) {
          if (splittedShaderLines[j] === splittedShaderLines[i]) {
            splittedShaderLines[j] = '//                                                            commented out because of duplicated: ' + splittedShaderLines[i];
          }
        }
      }

      let processedShaderString = '';
      for (let i=0; i<splittedShaderLines.length; i++) {
        processedShaderString += splittedShaderLines[i];
      }

      return processedShaderString;
    }

    _addLineNumber(shaderString) {
      let shaderTextLines = shaderString.split(/\r\n|\r|\n/);
      let shaderTextWithLineNumber = '';
      for (let i=0; i<shaderTextLines.length; i++) {
        let lineIndex = i+1;
        let splitter = ' : ';
        if (lineIndex<10) {
          splitter = '  : ';
        } else if (lineIndex>=100) {
          splitter = ': ';
        }
        shaderTextWithLineNumber += lineIndex + splitter + shaderTextLines[i] + '\n';
      }

      return shaderTextWithLineNumber;
    }

    _getVertexShaderString(gl, functions, existCamera_f, lights, material, extraData) {
      var f = functions;
      var shaderText = '';

      var in_ = Shader._in_onVert(gl);
      var out_ = Shader._out_onVert(gl);

      shaderText =   Shader._glslVer(gl);
      shaderText +=   'precision highp float;\n';
      shaderText +=   `${in_} vec3 aVertex_position;\n`;



      /// define variables
      // start defining variables. first, sub class Shader, ...
      // seconds, define variables as mixin shaders
      let vsDefineShaderText = '';
      this._classNamesOfVSDefine.forEach((className)=> {
        var method = this['VSDefine_' + className];
        if (method) {
          vsDefineShaderText += '//                                                            VSDefine_' + className + ' //\n';
          vsDefineShaderText += method.bind(this, in_, out_, f, lights, material, extraData)();
        }
      });
      shaderText += this._removeDuplicatedLine(vsDefineShaderText);

      /// define methods
      // start defining methods. first, sub class Shader, ...
      // seconds, define methods as mixin Shaders
      this._classNamesOfVSMethodDefine.forEach((className)=> {
        var method = this['VSMethodDefine_' + className];
        if (method) {
          shaderText += '//                                                            VSMethodDefine_' + className + ' //\n';
          shaderText += method.bind(this, existCamera_f, f, lights, material, extraData)();
        }
      });

      // begin of main function
      shaderText +=   'void main(void) {\n';
      shaderText +=   'vec4 position_local = vec4(aVertex_position, 1.0);\n';
      if (Shader._exist(f, GLBoost$1.NORMAL)) {
        shaderText += 'vec3 normal_local = aVertex_normal;\n';
        if (Shader._exist(f, GLBoost$1.TANGENT)) {
          shaderText += 'vec3 tangent_local = aVertex_tangent;\n';
        }
      }
      shaderText +=   'bool isSkinning = false;\n';

      /// PreProcess
      // start pre-processing. first, sub class Shader, ...
      // seconds, pre-process as mixin Shaders
      this._classNamesOfVSPreProcess.forEach((className)=> {
        var method = this['VSPreProcess_' + className];
        if (method) {
          shaderText += '//                                                            VSPreProcess_' + className + ' //\n';
          shaderText += method.bind(this, existCamera_f, f, lights, material, extraData)();
        }
      });

      /// Transform
      // start transforming. first, sub class Shader, ...
      // seconds, transform as mixin Shaders
      this._classNamesOfVSTransform.forEach((className)=> {
        var method = this['VSTransform_' + className];
        if (method) {
          shaderText += '//                                                            VSTransform_' + className + ' //\n';
          shaderText += method.bind(this, existCamera_f, f, lights, material, extraData)();
        }
      });

      // end of main function
      shaderText +=   '}';

      return shaderText;
    }


    _getFragmentShaderString(gl, functions, lights, material, extraData) {
      var f = functions;
      var shaderText = '';

      var in_ = Shader._in_onFrag(gl);

      shaderText +=   Shader._glslVer(gl);
      var maxDrawBuffers = this._getMaxDrawBuffers();
      if (maxDrawBuffers > 1) {
        shaderText += Shader._glsl1DrawBufferExt(gl);
      }
      shaderText += Shader._glsl1StdDerivativeExt(gl);
      shaderText +=   'precision highp float;\n';

      for (let i=0; i<maxDrawBuffers; i++) {
        shaderText +=   Shader._set_outColor_onFrag(gl, i);
      }

      /// define variables
      // start defining variables. first, sub class Shader, ...
      // seconds, define variables as mixin shaders
      let fsDefineShaderText = '';
      this._classNamesOfFSDefine.forEach((className)=> {
        var method = this['FSDefine_' + className];
        if (method) {
          fsDefineShaderText += '//                                                            FSDefine_' + className + ' //\n';
          fsDefineShaderText += method.bind(this, in_, f, lights, material, extraData)();
        }
      });
      shaderText += this._removeDuplicatedLine(fsDefineShaderText);


      /// define methods
      // start defining methods. first, sub class Shader, ...
      // seconds, define methods as mixin Shaders
      this._classNamesOfFSMethodDefine.forEach((className)=> {
        var method = this['FSMethodDefine_' + className];
        if (method) {
          shaderText += '//                                                            FSMethodDefine_' + className + ' //\n';
          shaderText += method.bind(this, in_, f, lights, material, extraData)();
        }
      });


      // begin of main function
      shaderText +=   'void main(void) {\n';


      /// Shading
      // start shading. first, sub class Shaders, ...
      // second, shade as mixin Shaders
      this._classNamesOfFSShade.forEach((className)=> {
        var method = this['FSShade_' + className];
        if (method) {
          shaderText += '//                                                            FSShade_' + className + ' //\n';
          shaderText += method.bind(this, f, gl, lights, material, extraData)();
        }
      });

      /// PostEffect
      // start posteffect. first, sub class Shaders, ...
      // second, shade as mixin Shaders
      this._classNamesOfFSPostEffect.forEach((className)=> {
        let method = this['FSPostEffect_' + className];
        if (method) {
          shaderText += '//                                                            FSPostEffect_' + className + ' //\n';
          shaderText += method.bind(this, f, gl, lights, material, extraData)();
        }
      });

      /// Finalize
      // start finalize. first, sub class Shaders, ...
      // second, shade as mixin Shaders
      this._classNamesOfFSFinalize.forEach((className)=> {
        let method = this['FSFinalize_' + className];
        if (method) {
          shaderText += '//                                                            FSFinalize_' + className + ' //\n';
          shaderText += method.bind(this, f, gl, lights, material, extraData)();
        }
      });

      // end of main function
      if (maxDrawBuffers > 1) {
        for (let i=0; i<maxDrawBuffers; i++) {
          shaderText += Shader._set_glFragData_inGLVer1(gl, i);
        }
      } else {
        shaderText += Shader._set_glFragColor_inGLVer1(gl);
      }
      shaderText +=   '}';

      return shaderText;
    }

    _prepareAssetsForShaders(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData, canvas) {
      var temp = [];

      this._glContext.useProgram(shaderProgram);
      this._classNamesOfPrepare.forEach((className)=> {
        var method = this['prepare_' + className];
        if (method) {
          var verAttirbs = method.bind(this, gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData, canvas)();
          temp = temp.concat(verAttirbs);
        }
      });
      let set = new Set(temp);

      let vertexAttribsAsResult = [];
      for (let elem of set) {
        vertexAttribsAsResult.push(elem);
      }

      return vertexAttribsAsResult;
    }

    get dirty() {
      return this._dirty;
    }

    set dirty(flg) {
      this._dirty = flg;
    }

    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      //super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);
    }

    setUniformsAsTearDown(gl, glslProgram, scene, material, camera, mesh, lights) {
      //super.setUniformsAsTearDown(gl, glslProgram, scene, material, camera, mesh, lights);
    }

    _getShader(gl, theSource, type) {
      var shader;

      if (type == 'x-shader/x-fragment') {
        shader = this._glContext.createShader(this, gl.FRAGMENT_SHADER);
      } else if (type == 'x-shader/x-vertex') {
        shader = this._glContext.createShader(this, gl.VERTEX_SHADER);
      } else {
        // Unknown shader type
        shader = null;
      }

      gl.shaderSource(shader, theSource);

      // Compile the shader program
      gl.compileShader(shader);

      // See if it compiled successfully
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        console.error(gl.getShaderInfoLog(shader));

        shader = null;
      }
    

      return shader;
    }

    _initShaders(gl, vertexShaderStr, fragmentShaderStr) {
      let vertexShaderStrWithLineNumber = this._addLineNumber(vertexShaderStr);
      let fragmentShaderStrWithLineNumber = this._addLineNumber(fragmentShaderStr);
      MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE, 'Vertex Shader:');
      MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE, vertexShaderStrWithLineNumber);
      MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE, 'Fragment Shader:');
      MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE, fragmentShaderStrWithLineNumber);

      var vertexShader = this._getShader(gl, vertexShaderStr, 'x-shader/x-vertex');
      var fragmentShader = this._getShader(gl, fragmentShaderStr, 'x-shader/x-fragment');

      if (vertexShader === null || fragmentShader === null) {
        return null;
      }

      // Create the shader program
      var shaderProgram = this._glContext.createProgram(this);
      gl.attachShader(shaderProgram, vertexShader);
      gl.attachShader(shaderProgram, fragmentShader);
      gl.linkProgram(shaderProgram);
      this._glContext.deleteShader(this, vertexShader);
      this._glContext.deleteShader(this, fragmentShader);

      // If creating the shader program failed, alert
      if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(shaderProgram));
        console.error(gl.getProgramInfoLog(shaderProgram));
      }

      this._glContext.useProgram(shaderProgram);


      shaderProgram.vertexShaderSource = vertexShaderStrWithLineNumber;
      shaderProgram.fragmentShaderSource = fragmentShaderStrWithLineNumber;

      return shaderProgram;
    }

    getShaderProgram(expression, vertexAttribs, existCamera_f, lights_, material, extraData = {}) {
      var gl = this._glContext.gl;
      var canvasId = this._glContext.belongingCanvasId;

      let programToReturn = null;
      let lights = null;
      
      do {
        lights = this.getDefaultPointLightIfNotExist(lights_);
        lights = lights.filter((light)=>{return !light.isTypeAmbient();});

        var vertexShaderText = this._getVertexShaderString(gl, vertexAttribs, existCamera_f, lights, material, extraData);
        var fragmentShaderText = this._getFragmentShaderString(gl, vertexAttribs, lights, material,  extraData);

        // lookup shaderHashTable
        var baseText = vertexShaderText + '\n###SPLIT###\n' + fragmentShaderText;
        var hash = Hash.toCRC32(baseText);
        if (!Shader._shaderHashTable[canvasId]) {
          Shader._shaderHashTable[canvasId] = {};
        }
        var hashTable = Shader._shaderHashTable[canvasId];
        if (hash in hashTable) {
          if (hashTable[hash].code === baseText) {
            programToReturn = hashTable[hash].program;
          } else {
            for (let i=0; i<hashTable[hash].collisionN; i++) {
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

          // register it to shaderHashTable.
          let indexStr = null;
          if (typeof hashTable[hash] !== 'undefined' && hashTable[hash].collisionN > 0) {
            indexStr = hash + '_' + hashTable[hash].collisionN;
          } else {
            indexStr = hash;
          }

          MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE, 'ShaderInstance: ' + material.shaderInstance + '   ShaderHashId: ' + indexStr);
          programToReturn = this._initShaders(gl, vertexShaderText, fragmentShaderText);
          if (programToReturn !== null) {
            programToReturn.createdAt = performance.now();
            programToReturn.hashId = indexStr;
            programToReturn.glslProgramsSelfUsageCount = -1;

            hashTable[indexStr] = {code:baseText, program:programToReturn, collisionN:0};
            Shader._shaderHashTable[canvasId] = hashTable;
          } else if (this.className === "SkeletalShader") {
            GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL++;
            console.log('GLBoost.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL was changed to : '+GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL);
          }

        }
      } while (programToReturn === null && this.className === "SkeletalShader" && GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL < 3);

      this._glslProgram = programToReturn;

      material._semanticsDic = {_glslProgram:programToReturn};
      material.uniformTextureSamplerDic = {};
      programToReturn._material = material;
      programToReturn.optimizedVertexAttribs = this._prepareAssetsForShaders(gl, programToReturn, expression, vertexAttribs, existCamera_f, lights, material, extraData);

      return programToReturn;
    }

    static _createShaderInstance(glBoostContext, shaderClass) {
      let shaderInstance = new shaderClass(glBoostContext, VertexWorldShaderSource);
      return shaderInstance;
    }

    getDefaultPointLightIfNotExist(lights) {

      if (lights.length === 0) {
        if (Shader._defaultLight === null) {
          Shader._defaultLight = this._glBoostContext.createPointLight(GLBoost$1.VALUE_DEFAULT_POINTLIGHT_INTENSITY);
        }
        return [Shader._defaultLight];
      } else {
        return lights;
      }
    }

    static _exist(functions, glboostConstantForAttributeType) {
      let attribute = GLBoost$1.getValueOfGLBoostConstant(glboostConstantForAttributeType);
      return functions.indexOf(attribute) >= 0;
    }

    _getMaxDrawBuffers() {
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

    static isThisGLVersion_2(gl) {
      if (typeof WebGL2RenderingContext === 'undefined') {
        return false;
      }
      return gl instanceof WebGL2RenderingContext;
    }

    static _glslVer(gl) {
      return GLBoost$1.isThisGLVersion_2(gl) ? '#version 300 es\n' : '';
    }

    static _glsl1DrawBufferExt(gl) {
      return !GLBoost$1.isThisGLVersion_2(gl) ? '#extension GL_EXT_draw_buffers : require\n' : '';
    }
    static _glsl1StdDerivativeExt(gl) {
      return !GLBoost$1.isThisGLVersion_2(gl) ? '#extension GL_OES_standard_derivatives : require\n' : '';
    }

    static _in_onVert(gl) {
      return GLBoost$1.isThisGLVersion_2(gl) ? 'in' : 'attribute';
    }
    static _out_onVert(gl) {
      return GLBoost$1.isThisGLVersion_2(gl) ? 'out' : 'varying';
    }
    static _in_onFrag(gl) {
      return GLBoost$1.isThisGLVersion_2(gl) ? 'in' : 'varying';
    }

    static _texture_func(gl) {
      return GLBoost$1.isThisGLVersion_2(gl) ? 'texture' : 'texture2D';
    }

    static _textureProj_func(gl) {
      return GLBoost$1.isThisGLVersion_2(gl) ? 'shadowProj' : 'texture2DProj';
    }

    static _generateLightStr(i) {
      let shaderText = '';
      
      // if PointLight: lightPosition[i].w === 1.0      if DirectionalLight: lightPosition[i].w === 0.0
      shaderText += `    vec3 lightDirection = lightDirection_world[${i}];\n`;    
      shaderText += `    if (0.4 < lightSpotInfo[${i}].x) {\n`; // is pointlight or spotlight
      shaderText += `      lightDirection = normalize(lightPosition_world[${i}] - v_position_world.xyz);\n`;
      shaderText += `    }\n`;
      shaderText += `    float spotEffect = 1.0;\n`;
      shaderText += `    if (lightSpotInfo[${i}].x > 0.8) {\n`; // is spotlight
      shaderText += `      spotEffect = dot(lightDirection_world[${i}], lightDirection);\n`;
      shaderText += `      if (spotEffect > lightSpotInfo[${i}].y) {\n`; // lightSpotInfo[${i}].y == spotCosCutoff
      shaderText += `        spotEffect = pow(spotEffect, lightSpotInfo[${i}].z);\n`; // lightSpotInfo[${i}].z == spotExponent
      shaderText += `      } else {\n`;
      shaderText += `        spotEffect = 0.0;\n`;
      shaderText += `      }\n`;
      shaderText += `    }\n`;

      return shaderText;
    }

    static _generateShadowingStr(gl, i, isShadowEnabledAsTexture) {
      let shadowingText = '';
      shadowingText += `float visibilityForShadow = 0.75;\n`;
      shadowingText += `float visibility = 1.0;\n`;
      shadowingText += `float visibilitySpecular = 1.0;\n`;
      shadowingText += `if (isShadowCasting[${i}] == 1) {// ${i}\n`;
      shadowingText += `vec4 shadowCoord_i = shadowCoord[${i}];\n`;
      shadowingText += `shadowCoord_i.z -= depthBias;\n`;

      if (GLBoost$1.isThisGLVersion_2(gl)) {
        if (isShadowEnabledAsTexture) {
          shadowingText += `visibilitySpecular = textureProj(uDepthTexture[${i}], shadowCoord_i);\n`;
          shadowingText += `visibility = visibilitySpecular + visibilityForShadow;\n`;
        }
      } else {
        if (isShadowEnabledAsTexture) {
  //        shadowingText += `  shadowCoord_i.y = 1.0 - shadowCoord_i.y;\n`;
          shadowingText += `float depth = texture2DProj(uDepthTexture[${i}], shadowCoord_i).r;\n`;
          shadowingText += `if (depth < shadowCoord_i.z) {\n`;
  //        shadowingText += `if (depth < 0.9) {\n`;
          shadowingText += `  visibility = visibilityForShadow;\n`;
          shadowingText += `  visibilitySpecular = 0.0;\n`;
  //        shadowingText += `  visibilityLevel = 0.0;\n`;
          shadowingText += `}\n`;
        }
      }
      shadowingText += `}\n`;

      return shadowingText;
    };

    static _getNormalStr(gl, material, f) {
      let shaderText = '';
      let normalTexture = material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_NORMAL);
      if (!normalTexture && Shader._exist(f, GLBoost$1.NORMAL)) {
        shaderText += '  vec3 normal = normalize(v_normal_world);\n';
        shaderText += '  vec3 normal_world = normal;\n';
      } else if (material.isFlatShading || !Shader._exist(f, GLBoost$1.NORMAL)) {
        if (!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL) {
          shaderText += '  vec3 dx = dFdx(v_position_world);\n';
          shaderText += '  vec3 dy = dFdy(v_position_world);\n';

    //      shaderText += '  normal = dot(viewDirection_world, cross(dx, dy)) >= 0.0 ? normalize(cross(dx, dy)) : normalize(cross(dy, dx));\n';
          shaderText += '  vec3 normal = normalize(cross(dx, dy));\n';
          shaderText += '  vec3 normal_world = normal;\n';
        }
        //      shaderText += '  normal *= -1.0;\n';
      } else if (normalTexture && Shader._exist(f, GLBoost$1.TANGENT)) {
        let textureFunc = Shader._texture_func(gl);
        shaderText += `  vec3 normal = ${textureFunc}(uNormalTexture, texcoord).xyz*2.0 - 1.0;\n`;
        shaderText += `  vec3 tangent_world = normalize(v_tangent_world);\n`;
        shaderText += `  vec3 binormal_world = normalize(v_binormal_world);\n`;
        shaderText += `  vec3 normal_world = normalize(v_normal_world);\n`;      

        shaderText += `  mat3 tbnMat_tangent_to_world = mat3(
        tangent_world.x, tangent_world.y, tangent_world.z,
        binormal_world.x, binormal_world.y, binormal_world.z,
        normal_world.x, normal_world.y, normal_world.z
      );\n`;
        
        shaderText += `  normal = normalize(tbnMat_tangent_to_world * normal);\n`;
        shaderText += `  normal_world = normal;\n`;

      }

      return shaderText;
    }

    _multiplyAlphaToColorOfTexel(gl) {
      var gl = this._glContext.gl;
      let shaderText = "";
      let textureFunc = Shader._texture_func(gl);
      shaderText += `vec4 multiplyAlphaToColorOfTexel(sampler2D texture, vec2 texcoord, int toMultiplyAlphaFlag) {\n`;
      shaderText += `  vec4 texel = ${textureFunc}(texture, texcoord);\n`;
      shaderText += `  if (toMultiplyAlphaFlag == 1) {\n`;      
      shaderText += `    texel.rgb *= texel.a;\n`;
      shaderText += `  }\n`;
      shaderText += `  return texel;\n`;
      shaderText += `}\n`;

      return shaderText;
    }

    _sampler2DShadow_func() {
      var gl = this._glContext.gl;
      return GLBoost$1.isThisGLVersion_2(gl) ? 'sampler2DShadow' : 'sampler2D';
    }

    static _set_outColor_onFrag(gl, i) {
      return GLBoost$1.isThisGLVersion_2(gl) ? `layout(location = ${i}) out vec4 rt${i};\n` : `vec4 rt${i};\n`;
    }

    static _set_glFragColor_inGLVer1(gl) {
      return !GLBoost$1.isThisGLVersion_2(gl) ? '  gl_FragColor = rt0;\n' : '';
    }
    static _set_glFragData_inGLVer1(gl, i) {
      return !GLBoost$1.isThisGLVersion_2(gl) ? `  gl_FragData[${i}] = rt${i};\n` : '';
    }

    static trySettingMatrix44ToUniform(gl, hashIdOfGLSLProgram, material, semanticsDir, semantics, matrixArray) {
      if (typeof semanticsDir[semantics] === 'undefined') {
        return;
      }
      if (typeof semanticsDir[semantics] === 'string') {
        gl.uniformMatrix4fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+semanticsDir[semantics]), false, matrixArray);
        return;
      }

      // it must be an Array...
      semanticsDir[semantics].forEach((uniformName)=>{
        gl.uniformMatrix4fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+uniformName), false, matrixArray);
      });
    }

    static trySettingMatrix33ToUniform(gl, hashIdOfGLSLProgram, material, semanticsDir, semantics, matrixArray) {
      if (typeof semanticsDir[semantics] === 'undefined') {
        return;
      }
      if (typeof semanticsDir[semantics] === 'string') {
        gl.uniformMatrix3fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+semanticsDir[semantics]), false, matrixArray);
        return;
      }

      // it must be an Array...
      semanticsDir[semantics].forEach((uniformName)=>{
        gl.uniformMatrix3fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+uniformName), false, matrixArray);
      });
    }

    static trySettingVec4ArrayToUniform(gl, hashIdOfGLSLProgram, material, semanticsDir, semantics, vecArray) {
      if (typeof semanticsDir[semantics] === 'undefined') {
        return;
      }
      if (typeof semanticsDir[semantics] === 'string') {
        gl.uniform4fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+semanticsDir[semantics]), vecArray);
        return;
      }

      // it must be an Array...
      semanticsDir[semantics].forEach((uniformName)=>{
        gl.uniform4fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+uniformName), vecArray);
      });
    }  

    static trySettingVec3ArrayToUniform(gl, hashIdOfGLSLProgram, material, semanticsDir, semantics, vecArray) {
      if (typeof semanticsDir[semantics] === 'undefined') {
        return;
      }
      if (typeof semanticsDir[semantics] === 'string') {
        gl.uniform3fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+semanticsDir[semantics]), vecArray);
        return;
      }

      // it must be an Array...
      semanticsDir[semantics].forEach((uniformName)=>{
        gl.uniform3fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+uniformName), vecArray);
      });
    }  

    static trySettingVec2ArrayToUniform(gl, hashIdOfGLSLProgram, material, semanticsDir, semantics, vecArray) {
      if (typeof semanticsDir[semantics] === 'undefined') {
        return;
      }
      if (typeof semanticsDir[semantics] === 'string') {
        gl.uniform2fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+semanticsDir[semantics]), vecArray);
        return;
      }

      // it must be an Array...
      semanticsDir[semantics].forEach((uniformName)=>{
        gl.uniform2fv(material.getUniform(hashIdOfGLSLProgram, 'uniform_'+uniformName), vecArray);
      });
    } 

    get glslProgram() {
      return this._glslProgram;
    }

    readyForDiscard() {
      if (this._glslProgram) {
        this._glContext.deleteProgram(this, this._glslProgram);
      }
      super.readyForDiscard();
    }

    getShaderParameter(material, parameterName, defaultValue) {
      if (typeof this[parameterName] !== 'undefined') {
        return this[parameterName];
      } else if (typeof material.shaderParameters[parameterName] !== 'undefined') {
        return material.shaderParameters[parameterName];
      }
      return defaultValue;
    }
  }

  Shader._instances = new Object();
  Shader._shaderHashTable = {};
  Shader._defaultLight = null;

  let singleton$1 = Symbol();
  let singletonEnforcer = Symbol();

  class DrawKickerLocal {
    constructor(enforcer) {
      if (enforcer !== singletonEnforcer) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }
      this._glslProgram = null;
    }

    static getInstance() {
      if (!this[singleton$1]) {
        this[singleton$1] = new DrawKickerLocal(singletonEnforcer);
      }
      return this[singleton$1];
    }

    draw(gl, glem, expression, mesh, materials, camera, lights, lightsExceptAmbient, scene, vertices, vaoDic, vboDic, iboArrayDic, geometry, geometryName, primitiveType, vertexN, renderPassIndex) {
      var isVAOBound = false;
      if (DrawKickerLocal._lastGeometry !== geometryName) {
        isVAOBound = glem.bindVertexArray(gl, vaoDic[geometryName]);
      }

      for (let i=0; i<materials.length;i++) {
        let material = materials[i];
        if (!material.isVisible) {
          continue;
        }

        let materialUpdateStateString = material.getUpdateStateString();
        if (materialUpdateStateString !== DrawKickerLocal._lastMaterialUpdateStateString) {
          this._glslProgram = material.shaderInstance.glslProgram;
          material._glContext.useProgram(this._glslProgram);
        }
        let glslProgram = this._glslProgram;

        if (!isVAOBound) {
          if (DrawKickerLocal._lastGeometry !== geometryName) {
            for (let attribName in vboDic) {
              gl.bindBuffer(gl.ARRAY_BUFFER, vboDic[attribName]);
              geometry.setUpVertexAttribs(gl, glslProgram, geometry._allVertexAttribs(vertices));
            }
          }
        }

        let opacity = mesh.opacityAccumulatedAncestry * scene.opacity;
        material._glContext.uniform1f(material.getUniform(glslProgram, 'uniform_opacity'), opacity, true);

        if (camera) {
          let world_m;
          if (mesh.isAffectedByWorldMatrix) {
            if (mesh.isAffectedByWorldMatrixAccumulatedAncestry) {
              world_m = mesh.worldMatrix;
            } else {
              world_m = mesh.transformMatrix;
            }
          } else {
            world_m = Matrix44.identity();
          }
          let viewMatrix;
          if (mesh.isAffectedByViewMatrix) {
            viewMatrix = camera.lookAtRHMatrix();
          } else {
            viewMatrix = Matrix44.identity();
          }
          let projectionMatrix;
          if (mesh.isAffectedByProjectionMatrix) {
            projectionMatrix = camera.projectionRHMatrix();
          } else {
            projectionMatrix = Matrix44.identity();
          }
          let pvm_m = projectionMatrix.multiply(viewMatrix).multiply(camera.inverseWorldMatrixWithoutMySelf).multiply(world_m);
          Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, glslProgram._semanticsDic, 'MODELVIEW', Matrix44.multiply(viewMatrix, world_m.flatten()));
          Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, glslProgram._semanticsDic, 'MODELVIEWPROJECTION',pvm_m.flatten());
        }

        if (material.getUniform(glslProgram, 'uniform_lightPosition_0')) {
          lights = material.shaderInstance.getDefaultPointLightIfNotExist(lights);
          if (material.getUniform(glslProgram, 'uniform_viewPosition')) {
            let cameraPosInLocalCoord = null;
            if (camera) {
              let cameraPos = camera.worldMatrixWithoutMySelf.multiplyVector(new Vector4(camera.eyeInner.x, camera.eyeInner.y, camera.eyeInner.z, 1.0));
              cameraPosInLocalCoord = mesh.inverseWorldMatrix.multiplyVector(new Vector4(cameraPos.x, cameraPos.y, cameraPos.z, 1));
            } else {
              cameraPosInLocalCoord = mesh.inverseWorldMatrix.multiplyVector(new Vector4(0, 0, 1, 1));
            }
            material._glContext.uniform3f(material.getUniform(glslProgram, 'uniform_viewPosition'), cameraPosInLocalCoord.x, cameraPosInLocalCoord.y, cameraPosInLocalCoord.z, true);
          }

          for (let j = 0; j < lights.length; j++) {
            if (material.getUniform(glslProgram, `uniform_lightPosition_${j}`) && material.getUniform(glslProgram, `uniform_lightDiffuse_${j}`)) {
              let lightVec = null;
              let isPointLight = -9999;
              if (lights[j] instanceof M_PointLight) {
                lightVec = new Vector4(0, 0, 0, 1);
                lightVec = lights[j].worldMatrix.multiplyVector(lightVec);
                isPointLight = 1.0;
              } else if (lights[j].className === 'M_DirectionalLight') {
                lightVec = new Vector4(lights[j].direction.x, lights[j].direction.y, lights[j].direction.z, 1);
                lightVec = lights[j].rotateMatrixAccumulatedAncestry.multiplyVector(lightVec);
                lightVec.w = 0.0;
                isPointLight = 0.0;
              }

              let lightVecInLocalCoord = mesh.inverseWorldMatrix.multiplyVector(lightVec);
              material._glContext.uniform4f(material.getUniform(glslProgram, `uniform_lightPosition_${j}`), lightVecInLocalCoord.x, lightVecInLocalCoord.y, lightVecInLocalCoord.z, isPointLight, true);

              material._glContext.uniform4f(material.getUniform(glslProgram, `uniform_lightDiffuse_${j}`), lights[j].intensity.x, lights[j].intensity.y, lights[j].intensity.z, 1.0, true);
            }
          }
        }

        let isMaterialSetupDone = true;

        {
          var needTobeStillDirty = material.shaderInstance.setUniforms(gl, glslProgram, scene, material, camera, mesh);
          material.shaderInstance.dirty = needTobeStillDirty ? true : false;

          isMaterialSetupDone = material.setUpTexture();
          return;
        }

        if (geometry.isIndexed()) {
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboArrayDic[geometryName][i]);
          gl.drawElements(primitiveType, material.getVertexN(geometry), glem.elementIndexBitSize(gl), 0);
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        } else {
          gl.drawArrays(primitiveType, 0, vertexN);
        }


        DrawKickerLocal._lastMaterialUpdateStateString = isMaterialSetupDone ? materialUpdateStateString : null;
      }

      //gl.bindBuffer(gl.ARRAY_BUFFER, null);

      DrawKickerLocal._lastGeometry = geometryName;
      DrawKickerLocal._lastRenderPassIndex = renderPassIndex;
    }
  }

  DrawKickerLocal._lastMaterialUpdateStateString = null;
  DrawKickerLocal._lastGeometry = null;
  DrawKickerLocal._lastRenderPassIndex = -1;

  let singleton$2 = Symbol();
  let singletonEnforcer$1 = Symbol();

  class DrawKickerWorld {
    constructor(enforcer) {
      if (enforcer !== singletonEnforcer$1) {
        throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');
      }
      this._glslProgram = null;
    }

    static getInstance() {
      if (!this[singleton$2]) {
        this[singleton$2] = new DrawKickerWorld(singletonEnforcer$1);
      }
      return this[singleton$2];
    }

    static setCamera(gl, glslProgram, material, world_m, normal_m, camera, mesh) {
      Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'WORLD', world_m.flatten());
      Shader.trySettingMatrix33ToUniform(gl, glslProgram, material, material._semanticsDic, 'MODELVIEWINVERSETRANSPOSE', normal_m.flatten());

      if (camera) {
        let viewMatrix;
        if (mesh.isAffectedByViewMatrix) {
          let cameraMatrix = camera.lookAtRHMatrix();
  //          viewMatrix = cameraMatrix.multiply(camera.inverseWorldMatrixWithoutMySelf);
          viewMatrix = cameraMatrix.multiply(camera.inverseWorldMatrix);
        } else {
          viewMatrix = Matrix44$2.identity();
        }

        let projectionMatrix;
        if (mesh.isAffectedByProjectionMatrix) {
          projectionMatrix = camera.projectionRHMatrix();
        } else {
          projectionMatrix = Matrix44$2.identity();
        }

        Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'VIEW', viewMatrix.flatten());
        Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'PROJECTION', projectionMatrix.flatten());
        Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'MODELVIEW', Matrix44$2.multiply(viewMatrix, world_m).flatten());

        camera._lastPVMatrixFromLight = Matrix44$2.multiply(projectionMatrix, viewMatrix);
      }
    }

    static setVRCamera(gl, glslProgram, material, world_m, normal_m, webvrFrameData, mesh, leftOrRight) {
      Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'WORLD', world_m.flatten());
      Shader.trySettingMatrix33ToUniform(gl, glslProgram, material, material._semanticsDic, 'MODELVIEWINVERSETRANSPOSE', normal_m.flatten());

      if (webvrFrameData) {
        let viewMatrix;
        if (mesh.isAffectedByViewMatrix) {
          const invertSittingToStandingTransform = (new Matrix44$2(webvrFrameData.sittingToStandingTransform, true)).invert();
          const leftOrRightViewMatrix = new Matrix44$2(webvrFrameData[leftOrRight + 'ViewMatrix'], true);
          viewMatrix = Matrix44$2.multiply(leftOrRightViewMatrix, invertSittingToStandingTransform);
        } else {
          viewMatrix = Matrix44$2.identity();
        }

        let projectionMatrix;
        if (mesh.isAffectedByProjectionMatrix) {
          projectionMatrix = new Matrix44$2(webvrFrameData[leftOrRight + 'ProjectionMatrix'], true);
        } else {
          projectionMatrix = Matrix44$2.identity();
        }

        Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'VIEW', viewMatrix.flatten());
        Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'PROJECTION', projectionMatrix.flatten());
        Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'MODELVIEW', Matrix44$2.multiply(viewMatrix, world_m).flatten());

  //      camera._lastPVMatrixFromLight = Matrix44.multiply(projectionMatrix, viewMatrix);
      }
    }

    draw(data) {
      const gl = data.gl;
      const glem = data.glem;
      const expression = data.expression;
      const mesh = data.mesh;
      const originalMaterials = data.materials;
      const camera = data.camera;
      let lights = data.lights;
      const scene = data.scene;
      const vertices = data.vertices;
      const vaoDic = data.vaoDic;
      const vboDic = data.vboDic;
      const iboArrayDic = data.iboArrayDic;
      const geometry = data.geometry;
      const geometryName = data.geometryName;
      const primitiveType = data.primitiveType;
      const vertexN = data.vertexN;
      const renderPassIndex = data.renderPassIndex;
      const viewport = data.viewport;
      const isWebVRMode = data.isWebVRMode;
      const webvrFrameData = data.webvrFrameData;

      var isVAOBound = glem.bindVertexArray(gl, vaoDic[geometryName]);

      let input = mesh._getCurrentAnimationInputValue('time');



      for (let i=0; i<originalMaterials.length;i++) {
        let material = originalMaterials[i];
        if (!material.isVisible) {
          continue;
        }

        let renderpassSpecificMaterial = material['renderpassSpecificMaterial_' + expression.renderPasses[renderPassIndex].instanceName + '_material_' + i];
        if (renderpassSpecificMaterial) {
          material = renderpassSpecificMaterial;
        }
        this._glslProgram = material.shaderInstance.glslProgram;

        material._glContext.useProgram(this._glslProgram);
        let glslProgram = this._glslProgram;

        if (!isVAOBound) {
          if (DrawKickerWorld._lastGeometry !== geometryName) {
            for (let attribName in vboDic) {
              gl.bindBuffer(gl.ARRAY_BUFFER, vboDic[attribName]);
              geometry.setUpVertexAttribs(gl, glslProgram, Geometry._allVertexAttribs(vertices));
            }
          }
        }

        material._glContext.uniform2i(material.getUniform(glslProgram, 'uniform_objectIds'), mesh.objectIndex, 0, true);

        let opacity = mesh.opacityAccumulatedAncestry * scene.opacity;
        let query_result_uniform_opacity = material.getUniform(glslProgram, 'uniform_opacity');
        material._glContext.uniform1f(query_result_uniform_opacity, opacity, true);

        let world_m;
        let normal_m;
        if (mesh.isAffectedByWorldMatrix) {
          if (mesh.isAffectedByWorldMatrixAccumulatedAncestry) {
            world_m = mesh.getWorldMatrixAt(input);
            normal_m = mesh.normalMatrix;
          } else {
            world_m = mesh.matrix;
            normal_m = mesh.normalMatrix;
          }
        } else {
          world_m = Matrix44$2.identity();
          normal_m = Matrix33.identity();
        }

        if (material.getUniform(glslProgram, 'uniform_lightPosition_0')) {
          lights = material.shaderInstance.getDefaultPointLightIfNotExist(lights);
          
          if (material.getUniform(glslProgram, 'uniform_viewPosition')) {
            let cameraPos = new Vector4(0, 0, 1, 1);
            if (camera) {
              cameraPos = camera.worldMatrixWithoutMySelf.multiplyVector(new Vector4(camera.eyeInner.x, camera.eyeInner.y, camera.eyeInner.z, 1.0));
            //  console.log(cameraPos);
            }
            material._glContext.uniform3f(material.getUniform(glslProgram, 'uniform_viewPosition'), cameraPos.x, cameraPos.y, cameraPos.z, true);
          }

          for (let j = 0; j < lights.length; j++) {
            let light = lights[j];
            if (material.getUniform(glslProgram, `uniform_lightPosition_${j}`) && material.getUniform(glslProgram, `uniform_lightDiffuse_${j}`)) {
              let lightPosition = new Vector4(0, 0, 0, 1);            
              let lightDirection = new Vector4(0, 0, 0, 1);
              // Directional: [0.0, 0.4), Point:[0.4, 0.6), Spot:[0.6, 1.0]
              let lightType = 0.0; // M_DirectionalLight
              if (light.className === 'M_PointLight') {
                lightType = 0.5;
              } else if (light.className === 'M_SpotLight') {
                lightType = 1.0;
              }
              if (light.className === 'M_PointLight' || light.className === 'M_SpotLight') {
                lightPosition = light.worldMatrix.multiplyVector(lightPosition);
              }
              if (light.className === 'M_DirectionalLight' || light.className === 'M_SpotLight') {
  //              lightDirection = new Vector3(0, 0, 1);
  //              lightDirection = light.worldMatrix.multiplyVector(lightDirection.toVector4()).toVector3();
                lightDirection = light.directionInWorld;
                lightDirection.normalize();
              }
              material._glContext.uniform3f(material.getUniform(glslProgram, `uniform_lightPosition_${j}`), lightPosition.x, lightPosition.y, lightPosition.z, true);
              material._glContext.uniform3f(material.getUniform(glslProgram, `uniform_lightDirection_${j}`), lightDirection.x, lightDirection.y, lightDirection.z, true);
              material._glContext.uniform4f(material.getUniform(glslProgram, `uniform_lightDiffuse_${j}`), light.intensity.x, light.intensity.y, light.intensity.z, 1.0, true);
              if (light.className === 'M_SpotLight') {
                material._glContext.uniform3f(material.getUniform(glslProgram, `uniform_lightSpotInfo_${j}`), lightType, light.spotCosCutoff, light.spotExponent, true);              
              } else {
                material._glContext.uniform3f(material.getUniform(glslProgram, `uniform_lightSpotInfo_${j}`), lightType, 0, 0, true);              
              }
            }
          }
        }

        {
          let needTobeStillDirty = material.shaderInstance.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);
          material.shaderInstance.dirty = needTobeStillDirty ? true : false;

          material.setUpStates();

          this._setUpOrTearDownTextures(true, material);
        }
        
        this._setupOtherTextures(lights);

        geometry.drawIntermediate(gl, glslProgram, mesh, material);

        if (isWebVRMode) {
          // Left Eye
   //       DrawKickerWorld.drawGeometry(geometry, material, glem, gl, i, primitiveType, vertexN);

          gl.viewport.apply(gl, [viewport[0], viewport[1], viewport[2] * 0.5, viewport[3]]);
          DrawKickerWorld.setVRCamera(gl, glslProgram, material, world_m, normal_m, webvrFrameData, mesh, 'left');
          DrawKickerWorld.drawGeometry(geometry, material, glem, gl, i, primitiveType, vertexN);

          // Right Eye
          gl.viewport.apply(gl, [viewport[2] * 0.5, viewport[1], viewport[2] * 0.5, viewport[3]]);
          DrawKickerWorld.setVRCamera(gl, glslProgram, material, world_m, normal_m, webvrFrameData, mesh, 'right');
          DrawKickerWorld.drawGeometry(geometry, material, glem, gl, i, primitiveType, vertexN);
        } else {
          DrawKickerWorld.setCamera(gl, glslProgram, material, world_m, normal_m, camera, mesh);
          DrawKickerWorld.drawGeometry(geometry, material, glem, gl, i, primitiveType, vertexN);
        }


        material.shaderInstance.setUniformsAsTearDown(gl, glslProgram, scene, material, camera, mesh, lights);

        this._tearDownOtherTextures(lights);

        material.tearDownStates();

      }

      glem.bindVertexArray(gl, null);

  //    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  //    gl.bindBuffer(gl.ELEMENT_BUFFER, null);

      //DrawKickerWorld._lastRenderPassIndex = renderPassIndex;
    }

    static drawGeometry(geometry, material, glem, gl, i, primitiveType, vertexN) {
      if (geometry.isIndexed()) {
        //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, iboArrayDic[geometryName]);
        let vertexN = material.getVertexN(geometry);
        let indexBitSizeGLConstant = glem.elementIndexBitSizeGLConstant(gl);
        let indexByteSizeNumber = glem.elementIndexByteSizeNumber(gl);
        let offset = geometry.getIndexStartOffsetArrayAtMaterial(i);
        gl.drawElements(primitiveType, vertexN, indexBitSizeGLConstant, offset * indexByteSizeNumber);
        //gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
      } else {
        gl.drawArrays(primitiveType, 0, vertexN);
      }
    }

    _setUpOrTearDownTextures(isSetUp, material) {
      let methodName = 'tearDownTexture';
      if (isSetUp) {
        methodName = 'setUpTexture';
      }

      let isTextureProcessDone = true;
      if (typeof material._semanticsDic['TEXTURE'] === 'undefined') ; else if (typeof material._semanticsDic['TEXTURE'] === 'string') {
        let textureSamplerDic = material.uniformTextureSamplerDic[material._semanticsDic['TEXTURE']];
        let textureName = textureSamplerDic.textureName;
        let textureUnitIndex = textureSamplerDic.textureUnitIndex;
        isTextureProcessDone = material[methodName](textureName, textureUnitIndex);
      } else {
        // it must be an Array...
        material._semanticsDic['TEXTURE'].forEach((uniformName) => {
          let textureSamplerDic = material.uniformTextureSamplerDic[uniformName];
          let textureName = textureSamplerDic.textureName;
          let textureUnitIndex = textureSamplerDic.textureUnitIndex;
          isTextureProcessDone = material[methodName](textureName, textureUnitIndex);
        });
      }

      return isTextureProcessDone;
    }

    _setupOtherTextures(lights) {
      for(let i=0; i<lights.length; i++) {
        if (lights[i].camera && lights[i].camera.texture) {// && lights[i].isCastingShadow) {
          lights[i].camera.texture.setUp();
        }
      }
    }

    _tearDownOtherTextures(lights) {
      for(let i=0; i<lights.length; i++) {
        if (lights[i].camera && lights[i].camera.texture)  {// && lights[i].isCastingShadow) {
          lights[i].camera.texture.tearDown();
        }
      }
    }
  }

  //DrawKickerWorld._lastMaterialUpdateStateString = null;
  //DrawKickerWorld._lastGeometry = null;
  //DrawKickerWorld._lastRenderPassIndex = -1;

  class VertexLocalShaderSource {
    VSDefine_VertexLocalShaderSource(in_, out_, f) {
      let shaderText = '';

      if (Shader._exist(f, GLBoost.NORMAL)) {
        shaderText += `${in_} vec3 aVertex_normal;\n`;
        shaderText += `${out_} vec3 v_normal;\n`;
      }
      shaderText += `${out_} vec4 position;\n`;
      shaderText +=      'uniform mat4 modelViewProjectionMatrix;\n';
      return shaderText;
    }

    VSTransform_VertexLocalShaderSource(existCamera_f, f) {
      var shaderText = '';
      if (existCamera_f) {
        shaderText +=   '  gl_Position = modelViewProjectionMatrix * position_local;\n';
        shaderText +=   '  mat4 pvwMatrix = modelViewProjectionMatrix;\n';
      } else {
        shaderText +=   '  gl_Position = position_local;\n';
      }
      if (Shader._exist(f, GLBoost.NORMAL)) {
        shaderText += '  v_normal = aVertex_normal;\n';
      }
      shaderText += '  position = vec4(aVertex_position, 1.0);\n';

      return shaderText;
    }

    FSDefine_VertexLocalShaderSource(in_, f, lights, material, extraData) {
      var shaderText = '';
      if(lights.length > 0) {
        shaderText += `uniform vec4 lightPosition[${lights.length}];\n`;
        shaderText += `uniform vec4 lightDiffuse[${lights.length}];\n`;
      }
      if (Shader._exist(f, GLBoost.NORMAL)) {
        shaderText += `${in_} vec3 v_normal;\n`;
      }
      shaderText += `${in_} vec4 position;\n`;

      return shaderText;
    }

    prepare_VertexLocalShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      vertexAttribs.forEach((attribName)=>{
        if (attribName === 'position' || attribName === 'normal') {
          shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
          gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
          vertexAttribsAsResult.push(attribName);
        }
      });

      if (existCamera_f) {
        material.setUniform(shaderProgram, 'uniform_modelViewProjectionMatrix', this._glContext.getUniformLocation(shaderProgram, 'modelViewProjectionMatrix'));
        material._semanticsDic['MODELVIEWPROJECTION'] = 'modelViewProjectionMatrix';
      }

      for(let i=0; i<lights.length; i++) {
        material.setUniform(shaderProgram, 'uniform_lightPosition_'+i, this._glContext.getUniformLocation(shaderProgram, `lightPosition[${i}]`));
        material.setUniform(shaderProgram, 'uniform_lightDiffuse_'+i, this._glContext.getUniformLocation(shaderProgram, `lightDiffuse[${i}]`));
      }

      return vertexAttribsAsResult;
    }
  }

  GLBoost['VertexLocalShaderSource'] = VertexLocalShaderSource;

  class AABB {

    constructor() {
      this._AABB_min = new Vector3(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      this._AABB_max = new Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
      this._centerPoint = null;
      this._lengthCenterToCorner = null;

    }

    clone() {
      let instance = new AABB();
      instance._AABB_max = this._AABB_max.clone();
      instance._AABB_min = this._AABB_min.clone();
      instance._centerPoint = (this._centerPoint !== null) ? this._centerPoint.clone() : null;
      instance._lengthCenterToCorner = this._lengthCenterToCorner;

      return instance;
    }

    isVanilla() {
      if (this._AABB_min.x == Number.MAX_VALUE && this._AABB_min.y == Number.MAX_VALUE && this._AABB_min.z == Number.MAX_VALUE
        && this._AABB_max.x == -Number.MAX_VALUE && this._AABB_max.y == -Number.MAX_VALUE && this._AABB_max.z == -Number.MAX_VALUE) {
        return true;
      } else {
        return false;
      }
    }

    addPosition(positionVector) {
      this._AABB_min.x = (positionVector.x < this._AABB_min.x) ? positionVector.x : this._AABB_min.x;
      this._AABB_min.y = (positionVector.y < this._AABB_min.y) ? positionVector.y : this._AABB_min.y;
      this._AABB_min.z = (positionVector.z < this._AABB_min.z) ? positionVector.z : this._AABB_min.z;
      this._AABB_max.x = (this._AABB_max.x < positionVector.x) ? positionVector.x : this._AABB_max.x;
      this._AABB_max.y = (this._AABB_max.y < positionVector.y) ? positionVector.y : this._AABB_max.y;
      this._AABB_max.z = (this._AABB_max.z < positionVector.z) ? positionVector.z : this._AABB_max.z;

      return positionVector;
    }

    addPositionWithArray(array, index) {
      this._AABB_min.x = (array[index+0] < this._AABB_min.x) ? array[index+0] : this._AABB_min.x;
      this._AABB_min.y = (array[index+1] < this._AABB_min.y) ? array[index+1] : this._AABB_min.y;
      this._AABB_min.z = (array[index+2] < this._AABB_min.z) ? array[index+2] : this._AABB_min.z;
      this._AABB_max.x = (this._AABB_max.x < array[index+0]) ? array[index+0] : this._AABB_max.x;
      this._AABB_max.y = (this._AABB_max.y < array[index+1]) ? array[index+1] : this._AABB_max.y;
      this._AABB_max.z = (this._AABB_max.z < array[index+2]) ? array[index+2] : this._AABB_max.z;

      return array;
    }

    updateAllInfo() {
      this._centerPoint = Vector3.add(this._AABB_min, this._AABB_max).divide(2);
      this._lengthCenterToCorner = Vector3.lengthBtw(this._centerPoint, this._AABB_max);

      return this;
    }

    mergeAABB(aabb) {
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


    get minPoint() {
      return this._AABB_min;
    }

    get maxPoint() {
      return this._AABB_max;
    }

    get centerPoint() {
      return this._centerPoint;
    }

    get lengthCenterToCorner() {
      return this._lengthCenterToCorner;
    }

    static multiplyMatrix(matrix, aabb) {
       if (aabb.isVanilla()) {
         return aabb.clone();
       }
      var newAabb = new AABB();

      let AABB_0 = new Vector4(aabb._AABB_min.x, aabb._AABB_min.y, aabb._AABB_min.z, 1);
      let AABB_1 = new Vector4(aabb._AABB_max.x, aabb._AABB_min.y, aabb._AABB_min.z, 1);
      let AABB_2 = new Vector4(aabb._AABB_min.x, aabb._AABB_max.y, aabb._AABB_min.z, 1);
      let AABB_3 = new Vector4(aabb._AABB_min.x, aabb._AABB_min.y, aabb._AABB_max.z, 1);
      let AABB_4 = new Vector4(aabb._AABB_min.x, aabb._AABB_max.y, aabb._AABB_max.z, 1);
      let AABB_5 = new Vector4(aabb._AABB_max.x, aabb._AABB_min.y, aabb._AABB_max.z, 1);
      let AABB_6 = new Vector4(aabb._AABB_max.x, aabb._AABB_max.y, aabb._AABB_min.z, 1);
      let AABB_7 = new Vector4(aabb._AABB_max.x, aabb._AABB_max.y, aabb._AABB_max.z, 1);
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

    toString() {
      return 'AABB_min: ' + this._AABB_min + '\n' + 'AABB_max: ' + this._AABB_max + '\n'
        + 'centerPoint: ' + this._centerPoint + '\n' + 'lengthCenterToCorner: ' + this._lengthCenterToCorner;
    }
  }

  GLBoost$1['AABB'] = AABB;

  class FreeShader extends Shader {
    constructor(glBoostContext, vertexShaderText, fragmentShaderText, attributes, uniforms, textureNames) {
      super(glBoostContext);

      this._vertexShaderText = vertexShaderText;
      this._fragmentShaderText = fragmentShaderText;


      let newAttributes = {};
      for (let attributeName in attributes) {
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

      this._attributes = newAttributes;
      this._uniforms = uniforms;
      this._textureNames = textureNames;
    }

    _getVertexShaderString(gl, functions, existCamera_f, lights, material, extraData) {
      return this._vertexShaderText;
    }

    _getFragmentShaderString(gl, functions, lights, material, extraData) {
      return this._fragmentShaderText;
    }

    _prepareAssetsForShaders(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {
      var vertexAttribsAsResult = [];

      vertexAttribs.forEach((attribName)=>{
        shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, this._attributes[attribName]);
        if (shaderProgram['vertexAttribute_' + attribName] >= 0) {
          gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
          vertexAttribsAsResult.push(attribName);
        }
      });

      let textureCount = 0;
      this._glContext.useProgram(shaderProgram);

      for (let uniformName in this._uniforms) {
        if (this._uniforms[uniformName] === 'TEXTURE') {
          material.uniformTextureSamplerDic[uniformName] = {};
          let textureUniformLocation = this._glContext.getUniformLocation(shaderProgram, uniformName);
          if (textureUniformLocation < 0) {
            continue;
          }
          material.uniformTextureSamplerDic[uniformName].textureName = this._textureNames[uniformName];
          material.uniformTextureSamplerDic[uniformName].textureUnitIndex = textureCount;

          this._glContext.uniform1i(textureUniformLocation, textureCount, true);

          textureCount++;
        }

        switch (this._uniforms[uniformName]) {
          case 'WORLD':
          case 'VIEW':
          case 'MODELVIEW':
          case 'MODELVIEWINVERSETRANSPOSE':
          case 'PROJECTION':
          case 'JOINTMATRIX':
            material.setUniform(shaderProgram, 'uniform_' + uniformName, this._glContext.getUniformLocation(shaderProgram, uniformName));
          case 'TEXTURE':
            material.addSemanticsDic(this._uniforms[uniformName], uniformName);
            continue;
        }

        material.setUniform(shaderProgram, 'uniform_' + uniformName, this._glContext.getUniformLocation(shaderProgram, uniformName));

      }

      return vertexAttribsAsResult;
    }

    get attributes() {
      return this._attributes;
    }

    setUniforms(gl, glslProgram, expression, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, expression, material, camera, mesh, lights);
      
      for (let uniformName in this._uniforms) {
        let value = this._uniforms[uniformName];

        if (typeof value === 'number') {
          this._glContext.uniform1f(material.getUniform(glslProgram, 'uniform_' + uniformName), value, true);
        } else if (value instanceof Vector2) {
          this._glContext.uniform2f(material.getUniform(glslProgram, 'uniform_' + uniformName), value.x, value.y, true);
        } else if (value instanceof Vector3) {
          this._glContext.uniform3f(material.getUniform(glslProgram, 'uniform_' + uniformName), value.x, value.y, value.z, true);
        } else if (value instanceof Vector4) {
          this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_' + uniformName), value.x, value.y, value.z, value.w, true);
        }
      }

      for (let parameterName in material.shaderParameters) {
        let value = material.shaderParameters[parameterName];

        if (typeof value === 'number') {
          this._glContext.uniform1f(material.getUniform(glslProgram, 'uniform_' + parameterName), value, true);
        } else if (value instanceof Vector2) {
          this._glContext.uniform2f(material.getUniform(glslProgram, 'uniform_' + parameterName), value.x, value.y, true);
        } else if (value instanceof Vector3) {
          this._glContext.uniform3f(material.getUniform(glslProgram, 'uniform_' + parameterName), value.x, value.y, value.z, true);
        } else if (value instanceof Vector4) {
          this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_' + parameterName), value.x, value.y, value.z, value.w, true);
        }
      }
    }
  }

  GLBoost['FreeShader'] = FreeShader;

  class Geometry extends GLBoostObject {
    constructor(glBoostContext) {
      super(glBoostContext);

      this._materials = [];
      this._vertexN = 0;
      this._vertices = null;
      this._indicesArray = null;
      this._indexStartOffsetArray = [];
      this._performanceHint = null;
      this._defaultMaterial = null;
      this._vertexData = [];
      this._extraDataForShader = {};
      this._vboObj = {};
      this._AABB = new AABB();
      this._drawKicker = DrawKickerWorld.getInstance();

      if (this._drawKicker instanceof DrawKickerWorld) ; else if (this._drawKicker instanceof DrawKickerLocal) ;
    }

    /**
     * 全ての頂点属性のリストを返す
     */
    static _allVertexAttribs(vertices) {
      var attribNameArray = [];
      for (var attribName in vertices) {
        if (attribName !== 'components' && attribName !== 'componentBytes' && attribName !== 'componentType') {
          attribNameArray.push(attribName);
        }
      }

      return attribNameArray;
    }

    _checkAndSetVertexComponentNumber(allVertexAttribs) {
      allVertexAttribs.forEach((attribName)=> {
        let element = this._vertices[attribName][0];
        let componentN = MathUtil.compomentNumberOfVector(element);
        if (componentN === 0) {
          // if 0, it must be a number. so users must set components info.
          return;
        }
        if (typeof this._vertices.components === 'undefined') {
          this._vertices.components = {};
        }
        if (typeof this._vertices.componentType === 'undefined') {
          this._vertices.componentType = {};
        }

        this._vertices.components[attribName] = componentN;
        this._vertices.componentType[attribName] = 5126;
      });
    }

    _calcBaryCentricCoord(vertexNum, positionElementNumPerVertex) {
      this._vertices.barycentricCoord = new Float32Array(vertexNum*positionElementNumPerVertex);
      this._vertices.components.barycentricCoord = 3;
      this._vertices.componentType.barycentricCoord = 5126; // gl.FLOAT
      if (!this._indicesArray) {
        for (let i=0; i<vertexNum; i++) {
          this._vertices.barycentricCoord[i*positionElementNumPerVertex+0] = (i % 3 === 0) ? 1 : 0;   // 1 0 0  1 0 0  1 0 0
          this._vertices.barycentricCoord[i*positionElementNumPerVertex+1] = (i % 3 === 1) ? 1 : 0;   // 0 1 0  0 1 0  0 1 0
          this._vertices.barycentricCoord[i*positionElementNumPerVertex+2] = (i % 3 === 2) ? 1 : 0;   // 0 0 1  0 0 1  0 0 1
        }
      } else {
        for (let i=0; i<this._indicesArray.length; i++) {
          let vertexIndices = this._indicesArray[i];
          for (let j=0; j<vertexIndices.length; j++) {
            this._vertices.barycentricCoord[vertexIndices[j]*positionElementNumPerVertex+0] = (j % 3 === 0) ? 1 : 0;   // 1 0 0  1 0 0  1 0 0
            this._vertices.barycentricCoord[vertexIndices[j]*positionElementNumPerVertex+1] = (j % 3 === 1) ? 1 : 0;   // 0 1 0  0 1 0  0 1 0
            this._vertices.barycentricCoord[vertexIndices[j]*positionElementNumPerVertex+2] = (j % 3 === 2) ? 1 : 0;   // 0 0 1  0 0 1  0 0 1
          }
        }
      }
    }

    _calcTangentPerVertex(pos0Vec3, pos1Vec3, pos2Vec3, uv0Vec2, uv1Vec2, uv2Vec2) {
      let cp0 = [
        new Vector3(
          pos0Vec3.x,
          uv0Vec2.x,
          uv0Vec2.y
        ),
        new Vector3(
          pos0Vec3.y,
          uv0Vec2.x,
          uv0Vec2.y
        ),
        new Vector3(
          pos0Vec3.z,
          uv0Vec2.x,
          uv0Vec2.y
        )
      ];

      let cp1 = [
        new Vector3(
          pos1Vec3.x,
          uv1Vec2.x,
          uv1Vec2.y
        ),
        new Vector3(
          pos1Vec3.y,
          uv1Vec2.x,
          uv1Vec2.y
        ),
        new Vector3(
          pos1Vec3.z,
          uv1Vec2.x,
          uv1Vec2.y
        )
      ];

      let cp2 = [
        new Vector3(
          pos2Vec3.x,
          uv2Vec2.x,
          uv2Vec2.y
        ),
        new Vector3(
          pos2Vec3.y,
          uv2Vec2.x,
          uv2Vec2.y
        ),
        new Vector3(
          pos2Vec3.z,
          uv2Vec2.x,
          uv2Vec2.y
        )
      ];

      let u = [];
      let v = [];

      for ( let i = 0; i < 3; i++ ) {
        let v1 = Vector3.subtract(cp1[i], cp0[i]);
        let v2 = Vector3.subtract(cp2[i], cp1[i]);
        let abc = Vector3.cross(v1, v2);

        let validate = Math.abs(abc.x) < Number.EPSILON;
        if (validate) {
          console.assert(validate, "Polygons or polygons on UV are degenerate!");
          return new Vector3(0, 0, 0);
        }

        u[i] = - abc.y / abc.x;
        v[i] = - abc.z / abc.x;
      }

      return (new Vector3(u[0], u[1], u[2])).normalize();
    }

    _calcTangentFor3Vertices(vertexIndices, i, pos0IndexBase, pos1IndexBase, pos2IndexBase, uv0IndexBase, uv1IndexBase, uv2IndexBase, componentNum3) {
      let pos0Vec3 = new Vector3(
        this._vertices.position[pos0IndexBase],
        this._vertices.position[pos0IndexBase + 1],
        this._vertices.position[pos0IndexBase + 2]
      );

      let pos1Vec3 = new Vector3(
        this._vertices.position[pos1IndexBase],
        this._vertices.position[pos1IndexBase + 1],
        this._vertices.position[pos1IndexBase + 2]
      );

      let pos2Vec3 = new Vector3(
        this._vertices.position[pos2IndexBase],
        this._vertices.position[pos2IndexBase + 1],
        this._vertices.position[pos2IndexBase + 2]
      );

      let uv0Vec2 = new Vector2(
        this._vertices.texcoord[uv0IndexBase],
        this._vertices.texcoord[uv0IndexBase + 1]
      );

      let uv1Vec2 = new Vector2(
        this._vertices.texcoord[uv1IndexBase],
        this._vertices.texcoord[uv1IndexBase + 1]
      );

      let uv2Vec2 = new Vector2(
        this._vertices.texcoord[uv2IndexBase],
        this._vertices.texcoord[uv2IndexBase + 1]
      );

      let tan0IndexBase = (i    ) * componentNum3;
      let tan1IndexBase = (i + 1) * componentNum3;
      let tan2IndexBase = (i + 2) * componentNum3;
      if (vertexIndices) {
        tan0IndexBase = vertexIndices[i] * componentNum3;
        tan1IndexBase = vertexIndices[i + 1] * componentNum3;
        tan2IndexBase = vertexIndices[i + 2] * componentNum3;
      }

      let tan0Vec3 = this._calcTangentPerVertex(pos0Vec3, pos1Vec3, pos2Vec3, uv0Vec2, uv1Vec2, uv2Vec2);
      this._vertices.tangent[tan0IndexBase] = tan0Vec3.x;
      this._vertices.tangent[tan0IndexBase + 1] = tan0Vec3.y;
      this._vertices.tangent[tan0IndexBase + 2] = tan0Vec3.z;

      let tan1Vec3 = this._calcTangentPerVertex(pos1Vec3, pos2Vec3, pos0Vec3, uv1Vec2, uv2Vec2, uv0Vec2);
      this._vertices.tangent[tan1IndexBase] = tan1Vec3.x;
      this._vertices.tangent[tan1IndexBase + 1] = tan1Vec3.y;
      this._vertices.tangent[tan1IndexBase + 2] = tan1Vec3.z;

      let tan2Vec3 = this._calcTangentPerVertex(pos2Vec3, pos0Vec3, pos1Vec3, uv2Vec2, uv0Vec2, uv1Vec2);
      this._vertices.tangent[tan2IndexBase] = tan2Vec3.x;
      this._vertices.tangent[tan2IndexBase + 1] = tan2Vec3.y;
      this._vertices.tangent[tan2IndexBase + 2] = tan2Vec3.z;
    }

    _calcTangent(vertexNum, positionElementNumPerVertex, texcoordElementNumPerVertex, primitiveType) {

      this._vertices.tangent = new Float32Array(vertexNum*positionElementNumPerVertex);
      this._vertices.components.tangent = 3;
      this._vertices.componentType.tangent = 5126; // gl.FLOAT

      let incrementNum = 3; // gl.TRIANGLES
      if (primitiveType === GLBoost$1.TRIANGLE_STRIP) ;
      if ( this._vertices.texcoord ) {
        if (!this._indicesArray) {
          for (let i=0; i<vertexNum; i+=incrementNum) {
            let pos0IndexBase = i * positionElementNumPerVertex;
            let pos1IndexBase = (i + 1) * positionElementNumPerVertex;
            let pos2IndexBase = (i + 2) * positionElementNumPerVertex;
            let uv0IndexBase = i * texcoordElementNumPerVertex;
            let uv1IndexBase = (i + 1) * texcoordElementNumPerVertex;
            let uv2IndexBase = (i + 2) * texcoordElementNumPerVertex;

            this._calcTangentFor3Vertices(null, i, pos0IndexBase, pos1IndexBase, pos2IndexBase, uv0IndexBase, uv1IndexBase, uv2IndexBase, incrementNum);

          }
        } else {
          for (let i=0; i<this._indicesArray.length; i++) {
            let vertexIndices = this._indicesArray[i];
            for (let j=0; j<vertexIndices.length; j+=incrementNum) {
              let pos0IndexBase = vertexIndices[j    ] * positionElementNumPerVertex; /// ０つ目の頂点
              let pos1IndexBase = vertexIndices[j + 1] * positionElementNumPerVertex; /// １つ目の頂点
              let pos2IndexBase = vertexIndices[j + 2] * positionElementNumPerVertex; /// ２つ目の頂点
              let uv0IndexBase = vertexIndices[j    ]  * texcoordElementNumPerVertex;
              let uv1IndexBase = vertexIndices[j + 1]  * texcoordElementNumPerVertex;
              let uv2IndexBase = vertexIndices[j + 2]  * texcoordElementNumPerVertex;

              this._calcTangentFor3Vertices(vertexIndices, j, pos0IndexBase, pos1IndexBase, pos2IndexBase, uv0IndexBase, uv1IndexBase, uv2IndexBase, incrementNum);

            }
          }
        }
      }


    }

    setVerticesData(vertices, indicesArray, primitiveType = GLBoost$1.TRIANGLES, performanceHint = GLBoost$1.STATIC_DRAW) {
      this._vertices = vertices;
      this._indicesArray = indicesArray;

      let allVertexAttribs = Geometry._allVertexAttribs(this._vertices);
      this._checkAndSetVertexComponentNumber(allVertexAttribs);

      let vertexNum = 0;
      let positionElementNum = 0;
      let positionElementNumPerVertex = this._vertices.components.position;
      let texcoordElementNumPerVertex = this._vertices.components.texcoord;

      if (typeof this._vertices.position.buffer !== 'undefined') {
        vertexNum = this._vertices.position.length / positionElementNumPerVertex;
        positionElementNum = this._vertices.position.length;
      } else {
        vertexNum = this._vertices.position.length; // vertices must be type of Vector3
        positionElementNum = this._vertices.position.length * positionElementNumPerVertex;
      }

      // for Wireframe
      this._calcBaryCentricCoord(vertexNum, positionElementNumPerVertex);

      allVertexAttribs = Geometry._allVertexAttribs(this._vertices);
      this._checkAndSetVertexComponentNumber(allVertexAttribs);

      // vector to array
      allVertexAttribs.forEach((attribName)=> {
        if (attribName === 'barycentricCoord') {
          return;
        }
        if (attribName === 'tangent') {
          return;
        }
        if (typeof this._vertices[attribName].buffer !== 'undefined') {
          return;
        }
        let vertexAttribArray = [];
        this._vertices[attribName].forEach((elem, index) => {
          let element = this._vertices[attribName][index];
          Array.prototype.push.apply(vertexAttribArray, MathUtil.vectorToArray(element));
        });
        this._vertices[attribName] = vertexAttribArray;

      });

      // for Tangent
      if (this._vertices.texcoord) {
        this._calcTangent(vertexNum, positionElementNumPerVertex, texcoordElementNumPerVertex, primitiveType);
      }

      // Normal Array to Float32Array
      allVertexAttribs.forEach((attribName)=> {
        if (typeof this._vertices[attribName].buffer === 'undefined') {
          this._vertices[attribName] = new Float32Array(this._vertices[attribName]);
        }
      });


      for (let i=0; i<vertexNum; i++) {
        this._AABB.addPositionWithArray(this._vertices.position, i * positionElementNumPerVertex);
      }

      this._AABB.updateAllInfo();

      let gl = this._glContext.gl;
      let primitiveTypeStr = GLBoost$1.getValueOfGLBoostConstant(primitiveType);
      this._primitiveType = gl[primitiveTypeStr];
      let performanceHintStr = GLBoost$1.getValueOfGLBoostConstant(performanceHint);
      this._performanceHint = gl[performanceHintStr];
    }

    updateVerticesData(vertices, skipUpdateAABB = false) {
      let gl = this._glContext.gl;

      for (let attribName in vertices) {
        let vertexAttribArray = [];
        this._vertices[attribName].forEach((elem, index) => {
          let element = vertices[attribName][index];
          Array.prototype.push.apply(vertexAttribArray, MathUtil.vectorToArray(element));

          if (attribName === 'position' && !(skipUpdateAABB === true)) {
            let componentN = this._vertices.components[attribName];
            this._AABB.addPositionWithArray(vertexAttribArray, index * componentN);
          }
          this._vertices[attribName] = vertexAttribArray;
        });
      }

      if(!(skipUpdateAABB === true)) {
        this._AABB.updateAllInfo();
      }

      for (let attribName in vertices) {
        if (this._vboObj[attribName]) {
          let float32AryVertexData = new Float32Array(this._vertices[attribName]);
          gl.bindBuffer(gl.ARRAY_BUFFER, this._vboObj[attribName]);
          gl.bufferSubData(gl.ARRAY_BUFFER, 0, float32AryVertexData);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
        } else {
          return false;
        }
      }
      return true;

    }

    setUpVertexAttribs(gl, glslProgram, allVertexAttribs) {
      var optimizedVertexAttribs = glslProgram.optimizedVertexAttribs;

      // setup vertex layouts
      allVertexAttribs.forEach((attribName)=> {
        if (optimizedVertexAttribs.indexOf(attribName) != -1) {
          gl.bindBuffer(gl.ARRAY_BUFFER, this._vboObj[attribName]);
          gl.vertexAttribPointer(glslProgram['vertexAttribute_' + attribName],
            this._vertices.components[attribName], this._vertices.componentType[attribName], false, 0, 0);
        }
      });
    }

    setUpEnableVertexAttribArrays(gl, glslProgram, allVertexAttribs) {
      var optimizedVertexAttribs = glslProgram.optimizedVertexAttribs;

      allVertexAttribs.forEach((attribName)=> {
        if (optimizedVertexAttribs.indexOf(attribName) != -1) {
          gl.enableVertexAttribArray(glslProgram['vertexAttribute_' + attribName]);
        }
      });
    }

    setUpDisableAllVertexAttribArrays(gl, glslProgram) {

      for (let i=0; i<8; i++) {
        gl.disableVertexAttribArray(i);
      }
    }

    setUpDisableVertexAttribArrays(gl, glslProgram, allVertexAttribs) {
      var optimizedVertexAttribs = glslProgram.optimizedVertexAttribs;

      allVertexAttribs.forEach((attribName)=> {
        if (optimizedVertexAttribs.indexOf(attribName) != -1) {
          gl.disableVertexAttribArray(glslProgram['vertexAttribute_' + attribName]);
        }
      });
    }



    _getVAO() {
      return Geometry._vaoDic[this.toString()];
    }

    _getAllVertexAttribs() {
      return Geometry._allVertexAttribs(this._vertices);
    } 

    prepareGLSLProgram(expression, material, index, existCamera_f, lights, doSetupVertexAttribs = true, shaderClass = void 0, argShaderInstance = void 0) {
      let gl = this._glContext.gl;
      let vertices = this._vertices;

     //let glem = GLExtensionsManager.getInstance(this._glContext);
      let _optimizedVertexAttribs = Geometry._allVertexAttribs(vertices, material);

  //    if (doSetupVertexAttribs) {
  //      glem.bindVertexArray(gl, Geometry._vaoDic[this.toString()]);
  //    }


      let shaderInstance = null;
      if (argShaderInstance) {
        shaderInstance = argShaderInstance;
      } else {
        if (shaderClass) {
          shaderInstance = Shader._createShaderInstance(this._glBoostContext, shaderClass);
        } else {
          shaderInstance = Shader._createShaderInstance(this._glBoostContext, material.shaderClass);
        }  
      }

      let glslProgram = shaderInstance.getShaderProgram(expression, _optimizedVertexAttribs, existCamera_f, lights, material, this._extraDataForShader);
  //    if (doSetupVertexAttribs) {
      //  this.setUpVertexAttribs(gl, glslProgram, allVertexAttribs);
  //    }

  //    if (doSetupVertexAttribs) {
      //  glem.bindVertexArray(gl, null);
  //    }

      return shaderInstance;
    }

    _setVertexNtoSingleMaterial(material, index) {
      // if this mesh has only one material...
      //if (material.getVertexN(this) === 0) {
      if (this._indicesArray && this._indicesArray.length > 0) {
        material.setVertexN(this, this._indicesArray[index].length);
      } else {
        material.setVertexN(this, this._vertexN);
      }
      //}
    }

    _getAppropriateMaterials(mesh) {
      let materials = null;
      if (this._materials.length > 0) {
        materials = this._materials;
      } else if (mesh.material){
        materials = [mesh.material];
      } else {
        mesh.material = this._glBoostContext._defaultMaterial;
        materials = [mesh.material];
      }
      return materials;
    }

    getIndexStartOffsetArrayAtMaterial(i) {
      return this._indexStartOffsetArray[i];
    }

    prepareToRender(expression, existCamera_f, lights, meshMaterial, mesh, shaderClass = void 0, argMaterials = void 0) {

      var vertices = this._vertices;
      var gl = this._glContext.gl;

      var glem = GLExtensionsManager.getInstance(this._glContext);

      this._vertexN = vertices.position.length / vertices.components.position;

      var allVertexAttribs = Geometry._allVertexAttribs(vertices);


      // create VAO
      if (Geometry._vaoDic[this.toString()]) ; else {
        var vao = this._glContext.createVertexArray(this);
        Geometry._vaoDic[this.toString()] = vao;
      }
      glem.bindVertexArray(gl, Geometry._vaoDic[this.toString()]);

      let doAfter = false;

      allVertexAttribs.forEach((attribName)=> {
        // create VBO
        if (this._vboObj[attribName]) {
          gl.bindBuffer(gl.ARRAY_BUFFER, this._vboObj[attribName]);
        } else {
          let vbo = this._glContext.createBuffer(this);
          this._vboObj[attribName] = vbo;

          gl.bindBuffer(gl.ARRAY_BUFFER, this._vboObj[attribName]);
  //        if (typeof this._vertices[attribName].buffer !== 'undefined') {
          gl.bufferData(gl.ARRAY_BUFFER, this._vertices[attribName], this._performanceHint);
  //        } else {
  //          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this._vertices[attribName]), this._performanceHint);
  //        }
        //gl.bindBuffer(gl.ARRAY_BUFFER, null);

          doAfter = true;
        }
      });

      if (doAfter) {
          
        if (Geometry._iboArrayDic[this.toString()]) {
          gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Geometry._iboArrayDic[this.toString()] );
        } else {
          if (this._indicesArray) {
            let indices = [];
            for (let i=0; i<this._indicesArray.length; i++) {
              if (i==0) {
                this._indexStartOffsetArray[i] = 0;
              }
              this._indexStartOffsetArray[i+1] = this._indexStartOffsetArray[i] + this._indicesArray[i].length;
              //Array.prototype.push.apply(indices, this._indicesArray[i]);  
              indices = indices.concat(this._indicesArray[i]);
            }
            // create Index Buffer
            var ibo = this._glContext.createBuffer(this);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo );
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, glem.createUintArrayForElementIndex(gl, indices), gl.STATIC_DRAW);
            Geometry._iboArrayDic[this.toString()] = ibo;
          }
        }
      }

      let materials = argMaterials;

      if (argMaterials === void 0) {
        materials = this._getAppropriateMaterials(mesh);
      }
      //let materials = this._getAppropriateMaterials(mesh);

      for (let i=0; i<materials.length;i++) {
        let shaderInstance = null;

        /*
        if (argMaterials !== void 0 && argMaterials[i].shaderInstance !== null) {
          shaderInstance = argMaterials[i].shaderInstance;
        } else if (materials[i].shaderInstance !== null) {
          shaderInstance = materials[i].shaderInstance;
        } else {
          */
          if (materials[i].shaderInstance && materials[i].shaderInstance.constructor === FreeShader) {
            shaderInstance = this.prepareGLSLProgram(expression, materials[i], i, existCamera_f, lights, doAfter, void 0, materials[i].shaderInstance);
          } else {
            shaderInstance = this.prepareGLSLProgram(expression, materials[i], i, existCamera_f, lights, doAfter, shaderClass);
          }  
  //      }

        this._setVertexNtoSingleMaterial(materials[i], i);
        shaderInstance.vao = Geometry._vaoDic[this.toString()];
        this.setUpVertexAttribs(gl, shaderInstance._glslProgram, allVertexAttribs);

        if (argMaterials === void 0) {
          materials[i].shaderInstance = shaderInstance;
        } else {
          argMaterials[i].shaderInstance = shaderInstance;
        }
      }

      glem.bindVertexArray(gl, null);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

      return materials;
    }

    _setUpVertexAttibsWrapper(glslProgram) {
      this.setUpVertexAttribs(this._glContext.gl, glslProgram, this._getAllVertexAttribs());    
    }

    draw(data) {
      const gl = this._glContext.gl;
      const glem = GLExtensionsManager.getInstance(this._glContext);

      const materials = this._getAppropriateMaterials(data.mesh);

      const thisName = this.toString();

      this._drawKicker.draw(
        {
          gl: gl,
          glem: glem,
          expression: data.expression,
          lights: data.lights,
          camera: data.camera,
          mesh: data.mesh,
          scene: data.scene,
          renderPassIndex: data.renderPassIndex,
          materials: materials,
          vertices: this._vertices,
          vaoDic: Geometry._vaoDic,
          vboObj: this._vboObj,
          iboArrayDic: Geometry._iboArrayDic,
          geometry: this,
          geometryName: thisName,
          primitiveType: this._primitiveType,
          vertexN: this._vertexN,
          viewport: data.viewport,
          isWebVRMode: data.isWebVRMode,
          webvrFrameData: data.webvrFrameData
        });

    }

    drawIntermediate() {}

    merge(geometrys) {
      if (Array.isArray(geometrys)) {
        let typedArrayDic = {};
        let allVertexAttribs = Geometry._allVertexAttribs(this._vertices);
        allVertexAttribs.forEach((attribName)=> {
          let thisLength = this._vertices[attribName].length;

          let allGeomLength = 0;
          geometrys.forEach((geometry) => {
            allGeomLength += geometry._vertices[attribName].length;
          });
          typedArrayDic[attribName] = new Float32Array(thisLength + allGeomLength);
        });

        let lastThisLengthDic = {};
        allVertexAttribs.forEach((attribName)=> {
          lastThisLengthDic[attribName] = 0;
        });
        geometrys.forEach((geometry, index) => {
          let typedSubArrayDic = {};
          allVertexAttribs.forEach((attribName)=> {
            let typedArray = typedArrayDic[attribName];

            if (index === 0) {
              lastThisLengthDic[attribName] = geometrys[index]._vertices[attribName].length;
            }

            let end = (typeof geometrys[index+1] !== 'undefined') ? lastThisLengthDic[attribName]  + geometrys[index+1]._vertices[attribName].length : void 0;
            typedSubArrayDic[attribName] = typedArray.subarray(0, end);
            lastThisLengthDic[attribName] = end;
          });
          this.mergeInner(geometry, typedSubArrayDic, (index === 0));
        });
      } else {
        let geometry = geometrys;
        let typedArrayDic = {};
        let allVertexAttribs = Geometry._allVertexAttribs(this._vertices);
        allVertexAttribs.forEach((attribName)=> {
          let thisLength = this._vertices[attribName].length;
          let geomLength = geometry._vertices[attribName].length;

          typedArrayDic[attribName] = new Float32Array(thisLength + geomLength);
        });

        this.mergeInner(geometry, typedArrayDic);
      }
    }

    /**
     *
     * @param geometry
     */
    mergeInner(geometry, typedArrayDic, isFirst = false) {
      let gl = this._glContext.gl;
      let baseLen = this._vertices.position.length / this._vertices.components.position;
      if (this === geometry) {
        console.assert('don\'t merge same geometry!');
      }

      let allVertexAttribs = Geometry._allVertexAttribs(this._vertices);

      allVertexAttribs.forEach((attribName)=> {
        let thisLength = this._vertices[attribName].length;
        let geomLength =  geometry._vertices[attribName].length;

        let float32array = typedArrayDic[attribName];

        if (isFirst) {
          float32array.set(this._vertices[attribName], 0);
        }
        float32array.set(geometry._vertices[attribName], thisLength);

        this._vertices[attribName] = float32array;

        if (typeof this._vboObj[attribName] !== 'undefined') {
          gl.bindBuffer(gl.ARRAY_BUFFER, this._vboObj[attribName]);
          gl.bufferData(gl.ARRAY_BUFFER, this._vertices[attribName], this._performanceHint);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
        }
      });

      let geometryIndicesN = geometry._indicesArray.length;
      for (let i = 0; i < geometryIndicesN; i++) {
        for (let j = 0; j < geometry._indicesArray[i].length; j++) {
          geometry._indicesArray[i][j] += baseLen;
        }
        this._indicesArray.push(geometry._indicesArray[i]);
        if (geometry._materials[i]) {
          this._materials.push(geometry._materials[i]);
        }
      }
      this._vertexN += geometry._vertexN;
    }

    mergeHarder(geometrys) {
      if (Array.isArray(geometrys)) {
        let typedArrayDic = {};
        let allVertexAttribs = Geometry._allVertexAttribs(this._vertices);
        allVertexAttribs.forEach((attribName)=> {
          let thisLength = this._vertices[attribName].length;

          let allGeomLength = 0;
          geometrys.forEach((geometry) => {
            allGeomLength += geometry._vertices[attribName].length;
          });
          typedArrayDic[attribName] = new Float32Array(thisLength + allGeomLength);
        });

        let lastThisLengthDic = {};
        allVertexAttribs.forEach((attribName)=> {
          lastThisLengthDic[attribName] = 0;
        });
        geometrys.forEach((geometry, index) => {
          let typedSubArrayDic = {};
          allVertexAttribs.forEach((attribName)=> {
            let typedArray = typedArrayDic[attribName];

            if (index === 0) {
              lastThisLengthDic[attribName] = geometrys[index]._vertices[attribName].length;
            }

            let end = (typeof geometrys[index+1] !== 'undefined') ? lastThisLengthDic[attribName]  + geometrys[index+1]._vertices[attribName].length : void 0;
            typedSubArrayDic[attribName] = typedArray.subarray(0, end);
            lastThisLengthDic[attribName] = end;
          });
          this.mergeHarderInner(geometry, typedSubArrayDic, (index === 0));
        });
      } else {
        let geometry = geometrys;
        let typedArrayDic = {};
        let allVertexAttribs = Geometry._allVertexAttribs(this._vertices);
        allVertexAttribs.forEach((attribName)=> {
          let thisLength = this._vertices[attribName].length;
          let geomLength = geometry._vertices[attribName].length;

          typedArrayDic[attribName] = new Float32Array(thisLength + geomLength);
        });

        this.mergeHarderInner(geometry, typedArrayDic);
      }
    }

    /**
     * take no thought geometry's materials
     *
     * @param geometry
     */
    mergeHarderInner(geometry, typedArrayDic, isFirst = false) {
      let gl = this._glContext.gl;
      let baseLen = this._vertices.position.length / this._vertices.components.position;
      if (this === geometry) {
        console.assert('don\'t merge same geometry!');
      }

      let allVertexAttribs = Geometry._allVertexAttribs(this._vertices);

      allVertexAttribs.forEach((attribName)=> {
        let thisLength = this._vertices[attribName].length;
        let geomLength =  geometry._vertices[attribName].length;

        let float32array = typedArrayDic[attribName];

        if (isFirst) {
          float32array.set(this._vertices[attribName], 0);
        }
        float32array.set(geometry._vertices[attribName], thisLength);

        this._vertices[attribName] = float32array;

        if (typeof this._vboObj[attribName] !== 'undefined') {
          gl.bindBuffer(gl.ARRAY_BUFFER, this._vboObj[attribName]);
          gl.bufferData(gl.ARRAY_BUFFER, this._vertices[attribName], this._performanceHint);
          gl.bindBuffer(gl.ARRAY_BUFFER, null);
        }
      });


      for (let i = 0; i < this._indicesArray.length; i++) {
        let len = geometry._indicesArray[i].length;
        for (let j = 0; j < len; j++) {
          let idx = geometry._indicesArray[i][j];
          this._indicesArray[i].push(baseLen + idx);
        }
        if (this._materials[i]) {
          this._materials[i].setVertexN(this, this._materials[i].getVertexN(geometry));
        }
      }
      this._vertexN += geometry._vertexN;
    }


    set materials(materials) {
      this._materials = materials;
    }

    get materials() {
      return this._materials;
    }

    get centerPosition() {
      return this._AABB.centerPoint;
    }

    setExtraDataForShader(name, value) {
      this._extraDataForShader[name] = value;
    }

    getExtraDataForShader(name) {
      return this._extraDataForShader[name];
    }

    isTransparent(mesh) {
      let materials = this._getAppropriateMaterials(mesh);
      let isTransparent = false;
      materials.forEach((material)=>{
        if (material.isTransparent()) {
          isTransparent = true;
        }
      });
      return isTransparent;
    }

    get AABB() {
      return this._AABB;//.clone();
    }

    get rawAABB() {
      return this._AABB;
    }

    isIndexed() {
      return !!Geometry._iboArrayDic[this.toString()];
    }

    getTriangleCount(mesh) {
      let gl = this._glContext.gl;
      let materials = this._getAppropriateMaterials(mesh);
      let count = 0;
      for (let i=0; i<materials.length;i++) {
        let material = materials[i];
        if (this._primitiveType === gl.TRIANGLES) {
          if (this.isIndexed()) {
            count += material.getVertexN(this.toString()) / 3;
          } else {
            count += this._vertexN / 3;
          }
        } else if (this._primitiveType === gl.TRIANGLE_STRIP) {
          if (this.isIndexed()) {
            count += material.getVertexN(this.toString()) - 2;
          } else {
            count += this._vertexN - 2;
          }
        }
      }
      return count;
    }

    getVertexCount() {
      let gl = this._glContext.gl;
      let count = 0;
      if (this._vertices) {
        count = this._vertices.position.length;
      }
      return count;
    }

  }
  Geometry._vaoDic = {};
  Geometry._iboArrayDic = {};

  class BlendShapeShaderSource {

    VSDefine_BlendShapeShaderSource(in_, out_, f) {
      var shaderText = '';
      f.forEach((attribName)=>{
        if (this.BlendShapeShaderSource_isShapeTarget(attribName)) {
          shaderText+=`${in_} vec3 aVertex_${attribName};\n`;
          shaderText+='uniform float blendWeight_' + attribName  + ';\n';
        }
      });
      return shaderText;
    }

    VSTransform_BlendShapeShaderSource(existCamera_f, f, lights, material, extraData) {
      var shaderText = '';
      var numOfShapeTargets = this.BlendShapeShaderSource_numberOfShapeTargets(f);
      shaderText += '    vec3 blendedPosition = aVertex_position;\n';    
      f.forEach((attribName)=>{
        if (this.BlendShapeShaderSource_isShapeTarget(attribName)) {
          shaderText += 'blendedPosition += (aVertex_' + attribName + ' - aVertex_position) * blendWeight_' + attribName + ';\n';
        }
      });
      if (existCamera_f) {
        shaderText += '  gl_Position = pvwMatrix * vec4(blendedPosition, 1.0);\n';
      } else {
        shaderText += '  gl_Position = vec4(blendedPosition, 1.0);\n';
      }
      return shaderText;
    }

    prepare_BlendShapeShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {
      var vertexAttribsAsResult = [];
      vertexAttribs.forEach((attribName)=>{
        if (this.BlendShapeShaderSource_isShapeTarget(attribName)) { // if POSITION and ShapeTargets...
          vertexAttribsAsResult.push(attribName);
          shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
          gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
        }
      });

      vertexAttribs.forEach((attribName)=>{
        if (this.BlendShapeShaderSource_isShapeTarget(attribName)) {
          // Specifically, this uniform location is saved directly to the material.
          material['uniform_FloatSampler_blendWeight_' + attribName] = this._glContext.getUniformLocation(shaderProgram, 'blendWeight_' + attribName);
          // Initially zero initialization
          this._glContext.uniform1f(material['uniform_FloatSampler_blendWeight_' + attribName], 0.0, true);
        }
      });

      return vertexAttribsAsResult;
    }

    BlendShapeShaderSource_isShapeTarget(attribName) {
      return !Shader._exist(attribName, GLBoost.POSITION) && !Shader._exist(attribName, GLBoost.COLOR) && !Shader._exist(attribName, GLBoost.TEXCOORD);
    }

    BlendShapeShaderSource_numberOfShapeTargets(attributes) {
      var count = 0;
      attributes.forEach((attribName)=>{
        if (this.BlendShapeShaderSource_isShapeTarget(attribName)) {
          count += 1;
        }
      });
      return count;
    }
  }

  class BlendShapeGeometry extends Geometry {
    constructor(glBoostContext) {
      super(glBoostContext);

      this._blendWeight_1  = 0.0;
      this._blendWeight_2  = 0.0;
      this._blendWeight_3  = 0.0;
      this._blendWeight_4  = 0.0;
      this._blendWeight_5  = 0.0;
      this._blendWeight_6  = 0.0;
      this._blendWeight_7  = 0.0;
      this._blendWeight_8  = 0.0;
      this._blendWeight_9  = 0.0;
      this._blendWeight_10 = 0.0;

      this._currentRenderPassIndex = 0;
      this._materialForBlend = null;
    }


    draw(data) {
      this._currentRenderPassIndex = data.renderPass_index;
      super.draw({
        expression: data.expression,
        lights: data.lights,
        camera: data.camera,
        mesh: data.mesh,
        scene: data.scene,
        renderPassIndex: data.renderPassIndex,
        viewport: data.viewport,
        isWebVRMode: data.isWebVRMode,
        webvrFrameData: data.webvrFrameData});
    }

    prepareToRender(expression, existCamera_f, pointLight, meshMaterial, mesh) {
      // before prepareForRender of 'Geometry' class, a new 'BlendShapeShader'(which extends default shader) is assigned.

      if (meshMaterial) {
        this._materialForBlend = meshMaterial;
      } else {
        this._materialForBlend = this._defaultMaterial;
      }


      class BlendShapeShader extends this._materialForBlend.shaderClass {
        constructor(glBoostContext, basicShader) {
          super(glBoostContext, basicShader);
          BlendShapeShader.mixin(BlendShapeShaderSource);
        }
      }

      this._materialForBlend.shaderClass = BlendShapeShader;

      super.prepareToRender(expression, existCamera_f, pointLight, meshMaterial, mesh);
    }

    _setBlendWeightToGlslProgram(blendTargetNumber, weight) {
      let blendTarget = GLBoost$1.getValueOfGLBoostConstant(blendTargetNumber);
      let materials = [this._materialForBlend];
      for (let i=0; i<materials.length;i++) {
        this._glContext.useProgram(materials[i].shaderInstance.glslProgram);
        this._glContext.uniform1f(materials[i]['uniform_FloatSampler_blendWeight_' + blendTarget], weight, true);
      }
    }

    set blendWeight_1(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET1, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_1 = weight;
    }
    get blendWeight_1() {
      return this._blendWeight_1;
    }

    set blendWeight_2(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET2, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_2 = weight;
    }
    get blendWeight_2() {
      return this._blendWeight_2;
    }

    set blendWeight_3(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET3, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_3 = weight;
    }
    get blendWeight_3() {
      return this._blendWeight_3;
    }

    set blendWeight_4(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET4, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_4 = weight;
    }
    get blendWeight_4() {
      return this._blendWeight_4;
    }

    set blendWeight_5(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET5, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_5 = weight;
    }
    get blendWeight_5() {
      return this._blendWeight_5;
    }

    set blendWeight_6(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET6, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_6 = weight;
    }
    get blendWeight_6() {
      return this._blendWeight_6;
    }

    set blendWeight_7(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET7, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_7 = weight;
    }
    get blendWeight_7() {
      return this._blendWeight_7;
    }

    set blendWeight_8(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET8, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_8 = weight;
    }
    get blendWeight_8() {
      return this._blendWeight_8;
    }

    set blendWeight_9(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET9, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_9 = weight;
    }
    get blendWeight_9() {
      return this._blendWeight_9;
    }

    set blendWeight_10(weight) {
      var gl = this._glContext.gl;
      var currentProgram = gl.getParameter(gl.CURRENT_PROGRAM);

      this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET10, weight);
      this._glContext.useProgram(currentProgram);
      this._blendWeight_10 = weight;
    }
    get blendWeight_10() {
      return this._blendWeight_10;
    }

  }

  GLBoost$1['BlendShapeGeometry'] = BlendShapeGeometry;

  /**
   * [en] This is the abstract class for all texture classes. Don't use this class directly.<br>
   * [ja] 全てのテクスチャクラスのための抽象クラスです。直接このクラスは使わないでください。
   */
  class AbstractTexture extends GLBoostObject {

    /**
     * [en] The constructor of PointLight class. Do not construct this class directly.<br>
     * [ja] PointLightクラスのコンストラクタ。直接このクラスを生成しようとしないでください。
     *
     * * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     */
    constructor(glBoostContext) {
      super(glBoostContext);

      if (this.constructor === AbstractTexture) {
        throw new TypeError('Cannot construct AbstractTexture instances directly.');
      }

      this._textureUnitIndex = 0;

      // x,y are uv scale, zw are uv transform. calculation is applied as first scale, second transform
      this._uvTransform = new Vector4(1, 1, 0, 0);

      this._toMultiplyAlphaToColorPreviously = false; // same result when UNPACK_PREMULTIPLY_ALPHA_WEBGL is true
    }

    /**
     * [en] get the WebGL texture resource within this class. <br />
     * [ja] このクラス内部で管理しているWebGLテクスチャリソースを取得します。
     *
     * @returns {null|*} [en] WebGL texture resouce. [ja] WebGLテクスチャリソース
     */
    get glTextureResource() {
      return this._texture;
    }

    /**
     * [en] bind the texture. It calls bindTexture on WebGL only if it has WebGL texture. Otherwise it returns false without doing anything.<br />
     * [ja] テクスチャをバインドします。自身がWebGLテクスチャを持っている場合のみ、WebGLのbindTextureを呼びます。それ以外は何もせずにfalseを返します。
     */
    setUp(textureUnitIndex) {
      var gl = this._glContext.gl;
      if (this._texture === null) {
        return false;
      }
      var index = !(typeof textureUnitIndex === 'undefined') ? textureUnitIndex : this._textureUnitIndex;
      gl.activeTexture(gl.TEXTURE0 + index);
      gl.bindTexture(gl.TEXTURE_2D, this._texture);

      return true;
    }

    /**
     * [en] unbind the texture. <br />
     * [ja] テクスチャをバインド解除します。
     */
    tearDown(textureUnitIndex) {
      var gl = this._glContext.gl;

      var index = !(typeof textureUnitIndex === 'undefined') ? textureUnitIndex : this._textureUnitIndex;
      gl.activeTexture(gl.TEXTURE0 + index);
      gl.bindTexture(gl.TEXTURE_2D, null);
    }

    get width() {
      return this._width;
    }

    get height() {
      return this._height;
    }

    set textureUnitIndex(index) {
      this._textureUnitIndex = index;
    }

    get textureUnitIndex() {
      return this._textureUnitIndex;
    }

    getTexturePixelData() {
      let gl = this._glContext.gl;

      // Create a framebuffer backed by the texture
      let framebuffer = this._glContext.createFramebuffer(this);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);

      // Read the contents of the framebuffer (data stores the pixel data)
      let data = new Uint8Array(this.width * this.height * 4);
      gl.readPixels(0, 0, this.width, this.height, gl.RGBA, gl.UNSIGNED_BYTE, data);

      //this._glContext.deleteFramebuffer(this, framebuffer);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      return data;
    }

    /**
     * Origin is left bottom
     *
     * @param {number} x horizontal pixel position (0 is left)
     * @param {number} y virtical pixel position (0 is bottom)
     * @returns {Vector4} [en] check whether or not the size x is power of two. [ja] xが２の累乗かどうか
     */
    getPixelValueAt(x, y, argByteArray) {
      let byteArray = argByteArray;
      if (!byteArray) {
        byteArray = this.getTexturePixelData();
      }

      let color = new Vector4(
        byteArray[(y*this.width + x) * 4+0],
        byteArray[(y*this.width + x) * 4+1],
        byteArray[(y*this.width + x) * 4+2],
        byteArray[(y*this.width + x) * 4+3]
        );
      return color;
    }

    _getResizedCanvas(image) {
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
    _isPowerOfTwo(x) {
      return (x & (x - 1)) == 0;
    }

    /**
     * [en] get a value nearest power of two. <br />
     * [ja] 与えられた数から見て２の累乗に最も近い値を返します。
     *
     * @param {number} x [en] texture size. [ja] テクスチャサイズ
     * @returns {number} [en] a value nearest power of two. [ja] xに近い２の累乗の値
     */
    _getNearestPowerOfTwo(x) {
      return Math.pow( 2, Math.round( Math.log( x ) / Math.LN2 ) );
    }

    readyForDiscard() {
      if (this._texture) {
        this._glContext.deleteTexture(this, this._texture);
      }
      if (this.fbo) {
        for (let texture of this.fbo._glboostTextures) {
          this.fbo._glboostTextures = this.fbo._glboostTextures.filter(function(v, i) {
            return (v !== this);
          });
        }
        if (this.fbo._glboostTextures.length === 0) {
          this._glContext.deleteFramebuffer(this._glBoostContext, this.fbo);
          this._glContext.deleteFramebuffer(this._glBoostContext, this.fbo);
          if (this.fbo.renderBuffer) {
            this._glContext.deleteRenderbuffer(this._glBoostContext, this.fbo.renderBuffer);
          }
        }
      }

      super.readyForDiscard();
    }

    get uvTransform() {
      return this._uvTransform;
    }

    set uvTransform(vec4) {
      this._uvTransform = vec4;
    }

    get toMultiplyAlphaToColorPreviously() {
      return this._toMultiplyAlphaToColorPreviously;
    }

    set toMultiplyAlphaToColorPreviously(flag) {
      this._toMultiplyAlphaToColorPreviously = flag;
    }
  }

  class FragmentSimpleShaderSource {
    // In the context within these member methods,
    // this is the instance of the corresponding shader class.

    VSTransform_FragmentSimpleShaderSource(existCamera_f, f) {
      var shaderText = '';

      if (existCamera_f) {
        shaderText +=   '  gl_Position = projectionMatrix * viewMatrix * position_world;\n';
      } else {
        shaderText +=   '  gl_Position = position_world;\n';
      }

      return shaderText;
    }

    FSDefine_FragmentSimpleShaderSource(in_, f) {
      let shaderText =      'uniform float opacity;\n';
      shaderText +=         'uniform bool isNeededToMultiplyAlphaToColorOfPixelOutput;\n';
      return shaderText;
    }

    FSShade_FragmentSimpleShaderSource(f, gl) {
      let shaderText =   "";
      shaderText +=   `rt0 = vec4(1.0, 1.0, 1.0, opacity);\n`;
      shaderText += '  if (isNeededToMultiplyAlphaToColorOfPixelOutput) {\n';
      shaderText += '    rt0.rgb *= rt0.a;\n';
      shaderText += '  }\n';

      return shaderText;
    }

    FSFinalize_FragmentSimpleShaderSource(f, gl, lights, material, extraData) {
      let shaderText = '';
  /*
      shaderText += 'if (isNeededToMultiplyAlphaToColorOfPixelOutput && !isDataOutput) {\n';
      shaderText += '  rt0.rgb *= rt0.a;\n';
      shaderText += '}\n';
  */
      return shaderText;
    }

    prepare_FragmentSimpleShaderSource(gl, glslProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      material.setUniform(glslProgram, 'uniform_opacity', this._glContext.getUniformLocation(glslProgram, 'opacity'));
      material.setUniform(glslProgram, 'uniform_isNeededToMultiplyAlphaToColorOfPixelOutput', this._glContext.getUniformLocation(glslProgram, 'isNeededToMultiplyAlphaToColorOfPixelOutput'));

      let uniformLocationDepthBias = material.getUniform(glslProgram, 'uniform_depthBias');
      if (uniformLocationDepthBias) {
        let depthBias = this.getShaderParameter(material, 'depthBias', false);
        if (depthBias) {
          this._glContext.uniform1f(uniformLocationDepthBias, depthBias, true);
        }
      }

      return vertexAttribsAsResult;
    }
  }

  class FragmentSimpleShader extends Shader {
    constructor(glBoostContext, basicShader = VertexWorldShaderSource) {

      super(glBoostContext, basicShader);

      FragmentSimpleShader.mixin(basicShader);
      FragmentSimpleShader.mixin(FragmentSimpleShaderSource);

      this._isNeededToMultiplyAlphaToColorOfPixelOutput = null;
    }

    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);

      this._glContext.uniform1i(material.getUniform(glslProgram, 'uniform_isNeededToMultiplyAlphaToColorOfPixelOutput'), this._isNeededToMultiplyAlphaToColorOfPixelOutput, true);

    }

    set isNeededToMultiplyAlphaToColorOfPixelOutput(flg) {
      this._isNeededToMultiplyAlphaToColorOfPixelOutput = flg;
    }

    get isNeededToMultiplyAlphaToColorOfPixelOutput() {
      return this._isNeededToMultiplyAlphaToColorOfPixelOutput;
    }
  }


  GLBoost['FragmentSimpleShader'] = FragmentSimpleShader;

  class VertexWorldShadowShaderSource {
    // In the context within these member methods,
    // this is the instance of the corresponding shader class.

    VSDefine_VertexWorldShadowShaderSource(in_, out_, f, lights, material, extraData) {
      var shaderText =   '';
      //for (let i=0; i<lights.length; i++) {
      //if (lights[i].camera && lights[i].camera.texture) {

      let lightNumExceptAmbient = lights.filter((light)=>{return !light.isTypeAmbient();}).length;        
          
      //shaderText +=      `uniform mat4 depthPVMatrix[${lightNumExceptAmbient}];\n`;
      //shaderText +=       `${out_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;

      return shaderText;
    }

    VSTransform_VertexWorldShadowShaderSource(existCamera_f, f, lights, material, extraData) {
      var shaderText = '';
      let gl = this._glContext.gl;

      return shaderText;
    }

    FSDefine_VertexWorldShadowShaderSource(in_, f, lights, material, extraData) {
      let shaderText = '';

      shaderText += 'uniform float depthBias;\n';
      let lightNumExceptAmbient = lights.filter((light)=>{return !light.isTypeAmbient();}).length;
  //    shaderText += `${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;
      if (lightNumExceptAmbient > 0) {
        shaderText += `uniform mat4 depthPVMatrix[${lightNumExceptAmbient}];\n`;
      }
      
      return shaderText;
    }

    FSShade_VertexWorldShadowShaderSource(f, gl, lights) {
      let shaderText = '';
      shaderText += 'float visibilityLevel = 1.0;\n';

      if (lights.length > 0) {
        shaderText += `    vec4 shadowCoord[${lights.length}];\n`;
      }    
      for (let i=0; i<lights.length; i++) {
        shaderText += `  { // ${i}\n`;
        shaderText += `    shadowCoord[${i}] = depthPVMatrix[${i}] * vec4(v_position_world, 1.0); // ${i}\n`;
        shaderText += `    shadowCoord[${i}].xyz *= 0.5; // ${i}\n`;
        shaderText += `    shadowCoord[${i}].xyz += 0.5; // ${i}\n`;
        shaderText += `  } // ${i}\n`;
      }
      return shaderText;
    }
    FSPostEffect_VertexWorldShadowShaderSource(f, gl, lights, material, extraData) {
      let shaderText = '';

  //    shaderText += 'rt0 = vec4(visibilityLevel, 1.0, 1.0, 1.0);\n';

      return shaderText;
    }

    prepare_VertexWorldShadowShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      vertexAttribs.forEach((attribName)=>{
        if (attribName === 'position' || attribName === 'normal') {
          shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
          if (shaderProgram['vertexAttribute_' + attribName] !== -1) {
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);  
          }
        }
      });

      
      for (let i=0; i<lights.length; i++) {
        let light = lights[i];
        
        material.setUniform(shaderProgram, 'uniform_isShadowCasting' + i, this._glContext.getUniformLocation(shaderProgram, 'isShadowCasting[' + i + ']'));

        if (light.camera && light.camera.texture) {// && light.isCastingShadow) {

          // depthTexture
          let depthTextureUniformLocation = this._glContext.getUniformLocation(shaderProgram, `uDepthTexture[${i}]`);
          material.setUniform(shaderProgram, 'uniform_DepthTextureSampler_' + i, depthTextureUniformLocation);

          let index = i;

          // count for Decal Texture at first
          index++;

          // count for Normal Texture if it exists
          let normalTexture = material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_NORMAL);
          if (normalTexture) {
            index++;
          }

          lights[i].camera.texture.textureUnitIndex = index;  // +1 because 0 is used for diffuse texture
        }
      }

      let uniform_depthBias = this._glContext.getUniformLocation(shaderProgram, 'depthBias');
      material.setUniform(shaderProgram, 'uniform_depthBias', uniform_depthBias);
      this._glContext.uniform1f(uniform_depthBias, 0.005, true);

      let textureUnitIndex = 0;
      for (let i=0; i<lights.length; i++) {
        //if (lights[i].camera && lights[i].camera.texture) {

        // matrices
        material.setUniform(shaderProgram, 'uniform_depthPVMatrix_' + textureUnitIndex, this._glContext.getUniformLocation(shaderProgram, 'depthPVMatrix[' + textureUnitIndex + ']'));

        textureUnitIndex++;
        //}
        //shaderProgram['isShadowCasting' + i] = this._glContext.getUniformLocation(shaderProgram, 'isShadowCasting[' + i + ']');
      }

      return vertexAttribsAsResult;
    }

  }

  GLBoost['VertexWorldShadowShaderSource'] = VertexWorldShadowShaderSource;

  class DecalShaderSource {
    // In the context within these member methods,
    // this is the instance of the corresponding shader class.

    VSDefine_DecalShaderSource(in_, out_, f) {
      var shaderText = '';
      if (Shader._exist(f, GLBoost$1.COLOR)) {
        shaderText += `${in_} vec4 aVertex_color;\n`;
        shaderText += `${out_} vec4 color;\n`;
      }
      if (Shader._exist(f, GLBoost$1.TEXCOORD)) {
        shaderText += `${in_} vec2 aVertex_texcoord;\n`;
        shaderText += `${out_} vec2 texcoord;\n`;
      }
      return shaderText;
    }

    VSTransform_DecalShaderSource(existCamera_f, f) {
      var shaderText = '';
      if (Shader._exist(f, GLBoost$1.COLOR)) {
        shaderText += '  color = aVertex_color;\n';
      }
      if (Shader._exist(f, GLBoost$1.TEXCOORD)) {
        shaderText += '  texcoord = aVertex_texcoord;\n';
      }
      return shaderText;
    }

    FSDefine_DecalShaderSource(in_, f, lights, material, extraData) {
      var shaderText = '';
      if (Shader._exist(f, GLBoost$1.COLOR)) {
        shaderText += `${in_} vec4 color;\n`;
      }
      if (Shader._exist(f, GLBoost$1.TEXCOORD)) {
        shaderText += `${in_} vec2 texcoord;\n\n`;
      }
      if (material.hasAnyTextures()) {
        shaderText += 'uniform sampler2D uTexture;\n';
      }
      shaderText += 'uniform vec4 materialBaseColor;\n';
      shaderText += 'uniform int uIsTextureToMultiplyAlphaToColorPreviously;\n';

      return shaderText;
    }

    FSMethodDefine_DecalShaderSource(in_, f, lights, material, extraData) {
      let shaderText = '';

      shaderText += this._multiplyAlphaToColorOfTexel();

      return shaderText;
    }

    FSShade_DecalShaderSource(f, gl, lights, material, extraData) {
      var shaderText = '';

      shaderText += Shader._getNormalStr(gl, material, f);
      
      var textureFunc = Shader._texture_func(gl);
      if (Shader._exist(f, GLBoost$1.COLOR)) {
        shaderText += '  rt0 *= color;\n';
      }
      shaderText += '    rt0 *= materialBaseColor;\n';
      if (Shader._exist(f, GLBoost$1.TEXCOORD) && material.hasAnyTextures()) {
        shaderText += `  rt0 *= multiplyAlphaToColorOfTexel(uTexture, texcoord, uIsTextureToMultiplyAlphaToColorPreviously);\n`;
      }

      //shaderText += '    float shadowRatio = 0.0;\n';

      //shaderText += '    rt0 = vec4(1.0, 0.0, 0.0, 1.0);\n';

      return shaderText;
    }

    prepare_DecalShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];
      vertexAttribs.forEach((attribName)=>{
        if (attribName === 'color' || attribName === 'texcoord') {
          shaderProgram['vertexAttribute_' + attribName] = gl.getAttribLocation(shaderProgram, 'aVertex_' + attribName);
          if (shaderProgram['vertexAttribute_' + attribName] !== -1) {
            gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + attribName]);
            vertexAttribsAsResult.push(attribName);  
          }
        }
      });

      material.setUniform(shaderProgram, 'uniform_materialBaseColor', this._glContext.getUniformLocation(shaderProgram, 'materialBaseColor'));

      let diffuseTexture = material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_DIFFUSE);
      if (!diffuseTexture) {
        diffuseTexture = this._glBoostContext.defaultDummyTexture;
      }

      if (diffuseTexture.toMultiplyAlphaToColorPreviously) {
        let uIsTextureToMultiplyAlphaToColorPreviously = this._glContext.getUniformLocation(shaderProgram, 'uIsTextureToMultiplyAlphaToColorPreviously');
        material.setUniform(shaderProgram, 'uIsTextureToMultiplyAlphaToColorPreviously', uIsTextureToMultiplyAlphaToColorPreviously);
      }

      let uTexture = this._glContext.getUniformLocation(shaderProgram, 'uTexture');
      material.setUniform(shaderProgram, 'uTexture', uTexture);
      // set texture unit 0 to the sampler
      this._glContext.uniform1i( uTexture, 0, true);

      material._semanticsDic['TEXTURE'] = [];

      material.uniformTextureSamplerDic['uTexture'] = {};
      if (material.hasAnyTextures() || diffuseTexture) {
        material.uniformTextureSamplerDic['uTexture'].textureUnitIndex = 0;
        material.uniformTextureSamplerDic['uTexture'].textureName = diffuseTexture.userFlavorName;
        material._semanticsDic['TEXTURE'] = 'uTexture';
      }


      let normalTexture = material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_NORMAL);
      let uNormalTexture = this._glContext.getUniformLocation(shaderProgram, 'uNormalTexture');
      if (uNormalTexture) {
        material.setUniform(shaderProgram, 'uNormalTexture', normalTexture);
        // set texture unit 1 to the normal texture sampler
        this._glContext.uniform1i( uNormalTexture, 1, true);

        material.uniformTextureSamplerDic['uNormalTexture'] = {};
        if (material.hasAnyTextures()) {
          material.uniformTextureSamplerDic['uNormalTexture'].textureUnitIndex = 1;
          material.uniformTextureSamplerDic['uNormalTexture'].textureName = normalTexture.userFlavorName;
          material._semanticsDic['TEXTURE'].push('uNormalTexture');
        }
      }

      return vertexAttribsAsResult;
    }
  }

  class DecalShader extends FragmentSimpleShader {
    constructor(glBoostContext) {

      super(glBoostContext);

      DecalShader.mixin(VertexWorldShadowShaderSource);
      DecalShader.mixin(DecalShaderSource);

      this._lut = null;
    }

    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);

      let baseColor = material.baseColor;
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_materialBaseColor'), baseColor.x, baseColor.y, baseColor.z, baseColor.w, true);

      let diffuseTexture = material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_DIFFUSE);
      if (diffuseTexture) {
        material.uniformTextureSamplerDic['uTexture'].textureName = diffuseTexture.userFlavorName;
        this._glContext.uniform1i(material.getUniform(glslProgram, 'uIsTextureToMultiplyAlphaToColorPreviously'), diffuseTexture.toMultiplyAlphaToColorPreviously, true);
      }


      // For Shadow
      for (let i=0; i<lights.length; i++) {
        if (lights[i].camera && lights[i].camera.texture) {
          let cameraMatrix = lights[i].camera.lookAtRHMatrix();
          let viewMatrix = cameraMatrix.clone();
          let projectionMatrix = lights[i].camera.projectionRHMatrix();
          gl.uniformMatrix4fv(material.getUniform(glslProgram, 'uniform_depthPVMatrix_'+i), false, Matrix44$2.multiply(projectionMatrix, viewMatrix).flatten());
        }

        if (lights[i].camera && lights[i].camera.texture) {
          this._glContext.uniform1i(material.getUniform(glslProgram, 'uniform_isShadowCasting' + i), 1, true);
        } else {
          this._glContext.uniform1i(material.getUniform(glslProgram, 'uniform_isShadowCasting' + i), 0, true);
        }

        if (lights[i].camera && lights[i].camera.texture) {
          let uniformLocation = material.getUniform(glslProgram, 'uniform_DepthTextureSampler_' + i);
          let index = lights[i].camera.texture.textureUnitIndex;

          this._glContext.uniform1i(uniformLocation, index, true);
        } else {
          this._glContext.uniform1i(material.getUniform(glslProgram, 'uniform_DepthTextureSampler_' + i), 0, true);
        }
      }
    }

    setUniformsAsTearDown(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniformsAsTearDown(gl, glslProgram, scene, material, camera, mesh, lights);
      for (let i=0; i<lights.length; i++) {
        if (lights[i].camera && lights[i].camera.texture) {
          // set depthTexture unit i+1 to the sampler
          this._glContext.uniform1i(material.getUniform(glslProgram, 'uniform_DepthTextureSampler_' + i), 0, true);  // +1 because 0 is used for diffuse texture
        }
      }
    }

    set lut(lut) {
      this._lut = lut;
    }

    get lut() {
      return this._lut;
    }
  }

  GLBoost$1['DecalShader'] = DecalShader;

  class L_AbstractMaterial extends GLBoostObject {
    constructor(glBoostContext) {
      super(glBoostContext);

      if (this.constructor === L_AbstractMaterial) {
        throw new TypeError('Cannot construct L_AbstractMaterial instances directly.');
      }

      this._textureDic = {};
      this._texturePurposeDic = [];
      this._textureContributionRateDic = {};
      this._gl = this._glContext.gl;
      this._baseColor = new Vector4(1.0, 1.0, 1.0, 1.0);
      this._diffuseColor = new Vector4(1.0, 1.0, 1.0, 1.0);
      this._specularColor = new Vector4(0.5, 0.5, 0.5, 1.0);
      this._ambientColor = new Vector4(0.25, 0.25, 0.25, 1.0);
      this._name = '';
      this._shaderClass = DecalShader;
      this._shaderInstance = null;
      this._vertexNofGeometries = {};
      this._states = {
        enable:[],
        functions:{}
      };
      this._shaderUniformLocationsOfExpressions = {};
      this._isVisibleForGeometiesAssginedByThisMaterial = true;
      this._globalStatesUsage = null;
      this._shaderParametersForShaderInstance = {};
      this._semanticsDic = {};

      this._stateFunctionsToReset = {
        "blendColor": [0.0, 0.0, 0.0, 0.0],
        "blendEquationSeparate": [
          32774,
          32774
        ],
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

      this._countOfUpdate = 0;
    }

    clone() {
      var material = new ClassicMaterial(this._glBoostContext);
      material._baseColor = this._baseColor;
      material._diffuseColor = this._diffuseColor;
      material._specularColor = this._specularColor;
      material._ambientColor = this._ambientColor;
      material._shaderClass = this._shaderClass;
      material._shaderInstance = this._shaderInstance;

      for (let geom in this._vertexNofGeometries) {
        material._vertexNofGeometries[geom] = this._vertexNofGeometries[geom];
      }

      return material;
    }

    _updateCount() {
      this._countOfUpdate += 1;
    }

    getUpdateStateString() {
      return this.toString() + '_updateCount_' + this._countOfUpdate;
    }

    setShaderClassWithForceUpdate(shaderClass) {
      this._shaderClass = shaderClass;
      if (this._shaderInstance) {
        this._shaderInstance.readyForDiscard();
      }
      this._shaderInstance = null;
    }

    set shaderClass(shaderClass) {
      if (this._shaderClass === shaderClass) {
        return;
      }
      this.setShaderClassWithForceUpdate(shaderClass);
    }

    get shaderClass() {
      return this._shaderClass;
    }

    set shaderInstance(shaderInstance) {
      this._shaderInstance = shaderInstance;
      this._updateCount();
    }

    get shaderInstance() {
      return this._shaderInstance;
    }

    setTexture(texture, purpose) {
      if (!texture) {
        return;
      }
      this._textureDic[texture.userFlavorName] = texture;
      let _purpose = (typeof purpose !== 'undefined' ? purpose:GLBoost$1.TEXTURE_PURPOSE_DIFFUSE);
      this._texturePurposeDic[_purpose] = texture.userFlavorName;
      texture.purpose = _purpose;
      this._textureContributionRateDic[texture.userFlavorName] = new Vector4(1.0, 1.0, 1.0, 1.0);
      this._updateCount();
    }

    removeTexture(userFlavorName, discardTexture=true) {
      if (discardTexture) {
        this._textureDic[userFlavorName].readyForDiscard();
      }
      delete this._texturePurposeDic[this._textureDic[userFlavorName].purpose];
      delete this._textureDic[userFlavorName];
      delete this._textureContributionRateDic[userFlavorName];
      this._updateCount();
    }

    setTexturePurpose(userFlavorNameOfTexture, purpose) {
      this._texturePurposeDic[purpose] = userFlavorNameOfTexture;
      this._updateCount();
    }

    getTexture(userFlavorName) {
      return this._textureDic[userFlavorName];
    }

    getTextureFromPurpose(purpose) {
      let userFlavorName = this._texturePurposeDic[purpose];
      return this.getTexture(userFlavorName);
    }

    getOneTexture() {
      for (let userFlavorName in this._textureDic) {
        return this._textureDic[userFlavorName];
      }
      return null;
    }

    getTextureNum() {
      let count = 0;
      for (let userFlavorName in this._textureDic) {
        if (this._textureDic[userFlavorName] instanceof AbstractTexture) {
          count += 1;
        }
      }
      return count;
    }

    getTextureUserFlavorNames() {
      return Object.keys(this._textureDic);
    }

    setAllTextureContributionRate(rateVec4) {
      for (let userFlavorName in this._textureContributionRateDic) {
        this._textureContributionRateDic[userFlavorName] = rateVec4;
      }
      this._updateCount();
    }

    setTextureContributionRate(textureUserFlavorName, rateVec4) {
      this._textureContributionRateDic[textureUserFlavorName] = rateVec4;
      this._updateCount();
    }

    getTextureContributionRate(textureUserFlavorName) {
      return this._textureContributionRateDic[textureUserFlavorName];
    }


    hasAnyTextures() {
      let result = false;
      for (let userFlavorName in this._textureDic) {
        result = true;
      }

      return result;
    }

    set baseColor(vec) {
      if (!vec) {
        return;
      }

      this._baseColor = vec;
      this._updateCount();
    }

    get baseColor() {
      return this._baseColor;
    }

    set diffuseColor(vec) {
      if (!vec) {
        return;
      }

      this._diffuseColor = vec;
      this._updateCount();
    }

    get diffuseColor() {
      return this._diffuseColor;
    }

    set specularColor(vec) {
      if (!vec) {
        return;
      }

      this._specularColor = vec;
      this._updateCount();
    }

    get specularColor() {
      return this._specularColor;
    }

    set ambientColor(vec) {
      if (!vec) {
        return;
      }

      this._ambientColor = vec;
      this._updateCount();
    }

    get ambientColor() {
      return this._ambientColor;
    }

    set states(states) {
      if (typeof states.functions === 'undefined') {
        states.functions = this._stateFunctionsToReset;
      }
      this._states = states;
      this._updateCount();
    }

    get states() {
      return this._states;
    }

    isTransparent() {
      let isTransparent = false;
      if (this._states) {
        if (this._states.enable) {
          this._states.enable.forEach((state) => {
            if (state === 3042) {
              isTransparent = true;
            }
          });
        }
      }

      return isTransparent;
    }

    set name(name) {
      this._name = name;
      this._updateCount();
    }

    get name() {
      return this._name;
    }

    setVertexN(geom, num) {
      this._vertexNofGeometries[geom] = num;
      this._updateCount();
    }

    getVertexN(geom) {
      return (typeof this._vertexNofGeometries[geom] === 'undefined') ? 0 : this._vertexNofGeometries[geom];
    }

    /**
     * [en] bind the texture. For any value, it returns true if we call WebGL's bindTexture function, false otherwise.<br />
     * [ja] テクスチャをバインドします。どんな値にせよ、WebGLのbindTexture関数を呼んだ場合はtrueを、そうでなければfalseを返します。
     */
    setUpTexture(textureName, textureUnitIndex) {
      var gl = this._gl;
      let texture = this.getTexture(textureName);
      let isCalledWebGLBindTexture = true;

      if (texture) {
        isCalledWebGLBindTexture = texture.setUp(textureUnitIndex);
        return isCalledWebGLBindTexture;
      } else {
        this._glBoostContext.defaultDummyTexture.setUp(0);

  //      gl.bindTexture(gl.TEXTURE_2D, null);
        isCalledWebGLBindTexture = true;
        return isCalledWebGLBindTexture;
      }
    }

    tearDownTexture(textureName, textureUnitIndex) {
      let texture = this.getTexture(textureName);
      if (texture) {
        texture.tearDown(textureUnitIndex);
      }
    }

    _setUpMaterialStates(states) {
      let gl = this._gl;

      if (states) {
        if (states.enable) {
          states.enable.forEach((state)=>{
            gl.enable(state);
          });
        }
        if (states.functions) {
          for (let functionName in states.functions) {
            gl[functionName].apply(gl, states.functions[functionName]);
          }
        }
      }
    }

    setUpStates() {
      let globalStatesUsage = this._glBoostContext.globalStatesUsage;
      if (this._globalStatesUsage) {
        globalStatesUsage = this._globalStatesUsage;
      }
      switch (globalStatesUsage) {
        case GLBoost$1.GLOBAL_STATES_USAGE_DO_NOTHING:
          break;
        case GLBoost$1.GLOBAL_STATES_USAGE_IGNORE:
          this._setUpMaterialStates(this._states);
          break;
        case GLBoost$1.GLOBAL_STATES_USAGE_INCLUSIVE:
          this._glBoostContext.reflectGlobalGLState();
          this._setUpMaterialStates(this._states);
          break;
        case GLBoost$1.GLOBAL_STATES_USAGE_EXCLUSIVE:
          this._glBoostContext.reflectGlobalGLState();
          break;
        default:
          break;
      }
    }

    tearDownStates() {
      this._glBoostContext.disableAllGLState();
      this._setUpMaterialStates({
        functions : this._stateFunctionsToReset
      });
    }

    setUniform(glslProgram, uniformLocationName, uniformLocation) {
      if (!this._shaderUniformLocationsOfExpressions[glslProgram.hashId]) {
        this._shaderUniformLocationsOfExpressions[glslProgram.hashId] = {};
      }

      this._shaderUniformLocationsOfExpressions[glslProgram.hashId][uniformLocationName] = uniformLocation;
      glslProgram['uniform_' + uniformLocationName] = uniformLocationName;

      this._updateCount();
    }

    getUniform(glslProgram, uniformLocationName) {
      if (typeof this._shaderUniformLocationsOfExpressions[glslProgram.hashId] !== 'undefined') {
        return this._shaderUniformLocationsOfExpressions[glslProgram.hashId][uniformLocationName];
      }

  //    MiscUtil.consoleLog(GLBoost.LOG_GENERAL, 'this._shaderUniformLocationsOfExpressions[hashIdOfGLSLProgram] became undefined. Are you sure of it?');

      return void 0;
    }

    set isVisible(flg) {
      this._isVisibleForGeometiesAssginedByThisMaterial = flg;
      this._updateCount();
    }

    get isVisible() {
      return this._isVisibleForGeometiesAssginedByThisMaterial;
    }

    set globalStatesUsage(usage) {
      this._globalStatesUsage = usage;
      this._updateCount();
    }

    get globalStatesUsage() {
      return this._globalStatesUsage;
    }

    get shaderParameters() {
      return this._shaderParametersForShaderInstance;
    }

    set shaderParameters(shaderParameterDic) {
      this._shaderParametersForShaderInstance = shaderParameterDic;
    }

    addSemanticsDic(uniform, uniformName) {
      if (typeof this._semanticsDic[uniform] === 'undefined') {
        this._semanticsDic[uniform] = uniformName;
      } else if (typeof this._semanticsDic[uniform] === 'string') {
        let tmpSemanticsStr = this._semanticsDic[uniform];
        this._semanticsDic[uniform] = [];
        this._semanticsDic[uniform].push(tmpSemanticsStr);
        this._semanticsDic[uniform].push(uniformName);
      } else {
        // it must be Array
        this._semanticsDic[uniform].push(uniformName);
      }
    }

    removeSemanticsDic(uniform) {
      delete this._semanticsDic[uniform];
    }

    readyForDiscard() {
      for (let userFlavorName in this._textureDic) {
        this.removeTexture(userFlavorName, true);
      }
      if (this._shaderInstance) {
        this._shaderInstance.readyForDiscard();
      }
      this._shaderInstance = null;
    }
  }

  GLBoost$1['L_AbstractMaterial'] = L_AbstractMaterial;

  class ClassicMaterial$1 extends L_AbstractMaterial {
    constructor(glBoostContext) {
      super(glBoostContext);

      this._wireframeWidthRelativeScale = 1.0;

    }

    get wireframeWidthRelativeScale() {
      return this._wireframeWidthRelativeScale;
    }
  }

  GLBoost$1['ClassicMaterial'] = ClassicMaterial$1;

  class L_AbstractCamera extends L_Element {
    constructor(glBoostContext, toRegister, lookat) {
      super(glBoostContext, toRegister);

      if (this.constructor === L_AbstractCamera) {
        throw new TypeError('Cannot construct AbstractCamera instances directly.');
      }

      this._translate = lookat.eye;
      this._translateInner = super.translate.clone();
      this._center = lookat.center;
      this._up = lookat.up;
      this._upInner = lookat.up;
      this._centerInner = this._up.clone();


      this._cameraController = null;

      this._dirtyView = true;

      this._middleLevelCamera = null;
    }

    set cameraController(controller) {
      this._cameraController = controller;
      if (this._middleLevelCamera !== null) {
        controller.addCamera(this._middleLevelCamera);
      } else {
        controller.addCamera(this);
      }
    }

    get cameraController() {
      return this._cameraController;
    }

    _affectedByCameraController() {
      if (this._cameraController !== null) {
        let results = this._cameraController.convert(this);
        this._translateInner = results[0];
        this._centerInner = results[1];
        this._upInner = results[2];
        this._zNearInner = results[3];
        this._zFarInner = results[4];
        this._leftInner = results[5];
        this._rightInner = results[6];
        this._topInner = results[7];
        this._bottomInner = results[8];
      } else {
        this._translateInner = super.translate.clone();
        this._centerInner = this._center.clone();
        this._upInner = this._up.clone();
        this._zNearInner = this._zNear;
        this._zFarInner = this._zFar;
        this._leftInner = this._left;
        this._rightInner = this._right;
        this._topInner = this._top;
        this._bottomInner = this._bottom;
      }
    }

    get middleLevelCamera() {
      return this._middleLevelCamera;
    }

    _needUpdateView(withTryingResetOfCameraController = true) {
      if (this._cameraController !== null && withTryingResetOfCameraController) {
        this._cameraController.tryReset();
      }
      this._dirtyView = true;
    }

    lookAtRHMatrix() {
      if (this._dirtyView) {
        this._affectedByCameraController();
        this._viewMatrix = L_AbstractCamera.lookAtRHMatrix(this.translateInner, this.centerInner, this.upInner);
        this._dirtyView = false;
        return this._viewMatrix.clone();
      } else {
        return this._viewMatrix.clone();
      }
    }

    static lookAtRHMatrix(eye, center, up) {

      var f = Vector3.normalize(Vector3.subtract(center, eye));
      var s = Vector3.normalize(Vector3.cross(f, up));
      var u = Vector3.cross(s, f);

      return new Matrix44$2(s.x, s.y, s.z, -Vector3.dotProduct(s,eye),
        u.x, u.y, u.z, -Vector3.dotProduct(u,eye),
        -f.x, -f.y, -f.z, Vector3.dotProduct(f,eye),
        0, 0, 0, 1);
    }

    setAsMainCamera(scene) {
      L_AbstractCamera._mainCamera[scene.toString()] = this;
    }

    isMainCamera(scene) {
      return L_AbstractCamera._mainCamera[scene.toString()] === this;
    }

    set translate(vec) {
      super.translate = vec;
      this._needUpdateView();
    }

    get translate() {
      return this._translate;
    }

    get translateInner() {
      return this._translateInner;
    }

    set eye(vec) {
      super.translate = vec;
      this._needUpdateView();
    }

    get eye() {
      return this._translate;
    }

    get eyeInner() {
      return this._translateInner;
    }

    set center(vec) {
      if (this._center.isEqual(vec)) {
        return;
      }
      this._center = vec;
      this._needUpdateView();
    }

    get center() {
      return this._center;
    }

    get centerInner() {
      return this._centerInner;
    }

    set up(vec) {
      if (this._up.isEqual(vec)) {
        return;
      }
      this._up = vec;
      this._needUpdateView();
    }

    get up() {
      return this._up;
    }

    get upInner() {
      return this._upInner;
    }

    set texture(texture) {
      this._texture = texture;
    }

    get texture() {
      return this._texture;
    }
  }

  L_AbstractCamera._mainCamera = {};

  class L_PerspectiveCamera extends L_AbstractCamera {
    constructor(glBoostContext, toRegister, lookat, perspective) {
      super(glBoostContext, toRegister, lookat);

      this._fovy = perspective.fovy;
      this._aspect = perspective.aspect;
      this._zNear = perspective.zNear;
      this._zFar = perspective.zFar;

      this._zNearInner = perspective.zNear;
      this._zFarInner = perspective.zFar;

      this._dirtyProjection = true;
      this._updateCountAsCameraProjection = 0;
    }

    _needUpdateProjection() {
      this._dirtyProjection = true;
      this._updateCountAsCameraProjection++;
    }

    get updateCountAsCameraProjection() {
      return this._updateCountAsCameraProjection;
    }

    projectionRHMatrix() {
      if (this._dirtyProjection) {
        this._projectionMatrix = L_PerspectiveCamera.perspectiveRHMatrix(this._fovy, this._aspect, this._zNearInner, this._zFarInner);
        this._dirtyProjection = false;
        return this._projectionMatrix.clone();
      } else {
        return this._projectionMatrix.clone();
      }
    }

    static perspectiveRHMatrix(fovy, aspect, zNear, zFar) {

      var yscale = 1.0 / Math.tan(0.5*fovy*Math.PI/180);
      var xscale = yscale / aspect;

      if (zFar) {
        return new Matrix44$2(
          xscale, 0.0, 0.0, 0.0,
          0.0, yscale, 0.0, 0.0,
          0.0, 0.0, - (zFar + zNear) / (zFar - zNear), - (2.0 * zFar * zNear) / (zFar - zNear),
          0.0, 0.0, -1.0, 0.0
        );
      } else {
        return new Matrix44$2(
          xscale, 0.0, 0.0, 0.0,
          0.0, yscale, 0.0, 0.0,
          0.0, 0.0, -1,0, -2*zNear,
          0.0, 0.0, -1.0, 0.0
        );
      }

    }

    set fovy(value) {
      if (this._fovy === value) {
        return;
      }
      this._fovy = value;
      this._needUpdateProjection();
    }

    get fovy() {
      return this._fovy;
    }

    set aspect(value) {
      if (this._aspect === value) {
        return;
      }
      this._aspect = value;
      this._needUpdateProjection();
    }

    get aspect() {
      return this._aspect;
    }

    set zNear(value) {
      if (this._zNear === value) {
        return;
      }
      this._zNear = value;
      this._needUpdateProjection();
    }

    get zNear() {
      return this._zNear;
    }

    set zFar(value) {
      if (this._zFar === value) {
        return;
      }
      this._zFar = value;
      this._needUpdateProjection();
    }

    get zFar() {
      return this._zFar;
    }

  }

  class L_FrustumCamera extends L_AbstractCamera {
    constructor(glBoostContext, toRegister, lookat, frustum) {
      super(glBoostContext, toRegister, lookat);

      this._left = frustum.left;
      this._right = frustum.right;
      this._top = frustum.top;
      this._bottom = frustum.bottom;
      this._zNear = frustum.zNear;
      this._zFar = frustum.zFar;

      this._zNearInner = frustum.zNear;
      this._zFarInner = frustum.zFar;

      this._dirtyProjection = true;
      this._updateCountAsCameraProjection = 0;
    }

    _needUpdateProjection() {
      this._dirtyProjection = true;
      this._updateCountAsCameraProjection++;
    }

    get updateCountAsCameraProjection() {
      return this._updateCountAsCameraProjection;
    }

    projectionRHMatrix() {
      if (this._dirtyProjection) {
        this._projectionMatrix = L_FrustumCamera.frustumRHMatrix(this._leftInner, this._rightInner, this._topInner, this._bottomInner, this._zNearInner, this._zFarInner);
        this._dirtyProjection = false;
        return this._projectionMatrix.clone();
      } else {
        return this._projectionMatrix.clone();
      }
    }

    static frustumRHMatrix(left, right, top, bottom, zNear, zFar) {
      return new Matrix44$2(
        2*zNear/(right-left), 0.0, (right+left)/(right-left), 0.0,
        0.0, 2*zNear/(top-bottom), (top+bottom)/(top-bottom), 0.0,
        0.0, 0.0, - (zFar+zNear)/(zFar-zNear), -1*2*zFar*zNear/(zFar-zNear),
        0.0, 0.0, -1.0, 0.0
      );
    }

    set left(value) {
      if (this._left === value) {
        return;
      }
      this._left = value;
      this._needUpdateProjection();
    }

    get left() {
      return this._left;
    }

    set right(value) {
      if (this._right === value) {
        return;
      }
      this._right = value;
      this._needUpdateProjection();
    }

    get right() {
      return this._right;
    }

    set top(value) {
      if (this._top === value) {
        return;
      }
      this._top = value;
      this._needUpdateProjection();
    }

    get top() {
      return this._top;
    }

    set bottom(value) {
      if (this._bottom === value) {
        return;
      }
      this._bottom = value;
      this._needUpdateProjection();
    }

    get bottom() {
      return this._bottom;
    }

    set zNear(value) {
      if (this._zNear === value) {
        return;
      }
      this._zNear = value;
      this._needUpdateProjection();
    }

    get zNear() {
      return this._zNear;
    }

    set zFar(value) {
      if (this._zFar === value) {
        return;
      }
      this._zFar = value;
      this._needUpdateProjection();
    }

    get zFar() {
      return this._zFar;
    }

    get aspect() {
      return (this.right - this.left) / (this.top - this.bottom);
    }
  }

  class L_OrthoCamera extends L_AbstractCamera {
    constructor(glBoostContext, toRegister, lookat, ortho) {
      super(glBoostContext, toRegister, lookat);

      this._left = (typeof ortho.left === "undefined") ? -1:ortho.left;
      this._right = (typeof ortho.right === "undefined") ? 1:ortho.right;
      this._bottom = (typeof ortho.bottom === "undefined") ? -1:ortho.bottom;
      this._top = (typeof ortho.top === "undefined") ? 1:ortho.top;
      this._zNear = ortho.zNear;
      this._zFar = ortho.zFar;
      this._xmag = ortho.xmag;
      this._ymag = ortho.ymag;

      this._dirtyProjection = true;
      this._updateCountAsCameraProjection = 0;
    }

    _needUpdateProjection() {
      this._dirtyProjection = true;
      this._updateCountAsCameraProjection++;
    }

    get updateCountAsCameraProjection() {
      return this._updateCountAsCameraProjection;
    }

    projectionRHMatrix() {
      if (this._dirtyProjection) {
        this._projectionMatrix = L_OrthoCamera.orthoRHMatrix(this._left, this._right, this._bottom, this._top, this._zNear, this._zFar, this._xmag, this._ymag);
        this._dirtyProjection = false;
        return this._projectionMatrix.clone();
      } else {
        return this._projectionMatrix.clone();
      }
    }

    static orthoRHMatrix(left, right, bottom, top, near, far, xmag, ymag) {

      if (xmag && ymag) {
        return new Matrix44$2(
          1/xmag, 0.0, 0.0, 0,
          0.0, 1/ymag, 0.0, 0,
          0.0, 0.0, -2/(far-near), -(far+near)/(far-near),
          0.0, 0.0, 0.0, 1.0
        );
      } else {
        return new Matrix44$2(
          2/(right-left), 0.0, 0.0, -(right+left)/(right-left),
          0.0, 2/(top-bottom), 0.0, -(top+bottom)/(top-bottom),
          0.0, 0.0, -2/(far-near), -(far+near)/(far-near),
          0.0, 0.0, 0.0, 1.0
        );
      }
    }

    set left(value) {
      if (this._left === value) {
        return;
      }
      this._left = value;
      this._needUpdateProjection();
    }

    get left() {
      return this._left;
    }

    set right(value) {
      if (this._right === value) {
        return;
      }
      this._right = value;
      this._needUpdateProjection();
    }

    get right() {
      return this._right;
    }

    set bottom(value) {
      if (this._bottom === value) {
        return;
      }
      this._bottom = value;
      this._needUpdateProjection();
    }

    get bottom() {
      return this._bottom;
    }

    set top(value) {
      if (this._top === value) {
        return;
      }
      this._top = value;
      this._needUpdateProjection();
    }

    get top() {
      return this._top;
    }

    set zNear(value) {
      if (this._zNear === value) {
        return;
      }
      this._zNear = value;
      this._needUpdateProjection();
    }

    get zNear() {
      return this._zNear;
    }

    set zFar(value) {
      if (this._zFar === value) {
        return;
      }
      this._zFar = value;
      this._needUpdateProjection();
    }

    get zFar() {
      return this._zFar;
    }

    set xmag(value) {
      if (this._xmag === value) {
        return;
      }
      this._xmag = value;
      this._needUpdateProjection();
    }

    get xmag() {
      return this._xmag;
    }

    set ymag(value) {
      if (this._ymag === value) {
        return;
      }
      this._ymag = value;
      this._needUpdateProjection();
    }

    get ymag() {
      return this._ymag;
    }

    get aspect() {
      return (this.right - this.left) / (this.top - this.bottom);
    }
  }

  class M_AbstractCamera extends M_Element {
    constructor(glBoostContext, toRegister) {
      super(glBoostContext, toRegister);

      if (this.constructor === M_AbstractCamera) {
        throw new TypeError('Cannot construct M_AbstractCamera instances directly.');
      }

      this._lowLevelCamera = null;

      this._updateCountAsCameraView = 0;

      this._texture = null; // for example, depth texture
    }

    set cameraController(controller) {
      this._lowLevelCamera.cameraController = controller;
    }

    get cameraController() {
      return this._lowLevelCamera.cameraController;
    }

    _needUpdateView() {
      this._lowLevelCamera._needUpdateView();
      this._updateCountAsCameraView++;
    }

    get updateCountAsCameraView() {
      return this._updateCountAsCameraView;
    }

    get latestViewStateInfoString() {
      var tempString = this._accumulateMyAndParentNameWithUpdateInfo(this);
      tempString += '_updateCountAsCameraView_' + this._updateCountAsCameraView;

      return tempString;
    }

    setAsMainCamera(scene) {
      this._lowLevelCamera.setAsMainCamera(scene);
    }

    isMainCamera(scene) {
      return this._lowLevelCamera.isMainCamera(scene);
    }

    set texture(texture) {
      this._texture = texture;
    }

    get texture() {
      return this._texture;
    }

    lookAtRHMatrix() {
      return this._lowLevelCamera.lookAtRHMatrix();
    }

    set translate(vec) {
      this._lowLevelCamera.translate = vec;
    }

    get translate() {
      return this._lowLevelCamera.translate;
    }

    get translateInner() {
      return this._lowLevelCamera.translateInner;
    }

    set eye(vec) {
      this._lowLevelCamera.eye = vec;
    }

    get eye() {
      return this._lowLevelCamera.eye;
    }

    get eyeInner() {
      return this._lowLevelCamera.eyeInner;
    }

    set center(vec) {
      this._lowLevelCamera.center = vec;
    }

    get center() {
      return this._lowLevelCamera.center;
    }

    get centerInner() {
      return this._lowLevelCamera.centerInner;
    }

    set up(vec) {
      this._lowLevelCamera.up = vec;
    }

    get up() {
      return this._lowLevelCamera.up;
    }

    get upInner() {
      return this._lowLevelCamera.upInner;
    }


  }

  GLBoost['M_AbstractCamera'] = M_AbstractCamera;

  class L_CameraController extends GLBoostObject {
    constructor(glBoostContext, 
      options = {
        isSymmetryMode: true,
        doResetWhenCameraSettingChanged: false,
        isForceGrab: false,
        efficiency: 1.0,
        eventTargetDom: document
      }
    ) {
      super(glBoostContext);

      this._camaras = new Set();

      this._isKeyUp = true;
      this._isForceGrab = options.isForceGrab !== void 0 ? options.isForceGrab : false;
      this._isSymmetryMode = options.isSymmetryMode !== void 0 ? options.isSymmetryMode : true;

      this._efficiency = options.efficiency !== void 0 ? 0.5 * options.efficiency : 1;
      let eventTargetDom = options.eventTargetDom;

      this._rot_bgn_x = 0;
      this._rot_bgn_y = 0;
      this._rot_x = 0;
      this._rot_y = 0;
      this._clickedMouseYOnCanvas = 0;
      this._clickedMouseXOnCanvas = 0;

      this._verticalAngleOfVectors = 0;

      this._verticalAngleThrethold = 90;

      this._wheel_y = 1;
      this._mouse_translate_y = 0;
      this._mouse_translate_x = 0;

      this._mouseTranslateVec = new Vector3(0, 0, 0);

      this._newUpVec = new Vector3(0, 0, 0);

      this._target = null;

      this._lengthCenterToCorner = 10;
      this._lengthOfCenterToEye = 10;
      this._scaleOfTraslation = 5.0;
      this._scaleOfLengthCameraToCenter = 0.5;
      this._foyvBias = 1.0;
      this._zFarAdjustingFactorBasedOnAABB = 1.0;

      this._doResetWhenCameraSettingChanged = options.doResetWhenCameraSettingChanged !== void 0 ? options.doResetWhenCameraSettingChanged : false;

      this._shiftCameraTo = null;

      this._onMouseDown = (evt) => {
        let rect = evt.target.getBoundingClientRect();
        this._clickedMouseXOnCanvas = evt.clientX - rect.left;
        this._clickedMouseYOnCanvas = evt.clientY - rect.top;
        this._movedMouseYOnCanvas = -1;
        this._movedMouseXOnCanvas = -1;
        this._rot_bgn_x = this._rot_x;
        this._rot_bgn_y = this._rot_y;

        this._isKeyUp = false;

        if (typeof evt.buttons !== 'undefined') {
          this._camaras.forEach(function (camera) {
            camera._needUpdateView(false);
            camera._needUpdateProjection();
          });
        }
        return false;
      };

      this._onMouseUp = (evt) => {
        this._isKeyUp = true;
        this._movedMouseYOnCanvas = -1;
        this._movedMouseXOnCanvas = -1;
      };

      this._onMouseMove = (evt) => {
        if (this._isKeyUp) {
          return;
        }

        let rect = evt.target.getBoundingClientRect();
        this._movedMouseXOnCanvas = evt.clientX - rect.left;
        this._movedMouseYOnCanvas = evt.clientY - rect.top;

        if (typeof evt.buttons !== 'undefined') {
          let data = evt.buttons;
          let button_l = ((data & 0x0001) ? true : false);
          let button_c = ((data & 0x0004) ? true : false);
          if (button_c) {
            this._mouse_translate_y = (this._movedMouseYOnCanvas - this._clickedMouseYOnCanvas) / 1000 * this._efficiency;
            this._mouse_translate_x = (this._movedMouseXOnCanvas - this._clickedMouseXOnCanvas) / 1000 * this._efficiency;

            let scale = this._lengthOfCenterToEye * this._foyvBias * this._scaleOfTraslation;
            if (evt.shiftKey) {
              this._mouseTranslateVec = Vector3.add(this._mouseTranslateVec, Vector3.normalize(this._newEyeToCenterVec).multiply(-this._mouse_translate_y).multiply(scale));
            } else {
              this._mouseTranslateVec = Vector3.add(this._mouseTranslateVec, Vector3.normalize(this._newUpVec).multiply(this._mouse_translate_y).multiply(scale));
            }
            this._mouseTranslateVec = Vector3.add(this._mouseTranslateVec, Vector3.normalize(this._newTangentVec).multiply(this._mouse_translate_x).multiply(scale));

            this._clickedMouseYOnCanvas = this._movedMouseYOnCanvas;
            this._clickedMouseXOnCanvas = this._movedMouseXOnCanvas;
          }

          this._camaras.forEach(function (camera) {
            camera._needUpdateView(false);
            camera._needUpdateProjection();
          });

          if (!button_l) {
            return;
          }
        }


        // calc rotation angle
        let delta_y = (this._movedMouseYOnCanvas - this._clickedMouseYOnCanvas) * this._efficiency;
        let delta_x = (this._movedMouseXOnCanvas - this._clickedMouseXOnCanvas) * this._efficiency;
        this._rot_y = this._rot_bgn_y - delta_y;
        this._rot_x = this._rot_bgn_x - delta_x;

        // check if rotation angle is within range
        if (this._verticalAngleThrethold - this._verticalAngleOfVectors < this._rot_y) ;

        if (this._rot_y < -this._verticalAngleThrethold + this._verticalAngleOfVectors) ;

        this._camaras.forEach(function (camera) {
          camera._needUpdateView(false);
          camera._needUpdateProjection();
        });

      };

      this._onMouseWheel = (evt) => {
        evt.preventDefault();

        this.dolly += evt.deltaY / 600;
      };

      this._onContexMenu = (evt) => {
        if (evt.preventDefault) {
          evt.preventDefault();
        } else {
          event.returnValue = false;
        }
      };

      this._onMouseDblClick = (evt) => {
        if (evt.shiftKey) {
          this._mouseTranslateVec = new Vector3(0, 0, 0);
        } else {
          this._rot_y = 0;
          this._rot_x = 0;
          this._rot_bgn_y = 0;
          this._rot_bgn_x = 0;
        }
        this._camaras.forEach(function (camera) {
          camera._needUpdateView(false);
          camera._needUpdateProjection();
        });
      };

      if (eventTargetDom) {
        if ('ontouchend' in document) {
          eventTargetDom.addEventListener('touchstart', this._onMouseDown);
          eventTargetDom.addEventListener('touchend', this._onMouseUp);
          eventTargetDom.addEventListener('touchmove', this._onMouseMove);          
        }
        if ('onmouseup' in document) {
          eventTargetDom.addEventListener('mousedown', this._onMouseDown);
          eventTargetDom.addEventListener('mouseup', this._onMouseUp);
          eventTargetDom.addEventListener('mousemove', this._onMouseMove);          
        }
        if (window.WheelEvent) {
          eventTargetDom.addEventListener("wheel", this._onMouseWheel);
        }
        eventTargetDom.addEventListener('contextmenu', this._onContexMenu, false);
        eventTargetDom.addEventListener("dblclick", this._onMouseDblClick);
      }
    }

    _getFovyFromCamera(camera) {
      if (camera.fovy) {
        return camera.fovy;
      } else {
        return MathUtil.radianToDegree(2 * Math.atan(Math.abs(camera.top - camera.bottom) / (2 * camera.zNear)));
      }
    }

    convert(camera) {
      let newEyeVec = null;
      let newCenterVec = null;
      let newUpVec = null;

      if (this._isKeyUp || !this._isForceGrab) {
        this._eyeVec = (this._shiftCameraTo !== null) ? Vector3.add(Vector3.subtract(this._shiftCameraTo, camera.center), camera.eye) : camera.eye;
        this._centerVec = (this._shiftCameraTo !== null) ? this._shiftCameraTo : camera.center;
        this._upVec = camera.up;
      }

      let fovy = this._getFovyFromCamera(camera);

      if (this._isSymmetryMode) {
        let centerToEyeVec = Vector3.subtract(this._eyeVec, this._centerVec).multiply(this._wheel_y * 1.0/Math.tan(MathUtil.degreeToRadian(fovy/2.0)));
        this._lengthOfCenterToEye = centerToEyeVec.length();
        let horizontalAngleOfVectors = Vector3.angleOfVectors(new Vector3(centerToEyeVec.x, 0, centerToEyeVec.z), new Vector3(0, 0, 1));
        let horizontalSign = Vector3.cross(new Vector3(centerToEyeVec.x, 0, centerToEyeVec.z), new Vector3(0, 0, 1)).y;
        if (horizontalSign >= 0) {
          horizontalSign = 1;
        } else {
          horizontalSign = -1;
        }
        horizontalAngleOfVectors *= horizontalSign;
        let rotateM_Reset = Matrix33.rotateY(horizontalAngleOfVectors);
        let rotateM_X = Matrix33.rotateX(this._rot_y);
        let rotateM_Y = Matrix33.rotateY(this._rot_x);
        let rotateM_Revert = Matrix33.rotateY(-horizontalAngleOfVectors);
        let rotateM = Matrix33.multiply(rotateM_Revert, Matrix33.multiply(rotateM_Y, Matrix33.multiply(rotateM_X, rotateM_Reset)));

        newUpVec = rotateM.multiplyVector(this._upVec);
        this._newUpVec = newUpVec;
        newEyeVec = rotateM.multiplyVector(centerToEyeVec).add(this._centerVec);
        newCenterVec = this._centerVec.clone();
        this._newEyeToCenterVec = Vector3.subtract(newCenterVec, newEyeVec);
        this._newTangentVec = Vector3.cross(this._newUpVec, this._newEyeToCenterVec);

        newEyeVec.add(this._mouseTranslateVec);
        newCenterVec.add(this._mouseTranslateVec);

        let horizonResetVec = rotateM_Reset.multiplyVector(centerToEyeVec);
        this._verticalAngleOfVectors = Vector3.angleOfVectors(horizonResetVec, new Vector3(0, 0, 1));
        let verticalSign = Vector3.cross(horizonResetVec, new Vector3(0, 0, 1)).x;
        if (verticalSign >= 0) {
          verticalSign = 1;
        } else {
          verticalSign = -1;
        }
        //this._verticalAngleOfVectors *= verticalSign;

      } else {
        let centerToEyeVec = Vector3.subtract(this._eyeVec, this._centerVec).multiply(this._wheel_y * 1.0/Math.tan(MathUtil.degreeToRadian(fovy/2.0)));
        let rotateM_X = Matrix33.rotateX(this._rot_y);
        let rotateM_Y = Matrix33.rotateY(this._rot_x);
        let rotateM = rotateM_Y.multiply(rotateM_X);

        newUpVec = rotateM.multiplyVector(this._upVec);
        this._newUpVec = newUpVec;
        newEyeVec = rotateM.multiplyVector(centerToEyeVec).add(this._centerVec);
        newCenterVec = this._centerVec.clone();
        this._newEyeToCenterVec = Vector3.subtract(newCenterVec, newEyeVec);
        this._newTangentVec = Vector3.cross(this._newUpVec, this._newEyeToCenterVec);

        newEyeVec.add(this._mouseTranslateVec);
        newCenterVec.add(this._mouseTranslateVec);
      }

      let newZNear = camera.zNear;
      let newZFar = camera.zFar;
      if (this._target) {
        newZFar = camera.zNear + Vector3.subtract(newCenterVec, newEyeVec).length();
        newZFar += this._getTargetAABB().lengthCenterToCorner * this._zFarAdjustingFactorBasedOnAABB;
      }

      this._foyvBias = Math.tan(MathUtil.degreeToRadian(fovy/2.0));

      return [newEyeVec, newCenterVec, newUpVec, newZNear, newZFar];
    }

    _getTargetAABB() {
      let targetAABB = null;
      if (typeof this._target.updateAABB !== 'undefined') {
        targetAABB = this._target.updateAABB();
      } else {
        targetAABB = this._target.AABB;
      }
      return targetAABB;
    }

    _updateTargeting(camera, eyeVec, centerVec, upVec, fovy) {
      if (this._target === null) {
        return [eyeVec, centerVec, upVec];
      }

      let targetAABB = this._getTargetAABB();

      this._lengthCenterToCorner = targetAABB.lengthCenterToCorner;
      let lengthCameraToObject = targetAABB.lengthCenterToCorner / Math.sin((fovy*Math.PI/180)/2) * this._scaleOfLengthCameraToCenter;

      let newCenterVec = targetAABB.centerPoint;

      let centerToCameraVec = Vector3.subtract(eyeVec, centerVec);
      let centerToCameraVecNormalized = Vector3.normalize(centerToCameraVec);

      let newEyeVec = Vector3.multiply(centerToCameraVecNormalized, lengthCameraToObject).add(newCenterVec);

      let newUpVec = null;
      if (camera instanceof M_AbstractCamera) {
        let mat = camera.inverseWorldMatrixWithoutMySelf;
        newEyeVec = mat.multiplyVector(new Vector4(newEyeVec.x, newEyeVec.y, newEyeVec.z, 1)).toVector3();
        newCenterVec = mat.multiplyVector(new Vector4(newCenterVec.x, newCenterVec.y, newCenterVec.z, 1)).toVector3();
        newUpVec = mat.multiplyVector(new Vector4(upVec.x, upVec.y, upVec.z, 1)).toVector3();
      } else {
        newUpVec = upVec;
      }

      return [newEyeVec, newCenterVec, newUpVec];
    }

    tryReset() {
      if (this._doResetWhenCameraSettingChanged) {
        if (this._isKeyUp) {
          this._rot_y = 0;
          this._rot_x = 0;
          this._rot_bgn_y = 0;
          this._rot_bgn_x = 0;
        }
      }
    }

    reset() {
      this._rot_y = 0;
      this._rot_x = 0;
      this._rot_bgn_y = 0;
      this._rot_bgn_x = 0;
      this._wheel_y = 1;
      this._mouseTranslateVec = new Vector3(0, 0, 0);

      this._camaras.forEach(function (camera) {
        camera._needUpdateView(false);
      });
    }

    updateTargeting() {
      this._camaras.forEach((camera)=>{
        let vectors = this._updateTargeting(camera, camera.eye, camera.center, camera.up, this._getFovyFromCamera(camera));
        camera.eye = vectors[0];
        camera.center = vectors[1];
        camera.up = vectors[2];
      });
    }

    addCamera(camera) {
      this._camaras.add(camera);
    }

    set target(object) {
      this._target = object;
      this.updateTargeting();
    }

    set zFarAdjustingFactorBasedOnAABB(value) {
      this._zFarAdjustingFactorBasedOnAABB = value;
    }

    get zFarAdjustingFactorBasedOnAABB() {
      return this._zFarAdjustingFactorBasedOnAABB;
    }

    set shiftCameraTo(value) {
      this._shiftCameraTo = value;
    }

    get shiftCameraTo() {
      return this._shiftCameraTo;
    }

    resetDolly() {
      this.dolly = 1;

      this._updateCameras();
    }

    set dolly(value) {
      this._wheel_y = value;
      this._wheel_y = Math.min(this._wheel_y, 3);
      this._wheel_y = Math.max(this._wheel_y, 0.01);

      this._camaras.forEach(function (camera) {
        camera._needUpdateView(false);
        camera._needUpdateProjection();
      });
    }

    get dolly() {
      return this._wheel_y;
    }

    get rotX() {
      return this._rot_x;
    }

    set rotX(value) {
      this._rot_x = value;
      this._rot_bgn_x = 0;
      this._camaras.forEach(function (camera) {
        camera._needUpdateView(true);
        camera._needUpdateProjection();
      });
    }

    get rotY() {
      return this._rot_y;
    }

    set rotY(value) {
      this._rot_y = value;
      this._rot_bgn_y = 0;
      this._camaras.forEach(function (camera) {
        camera._needUpdateView(true);
        camera._needUpdateProjection();
      });
    }

  }

  class MutableTexture extends AbstractTexture {
    constructor(glBoostContext, width, height, level = 0,
                internalFormat = 0x1908, // gl.RGBA
                format = 0x1908, //gl.RGBA
                type = 0x1401, // gl.UNSIGNED_BYTE
                magFileter = 0x2601, //gl.LINEAR
                minFilter = 0x2601, //gl.LINEAR
                wrapS = 0x812F, // gl.CLAMP_TO_EDGE
                wrapT = 0x812F) { // gl.CLAMP_TO_EDGE
      super(glBoostContext);

      this._isTextureReady = false;
      this._texture = null;
      this._width = width;
      this._height = height;
      this._fbo = null;
      this._colorAttachmentId = null;
      this._depthAttachmentId = null;

      var gl = this._glContext.gl;

      //var glem = GLExtensionsManager.getInstance(gl);

      this._texture = this._glContext.createTexture(this);
      gl.bindTexture(gl.TEXTURE_2D, this._texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFileter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);
      if (GLBoost$1.isThisGLVersion_2(gl) &&
        (internalFormat === 6402 || internalFormat === 33189 || internalFormat === 33190 || internalFormat === 33191)
      ) { // gl.DEPTH_COMPONENT
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_MODE, gl.COMPARE_REF_TO_TEXTURE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_COMPARE_FUNC, gl.LESS);
      //gl.LEQUAL);
      }
      gl.texImage2D(gl.TEXTURE_2D, level, internalFormat, width, height, 0, format, type, null);
      gl.bindTexture(gl.TEXTURE_2D, null);

    }

    set colorAttachment(colorAttachmentId) {
      this._colorAttachmentId = colorAttachmentId;
    }

    get colorAttachment() {
      return this._colorAttachmentId;
    }

    set depthAttachment(depthAttachmentId) {
      this._depthAttachmentId = depthAttachmentId;
    }

    get depthAttachment() {
      return this._depthAttachmentId;
    }


    set frameBufferObject(fbo) {
      this._fbo = fbo;
    }

    get frameBufferObject() {
      return this._fbo;
    }
  }

  class DataUtil {

    constructor() {

    }
    static isNode() {
      let isNode = (window === void 0 && typeof process !== "undefined" && typeof require !== "undefined");
      return isNode;
    }

    static btoa(str) {
      let isNode = DataUtil.isNode();
      if (isNode) {
        let buffer;
        if (Buffer.isBuffer(str)) {
          buffer = str;
        }
        else {
          buffer = new Buffer(str.toString(), 'binary');
        }
        return buffer.toString('base64');
      } else {
        return btoa(str)
      }
    }

    static atob(str) {
      let isNode = DataUtil.isNode();
      if (isNode) {
        return new Buffer(str, 'base64').toString('binary');
      } else {
        return atob(str)
      }
    }

    static base64ToArrayBuffer(dataUri) {
      let splittedDataUri = dataUri.split(',');
      let type = splittedDataUri[0].split(':')[1].split(';')[0];
      let byteString = DataUtil.atob(splittedDataUri[1]);
      let byteStringLength = byteString.length;
      let arrayBuffer = new ArrayBuffer(byteStringLength);
      let uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < byteStringLength; i++) {
        uint8Array[i] = byteString.charCodeAt(i);
      }
      return arrayBuffer;
    }

    static arrayBufferToString(arrayBuffer) {
      if (typeof TextDecoder !== 'undefined') {
        let textDecoder = new TextDecoder();
        return textDecoder.decode(arrayBuffer);
      } else {
        let bytes = new Uint8Array(arrayBuffer);
        let result = "";
        let length = bytes.length;
        for (let i = 0; i < length; i++) {
          result += String.fromCharCode(bytes[i]);
        }
        return result;
      }
    }

    static stringToBase64(str) {
      let b64 = null;
      b64 = DataUtil.btoa(str);
      return b64;
    }

    static UInt8ArrayToDataURL(uint8array, width, height) {
      let canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");
      let imageData = ctx.createImageData(width, height);

      for(let i = 0; i < imageData.data.length; i+=4) {
        /*
        imageData.data[i + 0] = uint8array[imageData.data.length - i + 0];
        imageData.data[i + 1] = uint8array[imageData.data.length - i + 1];
        imageData.data[i + 2] = uint8array[imageData.data.length - i + 2];
        imageData.data[i + 3] = uint8array[imageData.data.length - i + 3];
        */
        imageData.data[i + 0] = uint8array[(height - Math.floor(i/(4*width)))*(4*width) + i%(4*width) + 0];
        imageData.data[i + 1] = uint8array[(height - Math.floor(i/(4*width)))*(4*width) + i%(4*width) + 1];
        imageData.data[i + 2] = uint8array[(height - Math.floor(i/(4*width)))*(4*width) + i%(4*width) + 2];
        imageData.data[i + 3] = uint8array[(height - Math.floor(i/(4*width)))*(4*width) + i%(4*width) + 3];
      }

      ctx.putImageData(imageData,0,0);
      canvas.remove();
      return canvas.toDataURL("image/png");
    }

    static loadResourceAsync(resourceUri, isBinary, resolveCallback, rejectCallback) {
      return new Promise((resolve, reject)=> {
        let isNode = DataUtil.isNode();

        if (isNode) {
          let fs = require('fs');
          let args = [resourceUri];
          let func = (err, response) => {
            if (err) {
              if (rejectCallback) {
                rejectCallback(reject, err);
              }
              return;
            }
            if (isBinary) {
              let buffer = new Buffer(response, 'binary');
              let uint8Buffer = new Uint8Array(buffer);
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
          let xmlHttp = new XMLHttpRequest();
          if (isBinary) {
            xmlHttp.responseType = "arraybuffer";
            xmlHttp.onload = (oEvent) => {
              let response = null;
              if (isBinary) {
                response = xmlHttp.response;
              } else {
                response = xmlHttp.responseText;
              }
              resolveCallback(resolve, response);
            };
          } else {
            xmlHttp.onreadystatechange = ()=> {
              if (xmlHttp.readyState === 4 && (Math.floor(xmlHttp.status/100) === 2 || xmlHttp.status === 0)) {
                let response = null;
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
        }
      });
    }
  }

  GLBoost$1['DataUtil'] = DataUtil;

  class Texture extends AbstractTexture {
    constructor(glBoostContext, src, userFlavorName, parameters = null) {
      super(glBoostContext);

      this._isTextureReady = false;
      this._texture = null;
      if (typeof userFlavorName === 'undefined' || userFlavorName === null) {
        this.userFlavorName = this._instanceName;
      } else {
        this.userFlavorName = userFlavorName;
      }

      this._parameters = (parameters) ? parameters : {};

      if (typeof src === 'undefined' || src === null) ; else if (typeof src === 'string') {
          this.generateTextureFromUri(src);
      } else if (src instanceof Image) {
          this.generateTextureFromImage(src);
      } else {
          this._generateTextureFromImageData(src);
      }
    }

    _getParameter(paramNumber) {
      let isParametersExist = false;
      if (this._parameters) {
        isParametersExist = true;
      }
      let params = this._parameters;

      let paramName = GLBoost$1.getNameOfGLBoostConstant(paramNumber);

      let ret = null;
      switch (paramNumber) {
        case GLBoost$1['UNPACK_FLIP_Y_WEBGL']:
        case GLBoost$1['UNPACK_PREMULTIPLY_ALPHA_WEBGL']:
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

    _getParamWithAlternative(paramNumber, alternative) {
      return MiscUtil.getTheValueOrAlternative(this._getParameter(paramNumber), alternative);
    }

    generateTextureFromUri(imageUri, isKeepBound = false) {
      return new Promise((resolve, reject)=> {
        let isNode = DataUtil.isNode();
        if (isNode) {
          let getPixels = require("get-pixels");

          let results = getPixels(imageUri, (err, pixels) => {
            if (err) {
              console.log("Bad image path");
              reject();
              return;
            }

            this._width = pixels.shape[0];
            this._height = pixels.shape[1];

            let texture = this._generateTextureInnerWithArrayBufferView(pixels.data, this._width, this._height, isKeepBound);

            this._texture = texture;
            this._isTextureReady = true;

            resolve();
          });

        } else {
          this._img = new Image();
          if (!imageUri.match(/^data:/)) {
            this._img.crossOrigin = 'Anonymous';
          }
          this._img.onload = () => {
            let imgCanvas = this._getResizedCanvas(this._img);
            this._width = imgCanvas.width;
            this._height = imgCanvas.height;

            let texture = this._generateTextureInner(imgCanvas, isKeepBound);

            this._texture = texture;
            this._isTextureReady = true;

            resolve();
          };

          this._img.src = imageUri;
        }
      });
    }

    generateTextureFromImage(img) {
      let imgCanvas = this._getResizedCanvas(img);
      this._width = imgCanvas.width;
      this._height = imgCanvas.height;

      let texture = this._generateTextureInner(imgCanvas, false);

      this._texture = texture;
      this._isTextureReady = true;
    }

    _generateTextureFromImageData(imageData) {
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

    _generateTextureInnerWithArrayBufferView(imgCanvas, width, height, isKeepBound) {
      var gl = this._glContext.gl;
      var glem = GLExtensionsManager.getInstance(this._glContext);
      var texture = this._glContext.createTexture(this);
      gl.bindTexture(gl.TEXTURE_2D, texture);

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this._getParamWithAlternative(GLBoost$1.UNPACK_FLIP_Y_WEBGL, false));
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._getParamWithAlternative(GLBoost$1.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false));
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, imgCanvas);

      if (glem.extTFA) {
        gl.texParameteri(gl.TEXTURE_2D, glem.extTFA.TEXTURE_MAX_ANISOTROPY_EXT, 4);
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this._getParamWithAlternative(GLBoost$1.TEXTURE_MAG_FILTER, gl.LINEAR));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this._getParamWithAlternative(GLBoost$1.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._getParamWithAlternative(GLBoost$1.TEXTURE_WRAP_S, gl.REPEAT));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._getParamWithAlternative(GLBoost$1.TEXTURE_WRAP_T, gl.REPEAT));
      gl.generateMipmap(gl.TEXTURE_2D);

      if (!isKeepBound) {
        gl.bindTexture(gl.TEXTURE_2D, null);
      }
      return texture;
    }

    _generateTextureInner(imgCanvas, isKeepBound) {
      var gl = this._glContext.gl;
      var glem = GLExtensionsManager.getInstance(this._glContext);
      var texture = this._glContext.createTexture(this);
      gl.bindTexture(gl.TEXTURE_2D, texture);

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, this._getParamWithAlternative(GLBoost$1.UNPACK_FLIP_Y_WEBGL, false));
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this._getParamWithAlternative(GLBoost$1.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false));
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imgCanvas);

      if (glem.extTFA) {
        gl.texParameteri(gl.TEXTURE_2D, glem.extTFA.TEXTURE_MAX_ANISOTROPY_EXT, 4);
      }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, this._getParamWithAlternative(GLBoost$1.TEXTURE_MAG_FILTER, gl.LINEAR));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, this._getParamWithAlternative(GLBoost$1.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, this._getParamWithAlternative(GLBoost$1.TEXTURE_WRAP_S, gl.REPEAT));
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, this._getParamWithAlternative(GLBoost$1.TEXTURE_WRAP_T, gl.REPEAT));
      gl.generateMipmap(gl.TEXTURE_2D);

      if (!isKeepBound) {
        gl.bindTexture(gl.TEXTURE_2D, null);
      }
      return texture;
    }


    _onLoad() {

    }

    get isTextureReady() {
      return this._isTextureReady;
    }

    get isImageAssignedForTexture() {
      return typeof this._img == 'undefined';
    }


  }

  class PhinaTexture extends Texture {
    constructor(glBoostContext, width, height, fillStyle, parameters = null) {
      super(glBoostContext, null, null, parameters);
      this._parameters['UNPACK_FLIP_Y_WEBGL'] = true;

      this._width = width;
      this._height = height;
      this._fillStyle = fillStyle;

      this._phinaObjects = [];
      this._setUpOffscreen();
    }

    _setUpOffscreen() {
      this._offscreen = phina.display.OffScreenLayer({
        width: this.width,
        height: this.height,
        fillStyle: this._fillStyle
      });

      this._offscreen.reset();
    }

    addPhinaObject(object) {
      this._phinaObjects.push(object);
      return this;
    }

    addPhinaObjects(objects) {
      this._phinaObjects = this._phinaObjects.concat(objects);
      return this;
    }

    setPhinaObjects(objects) {
      this._phinaObjects = objects.concat();
      return this;
    }

    clearPhinaObjects() {
      this._phinaObjects.length = 0;
      return this;
    }

    renderPhinaObjects() {
      for (let i=0; i<this._phinaObjects.length; i++) {
        this._offscreen.renderObject(this._phinaObjects[i]);
      }

      this._recreateTexture(this._offscreen.getImageDataURL());
      this._offscreen.reset();
    }

    _recreateTexture(imageDataUri) {
      var oldTexture = this._texture;
      this.generateTextureFromUri(imageDataUri, true);
      if (typeof oldTexture !== 'undefined' && oldTexture !== null) {
        this._glContext.deleteTexture(this, oldTexture);
      }
    }
  }

  class Cube extends Geometry {
    constructor(glBoostContext, widthVector, vertexColor) {
      super(glBoostContext);

      // if array, convert to vector[2/3/4]
      widthVector = MathUtil.arrayToVector(widthVector);
      vertexColor = MathUtil.arrayToVector(vertexColor);

      this._setupVertexData(widthVector.divide(2.0), vertexColor);
    }

    _setupVertexData(widthVector, vertexColor) {
      var indices = [
        3, 1, 0, 2, 1, 3,
        4, 5, 7, 7, 5, 6,
        8, 9, 11, 11, 9, 10,
        15, 13, 12, 14, 13, 15,
        19, 17, 16, 18, 17, 19,
        20, 21, 23, 23, 21, 22
      ];


      var positions = [
        // upper
        new Vector3(-widthVector.x, widthVector.y, -widthVector.z),
        new Vector3(widthVector.x,  widthVector.y, -widthVector.z),
        new Vector3(widthVector.x,  widthVector.y, widthVector.z),
        new Vector3(-widthVector.x, widthVector.y, widthVector.z),
        // lower
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z),
        new Vector3(widthVector.x,  -widthVector.y, -widthVector.z),
        new Vector3(widthVector.x,  -widthVector.y, widthVector.z),
        new Vector3(-widthVector.x, -widthVector.y, widthVector.z),
        // front
        new Vector3(-widthVector.x, -widthVector.y, widthVector.z),
        new Vector3(widthVector.x,  -widthVector.y, widthVector.z),
        new Vector3(widthVector.x,  widthVector.y, widthVector.z),
        new Vector3(-widthVector.x, widthVector.y, widthVector.z),
        // back
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z),
        new Vector3(widthVector.x,  -widthVector.y, -widthVector.z),
        new Vector3(widthVector.x,  widthVector.y, -widthVector.z),
        new Vector3(-widthVector.x, widthVector.y, -widthVector.z),
        // right
        new Vector3(widthVector.x, -widthVector.y, -widthVector.z),
        new Vector3(widthVector.x,  -widthVector.y, widthVector.z),
        new Vector3(widthVector.x,  widthVector.y, widthVector.z),
        new Vector3(widthVector.x, widthVector.y, -widthVector.z),
        // left
        new Vector3(-widthVector.x, -widthVector.y, -widthVector.z),
        new Vector3(-widthVector.x,  -widthVector.y, widthVector.z),
        new Vector3(-widthVector.x,  widthVector.y, widthVector.z),
        new Vector3(-widthVector.x, widthVector.y, -widthVector.z)
      ];
      var colors = [
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
        new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w)
      ];
      var texcoords = [
        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0)
      ];

      var normals = [
        // upper
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        // lower
        new Vector3(0, -1, 0),
        new Vector3(0, -1, 0),
        new Vector3(0, -1, 0),
        new Vector3(0, -1, 0),
        // front
        new Vector3(0, 0, 1),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, 1),
        // back
        new Vector3(0, 0, -1),
        new Vector3(0, 0, -1),
        new Vector3(0, 0, -1),
        new Vector3(0, 0, -1),
        // right
        new Vector3(1, 0, 0),
        new Vector3(1, 0, 0),
        new Vector3(1, 0, 0),
        new Vector3(1, 0, 0),
        // left
        new Vector3(-1, 0, 0),
        new Vector3(-1, 0, 0),
        new Vector3(-1, 0, 0),
        new Vector3(-1, 0, 0),
      ];

      this.setVerticesData({
        position: positions,
        color: colors,
        normal: normals,
        texcoord: texcoords
      }, [indices]);
    }

  }

  GLBoost$1["Cube"] = Cube;

  class ArrayUtil {

    constructor() {

    }

    static merge() {
      var key, result = false;
      if (arguments && arguments.length > 0) {
        result = [];
        for (var i = 0, len = arguments.length;i < len; i++) {
          if (arguments[i] && typeof arguments[i] === 'object') {
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
  }

  class Plane extends Geometry {
    constructor(glBoostContext, width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat = false) {
      super(glBoostContext);

      this._setupVertexData(width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat);
    }

    _setupVertexData(width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat) {

      var positions = [];

      for(let i=0; i<=vSpan; i++) {
        for(let j=0; j<=uSpan; j++) {
          positions.push(new Vector3((j/uSpan - 1/2)*width, 0, (i/vSpan - 1/2)*height));
        }
      }

      var indices = [];
      for(let i=0; i<vSpan; i++) {
        let degenerate_left_index = 0;
        let degenerate_right_index = 0;
        for(let j=0; j<=uSpan; j++) {
          indices.push(i*(uSpan+1)+j);
          indices.push((i+1)*(uSpan+1)+j);
          if (j === 0) {
            degenerate_left_index = (i + 1) * (uSpan+1) + j;
          } else if (j === uSpan) {
            degenerate_right_index = (i + 1) * (uSpan+1) + j;
          }
        }
        indices.push(degenerate_right_index);
        indices.push(degenerate_left_index);
      }

      var colors = [];
      var vertexColor = new Vector4(1, 1, 1, 1);
      for(let i=0; i<=vSpan; i++) {
        for(let j=0; j<=uSpan; j++) {
          colors.push(vertexColor);
        }
      }

      var texcoords = [];
      for(let i=0; i<=vSpan; i++) {
        for(let j=0; j<=uSpan; j++) {
          if (isUVRepeat) {
            texcoords.push(new Vector2(j, i));
          } else {
            texcoords.push(new Vector2(j/uSpan, i/vSpan));
          }
        }
      }

      var normal = new Vector3(0, 1, 0);
      var normals = [];
      for(let i=0; i<=vSpan; i++) {
        for(let j=0; j<=uSpan; j++) {
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

  }

  GLBoost$1["Plane"] = Plane;

  class Sphere extends Geometry {
    constructor(glBoostContext, radius, widthSegments, heightSegments, vertexColor) {
      super(glBoostContext);

      this._setupVertexData(radius, widthSegments, heightSegments, vertexColor);
    }

    _setupVertexData(radius, widthSegments, heightSegments, vertexColor) {

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

      let shiftValue = 0.00001; // for avoid Singular point
      for (var latNumber = 0; latNumber <= heightSegments; latNumber++) {
        var theta = latNumber * Math.PI / heightSegments + shiftValue;
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
          var u = 1 - (longNumber / widthSegments);
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
          var first = (latNumber * (widthSegments + 1)) + longNumber;
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

  }

  GLBoost$1["Sphere"] = Sphere;

  class Axis extends Geometry {
    constructor(glBoostContext, length) {
      super(glBoostContext);

      this._setupVertexData(length);
    }

    _setupVertexData(length) {

      // to avoid z fighting with GridGizmo
      let nearZeroValue = 0.0001;

      let positions = [
        // X Axis
        new Vector3(0, nearZeroValue, nearZeroValue),
        new Vector3(length,  nearZeroValue, nearZeroValue),

        // Y Axis
        new Vector3(nearZeroValue, 0, nearZeroValue),
        new Vector3(nearZeroValue, length, nearZeroValue),

        // Z Axis
        new Vector3(nearZeroValue, nearZeroValue, 0),
        new Vector3(nearZeroValue, nearZeroValue, length),
      ];

      let colors = [
        // X Axis
        new Vector4(1, 0, 0, 1),
        new Vector4(1, 0, 0, 1),

        // Y Axis
        new Vector4(0, 1, 0, 1),
        new Vector4(0, 1, 0, 1),

        // Z Axis
        new Vector4(0, 0, 1, 1),
        new Vector4(0, 0, 1, 1),
      ];

      this.setVerticesData({
        position: positions,
        color: colors
      }, null, GLBoost$1.LINES);
    }

  }

  GLBoost$1["Axis"] = Axis;

  class ParticleShaderSource {

    VSDefine_ParticleShaderSource(in_, out_, f) {
      var shaderText = '';
      shaderText += `${in_} vec3 aVertex_particleCenterPos;\n`;
      shaderText += 'uniform mat4 projectionMatrix;\n';
      shaderText += 'uniform mat4 modelViewMatrix;\n';

      return shaderText;
    }

    VSTransform_ParticleShaderSource(existCamera_f, f) {
      var shaderText = '';

      shaderText += '  vec4 cameraCenterPos = modelViewMatrix * vec4(aVertex_particleCenterPos, 1.0);\n';
      shaderText += '  vec4 cameraEachPointPos = cameraCenterPos + vec4(aVertex_position - aVertex_particleCenterPos, 1.0);\n';
      shaderText += '  gl_Position = projectionMatrix * cameraEachPointPos;\n';

      return shaderText;
    }

    prepare_ParticleShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {
      var vertexAttribsAsResult = [];

      shaderProgram['vertexAttribute_' + 'particleCenterPos'] = gl.getAttribLocation(shaderProgram, 'aVertex_' + 'particleCenterPos');
      gl.enableVertexAttribArray(shaderProgram['vertexAttribute_' + 'particleCenterPos']);
      vertexAttribsAsResult.push('particleCenterPos');

      material.setUniform(shaderProgram, 'uniform_projectionMatrix', this._glContext.getUniformLocation(shaderProgram, 'projectionMatrix'));
      material.setUniform(shaderProgram, 'uniform_modelViewMatrix', this._glContext.getUniformLocation(shaderProgram, 'modelViewMatrix'));
      material._semanticsDic['PROJECTION'] = 'projectionMatrix';
      material._semanticsDic['MODELVIEW'] = 'modelViewMatrix';


      return vertexAttribsAsResult;
    }

  }

  /**
   * This Particle class handles particles expressions.
   * You can define particles behaviors in a custom vertex shader.
   * These particles are processed in GPU, so this is a very fast solution of particles expressions.
   */
  class Particle extends Geometry {

    /**
     * This is Particle class's constructor
     *
     * @param {Object} centerPointData [en] a JSON object consisted of position (by the particle) array and the other data (by the particle) array.
     * @param {Number} particleWidth Width of each particle
     * @param {Number} particleHeight Height of each particle
     * @param {Object} [en] a JSON which has other vertex attribute arrays you want (by the vertex of quad particle).
     * @param {CanvasElement or String} Canvas Element which is generation source of WebGL context in current use or String which indicates the Canvas Element in jQuery like query string
     */
    constructor(glBoostContext, centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint) {
      super(glBoostContext);

      this._setupVertexData(centerPointData, particleWidth/2.0, particleHeight/2.0, customVertexAttributes, performanceHint);
    }

    _setupVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, needDefaultWhiteColor) {
      let indices = this.indices;
      indices = [];
      const positionArray = centerPointData.position;

      for (let i=0; i<positionArray.length; i++) {
        var offset = i*4;
        indices.push(offset);   // start Quad
        indices.push(offset+1); //
        indices.push(offset+2); // end Quad
        indices.push(offset+3); //
        if (i === positionArray.length - 1) {
          break;
        }
        indices.push(offset+3); // degenerated
        indices.push(offset+4); // move another Particle
      }

      this.positions = [];
      let positions = this.positions;

      // if array, convert to vector[2/3/4]
      for (let i=0; i<positionArray.length; i++) {
        positionArray[i] = MathUtil.arrayToVector(positionArray[i]);
      }

      for (let i=0; i<positionArray.length; i++) {
        positions.push(new Vector3(positionArray[i].x - pHalfWidth, positionArray[i].y + pHalfHeight, positionArray[i].z));
        positions.push(new Vector3(positionArray[i].x - pHalfWidth, positionArray[i].y - pHalfHeight, positionArray[i].z));
        positions.push(new Vector3(positionArray[i].x + pHalfWidth, positionArray[i].y + pHalfHeight, positionArray[i].z));
        positions.push(new Vector3(positionArray[i].x + pHalfWidth, positionArray[i].y - pHalfHeight, positionArray[i].z));
      }
      this.centerPositions = [];
      let centerPositions = this.centerPositions;

      for (let i=0; i<positionArray.length; i++) {
        centerPositions.push(new Vector3(positionArray[i].x, positionArray[i].y, positionArray[i].z));
        centerPositions.push(new Vector3(positionArray[i].x, positionArray[i].y, positionArray[i].z));
        centerPositions.push(new Vector3(positionArray[i].x, positionArray[i].y, positionArray[i].z));
        centerPositions.push(new Vector3(positionArray[i].x, positionArray[i].y, positionArray[i].z));
      }
      this.texcoords = [];
      let texcoords = this.texcoords;
      for (let i=0; i<positionArray.length; i++) {
        texcoords.push(new Vector2(0, 0));
        texcoords.push(new Vector2(0, 1));
        texcoords.push(new Vector2(1, 0));
        texcoords.push(new Vector2(1, 1));
      }

      this.normals = [];
      let normals = this.normals;
      var normal = new Vector3(0, 0, 1);
      for (let i=0; i<positionArray.length; i++) {
        for (let j=0; j<4; j++) {
          normals.push(normal);
        }
      }
      this.pointData = {};
      let pointData = this.pointData;

      for (let type in centerPointData) {
        if (type !== 'position') {
          pointData[type] = [];
          for (let i=0; i<positionArray.length; i++) {
            for (let j=0; j<4; j++) {
              pointData[type].push(centerPointData[type][i]);
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
        let colors = this.colors;
        var vertexColor = new Vector4(1, 1, 1, 1);
        for (let i=0; i<positionArray.length; i++) {
          for (let j=0; j<4; j++) {
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

    _updateVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, needDefaultWhiteColor) {
      let positionArray = centerPointData.position;
      let idx=0;
      let positions = this.positions;
      for (let i=0; i<positionArray.length; i++) {
        positions[idx+0].x = positionArray[i].x - pHalfWidth;
        positions[idx+0].y = positionArray[i].y + pHalfHeight;
        positions[idx+0].z = positionArray[i].z;
        positions[idx+1].x = positionArray[i].x - pHalfWidth;
        positions[idx+1].y = positionArray[i].y - pHalfHeight;
        positions[idx+1].z = positionArray[i].z;
        positions[idx+2].x = positionArray[i].x + pHalfWidth;
        positions[idx+2].y = positionArray[i].y + pHalfHeight;
        positions[idx+2].z = positionArray[i].z;
        positions[idx+3].x = positionArray[i].x + pHalfWidth;
        positions[idx+3].y = positionArray[i].y - pHalfHeight;
        positions[idx+3].z = positionArray[i].z;
        idx+=4;
      }

      let centerPositions = this.centerPositions;
      idx = 0;
      for (let i=0; i<positionArray.length; i++) {
        centerPositions[idx].x = positionArray[i].x;
        centerPositions[idx].y = positionArray[i].y;
        centerPositions[idx].z = positionArray[i].z;
        centerPositions[idx+1].x = positionArray[i].x;
        centerPositions[idx+1].y = positionArray[i].y;
        centerPositions[idx+1].z = positionArray[i].z;
        centerPositions[idx+2].x = positionArray[i].x;
        centerPositions[idx+2].y = positionArray[i].y;
        centerPositions[idx+2].z = positionArray[i].z;
        centerPositions[idx+3].x = positionArray[i].x;
        centerPositions[idx+3].y = positionArray[i].y;
        centerPositions[idx+3].z = positionArray[i].z;
        idx+=4;
      }
      idx = 0;
      let pointData = this.pointData;
      for (let type in centerPointData) {
        if (type !== 'position') {
          pointData[type] = [];
          for (let i=0; i<positionArray.length; i++) {
            for (let j=0; j<4; j++) {
              pointData[type][idx].x = centerPointData[type][i].x;
              pointData[type][idx].y = centerPointData[type][i].y;
              pointData[type][idx].z = centerPointData[type][i].z;
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
      }
    }
    _setupVertexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, performanceHint) {
      var result = this._setupVertexAndIndexData(centerPointData, pHalfWidth, pHalfHeight, customVertexAttributes, true);

      this.setVerticesData(result.vertexAttributes, result.indexArray, GLBoost$1.TRIANGLE_STRIP, performanceHint);
    }

    updateVerticesData(centerPointData, particleWidth, particleHeight, customVertexAttributes) {
      //var result = this._setupVertexAndIndexData(centerPointData, particleWidth/2.0, particleHeight/2.0, customVertexAttributes, false);
      const result = this._updateVertexAndIndexData(centerPointData, particleWidth/2.0, particleHeight/2.0, customVertexAttributes, false);
      super.updateVerticesData(result.vertexAttributes);
    }

    prepareToRender(expression, existCamera_f, pointLight, meshMaterial, renderPasses, mesh) {
      // before prepareForRender of 'Geometry' class, a new 'BlendShapeShader'(which extends default shader) is assigned.

      if (meshMaterial) {
        this._materialForBillboard = meshMaterial;
      } else {
        this._materialForBillboard = this._defaultMaterial;
      }

      class ParticleShader extends this._materialForBillboard.shaderClass {
        constructor(glBoostContext, basicShader) {
          super(glBoostContext, basicShader, ParticleShaderSource);
          ParticleShader.mixin(ParticleShaderSource);

          this._meshTransformUpdateCount = -9999;
          this._cameraViewUpdateCount = -9999;
          this._cameraProjectionUpdateCount = -9999;
        }

        setUniforms(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {
          super.setUniforms(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData);
  /*
          if (this._cameraProjectionUpdateCount !== mesh.updateCountAsCameraProjection) {
            Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'PROJECTION', camera.projectionRHMatrix().flatten());
          }

          if (this._cameraViewUpdateCount !== mesh.updateCountAsCameraView || this._meshTransformUpdateCount !== mesh.updateCountAsElement) {
            Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'MODELVIEW', camera.lookAtRHMatrix().multiply(mesh.transformMatrix).flatten());
          }
          this._meshTransformUpdateCount = mesh.updateCountAsElement;
          this._cameraViewUpdateCount = camera.updateCountAsCameraView;
          this._cameraProjectionUpdateCount = camera.updateCountAsCameraProjection;
  */

          return true; // still dirty
        }
      }

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

      super.prepareToRender(expression, existCamera_f, pointLight, meshMaterial, renderPasses, mesh);
    }

  }

  GLBoost$1["Particle"] = Particle;

  class Screen extends Geometry {
    constructor(glBoostContext, screen = 
      {
        unit: 'ratio', // or 'pixel'
        range: 'positive-negative', // or 'positive'
        origin: new Vector2(-1, -1),
        size: new Vector2(2, 2),
      }, customVertexAttributes = null) {
      super(glBoostContext);

      this._setupVertexData(screen, customVertexAttributes);
    }

    _setupVertexData(screen, customVertexAttributes) {
      let positions = [];
      let indices = [];
      let colors = [];
      let texcoords = [];
      let normals = [];

      let originX = screen.origin.x;
      let originY = screen.origin.y;
      let sizeX = screen.size.x;
      let sizeY = screen.size.y;

      if (screen.unit === 'pixel') {
        originX = originX/this._glContext.canvasWidth;
        originY = originY/this._glContext.canvasHeight;
        sizeX = sizeX/this._glContext.canvasWidth;
        sizeY = sizeY/this._glContext.canvasHeight;
      }
      if (screen.range === 'positive') {
        originX = (originX-0.5)*2;
        originY = (originY-0.5)*2;
        sizeX = sizeX*2;
        sizeY = sizeY*2;
      }

      screen.origin = new Vector2(originX, originY);
      screen.size = new Vector2(sizeX, sizeY);

      this._setupQuad(positions, indices, colors, texcoords, normals, screen.origin, screen.size, 1, 1, screen.uUVRepeat, screen.vUVRepeat);


      let object = {
        position: positions,
        color: colors,
        texcoord: texcoords,
        normal: normals
      };

      let completeAttributes = ArrayUtil.merge(object, customVertexAttributes);
      this.setVerticesData(completeAttributes, [indices], GLBoost$1.TRIANGLE_STRIP);
    }

    _setupQuad(positions, indices, colors, texcoords, normals, originInRatioVec2, sizeInRatioVec2, uSpan, vSpan, uUVRepeat, vUVRepeat) {
      for(let i=0; i<=vSpan; i++) {
        for(let j=0; j<=uSpan; j++) {
          positions.push(new Vector3(originInRatioVec2.x + (j/uSpan)*sizeInRatioVec2.x, originInRatioVec2.y + (i/vSpan)*sizeInRatioVec2.y, 0));
        }
      }

      for(let i=0; i<vSpan; i++) {
        let degenerate_left_index = 0;
        let degenerate_right_index = 0;
        for(let j=0; j<=uSpan; j++) {
          indices.push(i*(uSpan+1)+j);
          indices.push((i+1)*(uSpan+1)+j);
          if (j === 0) {
            degenerate_left_index = (i + 1) * (uSpan+1) + j;
          } else if (j === uSpan) {
            degenerate_right_index = (i + 1) * (uSpan+1) + j;
          }
        }
        indices.push(degenerate_right_index);
        indices.push(degenerate_left_index);
      }

      let vertexColor = new Vector4(1, 1, 1, 1);
      for(let i=0; i<=vSpan; i++) {
        for(let j=0; j<=uSpan; j++) {
          colors.push(vertexColor);
        }
      }

      for(let i=0; i<=vSpan; i++) {
        for(let j=0; j<=uSpan; j++) {
          texcoords.push(new Vector2(j, i));
        }
      }

      let normal = new Vector3(0, 0, -1); // specify -1 because This Screen geometry assumes that It doesn't use a projection matrix.
      for(let i=0; i<=vSpan; i++) {
        for(let j=0; j<=uSpan; j++) {
          normals.push(normal);
        }
      }
    }
  }

  GLBoost$1["Screen"] = Screen;

  class GLBoostLowContext {
    constructor(canvas, initParameter, gl, width, height) {
      this._setName();

      console.log('*** GLBoost ' + GLBoost$1.VERSION + ' ***');

      if (gl) {
        this._glContext = GLContext.getInstance(null, initParameter, gl, width, height);
      } else {
        this._glContext = GLContext.getInstance(canvas, initParameter);
      }

      this._globalStatesUsage = GLBoost$1.GLOBAL_STATES_USAGE_INCLUSIVE;

      this._defaultGlobalStates = [
        3042, // gl.BLEND
        2929  // gl.DEPTH_TEST
      ];

      this.restoreGlobalStatesToDefault();

      this._glBoostMonitor = L_GLBoostMonitor.getInstance();

      let dummyWhite1x1ImageDataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REY4MUVGRjk0QzMyMTFFN0I2REJDQTc4QjEyOEY2RTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REY4MUVGRkE0QzMyMTFFN0I2REJDQTc4QjEyOEY2RTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERjgxRUZGNzRDMzIxMUU3QjZEQkNBNzhCMTI4RjZFOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERjgxRUZGODRDMzIxMUU3QjZEQkNBNzhCMTI4RjZFOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvTp+QkAAAAPSURBVHjaYvj//z9AgAEABf4C/i3Oie4AAAAASUVORK5CYII=';
      this._defaultDummyTexture = this.createTexture(dummyWhite1x1ImageDataUrl, "GLBoost_dummyWhite1x1Texture");

      this._defaultMaterial = this.createClassicMaterial();

      // effekseer
      if (typeof effekseer !== "undefined") {
        effekseer.init(this._glContext.gl);
      }
    }

    get defaultDummyTexture() {
      return this._defaultDummyTexture;
    }

    _setName() {
      this.constructor._instanceCount = (typeof this.constructor._instanceCount === 'undefined') ? 0 : (this.constructor._instanceCount + 1);
      this._instanceName = this.constructor.name + '_' + this.constructor._instanceCount;
    }

    toString() {
      return this._instanceName;
    }

    get glContext() {
      return this._glContext;
    }

    createGeometry() {
      return new Geometry(this);
    }

    createBlendShapeGeometry() {
      return new BlendShapeGeometry(this);
    }

    createCube(widthVector, vertexColor) {
      return new Cube(this, widthVector, vertexColor);
    }

    createPlane(width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat) {
      return new Plane(this, width, height, uSpan, vSpan, customVertexAttributes, isUVRepeat);
    }

    createSphere(radius, widthSegments, heightSegments, vertexColor) {
      return new Sphere(this, radius, widthSegments, heightSegments, vertexColor);
    }

    createAxis(length) {
      return new Axis(length);
    }

    createParticle(centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint) {
      return new Particle(this, centerPointData, particleWidth, particleHeight, customVertexAttributes, performanceHint);
    }

    createClassicMaterial() {
      return new ClassicMaterial$1(this);
    }

    createPerspectiveCamera(lookat, perspective) {
      return new L_PerspectiveCamera(this, true, lookat, perspective);
    }

    createFrustumCamera(lookat, perspective) {
      return new L_FrustumCamera(this, true, lookat, perspective);
    }

    createOrthoCamera(lookat, ortho) {
      return new L_OrthoCamera(this, true, lookat, ortho);
    }

    createCameraController(options) {
      return new L_CameraController(this, options);
    }

    createTexture(src, userFlavorName, parameters = null) {
      return new Texture(this, src, userFlavorName, parameters);
    }

    createPhinaTexture(width, height, fillStyle, parameters = null) {
      return new PhinaTexture(this, width, height, fillStyle, parameters);
    }

    createScreen(screen, customVertexAttributes) {
      return new Screen(this, screen, customVertexAttributes);
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
    createTexturesForRenderTarget(width, height, textureNum) {
      var glContext = this._glContext;
      var gl = glContext.gl;

      var glem = GLExtensionsManager.getInstance(glContext);

      // Create FBO
      var fbo = glContext.createFramebuffer(this);
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      fbo.width = width;
      fbo.height = height;
      fbo._glboostTextures = [];

      for(let i=0; i<textureNum; i++) {
        let texture = new MutableTexture(this, fbo.width, fbo.height);
        texture.fbo = fbo;
        fbo._glboostTextures.push(texture);
      }

      // Create RenderBuffer
      var renderBuffer = glContext.createRenderbuffer(this);
      gl.bindRenderbuffer(gl.RENDERBUFFER, renderBuffer);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_COMPONENT16, fbo.width, fbo.height);
      fbo.renderBuffer = renderBuffer;

      // Attach Buffers
      fbo._glboostTextures.forEach((texture, i)=>{
        var glTexture = texture.glTextureResource;
        var attachimentId = glem.colorAttachiment(gl, i);
        texture.colorAttachment = attachimentId;
        gl.framebufferTexture2D(gl.FRAMEBUFFER, attachimentId, gl.TEXTURE_2D, glTexture, 0);
      });
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.RENDERBUFFER, renderBuffer);

      gl.bindRenderbuffer(gl.RENDERBUFFER, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      return fbo._glboostTextures.concat();
    }

    createDepthTexturesForRenderTarget(width, height) {
      var glContext = this._glContext;

      var gl = glContext.gl;

      var glem = GLExtensionsManager.getInstance(glContext);

      // Create FBO
      var fbo = glContext.createFramebuffer(this);
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      fbo.width = width;
      fbo.height = height;

      /*
      // Create color RenderBuffer
      var colorBuffer = gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, colorBuffer);
      gl.renderbufferStorage(gl.RENDERBUFFER, gl.RGBA4, fbo.width, fbo.width);
  */

      // Create MutableTexture for Depth Texture
      let format = gl.DEPTH_COMPONENT;
      let internalFormat = gl.DEPTH_COMPONENT;
      let type = gl.UNSIGNED_INT;
      if (GLBoost$1.isThisGLVersion_2(gl)) {
        type = gl.UNSIGNED_INT;
        format = gl.DEPTH_COMPONENT;
        internalFormat = gl.DEPTH_COMPONENT24;
      } else if (glem.extDepthTex) {
        type = glem.extDepthTex.UNSIGNED_INT_24_8_WEBGL;
        format = gl.DEPTH_STENCIL;
        internalFormat = gl.DEPTH_STENCIL;
      }

      let depthTexture = new MutableTexture(this, fbo.width, fbo.height, 0,
        internalFormat, format, type,
        gl.LINEAR, gl.LINEAR, gl.CLAMP_TO_EDGE, gl.CLAMP_TO_EDGE);
      depthTexture.fbo = fbo;

      /// Attach Buffers
      // color
  //    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, colorBuffer);
      //gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, null);

      // depth
      var glTexture = depthTexture.glTextureResource;
      var attachimentId = gl.DEPTH_ATTACHMENT;
      if (GLBoost$1.isThisGLVersion_2(gl)) {
        attachimentId = gl.DEPTH_ATTACHMENT;
      } else if (glem.extDepthTex) {
        attachimentId = gl.DEPTH_STENCIL_ATTACHMENT;
      }
      depthTexture.depthAttachment = attachimentId;
      gl.framebufferTexture2D(gl.FRAMEBUFFER, attachimentId, gl.TEXTURE_2D, glTexture, 0);

  //    console.log('FBO', gl.checkFramebufferStatus(gl.FRAMEBUFFER));

      gl.bindFramebuffer(gl.FRAMEBUFFER, null);

      return depthTexture;
    }

    get belongingCanvasId() {
      return this._glContext.belongingCanvasId;
    }

    set globalStatesUsage(usageMode) {
      this._globalStatesUsage = usageMode;
    }

    get globalStatesUsage() {
      return this._globalStatesUsage;
    }

    reflectGlobalGLState() {
      let gl = this._glContext.gl;

      this.currentGlobalStates.forEach((state)=>{
        gl.enable(state);
      });

      gl.depthFunc( gl.LEQUAL );

      gl.blendEquation( gl.FUNC_ADD );
      gl.blendFunc( gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA );

      gl.clearDepth( 1 );
      gl.clearStencil( 0 );
    }

    disableAllGLState() {
      let states = [
        3042, // gl.BLEND
        2884, // gl.CULL_FACE
        2929, // gl.DEPTH_TEST
        32823, // gl.POLYGON_OFFSET_FILL
        32926, // gl.SAMPLE_ALPHA_TO_COVERAGE
      ];

      let glContext = this._glContext;
      let gl = glContext.gl;

      states.forEach((state)=>{
        gl.disable(state);
      });
    }

    set currentGlobalStates(states) {
      this._currentGlobalStates = states.concat();
    }

    get currentGlobalStates() {
      return this._currentGlobalStates.concat();
    }

    restoreGlobalStatesToDefault() {
      this._currentGlobalStates = this._defaultGlobalStates.concat();
    }

  }

  GLBoost$1['GLBoostLowContext'] = GLBoostLowContext;

  class M_Mesh extends M_Element {
    constructor(glBoostContext, geometry, material) {
      super(glBoostContext);

      if (geometry) {
        this.geometry = geometry;
      }
      if (material) {
        this.material = material;
      }
      this._transformedDepth = 0;
    }

    prepareToRender(expression, existCamera_f, lights) {
      this._geometry.prepareToRender(expression, existCamera_f, lights, this._material, this);
      /*
      if (this._geometry._materials.length === 0 && this._material) {
        let shaderInstance = this._geometry.prepareGLSLProgramAndSetVertexNtoMaterial(expression, this._material, 0, existCamera_f, lights);
        this._geometry._setVertexNtoSingleMaterial(this._material, 0);
        this._material.shaderInstance = shaderInstance;      
        this._material.shaderInstance.vao = this._geometry._getVAO();
        this._geometry.setUpVertexAttribs(this._glContext.gl, shaderInstance._glslProgram, this._geometry._getAllVertexAttribs());
      }
      */
    }

    draw(data) {
      this._geometry.draw(
        {
          expression: data.expression,
          lights: data.lights,
          camera: data.camera,
          scene: data.renderPass.scene,
          renderPassIndex: data.renderPassIndex,
          mesh: this,
          viewport: data.viewport,
          isWebVRMode: data.isWebVRMode,
          webvrFrameData: data.webvrFrameData
        }
      );
    }

    set geometry(geometry) {
      this._geometry = geometry;
      geometry._parent = this;
      M_Mesh._geometries[geometry.toString()] = geometry;
    }

    get geometry() {
      return this._geometry;
    }

    set material(material) {
      this._material = material;
    }

    get material() {
      return this._material;
    }

    bakeTransformToGeometry() {
      var positions = this._geometry._vertices.position;
      var mat = this.worldMatrix;
      let componentN = this._geometry._vertices.components.position;
      let length = positions.length / componentN;
      for (let i=0; i<length; i++) {
        let posVector4 = new Vector4(positions[i*componentN], positions[i*componentN+1], positions[i*componentN+2], 1);
        let transformedPosVec = mat.multiplyVector(posVector4);
        positions[i*componentN] = transformedPosVec.x;
        positions[i*componentN+1] = transformedPosVec.y;
        positions[i*componentN+2] = transformedPosVec.z;
        if (componentN > 3) {
          positions[i * componentN+3] = transformedPosVec.w;
        }
      }
      this._geometry._vertices.position = positions;

      if (this._geometry._vertices.normal) {
        var normals = this._geometry._vertices.normal;
        length = normals.length / 3;
        for (let i=0; i<length; i++) {
          let normalVector3 = new Vector3(normals[i*3], normals[i*3+1], normals[i*3+2]);
          let transformedNormalVec = Matrix44$2.invert(mat).transpose().toMatrix33().multiplyVector(normalVector3).normalize();
          normals[i*3] = transformedNormalVec.x;
          normals[i*3+1] = transformedNormalVec.y;
          normals[i*3+2] = transformedNormalVec.z;
        }
        this._geometry._vertices.normal = normals;
      }

    }

    bakeInverseTransformToGeometry() {
      var positions = this._geometry._vertices.position;
      var invMat = this.inverseWorldMatrix;
      let componentN = this._geometry._vertices.components.position;
      let length = positions.length / componentN;
      for (let i=0; i<length; i++) {
        let posVector4 = new Vector4(positions[i*componentN], positions[i*componentN+1], positions[i*componentN+2], 1);
        let transformedPosVec = invMat.multiplyVector(posVector4);
        positions[i*componentN] = transformedPosVec.x;
        positions[i*componentN+1] = transformedPosVec.y;
        positions[i*componentN+2] = transformedPosVec.z;
        if (componentN > 3) {
          positions[i * componentN+3] = transformedPosVec.w;
        }
      }
      this._geometry._vertices.position = positions;

      let mat = this.worldMatrix;
      if (this._geometry._vertices.normal) {
        var normals = this._geometry._vertices.normal;
        length = normals.length / 3;
        for (let i=0; i<length; i++) {
          let normalVector3 = new Vector3(normals[i*3], normals[i*3+1], normals[i*3+2]);
          let transformedNormalVec = Matrix44$2.invert(mat).transpose().invert().toMatrix33().multiplyVector(normalVector3).normalize();
          normals[i*3] = transformedNormalVec.x;
          normals[i*3+1] = transformedNormalVec.y;
          normals[i*3+2] = transformedNormalVec.z;
        }
        this._geometry._vertices.normal = normals;
      }

    }

    _copyMaterials() {
      if (this.geometry._indicesArray.length !== this.geometry._materials.length) {
        for (let i=0; i<this.geometry._indicesArray.length;i++) {
          this.geometry._materials[i] = this._material;//.clone();
          this.geometry._materials[i].setVertexN(this.geometry, this.geometry._indicesArray[i].length);
        }
      }
    }

    merge(meshOrMeshes) {
      if (Array.isArray(meshOrMeshes)) {
        this.bakeTransformToGeometry();

        let meshes = meshOrMeshes;
        let geometries = [];
        for (let i=0; i<meshes.length; i++) {
          meshes[i].bakeTransformToGeometry();
          geometries.push(meshes[i].geometry);
        }

        this.geometry.merge(geometries);

        for (let i=0; i<meshes.length; i++) {
          delete meshes[i];
        }

        this._copyMaterials();

        this.bakeInverseTransformToGeometry();

      } else { //
        let mesh = meshOrMeshes;
        mesh.bakeTransformToGeometry();
        this.bakeTransformToGeometry();
        this.geometry.merge(mesh.geometry);

        this._copyMaterials();

        this.bakeInverseTransformToGeometry();
      }
    }

    mergeHarder(meshOrMeshes) {

      if (Array.isArray(meshOrMeshes)) {

        this.bakeTransformToGeometry();

        let meshes = meshOrMeshes;
        let geometries = [];
        for (let i=0; i<meshes.length; i++) {
          meshes[i].bakeTransformToGeometry();
          geometries.push(meshes[i].geometry);
        }

        this.geometry.mergeHarder(geometries);

        for (let i=0; i<meshes.length; i++) {
          delete meshes[i];
        }

        this.bakeInverseTransformToGeometry();

      } else { //
        let mesh = meshOrMeshes;
        mesh.bakeTransformToGeometry();
        this.bakeTransformToGeometry();
        this.geometry.mergeHarder(mesh.geometry);

        this.bakeInverseTransformToGeometry();
      }
    }

    calcTransformedDepth(camera) {
      var viewMatrix = camera.lookAtRHMatrix();
      var m_m = null;
      if (this.bindShapeMatrix) {
        m_m = Matrix44$2.multiply(this.worldMatrix, this.bindShapeMatrix);
      } else {
        m_m = this.worldMatrix;
      }
      var mv_m = viewMatrix.multiply(camera.inverseWorldMatrix).multiply(m_m);

      var centerPosition = this.geometry.centerPosition.toVector4();
      //console.log(this.userFlavorName + " centerPosition: " + centerPosition);
      var transformedCenterPosition = mv_m.multiplyVector(centerPosition);

      this._transformedDepth = transformedCenterPosition.z;//transformedCenterPosition.length();// //
    }

    get transformedDepth() {
      return this._transformedDepth;
    }

    get isTransparent() {
      let isTransparent = (this._opacity < 1.0 || this._transparentByUser) ? true : false;
      isTransparent |= this.geometry.isTransparent(this);
      return isTransparent;
    }

    set isTransparent(flg) {
      this._transparentByUser = flg;
    }

    get AABBInWorld() {
      var world_m = this.worldMatrix;
      return AABB.multiplyMatrix(world_m, this._geometry.rawAABB);
    }

    get AABBInLocal() {
      return this._geometry.rawAABB;//.clone();
    }

    get rawAABBInLocal() {
      return this._geometry.rawAABB;
    }

    getAppropriateMaterials() {
      return this.geometry._getAppropriateMaterials(this);
    }

    clone() {
      let instance = new M_Mesh(this._glBoostContext, this.geometry, this.material);
      this._copy(instance);

      return instance;
    }

    _copy(instance) {
      super._copy(instance);
      instance._transformedDepth = this._transformedDepth;
    }
  }
  M_Mesh._geometries = {};

  GLBoost$1['M_Mesh'] = M_Mesh;

  class CubeAbsolute extends Geometry {
    constructor(glBoostContext) {
      super(glBoostContext);

      //this._

      const BIG_NUMBER = 999;
      this._vertexData = this._setupVertexData(
        new Vector3(-BIG_NUMBER, -BIG_NUMBER, -BIG_NUMBER),
        new Vector3(-BIG_NUMBER+1, -BIG_NUMBER+1, -BIG_NUMBER+1));
      this.setVerticesData(this._vertexData, [this._indices]);
    }

    _setupVertexData(minPosition, maxPosition, vertexColor) {
      this._indices = [
        3, 1, 0, 2, 1, 3,
        4, 5, 7, 7, 5, 6,
        8, 9, 11, 11, 9, 10,
        15, 13, 12, 14, 13, 15,
        19, 17, 16, 18, 17, 19,
        20, 21, 23, 23, 21, 22
      ];


      const positions = [
        // upper
        new Vector3(minPosition.x, maxPosition.y, minPosition.z),
        new Vector3(maxPosition.x, maxPosition.y, minPosition.z),
        new Vector3(maxPosition.x, maxPosition.y, maxPosition.z),
        new Vector3(minPosition.x, maxPosition.y, maxPosition.z),
        // lower
        new Vector3(minPosition.x, minPosition.y, minPosition.z),
        new Vector3(maxPosition.x, minPosition.y, minPosition.z),
        new Vector3(maxPosition.x, minPosition.y, maxPosition.z),
        new Vector3(minPosition.x, minPosition.y, maxPosition.z),
        // front
        new Vector3(minPosition.x, minPosition.y, maxPosition.z),
        new Vector3(maxPosition.x, minPosition.y, maxPosition.z),
        new Vector3(maxPosition.x, maxPosition.y, maxPosition.z),
        new Vector3(minPosition.x, maxPosition.y, maxPosition.z),
        // back
        new Vector3(minPosition.x, minPosition.y, minPosition.z),
        new Vector3(maxPosition.x, minPosition.y, minPosition.z),
        new Vector3(maxPosition.x, maxPosition.y, minPosition.z),
        new Vector3(minPosition.x, maxPosition.y, minPosition.z),
        // right
        new Vector3(maxPosition.x, minPosition.y, minPosition.z),
        new Vector3(maxPosition.x, minPosition.y, maxPosition.z),
        new Vector3(maxPosition.x, maxPosition.y, maxPosition.z),
        new Vector3(maxPosition.x, maxPosition.y, minPosition.z),
        // left
        new Vector3(minPosition.x, minPosition.y, minPosition.z),
        new Vector3(minPosition.x, minPosition.y, maxPosition.z),
        new Vector3(minPosition.x, maxPosition.y, maxPosition.z),
        new Vector3(minPosition.x, maxPosition.y, minPosition.z)
      ];
      if (vertexColor) {
        const colors = [
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),

          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w),
          new Vector4(vertexColor.x, vertexColor.y, vertexColor.z, vertexColor.w)
        ];
      }

      const texcoords = [
        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0),

        new Vector2(0.0, 0.0),
        new Vector2(1.0, 0.0),
        new Vector2(1.0, 1.0),
        new Vector2(0.0, 1.0)
      ];

      const normals = [
        // upper
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        new Vector3(0, 1, 0),
        // lower
        new Vector3(0, -1, 0),
        new Vector3(0, -1, 0),
        new Vector3(0, -1, 0),
        new Vector3(0, -1, 0),
        // front
        new Vector3(0, 0, 1),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, 1),
        new Vector3(0, 0, 1),
        // back
        new Vector3(0, 0, -1),
        new Vector3(0, 0, -1),
        new Vector3(0, 0, -1),
        new Vector3(0, 0, -1),
        // right
        new Vector3(1, 0, 0),
        new Vector3(1, 0, 0),
        new Vector3(1, 0, 0),
        new Vector3(1, 0, 0),
        // left
        new Vector3(-1, 0, 0),
        new Vector3(-1, 0, 0),
        new Vector3(-1, 0, 0),
        new Vector3(-1, 0, 0),
      ];

      this._vertexData ={
        position: positions,
        normal: normals,
        texcoord: texcoords
      };

      return this._vertexData;
    }

    update(minPosition, maxPosition) {
      this._vertexData = this._setupVertexData(minPosition, maxPosition);
      this.updateVerticesData(this._vertexData, [this._indices]);
    }

  }

  GLBoost$1["CubeAbsolute"] = CubeAbsolute;

  /*       */

  class M_Group extends M_Element {
                               

    constructor(glBoostContext) {
      super(glBoostContext);
      this._elements = [];
      this._AABB = new AABB();
      this._isRootJointGroup = false;

  //    this._aabbGizmo = null;
  //    this._aabbGizmo = new M_AABBGizmo(this._glBoostContext);
  //    this._gizmos.push(this._aabbGizmo);

    }

    /**
     * [en] Add the element to this group as a child.<br>
     * [ja] このグループにelementを子供として追加します。
     * @param {Element} element  [en] a instance of Element class [ja] Elementクラスのインスタンス
     */
    addChild(element, isDuplicateOk = false) {

      if (isDuplicateOk){
        // if forgive duplicated register by copy
        let elem = null;
        if (element._parent) {
          elem = element.clone();
        } else {
          elem = element;
        }
        elem._parent = this;
        this._elements.push(elem);
      } else {
        //// if forbit duplicated register
        this.removeChild(element);
        element._parent = this;
        this._elements.push(element);
      }
    }

    /**
     * [en] remove the element from this group.
     * [ja] このグループから指定した要素を削除します。
     * @param {Element} element [en] the element to remove [ja] 削除したい要素
     */
    removeChild(element) {
      this._elements = this._elements.filter(function(elem) {
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
    removeAll() {
      this._elements = this._elements.filter(function(elem) {
        elem._parent = null;
      });
      this._elements.length = 0;
    }

    getChildren()                  {
      return this._elements;
    }

    getAnyJointAsChild()           {
      for (let element of this._elements) {
        if (element.className === 'M_Joint') {
          return element;
        }
      }
      return null;
    }

    _setDirtyToAnimatedElement(inputName       )      {
      if (this.hasAnimation(inputName)) {
        this._needUpdate();
      }

      let children = this.getChildren();
      if (children) {
        for (let i = 0; i < children.length; i++) {
          children[i]._setDirtyToAnimatedElement(inputName);
        }  
      }
    }

    _validateByQuery(object, query, queryMeta) {
      let propertyName = '';
      if (queryMeta.type === GLBoost.QUERY_TYPE_INSTANCE_NAME) {
        propertyName = 'instanceName';
      } else if (queryMeta.type === GLBoost.QUERY_TYPE_USER_FLAVOR_NAME) {
        propertyName = 'userFlavorName';
      } else if (queryMeta.type === GLBoost.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR) {
        propertyName = 'instanceNameWithUserFlavor';
      }

      if (queryMeta.format === GLBoost.QUERY_FORMAT_STRING_PERFECT_MATCHING) {
        if (object[propertyName] === query) {
          return object;
        }
      } else if (queryMeta.format === GLBoost.QUERY_FORMAT_STRING_PARTIAL_MATCHING) {
          if (object[propertyName].indexOf(query) !== -1) {
            return object;
          }
      } else if (queryMeta.format === GLBoost.QUERY_FORMAT_REGEXP) {
        if (object[propertyName].match(query)) {
          return object;
        }
      }

    }

    searchElement(query, queryMeta = {type: GLBoost.QUERY_TYPE_USER_FLAVOR_NAME, format:GLBoost.QUERY_FORMAT_STRING_PARTIAL_MATCHING}, element = this) {
      /*
      if (element.userFlavorName === userFlavorNameOrRegExp || element.userFlavorName.match(userFlavorNameOrRegExp)) {
        return element;
      }*/

      if (this._validateByQuery(element, query, queryMeta)) {
        return element;
      }


      if (element instanceof M_Group) {
        let children = element.getChildren();
        for (let i = 0; i < children.length; i++) {
          let hitChild = this.searchElement(query, queryMeta, children[i]);
          if (hitChild) {
            return hitChild;
          }
        }
      }
      return null;
    }

    searchElementByNameAndType(query, type, queryMeta = {type: GLBoost.QUERY_TYPE_USER_FLAVOR_NAME, format:GLBoost.QUERY_FORMAT_STRING_PARTIAL_MATCHING}, element = this) {
      if (this._validateByQuery(element, query, queryMeta) && element instanceof type) {
        return element;
      }


      if (element instanceof M_Group) {
        let children = element.getChildren();
        for (let i = 0; i < children.length; i++) {
          let hitChild = this.searchElementByNameAndType(query, type, queryMeta, children[i]);
          if (hitChild) {
            return hitChild;
          }
        }
      }
      return null;
    }

    searchElementsByNameAndType(query, type, queryMeta = {type: GLBoost.QUERY_TYPE_USER_FLAVOR_NAME, format:GLBoost.QUERY_FORMAT_STRING_PARTIAL_MATCHING}, element = this) {
      let resultElements = [];

      if (element instanceof M_Group) {
        let children = element.getChildren();
        for (let i = 0; i < children.length; i++) {
          let hitChildren = this.searchElementsByNameAndType(query, type, queryMeta, children[i]);
          if (hitChildren) {
            resultElements = resultElements.concat(hitChildren);
          }
        }
      }
      /*
      if ((element.userFlavorName === userFlavorNameOrRegExp || element.userFlavorName.match(userFlavorNameOrRegExp)) && element instanceof type) {
          resultElements.push(element);
      }*/
      if (this._validateByQuery(element, query, queryMeta) && element instanceof type) {
        resultElements.push(element);
      }


      return resultElements;
    }

    searchElementsByType(type, element = this) {
      if (element instanceof type) {
        return element;
      }

      if (type.name.indexOf('Gizmo') !== -1 && element instanceof M_Element) {
        let gizmos = element._gizmos;
        for (let gizmo of gizmos) {
          if (gizmo instanceof type) {
            return gizmo;
          }
        }
      }

      if (element instanceof M_Group) {
        let children = element.getChildren();
        let results = [];
        for (let i = 0; i < children.length; i++) {
          let hitChildOrChildren = this.searchElementsByType(type, children[i]);
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

    searchGLBoostObjectByNameAndType(query, type, queryMeta = {type: GLBoost.QUERY_TYPE_USER_FLAVOR_NAME, format:GLBoost.QUERY_FORMAT_STRING_PARTIAL_MATCHING}, element = this) {
      if (element instanceof M_Group) {
        let children = element.getChildren();
        for (let i = 0; i < children.length; i++) {
          let hitChild = this.searchGLBoostObjectByNameAndType(query, type, queryMeta, children[i]);
          if (hitChild) {
            return hitChild;
          }
        }
      }

      if (type.name.indexOf('Gizmo') !== -1 && element instanceof M_Element) {
        let gizmos = element._gizmos;
        for (let gizmo of gizmos) {
          if (this._validateByQuery(gizmo, query, queryMeta)) {
            return gizmo;
          }
        }
      }

      if (type === L_AbstractMaterial && element instanceof M_Mesh) {
        let materials = element.getAppropriateMaterials();
        for (let material of materials) {
          if (this._validateByQuery(material, query, queryMeta)) {
            return material;
          }
        }
        return null;
      } else if (this._validateByQuery(element, query, queryMeta) && element instanceof type) {
        return element;
      }
    }

    searchGLBoostObjectsByNameAndType(query, type, queryMeta = {type: GLBoost.QUERY_TYPE_USER_FLAVOR_NAME, format:GLBoost.QUERY_FORMAT_STRING_PARTIAL_MATCHING}, element = this) {
      let objects = [];
      if (element instanceof M_Group) {
        let children = element.getChildren();
        for (let i = 0; i < children.length; i++) {
          let hitChildren = this.searchGLBoostObjectsByNameAndType(query, type, queryMeta, children[i]);
          if (hitChildren.length > 0) {
            objects = objects.concat(hitChildren);
          }
        }
        return objects;
      }

      if (type.name.indexOf('Gizmo') !== -1 && element instanceof M_Element) {
        let gizmos = element._gizmos;
        for (let gizmo of gizmos) {
          if (this._validateByQuery(gizmo, query, queryMeta)) {
            objects.push(gizmo);
          }
        }
        return objects;
      }

      if (type === L_AbstractMaterial && element instanceof M_Mesh) {
        let materials = element.getAppropriateMaterials();
        for (let material of materials) {
          if (this._validateByQuery(material, query, queryMeta)) {
            objects.push(material);
          }
        }
        return objects;
      } else if (this._validateByQuery(element, query, queryMeta) && element instanceof type) {
        return [element];
      }
      return objects;
    }

    getStartAnimationInputValue(inputLineName, element = this) {

      if (element instanceof M_Group) {
        let latestInputValue = element.getStartInputValueOfAnimation(inputLineName);
        let children = element.getChildren();
        for (let i = 0; i < children.length; i++) {
          let hitChildOrInputValue = this.getStartAnimationInputValue(inputLineName, children[i]);

          if (hitChildOrInputValue instanceof M_Element) {
            let startInputValueOfThisElement = hitChildOrInputValue.getStartInputValueOfAnimation(inputLineName);
            if (startInputValueOfThisElement < latestInputValue) {
              latestInputValue = startInputValueOfThisElement;
            }
          } else {
            let startInputValueOfThisElement = hitChildOrInputValue;
            if (startInputValueOfThisElement < latestInputValue) {
              latestInputValue = startInputValueOfThisElement;
            }
          }
        }
        
        return latestInputValue;
      }

      return element.getStartInputValueOfAnimation(inputLineName);
    }


    getEndAnimationInputValue(inputLineName, element = this) {

      if (element instanceof M_Group) {
        let latestInputValue = element.getEndInputValueOfAnimation(inputLineName);
        let children = element.getChildren();
        for (let i = 0; i < children.length; i++) {
          let hitChildOrInputValue = this.getEndAnimationInputValue(inputLineName, children[i]);

          if (hitChildOrInputValue instanceof M_Element) {
            let endInputValueOfThisElement = hitChildOrInputValue.getEndInputValueOfAnimation(inputLineName);
            if (endInputValueOfThisElement > latestInputValue) {
              latestInputValue = endInputValueOfThisElement;
            }
          } else {
            let endInputValueOfThisElement = hitChildOrInputValue;
            if (endInputValueOfThisElement > latestInputValue) {
              latestInputValue = endInputValueOfThisElement;
            }
          }
        }
        return latestInputValue;
      }

      return element.getEndInputValueOfAnimation(inputLineName);
    }

    /*
     * Note that it's in world space
     */
    updateAABB() {
      var aabb = (function mergeAABBRecursively(elem) {
        if (elem instanceof M_Group) {
          var children = elem.getChildren();
          for(let i=0; i<children.length; i++) {
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
          let aabb = elem.AABBInWorld;
          //console.log(aabb.toString());
          return aabb;
        }

        return null;
      })(this);
      this.AABB.mergeAABB(aabb);

      let newAABB = this.AABB;

  //    this._AABB = aabbInWorld;

      this._updateAABBGizmo();

      return newAABB;
    }

    get AABB() {
      return this._AABB;
    }

    clone(clonedOriginalRootElement = this, clonedRootElement = null, onCompleteFuncs = []) {
      let instance = new M_Group(this._glBoostContext);
      if (clonedRootElement === null) {
        clonedRootElement = instance;
      }
      this._copy(instance);

      this._elements.forEach((element)=>{
        if (typeof element.clone !== 'undefined') {// && !MiscUtil.isDefinedAndTrue(element._isRootJointGroup)) {
          instance._elements.push(element.clone(clonedOriginalRootElement, clonedRootElement, onCompleteFuncs));
        } else {
          instance._elements.push(element);
        }
      });

      onCompleteFuncs.forEach((func)=>{
        func();
      });

      return instance;
    }

    _copy(instance) {
      super._copy(instance);
      instance._AABB = this._AABB.clone();
      instance._isRootJointGroup = this._isRootJointGroup;
    }

    set isVisible(flg) {
      let collectVisibility = function(elem) {
        elem._isVisible = flg;
        if (elem instanceof M_Group) {
          let children = elem.getChildren();
          children.forEach(function(child) {
            collectVisibility(child);
          });
        }
      };
      collectVisibility(this);
    }

    get isVisible() {
      return this._isVisible;
    }

    _updateAABBGizmo() {
      /*
      if (this._aabbGizmo === null) {
        this._aabbGizmo = new M_AABBGizmo(this._glBoostContext);
      }
      */
      let world_m = this.worldMatrix;
      let aabbInWorld = AABB.multiplyMatrix(world_m, this._AABB);

  //    this._aabbGizmo.updateGizmoDisplay(aabbInWorld.minPoint, aabbInWorld.maxPoint);
    }

    readyForDiscard() {

      this.removeAll();
    }

  }

  let singleton$3 = Symbol();

  class M_GLBoostMonitor extends L_GLBoostMonitor {
    constructor(enforcer) {
      super(enforcer);
    }

    static getInstance() {
      if (!this[singleton$3]) {
        this[singleton$3] = new M_GLBoostMonitor(L_GLBoostMonitor._singletonEnforcer);
      }
      return this[singleton$3];
    }

    getGLBoostObjectsFromArgument(arg) {
      let objects = [];
      if (typeof arg === 'undefined') {
        objects = this._glBoostObjects;
      } else if (typeof (arg) === "string") {
        for (let key in this._glBoostObjects) {
          if (this._glBoostObjects.hasOwnProperty(key) && this._glBoostObjects[key].userFlavorName === arg) {
            objects.push(this._glBoostObjects[key]);
            break;
          }
        }
      } else {
        if (arg instanceof GLBoostObject) {
          objects = [arg];
        }
      }

      return objects;
    }

    getMMeshes(glBoostObjects) {
      let meshes = [];
      for (let object of glBoostObjects) {
        if (object instanceof M_Mesh) {
          meshes.push(object);
        } else if (object instanceof M_Group) {
          meshes = meshes.concat(object.searchElementsByType(GLBoost$1.M_Mesh));
        }
      }
      meshes = meshes.filter((mesh, i, self) => self.indexOf(mesh) === i);

      return meshes;
    }

    getTriangleCount(userFlavorNameOrGLBoostObject) {
      let objects = this.getGLBoostObjectsFromArgument(userFlavorNameOrGLBoostObject);
      let meshes = this.getMMeshes(objects);
      let count = 0;

      for (let mesh of meshes) {
        count += mesh.geometry.getTriangleCount(mesh);
      }

      return count;
    }

    getVertexCount(userFlavorNameOrGLBoostObject) {
      let objects = this.getGLBoostObjectsFromArgument(userFlavorNameOrGLBoostObject);
      let meshes = this.getMMeshes(objects);
      let count = 0;

      for (let mesh of meshes) {
        count += mesh.geometry.getVertexCount(mesh);
      }

      return count;
    }

    getTextureUserFlavorNames(userFlavorNameOrGLBoostObject) {
      let objects = this.getGLBoostObjectsFromArgument(userFlavorNameOrGLBoostObject);
      let meshes = this.getMMeshes(objects);

      let textureUserFlavorNames = [];
      for (let mesh of meshes) {
        let materials = mesh.geometry._getAppropriateMaterials(mesh);
        for (let i = 0; i<materials.length; i++) {
          let tmpTextureUserFlavorNames = materials[i].getTextureUserFlavorNames();
          textureUserFlavorNames = textureUserFlavorNames.concat(tmpTextureUserFlavorNames);
        }
      }

      return textureUserFlavorNames;
    }

    getUniqueTextureUserFlavorNames(userFlavorNameOrGLBoostObject) {
      let textureUserFlavorNames = this.getTextureUserFlavorNames(userFlavorNameOrGLBoostObject);
      textureUserFlavorNames = Array.from(new Set(textureUserFlavorNames));

      return textureUserFlavorNames;
    }
  }

  GLBoost$1['M_GLBoostMonitor'] = M_GLBoostMonitor;

  class Expression extends GLBoostObject {

    constructor(glBoostContext) {
      super(glBoostContext);

      this._renderPasses = [];
    }

    addRenderPasses(renderPasses) {
      renderPasses.forEach((renderPass)=>{
        renderPass._expression = this;
      });
      
      this._renderPasses = this._renderPasses.concat(renderPasses);
    }

    addRenderPass(renderPass) {
      renderPath._expression = this;
      this._renderPasses.push(renderPass);
    }

    clearRenderPasses() {
      this._renderPasses.forEach((renderPass)=>{
        renderPass._expression = null;
      });
      this._renderPasses.length = 0;
    }

    get renderPasses() {
      return this._renderPasses;
    }

    setCurrentAnimationValue(inputName, inputValue) {
      for (let renderPass of this.renderPasses) {
        if (renderPass.scene) {
          renderPass.scene.setCurrentAnimationValue(inputName, inputValue);
        }
      }
    }

    prepareToRender() {
      this._renderPasses.forEach((renderPass, index)=>{
        renderPass.prepareToRender(this);
      });
    }

  }

  GLBoost$1['Expression'] = Expression;

  class RenderPass extends GLBoostObject {

    constructor(glBoostContext) {
      super(glBoostContext);

      this._scene = null;
      this._meshes = [];
      this._gizmos = [];
      this._opacityMeshes = [];
      this._transparentMeshes = [];
      this._transparentMeshesAsManualOrder = null;
      this._drawBuffers = [this._glContext.gl.NONE];
      this._clearColor = null;
      this._clearDepth = null;  // webgl default is 1.0
      this._colorMask = null; // webgl defalult is [true, true, true, true];
      this._renderTargetColorTextures = [];
      this._renderTargetDepthTexture = [];
      this._expression = null;
      this._viewport = null;
      this._isRenderTargetAttachedTextures = false;
      this._isEnableToDraw = true;

      this._customFunctionWhenPrepareToRender = null;
      this._customFunctionWhenPreRender = null;
      this._customFunctionWhenPostRender = null;

      this._webglStatesAssignDictionaries = [];
      this._backupWebGLStatesOfMaterials = [];
      this._shaderParametersAssignDictionaries = [];
      this._backupShaderParametersOfMaterials = [];
      this._shaderAssignDictionaries = [];
      this._backupShadersOfInstances = [];

      this._newShaderInstance = null;
      this._oldShaderClass = null;
      this._backupShaderClassDic = {};

      this._doPreRender = true;
      this._doPostRender = true;
      this._tag = '';

    }

    set tag(name) {
      this._tag = name;
    }

    get tag() {
      return this._tag;
    }

    get doPreRender() {
      return this._doPreRender;
    }

    set doPreRender(flg) {
      this._doPreRender = flg;
    }

    get doPostRender() {
      return this._doPostRender;
    }

    set doPostRender(flg) {
      this._doPostRender = flg;
    }

    get expression() {
      return this._expression;
    }

    set scene(scene) {
      this._scene = scene;
    }

    get scene() {
      return this._scene;
    }

    get meshes() {
      return this._meshes;
    }

    get opacityMeshes() {
      return this._opacityMeshes;
    }

    get transparentMeshes() {
      return this._transparentMeshes;
    }

    get gizmos() {
      return this._gizmos;
    }

    specifyRenderTargetTextures(renderTargetTextures) {
      var gl = this._glContext.gl;
      
      var colorRenderTargetTextures = renderTargetTextures.filter((renderTargetTexture)=>{
        if (renderTargetTexture.colorAttachment) {
          return true;
        } else {
          return false;
        }
      });


      if (colorRenderTargetTextures.length > 0) {
        this._drawBuffers = [];
        colorRenderTargetTextures.forEach((texture)=>{
          var attachment = texture.colorAttachment;
          this._drawBuffers.push(attachment);
        });
        this._renderTargetColorTextures = colorRenderTargetTextures;
      } else {
        this._drawBuffers = [gl.NONE];
      }

      var depthRenderTargetTextures = renderTargetTextures.filter((renderTargetTexture)=>{
        if (renderTargetTexture.depthAttachment) {
          return true;
        } else {
          return false;
        }
      });

      this._renderTargetDepthTexture = depthRenderTargetTextures[0];

      this._isRenderTargetAttachedTextures = true;

    }

    get buffersToDraw() {
      return this.isRenderTargetAttachedTextures ? this._drawBuffers : [this._glContext.gl.BACK];
    }

    set isRenderTargetAttachedTextures(flg) {
      this._isRenderTargetAttachedTextures = flg;
    }

    get isRenderTargetAttachedTextures() {
      return this._isRenderTargetAttachedTextures;
    }

    get fbo() {
      if (this._renderTargetColorTextures.length > 0) {
        return this._renderTargetColorTextures[0].fbo;
      } else if (this._renderTargetDepthTexture) {
        return this._renderTargetDepthTexture.fbo;
      } else {
        return null;
      }
    }

    get viewport() {
      return this._viewport;
    }

    set viewport(vec4) {
      this._viewport = vec4;
    }

    setViewportAsFittingToRenderTarget() {
      let width;
      let height;
      if (this._renderTargetColorTextures.length > 0) {
        width = this._renderTargetColorTextures[0].width;
        height = this._renderTargetColorTextures[0].height;
      }
      if (this._renderTargetDepthTexture) {
        width = this._renderTargetDepthTexture.width;
        height = this._renderTargetDepthTexture.height;
      }
      if (typeof width !== 'undefined' && typeof height !== 'undefined') {
        this._viewport = new Vector4(0, 0, width, height);
        return true;
      } else {
        return false;
      }
    }

    get renderTargetColorTextures() {
      return this._renderTargetColorTextures;
    }

    get renderTargetDepthTexture() {
      return this._renderTargetDepthTexture;
    }

    setClearColor(color) {
      this._clearColor = color;
    }

    get clearColor() {
      return this._clearColor;
    }

    setClearDepth(depth) {
      this._clearDepth = depth;
    }

    get clearDepth() {
      return this._clearDepth;
    }

    setColorMask(colorMask) {
      this._colorMask = colorMask;
    }

    get colorMask() {
      return this._colorMask;
    }

    setWebGLStatesAssignDictionaries(dictionaries) {
      this._webglStatesAssignDictionaries = dictionaries;

    }

    setShaderParametersAssignDictionaries(dictionaries) {
      this._shaderParametersAssignDictionaries = dictionaries;
    }

    setShaderAssignDictionaries(dictionaries) {
      this._newShaderInstance = null;
      this._backupShaderClassDic = {};

      this._shaderAssignDictionaries = [];
      for (let directory of dictionaries) {
        let meshes = [];
        for (let instance of directory.instances) {
          if (instance instanceof M_Group) {
            meshes = meshes.concat(instance.searchElementsByType(GLBoost.M_Mesh));
          } else {
            meshes.push(instance);
          }
        }
        this._shaderAssignDictionaries.push({
          instances: meshes,
          shaderClass: directory.shaderClass
        });
      }
    }

    _assignWebGLStates() {
      if (this._webglStatesAssignDictionaries.length === 0) {
        return;
      }

      for (let dic of this._webglStatesAssignDictionaries) {
        for (let material of dic.materials) {
          this._backupWebGLStatesOfMaterials.push({
            material: material,
            states: material.states
          });
          material.states = dic.states;
        }
      }
    }

    _restoreWebGLStates() {
      if (this._backupWebGLStatesOfMaterials.length === 0) {
        return;
      }
      for (let dic of this._backupWebGLStatesOfMaterials) {
        dic.material.states = dic.states;
      }
    }

    _assignShaderParameters() {
      if (this._shaderParametersAssignDictionaries.length === 0) {
        return;
      }


      for (let dic of this._shaderParametersAssignDictionaries) {
        for (let mesh of this._meshes) {
          let materials = mesh.getAppropriateMaterials();
          for (let material of materials) {
            this._backupShaderParametersOfMaterials.push({
              mesh: mesh,
              shaderParameters: material.shaderParameters
            });
            material.shaderParameters = dic.shaderParameters;
          }
        }
      }
    }

    _restoreShaderParameters() {
      if (this._backupShaderParametersOfMaterials.length === 0) {
        return;
      }
      /*
      for (let dic of this._backupShaderParametersOfMaterials) {
        let materials = dic.mesh.getAppropriateMaterials();
        for (let i=0; i<materials.length; i++) {
          materials[i].shaderParameters = dic.shaderParameters;
        }
      }
      */
      for (let i=0; i<this._backupShaderParametersOfMaterials.length; i++) {
        for (let mesh of this._meshes) {
          let materials = mesh.getAppropriateMaterials();
          for (let j=0; j<materials.length; j++) {
            materials[j].shaderParameters = this._backupShaderParametersOfMaterials[i].shaderParameters;
          }
        }
      }

    }

    _assignShaders(existCamera_f, lights, assumeThatAllMaterialsAreSame = true) {
      if (this._shaderAssignDictionaries.length === 0) {
        return;
      }
      //this.clearAssignShaders();

      if (assumeThatAllMaterialsAreSame) {
        for (let dic of this._shaderAssignDictionaries) {
          for (let obj of dic.instances) {
            obj.getAppropriateMaterials().forEach((material, index) => {
              this._backupShadersOfInstances.push({
                instance: obj,
                backupShaderClass: material.shaderClass,
                backupShaderInstance: material.shaderInstance
              });

              if (this._newShaderInstance &&  material.shaderClass.name !== this._oldShaderClass.name) {
                this._newShaderInstance.readyForDiscard();
                this._newShaderInstance = void 0;
  //              material.shaderInstance.readyForDiscard();
  //              material.shaderInstance = void 0;
              }

              if (!this._newShaderInstance) {
  //              let materials = obj.geometry.prepareToRender(this.expression, existCamera_f, lights, null, obj, dic.shaderClass);
  //              this._newShaderInstance = materials.filter((mat)=>{return mat.instanceName === material.instanceName})[0].shaderInstance;
                let glslProgram = obj.geometry.prepareGLSLProgramAndSetVertexNtoMaterial(this.expression, material, 0, existCamera_f, lights, false, dic.shaderClass);
                this._oldShaderClass = material.shaderClass;
                this._newShaderInstance = material.shaderInstance;
              }

  //            material.shaderInstance = this._newShaderInstance;
            });
          }
        }
      }

    }

    _restoreShaders(existCamera_f, lights) {
      if (this._backupShadersOfInstances.length === 0) {
        return;
      }

      for (let dic of this._backupShadersOfInstances) {
        dic.instance.getAppropriateMaterials().forEach((material,index)=>{
  //        material.shaderClass = (dic.backupShaderClass);
  //        material.shaderInstance = dic.backupShaderInstance;

  //        if (typeof this._backupShaderClassDic[dic.backupShaderClass.name] === 'undefined') {
          let shaderInstance = dic.backupShaderInstance;


          if(!shaderInstance) {
  //          let materials = obj.geometry.prepareToRender(this.expression, existCamera_f, lights, null, obj, dic.shaderClass);
  //          shaderInstance = materials.filter((mat)=>{return mat.instanceName === material.instanceName})[0].shaderInstance;
            material.shaderInstance = obj.geometry.prepareGLSLProgramAndSetVertexNtoMaterial(this.expression, material, 0, existCamera_f, lights, false, dic.shaderClass);
            
          }

  //        material.shaderInstance = shaderInstance;// this._backupShaderClassDic[dic.backupShaderClass.name];


        });

      }

    }

    clearAssignShaders() {
      for (let dic of this._shaderAssignDictionaries) {
        if (dic._newShaderInstance) {
          dic._newShaderInstance.readyForDiscard();
        }
        dic._newShaderInstance = void 0;
      }
    }

    /**
     * this function is called final part of prepareToRender
     */
    set customFunctionWhenPrepareToRender(func) {
      this._customFunctionWhenPrepareToRender = func;
    }

    get customFunctionWhenPrepareToRender() {
      return this._customFunctionWhenPrepareToRender;
    }

    set customFunctionWhenPreRender(func) {
      this._customFunctionWhenPreRender = func;
    }

    get customFunctionWhenPreRender() {
      return this._customFunctionWhenPreRender;
    }

    set customFunctionWhenPostRender(func) {
      this._customFunctionWhenPostRender = func;
    }

    get customFunctionWhenPostRender() {
      return this._customFunctionWhenPostRender;
    }

    prepareToRender(expression) {
      let collectElements = function(elem, elementsType) {
        if (elem instanceof M_Group) {
          var children = elem.getChildren();
          var meshes = [];
          children.forEach(function(child) {
            var childMeshes = collectElements(child, elementsType);
            meshes = meshes.concat(childMeshes);
          });
          return meshes;
        } else if (elem instanceof elementsType) {
          return [elem];
        } else {
          return [];
        }
      };

      this._meshes = [];
      this._gizmos = [];
      if (this._scene) {
        let elements = [];
        this._scene.getChildren().forEach((elm)=> {
          // collect meshes
          this._meshes = this._meshes.concat(collectElements(elm, M_Mesh));

          // collect meshes
          elements = elements.concat(collectElements(elm, M_Element));

          // collect gizmos from elements
          for (let element of elements) {
            Array.prototype.push.apply(this._gizmos, element._gizmos);
          }
        });
      }

      this._opacityMeshes = [];
      this._transparentMeshes = [];
      this._meshes.forEach((mesh)=>{
        if (mesh.isTransparent) {
          this._transparentMeshes.push(mesh);
        } else {
          this._opacityMeshes.push(mesh);
        }
      });

      this._skeletalMeshes = [];    
      this._meshes.forEach((mesh)=>{
        if (mesh.instanceName.indexOf('SkeletalMesh') !== -1) {
          this._skeletalMeshes.push(mesh);
        }
      });
        

      if (this._scene) {
        this._scene.prepareToRender(expression);
      }


      // Setting RenderPass Specific Shader
      var camera = this.scene.getMainCamera(this);    
      let lights = this.scene.lightsExceptAmbient;
      for (let dic of this._shaderAssignDictionaries) {
        for (let obj of dic.instances) {
          let renderSpecificMaterials = [];
          obj.getAppropriateMaterials().forEach((material, index) => {
            let newMaterial = this._glBoostContext.createClassicMaterial();
            //newMaterial._originalMaterial = material;
            renderSpecificMaterials.push(newMaterial);
          });
          let materials = obj.geometry.prepareToRender(this.expression, camera ? true : false, lights, null, obj, dic.shaderClass, renderSpecificMaterials);
          obj.getAppropriateMaterials().forEach((material, index) => {
            material['renderpassSpecificMaterial_' + this.instanceName + '_material_' + index] = materials[index];
          });
        }
      }

      if (this._customFunctionWhenPrepareToRender) {
        this._customFunctionWhenPrepareToRender();
      }
    }

    sortTransparentMeshes(camera) {

      this._transparentMeshes.forEach((mesh)=> {
        mesh.calcTransformedDepth(camera);
      });

      this._transparentMeshes.sort(function(a,b){
        if( a.transformedDepth < b.transformedDepth ) return -1;
        if( a.transformedDepth > b.transformedDepth ) return 1;
        return 0;
      });

    }

    set isEnableToDraw(flg) {
      this._isEnableToDraw = flg;
    }

    get isEnableToDraw() {
      return this._isEnableToDraw;
    }

    preRender(existCamera_f, lights) {
      if (!this.doPreRender) {
        return;
      }

      if (this._customFunctionWhenPreRender) {
        this._customFunctionWhenPreRender();
      }

      this._assignWebGLStates();
     // this._assignShaderParameters();
  //    this._assignShaders(existCamera_f, lights);
      // And call functions registered by user.
    }

    postRender(existCamera_f, lights) {
      if (!this.doPostRender) {
        return;
      }

      if (this._customFunctionWhenPostRender) {
        this._customFunctionWhenPostRender();
      }
  //    this._restoreShaders(existCamera_f, lights);
      this._restoreWebGLStates();
      //this._restoreShaderParameters();
      // And call functions registered by user.
    }

    set transparentMeshesAsManualOrder(meshes) {
      this._transparentMeshesAsManualOrder = meshes;
    }

    get transparentMeshesAsManualOrder() {
      return this._transparentMeshesAsManualOrder;
    }

  }

  /**
   * en: This class take a role as operator of rendering process. In order to render images to canvas, this Renderer class gathers other elements' data, decides a plan of drawing process, and then just execute it.<br>
   * ja: このクラスはレンダリングプロセスの制御を司ります。Canvasにイメージをレンダリングするために、このRendererクラスは他の要素のデータを集め、描画プロセスの計画を決定し、実行します。
   */
  class Renderer extends GLBoostObject {
    constructor(glBoostContext, parameters) {
      super(glBoostContext);
      var _clearColor = parameters.clearColor;

      var gl = this._glContext.gl;

      this._glBoostContext.reflectGlobalGLState();

      if (_clearColor) {
        gl.clearColor( _clearColor.red, _clearColor.green, _clearColor.blue, _clearColor.alpha );
      }

      this.__animationFrameId = -1;
      this.__isWebVRMode = false;
      this.__webvrFrameData = null;
      this.__webvrDisplay = null;
      this.__defaultUserSittingPositionInVR = new Vector3(0.0, 1.1, 1.5);
      this.__requestedToEnterWebVR = false;
      this.__isReadyForWebVR = false;
      this.__animationFrameObject = window;
    }


    /**
     * en: update things of elements of the expression.<br>
     * @param {Expression} expression a instance of Expression class
     */
    update(expression) {
      
      let skeletalMeshes = [];
      // gather scenes as unique
      for (let renderPass of expression.renderPasses) {
        skeletalMeshes = skeletalMeshes.concat(renderPass._skeletalMeshes);
        renderPass.scene.updateAmountOfAmbientLightsIntensity();
      }

      let unique = function(array) {
        return array.reduce(function(a, b) {
          if (a.instanceName !== b.instanceName) {
            a.push(b);
          }
          return a;
        }, []);
      };
      skeletalMeshes = unique(skeletalMeshes);
      
      for (let mesh of skeletalMeshes) {
        mesh.geometry.update(mesh);
      }

      if (typeof effekseer !== "undefined") {
        effekseer.update();
      }

    }

    /**
     * en: draw elements of the expression.<br>
     * ja: sceneが持つオブジェクトを描画します
     * @param {Expression} expression a instance of Expression class
     */
    draw(expression) {
      let renderPassTag = '';
      expression.renderPasses.forEach((renderPass, index)=>{
        if (!renderPass.isEnableToDraw || !renderPass.scene) {
          return;
        }

        if (renderPassTag !== renderPass.tag) {
          renderPass.clearAssignShaders();
        }
        renderPassTag = renderPass.tag;

        var camera = renderPass.scene.getMainCamera();

        let lights = renderPass.scene.lightsExceptAmbient;

        renderPass.preRender(camera ? true:false, lights);

        var glContext = this._glContext;
        var gl = glContext.gl;
        var glem = GLExtensionsManager.getInstance(this._glContext);


        // set render target buffers for each RenderPass.
        /*
        if (renderPass.fbo && renderPass.isRenderTargetAttachedTextures) {
          gl.bindTexture(gl.TEXTURE_2D, null);
          gl.bindFramebuffer(gl.FRAMEBUFFER, renderPass.fbo);
        } else {
          glem.drawBuffers(gl, [gl.BACK]);
        }
        */
        if (renderPass.fbo && renderPass.isRenderTargetAttachedTextures) {
          gl.bindFramebuffer(gl.FRAMEBUFFER, renderPass.fbo);
        }

        glem.drawBuffers(gl, renderPass.buffersToDraw);
        //glem.readBuffer(gl, renderPass.buffersToDraw);

        let viewport = null;
        if (renderPass.viewport) {
          viewport = [renderPass.viewport.x, renderPass.viewport.y, renderPass.viewport.z, renderPass.viewport.w];
        } else {
          if (this.isWebVRMode) {
            viewport = [0, 0, glContext.canvasWidth, glContext.canvasHeight];
          } else if (camera) {
            let deltaWidth = glContext.canvasHeight*camera.aspect - glContext.canvasWidth;
            viewport = [-deltaWidth/2, 0, glContext.canvasHeight*camera.aspect, glContext.canvasHeight];
          } else {
            viewport = [0, 0, glContext.canvasWidth, glContext.canvasHeight];
          }
        }
        if (!this.isWebVRMode) {
          gl.viewport.apply(gl, viewport);
        }

        this._clearBuffer(gl, renderPass);

        if (this.__animationFrameObject === this.__webvrDisplay) {
          this.__webvrDisplay.getFrameData(this.__webvrFrameData);
          if (this.__webvrDisplay.stageParameters) {
            this.__webvrFrameData.sittingToStandingTransform = this.__webvrDisplay.stageParameters.sittingToStandingTransform;
          } else {
            this.__webvrFrameData.sittingToStandingTransform = Matrix44$2.translate(this.__defaultUserSittingPositionInVR).flatten();
          }
        }


        // draw opacity meshes.
        const opacityMeshes = renderPass.opacityMeshes;
        opacityMeshes.forEach((mesh)=> {
          if (mesh.isVisible) {
            mesh.draw({
              expression: expression,
              lights: lights,
              camera: camera,
              renderPass: renderPass,
              renderPassIndex: index,
              viewport: viewport,
              isWebVRMode: this.isWebVRMode,
              webvrFrameData: this.__webvrFrameData
            });
          }
        });

        if (camera) {
          renderPass.sortTransparentMeshes(camera);
        }
        // draw transparent meshes.
        const transparentMeshes = (renderPass.transparentMeshesAsManualOrder) ? renderPass.transparentMeshesAsManualOrder : renderPass.transparentMeshes;
  //      console.log("START!!");
        transparentMeshes.forEach((mesh)=> {
          //console.log(mesh.userFlavorName);
          if (mesh.isVisible) {
            mesh.draw({
              expression: expression,
              lights: lights,
              camera: camera,
              renderPass: renderPass,
              renderPassIndex: index,
              viewport: viewport,
              isWebVRMode: this.isWebVRMode,
              webvrFrameData: this.__webvrFrameData
            });
          }
        });
  //      console.log("END!!");
        
        const globalStatesUsageBackup = this._glBoostContext.globalStatesUsage;
        this._glBoostContext.globalStatesUsage = GLBoost.GLOBAL_STATES_USAGE_EXCLUSIVE;
        this._glBoostContext.currentGlobalStates = [
          3042, // gl.BLEND
        ];
        let gizmos = renderPass.gizmos;
        for (let gizmo of gizmos) {
          if (gizmo.isVisible) {
            gizmo.mesh.draw({
              expression: expression,
              lights: lights,
              camera: camera,
              renderPass: renderPass,
              renderPassIndex: index,
              viewport: viewport,
              isWebVRMode: this.isWebVRMode,
              webvrFrameData: this.__webvrFrameData
            });
          }
        }
        this._glBoostContext.globalStatesUsage = globalStatesUsageBackup;
        this._glBoostContext.restoreGlobalStatesToDefault();

        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  //      glem.drawBuffers(gl, [gl.BACK]);

        if (typeof effekseer !== "undefined") {
          effekseer.setProjectionMatrix(camera.projectionRHMatrix().m);
          effekseer.setCameraMatrix(camera.inverseWorldMatrix.m);
          effekseer.draw();
        }

        renderPass.postRender(camera ? true:false, lights);

      });
    }

    _clearBuffer(gl, renderPass) {
      const clearColor = renderPass.clearColor;
      const clearDepth = renderPass.clearDepth;
      const colorMask = renderPass.colorMask;

      if (clearColor) {
        gl.clearColor(clearColor.x, clearColor.y, clearColor.z, clearColor.w);
      }
      if (clearDepth) {
        gl.clearDepth(clearDepth);
      }
      if (colorMask) {
        gl.colorMask.apply(null, [colorMask]);
      }

      if (renderPass.buffersToDraw[0] === gl.NONE) {
        {
          gl.clear(gl.DEPTH_BUFFER_BIT);
        }
      } else if (clearColor || clearDepth) {
        gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      } else if (clearColor) {
        gl.clear( gl.COLOR_BUFFER_BIT );
      }
    }

    /**
     * en: clear color/depth/stencil of canvas.<br>
     * ja: canvasのカラー、デプス、ステンシルのいずれか又は全てをクリアします。
     * @param {boolean} color_flg true: clear color, false: don't clear color
     * @param {boolean} depth_flg true: clear depth, false: don't clear depth
     * @param {boolean} stencil_flg  true: clear stencil, false: don't clear stencil
     */
    clearCanvas( color_flg, depth_flg, stencil_flg ) {

      var gl = this._glContext.gl;

      var bufferBits = 0;

      if ( color_flg === void 0 || color_flg ) bufferBits |= gl.COLOR_BUFFER_BIT;
      if ( depth_flg === void 0 || depth_flg ) bufferBits |= gl.DEPTH_BUFFER_BIT;
      if ( stencil_flg === void 0 || stencil_flg ) bufferBits |= gl.STENCIL_BUFFER_BIT;

      gl.clear( bufferBits );

    }

    /**
     * en: Get WebGL context.<br>
     * ja: WebGLコンテキストを取得します。
     * @returns {webglcontext} a context of WebGL
     */
    get glContext() {
      return this._glContext.gl;
    }


    /**
     * en: resize canvas and viewport.<br>
     * ja: canvasとビューポートをリサイズします。
     * @param {number} width en: width to resize, ja: リサイズする幅
     * @param {number} height en: height to resize, ja:リサイズする高さ
     */
    resize(width, height) {
      this._glContext.canvasWidth = width;
      this._glContext.canvasHeight = height;
    }

    /**
     * This method treats the given callback function as a render loop and call it every frame.
     */
    doRenderLoop(renderLoopFunc, ...args) {

      renderLoopFunc.apply(renderLoopFunc, args);

      this.__animationFrameId = this.__animationFrameObject.requestAnimationFrame(()=>{
        this.doRenderLoop(renderLoopFunc, ...args);
        if (this.__requestedToEnterWebVR) {
          this.__isWebVRMode = true;
        }
      });
    }

    doConvenientRenderLoop(expression, beforeCallback, afterCallback, ...args) {

      if (beforeCallback) {
        beforeCallback.apply(beforeCallback, args);
      }

      this.clearCanvas();
      this.update(expression);
      this.draw(expression);

      if (afterCallback) {
        afterCallback.apply(afterCallback, args);
      }

      if (this.__webvrDisplay && this.__webvrDisplay.isPresenting) {
        this.__webvrDisplay.submitFrame();
      }

      this.__animationFrameId = this.__animationFrameObject.requestAnimationFrame(()=>{
        this.doConvenientRenderLoop(expression, beforeCallback, afterCallback, ...args);
        if (this.__requestedToEnterWebVR) {
          this.__isWebVRMode = true;
        }
      });
    }

    stopRenderLoop() {
      this.__cancelAnimationFrame(this.__animationFrameId);
      this.__animationFrameId = -1;
    }



    // WebVR
    async enterWebVR(initialUserSittingPositionIfStageParametersDoNotExist) {
      if (initialUserSittingPositionIfStageParametersDoNotExist) {
        this.__defaultUserSittingPositionInVR = initialUserSittingPositionIfStageParametersDoNotExist;
      }
      return new Promise((resolve, reject)=> {
        if (!this.__webvrDisplay.isPresenting) {
          this.__webvrDisplay.requestPresent([{source: this._glContext.canvas}]).then(() => {
            //this.__switchAnimationFrameFunctions(this.__webvrDisplay);
            this.__animationFrameObject = this.__webvrDisplay;
            const leftEye = this.__webvrDisplay.getEyeParameters("left");
            const rightEye = this.__webvrDisplay.getEyeParameters("right");
            this.resize(Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2, Math.max(leftEye.renderHeight, rightEye.renderHeight));
            this.__requestedToEnterWebVR = true;
            resolve();
          }).catch(() => {
            console.error('Failed to requestPresent. Please check your VR Setting, or something wrong with your VR system?');
            reject();
          });
        }
      });
    }

    async readyForWebVR(requestButtonDom) {
      if ( window.VRFrameData ) {
        this.__webvrFrameData = new window.VRFrameData();
      }

      return new Promise((resolve, reject)=> {
        if ( navigator.getVRDisplays ) {
          navigator.getVRDisplays()
            .then((vrDisplays)=>{
              if (vrDisplays.length > 0) {
                const webvrDisplay = vrDisplays[vrDisplays.length - 1];
                webvrDisplay.depthNear = 0.01;
                webvrDisplay.depthFar = 10000;

                if (webvrDisplay.capabilities.canPresent) {
                  this.__webvrDisplay = webvrDisplay;

                  if (requestButtonDom) {
                    requestButtonDom.style.display = 'block';
                  } else {
                    const paragrach = document.createElement("p");
                    const anchor = document.createElement("a");
                    anchor.setAttribute("id", 'enter-vr');
                    const enterVr = document.createTextNode("Enter VR");

                    anchor.appendChild(enterVr);
                    paragrach.appendChild(anchor);

                    const canvas = this.glContext.canvas;
                    canvas.parent.insertBefore(paragrach, canvas);
                    window.addEventListener('click', this.enterWebVR.bind(this));
                  }

                  this.__isReadyForWebVR = true;
                  resolve();
                } else {
                  console.error("Can't requestPresent now. try again.");
                  reject();
                }
              } else {
                console.error('Failed to get VR Display. Please check your VR Setting, or something wrong with your VR system?');
                reject();
              }
            })
            .catch(()=>{
              console.error('Failed to get VR Displays. Please check your VR Setting.');
              reject();
            });
        } else {
          console.error('Your browser does not support WebVR. Or it is disabled. Check again.');
          reject();
        }
      });
    }

    async exitWebVR() {
      this.__isWebVRMode = false;
      if (this.__webvrDisplay && this.__webvrDisplay.isPresenting) {
        await this.__webvrDisplay.exitPresent();
      }
      this.__isReadyForWebVR = false;
      this.__animationFrameObject = window;
    }


    async disableWebVR() {
      this.__isWebVRMode = false;
      this.__requestedToEnterWebVR = false;
      this.__isReadyForWebVR = false;
      if (this.__webvrDisplay && this.__webvrDisplay.isPresenting) {
        await this.__webvrDisplay.exitPresent();
      }
      this.__animationFrameObject = window;
      this.__webvrDisplay = null;
    }

    get isWebVRMode() {
      return this.__isWebVRMode;
    }

    get isReadyForWebVR() {
      return this.__isReadyForWebVR;
    }

    webVrSubmitFrame() {
      if (this.__webvrDisplay && this.__webvrDisplay.isPresenting) {
        this.__webvrDisplay.submitFrame();
      }
    }
  }

  /*       */


  /**
   * [en] This M_Scene class is the top level element of scene graph hierarchy.
   *       To render scene, pass this scene element to Renderer.draw method.<br>
   * [ja] このSceneクラスはシーングラフ階層のトップレベルに位置する要素です。
   *       シーンをレンダリングするには、このscene要素をRenderer.drawメソッドに渡します。
   */
  class M_Scene extends M_Group {
                              
    
    /**
     * [en] constructor
     * [ja] コンストラクタ
     * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     */
    constructor(glBoostContext    ) {
      super(glBoostContext);
      this._gl = this._glContext.gl;
      this._reset();
    }

    _reset() {
      this._meshes = [];
      this._lights = [];
      this._lightsExceptAmbient = [];
      this._ambientLights = [];    
      this._cameras = [];
      this._accumulatedAmbientIntensity = Vector4.zero();
    }

    _getCurrentAnimationInputValue(inputName       ) {
      let value = this._currentAnimationInputValues[inputName];
      if (typeof value === 'undefined') {
        return (void 0);
      } else {
        return value;
      }
    }

    /**
     * [en] Prepare for Rendering. You have to call this method before Renderer.draw method.
     * [ja] レンダリングのための前処理を行います。Renderer.drawメソッドの前にこのメソッドを呼ぶ必要があります。
     */
    prepareToRender(expression    ) {
      this._reset();

      var aabb = (function setParentAndClearAccumulatedTransformMatriAndMergeAABBRecursively(elem) {
        if (elem instanceof M_Group) {
          elem._needUpdate(); // This line enforces to clear AccumulatedTransformMatrix for all below elements.
          var children = elem.getChildren();
          for(let i=0; i<children.length; i++) {
            children[i]._parent = elem;
            var aabb = setParentAndClearAccumulatedTransformMatriAndMergeAABBRecursively(children[i]);
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
      })(this);
      this.AABB.mergeAABB(aabb);

      let collectLights = function(elem) {
        if (elem instanceof M_Group) {
          var children = elem.getChildren();
          var lights = [];
          children.forEach(function(child) {
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
      this._lightsExceptAmbient = [];
      this._ambientLights = [];
      this._elements.forEach((elm)=> {
        this._lights = this._lights.concat(collectLights(elm));
        this._lightsExceptAmbient = this._lights.filter((light)=>{return !light.isTypeAmbient();});
        this._ambientLights = this._lights.filter((light)=>{return light.isTypeAmbient();});
      });

      let existCamera_f = false;
      let collectCameras = function(elem) {
        if (elem instanceof M_Group) {
          var children = elem.getChildren();
          var cameras = [];
          children.forEach(function(child) {
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
      this._elements.forEach((elm)=> {
        this._cameras = this._cameras.concat(collectCameras(elm));
      });
      if (this._cameras.length === 0) ; else if (this._cameras.length === 1) {
        this._cameras[0].setAsMainCamera(this);
      } else {
        // If there are two or more cameras present in the scene and the main camera is not explicitly specified,
        // a camera chosen to be irresponsible is made the main camera.
        let isNotMainCameraFound = true;
        for (let camera of this._cameras) {
          if (camera.isMainCamera(this)) {
            isNotMainCameraFound = false;
            break;
          }
        }
        if (isNotMainCameraFound) {
          this._cameras[0].setAsMainCamera(this); //
        }
      }


      let collectMeshes = function(elem) {
        if (elem instanceof M_Group) {
          var children = elem.getChildren();
          var meshes = [];
          children.forEach(function(child) {
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
      this._elements.forEach((elm)=> {
        this._meshes = this._meshes.concat(collectMeshes(elm));
      });

      let callPrepareToRenderMethodOfAllElements = (elem)=> {
        if (elem instanceof M_Group) {
          var children = elem.getChildren();

          children.forEach(function (child) {
            callPrepareToRenderMethodOfAllElements(child);
          });

          for (let meshGizmo of elem._gizmos) {
            meshGizmo.prepareToRender(expression, existCamera_f, []);
          }
        } else if (elem instanceof M_Mesh) {
          elem.prepareToRender(expression, existCamera_f, this._lights);
          for (let gizmo of elem._gizmos) {
            gizmo.mesh.prepareToRender(expression, existCamera_f, this._lights);
          }
        } else if (elem instanceof M_Element) {
          elem.prepareToRender();
          for (let gizmo of elem._gizmos) {
            gizmo.mesh.prepareToRender(expression, existCamera_f, []);
          }
        } else {
          return;
        }
      };
      callPrepareToRenderMethodOfAllElements(this);
    }

    getMainCamera(renderPass    ) {
      var camera = null;
      this.cameras.forEach((elm)=> {
        if (elm.isMainCamera(this)) {
          camera = elm;
        }
      });

      return camera;
    }

    get lightsExceptAmbient() {
      return this._lightsExceptAmbient;
    }

    updateAmountOfAmbientLightsIntensity() {
      this._accumulatedAmbientIntensity = Vector4.zero();
      for (let light of this._ambientLights) {
        this._accumulatedAmbientIntensity.add(light.intensity);
      }
    }

    getAmountOfAmbientLightsIntensity() {
      return this._accumulatedAmbientIntensity.clone();
    }    

    /**
     * [en] Get child elements which belong to this scene.<br>
     * [ja] このシーンに属していた子供の要素の配列を返します。
     * @return {Array<Element>} [en] child elements of this scene. [ja] このシーンの子供の要素
     */
    getChildren() {
      return this._elements;
    }

    /**
     * [en] Get child elements which belong to this scene.<br>
     * [ja] このシーンに属していた子供の要素の配列を返します。
     * @return {Array<Element>} [en] child elements of this scene. [ja] このシーンの子供の要素
     */
    get elements()            {
      return this._elements;
    }

    /**
     * [en] Get child meshes which belong to this scene.<br>
     * [ja] このシーンに属していた子供のMesh要素の配列を返します。
     * @return {Array<M_Mesh>} [en] child meshes of this scene. [ja] このシーンの子供のMesh要素
     */
    get meshes() {
      return this._meshes;
    }

    /**
     * [en] Get child lights which belong to this scene.<br>
     * [ja] このシーンに属していた子供のLight要素の配列を返します。
     * @return {Array<M_AbstractLight>} [en] child lights of this scene. [ja] このシーンの子供のLight要素
     */
    get lights() {
      return this._lights;
    }

    get lightsExceptAmbient() {
      return this._lightsExceptAmbient;
    }

    /**
     * [en] Get child cameras which belong to this scene.<br>
     * [ja] このシーンに属していた子供のCamera要素の配列を返します。
     * @return {Array<PerspectiveCamera>} [en] child cameras of this scene. [ja] このシーンの子供のCamera要素
     */
    get cameras() {
      return this._cameras;
    }

  }

  class M_Gizmo extends M_Group {
    constructor(glBoostContext) {
      super(glBoostContext, null, null);

      this._mesh = null;
    }

    get mesh() {
      return this._mesh;
    }

  }

  class JointPrimitive extends Geometry {
    constructor(glBoostContext, length, lineCount = 1) {
      super(glBoostContext);

      this._colors = [];
      this.color = new Vector4(1, 1, 1, 1);
      this._worldPositionOfThisJoint = new Vector3(0, 0, 1);
      this._worldPositionOfParentJoint = new Vector3(0, 0, 0);
      this._vertexData = this._setupVertexData();
      this.setVerticesData(this._vertexData, null, GLBoost$1.LINES);
      this._width = 1;
    }

    _setupVertexData() {

      let length = Vector3.lengthBtw(this._worldPositionOfThisJoint, this._worldPositionOfParentJoint);
      let arrowWidth = this._width;
      let arrowheadLength = length/7.5;
      let arrowStickLength = length - arrowheadLength;

      let positions = [];

      let deltaVec = Vector3.subtract(this._worldPositionOfParentJoint, this._worldPositionOfThisJoint);
      let directionToParent = new Vector3(0, 1, 0);
      if (!deltaVec.isEqual(Vector3.zero())) {
        directionToParent = Vector3.subtract(this._worldPositionOfParentJoint, this._worldPositionOfThisJoint).normalize();
      }
      const arrowStickPosition = Vector3.add(this._worldPositionOfThisJoint, Vector3.multiply(directionToParent, arrowStickLength));

      let dummyVector = new Vector3(0, 1, 0);
      let dummyVector2 = new Vector3(0, -1, 0);
      if (Math.abs(Vector3.dotProduct(directionToParent, dummyVector)) > 0.4) {
        dummyVector = new Vector3(1, 0, 0);
        dummyVector2 = new Vector3(-1, 0, 0);
      }
      if (Math.abs(Vector3.dotProduct(directionToParent, dummyVector)) > 0.4) {
        dummyVector = new Vector3(0, 0, 1);
        dummyVector2 = new Vector3(0, 0, -1);
      }
      const crossVector = Vector3.multiply(Vector3.cross(directionToParent, dummyVector).normalize(), arrowWidth);
      const crossVector2 = Vector3.multiply(Vector3.cross(directionToParent, crossVector).normalize(), arrowWidth);
      const crossVector3 = Vector3.multiply(Vector3.cross(directionToParent, dummyVector2).normalize(), arrowWidth);
      const crossVector4 = Vector3.multiply(Vector3.cross(directionToParent, crossVector3).normalize(), arrowWidth);
      //const crossVector = Matrix44.rotate(directionToParent)


      const crossPosition = Vector3.add(arrowStickPosition, crossVector);
      const crossPosition2 = Vector3.add(arrowStickPosition, crossVector2);
      const crossPosition3 = Vector3.add(arrowStickPosition, crossVector3);
      const crossPosition4 = Vector3.add(arrowStickPosition, crossVector4);


        // Long Pyramid
      positions.push(this._worldPositionOfThisJoint);
      positions.push(crossPosition);

      positions.push(this._worldPositionOfThisJoint);
      positions.push(crossPosition2);

      positions.push(this._worldPositionOfThisJoint);
      positions.push(crossPosition3);

      positions.push(this._worldPositionOfThisJoint);
      positions.push(crossPosition4);


      // Plane
      positions.push(crossPosition);
      positions.push(crossPosition2);

      positions.push(crossPosition2);
      positions.push(crossPosition3);
      positions.push(crossPosition3);
      positions.push(crossPosition4);
      positions.push(crossPosition4);
      positions.push(crossPosition);

      // Short Pyramid
      positions.push(this._worldPositionOfParentJoint);
      positions.push(crossPosition);

      positions.push(this._worldPositionOfParentJoint);
      positions.push(crossPosition2);

      positions.push(this._worldPositionOfParentJoint);
      positions.push(crossPosition3);

      positions.push(this._worldPositionOfParentJoint);
      positions.push(crossPosition4);

      this._vertexData = {
        position: positions,
        color: this._colors
      };

      return this._vertexData;
    }

    set worldPositionOfThisJoint(vec) {
      this._worldPositionOfThisJoint = vec;
    }

    get worldPositionOfThisJoint() {
      return this._worldPositionOfThisJoint;
    }

    set worldPositionOfParentJoint(vec) {
      this._worldPositionOfParentJoint = vec;
    }

    get worldPositionOfParentJoint() {
      return this._worldPositionOfParentJoint;
    }

    set width(value) {
      this._width = value;
    }

    get width() {
      return this._width;
    }

    set color(vec) {
      this._color = vec;

      this._colors = [];
      for(let i=0; i<24; i++) {
        this._colors.push(this._color);
      }
    }

    get color() {
      return this._color;
    }

    update() {
      this._vertexData = this._setupVertexData();
      this.updateVerticesData(this._vertexData, true);
    }

    set meshContainingSelf(jointGizmoMesh) {
      this._mesh = jointGizmoMesh;
    }

  }

  GLBoost$1["JointPrimitive"] = JointPrimitive;

  class M_JointGizmo extends M_Gizmo {
    constructor(glBoostContext, joint, length) {
      super(glBoostContext, null, null);
      this._init(glBoostContext, joint, length);

      this.isVisible = false;

      this.baseColor = new Vector4(0.0, 1.0, 1.0, 0.25);
    }

    _init(glBoostContext, joint, length) {
      this._joint = joint;
      this._primitive = new JointPrimitive(this._glBoostContext, length, 1);
      this._mesh = new M_Mesh(glBoostContext,
        this._primitive,
        null
      );

      this._mesh.masterElement = this;
  //    this._mesh.rotate = new Vector3(-Math.PI/2, 0, 0);

      this.addChild(this._mesh);
    }

    set baseColor(colorVec) {
      this._primitive.color = colorVec;
    }

    get baseColor() {
      return this._primitive.color;
    }

    // Use master element's worldMatrix.
    get worldMatrixInner() {
      return Matrix44$2.identity();
    }

    set worldPositionOfThisJoint(vec3) {
      this._primitive.worldPositionOfThisJoint = vec3;
    }

    get worldPositionOfThisJoint() {
      return this._primitive.worldPositionOfThisJoint;
    }

    set worldPositionOfParentJoint(vec3) {
      this._primitive.worldPositionOfParentJoint = vec3;
    }

    get worldPositionOfParentJoint() {
      return this._primitive.worldPositionOfParentJoint;
    }

    set width(value) {
      this._primitive.width = value;
    }

    get width() {
      return this._primitive.width;
    }

    update() {
      this._primitive.update();
    }

    set isVisible(flag) {
      this._mesh.isVisible = flag;
    }

    get isVisible() {
      return this._mesh.isVisible;
    }

  }

  GLBoost$1['M_JointGizmo'] = M_JointGizmo;

  class M_Joint extends M_Element {
    constructor(glBoostContext, isExistJointGizmo = false) {
      super(glBoostContext);

      if (isExistJointGizmo) {
        this._gizmo = new M_JointGizmo(glBoostContext, this, length);
        this._gizmos.push(this._gizmo);
      } else {
        this._gizmo = {};
      }

      M_Joint._calculatedTransforms = {};
      M_Joint._calculatedTranslates = {};
      this._childJoints = [];
      this._jointsOfParentHierarchies = [];

      this.length = new Vector3(length, length, length);

      this._isCalculatedJointGizmo = false;
      this._jointPoseMatrix = Matrix44$2.identity();
      this._length = 1;

      this._inverseBindMatrix = Matrix44$2.identity();

      this._skeletalMesh = null;

    }

    set inverseBindMatrix(mat4) {
      this._inverseBindMatrix = mat4;
    }

    get inverseBindMatrix() {
      return this._inverseBindMatrix;
    }

    set skeletalMesh(skeletalMesh) {
      this._skeletalMesh = skeletalMesh;
    }

    get skeletalMesh() {
      return this._skeletalMesh;
    }

    set worldPositionOfThisJoint(vec) {
      this._gizmo.worldPositionOfThisJoint = vec;
    }

    get worldPositionOfThisJoint() {
      return this._gizmo.worldPositionOfThisJoint;
    }

    set worldPositionOfParentJoint(vec) {
      this._gizmo.worldPositionOfParentJoint = vec;
    }

    get worldPositionOfParentJoint() {
      return this._gizmo.worldPositionOfParentJoint;
    }

    set width(value) {
      this._gizmo.width = value;
    }

    get width() {
      return this._gizmo.width;
    }

    set jointPoseMatrix(matrix) {
      this._jointPoseMatrix = matrix;
    }

    get jointPoseMatrix() {
      return this._jointPoseMatrix;
    }


    clearIsCalculatedLengthFlag() {
      this._isCalculatedJointGizmo = false;
    }

    get isCalculatedJointGizmo() {
      return this._isCalculatedJointGizmo;
    }

    set isVisible(flg) {
      this._gizmo.isVisible = flg;
    }

    get isVisible() {
      return this._gizmo.isVisible;
    }

    set childJoints(joints) {
      this._childJoints = joints;
    }

    get childJoints() {
      return this._childJoints;
    }

    set jointsOfParentHierarchies(joints) {
      this._jointsOfParentHierarchies = joints;
    }

    get jointsOfParentHierarchies() {
      return this._jointsOfParentHierarchies;
    }

    updateGizmoDisplay() {
      this._gizmo.update();
    }

    clone() {
      let instance = new M_Joint(this._glBoostContext);
      this._copy(instance);
      return instance;
    }

    _copy(instance) {
      super._copy(instance);
    }

  }

  GLBoost$1['M_Joint'] = M_Joint;

  class M_SkeletalMesh extends M_Mesh {
    constructor(glBoostContext, geometry, material, rootJointName) {
      super(glBoostContext, geometry, material, rootJointName);
      this._rootJointName = rootJointName;
      this._jointsHierarchy = null;
      this._inverseBindMatrices = [];
      this._bindShapeMatrix = Matrix44$2.identity();
      this._jointNames = []; // for glTF1.0
      this._gltfJointIndices = []; // for glTF2.0
      this._joints = [];

      // these are calculated by M_SkeletalGeometry
      this._jointMatrices = null;
      this._qArray = null;
      this._tArray = null;    
      this._qtArray = null;
      this._translationScale = 0;

    }

    prepareToRender(expression, existCamera_f, lights, renderPasses) {
      let joints = this.jointsHierarchy.searchElementsByType(M_Joint);

      this._joints = [];

      // sort & choice joints according to jointNames for skinning
      /// for glTF1.0
      let jointCount=0;
      for (let i=0; i<this._jointNames.length; i++) {
        for (let j=0; j<joints.length; j++) {
          if (this._jointNames[i] === joints[j]._userFlavorName) {
            this._joints.push(joints[j]);
            joints[j].skeletalMesh = this;
  //          joints[j].isVisible = true;
            let inverseBindMatrix = (this._inverseBindMatrices[jointCount] !== void 0) ? this._inverseBindMatrices[jointCount] : Matrix44$2.identity(); 
            joints[j].inverseBindMatrix = inverseBindMatrix;
            joints[j].bindMatrix = Matrix44$2.invert(inverseBindMatrix);
            jointCount++;
            break;
          }
        }
      }
      /// for glTF2.0
      jointCount=0;
      for (let i=0; i<this._gltfJointIndices.length; i++) {
        for (let j=0; j<joints.length; j++) {
          if (this._gltfJointIndices[i] === joints[j]._glTFJointIndex) {
            this._joints.push(joints[j]);
            joints[j].skeletalMesh = this;
  //          joints[j].isVisible = true;
            let inverseBindMatrix = (this._inverseBindMatrices[jointCount] !== void 0) ? this._inverseBindMatrices[jointCount] : Matrix44$2.identity(); 
            joints[j].inverseBindMatrix = inverseBindMatrix;
            joints[j].bindMatrix = Matrix44$2.invert(inverseBindMatrix);
            jointCount++;
            break;
          }
        }
      }

      const calcParentJointsMatricesRecursively = (joint)=> {
        let children = joint.parent.parent.getChildren();
        let parentJoint = null;
        for (let i=0; i<children.length; i++) {
          if (children[i] instanceof M_Joint) {
            parentJoint = children[i];
          }
        }

        let results = [];
        if (parentJoint) {
          let result = calcParentJointsMatricesRecursively(parentJoint);
          if (Array.isArray(result)) {
            Array.prototype.push.apply(results, result);
          }

          // for glTF1.0
          for (let jointName of this._jointNames) {
            if (parentJoint.userFlavorName === jointName) {
              results.push(parentJoint);
              return results;
            }
          }
          // for glTF2.0
          for (let gltfJointIndex of this._gltfJointIndices) {
            if (parentJoint._glTFJointIndex === gltfJointIndex) {
              results.push(parentJoint);
              return results;
            }
          }


          return results;
        }

        return null;
      };

      let jointsParentHierarchies = null;
      for (let i=0; i<this._joints.length; i++) {
        jointsParentHierarchies = calcParentJointsMatricesRecursively(this._joints[i]);
        if (jointsParentHierarchies == null) {
          jointsParentHierarchies = [];
        }
        //jointsParentHierarchies.push(this._joints[i]);

        this._joints[i].jointsOfParentHierarchies = jointsParentHierarchies;
      }
      super.prepareToRender(expression, existCamera_f, lights, renderPasses);


      let lengthCenterToCorner = AABB.multiplyMatrix(this._joints[0].worldMatrix,
        this.rawAABBInLocal).lengthCenterToCorner;
      for (let i=0; i<this._joints.length; i++) {
        this._joints[i].width = lengthCenterToCorner / 100;
      }
    }

    set jointsHierarchy(jointsHierarchy) {
      this._jointsHierarchy = jointsHierarchy;
    }

    get jointsHierarchy() {
      return this._jointsHierarchy;
    }

    get rootJointName() {
      return this._rootJointName;
    }

    set inverseBindMatrices(inverseBindMatrices) {
      this._inverseBindMatrices = inverseBindMatrices;
      this._geometry.setExtraDataForShader('jointN', (inverseBindMatrices.length < 4) ? 4 : inverseBindMatrices.length);
    }

    get inverseBindMatrices() {
      return this._inverseBindMatrices;
    }

    set bindShapeMatrix(matrix) {
      this._bindShapeMatrix = matrix;
    }
    get bindShapeMatrix() {
      return this._bindShapeMatrix;
    }

    set jointNames(names) {
      this._jointNames = names;
    }
    get jointNames() {
      return this._jointNames;
    }

    set gltfJointIndices(indices) {
      this._gltfJointIndices = indices;
    }
    get gltfJointIndices() {
      return this._gltfJointIndices;
    }

    clone(clonedOriginalRootElement = this, clonedRootElement = null, onCompleteFuncs = []) {
      let instance = new M_SkeletalMesh(this._glBoostContext, this.geometry, this.material, this._rootJointName);
      this._copy(instance, clonedOriginalRootElement, clonedRootElement, onCompleteFuncs);

      return instance;
    }

    _copy(instance, clonedOriginalRootElement, clonedRootElement, onCompleteFuncs) {
      super._copy(instance);

      instance._jointsHierarchy = this._jointsHierarchy.clone();
      instance._inverseBindMatrices = this._inverseBindMatrices;
      instance._bindShapeMatrix = this._bindShapeMatrix;
      instance._jointNames = this._jointNames;
      instance._gltfJointIndices = this._gltfJointIndices;
      instance._joints = this._joints;

      onCompleteFuncs.push((function(clonedSkeletalMesh, _clonedRootElement, jointRootGroupUserFlavorName) {
        return function() {
          let clonedJointRootGroup = _clonedRootElement.searchElement(jointRootGroupUserFlavorName);
          clonedSkeletalMesh._jointsHierarchy = clonedJointRootGroup;
        }
      })(instance, clonedRootElement, this._jointsHierarchy.userFlavorName));
    }

    set isSkeletonVisible(flg) {
      for (let joint of this._joints) {
        joint.isGizmoVisible = flg;
      }
    }

    get isSkeletonVisible() {
      return this._joints[0].isGizmoVisible;
    }

    
    get rootJointsWorldPosition() {
      if (this._joints.length > 0) {
        const rootJointMatrix = this._joints[0].worldMatrix;
        let rootJointPosWorld = rootJointMatrix.multiplyVector(Vector4.zero()).toVector3();
        return rootJointPosWorld;
      }
      return Vector3.zero();
    }
    

    getRootJointsWorldPositionAt(inputValue) {
      if (this._joints.length > 0) {
        const rootJointMatrix = this._joints[0].getWorldMatrixAt(inputValue);
        let rootJointPosWorld = rootJointMatrix.multiplyVector(Vector4.zero()).toVector3();
        return rootJointPosWorld;
      }

      return Vector3.zero();
    }

    /*
    get rootJointsWorldPositionAsBindPose() {
      if (this._joints.length > 0) {
        const rootJointMatrix = this._joints[0].worldMatrixAsForJointsBindPose;
        let rootJointPosWorld = rootJointMatrix.multiplyVector(Vector4.zero()).toVector3();
        return rootJointPosWorld;
      }

      return Vector3.zero();
    }
    */
  }

  GLBoost$1['M_SkeletalMesh'] = M_SkeletalMesh;

  class M_SkeletalGeometry extends Geometry {
    constructor(glBoostContext) {
      super(glBoostContext);

      this._skeletalShaderSpecified = null;
      this._skeletalShaderNormal = null;
    }

    update(skeletalMesh) {

      var joints = skeletalMesh._joints;
      var matrices = [];

      let areThereAnyJointsWhichHaveAnimation = false;

      if (joints[0].parent._getCurrentAnimationInputValue(joints[0].parent._activeAnimationLineName) !== null) {
        areThereAnyJointsWhichHaveAnimation = true;
      }

      let input = joints[0]._getCurrentAnimationInputValue('time');

      let jointZeroWorldMatrix = null;
      let skeletalMeshWorldMatrix = null;
      let skeletalMeshTransformMatrixAccmulatedAncestry = skeletalMesh.getWorldMatrixAt(input);
      let inverseSkeletalMeshTransformMatrixAccmulatedAncestry = Matrix44$2.invert(skeletalMeshTransformMatrixAccmulatedAncestry);

      for (let i=joints.length-1; i>=0; i--) {
        let globalJointTransform = null;
        let inverseBindMatrix = joints[i].inverseBindMatrix;
        if (areThereAnyJointsWhichHaveAnimation) {
          globalJointTransform = joints[i].getWorldMatrixAt(input);
          skeletalMeshWorldMatrix = globalJointTransform;
        } else {
          globalJointTransform = skeletalMeshTransformMatrixAccmulatedAncestry;
          skeletalMeshWorldMatrix = globalJointTransform;
          let bindMat = joints[i].bindMatrix;
          globalJointTransform = Matrix44$2.multiply(skeletalMeshWorldMatrix, bindMat);
        }
        if (i === 0) {
          jointZeroWorldMatrix = globalJointTransform;
        }
  //      if (true) {
        if (this._materialForSkeletals[0].shaderInstance.constructor === FreeShader) {
          matrices[i] = inverseSkeletalMeshTransformMatrixAccmulatedAncestry;
        } else {
          matrices[i] = Matrix44$2.identity();
        }
        matrices[i] = Matrix44$2.multiply(matrices[i], globalJointTransform);
        joints[i].jointPoseMatrix = Matrix44$2.multiply(Matrix44$2.identity(), globalJointTransform);
        matrices[i] = Matrix44$2.multiply(matrices[i], inverseBindMatrix);
        matrices[i] = Matrix44$2.multiply(matrices[i], skeletalMesh.bindShapeMatrix);
      }

      GLBoost$1.JointGizmoUpdater.update(joints, jointZeroWorldMatrix);

  /*
        let s = matrices[i].getScale();
        
        matrices[i].m00 /= s.x;
        matrices[i].m01 /= s.x;
        matrices[i].m02 /= s.x;
        matrices[i].m10 /= s.y;
        matrices[i].m11 /= s.y;
        matrices[i].m12 /= s.y;
        matrices[i].m20 /= s.z;
        matrices[i].m21 /= s.z;
        matrices[i].m22 /= s.z;
        
        let q = (Quaternion.fromMatrix(matrices[i]));
        q.normalize();
        let t = matrices[i].getTranslate();
        let matrix = q.rotationMatrix;
        
        matrix.m00 *= s.x;
        matrix.m01 *= s.x;
        matrix.m02 *= s.x;
        matrix.m10 *= s.y;
        matrix.m11 *= s.y;
        matrix.m12 *= s.y;
        matrix.m20 *= s.z;
        matrix.m21 *= s.z;
        matrix.m22 *= s.z;
        
        matrix.putTranslate(t);
        matrices[i] = matrix;
    }
  */
      if (!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL) {

        let flatMatrices = [];
        for (let i=0; i<matrices.length; i++) {
          Array.prototype.push.apply(flatMatrices, matrices[i].flattenAsArray());
        }

        if (matrices.length < 4) {
          let identityMatrices = [];
          for (let i=0; i<(4 - matrices.length); i++) {
            Array.prototype.push.apply(identityMatrices,
              [1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1]
            );
          }
          Array.prototype.push.apply(flatMatrices, identityMatrices);
        }
        skeletalMesh._jointMatrices = flatMatrices;

      } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL === 1) {
        {
          // no comporess

          skeletalMesh._qArray = new Float32Array(matrices.length * 4);
          skeletalMesh._tArray = new Float32Array(matrices.length * 4);

          for (let i=0; i<matrices.length; i++) {
            let m = matrices[i];
            let scale = new Vector3(
              Math.sqrt(m.m00*m.m00 + m.m01*m.m01 + m.m02*m.m02),
              Math.sqrt(m.m10*m.m10 + m.m11*m.m11 + m.m12*m.m12),
              Math.sqrt(m.m20*m.m20 + m.m21*m.m21 + m.m22*m.m22)
            );

            matrices[i].m00 /= scale.x;
            matrices[i].m01 /= scale.x;
            matrices[i].m02 /= scale.x;
            matrices[i].m10 /= scale.y;
            matrices[i].m11 /= scale.y;
            matrices[i].m12 /= scale.y;
            matrices[i].m20 /= scale.z;
            matrices[i].m21 /= scale.z;
            matrices[i].m22 /= scale.z;

            let q = (Quaternion.fromMatrix(matrices[i]));
            //q.normalize();
            skeletalMesh._qArray[i*4+0] = q.x;
            skeletalMesh._qArray[i*4+1] = q.y;
            skeletalMesh._qArray[i*4+2] = q.z;
            skeletalMesh._qArray[i*4+3] = q.w;
            let t = matrices[i].getTranslate();
            skeletalMesh._tArray[i*4+0] = t.x;
            skeletalMesh._tArray[i*4+1] = t.y;
            skeletalMesh._tArray[i*4+2] = t.z;
            skeletalMesh._tArray[i*4+3] = Math.max(scale.x, scale.y, scale.z);
           // console.log(scale);
          }
        }
      } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL > 1) {
        /*
        {
          // comporess quaternion only

          skeletalMesh._qArray = new Float32Array(matrices.length * 2);
          skeletalMesh._tArray = new Float32Array(matrices.length * 3);

          for (let i=0; i<matrices.length; i++) {
            let q = (Quaternion.fromMatrix(matrices[i]));
            q.normalize();
            let vec2QPacked = MathUtil.packNormalizedVec4ToVec2(q.x, q.y, q.z, q.w, 4096);
            skeletalMesh._qArray[i*2+0] = vec2QPacked[0];
            skeletalMesh._qArray[i*2+1] = vec2QPacked[1];
            let t = matrices[i].getTranslate();
            skeletalMesh._tArray[i*3+0] = t.x;
            skeletalMesh._tArray[i*3+1] = t.y;
            skeletalMesh._tArray[i*3+2] = t.z;
          }
        }
        */
        
        {
          // `OneVec4` Vertion comporess both of quaternion and traslation to Vec4
          skeletalMesh._qtArray = new Float32Array(matrices.length * 4);
          let tXArray = [];
          let tYArray = [];
          let tZArray = [];
          for (let i=0; i<matrices.length; i++) {
            let t = matrices[i].getTranslate();        
            tXArray.push(Math.abs(t.x));
            tYArray.push(Math.abs(t.y));
            tZArray.push(Math.abs(t.z));
          }

          skeletalMesh._translationScale = new Vector3();
          let maxX = Math.max.apply(null, tXArray);
          let maxY = Math.max.apply(null, tYArray);
          let maxZ = Math.max.apply(null, tZArray);
          skeletalMesh._translationScale.x = maxX*1.1;
          skeletalMesh._translationScale.y = maxY*1.1;
          skeletalMesh._translationScale.z = maxZ*1.1;

          // console.log('getScale are ...');
          for (let i=0; i<matrices.length; i++) {
            let s = matrices[i].getScale();
            // console.log(s.toString());


            let q = (Quaternion.fromMatrix(matrices[i]));
            q.normalize();
            let vec2QPacked = MathUtil.packNormalizedVec4ToVec2(q.x, q.y, q.z, q.w, 4096);
            let t = matrices[i].getTranslate();
            skeletalMesh._qtArray[i*4+0] = vec2QPacked[0];
            skeletalMesh._qtArray[i*4+1] = vec2QPacked[1];
            let vec2TPacked = MathUtil.packNormalizedVec4ToVec2(
              t.x/skeletalMesh._translationScale.x, t.y/skeletalMesh._translationScale.y,
              t.z/skeletalMesh._translationScale.z, 0.0, 4096);
              skeletalMesh._qtArray[i*4+2] = vec2TPacked[0];
              skeletalMesh._qtArray[i*4+3] = vec2TPacked[1];
          }
        }
        
      }    

    }

    drawIntermediate(gl, glslProgram, skeletalMesh, material) {
      if (skeletalMesh._jointMatrices === null && skeletalMesh._qtArray === null && skeletalMesh._qArray === null) {
        return;
      }
  /*
      var gl = this._glContext.gl;
      if (this._materials.length > 0) {
        var materials = this._materials;
      } else if (skeletalMesh.material){
        var materials = [skeletalMesh.material];
      } else {
        var materials = [];
      }
      */

  //    for (let i=0; i<materials.length;i++) {
        //var glslProgram = materials[i].shaderInstance.glslProgram;
  //      this._glContext.useProgram(glslProgram);
        
        if (!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL) {
          Shader.trySettingMatrix44ToUniform(gl, glslProgram, material, material._semanticsDic, 'JOINTMATRIX', new Float32Array(skeletalMesh._jointMatrices));
        } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL === 1) {
          Shader.trySettingVec4ArrayToUniform(gl, glslProgram, material, material._semanticsDic, 'JOINT_QUATERNION', skeletalMesh._qArray);
    //      Shader.trySettingVec2ArrayToUniform(gl, glslProgram, material, material._semanticsDic, 'JOINT_QUATERNION', skeletalMesh._qArray);
          Shader.trySettingVec4ArrayToUniform(gl, glslProgram, material, material._semanticsDic, 'JOINT_TRANSLATION', skeletalMesh._tArray);      
        } else if (GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL > 1) {
          
          // `OneVec4` Vertion [Begin]
          Shader.trySettingVec4ArrayToUniform(gl, glslProgram, material, material._semanticsDic, 'JOINT_QUATTRANSLATION', skeletalMesh._qtArray); // 
          this._glContext.uniform3f(material.getUniform(glslProgram, 'uniform_translationScale'),
          skeletalMesh._translationScale.x, skeletalMesh._translationScale.y, skeletalMesh._translationScale.z, true);
          // `OneVec4` Vertion [End]
          
        }
    //  }

      //super.draw(expression, lights, camera, skeletalMesh, scene, renderPass_index);
    }

    prepareToRender(expression, existCamera_f, pointLight, meshMaterial, skeletalMesh, shaderClassSpecified = void 0, argMaterials = void 0) {

      if (argMaterials !== void 0) {
        this._materialForSkeletals = argMaterials;
      } else {
        if (this._materials.length > 0) {
          this._materialForSkeletals = this._materials;
        } else if (meshMaterial) {
          this._materialForSkeletals = [meshMaterial];
        } else {
          this._materialForSkeletals = [this._defaultMaterial];
        }  
      }

        let derrivedClass = null;    
        if (!(this._materialForSkeletals[0].shaderInstance && this._materialForSkeletals[0].shaderInstance.constructor === FreeShader)) {
      
          let baseClass = null;
          if (shaderClassSpecified) {
            baseClass = shaderClassSpecified;
            class SkeletalShader extends baseClass {
              constructor(glBoostContext, basicShader) {
                super(glBoostContext, basicShader);
                SkeletalShader.mixin(SkeletalShaderSource);
              }
            }
            derrivedClass = SkeletalShader;
            this._skeletalShaderSpecified = derrivedClass;
          } else {
            for (let materialForSkeletal of this._materialForSkeletals) {
              
              baseClass = materialForSkeletal.shaderClass;
              class SkeletalShader extends baseClass {
                constructor(glBoostContext, basicShader) {
                  super(glBoostContext, basicShader);
                  SkeletalShader.mixin(SkeletalShaderSource);
                }
              }
              derrivedClass = SkeletalShader;
            }
            
            this._skeletalShaderNormal = derrivedClass;
          }

          for (let i = 0; i < this._materialForSkeletals.length; i++) {
            if (shaderClassSpecified) ; else {
              if (this._materialForSkeletals[i].shaderClass.name !== derrivedClass.name) {
                this._materialForSkeletals[i].shaderClass = derrivedClass;
              }
            }
          }
        }

        return super.prepareToRender(expression, existCamera_f, pointLight, meshMaterial, skeletalMesh, derrivedClass, argMaterials);
      }
  }

  class M_PerspectiveCamera extends M_AbstractCamera {
    constructor(glBoostContext, toRegister, lookat, perspective) {
      super(glBoostContext, toRegister);

      this._lowLevelCamera = new L_PerspectiveCamera(this, false, lookat, perspective);
      this._lowLevelCamera._middleLevelCamera = this;
    }

    // ===================== delegate to low level class ========================

    _needUpdateProjection() {
      this._lowLevelCamera._needUpdateProjection();
    }

    get updateCountAsCameraProjection() {
      return this._lowLevelCamera.updateCountAsCameraProjection;
    }

    projectionRHMatrix() {
      return this._lowLevelCamera.projectionRHMatrix();
    }

    set fovy(value) {
      this._lowLevelCamera.fovy = value;
    }

    get fovy() {
      return this._lowLevelCamera.fovy;
    }

    set aspect(value) {
      this._lowLevelCamera.aspect = value;
    }

    get aspect() {
      return this._lowLevelCamera.aspect;
    }

    set zNear(value) {
      this._lowLevelCamera.zNear = value;
    }

    get zNear() {
      return this._lowLevelCamera.zNear;
    }

    set zFar(value) {
      this._lowLevelCamera.zFar = value;
    }

    get zFar() {
      return this._lowLevelCamera.zFar;
    }

  }

  class M_FrustumCamera extends M_AbstractCamera {
    constructor(glBoostContext, toRegister, lookat, perspective) {
      super(glBoostContext, toRegister);

      this._lowLevelCamera = new L_FrustumCamera(this, false, lookat, perspective);
      this._lowLevelCamera._middleLevelCamera = this;
    }

    // ===================== delegate to low level class ========================

    _needUpdateProjection() {
      this._lowLevelCamera._needUpdateProjection();
    }

    get updateCountAsCameraProjection() {
      return this._lowLevelCamera.updateCountAsCameraProjection;
    }

    projectionRHMatrix() {
      return this._lowLevelCamera.projectionRHMatrix();
    }

    set left(value) {
      this._lowLevelCamera.left = value;
    }

    get left() {
      return this._lowLevelCamera.left;
    }

    set right(value) {
      this._lowLevelCamera.right = value;
    }

    get right() {
      return this._lowLevelCamera.right;
    }

    set top(value) {
      this._lowLevelCamera.top = value;
    }

    get top() {
      return this._lowLevelCamera.top;
    }

    set bottom(value) {
      this._lowLevelCamera.bottom = value;
    }

    get bottom() {
      return this._lowLevelCamera.bottom;
    }

    set zNear(value) {
      this._lowLevelCamera.zNear = value;
    }

    get zNear() {
      return this._lowLevelCamera.zNear;
    }

    set zFar(value) {
      this._lowLevelCamera.zFar = value;
    }

    get zFar() {
      return this._lowLevelCamera.zFar;
    }

    get aspect() {
      return (this._lowLevelCamera.right - this._lowLevelCamera.left) / (this._lowLevelCamera.top - this._lowLevelCamera.bottom);
    }
  }

  class M_OrthoCamera extends M_AbstractCamera {
    constructor(glBoostContext, toRegister, lookat, ortho) {
      super(glBoostContext, toRegister);

      this._lowLevelCamera = new L_OrthoCamera(this, false, lookat, ortho);
      this._lowLevelCamera._middleLevelCamera = this;
    }

    // ===================== delegate to low level class ========================

    _needUpdateProjection() {
      this._lowLevelCamera._needUpdateProjection();
    }

    get updateCountAsCameraProjection() {
      return this._lowLevelCamera.updateCountAsCameraProjection;
    }

    projectionRHMatrix() {
      return this._lowLevelCamera.projectionRHMatrix();
    }

    set left(value) {
      this._lowLevelCamera.left = value;
    }

    get left() {
      return this._lowLevelCamera.left;
    }

    set right(value) {
      this._lowLevelCamera.right = value;
    }

    get right() {
      return this._lowLevelCamera.right;
    }

    set bottom(value) {
      this._lowLevelCamera.bottom = value;
    }

    get bottom() {
      return this._lowLevelCamera.bottom;
    }

    set top(value) {
      this._lowLevelCamera.top = value;
    }

    get top() {
      return this._lowLevelCamera.top;
    }

    set zNear(value) {
      this._lowLevelCamera.zNear = value;
    }

    get zNear() {
      return this._lowLevelCamera.zNear;
    }

    set zFar(value) {
      this._lowLevelCamera.zFar = value;
    }

    get zFar() {
      return this._lowLevelCamera.zFar;
    }

    get aspect() {
      return (this._lowLevelCamera.right - this._lowLevelCamera.left) / (this._lowLevelCamera.top - this._lowLevelCamera.bottom);
    }
  }

  class Arrow extends Geometry {
    constructor(glBoostContext, length, lineCount = 1) {
      super(glBoostContext);

      this._setupVertexData(length, lineCount);
    }

    _setupVertexData(length, lineCount) {

      let arrowheadWidth = length/10;
      let arrowheadLength = length/7.5;
      let stickLength = length - arrowheadLength;
      let halfLength = length/2;

      let positions = [];

      for (let i=0; i<lineCount; i++) {
        let lineOffset = (i - lineCount/2) * arrowheadWidth;
        let lineOtherOffset = arrowheadWidth;
        if( ( i % 2 ) !== 1 ) {
          lineOtherOffset = -lineOtherOffset;
        }
        // Stick part
        positions.push(new Vector3(lineOtherOffset, lineOffset, halfLength));
        positions.push(new Vector3(lineOtherOffset, lineOffset, -stickLength+halfLength));

        // 1st line of a triangle
        positions.push(new Vector3(arrowheadWidth+lineOtherOffset, lineOffset, -stickLength+halfLength));
        positions.push(new Vector3(-arrowheadWidth+lineOtherOffset, lineOffset, -stickLength+halfLength));

        // 2nd line of a triangle
        positions.push(new Vector3(-arrowheadWidth+lineOtherOffset, lineOffset, -stickLength+halfLength));
        positions.push(new Vector3(lineOtherOffset, lineOffset, -length+halfLength));

        // 3rd line of a triangle
        positions.push(new Vector3(lineOtherOffset, lineOffset, -length+halfLength));
        positions.push(new Vector3(arrowheadWidth+lineOtherOffset, lineOffset, -stickLength+halfLength));
      }

      this.setVerticesData({
        position: positions
      }, null, GLBoost$1.LINES);
    }

  }

  GLBoost$1["Arrow"] = Arrow;

  class M_DirectionalLightGizmo extends M_Gizmo {
    constructor(glBoostContext, length) {
      super(glBoostContext, null, null);
      this._init(glBoostContext, length);

      this.isVisible = false;

      this.baseColor = new Vector4(0.8, 0.8, 0, 1);
    }

    _init(glBoostContext, length) {
      this._material = new ClassicMaterial$1(this._glBoostContext);
      this._mesh = new M_Mesh(glBoostContext,
        new Arrow(this._glBoostContext, length, 3),
        this._material);

      this.addChild(this._mesh);
    }

    set rotate(rotateVec3) {
      this._mesh.rotate = rotateVec3;
    }

    get rotate() {
      return this._mesh.rotate;
    }

    set baseColor(colorVec) {
      this._material.baseColor = colorVec;
    }

    get baseColor() {
      return this._material.baseColor;
    }
  }

  /**
   * [en] This is a Directional Light class.<br>
   * [ja] 平行光源クラスです。
   */
  class M_DirectionalLight extends M_AbstractLight {

    /**
     * The constructor of DirectionalLight class. 
     * @param {Vector4} intensity intensity as Vector4 Color
     */
    constructor(glBoostContext, intensity, rotate = new Vector3(0, 0, 0), length = 1.0) {
      super(glBoostContext);

      this._intensity = intensity;
      this._direction = new Vector3(0.0, 0.0, 1.0);
  //    this._direction = direction;

      this._gizmo = new M_DirectionalLightGizmo(glBoostContext, length);
      this._gizmos.push(this._gizmo);

      //this.direction = direction;
      this.rotate = rotate;

      //this._gizmo._mesh.masterElement = this._gizmo;
      this._isLightType = 'directional';
      
    }

    set multiplyMatrixGizmo(mat4) {
      this._gizmo.matrix = mat4;
    }

    get multiplyMatrixGizmo() {
      return this._gizmo.getMatrixNotAnimated();
    }

    set intensity(vec) {
      this._intensity = vec;
    }

    get intensity() {
      return this._intensity;
    }

    set rotate(vec3) {
      super.rotate = vec3;
      this._gizmo._mesh.rotate = vec3;

      this.callCameraCustomFunction();
    }

    set translate(vec3) {
      super.translate = vec3;
      this._gizmo._mesh.translate = vec3;

      this.callCameraCustomFunction();
    }

    get translate() {
      return this._gizmo.translate;
    }

    get rotate() {
      return super.rotate;
    }

    set matrix(vec3) {
      super.matrix = vec3;
      this._gizmo._mesh.matrix = vec3;

      this.callCameraCustomFunction();
    }

    get matrix() {
      return super.matrix;
    }

    set quaternion(vec3) {
      super.quaternion = vec3;
      this._gizmo._mesh.quaternion = vec3;

      this.callCameraCustomFunction();
    }

    get quaternion() {
      return super.quaternion;
    }

    callCameraCustomFunction() {
      if (this._camera) {
        if (this._camera.customFunction) {
          this._camera.customFunction(this);
        }
      }
    }
    
    set direction(_zDir) {
      let yDir = new Vector3(0, 1, 0);
      let xDir = Vector3.cross(yDir, _zDir);
      let zDir = Vector3.cross(xDir, yDir);
      
      let result = Matrix44$2.identity();

      result.m00 = xDir.x;
      result.m10 = xDir.y;
      result.m20 = xDir.z;
    
      result.m01 = yDir.x;
      result.m11 = yDir.y;
      result.m21 = yDir.z;
    
      result.m02 = zDir.x;
      result.m12 = zDir.y;
      result.m22 = zDir.z;
  /*

      result.m00 = xDir.x;
      result.m01 = xDir.y;
      result.m02 = xDir.z;

      result.m10 = yDir.x;
      result.m11 = yDir.y;
      result.m12 = yDir.z;

      result.m20 = zDir.x;
      result.m21 = zDir.y;
      result.m22 = zDir.z;
  */



      this.matrix = result;
      this._gizmo._mesh.matrix = result;

      this.callCameraCustomFunction();
    }


    get direction() {
      //return Matrix33.rotate(super.rotate).multiplyVector(this._direction);
      let result = super.quaternion.rotationMatrix33.multiplyVector(this._direction);
      return result;
    }

    get directionInWorld() {
      let direction = this.worldMatrixWithoutMySelf.multiplyVector(this.direction.toVector4()).toVector3();
      return direction;
    }

  }

  /**
   * This is a Ambient Light class.
   */
  class M_AmbientLight extends M_AbstractLight {

    /**
     * The constructor of PointLight class.
     * @param {Vector4} intensity intensity as Vector4 Color
     * @param {HTMLCanvas|string} canvas canvas or canvas' id string.
     */
    constructor(glBoostContext, intensity) {
      super(glBoostContext);

      this._intensity = intensity;
      this._isLightType = 'ambient';
    }

    set intensity(vec) {
      this._intensity = vec;
    }

    get intensity() {
      return this._intensity;
    }

  }

  /**
   * This is a Spot Light class.
   */
  class M_SpotLight extends M_AbstractLight {

    /**
     * The constructor of SpotLight class.
     * @param {Vector4} intensity intensity as Vector4 Color
     * @param {Vector4} direction the light (traveling) direction
     * @param {HTMLCanvas|string} canvas canvas or canvas' id string.
     */
    constructor(glBoostContext, intensity, rotate = new Vector3(0, 0, 0)) {
      super(glBoostContext);

      this._intensity = intensity;
      
      this._isLightType = 'spot';
      this._direction = new Vector3(0.0, 0.0, 1.0);

      this.rotate = rotate;

      this._spotExponent = 1.0;
      this._spotCutoffInDegree = 30;
      
    }

    set intensity(vec) {
      this._intensity = vec;
    }

    get intensity() {
      return this._intensity;
    }

    set direction(vec) {
      console.error("Not supported Now!");
    }

    get translate() {
      return this._gizmo.translate;
    }

    set rotate(vec3) {
      super.rotate = vec3;
    
      this.callCameraCustomFunction();
    }

    get rotate() {
      return super.rotate;
    }

    set matrix(vec3) {
      super.matrix = vec3;
      this._gizmo._mesh.matrix = vec3;

      this.callCameraCustomFunction();
    }

    get matrix() {
      return super.matrix;
    }

    set quaternion(vec3) {
      super.quaternion = vec3;
      this._gizmo._mesh.quaternion = vec3;

      this.callCameraCustomFunction();
    }

    get quaternion() {
      return super.quaternion;
    }

    callCameraCustomFunction() {
      if (this._camera) {
        if (this._camera.customFunction) {
          this._camera.customFunction(this);
        }
      }
    }

    set direction(_zDir) {
      let yDir = new Vector3(0, 1, 0);
      let xDir = Vector3.cross(yDir, _zDir);
      let zDir = Vector3.cross(xDir, yDir);
    
      let result = Matrix44.identity();

      
      result.m00 = xDir.x;
      result.m10 = xDir.y;
      result.m20 = xDir.z;
    
      result.m01 = yDir.x;
      result.m11 = yDir.y;
      result.m21 = yDir.z;
    
      result.m02 = zDir.x;
      result.m12 = zDir.y;
      result.m22 = zDir.z;
  /*

      result.m00 = xDir.x;
      result.m01 = xDir.y;
      result.m02 = xDir.z;

      result.m10 = yDir.x;
      result.m11 = yDir.y;
      result.m12 = yDir.z;

      result.m20 = zDir.x;
      result.m21 = zDir.y;
      result.m22 = zDir.z;
  */

      this.matrix = result;

      this.callCameraCustomFunction();
    }

    get direction() {
      let result = this.quaternion.rotationMatrix33.multiplyVector(this._direction);
      return result;
    }

    get directionInWorld() {
      let direction = this.worldMatrixWithoutMySelf.multiplyVector(this.direction.toVector4()).toVector3();
      return direction;
    }


    set spotExponent(val) {
      this._spotExponent = val;
    }

    get spotExponent() {
      return this._spotExponent;
    }

    set spotCutoffInDegree(val) {
      this._spotCutoffInDegree = val;
    }

    get spotCutoffInDegree() {
      return this._spotCutoffInDegree;
    }

    get spotCosCutoff() {
      return Math.cos(MathUtil.degreeToRadian(this._spotCutoffInDegree));
    }

  }

  class M_AxisGizmo extends M_Gizmo {
    constructor(glBoostContext, length) {
      super(glBoostContext);

      this._init(glBoostContext, length);
    }

    _init(glBoostContext, length) {
      let mesh = new M_Mesh(glBoostContext, new Axis(this._glBoostContext, length));
      this.addChild(mesh);
    }
  }

  class Grid extends Geometry {
    constructor(glBoostContext, length, division, isXZ, isXY, isYZ) {
      super(glBoostContext);

      this._setupVertexData(length, division, isXZ, isXY, isYZ);
    }

    _setupVertexData(length, division, isXZ, isXY, isYZ) {

      let positions = [];

      for (let i = 0; i<division*2+3; i++) {
        let start = -length;
        let oneUnitLength = length/(division + 1);

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

  }

  GLBoost$1["Grid"] = Grid;

  class M_GridGizmo extends M_Gizmo {
    constructor(glBoostContext, length, division, isXZ = true, isXY = false, isYZ = false, colorVec = new Vector4(0.5, 0.5, 0.5, 1)) {
      super(glBoostContext, null, null);
      this._init(glBoostContext, length, division, isXZ, isXY, isYZ, colorVec);
    }

    _init(glBoostContext, length, division, isXZ, isXY, isYZ, colorVec) {
      this._material = new ClassicMaterial$1(glBoostContext);
      this._material.baseColor = colorVec;
      this.addChild(new M_Mesh(glBoostContext, new Grid(glBoostContext, length, division, isXZ, isXY, isYZ, colorVec), this._material));
    }
  }

  class EffekseerElement extends M_Element {
    constructor(glBoostContext) {
      super(glBoostContext);
      this.__effect = null;
      this.__handle = null;
      this.__speed = 1;
    }

    load(uri, playJustAfterLoaded = false) {
      return new Promise((resolve, reject)=>{
        this.__effect = effekseer.loadEffect(uri, ()=>{
          if (playJustAfterLoaded) {
            this.play();
          }
          resolve(this.__effect);
        });
      })
    }

    play() {
      // Play the loaded effect
      this.__handle = effekseer.play(this.__effect);
  //            handle.setScale(1, 1, 1);
      this.__handle.setLocation(this.translate.x, this.translate.y, this.translate.z);
      this.__handle.setRotation(this.rotate.x, this.rotate.y, this.rotate.z);
      this.__handle.setScale(this.scale.x, this.scale.y, this.scale.z);
      this.__handle.setSpeed(this.__speed);
      //handle.setMatrix((new GLBoost.Matrix44()).scale(0.01, 0.01, 0.01));
  //    this.__handle.setSpeed(0.2);
    }

    set playSpeed(val) {
      if (this.__handle) {
        this.__handle.setSpeed(val);
      }
      this.__speed = val;
    }

    get playSpeed() {
      return this.__speed;
    }

    set translate(vec) {
      if (this.__handle) {
        this.__handle.setLocation(vec.x, vec.y, vec.z);      
      }
      super.translate = vec;
    }

    get translate() {
      return super.translate;
    }

    set rotate(vec) {
      if (this.__handle) {
        this.__handle.setRotation(vec.x, vec.y, vec.z);      
      }
      super.rotate = vec;
    }

    get rotate() {
      return super.rotate;
    }

    set scale(vec) {
      if (this.__handle) {
        this.__handle.setScale(vec.x, vec.y, vec.z);      
      }
      super.scale = vec;
    }

    get scale() {
      return super.scale;
    }

  }

  class M_ScreenMesh extends M_Mesh {
    constructor(glBoostContext, customVertexAttributes) {
      super(glBoostContext, null, null);
      this._init(customVertexAttributes);
    }

    _init(customVertexAttributes) {
      let gl = this._glContext.gl;
      this.geometry = new Screen(this._glBoostContext, void 0, customVertexAttributes);
      this.isAffectedByWorldMatrix = false;
      this.isAffectedByViewMatrix = false;
      this.isAffectedByProjectionMatrix = false;

      let material = new ClassicMaterial$1(this._glBoostContext);
      material.globalStatesUsage = GLBoost.GLOBAL_STATES_USAGE_IGNORE;
      material.states = {
        "enable": [
          gl.BLEND
        ],
        "functions": {
          "blendFuncSeparate": [
            770, // SRC_ALPHA
            771, // ONE MINUS SRC_ALPHA
            1,   // ONE
            1    // ONE
          ]
        }
      };
      this.geometry.materials = [material];
      this._material = material;
    }

    set material(obj) {
      this._material = obj;
      this.geometry.materials = [obj];
    }

    get material() {
      return this._material;
    }

  }


  GLBoost["M_ScreenMesh"] = M_ScreenMesh;

  class GLBoostMiddleContext extends GLBoostLowContext {
    constructor(canvas, initParameter, gl, width, height) {
      super(canvas, initParameter, gl, width, height);

      this._glBoostMonitor = M_GLBoostMonitor.getInstance();
    }

    createScene() {
      return new M_Scene(this);
    }

    createGroup() {
      return new M_Group(this);
    }

    createMesh(geometry, material) {
      return new M_Mesh(this, geometry, material);
    }

    createSkeletalMesh(geometry, material, rootJointName) {
      return new M_SkeletalMesh(this, geometry, material, rootJointName);
    }

    createSkeletalGeometry() {
      return new M_SkeletalGeometry(this);
    }

    createRenderer(parameters) {
      return new Renderer(this, parameters);
    }

    createExpression() {
      return this.createExpressionAndRenderPasses(1);
    }

    createExpressionAndRenderPasses(number) {
      var expression = new Expression(this);
      var renderPasses = this.createRenderPasses(number);
      expression.addRenderPasses(renderPasses);

      return expression;
    }

    createRenderPasses(number) {
      var renderPasses = [];
      for (let i=0; i<number; i++) {
        renderPasses.push(new RenderPass(this));
      }

      return renderPasses;
    }

    createPerspectiveCamera(lookat, perspective) {
      return new M_PerspectiveCamera(this, true, lookat, perspective);
    }

    createFrustumCamera(lookat, perspective) {
      return new M_FrustumCamera(this, true, lookat, perspective);
    }

    createOrthoCamera(lookat, ortho) {
      return new M_OrthoCamera(this, true, lookat, ortho);
    }

    createDirectionalLight(intensity, rotate, length) {
      return new M_DirectionalLight(this, intensity, rotate, length);
    }

    createPointLight(intensity) {
      return new M_PointLight(this, intensity);
    }

    createAmbientLight(intensity) {
      return new M_AmbientLight(this, intensity);
    }

    createSpotLight(intensity, rotate) {
      return new M_SpotLight(this, intensity, rotate);
    }

    createJoint(isExistJointGizmo) {
      return new M_Joint(this, isExistJointGizmo);
    }

    createAxisGizmo(length) {
      return new M_AxisGizmo(this, length);
    }

    createGridGizmo(length, division, isXZ, isXY, isYZ, colorVec) {
      return new M_GridGizmo(this, length, division, isXZ, isXY, isYZ, colorVec);
    }

    createEffekseerElement() {
      return new EffekseerElement(this);
    }

    createScreenMesh(customVertexAttributes) {
      return new M_ScreenMesh(this, customVertexAttributes);
    }

  }

  GLBoost['GLBoostMiddleContext'] = GLBoostMiddleContext;

  class PhongShaderSource {

    FSDefine_PhongShaderSource(in_, f, lights) {
      var shaderText = '';
      shaderText += `uniform vec4 Kd;\n`;
      shaderText += `uniform vec4 Ks;\n`;
      shaderText += `uniform float power;\n`;
      shaderText += 'uniform vec4 ambient;\n'; // Ka * amount of ambient lights    
      var sampler2D = this._sampler2DShadow_func();

      let lightNumExceptAmbient = lights.filter((light)=>{return !light.isTypeAmbient();}).length;    
      if (lightNumExceptAmbient > 0) {
        shaderText += `uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;
        shaderText += `${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;
        shaderText += `uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;
      }

      return shaderText;
    }

    FSShade_PhongShaderSource(f, gl, lights) {
      var shaderText = '';

      shaderText += '  float depthBias = 0.005;\n';
      shaderText += '  vec4 surfaceColor = rt0;\n';
      shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';

      for (let i=0; i<lights.length; i++) {
        let light = lights[i];      
        let isShadowEnabledAsTexture = (light.camera && light.camera.texture) ? true:false;
        shaderText += `  {\n`;
        shaderText +=      Shader._generateLightStr(i);
        shaderText +=      Shader._generateShadowingStr(gl, i, isShadowEnabledAsTexture);
        shaderText += `    float diffuse = max(dot(lightDirection, normal), 0.0);\n`;
        shaderText += `    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n`;
        shaderText += `    vec3 viewDirection = normalize(viewPosition_world - v_position_world);\n`;
        shaderText += `    vec3 reflect = reflect(-lightDirection, normal);\n`;
        shaderText += `    float specular = pow(max(dot(reflect, viewDirection), 0.0), power);\n`;
        shaderText += `    rt0 += spotEffect * vec4(visibilitySpecular, visibilitySpecular, visibilitySpecular, 1.0) * Ks * lightDiffuse[${i}] * vec4(specular, specular, specular, 1.0);\n`;
        shaderText += `  }\n`;
  //    shaderText += '  rt0 *= (1.0 - shadowRatio);\n';
        //shaderText += '  rt0.a = 1.0;\n';
      }
      shaderText += '  rt0.xyz += ambient.xyz;\n';
      /*
      shaderText += 'if ( isWireframe ) {\n';
      shaderText += '  if ( barycentricCoord[0] > wireframeThicknessThreshold && barycentricCoord[1] > wireframeThicknessThreshold && barycentricCoord[2] > wireframeThicknessThreshold ) {\n';
      shaderText += '  } else {\n';
      shaderText += '    rt0.xyz = grayColor;\n';
      shaderText += '  }\n';
      shaderText += '}\n';

  //    shaderText += '  rt0 *= (1.0 - shadowRatio);\n';
      //shaderText += '  rt0.a = 1.0;\n';

  */

      return shaderText;
    }

    prepare_PhongShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      material.setUniform(shaderProgram, 'uniform_Kd', this._glContext.getUniformLocation(shaderProgram, 'Kd'));
      material.setUniform(shaderProgram, 'uniform_Ks', this._glContext.getUniformLocation(shaderProgram, 'Ks'));
      material.setUniform(shaderProgram, 'uniform_power', this._glContext.getUniformLocation(shaderProgram, 'power'));

      material.setUniform(shaderProgram, 'uniform_ambient', this._glContext.getUniformLocation(shaderProgram, 'ambient'));    

      return vertexAttribsAsResult;
    }
  }



  class PhongShader extends DecalShader {
    constructor(glBoostContext, basicShader) {

      super(glBoostContext, basicShader);
      PhongShader.mixin(PhongShaderSource);

      this._power = 64.0;

    }

    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);

      var Kd = material.diffuseColor;
      var Ks = material.specularColor;
      let Ka = material.ambientColor;
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_Kd'), Kd.x, Kd.y, Kd.z, Kd.w, true);
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_Ks'), Ks.x, Ks.y, Ks.z, Ks.w, true);
      this._glContext.uniform1f(material.getUniform(glslProgram, 'uniform_power'), this._power, true);

      let ambient = Vector4.multiplyVector(Ka, scene.getAmountOfAmbientLightsIntensity());
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_ambient'), ambient.x, ambient.y, ambient.z, ambient.w, true);    

    }

    set Kd(value) {
      this._Kd = value;
    }

    get Kd() {
      return this._Kd;
    }

    set Ks(value) {
      this._Ks = value;
    }

    get Ks() {
      return this._Ks;
    }

    set power(value) {
      this._power = value;
    }

    get power() {
      return this._power;
    }
  }

  GLBoost['PhongShader'] = PhongShader;

  let singleton$4 = Symbol();
  let singletonEnforcer$2 = Symbol();

  /**
   * [en] This is a loader class of Obj file format.<br>
   * [ja] Objファイルを読み込むためのローダークラスです。
   */
  class ObjLoader {

    /**
     * [en] The constructor of ObjLoader class. But you cannot use this constructor directly because of this class is a singleton class. Use getInstance() static method.<br>
     * [ja] ObjLoaderクラスのコンストラクタです。しかし本クラスはシングルトンであるため、このコンストラクタは直接呼び出せません。getInstance()静的メソッドを使ってください。
     * @param {Symbol} enforcer [en] a Symbol to forbid calling this constructor directly [ja] このコンストラクタの直接呼び出しを禁止するためのシンボル
     */
    constructor(enforcer) {
      if (enforcer !== singletonEnforcer$2) {
        throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");
      }
    }

    /**
     * [en] The static method to get singleton instance of this class.<br>
     * [ja] このクラスのシングルトンインスタンスを取得するための静的メソッド。
     * @return {ObjLoader} [en] the singleton instance of ObjLoader class [ja] ObjLoaderクラスのシングルトンインスタンス
     */
    static getInstance() {
      if (!this[singleton$4]) {
        this[singleton$4] = new ObjLoader(singletonEnforcer$2);
      }
      return this[singleton$4];
    }

    /**
     * [en] the method to load Obj file.<br>
     * [ja] Obj fileをロードするためのメソッド。
     * @param {string} url [en] url of glTF file [ja] Objファイルのurl
     * @param {Shader} defaultShader [en] a shader to assign to loaded geometries [ja] 読み込んだジオメトリに適用するシェーダー
     * @param {string} mtlString [en] string of mtl file (optional) [ja] mtlファイルの内容の文字列情報（オプショナル。mtlファイルの読み込みが何らかの事情でできない場合に使います）
     * @param {HTMLCanvas|string} canvas [en] canvas or canvas' id string. [ja] canvasまたはcanvasのid文字列
     * @return {Promise} [en] a promise object [ja] Promiseオブジェクト
     */
    loadObj(glBoostContext, url, defaultShader = null, mtlString = null) {
      return DataUtil.loadResourceAsync(url, false, (resolve, responseText)=>{
        let gotText = responseText;
        let partsOfPath = url.split('/');
        let basePath = '';
        for(let i=0; i<partsOfPath.length-1; i++) {
          basePath += partsOfPath[i] + '/';
        }
        this._constructMesh(glBoostContext, gotText, basePath, defaultShader, mtlString, resolve);
      }, (reject, err)=>{

      });

    }

    _loadMaterialsFromString(glBoostContext, mtlString, defaultShader, basePath = '', resolve) {

      var mtlTextRows = mtlString.split('\n');

      var numMaterial = 0;
      // checking the number of material
      for (let i=0; i<mtlTextRows.length; i++) {
        let matchArray = mtlTextRows[i].match(/^(\w+) (\w+)/);
        if (matchArray === null) {
          continue;
        }

        if (matchArray[1] === "newmtl")
        {
          numMaterial++;
        }
      }

      var materials = new Array(numMaterial);
      var iMCount = -1;


      let promisesToLoadTexture = [];
      // main loading
      for (let i=0; i<mtlTextRows.length; i++) {
        let matchArray = mtlTextRows[i].match(/(\w+) ([\w:\/\-\.]+)/);

        if (matchArray === null) {
          continue;
        }

        if (matchArray[1] === "newmtl")
        {
          iMCount++;
          materials[iMCount] = glBoostContext.createClassicMaterial();
          if (defaultShader) {
            materials[iMCount].shaderClass = defaultShader;
          } else {
            materials[iMCount].shaderClass = PhongShader;
          }
          materials[iMCount].name = matchArray[2];
        }

        if (matchArray[1].toLowerCase() === "ka")
        {
          matchArray = mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
          materials[iMCount].ambientColor.x = parseFloat(matchArray[2]);
          materials[iMCount].ambientColor.y = parseFloat(matchArray[3]);
          materials[iMCount].ambientColor.z = parseFloat(matchArray[4]);
        }

        if (matchArray[1].toLowerCase() === "kd")
        {
          matchArray = mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
          materials[iMCount].diffuseColor.x = parseFloat(matchArray[2]);
          materials[iMCount].diffuseColor.y = parseFloat(matchArray[3]);
          materials[iMCount].diffuseColor.z = parseFloat(matchArray[4]);
        }

        if (matchArray[1].toLowerCase() === "ks")
        {
          matchArray = mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);
          materials[iMCount].specularColor.x = parseFloat(matchArray[2]);
          materials[iMCount].specularColor.y = parseFloat(matchArray[3]);
          materials[iMCount].specularColor.z = parseFloat(matchArray[4]);
        }

        if (matchArray[1].toLowerCase() === "map_kd")
        {
          matchArray = mtlTextRows[i].match(/(\w+) ([\w:\/\-\.]+)/);
          var texture = glBoostContext.createTexture(null, matchArray[2], {'UNPACK_FLIP_Y_WEBGL': true});
          let promise = texture.generateTextureFromUri(basePath + matchArray[2], false);
          promisesToLoadTexture.push(promise);
          materials[iMCount].setTexture(texture);
        }
      }

      let promiseAll = Promise.all(promisesToLoadTexture);
      promiseAll.then(()=>{
        resolve(materials);
      });
    }

    _loadMaterialsFromFile(glBoostContext, basePath, fileName, defaultShader) {
      return DataUtil.loadResourceAsync(basePath + fileName, false,
        (resolve, responseText)=>{
          this._loadMaterialsFromString(glBoostContext, responseText, defaultShader, basePath, resolve);
        },
        (reject, err)=>{}
        );
    }

    _constructMesh(glBoostContext, objText, basePath, defaultShader, mtlString, resolve) {

      //console.log(basePath);

      var objTextRows = objText.split('\n');
      var promise = null;
      let vCount = 0;
      let fCount = 0;
      let vnCount = 0;
      let vtCount = 0;

      if (mtlString) {
        promise = (()=>{
          return new Promise((resolve, reject)=> {
            this._loadMaterialsFromString(glBoostContext, mtlString, defaultShader, '', resolve);
          });
        })();
      }

      for (let i=0; i<objTextRows.length; i++) {
        let matchArray = objTextRows[i].match(/^(\w+) (\w+)/);
        if (matchArray === null) {
          continue;
        }

        // material file
        if (matchArray[1] === "mtllib" && mtlString === null) {
          promise = this._loadMaterialsFromFile(glBoostContext, basePath, matchArray[2] + '.mtl', defaultShader);
        }
      }

      promise.then((materials)=>{
        for (let i=0; i<objTextRows.length; i++) {
          let matchArray = objTextRows[i].match(/^(\w+) +(\w+)/);
          if (matchArray === null) {
            continue;
          }

          // Vertex
          if (matchArray[1] === "v")
          {
            vCount++;
          }
          // Vertex Normal
          if (matchArray[1] === "vn")
          {
            vnCount++;
          }
          // Texcoord
          if (matchArray[1] === "vt")
          {
            vtCount++;
          }
          // Face
          if (matchArray[1] === "f")
          {
            matchArray = objTextRows[i].match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
            if (matchArray !== null) { // if this is a Quad Polygon
              fCount += 2;
            } else {
              fCount++;
            }
          }
        }

        var pvCoord=new Array(vCount);
        var pvNormal=new Array(vnCount);
        var pvTexture=new Array(vtCount);

        vCount = 0;
        vnCount = 0;
        vtCount = 0;

        for (let i=0; i<objTextRows.length; i++) {
          //キーワード 読み込み
          let matchArray = objTextRows[i].match(/^(\w+) /);

          if (matchArray === null) {
            continue;
          }

          //頂点 読み込み
          if (matchArray[1] === "v")
          {
            matchArray = objTextRows[i].match(/^(\w+) +(-?[0-9\.]+) (-?[0-9\.]+) (-?[0-9\.]+)/);
  //          pvCoord[vCount].x=-x;//OBJは右手、Direct3Dは左手座標系。
            pvCoord[vCount] = new Vector3();
            pvCoord[vCount].x = parseFloat(matchArray[2]);
            pvCoord[vCount].y = parseFloat(matchArray[3]);
            pvCoord[vCount].z = parseFloat(matchArray[4]);
            vCount++;
          }

          //法線 読み込み
          if (matchArray[1] === "vn")
          {
            matchArray = objTextRows[i].match(/^(\w+) (-?[0-9\.]+) (-?[0-9\.]+) (-?[0-9\.]+)/);
  //          pvNormal[vnCount].x=-x;//OBJは右手、Direct3Dは左手座標系。
            pvNormal[vnCount] = new Vector3();
            pvNormal[vnCount].x = parseFloat(matchArray[2]);
            pvNormal[vnCount].y = parseFloat(matchArray[3]);
            pvNormal[vnCount].z = parseFloat(matchArray[4]);
            vnCount++;
          }

          //テクスチャー座標 読み込み
          if (matchArray[1] === "vt")
          {
            matchArray = objTextRows[i].match(/^(\w+) (-?[0-9\.]+) (-?[0-9\.]+)/);
            pvTexture[vtCount] = new Vector2();
            pvTexture[vtCount].x = parseFloat(matchArray[2]);
            pvTexture[vtCount].y = parseFloat(matchArray[3]);
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

        var geometry = glBoostContext.createGeometry();

        for(let i=0; i<materials.length; i++) {
          let matIndices = new Array();
          let tmpIndices = new Array();
          let tmpPositions = new Array();
          let tmpTexcoords = new Array();
          let tmpNormals = new Array();

          let _i = 0;
          for (let j=0; (j<objTextRows.length) && (fCount < FaceN); j++) {
            let matchArray = objTextRows[j].match(/^(\w+) (\w+)/);

            if (matchArray === null) {
              continue;
            }

            if (matchArray[1] === "usemtl") {
              if (matchArray[2] === materials[i].name) {
                boFlag = true;
              } else {
                boFlag = false;
              }
            }

            if (matchArray[1] === "f" && boFlag) {
              let isQuad = true;
              let matchArray = objTextRows[j].match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);   if (matchArray === null) {
                matchArray = objTextRows[j].match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
              }
              if (matchArray === null) {
                isQuad = false;
              }




              if(materials[i].hasAnyTextures()) {
                if (isQuad) {
                  this._addQuadDataToArraysWithTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                } else {
                  this._addTriangleDataToArraysWithTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                }
              } else {
                if (isQuad) {
                  this._addQuadDataToArraysWithoutTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                } else {
                  this._addTriangleDataToArraysWithoutTexture(tmpPositions, tmpNormals, tmpTexcoords, pvCoord, pvNormal, pvTexture, objTextRows[j], fCount);
                }
              }

              _i = this._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount*3, matIndices, tmpIndices, _i);
              _i = this._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount*3+1, matIndices, tmpIndices, _i);
              _i = this._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount*3+2, matIndices, tmpIndices, _i);

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
                _i = this._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount*3+3, matIndices, tmpIndices, _i);
                _i = this._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount*3+4, matIndices, tmpIndices, _i);
                _i = this._reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, fCount*3+5, matIndices, tmpIndices, _i);
                fCount += 2;
              } else {
                fCount++;
              }

            }
          }

          if (fCount === 0)//使用されていないマテリアル対策
          {
            continue;
          }

  //        materials[i].setVertexN(geometry, partFCount*3);
          materials[i].setVertexN(geometry, matIndices.length);

          //indices[i] = iFaceBufferArray.concat();
          indices[i] = matIndices.concat();

        }

        var mesh = glBoostContext.createMesh(geometry, null);
        geometry.materials = materials;
        geometry.setVerticesData({
          position: positions,
          texcoord: texcoords,
          normal: normals
        }, indices);

        resolve(mesh);
      }).catch(function onRejected(error){
        console.error(error);
      });

    }

    _reductionVertices(positions, normals, texcoords, tmpPositions, tmpNormals, tmpTexcoords, vCount, matIndices, tmpIndices, _i) {
      var str = '' + tmpPositions[vCount].x + ',' + tmpPositions[vCount].y + ',' + tmpPositions[vCount].z +
        ',' + tmpNormals[vCount].x + ',' + tmpNormals[vCount].y + ',' + tmpNormals[vCount].z +
        ',' + tmpTexcoords[vCount].x + ',' + tmpTexcoords[vCount].y;

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

    _addTriangleDataToArraysWithTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount)
    {
      var v1=0,v2=0,v3=0;
      var vn1=0,vn2=0,vn3=0;
      var vt1=0,vt2=0,vt3=0;
      let matchArray = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);

      if(matchArray !== null) {
        v1 = matchArray[2];
        vt1 = matchArray[3];
        vn1 = matchArray[4];
        v2 = matchArray[5];
        vt2 = matchArray[6];
        vn2 = matchArray[7];
        v3 = matchArray[8];
        vt3 = matchArray[9];
        vn3 = matchArray[10];
        positions[fCount*3] = pvCoord[v1-1];
        positions[fCount*3+1] = pvCoord[v2-1];
        positions[fCount*3+2] = pvCoord[v3-1];
        normals[fCount*3] = pvNormal[vn1-1];
        normals[fCount*3+1] = pvNormal[vn2-1];
        normals[fCount*3+2] = pvNormal[vn3-1];
        texcoords[fCount*3] = pvTexture[vt1-1];
        texcoords[fCount*3+1] = pvTexture[vt2-1];
        texcoords[fCount*3+2] = pvTexture[vt3-1];
      } else {
        let matchArray = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
        v1 = matchArray[2];
        vn1 = matchArray[3];
        v2 = matchArray[4];
        vn2 = matchArray[5];
        v3 = matchArray[6];
        vn3 = matchArray[7];
        positions[fCount*3] = pvCoord[v1-1];
        positions[fCount*3+1] = pvCoord[v2-1];
        positions[fCount*3+2] = pvCoord[v3-1];
        normals[fCount*3] = pvNormal[vn1-1];
        normals[fCount*3+1] = pvNormal[vn2-1];
        normals[fCount*3+2] = pvNormal[vn3-1];
      }
    }

    _addTriangleDataToArraysWithoutTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount)
    {
      var v1=0,v2=0,v3=0;
      var vn1=0,vn2=0,vn3=0;
      var vt1=0,vt2=0,vt3=0;
      let matchArray = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);

      if(matchArray !== null) {
        v1 = matchArray[2];
        vn1 = matchArray[3];
        v2 = matchArray[4];
        vn2 = matchArray[5];
        v3 = matchArray[6];
        vn3 = matchArray[7];

        positions[fCount*3] = pvCoord[v1-1];
        positions[fCount*3+1] = pvCoord[v2-1];
        positions[fCount*3+2] = pvCoord[v3-1];
        normals[fCount*3] = pvNormal[vn1-1];
        normals[fCount*3+1] = pvNormal[vn2-1];
        normals[fCount*3+2] = pvNormal[vn3-1];
      } else {
        let matchArray = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
        v1 = matchArray[2];
        vt1 = matchArray[3];
        vn1 = matchArray[4];
        v2 = matchArray[5];
        vt2 = matchArray[6];
        vn2 = matchArray[7];
        v3 = matchArray[8];
        vt3 = matchArray[9];
        vn3 = matchArray[10];

        positions[fCount*3] = pvCoord[v1-1];
        positions[fCount*3+1] = pvCoord[v2-1];
        positions[fCount*3+2] = pvCoord[v3-1];
        normals[fCount*3] = pvNormal[vn1-1];
        normals[fCount*3+1] = pvNormal[vn2-1];
        normals[fCount*3+2] = pvNormal[vn3-1];
        texcoords[fCount*3] = pvTexture[vt1-1];
        texcoords[fCount*3+1] = pvTexture[vt2-1];
        texcoords[fCount*3+2] = pvTexture[vt3-1];
      }
    }

    _addQuadDataToArraysWithTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount)
    {
      var v1=0,v2=0,v3=0,v4=0;
      var vn1=0,vn2=0,vn3=0,vn4=0;
      var vt1=0,vt2=0,vt3=0,vt4=0;
      let matchArray = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);

      if(matchArray !== null) {
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

        positions[fCount*3] = pvCoord[v1-1];
        normals[fCount*3] = pvNormal[vn1-1];
        texcoords[fCount*3] = pvTexture[vt1-1];
        positions[fCount*3+1] = pvCoord[v2-1];
        normals[fCount*3+1] = pvNormal[vn2-1];
        texcoords[fCount*3+1] = pvTexture[vt2-1];
        positions[fCount*3+2] = pvCoord[v3-1];
        normals[fCount*3+2] = pvNormal[vn3-1];
        texcoords[fCount*3+2] = pvTexture[vt3-1];

        positions[fCount*3+3] = pvCoord[v3-1];
        normals[fCount*3+3] = pvNormal[vn3-1];
        texcoords[fCount*3+3] = pvTexture[vt3-1];
        positions[fCount*3+4] = pvCoord[v4-1];
        normals[fCount*3+4] = pvNormal[vn4-1];
        texcoords[fCount*3+4] = pvTexture[vt4-1];
        positions[fCount*3+5] = pvCoord[v1-1];
        normals[fCount*3+5] = pvNormal[vn1-1];
        texcoords[fCount*3+5] = pvTexture[vt1-1];

      } else {
        let matchArray = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
        v1 = matchArray[2];
        vn1 = matchArray[3];
        v2 = matchArray[4];
        vn2 = matchArray[5];
        v3 = matchArray[6];
        vn3 = matchArray[7];
        v4 = matchArray[8];
        vn4 = matchArray[9];

        positions[fCount*3] = pvCoord[v1-1];
        normals[fCount*3] = pvNormal[vn1-1];
        positions[fCount*3+1] = pvCoord[v2-1];
        normals[fCount*3+1] = pvNormal[vn2-1];
        positions[fCount*3+2] = pvCoord[v3-1];
        normals[fCount*3+2] = pvNormal[vn3-1];

        positions[fCount*3+3] = pvCoord[v3-1];
        normals[fCount*3+3] = pvNormal[vn3-1];
        positions[fCount*3+4] = pvCoord[v4-1];
        normals[fCount*3+4] = pvNormal[vn4-1];
        positions[fCount*3+5] = pvCoord[v1-1];
        normals[fCount*3+5] = pvNormal[vn1-1];
      }
    }

    _addQuadDataToArraysWithoutTexture(positions, normals, texcoords, pvCoord, pvNormal, pvTexture, stringToScan, fCount)
    {
      var v1=0,v2=0,v3=0,v4=0;
      var vn1=0,vn2=0,vn3=0,vn4=0;
      var vt1=0,vt2=0,vt3=0,vt4=0;
      let matchArray = stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);
      if(matchArray !== null) {
        v1 = matchArray[2];
        vn1 = matchArray[3];
        v2 = matchArray[4];
        vn2 = matchArray[5];
        v3 = matchArray[6];
        vn3 = matchArray[7];
        v4 = matchArray[8];
        vn4 = matchArray[9];
        positions[fCount*3] = pvCoord[v1-1];
        normals[fCount*3] = pvNormal[vn1-1];
        positions[fCount*3+1] = pvCoord[v2-1];
        normals[fCount*3+1] = pvNormal[vn2-1];
        positions[fCount*3+2] = pvCoord[v3-1];
        normals[fCount*3+2] = pvNormal[vn3-1];

        positions[fCount*3+3] = pvCoord[v3-1];
        normals[fCount*3+3] = pvNormal[vn3-1];
        positions[fCount*3+4] = pvCoord[v4-1];
        normals[fCount*3+4] = pvNormal[vn4-1];
        positions[fCount*3+5] = pvCoord[v1-1];
        normals[fCount*3+5] = pvNormal[vn1-1];
      } else {
        let matchArray = stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);
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

        positions[fCount*3] = pvCoord[v1-1];
        normals[fCount*3] = pvNormal[vn1-1];
        texcoords[fCount*3] = pvTexture[vt1-1];
        positions[fCount*3+1] = pvCoord[v2-1];
        normals[fCount*3+1] = pvNormal[vn2-1];
        texcoords[fCount*3+1] = pvTexture[vt2-1];
        positions[fCount*3+2] = pvCoord[v3-1];
        normals[fCount*3+2] = pvNormal[vn3-1];
        texcoords[fCount*3+2] = pvTexture[vt3-1];

        positions[fCount*3+3] = pvCoord[v3-1];
        normals[fCount*3+3] = pvNormal[vn3-1];
        texcoords[fCount*3+3] = pvTexture[vt3-1];
        positions[fCount*3+4] = pvCoord[v4-1];
        normals[fCount*3+4] = pvNormal[vn4-1];
        texcoords[fCount*3+4] = pvTexture[vt4-1];
        positions[fCount*3+5] = pvCoord[v1-1];
        normals[fCount*3+5] = pvNormal[vn1-1];
        texcoords[fCount*3+5] = pvTexture[vt1-1];
      }
    }
  }



  GLBoost$1["ObjLoader"] = ObjLoader;

  (function(){
    GLBoost$1.valueOfGLBoostConstants = [];
    let defineValueOfGLBoostConstants = (glboostConstant_or_glboostConstantValueName, value)=> {
      if (isFinite(glboostConstant_or_glboostConstantValueName)) {
        let glboostConstant = glboostConstant_or_glboostConstantValueName;
        let glboostConstantName = GLBoost$1.getNameOfGLBoostConstant(glboostConstant);
        if (glboostConstantName) {
          let glboostConstantValueName = 'VALUE_' + glboostConstantName;
          Object.defineProperty(GLBoost$1, glboostConstantValueName, {
            get: function () {

              return this.valueOfGLBoostConstants[glboostConstant];
            },
            set: function (flg) {
              this.valueOfGLBoostConstants[glboostConstant] = flg;
            },
          });
          GLBoost$1[glboostConstantValueName] = value;
        }
      } else {
        let glboostConstantValueName = glboostConstant_or_glboostConstantValueName;
        GLBoost$1[glboostConstantValueName] = value;
      }
    };

    /// define value of GLBoost global settings.
    let define = defineValueOfGLBoostConstants;
    define('VALUE_TARGET_WEBGL_VERSION', 1);
    define('VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL', 0);
    define('VALUE_DEFAULT_POINTLIGHT_INTENSITY', new Vector3(1, 1, 1));
    define('VALUE_ANGLE_UNIT', GLBoost$1.DEGREE);
    define('VALUE_WEBGL_ONE_USE_EXTENSIONS', true);
    define('VALUE_CONSOLE_OUT_FOR_DEBUGGING', false);
    define(GLBoost$1.LOG_GENERAL, true);
    define(GLBoost$1.LOG_SHADER_CODE, true);
    define(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE, true);
    define(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE, true);
    define(GLBoost$1.LOG_GL_ERROR, true);
    define(GLBoost$1.LOG_OMISSION_PROCESSING, false);
  })();

  class LambertShaderSource {

    FSDefine_LambertShaderSource(in_, f, lights) {
      
      var sampler2D = this._sampler2DShadow_func();
      var shaderText = '';
      shaderText += 'uniform vec4 Kd;\n';
      shaderText += 'uniform vec4 ambient;\n'; // Ka * amount of ambient lights

      let lightNumExceptAmbient = lights.filter((light)=>{return !light.isTypeAmbient();}).length;
      if (lightNumExceptAmbient > 0) {
        shaderText += `uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;
        shaderText += `uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;
      }

      return shaderText;
    }

    FSShade_LambertShaderSource(f, gl, lights) {
      var shaderText = '';

      shaderText += '  vec4 surfaceColor = rt0;\n';
      shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
      
      for (let i=0; i<lights.length; i++) {
        let light = lights[i];
        let isShadowEnabledAsTexture = (light.camera && light.camera.texture) ? true:false;
        shaderText += `  {\n`;
        shaderText +=      Shader._generateLightStr(i);
        shaderText +=      Shader._generateShadowingStr(gl, i, isShadowEnabledAsTexture);
        shaderText += `    float diffuse = max(dot(lightDirection, normal), 0.0);\n`;
        shaderText += `    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n`;
        shaderText += `  }\n`;
      }
      shaderText += '  rt0.xyz += ambient.xyz;\n';
      
      //shaderText += '  rt0.a = 1.0;\n';
      // shaderText += '  rt0 = surfaceColor;\n';
  //    shaderText += '  rt0 = vec4(v_shadowCoord[0].xy, 0.0, 1.0);\n';



      return shaderText;
    }

    prepare_LambertShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      material.setUniform(shaderProgram, 'uniform_Kd', this._glContext.getUniformLocation(shaderProgram, 'Kd'));
      material.setUniform(shaderProgram, 'uniform_ambient', this._glContext.getUniformLocation(shaderProgram, 'ambient'));
      
      return vertexAttribsAsResult;
    }
  }



  class LambertShader extends DecalShader {
    constructor(glBoostContext, basicShader) {

      super(glBoostContext, basicShader);
      LambertShader.mixin(LambertShaderSource);
    }

    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);

      let Kd = material.diffuseColor;
      let Ka = material.ambientColor;    
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_Kd'), Kd.x, Kd.y, Kd.z, Kd.w, true);
      
      let ambient = Vector4.multiplyVector(Ka, scene.getAmountOfAmbientLightsIntensity());
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_ambient'), ambient.x, ambient.y, ambient.z, ambient.w, true);

    }

  }

  GLBoost['LambertShader'] = LambertShader;

  let singleton$5 = Symbol();
  let singletonEnforcer$3 = Symbol();

  /**
   * [en] This is a loader class of glTF file format. You can see more detail of glTF format at https://github.com/KhronosGroup/glTF .<br>
   * [ja] glTFファイルを読み込むためのローダークラスです。glTFファイルフォーマットについての詳細は https://github.com/KhronosGroup/glTF をご覧ください。
   */
  class GLTFLoader {

    /**
     * [en] The constructor of GLTFLoader class. But you cannot use this constructor directly because of this class is a singleton class. Use getInstance() static method.<br>
     * [ja] GLTFLoaderクラスのコンストラクタです。しかし本クラスはシングルトンであるため、このコンストラクタは直接呼び出せません。getInstance()静的メソッドを使ってください。
     * @param {Symbol} enforcer [en] a Symbol to forbid calling this constructor directly [ja] このコンストラクタの直接呼び出しを禁止するためのシンボル
     */
    constructor(enforcer) {
      if (enforcer !== singletonEnforcer$3) {
        throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");
      }
    }

    /**
     * [en] The static method to get singleton instance of this class.<br>
     * [ja] このクラスのシングルトンインスタンスを取得するための静的メソッド。
     * @return {GLTFLoader} [en] the singleton instance of GLTFLoader class [ja] GLTFLoaderクラスのシングルトンインスタンス
     */
    static getInstance() {
      if (!this[singleton$5]) {
        this[singleton$5] = new GLTFLoader(singletonEnforcer$3);
      }
      return this[singleton$5];
    }

    getDefaultShader(options) {
      let defaultShader = null;

      if (options && typeof options.defaultShaderClass !== "undefined") {
        if (typeof options.defaultShaderClass === "string") {
          defaultShader = GLBoost$1[options.defaultShaderClass];
        } else {
          defaultShader = options.defaultShaderClass;
        }
      }

      return defaultShader;
    }

    getOptions(defaultOptions, json, options) {
      if (json.asset && json.asset.extras && json.asset.extras.loadOptions) {
        for (let optionName in json.asset.extras.loadOptions) {
          defaultOptions[optionName] = json.asset.extras.loadOptions[optionName];
        }
      }

      for (let optionName in options) {
        defaultOptions[optionName] = options[optionName];
      }

      if (defaultOptions.loaderExtension && typeof defaultOptions.loaderExtension === "string") {
        defaultOptions.loaderExtension = GLBoost$1[options.loaderExtension].getInstance();
      }

      if (defaultOptions.statesOfElements) {
        for (let state of defaultOptions.statesOfElements) {
          if (state.shaderClass && typeof state.shaderClass === "string") {
            state.shaderClass = GLBoost$1[state.shaderClass];
          }
        }
      }

      return defaultOptions;
    }

    /**
     * [en] the method to load glTF file.<br>
     * [ja] glTF fileをロードするためのメソッド。
     * @param {string} url [en] url of glTF file [ja] glTFファイルのurl
     * @return {Promise} [en] a promise object [ja] Promiseオブジェクト
     */
    loadGLTF(glBoostContext, url, options) {
      let defaultOptions = {
        files: { 
          //        "foo.gltf": content of file as ArrayBuffer, 
          //        "foo.bin": content of file as ArrayBuffer, 
          //        "boo.png": content of file as ArrayBuffer 
        },
        loaderExtension: null,
        isNeededToMultiplyAlphaToColorOfPixelOutput: true,
        isTextureImageToLoadPreMultipliedAlphaAsDefault: false,
        isExistJointGizmo: false,
        isBlend: false,
        isDepthTest: true,
        defaultShaderClass: null,
        isMeshTransparentAsDefault: false,
        statesOfElements: [
          {
            targets: [], //["name_foo", "name_boo"],
            specifyMethod: GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME, // GLBoost.QUERY_TYPE_INSTANCE_NAME // GLBoost.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR
            states: {
              enable: [
                  // 3042,  // BLEND
              ],
              functions: {
                //"blendFuncSeparate": [1, 0, 1, 0],
              }
            },
            isTransparent: true,
            opacity: 1.0,
            shaderClass: DecalShader, // LambertShader // PhongShader
            isTextureImageToLoadPreMultipliedAlpha: false,
            globalStatesUsage: GLBoost$1.GLOBAL_STATES_USAGE_IGNORE // GLBoost.GLOBAL_STATES_USAGE_DO_NOTHING // GLBoost.GLOBAL_STATES_USAGE_INCLUSIVE // GLBoost.GLOBAL_STATES_USAGE_EXCLUSIVE
          }
        ]
      };

      this._materials = [];
      if (options.files) {
        for (let fileName in options.files) {
          const splitted = fileName.split('.');
          const fileExtension = splitted[splitted.length - 1];

          if (fileExtension === 'gltf' || fileExtension === 'glb') {
            return new Promise((resolve, response)=>{
              this.checkArrayBufferOfGltf(options.files[fileName], null, options, defaultOptions, glBoostContext, resolve);
            }, (reject, error)=>{
      
            });
          }
        }      
      }

      return DataUtil.loadResourceAsync(url, true,
        (resolve, response)=>{
          var arrayBuffer = response;

          this.checkArrayBufferOfGltf(arrayBuffer, url, options, defaultOptions, glBoostContext, resolve);
        }, (reject, error)=>{

        }
      );

    }

    checkArrayBufferOfGltf(arrayBuffer, url, options, defaultOptions, glBoostContext, resolve) {
      let dataView = new DataView(arrayBuffer, 0, 20);
      let isLittleEndian = true;
      // Magic field
      let magicStr = '';
      magicStr += String.fromCharCode(dataView.getUint8(0, isLittleEndian));
      magicStr += String.fromCharCode(dataView.getUint8(1, isLittleEndian));
      magicStr += String.fromCharCode(dataView.getUint8(2, isLittleEndian));
      magicStr += String.fromCharCode(dataView.getUint8(3, isLittleEndian));
      if (magicStr !== 'glTF') {
        this.loadAsTextJson(arrayBuffer, url, options, defaultOptions, glBoostContext, resolve);
      }
      else {
        this.loadAsBinaryJson(dataView, isLittleEndian, arrayBuffer, options, defaultOptions, glBoostContext, resolve);
      }
    }

    loadAsBinaryJson(dataView, isLittleEndian, arrayBuffer, options, defaultOptions, glBoostContext, resolve) {
      let gltfVer = dataView.getUint32(4, isLittleEndian);
      if (gltfVer !== 1) {
        reject('invalid version field in this binary glTF file.');
      }
      let lengthOfThisFile = dataView.getUint32(8, isLittleEndian);
      let lengthOfContent = dataView.getUint32(12, isLittleEndian);
      let contentFormat = dataView.getUint32(16, isLittleEndian);
      if (contentFormat !== 0) { // 0 means JSON format
        reject('invalid contentFormat field in this binary glTF file.');
      }
      let arrayBufferContent = arrayBuffer.slice(20, lengthOfContent + 20);
      let gotText = DataUtil.arrayBufferToString(arrayBufferContent);
      let json = JSON.parse(gotText);
      let arrayBufferBinary = arrayBuffer.slice(20 + lengthOfContent);
      let glTFVer = this._checkGLTFVersion(json);
      options = this.getOptions(defaultOptions, json, options);
      const defaultShader = this.getDefaultShader(options);
      this._loadResourcesAndScene(glBoostContext, arrayBufferBinary, null, json, defaultShader, glTFVer, resolve, options);
      return { options, defaultShader };
    }

    loadAsTextJson(arrayBuffer, url, options, defaultOptions, glBoostContext, resolve) {
      let gotText = DataUtil.arrayBufferToString(arrayBuffer);

      let basePath = '';
      if (url) {
        let partsOfPath = url.split('/');
        for (let i = 0; i < partsOfPath.length - 1; i++) {
          basePath += partsOfPath[i] + '/';
        }  
      } else {
        basePath = null;
      }

      let json = JSON.parse(gotText);
      let glTFVer = this._checkGLTFVersion(json);
      options = this.getOptions(defaultOptions, json, options);
      const defaultShader = this.getDefaultShader(options);
      this._loadResourcesAndScene(glBoostContext, null, basePath, json, defaultShader, glTFVer, resolve, options);
      return { options, defaultShader };
    }

    _checkGLTFVersion(json) {
      let glTFVer = 1.0;
      if (json.asset && json.asset.version) {
        glTFVer = parseFloat(json.asset.version);
      }
      return glTFVer;
    }

    _loadResourcesAndScene(glBoostContext, arrayBufferBinary, basePath, json, defaultShader, glTFVer, resolve, options) {
      let shadersJson = json.shaders;
      let shaders = {};
      let buffers = {};
      let textures = {};
      let promisesToLoadResources = [];

      // Shaders Async load
      for (let shaderName in shadersJson) {
        shaders[shaderName] = {};

        let shaderJson = shadersJson[shaderName];
        let shaderType = shaderJson.type;
        if (typeof shaderJson.extensions !== 'undefined' && typeof shaderJson.extensions.KHR_binary_glTF !== 'undefined') {
          shaders[shaderName].shaderText = this._accessBinaryAsShader(shaderJson.extensions.KHR_binary_glTF.bufferView, json, arrayBufferBinary);
          shaders[shaderName].shaderType = shaderType;
          continue;
        }

        let shaderUri = shaderJson.uri;

        if (options.files) {
          const splitted = shaderUri.split('/');
          const filename = splitted[splitted.length - 1];
          if (options.files[filename]) {
            const arrayBuffer = options.files[filename];
            shaders[shaderName].shaderText = DataUtil.arrayBufferToString(arrayBuffer);
            shaders[shaderName].shaderType = shaderType;
            continue;
          }
        }

        if (shaderUri.match(/^data:/)) {
          promisesToLoadResources.push(
            new Promise((fulfilled, rejected) => {
              let arrayBuffer = DataUtil.base64ToArrayBuffer(shaderUri);
              shaders[shaderName].shaderText = DataUtil.arrayBufferToString(arrayBuffer);
              shaders[shaderName].shaderType = shaderType;
              fulfilled();
            })
          );
        } else {
          shaderUri = basePath + shaderUri;
          promisesToLoadResources.push(
            DataUtil.loadResourceAsync(shaderUri, false,
              (resolve, response)=>{
                shaders[shaderName].shaderText = response;
                shaders[shaderName].shaderType = shaderType;
                resolve();
              },
              (reject, error)=>{

              }
            )
          );
        }
      }

      // Buffers Async load
      for (let bufferName in json.buffers) {
        let bufferInfo = json.buffers[bufferName];
        const splitted = bufferInfo.uri.split('/');
        const filename = splitted[splitted.length - 1];
        if (bufferInfo.uri.match(/^data:application\/octet-stream;base64,/)) {
          promisesToLoadResources.push(
            new Promise((fulfilled, rejected) => {
              let arrayBuffer = DataUtil.base64ToArrayBuffer(bufferInfo.uri);
              buffers[bufferName] = arrayBuffer;
              fulfilled();
            })
          );
        } else if (bufferInfo.uri === 'data:,') {
          buffers[bufferName] = arrayBufferBinary;
        } else if (options.files && options.files[filename]) {
          const arrayBuffer = options.files[filename];
          buffers[bufferName] = arrayBuffer;
        } else {
          promisesToLoadResources.push(
            DataUtil.loadResourceAsync(basePath + bufferInfo.uri, true,
              (resolve, response)=>{
                buffers[bufferName] = response;
                resolve();
              },
              (reject, error)=>{

              }
            )
          );
        }
      }

      // Textures Async load
      for (let textureName in json.textures) {
        let textureJson = json.textures[textureName];
        let imageJson = json.images[textureJson.source];
        let samplerJson = json.samplers[textureJson.sampler];

        let textureUri = null;

        if (typeof imageJson.extensions !== 'undefined' && typeof imageJson.extensions.KHR_binary_glTF !== 'undefined') {
          textureUri = this._accessBinaryAsImage(imageJson.extensions.KHR_binary_glTF.bufferView, json, arrayBufferBinary, imageJson.extensions.KHR_binary_glTF.mimeType);
        } else {
          let imageFileStr = imageJson.uri;
          const splitted = imageFileStr.split('/');
          const filename = splitted[splitted.length - 1];
          if (options.files && options.files[filename]) {
            const arrayBuffer = options.files[filename];
            const splitted = filename.split('.');
            const fileExtension = splitted[splitted.length - 1];
            textureUri = this._accessArrayBufferAsImage(arrayBuffer, fileExtension);
          } else if (imageFileStr.match(/^data:/)) {
            textureUri = imageFileStr;
          } else {
            textureUri = basePath + imageFileStr;
          }
        }

        let texture = glBoostContext.createTexture(null, textureName, {
          'TEXTURE_MAG_FILTER': samplerJson.magFilter,
          'TEXTURE_MIN_FILTER': samplerJson.minFilter,
          'TEXTURE_WRAP_S': samplerJson.wrapS,
          'TEXTURE_WRAP_T': samplerJson.wrapT
        });
        
        if (options.loaderExtension && options.loaderExtension.setUVTransformToTexture) {
          options.loaderExtension.setUVTransformToTexture(texture, samplerJson);
        }

        let promise = texture.generateTextureFromUri(textureUri, false);
        textures[textureName] = texture;
        promisesToLoadResources.push(promise);

      }

      if (promisesToLoadResources.length > 0) {
        Promise.resolve()
          .then(() => {
            return Promise.all(promisesToLoadResources);
          })
          .then(() => {
            this._IterateNodeOfScene(glBoostContext, buffers, json, defaultShader, shaders, textures, glTFVer, resolve, options);
          });
      } else {
        this._IterateNodeOfScene(glBoostContext, buffers, json, defaultShader, shaders, textures, glTFVer, resolve, options);
      }

    }

    _IterateNodeOfScene(glBoostContext, buffers, json, defaultShader, shaders, textures, glTFVer, resolve, options) {

      let rootGroup = glBoostContext.createGroup();

      for (let sceneStr in json.scenes) {
        let sceneJson = json.scenes[sceneStr];
        let group = glBoostContext.createGroup();
        group.userFlavorName = 'TopGroup';
        let nodeStr = null;
        for (let i = 0; i < sceneJson.nodes.length; i++) {
          nodeStr = sceneJson.nodes[i];

          // iterate nodes and load meshes
          let element = this._recursiveIterateNode(glBoostContext, nodeStr, buffers, json, defaultShader, shaders, textures, glTFVer, options);
          group.addChild(element);
        }

        // register joints hierarchy to skeletal mesh
        let skeletalMeshes = group.searchElementsByType(M_SkeletalMesh);
        skeletalMeshes.forEach((skeletalMesh) => {
          let rootJointGroup = group.searchElementByNameAndType(skeletalMesh.rootJointName, M_Group);
          if (!rootJointGroup) {
            // This is a countermeasure when skeleton node does not exist in scene.nodes.
            rootJointGroup = this._recursiveIterateNode(glBoostContext, skeletalMesh.rootJointName, buffers, json, defaultShader, shaders, textures, glTFVer, options);
            group.addChild(rootJointGroup);
          }

          rootJointGroup._isRootJointGroup = true;
          skeletalMesh.jointsHierarchy = rootJointGroup;
        });

        // Animation
        this._loadAnimation(group, buffers, json, glTFVer, options);

        if (options && options.loaderExtension && options.loaderExtension.setAssetPropertiesToRootGroup) {
          options.loaderExtension.setAssetPropertiesToRootGroup(rootGroup, json.asset);
        }

        rootGroup.addChild(group);

      }

      resolve(rootGroup);
    }

    _setTransform(element, nodeJson) {
      if (nodeJson.translation) {
        element.translate = new Vector3(nodeJson.translation[0], nodeJson.translation[1], nodeJson.translation[2]);
      }
      if (nodeJson.scale) {
        element.scale = new Vector3(nodeJson.scale[0], nodeJson.scale[1], nodeJson.scale[2]);
      }
      if (nodeJson.rotation) {
        element.quaternion = new Quaternion(nodeJson.rotation[0], nodeJson.rotation[1], nodeJson.rotation[2], nodeJson.rotation[3]);
      }
      if (nodeJson.matrix) {
        element.matrix = new Matrix44$2(nodeJson.matrix, true);
      }
    }

    _recursiveIterateNode(glBoostContext, nodeStr, buffers, json, defaultShader, shaders, textures, glTFVer, options) {
      var nodeJson = json.nodes[nodeStr];
      var group = glBoostContext.createGroup();
      group.userFlavorName = nodeStr;

      this._setTransform(group, nodeJson);

      if (nodeJson.meshes) {
        for (let i = 0; i < nodeJson.meshes.length; i++) {
          // this node has mashes...
          let meshStr = nodeJson.meshes[i];
          let meshJson = json.meshes[meshStr];

          let rootJointStr = null;
          let skinStr = null;
          if (nodeJson.skeletons) {
            rootJointStr = nodeJson.skeletons[0];
            skinStr = nodeJson.skin;
          }
          let mesh = this._loadMesh(glBoostContext, meshJson, buffers, json, defaultShader, rootJointStr, skinStr, shaders, textures, glTFVer, group, options);
          mesh.userFlavorName = meshStr;
          group.addChild(mesh);
        }
      } else if (nodeJson.jointName) {
        let joint = glBoostContext.createJoint(options.isExistJointGizmo);
        joint.userFlavorName = nodeJson.jointName;
        group.addChild(joint);
      } else if (nodeJson.camera) {
        let cameraStr = nodeJson.camera;
        let cameraJson = json.cameras[cameraStr];
        let camera = null;
        if (cameraJson.type === 'perspective') {
          let perspective = cameraJson.perspective;
          camera = glBoostContext.createPerspectiveCamera(
            {
              eye: new Vector3(0.0, 0.0, 0),
              center: new Vector3(1.0, 0.0, 0.0),
              up: new Vector3(0.0, 1.0, 0.0)
            },
            {
              fovy: MathUtil.radianToDegree(perspective.yfov),
              aspect: perspective.aspectRatio ? perspective.aspectRatio : 1.5,
              zNear: perspective.znear,
              zFar: perspective.zfar
            }
          );
        } else if (cameraJson.type === 'orthographic') {
          let orthographic = cameraJson.orthographic;
          camera = glBoostContext.createOrthoCamera(
            {
              eye: new Vector3(0.0, 0.0, 0),
              center: new Vector3(1.0, 0.0, 0.0),
              up: new Vector3(0.0, 1.0, 0.0)
            },
            {
              xmag: orthographic.xmag,
              ymag: orthographic.ymag,
              zNear: orthographic.znear,
              zFar: orthographic.zfar
            }
          );
        }
        camera.userFlavorName = cameraStr;
        group.addChild(camera);
      } else if (nodeJson.extensions) {
        if (nodeJson.extensions.KHR_materials_common) {
          if (nodeJson.extensions.KHR_materials_common.light) {
            const lightStr = nodeJson.extensions.KHR_materials_common.light;
            const lightJson = json.extensions.KHR_materials_common.lights[lightStr];
            let light = null;
            if (lightJson.type === 'ambient') {
              let color = lightJson.ambient.color;
              light = glBoostContext.createAmbientLight(new Vector3(color[0], color[1], color[2]));
              group.addChild(light);
            } else if (lightJson.type === 'point') {
              let color = lightJson.point.color;
              light = glBoostContext.createPointLight(new Vector3(color[0], color[1], color[2]));
              this._setTransform(group, nodeJson);
              group.addChild(light);
            } else if (lightJson.type === 'directional') {
              const color = lightJson.directional.color;
              light = glBoostContext.createDirectionalLight(new Vector3(color[0], color[1], color[2]));
              light.rotate = new Vector3(0, 0, 0);
              this._setTransform(group, nodeJson);
              group.addChild(light);
            } else if (lightJson.type === 'spot') {
              const color = lightJson.spot.color;
              light = glBoostContext.createSpotLight(new Vector3(color[0], color[1], color[2]));
              light.rotate = new Vector3(0, 0, 0);
              this._setTransform(group, nodeJson);
              group.addChild(light);
            }
          }
        }
      }

      if (nodeJson.children) {
        for (let i = 0; i < nodeJson.children.length; i++) {
          let nodeStr = nodeJson.children[i];
          let childElement = this._recursiveIterateNode(glBoostContext, nodeStr, buffers, json, defaultShader, shaders, textures, glTFVer, options);
          group.addChild(childElement);
        }
      }

      return group;
    }

    _loadMesh(glBoostContext, meshJson, buffers, json, defaultShader, rootJointStr, skinStr, shaders, textures, glTFVer, group, options) {
      var mesh = null;
      var geometry = null;
      if (rootJointStr) {
        geometry = glBoostContext.createSkeletalGeometry();
        mesh = glBoostContext.createSkeletalMesh(geometry, null, rootJointStr);
        let skin = json.skins[skinStr];

        mesh.bindShapeMatrix = new Matrix44$2(skin.bindShapeMatrix, true);
        mesh.jointNames = skin.jointNames;

        let inverseBindMatricesAccessorStr = skin.inverseBindMatrices;
        mesh.inverseBindMatrices = this._accessBinary(inverseBindMatricesAccessorStr, json, buffers);
      } else {
        geometry = glBoostContext.createGeometry();
        mesh = glBoostContext.createMesh(geometry);
      }

      if (options && options.isMeshTransparentAsDefault) {
        mesh.isTransparent = true;
      }

      let _indicesArray = [];
      let _positions = [];
      let _normals = [];
      let vertexData = {
        position: _positions,
        normal: _normals,
        components: {},
        componentBytes: {},
        componentType: {}
      };
      let additional = {
        'joint': [],
        'weight': [],
        'texcoord': []
      };

      let dataViewMethodDic = {};

      let materials = [];
      let indicesAccumulatedLength = 0;
      for (let i = 0; i < meshJson.primitives.length; i++) {
        let primitiveJson = meshJson.primitives[i];

        // Geometry
        let positionsAccessorStr = primitiveJson.attributes.POSITION;
        let positions = this._accessBinary(positionsAccessorStr, json, buffers, false, true);
        _positions[i] = positions;
        vertexData.components.position = this._checkComponentNumber(positionsAccessorStr, json);
        vertexData.componentBytes.position = this._checkBytesPerComponent(positionsAccessorStr, json);
        vertexData.componentType.position = this._getDataType(positionsAccessorStr, json);
        dataViewMethodDic.position = this._checkDataViewMethod(positionsAccessorStr, json);


        let indices = null;
        if (typeof primitiveJson.indices !== 'undefined') {
          let indicesAccessorStr = primitiveJson.indices;
          indices = this._accessBinary(indicesAccessorStr, json, buffers);
          for (let j=0; j<indices.length; j++) {
            indices[j] = indicesAccumulatedLength + indices[j];
          }
          _indicesArray[i] = indices;
          indicesAccumulatedLength += _positions[i].length /  vertexData.components.position;
        }


        let normalsAccessorStr = primitiveJson.attributes.NORMAL;
        if (normalsAccessorStr) {
          let normals = this._accessBinary(normalsAccessorStr, json, buffers, false, true);
          //Array.prototype.push.apply(_normals, normals);
          _normals[i] = normals;
          vertexData.components.normal = this._checkComponentNumber(normalsAccessorStr, json);
          vertexData.componentBytes.normal = this._checkBytesPerComponent(normalsAccessorStr, json);
          vertexData.componentType.normal = this._getDataType(normalsAccessorStr, json);
          dataViewMethodDic.normal = this._checkDataViewMethod(normalsAccessorStr, json);
        }

        /// if Skeletal
        let jointAccessorStr = primitiveJson.attributes.JOINT;
        if (jointAccessorStr) {
          let joints = this._accessBinary(jointAccessorStr, json, buffers, false, true);
          additional['joint'][i] = joints;
          vertexData.components.joint = this._checkComponentNumber(jointAccessorStr, json);
          vertexData.componentBytes.joint = this._checkBytesPerComponent(jointAccessorStr, json);
          vertexData.componentType.joint = this._getDataType(jointAccessorStr, json);
          dataViewMethodDic.joint = this._checkDataViewMethod(jointAccessorStr, json);
        }
        let weightAccessorStr = primitiveJson.attributes.WEIGHT;
        if (weightAccessorStr) {
          let weights = this._accessBinary(weightAccessorStr, json, buffers, false, true);
          additional['weight'][i] = weights;
          vertexData.components.weight = this._checkComponentNumber(weightAccessorStr, json);
          vertexData.componentBytes.weight = this._checkBytesPerComponent(weightAccessorStr, json);
          vertexData.componentType.weight = this._getDataType(weightAccessorStr, json);
          dataViewMethodDic.weight = this._checkDataViewMethod(weightAccessorStr, json);
        }

        // Material
        if (primitiveJson.material) {
          var texcoords = null;
          let texcoords0AccessorStr = primitiveJson.attributes.TEXCOORD_0;

          let materialStr = primitiveJson.material;

          /*
          let materialJson = json.materials[materialStr];

          let material = null;
          for (let mat of this._materials) {
            if (mat.userFlavorName === materialJson.name) {
              material = mat;
            }
          }
  */
          let material = null;
          if (options && options.loaderExtension && options.loaderExtension.createClassicMaterial) {
            material = options.loaderExtension.createClassicMaterial(glBoostContext);
          } else {
            material = glBoostContext.createClassicMaterial();
          }
          if (options && options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
            material.shaderParameters.isNeededToMultiplyAlphaToColorOfPixelOutput = options.isNeededToMultiplyAlphaToColorOfPixelOutput;
          }
          this._materials.push(material);

          if (options && options.statesOfElements) {
            for (let statesInfo of options.statesOfElements) {
              if (statesInfo.targets) {
                for (let target of statesInfo.targets) {
                  let isMatch = false;
                  let specifyMethod = statesInfo.specifyMethod !== void 0 ? statesInfo.specifyMethod : GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME;
                  switch (specifyMethod) {
                    case GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME:
                      isMatch = group.userFlavorName === target; break;
                    case GLBoost$1.QUERY_TYPE_INSTANCE_NAME:
                      isMatch = group.instanceName === target; break;
                    case GLBoost$1.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR:
                      isMatch = group.instanceNameWithUserFlavor === target; break;                      
                  }
                  if (isMatch) {
                    material.states = statesInfo.states;
                    group.isTransparent = statesInfo.isTransparent !== void 0 ? statesInfo.isTransparent : false;
                    material.globalStatesUsage = statesInfo.globalStatesUsage !== void 0 ? statesInfo.globalStatesUsage : GLBoost$1.GLOBAL_STATES_USAGE_IGNORE;
                  }
                }
              }
            }
          }

          texcoords = this._loadMaterial(glBoostContext, buffers, json, vertexData, indices, material, materialStr, positions, dataViewMethodDic, additional, texcoords, texcoords0AccessorStr, geometry, defaultShader, shaders, textures, i, glTFVer, group, options);

          materials.push(material);
        } else {
          let material = null;
          if (options.loaderExtension && options.loaderExtension.createClassicMaterial) {
            material = options.loaderExtension.createClassicMaterial(glBoostContext);
          } else {
            material = glBoostContext.createClassicMaterial();
          }
          if (defaultShader) {
            material.shaderClass = defaultShader;
          } else {
            material.baseColor = new Vector4(0.5, 0.5, 0.5, 1);
          }
          materials.push(material);
        }

      }

      if (meshJson.primitives.length > 1) {
        let lengthDic = {index: 0, position: 0, normal: 0, joint: 0, weight: 0, texcoord: 0};
        for (let i = 0; i < meshJson.primitives.length; i++) {
          //lengthDic.index += _indicesArray[i].length;
          lengthDic.position += _positions[i].length;
          if (_normals[i]) {
            lengthDic.normal += _normals[i].length;
          }
          if (typeof additional['joint'][i] !== 'undefined') {
            lengthDic.joint += additional['joint'][i].length;
          }
          if (typeof additional['weight'][i] !== 'undefined') {
            lengthDic.weight += additional['weight'][i].length;
          }
          if (typeof additional['texcoord'][i] !== 'undefined') {
            lengthDic.texcoord += additional['texcoord'][i].length;
          }
        }

        function getTypedArray(dataViewMethod, length) {
          let vertexAttributeArray = null;
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
        }

        for (let attribName in dataViewMethodDic) {
          let newTypedArray = getTypedArray(dataViewMethodDic[attribName], lengthDic[attribName]);
          let offset = 0;
          for (let i = 0; i < meshJson.primitives.length; i++) {

            let array = null;

            if (attribName === 'position') {
              array = _positions[i];
            } else if (attribName === 'normal') {
              array = _normals[i];
            } else if (attribName === 'joint') {
              array = additional['joint'][i];
            } else if (attribName === 'weight') {
              array = additional['weight'][i];
            } else if (attribName === 'texcoord') {
              array = additional['texcoord'][i];
            }

            if (array) {
              newTypedArray.set(array, offset);
              offset += array.length;
            }
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

    _isKHRMaterialsCommon(materialJson) {
      if (typeof materialJson.extensions !== 'undefined' && typeof materialJson.extensions.KHR_materials_common !== 'undefined') {
        return true;
      } else {
        return false;
      }
    }

    _loadMaterial(glBoostContext, buffers, json, vertexData, indices, material, materialStr, positions, dataViewMethodDic, additional, texcoords, texcoords0AccessorStr, geometry, defaultShader, shaders, textures, idx, glTFVer, group, options) {
      let materialJson = json.materials[materialStr];
      material.userFlavorName = materialJson.name;
      let originalMaterialJson = materialJson;
      
      if (this._isKHRMaterialsCommon(materialJson)) {
        materialJson = materialJson.extensions.KHR_materials_common;
      }


      let enables = [];
      if (options.isBlend) {
        enables.push(3042);
      }
      if (options.isDepthTest) {
        enables.push(2929);
      }
      material.states.enable = material.states.enable.concat(enables);

      // Remove duplicated values
      material.states.enable = material.states.enable.filter(function (x, i, self) {
        return self.indexOf(x) === i;
      });

      if (options && options.statesOfElements) {
        for (let statesInfo of options.statesOfElements) {
          if (statesInfo.opacity) {
            group.opacity = statesInfo.opacity;
          }
        }
      }

      if (options.isBlend && options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
        if (material.states.functions.blendFuncSeparate === void 0) {
          material.states.functions.blendFuncSeparate = [1, 771, 1, 771];
        }
      }
      material.globalStatesUsage = GLBoost$1.GLOBAL_STATES_USAGE_IGNORE;

    
      // Diffuse Texture
      if (texcoords0AccessorStr) {
        texcoords = this._accessBinary(texcoords0AccessorStr, json, buffers, false, true);
        additional['texcoord'][idx] = texcoords;
        vertexData.components.texcoord = this._checkComponentNumber(texcoords0AccessorStr, json);
        vertexData.componentBytes.texcoord = this._checkBytesPerComponent(texcoords0AccessorStr, json);
        vertexData.componentType.texcoord = this._getDataType(texcoords0AccessorStr, json);
        dataViewMethodDic.texcoord = this._checkDataViewMethod(texcoords0AccessorStr, json);

        let setTextures = (values, isParameter)=> {
          for (let valueName in values) {
            let value = null;
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
              let textureStr = value;
              let texturePurpose;
              if (valueName === 'diffuse' || (materialJson.technique === "CONSTANT" && valueName === 'ambient')) {
                texturePurpose = GLBoost$1.TEXTURE_PURPOSE_DIFFUSE;
              }

              let texture = textures[textureStr];
              
              let isNeededToMultiplyAlphaToColorOfTexture = false;

              if (options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
                if (options.isTextureImageToLoadPreMultipliedAlphaAsDefault) ; else {
                  isNeededToMultiplyAlphaToColorOfTexture = true;
                }
              } else { // if is NOT Needed To Multiply AlphaToColor Of PixelOutput
                if (options.isTextureImageToLoadPreMultipliedAlphaAsDefault) ;
              }

              if (options && options.statesOfElements) {
                for (let statesInfo of options.statesOfElements) {
                  if (statesInfo.targets) {
                    for (let target of statesInfo.targets) {
                      let isMatch = false;
                      let specifyMethod = statesInfo.specifyMethod !== void 0 ? statesInfo.specifyMethod : GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME;
                      switch (specifyMethod) {
                        case GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME:
                          isMatch = group.userFlavorName === target; break;
                        case GLBoost$1.QUERY_TYPE_INSTANCE_NAME:
                          isMatch = group.instanceName === target; break;
                        case GLBoost$1.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR:
                          isMatch = group.instanceNameWithUserFlavor === target; break;                      
                      }

                      if (isMatch) {
                        if (options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
                          if (statesInfo.isTextureImageToLoadPreMultipliedAlpha) ; else {
                            isNeededToMultiplyAlphaToColorOfTexture = true;
                          }
                        } else { // if is NOT Needed To Multiply AlphaToColor Of PixelOutput
                          if (statesInfo.isTextureImageToLoadPreMultipliedAlpha) ;
                        }
                      }

                      //texture.setParameter('UNPACK_PREMULTIPLY_ALPHA_WEBGL', isNeededToMultiplyAlphaToColorOfTexture);
  //                    texture.loadWebGLTexture();
                    }
                  }
                }
              }

              material.setTexture(texture, texturePurpose);
              texture.toMultiplyAlphaToColorPreviously = isNeededToMultiplyAlphaToColorOfTexture;
            }
          }
        };
        setTextures(materialJson.values, false);
        if (materialJson.technique && json.techniques) {
          if (typeof json.techniques[materialJson.technique] !== "undefined") {
            setTextures(json.techniques[materialJson.technique].parameters, true);
          }
        }

      } else {
        if (typeof vertexData.components.texcoord !== 'undefined') {
          // If texture coordinates existed even once in the previous loop
          let emptyTexcoords = [];
          let componentN = vertexData.components.position;
          let length = positions.length / componentN;
          for (let k = 0; k < length; k++) {
            emptyTexcoords.push(0);
            emptyTexcoords.push(0);
          }
          additional['texcoord'][idx] = new Float32Array(emptyTexcoords);
          vertexData.components.texcoord = 2;
          vertexData.componentBytes.texcoord = 4;
          dataViewMethodDic.texcoord = 'getFloat32';
        }
      }

      for (let valueName in materialJson.values) {
        let value = materialJson.values[valueName];
        if (typeof value !== 'string') {
          material[valueName + 'Color'] = new Vector4(value[0], value[1], value[2], value[3]);
        }
      }

      if (indices !== null) {
        material.setVertexN(geometry, indices.length);
      }

      let techniqueStr = materialJson.technique;
      if (defaultShader) {
        material.shaderClass = defaultShader;
      } else if (this._isKHRMaterialsCommon(originalMaterialJson)) {
        switch (techniqueStr) {
          case 'CONSTANT':
            if (options.loaderExtension && options.loaderExtension.getDecalShader) {
              material.shaderClass = options.loaderExtension.getDecalShader();
            } else {
              material.shaderClass = DecalShader;
            }
            break;
          case 'LAMBERT':
            if (options.loaderExtension && options.loaderExtension.getLambertShader) {
              material.shaderClass = options.loaderExtension.getLambertShader();
            } else {
              material.shaderClass = LambertShader;
            }
            break;
          case 'PHONG':
            if (options.loaderExtension && options.loaderExtension.getPhongShader) {
              material.shaderClass = options.loaderExtension.getPhongShader();
            } else {
              material.shaderClass = PhongShader;
            }
            break;
        }
      } else {
        if (typeof json.techniques !== 'undefined') {
          this._loadTechnique(glBoostContext, json, techniqueStr, material, materialJson, shaders, glTFVer);
        } else {
          if (options.loaderExtension && options.loaderExtension.getDecalShader) {
            material.shaderClass = options.loaderExtension.getDecalShader();
          } else {
            material.shaderClass = DecalShader;
          }
        }
      }

      if (options && options.statesOfElements) {
        for (let statesInfo of options.statesOfElements) {
          if (statesInfo.targets) {
            for (let target of statesInfo.targets) {
              let isMatch = false;
              let specifyMethod = statesInfo.specifyMethod !== void 0 ? statesInfo.specifyMethod : GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME;
              switch (specifyMethod) {
                case GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME:
                  isMatch = group.userFlavorName === target; break;
                case GLBoost$1.QUERY_TYPE_INSTANCE_NAME:
                  isMatch = group.instanceName === target; break;
                case GLBoost$1.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR:
                  isMatch = group.instanceNameWithUserFlavor === target; break;                      
              }

              if (isMatch) {
                if (statesInfo.shaderClass) {
                  material.shaderClass = statesInfo.shaderClass;
                }
              }

            }
          }
        }
      }

      return texcoords;
    }

    _loadTechnique(glBoostContext, json, techniqueStr, material, materialJson, shaders, glTFVer) {
      let techniqueJson = json.techniques[techniqueStr];


      let programStr = techniqueJson.program;
      let uniformsJson = techniqueJson.uniforms;
      let parametersJson = techniqueJson.parameters;
      let attributesJson = techniqueJson.attributes;
      let attributes = {};
      for (let attributeName in attributesJson) {
        //attributes[attributesJson[attributeName]] = attributeName;
        let parameterName = attributesJson[attributeName];
        let parameterJson = parametersJson[parameterName];
        attributes[attributeName] = parameterJson.semantic;
      }

      let uniforms = {};
      let textureNames = {};
      for (let uniformName in uniformsJson) {
        let parameterName = uniformsJson[uniformName];
        let parameterJson = parametersJson[parameterName];
        if (typeof parameterJson.semantic !== 'undefined') {
          uniforms[uniformName] = parameterJson.semantic;
        } else {
          let value = null;
          if (typeof materialJson.values !== 'undefined' && typeof materialJson.values[parameterName] !== 'undefined') {
            value = materialJson.values[parameterName];
          } else {
            value = parameterJson.value;
          }

          switch (parameterJson.type) {
            case 5126:
              uniforms[uniformName] = (glTFVer < 1.1) ? value : value[0];
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
              uniforms[uniformName] = (glTFVer < 1.1) ? value : value[0];
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
              textureNames[uniformName] =  (glTFVer < 1.1) ? value : value[0];
              break;
          }
        }
      }

      if (techniqueJson.states) {
        if (techniqueJson.states.functions) {
          for (let functionName in techniqueJson.states.functions) {
            if (!Array.isArray(techniqueJson.states.functions[functionName])) {
              techniqueJson.states.functions[functionName] = [techniqueJson.states.functions[functionName]];
            }
          }
        }

        material.states = techniqueJson.states;
      }

      this._loadProgram(glBoostContext, json, programStr, material, shaders, attributes, uniforms, textureNames);
    }



    _loadProgram(glBoostContext, json, programStr, material, shaders, attributes, uniforms, textureNames) {
      let programJson = json.programs[programStr];
      let fragmentShaderStr = programJson.fragmentShader;
      let vertexShaderStr = programJson.vertexShader;
      let fragmentShaderText = shaders[fragmentShaderStr].shaderText;
      let vertexShaderText = shaders[vertexShaderStr].shaderText;

      material.shaderInstance = new FreeShader(glBoostContext, vertexShaderText, fragmentShaderText, attributes, uniforms, textureNames);
    }

    _loadAnimation(element, buffers, json, glTFVer, options) {
      let animationJson = null;
      for (let anim in json.animations) {
        animationJson = json.animations[anim];
        if (animationJson) {
          for (let i = 0; i < animationJson.channels.length; i++) {
            let channelJson = animationJson.channels[i];
            if (!channelJson) {
              continue;
            }

            let targetMeshStr = channelJson.target.id;
            let targetPathStr = channelJson.target.path;
            let samplerStr = channelJson.sampler;
            let samplerJson = animationJson.samplers[samplerStr];

            let animInputAccessorStr = null;
            let animOutputAccessorStr = null;
            let animInputStr = samplerJson.input;
            let animOutputStr = samplerJson.output;
            animInputAccessorStr = animationJson.parameters[animInputStr];
            animOutputAccessorStr = animationJson.parameters[animOutputStr];

            let interpolationMethod = GLBoost$1.INTERPOLATION_LINEAR;

            if (options.loaderExtension && options.loaderExtension.getAnimationInterpolationMethod) {
              interpolationMethod = options.loaderExtension.getAnimationInterpolationMethod(samplerJson.interpolation);
            }

            let animInputArray = this._accessBinary(animInputAccessorStr, json, buffers);
            let animOutputArray = null;
            if (targetPathStr === 'translation') {
              animOutputArray = this._accessBinary(animOutputAccessorStr, json, buffers);
            } else if (targetPathStr === 'rotation') {
              animOutputArray = this._accessBinary(animOutputAccessorStr, json, buffers, true);
            } else {
              animOutputArray = this._accessBinary(animOutputAccessorStr, json, buffers);
            }
            let animationAttributeName = '';
            if (targetPathStr === 'translation') {
              animationAttributeName = 'translate';
            } else if (targetPathStr === 'rotation') {
              animationAttributeName = 'quaternion';
            } else {
              animationAttributeName = targetPathStr;
            }


            let hitElement = element.searchElement(targetMeshStr);
            if (hitElement) {
              hitElement.setAnimationAtLine('time', animationAttributeName, animInputArray, animOutputArray, interpolationMethod);
              hitElement.setActiveAnimationLine('time');
            }
          }
        }
      }
    }
    _accessBinaryAsShader(bufferViewStr, json, arrayBuffer) {
      let bufferViewJson = json.bufferViews[bufferViewStr];
      let byteOffset = bufferViewJson.byteOffset;
      let byteLength = bufferViewJson.byteLength;


      let arrayBufferSliced = arrayBuffer.slice(byteOffset, byteOffset + byteLength);

      return DataUtil.arrayBufferToString(arrayBufferSliced);
    }

    _sliceBufferViewToArrayBuffer(json, bufferViewStr, arrayBuffer) {
      let bufferViewJson = json.bufferViews[bufferViewStr];
      let byteOffset = bufferViewJson.byteOffset;
      let byteLength = bufferViewJson.byteLength;
      let arrayBufferSliced = arrayBuffer.slice(byteOffset, byteOffset + byteLength);
      return arrayBufferSliced;
    }

    _accessBinaryAsImage(bufferViewStr, json, arrayBuffer, mimeType) {
      let arrayBufferSliced = this._sliceBufferViewToArrayBuffer(json, bufferViewStr, arrayBuffer);
      return this._accessArrayBufferAsImage(arrayBufferSliced, mimeType);
    }

    _accessArrayBufferAsImage(arrayBuffer, imageType) {
      let bytes = new Uint8Array(arrayBuffer);
      let binaryData = '';
      for (let i = 0, len = bytes.byteLength; i < len; i++) {
        binaryData += String.fromCharCode(bytes[i]);
      }
      let imgSrc = '';
      if (imageType === 'image/jpeg' || imageType.toLowerCase() === 'jpg' || imageType.toLowerCase() === 'jpeg') {
        imgSrc = "data:image/jpeg;base64,";
      }
      else if (imageType == 'image/png' || imageType.toLowerCase() === 'png') {
        imgSrc = "data:image/png;base64,";
      }
      else if (imageType == 'image/gif' || imageType.toLowerCase() === 'gif') {
        imgSrc = "data:image/gif;base64,";
      }
      else if (imageType == 'image/bmp' || imageType.toLowerCase() === 'bmp') {
        imgSrc = "data:image/bmp;base64,";
      }
      else {
        imgSrc = "data:image/unknown;base64,";
      }
      let dataUrl = imgSrc + DataUtil.btoa(binaryData);
      return dataUrl;
    }

    static _isSystemLittleEndian() {
      return !!(new Uint8Array((new Uint16Array([0x00ff])).buffer))[0];
    }

    _checkComponentNumber(accessorStr, json) {
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

    _checkBytesPerComponent(accessorStr, json) {
      var accessorJson = json.accessors[accessorStr];

      var bytesPerComponent = 0;
      switch (accessorJson.componentType) {
        case 5120: // gl.BYTE
          bytesPerComponent = 1;
          break;
        case 5121: // gl.UNSIGNED_BYTE
          bytesPerComponent = 1;
          break;
        case 5122: // gl.SHORT
          bytesPerComponent = 2;
          break;
        case 5123: // gl.UNSIGNED_SHORT
          bytesPerComponent = 2;
          break;
        case 5124: // gl.INT
          bytesPerComponent = 4;
          break;
        case 5125: // gl.UNSIGNED_INT
          bytesPerComponent = 4;
          break;
        case 5126: // gl.FLOAT
          bytesPerComponent = 4;
          break;
        default:
          break;
      }
      return bytesPerComponent;
    }

    _checkDataViewMethod(accessorStr, json) {
      var accessorJson = json.accessors[accessorStr];
      var dataViewMethod = '';
      switch (accessorJson.componentType) {
        case 5120: // gl.BYTE
          dataViewMethod = 'getInt8';
          break;
        case 5121: // gl.UNSIGNED_BYTE
          dataViewMethod = 'getUint8';
          break;
        case 5122: // gl.SHORT
          dataViewMethod = 'getInt16';
          break;
        case 5123: // gl.UNSIGNED_SHORT
          dataViewMethod = 'getUint16';
          break;
        case 5124: // gl.INT
          dataViewMethod = 'getInt32';
          break;
        case 5125: // gl.UNSIGNED_INT
          dataViewMethod = 'getUint32';
          break;
        case 5126: // gl.FLOAT
          dataViewMethod = 'getFloat32';
          break;
        default:
          break;
      }
      return dataViewMethod;
    }

    _getDataType(accessorStr, json) {
      var accessorJson = json.accessors[accessorStr];
      return accessorJson.componentType;
    }

    _adjustByteAlign(typedArrayClass, arrayBuffer, alignSize, byteOffset, length) {
      if (( byteOffset % alignSize ) != 0) {
        return new typedArrayClass(arrayBuffer.slice(byteOffset), 0, length);
      } else {
        return new typedArrayClass(arrayBuffer, byteOffset, length);
      }
    }

    _accessBinary(accessorStr, json, buffers, quaternionIfVec4 = false, toGetAsTypedArray = false) {
      var accessorJson = json.accessors[accessorStr];
      var bufferViewStr = accessorJson.bufferView;
      var bufferViewJson = json.bufferViews[bufferViewStr];
      var byteOffset = bufferViewJson.byteOffset + accessorJson.byteOffset;
      var bufferStr = bufferViewJson.buffer;
      var arrayBuffer = buffers[bufferStr];

      let componentN = this._checkComponentNumber(accessorStr, json);
      let bytesPerComponent = this._checkBytesPerComponent(accessorStr, json);
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
          let dataView = new DataView(arrayBuffer, byteOffset, byteLength);
          let byteDelta = bytesPerComponent * componentN;
          let littleEndian = true;
          for (let pos = 0; pos < byteLength; pos += byteDelta) {
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
        let dataView = new DataView(arrayBuffer, byteOffset, byteLength);
        let byteDelta = bytesPerComponent * componentN;
        let littleEndian = true;
        for (let pos = 0; pos < byteLength; pos += byteDelta) {

          switch (accessorJson.type) {
            case 'SCALAR':
              vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
              break;
            case 'VEC2':
              vertexAttributeArray.push(new Vector2(
                dataView[dataViewMethod](pos, littleEndian),
                dataView[dataViewMethod](pos+bytesPerComponent, littleEndian)
              ));
              break;
            case 'VEC3':
              vertexAttributeArray.push(new Vector3(
                dataView[dataViewMethod](pos, littleEndian),
                dataView[dataViewMethod](pos+bytesPerComponent, littleEndian),
                dataView[dataViewMethod](pos+bytesPerComponent*2, littleEndian)
              ));
              break;
            case 'VEC4':
              if (quaternionIfVec4) {
                vertexAttributeArray.push(new Quaternion(
                  dataView[dataViewMethod](pos, littleEndian),
                  dataView[dataViewMethod](pos+bytesPerComponent, littleEndian),
                  dataView[dataViewMethod](pos+bytesPerComponent*2, littleEndian),
                  dataView[dataViewMethod](pos+bytesPerComponent*3, littleEndian)
                ));
              } else {
                vertexAttributeArray.push(new Vector4(
                  dataView[dataViewMethod](pos, littleEndian),
                  dataView[dataViewMethod](pos+bytesPerComponent, littleEndian),
                  dataView[dataViewMethod](pos+bytesPerComponent*2, littleEndian),
                  dataView[dataViewMethod](pos+bytesPerComponent*3, littleEndian)
                ));
              }
              break;
            case 'MAT4':
              let matrixComponents = [];
              for (let i=0; i<16; i++) {
                matrixComponents[i] = dataView[dataViewMethod](pos+bytesPerComponent*i, littleEndian);
              }
              vertexAttributeArray.push(new Matrix44$2(matrixComponents, true));
              break;
          }

        }
      }


      return vertexAttributeArray;
    }

  }



  GLBoost$1["GLTFLoader"] = GLTFLoader;

  let singleton$6 = Symbol();
  let singletonEnforcer$4 = Symbol();

  /**
   * This is a loader class of glTF2 file format. You can see more detail of glTF2 format at https://github.com/KhronosGroup/glTF .
   */
  class GLTF2Loader {

    /**
     * The constructor of GLTFLoader class. But you cannot use this constructor directly because of this class is a singleton class. Use getInstance() static method.
     * @param {Symbol} enforcer a Symbol to forbid calling this constructor directly
     */
    constructor(enforcer) {
      if (enforcer !== singletonEnforcer$4) {
        throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");
      }
    }

    _getOptions(defaultOptions, json, options) {
      if (json.asset && json.asset.extras && json.asset.extras.loadOptions) {
        for (let optionName in json.asset.extras.loadOptions) {
          defaultOptions[optionName] = json.asset.extras.loadOptions[optionName];
        }
      }

      for (let optionName in options) {
        defaultOptions[optionName] = options[optionName];
      }

      if (defaultOptions.loaderExtension && typeof defaultOptions.loaderExtension === "string") {
        defaultOptions.loaderExtension = GLBoost$1[options.loaderExtension].getInstance();
      }

      if (defaultOptions.statesOfElements) {
        for (let state of defaultOptions.statesOfElements) {
          if (state.shaderClass && typeof state.shaderClass === "string") {
            state.shaderClass = GLBoost$1[state.shaderClass];
          }
        }
      }

      return defaultOptions;
    }

    /**
     * The static method to get singleton instance of this class.
     * @return {GLTFLoader} the singleton instance of GLTFLoader class
     */
    static getInstance() {
      if (!this[singleton$6]) {
        this[singleton$6] = new GLTF2Loader(singletonEnforcer$4);
      }
      return this[singleton$6];
    }

    /**
     * the method to load glTF2 file.
     * @param {string} uri uri of glTF file
     * @return {Promise} a promise object
     */
    loadGLTF(uri, options) {
      let defaultOptions = {
        files: { 
          //        "foo.gltf": content of file as ArrayBuffer, 
          //        "foo.bin": content of file as ArrayBuffer, 
          //        "boo.png": content of file as ArrayBuffer 
        },
        loaderExtension: null,
        isNeededToMultiplyAlphaToColorOfPixelOutput: true,
        isTextureImageToLoadPreMultipliedAlphaAsDefault: false,
        isExistJointGizmo: false,
        isBlend: false,
        isDepthTest: true,
        defaultShaderClass: null,
        isMeshTransparentAsDefault: false,
        statesOfElements: [
          {
            targets: [], //["name_foo", "name_boo"],
            specifyMethod: GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME, // GLBoost.QUERY_TYPE_INSTANCE_NAME // GLBoost.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR
            states: {
              enable: [
                  // 3042,  // BLEND
              ],
              functions: {
                //"blendFuncSeparate": [1, 0, 1, 0],
              }
            },
            isTransparent: true,
            opacity: 1.0,
            shaderClass: DecalShader, // LambertShader // PhongShader
            isTextureImageToLoadPreMultipliedAlpha: false,
            globalStatesUsage: GLBoost$1.GLOBAL_STATES_USAGE_IGNORE // GLBoost.GLOBAL_STATES_USAGE_DO_NOTHING // GLBoost.GLOBAL_STATES_USAGE_INCLUSIVE // GLBoost.GLOBAL_STATES_USAGE_EXCLUSIVE
          }
        ]
      };

      if (options.files) {
        for (let fileName in options.files) {
          const splitted = fileName.split('.');
          const fileExtension = splitted[splitted.length - 1];

          if (fileExtension === 'gltf' || fileExtension === 'glb') {
            return new Promise((resolve, response)=>{
              this._checkArrayBufferOfGltf(options.files[fileName], null, options, defaultOptions, resolve);
            }, (reject, error)=>{
      
            });
          }
        }      
      }

      return DataUtil.loadResourceAsync(uri, true,
        (resolve, response)=>{
          var arrayBuffer = response;
          this._checkArrayBufferOfGltf(arrayBuffer, uri, options, defaultOptions, resolve);
        }, (reject, error)=>{}
      );
    }

    _checkArrayBufferOfGltf(arrayBuffer, uri, options, defaultOptions, resolve) {
      this._materials = [];

      let dataView = new DataView(arrayBuffer, 0, 20);
      let isLittleEndian = true;

      // Magic field
      let magic = dataView.getUint32(0, isLittleEndian);

      // 0x46546C67 is 'glTF' in ASCII codes.
      if (magic !== 0x46546C67) {
        this._loadAsTextJson(arrayBuffer, uri, options, defaultOptions, resolve);
      } else {
        this._loadAsBinaryJson(dataView, uri, isLittleEndian, arrayBuffer, options, defaultOptions, resolve);
      }
    }

    _loadAsBinaryJson(dataView, uri, isLittleEndian, arrayBuffer, options, defaultOptions, resolve) {
      let gltfVer = dataView.getUint32(4, isLittleEndian);
      if (gltfVer !== 2) {
        reject('invalid version field in this binary glTF file.');
      }
      let lengthOfThisFile = dataView.getUint32(8, isLittleEndian);
      let lengthOfJSonChunkData = dataView.getUint32(12, isLittleEndian);
      let chunkType = dataView.getUint32(16, isLittleEndian);
      // 0x4E4F534A means JSON format (0x4E4F534A is 'JSON' in ASCII codes)
      if (chunkType !== 0x4E4F534A) {
        reject('invalid chunkType of chunk0 in this binary glTF file.');
      }
      let arrayBufferJSonContent = arrayBuffer.slice(20, 20 + lengthOfJSonChunkData);
      let gotText = DataUtil.arrayBufferToString(arrayBufferJSonContent);
      let gltfJson = JSON.parse(gotText);
      options = this._getOptions(defaultOptions, gltfJson, options);
      let arrayBufferBinary = arrayBuffer.slice(20 + lengthOfJSonChunkData + 8);

      let basePath = null;
      if (uri) {
        //Set the location of glb file as basePath
        basePath = uri.substring(0, uri.lastIndexOf('/')) + '/';
      }

      let promise = this._loadInner(arrayBufferBinary, basePath, gltfJson, options);
      promise.then((gltfJson) => {
        console.log('Resoureces loading done!');
        resolve(gltfJson[0][0]);
      });
    }

    _loadAsTextJson(arrayBuffer, uri, options, defaultOptions, resolve) {
      let gotText = DataUtil.arrayBufferToString(arrayBuffer);
      let basePath = null;
      if (uri) {
        //Set the location of gltf file as basePath
        basePath = uri.substring(0, uri.lastIndexOf('/')) + '/';
      }
      let gltfJson = JSON.parse(gotText);
      options = this._getOptions(defaultOptions, gltfJson, options);
      let promise = this._loadInner(null, basePath, gltfJson, options);
      promise.then((gltfJson) => {
        console.log('Resoureces loading done!');
        resolve(gltfJson[0][0]);
      });
    }

    _loadInner(arrayBufferBinary, basePath, gltfJson, options) {
      let promises = [];

      let resources = {
        shaders: [],
        buffers: [],
        images: []
      };
      promises.push(this._loadResources(arrayBufferBinary, basePath, gltfJson, options, resources));
      promises.push(new Promise(((resolve, reject) => {
        this._loadJsonContent(gltfJson, resources, options);
        resolve();
      })));

      return Promise.all(promises);
    }

    _loadJsonContent(gltfJson, resources, options) {

      // Scene
      this._loadDependenciesOfScenes(gltfJson);

      // Node
      this._loadDependenciesOfNodes(gltfJson);

      // Node Transformation
  //    this._loadTransformationsOfNodes(gltfJson);

      // Mesh
      this._loadDependenciesOfMeshes(gltfJson);

      // Material
      this._loadDependenciesOfMaterials(gltfJson);

      // Texture
      this._loadDependenciesOfTextures(gltfJson);

      // Joint
      this._loadDependenciesOfJoints(gltfJson);

      // Animation
      this._loadDependenciesOfAnimations(gltfJson);

      // Accessor
      this._loadDependenciesOfAccessors(gltfJson);

      // BufferView
      this._loadDependenciesOfBufferViews(gltfJson);

      if (gltfJson.asset === void 0) {
        gltfJson.asset = {};
      }
      if (gltfJson.asset.extras === void 0) {
        gltfJson.asset.extras = {};
      }
      gltfJson.asset.extras.glboostOptions = options;

    }

    _loadDependenciesOfScenes(gltfJson) {
      for (let scene of gltfJson.scenes) {
        scene.nodesIndices = scene.nodes.concat();
        for (let i in scene.nodesIndices) {
          scene.nodes[i] = gltfJson.nodes[scene.nodesIndices[i]];
        }
      }
    }

    _loadDependenciesOfNodes(gltfJson) {

      for (let node of gltfJson.nodes) {

        // Hierarchy
        if (node.children) {
          node.childrenIndices = node.children.concat();
          node.children = [];
          for (let i in node.childrenIndices) {
            node.children[i] = gltfJson.nodes[node.childrenIndices[i]];
          }
        }
   
        // Mesh
        if (node.mesh !== void 0 && gltfJson.meshes !== void 0) {
          node.meshIndex = node.mesh;
          node.mesh = gltfJson.meshes[node.meshIndex];
        }

        // Skin
        if (node.skin !== void 0 && gltfJson.skins !== void 0) {
          node.skinIndex = node.skin;
          node.skin = gltfJson.skins[node.skinIndex];
          if (node.mesh.extras === void 0) {
            node.mesh.extras = {};
          }

          node.mesh.extras._skin = node.skin;
        }

        // Camera
        if (node.camera !== void 0 && gltfJson.cameras !== void 0) {
          node.cameraIndex = node.camera;
          node.camera = gltfJson.cameras[node.cameraIndex];
        }

      }


    }
    
    _loadDependenciesOfMeshes(gltfJson) {
      // Mesh
      for (let mesh of gltfJson.meshes) {
        for (let primitive of mesh.primitives) {
          if (primitive.material !== void 0) {
            primitive.materialIndex = primitive.material;
            primitive.material = gltfJson.materials[primitive.materialIndex];  
          }

          primitive.attributesindex = Object.assign({}, primitive.attributes);
          for (let attributeName in primitive.attributesindex) {
            if (primitive.attributesindex[attributeName] >= 0) {
              let accessor = gltfJson.accessors[primitive.attributesindex[attributeName]];
              accessor.extras = {
                toGetAsTypedArray: true
              };
              primitive.attributes[attributeName] = accessor;
            } else {
              primitive.attributes[attributeName] = void 0;
            }
          }

          if (primitive.indices !== void 0) {
            primitive.indicesIndex = primitive.indices;
            primitive.indices = gltfJson.accessors[primitive.indicesIndex];
          }
        }
      }
    }

    _loadDependenciesOfMaterials(gltfJson) {
      // Material
      if (gltfJson.materials) {
        for (let material of gltfJson.materials) {
          if (material.pbrMetallicRoughness) {
            let baseColorTexture = material.pbrMetallicRoughness.baseColorTexture;
            if (baseColorTexture !== void 0) {
              baseColorTexture.texture = gltfJson.textures[baseColorTexture.index];
            }
            let metallicRoughnessTexture = material.pbrMetallicRoughness.metallicRoughnessTexture;
            if (metallicRoughnessTexture !== void 0) {
              metallicRoughnessTexture.texture = gltfJson.textures[metallicRoughnessTexture.index];
            }
          }

          let normalTexture = material.normalTexture;
          if (normalTexture !== void 0) {
            normalTexture.texture = gltfJson.textures[normalTexture.index];
          }
        }
      }
    }

    _loadDependenciesOfTextures(gltfJson) {
      // Texture
      if (gltfJson.textures) {
        for (let texture of gltfJson.textures) {
          if (texture.sampler !== void 0) {
            texture.samplerIndex = texture.sampler;
            texture.sampler = gltfJson.samplers[texture.samplerIndex];
          }
          if (texture.source !== void 0) {
            texture.sourceIndex = texture.source;
            texture.image = gltfJson.images[texture.sourceIndex];
          }
        }
      }
    }

    _loadDependenciesOfJoints(gltfJson) {
      if (gltfJson.skins) {
        for (let skin of gltfJson.skins) {
          skin.skeletonIndex = skin.skeleton;
          skin.skeleton = gltfJson.nodes[skin.skeletonIndex];

          skin.inverseBindMatricesIndex = skin.inverseBindMatrices;
          skin.inverseBindMatrices = gltfJson.accessors[skin.inverseBindMatricesIndex];

          skin.jointsIndices = skin.joints;
          skin.joints = [];
          for (let jointIndex of skin.jointsIndices) {
            skin.joints.push(gltfJson.nodes[jointIndex]);
          }
          
        }
    
      }
    }


    _loadDependenciesOfAnimations(gltfJson) {
      if (gltfJson.animations) {
        for (let animation of gltfJson.animations) {
          for (let channel of animation.channels) {
            channel.samplerIndex = channel.sampler;
            channel.sampler = animation.samplers[channel.samplerIndex];
            
            channel.target.nodeIndex = channel.target.node;
            channel.target.node = gltfJson.nodes[channel.target.nodeIndex];          
          }
          for (let channel of animation.channels) {
            channel.sampler.inputIndex = channel.sampler.input;
            channel.sampler.outputIndex = channel.sampler.output;
            channel.sampler.input = gltfJson.accessors[channel.sampler.inputIndex];
            channel.sampler.output = gltfJson.accessors[channel.sampler.outputIndex];
            if (channel.target.path === 'rotation') {
              if (channel.sampler.output.extras === void 0) {
                channel.sampler.output.extras = {};
              }
              channel.sampler.output.extras.quaternionIfVec4 = true;
            }
          }
        }
      }
    }

    _loadDependenciesOfAccessors(gltfJson) {
      // Accessor
      for (let accessor of gltfJson.accessors) {
        if (accessor.bufferView !== void 0) {
          accessor.bufferViewIndex = accessor.bufferView;
          accessor.bufferView = gltfJson.bufferViews[accessor.bufferViewIndex];
        }
      }
    }

    _loadDependenciesOfBufferViews(gltfJson) {
      // BufferView
      for (let bufferView of gltfJson.bufferViews) {
        if (bufferView.buffer !== void 0) {
          bufferView.bufferIndex = bufferView.buffer;
          bufferView.buffer = gltfJson.buffers[bufferView.bufferIndex];
        }
      }
    }

    
  //  _loadTransformationsOfNodes(gltfJson) {  }

    _loadResources(arrayBufferBinary, basePath, gltfJson, options, resources) {
      let promisesToLoadResources = [];

      // Shaders Async load
      for (let i in gltfJson.shaders) {
        resources.shaders[i] = {};

        let shaderJson = gltfJson.shaders[i];
        let shaderType = shaderJson.type;
        if (typeof shaderJson.extensions !== 'undefined' && typeof shaderJson.extensions.KHR_binary_glTF !== 'undefined') {
          resources.shaders[i].shaderText = this._accessBinaryAsShader(shaderJson.extensions.KHR_binary_glTF.bufferView, gltfJson, arrayBufferBinary);
          resources.shaders[i].shaderType = shaderType;
          continue;
        }

        let shaderUri = shaderJson.uri;

        if (options.files) {
          const splitted = shaderUri.split('/');
          const filename = splitted[splitted.length - 1];
          if (options.files[filename]) {
            const arrayBuffer = options.files[filename];
            shaders[shaderName].shaderText = DataUtil.arrayBufferToString(arrayBuffer);
            shaders[shaderName].shaderType = shaderType;
            continue;
          }
        }

        if (shaderUri.match(/^data:/)) {
          promisesToLoadResources.push(
            new Promise((resolve, rejected) => {
              let arrayBuffer = DataUtil.base64ToArrayBuffer(shaderUri);
              resources.shaders[i].shaderText = DataUtil.arrayBufferToString(arrayBuffer);
              resources.shaders[i].shaderType = shaderType;
              resolve();
            })
          );
        } else {
          shaderUri = basePath + shaderUri;
          promisesToLoadResources.push(
            DataUtil.loadResourceAsync(shaderUri, false,
              (resolve, response)=>{
                resources.shaders[i].shaderText = response;
                resources.shaders[i].shaderType = shaderType;
                resolve(gltfJson);
              },
              (reject, error)=>{

              }
            )
          );
        }
      }

      // Buffers Async load
      for (let i in gltfJson.buffers) {
        let bufferInfo = gltfJson.buffers[i];

        let splitted = null;
        let filename = null;
        if (bufferInfo.uri) {
          splitted = bufferInfo.uri.split('/');
          filename = splitted[splitted.length - 1];  
        }
        if (typeof bufferInfo.uri === 'undefined') {
          promisesToLoadResources.push(
            new Promise((resolve, rejected) => {
              resources.buffers[i] = arrayBufferBinary;
              bufferInfo.buffer = arrayBufferBinary;
              resolve(gltfJson);
            }
          ));
        } else if (bufferInfo.uri.match(/^data:application\/octet-stream;base64,/)) {
          promisesToLoadResources.push(
            new Promise((resolve, rejected) => {
              let arrayBuffer = DataUtil.base64ToArrayBuffer(bufferInfo.uri);
              resources.buffers[i] = arrayBuffer;
              bufferInfo.buffer = arrayBuffer;
              resolve(gltfJson);
            })
          );
        } else if (options.files && options.files[filename]) {
          promisesToLoadResources.push(
            new Promise((resolve, rejected) => {
              const arrayBuffer = options.files[filename];
              resources.buffers[i] = arrayBuffer;
              bufferInfo.buffer = arrayBuffer;
              resolve(gltfJson);
            }
          ));
        } else {
          promisesToLoadResources.push(
            DataUtil.loadResourceAsync(basePath + bufferInfo.uri, true,
              (resolve, response)=>{
                resources.buffers[i] = response;
                bufferInfo.buffer = response;
                resolve(gltfJson);
              },
              (reject, error)=>{

              }
            )
          );
        }
      }

      // Textures Async load
      for (let i in gltfJson.images) {
        let imageJson = gltfJson.images[i];
        //let imageJson = gltfJson.images[textureJson.source];
        //let samplerJson = gltfJson.samplers[textureJson.sampler];

        let imageUri = null;

        if (typeof imageJson.uri === 'undefined') {
          imageUri = this._accessBinaryAsImage(imageJson.bufferView, gltfJson, arrayBufferBinary, imageJson.mimeType);
        } else {
          let imageFileStr = imageJson.uri;
          const splitted = imageFileStr.split('/');
          const filename = splitted[splitted.length - 1];
          if (options.files && options.files[filename]) {
            const arrayBuffer = options.files[filename];
            const splitted = filename.split('.');
            const fileExtension = splitted[splitted.length - 1];
            imageUri = this._accessArrayBufferAsImage(arrayBuffer, fileExtension);
          } else if (imageFileStr.match(/^data:/)) {
            imageUri = imageFileStr;
          } else {
            imageUri = basePath + imageFileStr;
          }
        }
        if (options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
          if (options.isTextureImageToLoadPreMultipliedAlpha) ;
        } else { // if is NOT Needed To Multiply AlphaToColor Of PixelOutput
          if (options.isTextureImageToLoadPreMultipliedAlpha) ;        
        }

        // let texture = glBoostContext.createTexture(null, textureName, {
        //   'TEXTURE_MAG_FILTER': samplerJson.magFilter,
        //   'TEXTURE_MIN_FILTER': samplerJson.minFilter,
        //   'TEXTURE_WRAP_S': samplerJson.wrapS,
        //   'TEXTURE_WRAP_T': samplerJson.wrapT,
        //   'UNPACK_PREMULTIPLY_ALPHA_WEBGL': isNeededToMultiplyAlphaToColorOfTexture
        // });
        
        if (options.extensionLoader && options.extensionLoader.setUVTransformToTexture) {
          options.extensionLoader.setUVTransformToTexture(texture, samplerJson);
        }
        
        promisesToLoadResources.push(new Promise((resolve, reject)=> {
          let img = new Image();
          img.src = imageUri;
          imageJson.image = img;
          if (imageUri.match(/^data:/)) {
            resolve(gltfJson);
          } else {
            img.crossOrigin = 'Anonymous';
            img.onload = () => {
              resolve(gltfJson);
            };
          }

          resources.images[i] = img;
        }));
      }

      return Promise.all(promisesToLoadResources);
    }

    _sliceBufferViewToArrayBuffer(json, bufferViewStr, arrayBuffer) {
      let bufferViewJson = json.bufferViews[bufferViewStr];
      let byteOffset = bufferViewJson.byteOffset;
      let byteLength = bufferViewJson.byteLength;
      let arrayBufferSliced = arrayBuffer.slice(byteOffset, byteOffset + byteLength);
      return arrayBufferSliced;
    }

    _accessBinaryAsImage(bufferViewStr, json, arrayBuffer, mimeType) {
      let arrayBufferSliced = this._sliceBufferViewToArrayBuffer(json, bufferViewStr, arrayBuffer);
      return this._accessArrayBufferAsImage(arrayBufferSliced, mimeType);
    }

    _accessArrayBufferAsImage(arrayBuffer, imageType) {
      let bytes = new Uint8Array(arrayBuffer);
      let binaryData = '';
      for (let i = 0, len = bytes.byteLength; i < len; i++) {
        binaryData += String.fromCharCode(bytes[i]);
      }
      let imgSrc = '';
      if (imageType === 'image/jpeg' || imageType.toLowerCase() === 'jpg' || imageType.toLowerCase() === 'jpeg') {
        imgSrc = "data:image/jpeg;base64,";
      }
      else if (imageType == 'image/png' || imageType.toLowerCase() === 'png') {
        imgSrc = "data:image/png;base64,";
      }
      else if (imageType == 'image/gif' || imageType.toLowerCase() === 'gif') {
        imgSrc = "data:image/gif;base64,";
      }
      else if (imageType == 'image/bmp' || imageType.toLowerCase() === 'bmp') {
        imgSrc = "data:image/bmp;base64,";
      }
      else {
        imgSrc = "data:image/unknown;base64,";
      }
      let dataUrl = imgSrc + DataUtil.btoa(binaryData);
      return dataUrl;
    }


  }

  GLBoost$1["GLTF2Loader"] = GLTF2Loader;

  let singleton$7 = Symbol();
  let singletonEnforcer$5 = Symbol();

  /**
   * 
   */
  class ModelConverter {

    /**
     * The constructor of GLTFLoader class. But you cannot use this constructor directly because of this class is a singleton class. Use getInstance() static method.
     * @param {Symbol} enforcer a Symbol to forbid calling this constructor directly
     */
    constructor(enforcer) {
      if (enforcer !== singletonEnforcer$5) {
        throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");
      }
    }

    /**
     * The static method to get singleton instance of this class.
     * @return {GLTFLoader} the singleton instance of GLTFLoader class
     */
    static getInstance() {
      if (!this[singleton$7]) {
        this[singleton$7] = new ModelConverter(singletonEnforcer$5);
      }
      return this[singleton$7];
    }

    _getDefaultShader(options) {
      let defaultShader = null;

      if (options && typeof options.defaultShaderClass !== "undefined") {
        if (typeof options.defaultShaderClass === "string") {
          defaultShader = GLBoost$1[options.defaultShaderClass];
        } else {
          defaultShader = options.defaultShaderClass;
        }
      }

      return defaultShader;
    }

    convertToGLBoostModel(glBoostContext, gltfModel) {

      // load binary data
      for (let accessor of gltfModel.accessors) {
        this._accessBinaryWithAccessor(accessor);
      }

      // Mesh data
      let glboostMeshes = this._setupMesh(glBoostContext, gltfModel);

      let groups = [];
      for (let node_i in gltfModel.nodes) {
        let group = glBoostContext.createGroup();
        groups.push(group);
      }

      // Transfrom
      this._setupTransform(gltfModel, groups);

      // Skeleton
      this._setupSkeleton(glBoostContext, gltfModel, groups, glboostMeshes);

      // Hierarchy
      this._setupHierarchy(glBoostContext, gltfModel, groups, glboostMeshes);

      // Animation
      this._setupAnimation(gltfModel, groups);

      // Root Group
      let rootGroup = glBoostContext.createGroup();
      if (gltfModel.scenes[0].nodesIndices) {
        for (let nodesIndex of gltfModel.scenes[0].nodesIndices) {
          rootGroup.addChild(groups[nodesIndex], true);
        }  
      }

      // Post Skeletal Proccess
      for (let glboostMesh of glboostMeshes) {
        if (glboostMesh instanceof M_SkeletalMesh) {
          if (!glboostMesh.jointsHierarchy) {
            glboostMesh.jointsHierarchy = rootGroup;
          }
        }
      }

      let options = gltfModel.asset.extras.glboostOptions;
      if (options.loaderExtension && options.loaderExtension.setAssetPropertiesToRootGroup) {
        options.loaderExtension.setAssetPropertiesToRootGroup(rootGroup, json.asset);
      }

      return rootGroup;
    }

    _setupTransform(gltfModel, groups) {
      for (let node_i in gltfModel.nodes) {
        let group = groups[node_i];
        let nodeJson = gltfModel.nodes[node_i];

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
          group.matrix = new Matrix44$2(nodeJson.matrix, true);
        }
      }
    }

    _setupHierarchy(glBoostContext, gltfModel, groups, glboostMeshes) {

      for (let node_i in gltfModel.nodes) {
        let node = gltfModel.nodes[parseInt(node_i)];
        let parentGroup = groups[node_i];
        if (node.mesh) {
          parentGroup.addChild(glboostMeshes[node.meshIndex], true);
        }
        if (node.childrenIndices) {
          for (let childNode_i of node.childrenIndices) {
            let childGroup = groups[childNode_i];
            parentGroup.addChild(childGroup, true);
          }  
        }
      }

    }

    _setupAnimation(gltfModel, groups) {
      if (gltfModel.animations) {
        for (let animation of gltfModel.animations) {

          for (let channel of animation.channels) {
            let animInputArray = channel.sampler.input.extras.vertexAttributeArray;

            let animOutputArray = channel.sampler.output.extras.vertexAttributeArray;
            let animationAttributeName = '';
            if (channel.target.path === 'translation') {
              animationAttributeName = 'translate';
            } else if (channel.target.path === 'rotation') {
              animationAttributeName = 'quaternion';
            } else {
              animationAttributeName = channel.target.path;
            }

            let group = groups[channel.target.nodeIndex];
            if (group) {
              group.setAnimationAtLine('time', animationAttributeName, animInputArray, animOutputArray);
              group.setActiveAnimationLine('time');
            }
          }
        }
      }
    }

    _setupSkeleton(glBoostContext, gltfModel, groups, glboostMeshes) {
      for (let node_i in gltfModel.nodes) {
        let node = gltfModel.nodes[node_i];
        let group = groups[node_i];
        if (node.skin && node.skin.skeleton) {
          group._isRootJointGroup = true;
          if (node.mesh) {
            let glboostMesh = glboostMeshes[node.meshIndex];
            glboostMesh.jointsHierarchy = groups[node.skin.skeletonIndex];
          }
        }

        if (node.skin && node.skin.joints) {
          for (let joint_i of node.skin.jointsIndices) {
            let joint = node.skin.joints[joint_i];
            let options = gltfModel.asset.extras.glboostOptions;
            let glboostJoint = glBoostContext.createJoint(options.isExistJointGizmo);
            glboostJoint._glTFJointIndex = joint_i;
  //          glboostJoint.userFlavorName = nodeJson.jointName;
            let group = groups[joint_i];
            group.addChild(glboostJoint, true);
          }
        }
      }
    }

    _setupMesh(glBoostContext, gltfModel) {
      let glboostMeshes = [];
      for (let mesh of gltfModel.meshes) {
        let geometry = null;
        let glboostMesh = null;
        if (mesh.extras && mesh.extras._skin && mesh.extras._skin.inverseBindMatrices) {
          geometry = glBoostContext.createSkeletalGeometry();
          glboostMesh = glBoostContext.createSkeletalMesh(geometry, null);
          glboostMesh.gltfJointIndices = mesh.extras._skin.jointsIndices;
          glboostMesh.inverseBindMatrices = mesh.extras._skin.inverseBindMatrices.extras.vertexAttributeArray;
        } else {
          geometry = glBoostContext.createGeometry();
          glboostMesh = glBoostContext.createMesh(geometry);
        }
        glboostMeshes.push(glboostMesh);

        let options = gltfModel.asset.extras.glboostOptions;
        if (options.isMeshTransparentAsDefault) {
          glboostMeshes.isTransparent = true;
        }

        let _indicesArray = [];
        let _positions = [];
        let _normals = [];
        let vertexData = {
          position: _positions,
          normal: _normals,
          components: {},
          componentBytes: {},
          componentType: {}
        };
        let additional = {
          'joint': [],
          'weight': [],
          'texcoord': [],
          'color': []
        };

        let dataViewMethodDic = {};
        let materials = [];
        let indicesAccumulatedLength = 0;

        for (let i in mesh.primitives) {
          let primitive = mesh.primitives[i];
          {
            let accessor = primitive.attributes.POSITION;
            _positions[i] = accessor.extras.vertexAttributeArray;
            vertexData.components.position = accessor.extras.componentN;
            vertexData.componentBytes.position = accessor.extras.componentBytes;
            vertexData.componentType.position = accessor.componentType;
            dataViewMethodDic.position = accessor.extras.dataViewMethod;
          }
            
          let indices = null;
          if (typeof primitive.indices !== 'undefined') {
            primitive.indices.indices = gltfModel.accessors[primitive.indicesIndex];
            indices = primitive.indices.indices.extras.vertexAttributeArray;
            for (let j=0; j<indices.length; j++) {
              indices[j] = indicesAccumulatedLength + indices[j];
            }
            _indicesArray[i] = indices;
            indicesAccumulatedLength += _positions[i].length /  vertexData.components.position;
          }

          {
            let accessor = primitive.attributes.NORMAL;
            if (accessor) {
              _normals[i] = accessor.extras.vertexAttributeArray;
              vertexData.components.normal = accessor.extras.componentN;
              vertexData.componentBytes.normal = accessor.extras.componentBytes;
              vertexData.componentType.normal = accessor.componentType;
              dataViewMethodDic.normal = accessor.extras.dataViewMethod;
            }
            
            accessor = primitive.attributes.COLOR_0;
            if (accessor) {
              additional['color'][i] = accessor.extras.vertexAttributeArray;
              vertexData.components.color = accessor.extras.componentN;
              vertexData.componentBytes.color = accessor.extras.componentBytes;
              vertexData.componentType.color = accessor.componentType;
              dataViewMethodDic.color = accessor.extras.dataViewMethod;
            }
          }


          {
            let accessor = primitive.attributes.JOINTS_0;
            if (accessor) {
              additional['joint'][i] = accessor.extras.vertexAttributeArray;
              vertexData.components.joint = accessor.extras.componentN;
              vertexData.componentBytes.joint = accessor.extras.componentBytes;
              vertexData.componentType.joint = accessor.componentType;
              dataViewMethodDic.joint = accessor.extras.dataViewMethod;
            }
            accessor = primitive.attributes.WEIGHTS_0;
            if (accessor) {
              additional['weight'][i] = accessor.extras.vertexAttributeArray;
              vertexData.components.weight = accessor.extras.componentN;
              vertexData.componentBytes.weight = accessor.extras.componentBytes;
              vertexData.componentType.weight = accessor.componentType;
              dataViewMethodDic.weight = accessor.extras.dataViewMethod;
            }
          }

          if (primitive.material) {
            var texcoords = null;
    
            let material = primitive.material;
    
            let glboostMaterial = null;
            if (options.loaderExtension && options.loaderExtension.createClassicMaterial) {
              glboostMaterial = options.loaderExtension.createClassicMaterial(glBoostContext);
            } else {
              glboostMaterial = glBoostContext.createClassicMaterial();
            }
            if (options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
              glboostMaterial.shaderParameters.isNeededToMultiplyAlphaToColorOfPixelOutput = options.isNeededToMultiplyAlphaToColorOfPixelOutput;
            }
            //this._materials.push(glboostMaterial);
    
            let accessor = primitive.attributes.TEXCOORD_0;

            texcoords = this._setupMaterial(glBoostContext, gltfModel, glboostMaterial, material, accessor, additional, vertexData, dataViewMethodDic, _positions, indices, geometry, i);
    
            materials.push(glboostMaterial);
          } else {
            let glboostMaterial = null;
            if (options.loaderExtension && options.loaderExtension.createClassicMaterial) {
              glboostMaterial = options.loaderExtension.createClassicMaterial(glBoostContext);
            } else {
              glboostMaterial = glBoostContext.createClassicMaterial();
            }

            let options = gltfModel.asset.extras.glboostOptions;
            const defaultShader = this._getDefaultShader(options);
            if (defaultShader) {
              glboostMaterial.shaderClass = defaultShader;
            } else {
              glboostMaterial.baseColor = new Vector4(0.5, 0.5, 0.5, 1);
            }
            materials.push(glboostMaterial);
          }
        }

        if (mesh.primitives.length > 1) {
          let lengthDic = {index: 0, position: 0, normal: 0, joint: 0, weight: 0, texcoord: 0};
          for (let i = 0; i < mesh.primitives.length; i++) {
            //lengthDic.index += _indicesArray[i].length;
            lengthDic.position += _positions[i].length;
            if (_normals[i]) {
              lengthDic.normal += _normals[i].length;
            }
            if (typeof additional['joint'][i] !== 'undefined') {
              lengthDic.joint += additional['joint'][i].length;
            }
            if (typeof additional['weight'][i] !== 'undefined') {
              lengthDic.weight += additional['weight'][i].length;
            }
            if (typeof additional['texcoord'][i] !== 'undefined') {
              lengthDic.texcoord += additional['texcoord'][i].length;
            }
            if (typeof additional['color'][i] !== 'undefined') {
              lengthDic.color += additional['color'][i].length;
            }
          }
    
          function getTypedArray(dataViewMethod, length) {
            let vertexAttributeArray = null;
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
          }
    
          for (let attribName in dataViewMethodDic) {
            let newTypedArray = getTypedArray(dataViewMethodDic[attribName], lengthDic[attribName]);
            let offset = 0;
            for (let i = 0; i < mesh.primitives.length; i++) {
    
              let array = null;
    
              if (attribName === 'position') {
                array = _positions[i];
              } else if (attribName === 'normal') {
                array = _normals[i];
              } else if (attribName === 'joint') {
                array = additional['joint'][i];
              } else if (attribName === 'weight') {
                array = additional['weight'][i];
              } else if (attribName === 'texcoord') {
                array = additional['texcoord'][i];
              } else if (attribName === 'color') {
                array = additional['color'][i];
              }
    
              if (array) {
                newTypedArray.set(array, offset);
                offset += array.length;
              }
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
            } else if (attribName === 'color') {
              additional['color'] = newTypedArray;
            }
          }
    
    
        } else {
          vertexData.position = _positions[0];
          vertexData.normal = _normals[0];
          additional['joint'] = additional['joint'][0];
          additional['weight'] = additional['weight'][0];
          additional['texcoord'] = additional['texcoord'][0];
          additional['color'] = additional['color'][0];
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
        if (typeof additional['color'] === 'undefined' || additional['color'].length === 0) {
          delete additional['color'];
        }
    
    
        if (_indicesArray.length === 0) {
          _indicesArray = null;
        }
    
        geometry.setVerticesData(ArrayUtil.merge(vertexData, additional), _indicesArray);
        geometry.materials = materials;
      }

      return glboostMeshes;
    }

    _setupMaterial(glBoostContext, gltfModel, gltfMaterial, materialJson, accessor, additional, vertexData, dataViewMethodDic, _positions, indices, geometry, i) {
      let options = gltfModel.asset.extras.glboostOptions;

      if (accessor) {
        additional['texcoord'][i] =  accessor.extras.vertexAttributeArray;
        vertexData.components.texcoord = accessor.extras.componentN;
        vertexData.componentBytes.texcoord = accessor.extras.componentBytes;
        vertexData.componentType.texcoord = accessor.componentType;
        dataViewMethodDic.texcoord = accessor.extras.dataViewMethod;

        let setTextures = (materialJson)=> {
          if (materialJson.pbrMetallicRoughness) {
            let baseColorTexture = materialJson.pbrMetallicRoughness.baseColorTexture;
            if (baseColorTexture) {
              let sampler = baseColorTexture.texture.sampler;

              let isNeededToMultiplyAlphaToColorOfTexture = false;

              if (options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
                if (options.isTextureImageToLoadPreMultipliedAlphaAsDefault) ; else {
                  isNeededToMultiplyAlphaToColorOfTexture = true;
                }
              } else { // if is NOT Needed To Multiply AlphaToColor Of PixelOutput
                if (options.isTextureImageToLoadPreMultipliedAlphaAsDefault) ;
              }

              if (options && options.statesOfElements) {
                for (let statesInfo of options.statesOfElements) {
                  if (statesInfo.targets) {
                    for (let target of statesInfo.targets) {
                      let isMatch = false;
                      let specifyMethod = statesInfo.specifyMethod !== void 0 ? statesInfo.specifyMethod : GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME;
                      switch (specifyMethod) {
                        case GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME:
                          isMatch = group.userFlavorName === target; break;
                        case GLBoost$1.QUERY_TYPE_INSTANCE_NAME:
                          isMatch = group.instanceName === target; break;
                        case GLBoost$1.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR:
                          isMatch = group.instanceNameWithUserFlavor === target; break;                      
                      }

                      if (isMatch) {
                        if (options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
                          if (statesInfo.isTextureImageToLoadPreMultipliedAlpha) ; else {
                            isNeededToMultiplyAlphaToColorOfTexture = true;
                          }
                        } else { // if is NOT Needed To Multiply AlphaToColor Of PixelOutput
                          if (statesInfo.isTextureImageToLoadPreMultipliedAlpha) ;
                        }
                      }

                      //texture.setParameter('UNPACK_PREMULTIPLY_ALPHA_WEBGL', isNeededToMultiplyAlphaToColorOfTexture);
  //                    texture.loadWebGLTexture();
                    }
                  }
                }
              }

              let texture = glBoostContext.createTexture(baseColorTexture.texture.image.image, '', {
                'TEXTURE_MAG_FILTER': sampler === void 0 ? GLBoost$1.LINEAR : sampler.magFilter,
                'TEXTURE_MIN_FILTER': sampler === void 0 ? GLBoost$1.LINEAR_MIPMAP_LINEAR : sampler.minFilter,
                'TEXTURE_WRAP_S': sampler === void 0 ? GLBoost$1.REPEAT : sampler.wrapS,
                'TEXTURE_WRAP_T': sampler === void 0 ? GLBoost$1.REPEAT : sampler.wrapT,
                'UNPACK_PREMULTIPLY_ALPHA_WEBGL': isNeededToMultiplyAlphaToColorOfTexture
              });
              gltfMaterial.setTexture(texture, GLBoost$1.TEXTURE_PURPOSE_DIFFUSE);
            }

            let enables = [];
            if (options.isBlend) {
              enables.push(3042);
            }
            if (options.isDepthTest) {
              enables.push(2929);
            }
            gltfMaterial.states.enable = enables; // It means, [gl.BLEND];
            if (options.isBlend && options.isNeededToMultiplyAlphaToColorOfPixelOutput) {
              gltfMaterial.states.functions.blendFuncSeparate = [1, 771, 1, 771];
            }
            gltfMaterial.globalStatesUsage = GLBoost$1.GLOBAL_STATES_USAGE_IGNORE;
          }
        };
        setTextures(materialJson);

      } else {
        if (typeof vertexData.components.texcoord !== 'undefined') {
          // If texture coordinates existed even once in the previous loop
          let emptyTexcoords = [];
          let componentN = vertexData.components.position;
          let length = _positions[i].length / componentN;
          for (let k = 0; k < length; k++) {
            emptyTexcoords.push(0);
            emptyTexcoords.push(0);
          }
          additional['texcoord'][i] = new Float32Array(emptyTexcoords);
          vertexData.components.texcoord = 2;
          vertexData.componentBytes.texcoord = 4;
          dataViewMethodDic.texcoord = 'getFloat32';
        }
      }

      if (materialJson.pbrMetallicRoughness && materialJson.pbrMetallicRoughness.baseColorFactor) {
        let value = materialJson.pbrMetallicRoughness.baseColorFactor;
        gltfMaterial.baseColor = new Vector4(value[0], value[1], value[2], value[3]);
      }

      if (indices !== null) {
        gltfMaterial.setVertexN(geometry, indices.length);
      }
      
      const defaultShader = this._getDefaultShader(options);
      if (defaultShader) {
        gltfMaterial.shaderClass = defaultShader;
      }
    }

    _adjustByteAlign(typedArrayClass, arrayBuffer, alignSize, byteOffset, length) {
      if (( byteOffset % alignSize ) != 0) {
        return new typedArrayClass(arrayBuffer.slice(byteOffset), 0, length);
      } else {
        return new typedArrayClass(arrayBuffer, byteOffset, length);
      }
    }

    _checkBytesPerComponent(accessor) {

      var bytesPerComponent = 0;
      switch (accessor.componentType) {
        case 5120: // gl.BYTE
          bytesPerComponent = 1;
          break;
        case 5121: // gl.UNSIGNED_BYTE
          bytesPerComponent = 1;
          break;
        case 5122: // gl.SHORT
          bytesPerComponent = 2;
          break;
        case 5123: // gl.UNSIGNED_SHORT
          bytesPerComponent = 2;
          break;
        case 5124: // gl.INT
          bytesPerComponent = 4;
          break;
        case 5125: // gl.UNSIGNED_INT
          bytesPerComponent = 4;
          break;
        case 5126: // gl.FLOAT
          bytesPerComponent = 4;
          break;
        default:
          break;
      }
      return bytesPerComponent;
    }

    _checkComponentNumber(accessor) {

      var componentN = 0;
      switch (accessor.type) {
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

    _checkDataViewMethod(accessor) {
      var dataViewMethod = '';
      switch (accessor.componentType) {
        case 5120: // gl.BYTE
          dataViewMethod = 'getInt8';
          break;
        case 5121: // gl.UNSIGNED_BYTE
          dataViewMethod = 'getUint8';
          break;
        case 5122: // gl.SHORT
          dataViewMethod = 'getInt16';
          break;
        case 5123: // gl.UNSIGNED_SHORT
          dataViewMethod = 'getUint16';
          break;
        case 5124: // gl.INT
          dataViewMethod = 'getInt32';
          break;
        case 5125: // gl.UNSIGNED_INT
          dataViewMethod = 'getUint32';
          break;
        case 5126: // gl.FLOAT
          dataViewMethod = 'getFloat32';
          break;
        default:
          break;
      }
      return dataViewMethod;
    }
    
    static _isSystemLittleEndian() {
      return !!(new Uint8Array((new Uint16Array([0x00ff])).buffer))[0];
    }

    _accessBinaryWithAccessor(accessor) {
      var bufferView = accessor.bufferView;
      const byteOffset = bufferView.byteOffset + (accessor.byteOffset !== void 0 ? accessor.byteOffset : 0);
      var buffer = bufferView.buffer;
      var arrayBuffer = buffer.buffer;

      let componentN = this._checkComponentNumber(accessor);
      let componentBytes = this._checkBytesPerComponent(accessor);
      let dataViewMethod = this._checkDataViewMethod(accessor);
      if (accessor.extras === void 0) {
        accessor.extras = {};
      }

      accessor.extras.componentN = componentN;
      accessor.extras.componentBytes = componentBytes;
      accessor.extras.dataViewMethod = dataViewMethod;

      var byteLength = componentBytes * componentN * accessor.count;

      var vertexAttributeArray = [];

      if (accessor.extras && accessor.extras.toGetAsTypedArray) {
        if (ModelConverter._isSystemLittleEndian()) {
          if (dataViewMethod === 'getFloat32') {
            vertexAttributeArray = this._adjustByteAlign(Float32Array, arrayBuffer, 4, byteOffset, byteLength / componentBytes);
          } else if (dataViewMethod === 'getInt8') {
            vertexAttributeArray = new Int8Array(arrayBuffer, byteOffset, byteLength / componentBytes);
          } else if (dataViewMethod === 'getUint8') {
            vertexAttributeArray = new Uint8Array(arrayBuffer, byteOffset, byteLength / componentBytes);
          } else if (dataViewMethod === 'getInt16') {
            vertexAttributeArray = this._adjustByteAlign(Int16Array, arrayBuffer, 2, byteOffset, byteLength / componentBytes);
          } else if (dataViewMethod === 'getUint16') {
            vertexAttributeArray = this._adjustByteAlign(Uint16Array, arrayBuffer, 2, byteOffset, byteLength / componentBytes);
          } else if (dataViewMethod === 'getInt32') {
            vertexAttributeArray = this._adjustByteAlign(Int32Array, arrayBuffer, 4, byteOffset, byteLength / componentBytes);
          } else if (dataViewMethod === 'getUint32') {
            vertexAttributeArray = this._adjustByteAlign(Uint32Array, arrayBuffer, 4, byteOffset, byteLength / componentBytes);
          }

        } else {
          let dataView = new DataView(arrayBuffer, byteOffset, byteLength);
          let byteDelta = componentBytes * componentN;
          let littleEndian = true;
          for (let pos = 0; pos < byteLength; pos += byteDelta) {
            switch (accessor.type) {
              case 'SCALAR':
                vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
                break;
              case 'VEC2':
                vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
                vertexAttributeArray.push(dataView[dataViewMethod](pos + componentBytes, littleEndian));
                break;
              case 'VEC3':
                vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
                vertexAttributeArray.push(dataView[dataViewMethod](pos + componentBytes, littleEndian));
                vertexAttributeArray.push(dataView[dataViewMethod](pos + componentBytes * 2, littleEndian));
                break;
              case 'VEC4':
                vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
                vertexAttributeArray.push(dataView[dataViewMethod](pos + componentBytes, littleEndian));
                vertexAttributeArray.push(dataView[dataViewMethod](pos + componentBytes * 2, littleEndian));
                vertexAttributeArray.push(dataView[dataViewMethod](pos + componentBytes * 3, littleEndian));
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
        let dataView = new DataView(arrayBuffer, byteOffset, byteLength);
        let byteDelta = componentBytes * componentN;
        let littleEndian = true;
        for (let pos = 0; pos < byteLength; pos += byteDelta) {

          switch (accessor.type) {
            case 'SCALAR':
              vertexAttributeArray.push(dataView[dataViewMethod](pos, littleEndian));
              break;
            case 'VEC2':
              vertexAttributeArray.push(new Vector2(
                dataView[dataViewMethod](pos, littleEndian),
                dataView[dataViewMethod](pos+componentBytes, littleEndian)
              ));
              break;
            case 'VEC3':
              vertexAttributeArray.push(new Vector3(
                dataView[dataViewMethod](pos, littleEndian),
                dataView[dataViewMethod](pos+componentBytes, littleEndian),
                dataView[dataViewMethod](pos+componentBytes*2, littleEndian)
              ));
              break;
            case 'VEC4':
              if (accessor.extras && accessor.extras.quaternionIfVec4) {
                vertexAttributeArray.push(new Quaternion(
                  dataView[dataViewMethod](pos, littleEndian),
                  dataView[dataViewMethod](pos+componentBytes, littleEndian),
                  dataView[dataViewMethod](pos+componentBytes*2, littleEndian),
                  dataView[dataViewMethod](pos+componentBytes*3, littleEndian)
                ));
              } else {
                vertexAttributeArray.push(new Vector4(
                  dataView[dataViewMethod](pos, littleEndian),
                  dataView[dataViewMethod](pos+componentBytes, littleEndian),
                  dataView[dataViewMethod](pos+componentBytes*2, littleEndian),
                  dataView[dataViewMethod](pos+componentBytes*3, littleEndian)
                ));
              }
              break;
            case 'MAT4':
              let matrixComponents = [];
              for (let i=0; i<16; i++) {
                matrixComponents[i] = dataView[dataViewMethod](pos+componentBytes*i, littleEndian);
              }
              vertexAttributeArray.push(new Matrix44$2(matrixComponents, true));
              break;
          }

        }
      }

      accessor.extras.vertexAttributeArray = vertexAttributeArray;

      return vertexAttributeArray;
    }
  }

  GLBoost$1["ModelConverter"] = ModelConverter;

  if (typeof phina !== 'undefined') {



  phina.namespace(function() {

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

      init: function(params) {
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
        this.renderer = this.glBoostContext.createRenderer({clearColor: {red:1, green:1, blue:1, alpha:1}});
        this.scene = this.glBoostContext.createScene();
        this.expression = this.glBoostContext.createExpressionAndRenderPasses(1);
        this.expression.renderPasses[0].scene = this.scene;

        this.on('enterframe', function() {
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

      init: function (params) {
        this.superInit();

        this.width = params.width;
        this.height = params.height;

        if (params.fillStyle instanceof Vector3) {
          this.fillStyle = `rgb(${params.fillStyle.x * 255},${params.fillStyle.y * 255},${params.fillStyle.z * 255},1)`;
        } else if (params.fillStyle instanceof Vector4) {
          this.fillStyle = `rgba(${params.fillStyle.x * 255},${params.fillStyle.y * 255},${params.fillStyle.z * 255},${params.fillStyle.w})`;
        } else {
          this.fillStyle = params.fillStyle;
        }

        this.canvas2d = phina.graphics.Canvas();
        this.canvas2d.setSize(this.width, this.height);

        this.renderer2d = phina.display.CanvasRenderer(this.canvas2d);

      },

      reset: function() {
        this.canvas2d.clearColor('white', 0, 0, this.width, this.height);
        this.canvas2d.clearColor(this.fillStyle, 0, 0, this.width, this.height);
        // this.canvas2d.clear(0, 0, this.width, this.height);
        /*
         this.canvas2d.init();
         this.canvas2d.setSize(this.width, this.height);
         this.renderer2d = phina.display.CanvasRenderer(this.canvas2d);
         */
      },

      renderObject: function(obj) {
        var layer = DisplayElement();
        obj.flare('enterframe');
        obj.addChildTo(layer);
        this.renderer2d.renderObject(layer);
      },

      getImageDataURL: function() {
        return this.canvas2d.domElement.toDataURL('image/png');
      }
    });

  });
  }

  class BlinnPhongShaderSource {

    FSDefine_BlinnPhongShaderSource(in_, f, lights) {
      var shaderText = '';
      shaderText += `uniform vec3 viewPosition;\n`;
      shaderText += `uniform vec4 Kd;\n`;
      shaderText += `uniform vec4 Ks;\n`;
      shaderText += `uniform float power;\n`;
      shaderText += 'uniform vec4 ambient;\n'; // Ka * amount of ambient lights    
      
      var sampler2D = this._sampler2DShadow_func();
      
      let lightNumExceptAmbient = lights.filter((light)=>{return !light.isTypeAmbient();}).length;    
      if (lightNumExceptAmbient > 0) {
        shaderText += `uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;
        shaderText += `${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;
        shaderText += `uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;
      }

      return shaderText;
    }

    FSShade_BlinnPhongShaderSource(f, gl, lights) {
      var shaderText = '';
      shaderText += '  float depthBias = 0.005;\n';
      shaderText += '  vec4 surfaceColor = rt0;\n';
      shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
    
      for (let i=0; i<lights.length; i++) {
        let light = lights[i];      
        let isShadowEnabledAsTexture = (light.camera && light.camera.texture) ? true:false;      
        shaderText += `  {\n`;
        shaderText +=      Shader._generateLightStr(i);
        shaderText +=      Shader._generateShadowingStr(gl, i, isShadowEnabledAsTexture);
        shaderText += `    float diffuse = max(dot(lightDirection, normal), 0.0);\n`;
        shaderText += `    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n`;
        shaderText += `    vec3 viewDirection = normalize(viewPosition_world - v_position_world);\n`;
        shaderText += `    vec3 halfVec = normalize(lightDirection + viewDirection);\n`;
        shaderText += `    float specular = pow(max(dot(halfVec, normal), 0.0), power);\n`;
        shaderText += `    rt0 += spotEffect * vec4(visibilitySpecular, visibilitySpecular, visibilitySpecular, 1.0) * Ks * lightDiffuse[${i}] * vec4(specular, specular, specular, 1.0);\n`;
        shaderText += `  }\n`;
      }
  //    shaderText += '  rt0 *= (1.0 - shadowRatio);\n';
      //shaderText += '  rt0.a = 1.0;\n';
      shaderText += '  rt0.xyz += ambient.xyz;\n';
      


      return shaderText;
    }

    prepare_BlinnPhongShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      material.setUniform(shaderProgram, 'uniform_Kd', this._glContext.getUniformLocation(shaderProgram, 'Kd'));
      material.setUniform(shaderProgram, 'uniform_Ks', this._glContext.getUniformLocation(shaderProgram, 'Ks'));
      material.setUniform(shaderProgram, 'uniform_power', this._glContext.getUniformLocation(shaderProgram, 'power'));
      material.setUniform(shaderProgram, 'uniform_ambient', this._glContext.getUniformLocation(shaderProgram, 'ambient'));    
      
      return vertexAttribsAsResult;
    }
  }



  class BlinnPhongShader extends DecalShader {
    constructor(glBoostContext, basicShader) {

      super(glBoostContext, basicShader);
      BlinnPhongShader.mixin(BlinnPhongShaderSource);

      this._power = 64.0;

    }

    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);

      var Kd = material.diffuseColor;
      var Ks = material.specularColor;
      let Ka = material.ambientColor;    
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_Kd'), Kd.x, Kd.y, Kd.z, Kd.w, true);
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_Ks'), Ks.x, Ks.y, Ks.z, Ks.w, true);
      this._glContext.uniform1f(material.getUniform(glslProgram, 'uniform_power'), this._power, true);

      let ambient = Vector4.multiplyVector(Ka, scene.getAmountOfAmbientLightsIntensity());
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_ambient'), ambient.x, ambient.y, ambient.z, ambient.w, true);    

    }

    set Kd(value) {
      this._Kd = value;
    }

    get Kd() {
      return this._Kd;
    }

    set Ks(value) {
      this._Ks = value;
    }

    get Ks() {
      return this._Ks;
    }

    set power(value) {
      this._power = value;
    }

    get power() {
      return this._power;
    }
  }

  GLBoost['BlinnPhongShader'] = BlinnPhongShader;

  class HalfLambertShaderSource {

    FSDefine_HalfLambertShaderSource(in_, f, lights) {
      var sampler2D = this._sampler2DShadow_func();
      var shaderText = '';
      shaderText += `uniform vec4 Kd;\n`;
      shaderText += 'uniform vec4 ambient;\n'; // Ka * amount of ambient lights    

      let lightNumExceptAmbient = lights.filter((light)=>{return !light.isTypeAmbient();}).length;    
      if (lightNumExceptAmbient > 0) {
        shaderText += `uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;
        shaderText += `${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;
        shaderText += `uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;
      }
      
      return shaderText;
    }

    FSShade_HalfLambertShaderSource(f, gl, lights) {
      var shaderText = '';

      shaderText += '  vec4 surfaceColor = rt0;\n';
      shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
      
      for (let i=0; i<lights.length; i++) {
        let light = lights[i];      
        let isShadowEnabledAsTexture = (light.camera && light.camera.texture) ? true:false;
        shaderText += '  {\n';
        shaderText +=      Shader._generateLightStr(i);
        shaderText +=      Shader._generateShadowingStr(gl, i, isShadowEnabledAsTexture);
        shaderText += '    float diffuse = max(dot(lightDirection, normal), 0.0)*0.5+0.5;\n';
        shaderText += '    diffuse *= diffuse;\n';
        shaderText += `    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n`;
        shaderText += '  }\n';
      }
      shaderText += '  rt0.xyz += ambient.xyz;\n';
      //shaderText += '  rt0.a = 1.0;\n';
      // shaderText += '  rt0 = surfaceColor;\n';

      return shaderText;
    }

    prepare_HalfLambertShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      material.setUniform(shaderProgram, 'uniform_Kd', this._glContext.getUniformLocation(shaderProgram, 'Kd'));
      material.setUniform(shaderProgram, 'uniform_ambient', this._glContext.getUniformLocation(shaderProgram, 'ambient'));
      
      return vertexAttribsAsResult;
    }
  }



  class HalfLambertShader extends DecalShader {
    constructor(glBoostContext, basicShader) {

      super(glBoostContext, basicShader);
      HalfLambertShader.mixin(HalfLambertShaderSource);
    }

    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);

      let Kd = material.diffuseColor;
      let Ka = material.ambientColor;
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_Kd'), Kd.x, Kd.y, Kd.z, Kd.w, true);

      let ambient = Vector4.multiplyVector(Ka, scene.getAmountOfAmbientLightsIntensity());
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_ambient'), ambient.x, ambient.y, ambient.z, ambient.w, true);
    }
  }

  GLBoost['HalfLambertShader'] = HalfLambertShader;

  class HalfLambertAndWrapLightingShaderSource {

    FSDefine_HalfLambertAndWrapLightingShaderSource(in_, f, lights) {
      var sampler2D = this._sampler2DShadow_func();
      var shaderText = '';
      shaderText += `uniform vec4 Kd;\n`;
      shaderText += `uniform vec3 wrap;\n`;
      shaderText += 'uniform vec4 ambient;\n'; // Ka * amount of ambient lights    
      
      let lightNumExceptAmbient = lights.filter((light)=>{return !light.isTypeAmbient();}).length;        
      if (lightNumExceptAmbient > 0) {
        shaderText += `uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;
        shaderText += `${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;
        shaderText += `uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;
      }
      return shaderText;
    }

    FSShade_HalfLambertAndWrapLightingShaderSource(f, gl, lights) {
      var shaderText = '';

      shaderText += '  vec4 surfaceColor = rt0;\n';
      shaderText += '  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';
       
      for (let i=0; i<lights.length; i++) {
        let light = lights[i];      
        let isShadowEnabledAsTexture = (light.camera && light.camera.texture) ? true:false;
        shaderText += '  {\n';
        shaderText +=      Shader._generateLightStr(i);
        shaderText +=      Shader._generateShadowingStr(gl, i, isShadowEnabledAsTexture);
        shaderText += '    float diffuse = max(dot(lightDirection, normal), 0.0)*0.5+0.5;\n';
        shaderText += '    diffuse *= diffuse;\n';
        shaderText += '    vec3 diffuseVec = vec3(diffuse, diffuse, diffuse);\n';
        shaderText += '    diffuseVec = (diffuseVec+wrap) / (1.0 + wrap);\n';  
        shaderText += `    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuseVec, 1.0) * surfaceColor;\n`;
        shaderText += '  }\n';
      }
      shaderText += '  rt0.xyz += ambient.xyz;\n';
      
      return shaderText;
    }

    prepare_HalfLambertAndWrapLightingShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      material.setUniform(shaderProgram, 'uniform_Kd', this._glContext.getUniformLocation(shaderProgram, 'Kd'));
      material.setUniform(shaderProgram, 'uniform_wrap', this._glContext.getUniformLocation(shaderProgram, 'wrap'));
      material.setUniform(shaderProgram, 'uniform_ambient', this._glContext.getUniformLocation(shaderProgram, 'ambient'));
      
      return vertexAttribsAsResult;
    }
  }



  class HalfLambertAndWrapLightingShader extends DecalShader {
    constructor(glBoostContext, basicShader) {

      super(glBoostContext, basicShader);
      HalfLambertAndWrapLightingShader.mixin(HalfLambertAndWrapLightingShaderSource);

      this._wrap = new Vector3(0.6, 0.3, 0.0);
    }

    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);

      var Kd = material.diffuseColor;
      let Ka = material.ambientColor;
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_Kd'), Kd.x, Kd.y, Kd.z, Kd.w, true);
      this._glContext.uniform3f(material.getUniform(glslProgram, 'uniform_wrap'), this._wrap.x, this._wrap.y, this._wrap.z, true);

      let ambient = Vector4.multiplyVector(Ka, scene.getAmountOfAmbientLightsIntensity());
      this._glContext.uniform4f(material.getUniform(glslProgram, 'uniform_ambient'), ambient.x, ambient.y, ambient.z, ambient.w, true);
    }

    set wrap(value) {
      this._wrap = value;
    }

    get wrap() {
      return this._wrap;
    }
  }

  GLBoost['HalfLambertAndWrapLightingShader'] = HalfLambertAndWrapLightingShader;

  class DepthDisplayShaderSource {

    VSTransform_DepthDisplayShaderSource(existCamera_f, f) {
      let shaderText = '';
      if (Shader._exist(f, GLBoost$1.TEXCOORD)) {
        shaderText += '  texcoord.y = 1.0 - texcoord.y;\n';
      }
      return shaderText;
    }

    FSShade_DepthDisplayShaderSource(f, gl, lights) {
      var shaderText = '';

      shaderText += '  vec4 surfaceColor = rt0;\n';
      shaderText += '  rt0 = vec4(surfaceColor.r, surfaceColor.r, surfaceColor.r, 1.0);\n';

      //shaderText += '  rt0.a = 1.0;\n';
      //shaderText += '  rt0 = vec4(position.xyz, 1.0);\n';


      return shaderText;
    }
  }



  class DepthDisplayShader extends DecalShader {
    constructor(glBoostContext, basicShader) {

      super(glBoostContext, basicShader);
      DepthDisplayShader.mixin(DepthDisplayShaderSource);
    }
  }

  GLBoost$1['DepthDisplayShader'] = DepthDisplayShader;

  class PassThroughShaderSource {

    VSDefine_PassThroughShaderSource(in_, out_, f) {
      var shaderText = '';
      if (Shader._exist(f, GLBoost.COLOR)) {
        shaderText += `${in_} vec4 aVertex_color;\n`;
        shaderText += `${out_} vec4 color;\n`;
      }
      if (Shader._exist(f, GLBoost.TEXCOORD)) {
        shaderText += `${in_} vec2 aVertex_texcoord;\n`;
        shaderText += `${out_} vec2 texcoord;\n`;
      }

      shaderText += `${in_} vec3 aVertex_barycentricCoord;\n`;
      shaderText += `${out_} vec3 barycentricCoord;\n`;

      return shaderText;
    }

    VSTransform_PassThroughShaderSource(existCamera_f, f) {
      var shaderText = '';
      if (Shader._exist(f, GLBoost.COLOR)) {
        shaderText += '  color = aVertex_color;\n';
      }
      if (Shader._exist(f, GLBoost.TEXCOORD)) {
        shaderText += '  texcoord = aVertex_texcoord;\n';
      }
      
      if (existCamera_f) {
        shaderText +=   '  gl_Position = projectionMatrix * viewMatrix * position_world;\n';
      } else {
        shaderText +=   '  gl_Position = position_world;\n';
      }
      
      shaderText += '  barycentricCoord = aVertex_barycentricCoord;\n';

      
      return shaderText;
    }

    VSTransform_FragmentSimpleShaderSource(existCamera_f, f) {
      var shaderText = '';


      return shaderText;
    }

    FSDefine_PassThroughShaderSource(in_, f) {
      var shaderText = '';
      if (Shader._exist(f, GLBoost.COLOR)) {
        shaderText += `${in_} vec4 color;\n`;
      }
      if (Shader._exist(f, GLBoost.TEXCOORD)) {
        shaderText += `${in_} vec2 texcoord;\n\n`;
      }

      return shaderText;
    }

    FSShade_PassThroughShaderSource(f, gl) {

      var shaderText = '    rt0 = vec4(1.0, 0.0, 0.0, 1.0);\n';
      return shaderText;
    }

    prepare_PassThroughShaderSource(gl, shaderProgram, expression, vertexAttribs, existCamera_f, lights, material, extraData) {

      var vertexAttribsAsResult = [];

      return vertexAttribsAsResult;
    }
  }

  class PassThroughShader extends Shader {
    constructor(glBoostContext, basicShader = VertexWorldShaderSource) {

      super(glBoostContext);

      PassThroughShader.mixin(basicShader);
      PassThroughShader.mixin(PassThroughShaderSource);
    }
    setUniforms(gl, glslProgram, scene, material, camera, mesh, lights) {
      super.setUniforms(gl, glslProgram, scene, material, camera, mesh, lights);
    }
  }


  GLBoost['PassThroughShader'] = PassThroughShader;

  class JointGizmoUpdater {
    static update() {

    }
  }

  if (GLBoost['JointGizmoUpdater'] === void 0) {
    GLBoost['JointGizmoUpdater'] = JointGizmoUpdater;
  }

  /*       */

  class AnimationPlayer {
                                

    constructor() {
    }

    init(group    ) {
      this.__FpsForPlaying = (group.animationFps !== void 0) ? group.animationFps:60;

      this.__animationStartTime = group.getStartAnimationInputValue('time');
      this.__animationEndTime = group.getEndAnimationInputValue('time');
      this.__animationStartRange = this.__animationStartTime;
      this.__animationEndRange = this.__animationEndTime;
      this.__animationCurrentTime = this.__animationStartTime;
      this.__animationLength = group.getEndAnimationInputValue('time');
      this.__animationLastTime = 0;

      this.__currentMillisecondAtStart = 0;
      this.__isPlaying = 0;
      this.__currentMotion = "All";
      this.__animationMotions = [];

      this.__setupMultiMotions(group);
    }

    play() {
      this.__isPlaying = true;
      this.__currentMillisecondAtStart = Date.now();
    }

    calcAnimationTime(speedRatio = 1) {
      if (!this.__isPlaying) {
        this.__currentMillisecondAtStart = Date.now();
        return this.__animationCurrentTime;
      }

      let currentMillisecondFromStart = Date.now();
      this.__animationCurrentTime = (currentMillisecondFromStart - this.__currentMillisecondAtStart)/1000 + this.__animationLastTime;
      let localAnimationCurrentTime = this.__animationCurrentTime * speedRatio;

      if (localAnimationCurrentTime > this.__animationEndRange) {
        this.moveToTheTime(this.__animationStartRange);
      } else if (localAnimationCurrentTime < this.__animationStartRange) {
        this.moveToTheTime(this.__animationStartRange);
      }

      if (this.__animationStartRange > this.__animationLength) {
        this.moveToTheTime(this.__animationStartRange);
      }

      this.__animationCurrentTime = localAnimationCurrentTime / speedRatio;

      return localAnimationCurrentTime;
    }

    __setupMultiMotions(group    ) {
      const json = {
        "name": "All",
        "start": group.getStartAnimationInputValue('time') * this.__FpsForPlaying,
        "end": group.getEndAnimationInputValue('time') * this.__FpsForPlaying
      };

      this.animationMotions.push(json);

      if (!group.animationTracks) {
        return;
      }
      
      if (group.animationTracks) {
        Array.prototype.push.apply(this.animationMotions, group.animationTracks);
      }

      this.__currentMotion = group.animationTracks[0].name;
    }

    moveToTheTime(time       ) {
      this.__currentMillisecondAtStart = Date.now();
      this.__animationCurrentTime = time;
      this.__animationLastTime = this.__animationCurrentTime;
    }

    changeMotion(motionName       ) {
      for(let motion of this.__animationMotions) {
        if (motion.name === motionName) {
          this.changeRange(motion.start / this.__FpsForPlaying, motion.end / this.__FpsForPlaying);
          this.moveToTheTime(motion.start / this.__FpsForPlaying);
        }
      }
    }

    changeRange(start       , end       ) {
      this.__animationStartRange = start;
      this.__animationEndRange = end;
      const time = this.__animationCurrentTime;
      this.moveToTheTime(time);
    };

    get animationMotions() {
      return this.__animationMotions;
    }

    set animationMotions(motions) {
      this.__animationMotions = motions;
    }
  }

  GLBoost$1['AnimationPlayer'] = AnimationPlayer;

  async function formatDetector(uri, files) {

    if (files) {
      for (let fileName in files) {
        const splitted = fileName.split('.');
        const fileExtension = splitted[splitted.length - 1];

        if (fileExtension === 'gltf' || fileExtension === 'glb') {
          return new Promise((resolve, response)=>{
            checkArrayBufferOfGltf(files[fileName], resolve);
          }, (reject, error)=>{
    
          });
        }
      }      
    }

    return DataUtil.loadResourceAsync(uri, true,
      (resolve, response)=>
      {
        const arrayBuffer = response;
        checkArrayBufferOfGltf(arrayBuffer, resolve);
      }
    );

  }

  function checkArrayBufferOfGltf(arrayBuffer, resolve) {
    const isLittleEndian = true;

    const dataView = new DataView(arrayBuffer, 0, 20);
    // Magic field
    const magic = dataView.getUint32(0, isLittleEndian);

    // 0x46546C67 is 'glTF' in ASCII codes.
    if (magic !== 0x46546C67) {
      // It must be normal glTF (NOT binary) file...
      let gotText = DataUtil.arrayBufferToString(arrayBuffer);

      let gltfJson = JSON.parse(gotText);

      let glTFVer = checkGLTFVersion(gltfJson);

      resolve("glTF"+glTFVer);

      return;
    }

    let glTFVer = dataView.getUint32(4, isLittleEndian);
    resolve("glTF"+glTFVer);
  }

  function checkGLTFVersion(gltfJson) {
    let glTFVer = 1.0;
    if (gltfJson.asset && gltfJson.asset.version) {
      glTFVer = parseFloat(gltfJson.asset.version);
    }
    return glTFVer;
  }

  GLBoost$1["formatDetector"] = formatDetector;

})));

(0,eval)('this').GLBoost.VERSION='version: 0.0.4-1-g1ab08-mod branch: feature/improve-versioning';
