function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Command robot */
	this.urlHashMap["robot_three:65"] = "robot_three.h:190";
	/* <Root>/Compute robot velocity */
	this.urlHashMap["robot_three:29"] = "robot_three.h:191";
	/* <Root>/camera */
	this.urlHashMap["robot_three:1"] = "robot_three.h:184,192";
	/* <Root>/cyc_pursuit2 */
	this.urlHashMap["robot_three:28"] = "robot_three.cpp:198,207&robot_three.h:193";
	/* <S1>/Command Velocity Publisher */
	this.urlHashMap["robot_three:69"] = "robot_three.cpp:186,288,358,372,417,428&robot_three.h:194";
	/* <S1>/Linear Velocity (Slider) */
	this.urlHashMap["robot_three:76"] = "robot_three.h:195";
	/* <S2>/Proportional Controller */
	this.urlHashMap["robot_three:36"] = "robot_three.cpp:189,287&robot_three.h:198";
	/* <S3>/Conversion1 */
	this.urlHashMap["robot_three:4"] = "robot_three.cpp:62,290&robot_three.h:46,48,62,200&robot_three_types.h:176";
	/* <S3>/Conversion2 */
	this.urlHashMap["robot_three:5"] = "robot_three.cpp:63,175&robot_three.h:61,201";
	/* <S3>/Real-Imag to
Complex */
	this.urlHashMap["robot_three:8"] = "robot_three.h:165";
	/* <S3>/Real-Imag to
Complex1 */
	this.urlHashMap["robot_three:9"] = "robot_three.h:166";
	/* <S3>/Subscribe1 */
	this.urlHashMap["robot_three:10"] = "robot_three.cpp:157,173,344,356,382,388,406,415&robot_three.h:202";
	/* <S3>/Subscribe2 */
	this.urlHashMap["robot_three:11"] = "robot_three.cpp:140,155,192,286,330,342,374,380,395,404&robot_three.h:203";
	/* <S3>/To Workspace */
	this.urlHashMap["robot_three:12"] = "robot_three.h:167";
	/* <S3>/To Workspace1 */
	this.urlHashMap["robot_three:13"] = "robot_three.h:168";
	/* <S3>/To Workspace3 */
	this.urlHashMap["robot_three:14"] = "robot_three.h:169";
	/* <S3>/To Workspace4 */
	this.urlHashMap["robot_three:15"] = "robot_three.h:170";
	/* <S3>/To Workspace5 */
	this.urlHashMap["robot_three:16"] = "robot_three.h:171";
	/* <S3>/To Workspace6 */
	this.urlHashMap["robot_three:17"] = "robot_three.h:172";
	/* <S4>:1 */
	this.urlHashMap["robot_three:28:1"] = "robot_three.cpp:176";
	/* <S4>:1:4 */
	this.urlHashMap["robot_three:28:1:4"] = "robot_three.cpp:177";
	/* <S4>:1:5 */
	this.urlHashMap["robot_three:28:1:5"] = "robot_three.cpp:178";
	/* <S4>:1:6 */
	this.urlHashMap["robot_three:28:1:6"] = "robot_three.cpp:179";
	/* <S4>:1:7 */
	this.urlHashMap["robot_three:28:1:7"] = "robot_three.cpp:180";
	/* <S5>/Enable */
	this.urlHashMap["robot_three:72"] = "robot_three.cpp:187";
	/* <S5>/Blank Message */
	this.urlHashMap["robot_three:73"] = "robot_three.h:196";
	/* <S5>/Bus
Assignment1 */
	this.urlHashMap["robot_three:74"] = "robot_three.cpp:268&robot_three.h:56";
	/* <S5>/Publish2 */
	this.urlHashMap["robot_three:75"] = "robot_three.cpp:277,283,359,371,418,427&robot_three.h:197";
	/* <S6>/Slider
Gain */
	this.urlHashMap["robot_three:76:31"] = "robot_three.cpp:270,439&robot_three.h:81&rtmodel.h:43";
	/* <S7>/Constant */
	this.urlHashMap["robot_three:73:33"] = "robot_three.cpp:269,815&robot_three.h:96&rtmodel.h:415";
	/* <S8>/SinkBlock */
	this.urlHashMap["robot_three:75:31"] = "robot_three.cpp:278,279,360,370,419,420,426&robot_three.h:69,70";
	/* <S9>/Enable */
	this.urlHashMap["robot_three:42"] = "robot_three.cpp:190";
	/* <S9>/Bound [-pi,pi] */
	this.urlHashMap["robot_three:43"] = "robot_three.cpp:230,247";
	/* <S9>/Desired Yaw */
	this.urlHashMap["robot_three:44"] = "robot_three.cpp:239";
	/* <S9>/Distance */
	this.urlHashMap["robot_three:45"] = "robot_three.cpp:254,263";
	/* <S9>/Distance1 */
	this.urlHashMap["robot_three:46"] = "robot_three.cpp:216,225";
	/* <S9>/Distance2 */
	this.urlHashMap["robot_three:47"] = "robot_three.cpp:251";
	/* <S9>/Distance3 */
	this.urlHashMap["robot_three:48"] = "robot_three.cpp:246";
	/* <S9>/Stop1 */
	this.urlHashMap["robot_three:51"] = "robot_three.cpp:229,824&robot_three.h:105&rtmodel.h:424";
	/* <S9>/Sum */
	this.urlHashMap["robot_three:52"] = "robot_three.cpp:206&robot_three.h:58";
	/* <S9>/Sum1 */
	this.urlHashMap["robot_three:53"] = "robot_three.cpp:197&robot_three.h:57";
	/* <S9>/Sum3 */
	this.urlHashMap["robot_three:54"] = "robot_three.cpp:238&robot_three.h:59";
	/* <S9>/Switch1 */
	this.urlHashMap["robot_three:55"] = "robot_three.cpp:227,266";
	/* <S9>/Switch2 */
	this.urlHashMap["robot_three:56"] = "robot_three.cpp:232";
	/* <S9>/speed Threshold2 */
	this.urlHashMap["robot_three:57"] = "robot_three.h:199";
	/* <S9>/Linear Velocity (v) */
	this.urlHashMap["robot_three:58"] = "robot_three.cpp:818&robot_three.h:99&rtmodel.h:418";
	/* <S9>/Angular Velocity (w) */
	this.urlHashMap["robot_three:59"] = "robot_three.cpp:821&robot_three.h:102&rtmodel.h:421";
	/* <S10>/Compare */
	this.urlHashMap["robot_three:57:2"] = "robot_three.cpp:231";
	/* <S10>/Constant */
	this.urlHashMap["robot_three:57:3"] = "robot_three.cpp:228,436&robot_three.h:78&rtmodel.h:40";
	/* <S11>:1 */
	this.urlHashMap["robot_three:4:1"] = "robot_three.cpp:74";
	/* <S11>:1:5 */
	this.urlHashMap["robot_three:4:1:5"] = "robot_three.cpp:75";
	/* <S11>:1:6 */
	this.urlHashMap["robot_three:4:1:6"] = "robot_three.cpp:83";
	/* <S12>:1 */
	this.urlHashMap["robot_three:5:1"] = "msg=rtwMsg_reusableFunction&block=robot_three:5:1";
	/* <S13>/Constant */
	this.urlHashMap["robot_three:10:51"] = "robot_three.cpp:619&robot_three.h:87&rtmodel.h:221";
	/* <S13>/Enabled
Subsystem */
	this.urlHashMap["robot_three:10:52"] = "robot_three.cpp:164,172,383,387&robot_three.h:204";
	/* <S13>/SourceBlock */
	this.urlHashMap["robot_three:10:58"] = "robot_three.cpp:158,160,171,345,355,407,408,414&robot_three.h:68,72";
	/* <S14>/Constant */
	this.urlHashMap["robot_three:11:51"] = "robot_three.cpp:799&robot_three.h:93&rtmodel.h:399";
	/* <S14>/Enabled
Subsystem */
	this.urlHashMap["robot_three:11:52"] = "robot_three.cpp:147,154,375,379&robot_three.h:205";
	/* <S14>/SourceBlock */
	this.urlHashMap["robot_three:11:58"] = "robot_three.cpp:141,143,193,194,331,341,396,397,403&robot_three.h:67,71";
	/* <S15>/In1 */
	this.urlHashMap["robot_three:10:53"] = "robot_three.cpp:159&robot_three.h:54";
	/* <S15>/Enable */
	this.urlHashMap["robot_three:10:54"] = "robot_three.cpp:165";
	/* <S15>/Out1 */
	this.urlHashMap["robot_three:10:55"] = "robot_three.cpp:384,529&robot_three.h:84&rtmodel.h:132";
	/* <S16>/In1 */
	this.urlHashMap["robot_three:11:53"] = "robot_three.cpp:142&robot_three.h:53";
	/* <S16>/Enable */
	this.urlHashMap["robot_three:11:54"] = "robot_three.cpp:148";
	/* <S16>/Out1 */
	this.urlHashMap["robot_three:11:55"] = "robot_three.cpp:376,709&robot_three.h:90&rtmodel.h:310";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "robot_three"};
	this.sidHashMap["robot_three"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "robot_three:65"};
	this.sidHashMap["robot_three:65"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "robot_three:29"};
	this.sidHashMap["robot_three:29"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "robot_three:1"};
	this.sidHashMap["robot_three:1"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "robot_three:28"};
	this.sidHashMap["robot_three:28"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "robot_three:69"};
	this.sidHashMap["robot_three:69"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "robot_three:76"};
	this.sidHashMap["robot_three:76"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "robot_three:73"};
	this.sidHashMap["robot_three:73"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "robot_three:75"};
	this.sidHashMap["robot_three:75"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "robot_three:36"};
	this.sidHashMap["robot_three:36"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "robot_three:57"};
	this.sidHashMap["robot_three:57"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "robot_three:4"};
	this.sidHashMap["robot_three:4"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "robot_three:5"};
	this.sidHashMap["robot_three:5"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<S13>"] = {sid: "robot_three:10"};
	this.sidHashMap["robot_three:10"] = {rtwname: "<S13>"};
	this.rtwnameHashMap["<S14>"] = {sid: "robot_three:11"};
	this.sidHashMap["robot_three:11"] = {rtwname: "<S14>"};
	this.rtwnameHashMap["<S15>"] = {sid: "robot_three:10:52"};
	this.sidHashMap["robot_three:10:52"] = {rtwname: "<S15>"};
	this.rtwnameHashMap["<S16>"] = {sid: "robot_three:11:52"};
	this.sidHashMap["robot_three:11:52"] = {rtwname: "<S16>"};
	this.rtwnameHashMap["<Root>/Command robot"] = {sid: "robot_three:65"};
	this.sidHashMap["robot_three:65"] = {rtwname: "<Root>/Command robot"};
	this.rtwnameHashMap["<Root>/Compute robot velocity"] = {sid: "robot_three:29"};
	this.sidHashMap["robot_three:29"] = {rtwname: "<Root>/Compute robot velocity"};
	this.rtwnameHashMap["<Root>/camera"] = {sid: "robot_three:1"};
	this.sidHashMap["robot_three:1"] = {rtwname: "<Root>/camera"};
	this.rtwnameHashMap["<Root>/cyc_pursuit2"] = {sid: "robot_three:28"};
	this.sidHashMap["robot_three:28"] = {rtwname: "<Root>/cyc_pursuit2"};
	this.rtwnameHashMap["<S1>/robot_3_velocity"] = {sid: "robot_three:66"};
	this.sidHashMap["robot_three:66"] = {rtwname: "<S1>/robot_3_velocity"};
	this.rtwnameHashMap["<S1>/robot_3_angle"] = {sid: "robot_three:67"};
	this.sidHashMap["robot_three:67"] = {rtwname: "<S1>/robot_3_angle"};
	this.rtwnameHashMap["<S1>/enbale_robot_3"] = {sid: "robot_three:68"};
	this.sidHashMap["robot_three:68"] = {rtwname: "<S1>/enbale_robot_3"};
	this.rtwnameHashMap["<S1>/Command Velocity Publisher"] = {sid: "robot_three:69"};
	this.sidHashMap["robot_three:69"] = {rtwname: "<S1>/Command Velocity Publisher"};
	this.rtwnameHashMap["<S1>/Linear Velocity (Slider)"] = {sid: "robot_three:76"};
	this.sidHashMap["robot_three:76"] = {rtwname: "<S1>/Linear Velocity (Slider)"};
	this.rtwnameHashMap["<S2>/robot_3_x_des"] = {sid: "robot_three:30"};
	this.sidHashMap["robot_three:30"] = {rtwname: "<S2>/robot_3_x_des"};
	this.rtwnameHashMap["<S2>/robot_3_y_des"] = {sid: "robot_three:31"};
	this.sidHashMap["robot_three:31"] = {rtwname: "<S2>/robot_3_y_des"};
	this.rtwnameHashMap["<S2>/robot_3_x_pos"] = {sid: "robot_three:32"};
	this.sidHashMap["robot_three:32"] = {rtwname: "<S2>/robot_3_x_pos"};
	this.rtwnameHashMap["<S2>/robot_3_y_pos"] = {sid: "robot_three:33"};
	this.sidHashMap["robot_three:33"] = {rtwname: "<S2>/robot_3_y_pos"};
	this.rtwnameHashMap["<S2>/robot_3_orient"] = {sid: "robot_three:34"};
	this.sidHashMap["robot_three:34"] = {rtwname: "<S2>/robot_3_orient"};
	this.rtwnameHashMap["<S2>/Enable"] = {sid: "robot_three:35"};
	this.sidHashMap["robot_three:35"] = {rtwname: "<S2>/Enable"};
	this.rtwnameHashMap["<S2>/Proportional Controller"] = {sid: "robot_three:36"};
	this.sidHashMap["robot_three:36"] = {rtwname: "<S2>/Proportional Controller"};
	this.rtwnameHashMap["<S2>/robot_3_velocity"] = {sid: "robot_three:60"};
	this.sidHashMap["robot_three:60"] = {rtwname: "<S2>/robot_3_velocity"};
	this.rtwnameHashMap["<S2>/robot_3_angle"] = {sid: "robot_three:61"};
	this.sidHashMap["robot_three:61"] = {rtwname: "<S2>/robot_3_angle"};
	this.rtwnameHashMap["<S2>/enable_robot_3"] = {sid: "robot_three:62"};
	this.sidHashMap["robot_three:62"] = {rtwname: "<S2>/enable_robot_3"};
	this.rtwnameHashMap["<S3>/Bus Selector1"] = {sid: "robot_three:2"};
	this.sidHashMap["robot_three:2"] = {rtwname: "<S3>/Bus Selector1"};
	this.rtwnameHashMap["<S3>/Bus Selector2"] = {sid: "robot_three:3"};
	this.sidHashMap["robot_three:3"] = {rtwname: "<S3>/Bus Selector2"};
	this.rtwnameHashMap["<S3>/Conversion1"] = {sid: "robot_three:4"};
	this.sidHashMap["robot_three:4"] = {rtwname: "<S3>/Conversion1"};
	this.rtwnameHashMap["<S3>/Conversion2"] = {sid: "robot_three:5"};
	this.sidHashMap["robot_three:5"] = {rtwname: "<S3>/Conversion2"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex"] = {sid: "robot_three:8"};
	this.sidHashMap["robot_three:8"] = {rtwname: "<S3>/Real-Imag to Complex"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex1"] = {sid: "robot_three:9"};
	this.sidHashMap["robot_three:9"] = {rtwname: "<S3>/Real-Imag to Complex1"};
	this.rtwnameHashMap["<S3>/Subscribe1"] = {sid: "robot_three:10"};
	this.sidHashMap["robot_three:10"] = {rtwname: "<S3>/Subscribe1"};
	this.rtwnameHashMap["<S3>/Subscribe2"] = {sid: "robot_three:11"};
	this.sidHashMap["robot_three:11"] = {rtwname: "<S3>/Subscribe2"};
	this.rtwnameHashMap["<S3>/Terminator"] = {sid: "robot_three:63"};
	this.sidHashMap["robot_three:63"] = {rtwname: "<S3>/Terminator"};
	this.rtwnameHashMap["<S3>/Terminator1"] = {sid: "robot_three:64"};
	this.sidHashMap["robot_three:64"] = {rtwname: "<S3>/Terminator1"};
	this.rtwnameHashMap["<S3>/To Workspace"] = {sid: "robot_three:12"};
	this.sidHashMap["robot_three:12"] = {rtwname: "<S3>/To Workspace"};
	this.rtwnameHashMap["<S3>/To Workspace1"] = {sid: "robot_three:13"};
	this.sidHashMap["robot_three:13"] = {rtwname: "<S3>/To Workspace1"};
	this.rtwnameHashMap["<S3>/To Workspace3"] = {sid: "robot_three:14"};
	this.sidHashMap["robot_three:14"] = {rtwname: "<S3>/To Workspace3"};
	this.rtwnameHashMap["<S3>/To Workspace4"] = {sid: "robot_three:15"};
	this.sidHashMap["robot_three:15"] = {rtwname: "<S3>/To Workspace4"};
	this.rtwnameHashMap["<S3>/To Workspace5"] = {sid: "robot_three:16"};
	this.sidHashMap["robot_three:16"] = {rtwname: "<S3>/To Workspace5"};
	this.rtwnameHashMap["<S3>/To Workspace6"] = {sid: "robot_three:17"};
	this.sidHashMap["robot_three:17"] = {rtwname: "<S3>/To Workspace6"};
	this.rtwnameHashMap["<S3>/robot_3_x_pos"] = {sid: "robot_three:18"};
	this.sidHashMap["robot_three:18"] = {rtwname: "<S3>/robot_3_x_pos"};
	this.rtwnameHashMap["<S3>/robot_3_y_pos"] = {sid: "robot_three:19"};
	this.sidHashMap["robot_three:19"] = {rtwname: "<S3>/robot_3_y_pos"};
	this.rtwnameHashMap["<S3>/robot_8_x_pos"] = {sid: "robot_three:26"};
	this.sidHashMap["robot_three:26"] = {rtwname: "<S3>/robot_8_x_pos"};
	this.rtwnameHashMap["<S3>/robot_8_y_pos"] = {sid: "robot_three:27"};
	this.sidHashMap["robot_three:27"] = {rtwname: "<S3>/robot_8_y_pos"};
	this.rtwnameHashMap["<S3>/robot_3_orient"] = {sid: "robot_three:22"};
	this.sidHashMap["robot_three:22"] = {rtwname: "<S3>/robot_3_orient"};
	this.rtwnameHashMap["<S3>/Enable"] = {sid: "robot_three:23"};
	this.sidHashMap["robot_three:23"] = {rtwname: "<S3>/Enable"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "robot_three:28:1"};
	this.sidHashMap["robot_three:28:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "robot_three:28:1:4"};
	this.sidHashMap["robot_three:28:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "robot_three:28:1:5"};
	this.sidHashMap["robot_three:28:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:6"] = {sid: "robot_three:28:1:6"};
	this.sidHashMap["robot_three:28:1:6"] = {rtwname: "<S4>:1:6"};
	this.rtwnameHashMap["<S4>:1:7"] = {sid: "robot_three:28:1:7"};
	this.sidHashMap["robot_three:28:1:7"] = {rtwname: "<S4>:1:7"};
	this.rtwnameHashMap["<S5>/v"] = {sid: "robot_three:70"};
	this.sidHashMap["robot_three:70"] = {rtwname: "<S5>/v"};
	this.rtwnameHashMap["<S5>/w"] = {sid: "robot_three:71"};
	this.sidHashMap["robot_three:71"] = {rtwname: "<S5>/w"};
	this.rtwnameHashMap["<S5>/Enable"] = {sid: "robot_three:72"};
	this.sidHashMap["robot_three:72"] = {rtwname: "<S5>/Enable"};
	this.rtwnameHashMap["<S5>/Blank Message"] = {sid: "robot_three:73"};
	this.sidHashMap["robot_three:73"] = {rtwname: "<S5>/Blank Message"};
	this.rtwnameHashMap["<S5>/Bus Assignment1"] = {sid: "robot_three:74"};
	this.sidHashMap["robot_three:74"] = {rtwname: "<S5>/Bus Assignment1"};
	this.rtwnameHashMap["<S5>/Publish2"] = {sid: "robot_three:75"};
	this.sidHashMap["robot_three:75"] = {rtwname: "<S5>/Publish2"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "robot_three:76:30"};
	this.sidHashMap["robot_three:76:30"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/Slider Gain"] = {sid: "robot_three:76:31"};
	this.sidHashMap["robot_three:76:31"] = {rtwname: "<S6>/Slider Gain"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "robot_three:76:32"};
	this.sidHashMap["robot_three:76:32"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "robot_three:73:33"};
	this.sidHashMap["robot_three:73:33"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/Out"] = {sid: "robot_three:73:34"};
	this.sidHashMap["robot_three:73:34"] = {rtwname: "<S7>/Out"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "robot_three:75:29"};
	this.sidHashMap["robot_three:75:29"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/SignalSpecification"] = {sid: "robot_three:75:30"};
	this.sidHashMap["robot_three:75:30"] = {rtwname: "<S8>/SignalSpecification"};
	this.rtwnameHashMap["<S8>/SinkBlock"] = {sid: "robot_three:75:31"};
	this.sidHashMap["robot_three:75:31"] = {rtwname: "<S8>/SinkBlock"};
	this.rtwnameHashMap["<S9>/Desired position1"] = {sid: "robot_three:37"};
	this.sidHashMap["robot_three:37"] = {rtwname: "<S9>/Desired position1"};
	this.rtwnameHashMap["<S9>/Desired position"] = {sid: "robot_three:38"};
	this.sidHashMap["robot_three:38"] = {rtwname: "<S9>/Desired position"};
	this.rtwnameHashMap["<S9>/Position X"] = {sid: "robot_three:39"};
	this.sidHashMap["robot_three:39"] = {rtwname: "<S9>/Position X"};
	this.rtwnameHashMap["<S9>/Position Y"] = {sid: "robot_three:40"};
	this.sidHashMap["robot_three:40"] = {rtwname: "<S9>/Position Y"};
	this.rtwnameHashMap["<S9>/Orientation (theta)"] = {sid: "robot_three:41"};
	this.sidHashMap["robot_three:41"] = {rtwname: "<S9>/Orientation (theta)"};
	this.rtwnameHashMap["<S9>/Enable"] = {sid: "robot_three:42"};
	this.sidHashMap["robot_three:42"] = {rtwname: "<S9>/Enable"};
	this.rtwnameHashMap["<S9>/Bound [-pi,pi]"] = {sid: "robot_three:43"};
	this.sidHashMap["robot_three:43"] = {rtwname: "<S9>/Bound [-pi,pi]"};
	this.rtwnameHashMap["<S9>/Desired Yaw"] = {sid: "robot_three:44"};
	this.sidHashMap["robot_three:44"] = {rtwname: "<S9>/Desired Yaw"};
	this.rtwnameHashMap["<S9>/Distance"] = {sid: "robot_three:45"};
	this.sidHashMap["robot_three:45"] = {rtwname: "<S9>/Distance"};
	this.rtwnameHashMap["<S9>/Distance1"] = {sid: "robot_three:46"};
	this.sidHashMap["robot_three:46"] = {rtwname: "<S9>/Distance1"};
	this.rtwnameHashMap["<S9>/Distance2"] = {sid: "robot_three:47"};
	this.sidHashMap["robot_three:47"] = {rtwname: "<S9>/Distance2"};
	this.rtwnameHashMap["<S9>/Distance3"] = {sid: "robot_three:48"};
	this.sidHashMap["robot_three:48"] = {rtwname: "<S9>/Distance3"};
	this.rtwnameHashMap["<S9>/Mux"] = {sid: "robot_three:49"};
	this.sidHashMap["robot_three:49"] = {rtwname: "<S9>/Mux"};
	this.rtwnameHashMap["<S9>/Mux1"] = {sid: "robot_three:50"};
	this.sidHashMap["robot_three:50"] = {rtwname: "<S9>/Mux1"};
	this.rtwnameHashMap["<S9>/Stop1"] = {sid: "robot_three:51"};
	this.sidHashMap["robot_three:51"] = {rtwname: "<S9>/Stop1"};
	this.rtwnameHashMap["<S9>/Sum"] = {sid: "robot_three:52"};
	this.sidHashMap["robot_three:52"] = {rtwname: "<S9>/Sum"};
	this.rtwnameHashMap["<S9>/Sum1"] = {sid: "robot_three:53"};
	this.sidHashMap["robot_three:53"] = {rtwname: "<S9>/Sum1"};
	this.rtwnameHashMap["<S9>/Sum3"] = {sid: "robot_three:54"};
	this.sidHashMap["robot_three:54"] = {rtwname: "<S9>/Sum3"};
	this.rtwnameHashMap["<S9>/Switch1"] = {sid: "robot_three:55"};
	this.sidHashMap["robot_three:55"] = {rtwname: "<S9>/Switch1"};
	this.rtwnameHashMap["<S9>/Switch2"] = {sid: "robot_three:56"};
	this.sidHashMap["robot_three:56"] = {rtwname: "<S9>/Switch2"};
	this.rtwnameHashMap["<S9>/speed Threshold2"] = {sid: "robot_three:57"};
	this.sidHashMap["robot_three:57"] = {rtwname: "<S9>/speed Threshold2"};
	this.rtwnameHashMap["<S9>/Linear Velocity (v)"] = {sid: "robot_three:58"};
	this.sidHashMap["robot_three:58"] = {rtwname: "<S9>/Linear Velocity (v)"};
	this.rtwnameHashMap["<S9>/Angular Velocity (w)"] = {sid: "robot_three:59"};
	this.sidHashMap["robot_three:59"] = {rtwname: "<S9>/Angular Velocity (w)"};
	this.rtwnameHashMap["<S10>/u"] = {sid: "robot_three:57:1"};
	this.sidHashMap["robot_three:57:1"] = {rtwname: "<S10>/u"};
	this.rtwnameHashMap["<S10>/Compare"] = {sid: "robot_three:57:2"};
	this.sidHashMap["robot_three:57:2"] = {rtwname: "<S10>/Compare"};
	this.rtwnameHashMap["<S10>/Constant"] = {sid: "robot_three:57:3"};
	this.sidHashMap["robot_three:57:3"] = {rtwname: "<S10>/Constant"};
	this.rtwnameHashMap["<S10>/y"] = {sid: "robot_three:57:4"};
	this.sidHashMap["robot_three:57:4"] = {rtwname: "<S10>/y"};
	this.rtwnameHashMap["<S11>:1"] = {sid: "robot_three:4:1"};
	this.sidHashMap["robot_three:4:1"] = {rtwname: "<S11>:1"};
	this.rtwnameHashMap["<S11>:1:5"] = {sid: "robot_three:4:1:5"};
	this.sidHashMap["robot_three:4:1:5"] = {rtwname: "<S11>:1:5"};
	this.rtwnameHashMap["<S11>:1:6"] = {sid: "robot_three:4:1:6"};
	this.sidHashMap["robot_three:4:1:6"] = {rtwname: "<S11>:1:6"};
	this.rtwnameHashMap["<S12>:1"] = {sid: "robot_three:5:1"};
	this.sidHashMap["robot_three:5:1"] = {rtwname: "<S12>:1"};
	this.rtwnameHashMap["<S13>/Constant"] = {sid: "robot_three:10:51"};
	this.sidHashMap["robot_three:10:51"] = {rtwname: "<S13>/Constant"};
	this.rtwnameHashMap["<S13>/Enabled Subsystem"] = {sid: "robot_three:10:52"};
	this.sidHashMap["robot_three:10:52"] = {rtwname: "<S13>/Enabled Subsystem"};
	this.rtwnameHashMap["<S13>/SourceBlock"] = {sid: "robot_three:10:58"};
	this.sidHashMap["robot_three:10:58"] = {rtwname: "<S13>/SourceBlock"};
	this.rtwnameHashMap["<S13>/Out1"] = {sid: "robot_three:10:59"};
	this.sidHashMap["robot_three:10:59"] = {rtwname: "<S13>/Out1"};
	this.rtwnameHashMap["<S13>/Out2"] = {sid: "robot_three:10:60"};
	this.sidHashMap["robot_three:10:60"] = {rtwname: "<S13>/Out2"};
	this.rtwnameHashMap["<S14>/Constant"] = {sid: "robot_three:11:51"};
	this.sidHashMap["robot_three:11:51"] = {rtwname: "<S14>/Constant"};
	this.rtwnameHashMap["<S14>/Enabled Subsystem"] = {sid: "robot_three:11:52"};
	this.sidHashMap["robot_three:11:52"] = {rtwname: "<S14>/Enabled Subsystem"};
	this.rtwnameHashMap["<S14>/SourceBlock"] = {sid: "robot_three:11:58"};
	this.sidHashMap["robot_three:11:58"] = {rtwname: "<S14>/SourceBlock"};
	this.rtwnameHashMap["<S14>/Out1"] = {sid: "robot_three:11:59"};
	this.sidHashMap["robot_three:11:59"] = {rtwname: "<S14>/Out1"};
	this.rtwnameHashMap["<S14>/Out2"] = {sid: "robot_three:11:60"};
	this.sidHashMap["robot_three:11:60"] = {rtwname: "<S14>/Out2"};
	this.rtwnameHashMap["<S15>/In1"] = {sid: "robot_three:10:53"};
	this.sidHashMap["robot_three:10:53"] = {rtwname: "<S15>/In1"};
	this.rtwnameHashMap["<S15>/Enable"] = {sid: "robot_three:10:54"};
	this.sidHashMap["robot_three:10:54"] = {rtwname: "<S15>/Enable"};
	this.rtwnameHashMap["<S15>/Out1"] = {sid: "robot_three:10:55"};
	this.sidHashMap["robot_three:10:55"] = {rtwname: "<S15>/Out1"};
	this.rtwnameHashMap["<S16>/In1"] = {sid: "robot_three:11:53"};
	this.sidHashMap["robot_three:11:53"] = {rtwname: "<S16>/In1"};
	this.rtwnameHashMap["<S16>/Enable"] = {sid: "robot_three:11:54"};
	this.sidHashMap["robot_three:11:54"] = {rtwname: "<S16>/Enable"};
	this.rtwnameHashMap["<S16>/Out1"] = {sid: "robot_three:11:55"};
	this.sidHashMap["robot_three:11:55"] = {rtwname: "<S16>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
