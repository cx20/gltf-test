(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory():typeof define==='function'&&define.amd?define(factory):(factory());}(this,(function(){'use strict';var global=(0,eval)('this');(function(global){global.GLBoost=(typeof global.GLBoost!=='undefined')?global.GLBoost:{};const GLBoost=global.GLBoost;if(typeof define==='function'&&define.amd){define(function(){return GLBoost;});}else if(typeof exports==='object'){module.exports=GLBoost;global.GLBoost=GLBoost;}else{global.GLBoost=GLBoost;}
(function(){GLBoost.GLBOOST_CONSTANT_NAMES=[];GLBoost.GLBOOST_CONSTANT_VALUES=[];let c={count:0,__existedConstants:[],define:function(constantName,glConstantValue,aliasName){let value=null;if(glConstantValue!==void 0){value=glConstantValue;this.__existedConstants.push(glConstantValue);}else{const checkUnique=()=>{let result=true;for(let existValue of this.__existedConstants){if(this.count===existValue){result=false;}}
return result;};for(;checkUnique()===false;this.count++){}
value=this.count;}
GLBoost[constantName]=value;GLBoost.GLBOOST_CONSTANT_NAMES[value]=constantName;GLBoost.GLBOOST_CONSTANT_VALUES[value]=(typeof aliasName!=='undefined')?aliasName:constantName;this.count++;}};c.define('ACTIVE_ATTRIBUTES',35721);c.define('ACTIVE_ATTRIBUTE_MAX_LENGTH',35722);c.define('ACTIVE_TEXTURE',34016);c.define('ACTIVE_UNIFORMS',35718);c.define('ACTIVE_UNIFORM_MAX_LENGTH',35719);c.define('ALIASED_LINE_WIDTH_RANGE',33902);c.define('ALIASED_POINT_SIZE_RANGE',33901);c.define('ALPHA',6406);c.define('ALPHA_BITS',3413);c.define('ALWAYS',519);c.define('ARRAY_BUFFER',34962);c.define('ARRAY_BUFFER_BINDING',34964);c.define('ATTACHED_SHADERS',35717);c.define('BACK',1029);c.define('BLEND',3042);c.define('BLEND_COLOR',32773);c.define('BLEND_DST_ALPHA',32970);c.define('BLEND_DST_RGB',32968);c.define('BLEND_EQUATION',32777);c.define('BLEND_EQUATION_ALPHA',34877);c.define('BLEND_EQUATION_RGB',32777);c.define('BLEND_SRC_ALPHA',32971);c.define('BLEND_SRC_RGB',32969);c.define('BLUE_BITS',3412);c.define('BOOL',35670);c.define('BOOL_VEC2',35671);c.define('BOOL_VEC3',35672);c.define('BOOL_VEC4',35673);c.define('BROWSER_DEFAULT_WEBGL',37444);c.define('BUFFER_SIZE',34660);c.define('BUFFER_USAGE',34661);c.define('BYTE',5120);c.define('CCW',2305);c.define('CLAMP_TO_EDGE',33071);c.define('COLOR_ATTACHMENT0',36064);c.define('COLOR_BUFFER_BIT',16384);c.define('COLOR_CLEAR_VALUE',3106);c.define('COLOR_WRITEMASK',3107);c.define('COMPILE_STATUS',35713);c.define('COMPRESSED_TEXTURE_FORMATS',34467);c.define('CONSTANT_ALPHA',32771);c.define('CONSTANT_COLOR',32769);c.define('CONTEXT_LOST_WEBGL',37442);c.define('CULL_FACE',2884);c.define('CULL_FACE_MODE',2885);c.define('CURRENT_PROGRAM',35725);c.define('CURRENT_VERTEX_ATTRIB',34342);c.define('CW',2304);c.define('DECR',7683);c.define('DECR_WRAP',34056);c.define('DELETE_STATUS',35712);c.define('DEPTH_ATTACHMENT',36096);c.define('DEPTH_BITS',3414);c.define('DEPTH_BUFFER_BIT',256);c.define('DEPTH_CLEAR_VALUE',2931);c.define('DEPTH_COMPONENT',6402);c.define('DEPTH_COMPONENT16',33189);c.define('DEPTH_FUNC',2932);c.define('DEPTH_RANGE',2928);c.define('DEPTH_STENCIL',34041);c.define('DEPTH_STENCIL_ATTACHMENT',33306);c.define('DEPTH_TEST',2929);c.define('DEPTH_WRITEMASK',2930);c.define('DITHER',3024);c.define('DONT_CARE',4352);c.define('DST_ALPHA',772);c.define('DST_COLOR',774);c.define('DYNAMIC_DRAW',35048);c.define('ELEMENT_ARRAY_BUFFER',34963);c.define('ELEMENT_ARRAY_BUFFER_BINDING',34965);c.define('EQUAL',514);c.define('FASTEST',4353);c.define('FLOAT',5126);c.define('FLOAT_MAT2',35674);c.define('FLOAT_MAT3',35675);c.define('FLOAT_MAT4',35676);c.define('FLOAT_VEC2',35664);c.define('FLOAT_VEC3',35665);c.define('FLOAT_VEC4',35666);c.define('FRAGMENT_SHADER',35632);c.define('FRAMEBUFFER',36160);c.define('FRAMEBUFFER_ATTACHMENT_OBJECT_NAME',36049);c.define('FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE',36048);c.define('FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE',36051);c.define('FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL',36050);c.define('FRAMEBUFFER_BINDING',36006);c.define('FRAMEBUFFER_COMPLETE',36053);c.define('FRAMEBUFFER_INCOMPLETE_ATTACHMENT',36054);c.define('FRAMEBUFFER_INCOMPLETE_DIMENSIONS',36057);c.define('FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT',36055);c.define('FRAMEBUFFER_UNSUPPORTED',36061);c.define('FRONT',1028);c.define('FRONT_AND_BACK',1032);c.define('FRONT_FACE',2886);c.define('FUNC_ADD',32774);c.define('FUNC_REVERSE_SUBTRACT',32779);c.define('FUNC_SUBTRACT',32778);c.define('GENERATE_MIPMAP_HINT',33170);c.define('GEQUAL',518);c.define('GREATER',516);c.define('GREEN_BITS',3411);c.define('HIGH_FLOAT',36338);c.define('HIGH_INT',36341);c.define('INCR',7682);c.define('INCR_WRAP',34055);c.define('INFO_LOG_LENGTH',35716);c.define('INT',5124);c.define('INT_VEC2',35667);c.define('INT_VEC3',35668);c.define('INT_VEC4',35669);c.define('INVALID_ENUM',1280);c.define('INVALID_FRAMEBUFFER_OPERATION',1286);c.define('INVALID_OPERATION',1282);c.define('INVALID_VALUE',1281);c.define('INVERT',5386);c.define('KEEP',7680);c.define('LEQUAL',515);c.define('LESS',513);c.define('LINEAR',9729);c.define('LINEAR_MIPMAP_LINEAR',9987);c.define('LINEAR_MIPMAP_NEAREST',9985);c.define('LINES',1);c.define('LINE_LOOP',2);c.define('LINE_STRIP',3);c.define('LINE_WIDTH',2849);c.define('LINK_STATUS',35714);c.define('LOW_FLOAT',36336);c.define('LOW_INT',36339);c.define('LUMINANCE',6409);c.define('LUMINANCE_ALPHA',6410);c.define('MAX_COMBINED_TEXTURE_IMAGE_UNITS',35661);c.define('MAX_CUBE_MAP_TEXTURE_SIZE',34076);c.define('MAX_FRAGMENT_UNIFORM_VECTORS',36349);c.define('MAX_RENDERBUFFER_SIZE',34024);c.define('MAX_TEXTURE_IMAGE_UNITS',34930);c.define('MAX_TEXTURE_SIZE',3379);c.define('MAX_VARYING_VECTORS',36348);c.define('MAX_VERTEX_ATTRIBS',34921);c.define('MAX_VERTEX_TEXTURE_IMAGE_UNITS',35660);c.define('MAX_VERTEX_UNIFORM_VECTORS',36347);c.define('MAX_VIEWPORT_DIMS',3386);c.define('MEDIUM_FLOAT',36337);c.define('MEDIUM_INT',36340);c.define('MIRRORED_REPEAT',33648);c.define('NEAREST',9728);c.define('NEAREST_MIPMAP_LINEAR',9986);c.define('NEAREST_MIPMAP_NEAREST',9984);c.define('NEVER',512);c.define('NICEST',4354);c.define('NONE',0);c.define('NOTEQUAL',517);c.define('NO_ERROR',0);c.define('NUM_COMPRESSED_TEXTURE_FORMATS',34466);c.define('ONE',1);c.define('ONE_MINUS_CONSTANT_ALPHA',32772);c.define('ONE_MINUS_CONSTANT_COLOR',32770);c.define('ONE_MINUS_DST_ALPHA',773);c.define('ONE_MINUS_DST_COLOR',775);c.define('ONE_MINUS_SRC_ALPHA',771);c.define('ONE_MINUS_SRC_COLOR',769);c.define('OUT_OF_MEMORY',1285);c.define('PACK_ALIGNMENT',3333);c.define('POINTS',0);c.define('POLYGON_OFFSET_FACTOR',32824);c.define('POLYGON_OFFSET_FILL',32823);c.define('POLYGON_OFFSET_UNITS',10752);c.define('RED_BITS',3410);c.define('RENDERBUFFER',36161);c.define('RENDERBUFFER_ALPHA_SIZE',36179);c.define('RENDERBUFFER_BINDING',36007);c.define('RENDERBUFFER_BLUE_SIZE',36178);c.define('RENDERBUFFER_DEPTH_SIZE',36180);c.define('RENDERBUFFER_GREEN_SIZE',36177);c.define('RENDERBUFFER_HEIGHT',36163);c.define('RENDERBUFFER_INTERNAL_FORMAT',36164);c.define('RENDERBUFFER_RED_SIZE',36176);c.define('RENDERBUFFER_STENCIL_SIZE',36181);c.define('RENDERBUFFER_WIDTH',36162);c.define('RENDERER',7937);c.define('REPEAT',10497);c.define('REPLACE',7681);c.define('RGB',6407);c.define('RGB5_A1',32855);c.define('RGB565',36194);c.define('RGBA',6408);c.define('RGBA4',32854);c.define('SAMPLER_2D',35678);c.define('SAMPLER_CUBE',35680);c.define('SAMPLES',32937);c.define('SAMPLE_ALPHA_TO_COVERAGE',32926);c.define('SAMPLE_BUFFERS',32936);c.define('SAMPLE_COVERAGE',32928);c.define('SAMPLE_COVERAGE_INVERT',32939);c.define('SAMPLE_COVERAGE_VALUE',32938);c.define('SCISSOR_BOX',3088);c.define('SCISSOR_TEST',3089);c.define('SHADER_COMPILER',36346);c.define('SHADER_SOURCE_LENGTH',35720);c.define('SHADER_TYPE',35663);c.define('SHADING_LANGUAGE_VERSION',35724);c.define('SHORT',5122);c.define('SRC_ALPHA',770);c.define('SRC_ALPHA_SATURATE',776);c.define('SRC_COLOR',768);c.define('STATIC_DRAW',35044);c.define('STENCIL_ATTACHMENT',36128);c.define('STENCIL_BACK_FAIL',34817);c.define('STENCIL_BACK_FUNC',34816);c.define('STENCIL_BACK_PASS_DEPTH_FAIL',34818);c.define('STENCIL_BACK_PASS_DEPTH_PASS',34819);c.define('STENCIL_BACK_REF',36003);c.define('STENCIL_BACK_VALUE_MASK',36004);c.define('STENCIL_BACK_WRITEMASK',36005);c.define('STENCIL_BITS',3415);c.define('STENCIL_BUFFER_BIT',1024);c.define('STENCIL_CLEAR_VALUE',2961);c.define('STENCIL_FAIL',2964);c.define('STENCIL_FUNC',2962);c.define('STENCIL_INDEX',6401);c.define('STENCIL_INDEX8',36168);c.define('STENCIL_PASS_DEPTH_FAIL',2965);c.define('STENCIL_PASS_DEPTH_PASS',2966);c.define('STENCIL_REF',2967);c.define('STENCIL_TEST',2960);c.define('STENCIL_VALUE_MASK',2963);c.define('STENCIL_WRITEMASK',2968);c.define('STREAM_DRAW',35040);c.define('SUBPIXEL_BITS',3408);c.define('TEXTURE',5890);c.define('TEXTURE0',33984);c.define('TEXTURE1',33985);c.define('TEXTURE2',33986);c.define('TEXTURE3',33987);c.define('TEXTURE4',33988);c.define('TEXTURE5',33989);c.define('TEXTURE6',33990);c.define('TEXTURE7',33991);c.define('TEXTURE8',33992);c.define('TEXTURE9',33993);c.define('TEXTURE10',33994);c.define('TEXTURE11',33995);c.define('TEXTURE12',33996);c.define('TEXTURE13',33997);c.define('TEXTURE14',33998);c.define('TEXTURE15',33999);c.define('TEXTURE16',34000);c.define('TEXTURE17',34001);c.define('TEXTURE18',34002);c.define('TEXTURE19',34003);c.define('TEXTURE20',34004);c.define('TEXTURE21',34005);c.define('TEXTURE22',34006);c.define('TEXTURE23',34007);c.define('TEXTURE24',34008);c.define('TEXTURE25',34009);c.define('TEXTURE26',34010);c.define('TEXTURE27',34011);c.define('TEXTURE28',34012);c.define('TEXTURE29',34013);c.define('TEXTURE30',34014);c.define('TEXTURE31',34015);c.define('TEXTURE_2D',3553);c.define('TEXTURE_BINDING_2D',32873);c.define('TEXTURE_BINDING_CUBE_MAP',34068);c.define('TEXTURE_CUBE_MAP',34067);c.define('TEXTURE_CUBE_MAP_NEGATIVE_X',34070);c.define('TEXTURE_CUBE_MAP_NEGATIVE_Y',34072);c.define('TEXTURE_CUBE_MAP_NEGATIVE_Z',34074);c.define('TEXTURE_CUBE_MAP_POSITIVE_X',34069);c.define('TEXTURE_CUBE_MAP_POSITIVE_Y',34071);c.define('TEXTURE_CUBE_MAP_POSITIVE_Z',34073);c.define('TEXTURE_MAG_FILTER',10240);c.define('TEXTURE_MIN_FILTER',10241);c.define('TEXTURE_WRAP_S',10242);c.define('TEXTURE_WRAP_T',10243);c.define('TRIANGLES',4);c.define('TRIANGLE_FAN',6);c.define('TRIANGLE_STRIP',5);c.define('UNPACK_ALIGNMENT',3317);c.define('UNPACK_COLORSPACE_CONVERSION_WEBGL',37443);c.define('UNPACK_FLIP_Y_WEBGL',37440);c.define('UNPACK_PREMULTIPLY_ALPHA_WEBGL',37441);c.define('UNSIGNED_BYTE',5121);c.define('UNSIGNED_INT',5125);c.define('UNSIGNED_SHORT',5123);c.define('UNSIGNED_SHORT_4_4_4_4',32819);c.define('UNSIGNED_SHORT_5_5_5_1',32820);c.define('UNSIGNED_SHORT_5_6_5',33635);c.define('VALIDATE_STATUS',35715);c.define('VENDOR',7936);c.define('VERSION',7938);c.define('VERTEX_ATTRIB_ARRAY_BUFFER_BINDING',34975);c.define('VERTEX_ATTRIB_ARRAY_ENABLED',34338);c.define('VERTEX_ATTRIB_ARRAY_NORMALIZED',34922);c.define('VERTEX_ATTRIB_ARRAY_POINTER',34373);c.define('VERTEX_ATTRIB_ARRAY_SIZE',34339);c.define('VERTEX_ATTRIB_ARRAY_STRIDE',34340);c.define('VERTEX_ATTRIB_ARRAY_TYPE',34341);c.define('VERTEX_SHADER',35633);c.define('VIEWPORT',2978);c.define('ZERO',0);c.define('POSITION',void 0,'position');c.define('COLOR',void 0,'color');c.define('NORMAL',void 0,'normal');c.define('TEXCOORD',void 0,'texcoord');c.define('TANGENT',void 0,'tangent');c.define('JOINT',void 0,'joint');c.define('WEIGHT',void 0,'weight');c.define('BLENDTARGET1',void 0,'shapetarget_1');c.define('BLENDTARGET2',void 0,'shapetarget_2');c.define('BLENDTARGET3',void 0,'shapetarget_3');c.define('BLENDTARGET4',void 0,'shapetarget_4');c.define('BLENDTARGET5',void 0,'shapetarget_5');c.define('BLENDTARGET6',void 0,'shapetarget_6');c.define('BLENDTARGET7',void 0,'shapetarget_7');c.define('BLENDTARGET8',void 0,'shapetarget_8');c.define('BLENDTARGET9',void 0,'shapetarget_9');c.define('BLENDTARGET10',void 0,'shapetarget_10');c.define('INTERPOLATION_LINEAR');c.define('INTERPOLATION_STEP');c.define('INTERPOLATION_CUBICSPLINE');c.define('RADIAN',void 0,'radian');c.define('DEGREE',void 0,'degree');c.define('TEXTURE_PURPOSE_DIFFUSE',void 0,'diffuse');c.define('TEXTURE_PURPOSE_NORMAL',void 0,'normal');c.define('TEXTURE_PURPOSE_METALLIC_ROUGHNESS',void 0,'metallic_roughness');c.define('TEXTURE_PURPOSE_OCCLUSION',void 0,'occlusion');c.define('TEXTURE_PURPOSE_EMISSIVE',void 0,'emissive');c.define('TEXTURE_PURPOSE_BRDF_LUT',void 0,'brdf_lut');c.define('TEXTURE_PURPOSE_ENV_CUBE',void 0,'env_cube');c.define('TEXTURE_PURPOSE_IBL_DIFFUSE_ENV_CUBE',void 0,'diffuse_ibl_env_cube');c.define('TEXTURE_PURPOSE_IBL_SPECULAR_ENV_CUBE',void 0,'specular_ibl_env_cube');c.define('TEXTURE_PURPOSE_OTHERS',void 0,'others');c.define('QUERY_TYPE_INSTANCE_NAME');c.define('QUERY_TYPE_USER_FLAVOR_NAME');c.define('QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR');c.define('QUERY_FORMAT_STRING_PARTIAL_MATCHING');c.define('QUERY_FORMAT_STRING_PERFECT_MATCHING');c.define('QUERY_FORMAT_REGEXP');c.define('WORLD_MATRIX');c.define('SHADER_PARAMETER_TYPE_OBJECT');c.define('SHADER_PARAMETER_TYPE_MATERIAL');c.define('SHADER_PARAMETER_TYPE_LIGHT');c.define('SHADER_PARAMETER_TYPE_JOINTSET');c.define('SHADER_PARAMETER_TYPE_MORPH');c.define('GLOBAL_STATES_USAGE_DO_NOTHING');c.define('GLOBAL_STATES_USAGE_IGNORE');c.define('GLOBAL_STATES_USAGE_INCLUSIVE');c.define('GLOBAL_STATES_USAGE_EXCLUSIVE');c.define('LIFECYCLE_FHASE_CREATE');c.define('LIFECYCLE_FHASE_LOAD');c.define('LIFECYCLE_FHASE_MOUNT');c.define('LIFECYCLE_FHASE_UPDATE_LOGIC');c.define('LIFECYCLE_FHASE_UPDATE_FOR_RENDERING');c.define('LIFECYCLE_FHASE_RENDER');c.define('LIFECYCLE_FHASE_DISCARD');c.define('LIFECYCLE_EVENT_CREATED');c.define('LIFECYCLE_EVENT_LOADED');c.define('LIFECYCLE_EVENT_MOUNTED');c.define('LIFECYCLE_EVENT_UPDATED_LOGIC');c.define('LIFECYCLE_EVENT_UPDATED_FOR_RENDERING');c.define('LIFECYCLE_EVENT_RENDERED');c.define('LIFECYCLE_EVENT_DISCARDED');c.define('LOG_GENERAL');c.define('LOG_SHADER_CODE');c.define('LOG_GLBOOST_OBJECT_LIFECYCLE');c.define('LOG_GL_RESOURCE_LIFECYCLE');c.define('LOG_LEVEL_ERROR',void 0,'error');c.define('LOG_LEVEL_WARN',void 0,'warn');c.define('LOG_LEVEL_LOG',void 0,'log');c.define('LOG_LEVEL_INFO',void 0,'info');c.define('LOG_LEVEL_DEBUG',void 0,'debug');c.define('LOG_OMISSION_PROCESSING');c.define('LOG_TYPE_NUMERICAL',void 0,'numerical');c.define('LOG_TYPE_AABB',void 0,'AABB');c.define('LOG_TYPE_GL',void 0,'GL');c.define('LOG_TYPE_PERFORMANCE',void 0,'PERFORMANCE');})();GLBoost.isThisGLVersion_2=function(gl){if(typeof WebGL2RenderingContext==='undefined'){return false;}
return gl instanceof WebGL2RenderingContext;};GLBoost.getNameOfGLBoostConstant=function(glboostConstant){return GLBoost.GLBOOST_CONSTANT_NAMES[glboostConstant];};GLBoost.getValueOfGLBoostConstant=function(glboostConstant){return GLBoost.GLBOOST_CONSTANT_VALUES[glboostConstant];};})(global);var GLBoost$1=global.GLBoost;class GLExtensionsManager{constructor(glContext){var gl=glContext.gl;if(GLBoost$1.VALUE_WEBGL_ONE_USE_EXTENSIONS){this._extVAO=gl.getExtension('OES_vertex_array_object');this._extDBs=gl.getExtension('WEBGL_draw_buffers');this._extTFA=gl.getExtension('EXT_texture_filter_anisotropic')||gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic')||gl.getExtension('MOZ_EXT_texture_filter_anisotropic');this._extEIUI=gl.getExtension('OES_element_index_uint');this._extDepthTex=gl.getExtension('WEBGL_depth_texture');this._extStdDerivatives=gl.getExtension("OES_standard_derivatives");this._extTFL=gl.getExtension("OES_texture_float_linear");this._extTexLod=gl.getExtension("EXT_shader_texture_lod");}
GLExtensionsManager._instances[glContext.belongingCanvasId]=this;this._glContext=glContext;}
static getInstance(glContext){if(GLExtensionsManager._instances[glContext.belongingCanvasId]){return GLExtensionsManager._instances[glContext.belongingCanvasId];}
return new GLExtensionsManager(glContext);}
get extVAO(){return this._extVAO;}
get extDBs(){return this._extDBs;}
get extTFA(){return this._extTFA;}
get extDepthTex(){return this._extDepthTex;}
createVertexArray(gl){if(GLBoost$1.isThisGLVersion_2(gl)){return gl.createVertexArray();}else if(this._extVAO){return this._extVAO.createVertexArrayOES();}else{return null;}
this._glContext.checkGLError();}
bindVertexArray(gl,vao){if(GLBoost$1.isThisGLVersion_2(gl)){gl.bindVertexArray(vao);return true;}else if(this._extVAO){this._extVAO.bindVertexArrayOES(vao);return true;}else{return false;}
this._glContext.checkGLError();}
drawBuffers(gl,buffers){let buffer=buffers;if(GLBoost$1.isThisGLVersion_2(gl)){gl.drawBuffers(buffers);buffer=buffer[0];}else if(this._extDBs){this.extDBs.drawBuffersWEBGL(buffers);buffer=buffer[0];}
if(buffer===gl.NONE){gl.colorMask(false,false,false,false);}else{gl.colorMask(true,true,true,true);}
this._glContext.checkGLError();}
readBuffer(gl,buffers){let buffer=buffers;if(GLBoost$1.isThisGLVersion_2(gl)){buffer=buffer[0];}else if(this._extDBs){buffer=buffer[0];}
gl.readBuffer(buffer);this._glContext.checkGLError();}
colorAttachiment(gl,index){return this._extDBs?this._extDBs[`COLOR_ATTACHMENT${index}_WEBGL`]:gl[`COLOR_ATTACHMENT${index}`];}
elementIndexBitSizeGLConstant(gl){if(GLBoost$1.isThisGLVersion_2(gl)||this._extEIUI){return gl.UNSIGNED_INT;}else{return gl.UNSIGNED_SHORT;}}
elementIndexByteSizeNumber(gl){if(GLBoost$1.isThisGLVersion_2(gl)||this._extEIUI){return 4;}else{return 2;}}
createUintArrayForElementIndex(gl,array){if(GLBoost$1.isThisGLVersion_2(gl)||this._extEIUI){return new Uint32Array(array);}else{return new Uint16Array(array);}}}
GLExtensionsManager._instances=new Object();GLBoost$1['GLExtensionsManager']=GLExtensionsManager;class MiscUtil{constructor(){}
static getTheValueOrAlternative(value,alternativeIfTheValueIsNullOrUndefined){if(typeof value!=='undefined'&&value!=null){return value;}else{return alternativeIfTheValueIsNullOrUndefined;}}
static isJavaScriptObjectType(type,obj){var clas=Object.prototype.toString.call(obj).slice(8,-1);return obj!==undefined&&obj!==null&&clas===type;}
static consoleLog(logType,text){if(GLBoost$1.VALUE_CONSOLE_OUT_FOR_DEBUGGING&&GLBoost$1.valueOfGLBoostConstants[logType]){console.log(text);}}
static isMobile(){var ua=["iPod","iPad","iPhone","Android"];for(var i=0;i<ua.length;i++){if(navigator.userAgent.indexOf(ua[i])>0){return true;}}
return false;}
static preventDefaultForDesktopOnly(e){if(!MiscUtil.isMobile()){e.preventDefault();}}}
GLBoost$1['MiscUtil']=MiscUtil;class GLContextImpl{constructor(canvas,parent,initParameter){if(this.constructor===GLContextImpl){throw new TypeError("Cannot construct GLContextImpl instances directly");}
if(canvas===void 0){throw new Error("Failed to create WebGL Context due to no canvas object.");}
this._canvas=canvas;}
init(glVersionString,ContextType,initParameter={antialias:true,premultipliedAlpha:true},gl){if(gl){this._gl=gl;}else{let gl=this._canvas.getContext(glVersionString,initParameter);if(!gl){gl=this._canvas.getContext('experimental-'+glVersionString);if(!gl){throw new Error("This platform doesn't support WebGL.");}}
if(!gl instanceof ContextType){throw new Error("Unexpected rendering context.");}
this._gl=gl;}}
get gl(){return this._gl;}
set gl(gl){this._gl=gl;}
get canvas(){return this._canvas;}}
class GLContextWebGL1Impl extends GLContextImpl{constructor(canvas,parent,initParameter,gl){super(canvas,parent,initParameter);if(gl){super.init('webgl',null,initParameter,gl);}else{super.init('webgl',WebGLRenderingContext,initParameter,gl);}}}
class GLContextWebGL2Impl extends GLContextImpl{constructor(canvas,parent,initParameter,gl){super(canvas,parent,initParameter);super.init('webgl2',WebGL2RenderingContext,initParameter,gl);}}
let singleton=Symbol();class L_GLBoostMonitor{constructor(enforcer){if(enforcer!==L_GLBoostMonitor._singletonEnforcer||!(this instanceof L_GLBoostMonitor)){throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');}
this._glBoostObjects={};this._glResources=[];L_GLBoostMonitor._singletonEnforcer=Symbol();}
static getInstance(){const that=this;if(!(that)[singleton]){that[singleton]=new L_GLBoostMonitor(L_GLBoostMonitor._singletonEnforcer);}
return that[singleton];}
registerGLBoostObject(glBoostObject){this._glBoostObjects[glBoostObject.instanceName]=glBoostObject;MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,'GLBoost Resource: '+glBoostObject.toString()+' ('+glBoostObject.belongingCanvasId+') was created.');}
deregisterGLBoostObject(glBoostObject){delete this._glBoostObjects[glBoostObject.instanceName];MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,'GLBoost Resource: '+glBoostObject.toString()+' ('+glBoostObject.belongingCanvasId+') was ready for discard.');}
getGLBoostObjects(partOfGlBoostObjectInstanceName){let glBoostObjects=[];for(let instanceName in this._glBoostObjects){if(instanceName.indexOf(partOfGlBoostObjectInstanceName)>0){glBoostObjects.push(this._glBoostObjects[instanceName]);}}
return glBoostObjects;}
getGLBoostObject(glBoostObjectInstanceName){for(let instanceName in this._glBoostObjects){if(instanceName===glBoostObjectInstanceName){return this._glBoostObjects[instanceName];}}
return null;}
getGLBoostObjectByUserFlavorName(glBoostObjectUserFlavorName){for(let instanceName in this._glBoostObjects){if(this._glBoostObjects[instanceName].userFlavorName===glBoostObjectUserFlavorName){return this._glBoostObjects[instanceName];}}
return null;}
getGLBoostObjectsByUserFlavorName(partOfGlBoostObjectUserFlavorName){const results=[];for(let instanceName in this._glBoostObjects){if(this._glBoostObjects[instanceName].userFlavorName.indexOf(partOfGlBoostObjectUserFlavorName)!==-1){results.push(this._glBoostObjects[instanceName]);}}
return results;}
getGLBoostObjectWhichHasThisObjectId(objectId){for(let instanceName in this._glBoostObjects){if(this._glBoostObjects[instanceName].objectIndex===objectId){return this._glBoostObjects[instanceName];}}
return null;}
printGLBoostObjects(){var objects=this._glBoostObjects;MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,'========== GLBoost Object Lists [begin] ==========');for(var key in objects){if(objects.hasOwnProperty(key)){MiscUtil.consoleLog(key+'('+objects[key].belongingCanvasId+')');}}
MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,'========== GLBoost Object Lists [end] ==========');}
printGLBoostObjectsOrderByName(){var objects=this._glBoostObjects;var objectArray=[];for(var key in objects){if(objects.hasOwnProperty(key)){objectArray.push(objects[key]);}}
objectArray.sort(function(a,b){if(a<b)return-1;if(a>b)return 1;return 0;});MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,'========== GLBoost Object Lists [begin] ==========');objectArray.forEach((object)=>{MiscUtil.consoleLog(object.toString()+' ('+object.belongingCanvasId+')');});MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,'========== GLBoost Object Lists [end] ==========');}
registerWebGLResource(glBoostObject,glResource){var glResourceName=glResource.constructor.name;this._glResources.push([glBoostObject,glResource]);MiscUtil.consoleLog(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE,'WebGL Resource: '+glResourceName+' was created by '+glBoostObject.toString()+' ('+glBoostObject.belongingCanvasId+').');}
deregisterWebGLResource(glBoostObject,glResource){var glResourceName=glResource.constructor.name;this._glResources.forEach((glResource,i)=>{if(glResource[0]===glBoostObject&&glResource[1].constructor.name===glResourceName){this._glResources.splice(i,1);}});MiscUtil.consoleLog(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE,'WebGL Resource: '+glResourceName+' was deleted by '+glBoostObject.toString()+' ('+glBoostObject.belongingCanvasId+').');}
getWebGLResources(webglResourceName){let webglResources=this._glResources.filter((glResourceArray)=>{if(glResourceArray[1].constructor.name===webglResourceName){return true;}else{return false;}});return webglResources;}
printWebGLResources(){var glResources=this._glResources;glResources.sort(function(a,b){if(a[0]<b[0])return-1;if(a[0]>b[0])return 1;return 0;});MiscUtil.consoleLog(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE,'========== WebGL Resource Lists [begin] ==========');glResources.forEach((glResource,i)=>{MiscUtil.consoleLog(i+1+': '+glResource[0].toString()+' ('+glResource[0].belongingCanvasId+') created '+glResource[1]);});MiscUtil.consoleLog(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE,'========== WebGL Resource Lists [end] ==========');}
printHierarchy(){var glBoostObjects=this._glBoostObjects;var scenes=[];for(var key in glBoostObjects){if(glBoostObjects.hasOwnProperty(key)){if(key.match(/Scene/)){scenes.push(glBoostObjects[key]);}}}
function putWhiteSpace(level){var str='';for(var i=0;i<level;i++){str+='  ';}
return str;}
MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,'========== GLBoost Objects Hierarchy of Scenes [begin] ==========');scenes.forEach((scene)=>{var outputText=(function searchRecursively(element,level){var outputText='';outputText+=putWhiteSpace(level)+element.toString()+' ('+element.belongingCanvasId+')\n';if(typeof element.getChildren==='undefined'){return outputText;}
var children=element.getChildren();children.forEach((child)=>{outputText+=searchRecursively(child,level+1);});return outputText+='\n';})(scene,0);outputText=outputText.replace(/\n+/g,'\n');MiscUtil.consoleLog(outputText);});MiscUtil.consoleLog(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,'========== GLBoost Objects Hierarchy of Scenes [end] ==========');}}
GLBoost$1['L_GLBoostMonitor']=L_GLBoostMonitor;let singleton$1=Symbol();let singletonEnforcer=Symbol();class Logger{constructor(enforcer){if(enforcer!==singletonEnforcer){throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");}
this.realtimeTargets=new Map();this.aggregateTargets=new Map();this.logData=[];this.logCapacity=5000;this.registerRealtimeOutputTarget('default',this.defaultConsoleFunction);this.registerAggregateOutputTarget('default',this.defaultConsoleFunction);}
static getInstance(){if(!this[singleton$1]){this[singleton$1]=new Logger(singletonEnforcer);}
return this[singleton$1];}
registerRealtimeOutputTarget(targetName,target){this.realtimeTargets.set(targetName,target);}
registerAggregateOutputTarget(targetName,target){this.aggregateTargets.set(targetName,target);}
unregisterRealtimeOutputTarget(targetName){this.realtimeTargets.delete(targetName);}
unregisterAggregateOutputTarget(targetName){this.aggregateTargets.delete(targetName);}
aggregate(targetName=null){if(targetName!=null){const targetFunc=this.realtimeTargets[targetName];for(const log of this.logData){targetFunc(log.logLevelId,log.logTypeId,log.unixtime,...log.args);}}else{for(var[targetName,targetFunc]of this.realtimeTargets){for(const log of this.logData){targetFunc(log.logLevelId,log.logTypeId,log.unixtime,...log.args);}}}}
out(logLevelId,logTypeId,isRealtimeOn,...args){if(GLBoost$1.VALUE_CONSOLE_OUT_FOR_DEBUGGING===false&&(logLevelId===GLBoost$1.LOG_LEVEL_DEBUG||logLevelId===GLBoost$1.LOG_LEVEL_INFO||logLevelId===GLBoost$1.LOG_LEVEL_LOG)){return;}
if(GLBoost$1.valueOfGLBoostConstants[logTypeId]!=null&&GLBoost$1.valueOfGLBoostConstants[logTypeId]===false){return;}
const unixtime=Date.now();this.logData.push({unixtime:unixtime,logLevelId:logLevelId,logTypeId:logTypeId,args:args});if(isRealtimeOn){for(var[targetName,targetFunc]of this.realtimeTargets){targetFunc(logLevelId,logTypeId,unixtime,...args);}}
if(this.logData.length>this.logCapacity+1000){this.logData.splice(0,this.logData.length-this.logCapacity);}}
defaultConsoleFunction(logLevelId,logTypeId,unixtime,...args){const d=new Date(unixtime);const year=d.getFullYear();const month=d.getMonth()+1;const day=d.getDate();const hour=(d.getHours()<10)?'0'+d.getHours():d.getHours();const min=(d.getMinutes()<10)?'0'+d.getMinutes():d.getMinutes();const sec=(d.getSeconds()<10)?'0'+d.getSeconds():d.getSeconds();const datestr=year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec;console[GLBoost$1.getValueOfGLBoostConstant(logLevelId)](`[${datestr}][${GLBoost$1.getValueOfGLBoostConstant(logTypeId)}] ${args}`);}}
GLBoost$1['Logger']=Logger;class GLContext{constructor(canvas,initParameter,gl,width,height){if(typeof gl!=="undefined"&&gl!==null){this.impl=new GLContextWebGL1Impl(canvas,initParameter,this,gl);this._canvasWidth=width;this._canvasHeight=height;GLContext._instances["nocanvas"]=this;}else{if(GLContext._instances[canvas.id]instanceof GLContext){return GLContext._instances[canvas.id];}
if(GLBoost$1.VALUE_TARGET_WEBGL_VERSION===1){this.impl=new GLContextWebGL1Impl(canvas,this,initParameter);}else if(GLBoost$1.VALUE_TARGET_WEBGL_VERSION===2){this.impl=new GLContextWebGL2Impl(canvas,this,initParameter);}
GLContext._instances[canvas.id]=this;this._canvasWidth=canvas.width;this._canvasHeight=canvas.height;}
this._monitor=L_GLBoostMonitor.getInstance();this._glslProgramsLatestUsageCount=0;this._logger=Logger.getInstance();this._glErrorTypes=["INVALID_ENUM","INVALID_VALUE","INVALID_OPERATION","INVALID_FRAMEBUFFER_OPERATION","OUT_OF_MEMORY","CONTEXT_LOST_WEBGL"];this._glErrorMessages=["An unacceptable value has been specified for an enumerated argument. The command is ignored and the error flag is set.","A numeric argument is out of range. The command is ignored and the error flag is set.","The specified command is not allowed for the current state. The command is ignored and the error flag is set.","The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.","Not enough memory is left to execute the command.","If the WebGL context is lost, this error is returned on the first call to getError. Afterwards and until the context has been restored, it returns gl.NO_ERROR."];}
static getInstance(canvas,initParameter,gl,width,height){if(typeof canvas==="string"){canvas=window.document.querySelector(canvas);}
return new GLContext(canvas,initParameter,gl,width,height);}
get gl(){return this.impl.gl;}
set gl(gl){this.impl.gl=gl;}
get belongingCanvasId(){if(this.impl.canvas){return this.impl.canvas.id;}else{return "nocanvas";}}
get canvas(){return this.impl.canvas;}
checkGLError(){if(GLBoost$1.valueOfGLBoostConstants[GLBoost$1.LOG_TYPE_GL]===false){return;}
let gl=this.impl.gl;let errorCode=gl.getError();if(errorCode!==0){this.glErrorTypes.forEach((errorType,i)=>{if(gl[errorType]===errorCode){this._logger.out(GLBoost$1.LOG_LEVEL_ERROR,GLBoost$1.LOG_TYPE_GL,false,errorCode,this._glErrorMessages[i]);}});}}
createVertexArray(glBoostObject){var gl=this.gl;var glem=GLExtensionsManager.getInstance(this);var glResource=glem.createVertexArray(gl);if(glResource){this._monitor.registerWebGLResource(glBoostObject,glResource);}
this.checkGLError();return glResource;}
createBuffer(glBoostObject){var glResource=this.gl.createBuffer();this._monitor.registerWebGLResource(glBoostObject,glResource);this.checkGLError();return glResource;}
createFramebuffer(glBoostObject){var glResource=this.gl.createFramebuffer();this._monitor.registerWebGLResource(glBoostObject,glResource);this.checkGLError();return glResource;}
deleteFramebuffer(glBoostObject,frameBuffer){this._monitor.deregisterWebGLResource(glBoostObject,frameBuffer);this.gl.deleteFramebuffer(frameBuffer);this.checkGLError();frameBuffer=null;}
createRenderbuffer(glBoostObject){var glResource=this.gl.createRenderbuffer();this._monitor.registerWebGLResource(glBoostObject,glResource);this.checkGLError();return glResource;}
deleteRenderbuffer(glBoostObject,renderBuffer){this._monitor.deregisterWebGLResource(glBoostObject,renderBuffer);this.gl.deleteRenderbuffer(renderBuffer);this.checkGLError();renderBuffer=null;}
createShader(glBoostObject,shaderType){var glResource=this.gl.createShader(shaderType);this._monitor.registerWebGLResource(glBoostObject,glResource);this.checkGLError();return glResource;}
deleteShader(glBoostObject,shader){this._monitor.deregisterWebGLResource(glBoostObject,shader);this.gl.deleteShader(shader);this.checkGLError();shader=null;}
createProgram(glBoostObject){var glResource=this.gl.createProgram();this._monitor.registerWebGLResource(glBoostObject,glResource);this.checkGLError();return glResource;}
useProgram(program){this.gl.useProgram(program);this._currentProgramInuse=program;this.checkGLError();this._glslProgramsLatestUsageCount++;}
deleteProgram(glBoostObject,program){this._monitor.deregisterWebGLResource(glBoostObject,program);this.gl.deleteProgram(program);this.checkGLError();}
deleteAllPrograms(){let programObjs=this._monitor.getWebGLResources("WebGLProgram");for(let programObj of programObjs){this.deleteProgram(programObj[0],programObj[1]);}}
getUniformLocation(glslProgram,uniformVariableName){let uniformLocation=this.gl.getUniformLocation(glslProgram,uniformVariableName);this.checkGLError();if(uniformLocation){uniformLocation.glslProgram=glslProgram;uniformLocation.glslProgramUsageCountWhenLastSet=-1;}
return uniformLocation;}
_setUniformValues(uniformFuncStr,args,forceUpdate){let uniformLocation=args[0];if(!uniformLocation){MiscUtil.consoleLog(GLBoost$1.LOG_OMISSION_PROCESSING,"LOG_OMISSION_PROCESSING: gl.uniformXXX call has been omitted since the uniformLocation is falsy (undefined or something)");return;}
if(forceUpdate){this.gl[uniformFuncStr].apply(this.gl,args);this.checkGLError();return;}
if(this._currentProgramInuse.createdAt!==uniformLocation.glslProgram.createdAt){console.error("missmatch!");return;}
if(uniformLocation.glslProgramUsageCountWhenLastSet<this._glslProgramsLatestUsageCount){this.gl[uniformFuncStr].apply(this.gl,args);args[0].setValue=args;this.checkGLError();return;}
MiscUtil.consoleLog(GLBoost$1.LOG_OMISSION_PROCESSING,"LOG_OMISSION_PROCESSING: gl.uniformXXX call has been omitted since the uniformLocation.glslProgram is not in use.");}
uniformMatrix4fv(uniformLocation,toTranspose,matrix44,forceUpdate){this._setUniformValues("uniformMatrix4fv",[uniformLocation,toTranspose,matrix44],forceUpdate);}
uniform4f(uniformLocation,x,y,z,w,forceUpdate){this._setUniformValues("uniform4f",[uniformLocation,x,y,z,w],forceUpdate);}
uniform3f(uniformLocation,x,y,z,forceUpdate){this._setUniformValues("uniform3f",[uniformLocation,x,y,z],forceUpdate);}
uniform2f(uniformLocation,x,y,forceUpdate){this._setUniformValues("uniform2f",[uniformLocation,x,y],forceUpdate);}
uniform1f(uniformLocation,x,forceUpdate){this._setUniformValues("uniform1f",[uniformLocation,x],forceUpdate);}
uniform4i(uniformLocation,x,y,z,w,forceUpdate){this._setUniformValues("uniform4i",[uniformLocation,x,y,z,w],forceUpdate);}
uniform3i(uniformLocation,x,y,z,forceUpdate){this._setUniformValues("uniform3i",[uniformLocation,x,y,z],forceUpdate);}
uniform2i(uniformLocation,x,y,forceUpdate){this._setUniformValues("uniform2i",[uniformLocation,x,y],forceUpdate);}
uniform1i(uniformLocation,x,forceUpdate){this._setUniformValues("uniform1i",[uniformLocation,x],forceUpdate);}
createTexture(glBoostObject){var glResource=this.gl.createTexture();this._monitor.registerWebGLResource(glBoostObject,glResource);this.checkGLError();return glResource;}
deleteTexture(glBoostObject,texture){this._monitor.deregisterWebGLResource(glBoostObject,texture);this.gl.deleteTexture(texture);this.checkGLError();texture=null;}
get canvasWidth(){return this._canvasWidth;}
set canvasWidth(width){if(this.impl.canvas){this.impl.canvas.width=width;}
this._canvasWidth=width;}
get canvasHeight(){return this._canvasHeight;}
set canvasHeight(height){if(this.impl.canvas){this.impl.canvas.height=height;}
this._canvasHeight=height;}
get glslProgramsLatestUsageCount(){return this._glslProgramsLatestUsageCount;}}
GLContext._instances=new Object();class GLBoostSystem{constructor(canvas,initParameter,gl,width,height,glBoostContext){if(gl){this._glContext=GLContext.getInstance(null,initParameter,gl,width,height);}else{this._glContext=GLContext.getInstance(canvas,initParameter);}
this._glBoostContext=glBoostContext;this._globalStatesUsage=GLBoost$1.GLOBAL_STATES_USAGE_INCLUSIVE;this._defaultGlobalStates=[3042,2929];this._currentGlobalStates=null;this._glBoostMonitor=L_GLBoostMonitor.getInstance();if(typeof effekseer!=="undefined"){effekseer.init(this._glContext.gl);}}}
class Entity{constructor(entityUID,isAlive){this.__entity_uid=entityUID;this.__isAlive=isAlive;}}
let singleton$2=Symbol();class EntityRepository{constructor(enforcer){if(enforcer!==EntityRepository.__singletonEnforcer||!(this instanceof EntityRepository)){throw new Error('This is a Singleton class. get the instance using \'getInstance\' static method.');}
EntityRepository.__singletonEnforcer=Symbol();this.__entity_uid_count=0;this.__entities=new Map();this.__lifeStatusOfEntities=new Map();}
static getInstance(){if(!this[singleton$2]){this[singleton$2]=new EntityRepository(EntityRepository.__singletonEnforcer);}
return this[singleton$2];}
createEntity(){this.__entity_uid_count++;const alive=new Boolean(true);const entity=new Entity(this.__entity_uid_count,alive);this.__entities.set(this.__entity_uid_count,entity);this.__lifeStatusOfEntities.set(this.__entity_uid_count,alive);return entity;}}
class GLBoostObject{constructor(glBoostSystem,toRegister=true){if(this.constructor===GLBoostObject){throw new TypeError('Cannot construct GLBoostObject instances directly.');}
this._entity_uid=0;this._setName();const entityRepository=EntityRepository.getInstance();this._glBoostSystem=glBoostSystem;this._glContext=glBoostSystem._glContext;this._glBoostMonitor=glBoostSystem._glBoostMonitor;this._toRegister=toRegister;if(this._toRegister){this._glBoostMonitor.registerGLBoostObject(this);}
this._userFlavorName='';this._readyForDiscard=false;this._classUniqueNumber=0;for(let i=0;i<this.className.length;i++){this._classUniqueNumber+=this.className.charCodeAt(i);}
this.setupExistIndexAndArray();}
setupExistIndexAndArray(){this._objectIndex=-1;const seekSpaceOfArrayAndSetIndexThere=(typeName)=>{const that=this;let array=GLBoostObject['_'+typeName+'ExistArray'];for(let i=0;i<array.length;i++){if(array[i]===void 0){that['_'+typeName+'Index']=i;array[i]=true;return;}}
that['_'+typeName+'Index']=array.length;array[array.length]=true;};if(this.className.indexOf('Mesh')!==-1){seekSpaceOfArrayAndSetIndexThere('object');}}
tearDownExistIndexAndArray(){const deleteIndex=(typeName)=>{let array=GLBoostObject['_'+typeName+'ExistArray'];const that=this;delete array[that['_'+typeName+'Index']];that['_'+typeName+'Index']=-1;};if(this.className.indexOf('Mesh')!==-1){deleteIndex('object');if(this.className.indexOf('SkeltalMesh')!==-1){deleteIndex('jointSet');}}else if(this.className.indexOf('Light')!==-1){deleteIndex('light');}else if(this.className.indexOf('Material')!==-1){deleteIndex('material');}}
_setName(){if(typeof GLBoostObject.classInfoDic[this.constructor.name]==='undefined'){GLBoostObject.classInfoDic[this.constructor.name]={};}
GLBoostObject.classInfoDic[this.constructor.name]._instanceCount=(typeof GLBoostObject.classInfoDic[this.constructor.name]._instanceCount==='undefined')?0:(GLBoostObject.classInfoDic[this.constructor.name]._instanceCount+1);this._instanceName=this.constructor.name+'_'+GLBoostObject.classInfoDic[this.constructor.name]._instanceCount;}
toString(){return this._instanceName;}
get classUniqueNumber(){return this._classUniqueNumber;}
get className(){return this.constructor.name;}
get instanceName(){return this._instanceName;}
get belongingCanvasId(){return this._glContext.belongingCanvasId;}
set userFlavorName(name){this._userFlavorName=name;}
tryToSetUserFlavorNameUniquely(name){if(this._glBoostMonitor.getGLBoostObjectByUserFlavorName(name)!=null){return false;}else{this._userFlavorName=name;return true;}}
get userFlavorName(){return this._userFlavorName;}
get instanceNameWithUserFlavor(){return this._instanceName+'__'+this._userFlavorName;}
readyForDiscard(){if(this._toRegister){this._glBoostMonitor.deregisterGLBoostObject(this);}
this.tearDownExistIndexAndArray();this._readyForDiscard=true;}
get isReadyForDiscard(){return this._readyForDiscard;}
_copy(instance){instance._userFlavorName=this._userFlavorName;}
get objectIndex(){return this._objectIndex;}
get entityUID(){return this._entity_uid;}}
GLBoostObject.classInfoDic={};GLBoostObject._objectExistArray=[];GLBoostObject.__entities=[];GLBoost$1['GLBoostObject']=GLBoostObject;class Vector2{constructor(x,y){if(ArrayBuffer.isView(x)){this.v=((x));return;}else{this.v=new Float32Array(2);}
this.x=((x));this.y=((y));}
get className(){return this.constructor.name;}
clone(){return new Vector2(this.x,this.y);}
multiply(val){this.x*=val;this.y*=val;return this;}
static multiply(vec2,val){return new Vector2(vec2.x*val,vec2.y*val);}
get x(){return this.v[0];}
set x(x){this.v[0]=x;}
get y(){return this.v[1];}
set y(y){this.v[1]=y;}
get raw(){return this.v;}}
GLBoost$1["Vector2"]=Vector2;class MathUtil{constructor(){}
static radianToDegree(rad){return rad*180/Math.PI;}
static degreeToRadian(deg){return deg*Math.PI/180;}}
GLBoost$1["MathUtil"]=MathUtil;const IsUtil={not:{},all:{},any:{},_not(fn){return function(){return!fn.apply(null,[...arguments]);};},_all(fn){return function(){if(Array.isArray(arguments[0])){return arguments[0].every(fn);}
return[...arguments].every(fn);};},_any(fn){return function(){if(Array.isArray(arguments[0])){return arguments[0].some(fn);}
return[...arguments].some(fn);};},defined(val){return val!==void 0;},undefined(val){return val===void 0;},null(val){return val===null;},exist(val){return val!=null;},function(val){return typeof val==="function";}};for(let fn in IsUtil){if(IsUtil.hasOwnProperty(fn)){const interfaces=["not","all","any"];if(fn.indexOf("_")===-1&&!interfaces.includes(fn)){interfaces.forEach(itf=>{const op="_"+itf;IsUtil[itf][fn]=IsUtil[op](IsUtil[fn]);});}}}
GLBoost$1["IsUtil"]=IsUtil;class Vector3{constructor(x,y,z){if(ArrayBuffer.isView(x)){this.v=((x));return;}else{this.v=new Float32Array(3);}
if(IsUtil.not.exist(x)){this.x=0;this.y=0;this.z=0;}else if(Array.isArray(x)){this.x=x[0];this.y=x[1];this.z=x[2];}else if(typeof(x).w!=='undefined'){this.x=(x).x;this.y=(x).y;this.z=(x).z;}else if(typeof(x).z!=='undefined'){this.x=(x).x;this.y=(x).y;this.z=(x).z;}else if(typeof(x).y!=='undefined'){this.x=(x).x;this.y=(x).y;this.z=0;}else{this.x=((x));this.y=((y));this.z=((z));}}
get className(){return this.constructor.name;}
isEqual(vec){if(this.x===vec.x&&this.y===vec.y&&this.z===vec.z){return true;}else{return false;}}
static zero(){return new Vector3(0,0,0);}
clone(){return new Vector3(this.x,this.y,this.z);}
length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);}
lengthSquared(){return this.x*this.x+this.y*this.y+this.z*this.z;}
static lengthSquared(vec3){return vec3.x*vec3.x+vec3.y*vec3.y+vec3.z*vec3.z;}
lengthTo(vec3){var deltaX=vec3.x-this.x;var deltaY=vec3.y-this.y;var deltaZ=vec3.z-this.z;return Math.sqrt(deltaX*deltaX+deltaY*deltaY+deltaZ*deltaZ);}
static lengthBtw(lhv,rhv){var deltaX=rhv.x-lhv.x;var deltaY=rhv.y-lhv.y;var deltaZ=rhv.z-lhv.z;return Math.sqrt(deltaX*deltaX+deltaY*deltaY+deltaZ*deltaZ);}
dotProduct(vec3){return this.x*vec3.x+this.y*vec3.y+this.z*vec3.z;}
static dotProduct(lv,rv){return lv.x*rv.x+lv.y*rv.y+lv.z*rv.z;}
cross(v){var x=this.y*v.z-this.z*v.y;var y=this.z*v.x-this.x*v.z;var z=this.x*v.y-this.y*v.x;this.x=x;this.y=y;this.z=z;return this;}
static cross(lv,rv){var x=lv.y*rv.z-lv.z*rv.y;var y=lv.z*rv.x-lv.x*rv.z;var z=lv.x*rv.y-lv.y*rv.x;return new Vector3(x,y,z);}
normalize(){var length=this.length();this.divide(length);return this;}
static normalize(vec3){var length=vec3.length();var newVec=new Vector3(vec3.x,vec3.y,vec3.z);newVec.divide(length);return newVec;}
add(v){this.x+=v.x;this.y+=v.y;this.z+=v.z;return this;}
static add(lv,rv){return new Vector3(lv.x+rv.x,lv.y+rv.y,lv.z+rv.z);}
subtract(v){this.x-=v.x;this.y-=v.y;this.z-=v.z;return this;}
static subtract(lv,rv){return new Vector3(lv.x-rv.x,lv.y-rv.y,lv.z-rv.z);}
divide(val){if(val!==0){this.x/=val;this.y/=val;this.z/=val;}else{console.warn("0 division occured!");this.x=Infinity;this.y=Infinity;this.z=Infinity;}
return this;}
static divide(vec3,val){if(val!==0){return new Vector3(vec3.x/val,vec3.y/val,vec3.z/val);}else{console.warn("0 division occured!");return new Vector3(Infinity,Infinity,Infinity);}}
multiply(val){this.x*=val;this.y*=val;this.z*=val;return this;}
multiplyVector(vec){this.x*=vec.x;this.y*=vec.y;this.z*=vec.z;return this;}
static multiply(vec3,val){return new Vector3(vec3.x*val,vec3.y*val,vec3.z*val);}
static multiplyVector(vec3,vec){return new Vector3(vec3.x*vec.x,vec3.y*vec.y,vec3.z*vec.z);}
static angleOfVectors(lhv,rhv){let cos_sita=Vector3.dotProduct(lhv,rhv)/(lhv.length()*rhv.length());let sita=Math.acos(cos_sita);if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){sita=MathUtil.radianToDegree(sita);}
return sita;}
divideVector(vec3){this.x/=vec3.x;this.y/=vec3.y;this.z/=vec3.z;return this;}
static divideVector(lvec3,rvec3){return new Vector3(lvec3.x/rvec3.x,lvec3.y/rvec3.y,lvec3.z/rvec3.z);}
toString(){return '('+this.x+', '+this.y+', '+this.z+')';}
get x(){return this.v[0];}
set x(x){this.v[0]=x;}
get y(){return this.v[1];}
set y(y){this.v[1]=y;}
get z(){return this.v[2];}
set z(z){this.v[2]=z;}
get raw(){return this.v;}}
GLBoost$1['Vector3']=Vector3;class Vector4$1{constructor(x,y,z,w){if(ArrayBuffer.isView(x)){this.v=((x));return;}else{this.v=new Float32Array(4);}
if(IsUtil.not.exist(x)){this.x=0;this.y=0;this.z=0;this.w=1;}else if(Array.isArray(x)){this.x=x[0];this.y=x[1];this.z=x[2];this.w=x[3];}else if(typeof(x).w!=='undefined'){this.x=(x).x;this.y=(x).y;this.z=(x).z;this.w=(x).w;}else if(typeof(x).z!=='undefined'){this.x=(x).x;this.y=(x).y;this.z=(x).z;this.w=1;}else if(typeof(x).y!=='undefined'){this.x=(x).x;this.y=(x).y;this.z=0;this.w=1;}else{this.x=((x));this.y=((y));this.z=((z));this.w=((w));}}
get className(){return this.constructor.name;}
isEqual(vec){if(this.x===vec.x&&this.y===vec.y&&this.z===vec.z&&this.w===vec.w){return true;}else{return false;}}
clone(){return new Vector4$1(this.x,this.y,this.z,this.w);}
static zero(){return new Vector4$1(0,0,0,1);}
length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);}
normalize(){var length=this.length();this.divide(length);return this;}
static normalize(vec4){var length=vec4.length();var newVec=new Vector4$1(vec4.x,vec4.y,vec4.z,vec4.w);newVec.divide(length);return newVec;}
add(v){this.x+=v.x;this.y+=v.y;this.z+=v.z;this.w+=v.w;return this;}
static add(lv,rv){return new Vector4$1(lv.x+rv.x,lv.y+rv.y,lv.z+rv.z,lv.z+rv.z);}
addWithOutW(v){this.x+=v.x;this.y+=v.y;this.z+=v.z;return this;}
subtract(v){this.x-=v.x;this.y-=v.y;this.z-=v.z;this.w-=v.w;return this;}
static subtract(lv,rv){return new Vector4$1(lv.x-rv.x,lv.y-rv.y,lv.z-rv.z,lv.w-rv.w);}
static addWithOutW(lv,rv){return new Vector4$1(lv.x+rv.x,lv.y+rv.y,lv.z+rv.z,lv.z);}
multiply(val){this.x*=val;this.y*=val;this.z*=val;this.w*=val;return this;}
multiplyVector(vec){this.x*=vec.x;this.y*=vec.y;this.z*=vec.z;this.w*=vec.w;return this;}
static multiply(vec4,val){return new Vector4$1(vec4.x*val,vec4.y*val,vec4.z*val,vec4.w*val);}
static multiplyVector(vec4,vec){return new Vector4$1(vec4.x*vec.x,vec4.y*vec.y,vec4.z*vec.z,vec4.w*vec.w);}
divide(val){if(val!==0){this.x/=val;this.y/=val;this.z/=val;this.w/=val;}else{console.warn("0 division occured!");this.x=Infinity;this.y=Infinity;this.z=Infinity;this.w=Infinity;}
return this;}
static divide(vec4,val){if(val!==0){return new Vector4$1(vec4.x/val,vec4.y/val,vec4.z/val,vec4.w/val);}else{console.warn("0 division occured!");return new Vector4$1(Infinity,Infinity,Infinity,Infinity);}}
divideVector(vec4){this.x/=vec4.x;this.y/=vec4.y;this.z/=vec4.z;this.w/=vec4.w;return this;}
static divideVector(lvec4,rvec4){return new Vector4$1(lvec4.x/rvec4.x,lvec4.y/rvec4.y,lvec4.z/rvec4.z,lvec4.w/rvec4.w);}
toString(){return '('+this.x+', '+this.y+', '+this.z+', '+this.w+')';}
get x(){return this.v[0];}
set x(x){this.v[0]=x;}
get y(){return this.v[1];}
set y(y){this.v[1]=y;}
get z(){return this.v[2];}
set z(z){this.v[2]=z;}
get w(){return this.v[3];}
set w(w){this.v[3]=w;}
get raw(){return this.v;}}
GLBoost$1["Vector4"]=Vector4$1;class Quaternion{constructor(x,y,z,w){this.x=x;this.y=y;this.z=z;this.w=w;}
isEqual(vec){if(this.x===vec.x&&this.y===vec.y&&this.z===vec.z&&this.w===vec.w){return true;}else{return false;}}
get className(){return this.constructor.name;}
clone(){return new Quaternion(this.x,this.y,this.z,this.w);}
static invert(quat){quat=new Quaternion(-quat.x,-quat.y,-quat.z,quat.w);const inorm2=1.0/(quat.x*quat.x+quat.y*quat.y+quat.z*quat.z+quat.w*quat.w);quat.x*=inorm2;quat.y*=inorm2;quat.z*=inorm2;quat.w*=inorm2;return quat;}
static qlerp(lhq,rhq,ratio){var q=new Quaternion(0,0,0,1);var qr=lhq.w*rhq.w+lhq.x*rhq.x+lhq.y*rhq.y+lhq.z*rhq.z;var ss=1.0-qr*qr;if(ss===0.0){q.w=lhq.w;q.x=lhq.x;q.y=lhq.y;q.z=lhq.z;return q;}else{if(qr>1){qr=0.999;}else if(qr<-1){qr=-0.999;}
let ph=Math.acos(qr);let s2;if(qr<0.0&&ph>Math.PI/2.0){qr=-lhq.w*rhq.w-lhq.x*rhq.x-lhq.y*rhq.y-lhq.z*rhq.z;ph=Math.acos(qr);s2=-1*Math.sin(ph*ratio)/Math.sin(ph);}else{s2=Math.sin(ph*ratio)/Math.sin(ph);}
let s1=Math.sin(ph*(1.0-ratio))/Math.sin(ph);q.x=lhq.x*s1+rhq.x*s2;q.y=lhq.y*s1+rhq.y*s2;q.z=lhq.z*s1+rhq.z*s2;q.w=lhq.w*s1+rhq.w*s2;return q;}}
axisAngle(axisVec3,angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var halfAngle=0.5*radian;var sin=Math.sin(halfAngle);var axis=Vector3.normalize(axisVec3);this.w=Math.cos(halfAngle);this.x=sin*axis.x;this.y=sin*axis.y;this.z=sin*axis.z;return this;}
static axisAngle(axisVec3,angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var halfAngle=0.5*radian;var sin=Math.sin(halfAngle);var axis=Vector3.normalize(axisVec3);return new Quaternion(sin*axis.x,sin*axis.y,sin*axis.z,Math.cos(halfAngle));}
add(q){this.x+=q.x;this.y+=q.y;this.z+=q.z;this.w+=q.w;return this;}
multiply(q){let result=new Quaternion(0,0,0,1);result.x=q.w*this.x+q.z*this.y+q.y*this.z-q.x*this.w;result.y=-q.z*this.x+q.w*this.y+q.x*this.z-q.y*this.w;result.z=q.y*this.x+q.x*this.y+q.w*this.z-q.z*this.w;result.w=-q.x*this.x-q.y*this.y-q.z*this.z-q.w*this.w;this.x=result.x;this.y=result.y;this.z=result.z;this.w=result.w;return this;}
static multiply(q1,q2){let result=new Quaternion(0,0,0,1);result.x=q2.w*q1.x+q2.z*q1.y-q2.y*q1.z+q2.x*q1.w;result.y=-q2.z*q1.x+q2.w*q1.y+q2.x*q1.z+q2.y*q1.w;result.z=q2.y*q1.x-q2.x*q1.y+q2.w*q1.z+q2.z*q1.w;result.w=-q2.x*q1.x-q2.y*q1.y-q2.z*q1.z+q2.w*q1.w;return result;}
static fromMatrix(m){let q=new Quaternion();let tr=m.m00+m.m11+m.m22;if(tr>0){let S=0.5/Math.sqrt(tr+1.0);q.w=0.25/S;q.x=(m.m21-m.m12)*S;q.y=(m.m02-m.m20)*S;q.z=(m.m10-m.m01)*S;}else if((m.m00>m.m11)&&(m.m00>m.m22)){let S=Math.sqrt(1.0+m.m00-m.m11-m.m22)*2;q.w=(m.m21-m.m12)/S;q.x=0.25*S;q.y=(m.m01+m.m10)/S;q.z=(m.m02+m.m20)/S;}else if(m.m11>m.m22){let S=Math.sqrt(1.0+m.m11-m.m00-m.m22)*2;q.w=(m.m02-m.m20)/S;q.x=(m.m01+m.m10)/S;q.y=0.25*S;q.z=(m.m12+m.m21)/S;}else{let S=Math.sqrt(1.0+m.m22-m.m00-m.m11)*2;q.w=(m.m10-m.m01)/S;q.x=(m.m02+m.m20)/S;q.y=(m.m12+m.m21)/S;q.z=0.25*S;}
return q;}
static fromPosition(vec3){let q=new Quaternion(vec3.x,vec3.y,vec3.z,0);return q;}
at(i){switch(i%4){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;}}
setAt(i,val){switch(i%4){case 0:this.x=val;break;case 1:this.y=val;break;case 2:this.z=val;break;case 3:this.w=val;break;}}
normalize(){let norm=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);this.x/=norm;this.y/=norm;this.z/=norm;this.w/=norm;return this;}
toString(){return '('+this.x+', '+this.y+', '+this.z+', '+this.w+')';}}
GLBoost$1["Quaternion"]=Quaternion;class Matrix33{constructor(m,isColumnMajor=false,shaderParameterType=void 0,shaderParameterEntityIndex=void 0,shaderParameterName=void 0){this.m=new Float32Array(9);if(arguments.length>=9){if(isColumnMajor===true){let m=arguments;this.setComponents(m[0],m[3],m[6],m[1],m[4],m[7],m[2],m[5],m[8]);}else{this.setComponents.apply(this,arguments);}}else if(Array.isArray(m)){if(isColumnMajor===true){this.setComponents(m[0],m[3],m[6],m[1],m[4],m[7],m[2],m[5],m[8]);}else{this.setComponents.apply(this,m);}}else if(m instanceof Float32Array){if(isColumnMajor===true){this.setComponents(m[0],m[3],m[6],m[1],m[4],m[7],m[2],m[5],m[8]);}else{this.setComponents.apply(this,m);}}else if(!!m&&typeof m.m22!=="undefined"){if(isColumnMajor===true){this.setComponents(m.m00,m.m01,m.m02,m.m10,m.m11,m.m12,m.m20,m.m21,m.m22);}else{this.setComponents(m.m00,m.m01,m.m02,m.m10,m.m11,m.m12,m.m20,m.m21,m.m22);}}else if(!!m&&typeof m.className!=="undefined"&&m.className==="Quaternion"){const sx=m.x*m.x;const sy=m.y*m.y;const sz=m.z*m.z;const cx=m.y*m.z;const cy=m.x*m.z;const cz=m.x*m.y;const wx=m.w*m.x;const wy=m.w*m.y;const wz=m.w*m.z;this.setComponents(1.0-2.0*(sy+sz),2.0*(cz-wz),2.0*(cy+wy),2.0*(cz+wz),1.0-2.0*(sx+sz),2.0*(cx-wx),2.0*(cy-wy),2.0*(cx+wx),1.0-2.0*(sx+sy));}else{this.identity();}}
setComponents(m00,m01,m02,m10,m11,m12,m20,m21,m22){this.m[0]=m00;this.m[3]=m01;this.m[6]=m02;this.m[1]=m10;this.m[4]=m11;this.m[7]=m12;this.m[2]=m20;this.m[5]=m21;this.m[8]=m22;return this;}
get className(){return this.constructor.name;}
identity(){this.setComponents(1,0,0,0,1,0,0,0,1);return this;}
static identity(){return new Matrix33(1,0,0,0,1,0,0,0,1);}
clone(){return new Matrix33(this.m[0],this.m[3],this.m[6],this.m[1],this.m[4],this.m[7],this.m[2],this.m[5],this.m[8]);}
rotateX(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return this.setComponents(1,0,0,0,cos,-sin,0,sin,cos);}
static rotateX(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return new Matrix33(1,0,0,0,cos,-sin,0,sin,cos);}
rotateY(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);this.setComponents(cos,0,sin,0,1,0,-sin,0,cos);return this;}
static rotateY(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return new Matrix33(cos,0,sin,0,1,0,-sin,0,cos);}
rotateZ(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return this.setComponents(cos,-sin,0,sin,cos,0,0,0,1);}
static rotateZ(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return new Matrix33(cos,-sin,0,sin,cos,0,0,0,1);}
static rotateXYZ(x,y,z){return Matrix33.rotateZ(z).multiply(Matrix33.rotateY(y).multiply(Matrix33.rotateX(x)));}
static rotate(vec3){return Matrix33.rotateZ(vec3.z).multiply(Matrix33.rotateY(vec3.y).multiply(Matrix33.rotateX(vec3.x)));}
scale(vec){return this.setComponents(vec.x,0,0,0,vec.y,0,0,0,vec.z);}
static scale(vec){return new Matrix33(vec.x,0,0,0,vec.y,0,0,0,vec.z);}
zero(){this.setComponents(0,0,0,0,0,0,0,0,0);return this;}
static zero(){return new Matrix33(0,0,0,0,0,0,0,0,0);}
flatten(){return this.m;}
flattenAsArray(){return[this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5],this.m[6],this.m[7],this.m[8]];}
_swap(l,r){this.m[r]=[this.m[l],(this.m[l]=this.m[r])][0];}
transpose(){this._swap(1,3);this._swap(2,6);this._swap(5,8);return this;}
static transpose(mat){var mat_t=new Matrix33(mat.m00,mat.m10,mat.m20,mat.m01,mat.m11,mat.m21,mat.m02,mat.m12,mat.m22);return mat_t;}
multiplyVector(vec){var x=this.m00*vec.x+this.m01*vec.y+this.m02*vec.z;var y=this.m10*vec.x+this.m11*vec.y+this.m12*vec.z;var z=this.m20*vec.x+this.m21*vec.y+this.m22*vec.z;return new Vector3(x,y,z);}
multiply(mat){var m00=this.m00*mat.m00+this.m01*mat.m10+this.m02*mat.m20;var m01=this.m00*mat.m01+this.m01*mat.m11+this.m02*mat.m21;var m02=this.m00*mat.m02+this.m01*mat.m12+this.m02*mat.m22;var m10=this.m10*mat.m00+this.m11*mat.m10+this.m12*mat.m20;var m11=this.m10*mat.m01+this.m11*mat.m11+this.m12*mat.m21;var m12=this.m10*mat.m02+this.m11*mat.m12+this.m12*mat.m22;var m20=this.m20*mat.m00+this.m21*mat.m10+this.m22*mat.m20;var m21=this.m20*mat.m01+this.m21*mat.m11+this.m22*mat.m21;var m22=this.m20*mat.m02+this.m21*mat.m12+this.m22*mat.m22;return this.setComponents(m00,m01,m02,m10,m11,m12,m20,m21,m22);}
static multiply(l_m,r_m){var m00=l_m.m00*r_m.m00+l_m.m01*r_m.m10+l_m.m02*r_m.m20;var m10=l_m.m10*r_m.m00+l_m.m11*r_m.m10+l_m.m12*r_m.m20;var m20=l_m.m20*r_m.m00+l_m.m21*r_m.m10+l_m.m22*r_m.m20;var m01=l_m.m00*r_m.m01+l_m.m01*r_m.m11+l_m.m02*r_m.m21;var m11=l_m.m10*r_m.m01+l_m.m11*r_m.m11+l_m.m12*r_m.m21;var m21=l_m.m20*r_m.m01+l_m.m21*r_m.m11+l_m.m22*r_m.m21;var m02=l_m.m00*r_m.m02+l_m.m01*r_m.m12+l_m.m02*r_m.m22;var m12=l_m.m10*r_m.m02+l_m.m11*r_m.m12+l_m.m12*r_m.m22;var m22=l_m.m20*r_m.m02+l_m.m21*r_m.m12+l_m.m22*r_m.m22;return new Matrix33(m00,m01,m02,m10,m11,m12,m20,m21,m22);}
determinant(){return(this.m00*this.m11*this.m22+
this.m10*this.m21*this.m02+
this.m20*this.m01*this.m12-
this.m00*this.m21*this.m12-
this.m20*this.m11*this.m02-
this.m10*this.m01*this.m22);}
static determinant(mat){return(mat.m00*mat.m11*mat.m22+
mat.m10*mat.m21*mat.m02+
mat.m20*mat.m01*mat.m12-
mat.m00*mat.m21*mat.m12-
mat.m20*mat.m11*mat.m02-
mat.m10*mat.m01*mat.m22);}
invert(){var det=this.determinant();var m00=(this.m11*this.m22-this.m12*this.m21)/det;var m01=(this.m02*this.m21-this.m01*this.m22)/det;var m02=(this.m01*this.m12-this.m02*this.m11)/det;var m10=(this.m12*this.m20-this.m10*this.m22)/det;var m11=(this.m00*this.m22-this.m02*this.m20)/det;var m12=(this.m02*this.m10-this.m00*this.m12)/det;var m20=(this.m10*this.m21-this.m11*this.m20)/det;var m21=(this.m01*this.m20-this.m00*this.m21)/det;var m22=(this.m00*this.m11-this.m01*this.m10)/det;return this.setComponents(m00,m01,m02,m10,m11,m12,m20,m21,m22);}
static invert(mat){var det=mat.determinant();var m00=(mat.m11*mat.m22-mat.m12*mat.m21)/det;var m01=(mat.m02*mat.m21-mat.m01*mat.m22)/det;var m02=(mat.m01*mat.m12-mat.m02*mat.m11)/det;var m10=(mat.m12*mat.m20-mat.m10*mat.m22)/det;var m11=(mat.m00*mat.m22-mat.m02*mat.m20)/det;var m12=(mat.m02*mat.m10-mat.m00*mat.m12)/det;var m20=(mat.m10*mat.m21-mat.m11*mat.m20)/det;var m21=(mat.m01*mat.m20-mat.m00*mat.m21)/det;var m22=(mat.m00*mat.m11-mat.m01*mat.m10)/det;return new Matrix33(m00,m01,m02,m10,m11,m12,m20,m21,m22);}
set m00(val){this.m[0]=val;}
get m00(){return this.m[0];}
set m10(val){this.m[1]=val;}
get m10(){return this.m[1];}
set m20(val){this.m[2]=val;}
get m20(){return this.m[2];}
set m01(val){this.m[3]=val;}
get m01(){return this.m[3];}
set m11(val){this.m[4]=val;}
get m11(){return this.m[4];}
set m21(val){this.m[5]=val;}
get m21(){return this.m[5];}
set m02(val){this.m[6]=val;}
get m02(){return this.m[6];}
set m12(val){this.m[7]=val;}
get m12(){return this.m[7];}
set m22(val){this.m[8]=val;}
get m22(){return this.m[8];}
toString(){return(this.m00+
" "+
this.m01+
" "+
this.m02+
"\n"+
this.m10+
" "+
this.m11+
" "+
this.m12+
"\n"+
this.m20+
" "+
this.m21+
" "+
this.m22+
"\n");}
nearZeroToZero(value){if(Math.abs(value)<0.00001){value=0;}else if(0.99999<value&&value<1.00001){value=1;}else if(-1.00001<value&&value<-0.99999){value=-1;}
return value;}
toStringApproximately(){return(this.nearZeroToZero(this.m00)+
" "+
this.nearZeroToZero(this.m01)+
" "+
this.nearZeroToZero(this.m02)+
"\n"+
this.nearZeroToZero(this.m10)+
" "+
this.nearZeroToZero(this.m11)+
" "+
this.nearZeroToZero(this.m12)+
" \n"+
this.nearZeroToZero(this.m20)+
" "+
this.nearZeroToZero(this.m21)+
" "+
this.nearZeroToZero(this.m22)+
"\n");}
getScale(){return new Vector3(Math.sqrt(this.m00*this.m00+this.m01*this.m01+this.m02*this.m02),Math.sqrt(this.m10*this.m10+this.m11*this.m11+this.m12*this.m12),Math.sqrt(this.m20*this.m20+this.m21*this.m21+this.m22*this.m22));}
addScale(vec){this.m00*=vec.x;this.m11*=vec.y;this.m22*=vec.z;return this;}}
GLBoost$1["Matrix33"]=Matrix33;class Matrix44$1{constructor(m,isColumnMajor=false,notCopyFloat32Array=false){if(arguments.length>=16){this.m=new Float32Array(16);if(isColumnMajor===true){let m=arguments;this.setComponents(m[0],m[4],m[8],m[12],m[1],m[5],m[9],m[13],m[2],m[6],m[10],m[14],m[3],m[7],m[11],m[15]);}else{this.setComponents.apply(this,arguments);}}else if(Array.isArray(m)){this.m=new Float32Array(16);if(isColumnMajor===true){this.setComponents(m[0],m[4],m[8],m[12],m[1],m[5],m[9],m[13],m[2],m[6],m[10],m[14],m[3],m[7],m[11],m[15]);}else{this.setComponents.apply(this,m);}}else if(m instanceof Float32Array){if(notCopyFloat32Array){this.m=m;}else{this.m=new Float32Array(16);if(isColumnMajor===true){this.setComponents(m[0],m[4],m[8],m[12],m[1],m[5],m[9],m[13],m[2],m[6],m[10],m[14],m[3],m[7],m[11],m[15]);}else{this.setComponents.apply(this,m);}}}else if(!!m&&typeof m.m33==="undefined"&&typeof m.m22!=="undefined"){if(notCopyFloat32Array){this.m=m.m;}else{this.m=new Float32Array(16);if(isColumnMajor===true){this.setComponents(m.m00,m.m01,m.m02,0,m.m10,m.m11,m.m12,0,m.m20,m.m21,m.m22,0,0,0,0,1);}else{this.setComponents(m.m00,m.m01,m.m02,0,m.m10,m.m11,m.m12,0,m.m20,m.m21,m.m22,0,0,0,0,1);}}}else if(!!m&&typeof m.className!=="undefined"&&m.className==="Quaternion"){this.m=new Float32Array(16);const sx=m.x*m.x;const sy=m.y*m.y;const sz=m.z*m.z;const cx=m.y*m.z;const cy=m.x*m.z;const cz=m.x*m.y;const wx=m.w*m.x;const wy=m.w*m.y;const wz=m.w*m.z;this.setComponents(1.0-2.0*(sy+sz),2.0*(cz-wz),2.0*(cy+wy),0.0,2.0*(cz+wz),1.0-2.0*(sx+sz),2.0*(cx-wx),0.0,2.0*(cy-wy),2.0*(cx+wx),1.0-2.0*(sx+sy),0.0,0.0,0.0,0.0,1.0);}else{this.m=new Float32Array(16);this.identity();}}
setComponents(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33){this.m[0]=m00;this.m[4]=m01;this.m[8]=m02;this.m[12]=m03;this.m[1]=m10;this.m[5]=m11;this.m[9]=m12;this.m[13]=m13;this.m[2]=m20;this.m[6]=m21;this.m[10]=m22;this.m[14]=m23;this.m[3]=m30;this.m[7]=m31;this.m[11]=m32;this.m[15]=m33;return this;}
copyComponents(mat4){this.setComponents.apply(this,mat4.m);}
get className(){return this.constructor.name;}
clone(){return new Matrix44$1(this.m[0],this.m[4],this.m[8],this.m[12],this.m[1],this.m[5],this.m[9],this.m[13],this.m[2],this.m[6],this.m[10],this.m[14],this.m[3],this.m[7],this.m[11],this.m[15]);}
identity(){this.setComponents(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this;}
static identity(){return new Matrix44$1(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);}
translate(vec){return this.setComponents(1,0,0,vec.x,0,1,0,vec.y,0,0,1,vec.z,0,0,0,1);}
putTranslate(vec){this.m03=vec.x;this.m13=vec.y;this.m23=vec.z;}
getTranslate(){return new Vector3(this.m03,this.m13,this.m23);}
static translate(vec){return new Matrix44$1(1,0,0,vec.x,0,1,0,vec.y,0,0,1,vec.z,0,0,0,1);}
scale(vec){return this.setComponents(vec.x,0,0,0,0,vec.y,0,0,0,0,vec.z,0,0,0,0,1);}
static scale(vec){return new Matrix44$1(vec.x,0,0,0,0,vec.y,0,0,0,0,vec.z,0,0,0,0,1);}
addScale(vec){this.m00*=vec.x;this.m11*=vec.y;this.m22*=vec.z;return this;}
rotateX(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return this.setComponents(1,0,0,0,0,cos,-sin,0,0,sin,cos,0,0,0,0,1);}
static rotateX(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return new Matrix44$1(1,0,0,0,0,cos,-sin,0,0,sin,cos,0,0,0,0,1);}
rotateY(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return this.setComponents(cos,0,sin,0,0,1,0,0,-sin,0,cos,0,0,0,0,1);}
static rotateY(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return new Matrix44$1(cos,0,sin,0,0,1,0,0,-sin,0,cos,0,0,0,0,1);}
rotateZ(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return this.setComponents(cos,-sin,0,0,sin,cos,0,0,0,0,1,0,0,0,0,1);}
static rotateZ(angle){var radian=0;if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){radian=MathUtil.degreeToRadian(angle);}else{radian=angle;}
var cos=Math.cos(radian);var sin=Math.sin(radian);return new Matrix44$1(cos,-sin,0,0,sin,cos,0,0,0,0,1,0,0,0,0,1);}
static rotateXYZ(x,y,z){return new Matrix44$1(Matrix33.rotateZ(z).multiply(Matrix33.rotateY(y).multiply(Matrix33.rotateX(x))));}
toEulerAngles(){let rotate=null;if(Math.abs(this.m20)!=1.0){let y=-Math.asin(this.m20);let x=Math.atan2(this.m21/Math.cos(y),this.m22/Math.cos(y));let z=Math.atan2(this.m10/Math.cos(y),this.m00/Math.cos(y));rotate=new Vector3(x,y,z);}else if(this.m20===-1.0){rotate=new Vector3(Math.atan2(this.m01,this.m02),Math.PI/2.0,0.0);}else{rotate=new Vector3(Math.atan2(-this.m01,-this.m02),-Math.PI/2.0,0.0);}
if(GLBoost$1["VALUE_ANGLE_UNIT"]===GLBoost$1.DEGREE){rotate.x=MathUtil.radianToDegree(rotate.x);rotate.y=MathUtil.radianToDegree(rotate.y);rotate.z=MathUtil.radianToDegree(rotate.z);}
return rotate;}
zero(){this.setComponents(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return this;}
static zero(){return new Matrix44$1(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);}
flatten(){return this.m;}
flattenAsArray(){return[this.m[0],this.m[1],this.m[2],this.m[3],this.m[4],this.m[5],this.m[6],this.m[7],this.m[8],this.m[9],this.m[10],this.m[11],this.m[12],this.m[13],this.m[14],this.m[15]];}
_swap(l,r){this.m[r]=[this.m[l],(this.m[l]=this.m[r])][0];}
transpose(){this._swap(1,4);this._swap(2,8);this._swap(3,12);this._swap(6,9);this._swap(7,13);this._swap(11,14);return this;}
static transpose(mat){var mat_t=new Matrix44$1(mat.m00,mat.m10,mat.m20,mat.m30,mat.m01,mat.m11,mat.m21,mat.m31,mat.m02,mat.m12,mat.m22,mat.m32,mat.m03,mat.m13,mat.m23,mat.m33);return mat_t;}
multiplyVector(vec){var x=this.m00*vec.x+this.m01*vec.y+this.m02*vec.z+this.m03*vec.w;var y=this.m10*vec.x+this.m11*vec.y+this.m12*vec.z+this.m13*vec.w;var z=this.m20*vec.x+this.m21*vec.y+this.m22*vec.z+this.m23*vec.w;var w=this.m30*vec.x+this.m31*vec.y+this.m32*vec.z+this.m33*vec.w;return new Vector4$1(x,y,z,w);}
multiply(mat){var m00=this.m00*mat.m00+
this.m01*mat.m10+
this.m02*mat.m20+
this.m03*mat.m30;var m01=this.m00*mat.m01+
this.m01*mat.m11+
this.m02*mat.m21+
this.m03*mat.m31;var m02=this.m00*mat.m02+
this.m01*mat.m12+
this.m02*mat.m22+
this.m03*mat.m32;var m03=this.m00*mat.m03+
this.m01*mat.m13+
this.m02*mat.m23+
this.m03*mat.m33;var m10=this.m10*mat.m00+
this.m11*mat.m10+
this.m12*mat.m20+
this.m13*mat.m30;var m11=this.m10*mat.m01+
this.m11*mat.m11+
this.m12*mat.m21+
this.m13*mat.m31;var m12=this.m10*mat.m02+
this.m11*mat.m12+
this.m12*mat.m22+
this.m13*mat.m32;var m13=this.m10*mat.m03+
this.m11*mat.m13+
this.m12*mat.m23+
this.m13*mat.m33;var m20=this.m20*mat.m00+
this.m21*mat.m10+
this.m22*mat.m20+
this.m23*mat.m30;var m21=this.m20*mat.m01+
this.m21*mat.m11+
this.m22*mat.m21+
this.m23*mat.m31;var m22=this.m20*mat.m02+
this.m21*mat.m12+
this.m22*mat.m22+
this.m23*mat.m32;var m23=this.m20*mat.m03+
this.m21*mat.m13+
this.m22*mat.m23+
this.m23*mat.m33;var m30=this.m30*mat.m00+
this.m31*mat.m10+
this.m32*mat.m20+
this.m33*mat.m30;var m31=this.m30*mat.m01+
this.m31*mat.m11+
this.m32*mat.m21+
this.m33*mat.m31;var m32=this.m30*mat.m02+
this.m31*mat.m12+
this.m32*mat.m22+
this.m33*mat.m32;var m33=this.m30*mat.m03+
this.m31*mat.m13+
this.m32*mat.m23+
this.m33*mat.m33;return this.setComponents(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33);}
multiplyByLeft(mat){var m00=mat.m00*this.m00+
mat.m01*this.m10+
mat.m02*this.m20+
mat.m03*this.m30;var m01=mat.m00*this.m01+
mat.m01*this.m11+
mat.m02*this.m21+
mat.m03*this.m31;var m02=mat.m00*this.m02+
mat.m01*this.m12+
mat.m02*this.m22+
mat.m03*this.m32;var m03=mat.m00*this.m03+
mat.m01*this.m13+
mat.m02*this.m23+
mat.m03*this.m33;var m10=mat.m10*this.m00+
mat.m11*this.m10+
mat.m12*this.m20+
mat.m13*this.m30;var m11=mat.m10*this.m01+
mat.m11*this.m11+
mat.m12*this.m21+
mat.m13*this.m31;var m12=mat.m10*this.m02+
mat.m11*this.m12+
mat.m12*this.m22+
mat.m13*this.m32;var m13=mat.m10*this.m03+
mat.m11*this.m13+
mat.m12*this.m23+
mat.m13*this.m33;var m20=mat.m20*this.m00+
mat.m21*this.m10+
mat.m22*this.m20+
mat.m23*this.m30;var m21=mat.m20*this.m01+
mat.m21*this.m11+
mat.m22*this.m21+
mat.m23*this.m31;var m22=mat.m20*this.m02+
mat.m21*this.m12+
mat.m22*this.m22+
mat.m23*this.m32;var m23=mat.m20*this.m03+
mat.m21*this.m13+
mat.m22*this.m23+
mat.m23*this.m33;var m30=mat.m30*this.m00+
mat.m31*this.m10+
mat.m32*this.m20+
mat.m33*this.m30;var m31=mat.m30*this.m01+
mat.m31*this.m11+
mat.m32*this.m21+
mat.m33*this.m31;var m32=mat.m30*this.m02+
mat.m31*this.m12+
mat.m32*this.m22+
mat.m33*this.m32;var m33=mat.m30*this.m03+
mat.m31*this.m13+
mat.m32*this.m23+
mat.m33*this.m33;return this.setComponents(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33);}
static multiply(l_m,r_m){var m00=l_m.m00*r_m.m00+
l_m.m01*r_m.m10+
l_m.m02*r_m.m20+
l_m.m03*r_m.m30;var m10=l_m.m10*r_m.m00+
l_m.m11*r_m.m10+
l_m.m12*r_m.m20+
l_m.m13*r_m.m30;var m20=l_m.m20*r_m.m00+
l_m.m21*r_m.m10+
l_m.m22*r_m.m20+
l_m.m23*r_m.m30;var m30=l_m.m30*r_m.m00+
l_m.m31*r_m.m10+
l_m.m32*r_m.m20+
l_m.m33*r_m.m30;var m01=l_m.m00*r_m.m01+
l_m.m01*r_m.m11+
l_m.m02*r_m.m21+
l_m.m03*r_m.m31;var m11=l_m.m10*r_m.m01+
l_m.m11*r_m.m11+
l_m.m12*r_m.m21+
l_m.m13*r_m.m31;var m21=l_m.m20*r_m.m01+
l_m.m21*r_m.m11+
l_m.m22*r_m.m21+
l_m.m23*r_m.m31;var m31=l_m.m30*r_m.m01+
l_m.m31*r_m.m11+
l_m.m32*r_m.m21+
l_m.m33*r_m.m31;var m02=l_m.m00*r_m.m02+
l_m.m01*r_m.m12+
l_m.m02*r_m.m22+
l_m.m03*r_m.m32;var m12=l_m.m10*r_m.m02+
l_m.m11*r_m.m12+
l_m.m12*r_m.m22+
l_m.m13*r_m.m32;var m22=l_m.m20*r_m.m02+
l_m.m21*r_m.m12+
l_m.m22*r_m.m22+
l_m.m23*r_m.m32;var m32=l_m.m30*r_m.m02+
l_m.m31*r_m.m12+
l_m.m32*r_m.m22+
l_m.m33*r_m.m32;var m03=l_m.m00*r_m.m03+
l_m.m01*r_m.m13+
l_m.m02*r_m.m23+
l_m.m03*r_m.m33;var m13=l_m.m10*r_m.m03+
l_m.m11*r_m.m13+
l_m.m12*r_m.m23+
l_m.m13*r_m.m33;var m23=l_m.m20*r_m.m03+
l_m.m21*r_m.m13+
l_m.m22*r_m.m23+
l_m.m23*r_m.m33;var m33=l_m.m30*r_m.m03+
l_m.m31*r_m.m13+
l_m.m32*r_m.m23+
l_m.m33*r_m.m33;return new Matrix44$1(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33);}
determinant(){return(this.m00*this.m11*this.m22*this.m33+
this.m00*this.m12*this.m23*this.m31+
this.m00*this.m13*this.m21*this.m32+
this.m01*this.m10*this.m23*this.m32+
this.m01*this.m12*this.m20*this.m33+
this.m01*this.m13*this.m22*this.m30+
this.m02*this.m10*this.m21*this.m33+
this.m02*this.m11*this.m23*this.m30+
this.m02*this.m13*this.m20*this.m31+
this.m03*this.m10*this.m22*this.m31+
this.m03*this.m11*this.m20*this.m32+
this.m03*this.m12*this.m21*this.m30-
this.m00*this.m11*this.m23*this.m32-
this.m00*this.m12*this.m21*this.m33-
this.m00*this.m13*this.m22*this.m31-
this.m01*this.m10*this.m22*this.m33-
this.m01*this.m12*this.m23*this.m30-
this.m01*this.m13*this.m20*this.m32-
this.m02*this.m10*this.m23*this.m31-
this.m02*this.m11*this.m20*this.m33-
this.m02*this.m13*this.m21*this.m30-
this.m03*this.m10*this.m21*this.m32-
this.m03*this.m11*this.m22*this.m30-
this.m03*this.m12*this.m20*this.m31);}
static determinant(mat){return(mat.m00*mat.m11*mat.m22*mat.m33+
mat.m00*mat.m12*mat.m23*mat.m31+
mat.m00*mat.m13*mat.m21*mat.m32+
mat.m01*mat.m10*mat.m23*mat.m32+
mat.m01*mat.m12*mat.m20*mat.m33+
mat.m01*mat.m13*mat.m22*mat.m30+
mat.m02*mat.m10*mat.m21*mat.m33+
mat.m02*mat.m11*mat.m23*mat.m30+
mat.m02*mat.m13*mat.m20*mat.m31+
mat.m03*mat.m10*mat.m22*mat.m31+
mat.m03*mat.m11*mat.m20*mat.m32+
mat.m03*mat.m12*mat.m21*mat.m30-
mat.m00*mat.m11*mat.m23*mat.m32-
mat.m00*mat.m12*mat.m21*mat.m33-
mat.m00*mat.m13*mat.m22*mat.m31-
mat.m01*mat.m10*mat.m22*mat.m33-
mat.m01*mat.m12*mat.m23*mat.m30-
mat.m01*mat.m13*mat.m20*mat.m32-
mat.m02*mat.m10*mat.m23*mat.m31-
mat.m02*mat.m11*mat.m20*mat.m33-
mat.m02*mat.m13*mat.m21*mat.m30-
mat.m03*mat.m10*mat.m21*mat.m32-
mat.m03*mat.m11*mat.m22*mat.m30-
mat.m03*mat.m12*mat.m20*mat.m31);}
invert(){var det=this.determinant();var m00=(this.m11*this.m22*this.m33+
this.m12*this.m23*this.m31+
this.m13*this.m21*this.m32-
this.m11*this.m23*this.m32-
this.m12*this.m21*this.m33-
this.m13*this.m22*this.m31)/det;var m01=(this.m01*this.m23*this.m32+
this.m02*this.m21*this.m33+
this.m03*this.m22*this.m31-
this.m01*this.m22*this.m33-
this.m02*this.m23*this.m31-
this.m03*this.m21*this.m32)/det;var m02=(this.m01*this.m12*this.m33+
this.m02*this.m13*this.m31+
this.m03*this.m11*this.m32-
this.m01*this.m13*this.m32-
this.m02*this.m11*this.m33-
this.m03*this.m12*this.m31)/det;var m03=(this.m01*this.m13*this.m22+
this.m02*this.m11*this.m23+
this.m03*this.m12*this.m21-
this.m01*this.m12*this.m23-
this.m02*this.m13*this.m21-
this.m03*this.m11*this.m22)/det;var m10=(this.m10*this.m23*this.m32+
this.m12*this.m20*this.m33+
this.m13*this.m22*this.m30-
this.m10*this.m22*this.m33-
this.m12*this.m23*this.m30-
this.m13*this.m20*this.m32)/det;var m11=(this.m00*this.m22*this.m33+
this.m02*this.m23*this.m30+
this.m03*this.m20*this.m32-
this.m00*this.m23*this.m32-
this.m02*this.m20*this.m33-
this.m03*this.m22*this.m30)/det;var m12=(this.m00*this.m13*this.m32+
this.m02*this.m10*this.m33+
this.m03*this.m12*this.m30-
this.m00*this.m12*this.m33-
this.m02*this.m13*this.m30-
this.m03*this.m10*this.m32)/det;var m13=(this.m00*this.m12*this.m23+
this.m02*this.m13*this.m20+
this.m03*this.m10*this.m22-
this.m00*this.m13*this.m22-
this.m02*this.m10*this.m23-
this.m03*this.m12*this.m20)/det;var m20=(this.m10*this.m21*this.m33+
this.m11*this.m23*this.m30+
this.m13*this.m20*this.m31-
this.m10*this.m23*this.m31-
this.m11*this.m20*this.m33-
this.m13*this.m21*this.m30)/det;var m21=(this.m00*this.m23*this.m31+
this.m01*this.m20*this.m33+
this.m03*this.m21*this.m30-
this.m00*this.m21*this.m33-
this.m01*this.m23*this.m30-
this.m03*this.m20*this.m31)/det;var m22=(this.m00*this.m11*this.m33+
this.m01*this.m13*this.m30+
this.m03*this.m10*this.m31-
this.m00*this.m13*this.m31-
this.m01*this.m10*this.m33-
this.m03*this.m11*this.m30)/det;var m23=(this.m00*this.m13*this.m21+
this.m01*this.m10*this.m23+
this.m03*this.m11*this.m20-
this.m00*this.m11*this.m23-
this.m01*this.m13*this.m20-
this.m03*this.m10*this.m21)/det;var m30=(this.m10*this.m22*this.m31+
this.m11*this.m20*this.m32+
this.m12*this.m21*this.m30-
this.m10*this.m21*this.m32-
this.m11*this.m22*this.m30-
this.m12*this.m20*this.m31)/det;var m31=(this.m00*this.m21*this.m32+
this.m01*this.m22*this.m30+
this.m02*this.m20*this.m31-
this.m00*this.m22*this.m31-
this.m01*this.m20*this.m32-
this.m02*this.m21*this.m30)/det;var m32=(this.m00*this.m12*this.m31+
this.m01*this.m10*this.m32+
this.m02*this.m11*this.m30-
this.m00*this.m11*this.m32-
this.m01*this.m12*this.m30-
this.m02*this.m10*this.m31)/det;var m33=(this.m00*this.m11*this.m22+
this.m01*this.m12*this.m20+
this.m02*this.m10*this.m21-
this.m00*this.m12*this.m21-
this.m01*this.m10*this.m22-
this.m02*this.m11*this.m20)/det;return this.setComponents(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33);}
static invert(mat){var det=mat.determinant();var m00=(mat.m11*mat.m22*mat.m33+
mat.m12*mat.m23*mat.m31+
mat.m13*mat.m21*mat.m32-
mat.m11*mat.m23*mat.m32-
mat.m12*mat.m21*mat.m33-
mat.m13*mat.m22*mat.m31)/det;var m01=(mat.m01*mat.m23*mat.m32+
mat.m02*mat.m21*mat.m33+
mat.m03*mat.m22*mat.m31-
mat.m01*mat.m22*mat.m33-
mat.m02*mat.m23*mat.m31-
mat.m03*mat.m21*mat.m32)/det;var m02=(mat.m01*mat.m12*mat.m33+
mat.m02*mat.m13*mat.m31+
mat.m03*mat.m11*mat.m32-
mat.m01*mat.m13*mat.m32-
mat.m02*mat.m11*mat.m33-
mat.m03*mat.m12*mat.m31)/det;var m03=(mat.m01*mat.m13*mat.m22+
mat.m02*mat.m11*mat.m23+
mat.m03*mat.m12*mat.m21-
mat.m01*mat.m12*mat.m23-
mat.m02*mat.m13*mat.m21-
mat.m03*mat.m11*mat.m22)/det;var m10=(mat.m10*mat.m23*mat.m32+
mat.m12*mat.m20*mat.m33+
mat.m13*mat.m22*mat.m30-
mat.m10*mat.m22*mat.m33-
mat.m12*mat.m23*mat.m30-
mat.m13*mat.m20*mat.m32)/det;var m11=(mat.m00*mat.m22*mat.m33+
mat.m02*mat.m23*mat.m30+
mat.m03*mat.m20*mat.m32-
mat.m00*mat.m23*mat.m32-
mat.m02*mat.m20*mat.m33-
mat.m03*mat.m22*mat.m30)/det;var m12=(mat.m00*mat.m13*mat.m32+
mat.m02*mat.m10*mat.m33+
mat.m03*mat.m12*mat.m30-
mat.m00*mat.m12*mat.m33-
mat.m02*mat.m13*mat.m30-
mat.m03*mat.m10*mat.m32)/det;var m13=(mat.m00*mat.m12*mat.m23+
mat.m02*mat.m13*mat.m20+
mat.m03*mat.m10*mat.m22-
mat.m00*mat.m13*mat.m22-
mat.m02*mat.m10*mat.m23-
mat.m03*mat.m12*mat.m20)/det;var m20=(mat.m10*mat.m21*mat.m33+
mat.m11*mat.m23*mat.m30+
mat.m13*mat.m20*mat.m31-
mat.m10*mat.m23*mat.m31-
mat.m11*mat.m20*mat.m33-
mat.m13*mat.m21*mat.m30)/det;var m21=(mat.m00*mat.m23*mat.m31+
mat.m01*mat.m20*mat.m33+
mat.m03*mat.m21*mat.m30-
mat.m00*mat.m21*mat.m33-
mat.m01*mat.m23*mat.m30-
mat.m03*mat.m20*mat.m31)/det;var m22=(mat.m00*mat.m11*mat.m33+
mat.m01*mat.m13*mat.m30+
mat.m03*mat.m10*mat.m31-
mat.m00*mat.m13*mat.m31-
mat.m01*mat.m10*mat.m33-
mat.m03*mat.m11*mat.m30)/det;var m23=(mat.m00*mat.m13*mat.m21+
mat.m01*mat.m10*mat.m23+
mat.m03*mat.m11*mat.m20-
mat.m00*mat.m11*mat.m23-
mat.m01*mat.m13*mat.m20-
mat.m03*mat.m10*mat.m21)/det;var m30=(mat.m10*mat.m22*mat.m31+
mat.m11*mat.m20*mat.m32+
mat.m12*mat.m21*mat.m30-
mat.m10*mat.m21*mat.m32-
mat.m11*mat.m22*mat.m30-
mat.m12*mat.m20*mat.m31)/det;var m31=(mat.m00*mat.m21*mat.m32+
mat.m01*mat.m22*mat.m30+
mat.m02*mat.m20*mat.m31-
mat.m00*mat.m22*mat.m31-
mat.m01*mat.m20*mat.m32-
mat.m02*mat.m21*mat.m30)/det;var m32=(mat.m00*mat.m12*mat.m31+
mat.m01*mat.m10*mat.m32+
mat.m02*mat.m11*mat.m30-
mat.m00*mat.m11*mat.m32-
mat.m01*mat.m12*mat.m30-
mat.m02*mat.m10*mat.m31)/det;var m33=(mat.m00*mat.m11*mat.m22+
mat.m01*mat.m12*mat.m20+
mat.m02*mat.m10*mat.m21-
mat.m00*mat.m12*mat.m21-
mat.m01*mat.m10*mat.m22-
mat.m02*mat.m11*mat.m20)/det;return new Matrix44$1(m00,m01,m02,m03,m10,m11,m12,m13,m20,m21,m22,m23,m30,m31,m32,m33);}
set m00(val){this.m[0]=val;}
get m00(){return this.m[0];}
set m10(val){this.m[1]=val;}
get m10(){return this.m[1];}
set m20(val){this.m[2]=val;}
get m20(){return this.m[2];}
set m30(val){this.m[3]=val;}
get m30(){return this.m[3];}
set m01(val){this.m[4]=val;}
get m01(){return this.m[4];}
set m11(val){this.m[5]=val;}
get m11(){return this.m[5];}
set m21(val){this.m[6]=val;}
get m21(){return this.m[6];}
set m31(val){this.m[7]=val;}
get m31(){return this.m[7];}
set m02(val){this.m[8]=val;}
get m02(){return this.m[8];}
set m12(val){this.m[9]=val;}
get m12(){return this.m[9];}
set m22(val){this.m[10]=val;}
get m22(){return this.m[10];}
set m32(val){this.m[11]=val;}
get m32(){return this.m[11];}
set m03(val){this.m[12]=val;}
get m03(){return this.m[12];}
set m13(val){this.m[13]=val;}
get m13(){return this.m[13];}
set m23(val){this.m[14]=val;}
get m23(){return this.m[14];}
set m33(val){this.m[15]=val;}
get m33(){return this.m[15];}
toString(){return(this.m00+
" "+
this.m01+
" "+
this.m02+
" "+
this.m03+
" \n"+
this.m10+
" "+
this.m11+
" "+
this.m12+
" "+
this.m13+
" \n"+
this.m20+
" "+
this.m21+
" "+
this.m22+
" "+
this.m23+
" \n"+
this.m30+
" "+
this.m31+
" "+
this.m32+
" "+
this.m33+
" \n");}
nearZeroToZero(value){if(Math.abs(value)<0.00001){value=0;}else if(0.99999<value&&value<1.00001){value=1;}else if(-1.00001<value&&value<-0.99999){value=-1;}
return value;}
toStringApproximately(){return(this.nearZeroToZero(this.m00)+
" "+
this.nearZeroToZero(this.m01)+
" "+
this.nearZeroToZero(this.m02)+
" "+
this.nearZeroToZero(this.m03)+
" \n"+
this.nearZeroToZero(this.m10)+
" "+
this.nearZeroToZero(this.m11)+
" "+
this.nearZeroToZero(this.m12)+
" "+
this.nearZeroToZero(this.m13)+
" \n"+
this.nearZeroToZero(this.m20)+
" "+
this.nearZeroToZero(this.m21)+
" "+
this.nearZeroToZero(this.m22)+
" "+
this.nearZeroToZero(this.m23)+
" \n"+
this.nearZeroToZero(this.m30)+
" "+
this.nearZeroToZero(this.m31)+
" "+
this.nearZeroToZero(this.m32)+
" "+
this.nearZeroToZero(this.m33)+
" \n");}
getScale(){return new Vector3(Math.sqrt(this.m00*this.m00+this.m01*this.m01+this.m02*this.m02),Math.sqrt(this.m10*this.m10+this.m11*this.m11+this.m12*this.m12),Math.sqrt(this.m20*this.m20+this.m21*this.m21+this.m22*this.m22));}
getRotate(){const quat=Quaternion.fromMatrix(this);const rotateMat=new Matrix44$1(quat);return rotateMat;}}
GLBoost$1["Matrix44"]=Matrix44$1;class MathClassUtil{constructor(){}
static arrayToVector(element){if(Array.isArray(element)){if(typeof(element[3])!=='undefined'){return new Vector4$1(element[0],element[1],element[2],element[3]);}else if(typeof(element[2])!=='undefined'){return new Vector3(element[0],element[1],element[2]);}else{return new Vector2(element[0],element[1]);}}else{return element;}}
static arrayToVectorOrMatrix(element){if(Array.isArray(element)){if(typeof(element[15])!=='undefined'){return new Matrix44$1(element);}else if(typeof(element[8])!=='undefined'){return new Matrix33(element);}else if(typeof(element[3])!=='undefined'){return new Vector4$1(element[0],element[1],element[2],element[3]);}else if(typeof(element[2])!=='undefined'){return new Vector3(element[0],element[1],element[2]);}else{return new Vector2(element[0],element[1]);}}else{return element;}}
static cloneOfMathObjects(element){if(element instanceof Matrix44$1){return element.clone();}else if(element instanceof Matrix33){return element.clone();}else if(element instanceof Vector4$1){return element.clone();}else if(element instanceof Vector3){return element.clone();}else if(element instanceof Vector2){return element.clone();}else{return element;}}
static arrayToQuaternion(element){if(Array.isArray(element)){if(typeof(element[3])!=='undefined'){return new Quaternion(element[0],element[1],element[2],element[3]);}}else{return element;}}
static makeSubArray(array,componentN){if(componentN===4){return[array[0],array[1],array[2],array[3]];}else if(componentN===3){return[array[0],array[1],array[2]];}else if(componentN===2){return[array[0],array[1]];}else{return array[0];}}
static vectorToArray(element){if(element instanceof Vector2){return[element.x,element.y];}else if(element instanceof Vector3){return[element.x,element.y,element.z];}else if(element instanceof Vector4$1||element instanceof Quaternion){return[element.x,element.y,element.z,element.w];}else{return element;}}
static compomentNumberOfVector(element){if(element instanceof Vector2){return 2;}else if(element instanceof Vector3){return 3;}else if(element instanceof Vector4$1||element instanceof Quaternion){return 4;}else if(Array.isArray(element)){return element.length;}else{return 0;}}
static packNormalizedVec4ToVec2(x,y,z,w,criteria){let v0=0.0;let v1=0.0;x=(x+1)/2.0;y=(y+1)/2.0;z=(z+1)/2.0;w=(w+1)/2.0;let ir=Math.floor(x*(criteria-1.0));let ig=Math.floor(y*(criteria-1.0));let irg=ir*criteria+ig;v0=irg/criteria;let ib=Math.floor(z*(criteria-1.0));let ia=Math.floor(w*(criteria-1.0));let iba=ib*criteria+ia;v1=iba/criteria;return[v0,v1];}
static unProject(windowPosVec3,inversePVMat44,viewportVec4,zNear,zFar){const input=new Vector4$1((windowPosVec3.x-viewportVec4.x)/viewportVec4.z*2-1.0,(windowPosVec3.y-viewportVec4.y)/viewportVec4.w*2-1.0,2*windowPosVec3.z-1.0,1.0);const PVMat44=inversePVMat44;const out=PVMat44.multiplyVector(input);if(out.w===0){console.warn("Zero division!");}
const output=new Vector3(out.multiply(1/out.w));return output;}}
GLBoost$1["MathClassUtil"]=MathClassUtil;class AnimationUtil{constructor(){}
static lerp(start,end,ratio,componentN){if(componentN===1){return start*(1-ratio)+end*ratio;}else{if(start instanceof Quaternion){return Quaternion.qlerp(start,end,ratio);}else{return start.multiply((1-ratio)).add(end.multiply(ratio));}}}
static interpolate(inputArray,outputArray,input,componentN,method=GLBoost$1.INTERPOLATION_LINEAR){if(input<inputArray[0]){return outputArray[0].clone();}
if(inputArray[inputArray.length-1]<=input){return outputArray[outputArray.length-1].clone();}
if(method===GLBoost$1.INTERPOLATION_LINEAR){for(let i=0;i<inputArray.length;i++){if(typeof inputArray[i+1]==="undefined"){break;}
if(inputArray[i]<=input&&input<inputArray[i+1]){let ratio=(input-inputArray[i])/(inputArray[i+1]-inputArray[i]);let resultValue=this.lerp(outputArray[i].clone(),outputArray[i+1].clone(),ratio,componentN);return resultValue;}}}else if(method===GLBoost$1.INTERPOLATION_STEP){for(let i=0;i<inputArray.length;i++){if(typeof inputArray[i+1]==="undefined"){break;}
if(inputArray[i]<=input&&input<inputArray[i+1]){return outputArray[i].clone();}}}
return outputArray[0].clone();}}
class L_Element extends GLBoostObject{constructor(glBoostSystem,toRegister=true){super(glBoostSystem,toRegister);this._translate=Vector3.zero();this._scale=new Vector3(1,1,1);this._rotate=Vector3.zero();this._quaternion=new Quaternion(0,0,0,1);this._matrix=Matrix44$1.identity();this._invMatrix=Matrix44$1.identity();this._updateCountAsElement=0;this._animationLine={};this._currentAnimationInputValues={};this._activeAnimationLineName="time";this._is_trs_matrix_updated=true;this._is_translate_updated=true;this._is_scale_updated=true;this._is_quaternion_updated=true;this._is_euler_angles_updated=true;this._is_inverse_trs_matrix_updated=true;}
get updateCountAsElement(){return this._updateCountAsElement;}
_needUpdate(){this._updateCountAsElement++;}
_getAnimatedTransformValue(value,animation,type){if(typeof animation!=='undefined'&&animation[type]&&value!==null&&value!==void 0){return AnimationUtil.interpolate(animation[type].input,animation[type].output,value,animation[type].outputComponentN,animation[type].interpolationMethod);}else{return null;}}
_getCurrentAnimationInputValue(inputName){let value=this._currentAnimationInputValues[inputName];if(typeof(value)==='number'){return value;}else{return null;}}
setAnimationAtLine(lineName,attributeName,inputArray,outputArray,interpolationMethod){var outputComponentN=0;if(outputArray[0]instanceof Vector2){outputComponentN=2;}else if(outputArray[0]instanceof Vector3){outputComponentN=3;}else if(outputArray[0]instanceof Vector4$1){outputComponentN=4;}else if(outputArray[0]instanceof Quaternion){outputComponentN=4;}else{outputComponentN=1;}
if(!this._animationLine[lineName]){this._animationLine[lineName]={};}
this._animationLine[lineName][attributeName]={input:inputArray,output:outputArray,outputAttribute:attributeName,outputComponentN:outputComponentN,interpolationMethod:interpolationMethod};}
hasAnimation(lineName){if(this._animationLine[lineName]){return true;}else{return false;}}
getStartInputValueOfAnimation(lineName){let inputLine=this._animationLine[lineName];let latestInputValue=Number.MAX_VALUE;if(typeof inputLine==='undefined'){return latestInputValue;}
for(let attributeName in inputLine){let inputValueArray=inputLine[attributeName].input;let inputLatestValueAtThisAttribute=inputValueArray[0];if(inputLatestValueAtThisAttribute<latestInputValue){latestInputValue=inputLatestValueAtThisAttribute;}}
return latestInputValue;}
getEndInputValueOfAnimation(lineName){let inputLine=this._animationLine[lineName];let latestInputValue=-Number.MAX_VALUE;if(typeof inputLine==='undefined'){return latestInputValue;}
for(let attributeName in inputLine){let inputValueArray=inputLine[attributeName].input;let inputLatestValueAtThisAttribute=inputValueArray[inputValueArray.length-1];if(inputLatestValueAtThisAttribute>latestInputValue){latestInputValue=inputLatestValueAtThisAttribute;}}
return latestInputValue;}
setCurrentAnimationValue(inputName,inputValue){if((this)._setDirtyToAnimatedElement!=null){(this)._setDirtyToAnimatedElement(inputName);}
this._currentAnimationInputValues[inputName]=inputValue;}
removeCurrentAnimationValue(inputName){delete this._currentAnimationInputValues[inputName];}
setActiveAnimationLine(lineName){this._activeAnimationLineName=lineName;}
set translate(vec){this._translate=vec.clone();this._is_translate_updated=true;this._is_trs_matrix_updated=false;this._is_inverse_trs_matrix_updated=false;this.__updateTransform();}
getTranslateNotAnimated(){if(this._is_translate_updated){return this._translate.clone();}else if(this._is_trs_matrix_updated){this._translate.x=this._matrix.m03;this._translate.y=this._matrix.m13;this._translate.z=this._matrix.m23;this._is_translate_updated=true;}
return this._translate.clone();}
get translate(){return this.getTranslateAtOrStatic(this._activeAnimationLineName,this._getCurrentAnimationInputValue(this._activeAnimationLineName));}
getTranslateAt(lineName,inputValue){let value=this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'translate');if(value!==null){this._translate=value;this._is_translate_updated=true;}
return value;}
getTranslateAtOrStatic(lineName,inputValue){let value=this.getTranslateAt(lineName,inputValue);if(value===null){return this.getTranslateNotAnimated();}
return value;}
set rotate(vec){this._rotate=vec.clone();this._is_euler_angles_updated=true;this._is_quaternion_updated=false;this._is_trs_matrix_updated=false;this._is_inverse_trs_matrix_updated=false;this.__updateTransform();}
get rotate(){return this.getRotateAtOrStatic(this._activeAnimationLineName,this._getCurrentAnimationInputValue(this._activeAnimationLineName));}
getRotateAt(lineName,inputValue){let value=this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'rotate');if(value!==null){this._rotate=value;this._is_euler_angles_updated=true;}
return value;}
getRotateAtOrStatic(lineName,inputValue){let value=null;if(lineName!=null&&inputValue!=null){value=this.getRotateAt(lineName,inputValue);}
if(value===null){return this.getRotateNotAnimated();}
return value;}
getRotateNotAnimated(){if(this._is_euler_angles_updated){return this._rotate.clone();}else if(this._is_trs_matrix_updated){this._rotate=this._matrix.toEulerAngles();}else if(this._is_quaternion_updated){this._rotate=(new Matrix44$1(this._quaternion)).toEulerAngles();}
this._is_euler_angles_updated=true;return this._rotate.clone();}
set scale(vec){this._scale=vec.clone();this._is_scale_updated=true;this._is_trs_matrix_updated=false;this._is_inverse_trs_matrix_updated=false;this.__updateTransform();}
get scale(){return this.getScaleAtOrStatic(this._activeAnimationLineName,this._getCurrentAnimationInputValue(this._activeAnimationLineName));}
getScaleAt(lineName,inputValue){let value=this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'scale');if(value!==null){this._scale=value.clone();this._is_scale_updated=true;}
return value;}
getScaleAtOrStatic(lineName,inputValue){let value=null;if(lineName!=null&&inputValue!=null){value=this.getScaleAt(lineName,inputValue);}
if(value===null){return this.getScaleNotAnimated();}
return value;}
getScaleNotAnimated(){if(this._is_scale_updated){return this._scale.clone();}else if(this._is_trs_matrix_updated){let m=this._matrix;this._scale=m.getScale();this._is_scale_updated=true;}
return this._scale.clone();}
set matrix(mat){this._matrix=mat.clone();this._is_trs_matrix_updated=true;this._is_translate_updated=false;this._is_euler_angles_updated=false;this._is_quaternion_updated=false;this._is_scale_updated=false;this._is_inverse_trs_matrix_updated=false;this.__updateTransform();}
get matrix(){let input=void 0;if(this._activeAnimationLineName!=null){input=this._getCurrentAnimationInputValue(this._activeAnimationLineName);}
let value=this.getMatrixAtOrStatic(this._activeAnimationLineName,input);return value;}
getMatrixAt(lineName,inputValue){let value=this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'matrix');if(value!==null){this._translate=value;this._is_translate_updated=true;}
return value;}
getMatrixNotAnimated(){if(this._is_trs_matrix_updated){return this._matrix.clone();}
const rotationMatrix=new Matrix44$1(this.getQuaternionNotAnimated());let scale=this.getScaleNotAnimated();this._matrix=Matrix44$1.multiply(rotationMatrix,Matrix44$1.scale(scale));let translateVec=this.getTranslateNotAnimated();this._matrix.m03=translateVec.x;this._matrix.m13=translateVec.y;this._matrix.m23=translateVec.z;this._is_trs_matrix_updated=true;return this._matrix.clone();}
get transformMatrix(){let input=void 0;if(this._activeAnimationLineName!==null){input=this._getCurrentAnimationInputValue(this._activeAnimationLineName);}
const matrix=this.getMatrixAtOrStatic(this._activeAnimationLineName,input);return matrix;}
isTrsMatrixNeeded(lineName,inputValue){let result=(this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'translate')===null&&this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'rotate')===null&&this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'quaternion')===null&&this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'scale')===null);return result;}
getMatrixAtOrStatic(lineName,inputValue){let input=inputValue;if(this.isTrsMatrixNeeded(lineName,inputValue)&&this._is_trs_matrix_updated){return this.getMatrixNotAnimated();}else{let quaternion=this.getQuaternionAtOrStatic(lineName,input);const rotationMatrix=new Matrix44$1(quaternion);let scale=this.getScaleAtOrStatic(lineName,input);this._matrix=Matrix44$1.multiply(rotationMatrix,Matrix44$1.scale(scale));let translateVec=this.getTranslateAtOrStatic(lineName,input);this._matrix.m03=translateVec.x;this._matrix.m13=translateVec.y;this._matrix.m23=translateVec.z;this._is_trs_matrix_updated=true;return this._matrix.clone();}}
set quaternion(quat){this._quaternion=quat.clone();this._is_quaternion_updated=true;this._is_euler_angles_updated=false;this._is_trs_matrix_updated=false;this._is_inverse_trs_matrix_updated=false;this.__updateTransform();}
get quaternion(){return this.getQuaternionAtOrStatic(this._activeAnimationLineName,this._getCurrentAnimationInputValue(this._activeAnimationLineName));}
getQuaternionAt(lineName,inputValue){let value=this._getAnimatedTransformValue(inputValue,this._animationLine[lineName],'quaternion');if(value!==null){this._quaternion=value;this._is_quaternion_updated=true;}
return value;}
getQuaternionAtOrStatic(lineName,inputValue){let value=this.getQuaternionAt(lineName,inputValue);if(value===null){return this.getQuaternionNotAnimated();}
return value;}
getQuaternionNotAnimated(){let value=null;if(this._is_quaternion_updated){return this._quaternion.clone();}else if(!this._is_quaternion_updated){if(this._is_trs_matrix_updated){value=Quaternion.fromMatrix(this._matrix);}else if(this._is_euler_angles_updated){value=Quaternion.fromMatrix(Matrix44$1.rotateXYZ(this._rotate.x,this._rotate.y,this._rotate.z));}else{console.log('Not Quaternion Updated in error!');}
this._quaternion=value;this._is_quaternion_updated=true;}
return this._quaternion.clone();}
get inverseTransformMatrix(){if(!this._is_inverse_trs_matrix_updated){this._invMatrix=this.transformMatrix.invert();this._is_inverse_trs_matrix_updated=true;}
return this._invMatrix.clone();}
get normalMatrix(){return new Matrix33(Matrix44$1.invert(this.transformMatrix).transpose());}
__updateTransform(){this.__updateRotation();this.__updateTranslate();this.__updateScale();this.__updateMatrix();this._needUpdate();}
__updateRotation(){if(this._is_euler_angles_updated&&!this._is_quaternion_updated){this._quaternion=Quaternion.fromMatrix(Matrix44$1.rotateXYZ(this._rotate.x,this._rotate.y,this._rotate.z));this._is_quaternion_updated=true;}else if(!this._is_euler_angles_updated&&this._is_quaternion_updated){this._rotate=(new Matrix44$1(this._quaternion)).toEulerAngles();this._is_euler_angles_updated=true;}else if(!this._is_euler_angles_updated&&!this._is_quaternion_updated&&this._is_trs_matrix_updated){const m=this._matrix;this._quaternion=Quaternion.fromMatrix(m);this._is_quaternion_updated=true;this._rotate=m.toEulerAngles();this._is_euler_angles_updated=true;}}
__updateTranslate(){if(!this._is_translate_updated&&this._is_trs_matrix_updated){const m=this._matrix;this._translate.x=m.m03;this._translate.y=m.m13;this._translate.z=m.m23;this._is_translate_updated=true;}}
__updateScale(){if(!this._is_scale_updated&&this._is_trs_matrix_updated){const m=this._matrix;this._scale.x=Math.sqrt(m.m00*m.m00+m.m01*m.m01+m.m02*m.m02);this._scale.y=Math.sqrt(m.m10*m.m10+m.m11*m.m11+m.m12*m.m12);this._scale.z=Math.sqrt(m.m20*m.m20+m.m21*m.m21+m.m22*m.m22);this._is_scale_updated=true;}}
__updateMatrix(){if(!this._is_trs_matrix_updated&&this._is_translate_updated&&this._is_quaternion_updated&&this._is_scale_updated){const rotationMatrix=new Matrix44$1(this.getQuaternionNotAnimated());let scale=this.getScaleNotAnimated();this._matrix=Matrix44$1.multiply(rotationMatrix,Matrix44$1.scale(scale));let translateVec=this.getTranslateNotAnimated();this._matrix.m03=translateVec.x;this._matrix.m13=translateVec.y;this._matrix.m23=translateVec.z;this._is_trs_matrix_updated=true;}}
_copy(instance){super._copy(instance);instance._translate=this._translate.clone();instance._scale=this._scale.clone();instance._rotate=this._rotate.clone();instance._quaternion=this._quaternion.clone();instance._matrix=this._matrix.clone();instance._animationLine={};for(let lineName in this._animationLine){instance._animationLine[lineName]={};for(let attributeName in this._animationLine[lineName]){instance._animationLine[lineName][attributeName]={};instance._animationLine[lineName][attributeName].input=this._animationLine[lineName][attributeName].input.concat();let instanceOutput=[];let thisOutput=this._animationLine[lineName][attributeName].output;for(let i=0;i<thisOutput.length;i++){instanceOutput.push((typeof thisOutput[i]==='number')?thisOutput[i]:thisOutput[i].clone());}
instance._animationLine[lineName][attributeName].output=instanceOutput;instance._animationLine[lineName][attributeName].outputAttribute=this._animationLine[lineName][attributeName].outputAttribute;instance._animationLine[lineName][attributeName].outputComponentN=this._animationLine[lineName][attributeName].outputComponentN;}}
instance._is_trs_matrix_updated=this._is_trs_matrix_updated;instance._is_translate_updated=this._is_translate_updated;instance._is_scale_updated=this._is_scale_updated;instance._is_quaternion_updated=this._is_quaternion_updated;instance._is_euler_angles_updated=this._is_euler_angles_updated;instance._is_inverse_trs_matrix_updated=this._is_inverse_trs_matrix_updated;instance._updateCountAsElement=this._updateCountAsElement;}
setPropertiesFromJson(arg){let json=arg;if(typeof arg==="string"){json=JSON.parse(arg);}
for(let key in json){if(json.hasOwnProperty(key)&&key in this){if(key==="quaternion"){this[key]=MathClassUtil.arrayToQuaternion(json[key]);}else{this[key]=MathClassUtil.arrayToVectorOrMatrix(json[key]);}}}}
setRotationFromNewUpAndFront(UpVec,FrontVec){let yDir=UpVec;let xDir=Vector3.cross(yDir,FrontVec);let zDir=Vector3.cross(xDir,yDir);let rotateMatrix=Matrix44$1.identity();rotateMatrix.m00=xDir.x;rotateMatrix.m10=xDir.y;rotateMatrix.m20=xDir.z;rotateMatrix.m01=yDir.x;rotateMatrix.m11=yDir.y;rotateMatrix.m21=yDir.z;rotateMatrix.m02=zDir.x;rotateMatrix.m12=zDir.y;rotateMatrix.m22=zDir.z;this.rotateMatrix33=rotateMatrix;}
headToDirection(fromVec,toVec){const fromDir=Vector3.normalize(fromVec);const toDir=Vector3.normalize(toVec);const rotationDir=Vector3.cross(fromDir,toDir);const cosTheta=Vector3.dotProduct(fromDir,toDir);let theta=Math.acos(cosTheta);if(GLBoost["VALUE_ANGLE_UNIT"]===GLBoost.DEGREE){theta=MathUtil.radianToDegree(theta);}
this.quaternion=Quaternion.axisAngle(rotationDir,theta);}
set rotateMatrix33(rotateMatrix){this.quaternion=Quaternion.fromMatrix(rotateMatrix);}
get rotateMatrix33(){return new Matrix33(this.quaternion);}}
class M_Element extends L_Element{constructor(glBoostContext){super(glBoostContext);this._parent=null;this._invMatrix=Matrix44$1.identity();this._matrixGetMode='';this._accumulatedAncestryObjectUpdateNumber=-Math.MAX_VALUE;this._accumulatedAncestryObjectUpdateNumberWithoutMySelf=-Math.MAX_VALUE;this._accumulatedAncestryObjectUpdateNumberNormal=-Math.MAX_VALUE;this._accumulatedAncestryObjectUpdateNumberInv=-Math.MAX_VALUE;this._accumulatedAncestryObjectUpdateNumberJoint=-Math.MAX_VALUE;this._transparentByUser=false;this._opacity=1.0;this._isAffectedByWorldMatrix=true;this._isAffectedByWorldMatrixAccumulatedAncestry=true;this._isAffectedByViewMatrix=true;this._isAffectedByProjectionMatrix=true;this._toInheritCurrentAnimationInputValue=true;this._camera=null;this._customFunction=null;this._isVisible=true;this._gizmos=[];this._masterElement=null;this._worldMatrix=new Matrix44$1();}
_accumulateMyAndParentNameWithUpdateInfo(currentElem){if(currentElem._parent===null){return currentElem.elementUpdateNumber;}else{return this._accumulateMyAndParentNameWithUpdateInfo(currentElem._parent)+currentElem.elementUpdateNumber;}}
set toInheritCurrentAnimationInputValue(flg){this._toInheritCurrentAnimationInputValue=flg;}
get toInheritCurrentAnimationInputValue(){return this._toInheritCurrentAnimationInputValue;}
_getCurrentAnimationInputValue(inputName){let value=this._currentAnimationInputValues[inputName];if(typeof(value)==='number'){return value;}else if(this._toInheritCurrentAnimationInputValue&&this._parent){let val=this._parent._getCurrentAnimationInputValue(inputName);if(val===void 0){val=null;}
return val;}else{return null;}}
_setDirtyToAnimatedElement(inputName){if(this.hasAnimation(inputName)){this._needUpdate();}}
get worldMatrixWithoutMySelf(){return this.getWorldMatrixWithoutMySelfAt(void 0);}
getWorldMatrixWithoutMySelfAt(input){let tempNumber=this._accumulateMyAndParentNameWithUpdateInfo(this);if(this._accumulatedWithoutMySelfAncestryObjectUpdateNumber!==tempNumber||this._matrixAccumulatedWithoutMySelfAncestry===void 0){this._matrixAccumulatedWithoutMySelfAncestry=this._multiplyMyAndParentTransformMatrices(false,input);this._accumulatedWithoutMySelfAncestryObjectUpdateNumber=tempNumber;}
return this._matrixAccumulatedWithoutMySelfAncestry.clone();}
get normalMatrix(){var tempNumber=this._accumulateMyAndParentNameWithUpdateInfo(this);if(this._accumulatedAncestryObjectUpdateNumberNormal!==tempNumber||typeof this._normalMatrix==='undefined'){let world_m=this._multiplyMyAndParentTransformMatrices(true,null);this._normalMatrix=new Matrix33(Matrix44$1.invert(world_m).transpose());this._accumulatedAncestryObjectUpdateNumberNormal=tempNumber;}
return this._normalMatrix.clone();}
_multiplyMyAndParentRotateMatrices(currentElem,withMySelf){if(currentElem._parent===null){if(withMySelf){return currentElem.transformMatrixOnlyRotate;}else{return Matrix44$1.identity();}}else{let currentMatrix=Matrix44$1.identity();if(withMySelf){currentMatrix=currentElem.transformMatrixOnlyRotate;}
return Matrix44$1.multiply(this._multiplyMyAndParentRotateMatrices(currentElem._parent,true),currentMatrix);}}
get inverseWorldMatrix(){return this.getInverseWorldMatrix(true,void 0)}
get inverseWorldMatrixWithoutMySelf(){return this.getInverseWorldMatrix(false,void 0);}
getInverseWorldMatrix(withMyself,input){return Matrix44$1.invert(this._multiplyMyAndParentTransformMatrices(withMyself,input));}
_accumulateMyAndParentOpacity(currentElem){if(currentElem._parent===null){return currentElem.opacity;}else{return this._accumulateMyAndParentOpacity(currentElem._parent)*currentElem.opacity;}}
get opacityAccumulatedAncestry(){return this._accumulateMyAndParentOpacity(this);}
set opacity(opacity){this._opacity=opacity;}
get opacity(){return this._opacity;}
get isTransparent(){return this._transparentByUser;}
set isTransparent(flg){this._transparentByUser=flg;}
set dirty(flg){if(flg){this._needUpdate();}}
get parent(){return this._parent;}
get elementUpdateNumber(){return this.classUniqueNumber+this._updateCountAsElement;}
toStringWithUpdateInfo(){return this._instanceName+this._updateCountAsElement;}
set camera(camera){this._camera=camera;}
get camera(){return this._camera;}
set customFunction(func){this._customFunction=func;}
get customFunction(){return this._customFunction;}
prepareToRender(){}
_copy(instance){super._copy(instance);instance._parent=this._parent;instance._invMatrix=this._invMatrix.clone();instance._matrixGetMode=this._matrixGetMode;instance._is_inverse_trs_matrix_updated=this._is_inverse_trs_matrix_updated;instance._accumulatedAncestryObjectUpdateNumber=this._accumulatedAncestryObjectUpdateNumber;instance._accumulatedAncestryObjectUpdateNumberNormal=this._accumulatedAncestryObjectUpdateNumberNormal;instance._accumulatedAncestryObjectUpdateNumberInv=this._accumulatedAncestryObjectUpdateNumberInv;instance._transparentByUser=this._transparentByUser;instance.opacity=this.opacity;instance._activeAnimationLineName=this._activeAnimationLineName;instance._currentAnimationInputValues={};for(let inputName in this._currentAnimationInputValues){instance._currentAnimationInputValues[inputName]=this._currentAnimationInputValues[inputName];}
instance._toInheritCurrentAnimationInputValue=this._toInheritCurrentAnimationInputValue;instance._camera=this._camera;instance._customFunction=this._customFunction;}
set isVisible(flg){this._isVisible=flg;}
get isVisible(){return this._isVisible;}
set isAffectedByWorldMatrix(flg){this._isAffectedByWorldMatrix=flg;}
get isAffectedByWorldMatrix(){return this._isAffectedByWorldMatrix;}
set isAffectedByWorldMatrixAccumulatedAncestry(flg){this._isAffectedByWorldMatrixAccumulatedAncestry=flg;}
get isAffectedByWorldMatrixAccumulatedAncestry(){return this._isAffectedByWorldMatrixAccumulatedAncestry;}
set isAffectedByViewMatrix(flg){this._isAffectedByViewMatrix=flg;}
get isAffectedByViewMatrix(){return this._isAffectedByViewMatrix;}
set isAffectedByProjectionMatrix(flg){this._isAffectedByProjectionMatrix=flg;}
get isAffectedByProjectionMatrix(){return this._isAffectedByProjectionMatrix;}
set gizmoScale(scale){for(let gizmo of this._gizmos){gizmo.scale=new Vector3(scale,scale,scale);}}
get gizmoScale(){if(this._gizmos.length===0){return 1.0;}
return this._gizmos[0].scale.x;}
set isGizmoVisible(flg){for(let gizmo of this._gizmos){gizmo.isVisible=flg;}}
get isGizmoVisible(){return this._gizmos[0].isVisible;}
set masterElement(element){this._masterElement=element;}
get masterElement(){return this._masterElement;}
get worldMatrix(){return this.getWorldMatrixAt(void 0);}
getWorldMatrixAt(input){let tempNumber=this._accumulateMyAndParentNameWithUpdateInfo(this);if(this._accumulatedAncestryObjectUpdateNumber!==tempNumber||this._matrixAccumulatedAncestry===void 0){this._matrixAccumulatedAncestry=this._multiplyMyAndParentTransformMatrices(true,input);this._accumulatedAncestryObjectUpdateNumber=tempNumber;}
return this._matrixAccumulatedAncestry.clone();}
_multiplyMyAndParentTransformMatrices(withMySelf,input){if(input===void 0&&this._activeAnimationLineName!==null){input=this._getCurrentAnimationInputValue(this._activeAnimationLineName);}
let tempNumber=this._accumulateMyAndParentNameWithUpdateInfo(this);if(this.__updateInfoString_multiplyMyAndParentTransformMatrices!==tempNumber||this.__cache_input_multiplyMyAndParentTransformMatrices!==input||this.__cache_returnValue_multiplyMyAndParentTransformMatrices===void 0)
{let currentMatrix=null;if(withMySelf){currentMatrix=this.getMatrixAtOrStatic(this._activeAnimationLineName,input);}else{currentMatrix=Matrix44$1.identity();}
if(this._parent===null){this.__cache_returnValue_multiplyMyAndParentTransformMatrices=currentMatrix;return currentMatrix;}
this.__cache_returnValue_multiplyMyAndParentTransformMatrices=Matrix44$1.multiply(this._parent._multiplyMyAndParentTransformMatrices(true,input),currentMatrix);this.__updateInfoString_multiplyMyAndParentTransformMatrices=tempNumber;this.__cache_input_multiplyMyAndParentTransformMatrices=input;}
return this.__cache_returnValue_multiplyMyAndParentTransformMatrices;}
get gizmos(){return this._gizmos;}
addGizmo(gizmo){this._gizmos.push(gizmo);}
readyForDiscard(){}}
class M_AbstractLight extends M_Element{constructor(glBoostContext){super(glBoostContext);if(this.constructor===M_AbstractLight){throw new TypeError('Cannot construct AbstractLight instances directly.');}
this._gl=this._glContext.gl;this._isCastingShadow=true;this._isLightType='';this._camera=null;}
prepareToRender(){if(this._camera){if(this._camera.customFunction){this._camera.customFunction(this);}}}
set isCastingShadow(flg){this._isCastingShadow=flg;}
get isCastingShadow(){return this._isCastingShadow;}
get lightType(){return this._isLightType;}
isTypeAmbient(){return this._isLightType==='ambient';}
isTypeDirectional(){return this._isLightType==='directional';}
isTypePoint(){return this._isLightType==='point';}
isTypeSpot(){return this._isLightType==='spot';}
set camera(camera){this._camera=camera;}
get camera(){return this._camera;}}
GLBoost$1['M_AbstractLight']=M_AbstractLight;class M_PointLight extends M_AbstractLight{constructor(glBoostContext,intensity){super(glBoostContext);this._intensity=intensity;this._isLightType='point';}
set intensity(vec){this._intensity=vec;}
get intensity(){return this._intensity;}}
class Hash{constructor(){}
static toCRC32(str){var crc=0,x=0,y=0;var table=Hash._crc32table;crc=crc^(-1);for(var i=0,iTop=str.length;i<iTop;++i){y=(crc^str.charCodeAt(i))&0xff;x="0x"+table[y];crc=(crc>>>8)^x;}
return(crc^(-1))>>>0;}}
Hash._crc32table="00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".split(' ');class Shader extends GLBoostObject{constructor(glBoostContext){super(glBoostContext);this._glslProgram=null;this._dirty=true;}
static initMixinMethodArray(){this.prototype._classNamesOfVSDefine=this.prototype._classNamesOfVSDefine?this.prototype._classNamesOfVSDefine:[];this.prototype._classNamesOfVSMethodDefine=this.prototype._classNamesOfVSMethodDefine?this.prototype._classNamesOfVSMethodDefine:[];this.prototype._classNamesOfVSPreProcess=this.prototype._classNamesOfVSPreProcess?this.prototype._classNamesOfVSPreProcess:[];this.prototype._classNamesOfVSTransform=this.prototype._classNamesOfVSTransform?this.prototype._classNamesOfVSTransform:[];this.prototype._classNamesOfFSDefine=this.prototype._classNamesOfFSDefine?this.prototype._classNamesOfFSDefine:[];this.prototype._classNamesOfFSMethodDefine=this.prototype._classNamesOfFSMethodDefine?this.prototype._classNamesOfFSMethodDefine:[];this.prototype._classNamesOfFSShade=this.prototype._classNamesOfFSShade?this.prototype._classNamesOfFSShade:[];this.prototype._classNamesOfFSPostEffect=this.prototype._classNamesOfFSPostEffect?this.prototype._classNamesOfFSPostEffect:[];this.prototype._classNamesOfFSFinalize=this.prototype._classNamesOfFSFinalize?this.prototype._classNamesOfFSFinalize:[];this.prototype._classNamesOfPrepare=this.prototype._classNamesOfPrepare?this.prototype._classNamesOfPrepare:[];}
static mixin(source){this.initMixinMethodArray();if(this.prototype._classNamesOfVSDefine.indexOf(source.name)===-1){this.prototype._classNamesOfVSDefine.push(source.name);}
if(this.prototype._classNamesOfVSMethodDefine.indexOf(source.name)===-1){this.prototype._classNamesOfVSMethodDefine.push(source.name);}
if(this.prototype._classNamesOfVSPreProcess.indexOf(source.name)===-1){this.prototype._classNamesOfVSPreProcess.push(source.name);}
if(this.prototype._classNamesOfVSTransform.indexOf(source.name)===-1){this.prototype._classNamesOfVSTransform.push(source.name);}
if(this.prototype._classNamesOfFSDefine.indexOf(source.name)===-1){this.prototype._classNamesOfFSDefine.push(source.name);}
if(this.prototype._classNamesOfFSMethodDefine.indexOf(source.name)===-1){this.prototype._classNamesOfFSMethodDefine.push(source.name);}
if(this.prototype._classNamesOfFSShade.indexOf(source.name)===-1){this.prototype._classNamesOfFSShade.push(source.name);}
if(this.prototype._classNamesOfFSPostEffect.indexOf(source.name)===-1){this.prototype._classNamesOfFSPostEffect.push(source.name);}
if(this.prototype._classNamesOfFSFinalize.indexOf(source.name)===-1){this.prototype._classNamesOfFSFinalize.push(source.name);}
if(this.prototype._classNamesOfPrepare.indexOf(source.name)===-1){this.prototype._classNamesOfPrepare.push(source.name);}
var target=this.prototype;source=source.prototype;Object.getOwnPropertyNames(source).forEach(function(name){if(name!=='constructor')Object.defineProperty(target,name,Object.getOwnPropertyDescriptor(source,name));});}
static swapMixin(current,newone){let matchIdx=this.prototype._classNamesOfVSDefine.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfVSDefine[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfVSMethodDefine.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfVSMethodDefine[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfVSPreProcess.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfVSPreProcess[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfVSTransform.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfVSTransform[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfFSDefine.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfFSDefine[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfFSMethodDefine.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfFSMethodDefine[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfFSShade.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfFSShade[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfFSPostEffect.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfFSPostEffect[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfFSFinalize.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfFSFinalize[matchIdx]=newone.name;}
matchIdx=this.prototype._classNamesOfPrepare.indexOf(current.name);if(matchIdx!==-1){this.prototype._classNamesOfPrepare[matchIdx]=newone.name;}
var target=this.prototype;newone=newone.prototype;Object.getOwnPropertyNames(newone).forEach(function(name){if(name!=='constructor')Object.defineProperty(target,name,Object.getOwnPropertyDescriptor(newone,name));});}
static removeMixin(source){let matchIdx=this.prototype._classNamesOfVSDefine.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfVSDefine.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfVSMethodDefine.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfVSMethodDefineVSPreProcess.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfVSPreProcess.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfVSPreProcess.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfVSTransform.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfVSTransform.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfFSDefine.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfFSDefine.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfFSMethodDefine.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfFSMethodDefine.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfFSShade.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfFSShade.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfFSPostEffect.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfFSPostEffect.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfFSFinalize.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfFSFinalize.splice(matchIdx,1);}
matchIdx=this.prototype._classNamesOfPrepare.indexOf(source.name);if(matchIdx!==-1){this.prototype._classNamesOfPrepare.splice(matchIdx,1);}}
static isMixin(source){this.initMixinMethodArray();if(this.prototype._classNamesOfVSDefine.indexOf(source.name)===-1){return false;}else{return true;}}
_removeDuplicatedLine(shaderString){var splittedShaderLines=shaderString.split('\n');for(let i=0;i<splittedShaderLines.length;i++){splittedShaderLines[i]+='\n';for(let j=0;j<i;j++){if(splittedShaderLines[j]===splittedShaderLines[i]){splittedShaderLines[j]='//                                                            commented out because of duplicated: '+splittedShaderLines[i];}}}
let processedShaderString='';for(let i=0;i<splittedShaderLines.length;i++){processedShaderString+=splittedShaderLines[i];}
return processedShaderString;}
_addLineNumber(shaderString){let shaderTextLines=shaderString.split(/\r\n|\r|\n/);let shaderTextWithLineNumber='';for(let i=0;i<shaderTextLines.length;i++){let lineIndex=i+1;let splitter=' : ';if(lineIndex<10){splitter='  : ';}else if(lineIndex>=100){splitter=': ';}
shaderTextWithLineNumber+=lineIndex+splitter+shaderTextLines[i]+'\n';}
return shaderTextWithLineNumber;}
_getVertexShaderString(gl,functions,existCamera_f,lights,material,extraData){var f=functions;var shaderText='';var in_=Shader._in_onVert(gl);var out_=Shader._out_onVert(gl);shaderText=Shader._glslVer(gl);shaderText+='precision highp float;\n';shaderText+=`${in_} vec3 aVertex_position;\n`;if(Shader._exist(f,GLBoost$1.NORMAL)){shaderText+=`attribute vec3 aVertex_normal;\n`;if(Shader._exist(f,GLBoost$1.TANGENT)){shaderText+=`attribute vec3 aVertex_tangent;\n`;}}
let vsDefineShaderText='';this._classNamesOfVSDefine.forEach((className)=>{var method=this['VSDefine_'+className];if(method){vsDefineShaderText+='//                                                            VSDefine_'+className+' //\n';vsDefineShaderText+=method.bind(this,in_,out_,f,lights,material,extraData)();}});shaderText+=this._removeDuplicatedLine(vsDefineShaderText);this._classNamesOfVSMethodDefine.forEach((className)=>{var method=this['VSMethodDefine_'+className];if(method){shaderText+='//                                                            VSMethodDefine_'+className+' //\n';shaderText+=method.bind(this,existCamera_f,f,lights,material,extraData)();}});shaderText+='void main(void) {\n';shaderText+='vec4 position_local = vec4(aVertex_position, 1.0);\n';if(Shader._exist(f,GLBoost$1.NORMAL)){shaderText+='vec3 normal_local = aVertex_normal;\n';if(Shader._exist(f,GLBoost$1.TANGENT)){shaderText+='vec3 tangent_local = aVertex_tangent;\n';}}
shaderText+='bool isSkinning = false;\n';this._classNamesOfVSPreProcess.forEach((className)=>{var method=this['VSPreProcess_'+className];if(method){shaderText+='//                                                            VSPreProcess_'+className+' //\n';shaderText+=method.bind(this,existCamera_f,f,lights,material,extraData)();}});this._classNamesOfVSTransform.forEach((className)=>{var method=this['VSTransform_'+className];if(method){shaderText+='//                                                            VSTransform_'+className+' //\n';shaderText+=method.bind(this,existCamera_f,f,lights,material,extraData)();}});shaderText+='}';return shaderText;}
_getFragmentShaderString(gl,functions,lights,material,extraData){var f=functions;var shaderText='';var in_=Shader._in_onFrag(gl);shaderText+=Shader._glslVer(gl);var maxDrawBuffers=this._getMaxDrawBuffers();if(maxDrawBuffers>1){shaderText+=Shader._glsl1DrawBufferExt(gl);}
shaderText+=Shader._glsl1StdDerivativeExt(gl);shaderText+=Shader._glsl1ShaderTextureLodExt(gl);shaderText+='precision highp float;\n';for(let i=0;i<maxDrawBuffers;i++){shaderText+=Shader._set_outColor_onFrag(gl,i);}
let fsDefineShaderText='';this._classNamesOfFSDefine.forEach((className)=>{var method=this['FSDefine_'+className];if(method){fsDefineShaderText+='//                                                            FSDefine_'+className+' //\n';fsDefineShaderText+=method.bind(this,in_,f,lights,material,extraData)();}});shaderText+=this._removeDuplicatedLine(fsDefineShaderText);this._classNamesOfFSMethodDefine.forEach((className)=>{var method=this['FSMethodDefine_'+className];if(method){shaderText+='//                                                            FSMethodDefine_'+className+' //\n';shaderText+=method.bind(this,f,lights,material,extraData)();}});shaderText+='void main(void) {\n';this._classNamesOfFSShade.forEach((className)=>{var method=this['FSShade_'+className];if(method){shaderText+='//                                                            FSShade_'+className+' //\n';shaderText+=method.bind(this,f,gl,lights,material,extraData)();}});this._classNamesOfFSPostEffect.forEach((className)=>{let method=this['FSPostEffect_'+className];if(method){shaderText+='//                                                            FSPostEffect_'+className+' //\n';shaderText+=method.bind(this,f,gl,lights,material,extraData)();}});this._classNamesOfFSFinalize.forEach((className)=>{let method=this['FSFinalize_'+className];if(method){shaderText+='//                                                            FSFinalize_'+className+' //\n';shaderText+=method.bind(this,f,gl,lights,material,extraData)();}});if(maxDrawBuffers>1){for(let i=0;i<maxDrawBuffers;i++){shaderText+=Shader._set_glFragData_inGLVer1(gl,i);}}else{shaderText+=Shader._set_glFragColor_inGLVer1(gl);}
shaderText+='}';return shaderText;}
_prepareAssetsForShaders(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData,canvas){var temp=[];this._glContext.useProgram(shaderProgram);this._classNamesOfPrepare.forEach((className)=>{var method=this['prepare_'+className];if(method){var verAttirbs=method.bind(this,gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData,canvas)();temp=temp.concat(verAttirbs);}});let set=new Set(temp);let vertexAttribsAsResult=[];for(let elem of set){vertexAttribsAsResult.push(elem);}
return vertexAttribsAsResult;}
get dirty(){return this._dirty;}
set dirty(flg){this._dirty=flg;}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){}
setUniformsAsTearDown(gl,glslProgram,scene,material,camera,mesh,lights){}
_getShader(gl,theSource,type){var shader;if(type=='x-shader/x-fragment'){shader=this._glContext.createShader(this,gl.FRAGMENT_SHADER);}else if(type=='x-shader/x-vertex'){shader=this._glContext.createShader(this,gl.VERTEX_SHADER);}else{shader=null;}
gl.shaderSource(shader,theSource);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){console.error('An error occurred compiling the shaders: '+gl.getShaderInfoLog(shader));console.error(gl.getShaderInfoLog(shader));shader=null;}
return shader;}
_initShaders(gl,vertexShaderStr,fragmentShaderStr){let vertexShaderStrWithLineNumber=this._addLineNumber(vertexShaderStr);let fragmentShaderStrWithLineNumber=this._addLineNumber(fragmentShaderStr);MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE,'Vertex Shader:');MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE,vertexShaderStrWithLineNumber);MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE,'Fragment Shader:');MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE,fragmentShaderStrWithLineNumber);var vertexShader=this._getShader(gl,vertexShaderStr,'x-shader/x-vertex');var fragmentShader=this._getShader(gl,fragmentShaderStr,'x-shader/x-fragment');if(vertexShader===null||fragmentShader===null){return null;}
var shaderProgram=this._glContext.createProgram(this);gl.attachShader(shaderProgram,vertexShader);gl.attachShader(shaderProgram,fragmentShader);gl.linkProgram(shaderProgram);this._glContext.deleteShader(this,vertexShader);this._glContext.deleteShader(this,fragmentShader);if(!gl.getProgramParameter(shaderProgram,gl.LINK_STATUS)){console.error('Unable to initialize the shader program: '+gl.getProgramInfoLog(shaderProgram));console.error(gl.getProgramInfoLog(shaderProgram));}
this._glContext.useProgram(shaderProgram);shaderProgram.vertexShaderSource=vertexShaderStrWithLineNumber;shaderProgram.fragmentShaderSource=fragmentShaderStrWithLineNumber;return shaderProgram;}
getShaderProgram(expression,vertexAttribs,existCamera_f,lights_,material,extraData={}){var gl=this._glContext.gl;var canvasId=this._glContext.belongingCanvasId;let programToReturn=null;let lights=null;do{lights=this.getDefaultPointLightIfNotExist(lights_);lights=lights.filter((light)=>{return!light.isTypeAmbient();});var vertexShaderText=this._getVertexShaderString(gl,vertexAttribs,existCamera_f,lights,material,extraData);var fragmentShaderText=this._getFragmentShaderString(gl,vertexAttribs,lights,material,extraData);var baseText=vertexShaderText+'\n###SPLIT###\n'+fragmentShaderText;var hash=Hash.toCRC32(baseText);if(!Shader._shaderHashTable[canvasId]){Shader._shaderHashTable[canvasId]={};}
var hashTable=Shader._shaderHashTable[canvasId];if(hash in hashTable){if(hashTable[hash].code===baseText){programToReturn=hashTable[hash].program;}else{for(let i=0;i<hashTable[hash].collisionN;i++){if(hashTable[hash+'_'+i].code===baseText){programToReturn=hashTable[hash+'_'+i].program;break;}}
hashTable[hash].collisionN++;}}
if(programToReturn===null||!gl.isProgram(programToReturn)){let indexStr=null;if(typeof hashTable[hash]!=='undefined'&&hashTable[hash].collisionN>0){indexStr=hash+'_'+hashTable[hash].collisionN;}else{indexStr=hash;}
MiscUtil.consoleLog(GLBoost$1.LOG_SHADER_CODE,'ShaderInstance: '+material.shaderInstance+'   ShaderHashId: '+indexStr);programToReturn=this._initShaders(gl,vertexShaderText,fragmentShaderText);if(programToReturn!==null){programToReturn.createdAt=performance.now();programToReturn.hashId=indexStr;programToReturn.glslProgramsSelfUsageCount=-1;hashTable[indexStr]={code:baseText,program:programToReturn,collisionN:0};Shader._shaderHashTable[canvasId]=hashTable;}else if(this.className==="SkeletalShader"){GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL++;console.log('GLBoost.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL was changed to : '+GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL);}}}while(programToReturn===null&&this.className==="SkeletalShader"&&GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL<3);this._glslProgram=programToReturn;material._semanticsDic={_glslProgram:programToReturn};material.uniformTextureSamplerDic={};programToReturn._material=material;programToReturn.optimizedVertexAttribs=this._prepareAssetsForShaders(gl,programToReturn,expression,vertexAttribs,existCamera_f,lights,material,extraData);return programToReturn;}
getDefaultPointLightIfNotExist(lights){if(lights.length===0){if(Shader._defaultLight===null){Shader._defaultLight=this._glBoostSystem._glBoostContext.createPointLight(GLBoost$1.VALUE_DEFAULT_POINTLIGHT_INTENSITY);}
return[Shader._defaultLight];}else{return lights;}}
static _exist(functions,glboostConstantForAttributeType){let attribute=GLBoost$1.getValueOfGLBoostConstant(glboostConstantForAttributeType);return functions.indexOf(attribute)>=0;}
_getMaxDrawBuffers(){var gl=this._glContext.gl;var isWebGL2=Shader.isThisGLVersion_2(gl);if(isWebGL2){return gl.getParameter(gl.MAX_DRAW_BUFFERS);}
var glem=GLExtensionsManager.getInstance(this._glContext);if(glem.extDBs){return gl.getParameter(glem.extDBs.MAX_DRAW_BUFFERS_WEBGL);}else{return 1;}}
static isThisGLVersion_2(gl){if(typeof WebGL2RenderingContext==='undefined'){return false;}
return gl instanceof WebGL2RenderingContext;}
static _glslVer(gl){return GLBoost$1.isThisGLVersion_2(gl)?'#version 300 es\n':'';}
static _glsl1DrawBufferExt(gl){return!GLBoost$1.isThisGLVersion_2(gl)?'#extension GL_EXT_draw_buffers : require\n':'';}
static _glsl1StdDerivativeExt(gl){return!GLBoost$1.isThisGLVersion_2(gl)?'#extension GL_OES_standard_derivatives : require\n':'';}
static _glsl1ShaderTextureLodExt(gl){return(!GLBoost$1.isThisGLVersion_2(gl)&&gl.getExtension("EXT_shader_texture_lod"))?'#extension GL_EXT_shader_texture_lod : require\n':'';}
static _in_onVert(gl){return GLBoost$1.isThisGLVersion_2(gl)?'in':'attribute';}
static _out_onVert(gl){return GLBoost$1.isThisGLVersion_2(gl)?'out':'varying';}
static _in_onFrag(gl){return GLBoost$1.isThisGLVersion_2(gl)?'in':'varying';}
static _texture_func(gl){return GLBoost$1.isThisGLVersion_2(gl)?'texture':'texture2D';}
static _textureProj_func(gl){return GLBoost$1.isThisGLVersion_2(gl)?'shadowProj':'texture2DProj';}
static _generateLightStr(i){let shaderText='';shaderText+=`    vec3 lightDirection = lightDirection_world[${i}];\n`;shaderText+=`    if (0.4 < lightSpotInfo[${i}].x) {\n`;shaderText+=`      lightDirection = normalize(lightPosition_world[${i}] - v_position_world.xyz);\n`;shaderText+=`    }\n`;shaderText+=`    float spotEffect = 1.0;\n`;shaderText+=`    if (lightSpotInfo[${i}].x > 0.8) {\n`;shaderText+=`      spotEffect = dot(lightDirection_world[${i}], lightDirection);\n`;shaderText+=`      if (spotEffect > lightSpotInfo[${i}].y) {\n`;shaderText+=`        spotEffect = pow(spotEffect, lightSpotInfo[${i}].z);\n`;shaderText+=`      } else {\n`;shaderText+=`        spotEffect = 0.0;\n`;shaderText+=`      }\n`;shaderText+=`    }\n`;return shaderText;}
static _generateShadowingStr(gl,i,isShadowEnabledAsTexture){let shadowingText='';shadowingText+=`float visibilityForShadow = 0.75;\n`;shadowingText+=`float visibility = 1.0;\n`;shadowingText+=`float visibilitySpecular = 1.0;\n`;shadowingText+=`if (isShadowCasting[${i}] == 1) {// ${i}\n`;shadowingText+=`vec4 shadowCoord_i = shadowCoord[${i}];\n`;shadowingText+=`shadowCoord_i.z -= depthBias;\n`;if(GLBoost$1.isThisGLVersion_2(gl)){if(isShadowEnabledAsTexture){shadowingText+=`visibilitySpecular = textureProj(uDepthTexture[${i}], shadowCoord_i);\n`;shadowingText+=`visibility = visibilitySpecular + visibilityForShadow;\n`;}}else{if(isShadowEnabledAsTexture){shadowingText+=`float depth = texture2DProj(uDepthTexture[${i}], shadowCoord_i).r;\n`;shadowingText+=`if (depth < shadowCoord_i.z) {\n`;shadowingText+=`  visibility = visibilityForShadow;\n`;shadowingText+=`  visibilitySpecular = 0.0;\n`;shadowingText+=`}\n`;}}
shadowingText+=`}\n`;return shadowingText;};static _getNormalStr(gl,material,f){let shaderText='';let normalTexture=material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_NORMAL);if(!normalTexture&&Shader._exist(f,GLBoost$1.NORMAL)){shaderText+='  vec3 normal = normalize(v_normal_world);\n';shaderText+='  vec3 normal_world = normal;\n';}else if(material.isFlatShading||!Shader._exist(f,GLBoost$1.NORMAL)){if(!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL){shaderText+='  vec3 dx = dFdx(v_position_world);\n';shaderText+='  vec3 dy = dFdy(v_position_world);\n';shaderText+='  vec3 normal = normalize(cross(dx, dy));\n';shaderText+='  vec3 normal_world = normal;\n';}}else if(normalTexture&&Shader._exist(f,GLBoost$1.TANGENT)){let textureFunc=Shader._texture_func(gl);shaderText+=`  vec3 normal = ${textureFunc}(uNormalTexture, texcoord).xyz*2.0 - 1.0;\n`;shaderText+=`  vec3 tangent_world = normalize(v_tangent_world);\n`;shaderText+=`  vec3 binormal_world = normalize(v_binormal_world);\n`;shaderText+=`  vec3 normal_world = normalize(v_normal_world);\n`;shaderText+=`  mat3 tbnMat_tangent_to_world = mat3(
        tangent_world.x, tangent_world.y, tangent_world.z,
        binormal_world.x, binormal_world.y, binormal_world.z,
        normal_world.x, normal_world.y, normal_world.z
      );\n`;shaderText+=`  normal = normalize(tbnMat_tangent_to_world * normal);\n`;shaderText+=`  normal_world = normal;\n`;}
return shaderText;}
_multiplyAlphaToColorOfTexel(gl){var gl=this._glContext.gl;let shaderText="";let textureFunc=Shader._texture_func(gl);shaderText+=`vec4 multiplyAlphaToColorOfTexel(sampler2D texture, vec2 texcoord, int toMultiplyAlphaFlag) {\n`;shaderText+=`  vec4 texel = ${textureFunc}(texture, texcoord);\n`;shaderText+=`  if (toMultiplyAlphaFlag == 1) {\n`;shaderText+=`    texel.rgb *= texel.a;\n`;shaderText+=`  }\n`;shaderText+=`  return texel;\n`;shaderText+=`}\n`;return shaderText;}
_sampler2DShadow_func(){var gl=this._glContext.gl;return GLBoost$1.isThisGLVersion_2(gl)?'sampler2DShadow':'sampler2D';}
static _set_outColor_onFrag(gl,i){return GLBoost$1.isThisGLVersion_2(gl)?`layout(location = ${i}) out vec4 rt${i};\n`:`vec4 rt${i};\n`;}
static _set_glFragColor_inGLVer1(gl){return!GLBoost$1.isThisGLVersion_2(gl)?'  gl_FragColor = rt0;\n':'';}
static _set_glFragData_inGLVer1(gl,i){return!GLBoost$1.isThisGLVersion_2(gl)?`  gl_FragData[${i}] = rt${i};\n`:'';}
static trySettingMatrix44ToUniform(gl,hashIdOfGLSLProgram,material,semanticsDir,semantics,matrixArray){if(typeof semanticsDir[semantics]==='undefined'){return;}
if(typeof semanticsDir[semantics]==='string'){gl.uniformMatrix4fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+semanticsDir[semantics]),false,matrixArray);return;}
semanticsDir[semantics].forEach((uniformName)=>{gl.uniformMatrix4fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+uniformName),false,matrixArray);});}
static trySettingMatrix33ToUniform(gl,hashIdOfGLSLProgram,material,semanticsDir,semantics,matrixArray){if(typeof semanticsDir[semantics]==='undefined'){return;}
if(typeof semanticsDir[semantics]==='string'){gl.uniformMatrix3fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+semanticsDir[semantics]),false,matrixArray);return;}
semanticsDir[semantics].forEach((uniformName)=>{gl.uniformMatrix3fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+uniformName),false,matrixArray);});}
static trySettingVec4ArrayToUniform(gl,hashIdOfGLSLProgram,material,semanticsDir,semantics,vecArray){if(typeof semanticsDir[semantics]==='undefined'){return;}
if(typeof semanticsDir[semantics]==='string'){gl.uniform4fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+semanticsDir[semantics]),vecArray);return;}
semanticsDir[semantics].forEach((uniformName)=>{gl.uniform4fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+uniformName),vecArray);});}
static trySettingVec3ArrayToUniform(gl,hashIdOfGLSLProgram,material,semanticsDir,semantics,vecArray){if(typeof semanticsDir[semantics]==='undefined'){return;}
if(typeof semanticsDir[semantics]==='string'){gl.uniform3fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+semanticsDir[semantics]),vecArray);return;}
semanticsDir[semantics].forEach((uniformName)=>{gl.uniform3fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+uniformName),vecArray);});}
static trySettingVec2ArrayToUniform(gl,hashIdOfGLSLProgram,material,semanticsDir,semantics,vecArray){if(typeof semanticsDir[semantics]==='undefined'){return;}
if(typeof semanticsDir[semantics]==='string'){gl.uniform2fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+semanticsDir[semantics]),vecArray);return;}
semanticsDir[semantics].forEach((uniformName)=>{gl.uniform2fv(material.getUniform(hashIdOfGLSLProgram,'uniform_'+uniformName),vecArray);});}
get glslProgram(){return this._glslProgram;}
readyForDiscard(){if(this._glslProgram){this._glContext.deleteProgram(this,this._glslProgram);}
super.readyForDiscard();}
getShaderParameter(material,parameterName,defaultValue){if(typeof this[parameterName]!=='undefined'){return this[parameterName];}else if(typeof material.shaderParameters[parameterName]!=='undefined'){return material.shaderParameters[parameterName];}
return defaultValue;}}
Shader._instances=new Object();Shader._shaderHashTable={};Shader._defaultLight=null;let singleton$3=Symbol();let singletonEnforcer$1=Symbol();class DrawKickerWorld{constructor(enforcer){if(enforcer!==singletonEnforcer$1){throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");}
this._glslProgram=null;}
static getInstance(){if(!this[singleton$3]){this[singleton$3]=new DrawKickerWorld(singletonEnforcer$1);}
return this[singleton$3];}
static setCamera(gl,glslProgram,material,world_m,normal_m,camera,mesh){Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,"WORLD",world_m.flatten());Shader.trySettingMatrix33ToUniform(gl,glslProgram,material,material._semanticsDic,"MODELVIEWINVERSETRANSPOSE",normal_m.flatten());if(camera){let viewMatrix;if(mesh.isAffectedByViewMatrix){let cameraMatrix=camera.lookAtRHMatrix();viewMatrix=cameraMatrix.multiply(camera.inverseWorldMatrixWithoutMySelf);}else{viewMatrix=Matrix44$1.identity();}
let projectionMatrix;if(mesh.isAffectedByProjectionMatrix){projectionMatrix=camera.projectionRHMatrix();}else{projectionMatrix=Matrix44$1.identity();}
Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,"VIEW",viewMatrix.flatten());Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,"PROJECTION",projectionMatrix.flatten());Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,"MODELVIEW",Matrix44$1.multiply(viewMatrix,world_m).flatten());camera._lastPVMatrixFromLight=Matrix44$1.multiply(projectionMatrix,viewMatrix);}}
static setVRCamera(gl,glslProgram,material,world_m,normal_m,webvrFrameData,mesh,leftOrRight){Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,"WORLD",world_m.flatten());Shader.trySettingMatrix33ToUniform(gl,glslProgram,material,material._semanticsDic,"MODELVIEWINVERSETRANSPOSE",normal_m.flatten());if(webvrFrameData){let viewMatrix;if(mesh.isAffectedByViewMatrix){const invertSittingToStandingTransform=new Matrix44$1(webvrFrameData.sittingToStandingTransform,true).invert();const leftOrRightViewMatrix=new Matrix44$1(webvrFrameData[leftOrRight+"ViewMatrix"],true);viewMatrix=Matrix44$1.multiply(leftOrRightViewMatrix,invertSittingToStandingTransform);}else{viewMatrix=Matrix44$1.identity();}
let projectionMatrix;if(mesh.isAffectedByProjectionMatrix){projectionMatrix=new Matrix44$1(webvrFrameData[leftOrRight+"ProjectionMatrix"],true);}else{projectionMatrix=Matrix44$1.identity();}
Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,"VIEW",viewMatrix.flatten());Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,"PROJECTION",projectionMatrix.flatten());Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,"MODELVIEW",Matrix44$1.multiply(viewMatrix,world_m).flatten());}}
draw(data){const gl=data.gl;const glem=data.glem;const expression=data.expression;const mesh=data.mesh;const originalMaterials=data.materials;const camera=data.camera;let lights=data.lights;const scene=data.scene;const vertices=data.vertices;const vaoDic=data.vaoDic;const vboDic=data.vboDic;const iboArrayDic=data.iboArrayDic;const geometry=data.geometry;const geometryName=data.geometryName;const primitiveType=data.primitiveType;const vertexN=data.vertexN;const renderPassIndex=data.renderPassIndex;const viewport=data.viewport;const isWebVRMode=data.isWebVRMode;const webvrFrameData=data.webvrFrameData;const forceThisMaterial=data.forceThisMaterial;const isOutlineMode=data.isOutlineMode?true:false;var isVAOBound=glem.bindVertexArray(gl,vaoDic[geometryName]);let input=mesh._getCurrentAnimationInputValue("time");for(let i=0;i<originalMaterials.length;i++){let material=originalMaterials[i];if(!material.isVisible){continue;}
let renderpassSpecificMaterial=material["renderpassSpecificMaterial_"+
expression.renderPasses[renderPassIndex].instanceName+
"_material_"+
i];if(renderpassSpecificMaterial){material=renderpassSpecificMaterial;}
if(forceThisMaterial){forceThisMaterial._vertexNofGeometries=material._vertexNofGeometries;forceThisMaterial.shaderInstance=material.shaderInstance;forceThisMaterial._semanticsDic=material._semanticsDic;forceThisMaterial._shaderParametersForShaderInstance=material._shaderParametersForShaderInstance;forceThisMaterial._shaderUniformLocationsOfExpressions=material._shaderUniformLocationsOfExpressions;material=forceThisMaterial;}
if(!material.shaderInstance){console.warn(`Failed to Render due to this material '${material.userFlavorName}(${
material.instanceName
})' has not shaderInstance.`);continue;}
this._glslProgram=material.shaderInstance.glslProgram;material._glContext.useProgram(this._glslProgram);let glslProgram=this._glslProgram;if(!isVAOBound){if(DrawKickerWorld._lastGeometry!==geometryName){for(let attribName in vboDic){gl.bindBuffer(gl.ARRAY_BUFFER,vboDic[attribName]);geometry.setUpVertexAttribs(gl,glslProgram,geometry._allVertexAttribs(vertices));}}}
material._glContext.uniform4i(material.getUniform(glslProgram,"uniform_objectIdsAndOutlineFlag"),mesh.objectIndex,0,isOutlineMode,mesh.outlineWidth,true);let opacity=mesh.opacityAccumulatedAncestry*scene.opacity;let query_result_uniform_opacity=material.getUniform(glslProgram,"uniform_opacity");material._glContext.uniform1f(query_result_uniform_opacity,opacity,true);let world_m;let normal_m;if(mesh.isAffectedByWorldMatrix){if(mesh.isAffectedByWorldMatrixAccumulatedAncestry){world_m=mesh.getWorldMatrixAt(input);normal_m=mesh.normalMatrix;}else{world_m=mesh.matrix;normal_m=mesh.normalMatrix;}}else{world_m=Matrix44$1.identity();normal_m=Matrix33.identity();}
if(material.getUniform(glslProgram,"uniform_viewPosition")){let cameraPos=new Vector4$1(0,0,1,1);if(camera){cameraPos=camera.worldMatrixWithoutMySelf.multiplyVector(new Vector4$1(camera.eyeInner.x,camera.eyeInner.y,camera.eyeInner.z,1.0));}
material._glContext.uniform3f(material.getUniform(glslProgram,"uniform_viewPosition"),cameraPos.x,cameraPos.y,cameraPos.z,true);}
if(material.getUniform(glslProgram,"uniform_lightPosition_0")){lights=material.shaderInstance.getDefaultPointLightIfNotExist(lights);for(let j=0;j<lights.length;j++){let light=lights[j];if(material.getUniform(glslProgram,`uniform_lightPosition_${j}`)&&material.getUniform(glslProgram,`uniform_lightDiffuse_${j}`)){let lightPosition=new Vector4$1(0,0,0,1);let lightDirection=new Vector4$1(0,0,0,1);let lightIntensity=light.intensity;if(!light.isVisible){lightIntensity=Vector3.zero();}
let lightType=0.0;if(light.className==="M_PointLight"){lightType=0.5;}else if(light.className==="M_SpotLight"){lightType=1.0;}
if(light.className==="M_PointLight"||light.className==="M_SpotLight"){lightPosition=light.worldMatrix.multiplyVector(lightPosition);}
if(light.className==="M_DirectionalLight"||light.className==="M_SpotLight"){lightDirection=light.directionInWorld;lightDirection.normalize();}
material._glContext.uniform3f(material.getUniform(glslProgram,`uniform_lightPosition_${j}`),lightPosition.x,lightPosition.y,lightPosition.z,true);material._glContext.uniform3f(material.getUniform(glslProgram,`uniform_lightDirection_${j}`),lightDirection.x,lightDirection.y,lightDirection.z,true);material._glContext.uniform4f(material.getUniform(glslProgram,`uniform_lightDiffuse_${j}`),lightIntensity.x,lightIntensity.y,lightIntensity.z,1.0,true);if(light.className==="M_SpotLight"){material._glContext.uniform3f(material.getUniform(glslProgram,`uniform_lightSpotInfo_${j}`),lightType,light.spotCosCutoff,light.spotExponent,true);}else{material._glContext.uniform3f(material.getUniform(glslProgram,`uniform_lightSpotInfo_${j}`),lightType,0,0,true);}}}}
{let needTobeStillDirty=material.shaderInstance.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);material.shaderInstance.dirty=needTobeStillDirty?true:false;material.setUpStates(mesh);this._setUpOrTearDownTextures(true,material);}
this._setupOtherTextures(lights);geometry.drawIntermediate(gl,glslProgram,mesh,material);let vertexN=originalMaterials[i].getVertexN(geometry);if(isWebVRMode){gl.viewport.apply(gl,[viewport[0],viewport[1],viewport[2]*0.5,viewport[3]]);DrawKickerWorld.setVRCamera(gl,glslProgram,material,world_m,normal_m,webvrFrameData,mesh,"left");DrawKickerWorld.drawGeometry(geometry,glem,gl,i,primitiveType,vertexN);gl.viewport.apply(gl,[viewport[2]*0.5,viewport[1],viewport[2]*0.5,viewport[3]]);DrawKickerWorld.setVRCamera(gl,glslProgram,material,world_m,normal_m,webvrFrameData,mesh,"right");DrawKickerWorld.drawGeometry(geometry,glem,gl,i,primitiveType,vertexN);}else{DrawKickerWorld.setCamera(gl,glslProgram,material,world_m,normal_m,camera,mesh);DrawKickerWorld.drawGeometry(geometry,glem,gl,i,primitiveType,vertexN);}
material.shaderInstance.setUniformsAsTearDown(gl,glslProgram,scene,material,camera,mesh,lights);this._tearDownOtherTextures(lights);material.tearDownStates();}
glem.bindVertexArray(gl,null);}
static drawGeometry(geometry,glem,gl,i,primitiveType,vertexN){if(geometry.isIndexed()){let indexBitSizeGLConstant=glem.elementIndexBitSizeGLConstant(gl);let indexByteSizeNumber=glem.elementIndexByteSizeNumber(gl);let offset=geometry.getIndexStartOffsetArrayAtMaterial(i);gl.drawElements(primitiveType,vertexN,indexBitSizeGLConstant,offset*indexByteSizeNumber);}else{gl.drawArrays(primitiveType,0,vertexN);}}
_setUpOrTearDownTextures(isSetUp,material){let methodName="tearDownTexture";if(isSetUp){methodName="setUpTexture";}
let isTextureProcessDone=true;for(let key in material._textureSemanticsDic){const uniformName=material._textureSemanticsDic[key];let textureSamplerDic=material.uniformTextureSamplerDic[uniformName];let textureName=textureSamplerDic.textureName;let textureUnitIndex=textureSamplerDic.textureUnitIndex;isTextureProcessDone=material[methodName](textureName,textureUnitIndex);}
return isTextureProcessDone;}
_setupOtherTextures(lights){for(let i=0;i<lights.length;i++){if(lights[i].camera&&lights[i].camera.texture){lights[i].camera.texture.setUp();}}}
_tearDownOtherTextures(lights){for(let i=0;i<lights.length;i++){if(lights[i].camera&&lights[i].camera.texture){lights[i].camera.texture.tearDown();}}}}
class SkeletalShaderSource{VSDefine_SkeletalShaderSource(in_,out_,f,lights,material,extraData){var shaderText="";shaderText+=`${in_} vec4 aVertex_joint;\n`;shaderText+=`${in_} vec4 aVertex_weight;\n`;if(!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL){shaderText+="uniform mat4 skinTransformMatrices["+extraData.jointN+"];\n";}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL===1){shaderText+="uniform vec4 quatArray["+extraData.jointN+"];\n";shaderText+="uniform vec4 transArray["+extraData.jointN+"];\n";}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL>1){shaderText+="uniform vec4 quatTranslationArray["+extraData.jointN+"];\n";shaderText+="uniform vec3 translationScale;\n";}
return shaderText;}
VSMethodDefine_SkeletalShaderSource(f,lights,material,extraData){let shaderText="";shaderText+=`
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
    `;return shaderText;}
VSPreProcess_SkeletalShaderSource(existCamera_f,f,lights,material,extraData){let shaderText="";shaderText+="vec4 weightVec = aVertex_weight;\n";if(!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL){shaderText+="mat4 skinMat = weightVec.x * skinTransformMatrices[int(aVertex_joint.x)];\n";shaderText+="skinMat += weightVec.y * skinTransformMatrices[int(aVertex_joint.y)];\n";shaderText+="skinMat += weightVec.z * skinTransformMatrices[int(aVertex_joint.z)];\n";shaderText+="skinMat += weightVec.w * skinTransformMatrices[int(aVertex_joint.w)];\n";}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL===1){shaderText+="mat4 skinMat = weightVec.x * createMatrixFromQuaternionTransformUniformScale(quatArray[int(aVertex_joint.x)], transArray[int(aVertex_joint.x)]);\n";shaderText+="skinMat += weightVec.y * createMatrixFromQuaternionTransformUniformScale(quatArray[int(aVertex_joint.y)], transArray[int(aVertex_joint.y)]);\n";shaderText+="skinMat += weightVec.z * createMatrixFromQuaternionTransformUniformScale(quatArray[int(aVertex_joint.z)], transArray[int(aVertex_joint.z)]);\n";shaderText+="skinMat += weightVec.w * createMatrixFromQuaternionTransformUniformScale(quatArray[int(aVertex_joint.w)], transArray[int(aVertex_joint.w)]);\n";}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL>1){shaderText+=`vec2 criteria = vec2(4096.0, 4096.0);\n`;shaderText+=`mat4 skinMat = weightVec.x * createMatrixFromQuaternionTransform(
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.x)].xy, criteria.x),
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.x)].zw, criteria.y).xyz*translationScale);\n`;shaderText+=`skinMat += weightVec.y * createMatrixFromQuaternionTransform(
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.y)].xy, criteria.x),
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.y)].zw, criteria.y).xyz*translationScale);\n`;shaderText+=`skinMat += weightVec.z * createMatrixFromQuaternionTransform(
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.z)].xy, criteria.x),
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.z)].zw, criteria.y).xyz*translationScale);\n`;shaderText+=`skinMat += weightVec.w * createMatrixFromQuaternionTransform(
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.w)].xy, criteria.x),
        unpackedVec2ToNormalizedVec4(quatTranslationArray[int(aVertex_joint.w)].zw, criteria.y).xyz*translationScale);\n`;}
if(Shader._exist(f,GLBoost$1.NORMAL)){shaderText+="  float border = AABBLengthCenterToCorner * float(objectIds.w) / 10000.0;\n";shaderText+="  position_local.xyz = position_local.xyz + normalize(normal_local)*border * float(objectIds.z);\n";}
shaderText+="position_world = skinMat * position_local;\n";if(Shader._exist(f,GLBoost$1.NORMAL)){shaderText+="mat3 normalMatrix = toNormalMatrix(skinMat);\n";shaderText+="normal_world = normalize(normalMatrix * normal_local);\n";shaderText+="  normal_world += normal_world * -2.0 * float(objectIds.z);\n";if(Shader._exist(f,GLBoost$1.TANGENT)){shaderText+="tangent_world = normalize(normalMatrix * tangent_local);\n";}}
shaderText+="isSkinning = true;\n";return shaderText;}
prepare_SkeletalShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){let vertexAttribsAsResult=[];vertexAttribs.forEach(attribName=>{if(attribName==="joint"||attribName==="weight"){vertexAttribsAsResult.push(attribName);shaderProgram["vertexAttribute_"+attribName]=gl.getAttribLocation(shaderProgram,"aVertex_"+attribName);gl.enableVertexAttribArray(shaderProgram["vertexAttribute_"+attribName]);}});if(!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL){let skinTransformMatricesUniformLocation=this._glContext.getUniformLocation(shaderProgram,"skinTransformMatrices");material.setUniform(shaderProgram,"uniform_skinTransformMatrices",skinTransformMatricesUniformLocation);material._semanticsDic["JOINTMATRIX"]="skinTransformMatrices";}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL===1){let quatArrayUniformLocation=this._glContext.getUniformLocation(shaderProgram,"quatArray");material.setUniform(shaderProgram,"uniform_quatArray",quatArrayUniformLocation);material._semanticsDic["JOINT_QUATERNION"]="quatArray";let transArrayUniformLocation=this._glContext.getUniformLocation(shaderProgram,"transArray");material.setUniform(shaderProgram,"uniform_transArray",transArrayUniformLocation);material._semanticsDic["JOINT_TRANSLATION"]="transArray";}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL>1){let quatArrayUniformLocation=this._glContext.getUniformLocation(shaderProgram,"quatTranslationArray");material.setUniform(shaderProgram,"uniform_quatTranslationArray",quatArrayUniformLocation);material._semanticsDic["JOINT_QUATTRANSLATION"]="quatTranslationArray";let transArrayUniformLocation=this._glContext.getUniformLocation(shaderProgram,"translationScale");material.setUniform(shaderProgram,"uniform_translationScale",transArrayUniformLocation);}
return vertexAttribsAsResult;}}
class VertexWorldShaderSource{VSDefine_VertexWorldShaderSource(in_,out_,f,lights,material,extraData){let shaderText="";if(Shader._exist(f,GLBoost.NORMAL)){shaderText+=`${out_} vec3 v_normal_world;\n`;if(Shader._exist(f,GLBoost.TANGENT)){if(material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_NORMAL)){shaderText+=`${out_} vec3 v_tangent_world;\n`;shaderText+=`${out_} vec3 v_binormal_world;\n`;}}}
shaderText+="uniform mat4 worldMatrix;\n";shaderText+="uniform mat4 viewMatrix;\n";shaderText+="uniform mat4 projectionMatrix;\n";shaderText+="uniform mat3 normalMatrix;\n";shaderText+="uniform highp ivec4 objectIds;\n";shaderText+="uniform float AABBLengthCenterToCorner;\n";shaderText+=`${out_} vec3 v_position_world;\n`;return shaderText;}
VSPreProcess_VertexWorldShaderSource(existCamera_f,f,lights,material,extraData){var shaderText="";shaderText+="  vec4 position_world;\n";shaderText+="  vec3 normal_world;\n";shaderText+="  vec3 tangent_world;\n";return shaderText;}
VSTransform_VertexWorldShaderSource(existCamera_f,f,lights,material,extraData){var shaderText="";shaderText+="  mat4 pvwMatrix = projectionMatrix * viewMatrix * worldMatrix;\n";if(Shader._exist(f,GLBoost.NORMAL)){shaderText+="  float borderWidth = AABBLengthCenterToCorner * float(objectIds.w) / 10000.0;\n";shaderText+="  position_local.xyz = position_local.xyz + normalize(normal_local)*borderWidth * float(objectIds.z);\n";}
shaderText+="  if (!isSkinning) {\n";shaderText+="    position_world = worldMatrix * position_local;\n";if(Shader._exist(f,GLBoost.NORMAL)){shaderText+="  normal_world = normalMatrix * normal_local;\n";}
shaderText+="  normal_world += normal_world * -2.0 * float(objectIds.z);\n";shaderText+="  }\n";shaderText+="  v_position_world = position_world.xyz;\n";let normalTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_NORMAL);if(Shader._exist(f,GLBoost.NORMAL)){shaderText+="  v_normal_world = normal_world;\n";if(Shader._exist(f,GLBoost.TANGENT)&&!material.isFlatShading&&normalTexture){{shaderText+="  if (!isSkinning) {\n";shaderText+="    tangent_world = normalMatrix * tangent_local;\n";shaderText+="  }\n";}
shaderText+="  v_binormal_world = cross(normal_world, tangent_world);\n";shaderText+="  v_tangent_world = cross(v_binormal_world, normal_world);\n";}}
shaderText+="  gl_Position =  pvwMatrix * position_local;\n";return shaderText;}
FSDefine_VertexWorldShaderSource(in_,f,lights,material,extraData){let shaderText="";shaderText+=`uniform highp ivec4 objectIds;\n`;shaderText+=`uniform vec3 viewPosition_world;\n`;let lightNumExceptAmbient=lights.filter(light=>{return!light.isTypeAmbient();}).length;if(lightNumExceptAmbient>0){shaderText+=`uniform vec4 lightDiffuse[${lightNumExceptAmbient}];\n`;shaderText+=`uniform vec3 lightSpotInfo[${lightNumExceptAmbient}];\n`;shaderText+=`uniform vec3 lightPosition_world[${lightNumExceptAmbient}];\n`;shaderText+=`uniform vec3 lightDirection_world[${lightNumExceptAmbient}];\n`;}
if(Shader._exist(f,GLBoost.NORMAL)){shaderText+=`${in_} vec3 v_normal_world;\n`;if(Shader._exist(f,GLBoost.TANGENT)&&material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_NORMAL)){shaderText+=`${in_} vec3 v_tangent_world;\n`;shaderText+=`${in_} vec3 v_binormal_world;\n`;}}
shaderText+=`${in_} vec3 v_position_world;\n`;return shaderText;}
FSShade_VertexWorldShaderSource(f,gl,lights){var shaderText="";return shaderText;}
prepare_VertexWorldShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];vertexAttribs.forEach(attribName=>{if(attribName==="position"||attribName==="normal"||attribName==="tangent"){shaderProgram["vertexAttribute_"+attribName]=gl.getAttribLocation(shaderProgram,"aVertex_"+attribName);if(shaderProgram["vertexAttribute_"+attribName]!==-1){gl.enableVertexAttribArray(shaderProgram["vertexAttribute_"+attribName]);vertexAttribsAsResult.push(attribName);}}});material.setUniform(shaderProgram,"uniform_objectIdsAndOutlineFlag",this._glContext.getUniformLocation(shaderProgram,"objectIds"));material.setUniform(shaderProgram,"uniform_worldMatrix",this._glContext.getUniformLocation(shaderProgram,"worldMatrix"));material._semanticsDic["WORLD"]="worldMatrix";material.setUniform(shaderProgram,"uniform_normalMatrix",this._glContext.getUniformLocation(shaderProgram,"normalMatrix"));material._semanticsDic["MODELVIEWINVERSETRANSPOSE"]="normalMatrix";if(existCamera_f){material.setUniform(shaderProgram,"uniform_viewMatrix",this._glContext.getUniformLocation(shaderProgram,"viewMatrix"));material._semanticsDic["VIEW"]="viewMatrix";material.setUniform(shaderProgram,"uniform_projectionMatrix",this._glContext.getUniformLocation(shaderProgram,"projectionMatrix"));material._semanticsDic["PROJECTION"]="projectionMatrix";}
material.setUniform(shaderProgram,"uniform_viewPosition",this._glContext.getUniformLocation(shaderProgram,"viewPosition_world"));for(let i=0;i<lights.length;i++){material.setUniform(shaderProgram,"uniform_lightPosition_"+i,this._glContext.getUniformLocation(shaderProgram,`lightPosition_world[${i}]`));material.setUniform(shaderProgram,"uniform_lightDirection_"+i,this._glContext.getUniformLocation(shaderProgram,`lightDirection_world[${i}]`));material.setUniform(shaderProgram,"uniform_lightDiffuse_"+i,this._glContext.getUniformLocation(shaderProgram,`lightDiffuse[${i}]`));material.setUniform(shaderProgram,"uniform_lightSpotInfo_"+i,this._glContext.getUniformLocation(shaderProgram,`lightSpotInfo[${i}]`));}
material.setUniform(shaderProgram,"uniform_AABBLengthCenterToCorner",this._glContext.getUniformLocation(shaderProgram,"AABBLengthCenterToCorner"));return vertexAttribsAsResult;}}
GLBoost["VertexWorldShaderSource"]=VertexWorldShaderSource;class AABB{constructor(){this._AABB_min=new Vector3(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);this._AABB_max=new Vector3(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);this._centerPoint=null;this._lengthCenterToCorner=null;this._threshold_AABB_min=-1000000000;this._threshold_AABB_max=1000000000;this._threshold_AABB_lengthCenterToCorner=null;this._isValid_AABB_min=true;this._isValid_AABB_max=true;this._isValid_AABB_lengthCenterToCorner=true;}
clone(){let instance=new AABB();instance._AABB_max=this._AABB_max.clone();instance._AABB_min=this._AABB_min.clone();instance._centerPoint=(this._centerPoint!==null)?this._centerPoint.clone():null;instance._lengthCenterToCorner=this._lengthCenterToCorner;return instance;}
isVanilla(){if(this._AABB_min.x==Number.MAX_VALUE&&this._AABB_min.y==Number.MAX_VALUE&&this._AABB_min.z==Number.MAX_VALUE&&this._AABB_max.x==-Number.MAX_VALUE&&this._AABB_max.y==-Number.MAX_VALUE&&this._AABB_max.z==-Number.MAX_VALUE){return true;}else{return false;}}
addPosition(positionVector){this._AABB_min.x=(positionVector.x<this._AABB_min.x)?positionVector.x:this._AABB_min.x;this._AABB_min.y=(positionVector.y<this._AABB_min.y)?positionVector.y:this._AABB_min.y;this._AABB_min.z=(positionVector.z<this._AABB_min.z)?positionVector.z:this._AABB_min.z;this._AABB_max.x=(this._AABB_max.x<positionVector.x)?positionVector.x:this._AABB_max.x;this._AABB_max.y=(this._AABB_max.y<positionVector.y)?positionVector.y:this._AABB_max.y;this._AABB_max.z=(this._AABB_max.z<positionVector.z)?positionVector.z:this._AABB_max.z;return positionVector;}
addPositionWithArray(array,index){this._AABB_min.x=(array[index+0]<this._AABB_min.x)?array[index+0]:this._AABB_min.x;this._AABB_min.y=(array[index+1]<this._AABB_min.y)?array[index+1]:this._AABB_min.y;this._AABB_min.z=(array[index+2]<this._AABB_min.z)?array[index+2]:this._AABB_min.z;this._AABB_max.x=(this._AABB_max.x<array[index+0])?array[index+0]:this._AABB_max.x;this._AABB_max.y=(this._AABB_max.y<array[index+1])?array[index+1]:this._AABB_max.y;this._AABB_max.z=(this._AABB_max.z<array[index+2])?array[index+2]:this._AABB_max.z;return array;}
updateAllInfo(){this._centerPoint=Vector3.add(this._AABB_min,this._AABB_max).divide(2);const lengthCenterToCorner=Vector3.lengthBtw(this._centerPoint,this._AABB_max);this._lengthCenterToCorner=(lengthCenterToCorner!==lengthCenterToCorner)?0:lengthCenterToCorner;if(this._threshold_AABB_min!=null&&(this._AABB_min.x<this._threshold_AABB_min||this._AABB_min.y<this._threshold_AABB_min||this._AABB_min.z<this._threshold_AABB_min))
{this._isValid_AABB_min=false;}
if(this._threshold_AABB_max!=null&&(this._AABB_max.x>this._threshold_AABB_max||this._AABB_max.y>this._threshold_AABB_max||this._AABB_max.z>this._threshold_AABB_max))
{this._isValid_AABB_max=false;}
if(this._threshold_AABB_lengthCenterToCorner!=null&&this._threshold_AABB_lengthCenterToCorner<this._lengthCenterToCorner){this._isValid_AABB_lengthCenterToCorner=false;}
return this;}
isValid(){return this._isValid_AABB_min&&this._isValid_AABB_max&&this._isValid_AABB_lengthCenterToCorner;}
isValid_AABB_min(){return this._isValid_AABB_min;}
isValid_AABB_max(){return this._isValid_AABB_min;}
isValid_AABB_lengthCenterToCorner(){return this._isValid_AABB_lengthCenterToCorner;}
resetValidationFlags(){this._isValid_AABB_min=true;this._isValid_AABB_max=true;this._isValid_AABB_lengthCenterToCorner=true;}
mergeAABB(aabb){var isUpdated=false;if(aabb.isVanilla()){return isUpdated;}
if(this.isVanilla()){this._AABB_min.x=aabb.minPoint.x;this._AABB_min.y=aabb.minPoint.y;this._AABB_min.z=aabb.minPoint.z;this._AABB_max.x=aabb.maxPoint.x;this._AABB_max.y=aabb.maxPoint.y;this._AABB_max.z=aabb.maxPoint.z;isUpdated=true;return isUpdated;}
if(aabb.minPoint.x<this._AABB_min.x){this._AABB_min.x=aabb.minPoint.x;isUpdated=true;}
if(aabb.minPoint.y<this._AABB_min.y){this._AABB_min.y=aabb.minPoint.y;isUpdated=true;}
if(aabb.minPoint.z<this._AABB_min.z){this._AABB_min.z=aabb.minPoint.z;isUpdated=true;}
if(this._AABB_max.x<aabb.maxPoint.x){this._AABB_max.x=aabb.maxPoint.x;isUpdated=true;}
if(this._AABB_max.y<aabb.maxPoint.y){this._AABB_max.y=aabb.maxPoint.y;isUpdated=true;}
if(this._AABB_max.z<aabb.maxPoint.z){this._AABB_max.z=aabb.maxPoint.z;isUpdated=true;}
this.updateAllInfo();return isUpdated;}
get minPoint(){return this._AABB_min;}
get maxPoint(){return this._AABB_max;}
get centerPoint(){return this._centerPoint;}
get lengthCenterToCorner(){return this._lengthCenterToCorner;}
get sizeX(){return(this._AABB_max.x-this._AABB_min.x);}
get sizeY(){return(this._AABB_max.y-this._AABB_min.y);}
get sizeZ(){return(this._AABB_max.z-this._AABB_min.z);}
static multiplyMatrix(matrix,aabb){if(aabb.isVanilla()){return aabb.clone();}
var newAabb=new AABB();let AABB_0=new Vector4$1(aabb._AABB_min.x,aabb._AABB_min.y,aabb._AABB_min.z,1);let AABB_1=new Vector4$1(aabb._AABB_max.x,aabb._AABB_min.y,aabb._AABB_min.z,1);let AABB_2=new Vector4$1(aabb._AABB_min.x,aabb._AABB_max.y,aabb._AABB_min.z,1);let AABB_3=new Vector4$1(aabb._AABB_min.x,aabb._AABB_min.y,aabb._AABB_max.z,1);let AABB_4=new Vector4$1(aabb._AABB_min.x,aabb._AABB_max.y,aabb._AABB_max.z,1);let AABB_5=new Vector4$1(aabb._AABB_max.x,aabb._AABB_min.y,aabb._AABB_max.z,1);let AABB_6=new Vector4$1(aabb._AABB_max.x,aabb._AABB_max.y,aabb._AABB_min.z,1);let AABB_7=new Vector4$1(aabb._AABB_max.x,aabb._AABB_max.y,aabb._AABB_max.z,1);newAabb.addPosition(new Vector3(matrix.multiplyVector(AABB_0)));newAabb.addPosition(new Vector3(matrix.multiplyVector(AABB_1)));newAabb.addPosition(new Vector3(matrix.multiplyVector(AABB_2)));newAabb.addPosition(new Vector3(matrix.multiplyVector(AABB_3)));newAabb.addPosition(new Vector3(matrix.multiplyVector(AABB_4)));newAabb.addPosition(new Vector3(matrix.multiplyVector(AABB_5)));newAabb.addPosition(new Vector3(matrix.multiplyVector(AABB_6)));newAabb.addPosition(new Vector3(matrix.multiplyVector(AABB_7)));newAabb.updateAllInfo();return newAabb;}
toString(){return 'AABB_min: '+this._AABB_min+'\n'+'AABB_max: '+this._AABB_max+'\n'
+'centerPoint: '+this._centerPoint+'\n'+'lengthCenterToCorner: '+this._lengthCenterToCorner;}}
GLBoost$1['AABB']=AABB;class FreeShader extends Shader{constructor(glBoostContext,vertexShaderText,fragmentShaderText,attributes,uniforms,textureNames){super(glBoostContext);this._vertexShaderText=vertexShaderText;this._fragmentShaderText=fragmentShaderText;let newAttributes={};for(let attributeName in attributes){switch(attributes[attributeName]){case 'POSITION':newAttributes.position=attributeName;break;case 'NORMAL':newAttributes.normal=attributeName;break;case 'COLOR':newAttributes.color=attributeName;break;case 'TEXCOORD_0':newAttributes.texcoord=attributeName;break;case 'JOINT':newAttributes.joint=attributeName;break;case 'WEIGHT':newAttributes.weight=attributeName;break;default:newAttributes[attributes[attributeName]]=attributeName;break;}}
this._attributes=newAttributes;this._uniforms=uniforms;this._textureNames=textureNames;}
_getVertexShaderString(gl,functions,existCamera_f,lights,material,extraData){return this._vertexShaderText;}
_getFragmentShaderString(gl,functions,lights,material,extraData){return this._fragmentShaderText;}
_prepareAssetsForShaders(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];vertexAttribs.forEach((attribName)=>{shaderProgram['vertexAttribute_'+attribName]=gl.getAttribLocation(shaderProgram,this._attributes[attribName]);if(shaderProgram['vertexAttribute_'+attribName]>=0){gl.enableVertexAttribArray(shaderProgram['vertexAttribute_'+attribName]);vertexAttribsAsResult.push(attribName);}});let textureCount=0;this._glContext.useProgram(shaderProgram);for(let uniformName in this._uniforms){if(this._uniforms[uniformName]==='TEXTURE'){let uTexture=material._glContext.getUniformLocation(shaderProgram,uniformName);material._glContext.uniform1i(uTexture,textureCount,true);material.setUniform(shaderProgram,uniformName,uTexture);material.uniformTextureSamplerDic[uniformName]={};material.uniformTextureSamplerDic[uniformName].textureUnitIndex=textureCount;material.uniformTextureSamplerDic[uniformName].textureName=this._textureNames[uniformName];const texturePurpose=material.getTexturePurpose(this._textureNames[uniformName]);material._textureSemanticsDic[texturePurpose]=uniformName;textureCount++;}
switch(this._uniforms[uniformName]){case 'WORLD':case 'VIEW':case 'MODELVIEW':case 'MODELVIEWINVERSETRANSPOSE':case 'PROJECTION':case 'JOINTMATRIX':material.setUniform(shaderProgram,'uniform_'+uniformName,this._glContext.getUniformLocation(shaderProgram,uniformName));case 'TEXTURE':material.addSemanticsDic(this._uniforms[uniformName],uniformName);continue;}
material.setUniform(shaderProgram,'uniform_'+uniformName,this._glContext.getUniformLocation(shaderProgram,uniformName));}
return vertexAttribsAsResult;}
get attributes(){return this._attributes;}
setUniforms(gl,glslProgram,expression,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,expression,material,camera,mesh,lights);for(let uniformName in this._uniforms){let value=this._uniforms[uniformName];if(typeof value==='number'){this._glContext.uniform1f(material.getUniform(glslProgram,'uniform_'+uniformName),value,true);}else if(value instanceof Vector2){this._glContext.uniform2f(material.getUniform(glslProgram,'uniform_'+uniformName),value.x,value.y,true);}else if(value instanceof Vector3){this._glContext.uniform3f(material.getUniform(glslProgram,'uniform_'+uniformName),value.x,value.y,value.z,true);}else if(value instanceof Vector4$1){this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_'+uniformName),value.x,value.y,value.z,value.w,true);}}
for(let parameterName in material.shaderParameters){let value=material.shaderParameters[parameterName];if(typeof value==='number'){this._glContext.uniform1f(material.getUniform(glslProgram,'uniform_'+parameterName),value,true);}else if(value instanceof Vector2){this._glContext.uniform2f(material.getUniform(glslProgram,'uniform_'+parameterName),value.x,value.y,true);}else if(value instanceof Vector3){this._glContext.uniform3f(material.getUniform(glslProgram,'uniform_'+parameterName),value.x,value.y,value.z,true);}else if(value instanceof Vector4$1){this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_'+parameterName),value.x,value.y,value.z,value.w,true);}}}}
GLBoost['FreeShader']=FreeShader;class Geometry extends GLBoostObject{constructor(glBoostContext){super(glBoostContext);this._materials=[];this._vertexN=0;this._vertices=null;this._indicesArray=null;this._indexStartOffsetArray=[];this._performanceHint=null;this._defaultMaterial=null;this._vertexData=[];this._extraDataForShader={};this._vboObj={};this._AABB=new AABB();this._drawKicker=DrawKickerWorld.getInstance();}
_createShaderInstance(glBoostContext,shaderClass){let shaderInstance=new shaderClass(glBoostContext,VertexWorldShaderSource);return shaderInstance;}
_allVertexAttribs(vertices){var attribNameArray=[];for(var attribName in vertices){if(attribName!=="components"&&attribName!=="componentBytes"&&attribName!=="componentType"){attribNameArray.push(attribName);}}
return attribNameArray;}
_checkAndSetVertexComponentNumber(allVertexAttribs){allVertexAttribs.forEach(attribName=>{let element=this._vertices[attribName][0];let componentN=MathClassUtil.compomentNumberOfVector(element);if(componentN===0){return;}
if(typeof this._vertices.components==="undefined"){this._vertices.components={};}
if(typeof this._vertices.componentType==="undefined"){this._vertices.componentType={};}
this._vertices.components[attribName]=componentN;this._vertices.componentType[attribName]=5126;});}
_calcBaryCentricCoord(vertexNum,positionElementNumPerVertex){this._vertices.barycentricCoord=new Float32Array(vertexNum*positionElementNumPerVertex);this._vertices.components.barycentricCoord=3;this._vertices.componentType.barycentricCoord=5126;if(!this._indicesArray){for(let i=0;i<vertexNum;i++){this._vertices.barycentricCoord[i*positionElementNumPerVertex+0]=i%3===0?1:0;this._vertices.barycentricCoord[i*positionElementNumPerVertex+1]=i%3===1?1:0;this._vertices.barycentricCoord[i*positionElementNumPerVertex+2]=i%3===2?1:0;}}else{for(let i=0;i<this._indicesArray.length;i++){let vertexIndices=this._indicesArray[i];for(let j=0;j<vertexIndices.length;j++){this._vertices.barycentricCoord[vertexIndices[j]*positionElementNumPerVertex+0]=j%3===0?1:0;this._vertices.barycentricCoord[vertexIndices[j]*positionElementNumPerVertex+1]=j%3===1?1:0;this._vertices.barycentricCoord[vertexIndices[j]*positionElementNumPerVertex+2]=j%3===2?1:0;}}}}
_calcTangentPerVertex(pos0Vec3,pos1Vec3,pos2Vec3,uv0Vec2,uv1Vec2,uv2Vec2){let cp0=[new Vector3(pos0Vec3.x,uv0Vec2.x,uv0Vec2.y),new Vector3(pos0Vec3.y,uv0Vec2.x,uv0Vec2.y),new Vector3(pos0Vec3.z,uv0Vec2.x,uv0Vec2.y)];let cp1=[new Vector3(pos1Vec3.x,uv1Vec2.x,uv1Vec2.y),new Vector3(pos1Vec3.y,uv1Vec2.x,uv1Vec2.y),new Vector3(pos1Vec3.z,uv1Vec2.x,uv1Vec2.y)];let cp2=[new Vector3(pos2Vec3.x,uv2Vec2.x,uv2Vec2.y),new Vector3(pos2Vec3.y,uv2Vec2.x,uv2Vec2.y),new Vector3(pos2Vec3.z,uv2Vec2.x,uv2Vec2.y)];let u=[];let v=[];for(let i=0;i<3;i++){let v1=Vector3.subtract(cp1[i],cp0[i]);let v2=Vector3.subtract(cp2[i],cp1[i]);let abc=Vector3.cross(v1,v2);let validate=Math.abs(abc.x)<Number.EPSILON;if(validate){console.assert(validate,"Polygons or polygons on UV are degenerate!");return new Vector3(0,0,0);}
u[i]=-abc.y/abc.x;v[i]=-abc.z/abc.x;}
return new Vector3(u[0],u[1],u[2]).normalize();}
_calcTangentFor3Vertices(vertexIndices,i,pos0IndexBase,pos1IndexBase,pos2IndexBase,uv0IndexBase,uv1IndexBase,uv2IndexBase,incrementNum){let pos0Vec3=new Vector3(this._vertices.position[pos0IndexBase],this._vertices.position[pos0IndexBase+1],this._vertices.position[pos0IndexBase+2]);let pos1Vec3=new Vector3(this._vertices.position[pos1IndexBase],this._vertices.position[pos1IndexBase+1],this._vertices.position[pos1IndexBase+2]);let pos2Vec3=new Vector3(this._vertices.position[pos2IndexBase],this._vertices.position[pos2IndexBase+1],this._vertices.position[pos2IndexBase+2]);let uv0Vec2=new Vector2(this._vertices.texcoord[uv0IndexBase],this._vertices.texcoord[uv0IndexBase+1]);let uv1Vec2=new Vector2(this._vertices.texcoord[uv1IndexBase],this._vertices.texcoord[uv1IndexBase+1]);let uv2Vec2=new Vector2(this._vertices.texcoord[uv2IndexBase],this._vertices.texcoord[uv2IndexBase+1]);const componentNum3=3;let tan0IndexBase=i*componentNum3;let tan1IndexBase=(i+1)*componentNum3;let tan2IndexBase=(i+2)*componentNum3;if(vertexIndices){tan0IndexBase=vertexIndices[i]*componentNum3;tan1IndexBase=vertexIndices[i+1]*componentNum3;tan2IndexBase=vertexIndices[i+2]*componentNum3;}
let tan0Vec3=this._calcTangentPerVertex(pos0Vec3,pos1Vec3,pos2Vec3,uv0Vec2,uv1Vec2,uv2Vec2);this._vertices.tangent[tan0IndexBase]=tan0Vec3.x;this._vertices.tangent[tan0IndexBase+1]=tan0Vec3.y;this._vertices.tangent[tan0IndexBase+2]=tan0Vec3.z;let tan1Vec3=this._calcTangentPerVertex(pos1Vec3,pos2Vec3,pos0Vec3,uv1Vec2,uv2Vec2,uv0Vec2);this._vertices.tangent[tan1IndexBase]=tan1Vec3.x;this._vertices.tangent[tan1IndexBase+1]=tan1Vec3.y;this._vertices.tangent[tan1IndexBase+2]=tan1Vec3.z;let tan2Vec3=this._calcTangentPerVertex(pos2Vec3,pos0Vec3,pos1Vec3,uv2Vec2,uv0Vec2,uv1Vec2);this._vertices.tangent[tan2IndexBase]=tan2Vec3.x;this._vertices.tangent[tan2IndexBase+1]=tan2Vec3.y;this._vertices.tangent[tan2IndexBase+2]=tan2Vec3.z;}
_calcTangent(vertexNum,positionElementNumPerVertex,texcoordElementNumPerVertex,primitiveType){this._vertices.tangent=new Float32Array(vertexNum*positionElementNumPerVertex);this._vertices.components.tangent=3;this._vertices.componentType.tangent=5126;let incrementNum=3;if(primitiveType===GLBoost$1.TRIANGLE_STRIP){incrementNum=1;}
if(this._vertices.texcoord){if(!this._indicesArray){for(let i=0;i<vertexNum-2;i+=incrementNum){let pos0IndexBase=i*positionElementNumPerVertex;let pos1IndexBase=(i+1)*positionElementNumPerVertex;let pos2IndexBase=(i+2)*positionElementNumPerVertex;let uv0IndexBase=i*texcoordElementNumPerVertex;let uv1IndexBase=(i+1)*texcoordElementNumPerVertex;let uv2IndexBase=(i+2)*texcoordElementNumPerVertex;this._calcTangentFor3Vertices(null,i,pos0IndexBase,pos1IndexBase,pos2IndexBase,uv0IndexBase,uv1IndexBase,uv2IndexBase,incrementNum);}}else{for(let i=0;i<this._indicesArray.length;i++){let vertexIndices=this._indicesArray[i];for(let j=0;j<vertexIndices.length-2;j+=incrementNum){let pos0IndexBase=vertexIndices[j]*positionElementNumPerVertex;let pos1IndexBase=vertexIndices[j+1]*positionElementNumPerVertex;let pos2IndexBase=vertexIndices[j+2]*positionElementNumPerVertex;let uv0IndexBase=vertexIndices[j]*texcoordElementNumPerVertex;let uv1IndexBase=vertexIndices[j+1]*texcoordElementNumPerVertex;let uv2IndexBase=vertexIndices[j+2]*texcoordElementNumPerVertex;this._calcTangentFor3Vertices(vertexIndices,j,pos0IndexBase,pos1IndexBase,pos2IndexBase,uv0IndexBase,uv1IndexBase,uv2IndexBase,incrementNum);}}}}}
setVerticesData(vertices,indicesArray,primitiveType=GLBoost$1.TRIANGLES,performanceHint=GLBoost$1.STATIC_DRAW){this._vertices=vertices;this._indicesArray=indicesArray;let allVertexAttribs=this._allVertexAttribs(this._vertices);this._checkAndSetVertexComponentNumber(allVertexAttribs);let vertexNum=0;let positionElementNum=0;let positionElementNumPerVertex=this._vertices.components.position;let texcoordElementNumPerVertex=this._vertices.components.texcoord;if(typeof this._vertices.position.buffer!=="undefined"){vertexNum=this._vertices.position.length/positionElementNumPerVertex;positionElementNum=this._vertices.position.length;}else{vertexNum=this._vertices.position.length;positionElementNum=this._vertices.position.length*positionElementNumPerVertex;}
this._calcBaryCentricCoord(vertexNum,positionElementNumPerVertex);allVertexAttribs=this._allVertexAttribs(this._vertices);this._checkAndSetVertexComponentNumber(allVertexAttribs);allVertexAttribs.forEach(attribName=>{if(attribName==="barycentricCoord"){return;}
if(attribName==="tangent"){return;}
if(typeof this._vertices[attribName].buffer!=="undefined"){return;}
let vertexAttribArray=[];this._vertices[attribName].forEach((elem,index)=>{let element=this._vertices[attribName][index];Array.prototype.push.apply(vertexAttribArray,MathClassUtil.vectorToArray(element));});this._vertices[attribName]=vertexAttribArray;});if(this._vertices.texcoord){this._calcTangent(vertexNum,positionElementNumPerVertex,texcoordElementNumPerVertex,primitiveType);}
this._calcArenbergInverseMatrices(primitiveType);allVertexAttribs.forEach(attribName=>{if(typeof this._vertices[attribName].buffer==="undefined"){this._vertices[attribName]=new Float32Array(this._vertices[attribName]);}});for(let i=0;i<vertexNum;i++){this._AABB.addPositionWithArray(this._vertices.position,i*positionElementNumPerVertex);}
this._AABB.updateAllInfo();let gl=this._glContext.gl;let primitiveTypeStr=GLBoost$1.getValueOfGLBoostConstant(primitiveType);this._primitiveType=gl[primitiveTypeStr];let performanceHintStr=GLBoost$1.getValueOfGLBoostConstant(performanceHint);this._performanceHint=gl[performanceHintStr];}
updateVerticesData(vertices,skipUpdateAABB=false){let gl=this._glContext.gl;for(let attribName in vertices){let vertexAttribArray=[];this._vertices[attribName].forEach((elem,index)=>{let element=vertices[attribName][index];Array.prototype.push.apply(vertexAttribArray,MathClassUtil.vectorToArray(element));if(attribName==="position"&&!(skipUpdateAABB===true)){let componentN=this._vertices.components[attribName];this._AABB.addPositionWithArray(vertexAttribArray,index*componentN);}
this._vertices[attribName]=vertexAttribArray;});}
if(!(skipUpdateAABB===true)){this._AABB.updateAllInfo();}
for(let attribName in vertices){if(this._vboObj[attribName]){let float32AryVertexData=new Float32Array(this._vertices[attribName]);gl.bindBuffer(gl.ARRAY_BUFFER,this._vboObj[attribName]);gl.bufferSubData(gl.ARRAY_BUFFER,0,float32AryVertexData);gl.bindBuffer(gl.ARRAY_BUFFER,null);}else{return false;}}
return true;}
setUpVertexAttribs(gl,glslProgram,allVertexAttribs){var optimizedVertexAttribs=glslProgram.optimizedVertexAttribs;allVertexAttribs.forEach(attribName=>{if(optimizedVertexAttribs.indexOf(attribName)!=-1){gl.bindBuffer(gl.ARRAY_BUFFER,this._vboObj[attribName]);gl.vertexAttribPointer(glslProgram["vertexAttribute_"+attribName],this._vertices.components[attribName],this._vertices.componentType[attribName],false,0,0);}});}
setUpEnableVertexAttribArrays(gl,glslProgram,allVertexAttribs){var optimizedVertexAttribs=glslProgram.optimizedVertexAttribs;allVertexAttribs.forEach(attribName=>{if(optimizedVertexAttribs.indexOf(attribName)!=-1){gl.enableVertexAttribArray(glslProgram["vertexAttribute_"+attribName]);}});}
setUpDisableAllVertexAttribArrays(gl,glslProgram){for(let i=0;i<8;i++){gl.disableVertexAttribArray(i);}}
setUpDisableVertexAttribArrays(gl,glslProgram,allVertexAttribs){var optimizedVertexAttribs=glslProgram.optimizedVertexAttribs;allVertexAttribs.forEach(attribName=>{if(optimizedVertexAttribs.indexOf(attribName)!=-1){gl.disableVertexAttribArray(glslProgram["vertexAttribute_"+attribName]);}});}
_getVAO(){return Geometry._vaoDic[this.toString()];}
_getAllVertexAttribs(){return this._allVertexAttribs(this._vertices);}
prepareGLSLProgram(expression,material,existCamera_f,lights,shaderClass=void 0,argShaderInstance=void 0){let vertices=this._vertices;let _optimizedVertexAttribs=this._allVertexAttribs(vertices,material);let shaderInstance=null;if(argShaderInstance){shaderInstance=argShaderInstance;}else{if(shaderClass){shaderInstance=this._createShaderInstance(this._glBoostSystem,shaderClass);}else{shaderInstance=this._createShaderInstance(this._glBoostSystem,material.shaderClass);}}
shaderInstance.getShaderProgram(expression,_optimizedVertexAttribs,existCamera_f,lights,material,this._extraDataForShader);return shaderInstance;}
_setVertexNtoSingleMaterial(material,index){if(this._indicesArray&&this._indicesArray.length>0){material.setVertexN(this,this._indicesArray[index].length);}else{material.setVertexN(this,this._vertexN);}}
_getAppropriateMaterials(mesh){let materials=null;if(this._materials.length>0){materials=this._materials;}else if(mesh.material){materials=[mesh.material];}else{mesh.material=this._glBoostSystem._defaultMaterial;materials=[mesh.material];}
return materials;}
getIndexStartOffsetArrayAtMaterial(i){return this._indexStartOffsetArray[i];}
prepareToRender(expression,existCamera_f,lights,meshMaterial,mesh,shaderClass=void 0,argMaterials=void 0){var vertices=this._vertices;var gl=this._glContext.gl;var glem=GLExtensionsManager.getInstance(this._glContext);this._vertexN=vertices.position.length/vertices.components.position;var allVertexAttribs=this._allVertexAttribs(vertices);if(Geometry._vaoDic[this.toString()]);else{var vao=this._glContext.createVertexArray(this);Geometry._vaoDic[this.toString()]=vao;}
glem.bindVertexArray(gl,Geometry._vaoDic[this.toString()]);let doAfter=false;allVertexAttribs.forEach(attribName=>{if(this._vboObj[attribName]){gl.bindBuffer(gl.ARRAY_BUFFER,this._vboObj[attribName]);}else{let vbo=this._glContext.createBuffer(this);this._vboObj[attribName]=vbo;gl.bindBuffer(gl.ARRAY_BUFFER,this._vboObj[attribName]);gl.bufferData(gl.ARRAY_BUFFER,this._vertices[attribName],this._performanceHint);doAfter=true;}});if(doAfter){if(Geometry._iboArrayDic[this.toString()]){gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,Geometry._iboArrayDic[this.toString()]);}else{if(this._indicesArray){let indices=[];for(let i=0;i<this._indicesArray.length;i++){if(i==0){this._indexStartOffsetArray[i]=0;}
this._indexStartOffsetArray[i+1]=this._indexStartOffsetArray[i]+this._indicesArray[i].length;indices=indices.concat(this._indicesArray[i]);}
var ibo=this._glContext.createBuffer(this);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,ibo);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,glem.createUintArrayForElementIndex(gl,indices),gl.STATIC_DRAW);Geometry._iboArrayDic[this.toString()]=ibo;}}}
let materials=argMaterials;if(argMaterials===void 0){materials=this._getAppropriateMaterials(mesh);}
for(let i=0;i<materials.length;i++){let shaderInstance=null;if(materials[i].shaderInstance&&materials[i].shaderInstance.constructor===FreeShader){shaderInstance=this.prepareGLSLProgram(expression,materials[i],existCamera_f,lights,void 0,materials[i].shaderInstance);}else{shaderInstance=this.prepareGLSLProgram(expression,materials[i],existCamera_f,lights,shaderClass);}
this._setVertexNtoSingleMaterial(materials[i],i);shaderInstance.vao=Geometry._vaoDic[this.toString()];this.setUpVertexAttribs(gl,shaderInstance._glslProgram,allVertexAttribs);if(argMaterials===void 0){materials[i].shaderInstance=shaderInstance;}else{argMaterials[i].shaderInstance=shaderInstance;}}
glem.bindVertexArray(gl,null);gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);return materials;}
_setUpVertexAttibsWrapper(glslProgram){this.setUpVertexAttribs(this._glContext.gl,glslProgram,this._getAllVertexAttribs());}
draw(data){const gl=this._glContext.gl;const glem=GLExtensionsManager.getInstance(this._glContext);let materials=this._getAppropriateMaterials(data.mesh);const thisName=this.toString();this._drawKicker.draw({gl:gl,glem:glem,expression:data.expression,lights:data.lights,camera:data.camera,mesh:data.mesh,scene:data.scene,renderPassIndex:data.renderPassIndex,materials:materials,vertices:this._vertices,vaoDic:Geometry._vaoDic,vboObj:this._vboObj,iboArrayDic:Geometry._iboArrayDic,geometry:this,geometryName:thisName,primitiveType:this._primitiveType,vertexN:this._vertexN,viewport:data.viewport,isWebVRMode:data.isWebVRMode,webvrFrameData:data.webvrFrameData,forceThisMaterial:data.forceThisMaterial,isOutlineMode:data.isOutlineMode});}
drawIntermediate(){}
merge(geometrys){if(Array.isArray(geometrys)){let typedArrayDic={};let allVertexAttribs=this._allVertexAttribs(this._vertices);allVertexAttribs.forEach(attribName=>{let thisLength=this._vertices[attribName].length;let allGeomLength=0;geometrys.forEach(geometry=>{allGeomLength+=geometry._vertices[attribName].length;});typedArrayDic[attribName]=new Float32Array(thisLength+allGeomLength);});let lastThisLengthDic={};allVertexAttribs.forEach(attribName=>{lastThisLengthDic[attribName]=0;});geometrys.forEach((geometry,index)=>{let typedSubArrayDic={};allVertexAttribs.forEach(attribName=>{let typedArray=typedArrayDic[attribName];if(index===0){lastThisLengthDic[attribName]=geometrys[index]._vertices[attribName].length;}
let end=typeof geometrys[index+1]!=="undefined"?lastThisLengthDic[attribName]+
geometrys[index+1]._vertices[attribName].length:void 0;typedSubArrayDic[attribName]=typedArray.subarray(0,end);lastThisLengthDic[attribName]=end;});this.mergeInner(geometry,typedSubArrayDic,index===0);});}else{let geometry=geometrys;let typedArrayDic={};let allVertexAttribs=this._allVertexAttribs(this._vertices);allVertexAttribs.forEach(attribName=>{let thisLength=this._vertices[attribName].length;let geomLength=geometry._vertices[attribName].length;typedArrayDic[attribName]=new Float32Array(thisLength+geomLength);});this.mergeInner(geometry,typedArrayDic);}}
mergeInner(geometry,typedArrayDic,isFirst=false){let gl=this._glContext.gl;let baseLen=this._vertices.position.length/this._vertices.components.position;if(this===geometry){console.assert("don't merge same geometry!");}
let allVertexAttribs=this._allVertexAttribs(this._vertices);allVertexAttribs.forEach(attribName=>{let thisLength=this._vertices[attribName].length;let geomLength=geometry._vertices[attribName].length;let float32array=typedArrayDic[attribName];if(isFirst){float32array.set(this._vertices[attribName],0);}
float32array.set(geometry._vertices[attribName],thisLength);this._vertices[attribName]=float32array;if(typeof this._vboObj[attribName]!=="undefined"){gl.bindBuffer(gl.ARRAY_BUFFER,this._vboObj[attribName]);gl.bufferData(gl.ARRAY_BUFFER,this._vertices[attribName],this._performanceHint);gl.bindBuffer(gl.ARRAY_BUFFER,null);}});let geometryIndicesN=geometry._indicesArray.length;for(let i=0;i<geometryIndicesN;i++){for(let j=0;j<geometry._indicesArray[i].length;j++){geometry._indicesArray[i][j]+=baseLen;}
this._indicesArray.push(geometry._indicesArray[i]);if(geometry._materials[i]){this._materials.push(geometry._materials[i]);}}
this._vertexN+=geometry._vertexN;}
mergeHarder(geometrys){if(Array.isArray(geometrys)){let typedArrayDic={};let allVertexAttribs=this._allVertexAttribs(this._vertices);allVertexAttribs.forEach(attribName=>{let thisLength=this._vertices[attribName].length;let allGeomLength=0;geometrys.forEach(geometry=>{allGeomLength+=geometry._vertices[attribName].length;});typedArrayDic[attribName]=new Float32Array(thisLength+allGeomLength);});let lastThisLengthDic={};allVertexAttribs.forEach(attribName=>{lastThisLengthDic[attribName]=0;});geometrys.forEach((geometry,index)=>{let typedSubArrayDic={};allVertexAttribs.forEach(attribName=>{let typedArray=typedArrayDic[attribName];if(index===0){lastThisLengthDic[attribName]=geometrys[index]._vertices[attribName].length;}
let end=typeof geometrys[index+1]!=="undefined"?lastThisLengthDic[attribName]+
geometrys[index+1]._vertices[attribName].length:void 0;typedSubArrayDic[attribName]=typedArray.subarray(0,end);lastThisLengthDic[attribName]=end;});this.mergeHarderInner(geometry,typedSubArrayDic,index===0);});}else{let geometry=geometrys;let typedArrayDic={};let allVertexAttribs=this._allVertexAttribs(this._vertices);allVertexAttribs.forEach(attribName=>{let thisLength=this._vertices[attribName].length;let geomLength=geometry._vertices[attribName].length;typedArrayDic[attribName]=new Float32Array(thisLength+geomLength);});this.mergeHarderInner(geometry,typedArrayDic);}}
mergeHarderInner(geometry,typedArrayDic,isFirst=false){let gl=this._glContext.gl;let baseLen=this._vertices.position.length/this._vertices.components.position;if(this===geometry){console.assert("don't merge same geometry!");}
let allVertexAttribs=this._allVertexAttribs(this._vertices);allVertexAttribs.forEach(attribName=>{let thisLength=this._vertices[attribName].length;let geomLength=geometry._vertices[attribName].length;let float32array=typedArrayDic[attribName];if(isFirst){float32array.set(this._vertices[attribName],0);}
float32array.set(geometry._vertices[attribName],thisLength);this._vertices[attribName]=float32array;if(typeof this._vboObj[attribName]!=="undefined"){gl.bindBuffer(gl.ARRAY_BUFFER,this._vboObj[attribName]);gl.bufferData(gl.ARRAY_BUFFER,this._vertices[attribName],this._performanceHint);gl.bindBuffer(gl.ARRAY_BUFFER,null);}});for(let i=0;i<this._indicesArray.length;i++){let len=geometry._indicesArray[i].length;for(let j=0;j<len;j++){let idx=geometry._indicesArray[i][j];this._indicesArray[i].push(baseLen+idx);}
if(this._materials[i]){this._materials[i].setVertexN(this,this._materials[i].getVertexN(geometry));}}
this._vertexN+=geometry._vertexN;}
set materials(materials){this._materials=materials;}
get materials(){return this._materials;}
get centerPosition(){return this._AABB.centerPoint;}
setExtraDataForShader(name,value){this._extraDataForShader[name]=value;}
getExtraDataForShader(name){return this._extraDataForShader[name];}
isTransparent(mesh){let materials=this._getAppropriateMaterials(mesh);let isTransparent=false;materials.forEach(material=>{if(material.isTransparent()){isTransparent=true;}});return isTransparent;}
get AABB(){return this._AABB;}
get rawAABB(){return this._AABB;}
isIndexed(){return!!Geometry._iboArrayDic[this.toString()];}
getTriangleCount(mesh){let gl=this._glContext.gl;let materials=this._getAppropriateMaterials(mesh);let count=0;for(let i=0;i<materials.length;i++){let material=materials[i];if(this._primitiveType===gl.TRIANGLES){if(this.isIndexed()){count+=material.getVertexN(this.toString())/3;}else{count+=this._vertexN/3;}}else if(this._primitiveType===gl.TRIANGLE_STRIP){if(this.isIndexed()){count+=material.getVertexN(this.toString())-2;}else{count+=this._vertexN-2;}}}
return count;}
getVertexCount(){let gl=this._glContext.gl;let count=0;if(this._vertices){count=this._vertices.position.length;}
return count;}
rayCast(origVec3,dirVec3,isFrontFacePickable,isBackFacePickable,dotThreshold){let currentShortestT=Number.MAX_VALUE;let currentShortestIntersectedPosVec3=null;const positionElementNumPerVertex=this._vertices.components.position;let incrementNum=3;if(this._primitiveType===GLBoost$1.TRIANGLE_STRIP){incrementNum=1;}
if(!this._indicesArray){for(let i=0;i<vertexNum;i++){const j=i*incrementNum;let pos0IndexBase=j*positionElementNumPerVertex;let pos1IndexBase=(j+1)*positionElementNumPerVertex;let pos2IndexBase=(j+2)*positionElementNumPerVertex;const result=this._rayCastInner(origVec3,dirVec3,j,pos0IndexBase,pos1IndexBase,pos2IndexBase,isFrontFacePickable,isBackFacePickable,dotThreshold);if(result===null){continue;}
const t=result[0];if(result[0]<currentShortestT){currentShortestT=t;currentShortestIntersectedPosVec3=result[1];}}}else{for(let i=0;i<this._indicesArray.length;i++){let vertexIndices=this._indicesArray[i];for(let j=0;j<vertexIndices.length;j++){const k=j*incrementNum;let pos0IndexBase=vertexIndices[k]*positionElementNumPerVertex;let pos1IndexBase=vertexIndices[k+1]*positionElementNumPerVertex;let pos2IndexBase=vertexIndices[k+2]*positionElementNumPerVertex;if(vertexIndices[k+2]===void 0){break;}
const result=this._rayCastInner(origVec3,dirVec3,vertexIndices[k],pos0IndexBase,pos1IndexBase,pos2IndexBase,isFrontFacePickable,isBackFacePickable,dotThreshold);if(result===null){continue;}
const t=result[0];if(result[0]<currentShortestT){currentShortestT=t;currentShortestIntersectedPosVec3=result[1];}}}}
return[currentShortestIntersectedPosVec3,currentShortestT];}
_rayCastInner(origVec3,dirVec3,i,pos0IndexBase,pos1IndexBase,pos2IndexBase,isFrontFacePickable,isBackFacePickable,dotThreshold){if(!this._vertices.arenberg3rdPosition[i]){return null;}
const faceNormal=this._vertices.faceNormal[i];if(faceNormal.dotProduct(dirVec3)<dotThreshold&&!isFrontFacePickable){return null;}
if(faceNormal.dotProduct(dirVec3)>-dotThreshold&&!isBackFacePickable){return null;}
const vec3=Vector3.subtract(origVec3,this._vertices.arenberg3rdPosition[i]);const convertedOrigVec3=this._vertices.inverseArenbergMatrix[i].multiplyVector(vec3);const convertedDirVec3=this._vertices.inverseArenbergMatrix[i].multiplyVector(dirVec3);if(convertedDirVec3.z>=-1e-6&&convertedDirVec3.z<=1e-6){return null;}
const t=-convertedOrigVec3.z/convertedDirVec3.z;if(t<=1e-5){return null;}
const u=convertedOrigVec3.x+t*convertedDirVec3.x;const v=convertedOrigVec3.y+t*convertedDirVec3.y;if(u<0.0||v<0.0||u+v>1.0){return null;}
const fDat=1.0-u-v;const pos0Vec3=new Vector3(this._vertices.position[pos0IndexBase],this._vertices.position[pos0IndexBase+1],this._vertices.position[pos0IndexBase+2]);const pos1Vec3=new Vector3(this._vertices.position[pos1IndexBase],this._vertices.position[pos1IndexBase+1],this._vertices.position[pos1IndexBase+2]);const pos2Vec3=new Vector3(this._vertices.position[pos2IndexBase],this._vertices.position[pos2IndexBase+1],this._vertices.position[pos2IndexBase+2]);const pos0=Vector3.multiply(pos0Vec3,u);const pos1=Vector3.multiply(pos1Vec3,v);const pos2=Vector3.multiply(pos2Vec3,fDat);const intersectedPosVec3=Vector3.add(Vector3.add(pos0,pos1),pos2);return[t,intersectedPosVec3];}
_calcArenbergInverseMatrices(primitiveType){const positionElementNumPerVertex=this._vertices.components.position;let incrementNum=3;if(primitiveType===GLBoost$1.TRIANGLE_STRIP){incrementNum=1;}
this._vertices.inverseArenbergMatrix=[];this._vertices.arenberg3rdPosition=[];this._vertices.faceNormal=[];if(!this._indicesArray){for(let i=0;i<this._vertexN-2;i+=incrementNum){let pos0IndexBase=i*positionElementNumPerVertex;let pos1IndexBase=(i+1)*positionElementNumPerVertex;let pos2IndexBase=(i+2)*positionElementNumPerVertex;this._calcArenbergMatrixFor3Vertices(null,i,pos0IndexBase,pos1IndexBase,pos2IndexBase,incrementNum);}}else{for(let i=0;i<this._indicesArray.length;i++){let vertexIndices=this._indicesArray[i];for(let j=0;j<vertexIndices.length-2;j+=incrementNum){let pos0IndexBase=vertexIndices[j]*positionElementNumPerVertex;let pos1IndexBase=vertexIndices[j+1]*positionElementNumPerVertex;let pos2IndexBase=vertexIndices[j+2]*positionElementNumPerVertex;if(vertexIndices[j+2]===void 0){break;}
this._calcArenbergMatrixFor3Vertices(vertexIndices,j,pos0IndexBase,pos1IndexBase,pos2IndexBase,incrementNum);}}}}
_calcArenbergMatrixFor3Vertices(vertexIndices,i,pos0IndexBase,pos1IndexBase,pos2IndexBase,incrementNum){const pos0Vec3=new Vector3(this._vertices.position[pos0IndexBase],this._vertices.position[pos0IndexBase+1],this._vertices.position[pos0IndexBase+2]);const pos1Vec3=new Vector3(this._vertices.position[pos1IndexBase],this._vertices.position[pos1IndexBase+1],this._vertices.position[pos1IndexBase+2]);const pos2Vec3=new Vector3(this._vertices.position[pos2IndexBase],this._vertices.position[pos2IndexBase+1],this._vertices.position[pos2IndexBase+2]);const ax=pos0Vec3.x-pos2Vec3.x;const ay=pos0Vec3.y-pos2Vec3.y;const az=pos0Vec3.z-pos2Vec3.z;const bx=pos1Vec3.x-pos2Vec3.x;const by=pos1Vec3.y-pos2Vec3.y;const bz=pos1Vec3.z-pos2Vec3.z;let nx=ay*bz-az*by;let ny=az*bx-ax*bz;let nz=ax*by-ay*bx;let da=Math.sqrt(nx*nx+ny*ny+nz*nz);if(da<=1e-6){return 0;}
da=1.0/da;nx*=da;ny*=da;nz*=da;const arenbergMatrix=new Matrix33(pos0Vec3.x-pos2Vec3.x,pos1Vec3.x-pos2Vec3.x,nx-pos2Vec3.x,pos0Vec3.y-pos2Vec3.y,pos1Vec3.y-pos2Vec3.y,ny-pos2Vec3.y,pos0Vec3.z-pos2Vec3.z,pos1Vec3.z-pos2Vec3.z,nz-pos2Vec3.z);const inverseArenbergMatrix=arenbergMatrix.invert();let arenberg0IndexBase=i;let arenberg1IndexBase=i+1;let arenberg2IndexBase=i+2;if(vertexIndices){arenberg0IndexBase=vertexIndices[i];arenberg1IndexBase=vertexIndices[i+1];arenberg2IndexBase=vertexIndices[i+2];}
this._vertices.inverseArenbergMatrix[arenberg0IndexBase]=inverseArenbergMatrix;this._vertices.arenberg3rdPosition[arenberg0IndexBase]=pos2Vec3;this._vertices.faceNormal[arenberg0IndexBase]=new Vector3(nx,ny,nz);}}
Geometry._vaoDic={};Geometry._iboArrayDic={};class BlendShapeShaderSource{VSDefine_BlendShapeShaderSource(in_,out_,f){var shaderText='';f.forEach((attribName)=>{if(this.BlendShapeShaderSource_isShapeTarget(attribName)){shaderText+=`${in_} vec3 aVertex_${attribName};\n`;shaderText+='uniform float blendWeight_'+attribName+';\n';}});return shaderText;}
VSTransform_BlendShapeShaderSource(existCamera_f,f,lights,material,extraData){var shaderText='';var numOfShapeTargets=this.BlendShapeShaderSource_numberOfShapeTargets(f);shaderText+='    vec3 blendedPosition = aVertex_position;\n';f.forEach((attribName)=>{if(this.BlendShapeShaderSource_isShapeTarget(attribName)){shaderText+='blendedPosition += (aVertex_'+attribName+' - aVertex_position) * blendWeight_'+attribName+';\n';}});if(existCamera_f){shaderText+='  gl_Position = pvwMatrix * vec4(blendedPosition, 1.0);\n';}else{shaderText+='  gl_Position = vec4(blendedPosition, 1.0);\n';}
return shaderText;}
prepare_BlendShapeShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];vertexAttribs.forEach((attribName)=>{if(this.BlendShapeShaderSource_isShapeTarget(attribName)){vertexAttribsAsResult.push(attribName);shaderProgram['vertexAttribute_'+attribName]=gl.getAttribLocation(shaderProgram,'aVertex_'+attribName);gl.enableVertexAttribArray(shaderProgram['vertexAttribute_'+attribName]);}});vertexAttribs.forEach((attribName)=>{if(this.BlendShapeShaderSource_isShapeTarget(attribName)){material['uniform_FloatSampler_blendWeight_'+attribName]=this._glContext.getUniformLocation(shaderProgram,'blendWeight_'+attribName);this._glContext.uniform1f(material['uniform_FloatSampler_blendWeight_'+attribName],0.0,true);}});return vertexAttribsAsResult;}
BlendShapeShaderSource_isShapeTarget(attribName){return!Shader._exist(attribName,GLBoost.POSITION)&&!Shader._exist(attribName,GLBoost.COLOR)&&!Shader._exist(attribName,GLBoost.TEXCOORD);}
BlendShapeShaderSource_numberOfShapeTargets(attributes){var count=0;attributes.forEach((attribName)=>{if(this.BlendShapeShaderSource_isShapeTarget(attribName)){count+=1;}});return count;}}
class BlendShapeGeometry extends Geometry{constructor(glBoostContext){super(glBoostContext);this._blendWeight_1=0.0;this._blendWeight_2=0.0;this._blendWeight_3=0.0;this._blendWeight_4=0.0;this._blendWeight_5=0.0;this._blendWeight_6=0.0;this._blendWeight_7=0.0;this._blendWeight_8=0.0;this._blendWeight_9=0.0;this._blendWeight_10=0.0;this._currentRenderPassIndex=0;this._materialForBlend=null;}
draw(data){this._currentRenderPassIndex=data.renderPass_index;super.draw({expression:data.expression,lights:data.lights,camera:data.camera,mesh:data.mesh,scene:data.scene,renderPassIndex:data.renderPassIndex,viewport:data.viewport,isWebVRMode:data.isWebVRMode,webvrFrameData:data.webvrFrameData});}
prepareToRender(expression,existCamera_f,pointLight,meshMaterial,mesh){if(meshMaterial){this._materialForBlend=meshMaterial;}else{this._materialForBlend=this._defaultMaterial;}
class BlendShapeShader extends this._materialForBlend.shaderClass{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);BlendShapeShader.mixin(BlendShapeShaderSource);}}
this._materialForBlend.shaderClass=BlendShapeShader;super.prepareToRender(expression,existCamera_f,pointLight,meshMaterial,mesh);}
_setBlendWeightToGlslProgram(blendTargetNumber,weight){let blendTarget=GLBoost$1.getValueOfGLBoostConstant(blendTargetNumber);let materials=[this._materialForBlend];for(let i=0;i<materials.length;i++){this._glContext.useProgram(materials[i].shaderInstance.glslProgram);this._glContext.uniform1f(materials[i]['uniform_FloatSampler_blendWeight_'+blendTarget],weight,true);}}
set blendWeight_1(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET1,weight);this._glContext.useProgram(currentProgram);this._blendWeight_1=weight;}
get blendWeight_1(){return this._blendWeight_1;}
set blendWeight_2(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET2,weight);this._glContext.useProgram(currentProgram);this._blendWeight_2=weight;}
get blendWeight_2(){return this._blendWeight_2;}
set blendWeight_3(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET3,weight);this._glContext.useProgram(currentProgram);this._blendWeight_3=weight;}
get blendWeight_3(){return this._blendWeight_3;}
set blendWeight_4(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET4,weight);this._glContext.useProgram(currentProgram);this._blendWeight_4=weight;}
get blendWeight_4(){return this._blendWeight_4;}
set blendWeight_5(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET5,weight);this._glContext.useProgram(currentProgram);this._blendWeight_5=weight;}
get blendWeight_5(){return this._blendWeight_5;}
set blendWeight_6(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET6,weight);this._glContext.useProgram(currentProgram);this._blendWeight_6=weight;}
get blendWeight_6(){return this._blendWeight_6;}
set blendWeight_7(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET7,weight);this._glContext.useProgram(currentProgram);this._blendWeight_7=weight;}
get blendWeight_7(){return this._blendWeight_7;}
set blendWeight_8(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET8,weight);this._glContext.useProgram(currentProgram);this._blendWeight_8=weight;}
get blendWeight_8(){return this._blendWeight_8;}
set blendWeight_9(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET9,weight);this._glContext.useProgram(currentProgram);this._blendWeight_9=weight;}
get blendWeight_9(){return this._blendWeight_9;}
set blendWeight_10(weight){var gl=this._glContext.gl;var currentProgram=gl.getParameter(gl.CURRENT_PROGRAM);this._setBlendWeightToGlslProgram(GLBoost$1.BLENDTARGET10,weight);this._glContext.useProgram(currentProgram);this._blendWeight_10=weight;}
get blendWeight_10(){return this._blendWeight_10;}}
GLBoost$1['BlendShapeGeometry']=BlendShapeGeometry;class AbstractTexture extends GLBoostObject{constructor(glBoostContext){super(glBoostContext);if(this.constructor===AbstractTexture){throw new TypeError('Cannot construct AbstractTexture instances directly.');}
this._textureUnitIndex=0;this._uvTransform=new Vector4$1(1,1,0,0);this._toMultiplyAlphaToColorPreviously=false;}
get glTextureResource(){return this._texture;}
setUp(textureUnitIndex){var gl=this._glContext.gl;if(this._texture===null){return false;}
var index=!(typeof textureUnitIndex==='undefined')?textureUnitIndex:this._textureUnitIndex;gl.activeTexture(gl.TEXTURE0+index);if(this.className.indexOf('Cube')!==-1){gl.bindTexture(gl.TEXTURE_CUBE_MAP,this._texture);}else{gl.bindTexture(gl.TEXTURE_2D,this._texture);}
this.updateTexture();return true;}
tearDown(textureUnitIndex){var gl=this._glContext.gl;var index=!(typeof textureUnitIndex==='undefined')?textureUnitIndex:this._textureUnitIndex;gl.activeTexture(gl.TEXTURE0+index);if(this.className.indexOf('Cube')!==-1){gl.bindTexture(gl.TEXTURE_CUBE_MAP,null);}else{gl.bindTexture(gl.TEXTURE_2D,null);}}
get width(){return this._width;}
get height(){return this._height;}
set textureUnitIndex(index){this._textureUnitIndex=index;}
get textureUnitIndex(){return this._textureUnitIndex;}
getTexturePixelData(){let gl=this._glContext.gl;let framebuffer=this._glContext.createFramebuffer(this);gl.bindFramebuffer(gl.FRAMEBUFFER,framebuffer);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this._texture,0);let data=new Uint8Array(this.width*this.height*4);gl.readPixels(0,0,this.width,this.height,gl.RGBA,gl.UNSIGNED_BYTE,data);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return data;}
getPixelValueAt(x,y,argByteArray){let byteArray=argByteArray;if(!byteArray){byteArray=this.getTexturePixelData();}
let color=new Vector4$1(byteArray[(y*this.width+x)*4+0],byteArray[(y*this.width+x)*4+1],byteArray[(y*this.width+x)*4+2],byteArray[(y*this.width+x)*4+3]);return color;}
_getResizedCanvas(image){var canvas=document.createElement("canvas");canvas.width=this._getNearestPowerOfTwo(image.width);canvas.height=this._getNearestPowerOfTwo(image.height);var ctx=canvas.getContext("2d");ctx.drawImage(image,0,0,canvas.width,canvas.height);return canvas;}
_isPowerOfTwo(x){return(x&(x-1))==0;}
_isPowerOfTwoTexture(){return this._isPowerOfTwo(this.width)&&this._isPowerOfTwo(this.height);}
_getNearestPowerOfTwo(x){return Math.pow(2,Math.round(Math.log(x)/Math.LN2));}
readyForDiscard(){if(this._texture){this._glContext.deleteTexture(this,this._texture);}
if(this.fbo){for(let texture of this.fbo._glboostTextures){this.fbo._glboostTextures=this.fbo._glboostTextures.filter(function(v,i){return(v!==this);});}
if(this.fbo._glboostTextures.length===0){this._glContext.deleteFramebuffer(this._glBoostContext,this.fbo);this._glContext.deleteFramebuffer(this._glBoostContext,this.fbo);if(this.fbo.renderBuffer){this._glContext.deleteRenderbuffer(this._glBoostContext,this.fbo.renderBuffer);}}}
super.readyForDiscard();}
get uvTransform(){return this._uvTransform;}
set uvTransform(vec4){this._uvTransform=vec4;}
get toMultiplyAlphaToColorPreviously(){return this._toMultiplyAlphaToColorPreviously;}
set toMultiplyAlphaToColorPreviously(flag){this._toMultiplyAlphaToColorPreviously=flag;}
updateTexture(){}}
GLBoost$1['AbstractTexture']=AbstractTexture;class FragmentSimpleShaderSource{VSTransform_FragmentSimpleShaderSource(existCamera_f,f){var shaderText='';if(existCamera_f){shaderText+='  gl_Position = projectionMatrix * viewMatrix * position_world;\n';}else{shaderText+='  gl_Position = position_world;\n';}
return shaderText;}
FSDefine_FragmentSimpleShaderSource(in_,f){let shaderText='uniform float opacity;\n';shaderText+='uniform bool isNeededToMultiplyAlphaToColorOfPixelOutput;\n';return shaderText;}
FSShade_FragmentSimpleShaderSource(f,gl){let shaderText="";shaderText+=`rt0 = vec4(1.0, 1.0, 1.0, 1.0);\n`;return shaderText;}
FSFinalize_FragmentSimpleShaderSource(f,gl,lights,material,extraData){let shaderText='';shaderText+=`rt0.a *= opacity;\n`;shaderText+='  if (isNeededToMultiplyAlphaToColorOfPixelOutput) {\n';shaderText+='    rt0.rgb *= rt0.a;\n';shaderText+='  }\n';return shaderText;}
prepare_FragmentSimpleShaderSource(gl,glslProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];material.setUniform(glslProgram,'uniform_opacity',this._glContext.getUniformLocation(glslProgram,'opacity'));material.setUniform(glslProgram,'uniform_isNeededToMultiplyAlphaToColorOfPixelOutput',this._glContext.getUniformLocation(glslProgram,'isNeededToMultiplyAlphaToColorOfPixelOutput'));let uniformLocationDepthBias=material.getUniform(glslProgram,'uniform_depthBias');if(uniformLocationDepthBias){let depthBias=this.getShaderParameter(material,'depthBias',false);if(depthBias){this._glContext.uniform1f(uniformLocationDepthBias,depthBias,true);}}
return vertexAttribsAsResult;}}
class FragmentSimpleShader extends Shader{constructor(glBoostContext,basicShader=VertexWorldShaderSource){super(glBoostContext,basicShader);FragmentSimpleShader.mixin(basicShader);FragmentSimpleShader.mixin(FragmentSimpleShaderSource);this._isNeededToMultiplyAlphaToColorOfPixelOutput=null;}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);this._glContext.uniform1i(material.getUniform(glslProgram,'uniform_isNeededToMultiplyAlphaToColorOfPixelOutput'),this._isNeededToMultiplyAlphaToColorOfPixelOutput,true);let AABB=(this._AABB!==null)?this._AABB:mesh.geometry.AABB;let uniformLocationAABBLengthCenterToCorner=material.getUniform(glslProgram,'uniform_AABBLengthCenterToCorner');if(uniformLocationAABBLengthCenterToCorner){this._glContext.uniform1f(uniformLocationAABBLengthCenterToCorner,AABB.lengthCenterToCorner,true);}}
set isNeededToMultiplyAlphaToColorOfPixelOutput(flg){this._isNeededToMultiplyAlphaToColorOfPixelOutput=flg;}
get isNeededToMultiplyAlphaToColorOfPixelOutput(){return this._isNeededToMultiplyAlphaToColorOfPixelOutput;}}
GLBoost['FragmentSimpleShader']=FragmentSimpleShader;class VertexWorldShadowShaderSource{VSDefine_VertexWorldShadowShaderSource(in_,out_,f,lights,material,extraData){var shaderText='';let lightNumExceptAmbient=lights.filter((light)=>{return!light.isTypeAmbient();}).length;return shaderText;}
VSTransform_VertexWorldShadowShaderSource(existCamera_f,f,lights,material,extraData){var shaderText='';let gl=this._glContext.gl;return shaderText;}
FSDefine_VertexWorldShadowShaderSource(in_,f,lights,material,extraData){let shaderText='';shaderText+='uniform float depthBias;\n';let lightNumExceptAmbient=lights.filter((light)=>{return!light.isTypeAmbient();}).length;if(lightNumExceptAmbient>0){shaderText+=`uniform mat4 depthPVMatrix[${lightNumExceptAmbient}];\n`;}
return shaderText;}
FSShade_VertexWorldShadowShaderSource(f,gl,lights){let shaderText='';shaderText+='float visibilityLevel = 1.0;\n';if(lights.length>0){shaderText+=`    vec4 shadowCoord[${lights.length}];\n`;}
for(let i=0;i<lights.length;i++){shaderText+=`  { // ${i}\n`;shaderText+=`    shadowCoord[${i}] = depthPVMatrix[${i}] * vec4(v_position_world, 1.0); // ${i}\n`;shaderText+=`    shadowCoord[${i}].xyz *= 0.5; // ${i}\n`;shaderText+=`    shadowCoord[${i}].xyz += 0.5; // ${i}\n`;shaderText+=`  } // ${i}\n`;}
return shaderText;}
FSPostEffect_VertexWorldShadowShaderSource(f,gl,lights,material,extraData){let shaderText='';return shaderText;}
prepare_VertexWorldShadowShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];vertexAttribs.forEach((attribName)=>{if(attribName==='position'||attribName==='normal'){shaderProgram['vertexAttribute_'+attribName]=gl.getAttribLocation(shaderProgram,'aVertex_'+attribName);if(shaderProgram['vertexAttribute_'+attribName]!==-1){gl.enableVertexAttribArray(shaderProgram['vertexAttribute_'+attribName]);vertexAttribsAsResult.push(attribName);}}});for(let i=0;i<lights.length;i++){let light=lights[i];material.setUniform(shaderProgram,'uniform_isShadowCasting'+i,this._glContext.getUniformLocation(shaderProgram,'isShadowCasting['+i+']'));if(light.camera&&light.camera.texture){let depthTextureUniformLocation=this._glContext.getUniformLocation(shaderProgram,`uDepthTexture[${i}]`);material.setUniform(shaderProgram,'uniform_DepthTextureSampler_'+i,depthTextureUniformLocation);const index=i+material.getTextureNumAttachedShader();lights[i].camera.texture.textureUnitIndex=index;}}
let uniform_depthBias=this._glContext.getUniformLocation(shaderProgram,'depthBias');material.setUniform(shaderProgram,'uniform_depthBias',uniform_depthBias);this._glContext.uniform1f(uniform_depthBias,0.005,true);for(let i=0;i<lights.length;i++){const light_i=i;material.setUniform(shaderProgram,'uniform_depthPVMatrix_'+light_i,this._glContext.getUniformLocation(shaderProgram,'depthPVMatrix['+light_i+']'));}
return vertexAttribsAsResult;}}
GLBoost['VertexWorldShadowShaderSource']=VertexWorldShadowShaderSource;class WireframeShaderSource{VSDefine_WireframeShaderSource(in_,out_,f){var shaderText='';shaderText+=`${in_} vec3 aVertex_barycentricCoord;\n`;shaderText+=`${out_} vec3 barycentricCoord;\n`;if(Shader._exist(f,GLBoost.TEXCOORD)){shaderText+='uniform vec4 AABBCenterPositionAndRatio;\n';}
return shaderText;}
VSTransform_WireframeShaderSource(existCamera_f,f){var shaderText='';shaderText+='  vec4 interpolatedPosition_world = position_world;\n';shaderText+='  gl_Position = position_world;\n';if(Shader._exist(f,GLBoost.TEXCOORD)){shaderText+='  vec3 AABBCenterPosition = AABBCenterPositionAndRatio.xyz;\n';shaderText+='  float unfoldUVRatio = AABBCenterPositionAndRatio.w;\n';shaderText+='  vec2 uvScaled = vec2((aVertex_texcoord-0.5)*AABBLengthCenterToCorner*2.0);\n';shaderText+='  uvScaled.y = - uvScaled.y;\n';shaderText+='  vec4 uvPosition = vec4(uvScaled + AABBCenterPosition.xy, AABBCenterPosition.z, 1.0);\n';shaderText+='  interpolatedPosition_world = uvPosition * unfoldUVRatio + position_world * (1.0-unfoldUVRatio);\n';}
if(existCamera_f){shaderText+='  mat4 pvMatrix = projectionMatrix * viewMatrix;\n';shaderText+='  gl_Position = pvMatrix * interpolatedPosition_world;\n';}
shaderText+='  barycentricCoord = aVertex_barycentricCoord;\n';return shaderText;}
FSDefine_WireframeShaderSource(in_,f,lights,material,extraData){let shaderText='';shaderText+=`${in_} vec3 barycentricCoord;\n`;shaderText+='uniform bool isWireframe;\n';shaderText+='uniform float wireframeWidth;\n';return shaderText;}
FSMethodDefine_WireframeShaderSource(f,lights,material,extraData){let shaderText='';shaderText+=`
    float edge_ratio(vec3 bary3, float wireframeWidthInner, float wireframeWidthRelativeScale) {     
        vec3 d = fwidth(bary3);
        vec3 x = bary3+vec3(1.0 - wireframeWidthInner)*d;
        vec3 a3 = smoothstep(vec3(0.0), d, x);
        float factor = min(min(a3.x, a3.y), a3.z);
        
        return clamp((1.0 - factor), 0.0, 1.0);
    }
    `;return shaderText;}
FSShade_WireframeShaderSource(f,gl,lights,material,extraData){let shaderText='';shaderText+='bool isWireframeInner = false;\n';shaderText+='float wireframeWidthRelativeScale = 1.0;\n';return shaderText;}
FSPostEffect_WireframeShaderSource(f,gl,lights,material,extraData){let shaderText='';shaderText+='float wireframeWidthInner = wireframeWidth;\n';shaderText+='float threshold = 0.001;\n';shaderText+='vec4 wireframeResult = rt0;\n';shaderText+='if ( isWireframeInner || isWireframe ) {\n';shaderText+='  vec4 wireframeColor = vec4(0.2, 0.75, 0.0, 1.0);\n';shaderText+='  float edgeRatio = edge_ratio(barycentricCoord, wireframeWidthInner, wireframeWidthRelativeScale);\n';shaderText+='  float edgeRatioModified = mix(step(0.001, edgeRatio), clamp(edgeRatio*4.0, 0.0, 1.0), wireframeWidthInner / wireframeWidthRelativeScale/4.0);\n';shaderText+='  wireframeResult.rgb = wireframeColor.rgb * edgeRatioModified + rt0.rgb * (1.0 - edgeRatioModified);\n';shaderText+='  wireframeResult.a = max(rt0.a, wireframeColor.a * mix(edgeRatioModified, pow(edgeRatioModified, 100.0), wireframeWidthInner / wireframeWidthRelativeScale/1.0));\n';shaderText+='}\n';shaderText+='if ( isWireframe ) {\n';shaderText+='  rt0 = wireframeResult;\n';shaderText+='  if (rt0.a == 0.0) {\n';shaderText+='    discard;\n';shaderText+='  }\n';shaderText+='}\n';return shaderText;}
prepare_WireframeShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];shaderProgram['vertexAttribute_barycentricCoord']=gl.getAttribLocation(shaderProgram,'aVertex_barycentricCoord');gl.enableVertexAttribArray(shaderProgram['vertexAttribute_barycentricCoord']);vertexAttribsAsResult.push('barycentricCoord');let uniform_isWireframe=material._glContext.getUniformLocation(shaderProgram,'isWireframe');material.setUniform(shaderProgram,'uniform_isWireframe',uniform_isWireframe);this._glContext.uniform1i(uniform_isWireframe,0,true);let uniform_wireframeWidth=material._glContext.getUniformLocation(shaderProgram,'wireframeWidth');material.setUniform(shaderProgram,'uniform_wireframeWidth',uniform_wireframeWidth);this._glContext.uniform1f(uniform_wireframeWidth,1.0,true);let uniform_wireframeWidthRelativeScale=material._glContext.getUniformLocation(shaderProgram,'wireframeWidthRelativeScale');material.setUniform(shaderProgram,'uniform_wireframeWidthRelativeScale',uniform_wireframeWidthRelativeScale);this._glContext.uniform1f(uniform_wireframeWidthRelativeScale,1.0,true);if(Shader._exist(vertexAttribs,GLBoost.TEXCOORD)){material.setUniform(shaderProgram,'uniform_AABBCenterPositionAndRatio',this._glContext.getUniformLocation(shaderProgram,'AABBCenterPositionAndRatio'));}
return vertexAttribsAsResult;}}
class WireframeShader extends FragmentSimpleShader{constructor(glBoostContext,basicShader=VertexWorldShaderSource){super(glBoostContext);if(basicShader===VertexWorldShaderSource){WireframeShader.mixin(VertexWorldShadowShaderSource);}
WireframeShader.mixin(WireframeShaderSource);this._unfoldUVRatio=void 0;this._AABB=null;}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);let isWifeframe=false;let isWireframeOnShade=false;let wireframeWidth=0.0;let wireframeWidthRelativeScale=0.0;if(typeof material.isWireframe!=='undefined'){isWifeframe=material.isWireframe;isWireframeOnShade=material.isWireframeOnShade;wireframeWidth=material.wireframeWidth;wireframeWidthRelativeScale=material.wireframeWidthRelativeScale;}
let uniformLocationIsWireframe=material.getUniform(glslProgram,'uniform_isWireframe');if(uniformLocationIsWireframe){this._glContext.uniform1i(uniformLocationIsWireframe,isWifeframe,true);}
if(isWifeframe&&!isWireframeOnShade){material._glContext.uniform1f(material.getUniform(glslProgram,'uniform_opacity'),0.0,true);}
let uniformLocationWireframeWidth=material.getUniform(glslProgram,'uniform_wireframeWidth');if(uniformLocationWireframeWidth){this._glContext.uniform1f(uniformLocationWireframeWidth,wireframeWidth,true);}
let uniformLocationWireframeWidthRelativeScale=material.getUniform(glslProgram,'uniform_wireframeWidthRelativeScale');if(uniformLocationWireframeWidthRelativeScale){this._glContext.uniform1f(uniformLocationWireframeWidthRelativeScale,wireframeWidthRelativeScale,true);}
let AABB=(this._AABB!==null)?this._AABB:mesh.geometry.AABB;let uniformLocationAABBCenterPositionAndRatio=material.getUniform(glslProgram,'uniform_AABBCenterPositionAndRatio');if(uniformLocationAABBCenterPositionAndRatio){let unfoldUVRatioParameter=this.getShaderParameter(material,'unfoldUVRatio',0.0);this._glContext.uniform4f(uniformLocationAABBCenterPositionAndRatio,AABB.centerPoint.x,AABB.centerPoint.y,AABB.centerPoint.z,unfoldUVRatioParameter,true);}
super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);let uniformLocationDepthBias=material.getUniform(glslProgram,'uniform_depthBias');if(uniformLocationDepthBias){let depthBias=this.getShaderParameter(material,'depthBias',false);if(depthBias){this._glContext.uniform1f(uniformLocationDepthBias,depthBias,true);}}}
set unfoldUVRatio(value){this._unfoldUVRatio=value;}
get unfoldUVRatio(){return this._unfoldUVRatio;}
set AABB(aabb){this._AABB=aabb;}
get AABB(){return this._AABB;}}
GLBoost['WireframeShader']=WireframeShader;class DecalShaderSource{VSDefine_DecalShaderSource(in_,out_,f){var shaderText="";if(Shader._exist(f,GLBoost$1.COLOR)){shaderText+=`${in_} vec4 aVertex_color;\n`;shaderText+=`${out_} vec4 color;\n`;}
if(Shader._exist(f,GLBoost$1.TEXCOORD)){shaderText+=`${in_} vec2 aVertex_texcoord;\n`;shaderText+=`${out_} vec2 texcoord;\n`;}
return shaderText;}
VSTransform_DecalShaderSource(existCamera_f,f){var shaderText="";if(Shader._exist(f,GLBoost$1.COLOR)){shaderText+="  color = aVertex_color;\n";}
if(Shader._exist(f,GLBoost$1.TEXCOORD)){shaderText+="  texcoord = aVertex_texcoord;\n";}
return shaderText;}
FSDefine_DecalShaderSource(in_,f,lights,material,extraData){var shaderText="";if(Shader._exist(f,GLBoost$1.COLOR)){shaderText+=`${in_} vec4 color;\n`;}
if(Shader._exist(f,GLBoost$1.TEXCOORD)){shaderText+=`${in_} vec2 texcoord;\n\n`;}
if(material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_DIFFUSE)){shaderText+="uniform sampler2D uTexture;\n";}
let normalTexture=material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_NORMAL);if(normalTexture){shaderText+=`uniform highp sampler2D uNormalTexture;\n`;}
shaderText+="uniform vec4 materialBaseColor;\n";shaderText+="uniform int uIsTextureToMultiplyAlphaToColorPreviously;\n";shaderText+="uniform vec2 uAlphaTestParameters;\n";shaderText+="uniform highp ivec4 objectIds;\n";shaderText+="uniform highp vec4 uOutlineColor;\n";return shaderText;}
FSMethodDefine_DecalShaderSource(f,lights,material,extraData){let shaderText="";shaderText+=this._multiplyAlphaToColorOfTexel();return shaderText;}
FSShade_DecalShaderSource(f,gl,lights,material,extraData){var shaderText="";shaderText+=Shader._getNormalStr(gl,material,f);var textureFunc=Shader._texture_func(gl);if(Shader._exist(f,GLBoost$1.COLOR)){shaderText+="  rt0 *= color;\n";}
shaderText+="    rt0 *= materialBaseColor;\n";if(Shader._exist(f,GLBoost$1.TEXCOORD)&&material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_DIFFUSE)){shaderText+=`  rt0 *= multiplyAlphaToColorOfTexel(uTexture, texcoord, uIsTextureToMultiplyAlphaToColorPreviously);\n`;}
if(Shader._exist(f,GLBoost$1.NORMAL)){shaderText+="  normal_world += normal_world * -2.0 * float(objectIds.z);\n";}
return shaderText;}
FSFinalize_DecalShaderSource(f,gl,lights,material,extraData){let shaderText="";shaderText+=`
                     if (uAlphaTestParameters.x > 0.5 && rt0.a < uAlphaTestParameters.y) {
                       discard;
                     }

                    if (float(objectIds.z) > 0.0) {
                      rt0.rgba = uOutlineColor;
                    }
    `;return shaderText;}
prepare_DecalShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];vertexAttribs.forEach(attribName=>{if(attribName==="color"||attribName==="texcoord"){shaderProgram["vertexAttribute_"+attribName]=gl.getAttribLocation(shaderProgram,"aVertex_"+attribName);if(shaderProgram["vertexAttribute_"+attribName]!==-1){gl.enableVertexAttribArray(shaderProgram["vertexAttribute_"+attribName]);vertexAttribsAsResult.push(attribName);}}});material.setUniform(shaderProgram,"uniform_materialBaseColor",this._glContext.getUniformLocation(shaderProgram,"materialBaseColor"));let diffuseTexture=material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_DIFFUSE);if(!diffuseTexture){diffuseTexture=this._glBoostSystem._glBoostContext.defaultDummyTexture;}
if(diffuseTexture.toMultiplyAlphaToColorPreviously){let uIsTextureToMultiplyAlphaToColorPreviously=this._glContext.getUniformLocation(shaderProgram,"uIsTextureToMultiplyAlphaToColorPreviously");material.setUniform(shaderProgram,"uIsTextureToMultiplyAlphaToColorPreviously",uIsTextureToMultiplyAlphaToColorPreviously);}
material.setUniform(shaderProgram,"uniform_alphaTestParameters",this._glContext.getUniformLocation(shaderProgram,"uAlphaTestParameters"));material.setUniform(shaderProgram,"uniform_outlineColor",this._glContext.getUniformLocation(shaderProgram,"uOutlineColor"));material.registerTextureUnitToUniform(GLBoost$1.TEXTURE_PURPOSE_DIFFUSE,shaderProgram,"uTexture");material.registerTextureUnitToUniform(GLBoost$1.TEXTURE_PURPOSE_NORMAL,shaderProgram,"uNormalTexture");return vertexAttribsAsResult;}}
class DecalShader extends WireframeShader{constructor(glBoostContext){super(glBoostContext);DecalShader.mixin(VertexWorldShadowShaderSource);DecalShader.mixin(DecalShaderSource);this._lut=null;}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);let baseColor=null;if(material.className.indexOf("ClassicMaterial")!==-1){baseColor=material.baseColor;}else{baseColor=new Vector4$1(1.0,1.0,1.0,1.0);}
this._glContext.uniform4f(material.getUniform(glslProgram,"uniform_materialBaseColor"),baseColor.x,baseColor.y,baseColor.z,baseColor.w,true);let diffuseTexture=material.getTextureFromPurpose(GLBoost$1.TEXTURE_PURPOSE_DIFFUSE);if(diffuseTexture){material.updateTextureInfo(GLBoost$1.TEXTURE_PURPOSE_DIFFUSE,"uTexture");this._glContext.uniform1i(material.getUniform(glslProgram,"uIsTextureToMultiplyAlphaToColorPreviously"),diffuseTexture.toMultiplyAlphaToColorPreviously,true);}
const alphaCutoff=material.alphaCutoff;const isAlphaTestEnable=material.isAlphaTest;this._glContext.uniform2f(material.getUniform(glslProgram,"uniform_alphaTestParameters"),isAlphaTestEnable?1.0:0.0,alphaCutoff,true);this._glContext.uniform4f(material.getUniform(glslProgram,"uniform_outlineColor"),mesh.outlineColor.x,mesh.outlineColor.y,mesh.outlineColor.z,mesh.outlineColor.w,true);for(let i=0;i<lights.length;i++){if(lights[i].camera&&lights[i].camera.texture){const index=i+material.getTextureNumAttachedShader();lights[i].camera.texture.textureUnitIndex=index;let cameraMatrix=lights[i].camera.lookAtRHMatrix();let viewMatrix=cameraMatrix.clone();let projectionMatrix=lights[i].camera.projectionRHMatrix();this._glContext.uniformMatrix4fv(material.getUniform(glslProgram,"uniform_depthPVMatrix_"+i),false,Matrix44$1.multiply(projectionMatrix,viewMatrix).flatten(),true);}
if(lights[i].camera&&lights[i].camera.texture){this._glContext.uniform1i(material.getUniform(glslProgram,"uniform_isShadowCasting"+i),1,true);}else{this._glContext.uniform1i(material.getUniform(glslProgram,"uniform_isShadowCasting"+i),0,true);}
if(lights[i].camera&&lights[i].camera.texture){let uniformLocation=material.getUniform(glslProgram,"uniform_DepthTextureSampler_"+i);let index=lights[i].camera.texture.textureUnitIndex;this._glContext.uniform1i(uniformLocation,index,true);}}}
setUniformsAsTearDown(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniformsAsTearDown(gl,glslProgram,scene,material,camera,mesh,lights);for(let i=0;i<lights.length;i++){if(lights[i].camera&&lights[i].camera.texture);}}
set lut(lut){this._lut=lut;}
get lut(){return this._lut;}}
GLBoost$1["DecalShader"]=DecalShader;class L_AbstractMaterial extends GLBoostObject{constructor(glBoostContext){super(glBoostContext);if(this.constructor===L_AbstractMaterial){throw new TypeError('Cannot construct L_AbstractMaterial instances directly.');}
this._textureDic={};this._texturePurposeDic=[];this._textureContributionRateDic={};this._gl=this._glContext.gl;this._name='';this._shaderClass=DecalShader;this._shaderInstance=null;this._vertexNofGeometries={};this._states={enable:[],functions:{}};this._shaderUniformLocationsOfExpressions={};this._isVisibleForGeometiesAssginedByThisMaterial=true;this._globalStatesUsage=null;this._shaderParametersForShaderInstance={};this._semanticsDic={};this._textureSemanticsDic={};this._stateFunctionsToReset={"blendColor":[0.0,0.0,0.0,0.0],"blendEquationSeparate":[32774,32774],"blendFuncSeparate":[1,0,1,0],"colorMask":[true,true,true,true],"cullFace":[1029],"depthFunc":[513],"depthMask":[true],"depthRange":[0.0,1.0],"frontFace":[2305],"lineWidth":[1.0],"polygonOffset":[0.0,0.0]};this._isAlphaTestEnable=true;this._alphaCutoff=0.1;this._countOfUpdate=0;}
clone(){var material=new ClassicMaterial(this._glBoostContext);material._shaderClass=this._shaderClass;material._shaderInstance=this._shaderInstance;for(let geom in this._vertexNofGeometries){material._vertexNofGeometries[geom]=this._vertexNofGeometries[geom];}
return material;}
_updateCount(){this._countOfUpdate+=1;}
getUpdateStateString(){return this.toString()+'_updateCount_'+this._countOfUpdate;}
setShaderClassWithForceUpdate(shaderClass){this._shaderClass=shaderClass;if(this._shaderInstance){this._shaderInstance.readyForDiscard();}
this._shaderInstance=null;}
set shaderClass(shaderClass){if(this._shaderClass===shaderClass){return;}
this.setShaderClassWithForceUpdate(shaderClass);}
get shaderClass(){return this._shaderClass;}
set shaderInstance(shaderInstance){this._shaderInstance=shaderInstance;this._updateCount();}
get shaderInstance(){return this._shaderInstance;}
setTexture(texture,purpose){if(!texture){return;}
this._textureDic[texture.userFlavorName]=texture;let _purpose=(typeof purpose!=='undefined'?purpose:GLBoost$1.TEXTURE_PURPOSE_DIFFUSE);this._texturePurposeDic[_purpose]=texture.userFlavorName;texture.purpose=_purpose;this._textureContributionRateDic[texture.userFlavorName]=new Vector4$1(1.0,1.0,1.0,1.0);this._updateCount();}
removeTexture(userFlavorName,discardTexture=true){if(discardTexture){this._textureDic[userFlavorName].readyForDiscard();}
delete this._texturePurposeDic[this._textureDic[userFlavorName].purpose];delete this._textureDic[userFlavorName];delete this._textureContributionRateDic[userFlavorName];this._updateCount();}
setTexturePurpose(userFlavorNameOfTexture,purpose){this._texturePurposeDic[purpose]=userFlavorNameOfTexture;this._updateCount();}
getTexturePurpose(userFlavorNameOfTexture){let hitPurpose=null;for(let purpose in this._texturePurposeDic){if(this._texturePurposeDic[purpose]===userFlavorNameOfTexture){hitPurpose=purpose;}}
return hitPurpose;}
getTexture(userFlavorName){return this._textureDic[userFlavorName];}
getTextureFromPurpose(purpose){let userFlavorName=this._texturePurposeDic[purpose];let texture=this.getTexture(userFlavorName);return texture;}
getOneTexture(){for(let userFlavorName in this._textureDic){return this._textureDic[userFlavorName];}
return null;}
getTextureNum(){let count=0;for(let userFlavorName in this._textureDic){if(this._textureDic[userFlavorName]instanceof AbstractTexture){count+=1;}}
return count;}
getTextures(){return Object.values(this._textureDic);}
getTextureUserFlavorNames(){return Object.keys(this._textureDic);}
setAllTextureContributionRate(rateVec4){for(let userFlavorName in this._textureContributionRateDic){this._textureContributionRateDic[userFlavorName]=rateVec4;}
this._updateCount();}
setTextureContributionRate(textureUserFlavorName,rateVec4){this._textureContributionRateDic[textureUserFlavorName]=rateVec4;this._updateCount();}
getTextureContributionRate(textureUserFlavorName){return this._textureContributionRateDic[textureUserFlavorName];}
hasAnyTextures(){let result=false;for(let userFlavorName in this._textureDic){result=true;}
return result;}
set states(states){if(typeof states.functions==='undefined'){states.functions=this._stateFunctionsToReset;}
this._states.enable=states.enable;if(typeof states.functions!=='undefined'){this._states.functions=states.functions;}
this._updateCount();}
get states(){return this._states;}
isTransparent(){let isTransparent=false;if(this._states){if(this._states.enable){this._states.enable.forEach((state)=>{if(state===3042){isTransparent=true;}});}}
return isTransparent;}
set name(name){this._name=name;this._updateCount();}
get name(){return this._name;}
setVertexN(geom,num){this._vertexNofGeometries[geom]=num;this._updateCount();}
getVertexN(geom){return(typeof this._vertexNofGeometries[geom]==='undefined')?0:this._vertexNofGeometries[geom];}
setUpTexture(textureName,textureUnitIndex){var gl=this._gl;let texture=this.getTexture(textureName);let isCalledWebGLBindTexture=true;if(texture){isCalledWebGLBindTexture=texture.setUp(textureUnitIndex);return isCalledWebGLBindTexture;}else{this._glBoostSystem._glBoostContext.defaultDummyTexture.setUp(textureUnitIndex);isCalledWebGLBindTexture=true;return isCalledWebGLBindTexture;}}
tearDownTexture(textureName,textureUnitIndex){let texture=this.getTexture(textureName);if(texture){texture.tearDown(textureUnitIndex);}}
_setUpMaterialStates(states){let gl=this._gl;if(states){if(states.enable){states.enable.forEach((state)=>{gl.enable(state);});}
if(states.functions){for(let functionName in states.functions){gl[functionName].apply(gl,states.functions[functionName]);}}}}
setUpStates(mesh){let globalStatesUsage=this._glBoostSystem._glBoostContext.globalStatesUsage;if(this._globalStatesUsage){globalStatesUsage=this._globalStatesUsage;}
switch(globalStatesUsage){case GLBoost$1.GLOBAL_STATES_USAGE_DO_NOTHING:break;case GLBoost$1.GLOBAL_STATES_USAGE_IGNORE:this._setUpMaterialStates(this._states);break;case GLBoost$1.GLOBAL_STATES_USAGE_INCLUSIVE:this._glBoostSystem._glBoostContext.reflectGlobalGLState();this._setUpMaterialStates(this._states);break;case GLBoost$1.GLOBAL_STATES_USAGE_EXCLUSIVE:this._glBoostSystem._glBoostContext.reflectGlobalGLState();break;default:break;}
if(mesh.isTransparent||this.isTransparent){this._gl.enable(3042);}}
tearDownStates(){this._glBoostSystem._glBoostContext.disableAllGLState();this._setUpMaterialStates({functions:this._stateFunctionsToReset});}
setUniform(glslProgram,uniformLocationName,uniformLocation){if(!this._shaderUniformLocationsOfExpressions[glslProgram.hashId]){this._shaderUniformLocationsOfExpressions[glslProgram.hashId]={};}
this._shaderUniformLocationsOfExpressions[glslProgram.hashId][uniformLocationName]=uniformLocation;glslProgram['uniform_'+uniformLocationName]=uniformLocationName;if(uniformLocation!=null){uniformLocation.uniformLocationName=uniformLocationName;}
this._updateCount();}
getUniform(glslProgram,uniformLocationName){if(typeof this._shaderUniformLocationsOfExpressions[glslProgram.hashId]!=='undefined'){return this._shaderUniformLocationsOfExpressions[glslProgram.hashId][uniformLocationName];}
return void 0;}
set isVisible(flg){this._isVisibleForGeometiesAssginedByThisMaterial=flg;this._updateCount();}
get isVisible(){return this._isVisibleForGeometiesAssginedByThisMaterial;}
set globalStatesUsage(usage){this._globalStatesUsage=usage;this._updateCount();}
get globalStatesUsage(){return this._globalStatesUsage;}
get shaderParameters(){return this._shaderParametersForShaderInstance;}
set shaderParameters(shaderParameterDic){this._shaderParametersForShaderInstance=shaderParameterDic;}
addSemanticsDic(uniform,uniformName){if(typeof this._semanticsDic[uniform]==='undefined'){this._semanticsDic[uniform]=uniformName;}else if(typeof this._semanticsDic[uniform]==='string'){let tmpSemanticsStr=this._semanticsDic[uniform];this._semanticsDic[uniform]=[];this._semanticsDic[uniform].push(tmpSemanticsStr);this._semanticsDic[uniform].push(uniformName);}else{this._semanticsDic[uniform].push(uniformName);}}
removeSemanticsDic(uniform){delete this._semanticsDic[uniform];}
readyForDiscard(){for(let userFlavorName in this._textureDic){this.removeTexture(userFlavorName,true);}
if(this._shaderInstance){this._shaderInstance.readyForDiscard();}
this._shaderInstance=null;}
registerTextureUnitToUniform(texturePurpose,shaderProgram,uniformName){const texture=this.getTextureFromPurpose(texturePurpose);if(texture!=null){let uTexture=this._glContext.getUniformLocation(shaderProgram,uniformName);let index=Object.keys(this._textureSemanticsDic).indexOf(''+texturePurpose);index=(index!==-1)?index:Object.keys(this._textureSemanticsDic).length;this._glContext.uniform1i(uTexture,index,true);this.setUniform(shaderProgram,uniformName,uTexture);this.uniformTextureSamplerDic[uniformName]={};this.uniformTextureSamplerDic[uniformName].textureUnitIndex=index;this.uniformTextureSamplerDic[uniformName].textureName=texture.userFlavorName;this._textureSemanticsDic[texturePurpose]=uniformName;}}
updateTextureInfo(texturePurpose,uniformName){let texture=this.getTextureFromPurpose(texturePurpose);if(texture!=null){let index=Object.keys(this._textureSemanticsDic).indexOf(''+texturePurpose);index=(index!==-1)?index:Object.keys(this._textureSemanticsDic).length;this.uniformTextureSamplerDic[uniformName]={};this.uniformTextureSamplerDic[uniformName].textureUnitIndex=index;this.uniformTextureSamplerDic[uniformName].textureName=texture.userFlavorName;this._textureSemanticsDic[texturePurpose]=uniformName;}}
getTextureNumAttachedShader(){return Object.keys(this._textureSemanticsDic).length;}
set isAlphaTest(flg){this._isAlphaTestEnable=flg;}
get isAlphaTest(){return this._isAlphaTestEnable;}
set alphaCutoff(value){this._alphaCutoff=value;}
get alphaCutoff(){return this._alphaCutoff;}}
GLBoost$1['L_AbstractMaterial']=L_AbstractMaterial;class ClassicMaterial$1 extends L_AbstractMaterial{constructor(glBoostContext){super(glBoostContext);this._wireframeWidthRelativeScale=1.0;this._baseColor=new Vector4$1(1.0,1.0,1.0,1.0);this._diffuseColor=new Vector4$1(1.0,1.0,1.0,1.0);this._specularColor=new Vector4$1(0.5,0.5,0.5,1.0);this._ambientColor=new Vector4$1(0.25,0.25,0.25,1.0);}
get wireframeWidthRelativeScale(){return this._wireframeWidthRelativeScale;}
clone(){super.clone();material._baseColor=this._baseColor;material._diffuseColor=this._diffuseColor;material._specularColor=this._specularColor;material._ambientColor=this._ambientColor;}
set baseColor(vec){if(!vec){return;}
this._baseColor=vec;this._updateCount();}
get baseColor(){return this._baseColor;}
set diffuseColor(vec){if(!vec){return;}
this._diffuseColor=vec;this._updateCount();}
get diffuseColor(){return this._diffuseColor;}
set specularColor(vec){if(!vec){return;}
this._specularColor=vec;this._updateCount();}
get specularColor(){return this._specularColor;}
set ambientColor(vec){if(!vec){return;}
this._ambientColor=vec;this._updateCount();}
get ambientColor(){return this._ambientColor;}}
GLBoost$1['ClassicMaterial']=ClassicMaterial$1;class PBRPrincipledShaderSource{FSDefine_PBRPrincipledShaderSource(in_,f,lights,material,extraData){let shaderText="";shaderText+="uniform vec2 uMetallicRoughnessFactors;\n";shaderText+="uniform vec3 uBaseColorFactor;\n";shaderText+="uniform vec2 uOcclusionFactors;";shaderText+="uniform vec3 uEmissiveFactor;";shaderText+="uniform sampler2D uMetallicRoughnessTexture;\n";const occlusionTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_OCCLUSION);if(occlusionTexture){shaderText+="uniform sampler2D uOcclusionTexture;\n";}
const emissiveTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_EMISSIVE);if(emissiveTexture){shaderText+="uniform sampler2D uEmissiveTexture;\n";}
const diffuseEnvCubeTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_IBL_DIFFUSE_ENV_CUBE);if(diffuseEnvCubeTexture){shaderText+="uniform sampler2D uBrdfLUTTexture;\n";shaderText+="uniform samplerCube uDiffuseEnvTexture;\n";shaderText+="uniform samplerCube uSpecularEnvTexture;\n";shaderText+="uniform vec3 uIBLParameters;\n";}
shaderText+="uniform vec4 ambient;\n";const sampler2D=this._sampler2DShadow_func();const lightNumExceptAmbient=lights.filter(light=>!light.isTypeAmbient()).length;if(lightNumExceptAmbient>0){shaderText+=`uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;shaderText+=`${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;shaderText+=`uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;}
return shaderText;}
FSMethodDefine_PBRPrincipledShaderSource(f,lights,material,extraData){let shaderText="";shaderText+=`
      const float M_PI = 3.141592653589793;
      const float c_MinRoughness = 0.04;
    `;shaderText+=`
    float angular_n_h(float NH) {
      return acos(NH);
    }
    `;shaderText+=`
    float sqr(float x) {
      return x*x;
    }
    `;shaderText+=`
    float d_phong(float NH, float c1) {
      return pow(
        cos(acos(NH))
        , c1
      );
    }
    `;shaderText+=`
    // GGX NDF
    float d_ggx(float NH, float alphaRoughness) {
      float roughnessSqr = alphaRoughness * alphaRoughness;
      float f = (roughnessSqr - 1.0) * NH * NH + 1.0;
      return roughnessSqr / (M_PI * f * f);
    }
    `;shaderText+=`
    float d_torrance_reiz(float NH, float c3) {
      float CosSquared = NH*NH;
      float TanSquared = (1.0 - CosSquared)/CosSquared;
      //return (1.0/M_PI) * sqr(c3/(CosSquared * (c3*c3 + TanSquared)));  // gamma = 2, aka GGX
      return (1.0/sqrt(M_PI)) * (sqr(c3)/(CosSquared * (c3*c3 + TanSquared))); // gamma = 1, D_Berry
    }
    `;shaderText+=`
    float d_beckmann(float NH, float m) {
      float co = 1.0 / (4.0 * m * m * NH * NH * NH * NH);
      float expx = exp((NH * NH - 1.0) / (m * m * NH * NH));
      return co * expx; 
    }
    `;shaderText+=`
    // the same as glTF WebGL sample
    // https://github.com/KhronosGroup/glTF-WebGL-PBR/blob/88eda8c5358efe03128b72b6c5f5f6e5b6d023e1/shaders/pbr-frag.glsl#L188
    // That is, Unreal Engine based approach, but modified to use alphaRoughness (squared artist's roughness parameter),
    // and based on 'Separable Masking and Shadowing' approximation (propesed by Christophe Schlick)
    // https://www.cs.virginia.edu/~jdl/bib/appearance/analytic%20models/schlick94b.pdf
    float g_shielding(float NL, float NV, float alphaRoughness) {
      float r = alphaRoughness;

      // Local Shadowing using "Schlick-Smith" Masking Function
      float localShadowing = 2.0 * NL / (NL + sqrt(r * r + (1.0 - r * r) * (NL * NL)));
      
      // Local Masking using "Schlick-Smith" Masking Function
      float localMasking = 2.0 * NV / (NV + sqrt(r * r + (1.0 - r * r) * (NV * NV)));
      
      return localShadowing * localMasking;
    }
    `;shaderText+=`
    // The Schlick Approximation to Fresnel
    vec3 fresnel(vec3 f0, float VH) {
      return vec3(f0) + (vec3(1.0) - f0) * pow(1.0 - VH, 5.0);
    }
    `;shaderText+=`
    vec3 cook_torrance_specular_brdf(float NH, float NL, float NV, vec3 F, float alphaRoughness) {    
      float D = d_ggx(NH, alphaRoughness);
      float G = g_shielding(NL, NV, alphaRoughness);
      return vec3(D)*vec3(G)*F/vec3(4.0*NL*NV);
    }
    `;shaderText+=`
    vec3 diffuse_brdf(vec3 albedo)
    {
      return albedo / M_PI;
    }
    `;shaderText+=`
      vec3 srgbToLinear(vec3 srgbColor) {
        return pow(srgbColor, vec3(2.2));
      }
    `;shaderText+=`
    vec3 linearToSrgb(vec3 linearColor) {
      return pow(linearColor, vec3(1.0/2.2));
    }
  `;const diffuseEnvCubeTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_IBL_DIFFUSE_ENV_CUBE);if(diffuseEnvCubeTexture){shaderText+=`
      vec3 IBLContribution(vec3 n, float NV, vec3 reflection, vec3 albedo, vec3 F0, float userRoughness)
      {
        float mipCount = uIBLParameters.x;
        float lod = (userRoughness * mipCount);

        vec3 brdf = srgbToLinear(texture2D(uBrdfLUTTexture, vec2(NV, 1.0 - userRoughness)).rgb);
        vec3 diffuseLight = srgbToLinear(textureCube(uDiffuseEnvTexture, n).rgb);
        `;const gl=this._glBoostSystem._glContext.gl;const lodExt=gl.getExtension("EXT_shader_texture_lod");if(lodExt){shaderText+=`vec3 specularLight = srgbToLinear(textureCubeLodEXT(uSpecularEnvTexture, reflection, lod).rgb);`;}else{shaderText+=`vec3 specularLight = srgbToLinear(textureCube(uSpecularEnvTexture, reflection).rgb);`;}
shaderText+=`
        vec3 diffuse = diffuseLight * albedo;
        vec3 specular = specularLight * (F0 * brdf.x + brdf.y);

        float IBLDiffuseContribution = uIBLParameters.y;
        float IBLSpecularContribution = uIBLParameters.z;
        diffuse *= IBLDiffuseContribution;
        specular *= IBLSpecularContribution;
        return diffuse + specular;
      }
      `;}
return shaderText;}
FSShade_PBRPrincipledShaderSource(f,gl,lights,material,extraData){let shaderText="";shaderText+=`
vec3 surfaceColor = rt0.rgb;
rt0 = vec4(0.0, 0.0, 0.0, rt0.a);

// BaseColor
vec3 baseColor = srgbToLinear(surfaceColor) * uBaseColorFactor.rgb;

// Metallic & Roughness
float userRoughness = uMetallicRoughnessFactors.y;
float metallic = uMetallicRoughnessFactors.x;
`;const metallicRoughnessTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_METALLIC_ROUGHNESS);if(metallicRoughnessTexture){shaderText+=`
vec4 ormTexel = texture2D(uMetallicRoughnessTexture, texcoord);
userRoughness = ormTexel.g * userRoughness;
metallic = ormTexel.b * metallic;
`;}
shaderText+=`
userRoughness = clamp(userRoughness, c_MinRoughness, 1.0);
metallic = clamp(metallic, 0.0, 1.0);
float alphaRoughness = userRoughness * userRoughness;

// F0
vec3 diffuseMatAverageF0 = vec3(0.04);
vec3 F0 = mix(diffuseMatAverageF0, baseColor.rgb, metallic);

// Albedo
vec3 albedo = baseColor.rgb * (vec3(1.0) - diffuseMatAverageF0);
albedo.rgb *= (1.0 - metallic);
`;shaderText+=`    vec3 viewDirection = normalize(viewPosition_world - v_position_world);\n`;shaderText+="    float NV = clamp(dot(normal, viewDirection), 0.001, 1.0);\n";for(let i=0;i<lights.length;i++){const light=lights[i];const isShadowEnabledAsTexture=!!(light.camera&&light.camera.texture);shaderText+=`  {\n`;shaderText+=Shader._generateLightStr(i);shaderText+=`    vec4 incidentLight = spotEffect * lightDiffuse[${i}];\n`;shaderText+=`    incidentLight.rgb *= M_PI;\n`;shaderText+="    vec3 halfVector = normalize(lightDirection + viewDirection);\n";shaderText+="    float VH = clamp(dot(viewDirection, halfVector), 0.0, 1.0);\n";shaderText+="    float LH = clamp(dot(lightDirection, halfVector), 0.0, 1.0);\n";shaderText+="    vec3 F = fresnel(F0, VH);\n";shaderText+=`    vec3 diffuseContrib = (vec3(1.0) - F) * diffuse_brdf(albedo);\n`;shaderText+="    float NL = clamp(dot(normal, lightDirection), 0.001, 1.0);\n";shaderText+="    float NH = clamp(dot(normal, halfVector), 0.0, 1.0);\n";shaderText+=`    vec3 specularContrib = cook_torrance_specular_brdf(NH, NL, NV, F, alphaRoughness);\n`;shaderText+=`    vec3 diffuseAndSpecular = (diffuseContrib + specularContrib) * vec3(NL) * incidentLight.rgb;\n`;shaderText+=Shader._generateShadowingStr(gl,i,isShadowEnabledAsTexture);shaderText+=`    rt0.xyz += diffuseAndSpecular * visibility;\n`;shaderText+=`  }\n`;}
const diffuseEnvCubeTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_IBL_DIFFUSE_ENV_CUBE);if(diffuseEnvCubeTexture){shaderText+=`vec3 reflection = reflect(-viewDirection, normal);\n`;shaderText+="vec3 ibl = IBLContribution(normal, NV, reflection, albedo, F0, userRoughness);\n";}else{shaderText+="vec3 ibl = vec3(0.0, 0.0, 0.0);\n";}
shaderText+="float occlusion = 1.0;\n";const occlusionTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_OCCLUSION);if(occlusionTexture){shaderText+="occlusion = mix(1.0, texture2D(uOcclusionTexture, texcoord).r, uOcclusionFactors.x);\n";}
shaderText+="  float occlusionRateForDirectionalLight = uOcclusionFactors.y;\n";shaderText+="  rt0.xyz = mix(rt0.xyz, rt0.xyz * occlusion, occlusionRateForDirectionalLight);\n";shaderText+="  rt0.xyz += (ambient.xyz + ibl) * occlusion;\n";shaderText+="  vec3 emissive = uEmissiveFactor;\n";const emissiveTexture=material.getTextureFromPurpose(GLBoost.TEXTURE_PURPOSE_EMISSIVE);if(emissiveTexture){shaderText+="emissive *= srgbToLinear(texture2D(uEmissiveTexture, texcoord).xyz);";}
shaderText+="  rt0.xyz += emissive;\n";shaderText+="  rt0.xyz = linearToSrgb(rt0.xyz);\n";return shaderText;}
prepare_PBRPrincipledShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){const vertexAttribsAsResult=[];material.setUniform(shaderProgram,"uniform_BaseColorFactor",this._glContext.getUniformLocation(shaderProgram,"uBaseColorFactor"));material.setUniform(shaderProgram,"uniform_MetallicRoughnessFactors",this._glContext.getUniformLocation(shaderProgram,"uMetallicRoughnessFactors"));material.setUniform(shaderProgram,"uniform_OcclusionFactors",this._glContext.getUniformLocation(shaderProgram,"uOcclusionFactors"));material.setUniform(shaderProgram,"uniform_EmissiveFactor",this._glContext.getUniformLocation(shaderProgram,"uEmissiveFactor"));material.setUniform(shaderProgram,"uniform_IBLParameters",this._glContext.getUniformLocation(shaderProgram,"uIBLParameters"));material.setUniform(shaderProgram,"uniform_ambient",this._glContext.getUniformLocation(shaderProgram,"ambient"));material.setTexture(this._glBoostSystem._glBoostContext.brdfLutTexture,GLBoost.TEXTURE_PURPOSE_BRDF_LUT);material.registerTextureUnitToUniform(GLBoost.TEXTURE_PURPOSE_METALLIC_ROUGHNESS,shaderProgram,"uMetallicRoughnessTexture");material.registerTextureUnitToUniform(GLBoost.TEXTURE_PURPOSE_OCCLUSION,shaderProgram,"uOcclusionTexture");material.registerTextureUnitToUniform(GLBoost.TEXTURE_PURPOSE_EMISSIVE,shaderProgram,"uEmissiveTexture");material.registerTextureUnitToUniform(GLBoost.TEXTURE_PURPOSE_BRDF_LUT,shaderProgram,"uBrdfLUTTexture");material.registerTextureUnitToUniform(GLBoost.TEXTURE_PURPOSE_IBL_DIFFUSE_ENV_CUBE,shaderProgram,"uDiffuseEnvTexture");material.registerTextureUnitToUniform(GLBoost.TEXTURE_PURPOSE_IBL_SPECULAR_ENV_CUBE,shaderProgram,"uSpecularEnvTexture");return vertexAttribsAsResult;}}
class PBRPrincipledShader extends DecalShader{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);PBRPrincipledShader.mixin(PBRPrincipledShaderSource);}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);const baseColor=material.baseColor;const metallic=material.metallic!==void 0?material.metallic:1.0;const roughness=material.roughness!==void 0?material.roughness:0.5;const occlusion=material.occlusion!==void 0?material.occlusion:1.0;const occlusionRateForDirectionalLight=material.occlusionRateForDirectionalLight!==void 0?material.occlusionRateForDirectionalLight:0.2;const emissive=material.emissive!==void 0?material.emissive:Vector3.zero();const IBLSpecularTextureMipmapCount=material.IBLSpecularTextureMipmapCount!==void 0?material.IBLSpecularTextureMipmapCount:9;const IBLDiffuseContribution=material.IBLDiffuseContribution!==void 0?material.IBLDiffuseContribution:0.2;const IBLSpecularContribution=material.IBLSpecularContribution!==void 0?material.IBLSpecularContribution:0.2;this._glContext.uniform2f(material.getUniform(glslProgram,"uniform_MetallicRoughnessFactors"),metallic,roughness,true);this._glContext.uniform3f(material.getUniform(glslProgram,"uniform_BaseColorFactor"),baseColor.x,baseColor.y,baseColor.z,true);this._glContext.uniform2f(material.getUniform(glslProgram,"uniform_OcclusionFactors"),occlusion,occlusionRateForDirectionalLight,true);this._glContext.uniform3f(material.getUniform(glslProgram,"uniform_EmissiveFactor"),emissive.x,emissive.y,emissive.z,true);this._glContext.uniform3f(material.getUniform(glslProgram,"uniform_IBLParameters"),IBLSpecularTextureMipmapCount,IBLDiffuseContribution,IBLSpecularContribution,true);const ambient=Vector4$1.multiplyVector(new Vector4$1(1.0,1.0,1.0,1.0),scene.getAmountOfAmbientLightsIntensity());this._glContext.uniform4f(material.getUniform(glslProgram,"uniform_ambient"),ambient.x,ambient.y,ambient.z,ambient.w,true);}}
GLBoost.PBRPrincipledShader=PBRPrincipledShader;class PBRMetallicRoughnessMaterial extends L_AbstractMaterial{constructor(glBoostSystem){super(glBoostSystem);this._wireframeWidthRelativeScale=1.0;this._baseColorFactor=new Vector3(1.0,1.0,1.0);this._metallicRoughnessFactors=new Vector2(1.0,1.0);this._occlusionFactor=1.0;this._emissiveFactor=new Vector3(0.0,0.0,0.0);this._occlusionRateForDirectionalLight=0.2;this._IBLSpecularTextureMipmapCount=9;this._IBLDiffuseContribution=1.0;this._IBLSpecularContribution=1.0;this._isAlphaTestEnable=false;this._alphaCutoff=0.5;this._shaderClass=PBRPrincipledShader;}
get wireframeWidthRelativeScale(){return this._wireframeWidthRelativeScale;}
set baseColor(val){this._baseColorFactor=val.clone();}
get baseColor(){return this._baseColorFactor.clone();}
set metallic(val){this._metallicRoughnessFactors.x=val;}
get metallic(){return this._metallicRoughnessFactors.x;}
set roughness(val){this._metallicRoughnessFactors.y=val;}
get roughness(){return this._metallicRoughnessFactors.y;}
set emissive(val){this._emissiveFactor=val;}
get emissive(){return this._emissiveFactor;}
set occlusion(val){this._occlusionFactor=val;}
get occlusion(){return this._occlusionFactor;}
set occlusionRateForDirectionalLight(val){this._occlusionRateForDirectionalLight=val;}
get occlusionRateForDirectionalLight(){return this._occlusionRateForDirectionalLight;}
set IBLSpecularTextureMipmapCount(val){this._IBLSpecularTextureMipmapCount=val;}
get IBLSpecularTextureMipmapCount(){return this._IBLSpecularTextureMipmapCount;}
set IBLDiffuseContribution(val){this._IBLDiffuseContribution=val;}
get IBLDiffuseContribution(){return this._IBLDiffuseContribution;}
set IBLSpecularContribution(val){this._IBLSpecularContribution=val;}
get IBLSpecularContribution(){return this._IBLSpecularContribution;}}
GLBoost$1['PBRMetallicRoughnessMaterial']=PBRMetallicRoughnessMaterial;class L_AbstractCamera extends L_Element{constructor(glBoostContext,toRegister,lookat){super(glBoostContext,toRegister);if(this.constructor===L_AbstractCamera){throw new TypeError("Cannot construct AbstractCamera instances directly.");}
this._translate=lookat.eye;this._translateInner=super.translate.clone();this._center=lookat.center;this._up=lookat.up;this._upInner=lookat.up;this._centerInner=this._up.clone();this._cameraController=null;this._dirtyView=true;this._middleLevelCamera=null;}
set cameraController(controller){this._cameraController=controller;if(this._middleLevelCamera!==null){controller.addCamera(this._middleLevelCamera);}else{controller.addCamera(this);}}
get cameraController(){return this._cameraController;}
removeCameraController(controller){this._cameraController=void 0;if(this._middleLevelCamera!==null){controller.removeCamera(this._middleLevelCamera);}else{controller.removeCamera(this);}}
_affectedByCameraController(){if(this._cameraController!=null){let results=this._cameraController.convert(this);this._translateInner=results[0];this._centerInner=results[1];this._upInner=results[2];this._zNearInner=results[3];this._zFarInner=results[4];this._leftInner=results[5];this._rightInner=results[6];this._topInner=results[7];this._bottomInner=results[8];}else{this._translateInner=super.translate.clone();this._centerInner=this._center.clone();this._upInner=this._up.clone();this._zNearInner=this._zNear;this._zFarInner=this._zFar;this._leftInner=this._left;this._rightInner=this._right;this._topInner=this._top;this._bottomInner=this._bottom;}}
get middleLevelCamera(){return this._middleLevelCamera;}
_needUpdateView(withTryingResetOfCameraController=true){if(this._cameraController!=null&&withTryingResetOfCameraController){this._cameraController.tryReset();}
this._dirtyView=true;}
lookAtRHMatrix(){if(this._dirtyView){this._affectedByCameraController();this._viewMatrix=L_AbstractCamera.lookAtRHMatrix(this.translateInner,this.centerInner,this.upInner);this._dirtyView=false;return this._viewMatrix.clone();}else{return this._viewMatrix.clone();}}
static lookAtRHMatrix(eye,center,up){var f=Vector3.normalize(Vector3.subtract(center,eye));var s=Vector3.normalize(Vector3.cross(f,up));var u=Vector3.cross(s,f);return new Matrix44$1(s.x,s.y,s.z,-Vector3.dotProduct(s,eye),u.x,u.y,u.z,-Vector3.dotProduct(u,eye),-f.x,-f.y,-f.z,Vector3.dotProduct(f,eye),0,0,0,1);}
setAsMainCamera(scene){L_AbstractCamera._mainCamera[scene.toString()]=this;}
isMainCamera(scene){return L_AbstractCamera._mainCamera[scene.toString()]===this;}
set translate(vec){super.translate=vec;this._needUpdateView();}
get translate(){return this._translate;}
get translateInner(){return this._translateInner;}
set eye(vec){super.translate=vec;this._needUpdateView();}
get eye(){return this._translate;}
get eyeInner(){return this._translateInner;}
set center(vec){if(this._center.isEqual(vec)){return;}
this._center=vec;this._needUpdateView();}
get center(){return this._center;}
get centerInner(){return this._centerInner;}
set up(vec){if(this._up.isEqual(vec)){return;}
this._up=vec;this._needUpdateView();}
get up(){return this._up;}
get upInner(){return this._upInner;}
set texture(texture){this._texture=texture;}
get texture(){return this._texture;}
get allInfoExceptInnerData(){const info={};info.translate=this.translate;info.center=this.center;info.up=this.up;return info;}
get allInfoAsInnerData(){const info={};info.translate=this.translateInner;info.center=this.centerInner;info.up=this.upInner;return info;}
get allInfo(){const info={};info.translate=this.translate;info.translateInner=this.translateInner;info.center=this.center;info.centerInner=this.centerInner;info.up=this.up;info.upInner=this.upInner;return info;}
set allInfo(arg){let json=arg;if(typeof arg==="string"){json=JSON.parse(arg);}
for(let key in json){if(json.hasOwnProperty(key)&&key in this){if(key==="quaternion"){this[key]=MathClassUtil.cloneOfMathObjects(MathClassUtil.arrayToQuaternion(json[key]));}else{this[key]=MathClassUtil.cloneOfMathObjects(MathClassUtil.arrayToVectorOrMatrix(json[key]));}}}}}
L_AbstractCamera._mainCamera={};class L_PerspectiveCamera extends L_AbstractCamera{constructor(glBoostContext,toRegister,lookat,perspective){super(glBoostContext,toRegister,lookat);this._fovy=perspective.fovy;this._aspect=perspective.aspect;this._zNear=perspective.zNear;this._zFar=perspective.zFar;this._zNearInner=perspective.zNear;this._zFarInner=perspective.zFar;this._dirtyProjection=true;this._updateCountAsCameraProjection=0;}
_needUpdateProjection(){this._dirtyProjection=true;this._updateCountAsCameraProjection++;}
get updateCountAsCameraProjection(){return this._updateCountAsCameraProjection;}
projectionRHMatrix(){if(this._dirtyProjection){this._projectionMatrix=L_PerspectiveCamera.perspectiveRHMatrix(this._fovy,this._aspect,this._zNearInner,this._zFarInner);this._dirtyProjection=false;return this._projectionMatrix.clone();}else{return this._projectionMatrix.clone();}}
static perspectiveRHMatrix(fovy,aspect,zNear,zFar){var yscale=1.0/Math.tan((0.5*fovy*Math.PI)/180);var xscale=yscale/aspect;if(zFar){return new Matrix44$1(xscale,0.0,0.0,0.0,0.0,yscale,0.0,0.0,0.0,0.0,-(zFar+zNear)/(zFar-zNear),-(2.0*zFar*zNear)/(zFar-zNear),0.0,0.0,-1.0,0.0);}else{return new Matrix44$1(xscale,0.0,0.0,0.0,0.0,yscale,0.0,0.0,0.0,0.0,-1,0,-2*zNear,0.0,0.0,-1.0,0.0);}
this._yscale=yscale;this._xscale=xscale;}
set fovy(value){if(this._fovy===value){return;}
this._fovy=value;this._needUpdateProjection();}
get fovy(){return this._fovy;}
set aspect(value){if(this._aspect===value){return;}
this._aspect=value;this._needUpdateProjection();}
get aspect(){return this._aspect;}
set zNear(value){if(this._zNear===value){return;}
this._zNear=value;this._needUpdateProjection();}
get zNear(){return this._zNear;}
set zFar(value){if(this._zFar===value){return;}
this._zFar=value;this._needUpdateProjection();}
get zFar(){return this._zFar;}
get left(){if(this._xscale!=null){L_PerspectiveCamera.perspectiveRHMatrix(this._fovy,this._aspect,this._zNearInner,this._zFarInner);}
return-this._zNear/this._xscale;}
get right(){return-this.left;}
get top(){return-this.bottom;}
set left(value){}
set top(value){}
set right(value){}
set top(value){}
set bottom(value){}
get bottom(){if(this._xscale!=null){L_PerspectiveCamera.perspectiveRHMatrix(this._fovy,this._aspect,this._zNearInner,this._zFarInner);}
return this._zNear/this._yscale;}
get allInfo(){const info=super.allInfo;info.fovy=this.fovy;info.aspect=this.aspect;info.zFar=this.zFar;info.zFarInner=this.zFarInner;info.zNear=this.zNear;info.zNearInner=this.zNearInner;return info;}
get allInfoExceptInnerData(){const info=super.allInfoExceptInnerData;info.fovy=this.fovy;info.aspect=this.aspect;info.zFar=this.zFar;info.zNear=this.zNear;return info;}
get allInfoAsInnerData(){const info=super.allInfoAsInnerData;info.fovy=this.fovy;info.aspect=this.aspect;info.zFar=this.zFarInner;info.zNear=this.zNearInner;return info;}
set allInfo(info){super.allInfo=info;}}
class L_FrustumCamera extends L_AbstractCamera{constructor(glBoostContext,toRegister,lookat,frustum){super(glBoostContext,toRegister,lookat);this._left=frustum.left;this._right=frustum.right;this._top=frustum.top;this._bottom=frustum.bottom;this._zNear=frustum.zNear;this._zFar=frustum.zFar;this._zNearInner=frustum.zNear;this._zFarInner=frustum.zFar;this._dirtyProjection=true;this._updateCountAsCameraProjection=0;}
_needUpdateProjection(){this._dirtyProjection=true;this._updateCountAsCameraProjection++;}
get updateCountAsCameraProjection(){return this._updateCountAsCameraProjection;}
projectionRHMatrix(){if(this._dirtyProjection){this._projectionMatrix=L_FrustumCamera.frustumRHMatrix(this._leftInner,this._rightInner,this._topInner,this._bottomInner,this._zNearInner,this._zFarInner);this._dirtyProjection=false;return this._projectionMatrix.clone();}else{return this._projectionMatrix.clone();}}
static frustumRHMatrix(left,right,top,bottom,zNear,zFar){return new Matrix44$1(2*zNear/(right-left),0.0,(right+left)/(right-left),0.0,0.0,2*zNear/(top-bottom),(top+bottom)/(top-bottom),0.0,0.0,0.0,-(zFar+zNear)/(zFar-zNear),-1*2*zFar*zNear/(zFar-zNear),0.0,0.0,-1.0,0.0);}
set left(value){if(this._left===value){return;}
this._left=value;this._needUpdateProjection();}
get left(){return this._left;}
set right(value){if(this._right===value){return;}
this._right=value;this._needUpdateProjection();}
get right(){return this._right;}
set top(value){if(this._top===value){return;}
this._top=value;this._needUpdateProjection();}
get top(){return this._top;}
set bottom(value){if(this._bottom===value){return;}
this._bottom=value;this._needUpdateProjection();}
get bottom(){return this._bottom;}
set zNear(value){if(this._zNear===value){return;}
this._zNear=value;this._needUpdateProjection();}
get zNear(){return this._zNear;}
set zFar(value){if(this._zFar===value){return;}
this._zFar=value;this._needUpdateProjection();}
get zFar(){return this._zFar;}
get aspect(){return(this.right-this.left)/(this.top-this.bottom);}
get fovy(){return MathUtil.radianToDegree(2*Math.atan(Math.abs(this.top-this.bottom)/(2*this.zNear)));}
get allInfo(){const info=super.allInfo;info.left=this.left;info.right=this.right;info.top=this.top;info.bottom=this.bottom;info.zFar=this.zFar;info.zFarInner=this.zFarInner;info.zNear=this.zNear;info.zNearInner=this.zNearInner;return info;}
get allInfoExceptInnerData(){const info=super.allInfoExceptInnerData;info.left=this.left;info.right=this.right;info.top=this.top;info.bottom=this.bottom;info.zFar=this.zFar;info.zNear=this.zNear;return info;}
get allInfoAsInnerData(){const info=super.allInfoAsInnerData;info.left=this.left;info.right=this.right;info.top=this.top;info.bottom=this.bottom;info.zFar=this.zFarInner;info.zNear=this.zNearInner;return info;}
set allInfo(info){super.allInfo=info;}}
class L_OrthoCamera extends L_AbstractCamera{constructor(glBoostSystem,toRegister,lookat,ortho){super(glBoostSystem,toRegister,lookat);this._left=(typeof ortho.left==="undefined")?-1:ortho.left;this._right=(typeof ortho.right==="undefined")?1:ortho.right;this._bottom=(typeof ortho.bottom==="undefined")?-1:ortho.bottom;this._top=(typeof ortho.top==="undefined")?1:ortho.top;this._zNear=ortho.zNear;this._zFar=ortho.zFar;this._xmag=ortho.xmag;this._ymag=ortho.ymag;this._dirtyProjection=true;this._updateCountAsCameraProjection=0;}
_needUpdateProjection(){this._dirtyProjection=true;this._updateCountAsCameraProjection++;}
get updateCountAsCameraProjection(){return this._updateCountAsCameraProjection;}
projectionRHMatrix(){if(this._dirtyProjection){this._projectionMatrix=L_OrthoCamera.orthoRHMatrix(this._left,this._right,this._bottom,this._top,this._zNear,this._zFar,this._xmag,this._ymag);this._dirtyProjection=false;return this._projectionMatrix.clone();}else{return this._projectionMatrix.clone();}}
static orthoRHMatrix(left,right,bottom,top,near,far,xmag,ymag){if(xmag&&ymag){return new Matrix44$1(1/xmag,0.0,0.0,0,0.0,1/ymag,0.0,0,0.0,0.0,-2/(far-near),-(far+near)/(far-near),0.0,0.0,0.0,1.0);}else{return new Matrix44$1(2/(right-left),0.0,0.0,-(right+left)/(right-left),0.0,2/(top-bottom),0.0,-(top+bottom)/(top-bottom),0.0,0.0,-2/(far-near),-(far+near)/(far-near),0.0,0.0,0.0,1.0);}}
set left(value){if(this._left===value){return;}
this._left=value;this._needUpdateProjection();}
get left(){return this._left;}
set right(value){if(this._right===value){return;}
this._right=value;this._needUpdateProjection();}
get right(){return this._right;}
set bottom(value){if(this._bottom===value){return;}
this._bottom=value;this._needUpdateProjection();}
get bottom(){return this._bottom;}
set top(value){if(this._top===value){return;}
this._top=value;this._needUpdateProjection();}
get top(){return this._top;}
set zNear(value){if(this._zNear===value){return;}
this._zNear=value;this._needUpdateProjection();}
get zNear(){return this._zNear;}
set zFar(value){if(this._zFar===value){return;}
this._zFar=value;this._needUpdateProjection();}
get zFar(){return this._zFar;}
set xmag(value){if(this._xmag===value){return;}
this._xmag=value;this._needUpdateProjection();}
get xmag(){return this._xmag;}
set ymag(value){if(this._ymag===value){return;}
this._ymag=value;this._needUpdateProjection();}
get ymag(){return this._ymag;}
get aspect(){return(this.right-this.left)/(this.top-this.bottom);}
get allInfo(){const info=super.allInfo;info.left=this.left;info.right=this.right;info.top=this.top;info.bottom=this.bottom;info.zFar=this.zFar;info.zFarInner=this.zFarInner;info.zNear=this.zNear;info.zNearInner=this.zNearInner;info.xmag=this.xmag;info.ymag=this.ymag;return info;}
get allInfoExceptInnerData(){const info=super.allInfoExceptInnerData;info.left=this.left;info.right=this.right;info.top=this.top;info.bottom=this.bottom;info.zFar=this.zFar;info.zNear=this.zNear;info.xmag=this.xmag;info.ymag=this.ymag;return info;}
get allInfoAsInnerData(){const info=super.allInfoAsInnerData;info.left=this.left;info.right=this.right;info.top=this.top;info.bottom=this.bottom;info.zFar=this.zFarInner;info.zNear=this.zNearInner;info.xmag=this.xmag;info.ymag=this.ymag;return info;}
set allInfo(info){super.allInfo=info;}}
class M_AbstractCamera extends M_Element{constructor(glBoostContext,toRegister){super(glBoostContext,toRegister);if(this.constructor===M_AbstractCamera){throw new TypeError("Cannot construct M_AbstractCamera instances directly.");}
this._lowLevelCamera=null;this._updateCountAsCameraView=0;this._texture=null;}
set cameraController(controller){this._lowLevelCamera.cameraController=controller;}
get cameraController(){return this._lowLevelCamera.cameraController;}
removeCameraController(controller){this._lowLevelCamera.removeCameraController(controller);}
_needUpdateView(){this._lowLevelCamera._needUpdateView();this._updateCountAsCameraView++;}
get updateCountAsCameraView(){return this._updateCountAsCameraView;}
get latestViewStateInfoString(){var tempString=this._accumulateMyAndParentNameWithUpdateInfo(this);tempString+="_updateCountAsCameraView_"+this._updateCountAsCameraView;return tempString;}
setAsMainCamera(scene){this._lowLevelCamera.setAsMainCamera(scene);}
isMainCamera(scene){return this._lowLevelCamera.isMainCamera(scene);}
set texture(texture){this._texture=texture;}
get texture(){return this._texture;}
lookAtRHMatrix(){return this._lowLevelCamera.lookAtRHMatrix();}
set translate(vec){this._lowLevelCamera.translate=vec;}
get translate(){return this._lowLevelCamera.translate;}
get translateInner(){return this._lowLevelCamera.translateInner;}
set eye(vec){this._lowLevelCamera.eye=vec;}
get eye(){return this._lowLevelCamera.eye;}
get eyeInner(){return this._lowLevelCamera.eyeInner;}
set center(vec){this._lowLevelCamera.center=vec;}
get center(){return this._lowLevelCamera.center;}
get centerInner(){return this._lowLevelCamera.centerInner;}
set up(vec){this._lowLevelCamera.up=vec;}
get up(){return this._lowLevelCamera.up;}
get upInner(){return this._lowLevelCamera.upInner;}
get allInfo(){return this._lowLevelCamera.allInfo;}
get allInfoExceptInnerData(){return this._lowLevelCamera.allInfoExceptInnerData;}
get allInfoAsInnerData(){return this._lowLevelCamera.allInfoAsInnerData;}
set allInfo(info){this._lowLevelCamera.allInfo=info;}}
GLBoost$1["M_AbstractCamera"]=M_AbstractCamera;class L_CameraController extends GLBoostObject{constructor(glBoostContext,options={isSymmetryMode:true,doResetWhenCameraSettingChanged:false,isForceGrab:false,efficiency:1.0,eventTargetDom:document}){super(glBoostContext);this._camaras=new Set();this._isKeyUp=true;this._isForceGrab=options.isForceGrab!==void 0?options.isForceGrab:false;this._isSymmetryMode=options.isSymmetryMode!==void 0?options.isSymmetryMode:true;this._efficiency=options.efficiency!==void 0?0.5*options.efficiency:1;let eventTargetDom=options.eventTargetDom;this._rot_bgn_x=0;this._rot_bgn_y=0;this._rot_x=0;this._rot_y=0;this._clickedMouseYOnCanvas=0;this._clickedMouseXOnCanvas=0;this._verticalAngleOfVectors=0;this._verticalAngleThrethold=90;this._wheel_y=1;this._mouse_translate_y=0;this._mouse_translate_x=0;this._mouseTranslateVec=new Vector3(0,0,0);this._newUpVec=new Vector3(0,0,0);this._target=null;this._lengthCenterToCorner=10;this._lengthOfCenterToEye=10;this._scaleOfTraslation=5.0;this._scaleOfLengthCameraToCenter=1.0;this._foyvBias=1.0;this._zFarAdjustingFactorBasedOnAABB=2.0;this._doResetWhenCameraSettingChanged=options.doResetWhenCameraSettingChanged!==void 0?options.doResetWhenCameraSettingChanged:false;this._shiftCameraTo=null;this._onMouseDown=evt=>{MiscUtil.preventDefaultForDesktopOnly(evt);evt.stopPropagation();let rect=evt.target.getBoundingClientRect();let clientX=null;let clientY=null;if(evt.clientX){clientX=evt.clientX;clientY=evt.clientY;}else{clientX=evt.touches[0].clientX;clientY=evt.touches[0].clientY;}
this._clickedMouseXOnCanvas=clientX-rect.left;this._clickedMouseYOnCanvas=clientY-rect.top;this._movedMouseYOnCanvas=-1;this._movedMouseXOnCanvas=-1;this._rot_bgn_x=this._rot_x;this._rot_bgn_y=this._rot_y;this._isKeyUp=false;if(typeof evt.buttons!=="undefined"){this.updateCamera();}
return false;};this._onMouseUp=evt=>{this._isKeyUp=true;this._movedMouseYOnCanvas=-1;this._movedMouseXOnCanvas=-1;};this._onMouseMove=evt=>{evt.preventDefault();evt.stopPropagation();if(this._isKeyUp){return;}
let rect=evt.target.getBoundingClientRect();let clientX=null;let clientY=null;if(evt.clientX){clientX=evt.clientX;clientY=evt.clientY;}else{clientX=evt.touches[0].clientX;clientY=evt.touches[0].clientY;}
this._movedMouseXOnCanvas=clientX-rect.left;this._movedMouseYOnCanvas=clientY-rect.top;if(typeof evt.buttons!=="undefined"){let data=evt.buttons;let button_l=data&0x0001?true:false;let button_c=data&0x0004?true:false;if(button_c){this._mouse_translate_y=((this._movedMouseYOnCanvas-this._clickedMouseYOnCanvas)/1000)*this._efficiency;this._mouse_translate_x=((this._movedMouseXOnCanvas-this._clickedMouseXOnCanvas)/1000)*this._efficiency;let scale=this._lengthOfCenterToEye*this._foyvBias*this._scaleOfTraslation;if(evt.shiftKey){this._mouseTranslateVec=Vector3.add(this._mouseTranslateVec,Vector3.normalize(this._newEyeToCenterVec).multiply(-this._mouse_translate_y).multiply(scale));}else{this._mouseTranslateVec=Vector3.add(this._mouseTranslateVec,Vector3.normalize(this._newUpVec).multiply(this._mouse_translate_y).multiply(scale));}
this._mouseTranslateVec=Vector3.add(this._mouseTranslateVec,Vector3.normalize(this._newTangentVec).multiply(this._mouse_translate_x).multiply(scale));this._clickedMouseYOnCanvas=this._movedMouseYOnCanvas;this._clickedMouseXOnCanvas=this._movedMouseXOnCanvas;}
this.updateCamera();if(!button_l){return;}}
let delta_y=(this._movedMouseYOnCanvas-this._clickedMouseYOnCanvas)*this._efficiency;let delta_x=(this._movedMouseXOnCanvas-this._clickedMouseXOnCanvas)*this._efficiency;this._rot_y=this._rot_bgn_y-delta_y;this._rot_x=this._rot_bgn_x-delta_x;if(this._verticalAngleThrethold-this._verticalAngleOfVectors<this._rot_y);if(this._rot_y<-this._verticalAngleThrethold+this._verticalAngleOfVectors);this.updateCamera();};this._onMouseWheel=evt=>{MiscUtil.preventDefaultForDesktopOnly(evt);this.dolly+=evt.deltaY/600;};this._onContexMenu=evt=>{if(evt.preventDefault){MiscUtil.preventDefaultForDesktopOnly(evt);}else{event.returnValue=false;}};this._onMouseDblClick=evt=>{if(evt.shiftKey){this._mouseTranslateVec=new Vector3(0,0,0);}else if(evt.ctrlKey){this._rot_y=0;this._rot_x=0;this._rot_bgn_y=0;this._rot_bgn_x=0;}
this.updateCamera();};this.registerEventListeners(eventTargetDom);}
registerEventListeners(eventTargetDom=document){if(eventTargetDom){if("ontouchend"in document){eventTargetDom.addEventListener("touchstart",this._onMouseDown);eventTargetDom.addEventListener("touchend",this._onMouseUp);eventTargetDom.addEventListener("touchmove",this._onMouseMove,{passive:false});}
if("onmouseup"in document){eventTargetDom.addEventListener("mousedown",this._onMouseDown);eventTargetDom.addEventListener("mouseup",this._onMouseUp);eventTargetDom.addEventListener("mousemove",this._onMouseMove,{passive:false});}
if(window.WheelEvent){eventTargetDom.addEventListener("wheel",this._onMouseWheel);}
eventTargetDom.addEventListener("contextmenu",this._onContexMenu,false);eventTargetDom.addEventListener("dblclick",this._onMouseDblClick);}}
unregisterEventListeners(eventTargetDom=document){if(eventTargetDom){if("ontouchend"in document){eventTargetDom.removeEventListener("touchstart",this._onMouseDown);eventTargetDom.removeEventListener("touchend",this._onMouseUp);eventTargetDom.removeEventListener("touchmove",this._onMouseMove,{passive:false});}
if("onmouseup"in document){eventTargetDom.removeEventListener("mousedown",this._onMouseDown);eventTargetDom.removeEventListener("mouseup",this._onMouseUp);eventTargetDom.removeEventListener("mousemove",this._onMouseMove,{passive:false});}
if(window.WheelEvent){eventTargetDom.removeEventListener("wheel",this._onMouseWheel);}
eventTargetDom.removeEventListener("contextmenu",this._onContexMenu,false);eventTargetDom.removeEventListener("dblclick",this._onMouseDblClick);}}
_getFovyFromCamera(camera){if(camera.fovy){return camera.fovy;}else{return MathUtil.radianToDegree(2*Math.atan(Math.abs(camera.top-camera.bottom)/(2*camera.zNear)));}}
convert(camera){let newEyeVec=null;let newCenterVec=null;let newUpVec=null;if(this._isKeyUp||!this._isForceGrab){this._eyeVec=this._shiftCameraTo!==null?Vector3.add(Vector3.subtract(this._shiftCameraTo,camera.center),camera.eye):camera.eye;this._centerVec=this._shiftCameraTo!==null?this._shiftCameraTo:camera.center;this._upVec=camera.up;}
let fovy=this._getFovyFromCamera(camera);if(this._isSymmetryMode){let centerToEyeVec=Vector3.subtract(this._eyeVec,this._centerVec).multiply((this._wheel_y*1.0)/Math.tan(MathUtil.degreeToRadian(fovy/2.0)));this._lengthOfCenterToEye=centerToEyeVec.length();let horizontalAngleOfVectors=Vector3.angleOfVectors(new Vector3(centerToEyeVec.x,0,centerToEyeVec.z),new Vector3(0,0,1));let horizontalSign=Vector3.cross(new Vector3(centerToEyeVec.x,0,centerToEyeVec.z),new Vector3(0,0,1)).y;if(horizontalSign>=0){horizontalSign=1;}else{horizontalSign=-1;}
horizontalAngleOfVectors*=horizontalSign;let rotateM_Reset=Matrix33.rotateY(horizontalAngleOfVectors);let rotateM_X=Matrix33.rotateX(this._rot_y);let rotateM_Y=Matrix33.rotateY(this._rot_x);let rotateM_Revert=Matrix33.rotateY(-horizontalAngleOfVectors);let rotateM=Matrix33.multiply(rotateM_Revert,Matrix33.multiply(rotateM_Y,Matrix33.multiply(rotateM_X,rotateM_Reset)));newUpVec=rotateM.multiplyVector(this._upVec);this._newUpVec=newUpVec;newEyeVec=rotateM.multiplyVector(centerToEyeVec).add(this._centerVec);newCenterVec=this._centerVec.clone();this._newEyeToCenterVec=Vector3.subtract(newCenterVec,newEyeVec);this._newTangentVec=Vector3.cross(this._newUpVec,this._newEyeToCenterVec);newEyeVec.add(this._mouseTranslateVec);newCenterVec.add(this._mouseTranslateVec);let horizonResetVec=rotateM_Reset.multiplyVector(centerToEyeVec);this._verticalAngleOfVectors=Vector3.angleOfVectors(horizonResetVec,new Vector3(0,0,1));let verticalSign=Vector3.cross(horizonResetVec,new Vector3(0,0,1)).x;if(verticalSign>=0){verticalSign=1;}else{verticalSign=-1;}}else{let centerToEyeVec=Vector3.subtract(this._eyeVec,this._centerVec).multiply((this._wheel_y*1.0)/Math.tan(MathUtil.degreeToRadian(fovy/2.0)));let rotateM_X=Matrix33.rotateX(this._rot_y);let rotateM_Y=Matrix33.rotateY(this._rot_x);let rotateM=rotateM_Y.multiply(rotateM_X);newUpVec=rotateM.multiplyVector(this._upVec);this._newUpVec=newUpVec;newEyeVec=rotateM.multiplyVector(centerToEyeVec).add(this._centerVec);newCenterVec=this._centerVec.clone();this._newEyeToCenterVec=Vector3.subtract(newCenterVec,newEyeVec);this._newTangentVec=Vector3.cross(this._newUpVec,this._newEyeToCenterVec);newEyeVec.add(this._mouseTranslateVec);newCenterVec.add(this._mouseTranslateVec);}
const newCenterToEyeLength=Vector3.lengthBtw(newEyeVec,newCenterVec);let newLeft=camera.left;let newRight=camera.right;let newTop=camera.top;let newBottom=camera.bottom;let newZNear=camera.zNear;let newZFar=camera.zFar;let ratio=1;if(typeof newLeft!=="undefined"){if(typeof this._lengthCenterToCorner!=="undefined"){ratio=camera.zNear/Math.abs(newCenterToEyeLength-this._lengthCenterToCorner);const minRatio=0.001;if(ratio<minRatio){ratio=minRatio;}
let scale=1/ratio;newLeft*=scale;newRight*=scale;newTop*=scale;newBottom*=scale;newZFar*=scale;newZNear*=scale;}}
if(this._target){newZFar=camera.zNear+Vector3.subtract(newCenterVec,newEyeVec).length();newZFar+=this._getTargetAABB().lengthCenterToCorner*this._zFarAdjustingFactorBasedOnAABB;}
this._foyvBias=Math.tan(MathUtil.degreeToRadian(fovy/2.0));return[newEyeVec,newCenterVec,newUpVec,newZNear,newZFar,newLeft,newRight,newTop,newBottom];}
_getTargetAABB(){let targetAABB=null;targetAABB=this._target.AABB;return targetAABB;}
_updateTargeting(camera,eyeVec,centerVec,upVec,fovy){if(this._target===null){return[eyeVec,centerVec,upVec];}
let targetAABB=this._getTargetAABB();const cameraZNearPlaneHeight=camera.top-camera.bottom;this._lengthCenterToCorner=targetAABB.lengthCenterToCorner;this._lengthCameraToObject=(targetAABB.lengthCenterToCorner/Math.sin((fovy*Math.PI)/180/2))*this._scaleOfLengthCameraToCenter;if(!(targetAABB.centerPoint!=null)){targetAABB.updateAllInfo();}
let newCenterVec=targetAABB.centerPoint;let centerToCameraVec=Vector3.subtract(eyeVec,centerVec);let centerToCameraVecNormalized=Vector3.normalize(centerToCameraVec);let newEyeVec=Vector3.multiply(centerToCameraVecNormalized,this._lengthCameraToObject).add(newCenterVec);let newUpVec=null;if(camera instanceof M_AbstractCamera){let mat=camera.inverseWorldMatrixWithoutMySelf;newEyeVec=new Vector3(mat.multiplyVector(new Vector4$1(newEyeVec.x,newEyeVec.y,newEyeVec.z,1)));newCenterVec=new Vector3(mat.multiplyVector(new Vector4$1(newCenterVec.x,newCenterVec.y,newCenterVec.z,1)));newUpVec=new Vector3(mat.multiplyVector(new Vector4$1(upVec.x,upVec.y,upVec.z,1)));}else{newUpVec=upVec;}
return[newEyeVec,newCenterVec,newUpVec];}
tryReset(){if(this._doResetWhenCameraSettingChanged){if(this._isKeyUp){this._rot_y=0;this._rot_x=0;this._rot_bgn_y=0;this._rot_bgn_x=0;}}}
reset(){this._rot_y=0;this._rot_x=0;this._rot_bgn_y=0;this._rot_bgn_x=0;this._wheel_y=1;this._mouseTranslateVec=new Vector3(0,0,0);this._camaras.forEach(function(camera){camera._needUpdateView(false);});}
updateTargeting(){this._camaras.forEach(camera=>{let vectors=this._updateTargeting(camera,camera.eye,camera.center,camera.up,this._getFovyFromCamera(camera));camera.eye=vectors[0];camera.center=vectors[1];camera.up=vectors[2];});}
updateCamera(){this._camaras.forEach(function(camera){camera._needUpdateView(false);camera._needUpdateProjection();});}
addCamera(camera){this._camaras.add(camera);}
removeCamera(camera){this._camaras.delete(camera);}
set target(object){this._target=object;this.updateTargeting();}
get target(){return this._target;}
set zFarAdjustingFactorBasedOnAABB(value){this._zFarAdjustingFactorBasedOnAABB=value;}
get zFarAdjustingFactorBasedOnAABB(){return this._zFarAdjustingFactorBasedOnAABB;}
set shiftCameraTo(value){this._shiftCameraTo=value;}
get shiftCameraTo(){return this._shiftCameraTo;}
resetDolly(){this.dolly=1;this.updateCamera();}
set dolly(value){this._wheel_y=value;this._wheel_y=Math.min(this._wheel_y,3);this._wheel_y=Math.max(this._wheel_y,0.01);this.updateCamera();}
get dolly(){return this._wheel_y;}
get rotX(){return this._rot_x;}
set rotX(value){this._rot_x=value;this._rot_bgn_x=0;this._camaras.forEach(function(camera){camera._needUpdateView(true);camera._needUpdateProjection();});}
get rotY(){return this._rot_y;}
set rotY(value){this._rot_y=value;this._rot_bgn_y=0;this._camaras.forEach(function(camera){camera._needUpdateView(true);camera._needUpdateProjection();});}
get allInfo(){const info={};info.rotY=this.rotY;info.rotX=this.rotX;info.dolly=this.dolly;info.shiftCameraTo=this.shiftCameraTo;info.zFarAdjustingFactorBasedOnAABB=this.zFarAdjustingFactorBasedOnAABB;info.target=this.target;return info;}
set allInfo(arg){let json=arg;if(typeof arg==="string"){json=JSON.parse(arg);}
for(let key in json){if(json.hasOwnProperty(key)&&key in this){if(key==="quaternion"){this[key]=MathClassUtil.cloneOfMathObjects(MathClassUtil.arrayToQuaternion(json[key]));}else{this[key]=MathClassUtil.cloneOfMathObjects(MathClassUtil.arrayToVectorOrMatrix(json[key]));}}}}}
GLBoost$1["L_CameraController"]=L_CameraController;class L_WalkThroughCameraController extends GLBoostObject{constructor(glBoostContext,options={eventTargetDom:document,horizontalSpeed:1,turnSpeed:5,mouseWheelSpeedScale:0.3,inverseVirticalRotating:false,inverseHorizontalRotating:false}){super(glBoostContext);this._camaras=new Set();this._horizontalSpeed=options.horizontalSpeed;this._virticalSpeed=options.virticalSpeed;this._turnSpeed=options.turnSpeed;this._mouseWheelSpeedScale=options.mouseWheelSpeedScale;this._inverseVirticalRotating=options.inverseVirticalRotating;this._inverseHorizontalRotating=options.inverseHorizontalRotating;this.reset();this._onKeydown=e=>{this._isKeyDown=true;this._lastKeyCode=e.keyCode;this.updateCamera();};this._onKeyup=e=>{this._isKeyDown=false;this._lastKeyCode=null;};const eventTargetDom=options.eventTargetDom;this.registerEventListeners(eventTargetDom);}
updateCamera(){this._camaras.forEach(function(camera){camera._needUpdateView(false);camera._needUpdateProjection();});}
registerEventListeners(eventTargetDom=document){if(eventTargetDom){document.addEventListener("keydown",this._onKeydown);document.addEventListener("keyup",this._onKeyup);if("ontouchend"in document){eventTargetDom.addEventListener("touchstart",this._mouseDown.bind(this));document.addEventListener("touchend",this._mouseUp.bind(this));eventTargetDom.addEventListener("touchmove",this._mouseMove.bind(this));}
if("onmouseup"in document){eventTargetDom.addEventListener("mousedown",this._mouseDown.bind(this));document.addEventListener("mouseup",this._mouseUp.bind(this));eventTargetDom.addEventListener("mousemove",this._mouseMove.bind(this));}
if(window.WheelEvent){eventTargetDom.addEventListener("wheel",this._mouseWheel.bind(this));}}}
unregisterEventListeners(eventTargetDom=document){if(eventTargetDom){document.removeEventListener("keydown",this._onKeydown);document.removeEventListener("keyup",this._onKeyup);if("ontouchend"in document){eventTargetDom.removeEventListener("touchstart",this._mouseDown.bind(this));document.removeEventListener("touchend",this._mouseUp.bind(this));eventTargetDom.removeEventListener("touchmove",this._mouseMove).bind(this);}
if("onmouseup"in document){eventTargetDom.removeEventListener("mousedown",this._mouseDown.bind(this));document.removeEventListener("mouseup",this._mouseUp.bind(this));eventTargetDom.removeEventListener("mousemove",this._mouseMove.bind(this));}
if(window.WheelEvent){eventTargetDom.removeEventListener("wheel",this._mouseWheel.bind(this));}}}
_mouseWheel(e){if(this._currentDir===null){return;}
const delta=e.wheelDelta*this._mouseWheelSpeedScale;const horizontalDir=new Vector3(this._currentDir.x,0,this._currentDir.z).normalize();this._currentPos.add(Vector3.multiply(horizontalDir,delta));this._currentCenter.add(Vector3.multiply(horizontalDir,delta));}
_mouseDown(evt){MiscUtil.preventDefaultForDesktopOnly(evt);evt.stopPropagation();this._isMouseDown=true;let rect=evt.target.getBoundingClientRect();this._clickedMouseXOnCanvas=evt.clientX-rect.left;this._clickedMouseYOnCanvas=evt.clientY-rect.top;return false;}
_mouseMove(evt){MiscUtil.preventDefaultForDesktopOnly(evt);evt.stopPropagation();if(!this._isMouseDown){return;}
let rect=evt.target.getBoundingClientRect();this._draggedMouseXOnCanvas=evt.clientX-rect.left;this._draggedMouseYOnCanvas=evt.clientY-rect.top;this._deltaMouseXOnCanvas=this._draggedMouseXOnCanvas-this._clickedMouseXOnCanvas;this._deltaMouseYOnCanvas=this._draggedMouseYOnCanvas-this._clickedMouseYOnCanvas;this._isMouseDrag=true;this.updateCamera();}
_mouseUp(evt){this._isMouseDown=false;this._isMouseDrag=false;let rect=evt.target.getBoundingClientRect();this._clickedMouseXOnCanvas=evt.clientX-rect.left;this._clickedMouseYOnCanvas=evt.clientY-rect.top;}
tryReset(){}
reset(){this._isKeyDown=false;this._lastKeyCode=null;this._currentPos=null;this._currentCenter=null;this._currentDir=null;this._isMouseDown=false;this._isMouseDrag=false;this._draggedMouseXOnCanvas=null;this._draggedMouseYOnCanvas=null;this._deltaMouseXOnCanvas=null;this._deltaMouseYOnCanvas=null;this._mouseXAdjustScale=0.1;this._mouseYAdjustScale=0.1;this._deltaY=0;this._deltaX=0;this._newDir=Vector3.zero();this._camaras.forEach(function(camera){camera._needUpdateView(false);});}
addCamera(camera){this._camaras.add(camera);}
removeCamera(camera){this._camaras.delete(camera);}
convert(camera){if(this._currentPos===null){this._currentPos=camera.eye.clone();}
if(this._currentCenter===null){this._currentCenter=camera.center.clone();}
if(this._currentDir===null){this._currentDir=Vector3.subtract(camera.center,camera.eye).normalize();}
let newEyeToCenter=null;const t=this._deltaY/90;this._newDir.x=this._currentDir.x*(1-t);this._newDir.y=t;this._newDir.z=this._currentDir.z*(1-t);this._newDir.normalize();switch(this._lastKeyCode){case 87:case 38:{const horizontalDir=new Vector3(this._currentDir.x,0,this._currentDir.z).normalize();this._currentPos.add(Vector3.multiply(horizontalDir,this._horizontalSpeed));this._currentCenter.add(Vector3.multiply(horizontalDir,this._horizontalSpeed));}
break;case 65:case 37:{const horizontalDir=new Vector3(this._currentDir.x,0,this._currentDir.z).normalize();const leftDir=Matrix33.rotateY(90).multiplyVector(horizontalDir);this._currentPos.add(Vector3.multiply(leftDir,this._horizontalSpeed));this._currentCenter.add(Vector3.multiply(leftDir,this._horizontalSpeed));}
break;case 83:case 40:{const horizontalDir=new Vector3(this._currentDir.x,0,this._currentDir.z).normalize();this._currentPos.add(Vector3.multiply(horizontalDir,-this._horizontalSpeed));this._currentCenter.add(Vector3.multiply(horizontalDir,-this._horizontalSpeed));}
break;case 68:case 39:{const horizontalDir=new Vector3(this._currentDir.x,0,this._currentDir.z).normalize();const rightDir=Matrix33.rotateY(-90).multiplyVector(horizontalDir);this._currentPos.add(Vector3.multiply(rightDir,this._horizontalSpeed));this._currentCenter.add(Vector3.multiply(rightDir,this._horizontalSpeed));}
break;case 81:{this._currentPos.add(Vector3.multiply(this._newDir,-this._horizontalSpeed));this._currentCenter.add(Vector3.multiply(this._newDir,-this._horizontalSpeed));}
break;case 69:{this._currentPos.add(Vector3.multiply(this._newDir,this._horizontalSpeed));this._currentCenter.add(Vector3.multiply(this._newDir,this._horizontalSpeed));}
break;case 82:this._currentPos.add(new Vector3(0,this._virticalSpeed,0));this._currentCenter.add(new Vector3(0,this._virticalSpeed,0));break;case 70:this._currentPos.add(new Vector3(0,-this._virticalSpeed,0));this._currentCenter.add(new Vector3(0,-this._virticalSpeed,0));break;}
if(this._isMouseDrag){if(this._inverseHorizontalRotating){this._deltaX=this._deltaMouseXOnCanvas*this._mouseXAdjustScale;}else{this._deltaX=-this._deltaMouseXOnCanvas*this._mouseXAdjustScale;}
if(this._inverseVirticalRotating){this._deltaY+=this._deltaMouseYOnCanvas*this._mouseYAdjustScale;}else{this._deltaY+=-this._deltaMouseYOnCanvas*this._mouseYAdjustScale;}
this._deltaY=Math.max(-120,Math.min(50,this._deltaY));this._currentDir=Matrix33.rotateY(this._deltaX).multiplyVector(this._currentDir);newEyeToCenter=Matrix33.rotateY(this._deltaX).multiplyVector(Vector3.subtract(this._currentCenter,this._currentPos));newEyeToCenter.x=newEyeToCenter.x*(1-t);newEyeToCenter.y=t;newEyeToCenter.z=newEyeToCenter.z*(1-t);newEyeToCenter.normalize();this._currentCenter=Vector3.add(this._currentPos,newEyeToCenter);this._clickedMouseXOnCanvas=this._draggedMouseXOnCanvas;this._clickedMouseYOnCanvas=this._draggedMouseYOnCanvas;this._deltaMouseXOnCanvas=0;this._deltaMouseYOnCanvas=0;}
let newLeft=camera.left;let newRight=camera.right;let newTop=camera.top;let newBottom=camera.bottom;return[this._currentPos,this._currentCenter,camera.up.clone(),camera.zNear,camera.zFar,newLeft,newRight,newTop,newBottom];}
getDirection(){return this._currentCenter!==null?this._newDir.clone():null;}
set horizontalSpeed(value){this._horizontalSpeed=value;}
get horizontalSpeed(){return this._horizontalSpeed;}
set virticalSpeed(value){this._virticalSpeed=value;}
get virticalSpeed(){return this._virticalSpeed;}
get allInfo(){const info={};info.virticalSpeed=this.virticalSpeed;info.horizontalSpeed=this.horizontalSpeed;info._turnSpeed=this._turnSpeed;info.shiftCameraTo=this.shiftCameraTo;info.zFarAdjustingFactorBasedOnAABB=this.zFarAdjustingFactorBasedOnAABB;info.target=this.target;if(this._currentPos){info._currentPos=this._currentPos.clone();}
if(this._currentCenter){info._currentCenter=this._currentCenter.clone();}
if(this._currentDir){info._currentDir=this._currentDir.clone();}
info._deltaY=this._deltaY;info._newDir=this._newDir.clone();return info;}
set allInfo(arg){let json=arg;if(typeof arg==="string"){json=JSON.parse(arg);}
for(let key in json){if(json.hasOwnProperty(key)&&key in this){if(key==="quaternion"){this[key]=MathClassUtil.cloneOfMathObjects(MathClassUtil.arrayToQuaternion(json[key]));}else{this[key]=MathClassUtil.cloneOfMathObjects(MathClassUtil.arrayToVectorOrMatrix(json[key]));}}}}}
GLBoost$1["L_WalkThroughCameraController"]=L_WalkThroughCameraController;class MutableTexture extends AbstractTexture{constructor(glBoostContext,width,height,level=0,internalFormat=0x1908,format=0x1908,type=0x1401,magFileter=0x2601,minFilter=0x2601,wrapS=0x812F,wrapT=0x812F){super(glBoostContext);this._isTextureReady=false;this._texture=null;this._width=width;this._height=height;this._fbo=null;this._colorAttachmentId=null;this._depthAttachmentId=null;var gl=this._glContext.gl;this._texture=this._glContext.createTexture(this);gl.bindTexture(gl.TEXTURE_2D,this._texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,magFileter);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,minFilter);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,wrapS);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,wrapT);if(GLBoost$1.isThisGLVersion_2(gl)&&(internalFormat===6402||internalFormat===33189||internalFormat===33190||internalFormat===33191)){gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_COMPARE_MODE,gl.COMPARE_REF_TO_TEXTURE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_COMPARE_FUNC,gl.LESS);}
gl.texImage2D(gl.TEXTURE_2D,level,internalFormat,width,height,0,format,type,null);gl.bindTexture(gl.TEXTURE_2D,null);}
set colorAttachment(colorAttachmentId){this._colorAttachmentId=colorAttachmentId;}
get colorAttachment(){return this._colorAttachmentId;}
set depthAttachment(depthAttachmentId){this._depthAttachmentId=depthAttachmentId;}
get depthAttachment(){return this._depthAttachmentId;}
set frameBufferObject(fbo){this._fbo=fbo;}
get frameBufferObject(){return this._fbo;}}
class DataUtil{constructor(){}
static isNode(){let isNode=(window===void 0&&typeof process!=="undefined"&&typeof require!=="undefined");return isNode;}
static btoa(str){let isNode=DataUtil.isNode();if(isNode){let buffer;if(Buffer.isBuffer(str)){buffer=str;}
else{buffer=new Buffer(str.toString(),'binary');}
return buffer.toString('base64');}else{return btoa(str)}}
static atob(str){let isNode=DataUtil.isNode();if(isNode){return new Buffer(str,'base64').toString('binary');}else{return atob(str)}}
static base64ToArrayBuffer(dataUri){let splittedDataUri=dataUri.split(',');let type=splittedDataUri[0].split(':')[1].split(';')[0];let byteString=DataUtil.atob(splittedDataUri[1]);let byteStringLength=byteString.length;let arrayBuffer=new ArrayBuffer(byteStringLength);let uint8Array=new Uint8Array(arrayBuffer);for(let i=0;i<byteStringLength;i++){uint8Array[i]=byteString.charCodeAt(i);}
return arrayBuffer;}
static arrayBufferToString(arrayBuffer){if(typeof TextDecoder!=='undefined'){let textDecoder=new TextDecoder();return textDecoder.decode(arrayBuffer);}else{let bytes=new Uint8Array(arrayBuffer);let result="";let length=bytes.length;for(let i=0;i<length;i++){result+=String.fromCharCode(bytes[i]);}
return result;}}
static stringToBase64(str){let b64=null;b64=DataUtil.btoa(str);return b64;}
static UInt8ArrayToDataURL(uint8array,width,height){let canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;let ctx=canvas.getContext("2d");let imageData=ctx.createImageData(width,height);for(let i=0;i<imageData.data.length;i+=4){imageData.data[i+0]=uint8array[(height-Math.floor(i/(4*width)))*(4*width)+i%(4*width)+0];imageData.data[i+1]=uint8array[(height-Math.floor(i/(4*width)))*(4*width)+i%(4*width)+1];imageData.data[i+2]=uint8array[(height-Math.floor(i/(4*width)))*(4*width)+i%(4*width)+2];imageData.data[i+3]=uint8array[(height-Math.floor(i/(4*width)))*(4*width)+i%(4*width)+3];}
ctx.putImageData(imageData,0,0);canvas.remove();return canvas.toDataURL("image/png");}
static loadResourceAsync(resourceUri,isBinary,resolveCallback,rejectCallback){return new Promise((resolve,reject)=>{let isNode=DataUtil.isNode();if(isNode){let fs=require('fs');let args=[resourceUri];let func=(err,response)=>{if(err){if(rejectCallback){rejectCallback(reject,err);}
return;}
if(isBinary){let buffer=new Buffer(response,'binary');let uint8Buffer=new Uint8Array(buffer);response=uint8Buffer.buffer;}
resolveCallback(resolve,response);};if(isBinary){args.push(func);}else{args.push('utf8');args.push(func);}
fs.readFile.apply(fs,args);}else{let xmlHttp=new XMLHttpRequest();if(isBinary){xmlHttp.responseType="arraybuffer";xmlHttp.onload=(oEvent)=>{let response=null;if(isBinary){response=xmlHttp.response;}else{response=xmlHttp.responseText;}
resolveCallback(resolve,response);};}else{xmlHttp.onreadystatechange=()=>{if(xmlHttp.readyState===4&&(Math.floor(xmlHttp.status/100)===2||xmlHttp.status===0)){let response=null;if(isBinary){response=xmlHttp.response;}else{response=xmlHttp.responseText;}
resolveCallback(resolve,response);}else{if(rejectCallback){rejectCallback(reject,xmlHttp.status);}}};}
xmlHttp.open("GET",resourceUri,true);xmlHttp.send(null);}});}}
GLBoost$1['DataUtil']=DataUtil;class Texture extends AbstractTexture{constructor(glBoostContext,src,userFlavorName,parameters=null){super(glBoostContext);this._isTextureReady=false;this._texture=null;if(typeof userFlavorName==='undefined'||userFlavorName===null){this.userFlavorName=this._instanceName;}else{this.userFlavorName=userFlavorName;}
this._parameters=(parameters)?parameters:{};if(typeof src==='undefined'||src===null);else if(typeof src==='string'){this.generateTextureFromUri(src);}else if(src instanceof Image){this.generateTextureFromImage(src);}else{this._generateTextureFromImageData(src);}}
_getParameter(paramNumber){let isParametersExist=false;if(this._parameters){isParametersExist=true;}
let params=this._parameters;let paramName=GLBoost$1.getNameOfGLBoostConstant(paramNumber);let ret=null;switch(paramNumber){case GLBoost$1['UNPACK_FLIP_Y_WEBGL']:case GLBoost$1['UNPACK_PREMULTIPLY_ALPHA_WEBGL']:case GLBoost$1['TEXTURE_MAG_FILTER']:case GLBoost$1['TEXTURE_MIN_FILTER']:case GLBoost$1['TEXTURE_WRAP_S']:case GLBoost$1['TEXTURE_WRAP_T']:if(isParametersExist&&params[paramName]){ret=params[paramName];}
break;}
return ret;}
_getParamWithAlternative(paramNumber,alternative){return MiscUtil.getTheValueOrAlternative(this._getParameter(paramNumber),alternative);}
generateTextureFromUri(imageUri,isKeepBound=false){return new Promise((resolve,reject)=>{let isNode=DataUtil.isNode();if(isNode){let getPixels=require("get-pixels");let results=getPixels(imageUri,(err,pixels)=>{if(err){console.log("Bad image path");reject();return;}
this._width=pixels.shape[0];this._height=pixels.shape[1];let texture=this._generateTextureInnerWithArrayBufferView(pixels.data,this._width,this._height,isKeepBound);this._texture=texture;this._isTextureReady=true;resolve();});}else{this._img=new Image();if(!imageUri.match(/^data:/)){this._img.crossOrigin='Anonymous';}
this._img.onload=()=>{let imgCanvas=this._getResizedCanvas(this._img);this._width=imgCanvas.width;this._height=imgCanvas.height;let texture=this._generateTextureInner(imgCanvas,isKeepBound);this._texture=texture;this._isTextureReady=true;resolve();};this._img.src=imageUri;}});}
generateTextureFromImage(img){let imgCanvas=this._getResizedCanvas(img);this._width=imgCanvas.width;this._height=imgCanvas.height;let texture=this._generateTextureInner(imgCanvas,false);this._texture=texture;this._isTextureReady=true;}
_generateTextureFromImageData(imageData){var gl=this._glContext.gl;var glem=GLExtensionsManager.getInstance(this._glContext);var imgCanvas=this._getResizedCanvas(imageData);this._width=imgCanvas.width;this._height=imgCanvas.height;var texture=this._generateTextureInner(imgCanvas,false);this._texture=texture;this._isTextureReady=true;this._img=imageData;this._onLoad();}
_generateTextureInnerWithArrayBufferView(imgCanvas,width,height,isKeepBound){var gl=this._glContext.gl;var glem=GLExtensionsManager.getInstance(this._glContext);var texture=this._glContext.createTexture(this);gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,this._getParamWithAlternative(GLBoost$1.UNPACK_FLIP_Y_WEBGL,false));gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this._getParamWithAlternative(GLBoost$1.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false));gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,width,height,0,gl.RGBA,gl.UNSIGNED_BYTE,imgCanvas);if(this._isPowerOfTwoTexture()){gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this._getParamWithAlternative(GLBoost$1.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR));if(glem.extTFA){gl.texParameteri(gl.TEXTURE_2D,glem.extTFA.TEXTURE_MAX_ANISOTROPY_EXT,4);}}
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this._getParamWithAlternative(GLBoost$1.TEXTURE_MAG_FILTER,gl.LINEAR));gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this._getParamWithAlternative(GLBoost$1.TEXTURE_WRAP_S,gl.REPEAT));gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this._getParamWithAlternative(GLBoost$1.TEXTURE_WRAP_T,gl.REPEAT));gl.generateMipmap(gl.TEXTURE_2D);if(!isKeepBound){gl.bindTexture(gl.TEXTURE_2D,null);}
return texture;}
_generateTextureInner(imgCanvas,isKeepBound){var gl=this._glContext.gl;var glem=GLExtensionsManager.getInstance(this._glContext);var texture=this._glContext.createTexture(this);gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,this._getParamWithAlternative(GLBoost$1.UNPACK_FLIP_Y_WEBGL,false));gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this._getParamWithAlternative(GLBoost$1.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false));gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,imgCanvas);if(this._isPowerOfTwoTexture()){gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this._getParamWithAlternative(GLBoost$1.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR));if(glem.extTFA){gl.texParameteri(gl.TEXTURE_2D,glem.extTFA.TEXTURE_MAX_ANISOTROPY_EXT,4);}}
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this._getParamWithAlternative(GLBoost$1.TEXTURE_MAG_FILTER,gl.LINEAR));gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this._getParamWithAlternative(GLBoost$1.TEXTURE_WRAP_S,gl.REPEAT));gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this._getParamWithAlternative(GLBoost$1.TEXTURE_WRAP_T,gl.REPEAT));gl.generateMipmap(gl.TEXTURE_2D);if(!isKeepBound){gl.bindTexture(gl.TEXTURE_2D,null);}
return texture;}
_onLoad(){}
get isTextureReady(){return this._isTextureReady;}
get isImageAssignedForTexture(){return typeof this._img=='undefined';}}
GLBoost$1['Texture']=Texture;class PhinaTexture extends Texture{constructor(glBoostContext,width,height,fillStyle,parameters=null){super(glBoostContext,null,null,parameters);this._parameters['UNPACK_FLIP_Y_WEBGL']=true;this._width=width;this._height=height;this._fillStyle=fillStyle;this._phinaObjects=[];this._setUpOffscreen();}
_setUpOffscreen(){this._offscreen=phina.display.OffScreenLayer({width:this.width,height:this.height,fillStyle:this._fillStyle});this._offscreen.reset();}
addPhinaObject(object){this._phinaObjects.push(object);return this;}
addPhinaObjects(objects){this._phinaObjects=this._phinaObjects.concat(objects);return this;}
setPhinaObjects(objects){this._phinaObjects=objects.concat();return this;}
clearPhinaObjects(){this._phinaObjects.length=0;return this;}
renderPhinaObjects(){for(let i=0;i<this._phinaObjects.length;i++){this._offscreen.renderObject(this._phinaObjects[i]);}
this._recreateTexture(this._offscreen.getImageDataURL());this._offscreen.reset();}
_recreateTexture(imageDataUri){var oldTexture=this._texture;this.generateTextureFromUri(imageDataUri,true);if(typeof oldTexture!=='undefined'&&oldTexture!==null){this._glContext.deleteTexture(this,oldTexture);}}}
class CubeTexture extends AbstractTexture{constructor(glBoostContext,userFlavorName,parameters=null){super(glBoostContext);this._isTextureReady=false;this._texture=null;if(typeof userFlavorName==='undefined'||userFlavorName===null){this.userFlavorName=this._instanceName;}else{this.userFlavorName=userFlavorName;}
this._parameters=(parameters)?parameters:{};}
_getParameter(paramNumber){let isParametersExist=false;if(this._parameters){isParametersExist=true;}
let params=this._parameters;let paramName=GLBoost$1.getNameOfGLBoostConstant(paramNumber);let ret=null;switch(paramNumber){case GLBoost$1['UNPACK_FLIP_Y_WEBGL']:case GLBoost$1['UNPACK_PREMULTIPLY_ALPHA_WEBGL']:case GLBoost$1['TEXTURE_MAG_FILTER']:case GLBoost$1['TEXTURE_MIN_FILTER']:case GLBoost$1['TEXTURE_WRAP_S']:case GLBoost$1['TEXTURE_WRAP_T']:if(isParametersExist&&params[paramName]){ret=params[paramName];}
break;}
return ret;}
_getParamWithAlternative(paramNumber,alternative){return MiscUtil.getTheValueOrAlternative(this._getParameter(paramNumber),alternative);}
generateTextureFromSixSideImages(posXimages,negXimages,posYimages,negYimages,posZimages,negZimages){var texture=this._glContext.createTexture(this);this._texture=texture;const gl=this._glContext.gl;gl.bindTexture(gl.TEXTURE_CUBE_MAP,texture);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);const loadImageToGPU=(images,cubemapSide)=>{for(let i=0;i<images.length;i++){const image=new Image();image.crossOrigin="Anonymous";image.src=images[i];image.onload=()=>{gl.texImage2D(cubemapSide,i,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);};}};loadImageToGPU(posXimages,gl.TEXTURE_CUBE_MAP_POSITIVE_X);loadImageToGPU(negXimages,gl.TEXTURE_CUBE_MAP_NEGATIVE_X);loadImageToGPU(posYimages,gl.TEXTURE_CUBE_MAP_POSITIVE_Y);loadImageToGPU(negYimages,gl.TEXTURE_CUBE_MAP_NEGATIVE_Y);loadImageToGPU(posZimages,gl.TEXTURE_CUBE_MAP_POSITIVE_Z);loadImageToGPU(negZimages,gl.TEXTURE_CUBE_MAP_NEGATIVE_Z);}
async generateTextureFromBaseUri(baseUri,mipLevelNum){return new Promise((resolve,reject)=>{var texture=this._glContext.createTexture(this);this._texture=texture;const gl=this._glContext.gl;let loadedCount=0;gl.bindTexture(gl.TEXTURE_CUBE_MAP,texture);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);if(mipLevelNum>=2){gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MAG_FILTER,gl.LINEAR);}else{gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_CUBE_MAP,gl.TEXTURE_MAG_FILTER,gl.LINEAR);}
const onLoadEachCubeImage=(texture,face,image,i)=>{return()=>{gl.bindTexture(gl.TEXTURE_CUBE_MAP,texture);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.texImage2D(face,i,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);loadedCount++;if(loadedCount===6){this._isTextureReady=true;resolve(this);}};};for(let i=0;i<mipLevelNum;i++){let faces=[[baseUri+"_right_"+i+".jpg",gl.TEXTURE_CUBE_MAP_POSITIVE_X],[baseUri+"_left_"+i+".jpg",gl.TEXTURE_CUBE_MAP_NEGATIVE_X],[baseUri+"_top_"+i+".jpg",gl.TEXTURE_CUBE_MAP_POSITIVE_Y],[baseUri+"_bottom_"+i+".jpg",gl.TEXTURE_CUBE_MAP_NEGATIVE_Y],[baseUri+"_front_"+i+".jpg",gl.TEXTURE_CUBE_MAP_POSITIVE_Z],[baseUri+"_back_"+i+".jpg",gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]];for(var j=0;j<faces.length;j++){const face=faces[j][1];const image=new Image();image.crossOrigin="Anonymous";image.onload=onLoadEachCubeImage(texture,face,image,i);image.src=faces[j][0];}}});}
get isTextureReady(){return this._isTextureReady;}}
class VideoTexture extends AbstractTexture{constructor(glBoostContext,userFlavorName){super(glBoostContext);}
async generateTextureFromVideoUri(uri,playButtonDomElement,mutedAutoPlay){return new Promise((resolve,reject)=>{var button=playButtonDomElement;const playAndSetupTexture=()=>{video.play();this._width=video.width;this._height=video.height;let texture=this._generateTextureInner(video,false);this._texture=texture;this._isTextureReady=true;resolve();};button.addEventListener("click",()=>{playAndSetupTexture();},true);const video=document.createElement("video");video.crossOrigin="anonymous";video.setAttribute("playsinline","playsinline");if(mutedAutoPlay){video.autoplay=true;video.muted=true;}
video.preload="auto";this._video=video;video.addEventListener("canplaythrough",()=>{if(button.value!=="running"){button.disabled=false;playAndSetupTexture();}},true);video.addEventListener("ended",function(){video.play();},true);video.src=uri;});}
_generateTextureInner(video,isKeepBound){var gl=this._glContext.gl;var texture=this._glContext.createTexture(this);gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,video);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);if(!isKeepBound){gl.bindTexture(gl.TEXTURE_2D,null);}
return texture;}
get isTextureReady(){return this._isTextureReady;}
get isImageAssignedForTexture(){return typeof this._img=="undefined";}
updateTexture(){var gl=this._glContext.gl;gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,this._video);}
set playbackRate(value){this._video.playbackRate=value;}
get playbackRate(){const playbackRate=this._video.playbackRate;return playbackRate!=null?playbackRate:1;}}
class Cube extends Geometry{constructor(glBoostContext,widthVector,vertexColor){super(glBoostContext);widthVector=MathClassUtil.arrayToVector(widthVector);vertexColor=MathClassUtil.arrayToVector(vertexColor);this._setupVertexData(widthVector.divide(2.0),vertexColor);}
_setupVertexData(widthVector,vertexColor){var indices=[3,1,0,2,1,3,4,5,7,7,5,6,8,9,11,11,9,10,15,13,12,14,13,15,19,17,16,18,17,19,20,21,23,23,21,22];var positions=[new Vector3(-widthVector.x,widthVector.y,-widthVector.z),new Vector3(widthVector.x,widthVector.y,-widthVector.z),new Vector3(widthVector.x,widthVector.y,widthVector.z),new Vector3(-widthVector.x,widthVector.y,widthVector.z),new Vector3(-widthVector.x,-widthVector.y,-widthVector.z),new Vector3(widthVector.x,-widthVector.y,-widthVector.z),new Vector3(widthVector.x,-widthVector.y,widthVector.z),new Vector3(-widthVector.x,-widthVector.y,widthVector.z),new Vector3(-widthVector.x,-widthVector.y,widthVector.z),new Vector3(widthVector.x,-widthVector.y,widthVector.z),new Vector3(widthVector.x,widthVector.y,widthVector.z),new Vector3(-widthVector.x,widthVector.y,widthVector.z),new Vector3(-widthVector.x,-widthVector.y,-widthVector.z),new Vector3(widthVector.x,-widthVector.y,-widthVector.z),new Vector3(widthVector.x,widthVector.y,-widthVector.z),new Vector3(-widthVector.x,widthVector.y,-widthVector.z),new Vector3(widthVector.x,-widthVector.y,-widthVector.z),new Vector3(widthVector.x,-widthVector.y,widthVector.z),new Vector3(widthVector.x,widthVector.y,widthVector.z),new Vector3(widthVector.x,widthVector.y,-widthVector.z),new Vector3(-widthVector.x,-widthVector.y,-widthVector.z),new Vector3(-widthVector.x,-widthVector.y,widthVector.z),new Vector3(-widthVector.x,widthVector.y,widthVector.z),new Vector3(-widthVector.x,widthVector.y,-widthVector.z)];var colors=[new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w)];var texcoords=[new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0)];var normals=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,1),new Vector3(0,0,1),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,0,-1),new Vector3(0,0,-1),new Vector3(0,0,-1),new Vector3(1,0,0),new Vector3(1,0,0),new Vector3(1,0,0),new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(-1,0,0),new Vector3(-1,0,0),new Vector3(-1,0,0),];this.setVerticesData({position:positions,color:colors,normal:normals,texcoord:texcoords},[indices]);}}
GLBoost$1["Cube"]=Cube;class ArrayUtil{constructor(){}
static merge(){var key,result=false;if(arguments&&arguments.length>0){result=[];for(var i=0,len=arguments.length;i<len;i++){if(arguments[i]&&typeof arguments[i]==='object'){for(key in arguments[i]){if(isFinite(key)){result.push(arguments[i][key]);}else{result[key]=arguments[i][key];}}}}}
return result;}}
class Plane extends Geometry{constructor(glBoostContext,width,height,uSpan,vSpan,customVertexAttributes,isUVRepeat=false){super(glBoostContext);this._setupVertexData(width,height,uSpan,vSpan,customVertexAttributes,isUVRepeat);}
_setupVertexData(width,height,uSpan,vSpan,customVertexAttributes,isUVRepeat){var positions=[];for(let i=0;i<=vSpan;i++){for(let j=0;j<=uSpan;j++){positions.push(new Vector3((j/uSpan-1/2)*width,0,(i/vSpan-1/2)*height));}}
var indices=[];for(let i=0;i<vSpan;i++){let degenerate_left_index=0;let degenerate_right_index=0;for(let j=0;j<=uSpan;j++){indices.push(i*(uSpan+1)+j);indices.push((i+1)*(uSpan+1)+j);if(j===0){degenerate_left_index=(i+1)*(uSpan+1)+j;}else if(j===uSpan){degenerate_right_index=(i+1)*(uSpan+1)+j;}}
indices.push(degenerate_right_index);indices.push(degenerate_left_index);}
var colors=[];var vertexColor=new Vector4$1(1,1,1,1);for(let i=0;i<=vSpan;i++){for(let j=0;j<=uSpan;j++){colors.push(vertexColor);}}
var texcoords=[];for(let i=0;i<=vSpan;i++){for(let j=0;j<=uSpan;j++){if(isUVRepeat){texcoords.push(new Vector2(j,i));}else{texcoords.push(new Vector2(j/uSpan,i/vSpan));}}}
var normal=new Vector3(0,1,0);var normals=[];for(let i=0;i<=vSpan;i++){for(let j=0;j<=uSpan;j++){normals.push(normal);}}
var object={position:positions,color:colors,texcoord:texcoords,normal:normals};var completeAttributes=ArrayUtil.merge(object,customVertexAttributes);this.setVerticesData(completeAttributes,[indices],GLBoost$1.TRIANGLE_STRIP);}}
GLBoost$1["Plane"]=Plane;class Sphere extends Geometry{constructor(glBoostSystem,radius,widthSegments,heightSegments,vertexColor){super(glBoostSystem);this._setupVertexData(radius,widthSegments,heightSegments,vertexColor);}
_setupVertexData(radius,widthSegments,heightSegments,vertexColor){var positions=[];var texcoords=[];var colors=[];var normals=[];if(!vertexColor){vertexColor=new Vector4$1(1,1,1,1);}
let shiftValue=0.00001;for(var latNumber=0;latNumber<=heightSegments;latNumber++){var theta=latNumber*Math.PI/heightSegments+shiftValue;var sinTheta=Math.sin(theta);var cosTheta=Math.cos(theta);for(var longNumber=0;longNumber<=widthSegments;longNumber++){var phi=longNumber*2*Math.PI/widthSegments;var sinPhi=Math.sin(phi);var cosPhi=Math.cos(phi);var x=radius*cosPhi*sinTheta;var y=radius*cosTheta;var z=radius*sinPhi*sinTheta;var position=new Vector3(x,y,z);positions.push(position);var u=1-(longNumber/widthSegments);var v=latNumber/heightSegments;texcoords.push(new Vector2(u,v));colors.push(vertexColor);normals.push(Vector3.normalize(position));}}
var indices=[];for(var latNumber=0;latNumber<heightSegments;latNumber++){for(var longNumber=0;longNumber<widthSegments;longNumber++){var first=(latNumber*(widthSegments+1))+longNumber;var second=first+widthSegments+1;indices.push(first+1);indices.push(second);indices.push(first);indices.push(first+1);indices.push(second+1);indices.push(second);}}
var object={position:positions,color:colors,texcoord:texcoords,normal:normals};this.setVerticesData(object,[indices],GLBoost$1.TRIANGLES);}}
GLBoost$1["Sphere"]=Sphere;class Axis extends Geometry{constructor(glBoostContext,length){super(glBoostContext);this._setupVertexData(length);}
_setupVertexData(length){let nearZeroValue=0.0001;let positions=[new Vector3(0,nearZeroValue,nearZeroValue),new Vector3(length,nearZeroValue,nearZeroValue),new Vector3(nearZeroValue,0,nearZeroValue),new Vector3(nearZeroValue,length,nearZeroValue),new Vector3(nearZeroValue,nearZeroValue,0),new Vector3(nearZeroValue,nearZeroValue,length),];let colors=[new Vector4$1(1,0,0,1),new Vector4$1(1,0,0,1),new Vector4$1(0,1,0,1),new Vector4$1(0,1,0,1),new Vector4$1(0,0,1,1),new Vector4$1(0,0,1,1),];this.setVerticesData({position:positions,color:colors},null,GLBoost$1.LINES);}}
GLBoost$1["Axis"]=Axis;class ParticleShaderSource{VSDefine_ParticleShaderSource(in_,out_,f){var shaderText='';shaderText+=`${in_} vec3 aVertex_particleCenterPos;\n`;shaderText+='uniform mat4 projectionMatrix;\n';shaderText+='uniform mat4 modelViewMatrix;\n';return shaderText;}
VSTransform_ParticleShaderSource(existCamera_f,f){var shaderText='';shaderText+='  vec4 cameraCenterPos = modelViewMatrix * vec4(aVertex_particleCenterPos, 1.0);\n';shaderText+='  vec4 cameraEachPointPos = cameraCenterPos + vec4(aVertex_position - aVertex_particleCenterPos, 1.0);\n';shaderText+='  gl_Position = projectionMatrix * cameraEachPointPos;\n';return shaderText;}
prepare_ParticleShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];shaderProgram['vertexAttribute_'+'particleCenterPos']=gl.getAttribLocation(shaderProgram,'aVertex_'+'particleCenterPos');gl.enableVertexAttribArray(shaderProgram['vertexAttribute_'+'particleCenterPos']);vertexAttribsAsResult.push('particleCenterPos');material.setUniform(shaderProgram,'uniform_projectionMatrix',this._glContext.getUniformLocation(shaderProgram,'projectionMatrix'));material.setUniform(shaderProgram,'uniform_modelViewMatrix',this._glContext.getUniformLocation(shaderProgram,'modelViewMatrix'));material._semanticsDic['PROJECTION']='projectionMatrix';material._semanticsDic['MODELVIEW']='modelViewMatrix';return vertexAttribsAsResult;}}
class Particle extends Geometry{constructor(glBoostContext,centerPointData,particleWidth,particleHeight,customVertexAttributes,performanceHint){super(glBoostContext);this._setupVertexData(centerPointData,particleWidth/2.0,particleHeight/2.0,customVertexAttributes,performanceHint);}
_setupVertexAndIndexData(centerPointData,pHalfWidth,pHalfHeight,customVertexAttributes,needDefaultWhiteColor){let indices=this.indices;indices=[];const positionArray=centerPointData.position;for(let i=0;i<positionArray.length;i++){var offset=i*4;indices.push(offset);indices.push(offset+1);indices.push(offset+2);indices.push(offset+3);if(i===positionArray.length-1){break;}
indices.push(offset+3);indices.push(offset+4);}
this.positions=[];let positions=this.positions;for(let i=0;i<positionArray.length;i++){positionArray[i]=MathClassUtil.arrayToVector(positionArray[i]);}
for(let i=0;i<positionArray.length;i++){positions.push(new Vector3(positionArray[i].x-pHalfWidth,positionArray[i].y+pHalfHeight,positionArray[i].z));positions.push(new Vector3(positionArray[i].x-pHalfWidth,positionArray[i].y-pHalfHeight,positionArray[i].z));positions.push(new Vector3(positionArray[i].x+pHalfWidth,positionArray[i].y+pHalfHeight,positionArray[i].z));positions.push(new Vector3(positionArray[i].x+pHalfWidth,positionArray[i].y-pHalfHeight,positionArray[i].z));}
this.centerPositions=[];let centerPositions=this.centerPositions;for(let i=0;i<positionArray.length;i++){centerPositions.push(new Vector3(positionArray[i].x,positionArray[i].y,positionArray[i].z));centerPositions.push(new Vector3(positionArray[i].x,positionArray[i].y,positionArray[i].z));centerPositions.push(new Vector3(positionArray[i].x,positionArray[i].y,positionArray[i].z));centerPositions.push(new Vector3(positionArray[i].x,positionArray[i].y,positionArray[i].z));}
this.texcoords=[];let texcoords=this.texcoords;for(let i=0;i<positionArray.length;i++){texcoords.push(new Vector2(0,0));texcoords.push(new Vector2(0,1));texcoords.push(new Vector2(1,0));texcoords.push(new Vector2(1,1));}
this.normals=[];let normals=this.normals;var normal=new Vector3(0,0,1);for(let i=0;i<positionArray.length;i++){for(let j=0;j<4;j++){normals.push(normal);}}
this.pointData={};let pointData=this.pointData;for(let type in centerPointData){if(type!=='position'){pointData[type]=[];for(let i=0;i<positionArray.length;i++){for(let j=0;j<4;j++){pointData[type].push(centerPointData[type][i]);}}}}
var object={position:positions,texcoord:texcoords,normal:normals,particleCenterPos:centerPositions};if(needDefaultWhiteColor){this.colors=[];let colors=this.colors;var vertexColor=new Vector4$1(1,1,1,1);for(let i=0;i<positionArray.length;i++){for(let j=0;j<4;j++){colors.push(vertexColor);}}
object.color=colors;}
var tempAttributes=ArrayUtil.merge(object,pointData);var completeAttributes=ArrayUtil.merge(tempAttributes,customVertexAttributes);return{vertexAttributes:completeAttributes,indexArray:[indices]};}
_updateVertexAndIndexData(centerPointData,pHalfWidth,pHalfHeight,customVertexAttributes,needDefaultWhiteColor){let positionArray=centerPointData.position;let idx=0;let positions=this.positions;for(let i=0;i<positionArray.length;i++){positions[idx+0].x=positionArray[i].x-pHalfWidth;positions[idx+0].y=positionArray[i].y+pHalfHeight;positions[idx+0].z=positionArray[i].z;positions[idx+1].x=positionArray[i].x-pHalfWidth;positions[idx+1].y=positionArray[i].y-pHalfHeight;positions[idx+1].z=positionArray[i].z;positions[idx+2].x=positionArray[i].x+pHalfWidth;positions[idx+2].y=positionArray[i].y+pHalfHeight;positions[idx+2].z=positionArray[i].z;positions[idx+3].x=positionArray[i].x+pHalfWidth;positions[idx+3].y=positionArray[i].y-pHalfHeight;positions[idx+3].z=positionArray[i].z;idx+=4;}
let centerPositions=this.centerPositions;idx=0;for(let i=0;i<positionArray.length;i++){centerPositions[idx].x=positionArray[i].x;centerPositions[idx].y=positionArray[i].y;centerPositions[idx].z=positionArray[i].z;centerPositions[idx+1].x=positionArray[i].x;centerPositions[idx+1].y=positionArray[i].y;centerPositions[idx+1].z=positionArray[i].z;centerPositions[idx+2].x=positionArray[i].x;centerPositions[idx+2].y=positionArray[i].y;centerPositions[idx+2].z=positionArray[i].z;centerPositions[idx+3].x=positionArray[i].x;centerPositions[idx+3].y=positionArray[i].y;centerPositions[idx+3].z=positionArray[i].z;idx+=4;}
idx=0;let pointData=this.pointData;for(let type in centerPointData){if(type!=='position'){pointData[type]=[];for(let i=0;i<positionArray.length;i++){for(let j=0;j<4;j++){pointData[type][idx].x=centerPointData[type][i].x;pointData[type][idx].y=centerPointData[type][i].y;pointData[type][idx].z=centerPointData[type][i].z;idx++;}}}}
var object={position:positions,texcoord:this.texcoords,normal:this.normals,particleCenterPos:centerPositions};if(needDefaultWhiteColor){object.color=this.colors;}
var tempAttributes=ArrayUtil.merge(object,pointData);var completeAttributes=ArrayUtil.merge(tempAttributes,customVertexAttributes);return{vertexAttributes:completeAttributes,indexArray:[this.indices]}}
_setupVertexData(centerPointData,pHalfWidth,pHalfHeight,customVertexAttributes,performanceHint){var result=this._setupVertexAndIndexData(centerPointData,pHalfWidth,pHalfHeight,customVertexAttributes,true);this.setVerticesData(result.vertexAttributes,result.indexArray,GLBoost$1.TRIANGLE_STRIP,performanceHint);}
updateVerticesData(centerPointData,particleWidth,particleHeight,customVertexAttributes){const result=this._updateVertexAndIndexData(centerPointData,particleWidth/2.0,particleHeight/2.0,customVertexAttributes,false);super.updateVerticesData(result.vertexAttributes);}
prepareToRender(expression,existCamera_f,pointLight,meshMaterial,renderPasses,mesh){if(meshMaterial){this._materialForBillboard=meshMaterial;}else{this._materialForBillboard=this._defaultMaterial;}
class ParticleShader extends this._materialForBillboard.shaderClass{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader,ParticleShaderSource);ParticleShader.mixin(ParticleShaderSource);this._meshTransformUpdateCount=-9999;this._cameraViewUpdateCount=-9999;this._cameraProjectionUpdateCount=-9999;}
setUniforms(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){super.setUniforms(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData);return true;}}
if(meshMaterial){meshMaterial.shaderClass=ParticleShader;}else{this._defaultMaterial.shaderClass=ParticleShader;}
super.prepareToRender(expression,existCamera_f,pointLight,meshMaterial,renderPasses,mesh);}}
GLBoost$1["Particle"]=Particle;class Screen extends Geometry{constructor(glBoostContext,screen={unit:'ratio',range:'positive-negative',origin:new Vector2(-1,-1),size:new Vector2(2,2),},customVertexAttributes=null){super(glBoostContext);this._setupVertexData(screen,customVertexAttributes);}
_setupVertexData(screen,customVertexAttributes){let positions=[];let indices=[];let colors=[];let texcoords=[];let normals=[];let originX=screen.origin.x;let originY=screen.origin.y;let sizeX=screen.size.x;let sizeY=screen.size.y;if(screen.unit==='pixel'){originX=originX/this._glContext.canvasWidth;originY=originY/this._glContext.canvasHeight;sizeX=sizeX/this._glContext.canvasWidth;sizeY=sizeY/this._glContext.canvasHeight;}
if(screen.range==='positive'){originX=(originX-0.5)*2;originY=(originY-0.5)*2;sizeX=sizeX*2;sizeY=sizeY*2;}
screen.origin=new Vector2(originX,originY);screen.size=new Vector2(sizeX,sizeY);this._setupQuad(positions,indices,colors,texcoords,normals,screen.origin,screen.size,1,1,screen.uUVRepeat,screen.vUVRepeat);let object={position:positions,color:colors,texcoord:texcoords,normal:normals};let completeAttributes=ArrayUtil.merge(object,customVertexAttributes);this.setVerticesData(completeAttributes,[indices],GLBoost$1.TRIANGLE_STRIP);}
_setupQuad(positions,indices,colors,texcoords,normals,originInRatioVec2,sizeInRatioVec2,uSpan,vSpan,uUVRepeat,vUVRepeat){for(let i=0;i<=vSpan;i++){for(let j=0;j<=uSpan;j++){positions.push(new Vector3(originInRatioVec2.x+(j/uSpan)*sizeInRatioVec2.x,originInRatioVec2.y+(i/vSpan)*sizeInRatioVec2.y,0));}}
for(let i=0;i<vSpan;i++){let degenerate_left_index=0;let degenerate_right_index=0;for(let j=0;j<=uSpan;j++){indices.push(i*(uSpan+1)+j);indices.push((i+1)*(uSpan+1)+j);if(j===0){degenerate_left_index=(i+1)*(uSpan+1)+j;}else if(j===uSpan){degenerate_right_index=(i+1)*(uSpan+1)+j;}}
indices.push(degenerate_right_index);indices.push(degenerate_left_index);}
let vertexColor=new Vector4$1(1,1,1,1);for(let i=0;i<=vSpan;i++){for(let j=0;j<=uSpan;j++){colors.push(vertexColor);}}
for(let i=0;i<=vSpan;i++){for(let j=0;j<=uSpan;j++){texcoords.push(new Vector2(j,i));}}
let normal=new Vector3(0,0,-1);for(let i=0;i<=vSpan;i++){for(let j=0;j<=uSpan;j++){normals.push(normal);}}}}
GLBoost$1["Screen"]=Screen;class GLBoostLowContext{constructor(canvas,initParameter,gl,width,height){this._setName();this.__system=new GLBoostSystem(canvas,initParameter,gl,width,height,this);console.log('*** GLBoost '+GLBoost$1.VERSION+' ***');const dummyWhite1x1ImageDataUrl='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REY4MUVGRjk0QzMyMTFFN0I2REJDQTc4QjEyOEY2RTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REY4MUVGRkE0QzMyMTFFN0I2REJDQTc4QjEyOEY2RTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpERjgxRUZGNzRDMzIxMUU3QjZEQkNBNzhCMTI4RjZFOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpERjgxRUZGODRDMzIxMUU3QjZEQkNBNzhCMTI4RjZFOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvTp+QkAAAAPSURBVHjaYvj//z9AgAEABf4C/i3Oie4AAAAASUVORK5CYII=';const pbrCookTorranceBrdfLutDataUrl='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAIAAADTED8xAAAAA3NCSVQICAjb4U/gAAAgAElEQVR4nO19Xbfjqo7tJOV9zumHvn///tm7w32wAX0jsJNatbsZa7iEEJgkc0oCk1T5v38BQIW6VltvGwOojt7paFTr3HiqdwVr8FXBk/cM3F7V0TvyfbOPVj9hkNRkzI4CVMC4FtQ6NLS/3aWgVLcVmWq7o2c81UeCGnxDgCP398czTvbq70Onq2tDZCTM8k3PVk0NFg22S2bkAx6gyScBzyDHAeSr5fJ/ZqupNw1sgQ8uBD2gKQglHNk0XhihANWwD+RHmm5WdZnyIUOYPU1yPn4EODuEfj3JAaxUT9ZtgD4FYjK4aEJuBG2WkfNKLSNh9kjTzeqGgS7byM4MZRY3AsBS7nEA4chGlYxAW6GEvOcWg3s24hammdkllnfQT3I2MaDustF0s6rLI649Ux4kCbwIAFrli4FVDiAYOahymOYhngJxej1gjqCVq3LWuL2MP9HZi7LHh2exbvY1IgB49Q4H9FBIV6FW4VOsZ5z6JRTAyYVW3XYyCCAcxJXTcSAY7dnqJwweL/nxZQQAr+5x4CpWF6SrgL0vBB/rSwLCXOjTQcCTDYjn4oDs5VjerG4Y6GIabLv/m1w64KcrexxA2AWrZPD3hR4QClDZxDx7sxUrMu07HVz23Y0Dz1Y3DEyNLp8OCEE5Ctx0ZY8DCLvAt6RV8BFg7QttCFDjgwcZ1+y248fuOEjHgY9WNwySGrN8jRLXGgD5DGdmibALchEAfARYYWpDgNlKCBaZtbdsKQh4ffPyGIrHAWH50aqpmZZnsW6a3efJQXFwhwNiTl4XaoAcGa6qk7Kv+XvPzBrcHEQrYxlW33x3D5R6tHw1HllXtzW6JHt9zf1DLoJ3OYB0FyRdvmlWgDCSCAF8tNgM1t6o2cXuvgL3oGnSpYAGK205rd63/6jmkbI0rNoG3eKAHMTvgtlT3pgbJkyTAqatHF6PB4GlJjcOtGBlt86qWLF/UJMvn3P/HU60WA/C1jmAjPF5+9lT3jkZwiM9U8c/ac3lQoEBLJs7TQZA2wv4aCjY1pjlJqyXuptA94pzFGKRA/Yg1hUYz4kh9HkyKFc9dfx5d04PomUQP8W0xjcSvaZNQVX01dUNg6TGU+pyp++GsVeyx6FjDiB9YA6noDZesUgGcBZB2XiCaS+VimC6VzACLBuzKW8pwUq8nG6FtgcrX0b/I0jVxfP0we10l8lx6CQHkD402udHV7RZ0FuRBJab33H8XIlZLqRH0DKcprgaN40xOUvNvuZoWOyS1HjK7xePGGaJjkN/ggMgVSSeD5j6YdBYpJuEAD4glDz1659z/F5H776j42xBDH+0O5ql8tsDRVzCCPBhDgBrzwdgGmx9zQUJuad2rkF7Ez24r0I/rsYBBKHBtsYsPwe+XgmCgGg6Uvj+PAdADJCOAOBITTr+BRoQF/tgEBCtS1U5lPV4WNxLD5jU3DGL9U+VPNC9pgNJfD/KASgEm158GgGgboq048/SgMzNG0TLcJrM1qWqMRT5PE28wlLegXXS7HexopeYA+dM2hrgaQ6AO/UoAigvbhu0GbuCvyYW9lrpGYDPDc4g0p7ISFdF37UqZ6nXxbypaZZXfg3NXglQnulL1gAFFTPn/dzzAWgh/U1IVyiAtSYWZghlE6DTXCgYc1pNGuSr5gh5M9PSU3rltxPjLFN6qF2gaQKT4QmxhEMYmBAPn5GlBCubEmbYk/1ciI6vZfhVT7PDDfJR33T82tIz9kpgHDRt+/K4I/28dDnEKCkOJG24V/YigARoQQFw5wsAZXQHaQVcZVZu98g7/jyyPc3U0w9NOhFaUm7oHy9TbmwbHHbbdzlgCOEXAHQXYQNrTWxbzmRqD8gsyzVTTUE1r1kyMG08pdn9WX3cdL9kOABl4z4IE+P9Rg7oJg/HDMRqTexaEpkO6/XVjjYeLaje0dhunnxqH/Xx348JU3znbUDMskchXLN7HIDv3QHj2NxUAFU63jqIAHoQW2633A4C2xpxF0NTAHVEwuvo3SKw3y73R3uKAyCf5sJRCPd+NzgAJWgQZ367wUX5vV38CN+EXbGlWYW6I0IbT2lr+BEJbzQ9sftNny4bPj62ZL8KMeWAvprzuskBKZAuU2NoZfOI2iApu01q5LjjtLqhnGo8ZazX95r2+mklSYPxqxDbHAhixRc4ADNuiLcgXA8E8ryJPx/wOuoqnTZ8m1Xl0FjkjLt7s3qq9amSd/AZ47YGeJoDEybMOAAO69Pdml+GRDjCkNsdpd6R802rVc/AtBFKczRXqRKhbrzn3X+U7xcAmxqfRXcha4CCghDlN45LQBtzDiAD65WDn9ByuB4QstlkVxeDANXQOYOb5d22iUtPaY4QdEm2ZgwyZQPWeXuodx7el+IzE9zggOxIOEDHjgQFYo8zMOUiE4Nn3Hy4Mdo1UwcfeHetj+37xHr/2PGb41ODL6AfbRobmF7qQjsexv3idIhsTZqDTmMF+GgbHEC4N4pYzq0HvKowBp+VbnXtlYFQmpaxPUwgtrdr2/GbN8qPsFEece3JcvT+JspjDkRu/lEOQDh75/kAHFliut3Rs4dfjQzIsMEIj7v8uIlyPj9aN3gQ2V927ch19x+E7XJgvE7yirc5AEspHHkAd9e1z062Tau2AYlOwQimxlOad8z0QojgKbiT6H/c/YuyTQPanRYxVPgg7B4HqA3WOQBuYwg52pgy4K4HvKoYxzVQ39OlBqYmVmp9vnU0Eccwdfz4GPpXgwDtiBs00EP1csDa/GHmwW35vFwOgC2szRtRDoB8SB64LyGkzVSGtR7wqoGB1Chqxb2gPpXYqZtd5n3brKbQDwYXlhu+f5sDSLjzjcK+EUbvNEA83f10lsXeIKYBCAcglOTFG8SwaJOUYXUXlsw4r7kRBwK9bpr2je+obZKYvpP53OGAHoqWjWHH9wEQpDRpDrje3RoEyr4A4F+jAR/NJoaT0OtewsbsDoWVDO51LxCfkoS+5+ECqE1xD/5GmRjJDCLst9Hfb/QUB8SwusQ34ovgAMfTKW9tDcGypH49dv9DydE2yXx0lSQtnrGpiZXi6+raTEwvHlO3egbR4OpzXEJzPkGaFvEmf67EszW+EikmxeiBcHOT97WZQJC9xAEoe6kkIJ5nPro6e6AL/lYukwGsLPEh7rJtuYrm+45flw+FgnyR26CYJjzp1l4CjmlLUJQ3DjCladn6F+7IY6cuq63DNAKAQyEig7UYgEJSANklNGcs0TzFEpo/gf4+Hfw+GsgnwQPHYCkNKw5tPYZIA7jbo2L4AntZjIAP/oPeVNVK3GNn7+kLaTYXA9Q+cPkB7BZAvzKs2eVD6O/F9DJfKIfOSUS6QkWNYBPo0Zi9/QYHhAGEbMUNQELTc/DiUAP4Z79JBuUytl3+HujlsOnMY4MtN8s37wX9y3B0HpOEZ/aYzCUPuUeSA1DnQCeywxmEiQ0NI6iGgdkL6jOzEaw2mkVJ4n7V07t3nHHg+9D/LaWlQBwxDI7BO+U3XQyB/3iBZCyaeIa8cphZcAY+DTwDL2/xgJjig/V2PYV7/TlsY/d/CPTPQg7D8U2eXibOfnr4efoIrMjFxpQDkY0CXJAFTTQqFzLNhF63ijgARXhdkrjfTofoZPSA/2Do65emdoG8UJCLAzYTWkZh0KPfFMMGIaaFY45DAdS+ECzcuBDnuRB8aE7yDZX46ZJE813Qh2P+6dDfmP8hcEn9vRw9Xg/wbKdPKF4SMMsiOQBT5k40CAXoEQayC8iApmYo/dw9xmJEiTC26PIU6A3eKYb/8PL4VA9aCXw2TXjMaZnpEDNw0n3BPTgPv8T08vv9tAssME0zHPOBLnwy6FbP7FnQexF6Mk4Q239T+QIh+y3kz6JghnUsnh5lCnUvYXOHA0iEAlh7O5H7530NvWUPx4aZ8bcgyZ/s4H9m+cT8p2MeZn7SK+7xHgfo1NO76b5aY0AIeQ4gSoegq/yVwgGxDSyeekG9uY67sIt4DzfgnuyVKr87CDz1QjbGabtA5NEvRO4O490JgD76e+m+dfRaCjMOgNJgdo6NVZ2cPpXbOOcadC9RXOyGyPuHOXhd7r+iOyOcffmvQyvYIcY6rwerBenvLb4ZE/Q5IKYt8vsJDVrPBfc/azINAkvW5vzIwFcR/8UgcPN13Qc9LeMskJmisK48TaJATyJYDus/BaOTiRMbQV0kaeCsBzBFvEUes69ZdhiyONRS+SbHfgvu52uAbifSD6o3nTq7iWkfrC58vk05IIYasHaoa9IA1noAJuJ1EycPTBun2J+H732DAR/Hrvmg+rHBv9g3b1/6YbheN1MU2sNeFgc/FuQciBjV8PfeantBwYmJ/pq988yuRlHaYwLE2+pvByeLt2raHvCZwt/AB0f9dMekpZECwcnXuxTn/XJsKxR4QzG+Ob5HJPpTTGf2eQT9zJRGvFMGH5z3IelDjQ/si1l4sjxCg41BvoD7XsZhONtP87zCy4WmocBLhzyGiCTHW+xCwUb7dY8GULeG0FtdmI0F2Wd9529YHKsX9QOzl4xZ0oavAcxVqemZnJNzZCyr5mdK/UYmB8RwcZYPyOMSpg1TqjnTEqHwXhwwBn0OfA8OsjfCNx153kYYHEa7Rlhi+cvU/glQEVKkYOVR8j5mYqbn4p99sJWKM7oXLWI+mS6p8pVEaDK9J17Rg5jOmG0bjKMQ8DF6VuJHAWbSr0QgzPi1QcwBxKHAMYPDBBR5TjOYZhGVJ+JAHFUeL0uYftz4Eejfbx1HITxPzDANA+7RqSF/awgI/wM8a0wGZZOloRmonhtre9EqipebmRPeKQkOPLUSsMe58XI+kaisGgStTgpkZZ/2Lr6zJDC6Q4BRAT3+pXXra5DmTDby+2iZOwtQWAHNN8sdSjzls+/bbEN/b1j2jTAjt1bo8XY/Apc8CQXOkiAYM5NodeX5T4Xr2o1e2ynNExx4KhG6m7VvBYE7Bp+A/rRJnQWCQrwTHPSJ/KJwNgYPgO5FD373iAMYNur+5NUmnl49sLR9MA7k8rHMME8Zf8h5/8amw1hxaoftu3zT37sYdPBnBx/eqgcwc32pF6MRM5cnasLLeF7kQIQbf6gNPjySxG+78E/47/tdjqtFZ9A6DmBiJvSGzw6QwbsYmRhskniRpL9aj59xFiRmtVzuxQGTh1n7JyyDNGwDeXHr6oBPDTVSoLOmvX7qoZhFjAjrzv9upFfMbDQiRVMIP7AgvRFv0Dz6ZYof8TZGetbyE7nKdxz5BsRjvVwEI1wS8Oas0nPn9uTi38AKkyWEQYa5/BDW8o27586TJZkIZSD+iM1qEPiOw75j7KdAwiSTDiWXBFE+roZVlYADXinNIEZsN+tlgvA9DmxnUAkS3vHiGYNV4H7Ol38I+i0F0vs5CcTb5+H8tMfeAsqdnFPDXB0R5u7it849swXPeoMDQWNmgHiobRzHrcF9P+ShTf3NYadm8kvx3WS+EWSeh/P8+owbhomf7cxbyXDiLcjuWYVj5s1Xez3rlW92/KjrzejvjJk0O1iLXPOq3pns30t7EhyQOoVyTbYMB/TsTLMUShXDU2W9l20zy6k+BfTE/B9XfpoPLQWiKpHYmKzALjEc5RWC9LDOHU0OwBsgGFlNbA/NgVWy1/S+RVRmaduq3mv6dPqx1Hd7/FhzyA8m4/jXgwPLheBi3f22gPedNT4gfWHLW5k3cqEkczJfun0qIVnVf4cAH0X/nsZ6EPYZDgi9jXWTM1Y9bkXOAcvYdoMDZnvca83xU30ytfP1O8rZzH8vjjc0PAUSiDSTnwwHMDFjoSC9JEDPlFY4MB3Z+CB3ObCN5s1W5yemn8067vT9Mo63NYfUBaBXBici5/sqXtrjeLLoANzTHFi1yQQW25I0mNiddvwCuL+Zxvwu9Isq+z/CrvaE449ihdkrVBotAQoVB9j973GgJAexBlzw4onQEYymJ/kld9s+LHdKvua3oD9jn1gD5JIfedJ4iQNw9fbPAVnJzBIHYh+cGcQDtG2g9Zl8zNf/uSnH3pifI0P7PsCUA+Cb5TlWdM0cnWn94AAblyumLnYlF4pdu+jxIb1NgxmLfktSMTV4/I535kP+n2Af9PAMZnFAb/Cb2HUHPNXOzxCZXYph5BTfIDlIHATm4J6xNEUDFc0+6zutLOijfPj0aPw5gAV6+WhsShIYxHh8SRBwYDIZa5TIx0+DCbH0MisX3wnafD/B+I2A/uatz+rCGiCf/NhfG1jhgKHb44DfWjJ9HZjKQax7zSNAq2varIF+3SvfAeXNwfPVO/fN93XOAiUcfyWsSCGeayLsep5b6fc4EKDWNuA2QRzw2OJGgNBmAQFWKPsUTMOk60HUPsWceErq+wDVkEXi7q0ZjAUAteeD2Df19R7Wx5AJDrjYjVtPkziSqNHMJlsTsutB5/3bwfcDxzm07w+WBJnNouA4XZREwYJXjhtjAG8c3zdPW4Xzy2Y4cczRn0Ron2KFM7dHQPYF4P4uFl0RgCFbeG4f9LbfXddM0qEcB+CAL+61jO/gvutKcfel/ZzHsbXQ5NP1EXQ+zqigeoDk8bXydn9JQKvVcvyVkkR3wQrcm1I2rgDdHM1snZ+xCUcoykxbfsqh5u74PB9+XlNgKczkNqgLdB0WwEFWAHFEIhMHYCiNn69qlk9xIEK5796GJo4kjtn8A3Oo9VHoPOuVf8IISwMeYoEL8etu1JdzvFbSKnKY4fVh0MZbK8s55uODaezZZxBc7DXxsg0Msu158ewHzG/3fT58rsveCNNe/DQoxbq5LIYRJR5fEsTK6RcJYn1RTa7zxmxzxgGreaOFD+keB25CMDtUYpKfwOvjo6knwRYHuu/3PL3cKaLGYihzBFOjRu7KVQ64R9+mD6Fm/jvr4B2yfcSn+kFg446flpNNz0YMWj1GraVANgdaU18x9y5XLgRFg2CFABVJxDR4R1lyHNDOXpvPvfjU1S06+LhKCfMTAPpDyPAgl4RspUAU3ArocTqksyPm46EYBU4bfQtTA6CgwNbv5ELY34LMWqYfoD7Agef489OIsUGY2IylQHIn1MS9tfC9wgKvIkx+2CycdEjOOr8s9jgAf+Xqh4J5vhsCblSTZg9hdHvAbMf2tvwEkmxHkisFqn1zpqCauT5Fdkt4RjoUrAEKgDBQOJpbcHcII4BObftQGxBfQMMSaCziZWG6HgSejQZ30LmN5o1bOylQReW+v2csOkSccrAGEDFE5zlu5gNLuZv2FEu/4Oyn2J0Gig3HeYcDi8bfIYCHyN8VFg6GXcoBNBooj14JJUQ6FK8B9DGhye9w0SkFGk/Z9MXSu/s/YRwwN1imBnfkfWUuCDzIkG3j3ygfMjXnft1LgZgNHDMzDkBpNhCfDg4lrc/6ch9VU/5s8mTKOkv5aaybL/ZZkn9IFtWxCK4t+698SWCCm/4gCg0FgDoFbXn66MsG4qZcUywz+cpmlkXpTdi5OA56cWpFH/AidDbhnmHjF2mzbfwhGWMRbLn/azXcUGVwACwd0qtkgLWa1TGpxFGiOuUApMuklkWrF+OA9sqbJFFTij6wBI4XWPFol6lyyeCO7Ln5wP0X4/8JJk60Y47hW+E+8P1Jx29kVmImRFMFjhUHiqWEwnq/g3bYoskGStDkKzda49vF46x23Jhzdv43en1IxkUA7v5PuFfq/jPLAMv3244frCMNFHLYOxquLLESzKOLJu3LS6ap3Wvy2fsjuF22hMdbb3ZZMvioPE6D1srPe3Y+NGUVqb+QwWkQonzyheMZvqtOctoEBKyNtKcAsB7KKiwO2Up45k1Thjg2rn1mtC1ho/VmlyWDj8rH8N+FQZ8KHfoQqT+RIVIgQg8xFLuFV8UyK5JmhesFYeL9lgCXxTPYQu2zZg/OwVCm37SlwZcMhLzU5QABLuhGEHf/UPiOlwHgfUXTdf8l0JsGXEPdJNMgDXeCZqH3PH0eVa5BGEaYcgvKD3Lv8dZtg0Be6jIWwdWJA9L9OxwwlwEgZuOetBci0BtfwF3RBHAHZwt7X8iARRnbmFYInnacjhALSbOnmPOI2dRyqddT8jHSGAJ90/33tOfE98UBYgAwGpgrZrEyRlg9jQsMg0pfT4IVhStpXzMO2GGdw8hDuYe/KYa+AOUHcX9ntGcN7shsG3Q8AiNormSbSKQ6YslLwS2ALn+wZMoBMBrIUJBBvLgjMZNvhAkpD2eNGwZ2LZQvcCBHkqeEbRyvdtxTLhnckcc2KF0JaKGaLj+zDPCAqykB19jmALe3f7hKI56YFWJmZCCKA2hAdxOemAOhPg/ZzSCw10sJj5hNlUsGd+SDwdpaBNO1wfm5s5iAkQ4BUj9uZYUFONVitRocMLtDIp7aFOsusdJOzYnxAqzjpYKP0ZuQXaCWElYH3GhdMnieABAZTiHAJUJfEoxQEKZDtCMbrd/cT4cqBYHmAAadiu6uNKaN7d1N/JnEUGwslv19DriQdajyu4SnWp81yMjj16E7rPtKgAoA8fSzdMj29wHudRMIDUSr6Kurjkb68tnyV2M9C1bFAWFjKveqgcGSze/F/e8kwOW/O+Y6dLhQiafXz4MBgyT9ViMdUk1REt/uUvyqfEFBNqW7EA17T3lHQYwppCg3pk2ie3yv1SkFXZZ6fQH3v5MAoIDuEcBaCYALgNwdYtBP4p4At3cfE52C3gJ0sQxcBPguP4WePaBPObBV3TB4UHi8dapcNTab2lEIwoETcSP54SgHX/jqVa/7O7sW7g1kF1SQ5KQxrVit1XlKIF8lBa4GXwGgvGkbR1pquM/QPG0yDKZLhbB6U3iQABtdtvG9Jx8jpWlQo5s84A8HKkgEcFbDfexKZGiZ9wXPyCtHlQHrRFWj2TXgg3SyZVHIB9Q4DiA+JUmkfOKARkaYYFe9n8nB95R3jLW9HQHMbVCx/8M4ABUo2lBnEWGheDZgTfToPz0BWn1M21WuKf3VWzyZIMzD9EMcMCeToUdWv7UMWBU2WveU92U7AkCthu1FcOuCwP37WL8QQ2RwoCNOeKYcAAc0NzDxbcJUAjG3SI2vd8wm05sxIW+wLWy0bhtkjIMmIwKMdTDdD00sgmG6f2Ipjyf0m4JhUYQCefpfkAp+VRjzu1CDYlUjuJjMceikfXkAX6+jabBXDYQMapMoTxLgWYMNmUWAnuuLLIgui+EtghPuv0LqqVeOcN/MasNNna0QTEyLauHdXdiZLv8pDoSoTRqsVb+SBcWo/Rq+p/KIANTHjywIjAxQKwEmgGVNWlmoAQaLhl7k+k2+kn5IRrEXlF4WB7mQTQlikFcmAR1zA/E6QY3g2oTVjwp7yiUDIWf69urRjzd3sFaaBXFKiAWACX1786fhmEKzcL3p+xkHePfzFtXcS23Vwqu0VcBUvjUaeUsuX10DKGeuq017VVNImm2z4hGDTF9TJr8NCrIYUBzoORJdLlPo68OkDO4FQMOKj/sO2WqFi24WLAkKOEN8x8+oSGaiwb0E936jBRDH3EhvmD4O/U/A/aYykDNm2v5gDl7kP34WBIJ4LTDIFoZdnQ6x1J9s+9SGJCPvbwwcVZ8SgeOXSN3jgAl3R7kaBLJm608VpvptYaN1qvyQDHYYrp0GrUEWhGEDng6ZSb/mQ0/le69LwWXBATZ3E9wxB7xe0yrRROA24W4izOPACjdWDczb6WWD1ysW7phNlUsGQk6aHRTrMDkAaw1AyECFAProbMH4vEF3+qn75ynQsME1ve75TKAbkKIYFXiNwwKMJ529NcJZyApT6V53h4qVU/22sNE6Vd6UvaaDnXQw4wBYggRnHaxDAWDwocNauHzP/Qus20vhdP6zmRqBBaLiG0i0JbaJ5npVta/h+iRZnepjIa/8Gu4DDpzV8X+EiZUASARgywOx/FXbPvQpb8eZnfm0Qbo83L/y90Y6dIMDGnCsyQP0iX7PwO9iXpNmmcHzd0lWp3pP+RQZMnIS6DEHDp3q0DjQvbXOgtAFL+8nxKCBwoC+dv8FpS9zBaOmMr07kSmSepN2/KI6cJBZ/iZZMQsCRtPKNaNMVpPCRutUmZHzQPeq13+QMbw7ANhrAPYYuJGBkiReANBEX0I/5/49eRoWzA3Qws3yHAjAZzfNFrhB0zbc7zMh0AfGS61LBjdlr8r+p3gG+v4nkiJcwtmLLn9H8mNBv7d26OOEclOm3L+Fb/PQBL1111NQijVxv1XMgTklhMEqK4IgMN0pEjNXVzGamKdnHAsbZksGN+Vpk50CQW+GlsYQjAgAz/FzwYM+XdTWzgGM7trlZ/hAP9quL9xGVtMcEFWDEkQzwe4MgpnrnkGyui3sKR+U800Hgz54HFBLArYL1LBoOH4lUOijOXhwT5+B+7UwIQmVMBgv0YsJYJQoSQ60q10VlIDRkTZ5rWJWG3CfmiWrDwqe/AWsZ8yu7wRTDgTo18/COi4HzrigoX/huAxBrATcLH8Kd8ug0JnA6JvigEh1rMUAq7Y7ZmC9gObFYxGBgVfdMKDCVLlkEMhxNT/CoXObCiMLMvIfshMKvhg4hcJtOvTPT5EKhT8O02iu3ZIYBKm/TRI4lAg4wMEXZD5m6h/gUvBEGHi95gbOgDGm7yD+JgdWOz7eJE+DmnFAE4OBPkj9yTq4Ix4k16fr3ar4YKZD05jAcNCpeJqYNmRigQ1FeQx0E9yF3CUGd2wZdNxWetWsUN2mL8hxddqrrQE09DH+AIl+dh6uo9ASOtBxYroLGMQYCY/iwzVT/Qy4C1Mll2MOdOx2/Jmg790neVGIeJMn5pVVd79NH9tM9YFB3OtD8lI1GOTACe5wGQAeCjqgRzoEC4XE8aNhGhzcA/Hc6/cRos0fTxnm91SmHIg+eG5fgphgsYUh3qFECvppg0eqUz0V8q0b8keb5C5QvCUK/jgMxUj9teNHwzco0AsAK8/hOdI5ptgpGgLpMiFGwAFYSgVlF/QxmjOIbwMys8UsKCFjysgAACAASURBVKP0qtt6KuRbk/Ke2Wo1TIG8CECzf7oUthw/Gr67UKxQMIBuPhX2US6XBBzBcHBP5eIsANxkCXaOZFfJZIuDbA1c75pRmszxqtt6U9hTCnmvKUZ5YND+h5hwGYC+BUSq1OX3aulVDA3b8lehAM6S1xCafZtHRIwlDoBzQMsU2QYCeJPE9A3E29fcwc+l1rw+FqbKm3K+SVdNg2MsAEwOkDNCchFMUE5zFYpFc7ELuKHgcueNKlSgQDe9PoWFJobLgf6mkORey71jsDgegmoSBqDjkCl5QA9wHCin+i9D/3NYX8U91bSjEJQG0xRIPP11yMASfWJQRKpDVgUFDN8U6JN0yMr+S8gB2tqxrmUBXypHoFfnTCXirWvQhJWmqf6HQz8P7sAyoynjNCg4DSreFgfGFYvoF7ucFP16X0ghni6RPfd/zqFwpeYAjRKF2F/4I/L4/JTjp7LNByVkqhvXZHVbHwsbrUk537RaFZqD5T/BMoAIoKlOgH7qYs1jDrwJlgCRBQVCu5cQdNwYHGgtDNakwUyKkouEwOsXMo2hbN2pUpsBsvqboV/D1nXofwf3vaoI4C0D+LdkjEdgVrVwf29HAC34/r7OfLyn0b2Yht+lOIkQOJoDpSEIeiiztWsxkPdRxMfg3oN7Eut7yE5WLQIAb/EwmC8A4C+CL49O0C/NYK+Ae/ZC/T17GpBZAPgcuMAXaHD57EJb6acVOn4qx3wY1dzCILjG1ZtA3+bAVLkh6+rUYNr9VJJFMPAG3IwIAMgC4Cw++ntr6S4/3AM9u1zoV2sAKEvBKJMDhWvkMoBrxFvvBYTC/S4FtAF6wYfpfugjJ0Zn9KBC3HoH5Z+D/rPEGNugb+H7zb0gAGIB4ISConaKjGfATQDZHvWwrpMf49bKQEBZYHoSEDpGCY4puB8IAgEZtkBPiaotpdCmKprmHXPKB+VpdarRrWcxUqDOgS5EC4Cz1OtNZ6BvKBegL23AvtsDnvago5+m/iHWS2hQrKS/vy9FvFPKmNncDAIbuF8JC8mqKXjynS4b8s3qqsFRy+X7Rebz5nEABDluCtSUPdXprCiQCwMRAUD01xx7zKnKiztYL9TACwgEl9TAS4SK6q5b6YAx6ONzE8I4ec0ok0JeeQfij9Bgw8DUOItglQJBrYPjFEivB9gCoJHBQHmzpyvjKNvREO8BweKARryZCGk3X1RH2jrMLKUnQCstSthXx9Krar2Z/0zRmVcGcr5pWr2pOegCQMcBYwVcrcG8zZ/zTvqhWBkDnnqK8hEKAtBTvWNGIV6o/1bcmJKh9yvkldFWxhDwICBOUJN33yPDtElcY+VUn1E+YizkfNOegakRyuNNngS/+UbQm0C/nwi6ihkESNNJA82KvvND8/5zEHp2Oo/y1aqkRKGv6jIUQB/KDvc7QSB+QHbvmqzGgqc0bKqjX5FvVpMab6iRAnUmnGvfNwkCEO7fx71EakdgT4HOG3Nn3zkzTav2QB9VObgZJThb6LvGoM+DgAZ3IIB3gW8T5EWxcqo3BU8ZVL+A9Q0mTC3VF2IIB2giBOkoW5kFAaj1rlgYpOAOhf6QEjTnYeDm1fFm+BlRUWSIVwJDtk5PSGSb1YeeBnjVpJCU97rEg6xWTU1S2dYAbSUwFgP6LBBB29iXpKVv9iuv38kwZqCgLPZDTWR7ylKVCw+6t6q5SCjW263xTbEr8K3BHQhmNVCCzyRWetWksCFPW1ehvAH9JTK0bVCyGfruV5L/1DZAjwMVcvFKGkgKpJAdPEaAOmdqLIU5lEvh08ixhb0HVjUOAlLTunb6TdAvbFpVmCWvsXKqN4WpUsi6OjW42T2pmSpbCsQ3Q0UcgBUE0J9qnUXgHgPKA2M917e6ZJXtWvSygcK9Qa2ojAgqYhhV9X6N7lxzVdVmEVXGxDCrS9eMMilMlYGsqxnNI0DfpkfbBdIpEP8DCQKsVDlwAdn5aTY9XxIOfszMSfGrdvAN/aazH1B2DEx/b1bNIIBMECByXsBMKa4ZZUYfGGeUZjWj+Sisp/fq+isFepNtH5ERIV4En8Vx23TnR6Y0RFkprM0xvSsYJUyqoOOS08N2/9QS9tEgCghdPSVz458J3EYYILcOzii3hakSVTZNq55ygxvbQwnlUV+ob5IC8VNAtSc/mGOxNDNjx7Pn97iGY/s/Q+2AmF/FwqDQ0TgfGCvoG9DNOOilpaKE7MVtaBO0ksjgfeeIb33N1mQ1KUyVQp5WTU3SLNkxMwdTedSCWtouUOWhoABNRpPFQAPDZtYubk+UNhmsnEdomAeyvP6UDxT082WD9RBg9KXcMFlBZCGY1UAJrSSs8Cynek/5CPQfZMIn+uJcA7wL+l7Q6fLlUzCM6yV545FoANjnJjRkE9xRzRb6dRZUHD6gQYf9qbWyQQwOERfxsywoUw2uGeV9Qcisau0T5KumZsnyKeUVAfrTAHMdjI4EEgrsPVBuVmjVDyOm4zdR7skijFAs0tcslgF6tTBMNT1Ia/yYTLKCKHEP93nQP4L4jHyzGihN/VL3zAgjBTIiQHPhYwHg3aY/650FCr0kKJ55Zhkgcp4+ICeGMOhm7M/MkehoUCGCj0OrQh4CzfWtdfDGNVk1hakykOOm2NjTeMp890BvNo0UKI4AZ6EY9RhRWmu3o3s7zP2fNLCcMXvCQMeJYwIhmHbzWfff5+dlSiD6YAEQngsyq4ESjnID9Ek+BHK+SVdNjad8xDjQ49oFqm4EAA0CZzUYjrQVrpZJkcOlodSOX9xFoL+b+LgHN2Z/5g6pNoBNCXAD/WRACJlqcI2VUz0Vpkoh55t0NanxlIF+dRzaOo8AEP6R5utmMTMf0rfHhCW4D/cPif5iKWGlRh3NgkUS7pwV9PWLVqEEEaisj3wa6F85AxcrUwJfxZo0ENVtJmxrYv1eF9F61IL6wht4v50I0G01ssOFAb2Zke7T/EeMxLMaquzEKxYxRP5zyWBVKGcvuaeSIsYHDXHzEIRFCV3NYD3JAa8aCxsyIPeFEVjCKEnob+B+o+moPQKUVATogC4ctRQz9E6V9xIjyBK4f6vKVgUY4KauXeOevpbJn0qK+kulZuBMoJbB494A36X1hW+jm7wqHOUO9HNNuuop89APkH2n9Xj3NUAZJyDsCNCq3nCF2Ah9AH22CO5dLCYUMOb1qhkWBCWYk7bWwXINYPl7KIZQJR0fVSqHGWUFt4yvGWVS8JSeTSDr6oOaWB83ZQxKjwD9r/aD0G1NDKRSneD2xhr3rIrDP+a9VOfigR4D/ddK10+E9Ep38kKcUJA8CWc4eL8aXGOl1gc292VdfVCzp88bdJuj5z/jaQD5eiT8/Cczenf8AsZJ6BeKeKKxcyEMv97dMHgiRHctz5nZjn8aChJMAO/iNe1dtRAAPebDhqyrD2r29HkDYXPUgvfrOgU0fiGCn4TrhUI0zoV0zmPaX8qZ1xfCIEPz9CwCdMFcG3B3Lqbt/Zk2QkOrhuAcjti4etWk4Ml5uH+IDHv6TGtgdpzoH4kQJ8BZ3Ay+KIoApf/OoYoA+iqLl/DADgi6yQwFdG06aIDR6h0FpS9UBIQxAgV6vxcXBIgDfAdAj0GfRPwD0Pe3gLY1e/pM69TsSoHeVgoEjoep+z+x5aY9Pu7t0fRkRd4v6NHuytwtoQHNiMyDQ5oSdurfpmfQiTRpJaxqoKRvQqaaFDbkaTWpWVLeaUoaYCyCzzjwQn0bEaCXgVTLWdJtUOpPI8RbSU7hmoFyAn0KdMCIAGittEmeXcMgiVDSP1ooT0QkoVXwvh7QY9ybcE9hvc5tkvK0mtQsKe80JQ26zfF+4f0m+Q85EwFrBQzTYRcU5ft1xFjdTCqcHpQDUlaOv/RWFQpYcmLt8Qt6S0oU6fULN8NMgJUXBddkNRamyvtVU+MpN/TT1iS6qNn1JLhW1MaECrxfwJtgoADixDJvKmDoR//fAPrV3wyF/mDIHhHL+MEcvCdDJeKMGDQFajeNzv/oI3QC+p1aFrgN9FvV4BorbbM2Jf0OX7IKEUJerXrKDYhv43uKftOAR4AyNkDrayT0tLOZBdVWHf/pi0j91ZYLNBN4yDA4QPTnp3gBjsuDEtZ69OxceDToL3KaBWm9sDFBv41+kwNeNRYCOd/U+Y/AJlRu6OOmaWtscDDok4fBAq4shymsWWz7FIJk7eynWZD9VgoOYFTNaNApIR4LMNBzGgwQ05dBZmVQIn4Q1u/YX9c087HOw5nGXlW8gXdkU/PToD81mHY/6gsiCFSMPzkKhwVE6n9W27WfcRh8IOATDDM+htqgfCobBwzcw4gGY+3b5tmpK2gARYPx5+0CKU1HPAQNmrHQj2ubgNTztyVQGkK1WwN5tWpqPOWG/n5rxgDjSXB7FvbWj8B4Kj/GrkA3a0FAR4AKlnBPptt3ftD6g+dCaCjXuIeMBr3J3JKX7hzMxjAojZMa+pDDggtmdenqVWNhQ9bVbc2e/n5r3gY0Bao8AsDa1hyVJtD/6VE6fp5hB2tfUzNkuh4AcW8C92DJD0Cyf7CERD4S5txgr5EoNGHMqph8AGKTHoGNV2Xv1SINVqtJTazfbkoaJG1Os+PNU6BzDQAOAJn6E3yMPR+MbaJaJWEW4gCHe2m3KQT0Ju6LMmPVOuYjNoI0DTpPRDSgbxxV6tgiBLMaKDFTmsJUGcjTKsDcWWDmKadNN1vzNtRSLoLf5+9kkdymb33W9km/cGkKgX7f66RsqZ0MFP1ELuaMe76ubHQW1IEOjCVB4VGCUUWsgPk7onGvZ8v4wEOH5tsSGcTVqw6h+k2hnG/yNEvKadPN1ryNtjzqqxHgXAaAnIIGoJ9htXQf5P9O1cmPDgLQMtGZ/sakAQM0GBnoapLtC7WqWAEzuFsT63cxngY4J0ChhE+hPxQiudr6O5pYv92UNEjamJYHQ//r+mIkyNZ+UQvZ2uTadoFY8uNv9cQa6VxPJd+glL6WQByCD9bDKS3LLSAvHVJ4EojX4J6gvzC6imuyCjWrQCnkaTWpifVx07Q1Y5C08cyMNYCMAArQJzco9CtYBBjGhewoOS7Wm6uBOb6ZCIycZ1wtPhgpENTCV926M8RuIpohd0aRW9D5eIgP4B6APk8Dz8asmpol5bRp2poxSNrElgfd/+lbopVshTIcFABtx7PJdLfn6kf/N7F+f43+BCUmvtZ5cFtIHBjGBJ1sz14/GKatYNHAnJiWhWBWg6tXTQqBPK26mvQKONBnWjMGS2ax5fF+sS/F02NwHTRnCvTCyHwAtvytNPkpV+faT1JooJ+Q8uDLQd/HuDTcxdJXOK76ESzIwtTMgnIz0Uo9Dp0tvaMxzxX0m5heQv8G9JeUd5qSBo9bthSIPAroWB1PdgFUvIFXgz7aWpkiXl5x0UDGgWpvqMlibUEWAXoBdA07XNBn3ZXvH3MzBW4soC/SHighmqG6xkpTmCo3qqvKO01Jgz3jqSVZBLdlAFQa30fq0L+QTHz/Va1jiUwB1KEfzKk76QEs0SpkeuSB6As3YF3857jJv/OFiPVD4RMQAnn/djiQFJKyriY1e/q4aclm1TJpLLdBz+/EnL3HV9fp/k+DfkcDuk1DeSVwp9A35zSwpZoFmoUxO/RmOVomiNUw+FFQ/xyoODEqZmvuhEY4nuVCXjUWmOwfhJ5WV5WBPm5aslm1XLI/LujTcxBl+LnavOwLwAlC8ospl9cHcfw+9PWcitDUBlPRdCKmMGVnhcb9uNLnZWIHiSKeM8Hcs9Kz0lUqPLL/kxQ8pV1dfAjgKQN93PQ5s71yUPRfC4AX+QrLefO2nD01fYtI4J7JehOp/70l9AcQxSuvQ1+E8pQLQ4y8mu6ZhAKAZfbeSThBEpMJnmBWg6tXpcJUKeRpNamJ9ZnWvE3e7GYvdhTi3fMfsM1NkK2hsSpo0rXbUy9Zun+V+pfXRQNwJHWpNJ/NKEF3MLuZ8rLij97CSJmKzKwkE0T+46T+MG/nVIOrVzWFqTJTTWpifdy0ZJM3e6pX2wVqi+CO9dIWu2fy8wZekL7/FE6syxTI2ecZE32hvJmeefrBMxYHmAaAOBTUr2SfZ7SK5a/5PRhnzpRR4FWhp8Ln0O8hPs+EpObS+7t2U+TlobkH4u2OZy+WAp1PA87Gfvr/3Tgwtnraahho2RENEOA06PueAu5tCh2dDPFkB7OQew3P3SzHCPTKD0QIm2sEtSA2ZBP6Kh1iAs/+oef2A9C/AH1HHzclDTYsH++ovhLZ/DzdhaTwpk/KxH8cf4UCb8/nddFgfJAkCLA9e4L4QRLCCsoEqVGo9TBa1Nsn+xbGZ4MJStZU/A76A3xPob+knDYlDbaNH+lIy/G3iADn0C0CXE++Ghh6JKztn0qvxK5Q99/SfQDlNbJ/uu3TX43w/QUjBeo37tn8GNY7E0oFwpau7B7ddIqaTnQ0nVOxKRH74OpVk0IgT6umxlNOm5IG28Yf6nu8Cy4OvNo5Z7L/cz79pWvfTgOW+WDA3Shk1XtWS3vUUNr9xuZMv40SCogZBb04VlmITAWO+/Fm5L4EI/oK6AdpD1aUT6H/ccf/c6B/s7voe7BzEKd75tuRPe2pAv1oD4Y7P5TvZ+7/ReQTo6+2JUo+W+n7lUDNgNFd49uOA0T2fP9loQIFTe062eh6ANbd9ZvutT5Cg2nV1HjKQJ83uGl/v2NQjDVAad9l6fmP+LFoIwKIIEBz/RepKt9fyqiO9W53+VZYKN3l66POp6H1dExA/5LEysFc/lq4Bxk8EK5Jqrwog/4Y6NvoX4J+3JQ02DZ+pON0HLkLhLb7CeBd2tan+qa8WAMYyc9rbP6c0AeB/shSSJW5f3oKQ31JhWJX0ABkcH1OYcja9xf1EkiLTSErvJg4TqJ/1d8H4P6o1/8C6D+HeFFkBEBDwquRgaG/NNCfRTt+mgWdCU/Lcy6v/7o2Vq90iEKfy4IMNBSMZ2T8e17gSGIPAQSO4yPQzkpAski9yyYZHkS/B/EHvb6hr2FrfpyP9bozFI8AJP+53D/9hsBJibNfz/5hEOBK/fva9+SAYEK/im/ZNlleuzHIfgulAd0yClFVNETCtS+ossgU604E8KqxkJTzmlifad2zvNPlqQFZBEDfdClAOxjX8yJQX6Cff3HHL9L9yxmL6wn3Vr3uS72+igBjv4XkMGwTRkQG32dTf6+THxEKoEYAH40KSQ541aSgq9uO/58E/dUx2S5QxQWg10kAwgGa5Ne+AlYRoLzJUZ9Xq/acR/h+Dv0L3w0Uw6nT/Iesg7szRuveX3zfFzI5wN4gvfDl53/QBtRPf8GFKcRNgG6jP4b7lx3/D4H+xrAHzX/6OvVd8CrS/aMQ6MNAfz8wRHHfkx+UlgX1CCCyIO7+dSI0AgLtFSwDisEBkKokw8xAxxCtFFdzZG3zJfTXiVm+NW/zVK8PDcsiAF4XbtDR36/i3fPRT3F/en2ApTosAgjod/fvJULE8Xdnz/IfxQHAPclMhxJ/4p2V0C/jKYF49zW+vSt4l6QQdDerpsZTJlszBg/2+ujIx99iC6igdPf/GlnQuInn/sHQD+71T7gP3HcmkJsy9099P3+hctHclOgcwEiNClEWjNHoilm+kXV0TEYAWMIU/fkgICZ4lWrY3Ef/Hwf9m4Mf7Bxo+7tOxVElLU7qL64oLRSc+O75T3PkQhawHl5fJD/na+bRYPQi74gBKcWEbmBEAE4G8+1mNBPvk7Uzaw5iTzVsdauzLcvvQ/9Oxy8MTlKgF9CXvy/GgWspLBYAdPMHPDI0318a4kHkngUVzgEUAmvl43tAYPs/GMsAilcKPoFRkKpkNwk4SfeP0PHrshoEPOVqNVAG+rzB4x2/Nv5B90ABvF94ndB/8bDQytj/6ehXac/4Ek2HNYZMgU45cAGXR4DzVdrLAOVizfUAOIZ0PLPJQFvFTEiTEGjVuwozrxooN4bahn7S5qle37/F+FmUKz95obY/0NSolzrcfKnM8V/JDy5nPzIfkESIg/56JZQVaFRR+Q995aVJpTJcUpdv6ukIpvsvAvT6puLuRBMwwVMGYDXjQCCbo3nKQM8M1I7wtPwp0D/L0f9f1NPlvwgBTg6gf00MPP8hwrXvieH1L9wTMtAIAEEGup0v0h4iiB1Sdgq6jERI6Av8XaBeiv1Ja/vA/QfO3tNPR8vL5k09ZaDPGzzSZaM8e5eDbQGduP814kD//PvPXfXTzqXg/P/0rgm1r05eoOG4Z46fCFIvIgAGH+jzWuaMKX8sxw+uoSPEf+D2Wva8uGZCjNQvo/9/oU/L+HHcK//5hfrrWgOcMYHdtvI/tDM/uOSicFQIxKE+YwFcFgEgg0Dnw1XlK12xANCsMLd02F2UWnOGTj54OWYxXvLH0P81x//nQv8sx/m/w5+5/usX6i/gV4sDBaD5D8YzrzMOdN9/pv7oGzhFun+0bZ8oAlAnrVbDNoitzVD6lolYYab1U9//iPvPOGxRvoz+nwn9T99orAF6/nNyYLj/fv/u+MuV/Iz5tc2f0YNs8ohdIPYIjL5IGjEqaeA7MPYaQAtFpv59tKI0opg00HLs/s2Pber1p3HAHHB633iQaesd4zvlCzca/03qyH9+XcsAvDj60b7g0mX6gVUj/xlQshKhKAKAbAFR500QDPChCE/QGaVT/9JeThd0UXcBjJtqQTNhaKz44wmmWWAzbV2iUFy+g/6vcexKgU7/ffn+48qCIPZ/qPvHeKwLst059i5fRKabPyBdigUCsjU02uguUNOMhwnqgWu/0vElu/zvxNCiaaAnrJ+/3gRcEsdJlDyF/n8Y9M9ynP8vankB1P3/au6/Taef9ReOf8i10aAqNDWsX46wEJTo3SGxZUmQSu9ouF6LCcJYV83CmGCFESHIahlrFT0fbxBzWE/WVVPjKadN25Z3ypehf5bj+m8hC17d/R8tBQrcP/1c6+XyWd4P5v6Z4weJAIWN1qyGPY0Deg0gZ8KZABiMWiox68RNUY1ewYBT/f8Q9P8W3PdyjKdgv1AP1ONKgdgHTk890I//BCKHvun+Gdb5Clg/H7jsaYpipRlQZAhQopvcP3Uv+QmpmDBei6OZun9vnmb5Gvr/2dA/y7UGKL8uAuDkwGs81QKu5EfurFeW8OhnXtL9E+ifMsw1gMZcAxxFZ3GwBaUvRW4HTd93bdN9/B5kTcuABkIZ3+JPRP9PgP5ZjtoiADr6D7IAOD/yc5eT/qB5vRw/vUovjnFlW0BdaMP1gGD42sKyIOPgJ732UMANAClnyhSvJkm8FXlmGhvu/89C/8/BfS/HG6gvlKPlP3+RFTDGqYdCftRWop94/Y5iEQSAy9+P5IfSAE4AcX6poVCXTK8YAzJh6xEYrPsKwaya5RH3v3GjZNOSzUb5gdA/y3H90v8v4C/gr7YAaKcb+qPfsxSiHOh/8QP9VhAQiRD6RhDhAOL8xHoezNt51TeLIWLSILDXVdPxrw41tTdbfyD6fyz0z3K8Afwi7v8vlv+MzZ9WSk94iO8HF2jmcwpXtcmlV8EzIlLYYGUkQhSjGmo0FLAm9aDNLq371GEng8AqgvNDLQHrt6D/h0P/LEc917J/Af9qEUDkP+fv157oaQvfgXWS/Q9nT9a+hWQ+HgfAacDwVwZ2mfsvzjLAwejGh/EgEKddNtx/3v776P8joH+WowI4UP9q7r8vACpKJf+LUTv+QLOdnvywIHAW5ajZln9RApqNgK1zfGB016eGTEteivWni3iMoAfRVR2UgmnkbfYodPOmG+UPgv5ZjlpRjub+/2pPANAe/fYX1Ksv8pUAgv7CaXCJYhsUJOnvfKDE6BJfBA+9mZ+QtIc1FZYOed35bQ2llpNBIKaBN1o85uPlqRv9cdA/S4sA/0L911gA9IMPAPf9lSc8xYDdBW4eAcpo40/BhEFTaoQF7lYXLwtKusN8kvOsf/2++38EtX8o9M9yVKD8Czj/jv4f4pHnTVVu8rBsh+QQdLP/KqQqN4JgJ0Xuu0lXsSozYdfClgfUbFLChEfoVz/176Pkf9GfKUcF6r+Af7cV8AnTN/kfLir5az9xNXBc2BUYTBiJEAgNxP3FOjhRNiC458KX+GPwMDel1fwn7/4/Xf506J/lqC/gPy0CtOXvwCWH/vi9NxoHOIiN98VMgUgiNATCE/pHfTMz9h+72h8P6UIIe+uzTAJ9arydxuz1ugnffwb6ARz4BfwH+DfKX2OBO15eZb9xYp5oAHhSRAtPgewiFgCaQmILfyVR0TYe3E29Oc52FvSJ8iF6fLT7jypH/Qv4r7YLBPbct/9SEPvRK7ECFrgnfptBuft74vg1JUQcuGQL7rZn5YHiuoWzN2qWD320S8PuJWzbt1st/yT0Azjwr5YC/QLQUv9+zrn/zg/YlT3ihfLimVTk0XJt2KrvN/Kn2LLqjrN000ctY2PdZBr3b48Gt8DMZtrXLH8cPY76X8B/rg3Q8Suftf26rUiTc68vfo8Ci6pbKxOLJZvjlCZpDpwlqSyWXMgtaNW7er2E4N0O/IXD0XgvSjd5NrFxpsw/+h9WXvjvRoD+Rfh+FoikOoVmLDoUYLxnXpL9WLnzHnM69b+P3rw6VS1EshXcpvcSTfnJV/X3Ty0H/g/wL5Rf7SsvFPq8VCFVgH4wdfxrvHe1XSoZoI1DR65VjdCUhYxfcCn5dK5b0My/8Dkg8IX6cyZdKhfsYrUVb3Cr2DP/3/KxcuC/2/IXLeNXpfaPsKNcgK5yG8WAE8eXGWHOADGBvnn3biB6FXKlMzr/0eiHdYtpW8WVH3ZBdvFcN0lyMoUai456HHNkkTKJBp1B5SfmlT8u76elEaD9144eBz5RvPdUYCmzbPWwEkBElAy2knfPz8qc5yoH9OQDvTDAzCxT/twwVYAD/wYq8Ab+Bv5G/Rv4f5dQ/76UvTr+3qh/4/3G62+83yh/4/X3pSnqD38Dp/BmCEVL9QAAAI9JREFUwvXzcm/g3Rz8G7U1nXLpTRW14v3G6xTqJZR2PTXn9ayWphnfLGut4g90ySOU9YokBUN5aXrVvNZxBQFZX50bG2XVkTVGze82zL7wsAx08gL/qeWFf/NVL+wFQGH/qPLcm/Tg2/2TPzlzbj95wv/U8mJfgQfzVPLzuP35bAyQ7/IPQ88/7OX82PL/AWvoH5jBiy2hAAAAAElFTkSuQmCC';this.__system._defaultDummyTexture=this.createTexture(dummyWhite1x1ImageDataUrl,"GLBoost_dummyWhite1x1Texture");const defaultDummyTextureCube=this.createCubeTexture();defaultDummyTextureCube.userFlavorName="GLBoost_dummyWhite1x1TextureCube";defaultDummyTextureCube.generateTextureFromSixSideImages([dummyWhite1x1ImageDataUrl],[dummyWhite1x1ImageDataUrl],[dummyWhite1x1ImageDataUrl],[dummyWhite1x1ImageDataUrl],[dummyWhite1x1ImageDataUrl],[dummyWhite1x1ImageDataUrl]);this.__system._defaultDummyTextureCube=defaultDummyTextureCube;this.__system._brdfLutTexture=this.createTexture(pbrCookTorranceBrdfLutDataUrl,"GLBoost_brdfLutTexture");this.__system._defaultMaterial=this.createClassicMaterial();this.__system._defaultMaterial.userFlavorName='GLBoostSystemDefaultMaterial';this.restoreGlobalStatesToDefault();}
get defaultDummyTexture(){return this.__system._defaultDummyTexture;}
get defaultDummyTextureCube(){return this.__system._defaultDummyTextureCube;}
get brdfLutTexture(){return this.__system._brdfLutTexture;}
_setName(){this.constructor._instanceCount=(typeof this.constructor._instanceCount==='undefined')?0:(this.constructor._instanceCount+1);this._instanceName=this.constructor.name+'_'+this.constructor._instanceCount;}
toString(){return this._instanceName;}
get glContext(){return this.__system._glContext;}
createGeometry(){return new Geometry(this.__system);}
createBlendShapeGeometry(){return new BlendShapeGeometry(this.__system);}
createCube(widthVector,vertexColor){return new Cube(this.__system,widthVector,vertexColor);}
createPlane(width,height,uSpan,vSpan,customVertexAttributes,isUVRepeat){return new Plane(this.__system,width,height,uSpan,vSpan,customVertexAttributes,isUVRepeat);}
createSphere(radius,widthSegments,heightSegments,vertexColor){return new Sphere(this.__system,radius,widthSegments,heightSegments,vertexColor);}
createAxis(length){return new Axis(this.__system,length);}
createParticle(centerPointData,particleWidth,particleHeight,customVertexAttributes,performanceHint){return new Particle(this.__system,centerPointData,particleWidth,particleHeight,customVertexAttributes,performanceHint);}
createClassicMaterial(){return new ClassicMaterial$1(this.__system);}
createPBRMetallicRoughnessMaterial(){return new PBRMetallicRoughnessMaterial(this.__system);}
createPerspectiveCamera(lookat,perspective){return new L_PerspectiveCamera(this.__system,true,lookat,perspective);}
createFrustumCamera(lookat,perspective){return new L_FrustumCamera(this.__system,true,lookat,perspective);}
createOrthoCamera(lookat,ortho){return new L_OrthoCamera(this.__system,true,lookat,ortho);}
createCameraController(options){return new L_CameraController(this.__system,options);}
createWalkThroughCameraController(options){return new L_WalkThroughCameraController(this.__system,options);}
createTexture(src,userFlavorName,parameters=null){return new Texture(this.__system,src,userFlavorName,parameters);}
createPhinaTexture(width,height,fillStyle,parameters=null){return new PhinaTexture(this.__system,width,height,fillStyle,parameters);}
createCubeTexture(userFlavorName,parameters){return new CubeTexture(this.__system,userFlavorName,parameters);}
createVideoTexture(userFlavorName){return new VideoTexture(this.__system,userFlavorName);}
createScreen(screen,customVertexAttributes){return new Screen(this.__system,screen,customVertexAttributes);}
createTexturesForRenderTarget(width,height,textureNum){var glContext=this.__system._glContext;var gl=glContext.gl;var glem=GLExtensionsManager.getInstance(glContext);var fbo=glContext.createFramebuffer(this.__system);gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);fbo.width=width;fbo.height=height;fbo._glboostTextures=[];for(let i=0;i<textureNum;i++){let texture=new MutableTexture(this.__system,fbo.width,fbo.height);texture.fbo=fbo;fbo._glboostTextures.push(texture);}
var renderBuffer=glContext.createRenderbuffer(this.__system);gl.bindRenderbuffer(gl.RENDERBUFFER,renderBuffer);gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,fbo.width,fbo.height);fbo.renderBuffer=renderBuffer;fbo._glboostTextures.forEach((texture,i)=>{var glTexture=texture.glTextureResource;var attachimentId=glem.colorAttachiment(gl,i);texture.colorAttachment=attachimentId;gl.framebufferTexture2D(gl.FRAMEBUFFER,attachimentId,gl.TEXTURE_2D,glTexture,0);});gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,renderBuffer);gl.bindRenderbuffer(gl.RENDERBUFFER,null);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return fbo._glboostTextures.concat();}
createDepthTexturesForRenderTarget(width,height){var glContext=this.__system._glContext;var gl=glContext.gl;var glem=GLExtensionsManager.getInstance(glContext);var fbo=glContext.createFramebuffer(this.__system);gl.bindFramebuffer(gl.FRAMEBUFFER,fbo);fbo.width=width;fbo.height=height;let format=gl.DEPTH_COMPONENT;let internalFormat=gl.DEPTH_COMPONENT;let type=gl.UNSIGNED_INT;if(GLBoost$1.isThisGLVersion_2(gl)){type=gl.UNSIGNED_INT;format=gl.DEPTH_COMPONENT;internalFormat=gl.DEPTH_COMPONENT24;}else if(glem.extDepthTex){type=glem.extDepthTex.UNSIGNED_INT_24_8_WEBGL;format=gl.DEPTH_STENCIL;internalFormat=gl.DEPTH_STENCIL;}
let depthTexture=new MutableTexture(this.__system,fbo.width,fbo.height,0,internalFormat,format,type,gl.LINEAR,gl.LINEAR,gl.CLAMP_TO_EDGE,gl.CLAMP_TO_EDGE);depthTexture.fbo=fbo;depthTexture.userFlavorName=`DepthTexture_${fbo.width}x${fbo.height}`;var glTexture=depthTexture.glTextureResource;var attachimentId=gl.DEPTH_ATTACHMENT;if(GLBoost$1.isThisGLVersion_2(gl)){attachimentId=gl.DEPTH_ATTACHMENT;}else if(glem.extDepthTex){attachimentId=gl.DEPTH_STENCIL_ATTACHMENT;}
depthTexture.depthAttachment=attachimentId;gl.framebufferTexture2D(gl.FRAMEBUFFER,attachimentId,gl.TEXTURE_2D,glTexture,0);gl.bindFramebuffer(gl.FRAMEBUFFER,null);return depthTexture;}
get belongingCanvasId(){return this.__system._glContext.belongingCanvasId;}
set globalStatesUsage(usageMode){this.__system._globalStatesUsage=usageMode;}
get globalStatesUsage(){return this.__system._globalStatesUsage;}
reflectGlobalGLState(){let gl=this.__system._glContext.gl;if(this.currentGlobalStates!=null){this.currentGlobalStates.forEach((state)=>{gl.enable(state);});}
gl.depthFunc(gl.LEQUAL);gl.blendEquation(gl.FUNC_ADD);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);gl.clearDepth(1);gl.clearStencil(0);}
disableAllGLState(){let states=[3042,2884,2929,32823,32926,];let glContext=this.__system._glContext;let gl=glContext.gl;states.forEach((state)=>{gl.disable(state);});}
set currentGlobalStates(states){this.__system._currentGlobalStates=states.concat();}
get currentGlobalStates(){return this.__system._currentGlobalStates;}
restoreGlobalStatesToDefault(){this.__system._currentGlobalStates=this.__system._defaultGlobalStates.concat();}
get glBoostMonitor(){return this.__system._glBoostMonitor;}
setPropertiesFromJson(arg,queryType=GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME){let json=arg;if(typeof arg==="string"){json=JSON.parse(arg);}
if(!json.targetUserFlavorName){console.warn(`Faild! This json doesn't include targetInstanceName field!`);return;}
let objects=null;if(queryType===GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME){objects=this.__system._glBoostMonitor.getGLBoostObjectsByUserFlavorName((json.targetUserFlavorName));}else if(queryType===GLBoost$1.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR){const targetInstanceName=(json).targetInstanceName;const found=this.__system._glBoostMonitor.getGLBoostObject(targetInstanceName);if(found!=null&&found.userFlavorName===json.targetUserFlavorName){objects=[found];}else{objects=[];}}else{const found=this.__system._glBoostMonitor.getGLBoostObject(json.targetInstanceName);objects=[found];}
objects.forEach((obj)=>{obj.setPropertiesFromJson(json);});return objects;}}
GLBoost$1['GLBoostLowContext']=GLBoostLowContext;class M_Mesh extends M_Element{constructor(glBoostContext,geometry,material){super(glBoostContext);if(geometry){this.geometry=geometry;}
if(material){this.material=material;}
this._transformedDepth=0;this._outlineGizmo=null;this._isPickable=true;this._isTransparentForce=false;this._isOutlineVisible=false;this._outlineWidth=100;this._outlineColor=new Vector4$1(0,1,0,1);}
prepareToRender(expression,existCamera_f,lights){this._geometry.prepareToRender(expression,existCamera_f,lights,this._material,this);}
draw(data){this._geometry.draw({expression:data.expression,lights:data.lights,camera:data.camera,scene:data.renderPass.scene,renderPassIndex:data.renderPassIndex,mesh:this,viewport:data.viewport,isWebVRMode:data.isWebVRMode,webvrFrameData:data.webvrFrameData,forceThisMaterial:data.forceThisMaterial,isOutlineMode:data.isOutlineMode});}
set geometry(geometry){this._geometry=geometry;geometry._parent=this;M_Mesh._geometries[geometry.toString()]=geometry;}
get geometry(){return this._geometry;}
set material(material){this._material=material;}
get material(){return this._material;}
bakeTransformToGeometry(){var positions=this._geometry._vertices.position;var mat=this.worldMatrix;let componentN=this._geometry._vertices.components.position;let length=positions.length/componentN;for(let i=0;i<length;i++){let posVector4=new Vector4$1(positions[i*componentN],positions[i*componentN+1],positions[i*componentN+2],1);let transformedPosVec=mat.multiplyVector(posVector4);positions[i*componentN]=transformedPosVec.x;positions[i*componentN+1]=transformedPosVec.y;positions[i*componentN+2]=transformedPosVec.z;if(componentN>3){positions[i*componentN+3]=transformedPosVec.w;}}
this._geometry._vertices.position=positions;if(this._geometry._vertices.normal){var normals=this._geometry._vertices.normal;length=normals.length/3;for(let i=0;i<length;i++){let normalVector3=new Vector3(normals[i*3],normals[i*3+1],normals[i*3+2]);let transformedNormalVec=this.normalMatrix.multiplyVector(normalVector3).normalize();normals[i*3]=transformedNormalVec.x;normals[i*3+1]=transformedNormalVec.y;normals[i*3+2]=transformedNormalVec.z;}
this._geometry._vertices.normal=normals;}}
bakeInverseTransformToGeometry(){var positions=this._geometry._vertices.position;var invMat=this.inverseWorldMatrix;let componentN=this._geometry._vertices.components.position;let length=positions.length/componentN;for(let i=0;i<length;i++){let posVector4=new Vector4$1(positions[i*componentN],positions[i*componentN+1],positions[i*componentN+2],1);let transformedPosVec=invMat.multiplyVector(posVector4);positions[i*componentN]=transformedPosVec.x;positions[i*componentN+1]=transformedPosVec.y;positions[i*componentN+2]=transformedPosVec.z;if(componentN>3){positions[i*componentN+3]=transformedPosVec.w;}}
this._geometry._vertices.position=positions;let mat=this.worldMatrix;if(this._geometry._vertices.normal){var normals=this._geometry._vertices.normal;length=normals.length/3;for(let i=0;i<length;i++){let normalVector3=new Vector3(normals[i*3],normals[i*3+1],normals[i*3+2]);const invNormalMat=new Matrix33(Matrix44$1.invert(mat).transpose().invert());let transformedNormalVec=invNormalMat.multiplyVector(normalVector3).normalize();normals[i*3]=transformedNormalVec.x;normals[i*3+1]=transformedNormalVec.y;normals[i*3+2]=transformedNormalVec.z;}
this._geometry._vertices.normal=normals;}}
_copyMaterials(){if(this.geometry._indicesArray.length!==this.geometry._materials.length){for(let i=0;i<this.geometry._indicesArray.length;i++){this.geometry._materials[i]=this._material;this.geometry._materials[i].setVertexN(this.geometry,this.geometry._indicesArray[i].length);}}}
merge(meshOrMeshes){if(Array.isArray(meshOrMeshes)){this.bakeTransformToGeometry();let meshes=meshOrMeshes;let geometries=[];for(let i=0;i<meshes.length;i++){meshes[i].bakeTransformToGeometry();geometries.push(meshes[i].geometry);}
this.geometry.merge(geometries);for(let i=0;i<meshes.length;i++){delete meshes[i];}
this._copyMaterials();this.bakeInverseTransformToGeometry();}else{let mesh=meshOrMeshes;mesh.bakeTransformToGeometry();this.bakeTransformToGeometry();this.geometry.merge(mesh.geometry);this._copyMaterials();this.bakeInverseTransformToGeometry();}}
mergeHarder(meshOrMeshes){if(Array.isArray(meshOrMeshes)){this.bakeTransformToGeometry();let meshes=meshOrMeshes;let geometries=[];for(let i=0;i<meshes.length;i++){meshes[i].bakeTransformToGeometry();geometries.push(meshes[i].geometry);}
this.geometry.mergeHarder(geometries);for(let i=0;i<meshes.length;i++){delete meshes[i];}
this.bakeInverseTransformToGeometry();}else{let mesh=meshOrMeshes;mesh.bakeTransformToGeometry();this.bakeTransformToGeometry();this.geometry.mergeHarder(mesh.geometry);this.bakeInverseTransformToGeometry();}}
calcTransformedDepth(camera){var viewMatrix=camera.lookAtRHMatrix();var m_m=null;if(this.bindShapeMatrix){m_m=Matrix44$1.multiply(this.worldMatrix,this.bindShapeMatrix);}else{m_m=this.worldMatrix;}
var mv_m=viewMatrix.multiply(camera.inverseWorldMatrix).multiply(m_m);var centerPosition=new Vector4$1(this.geometry.centerPosition);var transformedCenterPosition=mv_m.multiplyVector(centerPosition);this._transformedDepth=transformedCenterPosition.z;}
get transformedDepth(){return this._transformedDepth;}
get isTransparent(){let isTransparent=this._opacity<1.0?true:false;isTransparent=isTransparent||this._isTransparentForce;isTransparent=isTransparent||this._isTransparentForce;return isTransparent;}
set isTransparent(flg){this._isTransparentForce=flg;}
get AABBInWorld(){var world_m=this.worldMatrix;return AABB.multiplyMatrix(world_m,this._geometry.rawAABB);}
get AABBInLocal(){return this._geometry.rawAABB;}
get rawAABBInLocal(){return this._geometry.rawAABB;}
getAppropriateMaterials(){return this.geometry._getAppropriateMaterials(this);}
rayCast(arg1,arg2,camera,viewport,dotThreshold=0){let origVecInLocal=null;let dirVecInLocal=null;if(arg1 instanceof Vector3&&arg2 instanceof Vector3){const origVecInWorld=arg1;const dirVec=arg2;const invWorldMatrix=Matrix44$1.invert(this.worldMatrix);origVecInLocal=new Vector3(invWorldMatrix.multiplyVector(new Vector4$1(origVecInWorld)));const distVecInWorld=Vector3.add(origVecInWorld,dirVec);const distVecInLocal=new Vector3(invWorldMatrix.multiplyVector(new Vector4$1(distVecInWorld)));dirVecInLocal=Vector3.subtract(distVecInLocal,origVecInLocal).normalize();}else{const x=arg1;const y=arg2;const invPVW=Matrix44$1.multiply(camera.projectionRHMatrix(),Matrix44$1.multiply(camera.lookAtRHMatrix(),this.worldMatrix)).invert();origVecInLocal=MathClassUtil.unProject(new Vector3(x,y,0),invPVW,viewport);const distVecInLocal=MathClassUtil.unProject(new Vector3(x,y,1),invPVW,viewport);dirVecInLocal=Vector3.subtract(distVecInLocal,origVecInLocal).normalize();}
const material=this.getAppropriateMaterials()[0];const gl=this._glContext.gl;const isCulling=material.states.enable.includes(gl.CULL_FACE);const cullMode=IsUtil.exist(material.states.functions.cullFace)?material.states.functions.cullFace:gl.BACK;let isFrontFacePickable=true;let isBackFacePickable=true;if(isCulling){if(cullMode===gl.FRONT){isFrontFacePickable=false;}else if(cullMode===gl.BACK){isBackFacePickable=false;}else{isFrontFacePickable=false;isBackFacePickable=false;}}
const result=this.geometry.rayCast(origVecInLocal,dirVecInLocal,isFrontFacePickable,isBackFacePickable,dotThreshold);let intersectPositionInWorld=null;if(result[0]){intersectPositionInWorld=new Vector3(this.worldMatrix.multiplyVector(new Vector4$1(result[0])));}
return[intersectPositionInWorld,result[1]];}
get gizmos(){return this._gizmos;}
set isOutlineVisible(flg){this._isOutlineVisible=flg;}
get isOutlineVisible(){return this._isOutlineVisible;}
get outlineWidth(){return this._outlineWidth;}
set outlineWidth(val){this._outlineWidth=val;}
get outlineColor(){return this._outlineColor;}
set outlineColor(vec){this._outlineColor=vec;}
set isVisible(flg){super.isVisible=flg;if(this._outlineGizmo){this._outlineGizmo.isVisible=flg;}}
get isVisible(){return super.isVisible;}
clone(){let instance=new M_Mesh(this._glBoostSystem,this.geometry,this.material);this._copy(instance);return instance;}
_copy(instance){super._copy(instance);instance._transformedDepth=this._transformedDepth;}
_needUpdate(){super._needUpdate();}
set isPickable(flag){this._isPickable=flag;}
get isPickable(){return this._isPickable;}
readyForDiscard(){const materials=this.getAppropriateMaterials();for(let material of materials){material.readyForDiscard();}}}
M_Mesh._geometries={};GLBoost$1["M_Mesh"]=M_Mesh;class CubeAbsolute extends Geometry{constructor(glBoostContext){super(glBoostContext);const BIG_NUMBER=999;this._vertexData=this._setupVertexData(new Vector3(-BIG_NUMBER,-BIG_NUMBER,-BIG_NUMBER),new Vector3(-BIG_NUMBER+1,-BIG_NUMBER+1,-BIG_NUMBER+1));this.setVerticesData(this._vertexData,[this._indices]);}
_setupVertexData(minPosition,maxPosition,vertexColor){this._indices=[3,1,0,2,1,3,4,5,7,7,5,6,8,9,11,11,9,10,15,13,12,14,13,15,19,17,16,18,17,19,20,21,23,23,21,22];const positions=[new Vector3(minPosition.x,maxPosition.y,minPosition.z),new Vector3(maxPosition.x,maxPosition.y,minPosition.z),new Vector3(maxPosition.x,maxPosition.y,maxPosition.z),new Vector3(minPosition.x,maxPosition.y,maxPosition.z),new Vector3(minPosition.x,minPosition.y,minPosition.z),new Vector3(maxPosition.x,minPosition.y,minPosition.z),new Vector3(maxPosition.x,minPosition.y,maxPosition.z),new Vector3(minPosition.x,minPosition.y,maxPosition.z),new Vector3(minPosition.x,minPosition.y,maxPosition.z),new Vector3(maxPosition.x,minPosition.y,maxPosition.z),new Vector3(maxPosition.x,maxPosition.y,maxPosition.z),new Vector3(minPosition.x,maxPosition.y,maxPosition.z),new Vector3(minPosition.x,minPosition.y,minPosition.z),new Vector3(maxPosition.x,minPosition.y,minPosition.z),new Vector3(maxPosition.x,maxPosition.y,minPosition.z),new Vector3(minPosition.x,maxPosition.y,minPosition.z),new Vector3(maxPosition.x,minPosition.y,minPosition.z),new Vector3(maxPosition.x,minPosition.y,maxPosition.z),new Vector3(maxPosition.x,maxPosition.y,maxPosition.z),new Vector3(maxPosition.x,maxPosition.y,minPosition.z),new Vector3(minPosition.x,minPosition.y,minPosition.z),new Vector3(minPosition.x,minPosition.y,maxPosition.z),new Vector3(minPosition.x,maxPosition.y,maxPosition.z),new Vector3(minPosition.x,maxPosition.y,minPosition.z)];if(vertexColor){const colors=[new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w),new Vector4$1(vertexColor.x,vertexColor.y,vertexColor.z,vertexColor.w)];}
const texcoords=[new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0),new Vector2(0.0,0.0),new Vector2(1.0,0.0),new Vector2(1.0,1.0),new Vector2(0.0,1.0)];const normals=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,-1,0),new Vector3(0,0,1),new Vector3(0,0,1),new Vector3(0,0,1),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,0,-1),new Vector3(0,0,-1),new Vector3(0,0,-1),new Vector3(1,0,0),new Vector3(1,0,0),new Vector3(1,0,0),new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(-1,0,0),new Vector3(-1,0,0),new Vector3(-1,0,0),];this._vertexData={position:positions,normal:normals,texcoord:texcoords};return this._vertexData;}
update(minPosition,maxPosition){this._vertexData=this._setupVertexData(minPosition,maxPosition);this.updateVerticesData(this._vertexData,[this._indices]);}}
GLBoost$1["CubeAbsolute"]=CubeAbsolute;class M_Group extends M_Element{constructor(glBoostContext){super(glBoostContext);this._elements=[];this._AABB=new AABB();this._isRootJointGroup=false;this._logger=Logger.getInstance();}
addChild(element,isDuplicateOk=false){if(isDuplicateOk){let elem=null;if(element._parent){elem=element.clone();}else{elem=element;}
elem._parent=this;this._elements.push(elem);}else{this.removeChild(element);element._parent=this;this._elements.push(element);}}
removeChild(element){this._elements=this._elements.filter(function(elem){if(elem===element){element._parent=null;}
return elem!==element;});}
removeAll(){this._elements=this._elements.filter(function(elem){elem._parent=null;});this._elements.length=0;}
getChildren(){return this._elements;}
getAnyJointAsChild(){for(let element of this._elements){if(element.className==="M_Joint"){return element;}}
return null;}
_setDirtyToAnimatedElement(inputName){if(this.hasAnimation(inputName)){this._needUpdate();}
let children=this.getChildren();if(children){for(let i=0;i<children.length;i++){if(children[i]._setDirtyToAnimatedElement!=null){children[i]._setDirtyToAnimatedElement(inputName);}}}}
_validateByQuery(object,query,queryMeta){let propertyName="";if(queryMeta.type===GLBoost$1.QUERY_TYPE_INSTANCE_NAME){propertyName="instanceName";}else if(queryMeta.type===GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME){propertyName="userFlavorName";}else if(queryMeta.type===GLBoost$1.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR){propertyName="instanceNameWithUserFlavor";}
if(queryMeta.format===GLBoost$1.QUERY_FORMAT_STRING_PERFECT_MATCHING){if(object[propertyName]===query){return object;}}else if(queryMeta.format===GLBoost$1.QUERY_FORMAT_STRING_PARTIAL_MATCHING){if(object[propertyName].indexOf(query)!==-1){return object;}}else if(queryMeta.format===GLBoost$1.QUERY_FORMAT_REGEXP){if(object[propertyName].match(query)){return object;}}}
searchElement(query,queryMeta={type:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME,format:GLBoost$1.QUERY_FORMAT_STRING_PARTIAL_MATCHING},element=this){if(this._validateByQuery(element,query,queryMeta)){return element;}
if(element instanceof M_Group){let children=element.getChildren();for(let i=0;i<children.length;i++){let hitChild=this.searchElement(query,queryMeta,children[i]);if(hitChild){return hitChild;}}}
return null;}
searchElementByNameAndType(query,type,queryMeta={type:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME,format:GLBoost$1.QUERY_FORMAT_STRING_PARTIAL_MATCHING},element=this){if(this._validateByQuery(element,query,queryMeta)&&element instanceof type){return element;}
if(element instanceof M_Group){let children=element.getChildren();for(let i=0;i<children.length;i++){let hitChild=this.searchElementByNameAndType(query,type,queryMeta,children[i]);if(hitChild){return hitChild;}}}
return null;}
searchElementsByNameAndType(query,type,queryMeta={type:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME,format:GLBoost$1.QUERY_FORMAT_STRING_PARTIAL_MATCHING},element=this){let resultElements=[];if(element instanceof M_Group){let children=element.getChildren();for(let i=0;i<children.length;i++){let hitChildren=this.searchElementsByNameAndType(query,type,queryMeta,children[i]);if(hitChildren){resultElements=resultElements.concat(hitChildren);}}}
if(this._validateByQuery(element,query,queryMeta)&&element instanceof type){resultElements.push(element);}
return resultElements;}
searchElementsByType(type,element=this){if(type["name"].indexOf("Gizmo")!==-1&&element instanceof M_Element){let gizmos=element._gizmos;for(let gizmo of gizmos){if(gizmo instanceof type){return gizmo;}}}
if(element instanceof M_Group){let children=element.getChildren();let results=[];for(let i=0;i<children.length;i++){let hitChildOrChildren=this.searchElementsByType(type,children[i]);if(Array.isArray(hitChildOrChildren)){Array.prototype.push.apply(results,hitChildOrChildren);}else if(hitChildOrChildren!=null){results.push(hitChildOrChildren);}}
if(type===M_Group){results.push(element);}
return results;}
if(element instanceof type){return element;}
return null;}
searchGLBoostObjectByNameAndType(query,type,queryMeta={type:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME,format:GLBoost$1.QUERY_FORMAT_STRING_PARTIAL_MATCHING},element=this){if(element instanceof M_Group){let children=element.getChildren();for(let i=0;i<children.length;i++){let hitChild=this.searchGLBoostObjectByNameAndType(query,type,queryMeta,children[i]);if(hitChild){return hitChild;}}}
if(type.name.indexOf("Gizmo")!==-1&&element instanceof M_Element){let gizmos=element._gizmos;for(let gizmo of gizmos){if(this._validateByQuery(gizmo,query,queryMeta)){return gizmo;}}}
if(type.name.indexOf("Material")!==-1&&element instanceof M_Mesh){let materials=element.getAppropriateMaterials();for(let material of materials){if(material instanceof type){if(this._validateByQuery(material,query,queryMeta)){return material;}}}
return null;}
if(type.name.indexOf("Texture")!==-1&&element instanceof M_Mesh){let materials=element.getAppropriateMaterials();for(let material of materials){const textures=material.getTextures();for(let texture of textures){if(texture instanceof type){if(this._validateByQuery(texture,query,queryMeta)){return texture;}}}}
return null;}
if(this._validateByQuery(element,query,queryMeta)&&element instanceof type){return element;}
return null;}
searchGLBoostObjectsByNameAndType(query,type,queryMeta={type:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME,format:GLBoost$1.QUERY_FORMAT_STRING_PARTIAL_MATCHING},element=this){let objects=[];if(element instanceof M_Group){let children=element.getChildren();for(let i=0;i<children.length;i++){let hitChildren=this.searchGLBoostObjectsByNameAndType(query,type,queryMeta,children[i]);if(hitChildren.length>0){objects=objects.concat(hitChildren);}}
return objects;}
if(type.name.indexOf("Gizmo")!==-1&&element instanceof M_Element){let gizmos=element._gizmos;for(let gizmo of gizmos){if(this._validateByQuery(gizmo,query,queryMeta)){objects.push(gizmo);}}
return objects;}
if(type.name.indexOf("Material")!==-1&&element instanceof M_Mesh){let materials=element.getAppropriateMaterials();for(let material of materials){if(material instanceof type){if(this._validateByQuery(material,query,queryMeta)){objects.push(material);}}}
return objects;}
if(type.name.indexOf("Texture")!==-1&&element instanceof M_Mesh){let materials=element.getAppropriateMaterials();for(let material of materials){const textures=material.getTextures();for(let texture of textures){if(texture instanceof type){if(this._validateByQuery(texture,query,queryMeta)){objects.push(texture);}}}}
return objects;}
if(this._validateByQuery(element,query,queryMeta)&&element instanceof type){return[element];}
return objects;}
searchGLBoostObjectsByType(type,element=this){let objects=[];if(element instanceof M_Group){let children=element.getChildren();for(let i=0;i<children.length;i++){let hitChildren=this.searchGLBoostObjectsByType(type,children[i]);if(hitChildren.length>0){objects=objects.concat(hitChildren);}}
return objects;}
if(type.name.indexOf("Gizmo")!==-1&&element instanceof M_Element){let gizmos=element._gizmos;for(let gizmo of gizmos){objects.push(gizmo);}
return objects;}
if(type.name.indexOf("Material")!==-1&&element instanceof M_Mesh){let materials=element.getAppropriateMaterials();for(let material of materials){if(material instanceof type){objects.push(material);}}
return objects;}
if(type.name.indexOf("Texture")!==-1&&element instanceof M_Mesh){let materials=element.getAppropriateMaterials();for(let material of materials){const textures=material.getTextures();for(let texture of textures){if(texture instanceof type){objects.push(texture);}}}
return objects;}
if(element instanceof type){return[element];}
return objects;}
getStartAnimationInputValue(inputLineName,element=this){if(element instanceof M_Group){let latestInputValue=element.getStartInputValueOfAnimation(inputLineName);let children=element.getChildren();for(let i=0;i<children.length;i++){let hitChildOrInputValue=this.getStartAnimationInputValue(inputLineName,children[i]);if(hitChildOrInputValue instanceof M_Element){let startInputValueOfThisElement=hitChildOrInputValue.getStartInputValueOfAnimation(inputLineName);if(startInputValueOfThisElement<latestInputValue){latestInputValue=startInputValueOfThisElement;}}else{let startInputValueOfThisElement=hitChildOrInputValue;if(startInputValueOfThisElement<latestInputValue){latestInputValue=startInputValueOfThisElement;}}}
return latestInputValue;}
return element.getStartInputValueOfAnimation(inputLineName);}
getEndAnimationInputValue(inputLineName,element=this){if(element instanceof M_Group){let latestInputValue=element.getEndInputValueOfAnimation(inputLineName);let children=element.getChildren();for(let i=0;i<children.length;i++){let hitChildOrInputValue=this.getEndAnimationInputValue(inputLineName,children[i]);if(hitChildOrInputValue instanceof M_Element){let endInputValueOfThisElement=hitChildOrInputValue.getEndInputValueOfAnimation(inputLineName);if(endInputValueOfThisElement>latestInputValue){latestInputValue=endInputValueOfThisElement;}}else{let endInputValueOfThisElement=hitChildOrInputValue;if(endInputValueOfThisElement>latestInputValue){latestInputValue=endInputValueOfThisElement;}}}
return latestInputValue;}else if(!(element.getEndInputValueOfAnimation!=null)){return 0;}
return element.getEndInputValueOfAnimation(inputLineName);}
updateAABB(){const that=this;var aabb=(function mergeAABBRecursively(elem){if(elem instanceof M_Group){var children=elem.getChildren();for(let i=0;i<children.length;i++){var aabb=mergeAABBRecursively(children[i]);if(aabb instanceof AABB){elem.AABB.mergeAABB(aabb);}else{console.assert("calculation of AABB error!");}}
if(!elem.AABB.isValid()){that._logger.out(GLBoost$1.LOG_LEVEL_WARN,GLBoost$1.LOG_TYPE_AABB,true,"This AABB has abnormal values",elem.userFlavorName,elem.AABB);}
return elem.AABB;}
if(elem instanceof M_Mesh){let aabb=elem.AABBInWorld;return aabb;}
return null;})(this);this.AABB.mergeAABB(aabb);let newAABB=this.AABB;this._updateAABBGizmo();return newAABB;}
get AABB(){return this._AABB;}
clone(clonedOriginalRootElement=this,clonedRootElement=null,onCompleteFuncs=[]){let instance=new M_Group(this._glBoostSystem);if(clonedRootElement===null){clonedRootElement=instance;}
this._copy(instance);this._elements.forEach(element=>{if(typeof element.clone!=="undefined"){instance._elements.push(element.clone(clonedOriginalRootElement,clonedRootElement,onCompleteFuncs));}else{instance._elements.push(element);}});onCompleteFuncs.forEach(func=>{func();});return instance;}
_copy(instance){super._copy(instance);instance._AABB=this._AABB.clone();instance._isRootJointGroup=this._isRootJointGroup;}
set isVisible(flg){let collectVisibility=function(elem){elem._isVisible=flg;if(elem instanceof M_Group){let children=elem.getChildren();children.forEach(function(child){collectVisibility(child);});}};collectVisibility(this);}
get isVisible(){return this._isVisible;}
setSpecifiedPropertyRecursively(propertyName,value){let setValueRecursively=function(elem){elem[propertyName]=value;if(elem instanceof M_Group){let children=elem.getChildren();children.forEach(function(child){setValueRecursively(child);});}};setValueRecursively(this);}
executeSpecifiedFunctionRecursively(func,thisObj,args,childIndexToInsertToArgs=null){let execRecursively=function(elem){if(childIndexToInsertToArgs!=null){args[childIndexToInsertToArgs]=elem;}
func.apply(thisObj,args);if(elem instanceof M_Group){let children=elem.getChildren();children.forEach(function(child){execRecursively(child);});}};execRecursively(this);}
_updateAABBGizmo(){let world_m=this.worldMatrix;let aabbInWorld=AABB.multiplyMatrix(world_m,this._AABB);}
readyForDiscard(){let collectElements=function(elem){if(elem instanceof M_Group){const children=elem.getChildren();for(let i=0;i<children.length;i++){collectElements(children[i]);}}else if(elem instanceof M_Element){elem.readyForDiscard();}else{if(typeof EffekseerElement!==undefined&&elem instanceof EffekseerElement){console.log("Nothing to do for discarding at this time.");}
console.error("not M_Group nor M_Element");}};collectElements(this);this.removeAll();}
rayCast(arg1,arg2,camera,viewport,ignoreInstanceNameList,dotThrethold=0){const meshes=this.searchElementsByType(M_Mesh);let currentShortestT=Number.MAX_VALUE;let currentShortestIntersectedPosVec3=null;let selectedMesh=null;for(let mesh of meshes){if(!mesh.isVisible){continue;}
if(!mesh.isPickable){continue;}
if(ignoreInstanceNameList&&ignoreInstanceNameList.indexOf(mesh.instanceName)!==-1){continue;}
let result=null;if(arg1 instanceof Vector3&&arg2 instanceof Vector3){result=mesh.rayCast(arg1,arg2,camera,dotThrethold);}else{result=mesh.rayCast(arg1,arg2,camera,viewport,dotThrethold);}
if(result===null){return[null,null];}
const t=result[1];if(t<currentShortestT){currentShortestT=t;currentShortestIntersectedPosVec3=result[0];selectedMesh=mesh;}}
return[currentShortestIntersectedPosVec3,currentShortestT,selectedMesh];}
_needUpdate(){super._needUpdate();let collectElements=function(elem){if(elem instanceof M_Group){const children=elem.getChildren();for(let i=0;i<children.length;i++){collectElements(children[i]);}}else if(elem instanceof M_Mesh){if(elem._outlineGizmo){elem._outlineGizmo.updateMatrix(elem);}}};collectElements(this);}}
GLBoost$1["M_Group"]=M_Group;let singleton$4=Symbol();class M_GLBoostMonitor extends L_GLBoostMonitor{constructor(enforcer){super(enforcer);}
static getInstance(){if(!this[singleton$4]){this[singleton$4]=new M_GLBoostMonitor(L_GLBoostMonitor._singletonEnforcer);}
return this[singleton$4];}
getGLBoostObjectsFromArgument(arg){let objects=[];if(typeof arg==='undefined'){objects=this._glBoostObjects;}else if(typeof(arg)==="string"){for(let key in this._glBoostObjects){if(this._glBoostObjects.hasOwnProperty(key)&&this._glBoostObjects[key].userFlavorName===arg){objects.push(this._glBoostObjects[key]);break;}}}else{if(arg instanceof GLBoostObject){objects=[arg];}}
return objects;}
getMMeshes(glBoostObjects){let meshes=[];for(let object of glBoostObjects){if(object instanceof M_Mesh){meshes.push(object);}else if(object instanceof M_Group){meshes=meshes.concat(object.searchElementsByType(GLBoost$1.M_Mesh));}}
meshes=meshes.filter((mesh,i,self)=>self.indexOf(mesh)===i);return meshes;}
getTriangleCount(userFlavorNameOrGLBoostObject){let objects=this.getGLBoostObjectsFromArgument(userFlavorNameOrGLBoostObject);let meshes=this.getMMeshes(objects);let count=0;for(let mesh of meshes){count+=mesh.geometry.getTriangleCount(mesh);}
return count;}
getVertexCount(userFlavorNameOrGLBoostObject){let objects=this.getGLBoostObjectsFromArgument(userFlavorNameOrGLBoostObject);let meshes=this.getMMeshes(objects);let count=0;for(let mesh of meshes){count+=mesh.geometry.getVertexCount(mesh);}
return count;}
getTextureUserFlavorNames(userFlavorNameOrGLBoostObject){let objects=this.getGLBoostObjectsFromArgument(userFlavorNameOrGLBoostObject);let meshes=this.getMMeshes(objects);let textureUserFlavorNames=[];for(let mesh of meshes){let materials=mesh.geometry._getAppropriateMaterials(mesh);for(let i=0;i<materials.length;i++){let tmpTextureUserFlavorNames=materials[i].getTextureUserFlavorNames();textureUserFlavorNames=textureUserFlavorNames.concat(tmpTextureUserFlavorNames);}}
return textureUserFlavorNames;}
getUniqueTextureUserFlavorNames(userFlavorNameOrGLBoostObject){let textureUserFlavorNames=this.getTextureUserFlavorNames(userFlavorNameOrGLBoostObject);textureUserFlavorNames=Array.from(new Set(textureUserFlavorNames));return textureUserFlavorNames;}}
GLBoost$1['M_GLBoostMonitor']=M_GLBoostMonitor;class Expression extends GLBoostObject{constructor(glBoostContext){super(glBoostContext);this._renderPasses=[];}
addRenderPasses(renderPasses){renderPasses.forEach((renderPass)=>{renderPass._expression=this;});this._renderPasses=this._renderPasses.concat(renderPasses);}
addRenderPass(renderPass){renderPath._expression=this;this._renderPasses.push(renderPass);}
clearRenderPasses(){this._renderPasses.forEach((renderPass)=>{renderPass._expression=null;});this._renderPasses.length=0;}
get renderPasses(){return this._renderPasses;}
setCurrentAnimationValue(inputName,inputValue){for(let renderPass of this.renderPasses){if(renderPass.scene){renderPass.scene.setCurrentAnimationValue(inputName,inputValue);}}}
prepareToRender(){this._renderPasses.forEach((renderPass,index)=>{renderPass.prepareToRender(this);});}}
GLBoost$1['Expression']=Expression;class M_FrustumCamera extends M_AbstractCamera{constructor(glBoostContext,toRegister,lookat,perspective){super(glBoostContext,toRegister);this._lowLevelCamera=new L_FrustumCamera(this,false,lookat,perspective);this._lowLevelCamera._middleLevelCamera=this;}
_needUpdateProjection(){this._lowLevelCamera._needUpdateProjection();}
get updateCountAsCameraProjection(){return this._lowLevelCamera.updateCountAsCameraProjection;}
projectionRHMatrix(){return this._lowLevelCamera.projectionRHMatrix();}
set left(value){this._lowLevelCamera.left=value;}
get left(){return this._lowLevelCamera.left;}
set right(value){this._lowLevelCamera.right=value;}
get right(){return this._lowLevelCamera.right;}
set top(value){this._lowLevelCamera.top=value;}
get top(){return this._lowLevelCamera.top;}
set bottom(value){this._lowLevelCamera.bottom=value;}
get bottom(){return this._lowLevelCamera.bottom;}
set zNear(value){this._lowLevelCamera.zNear=value;}
get zNear(){return this._lowLevelCamera.zNear;}
set zFar(value){this._lowLevelCamera.zFar=value;}
get zFar(){return this._lowLevelCamera.zFar;}
get aspect(){return this._lowLevelCamera.aspect;}
get fovy(){return this._lowLevelCamera.fovy;}}
GLBoost$1['M_FrustumCamera']=M_FrustumCamera;class M_PerspectiveCamera extends M_AbstractCamera{constructor(glBoostContext,toRegister,lookat,perspective){super(glBoostContext,toRegister);this._lowLevelCamera=new L_PerspectiveCamera(this,false,lookat,perspective);this._lowLevelCamera._middleLevelCamera=this;}
_needUpdateProjection(){this._lowLevelCamera._needUpdateProjection();}
get updateCountAsCameraProjection(){return this._lowLevelCamera.updateCountAsCameraProjection;}
projectionRHMatrix(){return this._lowLevelCamera.projectionRHMatrix();}
set fovy(value){this._lowLevelCamera.fovy=value;}
get fovy(){return this._lowLevelCamera.fovy;}
set aspect(value){this._lowLevelCamera.aspect=value;}
get aspect(){return this._lowLevelCamera.aspect;}
set zNear(value){this._lowLevelCamera.zNear=value;}
get zNear(){return this._lowLevelCamera.zNear;}
set zFar(value){this._lowLevelCamera.zFar=value;}
get zFar(){return this._lowLevelCamera.zFar;}}
GLBoost$1['M_PerspectiveCamera']=M_PerspectiveCamera;class EffekseerElement$1 extends M_Element{constructor(glBoostContext){super(glBoostContext);this.__effect=null;this.__handle=null;this.__speed=1;this.__timer=null;}
load(uri,playJustAfterLoaded=false,isLoop=false){return new Promise((resolve,reject)=>{this.__effect=effekseer.loadEffect(uri,()=>{if(playJustAfterLoaded){if(isLoop){this.__timer=setInterval(()=>{this.play();},500);}else{this.play();}}
resolve(this);});})}
cancelLoop(){clearInterval(this.__timer);}
play(isLoop=false){const __play=()=>{this.__handle=effekseer.play(this.__effect);this.update();};if(isLoop){this.__timer=setInterval(__play,200);}else{__play();}}
update(camera){if(this.__handle!=null){this.__handle.setMatrix(this.worldMatrix.m);this.__handle.setSpeed(this.__speed);}}
set playSpeed(val){if(this.__handle){this.__handle.setSpeed(val);}
this.__speed=val;}
get playSpeed(){return this.__speed;}
set translate(vec){if(this.__handle){this.__handle.setLocation(vec.x,vec.y,vec.z);}
super.translate=vec;}
get translate(){return super.translate;}
set rotate(vec){if(this.__handle){this.__handle.setRotation(vec.x,vec.y,vec.z);}
super.rotate=vec;}
get rotate(){return super.rotate;}
set scale(vec){if(this.__handle){this.__handle.setScale(vec.x,vec.y,vec.z);}
super.scale=vec;}
get scale(){return super.scale;}}
class RenderPass extends GLBoostObject{constructor(glBoostContext){super(glBoostContext);this._scene=null;this._meshes=[];this._preGizmos=[];this._postGizmos=[];this._opacityMeshes=[];this._transparentMeshes=[];this._outlineModeMeshes=[];this._effekseerElements=[];this._transparentMeshesAsManualOrder=null;this._drawBuffers=[this._glContext.gl.NONE];this._clearColor=null;this._clearDepth=null;this._colorMask=null;this._renderTargetColorTextures=[];this._renderTargetDepthTexture=[];this._expression=null;this._viewport=null;this._isRenderTargetAttachedTextures=false;this._isEnableToDraw=true;this._customFunctionWhenPrepareToRender=null;this._customFunctionWhenPreRender=null;this._customFunctionWhenPostRender=null;this._webglStatesAssignDictionaries=[];this._backupWebGLStatesOfMaterials=[];this._shaderParametersAssignDictionaries=[];this._backupShaderParametersOfMaterials=[];this._shaderAssignDictionaries=[];this._backupShadersOfInstances=[];this._newShaderInstance=null;this._oldShaderClass=null;this._backupShaderClassDic={};this._doPreRender=true;this._doPostRender=true;this._tag="";}
set tag(name){this._tag=name;}
get tag(){return this._tag;}
get doPreRender(){return this._doPreRender;}
set doPreRender(flg){this._doPreRender=flg;}
get doPostRender(){return this._doPostRender;}
set doPostRender(flg){this._doPostRender=flg;}
get expression(){return this._expression;}
set scene(scene){this._scene=scene;}
get scene(){return this._scene;}
get meshes(){return this._meshes;}
get opacityMeshes(){return this._opacityMeshes;}
get transparentMeshes(){return this._transparentMeshes;}
get preGizmos(){return this._preGizmos;}
get postGizmos(){return this._postGizmos;}
specifyRenderTargetTextures(renderTargetTextures){var gl=this._glContext.gl;var colorRenderTargetTextures=renderTargetTextures.filter(renderTargetTexture=>{if(renderTargetTexture.colorAttachment){return true;}else{return false;}});if(colorRenderTargetTextures.length>0){this._drawBuffers=[];colorRenderTargetTextures.forEach(texture=>{var attachment=texture.colorAttachment;this._drawBuffers.push(attachment);});this._renderTargetColorTextures=colorRenderTargetTextures;}else{this._drawBuffers=[gl.NONE];}
var depthRenderTargetTextures=renderTargetTextures.filter(renderTargetTexture=>{if(renderTargetTexture.depthAttachment){return true;}else{return false;}});this._renderTargetDepthTexture=depthRenderTargetTextures[0];this._isRenderTargetAttachedTextures=true;}
get buffersToDraw(){return this.isRenderTargetAttachedTextures?this._drawBuffers:[this._glContext.gl.BACK];}
set isRenderTargetAttachedTextures(flg){this._isRenderTargetAttachedTextures=flg;}
get isRenderTargetAttachedTextures(){return this._isRenderTargetAttachedTextures;}
get fbo(){if(this._renderTargetColorTextures.length>0){return this._renderTargetColorTextures[0].fbo;}else if(this._renderTargetDepthTexture){return this._renderTargetDepthTexture.fbo;}else{return null;}}
get viewport(){return this._viewport;}
set viewport(vec4){this._viewport=vec4;}
setViewportAsFittingToRenderTarget(){let width;let height;if(this._renderTargetColorTextures.length>0){width=this._renderTargetColorTextures[0].width;height=this._renderTargetColorTextures[0].height;}
if(this._renderTargetDepthTexture){width=this._renderTargetDepthTexture.width;height=this._renderTargetDepthTexture.height;}
if(typeof width!=="undefined"&&typeof height!=="undefined"){this._viewport=new Vector4$1(0,0,width,height);return true;}else{return false;}}
get renderTargetColorTextures(){return this._renderTargetColorTextures;}
get renderTargetDepthTexture(){return this._renderTargetDepthTexture;}
setClearColor(color){this._clearColor=color;}
get clearColor(){return this._clearColor;}
setClearDepth(depth){this._clearDepth=depth;}
get clearDepth(){return this._clearDepth;}
setColorMask(colorMask){this._colorMask=colorMask;}
get colorMask(){return this._colorMask;}
setWebGLStatesAssignDictionaries(dictionaries){this._webglStatesAssignDictionaries=dictionaries;}
setShaderParametersAssignDictionaries(dictionaries){this._shaderParametersAssignDictionaries=dictionaries;}
setShaderAssignDictionaries(dictionaries){this._newShaderInstance=null;this._backupShaderClassDic={};this._shaderAssignDictionaries=[];for(let directory of dictionaries){let meshes=[];for(let instance of directory.instances){if(instance instanceof M_Group){meshes=meshes.concat(instance.searchElementsByType(GLBoost.M_Mesh));}else{meshes.push(instance);}}
this._shaderAssignDictionaries.push({instances:meshes,shaderClass:directory.shaderClass});}}
_assignWebGLStates(){if(this._webglStatesAssignDictionaries.length===0){return;}
for(let dic of this._webglStatesAssignDictionaries){for(let material of dic.materials){this._backupWebGLStatesOfMaterials.push({material:material,states:material.states});material.states=dic.states;}}}
_restoreWebGLStates(){if(this._backupWebGLStatesOfMaterials.length===0){return;}
for(let dic of this._backupWebGLStatesOfMaterials){dic.material.states=dic.states;}}
_assignShaderParameters(){if(this._shaderParametersAssignDictionaries.length===0){return;}
for(let dic of this._shaderParametersAssignDictionaries){for(let mesh of this._meshes){let materials=mesh.getAppropriateMaterials();for(let material of materials){this._backupShaderParametersOfMaterials.push({mesh:mesh,shaderParameters:material.shaderParameters});material.shaderParameters=dic.shaderParameters;}}}}
_restoreShaderParameters(){if(this._backupShaderParametersOfMaterials.length===0){return;}
for(let i=0;i<this._backupShaderParametersOfMaterials.length;i++){for(let mesh of this._meshes){let materials=mesh.getAppropriateMaterials();for(let j=0;j<materials.length;j++){materials[j].shaderParameters=this._backupShaderParametersOfMaterials[i].shaderParameters;}}}}
_assignShaders(existCamera_f,lights,assumeThatAllMaterialsAreSame=true){if(this._shaderAssignDictionaries.length===0){return;}
if(assumeThatAllMaterialsAreSame){for(let dic of this._shaderAssignDictionaries){for(let obj of dic.instances){obj.getAppropriateMaterials().forEach((material,index)=>{this._backupShadersOfInstances.push({instance:obj,backupShaderClass:material.shaderClass,backupShaderInstance:material.shaderInstance});if(this._newShaderInstance&&material.shaderClass.name!==this._oldShaderClass.name){this._newShaderInstance.readyForDiscard();this._newShaderInstance=void 0;}
if(!this._newShaderInstance){let glslProgram=obj.geometry.prepareGLSLProgram(this.expression,material,existCamera_f,lights,dic.shaderClass);this._oldShaderClass=material.shaderClass;this._newShaderInstance=material.shaderInstance;}});}}}}
_restoreShaders(existCamera_f,lights){if(this._backupShadersOfInstances.length===0){return;}
for(let dic of this._backupShadersOfInstances){dic.instance.getAppropriateMaterials().forEach((material,index)=>{let shaderInstance=dic.backupShaderInstance;if(!shaderInstance){material.shaderInstance=obj.geometry.prepareGLSLProgram(this.expression,material,existCamera_f,lights,dic.shaderClass);}});}}
clearAssignShaders(){for(let dic of this._shaderAssignDictionaries){if(dic._newShaderInstance){dic._newShaderInstance.readyForDiscard();}
dic._newShaderInstance=void 0;}}
set customFunctionWhenPrepareToRender(func){this._customFunctionWhenPrepareToRender=func;}
get customFunctionWhenPrepareToRender(){return this._customFunctionWhenPrepareToRender;}
set customFunctionWhenPreRender(func){this._customFunctionWhenPreRender=func;}
get customFunctionWhenPreRender(){return this._customFunctionWhenPreRender;}
set customFunctionWhenPostRender(func){this._customFunctionWhenPostRender=func;}
get customFunctionWhenPostRender(){return this._customFunctionWhenPostRender;}
prepareToRender(expression){let collectElements=function(elem,elementsType){if(elem instanceof M_Group){var children=elem.getChildren();var meshes=[];children.forEach(function(child){var childMeshes=collectElements(child,elementsType);meshes=meshes.concat(childMeshes);});return meshes;}else if(elem instanceof elementsType){return[elem];}else{return[];}};this._meshes=[];this._preGizmos=[];this._postGizmos=[];this._effekseerElements=[];if(this._scene){this._meshes=collectElements(this._scene,M_Mesh);}
let collectGizmos=elem=>{if(elem instanceof M_Group){var children=elem.getChildren();children.forEach(child=>{collectGizmos(child);});}
if(elem.gizmos){elem.gizmos.filter(gizmo=>{if(gizmo.isPreDraw){this._preGizmos.push(gizmo);}else{this._postGizmos.push(gizmo);}});}};if(this._scene!=null){collectGizmos(this._scene);}
this._opacityMeshes=[];this._transparentMeshes=[];this._skeletalMeshes=[];this._meshes.forEach(mesh=>{if(mesh.isTransparent){this._transparentMeshes.push(mesh);}else{this._opacityMeshes.push(mesh);}
if(mesh.instanceName.indexOf("SkeletalMesh")!==-1){this._skeletalMeshes.push(mesh);}
if(mesh.isOutlineVisible){this._outlineModeMeshes.push(mesh);}});if(this._scene){this._effekseerElements=collectElements(this._scene,EffekseerElement$1);}
if(this._scene){this._scene.prepareToRender(expression);}
var camera=this.scene.getMainCamera(this);let lights=this.scene.lightsExceptAmbient;for(let dic of this._shaderAssignDictionaries){for(let obj of dic.instances){let renderSpecificMaterials=[];obj.getAppropriateMaterials().forEach((material,index)=>{let newMaterial=this._glBoostSystem._glBoostContext.createClassicMaterial();newMaterial._textureDic=Object.assign({},material._textureDic);newMaterial._texturePurposeDic=material._texturePurposeDic.concat();newMaterial._textureContributionRateDic=Object.assign({},material._textureContributionRateDic);renderSpecificMaterials.push(newMaterial);});let materials=obj.geometry.prepareToRender(this.expression,camera?true:false,lights,null,obj,dic.shaderClass,renderSpecificMaterials);obj.getAppropriateMaterials().forEach((material,index)=>{material["renderpassSpecificMaterial_"+
this.instanceName+
"_material_"+
index]=materials[index];});}}
if(this._customFunctionWhenPrepareToRender){this._customFunctionWhenPrepareToRender();}}
sortTransparentMeshes(camera){this._transparentMeshes.forEach(mesh=>{mesh.calcTransformedDepth(camera);});this._transparentMeshes.sort(function(a,b){if(a.transformedDepth<b.transformedDepth)return-1;if(a.transformedDepth>b.transformedDepth)return 1;return 0;});}
set isEnableToDraw(flg){this._isEnableToDraw=flg;}
get isEnableToDraw(){return this._isEnableToDraw;}
get outlineModeMeshes(){return this._outlineModeMeshes;}
preRender(existCamera_f,lights){if(!this.doPreRender){return;}
if(this._customFunctionWhenPreRender){this._customFunctionWhenPreRender();}
this._assignWebGLStates();}
postRender(existCamera_f,lights){if(!this.doPostRender){return;}
if(this._customFunctionWhenPostRender){this._customFunctionWhenPostRender();}
this._restoreWebGLStates();}
set transparentMeshesAsManualOrder(meshes){this._transparentMeshesAsManualOrder=meshes;}
get transparentMeshesAsManualOrder(){return this._transparentMeshesAsManualOrder;}}
class Renderer extends GLBoostObject{constructor(glBoostContext,parameters){super(glBoostContext);var _clearColor=parameters.clearColor;this._glBoostSystem._glBoostContext.reflectGlobalGLState();const glContext=this._glContext;const gl=glContext.gl;if(_clearColor){gl.clearColor(_clearColor.red,_clearColor.green,_clearColor.blue,_clearColor.alpha);}
this.__logger=Logger.getInstance();this.__animationFrameId=-1;this.__isWebVRMode=false;this.__webvrFrameData=null;this.__webvrDisplay=null;this.__canvasWidthBackup=null;this.__canvasHeightBackup=null;this.__defaultUserSittingPositionInVR=new Vector3(0.0,1.1,1.5);this.__requestedToEnterWebVR=false;this.__isReadyForWebVR=false;this.__animationFrameObject=window;this.__effekseerElements=[];this._outlineMaterial=new ClassicMaterial$1(this._glBoostSystem);this._outlineMaterial.baseColor=new Vector4$1(0,1,0,1);this._outlineMaterial.states.enable=[2884];this._outlineMaterial.states.functions.cullFace=[1028];this._outlineMaterial.states.functions.depthMask=[true];this._outlineMaterial.globalStatesUsage=GLBoost.GLOBAL_STATES_USAGE_INCLUSIVE;}
update(expression){let skeletalMeshes=[];let effekseerElements=[];for(let renderPass of expression.renderPasses){skeletalMeshes=skeletalMeshes.concat(renderPass._skeletalMeshes);effekseerElements=effekseerElements.concat(renderPass.scene.searchElementsByType(EffekseerElement$1));renderPass.scene.updateAmountOfAmbientLightsIntensity();let camera=renderPass.scene.getMainCamera();for(let effekseerElement of effekseerElements){effekseerElement.update(camera);}}
this.__effekseerElements=effekseerElements;let unique=function(array){return array.reduce(function(a,b){if(a.instanceName!==b.instanceName){a.push(b);}
return a;},[]);};skeletalMeshes=unique(skeletalMeshes);for(let mesh of skeletalMeshes){mesh.geometry.update(mesh);}
if(typeof effekseer!=="undefined"&&this.__effekseerElements.length>0){effekseer.update();}}
draw(expression){let renderPassTag="";if(this._outlineMaterial.shaderInstance==null){const mesh=expression.renderPasses[0].meshes[0];if(mesh!=null){this._outlineMaterial.shaderInstance=mesh.geometry.prepareGLSLProgram(expression,this._outlineMaterial,true,[],this._outlineMaterial.shaderClass);}}
expression.renderPasses.forEach((renderPass,index)=>{if(!renderPass.isEnableToDraw||!renderPass.scene){return;}
if(GLBoost.VALUE_CONSOLE_OUT_FOR_DEBUGGING&&GLBoost.valueOfGLBoostConstants[GLBoost.LOG_TYPE_PERFORMANCE]!==false){renderPass._startUnixTime=performance.now();}
if(renderPassTag!==renderPass.tag){renderPass.clearAssignShaders();}
renderPassTag=renderPass.tag;var camera=renderPass.scene.getMainCamera();let lights=renderPass.scene.lightsExceptAmbient;renderPass.preRender(camera?true:false,lights);var glContext=this._glContext;var gl=glContext.gl;var glem=GLExtensionsManager.getInstance(this._glContext);if(renderPass.fbo&&renderPass.isRenderTargetAttachedTextures){gl.bindFramebuffer(gl.FRAMEBUFFER,renderPass.fbo);}
glem.drawBuffers(gl,renderPass.buffersToDraw);let viewport=null;if(renderPass.viewport){viewport=[renderPass.viewport.x,renderPass.viewport.y,renderPass.viewport.z,renderPass.viewport.w];}else{if(this.isWebVRMode){viewport=[0,0,glContext.canvasWidth,glContext.canvasHeight];}else if(camera){let deltaWidth=glContext.canvasHeight*camera.aspect-glContext.canvasWidth;viewport=[-deltaWidth/2,0,glContext.canvasHeight*camera.aspect,glContext.canvasHeight];}else{viewport=[0,0,glContext.canvasWidth,glContext.canvasHeight];}}
if(!this.isWebVRMode){gl.viewport.apply(gl,viewport);}
this._clearBuffer(gl,renderPass);if(this.__animationFrameObject===this.__webvrDisplay){this.__webvrDisplay.getFrameData(this.__webvrFrameData);if(this.__webvrDisplay.stageParameters){this.__webvrFrameData.sittingToStandingTransform=this.__webvrDisplay.stageParameters.sittingToStandingTransform;}else{this.__webvrFrameData.sittingToStandingTransform=Matrix44$1.translate(this.__defaultUserSittingPositionInVR).flatten();}}
this._drawGizmos(renderPass.preGizmos,expression,lights,camera,renderPass,index,viewport,true);const opacityMeshes=renderPass.opacityMeshes;opacityMeshes.forEach(mesh=>{if(mesh.isVisible){mesh.draw({expression:expression,lights:lights,camera:camera,renderPass:renderPass,renderPassIndex:index,viewport:viewport,isWebVRMode:this.isWebVRMode,webvrFrameData:this.__webvrFrameData});}});if(camera){renderPass.sortTransparentMeshes(camera);}
const transparentMeshes=renderPass.transparentMeshesAsManualOrder?renderPass.transparentMeshesAsManualOrder:renderPass.transparentMeshes;transparentMeshes.forEach(mesh=>{if(mesh.isVisible&&mesh.isTransparent){mesh.draw({expression:expression,lights:lights,camera:camera,renderPass:renderPass,renderPassIndex:index,viewport:viewport,isWebVRMode:this.isWebVRMode,webvrFrameData:this.__webvrFrameData});}});this._drawOutlineMeshes(expression,lights,camera,renderPass,index,viewport);this._drawGizmos(renderPass.postGizmos,expression,lights,camera,renderPass,index,viewport,false);gl.bindFramebuffer(gl.FRAMEBUFFER,null);if(typeof effekseer!=="undefined"&&this.__effekseerElements.length>0&&camera!=null){const projection=camera.projectionRHMatrix().m;const viewing=camera.lookAtRHMatrix().multiply(camera.inverseWorldMatrixWithoutMySelf).m;effekseer.setProjectionMatrix(projection);effekseer.setCameraMatrix(viewing);effekseer.draw();}
renderPass.postRender(camera?true:false,lights);renderPass._endUnixTime=performance.now();});if(GLBoost.VALUE_CONSOLE_OUT_FOR_DEBUGGING&&GLBoost.valueOfGLBoostConstants[GLBoost.LOG_TYPE_PERFORMANCE]!==false){expression.renderPasses.forEach((renderPass,index)=>{this.__logger.out(GLBoost.LOG_LEVEL_INFO,GLBoost.LOG_TYPE_PERFORMANCE,false,`RenderPass[${index}]: ${renderPass._endUnixTime-
renderPass._startUnixTime}`);});}}
_drawOutlineMeshes(expression,lights,camera,renderPass,index,viewport){const globalStatesUsageBackup=this._glBoostSystem._glBoostContext.globalStatesUsage;this._glBoostSystem._glBoostContext.globalStatesUsage=GLBoost.GLOBAL_STATES_USAGE_INCLUSIVE;const meshes=renderPass.outlineModeMeshes;meshes.forEach(mesh=>{if(mesh.isOutlineVisible){mesh.AABBInWorld.updateAllInfo();mesh.draw({expression:expression,lights:lights,camera:camera,renderPass:renderPass,renderPassIndex:index,viewport:viewport,isWebVRMode:this.isWebVRMode,webvrFrameData:this.__webvrFrameData,forceThisMaterial:this._outlineMaterial,isOutlineMode:true});}});this._glBoostSystem._glBoostContext.globalStatesUsage=globalStatesUsageBackup;this._glBoostSystem._glBoostContext.restoreGlobalStatesToDefault();}
_drawGizmos(gizmos,expression,lights,camera,renderPass,index,viewport,isDepthTest){const globalStatesUsageBackup=this._glBoostSystem._glBoostContext.globalStatesUsage;this._glBoostSystem._glBoostContext.globalStatesUsage=GLBoost.GLOBAL_STATES_USAGE_INCLUSIVE;this._glBoostSystem._glBoostContext.currentGlobalStates=[3042];if(isDepthTest){this._glBoostSystem._glBoostContext.currentGlobalStates.push(2929);}
for(let gizmo of gizmos){if(gizmo.isVisible){gizmo.mesh.draw({expression:expression,lights:lights,camera:camera,renderPass:renderPass,renderPassIndex:index,viewport:viewport,isWebVRMode:this.isWebVRMode,webvrFrameData:this.__webvrFrameData,forceThisMaterial:gizmo.forceThisMaterial});}}
this._glBoostSystem._glBoostContext.globalStatesUsage=globalStatesUsageBackup;this._glBoostSystem._glBoostContext.restoreGlobalStatesToDefault();}
_clearBuffer(gl,renderPass){const clearColor=renderPass.clearColor;const clearDepth=renderPass.clearDepth;const colorMask=renderPass.colorMask;if(clearColor){gl.clearColor(clearColor.x,clearColor.y,clearColor.z,clearColor.w);}
if(clearDepth){gl.clearDepth(clearDepth);}
if(colorMask){gl.colorMask.apply(null,[colorMask]);}
if(renderPass.buffersToDraw[0]===gl.NONE){{gl.clear(gl.DEPTH_BUFFER_BIT);}}else if(clearColor||clearDepth){gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);}else if(clearColor){gl.clear(gl.COLOR_BUFFER_BIT);}}
clearCanvas(color_flg,depth_flg,stencil_flg){const gl=this._glContext.gl;var bufferBits=0;if(color_flg===void 0||color_flg)bufferBits|=gl.COLOR_BUFFER_BIT;if(depth_flg===void 0||depth_flg)bufferBits|=gl.DEPTH_BUFFER_BIT;if(stencil_flg===void 0||stencil_flg)
bufferBits|=gl.STENCIL_BUFFER_BIT;gl.clear(bufferBits);}
get glContext(){return this._glContext.gl;}
resize(width,height){this._glContext.canvasWidth=width;this._glContext.canvasHeight=height;}
doRenderLoop(renderLoopFunc,time,...args){args.splice(0,0,time);renderLoopFunc.apply(renderLoopFunc,args);this.__animationFrameId=this.__animationFrameObject.requestAnimationFrame(_time=>{this.doRenderLoop(renderLoopFunc,_time,args[1]);if(this.__requestedToEnterWebVR){this.__isWebVRMode=true;}},time);}
doConvenientRenderLoop(expression,beforeCallback,afterCallback,...args){if(beforeCallback){beforeCallback.apply(beforeCallback,args);}
this.clearCanvas();this.update(expression);this.draw(expression);if(afterCallback){afterCallback.apply(afterCallback,args);}
if(this.__webvrDisplay&&this.__webvrDisplay.isPresenting){this.__webvrDisplay.submitFrame();}
this.__animationFrameId=this.__animationFrameObject.requestAnimationFrame(()=>{this.doConvenientRenderLoop(expression,beforeCallback,afterCallback,...args);if(this.__requestedToEnterWebVR){this.__isWebVRMode=true;}});}
stopRenderLoop(){this.__cancelAnimationFrame(this.__animationFrameId);this.__animationFrameId=-1;}
async enterWebVR(initialUserSittingPositionIfStageParametersDoNotExist,minRenderWidth=null,minRenderHeight=null){if(initialUserSittingPositionIfStageParametersDoNotExist){this.__defaultUserSittingPositionInVR=initialUserSittingPositionIfStageParametersDoNotExist;}
this.__minRenderWidthFromUser=minRenderWidth;this.__minRenderHeightFromUser=minRenderHeight;return new Promise((resolve,reject)=>{if(!this.__webvrDisplay.isPresenting){this.__animationFrameObject=this.__webvrDisplay;const leftEye=this.__webvrDisplay.getEyeParameters("left");const rightEye=this.__webvrDisplay.getEyeParameters("right");this.__canvasWidthBackup=this._glContext.canvasWidth;this.__canvasHeightBackup=this._glContext.canvaHeight;if(this.__minRenderWidthFromUser>leftEye.renderWidth&&this.__minRenderHeightFromUser>rightEye.renderWidth){this.resize(this.__minRenderWidthFromUser*2,this.__minRenderHeightFromUser);}else{this.resize(Math.max(leftEye.renderWidth,rightEye.renderWidth)*2,Math.max(leftEye.renderHeight,rightEye.renderHeight));}
this.__webvrDisplay.requestPresent([{source:this._glContext.canvas}]).then(()=>{this.__requestedToEnterWebVR=true;resolve();}).catch(()=>{console.error("Failed to requestPresent. Please check your VR Setting, or something wrong with your VR system?");reject();});}});}
async readyForWebVR(requestButtonDom){if(window.VRFrameData){this.__webvrFrameData=new window.VRFrameData();}
return new Promise((resolve,reject)=>{if(navigator.getVRDisplays){navigator.getVRDisplays().then(vrDisplays=>{if(vrDisplays.length>0){const webvrDisplay=vrDisplays[vrDisplays.length-1];webvrDisplay.depthNear=0.01;webvrDisplay.depthFar=10000;if(webvrDisplay.capabilities.canPresent){this.__webvrDisplay=webvrDisplay;if(requestButtonDom){requestButtonDom.style.display="block";}else{const paragrach=document.createElement("p");const anchor=document.createElement("a");anchor.setAttribute("id","enter-vr");const enterVr=document.createTextNode("Enter VR");anchor.appendChild(enterVr);paragrach.appendChild(anchor);const canvas=this.glContext.canvas;canvas.parent.insertBefore(paragrach,canvas);window.addEventListener("click",this.enterWebVR.bind(this));}
this.__isReadyForWebVR=true;resolve();}else{console.error("Can't requestPresent now. try again.");reject();}}else{console.error("Failed to get VR Display. Please check your VR Setting, or something wrong with your VR system?");reject();}}).catch(()=>{console.error("Failed to get VR Displays. Please check your VR Setting.");reject();});}else{console.error("Your browser does not support WebVR. Or it is disabled. Check again.");reject();}});}
async exitWebVR(){this.__isWebVRMode=false;if(this.__webvrDisplay&&this.__webvrDisplay.isPresenting){await this.__webvrDisplay.exitPresent();}
this.resize(this.__canvasWidthBackup,this.__canvasHeightBackup);this.__isReadyForWebVR=false;this.__animationFrameObject=window;}
async disableWebVR(){this.__isWebVRMode=false;this.__requestedToEnterWebVR=false;this.__isReadyForWebVR=false;if(this.__webvrDisplay&&this.__webvrDisplay.isPresenting){await this.__webvrDisplay.exitPresent();}
this.__animationFrameObject=window;this.__webvrDisplay=null;}
get isWebVRMode(){return this.__isWebVRMode;}
get isReadyForWebVR(){return this.__isReadyForWebVR;}
webVrSubmitFrame(){if(this.__webvrDisplay&&this.__webvrDisplay.isPresenting){this.__webvrDisplay.submitFrame();}}}
class M_Scene extends M_Group{constructor(glBoostContext){super(glBoostContext);this._gl=this._glContext.gl;this._reset();}
_reset(){this._meshes=[];this._lights=[];this._lightsExceptAmbient=[];this._ambientLights=[];this._cameras=[];this._accumulatedAmbientIntensity=Vector4$1.zero();}
_getCurrentAnimationInputValue(inputName){let value=this._currentAnimationInputValues[inputName];if(typeof value==='undefined'){return(void 0);}else{return value;}}
prepareToRender(expression){this._reset();var aabb=(function setParentAndClearAccumulatedTransformMatriAndMergeAABBRecursively(elem){if(elem instanceof M_Group){elem._needUpdate();var children=elem.getChildren();for(let i=0;i<children.length;i++){children[i]._parent=elem;var aabb=setParentAndClearAccumulatedTransformMatriAndMergeAABBRecursively(children[i]);if(aabb instanceof AABB){elem.AABB.mergeAABB(aabb);}else{console.assert('calculation of AABB error!');}}
return elem.AABB;}
if(elem instanceof M_Mesh){return elem.AABB;}
return null;})(this);this.AABB.mergeAABB(aabb);let collectLights=function(elem){if(elem instanceof M_Group){var children=elem.getChildren();var lights=[];children.forEach(function(child){var childLights=collectLights(child);lights=lights.concat(childLights);});return lights;}else if(elem instanceof M_AbstractLight){return[elem];}else{return[];}};this._lights=[];this._lightsExceptAmbient=[];this._ambientLights=[];this._elements.forEach((elm)=>{this._lights=this._lights.concat(collectLights(elm));this._lightsExceptAmbient=this._lights.filter((light)=>{return!light.isTypeAmbient();});this._ambientLights=this._lights.filter((light)=>{return light.isTypeAmbient();});});let existCamera_f=false;let collectCameras=function(elem){if(elem instanceof M_Group){var children=elem.getChildren();var cameras=[];children.forEach(function(child){var childCameras=collectCameras(child);cameras=cameras.concat(childCameras);});return cameras;}else if(elem instanceof M_AbstractCamera){existCamera_f=true;return[elem];}else{return[];}};this._cameras=[];this._elements.forEach((elm)=>{this._cameras=this._cameras.concat(collectCameras(elm));});if(this._cameras.length===0);else if(this._cameras.length===1){this._cameras[0].setAsMainCamera(this);}else{let isNotMainCameraFound=true;for(let camera of this._cameras){if(camera.isMainCamera(this)){isNotMainCameraFound=false;break;}}
if(isNotMainCameraFound){this._cameras[0].setAsMainCamera(this);}}
let collectMeshes=function(elem){if(elem instanceof M_Group){var children=elem.getChildren();var meshes=[];children.forEach(function(child){var childMeshes=collectMeshes(child);meshes=meshes.concat(childMeshes);});return meshes;}else if(elem instanceof M_Mesh){return[elem];}else{return[];}};this._meshes=[];this._elements.forEach((elm)=>{this._meshes=this._meshes.concat(collectMeshes(elm));});let callPrepareToRenderMethodOfAllElements=(elem)=>{if(elem instanceof M_Group){var children=elem.getChildren();children.forEach(function(child){callPrepareToRenderMethodOfAllElements(child);});for(let gizmo of elem.gizmos){gizmo.mesh.prepareToRender(expression,existCamera_f,[]);}}else if(elem instanceof M_Mesh){elem.prepareToRender(expression,existCamera_f,this._lights);for(let gizmo of elem.gizmos){gizmo.mesh.prepareToRender(expression,existCamera_f,this._lights);if(gizmo.forceThisMaterial){gizmo.forceThisMaterial.shaderInstance=gizmo.mesh.geometry.prepareGLSLProgram(expression,gizmo.forceThisMaterial,existCamera_f,this._lights,null);}}}else if(elem instanceof M_Element){elem.prepareToRender();for(let gizmo of elem.gizmos){gizmo.mesh.prepareToRender(expression,existCamera_f,[]);}}else{return;}};callPrepareToRenderMethodOfAllElements(this);}
getMainCamera(renderPass){var camera=null;this.cameras.forEach((elm)=>{if(elm.isMainCamera(this)){camera=elm;}});return camera;}
get lightsExceptAmbient(){return this._lightsExceptAmbient;}
updateAmountOfAmbientLightsIntensity(){this._accumulatedAmbientIntensity=Vector4$1.zero();for(let light of this._ambientLights){this._accumulatedAmbientIntensity.add(light.intensity);}}
getAmountOfAmbientLightsIntensity(){return this._accumulatedAmbientIntensity.clone();}
getChildren(){return this._elements;}
get elements(){return this._elements;}
get meshes(){return this._meshes;}
get lights(){return this._lights;}
get lightsExceptAmbient(){return this._lightsExceptAmbient;}
get cameras(){return this._cameras;}}
class M_Gizmo extends M_Group{constructor(glBoostContext){super(glBoostContext,null,null);this._mesh=null;this._isPreDraw=false;this._forceThisMaterial=null;}
get mesh(){return this._mesh;}
set isPreDraw(flg){this._isPreDraw=flg;}
get isPreDraw(){return this._isPreDraw;}
get forceThisMaterial(){return this._forceThisMaterial;}}
class JointPrimitive extends Geometry{constructor(glBoostContext,length,lineCount=1){super(glBoostContext);this._colors=[];this.color=new Vector4$1(1,1,1,1);this._worldPositionOfThisJoint=new Vector3(0,0,1);this._worldPositionOfParentJoint=new Vector3(0,0,0);this._vertexData=this._setupVertexData();this.setVerticesData(this._vertexData,null,GLBoost$1.LINES);this._width=1;}
_setupVertexData(){let length=Vector3.lengthBtw(this._worldPositionOfThisJoint,this._worldPositionOfParentJoint);let arrowWidth=this._width;let arrowheadLength=length/7.5;let arrowStickLength=length-arrowheadLength;let positions=[];let deltaVec=Vector3.subtract(this._worldPositionOfParentJoint,this._worldPositionOfThisJoint);let directionToParent=new Vector3(0,1,0);if(!deltaVec.isEqual(Vector3.zero())){directionToParent=Vector3.subtract(this._worldPositionOfParentJoint,this._worldPositionOfThisJoint).normalize();}
const arrowStickPosition=Vector3.add(this._worldPositionOfThisJoint,Vector3.multiply(directionToParent,arrowStickLength));let dummyVector=new Vector3(0,1,0);let dummyVector2=new Vector3(0,-1,0);if(Math.abs(Vector3.dotProduct(directionToParent,dummyVector))>0.4){dummyVector=new Vector3(1,0,0);dummyVector2=new Vector3(-1,0,0);}
if(Math.abs(Vector3.dotProduct(directionToParent,dummyVector))>0.4){dummyVector=new Vector3(0,0,1);dummyVector2=new Vector3(0,0,-1);}
const crossVector=Vector3.multiply(Vector3.cross(directionToParent,dummyVector).normalize(),arrowWidth);const crossVector2=Vector3.multiply(Vector3.cross(directionToParent,crossVector).normalize(),arrowWidth);const crossVector3=Vector3.multiply(Vector3.cross(directionToParent,dummyVector2).normalize(),arrowWidth);const crossVector4=Vector3.multiply(Vector3.cross(directionToParent,crossVector3).normalize(),arrowWidth);const crossPosition=Vector3.add(arrowStickPosition,crossVector);const crossPosition2=Vector3.add(arrowStickPosition,crossVector2);const crossPosition3=Vector3.add(arrowStickPosition,crossVector3);const crossPosition4=Vector3.add(arrowStickPosition,crossVector4);positions.push(this._worldPositionOfThisJoint);positions.push(crossPosition);positions.push(this._worldPositionOfThisJoint);positions.push(crossPosition2);positions.push(this._worldPositionOfThisJoint);positions.push(crossPosition3);positions.push(this._worldPositionOfThisJoint);positions.push(crossPosition4);positions.push(crossPosition);positions.push(crossPosition2);positions.push(crossPosition2);positions.push(crossPosition3);positions.push(crossPosition3);positions.push(crossPosition4);positions.push(crossPosition4);positions.push(crossPosition);positions.push(this._worldPositionOfParentJoint);positions.push(crossPosition);positions.push(this._worldPositionOfParentJoint);positions.push(crossPosition2);positions.push(this._worldPositionOfParentJoint);positions.push(crossPosition3);positions.push(this._worldPositionOfParentJoint);positions.push(crossPosition4);this._vertexData={position:positions,color:this._colors};return this._vertexData;}
set worldPositionOfThisJoint(vec){this._worldPositionOfThisJoint=vec;}
get worldPositionOfThisJoint(){return this._worldPositionOfThisJoint;}
set worldPositionOfParentJoint(vec){this._worldPositionOfParentJoint=vec;}
get worldPositionOfParentJoint(){return this._worldPositionOfParentJoint;}
set width(value){this._width=value;}
get width(){return this._width;}
set color(vec){this._color=vec;this._colors=[];for(let i=0;i<24;i++){this._colors.push(this._color);}}
get color(){return this._color;}
update(){this._vertexData=this._setupVertexData();this.updateVerticesData(this._vertexData,true);}
set meshContainingSelf(jointGizmoMesh){this._mesh=jointGizmoMesh;}}
GLBoost$1["JointPrimitive"]=JointPrimitive;class M_JointGizmo extends M_Gizmo{constructor(glBoostContext,joint,length){super(glBoostContext,null,null);this._init(glBoostContext,joint,length);this.isVisible=false;this.baseColor=new Vector4$1(0.0,1.0,1.0,0.25);}
_init(glBoostContext,joint,length){this._joint=joint;this._primitive=new JointPrimitive(this._glBoostContext,length,1);this._mesh=new M_Mesh(glBoostContext,this._primitive,null);this._mesh.masterElement=this;this.addChild(this._mesh);}
set baseColor(colorVec){this._primitive.color=colorVec;}
get baseColor(){return this._primitive.color;}
get worldMatrixInner(){return Matrix44$1.identity();}
set worldPositionOfThisJoint(vec3){this._primitive.worldPositionOfThisJoint=vec3;}
get worldPositionOfThisJoint(){return this._primitive.worldPositionOfThisJoint;}
set worldPositionOfParentJoint(vec3){this._primitive.worldPositionOfParentJoint=vec3;}
get worldPositionOfParentJoint(){return this._primitive.worldPositionOfParentJoint;}
set width(value){this._primitive.width=value;}
get width(){return this._primitive.width;}
update(){this._primitive.update();}
set isVisible(flag){this._mesh.isVisible=flag;}
get isVisible(){return this._mesh.isVisible;}}
GLBoost$1['M_JointGizmo']=M_JointGizmo;class M_Joint extends M_Element{constructor(glBoostContext,isExistJointGizmo=false){super(glBoostContext);if(isExistJointGizmo){this._gizmo=new M_JointGizmo(glBoostContext,this,length);this._gizmos.push(this._gizmo);}else{this._gizmo={};}
M_Joint._calculatedTransforms={};M_Joint._calculatedTranslates={};this._childJoints=[];this._jointsOfParentHierarchies=[];this.length=new Vector3(length,length,length);this._isCalculatedJointGizmo=false;this._jointPoseMatrix=Matrix44$1.identity();this._length=1;this._inverseBindMatrix=Matrix44$1.identity();this._skeletalMesh=null;}
set inverseBindMatrix(mat4){this._inverseBindMatrix=mat4;}
get inverseBindMatrix(){return this._inverseBindMatrix;}
set skeletalMesh(skeletalMesh){this._skeletalMesh=skeletalMesh;}
get skeletalMesh(){return this._skeletalMesh;}
set worldPositionOfThisJoint(vec){this._gizmo.worldPositionOfThisJoint=vec;}
get worldPositionOfThisJoint(){return this._gizmo.worldPositionOfThisJoint;}
set worldPositionOfParentJoint(vec){this._gizmo.worldPositionOfParentJoint=vec;}
get worldPositionOfParentJoint(){return this._gizmo.worldPositionOfParentJoint;}
set width(value){this._gizmo.width=value;}
get width(){return this._gizmo.width;}
set jointPoseMatrix(matrix){this._jointPoseMatrix=matrix;}
get jointPoseMatrix(){return this._jointPoseMatrix;}
clearIsCalculatedLengthFlag(){this._isCalculatedJointGizmo=false;}
get isCalculatedJointGizmo(){return this._isCalculatedJointGizmo;}
set isVisible(flg){this._gizmo.isVisible=flg;}
get isVisible(){return this._gizmo.isVisible;}
set childJoints(joints){this._childJoints=joints;}
get childJoints(){return this._childJoints;}
set jointsOfParentHierarchies(joints){this._jointsOfParentHierarchies=joints;}
get jointsOfParentHierarchies(){return this._jointsOfParentHierarchies;}
updateGizmoDisplay(){if(this._gizmo instanceof M_JointGizmo){this._gizmo.update();}}
clone(){let instance=new M_Joint(this._glBoostSystem);this._copy(instance);return instance;}
_copy(instance){super._copy(instance);}}
GLBoost$1['M_Joint']=M_Joint;class M_SkeletalMesh extends M_Mesh{constructor(glBoostContext,geometry,material,rootJointName){super(glBoostContext,geometry,material,rootJointName);this._rootJointName=rootJointName;this._jointsHierarchy=null;this._inverseBindMatrices=[];this._bindShapeMatrix=Matrix44$1.identity();this._jointNames=[];this._gltfJointIndices=[];this._joints=[];this._jointMatrices=null;this._qArray=null;this._tArray=null;this._qtArray=null;this._translationScale=0;}
prepareToRender(expression,existCamera_f,lights,renderPasses){let joints=this.jointsHierarchy.searchElementsByType(M_Joint);this._joints=[];let jointCount=0;for(let i=0;i<this._jointNames.length;i++){for(let j=0;j<joints.length;j++){if(this._jointNames[i]===joints[j]._userFlavorName){this._joints.push(joints[j]);joints[j].skeletalMesh=this;let inverseBindMatrix=(this._inverseBindMatrices[jointCount]!==void 0)?this._inverseBindMatrices[jointCount]:Matrix44$1.identity();joints[j].inverseBindMatrix=inverseBindMatrix;joints[j].bindMatrix=Matrix44$1.invert(inverseBindMatrix);jointCount++;break;}}}
jointCount=0;for(let i=0;i<this._gltfJointIndices.length;i++){for(let j=0;j<joints.length;j++){if(this._gltfJointIndices[i]===joints[j]._glTFJointIndex){this._joints.push(joints[j]);joints[j].skeletalMesh=this;let inverseBindMatrix=(this._inverseBindMatrices[jointCount]!==void 0)?this._inverseBindMatrices[jointCount]:Matrix44$1.identity();joints[j].inverseBindMatrix=inverseBindMatrix;joints[j].bindMatrix=Matrix44$1.invert(inverseBindMatrix);jointCount++;break;}}}
const calcParentJointsMatricesRecursively=(joint)=>{let children=joint.parent.parent.getChildren();let parentJoint=null;for(let i=0;i<children.length;i++){if(children[i]instanceof M_Joint){parentJoint=children[i];}}
let results=[];if(parentJoint){let result=calcParentJointsMatricesRecursively(parentJoint);if(Array.isArray(result)){Array.prototype.push.apply(results,result);}
for(let jointName of this._jointNames){if(parentJoint.userFlavorName===jointName){results.push(parentJoint);return results;}}
for(let gltfJointIndex of this._gltfJointIndices){if(parentJoint._glTFJointIndex===gltfJointIndex){results.push(parentJoint);return results;}}
return results;}
return null;};let jointsParentHierarchies=null;for(let i=0;i<this._joints.length;i++){jointsParentHierarchies=calcParentJointsMatricesRecursively(this._joints[i]);if(jointsParentHierarchies==null){jointsParentHierarchies=[];}
this._joints[i].jointsOfParentHierarchies=jointsParentHierarchies;}
super.prepareToRender(expression,existCamera_f,lights,renderPasses);let lengthCenterToCorner=AABB.multiplyMatrix(this._joints[0].worldMatrix,this.rawAABBInLocal).lengthCenterToCorner;for(let i=0;i<this._joints.length;i++){this._joints[i].width=lengthCenterToCorner/100;}}
set jointsHierarchy(jointsHierarchy){this._jointsHierarchy=jointsHierarchy;}
get jointsHierarchy(){return this._jointsHierarchy;}
get rootJointName(){return this._rootJointName;}
set inverseBindMatrices(inverseBindMatrices){this._inverseBindMatrices=inverseBindMatrices;this._geometry.setExtraDataForShader('jointN',(inverseBindMatrices.length<4)?4:inverseBindMatrices.length);}
get inverseBindMatrices(){return this._inverseBindMatrices;}
set bindShapeMatrix(matrix){this._bindShapeMatrix=matrix;}
get bindShapeMatrix(){return this._bindShapeMatrix;}
set jointNames(names){this._jointNames=names;}
get jointNames(){return this._jointNames;}
set gltfJointIndices(indices){this._gltfJointIndices=indices;}
get gltfJointIndices(){return this._gltfJointIndices;}
clone(clonedOriginalRootElement=this,clonedRootElement=null,onCompleteFuncs=[]){let instance=new M_SkeletalMesh(this._glBoostSystem,this.geometry,this.material,this._rootJointName);this._copy(instance,clonedOriginalRootElement,clonedRootElement,onCompleteFuncs);return instance;}
_copy(instance,clonedOriginalRootElement,clonedRootElement,onCompleteFuncs){super._copy(instance);instance._jointsHierarchy=this._jointsHierarchy.clone();instance._inverseBindMatrices=this._inverseBindMatrices;instance._bindShapeMatrix=this._bindShapeMatrix;instance._jointNames=this._jointNames;instance._gltfJointIndices=this._gltfJointIndices;instance._joints=this._joints;onCompleteFuncs.push((function(clonedSkeletalMesh,_clonedRootElement,jointRootGroupUserFlavorName){return function(){let clonedJointRootGroup=_clonedRootElement.searchElement(jointRootGroupUserFlavorName);clonedSkeletalMesh._jointsHierarchy=clonedJointRootGroup;}})(instance,clonedRootElement,this._jointsHierarchy.userFlavorName));}
set isSkeletonVisible(flg){for(let joint of this._joints){joint.isGizmoVisible=flg;}}
get isSkeletonVisible(){return this._joints[0].isGizmoVisible;}
get rootJointsWorldPosition(){if(this._joints.length>0){const rootJointMatrix=this._joints[0].worldMatrix;let rootJointPosWorld=new Vector3(rootJointMatrix.multiplyVector(Vector4$1.zero()));return rootJointPosWorld;}
return Vector3.zero();}
getRootJointsWorldPositionAt(inputValue){if(this._joints.length>0){const rootJointMatrix=this._joints[0].getWorldMatrixAt(inputValue);let rootJointPosWorld=new Vector3(rootJointMatrix.multiplyVector(Vector4$1.zero()));return rootJointPosWorld;}
return Vector3.zero();}}
GLBoost$1['M_SkeletalMesh']=M_SkeletalMesh;class M_SkeletalGeometry extends Geometry{constructor(glBoostContext){super(glBoostContext);this._skeletalShaderSpecified=null;this._skeletalShaderNormal=null;}
update(skeletalMesh){var joints=skeletalMesh._joints;var matrices=[];let areThereAnyJointsWhichHaveAnimation=false;if(joints[0].parent._getCurrentAnimationInputValue(joints[0].parent._activeAnimationLineName)!==null){areThereAnyJointsWhichHaveAnimation=true;}
let input=joints[0]._getCurrentAnimationInputValue('time');let jointZeroWorldMatrix=null;let skeletalMeshWorldMatrix=null;let skeletalMeshTransformMatrixAccmulatedAncestry=skeletalMesh.getWorldMatrixAt(input);let inverseSkeletalMeshTransformMatrixAccmulatedAncestry=Matrix44$1.invert(skeletalMeshTransformMatrixAccmulatedAncestry);for(let i=joints.length-1;i>=0;i--){let globalJointTransform=null;let inverseBindMatrix=joints[i].inverseBindMatrix;if(areThereAnyJointsWhichHaveAnimation){globalJointTransform=joints[i].getWorldMatrixAt(input);skeletalMeshWorldMatrix=globalJointTransform;}else{globalJointTransform=skeletalMeshTransformMatrixAccmulatedAncestry;skeletalMeshWorldMatrix=globalJointTransform;let bindMat=joints[i].bindMatrix;globalJointTransform=Matrix44$1.multiply(skeletalMeshWorldMatrix,bindMat);}
if(i===0){jointZeroWorldMatrix=globalJointTransform;}
if(this._materialForSkeletals[0].shaderInstance&&this._materialForSkeletals[0].shaderInstance.constructor===FreeShader){matrices[i]=inverseSkeletalMeshTransformMatrixAccmulatedAncestry;}else{matrices[i]=Matrix44$1.identity();}
matrices[i]=Matrix44$1.multiply(matrices[i],globalJointTransform);joints[i].jointPoseMatrix=Matrix44$1.multiply(Matrix44$1.identity(),globalJointTransform);matrices[i]=Matrix44$1.multiply(matrices[i],inverseBindMatrix);matrices[i]=Matrix44$1.multiply(matrices[i],skeletalMesh.bindShapeMatrix);}
GLBoost$1.JointGizmoUpdater.update(joints,jointZeroWorldMatrix);if(!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL){let flatMatrices=[];for(let i=0;i<matrices.length;i++){Array.prototype.push.apply(flatMatrices,matrices[i].flattenAsArray());}
if(matrices.length<4){let identityMatrices=[];for(let i=0;i<(4-matrices.length);i++){Array.prototype.push.apply(identityMatrices,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);}
Array.prototype.push.apply(flatMatrices,identityMatrices);}
skeletalMesh._jointMatrices=flatMatrices;}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL===1){{skeletalMesh._qArray=new Float32Array(matrices.length*4);skeletalMesh._tArray=new Float32Array(matrices.length*4);for(let i=0;i<matrices.length;i++){let m=matrices[i];let scale=new Vector3(Math.sqrt(m.m00*m.m00+m.m01*m.m01+m.m02*m.m02),Math.sqrt(m.m10*m.m10+m.m11*m.m11+m.m12*m.m12),Math.sqrt(m.m20*m.m20+m.m21*m.m21+m.m22*m.m22));matrices[i].m00/=scale.x;matrices[i].m01/=scale.x;matrices[i].m02/=scale.x;matrices[i].m10/=scale.y;matrices[i].m11/=scale.y;matrices[i].m12/=scale.y;matrices[i].m20/=scale.z;matrices[i].m21/=scale.z;matrices[i].m22/=scale.z;let q=(Quaternion.fromMatrix(matrices[i]));skeletalMesh._qArray[i*4+0]=q.x;skeletalMesh._qArray[i*4+1]=q.y;skeletalMesh._qArray[i*4+2]=q.z;skeletalMesh._qArray[i*4+3]=q.w;let t=matrices[i].getTranslate();skeletalMesh._tArray[i*4+0]=t.x;skeletalMesh._tArray[i*4+1]=t.y;skeletalMesh._tArray[i*4+2]=t.z;skeletalMesh._tArray[i*4+3]=Math.max(scale.x,scale.y,scale.z);}}}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL>1){{skeletalMesh._qtArray=new Float32Array(matrices.length*4);let tXArray=[];let tYArray=[];let tZArray=[];for(let i=0;i<matrices.length;i++){let t=matrices[i].getTranslate();tXArray.push(Math.abs(t.x));tYArray.push(Math.abs(t.y));tZArray.push(Math.abs(t.z));}
skeletalMesh._translationScale=new Vector3();let maxX=Math.max.apply(null,tXArray);let maxY=Math.max.apply(null,tYArray);let maxZ=Math.max.apply(null,tZArray);skeletalMesh._translationScale.x=maxX*1.1;skeletalMesh._translationScale.y=maxY*1.1;skeletalMesh._translationScale.z=maxZ*1.1;for(let i=0;i<matrices.length;i++){let s=matrices[i].getScale();let q=(Quaternion.fromMatrix(matrices[i]));q.normalize();let vec2QPacked=MathClassUtil.packNormalizedVec4ToVec2(q.x,q.y,q.z,q.w,4096);let t=matrices[i].getTranslate();skeletalMesh._qtArray[i*4+0]=vec2QPacked[0];skeletalMesh._qtArray[i*4+1]=vec2QPacked[1];let vec2TPacked=MathClassUtil.packNormalizedVec4ToVec2(t.x/skeletalMesh._translationScale.x,t.y/skeletalMesh._translationScale.y,t.z/skeletalMesh._translationScale.z,0.0,4096);skeletalMesh._qtArray[i*4+2]=vec2TPacked[0];skeletalMesh._qtArray[i*4+3]=vec2TPacked[1];}}}}
drawIntermediate(gl,glslProgram,skeletalMesh,material){if(skeletalMesh._jointMatrices===null&&skeletalMesh._qtArray===null&&skeletalMesh._qArray===null){return;}
if(!GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL){Shader.trySettingMatrix44ToUniform(gl,glslProgram,material,material._semanticsDic,'JOINTMATRIX',new Float32Array(skeletalMesh._jointMatrices));}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL===1){Shader.trySettingVec4ArrayToUniform(gl,glslProgram,material,material._semanticsDic,'JOINT_QUATERNION',skeletalMesh._qArray);Shader.trySettingVec4ArrayToUniform(gl,glslProgram,material,material._semanticsDic,'JOINT_TRANSLATION',skeletalMesh._tArray);}else if(GLBoost$1.VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL>1){Shader.trySettingVec4ArrayToUniform(gl,glslProgram,material,material._semanticsDic,'JOINT_QUATTRANSLATION',skeletalMesh._qtArray);this._glContext.uniform3f(material.getUniform(glslProgram,'uniform_translationScale'),skeletalMesh._translationScale.x,skeletalMesh._translationScale.y,skeletalMesh._translationScale.z,true);}}
prepareToRender(expression,existCamera_f,pointLight,meshMaterial,skeletalMesh,shaderClassSpecified=void 0,argMaterials=void 0){if(argMaterials!==void 0){this._materialForSkeletals=argMaterials;}else{if(this._materials.length>0){this._materialForSkeletals=this._materials;}else if(meshMaterial){this._materialForSkeletals=[meshMaterial];}else{this._materialForSkeletals=[this._defaultMaterial];}}
let derrivedClass=null;if(!(this._materialForSkeletals[0].shaderInstance&&this._materialForSkeletals[0].shaderInstance.constructor===FreeShader)){let baseClass=null;if(shaderClassSpecified){baseClass=shaderClassSpecified;class SkeletalShader extends baseClass{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);SkeletalShader.mixin(SkeletalShaderSource);}}
derrivedClass=SkeletalShader;this._skeletalShaderSpecified=derrivedClass;}else{for(let materialForSkeletal of this._materialForSkeletals){baseClass=materialForSkeletal.shaderClass;class SkeletalShader extends baseClass{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);SkeletalShader.mixin(SkeletalShaderSource);}}
derrivedClass=SkeletalShader;}
this._skeletalShaderNormal=derrivedClass;}
for(let i=0;i<this._materialForSkeletals.length;i++){if(shaderClassSpecified);else{if(this._materialForSkeletals[i].shaderClass.name!==derrivedClass.name){this._materialForSkeletals[i].shaderClass=derrivedClass;}}}}
return super.prepareToRender(expression,existCamera_f,pointLight,meshMaterial,skeletalMesh,derrivedClass,argMaterials);}}
class M_OrthoCamera extends M_AbstractCamera{constructor(glBoostContext,toRegister,lookat,ortho){super(glBoostContext,toRegister);this._lowLevelCamera=new L_OrthoCamera(this,false,lookat,ortho);this._lowLevelCamera._middleLevelCamera=this;}
_needUpdateProjection(){this._lowLevelCamera._needUpdateProjection();}
get updateCountAsCameraProjection(){return this._lowLevelCamera.updateCountAsCameraProjection;}
projectionRHMatrix(){return this._lowLevelCamera.projectionRHMatrix();}
set left(value){this._lowLevelCamera.left=value;}
get left(){return this._lowLevelCamera.left;}
set right(value){this._lowLevelCamera.right=value;}
get right(){return this._lowLevelCamera.right;}
set bottom(value){this._lowLevelCamera.bottom=value;}
get bottom(){return this._lowLevelCamera.bottom;}
set top(value){this._lowLevelCamera.top=value;}
get top(){return this._lowLevelCamera.top;}
set zNear(value){this._lowLevelCamera.zNear=value;}
get zNear(){return this._lowLevelCamera.zNear;}
set zFar(value){this._lowLevelCamera.zFar=value;}
get zFar(){return this._lowLevelCamera.zFar;}
set xmag(value){this._lowLevelCamera.xmag=value;}
get xmag(){return this._lowLevelCamera.xmag;}
set ymag(value){this._lowLevelCamera.ymag=value;}
get ymag(){return this._lowLevelCamera.ymag;}
get aspect(){return(this._lowLevelCamera.right-this._lowLevelCamera.left)/(this._lowLevelCamera.top-this._lowLevelCamera.bottom);}}
GLBoost$1['M_OrthoCamera']=M_OrthoCamera;class Arrow extends Geometry{constructor(glBoostSystem,length,lineCount=1){super(glBoostSystem);this._setupVertexData(length,lineCount);}
_setupVertexData(length,lineCount){let arrowheadWidth=length/10;let arrowheadLength=length/7.5;let stickLength=length-arrowheadLength;let halfLength=length/2;let positions=[];for(let i=0;i<lineCount;i++){let lineOffset=(i-lineCount/2)*arrowheadWidth;let lineOtherOffset=arrowheadWidth;if((i%2)!==1){lineOtherOffset=-lineOtherOffset;}
positions.push(new Vector3(lineOtherOffset,lineOffset,halfLength));positions.push(new Vector3(lineOtherOffset,lineOffset,-stickLength+halfLength));positions.push(new Vector3(arrowheadWidth+lineOtherOffset,lineOffset,-stickLength+halfLength));positions.push(new Vector3(-arrowheadWidth+lineOtherOffset,lineOffset,-stickLength+halfLength));positions.push(new Vector3(-arrowheadWidth+lineOtherOffset,lineOffset,-stickLength+halfLength));positions.push(new Vector3(lineOtherOffset,lineOffset,-length+halfLength));positions.push(new Vector3(lineOtherOffset,lineOffset,-length+halfLength));positions.push(new Vector3(arrowheadWidth+lineOtherOffset,lineOffset,-stickLength+halfLength));}
this.setVerticesData({position:positions},null,GLBoost$1.LINES);}}
GLBoost$1["Arrow"]=Arrow;class M_DirectionalLightGizmo extends M_Gizmo{constructor(glBoostSystem,length){super(glBoostSystem,null,null);this._init(glBoostSystem,length);this.isVisible=false;this.baseColor=new Vector4$1(0.8,0.8,0,1);}
_init(glBoostSystem,length){this._material=new ClassicMaterial$1(glBoostSystem);this._mesh=new M_Mesh(glBoostSystem,new Arrow(glBoostSystem,length,3),this._material);this.addChild(this._mesh);}
set rotate(rotateVec3){this._mesh.rotate=rotateVec3;}
get rotate(){return this._mesh.rotate;}
set baseColor(colorVec){this._material.baseColor=colorVec;}
get baseColor(){return this._material.baseColor;}}
class M_DirectionalLight extends M_AbstractLight{constructor(glBoostSystem,intensity,rotate=new Vector3(0,0,0),length=1.0){super(glBoostSystem);this._intensity=intensity;this._direction=new Vector3(0.0,1.0,0.0);this._gizmo=new M_DirectionalLightGizmo(glBoostSystem,length);this._gizmos.push(this._gizmo);this.rotate=rotate;this._isLightType='directional';}
set multiplyMatrixGizmo(mat4){this._gizmo.matrix=mat4;}
get multiplyMatrixGizmo(){return this._gizmo.getMatrixNotAnimated();}
set intensity(vec){this._intensity=vec;}
get intensity(){return this._intensity;}
set rotate(vec3){super.rotate=vec3;this._gizmo._mesh.rotate=vec3;this.callCameraCustomFunction();}
set translate(vec3){super.translate=vec3;this._gizmo._mesh.translate=vec3;this.callCameraCustomFunction();}
get translate(){return this._gizmo.translate;}
get rotate(){return super.rotate;}
set matrix(vec3){super.matrix=vec3;this._gizmo._mesh.matrix=vec3;this.callCameraCustomFunction();}
get matrix(){return super.matrix;}
set quaternion(vec3){super.quaternion=vec3;this._gizmo._mesh.quaternion=vec3;this.callCameraCustomFunction();}
get quaternion(){return super.quaternion;}
callCameraCustomFunction(){if(this._camera){if(this._camera.customFunction){this._camera.customFunction(this);}}}
set direction(_zDir){let yDir=new Vector3(0,1,0);let xDir=Vector3.cross(yDir,_zDir);let zDir=Vector3.cross(xDir,yDir);let result=Matrix44$1.identity();result.m00=xDir.x;result.m10=xDir.y;result.m20=xDir.z;result.m01=yDir.x;result.m11=yDir.y;result.m21=yDir.z;result.m02=zDir.x;result.m12=zDir.y;result.m22=zDir.z;this.matrix=result;this._gizmo._mesh.matrix=result;this.callCameraCustomFunction();}
get direction(){let result=(new Matrix33(super.quaternion)).multiplyVector(this._direction);return result;}
get directionInWorld(){let direction=new Vector3(this.worldMatrixWithoutMySelf.getRotate().multiplyVector(new Vector4$1(this.direction)));return direction;}}
class M_AmbientLight extends M_AbstractLight{constructor(glBoostContext,intensity){super(glBoostContext);this._intensity=intensity;this._isLightType='ambient';}
set intensity(vec){this._intensity=vec;}
get intensity(){return this._intensity;}}
class M_SpotLight extends M_AbstractLight{constructor(glBoostContext,intensity,rotate=new Vector3(0,0,0)){super(glBoostContext);this._intensity=intensity;this._isLightType='spot';this._direction=new Vector3(0.0,1.0,0.0);this.rotate=rotate;this._spotExponent=1.0;this._spotCutoffInDegree=30;}
set intensity(vec){this._intensity=vec;}
get intensity(){return this._intensity;}
set direction(vec){console.error("Not supported Now!");}
get translate(){return this._gizmo.translate;}
set rotate(vec3){super.rotate=vec3;this.callCameraCustomFunction();}
get rotate(){return super.rotate;}
set matrix(vec3){super.matrix=vec3;this._gizmo._mesh.matrix=vec3;this.callCameraCustomFunction();}
get matrix(){return super.matrix;}
set quaternion(vec3){super.quaternion=vec3;this._gizmo._mesh.quaternion=vec3;this.callCameraCustomFunction();}
get quaternion(){return super.quaternion;}
callCameraCustomFunction(){if(this._camera){if(this._camera.customFunction){this._camera.customFunction(this);}}}
set direction(_zDir){let yDir=new Vector3(0,1,0);let xDir=Vector3.cross(yDir,_zDir);let zDir=Vector3.cross(xDir,yDir);let result=Matrix44.identity();result.m00=xDir.x;result.m10=xDir.y;result.m20=xDir.z;result.m01=yDir.x;result.m11=yDir.y;result.m21=yDir.z;result.m02=zDir.x;result.m12=zDir.y;result.m22=zDir.z;this.matrix=result;this.callCameraCustomFunction();}
get direction(){let result=(new Matrix33(this.quaternion)).multiplyVector(this._direction);return result;}
get directionInWorld(){let direction=new Vector3(this.worldMatrixWithoutMySelf.getRotate().multiplyVector(new Vector4(this.direction)));return direction;}
set spotExponent(val){this._spotExponent=val;}
get spotExponent(){return this._spotExponent;}
set spotCutoffInDegree(val){this._spotCutoffInDegree=val;}
get spotCutoffInDegree(){return this._spotCutoffInDegree;}
get spotCosCutoff(){return Math.cos(MathUtil.degreeToRadian(this._spotCutoffInDegree));}}
GLBoost$1['M_SpotLight']=M_SpotLight;class M_AxisGizmo extends M_Gizmo{constructor(glBoostSystem,length){super(glBoostSystem);this._init(glBoostSystem,length);}
_init(glBoostSystem,length){let mesh=new M_Mesh(glBoostSystem,new Axis(glBoostSystem,length));this.addChild(mesh);}}
class Grid extends Geometry{constructor(glBoostContext,length,division,isXZ,isXY,isYZ){super(glBoostContext);this._setupVertexData(length,division,isXZ,isXY,isYZ);}
_setupVertexData(length,division,isXZ,isXY,isYZ){let positions=[];for(let i=0;i<division*2+3;i++){let start=-length;let oneUnitLength=length/(division+1);if(isXZ){positions.push(new Vector3(-length,0,start+oneUnitLength*i));positions.push(new Vector3(length,0,start+oneUnitLength*i));positions.push(new Vector3(start+oneUnitLength*i,0,-length));positions.push(new Vector3(start+oneUnitLength*i,0,length));}
if(isXY){positions.push(new Vector3(-length,start+oneUnitLength*i,0));positions.push(new Vector3(length,start+oneUnitLength*i,0));positions.push(new Vector3(start+oneUnitLength*i,-length,0));positions.push(new Vector3(start+oneUnitLength*i,length,0));}
if(isYZ){positions.push(new Vector3(0,-length,start+oneUnitLength*i));positions.push(new Vector3(0,length,start+oneUnitLength*i));positions.push(new Vector3(0,start+oneUnitLength*i,-length));positions.push(new Vector3(0,start+oneUnitLength*i,length));}}
this.setVerticesData({position:positions},null,GLBoost$1.LINES);}}
GLBoost$1["Grid"]=Grid;class M_GridGizmo extends M_Gizmo{constructor(glBoostContext,length,division,isXZ=true,isXY=false,isYZ=false,colorVec=new Vector4$1(0.5,0.5,0.5,1)){super(glBoostContext,null,null);this._init(glBoostContext,length,division,isXZ,isXY,isYZ,colorVec);}
_init(glBoostContext,length,division,isXZ,isXY,isYZ,colorVec){this._material=new ClassicMaterial$1(glBoostContext);this._material.baseColor=colorVec;this.addChild(new M_Mesh(glBoostContext,new Grid(glBoostContext,length,division,isXZ,isXY,isYZ,colorVec),this._material));}}
class M_OutlineGizmo extends M_Gizmo{constructor(glBoostSystem,mesh,scale=0.05){super(glBoostSystem,null,null);if(mesh.className==='M_Mesh'){this._init(glBoostSystem,mesh,scale);}}
_init(glBoostSystem,mesh,scale){this._mesh=mesh.clone();this.isPreDraw=true;this._material=new ClassicMaterial$1(glBoostSystem);this._material.baseColor=new Vector4$1(0,1,0,1);this._material.states.enable=[2884];this._material.states.functions.cullFace=[1028];this._material.states.functions.depthMask=[true];this._material.userFlavorName="OutlineGizmoMaterial";this._forceThisMaterial=this._material;this._group=glBoostSystem._glBoostContext.createGroup();this.updateMatrix(mesh);this._group.addChild(this._mesh);this.addChild(this._group);const centerPoint=mesh.AABBInWorld.updateAllInfo().centerPoint;}
updateMatrix(mesh){if(mesh.className==='M_Mesh'){this._group.matrix=mesh.worldMatrix;}}}
class Line extends Geometry{constructor(glBoostContext,startPos=Vector3.zero(),endPos=Vector3.zero(),haveTerminalMark=false){super(glBoostContext);this.__startPos=startPos;this.__endPos=endPos;this.__haveTerminalMark=haveTerminalMark;this._color=new GLBoost$1.Vector4(1,1,1,1);this._vertexData=this._setupVertexData(this.__startPos,this.__endPos,haveTerminalMark);this.setVerticesData(this._vertexData,null,GLBoost$1.LINES);}
_setupVertexData(startPos,endPos,haveTerminalMark){let positions=[];positions.push(startPos);positions.push(endPos);let colors=[];colors.push(this._color);colors.push(this._color);if(haveTerminalMark){const length=startPos.lengthTo(endPos);const markSize=length*0.1;positions.push(new Vector3(startPos.x-markSize,startPos.y,startPos.z));positions.push(new Vector3(startPos.x+markSize,startPos.y,startPos.z));positions.push(new Vector3(startPos.x,startPos.y,startPos.z-markSize));positions.push(new Vector3(startPos.x,startPos.y,startPos.z+markSize));positions.push(new Vector3(endPos.x-markSize,endPos.y,endPos.z));positions.push(new Vector3(endPos.x+markSize,endPos.y,endPos.z));positions.push(new Vector3(endPos.x,endPos.y,endPos.z-markSize));positions.push(new Vector3(endPos.x,endPos.y,endPos.z+markSize));colors.push(this._color);colors.push(this._color);colors.push(this._color);colors.push(this._color);colors.push(this._color);colors.push(this._color);colors.push(this._color);colors.push(this._color);}
this._vertexData={position:positions,color:colors};return this._vertexData;}
update(){this._vertexData=this._setupVertexData(this.__startPos,this.__endPos,this.__haveTerminalMark);this.updateVerticesData(this._vertexData,true);}
set startPosition(startPos){this.__startPos=startPos;}
get startPosition(){return this.__startPos;}
set endPosition(endPos){this.__endPos=endPos;}
get endPosition(){return this.__endPos;}
set color(vec){this._color=vec;this._colors=[];for(let i=0;i<2;i++){this._colors.push(this._color);}}
get color(){return this._color;}}
GLBoost$1["Line"]=Line;class M_HeightLineGizmo extends M_Gizmo{constructor(glBoostContext){super(glBoostContext,null,null);this._init(glBoostContext);this.isVisible=false;}
_init(glBoostContext){this._primitive=new Line(glBoostContext,Vector3.zero(),Vector3.zero(),true);const material=glBoostContext._glBoostContext.createClassicMaterial();this._material=material;this._mesh=new M_Mesh(glBoostContext,this._primitive,material);this._mesh.isPickable=false;this._mesh.masterElement=this;this.addChild(this._mesh);}
set color(val){this._material.baseColor=val;}
get color(){return this._material.baseColor;}
set startPosition(startPos){this._primitive.startPosition=startPos;}
get startPosition(){return this._primitive.startPosition;}
set endPosition(endPos){this._primitive.endPosition=endPos;}
get endPosition(){return this._primitive.endPosition;}
update(){this._primitive.update();}
set isVisible(flag){this._mesh.isVisible=flag;}
get isVisible(){return this._mesh.isVisible;}}
GLBoost['M_HeightLineGizmo']=M_HeightLineGizmo;class M_ScreenMesh extends M_Mesh{constructor(glBoostContext,customVertexAttributes){super(glBoostContext,null,null);this._init(customVertexAttributes);}
_init(customVertexAttributes){let gl=this._glContext.gl;this.geometry=new Screen(this._glBoostSystem,void 0,customVertexAttributes);this.isAffectedByWorldMatrix=false;this.isAffectedByViewMatrix=false;this.isAffectedByProjectionMatrix=false;let material=new ClassicMaterial$1(this._glBoostSystem);material.globalStatesUsage=GLBoost.GLOBAL_STATES_USAGE_IGNORE;material.states={"enable":[gl.BLEND],"functions":{"blendFuncSeparate":[770,771,1,1]}};this.geometry.materials=[material];this._material=material;}
set material(obj){this._material=obj;this.geometry.materials=[obj];}
get material(){return this._material;}}
GLBoost["M_ScreenMesh"]=M_ScreenMesh;class GLBoostMiddleContext extends GLBoostLowContext{constructor(canvas,initParameter,gl,width,height){super(canvas,initParameter,gl,width,height);this._glBoostMonitor=M_GLBoostMonitor.getInstance();}
createScene(){return new M_Scene(this.__system);}
createGroup(){return new M_Group(this.__system);}
createMesh(geometry,material){return new M_Mesh(this.__system,geometry,material);}
createSkeletalMesh(geometry,material,rootJointName){return new M_SkeletalMesh(this.__system,geometry,material,rootJointName);}
createSkeletalGeometry(){return new M_SkeletalGeometry(this.__system);}
createRenderer(parameters){return new Renderer(this.__system,parameters);}
createExpression(){return this.createExpressionAndRenderPasses(1);}
createExpressionAndRenderPasses(number){var expression=new Expression(this.__system);var renderPasses=this.createRenderPasses(number);expression.addRenderPasses(renderPasses);return expression;}
createRenderPasses(number){var renderPasses=[];for(let i=0;i<number;i++){renderPasses.push(new RenderPass(this.__system));}
return renderPasses;}
createPerspectiveCamera(lookat,perspective){return new M_PerspectiveCamera(this.__system,true,lookat,perspective);}
createFrustumCamera(lookat,perspective){return new M_FrustumCamera(this.__system,true,lookat,perspective);}
createOrthoCamera(lookat,ortho){return new M_OrthoCamera(this.__system,true,lookat,ortho);}
createDirectionalLight(intensity,rotate,length){return new M_DirectionalLight(this.__system,intensity,rotate,length);}
createPointLight(intensity){return new M_PointLight(this.__system,intensity);}
createAmbientLight(intensity){return new M_AmbientLight(this.__system,intensity);}
createSpotLight(intensity,rotate){return new M_SpotLight(this.__system,intensity,rotate);}
createJoint(isExistJointGizmo){return new M_Joint(this.__system,isExistJointGizmo);}
createAxisGizmo(length){return new M_AxisGizmo(this.__system,length);}
createGridGizmo(length,division,isXZ,isXY,isYZ,colorVec){return new M_GridGizmo(this.__system,length,division,isXZ,isXY,isYZ,colorVec);}
createOutlineGizmo(mesh){return new M_OutlineGizmo(this.__system,mesh);}
createHeightLineGizmo(startPos,endPos){return new M_HeightLineGizmo(this.__system,startPos,endPos);}
createEffekseerElement(){return new EffekseerElement$1(this.__system);}
createScreenMesh(customVertexAttributes){return new M_ScreenMesh(this.__system,customVertexAttributes);}
createFreeShader(vertexShaderText,fragmentShaderText,attributes,uniforms,textureNames){return new FreeShader(this.__system,vertexShaderText,fragmentShaderText,attributes,uniforms,textureNames);}}
GLBoost['GLBoostMiddleContext']=GLBoostMiddleContext;class PhongShaderSource{FSDefine_PhongShaderSource(in_,f,lights){var shaderText='';shaderText+=`uniform vec4 Kd;\n`;shaderText+=`uniform vec4 Ks;\n`;shaderText+=`uniform float power;\n`;shaderText+='uniform vec4 ambient;\n';var sampler2D=this._sampler2DShadow_func();let lightNumExceptAmbient=lights.filter((light)=>{return!light.isTypeAmbient();}).length;if(lightNumExceptAmbient>0){shaderText+=`uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;shaderText+=`${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;shaderText+=`uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;}
return shaderText;}
FSShade_PhongShaderSource(f,gl,lights){var shaderText='';shaderText+='  float depthBias = 0.005;\n';shaderText+='  vec4 surfaceColor = rt0;\n';shaderText+='  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';for(let i=0;i<lights.length;i++){let light=lights[i];let isShadowEnabledAsTexture=(light.camera&&light.camera.texture)?true:false;shaderText+=`  {\n`;shaderText+=Shader._generateLightStr(i);shaderText+=Shader._generateShadowingStr(gl,i,isShadowEnabledAsTexture);shaderText+=`    float diffuse = max(dot(lightDirection, normal), 0.0);\n`;shaderText+=`    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n`;shaderText+=`    vec3 viewDirection = normalize(viewPosition_world - v_position_world);\n`;shaderText+=`    vec3 reflect = reflect(-lightDirection, normal);\n`;shaderText+=`    float specular = pow(max(dot(reflect, viewDirection), 0.0), power);\n`;shaderText+=`    rt0 += spotEffect * vec4(visibilitySpecular, visibilitySpecular, visibilitySpecular, 1.0) * Ks * lightDiffuse[${i}] * vec4(specular, specular, specular, 1.0);\n`;shaderText+=`  }\n`;}
shaderText+='  rt0.xyz += ambient.xyz;\n';return shaderText;}
prepare_PhongShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];material.setUniform(shaderProgram,'uniform_Kd',this._glContext.getUniformLocation(shaderProgram,'Kd'));material.setUniform(shaderProgram,'uniform_Ks',this._glContext.getUniformLocation(shaderProgram,'Ks'));material.setUniform(shaderProgram,'uniform_power',this._glContext.getUniformLocation(shaderProgram,'power'));material.setUniform(shaderProgram,'uniform_ambient',this._glContext.getUniformLocation(shaderProgram,'ambient'));return vertexAttribsAsResult;}}
class PhongShader extends DecalShader{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);PhongShader.mixin(PhongShaderSource);this._power=64.0;}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);var Kd=material.diffuseColor;var Ks=material.specularColor;let Ka=material.ambientColor;this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_Kd'),Kd.x,Kd.y,Kd.z,Kd.w,true);this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_Ks'),Ks.x,Ks.y,Ks.z,Ks.w,true);this._glContext.uniform1f(material.getUniform(glslProgram,'uniform_power'),this._power,true);let ambient=Vector4$1.multiplyVector(Ka,scene.getAmountOfAmbientLightsIntensity());this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_ambient'),ambient.x,ambient.y,ambient.z,ambient.w,true);}
set Kd(value){this._Kd=value;}
get Kd(){return this._Kd;}
set Ks(value){this._Ks=value;}
get Ks(){return this._Ks;}
set power(value){this._power=value;}
get power(){return this._power;}}
GLBoost['PhongShader']=PhongShader;let singleton$5=Symbol();let singletonEnforcer$2=Symbol();class ObjLoader{constructor(enforcer){if(enforcer!==singletonEnforcer$2){throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");}}
static getInstance(){if(!this[singleton$5]){this[singleton$5]=new ObjLoader(singletonEnforcer$2);}
return this[singleton$5];}
loadObj(glBoostContext,url,defaultShader=null,mtlString=null){return DataUtil.loadResourceAsync(url,false,(resolve,responseText)=>{let gotText=responseText;let partsOfPath=url.split('/');let basePath='';for(let i=0;i<partsOfPath.length-1;i++){basePath+=partsOfPath[i]+'/';}
this._constructMesh(glBoostContext,gotText,basePath,defaultShader,mtlString,resolve);},(reject,err)=>{});}
_loadMaterialsFromString(glBoostContext,mtlString,defaultShader,basePath='',resolve){var mtlTextRows=mtlString.split('\n');var numMaterial=0;for(let i=0;i<mtlTextRows.length;i++){let matchArray=mtlTextRows[i].match(/^(\w+) (\w+)/);if(matchArray===null){continue;}
if(matchArray[1]==="newmtl")
{numMaterial++;}}
var materials=new Array(numMaterial);var iMCount=-1;let promisesToLoadTexture=[];for(let i=0;i<mtlTextRows.length;i++){let matchArray=mtlTextRows[i].match(/(\w+) ([\w:\/\-\.]+)/);if(matchArray===null){continue;}
if(matchArray[1]==="newmtl")
{iMCount++;materials[iMCount]=glBoostContext.createClassicMaterial();if(defaultShader){materials[iMCount].shaderClass=defaultShader;}else{materials[iMCount].shaderClass=PhongShader;}
materials[iMCount].name=matchArray[2];}
if(matchArray[1].toLowerCase()==="ka")
{matchArray=mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);materials[iMCount].ambientColor.x=parseFloat(matchArray[2]);materials[iMCount].ambientColor.y=parseFloat(matchArray[3]);materials[iMCount].ambientColor.z=parseFloat(matchArray[4]);}
if(matchArray[1].toLowerCase()==="kd")
{matchArray=mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);materials[iMCount].diffuseColor.x=parseFloat(matchArray[2]);materials[iMCount].diffuseColor.y=parseFloat(matchArray[3]);materials[iMCount].diffuseColor.z=parseFloat(matchArray[4]);}
if(matchArray[1].toLowerCase()==="ks")
{matchArray=mtlTextRows[i].match(/(\w+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+) ([0-9]+\.[0-9]+)/);materials[iMCount].specularColor.x=parseFloat(matchArray[2]);materials[iMCount].specularColor.y=parseFloat(matchArray[3]);materials[iMCount].specularColor.z=parseFloat(matchArray[4]);}
if(matchArray[1].toLowerCase()==="map_kd")
{matchArray=mtlTextRows[i].match(/(\w+) ([\w:\/\-\.]+)/);var texture=glBoostContext.createTexture(null,matchArray[2],{'UNPACK_FLIP_Y_WEBGL':true});let promise=texture.generateTextureFromUri(basePath+matchArray[2],false);promisesToLoadTexture.push(promise);materials[iMCount].setTexture(texture);}}
let promiseAll=Promise.all(promisesToLoadTexture);promiseAll.then(()=>{resolve(materials);});}
_loadMaterialsFromFile(glBoostContext,basePath,fileName,defaultShader){return DataUtil.loadResourceAsync(basePath+fileName,false,(resolve,responseText)=>{this._loadMaterialsFromString(glBoostContext,responseText,defaultShader,basePath,resolve);},(reject,err)=>{});}
_constructMesh(glBoostContext,objText,basePath,defaultShader,mtlString,resolve){var objTextRows=objText.split('\n');var promise=null;let vCount=0;let fCount=0;let vnCount=0;let vtCount=0;if(mtlString){promise=(()=>{return new Promise((resolve,reject)=>{this._loadMaterialsFromString(glBoostContext,mtlString,defaultShader,'',resolve);});})();}
for(let i=0;i<objTextRows.length;i++){let matchArray=objTextRows[i].match(/^(\w+) (\w+)/);if(matchArray===null){continue;}
if(matchArray[1]==="mtllib"&&mtlString===null){promise=this._loadMaterialsFromFile(glBoostContext,basePath,matchArray[2]+'.mtl',defaultShader);}}
promise.then((materials)=>{for(let i=0;i<objTextRows.length;i++){let matchArray=objTextRows[i].match(/^(\w+) +(\w+)/);if(matchArray===null){continue;}
if(matchArray[1]==="v")
{vCount++;}
if(matchArray[1]==="vn")
{vnCount++;}
if(matchArray[1]==="vt")
{vtCount++;}
if(matchArray[1]==="f")
{matchArray=objTextRows[i].match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);if(matchArray!==null){fCount+=2;}else{fCount++;}}}
var pvCoord=new Array(vCount);var pvNormal=new Array(vnCount);var pvTexture=new Array(vtCount);vCount=0;vnCount=0;vtCount=0;for(let i=0;i<objTextRows.length;i++){let matchArray=objTextRows[i].match(/^(\w+) /);if(matchArray===null){continue;}
if(matchArray[1]==="v")
{matchArray=objTextRows[i].match(/^(\w+) +(-?[0-9\.]+) (-?[0-9\.]+) (-?[0-9\.]+)/);pvCoord[vCount]=new Vector3();pvCoord[vCount].x=parseFloat(matchArray[2]);pvCoord[vCount].y=parseFloat(matchArray[3]);pvCoord[vCount].z=parseFloat(matchArray[4]);vCount++;}
if(matchArray[1]==="vn")
{matchArray=objTextRows[i].match(/^(\w+) (-?[0-9\.]+) (-?[0-9\.]+) (-?[0-9\.]+)/);pvNormal[vnCount]=new Vector3();pvNormal[vnCount].x=parseFloat(matchArray[2]);pvNormal[vnCount].y=parseFloat(matchArray[3]);pvNormal[vnCount].z=parseFloat(matchArray[4]);vnCount++;}
if(matchArray[1]==="vt")
{matchArray=objTextRows[i].match(/^(\w+) (-?[0-9\.]+) (-?[0-9\.]+)/);pvTexture[vtCount]=new Vector2();pvTexture[vtCount].x=parseFloat(matchArray[2]);pvTexture[vtCount].y=parseFloat(matchArray[3]);vtCount++;}}
var positions=new Array();var texcoords=new Array();var normals=new Array();var indices=[];var boFlag=false;var FaceN=fCount;fCount=0;var geometry=glBoostContext.createGeometry();for(let i=0;i<materials.length;i++){let matIndices=new Array();let tmpIndices=new Array();let tmpPositions=new Array();let tmpTexcoords=new Array();let tmpNormals=new Array();let _i=0;for(let j=0;(j<objTextRows.length)&&(fCount<FaceN);j++){let matchArray=objTextRows[j].match(/^(\w+) (\w+)/);if(matchArray===null){continue;}
if(matchArray[1]==="usemtl"){if(matchArray[2]===materials[i].name){boFlag=true;}else{boFlag=false;}}
if(matchArray[1]==="f"&&boFlag){let isQuad=true;let matchArray=objTextRows[j].match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);if(matchArray===null){matchArray=objTextRows[j].match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);}
if(matchArray===null){isQuad=false;}
if(materials[i].hasAnyTextures()){if(isQuad){this._addQuadDataToArraysWithTexture(tmpPositions,tmpNormals,tmpTexcoords,pvCoord,pvNormal,pvTexture,objTextRows[j],fCount);}else{this._addTriangleDataToArraysWithTexture(tmpPositions,tmpNormals,tmpTexcoords,pvCoord,pvNormal,pvTexture,objTextRows[j],fCount);}}else{if(isQuad){this._addQuadDataToArraysWithoutTexture(tmpPositions,tmpNormals,tmpTexcoords,pvCoord,pvNormal,pvTexture,objTextRows[j],fCount);}else{this._addTriangleDataToArraysWithoutTexture(tmpPositions,tmpNormals,tmpTexcoords,pvCoord,pvNormal,pvTexture,objTextRows[j],fCount);}}
_i=this._reductionVertices(positions,normals,texcoords,tmpPositions,tmpNormals,tmpTexcoords,fCount*3,matIndices,tmpIndices,_i);_i=this._reductionVertices(positions,normals,texcoords,tmpPositions,tmpNormals,tmpTexcoords,fCount*3+1,matIndices,tmpIndices,_i);_i=this._reductionVertices(positions,normals,texcoords,tmpPositions,tmpNormals,tmpTexcoords,fCount*3+2,matIndices,tmpIndices,_i);if(isQuad){_i=this._reductionVertices(positions,normals,texcoords,tmpPositions,tmpNormals,tmpTexcoords,fCount*3+3,matIndices,tmpIndices,_i);_i=this._reductionVertices(positions,normals,texcoords,tmpPositions,tmpNormals,tmpTexcoords,fCount*3+4,matIndices,tmpIndices,_i);_i=this._reductionVertices(positions,normals,texcoords,tmpPositions,tmpNormals,tmpTexcoords,fCount*3+5,matIndices,tmpIndices,_i);fCount+=2;}else{fCount++;}}}
if(fCount===0)
{continue;}
materials[i].setVertexN(geometry,matIndices.length);indices[i]=matIndices.concat();}
var mesh=glBoostContext.createMesh(geometry,null);geometry.materials=materials;geometry.setVerticesData({position:positions,texcoord:texcoords,normal:normals},indices);resolve(mesh);}).catch(function onRejected(error){console.error(error);});}
_reductionVertices(positions,normals,texcoords,tmpPositions,tmpNormals,tmpTexcoords,vCount,matIndices,tmpIndices,_i){var str=''+tmpPositions[vCount].x+','+tmpPositions[vCount].y+','+tmpPositions[vCount].z+
','+tmpNormals[vCount].x+','+tmpNormals[vCount].y+','+tmpNormals[vCount].z+
','+tmpTexcoords[vCount].x+','+tmpTexcoords[vCount].y;var hashCode=Hash.toCRC32(str);if(typeof tmpIndices[hashCode]==='undefined'){tmpIndices[hashCode]=_i;_i++;positions.push(tmpPositions[vCount]);normals.push(tmpNormals[vCount]);texcoords.push(tmpTexcoords[vCount]);}
matIndices.push(tmpIndices[hashCode]);return _i;}
_addTriangleDataToArraysWithTexture(positions,normals,texcoords,pvCoord,pvNormal,pvTexture,stringToScan,fCount)
{var v1=0,v2=0,v3=0;var vn1=0,vn2=0,vn3=0;var vt1=0,vt2=0,vt3=0;let matchArray=stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);if(matchArray!==null){v1=matchArray[2];vt1=matchArray[3];vn1=matchArray[4];v2=matchArray[5];vt2=matchArray[6];vn2=matchArray[7];v3=matchArray[8];vt3=matchArray[9];vn3=matchArray[10];positions[fCount*3]=pvCoord[v1-1];positions[fCount*3+1]=pvCoord[v2-1];positions[fCount*3+2]=pvCoord[v3-1];normals[fCount*3]=pvNormal[vn1-1];normals[fCount*3+1]=pvNormal[vn2-1];normals[fCount*3+2]=pvNormal[vn3-1];texcoords[fCount*3]=pvTexture[vt1-1];texcoords[fCount*3+1]=pvTexture[vt2-1];texcoords[fCount*3+2]=pvTexture[vt3-1];}else{let matchArray=stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);v1=matchArray[2];vn1=matchArray[3];v2=matchArray[4];vn2=matchArray[5];v3=matchArray[6];vn3=matchArray[7];positions[fCount*3]=pvCoord[v1-1];positions[fCount*3+1]=pvCoord[v2-1];positions[fCount*3+2]=pvCoord[v3-1];normals[fCount*3]=pvNormal[vn1-1];normals[fCount*3+1]=pvNormal[vn2-1];normals[fCount*3+2]=pvNormal[vn3-1];}}
_addTriangleDataToArraysWithoutTexture(positions,normals,texcoords,pvCoord,pvNormal,pvTexture,stringToScan,fCount)
{var v1=0,v2=0,v3=0;var vn1=0,vn2=0,vn3=0;var vt1=0,vt2=0,vt3=0;let matchArray=stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);if(matchArray!==null){v1=matchArray[2];vn1=matchArray[3];v2=matchArray[4];vn2=matchArray[5];v3=matchArray[6];vn3=matchArray[7];positions[fCount*3]=pvCoord[v1-1];positions[fCount*3+1]=pvCoord[v2-1];positions[fCount*3+2]=pvCoord[v3-1];normals[fCount*3]=pvNormal[vn1-1];normals[fCount*3+1]=pvNormal[vn2-1];normals[fCount*3+2]=pvNormal[vn3-1];}else{let matchArray=stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);v1=matchArray[2];vt1=matchArray[3];vn1=matchArray[4];v2=matchArray[5];vt2=matchArray[6];vn2=matchArray[7];v3=matchArray[8];vt3=matchArray[9];vn3=matchArray[10];positions[fCount*3]=pvCoord[v1-1];positions[fCount*3+1]=pvCoord[v2-1];positions[fCount*3+2]=pvCoord[v3-1];normals[fCount*3]=pvNormal[vn1-1];normals[fCount*3+1]=pvNormal[vn2-1];normals[fCount*3+2]=pvNormal[vn3-1];texcoords[fCount*3]=pvTexture[vt1-1];texcoords[fCount*3+1]=pvTexture[vt2-1];texcoords[fCount*3+2]=pvTexture[vt3-1];}}
_addQuadDataToArraysWithTexture(positions,normals,texcoords,pvCoord,pvNormal,pvTexture,stringToScan,fCount)
{var v1=0,v2=0,v3=0,v4=0;var vn1=0,vn2=0,vn3=0,vn4=0;var vt1=0,vt2=0,vt3=0,vt4=0;let matchArray=stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);if(matchArray!==null){v1=matchArray[2];vt1=matchArray[3];vn1=matchArray[4];v2=matchArray[5];vt2=matchArray[6];vn2=matchArray[7];v3=matchArray[8];vt3=matchArray[9];vn3=matchArray[10];v4=matchArray[11];vt4=matchArray[12];vn4=matchArray[13];positions[fCount*3]=pvCoord[v1-1];normals[fCount*3]=pvNormal[vn1-1];texcoords[fCount*3]=pvTexture[vt1-1];positions[fCount*3+1]=pvCoord[v2-1];normals[fCount*3+1]=pvNormal[vn2-1];texcoords[fCount*3+1]=pvTexture[vt2-1];positions[fCount*3+2]=pvCoord[v3-1];normals[fCount*3+2]=pvNormal[vn3-1];texcoords[fCount*3+2]=pvTexture[vt3-1];positions[fCount*3+3]=pvCoord[v3-1];normals[fCount*3+3]=pvNormal[vn3-1];texcoords[fCount*3+3]=pvTexture[vt3-1];positions[fCount*3+4]=pvCoord[v4-1];normals[fCount*3+4]=pvNormal[vn4-1];texcoords[fCount*3+4]=pvTexture[vt4-1];positions[fCount*3+5]=pvCoord[v1-1];normals[fCount*3+5]=pvNormal[vn1-1];texcoords[fCount*3+5]=pvTexture[vt1-1];}else{let matchArray=stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);v1=matchArray[2];vn1=matchArray[3];v2=matchArray[4];vn2=matchArray[5];v3=matchArray[6];vn3=matchArray[7];v4=matchArray[8];vn4=matchArray[9];positions[fCount*3]=pvCoord[v1-1];normals[fCount*3]=pvNormal[vn1-1];positions[fCount*3+1]=pvCoord[v2-1];normals[fCount*3+1]=pvNormal[vn2-1];positions[fCount*3+2]=pvCoord[v3-1];normals[fCount*3+2]=pvNormal[vn3-1];positions[fCount*3+3]=pvCoord[v3-1];normals[fCount*3+3]=pvNormal[vn3-1];positions[fCount*3+4]=pvCoord[v4-1];normals[fCount*3+4]=pvNormal[vn4-1];positions[fCount*3+5]=pvCoord[v1-1];normals[fCount*3+5]=pvNormal[vn1-1];}}
_addQuadDataToArraysWithoutTexture(positions,normals,texcoords,pvCoord,pvNormal,pvTexture,stringToScan,fCount)
{var v1=0,v2=0,v3=0,v4=0;var vn1=0,vn2=0,vn3=0,vn4=0;var vt1=0,vt2=0,vt3=0,vt4=0;let matchArray=stringToScan.match(/^(\w+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+) (\d+)\/\/(\d+)/);if(matchArray!==null){v1=matchArray[2];vn1=matchArray[3];v2=matchArray[4];vn2=matchArray[5];v3=matchArray[6];vn3=matchArray[7];v4=matchArray[8];vn4=matchArray[9];positions[fCount*3]=pvCoord[v1-1];normals[fCount*3]=pvNormal[vn1-1];positions[fCount*3+1]=pvCoord[v2-1];normals[fCount*3+1]=pvNormal[vn2-1];positions[fCount*3+2]=pvCoord[v3-1];normals[fCount*3+2]=pvNormal[vn3-1];positions[fCount*3+3]=pvCoord[v3-1];normals[fCount*3+3]=pvNormal[vn3-1];positions[fCount*3+4]=pvCoord[v4-1];normals[fCount*3+4]=pvNormal[vn4-1];positions[fCount*3+5]=pvCoord[v1-1];normals[fCount*3+5]=pvNormal[vn1-1];}else{let matchArray=stringToScan.match(/^(\w+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+) (\d+)\/(\d*)\/(\d+)/);v1=matchArray[2];vt1=matchArray[3];vn1=matchArray[4];v2=matchArray[5];vt2=matchArray[6];vn2=matchArray[7];v3=matchArray[8];vt3=matchArray[9];vn3=matchArray[10];v4=matchArray[11];vt4=matchArray[12];vn4=matchArray[13];positions[fCount*3]=pvCoord[v1-1];normals[fCount*3]=pvNormal[vn1-1];texcoords[fCount*3]=pvTexture[vt1-1];positions[fCount*3+1]=pvCoord[v2-1];normals[fCount*3+1]=pvNormal[vn2-1];texcoords[fCount*3+1]=pvTexture[vt2-1];positions[fCount*3+2]=pvCoord[v3-1];normals[fCount*3+2]=pvNormal[vn3-1];texcoords[fCount*3+2]=pvTexture[vt3-1];positions[fCount*3+3]=pvCoord[v3-1];normals[fCount*3+3]=pvNormal[vn3-1];texcoords[fCount*3+3]=pvTexture[vt3-1];positions[fCount*3+4]=pvCoord[v4-1];normals[fCount*3+4]=pvNormal[vn4-1];texcoords[fCount*3+4]=pvTexture[vt4-1];positions[fCount*3+5]=pvCoord[v1-1];normals[fCount*3+5]=pvNormal[vn1-1];texcoords[fCount*3+5]=pvTexture[vt1-1];}}}
GLBoost$1["ObjLoader"]=ObjLoader;(function(){GLBoost$1.valueOfGLBoostConstants=[];let defineValueOfGLBoostConstants=(glboostConstant_or_glboostConstantValueName,value)=>{if(isFinite(glboostConstant_or_glboostConstantValueName)){let glboostConstant=glboostConstant_or_glboostConstantValueName;let glboostConstantName=GLBoost$1.getNameOfGLBoostConstant(glboostConstant);if(glboostConstantName){let glboostConstantValueName='VALUE_'+glboostConstantName;Object.defineProperty(GLBoost$1,glboostConstantValueName,{get:function(){return this.valueOfGLBoostConstants[glboostConstant];},set:function(flg){this.valueOfGLBoostConstants[glboostConstant]=flg;},});GLBoost$1[glboostConstantValueName]=value;}}else{let glboostConstantValueName=glboostConstant_or_glboostConstantValueName;GLBoost$1[glboostConstantValueName]=value;}};let define=defineValueOfGLBoostConstants;define('VALUE_TARGET_WEBGL_VERSION',1);define('VALUE_SKELETAL_SHADER_OPITIMIZATION_LEVEL',0);define('VALUE_DEFAULT_POINTLIGHT_INTENSITY',new Vector3(1,1,1));define('VALUE_ANGLE_UNIT',GLBoost$1.DEGREE);define('VALUE_WEBGL_ONE_USE_EXTENSIONS',true);define('VALUE_CONSOLE_OUT_FOR_DEBUGGING',false);define(GLBoost$1.LOG_GENERAL,true);define(GLBoost$1.LOG_SHADER_CODE,true);define(GLBoost$1.LOG_GLBOOST_OBJECT_LIFECYCLE,true);define(GLBoost$1.LOG_GL_RESOURCE_LIFECYCLE,true);define(GLBoost$1.LOG_TYPE_GL,false);define(GLBoost$1.LOG_OMISSION_PROCESSING,false);})();class LambertShaderSource{FSDefine_LambertShaderSource(in_,f,lights){var sampler2D=this._sampler2DShadow_func();var shaderText='';shaderText+='uniform vec4 Kd;\n';shaderText+='uniform vec4 ambient;\n';let lightNumExceptAmbient=lights.filter((light)=>{return!light.isTypeAmbient();}).length;if(lightNumExceptAmbient>0){shaderText+=`uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;shaderText+=`uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;}
return shaderText;}
FSShade_LambertShaderSource(f,gl,lights){var shaderText='';shaderText+='  vec4 surfaceColor = rt0;\n';shaderText+='  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';for(let i=0;i<lights.length;i++){let light=lights[i];let isShadowEnabledAsTexture=(light.camera&&light.camera.texture)?true:false;shaderText+=`  {\n`;shaderText+=Shader._generateLightStr(i);shaderText+=Shader._generateShadowingStr(gl,i,isShadowEnabledAsTexture);shaderText+=`    float diffuse = max(dot(lightDirection, normal), 0.0);\n`;shaderText+=`    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n`;shaderText+=`  }\n`;}
shaderText+='  rt0.xyz += ambient.xyz;\n';return shaderText;}
prepare_LambertShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];material.setUniform(shaderProgram,'uniform_Kd',this._glContext.getUniformLocation(shaderProgram,'Kd'));material.setUniform(shaderProgram,'uniform_ambient',this._glContext.getUniformLocation(shaderProgram,'ambient'));return vertexAttribsAsResult;}}
class LambertShader extends DecalShader{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);LambertShader.mixin(LambertShaderSource);}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);let Kd=material.diffuseColor;let Ka=material.ambientColor;this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_Kd'),Kd.x,Kd.y,Kd.z,Kd.w,true);let ambient=Vector4$1.multiplyVector(Ka,scene.getAmountOfAmbientLightsIntensity());this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_ambient'),ambient.x,ambient.y,ambient.z,ambient.w,true);}}
GLBoost['LambertShader']=LambertShader;let singleton$6=Symbol();let singletonEnforcer$3=Symbol();class GLTFLoader{constructor(enforcer){if(enforcer!==singletonEnforcer$3){throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");}}
static getInstance(){if(!this[singleton$6]){this[singleton$6]=new GLTFLoader(singletonEnforcer$3);}
return this[singleton$6];}
getDefaultShader(options){let defaultShader=null;if(options&&typeof options.defaultShaderClass!=="undefined"){if(typeof options.defaultShaderClass==="string"){defaultShader=GLBoost$1[options.defaultShaderClass];}else{defaultShader=options.defaultShaderClass;}}
return defaultShader;}
getOptions(defaultOptions,json,options){if(json.asset&&json.asset.extras&&json.asset.extras.loadOptions){for(let optionName in json.asset.extras.loadOptions){defaultOptions[optionName]=json.asset.extras.loadOptions[optionName];}}
for(let optionName in options){defaultOptions[optionName]=options[optionName];}
if(defaultOptions.loaderExtension&&typeof defaultOptions.loaderExtension==="string"){defaultOptions.loaderExtension=GLBoost$1[options.loaderExtension].getInstance();}
if(defaultOptions.statesOfElements){for(let state of defaultOptions.statesOfElements){if(state.shaderClass&&typeof state.shaderClass==="string"){state.shaderClass=GLBoost$1[state.shaderClass];}}}
if(options&&typeof options.defaultMaterial!=="undefined"){if(typeof options.defaultMaterial==="string"){defaultOptions.defaultMaterial=GLBoost$1[options.defaultMaterial];}else{defaultOptions.defaultMaterial=options.defaultMaterial;}}
if(defaultOptions.defaultMaterial!=null&&defaultOptions.defaultMaterial.name.indexOf('PBR')!==-1){defaultOptions.defaultShaderClass=defaultOptions.defaultMaterial.shaderClass;}else if(options&&typeof options.defaultShaderClass!=="undefined"){if(typeof options.defaultShaderClass==="string"){defaultOptions.defaultShaderClass=GLBoost$1[options.defaultShaderClass];}else{defaultOptions.defaultShaderClass=options.defaultShaderClass;}}
return defaultOptions;}
loadGLTF(glBoostContext,url,options){let defaultOptions={files:{},loaderExtension:null,isNeededToMultiplyAlphaToColorOfPixelOutput:true,isTextureImageToLoadPreMultipliedAlphaAsDefault:false,isExistJointGizmo:false,isBlend:false,isDepthTest:true,defaultMaterial:ClassicMaterial$1,defaultShaderClass:null,isMeshTransparentAsDefault:false,ignoreMeshList:[],defaultStates:{states:{enable:[],functions:{}},isTransparent:true,opacity:1.0,shaderClass:DecalShader,isTextureImageToLoadPreMultipliedAlpha:false,globalStatesUsage:GLBoost$1.GLOBAL_STATES_USAGE_IGNORE},statesOfElements:[{targets:[],specifyMethod:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME,states:{enable:[],functions:{}},isTransparent:true,opacity:1.0,shaderClass:DecalShader,isTextureImageToLoadPreMultipliedAlpha:false,globalStatesUsage:GLBoost$1.GLOBAL_STATES_USAGE_IGNORE}]};this._materials=[];if(options&&options.files){for(let fileName in options.files){const splitted=fileName.split('.');const fileExtension=splitted[splitted.length-1];if(fileExtension==='gltf'||fileExtension==='glb'){return new Promise((resolve,response)=>{this.checkArrayBufferOfGltf(options.files[fileName],null,options,defaultOptions,glBoostContext,resolve);},(reject,error)=>{});}}}
return DataUtil.loadResourceAsync(url,true,(resolve,response)=>{var arrayBuffer=response;this.checkArrayBufferOfGltf(arrayBuffer,url,options,defaultOptions,glBoostContext,resolve);},(reject,error)=>{});}
checkArrayBufferOfGltf(arrayBuffer,url,options,defaultOptions,glBoostContext,resolve){let dataView=new DataView(arrayBuffer,0,20);let isLittleEndian=true;let magicStr='';magicStr+=String.fromCharCode(dataView.getUint8(0,isLittleEndian));magicStr+=String.fromCharCode(dataView.getUint8(1,isLittleEndian));magicStr+=String.fromCharCode(dataView.getUint8(2,isLittleEndian));magicStr+=String.fromCharCode(dataView.getUint8(3,isLittleEndian));if(magicStr!=='glTF'){this.loadAsTextJson(arrayBuffer,url,options,defaultOptions,glBoostContext,resolve);}
else{this.loadAsBinaryJson(dataView,isLittleEndian,arrayBuffer,options,defaultOptions,glBoostContext,resolve);}}
loadAsBinaryJson(dataView,isLittleEndian,arrayBuffer,options,defaultOptions,glBoostContext,resolve){let gltfVer=dataView.getUint32(4,isLittleEndian);if(gltfVer!==1){reject('invalid version field in this binary glTF file.');}
let lengthOfThisFile=dataView.getUint32(8,isLittleEndian);let lengthOfContent=dataView.getUint32(12,isLittleEndian);let contentFormat=dataView.getUint32(16,isLittleEndian);if(contentFormat!==0){reject('invalid contentFormat field in this binary glTF file.');}
let arrayBufferContent=arrayBuffer.slice(20,lengthOfContent+20);let gotText=DataUtil.arrayBufferToString(arrayBufferContent);let json=JSON.parse(gotText);let arrayBufferBinary=arrayBuffer.slice(20+lengthOfContent);let glTFVer=this._checkGLTFVersion(json);options=this.getOptions(defaultOptions,json,options);const defaultShader=options.defaultShaderClass;this._loadResourcesAndScene(glBoostContext,arrayBufferBinary,null,json,defaultShader,glTFVer,resolve,options);return{options,defaultShader};}
loadAsTextJson(arrayBuffer,url,options,defaultOptions,glBoostContext,resolve){let gotText=DataUtil.arrayBufferToString(arrayBuffer);let basePath='';if(url){let partsOfPath=url.split('/');for(let i=0;i<partsOfPath.length-1;i++){basePath+=partsOfPath[i]+'/';}}else{basePath=null;}
let json=JSON.parse(gotText);let glTFVer=this._checkGLTFVersion(json);options=this.getOptions(defaultOptions,json,options);const defaultShader=options.defaultShaderClass;this._loadResourcesAndScene(glBoostContext,null,basePath,json,defaultShader,glTFVer,resolve,options);return{options,defaultShader};}
_checkGLTFVersion(json){let glTFVer=1.0;if(json.asset&&json.asset.version){glTFVer=parseFloat(json.asset.version);}
return glTFVer;}
_loadResourcesAndScene(glBoostContext,arrayBufferBinary,basePath,json,defaultShader,glTFVer,resolve,options){let shadersJson=json.shaders;let shaders={};let buffers={};let textures={};let promisesToLoadResources=[];for(let shaderName in shadersJson){shaders[shaderName]={};let shaderJson=shadersJson[shaderName];let shaderType=shaderJson.type;if(typeof shaderJson.extensions!=='undefined'&&typeof shaderJson.extensions.KHR_binary_glTF!=='undefined'){shaders[shaderName].shaderText=this._accessBinaryAsShader(shaderJson.extensions.KHR_binary_glTF.bufferView,json,arrayBufferBinary);shaders[shaderName].shaderType=shaderType;continue;}
let shaderUri=shaderJson.uri;if(options.files){const splitted=shaderUri.split('/');const filename=splitted[splitted.length-1];if(options.files[filename]){const arrayBuffer=options.files[filename];shaders[shaderName].shaderText=DataUtil.arrayBufferToString(arrayBuffer);shaders[shaderName].shaderType=shaderType;continue;}}
if(shaderUri.match(/^data:/)){promisesToLoadResources.push(new Promise((fulfilled,rejected)=>{let arrayBuffer=DataUtil.base64ToArrayBuffer(shaderUri);shaders[shaderName].shaderText=DataUtil.arrayBufferToString(arrayBuffer);shaders[shaderName].shaderType=shaderType;fulfilled();}));}else{shaderUri=basePath+shaderUri;promisesToLoadResources.push(DataUtil.loadResourceAsync(shaderUri,false,(resolve,response)=>{shaders[shaderName].shaderText=response;shaders[shaderName].shaderType=shaderType;resolve();},(reject,error)=>{}));}}
for(let bufferName in json.buffers){let bufferInfo=json.buffers[bufferName];const splitted=bufferInfo.uri.split('/');const filename=splitted[splitted.length-1];if(bufferInfo.uri.match(/^data:application\/(.*);base64,/)){promisesToLoadResources.push(new Promise((fulfilled,rejected)=>{let arrayBuffer=DataUtil.base64ToArrayBuffer(bufferInfo.uri);buffers[bufferName]=arrayBuffer;fulfilled();}));}else if(bufferInfo.uri===''||bufferInfo.uri==='data:,'){buffers[bufferName]=arrayBufferBinary;}else if(options.files&&options.files[filename]){const arrayBuffer=options.files[filename];buffers[bufferName]=arrayBuffer;}else{promisesToLoadResources.push(DataUtil.loadResourceAsync(basePath+bufferInfo.uri,true,(resolve,response)=>{buffers[bufferName]=response;resolve();},(reject,error)=>{}));}}
for(let textureName in json.textures){let textureJson=json.textures[textureName];let imageJson=json.images[textureJson.source];let samplerJson=json.samplers[textureJson.sampler];let textureUri=null;if(typeof imageJson.extensions!=='undefined'&&typeof imageJson.extensions.KHR_binary_glTF!=='undefined'){textureUri=this._accessBinaryAsImage(imageJson.extensions.KHR_binary_glTF.bufferView,json,arrayBufferBinary,imageJson.extensions.KHR_binary_glTF.mimeType);}else{let imageFileStr=imageJson.uri;const splitted=imageFileStr.split('/');const filename=splitted[splitted.length-1];if(options.files&&options.files[filename]){const arrayBuffer=options.files[filename];const splitted=filename.split('.');const fileExtension=splitted[splitted.length-1];textureUri=this._accessArrayBufferAsImage(arrayBuffer,fileExtension);}else if(imageFileStr.match(/^data:/)){textureUri=imageFileStr;}else{textureUri=basePath+imageFileStr;}}
let texture=glBoostContext.createTexture(null,textureName,{'TEXTURE_MAG_FILTER':samplerJson.magFilter,'TEXTURE_MIN_FILTER':samplerJson.minFilter,'TEXTURE_WRAP_S':samplerJson.wrapS,'TEXTURE_WRAP_T':samplerJson.wrapT});if(options.loaderExtension&&options.loaderExtension.setUVTransformToTexture){options.loaderExtension.setUVTransformToTexture(texture,samplerJson);}
let promise=texture.generateTextureFromUri(textureUri,false);textures[textureName]=texture;promisesToLoadResources.push(promise);}
if(promisesToLoadResources.length>0){Promise.resolve().then(()=>{return Promise.all(promisesToLoadResources);}).then(()=>{this._IterateNodeOfScene(glBoostContext,buffers,json,defaultShader,shaders,textures,glTFVer,resolve,options);});}else{this._IterateNodeOfScene(glBoostContext,buffers,json,defaultShader,shaders,textures,glTFVer,resolve,options);}}
_IterateNodeOfScene(glBoostContext,buffers,json,defaultShader,shaders,textures,glTFVer,resolve,options){let rootGroup=glBoostContext.createGroup();rootGroup.userFlavorName='glTFFileRoot';for(let sceneStr in json.scenes){let sceneJson=json.scenes[sceneStr];let group=glBoostContext.createGroup();group.userFlavorName='Scene_'+sceneStr;let nodeStr=null;for(let i=0;i<sceneJson.nodes.length;i++){nodeStr=sceneJson.nodes[i];let element=this._recursiveIterateNode(glBoostContext,nodeStr,buffers,json,defaultShader,shaders,textures,glTFVer,options);group.addChild(element);}
let skeletalMeshes=group.searchElementsByType(M_SkeletalMesh);skeletalMeshes.forEach((skeletalMesh)=>{let rootJointGroup=group.searchElementByNameAndType(skeletalMesh.rootJointName,M_Group);if(!rootJointGroup){rootJointGroup=this._recursiveIterateNode(glBoostContext,skeletalMesh.rootJointName,buffers,json,defaultShader,shaders,textures,glTFVer,options);group.addChild(rootJointGroup);}
rootJointGroup._isRootJointGroup=true;skeletalMesh.jointsHierarchy=rootJointGroup;});this._loadAnimation(group,buffers,json,glTFVer,options);rootGroup.addChild(group);}
rootGroup.allMeshes=rootGroup.searchElementsByType(M_Mesh);if(options&&options.loaderExtension&&options.loaderExtension.setAssetPropertiesToRootGroup){options.loaderExtension.setAssetPropertiesToRootGroup(rootGroup,json.asset);}
if(options&&options.loaderExtension&&options.loaderExtension.loadExtensionInfoAndSetToRootGroup){options.loaderExtension.loadExtensionInfoAndSetToRootGroup(rootGroup,json,glBoostContext);}
resolve(rootGroup);}
_setTransform(element,nodeJson){if(nodeJson.translation){element.translate=new Vector3(nodeJson.translation[0],nodeJson.translation[1],nodeJson.translation[2]);}
if(nodeJson.scale){element.scale=new Vector3(nodeJson.scale[0],nodeJson.scale[1],nodeJson.scale[2]);}
if(nodeJson.rotation){element.quaternion=new Quaternion(nodeJson.rotation[0],nodeJson.rotation[1],nodeJson.rotation[2],nodeJson.rotation[3]);}
if(nodeJson.matrix){element.matrix=new Matrix44$1(nodeJson.matrix,true);}}
_recursiveIterateNode(glBoostContext,nodeStr,buffers,json,defaultShader,shaders,textures,glTFVer,options){var nodeJson=json.nodes[nodeStr];var group=glBoostContext.createGroup();group.userFlavorName=nodeStr;this._setTransform(group,nodeJson);if(nodeJson.meshes){for(let i=0;i<nodeJson.meshes.length;i++){let meshStr=nodeJson.meshes[i];let meshJson=json.meshes[meshStr];let rootJointStr=null;let skinStr=null;if(nodeJson.skeletons){rootJointStr=nodeJson.skeletons[0];skinStr=nodeJson.skin;}
this._loadMesh(glBoostContext,meshJson,meshStr,buffers,json,defaultShader,rootJointStr,skinStr,shaders,textures,glTFVer,group,options);}}else if(nodeJson.jointName){let joint=glBoostContext.createJoint(options.isExistJointGizmo);joint.userFlavorName=nodeJson.jointName;group.addChild(joint);}else if(nodeJson.camera){let cameraStr=nodeJson.camera;let cameraJson=json.cameras[cameraStr];let camera=null;let centerVec=new Vector3(0.0,0.0,-1.0);if(json.asset&&json.asset.LastSaved_ApplicationVendor){centerVec=new Vector3(1.0,0.0,0.0);}
if(cameraJson.type==='perspective'){let perspective=cameraJson.perspective;camera=glBoostContext.createPerspectiveCamera({eye:new Vector3(0.0,0.0,0),center:centerVec,up:new Vector3(0.0,1.0,0.0)},{fovy:MathUtil.radianToDegree(perspective.yfov),aspect:perspective.aspectRatio?perspective.aspectRatio:1.5,zNear:perspective.znear,zFar:perspective.zfar});}else if(cameraJson.type==='orthographic'){let orthographic=cameraJson.orthographic;camera=glBoostContext.createOrthoCamera({eye:new Vector3(0.0,0.0,0),center:centerVec,up:new Vector3(0.0,1.0,0.0)},{xmag:orthographic.xmag,ymag:orthographic.ymag,zNear:orthographic.znear,zFar:orthographic.zfar});}
camera.userFlavorName=cameraStr+'Shape';group.addChild(camera);}else if(nodeJson.extensions){if(nodeJson.extensions.KHR_materials_common){if(nodeJson.extensions.KHR_materials_common.light){const lightStr=nodeJson.extensions.KHR_materials_common.light;const lightJson=json.extensions.KHR_materials_common.lights[lightStr];let light=null;if(lightJson.type==='ambient'){let color=lightJson.ambient.color;light=glBoostContext.createAmbientLight(new Vector3(color[0],color[1],color[2]));group.addChild(light);}else if(lightJson.type==='point'){let color=lightJson.point.color;light=glBoostContext.createPointLight(new Vector3(color[0],color[1],color[2]));this._setTransform(group,nodeJson);group.addChild(light);}else if(lightJson.type==='directional'){const color=lightJson.directional.color;light=glBoostContext.createDirectionalLight(new Vector3(color[0],color[1],color[2]));light.rotate=new Vector3(0,0,0);this._setTransform(group,nodeJson);group.addChild(light);}else if(lightJson.type==='spot'){const color=lightJson.spot.color;light=glBoostContext.createSpotLight(new Vector3(color[0],color[1],color[2]));light.rotate=new Vector3(0,0,0);if(lightJson.spot.falloffAngle){light.spotCutoffInDegree=lightJson.spot.falloffAngle*180/Math.PI;}
this._setTransform(group,nodeJson);group.addChild(light);}}}}
if(nodeJson.children){for(let i=0;i<nodeJson.children.length;i++){let nodeStr=nodeJson.children[i];let childElement=this._recursiveIterateNode(glBoostContext,nodeStr,buffers,json,defaultShader,shaders,textures,glTFVer,options);group.addChild(childElement);}}
return group;}
_loadMesh(glBoostContext,meshJson,meshStr,buffers,json,defaultShader,rootJointStr,skinStr,shaders,textures,glTFVer,group,options){var mesh=null;var geometry=null;if(rootJointStr){geometry=glBoostContext.createSkeletalGeometry();mesh=glBoostContext.createSkeletalMesh(geometry,null,rootJointStr);let skin=json.skins[skinStr];mesh.bindShapeMatrix=new Matrix44$1(skin.bindShapeMatrix,true);mesh.jointNames=skin.jointNames;let inverseBindMatricesAccessorStr=skin.inverseBindMatrices;mesh.inverseBindMatrices=this._accessBinary(inverseBindMatricesAccessorStr,json,buffers);}else{geometry=glBoostContext.createGeometry();mesh=glBoostContext.createMesh(geometry);}
mesh.userFlavorName=meshStr;if(!(options.ignoreMeshList!=null)||options.ignoreMeshList.indexOf(mesh.userFlavorName)===-1){group.addChild(mesh);}
if(options&&options.isMeshTransparentAsDefault||options&&options.defaultStates&&options.defaultStates.isTransparent){mesh.isTransparent=true;}
let _indicesArray=[];let _positions=[];let _normals=[];let vertexData={position:_positions,normal:_normals,components:{},componentBytes:{},componentType:{}};let additional={'joint':[],'weight':[],'texcoord':[],'color':[]};let dataViewMethodDic={};let materials=[];let indicesAccumulatedLength=0;for(let i=0;i<meshJson.primitives.length;i++){let primitiveJson=meshJson.primitives[i];let positionsAccessorStr=primitiveJson.attributes.POSITION;let positions=this._accessBinary(positionsAccessorStr,json,buffers,false,true);_positions[i]=positions;vertexData.components.position=this._checkComponentNumber(positionsAccessorStr,json);vertexData.componentBytes.position=this._checkBytesPerComponent(positionsAccessorStr,json);vertexData.componentType.position=this._getDataType(positionsAccessorStr,json);dataViewMethodDic.position=this._checkDataViewMethod(positionsAccessorStr,json);let indices=null;if(typeof primitiveJson.indices!=='undefined'){let indicesAccessorStr=primitiveJson.indices;indices=this._accessBinary(indicesAccessorStr,json,buffers);for(let j=0;j<indices.length;j++){indices[j]=indicesAccumulatedLength+indices[j];}
_indicesArray[i]=indices;indicesAccumulatedLength+=_positions[i].length/vertexData.components.position;}
let normalsAccessorStr=primitiveJson.attributes.NORMAL;if(normalsAccessorStr){let normals=this._accessBinary(normalsAccessorStr,json,buffers,false,true);_normals[i]=normals;vertexData.components.normal=this._checkComponentNumber(normalsAccessorStr,json);vertexData.componentBytes.normal=this._checkBytesPerComponent(normalsAccessorStr,json);vertexData.componentType.normal=this._getDataType(normalsAccessorStr,json);dataViewMethodDic.normal=this._checkDataViewMethod(normalsAccessorStr,json);}
let colorsAccessorStr=primitiveJson.attributes.COLOR;if(colorsAccessorStr){let colors=this._accessBinary(colorsAccessorStr,json,buffers,false,true);additional['color'][i]=colors;vertexData.components.color=this._checkComponentNumber(colorsAccessorStr,json);vertexData.componentBytes.color=this._checkBytesPerComponent(colorsAccessorStr,json);vertexData.componentType.color=this._getDataType(normalsAccessocolorsAccessorStrrStr,json);dataViewMethodDic.color=this._checkDataViewMethod(colorsAccessorStr,json);}
let jointAccessorStr=primitiveJson.attributes.JOINT;if(jointAccessorStr){let joints=this._accessBinary(jointAccessorStr,json,buffers,false,true);additional['joint'][i]=joints;vertexData.components.joint=this._checkComponentNumber(jointAccessorStr,json);vertexData.componentBytes.joint=this._checkBytesPerComponent(jointAccessorStr,json);vertexData.componentType.joint=this._getDataType(jointAccessorStr,json);dataViewMethodDic.joint=this._checkDataViewMethod(jointAccessorStr,json);}
let weightAccessorStr=primitiveJson.attributes.WEIGHT;if(weightAccessorStr){let weights=this._accessBinary(weightAccessorStr,json,buffers,false,true);additional['weight'][i]=weights;vertexData.components.weight=this._checkComponentNumber(weightAccessorStr,json);vertexData.componentBytes.weight=this._checkBytesPerComponent(weightAccessorStr,json);vertexData.componentType.weight=this._getDataType(weightAccessorStr,json);dataViewMethodDic.weight=this._checkDataViewMethod(weightAccessorStr,json);}
if(primitiveJson.material){var texcoords=null;let texcoords0AccessorStr=primitiveJson.attributes.TEXCOORD_0;let materialStr=primitiveJson.material;let material=null;if(options.defaultMaterial!=null){material=new options.defaultMaterial(glBoostContext.__system);}else if(options&&options.loaderExtension&&options.loaderExtension.createClassicMaterial){material=options.loaderExtension.createClassicMaterial(glBoostContext);}else{material=glBoostContext.createClassicMaterial();}
if(options&&options.isNeededToMultiplyAlphaToColorOfPixelOutput){material.shaderParameters.isNeededToMultiplyAlphaToColorOfPixelOutput=options.isNeededToMultiplyAlphaToColorOfPixelOutput;}
this._materials.push(material);if(options&&options.defaultStates){if(options.defaultStates.states){material.states=options.defaultStates.states;}
material.globalStatesUsage=options.defaultStates.globalStatesUsage!==void 0?options.defaultStates.globalStatesUsage:GLBoost$1.GLOBAL_STATES_USAGE_IGNORE;}
if(options&&options.statesOfElements){for(let statesInfo of options.statesOfElements){if(statesInfo.targets){for(let target of statesInfo.targets){let isMatch=this.isTargetMatch(statesInfo,group,target);if(isMatch){if(statesInfo.states){material.states=statesInfo.states;}
material.globalStatesUsage=statesInfo.globalStatesUsage!==void 0?statesInfo.globalStatesUsage:GLBoost$1.GLOBAL_STATES_USAGE_IGNORE;}
group.getChildren().forEach((elem)=>{let isMatch=this.isTargetMatch(statesInfo,elem,target);if(isMatch){elem.isTransparent=statesInfo.isTransparent!==void 0?statesInfo.isTransparent:false;if(statesInfo.states){material.states=statesInfo.states;}
material.globalStatesUsage=statesInfo.globalStatesUsage!==void 0?statesInfo.globalStatesUsage:GLBoost$1.GLOBAL_STATES_USAGE_IGNORE;}});}}}}
texcoords=this._loadMaterial(glBoostContext,buffers,json,vertexData,indices,material,materialStr,positions,dataViewMethodDic,additional,texcoords,texcoords0AccessorStr,geometry,defaultShader,shaders,textures,i,glTFVer,group,options);materials.push(material);}else{let material=null;if(options.loaderExtension&&options.loaderExtension.createClassicMaterial){material=options.loaderExtension.createClassicMaterial(glBoostContext);}else{material=glBoostContext.createClassicMaterial();}
if(defaultShader){material.shaderClass=defaultShader;}else{material.baseColor=new Vector4$1(0.5,0.5,0.5,1);}
materials.push(material);}}
if(meshJson.primitives.length>1){let lengthDic={index:0,position:0,normal:0,color:0,joint:0,weight:0,texcoord:0};for(let i=0;i<meshJson.primitives.length;i++){lengthDic.position+=_positions[i].length;if(_normals[i]){lengthDic.normal+=_normals[i].length;}
if(typeof additional['color'][i]!=='undefined'){lengthDic.color+=additional['color'][i].length;}
if(typeof additional['joint'][i]!=='undefined'){lengthDic.joint+=additional['joint'][i].length;}
if(typeof additional['weight'][i]!=='undefined'){lengthDic.weight+=additional['weight'][i].length;}
if(typeof additional['texcoord'][i]!=='undefined'){lengthDic.texcoord+=additional['texcoord'][i].length;}}
function getTypedArray(dataViewMethod,length){let vertexAttributeArray=null;if(dataViewMethod==='getInt8'){vertexAttributeArray=new Int8Array(length);}else if(dataViewMethod==='getUint8'){vertexAttributeArray=new Uint8Array(length);}else if(dataViewMethod==='getInt16'){vertexAttributeArray=new Int16Array(length);}else if(dataViewMethod==='getUint16'){vertexAttributeArray=new Uint16Array(length);}else if(dataViewMethod==='getInt32'){vertexAttributeArray=new Int32Array(length);}else if(dataViewMethod==='getUint32'){vertexAttributeArray=new Uint32Array(length);}else if(dataViewMethod==='getFloat32'){vertexAttributeArray=new Float32Array(length);}
return vertexAttributeArray;}
for(let attribName in dataViewMethodDic){let newTypedArray=getTypedArray(dataViewMethodDic[attribName],lengthDic[attribName]);let offset=0;for(let i=0;i<meshJson.primitives.length;i++){let array=null;if(attribName==='position'){array=_positions[i];}else if(attribName==='normal'){array=_normals[i];}else if(attribName==='color'){array=additional['color'][i];}else if(attribName==='joint'){array=additional['joint'][i];}else if(attribName==='weight'){array=additional['weight'][i];}else if(attribName==='texcoord'){array=additional['texcoord'][i];}
if(array){newTypedArray.set(array,offset);offset+=array.length;}}
if(attribName==='position'){vertexData.position=newTypedArray;}else if(attribName==='normal'){vertexData.normal=newTypedArray;}else if(attribName==='color'){additional['color']=newTypedArray;}else if(attribName==='joint'){additional['joint']=newTypedArray;}else if(attribName==='weight'){additional['weight']=newTypedArray;}else if(attribName==='texcoord'){additional['texcoord']=newTypedArray;}}}else{vertexData.position=_positions[0];vertexData.normal=_normals[0];additional['color']=additional['color'][0];additional['joint']=additional['joint'][0];additional['weight']=additional['weight'][0];additional['texcoord']=additional['texcoord'][0];}
if(typeof vertexData.normal==='undefined'||vertexData.normal.length===0){delete vertexData.normal;}
if(typeof additional['color']==='undefined'||additional['color'].length===0){delete additional['color'];}
if(typeof additional['joint']==='undefined'||additional['joint'].length===0){delete additional['joint'];}
if(typeof additional['weight']==='undefined'||additional['weight'].length===0){delete additional['weight'];}
if(typeof additional['texcoord']==='undefined'||additional['texcoord'].length===0){delete additional['texcoord'];}
if(_indicesArray.length===0){_indicesArray=null;}
geometry.setVerticesData(ArrayUtil.merge(vertexData,additional),_indicesArray);geometry.materials=materials;return mesh;}
_isKHRMaterialsCommon(materialJson){if(typeof materialJson.extensions!=='undefined'&&typeof materialJson.extensions.KHR_materials_common!=='undefined'){return true;}else{return false;}}
_loadMaterial(glBoostContext,buffers,json,vertexData,indices,material,materialStr,positions,dataViewMethodDic,additional,texcoords,texcoords0AccessorStr,geometry,defaultShader,shaders,textures,idx,glTFVer,group,options){let materialJson=json.materials[materialStr];material.userFlavorName=materialJson.name;let originalMaterialJson=materialJson;if(this._isKHRMaterialsCommon(materialJson)){materialJson=materialJson.extensions.KHR_materials_common;}
let enables=[];if(options.isBlend){enables.push(3042);}
if(options.isDepthTest){enables.push(2929);}
material.states.enable=material.states.enable.concat(enables);material.states.enable=material.states.enable.filter(function(x,i,self){return self.indexOf(x)===i;});if(options&&options.statesOfElements){for(let statesInfo of options.statesOfElements){if(statesInfo.opacity){group.opacity=statesInfo.opacity;}}}
if(options.isBlend&&options.isNeededToMultiplyAlphaToColorOfPixelOutput){if(material.states.functions.blendFuncSeparate===void 0){material.states.functions.blendFuncSeparate=[1,771,1,771];}}
material.globalStatesUsage=GLBoost$1.GLOBAL_STATES_USAGE_IGNORE;if(texcoords0AccessorStr){texcoords=this._accessBinary(texcoords0AccessorStr,json,buffers,false,true);additional['texcoord'][idx]=texcoords;vertexData.components.texcoord=this._checkComponentNumber(texcoords0AccessorStr,json);vertexData.componentBytes.texcoord=this._checkBytesPerComponent(texcoords0AccessorStr,json);vertexData.componentType.texcoord=this._getDataType(texcoords0AccessorStr,json);dataViewMethodDic.texcoord=this._checkDataViewMethod(texcoords0AccessorStr,json);let setTextures=(values,isParameter)=>{for(let valueName in values){let value=null;if(isParameter){value=values[valueName].value;if(typeof value==='undefined'){continue;}}else{value=values[valueName];}
if(glTFVer>=1.1){value=value[0];}
if(typeof value==='string'){let textureStr=value;let texturePurpose;if(valueName==='diffuse'||(materialJson.technique==="CONSTANT"&&valueName==='ambient')){texturePurpose=GLBoost$1.TEXTURE_PURPOSE_DIFFUSE;}else if(valueName==='emission'&&textureStr.match(/_normal$/)){texturePurpose=GLBoost$1.TEXTURE_PURPOSE_NORMAL;}else{texturePurpose=GLBoost$1.TEXTURE_PURPOSE_OTHERS;}
let texture=textures[textureStr];let isNeededToMultiplyAlphaToColorOfTexture=false;if(options.isNeededToMultiplyAlphaToColorOfPixelOutput){if(options.isTextureImageToLoadPreMultipliedAlphaAsDefault);else{isNeededToMultiplyAlphaToColorOfTexture=true;}}else{if(options.isTextureImageToLoadPreMultipliedAlphaAsDefault);}
if(options&&options.statesOfElements){for(let statesInfo of options.statesOfElements){if(statesInfo.targets){for(let target of statesInfo.targets){let isMatch=false;isMatch=this.isTargetMatch(statesInfo,group,target);if(isMatch){if(options.isNeededToMultiplyAlphaToColorOfPixelOutput){if(statesInfo.isTextureImageToLoadPreMultipliedAlpha);else{isNeededToMultiplyAlphaToColorOfTexture=true;}}else{if(statesInfo.isTextureImageToLoadPreMultipliedAlpha);}}}}}}
material.setTexture(texture,texturePurpose);texture.toMultiplyAlphaToColorPreviously=isNeededToMultiplyAlphaToColorOfTexture;}}};setTextures(materialJson.values,false);if(materialJson.technique&&json.techniques){if(typeof json.techniques[materialJson.technique]!=="undefined"){setTextures(json.techniques[materialJson.technique].parameters,true);}}}else{if(typeof vertexData.components.texcoord!=='undefined'){let emptyTexcoords=[];let componentN=vertexData.components.position;let length=positions.length/componentN;for(let k=0;k<length;k++){emptyTexcoords.push(0);emptyTexcoords.push(0);}
additional['texcoord'][idx]=new Float32Array(emptyTexcoords);vertexData.components.texcoord=2;vertexData.componentBytes.texcoord=4;dataViewMethodDic.texcoord='getFloat32';}}
for(let valueName in materialJson.values){let value=materialJson.values[valueName];if(typeof value!=='string'){material[valueName+'Color']=MathClassUtil.arrayToVectorOrMatrix(value);}
if(valueName==='transparent'){material.isTransparent=value;let enables=[3042];material.states.enable=material.states.enable.concat(enables);}
if(valueName==='transparency'){material.baseColor.w=1.0-value;material.diffuseColor.w=1.0-value;material.specularColor.w=1.0-value;material.ambientColor.w=1.0-value;}}
if(indices!==null){material.setVertexN(geometry,indices.length);}
let techniqueStr=materialJson.technique;if(defaultShader){material.shaderClass=defaultShader;}else if(this._isKHRMaterialsCommon(originalMaterialJson)&&material.className.indexOf('PBR')===-1){switch(techniqueStr){case 'CONSTANT':if(options.loaderExtension&&options.loaderExtension.getDecalShader){material.shaderClass=options.loaderExtension.getDecalShader();}else{material.shaderClass=DecalShader;}
break;case 'LAMBERT':if(options.loaderExtension&&options.loaderExtension.getLambertShader){material.shaderClass=options.loaderExtension.getLambertShader();}else{material.shaderClass=LambertShader;}
break;case 'PHONG':if(options.loaderExtension&&options.loaderExtension.getPhongShader){material.shaderClass=options.loaderExtension.getPhongShader();}else{material.shaderClass=PhongShader;}
break;}}else{if(typeof json.techniques!=='undefined'){this._loadTechnique(glBoostContext,json,techniqueStr,material,materialJson,shaders,glTFVer);}else if(material.className.indexOf('PBR')===-1){if(options.loaderExtension&&options.loaderExtension.getDecalShader){material.shaderClass=options.loaderExtension.getDecalShader();}else{material.shaderClass=DecalShader;}}}
if(options&&options.statesOfElements){for(let statesInfo of options.statesOfElements){if(statesInfo.targets){for(let target of statesInfo.targets){let isMatch=false;isMatch=this.isTargetMatch(statesInfo,group,target);if(isMatch){if(statesInfo.shaderClass){material.shaderClass=statesInfo.shaderClass;}}}}}}
return texcoords;}
isTargetMatch(statesInfo,element,target){let specifyMethod=statesInfo.specifyMethod!==void 0?statesInfo.specifyMethod:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME;if(typeof statesInfo.specifyMethod==='string'){statesInfo.specifyMethod=GLBoost$1[statesInfo.specifyMethod];}
const isTargetMatchInner=function(specifyMethod,element,target){let isMatch=false;switch(specifyMethod){case GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME:isMatch=element.userFlavorName===target;break;case GLBoost$1.QUERY_TYPE_INSTANCE_NAME:isMatch=element.instanceName===target;break;case GLBoost$1.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR:isMatch=element.instanceNameWithUserFlavor===target;break;}
return isMatch;};let isMatch=isTargetMatchInner(specifyMethod,element,target);return isMatch;}
_loadTechnique(glBoostContext,json,techniqueStr,material,materialJson,shaders,glTFVer){let techniqueJson=json.techniques[techniqueStr];let programStr=techniqueJson.program;let uniformsJson=techniqueJson.uniforms;let parametersJson=techniqueJson.parameters;let attributesJson=techniqueJson.attributes;let attributes={};for(let attributeName in attributesJson){let parameterName=attributesJson[attributeName];let parameterJson=parametersJson[parameterName];attributes[attributeName]=parameterJson.semantic;}
let uniforms={};let textureNames={};for(let uniformName in uniformsJson){let parameterName=uniformsJson[uniformName];let parameterJson=parametersJson[parameterName];if(typeof parameterJson.semantic!=='undefined'){uniforms[uniformName]=parameterJson.semantic;}else{let value=null;if(typeof materialJson.values!=='undefined'&&typeof materialJson.values[parameterName]!=='undefined'){value=materialJson.values[parameterName];}else{value=parameterJson.value;}
switch(parameterJson.type){case 5126:uniforms[uniformName]=(glTFVer<1.1)?value:value[0];break;case 35664:uniforms[uniformName]=new Vector2(value[0],value[1]);break;case 35665:uniforms[uniformName]=new Vector3(value[0],value[1],value[2]);break;case 35666:uniforms[uniformName]=new Vector4$1(value[0],value[1],value[2],value[3]);break;case 5124:uniforms[uniformName]=(glTFVer<1.1)?value:value[0];break;case 35667:uniforms[uniformName]=new Vector2(value[0],value[1]);break;case 35668:uniforms[uniformName]=new Vector3(value[0],value[1],value[2]);break;case 35669:uniforms[uniformName]=new Vector4$1(value[0],value[1],value[2],value[3]);break;case 35678:uniforms[uniformName]='TEXTURE';textureNames[uniformName]=(glTFVer<1.1)?value:value[0];break;}}}
if(techniqueJson.states){if(techniqueJson.states.functions){for(let functionName in techniqueJson.states.functions){if(!Array.isArray(techniqueJson.states.functions[functionName])){techniqueJson.states.functions[functionName]=[techniqueJson.states.functions[functionName]];}}}
material.states=techniqueJson.states;}
this._loadProgram(glBoostContext,json,programStr,material,shaders,attributes,uniforms,textureNames);}
_loadProgram(glBoostContext,json,programStr,material,shaders,attributes,uniforms,textureNames){let programJson=json.programs[programStr];let fragmentShaderStr=programJson.fragmentShader;let vertexShaderStr=programJson.vertexShader;let fragmentShaderText=shaders[fragmentShaderStr].shaderText;let vertexShaderText=shaders[vertexShaderStr].shaderText;material.shaderInstance=new FreeShader(glBoostContext.__system,vertexShaderText,fragmentShaderText,attributes,uniforms,textureNames);}
_loadAnimation(element,buffers,json,glTFVer,options){let animationJson=null;for(let anim in json.animations){animationJson=json.animations[anim];if(animationJson){for(let i=0;i<animationJson.channels.length;i++){let channelJson=animationJson.channels[i];if(!channelJson){continue;}
let targetMeshStr=channelJson.target.id;let targetPathStr=channelJson.target.path;let samplerStr=channelJson.sampler;let samplerJson=animationJson.samplers[samplerStr];let animInputAccessorStr=null;let animOutputAccessorStr=null;let animInputStr=samplerJson.input;let animOutputStr=samplerJson.output;animInputAccessorStr=animationJson.parameters[animInputStr];animOutputAccessorStr=animationJson.parameters[animOutputStr];let interpolationMethod=GLBoost$1.INTERPOLATION_LINEAR;if(options.loaderExtension&&options.loaderExtension.getAnimationInterpolationMethod){interpolationMethod=options.loaderExtension.getAnimationInterpolationMethod(samplerJson.interpolation);}
let animInputArray=this._accessBinary(animInputAccessorStr,json,buffers);let animOutputArray=null;if(targetPathStr==='translation'){animOutputArray=this._accessBinary(animOutputAccessorStr,json,buffers);}else if(targetPathStr==='rotation'){animOutputArray=this._accessBinary(animOutputAccessorStr,json,buffers,true);}else{animOutputArray=this._accessBinary(animOutputAccessorStr,json,buffers);}
let animationAttributeName='';if(targetPathStr==='translation'){animationAttributeName='translate';}else if(targetPathStr==='rotation'){animationAttributeName='quaternion';}else{animationAttributeName=targetPathStr;}
let hitElement=element.searchElement(targetMeshStr);if(hitElement){hitElement.setAnimationAtLine('time',animationAttributeName,animInputArray,animOutputArray,interpolationMethod);hitElement.setActiveAnimationLine('time');}}}}}
_accessBinaryAsShader(bufferViewStr,json,arrayBuffer){let bufferViewJson=json.bufferViews[bufferViewStr];let byteOffset=bufferViewJson.byteOffset;let byteLength=bufferViewJson.byteLength;let arrayBufferSliced=arrayBuffer.slice(byteOffset,byteOffset+byteLength);return DataUtil.arrayBufferToString(arrayBufferSliced);}
_sliceBufferViewToArrayBuffer(json,bufferViewStr,arrayBuffer){let bufferViewJson=json.bufferViews[bufferViewStr];let byteOffset=(bufferViewJson.byteOffset!=null)?bufferViewJson.byteOffset:0;let byteLength=bufferViewJson.byteLength;let arrayBufferSliced=arrayBuffer.slice(byteOffset,byteOffset+byteLength);return arrayBufferSliced;}
_accessBinaryAsImage(bufferViewStr,json,arrayBuffer,mimeType){let arrayBufferSliced=this._sliceBufferViewToArrayBuffer(json,bufferViewStr,arrayBuffer);return this._accessArrayBufferAsImage(arrayBufferSliced,mimeType);}
_accessArrayBufferAsImage(arrayBuffer,imageType){let bytes=new Uint8Array(arrayBuffer);let binaryData='';for(let i=0,len=bytes.byteLength;i<len;i++){binaryData+=String.fromCharCode(bytes[i]);}
let imgSrc='';if(imageType==='image/jpeg'||imageType.toLowerCase()==='jpg'||imageType.toLowerCase()==='jpeg'){imgSrc="data:image/jpeg;base64,";}
else if(imageType=='image/png'||imageType.toLowerCase()==='png'){imgSrc="data:image/png;base64,";}
else if(imageType=='image/gif'||imageType.toLowerCase()==='gif'){imgSrc="data:image/gif;base64,";}
else if(imageType=='image/bmp'||imageType.toLowerCase()==='bmp'){imgSrc="data:image/bmp;base64,";}
else{imgSrc="data:image/unknown;base64,";}
let dataUrl=imgSrc+DataUtil.btoa(binaryData);return dataUrl;}
static _isSystemLittleEndian(){return!!(new Uint8Array((new Uint16Array([0x00ff])).buffer))[0];}
_checkComponentNumber(accessorStr,json){var accessorJson=json.accessors[accessorStr];var componentN=0;switch(accessorJson.type){case 'SCALAR':componentN=1;break;case 'VEC2':componentN=2;break;case 'VEC3':componentN=3;break;case 'VEC4':componentN=4;break;case 'MAT4':componentN=16;break;}
return componentN;}
_checkBytesPerComponent(accessorStr,json){var accessorJson=json.accessors[accessorStr];var bytesPerComponent=0;switch(accessorJson.componentType){case 5120:bytesPerComponent=1;break;case 5121:bytesPerComponent=1;break;case 5122:bytesPerComponent=2;break;case 5123:bytesPerComponent=2;break;case 5124:bytesPerComponent=4;break;case 5125:bytesPerComponent=4;break;case 5126:bytesPerComponent=4;break;default:break;}
return bytesPerComponent;}
_checkDataViewMethod(accessorStr,json){var accessorJson=json.accessors[accessorStr];var dataViewMethod='';switch(accessorJson.componentType){case 5120:dataViewMethod='getInt8';break;case 5121:dataViewMethod='getUint8';break;case 5122:dataViewMethod='getInt16';break;case 5123:dataViewMethod='getUint16';break;case 5124:dataViewMethod='getInt32';break;case 5125:dataViewMethod='getUint32';break;case 5126:dataViewMethod='getFloat32';break;default:break;}
return dataViewMethod;}
_getDataType(accessorStr,json){var accessorJson=json.accessors[accessorStr];return accessorJson.componentType;}
_adjustByteAlign(typedArrayClass,arrayBuffer,alignSize,byteOffset,length){if((byteOffset%alignSize)!=0){return new typedArrayClass(arrayBuffer.slice(byteOffset),0,length);}else{return new typedArrayClass(arrayBuffer,byteOffset,length);}}
_accessBinary(accessorStr,json,buffers,quaternionIfVec4=false,toGetAsTypedArray=false){var accessorJson=json.accessors[accessorStr];var bufferViewStr=accessorJson.bufferView;var bufferViewJson=json.bufferViews[bufferViewStr];var byteOffset=bufferViewJson.byteOffset+accessorJson.byteOffset;var bufferStr=bufferViewJson.buffer;var arrayBuffer=buffers[bufferStr];let componentN=this._checkComponentNumber(accessorStr,json);let bytesPerComponent=this._checkBytesPerComponent(accessorStr,json);var dataViewMethod=this._checkDataViewMethod(accessorStr,json);var byteLength=bytesPerComponent*componentN*accessorJson.count;var vertexAttributeArray=[];if(toGetAsTypedArray){if(GLTFLoader._isSystemLittleEndian()){if(dataViewMethod==='getFloat32'){vertexAttributeArray=this._adjustByteAlign(Float32Array,arrayBuffer,4,byteOffset,byteLength/bytesPerComponent);}else if(dataViewMethod==='getInt8'){vertexAttributeArray=new Int8Array(arrayBuffer,byteOffset,byteLength/bytesPerComponent);}else if(dataViewMethod==='getUint8'){vertexAttributeArray=new Uint8Array(arrayBuffer,byteOffset,byteLength/bytesPerComponent);}else if(dataViewMethod==='getInt16'){vertexAttributeArray=this._adjustByteAlign(Int16Array,arrayBuffer,2,byteOffset,byteLength/bytesPerComponent);}else if(dataViewMethod==='getUint16'){vertexAttributeArray=this._adjustByteAlign(Uint16Array,arrayBuffer,2,byteOffset,byteLength/bytesPerComponent);}else if(dataViewMethod==='getInt32'){vertexAttributeArray=this._adjustByteAlign(Int32Array,arrayBuffer,4,byteOffset,byteLength/bytesPerComponent);}else if(dataViewMethod==='getUint32'){vertexAttributeArray=this._adjustByteAlign(Uint32Array,arrayBuffer,4,byteOffset,byteLength/bytesPerComponent);}}else{let dataView=new DataView(arrayBuffer,byteOffset,byteLength);let byteDelta=bytesPerComponent*componentN;let littleEndian=true;for(let pos=0;pos<byteLength;pos+=byteDelta){switch(accessorJson.type){case 'SCALAR':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));break;case 'VEC2':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+bytesPerComponent,littleEndian));break;case 'VEC3':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+bytesPerComponent,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+bytesPerComponent*2,littleEndian));break;case 'VEC4':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+bytesPerComponent,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+bytesPerComponent*2,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+bytesPerComponent*3,littleEndian));break;}}
if(dataViewMethod==='getInt8'){vertexAttributeArray=new Int8Array(vertexAttributeArray);}else if(dataViewMethod==='getUint8'){vertexAttributeArray=new Uint8Array(vertexAttributeArray);}else if(dataViewMethod==='getInt16'){vertexAttributeArray=new Int16Array(vertexAttributeArray);}else if(dataViewMethod==='getUint16'){vertexAttributeArray=new Uint16Array(vertexAttributeArray);}else if(dataViewMethod==='getInt32'){vertexAttributeArray=new Int32Array(vertexAttributeArray);}else if(dataViewMethod==='getUint32'){vertexAttributeArray=new Uint32Array(vertexAttributeArray);}else if(dataViewMethod==='getFloat32'){vertexAttributeArray=new Float32Array(vertexAttributeArray);}}}else{let dataView=new DataView(arrayBuffer,byteOffset,byteLength);let byteDelta=bytesPerComponent*componentN;let littleEndian=true;for(let pos=0;pos<byteLength;pos+=byteDelta){switch(accessorJson.type){case 'SCALAR':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));break;case 'VEC2':vertexAttributeArray.push(new Vector2(dataView[dataViewMethod](pos,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent,littleEndian)));break;case 'VEC3':vertexAttributeArray.push(new Vector3(dataView[dataViewMethod](pos,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent*2,littleEndian)));break;case 'VEC4':if(quaternionIfVec4){vertexAttributeArray.push(new Quaternion(dataView[dataViewMethod](pos,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent*2,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent*3,littleEndian)));}else{vertexAttributeArray.push(new Vector4$1(dataView[dataViewMethod](pos,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent*2,littleEndian),dataView[dataViewMethod](pos+bytesPerComponent*3,littleEndian)));}
break;case 'MAT4':let matrixComponents=[];for(let i=0;i<16;i++){matrixComponents[i]=dataView[dataViewMethod](pos+bytesPerComponent*i,littleEndian);}
vertexAttributeArray.push(new Matrix44$1(matrixComponents,true));break;}}}
return vertexAttributeArray;}}
GLBoost$1["GLTFLoader"]=GLTFLoader;let singleton$7=Symbol();let singletonEnforcer$4=Symbol();class GLTF2Loader{constructor(enforcer){if(enforcer!==singletonEnforcer$4){throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");}}
_getOptions(defaultOptions,json,options){if(json.asset&&json.asset.extras&&json.asset.extras.loadOptions){for(let optionName in json.asset.extras.loadOptions){defaultOptions[optionName]=json.asset.extras.loadOptions[optionName];}}
for(let optionName in options){defaultOptions[optionName]=options[optionName];}
if(defaultOptions.loaderExtension&&typeof defaultOptions.loaderExtension==="string"){defaultOptions.loaderExtension=GLBoost$1[options.loaderExtension].getInstance();}
if(defaultOptions.statesOfElements){for(let state of defaultOptions.statesOfElements){if(state.shaderClass&&typeof state.shaderClass==="string"){state.shaderClass=GLBoost$1[state.shaderClass];}}}
return defaultOptions;}
static getInstance(){if(!this[singleton$7]){this[singleton$7]=new GLTF2Loader(singletonEnforcer$4);}
return this[singleton$7];}
loadGLTF(uri,options={}){let defaultOptions={files:{},loaderExtension:null,isNeededToMultiplyAlphaToColorOfPixelOutput:true,isTextureImageToLoadPreMultipliedAlphaAsDefault:false,isExistJointGizmo:false,isBlend:false,isDepthTest:true,defaultShaderClass:null,isMeshTransparentAsDefault:false,statesOfElements:[{targets:[],specifyMethod:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME,states:{enable:[],functions:{}},isTransparent:true,opacity:1.0,shaderClass:DecalShader,isTextureImageToLoadPreMultipliedAlpha:false,globalStatesUsage:GLBoost$1.GLOBAL_STATES_USAGE_IGNORE}],extendedJson:null};if(options&&options.files){for(let fileName in options.files){const splitted=fileName.split('.');const fileExtension=splitted[splitted.length-1];if(fileExtension==='gltf'||fileExtension==='glb'){return new Promise((resolve,response)=>{this._checkArrayBufferOfGltf(options.files[fileName],null,options,defaultOptions,resolve);},(reject,error)=>{});}}}
return DataUtil.loadResourceAsync(uri,true,(resolve,response)=>{var arrayBuffer=response;if(options.extendedJson){fetch(options.extendedJson).then((_response)=>{_response.json().then((json)=>{options.extendedJson=json;this._checkArrayBufferOfGltf(arrayBuffer,uri,options,defaultOptions,resolve);});}).then((json)=>{console.log("Result of ladding extended JSON");});}else{this._checkArrayBufferOfGltf(arrayBuffer,uri,options,defaultOptions,resolve);}},(reject,error)=>{});}
_checkArrayBufferOfGltf(arrayBuffer,uri,options,defaultOptions,resolve){this._materials=[];let dataView=new DataView(arrayBuffer,0,20);let isLittleEndian=true;let magic=dataView.getUint32(0,isLittleEndian);if(magic!==0x46546C67){this._loadAsTextJson(arrayBuffer,uri,options,defaultOptions,resolve);}else{this._loadAsBinaryJson(dataView,uri,isLittleEndian,arrayBuffer,options,defaultOptions,resolve);}}
_loadAsBinaryJson(dataView,uri,isLittleEndian,arrayBuffer,options,defaultOptions,resolve){let gltfVer=dataView.getUint32(4,isLittleEndian);if(gltfVer!==2){reject('invalid version field in this binary glTF file.');}
let lengthOfThisFile=dataView.getUint32(8,isLittleEndian);let lengthOfJSonChunkData=dataView.getUint32(12,isLittleEndian);let chunkType=dataView.getUint32(16,isLittleEndian);if(chunkType!==0x4E4F534A){reject('invalid chunkType of chunk0 in this binary glTF file.');}
let arrayBufferJSonContent=arrayBuffer.slice(20,20+lengthOfJSonChunkData);let gotText=DataUtil.arrayBufferToString(arrayBufferJSonContent);let gltfJson=JSON.parse(gotText);options=this._getOptions(defaultOptions,gltfJson,options);let arrayBufferBinary=arrayBuffer.slice(20+lengthOfJSonChunkData+8);let basePath=null;if(uri){basePath=uri.substring(0,uri.lastIndexOf('/'))+'/';}
if(gltfJson.asset.extras===undefined){gltfJson.asset.extras={};}
this._mergeExtendedJson(gltfJson,options.extendedJson);gltfJson.asset.extras.basePath=basePath;let promise=this._loadInner(arrayBufferBinary,basePath,gltfJson,options);promise.then((gltfJson)=>{console.log('Resoureces loading done!');resolve(gltfJson[0][0]);});}
_loadAsTextJson(arrayBuffer,uri,options,defaultOptions,resolve){let gotText=DataUtil.arrayBufferToString(arrayBuffer);let basePath=null;if(uri){basePath=uri.substring(0,uri.lastIndexOf('/'))+'/';}
let gltfJson=JSON.parse(gotText);if(gltfJson.asset.extras===undefined){gltfJson.asset.extras={};}
options=this._getOptions(defaultOptions,gltfJson,options);this._mergeExtendedJson(gltfJson,options.extendedJson);gltfJson.asset.extras.basePath=basePath;let promise=this._loadInner(null,basePath,gltfJson,options);promise.then((gltfJson)=>{console.log('Resoureces loading done!');resolve(gltfJson[0][0]);});}
_mergeExtendedJson(gltfJson,extendedData){let extendedJson=null;if(extendedData instanceof ArrayBuffer){const extendedJsonStr=DataUtil.arrayBufferToString(extendedData);extendedJson=JSON.parse(extendedJsonStr);}else if(typeof extendedData==='string'){extendedJson=JSON.parse(extendedData);extendedJson=extendedJson;}else if(typeof extendedData==='object'){extendedJson=extendedData;}
Object.assign(gltfJson,extendedJson);}
_loadInner(arrayBufferBinary,basePath,gltfJson,options){let promises=[];let resources={shaders:[],buffers:[],images:[]};promises.push(this._loadResources(arrayBufferBinary,basePath,gltfJson,options,resources));promises.push(new Promise(((resolve,reject)=>{this._loadJsonContent(gltfJson,resources,options);resolve();})));return Promise.all(promises);}
_loadJsonContent(gltfJson,resources,options){this._loadDependenciesOfScenes(gltfJson);this._loadDependenciesOfNodes(gltfJson);this._loadDependenciesOfMeshes(gltfJson);this._loadDependenciesOfMaterials(gltfJson);this._loadDependenciesOfTextures(gltfJson);this._loadDependenciesOfJoints(gltfJson);this._loadDependenciesOfAnimations(gltfJson);this._loadDependenciesOfAccessors(gltfJson);this._loadDependenciesOfBufferViews(gltfJson);if(gltfJson.asset===void 0){gltfJson.asset={};}
if(gltfJson.asset.extras===void 0){gltfJson.asset.extras={};}
gltfJson.asset.extras.glboostOptions=options;}
_loadDependenciesOfScenes(gltfJson){for(let scene of gltfJson.scenes){scene.nodesIndices=scene.nodes.concat();for(let i in scene.nodesIndices){scene.nodes[i]=gltfJson.nodes[scene.nodesIndices[i]];}}}
_loadDependenciesOfNodes(gltfJson){for(let node of gltfJson.nodes){if(node.children){node.childrenIndices=node.children.concat();node.children=[];for(let i in node.childrenIndices){node.children[i]=gltfJson.nodes[node.childrenIndices[i]];}}
if(node.mesh!==void 0&&gltfJson.meshes!==void 0){node.meshIndex=node.mesh;node.mesh=gltfJson.meshes[node.meshIndex];}
if(node.skin!==void 0&&gltfJson.skins!==void 0){node.skinIndex=node.skin;node.skin=gltfJson.skins[node.skinIndex];if(node.mesh.extras===void 0){node.mesh.extras={};}
node.mesh.extras._skin=node.skin;}
if(node.camera!==void 0&&gltfJson.cameras!==void 0){node.cameraIndex=node.camera;node.camera=gltfJson.cameras[node.cameraIndex];}}}
_loadDependenciesOfMeshes(gltfJson){for(let mesh of gltfJson.meshes){for(let primitive of mesh.primitives){if(primitive.material!==void 0){primitive.materialIndex=primitive.material;primitive.material=gltfJson.materials[primitive.materialIndex];}
primitive.attributesindex=Object.assign({},primitive.attributes);for(let attributeName in primitive.attributesindex){if(primitive.attributesindex[attributeName]>=0){let accessor=gltfJson.accessors[primitive.attributesindex[attributeName]];accessor.extras={toGetAsTypedArray:true};primitive.attributes[attributeName]=accessor;}else{primitive.attributes[attributeName]=void 0;}}
if(primitive.indices!==void 0){primitive.indicesIndex=primitive.indices;primitive.indices=gltfJson.accessors[primitive.indicesIndex];}}}}
_loadDependenciesOfMaterials(gltfJson){if(gltfJson.materials){for(let material of gltfJson.materials){if(material.pbrMetallicRoughness){let baseColorTexture=material.pbrMetallicRoughness.baseColorTexture;if(baseColorTexture!==void 0){baseColorTexture.texture=gltfJson.textures[baseColorTexture.index];}
let metallicRoughnessTexture=material.pbrMetallicRoughness.metallicRoughnessTexture;if(metallicRoughnessTexture!==void 0){metallicRoughnessTexture.texture=gltfJson.textures[metallicRoughnessTexture.index];}}
let normalTexture=material.normalTexture;if(normalTexture!==void 0){normalTexture.texture=gltfJson.textures[normalTexture.index];}
const occlusionTexture=material.occlusionTexture;if(occlusionTexture!==void 0){occlusionTexture.texture=gltfJson.textures[occlusionTexture.index];}
const emissiveTexture=material.emissiveTexture;if(emissiveTexture!==void 0){emissiveTexture.texture=gltfJson.textures[emissiveTexture.index];}}}}
_loadDependenciesOfTextures(gltfJson){if(gltfJson.textures){for(let texture of gltfJson.textures){if(texture.sampler!==void 0){texture.samplerIndex=texture.sampler;texture.sampler=gltfJson.samplers[texture.samplerIndex];}
if(texture.source!==void 0){texture.sourceIndex=texture.source;texture.image=gltfJson.images[texture.sourceIndex];}}}}
_loadDependenciesOfJoints(gltfJson){if(gltfJson.skins){for(let skin of gltfJson.skins){skin.skeletonIndex=skin.skeleton;skin.skeleton=gltfJson.nodes[skin.skeletonIndex];skin.inverseBindMatricesIndex=skin.inverseBindMatrices;skin.inverseBindMatrices=gltfJson.accessors[skin.inverseBindMatricesIndex];skin.jointsIndices=skin.joints;skin.joints=[];for(let jointIndex of skin.jointsIndices){skin.joints.push(gltfJson.nodes[jointIndex]);}}}}
_loadDependenciesOfAnimations(gltfJson){if(gltfJson.animations){for(let animation of gltfJson.animations){for(let channel of animation.channels){channel.samplerIndex=channel.sampler;channel.sampler=animation.samplers[channel.samplerIndex];channel.target.nodeIndex=channel.target.node;channel.target.node=gltfJson.nodes[channel.target.nodeIndex];}
for(let channel of animation.channels){channel.sampler.inputIndex=channel.sampler.input;channel.sampler.outputIndex=channel.sampler.output;channel.sampler.input=gltfJson.accessors[channel.sampler.inputIndex];channel.sampler.output=gltfJson.accessors[channel.sampler.outputIndex];if(channel.target.path==='rotation'){if(channel.sampler.output.extras===void 0){channel.sampler.output.extras={};}
channel.sampler.output.extras.quaternionIfVec4=true;}}}}}
_loadDependenciesOfAccessors(gltfJson){for(let accessor of gltfJson.accessors){if(accessor.bufferView!==void 0){accessor.bufferViewIndex=accessor.bufferView;accessor.bufferView=gltfJson.bufferViews[accessor.bufferViewIndex];}}}
_loadDependenciesOfBufferViews(gltfJson){for(let bufferView of gltfJson.bufferViews){if(bufferView.buffer!==void 0){bufferView.bufferIndex=bufferView.buffer;bufferView.buffer=gltfJson.buffers[bufferView.bufferIndex];}}}
_loadResources(arrayBufferBinary,basePath,gltfJson,options,resources){let promisesToLoadResources=[];for(let i in gltfJson.shaders){resources.shaders[i]={};let shaderJson=gltfJson.shaders[i];let shaderType=shaderJson.type;if(typeof shaderJson.extensions!=='undefined'&&typeof shaderJson.extensions.KHR_binary_glTF!=='undefined'){resources.shaders[i].shaderText=this._accessBinaryAsShader(shaderJson.extensions.KHR_binary_glTF.bufferView,gltfJson,arrayBufferBinary);resources.shaders[i].shaderType=shaderType;continue;}
let shaderUri=shaderJson.uri;if(options.files){const splitted=shaderUri.split('/');const filename=splitted[splitted.length-1];if(options.files[filename]){const arrayBuffer=options.files[filename];shaders[shaderName].shaderText=DataUtil.arrayBufferToString(arrayBuffer);shaders[shaderName].shaderType=shaderType;continue;}}
if(shaderUri.match(/^data:/)){promisesToLoadResources.push(new Promise((resolve,rejected)=>{let arrayBuffer=DataUtil.base64ToArrayBuffer(shaderUri);resources.shaders[i].shaderText=DataUtil.arrayBufferToString(arrayBuffer);resources.shaders[i].shaderType=shaderType;resolve();}));}else{shaderUri=basePath+shaderUri;promisesToLoadResources.push(DataUtil.loadResourceAsync(shaderUri,false,(resolve,response)=>{resources.shaders[i].shaderText=response;resources.shaders[i].shaderType=shaderType;resolve(gltfJson);},(reject,error)=>{}));}}
for(let i in gltfJson.buffers){let bufferInfo=gltfJson.buffers[i];let splitted=null;let filename=null;if(bufferInfo.uri){splitted=bufferInfo.uri.split('/');filename=splitted[splitted.length-1];}
if(typeof bufferInfo.uri==='undefined'){promisesToLoadResources.push(new Promise((resolve,rejected)=>{resources.buffers[i]=arrayBufferBinary;bufferInfo.buffer=arrayBufferBinary;resolve(gltfJson);}));}else if(bufferInfo.uri.match(/^data:application\/(.*);base64,/)){promisesToLoadResources.push(new Promise((resolve,rejected)=>{let arrayBuffer=DataUtil.base64ToArrayBuffer(bufferInfo.uri);resources.buffers[i]=arrayBuffer;bufferInfo.buffer=arrayBuffer;resolve(gltfJson);}));}else if(options.files&&options.files[filename]){promisesToLoadResources.push(new Promise((resolve,rejected)=>{const arrayBuffer=options.files[filename];resources.buffers[i]=arrayBuffer;bufferInfo.buffer=arrayBuffer;resolve(gltfJson);}));}else{promisesToLoadResources.push(DataUtil.loadResourceAsync(basePath+bufferInfo.uri,true,(resolve,response)=>{resources.buffers[i]=response;bufferInfo.buffer=response;resolve(gltfJson);},(reject,error)=>{}));}}
for(let i in gltfJson.images){let imageJson=gltfJson.images[i];let imageUri=null;if(typeof imageJson.uri==='undefined'){imageUri=this._accessBinaryAsImage(imageJson.bufferView,gltfJson,arrayBufferBinary,imageJson.mimeType);}else{let imageFileStr=imageJson.uri;const splitted=imageFileStr.split('/');const filename=splitted[splitted.length-1];if(options.files&&options.files[filename]){const arrayBuffer=options.files[filename];const splitted=filename.split('.');const fileExtension=splitted[splitted.length-1];imageUri=this._accessArrayBufferAsImage(arrayBuffer,fileExtension);}else if(imageFileStr.match(/^data:/)){imageUri=imageFileStr;}else{imageUri=basePath+imageFileStr;}}
if(options.isNeededToMultiplyAlphaToColorOfPixelOutput){if(options.isTextureImageToLoadPreMultipliedAlpha);}else{if(options.isTextureImageToLoadPreMultipliedAlpha);}
if(options.extensionLoader&&options.extensionLoader.setUVTransformToTexture){options.extensionLoader.setUVTransformToTexture(texture,samplerJson);}
promisesToLoadResources.push(new Promise((resolve,reject)=>{let img=new Image();img.crossOrigin='Anonymous';img.src=imageUri;imageJson.image=img;if(imageUri.match(/^data:/)){resolve(gltfJson);}else{const load=(img,response)=>{var bytes=new Uint8Array(response);var binaryData="";for(var i=0,len=bytes.byteLength;i<len;i++){binaryData+=String.fromCharCode(bytes[i]);}
const split=imageUri.split('.');let ext=split[split.length-1];img.src=this._getImageType(ext)+window.btoa(binaryData);img.onload=()=>{resolve(gltfJson);};};const loadBinaryImage=()=>{var xhr=new XMLHttpRequest();xhr.onreadystatechange=(function(_img){return function(){if(this.readyState==4&&this.status==200){load(_img,this.response);}}})(img);xhr.open('GET',imageUri);xhr.responseType='arraybuffer';xhr.send();};loadBinaryImage();}
resources.images[i]=img;}));}
return Promise.all(promisesToLoadResources);}
_sliceBufferViewToArrayBuffer(json,bufferViewStr,arrayBuffer){let bufferViewJson=json.bufferViews[bufferViewStr];let byteOffset=(bufferViewJson.byteOffset!=null)?bufferViewJson.byteOffset:0;let byteLength=bufferViewJson.byteLength;let arrayBufferSliced=arrayBuffer.slice(byteOffset,byteOffset+byteLength);return arrayBufferSliced;}
_accessBinaryAsImage(bufferViewStr,json,arrayBuffer,mimeType){let arrayBufferSliced=this._sliceBufferViewToArrayBuffer(json,bufferViewStr,arrayBuffer);return this._accessArrayBufferAsImage(arrayBufferSliced,mimeType);}
_getImageType(imageType){let imgSrc=null;if(imageType==='image/jpeg'||imageType.toLowerCase()==='jpg'||imageType.toLowerCase()==='jpeg'){imgSrc="data:image/jpeg;base64,";}
else if(imageType=='image/png'||imageType.toLowerCase()==='png'){imgSrc="data:image/png;base64,";}
else if(imageType=='image/gif'||imageType.toLowerCase()==='gif'){imgSrc="data:image/gif;base64,";}
else if(imageType=='image/bmp'||imageType.toLowerCase()==='bmp'){imgSrc="data:image/bmp;base64,";}
else{imgSrc="data:image/unknown;base64,";}
return imgSrc;}
_accessArrayBufferAsImage(arrayBuffer,imageType){let bytes=new Uint8Array(arrayBuffer);let binaryData='';for(let i=0,len=bytes.byteLength;i<len;i++){binaryData+=String.fromCharCode(bytes[i]);}
let imgSrc=this._getImageType(imageType);let dataUrl=imgSrc+DataUtil.btoa(binaryData);return dataUrl;}}
GLBoost$1["GLTF2Loader"]=GLTF2Loader;let singleton$8=Symbol();let singletonEnforcer$5=Symbol();class ModelConverter{constructor(enforcer){if(enforcer!==singletonEnforcer$5){throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");}}
static getInstance(){if(!this[singleton$8]){this[singleton$8]=new ModelConverter(singletonEnforcer$5);}
return this[singleton$8];}
_getDefaultShader(options){let defaultShader=null;if(options&&typeof options.defaultShaderClass!=="undefined"){if(typeof options.defaultShaderClass==="string"){defaultShader=GLBoost$1[options.defaultShaderClass];}else{defaultShader=options.defaultShaderClass;}}
return defaultShader;}
convertToGLBoostModel(glBoostContext,gltfModel){for(let accessor of gltfModel.accessors){this._accessBinaryWithAccessor(accessor);}
let glboostMeshes=this._setupMesh(glBoostContext,gltfModel);let groups=[];for(let node of gltfModel.nodes){let group=glBoostContext.createGroup();group.userFlavorName=node.name;groups.push(group);}
this._setupTransform(gltfModel,groups);this._setupSkeleton(glBoostContext,gltfModel,groups,glboostMeshes);this._setupHierarchy(glBoostContext,gltfModel,groups,glboostMeshes);this._setupAnimation(gltfModel,groups);let rootGroup=glBoostContext.createGroup();rootGroup.userFlavorName='FileRoot';if(gltfModel.scenes[0].nodesIndices){for(let nodesIndex of gltfModel.scenes[0].nodesIndices){rootGroup.addChild(groups[nodesIndex],true);}}
for(let glboostMesh of glboostMeshes){if(glboostMesh instanceof M_SkeletalMesh){if(!glboostMesh.jointsHierarchy){glboostMesh.jointsHierarchy=rootGroup;}}}
let options=gltfModel.asset.extras.glboostOptions;if(options.loaderExtension&&options.loaderExtension.setAssetPropertiesToRootGroup){options.loaderExtension.setAssetPropertiesToRootGroup(rootGroup,gltfModel.asset);}
if(options&&options.loaderExtension&&options.loaderExtension.loadExtensionInfoAndSetToRootGroup){options.loaderExtension.loadExtensionInfoAndSetToRootGroup(rootGroup,gltfModel,glBoostContext);}
rootGroup.allMeshes=rootGroup.searchElementsByType(M_Mesh);return rootGroup;}
_setupTransform(gltfModel,groups){for(let node_i in gltfModel.nodes){let group=groups[node_i];let nodeJson=gltfModel.nodes[node_i];if(nodeJson.translation){group.translate=new Vector3(nodeJson.translation[0],nodeJson.translation[1],nodeJson.translation[2]);}
if(nodeJson.scale){group.scale=new Vector3(nodeJson.scale[0],nodeJson.scale[1],nodeJson.scale[2]);}
if(nodeJson.rotation){group.quaternion=new Quaternion(nodeJson.rotation[0],nodeJson.rotation[1],nodeJson.rotation[2],nodeJson.rotation[3]);}
if(nodeJson.matrix){group.matrix=new Matrix44$1(nodeJson.matrix,true);}}}
_setupHierarchy(glBoostContext,gltfModel,groups,glboostMeshes){for(let node_i in gltfModel.nodes){let node=gltfModel.nodes[parseInt(node_i)];let parentGroup=groups[node_i];if(node.mesh){parentGroup.addChild(glboostMeshes[node.meshIndex],true);}
if(node.childrenIndices){for(let childNode_i of node.childrenIndices){let childGroup=groups[childNode_i];parentGroup.addChild(childGroup,true);}}}}
_setupAnimation(gltfModel,groups){if(gltfModel.animations){for(let animation of gltfModel.animations){for(let channel of animation.channels){let animInputArray=channel.sampler.input.extras.vertexAttributeArray;let animOutputArray=channel.sampler.output.extras.vertexAttributeArray;let animationAttributeName='';if(channel.target.path==='translation'){animationAttributeName='translate';}else if(channel.target.path==='rotation'){animationAttributeName='quaternion';}else{animationAttributeName=channel.target.path;}
let group=groups[channel.target.nodeIndex];if(group){group.setAnimationAtLine('time',animationAttributeName,animInputArray,animOutputArray);group.setActiveAnimationLine('time');}}}}}
_setupSkeleton(glBoostContext,gltfModel,groups,glboostMeshes){for(let node_i in gltfModel.nodes){let node=gltfModel.nodes[node_i];let group=groups[node_i];if(node.skin&&node.skin.skeleton){group._isRootJointGroup=true;if(node.mesh){let glboostMesh=glboostMeshes[node.meshIndex];glboostMesh.jointsHierarchy=groups[node.skin.skeletonIndex];}}
if(node.skin&&node.skin.joints){for(let joint_i of node.skin.jointsIndices){let joint=node.skin.joints[joint_i];let options=gltfModel.asset.extras.glboostOptions;let glboostJoint=glBoostContext.createJoint(options.isExistJointGizmo);glboostJoint._glTFJointIndex=joint_i;let group=groups[joint_i];group.addChild(glboostJoint,true);}}}}
_setupMesh(glBoostContext,gltfModel){let glboostMeshes=[];for(let mesh of gltfModel.meshes){let geometry=null;let glboostMesh=null;if(mesh.extras&&mesh.extras._skin&&mesh.extras._skin.jointsIndices.length>0){geometry=glBoostContext.createSkeletalGeometry();glboostMesh=glBoostContext.createSkeletalMesh(geometry,null);glboostMesh.gltfJointIndices=mesh.extras._skin.jointsIndices;if(mesh.extras._skin.inverseBindMatrices){glboostMesh.inverseBindMatrices=mesh.extras._skin.inverseBindMatrices.extras.vertexAttributeArray;}else{glboostMesh.inverseBindMatrices=[];}}else{geometry=glBoostContext.createGeometry();glboostMesh=glBoostContext.createMesh(geometry);}
glboostMeshes.push(glboostMesh);let options=gltfModel.asset.extras.glboostOptions;if(options.isMeshTransparentAsDefault){glboostMeshes.isTransparent=true;}
let _indicesArray=[];let _positions=[];let _normals=[];let vertexData={position:_positions,normal:_normals,components:{},componentBytes:{},componentType:{}};let additional={'joint':[],'weight':[],'texcoord':[],'color':[]};let dataViewMethodDic={};let materials=[];let indicesAccumulatedLength=0;let primitiveMode=4;for(let i in mesh.primitives){let primitive=mesh.primitives[i];if(primitive.mode!=null){primitiveMode=primitive.mode;}
{let accessor=primitive.attributes.POSITION;_positions[i]=accessor.extras.vertexAttributeArray;vertexData.components.position=accessor.extras.componentN;vertexData.componentBytes.position=accessor.extras.componentBytes;vertexData.componentType.position=accessor.componentType;dataViewMethodDic.position=accessor.extras.dataViewMethod;}
let indices=null;if(typeof primitive.indices!=='undefined'){primitive.indices.indices=gltfModel.accessors[primitive.indicesIndex];indices=primitive.indices.indices.extras.vertexAttributeArray;for(let j=0;j<indices.length;j++){indices[j]=indicesAccumulatedLength+indices[j];}
_indicesArray[i]=indices;indicesAccumulatedLength+=_positions[i].length/vertexData.components.position;}
{let accessor=primitive.attributes.NORMAL;if(accessor){_normals[i]=accessor.extras.vertexAttributeArray;vertexData.components.normal=accessor.extras.componentN;vertexData.componentBytes.normal=accessor.extras.componentBytes;vertexData.componentType.normal=accessor.componentType;dataViewMethodDic.normal=accessor.extras.dataViewMethod;}
accessor=primitive.attributes.COLOR_0;if(accessor){additional['color'][i]=accessor.extras.vertexAttributeArray;vertexData.components.color=accessor.extras.componentN;vertexData.componentBytes.color=accessor.extras.componentBytes;vertexData.componentType.color=accessor.componentType;dataViewMethodDic.color=accessor.extras.dataViewMethod;}}
{let accessor=primitive.attributes.JOINTS_0;if(accessor){additional['joint'][i]=accessor.extras.vertexAttributeArray;vertexData.components.joint=accessor.extras.componentN;vertexData.componentBytes.joint=accessor.extras.componentBytes;vertexData.componentType.joint=accessor.componentType;dataViewMethodDic.joint=accessor.extras.dataViewMethod;}
accessor=primitive.attributes.WEIGHTS_0;if(accessor){additional['weight'][i]=accessor.extras.vertexAttributeArray;vertexData.components.weight=accessor.extras.componentN;vertexData.componentBytes.weight=accessor.extras.componentBytes;vertexData.componentType.weight=accessor.componentType;dataViewMethodDic.weight=accessor.extras.dataViewMethod;}}
if(primitive.material){var texcoords=null;let material=primitive.material;let glboostMaterial=glBoostContext.createPBRMetallicRoughnessMaterial();if(options.isNeededToMultiplyAlphaToColorOfPixelOutput){glboostMaterial.shaderParameters.isNeededToMultiplyAlphaToColorOfPixelOutput=options.isNeededToMultiplyAlphaToColorOfPixelOutput;}
let accessor=primitive.attributes.TEXCOORD_0;texcoords=this._setupMaterial(glBoostContext,gltfModel,glboostMaterial,material,accessor,additional,vertexData,dataViewMethodDic,_positions,indices,geometry,i);materials.push(glboostMaterial);}else{let glboostMaterial=null;if(options.loaderExtension&&options.loaderExtension.createClassicMaterial){glboostMaterial=options.loaderExtension.createClassicMaterial(glBoostContext);}else{glboostMaterial=glBoostContext.createClassicMaterial();}
const defaultShader=this._getDefaultShader(options);if(defaultShader){glboostMaterial.shaderClass=defaultShader;}else{glboostMaterial.baseColor=new Vector4$1(0.5,0.5,0.5,1);}
materials.push(glboostMaterial);}}
if(mesh.primitives.length>1){let lengthDic={index:0,position:0,normal:0,joint:0,weight:0,texcoord:0,color:0};for(let i=0;i<mesh.primitives.length;i++){lengthDic.position+=_positions[i].length;if(_normals[i]){lengthDic.normal+=_normals[i].length;}
if(typeof additional['joint'][i]!=='undefined'){lengthDic.joint+=additional['joint'][i].length;}
if(typeof additional['weight'][i]!=='undefined'){lengthDic.weight+=additional['weight'][i].length;}
if(typeof additional['texcoord'][i]!=='undefined'){lengthDic.texcoord+=additional['texcoord'][i].length;}
if(typeof additional['color'][i]!=='undefined'){lengthDic.color+=additional['color'][i].length;}}
function getTypedArray(dataViewMethod,length){let vertexAttributeArray=null;if(dataViewMethod==='getInt8'){vertexAttributeArray=new Int8Array(length);}else if(dataViewMethod==='getUint8'){vertexAttributeArray=new Uint8Array(length);}else if(dataViewMethod==='getInt16'){vertexAttributeArray=new Int16Array(length);}else if(dataViewMethod==='getUint16'){vertexAttributeArray=new Uint16Array(length);}else if(dataViewMethod==='getInt32'){vertexAttributeArray=new Int32Array(length);}else if(dataViewMethod==='getUint32'){vertexAttributeArray=new Uint32Array(length);}else if(dataViewMethod==='getFloat32'){vertexAttributeArray=new Float32Array(length);}
return vertexAttributeArray;}
for(let attribName in dataViewMethodDic){let newTypedArray=getTypedArray(dataViewMethodDic[attribName],lengthDic[attribName]);let offset=0;for(let i=0;i<mesh.primitives.length;i++){let array=null;if(attribName==='position'){array=_positions[i];}else if(attribName==='normal'){array=_normals[i];}else if(attribName==='joint'){array=additional['joint'][i];}else if(attribName==='weight'){array=additional['weight'][i];}else if(attribName==='texcoord'){array=additional['texcoord'][i];}else if(attribName==='color'){array=additional['color'][i];}
if(array){newTypedArray.set(array,offset);offset+=array.length;}}
if(attribName==='position'){vertexData.position=newTypedArray;}else if(attribName==='normal'){vertexData.normal=newTypedArray;}else if(attribName==='joint'){additional['joint']=newTypedArray;}else if(attribName==='weight'){additional['weight']=newTypedArray;}else if(attribName==='texcoord'){additional['texcoord']=newTypedArray;}else if(attribName==='color'){additional['color']=newTypedArray;}}}else{vertexData.position=_positions[0];vertexData.normal=_normals[0];additional['joint']=additional['joint'][0];additional['weight']=additional['weight'][0];additional['texcoord']=additional['texcoord'][0];additional['color']=additional['color'][0];}
if(typeof vertexData.normal==='undefined'||vertexData.normal.length===0){delete vertexData.normal;}
if(typeof additional['joint']==='undefined'||additional['joint'].length===0){delete additional['joint'];}
if(typeof additional['weight']==='undefined'||additional['weight'].length===0){delete additional['weight'];}
if(typeof additional['texcoord']==='undefined'||additional['texcoord'].length===0){delete additional['texcoord'];}
if(typeof additional['color']==='undefined'||additional['color'].length===0){delete additional['color'];}
if(_indicesArray.length===0){_indicesArray=null;}
geometry.setVerticesData(ArrayUtil.merge(vertexData,additional),_indicesArray,primitiveMode);geometry.materials=materials;}
return glboostMeshes;}
_setupMaterial(glBoostContext,gltfModel,gltfMaterial,materialJson,accessor,additional,vertexData,dataViewMethodDic,_positions,indices,geometry,i){let options=gltfModel.asset.extras.glboostOptions;if(accessor){additional['texcoord'][i]=accessor.extras.vertexAttributeArray;vertexData.components.texcoord=accessor.extras.componentN;vertexData.componentBytes.texcoord=accessor.extras.componentBytes;vertexData.componentType.texcoord=accessor.componentType;dataViewMethodDic.texcoord=accessor.extras.dataViewMethod;let setTextures=(materialJson)=>{if(materialJson.pbrMetallicRoughness){let baseColorTexture=materialJson.pbrMetallicRoughness.baseColorTexture;if(baseColorTexture){let sampler=baseColorTexture.texture.sampler;let isNeededToMultiplyAlphaToColorOfTexture=false;if(options.isNeededToMultiplyAlphaToColorOfPixelOutput){if(options.isTextureImageToLoadPreMultipliedAlphaAsDefault);else{isNeededToMultiplyAlphaToColorOfTexture=true;}}else{if(options.isTextureImageToLoadPreMultipliedAlphaAsDefault);}
if(options&&options.statesOfElements){for(let statesInfo of options.statesOfElements){if(statesInfo.targets){for(let target of statesInfo.targets){let isMatch=false;let specifyMethod=statesInfo.specifyMethod!==void 0?statesInfo.specifyMethod:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME;switch(specifyMethod){case GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME:isMatch=group.userFlavorName===target;break;case GLBoost$1.QUERY_TYPE_INSTANCE_NAME:isMatch=group.instanceName===target;break;case GLBoost$1.QUERY_TYPE_INSTANCE_NAME_WITH_USER_FLAVOR:isMatch=group.instanceNameWithUserFlavor===target;break;}
if(isMatch){if(options.isNeededToMultiplyAlphaToColorOfPixelOutput){if(statesInfo.isTextureImageToLoadPreMultipliedAlpha);else{isNeededToMultiplyAlphaToColorOfTexture=true;}}else{if(statesInfo.isTextureImageToLoadPreMultipliedAlpha);}}}}}}
let texture=glBoostContext.createTexture(baseColorTexture.texture.image.image,'',{'TEXTURE_MAG_FILTER':sampler===void 0?GLBoost$1.LINEAR:sampler.magFilter,'TEXTURE_MIN_FILTER':sampler===void 0?GLBoost$1.LINEAR_MIPMAP_LINEAR:sampler.minFilter,'TEXTURE_WRAP_S':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapS,'TEXTURE_WRAP_T':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapT,'UNPACK_PREMULTIPLY_ALPHA_WEBGL':isNeededToMultiplyAlphaToColorOfTexture});texture.userFlavorName=`Texture_Diffuse_index_${baseColorTexture.index}_of_${gltfMaterial.instanceNameWithUserFlavor}`;gltfMaterial.setTexture(texture,GLBoost$1.TEXTURE_PURPOSE_DIFFUSE);}
let metallicRoughnessTexture=materialJson.pbrMetallicRoughness.metallicRoughnessTexture;if(metallicRoughnessTexture){let sampler=metallicRoughnessTexture.texture.sampler;let texture=glBoostContext.createTexture(metallicRoughnessTexture.texture.image.image,'',{'TEXTURE_MAG_FILTER':sampler===void 0?GLBoost$1.LINEAR:sampler.magFilter,'TEXTURE_MIN_FILTER':sampler===void 0?GLBoost$1.LINEAR_MIPMAP_LINEAR:sampler.minFilter,'TEXTURE_WRAP_S':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapS,'TEXTURE_WRAP_T':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapT});texture.userFlavorName=`Texture_MetallicRoughness_index_${metallicRoughnessTexture.index}_of_${gltfMaterial.instanceNameWithUserFlavor}`;gltfMaterial.setTexture(texture,GLBoost$1.TEXTURE_PURPOSE_METALLIC_ROUGHNESS);}
const normalTexture=materialJson.normalTexture;if(normalTexture){const sampler=normalTexture.texture.sampler;const texture=glBoostContext.createTexture(normalTexture.texture.image.image,'',{'TEXTURE_MAG_FILTER':sampler===void 0?GLBoost$1.LINEAR:sampler.magFilter,'TEXTURE_MIN_FILTER':sampler===void 0?GLBoost$1.LINEAR_MIPMAP_LINEAR:sampler.minFilter,'TEXTURE_WRAP_S':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapS,'TEXTURE_WRAP_T':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapT});texture.userFlavorName=`Texture_MetallicRoughness_index_${normalTexture.index}_of_${gltfMaterial.instanceNameWithUserFlavor}`;gltfMaterial.setTexture(texture,GLBoost$1.TEXTURE_PURPOSE_NORMAL);}
const occlusionTexture=materialJson.occlusionTexture;if(occlusionTexture){const sampler=occlusionTexture.texture.sampler;const texture=glBoostContext.createTexture(occlusionTexture.texture.image.image,'',{'TEXTURE_MAG_FILTER':sampler===void 0?GLBoost$1.LINEAR:sampler.magFilter,'TEXTURE_MIN_FILTER':sampler===void 0?GLBoost$1.LINEAR_MIPMAP_LINEAR:sampler.minFilter,'TEXTURE_WRAP_S':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapS,'TEXTURE_WRAP_T':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapT});texture.userFlavorName=`Texture_Occlusion_index_${occlusionTexture.index}_of_${gltfMaterial.instanceNameWithUserFlavor}`;gltfMaterial.setTexture(texture,GLBoost$1.TEXTURE_PURPOSE_OCCLUSION);}
const emissiveTexture=materialJson.emissiveTexture;if(emissiveTexture){const sampler=normalTexture.texture.sampler;const texture=glBoostContext.createTexture(emissiveTexture.texture.image.image,'',{'TEXTURE_MAG_FILTER':sampler===void 0?GLBoost$1.LINEAR:sampler.magFilter,'TEXTURE_MIN_FILTER':sampler===void 0?GLBoost$1.LINEAR_MIPMAP_LINEAR:sampler.minFilter,'TEXTURE_WRAP_S':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapS,'TEXTURE_WRAP_T':sampler===void 0?GLBoost$1.REPEAT:sampler.wrapT});texture.userFlavorName=`Texture_Emissive_index_${emissiveTexture.index}_of_${gltfMaterial.instanceNameWithUserFlavor}`;gltfMaterial.setTexture(texture,GLBoost$1.TEXTURE_PURPOSE_EMISSIVE);}
const alphaMode=materialJson.alphaMode;if(alphaMode==='MASK'){gltfMaterial.isAlphaTest=true;gltfMaterial.alphaCutoff=materialJson.alphaCutoff;}
let enables=[];if(options.isBlend||alphaMode==='BLEND'){enables.push(3042);}
if(options.isDepthTest){enables.push(2929);}
gltfMaterial.states.enable=enables;if(options.isBlend&&options.isNeededToMultiplyAlphaToColorOfPixelOutput){gltfMaterial.states.functions.blendFuncSeparate=[1,771,1,771];}
gltfMaterial.globalStatesUsage=GLBoost$1.GLOBAL_STATES_USAGE_IGNORE;}};setTextures(materialJson);}else{if(typeof vertexData.components.texcoord!=='undefined'){let emptyTexcoords=[];let componentN=vertexData.components.position;let length=_positions[i].length/componentN;for(let k=0;k<length;k++){emptyTexcoords.push(0);emptyTexcoords.push(0);}
additional['texcoord'][i]=new Float32Array(emptyTexcoords);vertexData.components.texcoord=2;vertexData.componentBytes.texcoord=4;dataViewMethodDic.texcoord='getFloat32';}}
const pmr=materialJson.pbrMetallicRoughness;if(pmr!=null){if(pmr.baseColorFactor){gltfMaterial.baseColor=new Vector4$1(pmr.baseColorFactor);}
if(pmr.metallicFactor){gltfMaterial.metallic=pmr.metallicFactor;}
if(pmr.roughnessFactor){gltfMaterial.roughness=pmr.roughnessFactor;}
if(materialJson.emissiveFactor){gltfMaterial.emissive=new Vector3(materialJson.emissiveFactor);}}
if(indices!==null){gltfMaterial.setVertexN(geometry,indices.length);}
const defaultShader=this._getDefaultShader(options);if(defaultShader){gltfMaterial.shaderClass=defaultShader;}}
_adjustByteAlign(typedArrayClass,arrayBuffer,alignSize,byteOffset,length){if((byteOffset%alignSize)!=0){return new typedArrayClass(arrayBuffer.slice(byteOffset),0,length);}else{return new typedArrayClass(arrayBuffer,byteOffset,length);}}
_checkBytesPerComponent(accessor){var bytesPerComponent=0;switch(accessor.componentType){case 5120:bytesPerComponent=1;break;case 5121:bytesPerComponent=1;break;case 5122:bytesPerComponent=2;break;case 5123:bytesPerComponent=2;break;case 5124:bytesPerComponent=4;break;case 5125:bytesPerComponent=4;break;case 5126:bytesPerComponent=4;break;default:break;}
return bytesPerComponent;}
_checkComponentNumber(accessor){var componentN=0;switch(accessor.type){case 'SCALAR':componentN=1;break;case 'VEC2':componentN=2;break;case 'VEC3':componentN=3;break;case 'VEC4':componentN=4;break;case 'MAT4':componentN=16;break;}
return componentN;}
_checkDataViewMethod(accessor){var dataViewMethod='';switch(accessor.componentType){case 5120:dataViewMethod='getInt8';break;case 5121:dataViewMethod='getUint8';break;case 5122:dataViewMethod='getInt16';break;case 5123:dataViewMethod='getUint16';break;case 5124:dataViewMethod='getInt32';break;case 5125:dataViewMethod='getUint32';break;case 5126:dataViewMethod='getFloat32';break;default:break;}
return dataViewMethod;}
static _isSystemLittleEndian(){return!!(new Uint8Array((new Uint16Array([0x00ff])).buffer))[0];}
_accessBinaryWithAccessor(accessor){var bufferView=accessor.bufferView;const byteOffset=bufferView.byteOffset+(accessor.byteOffset!==void 0?accessor.byteOffset:0);var buffer=bufferView.buffer;var arrayBuffer=buffer.buffer;let componentN=this._checkComponentNumber(accessor);let componentBytes=this._checkBytesPerComponent(accessor);let dataViewMethod=this._checkDataViewMethod(accessor);if(accessor.extras===void 0){accessor.extras={};}
accessor.extras.componentN=componentN;accessor.extras.componentBytes=componentBytes;accessor.extras.dataViewMethod=dataViewMethod;var byteLength=componentBytes*componentN*accessor.count;var vertexAttributeArray=[];if(accessor.extras&&accessor.extras.toGetAsTypedArray){if(ModelConverter._isSystemLittleEndian()){if(dataViewMethod==='getFloat32'){vertexAttributeArray=this._adjustByteAlign(Float32Array,arrayBuffer,4,byteOffset,byteLength/componentBytes);}else if(dataViewMethod==='getInt8'){vertexAttributeArray=new Int8Array(arrayBuffer,byteOffset,byteLength/componentBytes);}else if(dataViewMethod==='getUint8'){vertexAttributeArray=new Uint8Array(arrayBuffer,byteOffset,byteLength/componentBytes);}else if(dataViewMethod==='getInt16'){vertexAttributeArray=this._adjustByteAlign(Int16Array,arrayBuffer,2,byteOffset,byteLength/componentBytes);}else if(dataViewMethod==='getUint16'){vertexAttributeArray=this._adjustByteAlign(Uint16Array,arrayBuffer,2,byteOffset,byteLength/componentBytes);}else if(dataViewMethod==='getInt32'){vertexAttributeArray=this._adjustByteAlign(Int32Array,arrayBuffer,4,byteOffset,byteLength/componentBytes);}else if(dataViewMethod==='getUint32'){vertexAttributeArray=this._adjustByteAlign(Uint32Array,arrayBuffer,4,byteOffset,byteLength/componentBytes);}}else{let dataView=new DataView(arrayBuffer,byteOffset,byteLength);let byteDelta=componentBytes*componentN;let littleEndian=true;for(let pos=0;pos<byteLength;pos+=byteDelta){switch(accessor.type){case 'SCALAR':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));break;case 'VEC2':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+componentBytes,littleEndian));break;case 'VEC3':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+componentBytes,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+componentBytes*2,littleEndian));break;case 'VEC4':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+componentBytes,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+componentBytes*2,littleEndian));vertexAttributeArray.push(dataView[dataViewMethod](pos+componentBytes*3,littleEndian));break;}}
if(dataViewMethod==='getInt8'){vertexAttributeArray=new Int8Array(vertexAttributeArray);}else if(dataViewMethod==='getUint8'){vertexAttributeArray=new Uint8Array(vertexAttributeArray);}else if(dataViewMethod==='getInt16'){vertexAttributeArray=new Int16Array(vertexAttributeArray);}else if(dataViewMethod==='getUint16'){vertexAttributeArray=new Uint16Array(vertexAttributeArray);}else if(dataViewMethod==='getInt32'){vertexAttributeArray=new Int32Array(vertexAttributeArray);}else if(dataViewMethod==='getUint32'){vertexAttributeArray=new Uint32Array(vertexAttributeArray);}else if(dataViewMethod==='getFloat32'){vertexAttributeArray=new Float32Array(vertexAttributeArray);}}}else{let dataView=new DataView(arrayBuffer,byteOffset,byteLength);let byteDelta=componentBytes*componentN;let littleEndian=true;for(let pos=0;pos<byteLength;pos+=byteDelta){switch(accessor.type){case 'SCALAR':vertexAttributeArray.push(dataView[dataViewMethod](pos,littleEndian));break;case 'VEC2':vertexAttributeArray.push(new Vector2(dataView[dataViewMethod](pos,littleEndian),dataView[dataViewMethod](pos+componentBytes,littleEndian)));break;case 'VEC3':vertexAttributeArray.push(new Vector3(dataView[dataViewMethod](pos,littleEndian),dataView[dataViewMethod](pos+componentBytes,littleEndian),dataView[dataViewMethod](pos+componentBytes*2,littleEndian)));break;case 'VEC4':if(accessor.extras&&accessor.extras.quaternionIfVec4){vertexAttributeArray.push(new Quaternion(dataView[dataViewMethod](pos,littleEndian),dataView[dataViewMethod](pos+componentBytes,littleEndian),dataView[dataViewMethod](pos+componentBytes*2,littleEndian),dataView[dataViewMethod](pos+componentBytes*3,littleEndian)));}else{vertexAttributeArray.push(new Vector4$1(dataView[dataViewMethod](pos,littleEndian),dataView[dataViewMethod](pos+componentBytes,littleEndian),dataView[dataViewMethod](pos+componentBytes*2,littleEndian),dataView[dataViewMethod](pos+componentBytes*3,littleEndian)));}
break;case 'MAT4':let matrixComponents=[];for(let i=0;i<16;i++){matrixComponents[i]=dataView[dataViewMethod](pos+componentBytes*i,littleEndian);}
vertexAttributeArray.push(new Matrix44$1(matrixComponents,true));break;}}}
accessor.extras.vertexAttributeArray=vertexAttributeArray;return vertexAttributeArray;}}
GLBoost$1["ModelConverter"]=ModelConverter;if(typeof phina!=='undefined'){phina.namespace(function(){phina.define('phina.display.GLBoostLayer',{superClass:'phina.display.Layer',scene:null,expression:null,camera:null,light:null,glBoostContext:null,renderer:null,canvas:null,renderChildBySelf:true,init:function(params){this.superInit(params);this.originX=0;this.originY=0;this.canvas=document.createElement("canvas");this.canvas.id='glboost_world';this.canvas.width=params.width;this.canvas.height=params.height;var bodyElm=document.getElementsByTagName("body").item(0);bodyElm.appendChild(this.canvas);this.canvas.style.display="none";this.glBoostContext=new GLBoostMiddleContext(this.canvas);this.renderer=this.glBoostContext.createRenderer({clearColor:{red:1,green:1,blue:1,alpha:1}});this.scene=this.glBoostContext.createScene();this.expression=this.glBoostContext.createExpressionAndRenderPasses(1);this.expression.renderPasses[0].scene=this.scene;this.on('enterframe',function(){if(this.scene){this.renderer.clearCanvas();this.renderer.draw(this.expression);}});this.domElement=this.canvas;}});phina.define("phina.display.OffScreenLayer",{superClass:'phina.display.Layer',renderChildBySelf:true,canvas2d:null,renderer2d:null,width:0,height:0,init:function(params){this.superInit();this.width=params.width;this.height=params.height;if(params.fillStyle instanceof Vector3){this.fillStyle=`rgb(${params.fillStyle.x*255},${params.fillStyle.y*255},${params.fillStyle.z*255},1)`;}else if(params.fillStyle instanceof Vector4$1){this.fillStyle=`rgba(${params.fillStyle.x*255},${params.fillStyle.y*255},${params.fillStyle.z*255},${params.fillStyle.w})`;}else{this.fillStyle=params.fillStyle;}
this.canvas2d=phina.graphics.Canvas();this.canvas2d.setSize(this.width,this.height);this.renderer2d=phina.display.CanvasRenderer(this.canvas2d);},reset:function(){this.canvas2d.clearColor('white',0,0,this.width,this.height);this.canvas2d.clearColor(this.fillStyle,0,0,this.width,this.height);},renderObject:function(obj){var layer=DisplayElement();obj.flare('enterframe');obj.addChildTo(layer);this.renderer2d.renderObject(layer);},getImageDataURL:function(){return this.canvas2d.domElement.toDataURL('image/png');}});});}
class BlinnPhongShaderSource{FSDefine_BlinnPhongShaderSource(in_,f,lights){var shaderText='';shaderText+=`uniform vec3 viewPosition;\n`;shaderText+=`uniform vec4 Kd;\n`;shaderText+=`uniform vec4 Ks;\n`;shaderText+=`uniform float power;\n`;shaderText+='uniform vec4 ambient;\n';var sampler2D=this._sampler2DShadow_func();let lightNumExceptAmbient=lights.filter((light)=>{return!light.isTypeAmbient();}).length;if(lightNumExceptAmbient>0){shaderText+=`uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;shaderText+=`${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;shaderText+=`uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;}
return shaderText;}
FSShade_BlinnPhongShaderSource(f,gl,lights){var shaderText='';shaderText+='  float depthBias = 0.005;\n';shaderText+='  vec4 surfaceColor = rt0;\n';shaderText+='  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';for(let i=0;i<lights.length;i++){let light=lights[i];let isShadowEnabledAsTexture=(light.camera&&light.camera.texture)?true:false;shaderText+=`  {\n`;shaderText+=Shader._generateLightStr(i);shaderText+=Shader._generateShadowingStr(gl,i,isShadowEnabledAsTexture);shaderText+=`    float diffuse = max(dot(lightDirection, normal), 0.0);\n`;shaderText+=`    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n`;shaderText+=`    vec3 viewDirection = normalize(viewPosition_world - v_position_world);\n`;shaderText+=`    vec3 halfVec = normalize(lightDirection + viewDirection);\n`;shaderText+=`    float specular = pow(max(dot(halfVec, normal), 0.0), power);\n`;shaderText+=`    rt0 += spotEffect * vec4(visibilitySpecular, visibilitySpecular, visibilitySpecular, 1.0) * Ks * lightDiffuse[${i}] * vec4(specular, specular, specular, 1.0);\n`;shaderText+=`  }\n`;}
shaderText+='  rt0.xyz += ambient.xyz;\n';return shaderText;}
prepare_BlinnPhongShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];material.setUniform(shaderProgram,'uniform_Kd',this._glContext.getUniformLocation(shaderProgram,'Kd'));material.setUniform(shaderProgram,'uniform_Ks',this._glContext.getUniformLocation(shaderProgram,'Ks'));material.setUniform(shaderProgram,'uniform_power',this._glContext.getUniformLocation(shaderProgram,'power'));material.setUniform(shaderProgram,'uniform_ambient',this._glContext.getUniformLocation(shaderProgram,'ambient'));return vertexAttribsAsResult;}}
class BlinnPhongShader extends DecalShader{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);BlinnPhongShader.mixin(BlinnPhongShaderSource);this._power=64.0;}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);var Kd=material.diffuseColor;var Ks=material.specularColor;let Ka=material.ambientColor;this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_Kd'),Kd.x,Kd.y,Kd.z,Kd.w,true);this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_Ks'),Ks.x,Ks.y,Ks.z,Ks.w,true);this._glContext.uniform1f(material.getUniform(glslProgram,'uniform_power'),this._power,true);let ambient=Vector4$1.multiplyVector(Ka,scene.getAmountOfAmbientLightsIntensity());this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_ambient'),ambient.x,ambient.y,ambient.z,ambient.w,true);}
set Kd(value){this._Kd=value;}
get Kd(){return this._Kd;}
set Ks(value){this._Ks=value;}
get Ks(){return this._Ks;}
set power(value){this._power=value;}
get power(){return this._power;}}
GLBoost['BlinnPhongShader']=BlinnPhongShader;class HalfLambertShaderSource{FSDefine_HalfLambertShaderSource(in_,f,lights){var sampler2D=this._sampler2DShadow_func();var shaderText='';shaderText+=`uniform vec4 Kd;\n`;shaderText+='uniform vec4 ambient;\n';let lightNumExceptAmbient=lights.filter((light)=>{return!light.isTypeAmbient();}).length;if(lightNumExceptAmbient>0){shaderText+=`uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;shaderText+=`${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;shaderText+=`uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;}
return shaderText;}
FSShade_HalfLambertShaderSource(f,gl,lights){var shaderText='';shaderText+='  vec4 surfaceColor = rt0;\n';shaderText+='  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';for(let i=0;i<lights.length;i++){let light=lights[i];let isShadowEnabledAsTexture=(light.camera&&light.camera.texture)?true:false;shaderText+='  {\n';shaderText+=Shader._generateLightStr(i);shaderText+=Shader._generateShadowingStr(gl,i,isShadowEnabledAsTexture);shaderText+='    float diffuse = max(dot(lightDirection, normal), 0.0)*0.5+0.5;\n';shaderText+='    diffuse *= diffuse;\n';shaderText+=`    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuse, diffuse, diffuse, 1.0) * surfaceColor;\n`;shaderText+='  }\n';}
shaderText+='  rt0.xyz += ambient.xyz;\n';return shaderText;}
prepare_HalfLambertShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];material.setUniform(shaderProgram,'uniform_Kd',this._glContext.getUniformLocation(shaderProgram,'Kd'));material.setUniform(shaderProgram,'uniform_ambient',this._glContext.getUniformLocation(shaderProgram,'ambient'));return vertexAttribsAsResult;}}
class HalfLambertShader extends DecalShader{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);HalfLambertShader.mixin(HalfLambertShaderSource);}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);let Kd=material.diffuseColor;let Ka=material.ambientColor;this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_Kd'),Kd.x,Kd.y,Kd.z,Kd.w,true);let ambient=Vector4$1.multiplyVector(Ka,scene.getAmountOfAmbientLightsIntensity());this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_ambient'),ambient.x,ambient.y,ambient.z,ambient.w,true);}}
GLBoost['HalfLambertShader']=HalfLambertShader;class HalfLambertAndWrapLightingShaderSource{FSDefine_HalfLambertAndWrapLightingShaderSource(in_,f,lights){var sampler2D=this._sampler2DShadow_func();var shaderText='';shaderText+=`uniform vec4 Kd;\n`;shaderText+=`uniform vec3 wrap;\n`;shaderText+='uniform vec4 ambient;\n';let lightNumExceptAmbient=lights.filter((light)=>{return!light.isTypeAmbient();}).length;if(lightNumExceptAmbient>0){shaderText+=`uniform highp ${sampler2D} uDepthTexture[${lightNumExceptAmbient}];\n`;shaderText+=`${in_} vec4 v_shadowCoord[${lightNumExceptAmbient}];\n`;shaderText+=`uniform int isShadowCasting[${lightNumExceptAmbient}];\n`;}
return shaderText;}
FSShade_HalfLambertAndWrapLightingShaderSource(f,gl,lights){var shaderText='';shaderText+='  vec4 surfaceColor = rt0;\n';shaderText+='  rt0 = vec4(0.0, 0.0, 0.0, 0.0);\n';for(let i=0;i<lights.length;i++){let light=lights[i];let isShadowEnabledAsTexture=(light.camera&&light.camera.texture)?true:false;shaderText+='  {\n';shaderText+=Shader._generateLightStr(i);shaderText+=Shader._generateShadowingStr(gl,i,isShadowEnabledAsTexture);shaderText+='    float diffuse = max(dot(lightDirection, normal), 0.0)*0.5+0.5;\n';shaderText+='    diffuse *= diffuse;\n';shaderText+='    vec3 diffuseVec = vec3(diffuse, diffuse, diffuse);\n';shaderText+='    diffuseVec = (diffuseVec+wrap) / (1.0 + wrap);\n';shaderText+=`    rt0 += spotEffect * vec4(visibility, visibility, visibility, 1.0) * Kd * lightDiffuse[${i}] * vec4(diffuseVec, 1.0) * surfaceColor;\n`;shaderText+='  }\n';}
shaderText+='  rt0.xyz += ambient.xyz;\n';return shaderText;}
prepare_HalfLambertAndWrapLightingShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];material.setUniform(shaderProgram,'uniform_Kd',this._glContext.getUniformLocation(shaderProgram,'Kd'));material.setUniform(shaderProgram,'uniform_wrap',this._glContext.getUniformLocation(shaderProgram,'wrap'));material.setUniform(shaderProgram,'uniform_ambient',this._glContext.getUniformLocation(shaderProgram,'ambient'));return vertexAttribsAsResult;}}
class HalfLambertAndWrapLightingShader extends DecalShader{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);HalfLambertAndWrapLightingShader.mixin(HalfLambertAndWrapLightingShaderSource);this._wrap=new Vector3(0.6,0.3,0.0);}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);var Kd=material.diffuseColor;let Ka=material.ambientColor;this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_Kd'),Kd.x,Kd.y,Kd.z,Kd.w,true);this._glContext.uniform3f(material.getUniform(glslProgram,'uniform_wrap'),this._wrap.x,this._wrap.y,this._wrap.z,true);let ambient=Vector4$1.multiplyVector(Ka,scene.getAmountOfAmbientLightsIntensity());this._glContext.uniform4f(material.getUniform(glslProgram,'uniform_ambient'),ambient.x,ambient.y,ambient.z,ambient.w,true);}
set wrap(value){this._wrap=value;}
get wrap(){return this._wrap;}}
GLBoost['HalfLambertAndWrapLightingShader']=HalfLambertAndWrapLightingShader;class DepthDisplayShaderSource{VSTransform_DepthDisplayShaderSource(existCamera_f,f){let shaderText='';if(Shader._exist(f,GLBoost$1.TEXCOORD)){shaderText+='  texcoord.y = 1.0 - texcoord.y;\n';}
return shaderText;}
FSShade_DepthDisplayShaderSource(f,gl,lights){var shaderText='';shaderText+='  vec4 surfaceColor = rt0;\n';shaderText+='  rt0 = vec4(surfaceColor.r, surfaceColor.r, surfaceColor.r, 1.0);\n';return shaderText;}}
class DepthDisplayShader extends DecalShader{constructor(glBoostContext,basicShader){super(glBoostContext,basicShader);DepthDisplayShader.mixin(DepthDisplayShaderSource);}}
GLBoost$1['DepthDisplayShader']=DepthDisplayShader;class PassThroughShaderSource{VSDefine_PassThroughShaderSource(in_,out_,f){var shaderText='';if(Shader._exist(f,GLBoost.COLOR)){shaderText+=`${in_} vec4 aVertex_color;\n`;shaderText+=`${out_} vec4 color;\n`;}
if(Shader._exist(f,GLBoost.TEXCOORD)){shaderText+=`${in_} vec2 aVertex_texcoord;\n`;shaderText+=`${out_} vec2 texcoord;\n`;}
shaderText+=`${in_} vec3 aVertex_barycentricCoord;\n`;shaderText+=`${out_} vec3 barycentricCoord;\n`;return shaderText;}
VSTransform_PassThroughShaderSource(existCamera_f,f){var shaderText='';if(Shader._exist(f,GLBoost.COLOR)){shaderText+='  color = aVertex_color;\n';}
if(Shader._exist(f,GLBoost.TEXCOORD)){shaderText+='  texcoord = aVertex_texcoord;\n';}
if(existCamera_f){shaderText+='  gl_Position = projectionMatrix * viewMatrix * position_world;\n';}else{shaderText+='  gl_Position = position_world;\n';}
shaderText+='  barycentricCoord = aVertex_barycentricCoord;\n';return shaderText;}
VSTransform_FragmentSimpleShaderSource(existCamera_f,f){var shaderText='';return shaderText;}
FSDefine_PassThroughShaderSource(in_,f){var shaderText='';if(Shader._exist(f,GLBoost.COLOR)){shaderText+=`${in_} vec4 color;\n`;}
if(Shader._exist(f,GLBoost.TEXCOORD)){shaderText+=`${in_} vec2 texcoord;\n\n`;}
return shaderText;}
FSShade_PassThroughShaderSource(f,gl){var shaderText='    rt0 = vec4(1.0, 0.0, 0.0, 1.0);\n';return shaderText;}
prepare_PassThroughShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];return vertexAttribsAsResult;}}
class PassThroughShader extends Shader{constructor(glBoostContext,basicShader=VertexWorldShaderSource){super(glBoostContext);PassThroughShader.mixin(basicShader);PassThroughShader.mixin(PassThroughShaderSource);}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);}}
GLBoost['PassThroughShader']=PassThroughShader;class EnvironmentMapShaderSource{VSDefine_EnvironmentMapShaderSource(in_,out_,f){let shaderText=`${out_} vec3 vPosition_world;\n`;shaderText+='uniform mat4 worldMatrix;\n';shaderText+='uniform mat4 viewMatrix;\n';shaderText+='uniform mat4 projectionMatrix;\n';return shaderText;}
VSTransform_EnvironmentMapShaderSource(existCamera_f,f){var shaderText='';if(existCamera_f){shaderText+='  gl_Position = projectionMatrix * viewMatrix * worldMatrix * position_local;\n';}else{shaderText+='  gl_Position = worldMatrix * position_local;\n';}
shaderText+='  vPosition_world = normalize(worldMatrix * position_local).xyz;\n';return shaderText;}
FSDefine_EnvironmentMapShaderSource(in_,f){let shaderText=`${in_} vec3 vPosition_world;\n`;shaderText+=`uniform samplerCube uEnvTexture;\n`;return shaderText;}
FSShade_EnvironmentMapShaderSource(f,gl){let shaderText="";shaderText+=`rt0 = textureCube(uEnvTexture, normalize(vPosition_world));\n`;return shaderText;}
prepare_EnvironmentMapShaderSource(gl,shaderProgram,expression,vertexAttribs,existCamera_f,lights,material,extraData){var vertexAttribsAsResult=[];vertexAttribs.forEach((attribName)=>{if(attribName==='position'||attribName==='normal'||attribName==='tangent'){shaderProgram['vertexAttribute_'+attribName]=gl.getAttribLocation(shaderProgram,'aVertex_'+attribName);if(shaderProgram['vertexAttribute_'+attribName]!==-1){gl.enableVertexAttribArray(shaderProgram['vertexAttribute_'+attribName]);vertexAttribsAsResult.push(attribName);}}});material.setUniform(shaderProgram,'uniform_worldMatrix',this._glContext.getUniformLocation(shaderProgram,'worldMatrix'));material._semanticsDic['WORLD']='worldMatrix';if(existCamera_f){material.setUniform(shaderProgram,'uniform_viewMatrix',this._glContext.getUniformLocation(shaderProgram,'viewMatrix'));material._semanticsDic['VIEW']='viewMatrix';material.setUniform(shaderProgram,'uniform_projectionMatrix',this._glContext.getUniformLocation(shaderProgram,'projectionMatrix'));material._semanticsDic['PROJECTION']='projectionMatrix';}
material.registerTextureUnitToUniform(GLBoost$1.TEXTURE_PURPOSE_ENV_CUBE,shaderProgram,'uEnvTexture');return vertexAttribsAsResult;}}
class EnvironmentMapShader extends Shader{constructor(glBoostContext){super(glBoostContext);EnvironmentMapShader.mixin(EnvironmentMapShaderSource);}
setUniforms(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniforms(gl,glslProgram,scene,material,camera,mesh,lights);material.updateTextureInfo(GLBoost$1.TEXTURE_PURPOSE_ENV_CUBE,'uEnvTexture');}
setUniformsAsTearDown(gl,glslProgram,scene,material,camera,mesh,lights){super.setUniformsAsTearDown(gl,glslProgram,scene,material,camera,mesh,lights);}}
GLBoost$1['EnvironmentMapShader']=EnvironmentMapShader;class JointGizmoUpdater{static update(){}}
if(GLBoost['JointGizmoUpdater']===void 0){GLBoost['JointGizmoUpdater']=JointGizmoUpdater;}
let singleton$9=Symbol();let singletonEnforcer$6=Symbol();class GLBoostGLTFLoaderExtension{constructor(enforcer){if(enforcer!==singletonEnforcer$6){throw new Error("This is a Singleton class. get the instance using 'getInstance' static method.");}}
static getInstance(){if(!this[singleton$9]){this[singleton$9]=new GLBoostGLTFLoaderExtension(singletonEnforcer$6);}
return this[singleton$9];}
setUVTransformToTexture(texture,samplerJson){let uvTransform=new Vector4$1(1,1,0,0);if(samplerJson.extras&&samplerJson.extras.scale){let scale=samplerJson.extras.scale;uvTransform.x=scale[0];uvTransform.y=scale[1];}
if(samplerJson.extras&&samplerJson.extras.translation){let translation=samplerJson.extras.translation;uvTransform.z=translation[0];uvTransform.w=translation[1];}
texture.uvTransform=uvTransform;}
setAssetPropertiesToRootGroup(rootGroup,asset){if(asset&&asset.animationFps){rootGroup.animationFps=asset.animationFps;}
if(asset&&asset.version){rootGroup.version=asset.version;}
if(asset&&asset.LastSaved_ApplicationVendor){rootGroup.LastSaved_ApplicationVendor=asset.LastSaved_ApplicationVendor;}
if(asset&&asset.LastSaved_ApplicationName){rootGroup.LastSaved_ApplicationName=asset.LastSaved_ApplicationName;}
if(asset&&asset.LastSaved_ApplicationVersion){rootGroup.LastSaved_ApplicationVersion=asset.LastSaved_ApplicationVersion;}
if(asset&&asset.extras&&asset.extras.animation_tracks){rootGroup.animationTracks=asset.extras.animation_tracks;}
if(asset&&asset.extras){const transparentMeshesAsManualOrder=asset.extras.transparent_meshes_draw_order!=null?asset.extras.transparent_meshes_draw_order:[];let meshParents=rootGroup.searchElementsByType(M_Group);const transparentMeshes=[];for(let name of transparentMeshesAsManualOrder){for(let parent of meshParents){if(parent.userFlavorName===name){const mesh=parent.getChildren()[0];if(mesh!=null&&mesh.isTransparent){transparentMeshes.push(mesh);}
break;}}}
rootGroup.transparentMeshesAsManualOrder=transparentMeshes;}}
loadExtensionInfoAndSetToRootGroup(rootGroup,json,glBoostContext){rootGroup["extensions"]=json.extensions;if(json.extensions&&json.extensions.GLBoost){const ext=json.extensions.GLBoost;if(ext.animation){if(ext.animation.fps!=null){rootGroup.animationFps=ext.animation.fps;}
if(ext.animation.tracks!=null){rootGroup.animationTracks=ext.animation.tracks;}}
const transparentMeshesDrawOrder=ext.transparentMeshesDrawOrder;if(transparentMeshesDrawOrder){let meshParents=rootGroup.searchElementsByType(M_Group);const transparentMeshes=[];for(let name of transparentMeshesDrawOrder){for(let parent of meshParents){if(parent.userFlavorName===name){const mesh=parent.getChildren()[0];if(mesh!=null&&mesh.isTransparent){transparentMeshes.push(mesh);}
break;}}}
rootGroup.transparentMeshesAsManualOrder=transparentMeshes;}}
if(json.extensions&&json.extensions.Effekseer){const ext=json.extensions.Effekseer;let effekseerBasePath=json.asset.extras.basePath;if(effekseerBasePath==null){effekseerBasePath=ext.basePath;}
for(let effect of ext.effects){const group=rootGroup.searchElement(effect.nodeName,{type:GLBoost$1.QUERY_TYPE_USER_FLAVOR_NAME,format:GLBoost$1.QUERY_FORMAT_STRING_PERFECT_MATCHING});const effekseerElm=glBoostContext.createEffekseerElement();const promise=effekseerElm.load(effekseerBasePath+effect.efkName+".efk",true,true);promise.then(effect=>{group.addChild(effect);});}}}}
GLBoost$1["GLBoostGLTFLoaderExtension"]=GLBoostGLTFLoaderExtension;class AnimationPlayer{constructor(){}
init(group){this.__FpsForPlaying=(group.animationFps!==void 0)?group.animationFps:60;this.__animationStartTime=group.getStartAnimationInputValue('time');this.__animationEndTime=group.getEndAnimationInputValue('time');this.__animationStartRange=this.__animationStartTime;this.__animationEndRange=this.__animationEndTime;this.__animationCurrentTime=this.__animationStartTime;this.__animationLength=group.getEndAnimationInputValue('time');this.__animationLastTime=0;this.__currentMillisecondAtStart=0;this.__isPlaying=false;this.__currentMotion="All";this.__animationMotions=[];this.__setupMultiMotions(group);}
play(){this.__isPlaying=true;this.__currentMillisecondAtStart=Date.now();}
calcAnimationTime(speedRatio=1){if(!this.__isPlaying){this.__currentMillisecondAtStart=Date.now();return this.__animationCurrentTime;}
let currentMillisecondFromStart=Date.now();this.__animationCurrentTime=(currentMillisecondFromStart-this.__currentMillisecondAtStart)/1000+this.__animationLastTime;let localAnimationCurrentTime=this.__animationCurrentTime*speedRatio;if(localAnimationCurrentTime>this.__animationEndRange){this.moveToTheTime(this.__animationStartRange);}else if(localAnimationCurrentTime<this.__animationStartRange){this.moveToTheTime(this.__animationStartRange);}
if(this.__animationStartRange>this.__animationLength){this.moveToTheTime(this.__animationStartRange);}
this.__animationCurrentTime=localAnimationCurrentTime/speedRatio;return localAnimationCurrentTime;}
__setupMultiMotions(group){const json={"name":"All","start":group.getStartAnimationInputValue('time')*this.__FpsForPlaying,"end":group.getEndAnimationInputValue('time')*this.__FpsForPlaying};this.animationMotions.push(json);if(!group.animationTracks){return;}
if(group.animationTracks){Array.prototype.push.apply(this.animationMotions,group.animationTracks);}
this.__currentMotion=group.animationTracks[0].name;}
moveToTheTime(time){this.__currentMillisecondAtStart=Date.now();this.__animationCurrentTime=time;this.__animationLastTime=this.__animationCurrentTime;}
changeMotion(motionName){for(let motion of this.__animationMotions){if(motion.name===motionName){this.changeRange(motion.start/this.__FpsForPlaying,motion.end/this.__FpsForPlaying);this.moveToTheTime(motion.start/this.__FpsForPlaying);}}}
changeRange(start,end){this.__animationStartRange=start;this.__animationEndRange=end;const time=this.__animationCurrentTime;this.moveToTheTime(time);};get animationMotions(){return this.__animationMotions;}
set animationMotions(motions){this.__animationMotions=motions;}}
GLBoost$1['AnimationPlayer']=AnimationPlayer;async function formatDetector(uri,files){if(files){for(let fileName in files){const splitted=fileName.split('.');const fileExtension=splitted[splitted.length-1];if(fileExtension==='gltf'||fileExtension==='glb'){return new Promise((resolve,reject)=>{checkArrayBufferOfGltf(files[fileName],resolve);});}}}
const splitted=uri.split('.');const fileExtension=splitted[splitted.length-1];if(fileExtension==='efk'){return new Promise((resolve,reject)=>{resolve('Effekseer');});}
return DataUtil.loadResourceAsync(uri,true,(resolve,response)=>{const arrayBuffer=response;checkArrayBufferOfGltf(arrayBuffer,resolve);});}
function checkArrayBufferOfGltf(arrayBuffer,resolve){const isLittleEndian=true;const dataView=new DataView(arrayBuffer,0,20);const magic=dataView.getUint32(0,isLittleEndian);if(magic!==0x46546C67){let gotText=DataUtil.arrayBufferToString(arrayBuffer);let gltfJson=JSON.parse(gotText);let glTFVer=checkGLTFVersion(gltfJson);resolve("glTF"+glTFVer);return;}
let glTFVer=dataView.getUint32(4,isLittleEndian);resolve("glTF"+glTFVer);}
function checkGLTFVersion(gltfJson){let glTFVer=1.0;if(gltfJson.asset&&gltfJson.asset.version){glTFVer=parseFloat(gltfJson.asset.version);}
return glTFVer;}
GLBoost$1["formatDetector"]=formatDetector;})));(0,eval)('this').GLBoost.VERSION='version: 0.0.4-409-g7c04-mod branch: develop';