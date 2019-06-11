function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Command robot */
	this.urlHashMap["robot:65"] = "robot.h:190";
	/* <Root>/Compute robot velocity */
	this.urlHashMap["robot:29"] = "robot.h:191";
	/* <Root>/camera */
	this.urlHashMap["robot:1"] = "robot.h:184,192";
	/* <Root>/cyc_pursuit2 */
	this.urlHashMap["robot:28"] = "robot.cpp:208,217&robot.h:193";
	/* <S1>/Command Velocity Publisher */
	this.urlHashMap["robot:69"] = "robot.cpp:196,295,365,379,424,435&robot.h:194";
	/* <S1>/Linear Velocity (Slider) */
	this.urlHashMap["robot:76"] = "robot.h:195";
	/* <S2>/Proportional Controller */
	this.urlHashMap["robot:36"] = "robot.cpp:199,294&robot.h:198";
	/* <S3>/Conversion1 */
	this.urlHashMap["robot:4"] = "robot.cpp:62,297&robot.h:46,48,62,200&robot_types.h:141";
	/* <S3>/Conversion2 */
	this.urlHashMap["robot:5"] = "robot.cpp:63,175&robot.h:61,201";
	/* <S3>/Real-Imag to
Complex */
	this.urlHashMap["robot:8"] = "robot.h:165";
	/* <S3>/Real-Imag to
Complex1 */
	this.urlHashMap["robot:9"] = "robot.h:166";
	/* <S3>/Subscribe1 */
	this.urlHashMap["robot:10"] = "robot.cpp:157,173,351,363,389,395,413,422&robot.h:202";
	/* <S3>/Subscribe2 */
	this.urlHashMap["robot:11"] = "robot.cpp:140,155,202,293,337,349,381,387,402,411&robot.h:203";
	/* <S3>/To Workspace */
	this.urlHashMap["robot:12"] = "robot.h:167";
	/* <S3>/To Workspace1 */
	this.urlHashMap["robot:13"] = "robot.h:168";
	/* <S3>/To Workspace3 */
	this.urlHashMap["robot:14"] = "robot.h:169";
	/* <S3>/To Workspace4 */
	this.urlHashMap["robot:15"] = "robot.h:170";
	/* <S3>/To Workspace5 */
	this.urlHashMap["robot:16"] = "robot.h:171";
	/* <S3>/To Workspace6 */
	this.urlHashMap["robot:17"] = "robot.h:172";
	/* <S4>:1 */
	this.urlHashMap["robot:28:1"] = "robot.cpp:176";
	/* <S4>:1:4 */
	this.urlHashMap["robot:28:1:4"] = "robot.cpp:177";
	/* <S4>:1:5 */
	this.urlHashMap["robot:28:1:5"] = "robot.cpp:178";
	/* <S4>:1:6 */
	this.urlHashMap["robot:28:1:6"] = "robot.cpp:179";
	/* <S4>:1:7 */
	this.urlHashMap["robot:28:1:7"] = "robot.cpp:180";
	/* <S5>/Enable */
	this.urlHashMap["robot:72"] = "robot.cpp:197";
	/* <S5>/Blank Message */
	this.urlHashMap["robot:73"] = "robot.h:196";
	/* <S5>/Bus
Assignment1 */
	this.urlHashMap["robot:74"] = "robot.cpp:275&robot.h:56";
	/* <S5>/Publish2 */
	this.urlHashMap["robot:75"] = "robot.cpp:284,290,366,378,425,434&robot.h:197";
	/* <S6>/Slider
Gain */
	this.urlHashMap["robot:76:31"] = "robot.cpp:277,446&robot.h:81&rtmodel.h:43";
	/* <S7>/Constant */
	this.urlHashMap["robot:73:33"] = "robot.cpp:276,638&robot.h:96&rtmodel.h:235";
	/* <S8>/SinkBlock */
	this.urlHashMap["robot:75:31"] = "robot.cpp:285,286,367,377,426,427,433&robot.h:69,70";
	/* <S9>/Enable */
	this.urlHashMap["robot:42"] = "robot.cpp:200";
	/* <S9>/Bound [-pi,pi] */
	this.urlHashMap["robot:43"] = "robot.cpp:238,254";
	/* <S9>/Desired Yaw */
	this.urlHashMap["robot:44"] = "robot.cpp:247";
	/* <S9>/Distance */
	this.urlHashMap["robot:45"] = "robot.cpp:261,270";
	/* <S9>/Distance1 */
	this.urlHashMap["robot:46"] = "robot.cpp:225,233";
	/* <S9>/Distance2 */
	this.urlHashMap["robot:47"] = "robot.cpp:258";
	/* <S9>/Distance3 */
	this.urlHashMap["robot:48"] = "robot.cpp:253";
	/* <S9>/Stop1 */
	this.urlHashMap["robot:51"] = "robot.cpp:237,647&robot.h:105&rtmodel.h:244";
	/* <S9>/Sum */
	this.urlHashMap["robot:52"] = "robot.cpp:216&robot.h:58";
	/* <S9>/Sum1 */
	this.urlHashMap["robot:53"] = "robot.cpp:207&robot.h:57";
	/* <S9>/Sum3 */
	this.urlHashMap["robot:54"] = "robot.cpp:246&robot.h:59";
	/* <S9>/Switch1 */
	this.urlHashMap["robot:55"] = "robot.cpp:235,273";
	/* <S9>/Switch2 */
	this.urlHashMap["robot:56"] = "robot.cpp:240";
	/* <S9>/speed Threshold2 */
	this.urlHashMap["robot:57"] = "robot.h:199";
	/* <S9>/Linear Velocity (v) */
	this.urlHashMap["robot:58"] = "robot.cpp:641&robot.h:99&rtmodel.h:238";
	/* <S9>/Angular Velocity (w) */
	this.urlHashMap["robot:59"] = "robot.cpp:644&robot.h:102&rtmodel.h:241";
	/* <S10>/Compare */
	this.urlHashMap["robot:57:2"] = "robot.cpp:239";
	/* <S10>/Constant */
	this.urlHashMap["robot:57:3"] = "robot.cpp:236,443&robot.h:78&rtmodel.h:40";
	/* <S11>:1 */
	this.urlHashMap["robot:4:1"] = "robot.cpp:74";
	/* <S11>:1:5 */
	this.urlHashMap["robot:4:1:5"] = "robot.cpp:75";
	/* <S11>:1:6 */
	this.urlHashMap["robot:4:1:6"] = "robot.cpp:83";
	/* <S12>:1 */
	this.urlHashMap["robot:5:1"] = "msg=rtwMsg_reusableFunction&block=robot:5:1";
	/* <S13>/Constant */
	this.urlHashMap["robot:10:51"] = "robot.cpp:534&robot.h:87&rtmodel.h:131";
	/* <S13>/Enabled
Subsystem */
	this.urlHashMap["robot:10:52"] = "robot.cpp:164,172,390,394&robot.h:204";
	/* <S13>/SourceBlock */
	this.urlHashMap["robot:10:58"] = "robot.cpp:158,160,171,352,362,414,415,421&robot.h:68,72";
	/* <S14>/Constant */
	this.urlHashMap["robot:11:51"] = "robot.cpp:622&robot.h:93&rtmodel.h:219";
	/* <S14>/Enabled
Subsystem */
	this.urlHashMap["robot:11:52"] = "robot.cpp:147,154,382,386&robot.h:205";
	/* <S14>/SourceBlock */
	this.urlHashMap["robot:11:58"] = "robot.cpp:141,143,203,204,338,348,403,404,410&robot.h:67,71";
	/* <S15>/In1 */
	this.urlHashMap["robot:10:53"] = "robot.cpp:159&robot.h:54";
	/* <S15>/Enable */
	this.urlHashMap["robot:10:54"] = "robot.cpp:165";
	/* <S15>/Out1 */
	this.urlHashMap["robot:10:55"] = "robot.cpp:391,490&robot.h:84&rtmodel.h:87";
	/* <S16>/In1 */
	this.urlHashMap["robot:11:53"] = "robot.cpp:142&robot.h:53";
	/* <S16>/Enable */
	this.urlHashMap["robot:11:54"] = "robot.cpp:148";
	/* <S16>/Out1 */
	this.urlHashMap["robot:11:55"] = "robot.cpp:383,578&robot.h:90&rtmodel.h:175";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "robot"};
	this.sidHashMap["robot"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "robot:65"};
	this.sidHashMap["robot:65"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "robot:29"};
	this.sidHashMap["robot:29"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "robot:1"};
	this.sidHashMap["robot:1"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "robot:28"};
	this.sidHashMap["robot:28"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "robot:69"};
	this.sidHashMap["robot:69"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "robot:76"};
	this.sidHashMap["robot:76"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "robot:73"};
	this.sidHashMap["robot:73"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "robot:75"};
	this.sidHashMap["robot:75"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "robot:36"};
	this.sidHashMap["robot:36"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "robot:57"};
	this.sidHashMap["robot:57"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "robot:4"};
	this.sidHashMap["robot:4"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "robot:5"};
	this.sidHashMap["robot:5"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<S13>"] = {sid: "robot:10"};
	this.sidHashMap["robot:10"] = {rtwname: "<S13>"};
	this.rtwnameHashMap["<S14>"] = {sid: "robot:11"};
	this.sidHashMap["robot:11"] = {rtwname: "<S14>"};
	this.rtwnameHashMap["<S15>"] = {sid: "robot:10:52"};
	this.sidHashMap["robot:10:52"] = {rtwname: "<S15>"};
	this.rtwnameHashMap["<S16>"] = {sid: "robot:11:52"};
	this.sidHashMap["robot:11:52"] = {rtwname: "<S16>"};
	this.rtwnameHashMap["<Root>/Command robot"] = {sid: "robot:65"};
	this.sidHashMap["robot:65"] = {rtwname: "<Root>/Command robot"};
	this.rtwnameHashMap["<Root>/Compute robot velocity"] = {sid: "robot:29"};
	this.sidHashMap["robot:29"] = {rtwname: "<Root>/Compute robot velocity"};
	this.rtwnameHashMap["<Root>/camera"] = {sid: "robot:1"};
	this.sidHashMap["robot:1"] = {rtwname: "<Root>/camera"};
	this.rtwnameHashMap["<Root>/cyc_pursuit2"] = {sid: "robot:28"};
	this.sidHashMap["robot:28"] = {rtwname: "<Root>/cyc_pursuit2"};
	this.rtwnameHashMap["<S1>/robot_1_velocity"] = {sid: "robot:66"};
	this.sidHashMap["robot:66"] = {rtwname: "<S1>/robot_1_velocity"};
	this.rtwnameHashMap["<S1>/robot_1_angle"] = {sid: "robot:67"};
	this.sidHashMap["robot:67"] = {rtwname: "<S1>/robot_1_angle"};
	this.rtwnameHashMap["<S1>/enbale_r0b0t_1"] = {sid: "robot:68"};
	this.sidHashMap["robot:68"] = {rtwname: "<S1>/enbale_r0b0t_1"};
	this.rtwnameHashMap["<S1>/Command Velocity Publisher"] = {sid: "robot:69"};
	this.sidHashMap["robot:69"] = {rtwname: "<S1>/Command Velocity Publisher"};
	this.rtwnameHashMap["<S1>/Linear Velocity (Slider)"] = {sid: "robot:76"};
	this.sidHashMap["robot:76"] = {rtwname: "<S1>/Linear Velocity (Slider)"};
	this.rtwnameHashMap["<S2>/robot_1_x_des"] = {sid: "robot:30"};
	this.sidHashMap["robot:30"] = {rtwname: "<S2>/robot_1_x_des"};
	this.rtwnameHashMap["<S2>/robot_1_y_des"] = {sid: "robot:31"};
	this.sidHashMap["robot:31"] = {rtwname: "<S2>/robot_1_y_des"};
	this.rtwnameHashMap["<S2>/robot_1_x_pos"] = {sid: "robot:32"};
	this.sidHashMap["robot:32"] = {rtwname: "<S2>/robot_1_x_pos"};
	this.rtwnameHashMap["<S2>/robot_1_y_pos"] = {sid: "robot:33"};
	this.sidHashMap["robot:33"] = {rtwname: "<S2>/robot_1_y_pos"};
	this.rtwnameHashMap["<S2>/robot_1_orient"] = {sid: "robot:34"};
	this.sidHashMap["robot:34"] = {rtwname: "<S2>/robot_1_orient"};
	this.rtwnameHashMap["<S2>/Enable1"] = {sid: "robot:35"};
	this.sidHashMap["robot:35"] = {rtwname: "<S2>/Enable1"};
	this.rtwnameHashMap["<S2>/Proportional Controller"] = {sid: "robot:36"};
	this.sidHashMap["robot:36"] = {rtwname: "<S2>/Proportional Controller"};
	this.rtwnameHashMap["<S2>/robot_1_velocity"] = {sid: "robot:60"};
	this.sidHashMap["robot:60"] = {rtwname: "<S2>/robot_1_velocity"};
	this.rtwnameHashMap["<S2>/robot_1_angle"] = {sid: "robot:61"};
	this.sidHashMap["robot:61"] = {rtwname: "<S2>/robot_1_angle"};
	this.rtwnameHashMap["<S2>/enable_robot_1"] = {sid: "robot:62"};
	this.sidHashMap["robot:62"] = {rtwname: "<S2>/enable_robot_1"};
	this.rtwnameHashMap["<S3>/Bus Selector1"] = {sid: "robot:2"};
	this.sidHashMap["robot:2"] = {rtwname: "<S3>/Bus Selector1"};
	this.rtwnameHashMap["<S3>/Bus Selector2"] = {sid: "robot:3"};
	this.sidHashMap["robot:3"] = {rtwname: "<S3>/Bus Selector2"};
	this.rtwnameHashMap["<S3>/Conversion1"] = {sid: "robot:4"};
	this.sidHashMap["robot:4"] = {rtwname: "<S3>/Conversion1"};
	this.rtwnameHashMap["<S3>/Conversion2"] = {sid: "robot:5"};
	this.sidHashMap["robot:5"] = {rtwname: "<S3>/Conversion2"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex"] = {sid: "robot:8"};
	this.sidHashMap["robot:8"] = {rtwname: "<S3>/Real-Imag to Complex"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex1"] = {sid: "robot:9"};
	this.sidHashMap["robot:9"] = {rtwname: "<S3>/Real-Imag to Complex1"};
	this.rtwnameHashMap["<S3>/Subscribe1"] = {sid: "robot:10"};
	this.sidHashMap["robot:10"] = {rtwname: "<S3>/Subscribe1"};
	this.rtwnameHashMap["<S3>/Subscribe2"] = {sid: "robot:11"};
	this.sidHashMap["robot:11"] = {rtwname: "<S3>/Subscribe2"};
	this.rtwnameHashMap["<S3>/Terminator"] = {sid: "robot:63"};
	this.sidHashMap["robot:63"] = {rtwname: "<S3>/Terminator"};
	this.rtwnameHashMap["<S3>/Terminator1"] = {sid: "robot:64"};
	this.sidHashMap["robot:64"] = {rtwname: "<S3>/Terminator1"};
	this.rtwnameHashMap["<S3>/To Workspace"] = {sid: "robot:12"};
	this.sidHashMap["robot:12"] = {rtwname: "<S3>/To Workspace"};
	this.rtwnameHashMap["<S3>/To Workspace1"] = {sid: "robot:13"};
	this.sidHashMap["robot:13"] = {rtwname: "<S3>/To Workspace1"};
	this.rtwnameHashMap["<S3>/To Workspace3"] = {sid: "robot:14"};
	this.sidHashMap["robot:14"] = {rtwname: "<S3>/To Workspace3"};
	this.rtwnameHashMap["<S3>/To Workspace4"] = {sid: "robot:15"};
	this.sidHashMap["robot:15"] = {rtwname: "<S3>/To Workspace4"};
	this.rtwnameHashMap["<S3>/To Workspace5"] = {sid: "robot:16"};
	this.sidHashMap["robot:16"] = {rtwname: "<S3>/To Workspace5"};
	this.rtwnameHashMap["<S3>/To Workspace6"] = {sid: "robot:17"};
	this.sidHashMap["robot:17"] = {rtwname: "<S3>/To Workspace6"};
	this.rtwnameHashMap["<S3>/robot_1_x_pos"] = {sid: "robot:18"};
	this.sidHashMap["robot:18"] = {rtwname: "<S3>/robot_1_x_pos"};
	this.rtwnameHashMap["<S3>/robot_1_y_pos"] = {sid: "robot:19"};
	this.sidHashMap["robot:19"] = {rtwname: "<S3>/robot_1_y_pos"};
	this.rtwnameHashMap["<S3>/robot_3_x_pos"] = {sid: "robot:26"};
	this.sidHashMap["robot:26"] = {rtwname: "<S3>/robot_3_x_pos"};
	this.rtwnameHashMap["<S3>/robot_3_y_pos"] = {sid: "robot:27"};
	this.sidHashMap["robot:27"] = {rtwname: "<S3>/robot_3_y_pos"};
	this.rtwnameHashMap["<S3>/robot_1_orient"] = {sid: "robot:22"};
	this.sidHashMap["robot:22"] = {rtwname: "<S3>/robot_1_orient"};
	this.rtwnameHashMap["<S3>/Enable1"] = {sid: "robot:23"};
	this.sidHashMap["robot:23"] = {rtwname: "<S3>/Enable1"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "robot:28:1"};
	this.sidHashMap["robot:28:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "robot:28:1:4"};
	this.sidHashMap["robot:28:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "robot:28:1:5"};
	this.sidHashMap["robot:28:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:6"] = {sid: "robot:28:1:6"};
	this.sidHashMap["robot:28:1:6"] = {rtwname: "<S4>:1:6"};
	this.rtwnameHashMap["<S4>:1:7"] = {sid: "robot:28:1:7"};
	this.sidHashMap["robot:28:1:7"] = {rtwname: "<S4>:1:7"};
	this.rtwnameHashMap["<S5>/v"] = {sid: "robot:70"};
	this.sidHashMap["robot:70"] = {rtwname: "<S5>/v"};
	this.rtwnameHashMap["<S5>/w"] = {sid: "robot:71"};
	this.sidHashMap["robot:71"] = {rtwname: "<S5>/w"};
	this.rtwnameHashMap["<S5>/Enable"] = {sid: "robot:72"};
	this.sidHashMap["robot:72"] = {rtwname: "<S5>/Enable"};
	this.rtwnameHashMap["<S5>/Blank Message"] = {sid: "robot:73"};
	this.sidHashMap["robot:73"] = {rtwname: "<S5>/Blank Message"};
	this.rtwnameHashMap["<S5>/Bus Assignment1"] = {sid: "robot:74"};
	this.sidHashMap["robot:74"] = {rtwname: "<S5>/Bus Assignment1"};
	this.rtwnameHashMap["<S5>/Publish2"] = {sid: "robot:75"};
	this.sidHashMap["robot:75"] = {rtwname: "<S5>/Publish2"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "robot:76:30"};
	this.sidHashMap["robot:76:30"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/Slider Gain"] = {sid: "robot:76:31"};
	this.sidHashMap["robot:76:31"] = {rtwname: "<S6>/Slider Gain"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "robot:76:32"};
	this.sidHashMap["robot:76:32"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "robot:73:33"};
	this.sidHashMap["robot:73:33"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/Out"] = {sid: "robot:73:34"};
	this.sidHashMap["robot:73:34"] = {rtwname: "<S7>/Out"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "robot:75:29"};
	this.sidHashMap["robot:75:29"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/SignalSpecification"] = {sid: "robot:75:30"};
	this.sidHashMap["robot:75:30"] = {rtwname: "<S8>/SignalSpecification"};
	this.rtwnameHashMap["<S8>/SinkBlock"] = {sid: "robot:75:31"};
	this.sidHashMap["robot:75:31"] = {rtwname: "<S8>/SinkBlock"};
	this.rtwnameHashMap["<S9>/Desired position1"] = {sid: "robot:37"};
	this.sidHashMap["robot:37"] = {rtwname: "<S9>/Desired position1"};
	this.rtwnameHashMap["<S9>/Desired position"] = {sid: "robot:38"};
	this.sidHashMap["robot:38"] = {rtwname: "<S9>/Desired position"};
	this.rtwnameHashMap["<S9>/Position X"] = {sid: "robot:39"};
	this.sidHashMap["robot:39"] = {rtwname: "<S9>/Position X"};
	this.rtwnameHashMap["<S9>/Position Y"] = {sid: "robot:40"};
	this.sidHashMap["robot:40"] = {rtwname: "<S9>/Position Y"};
	this.rtwnameHashMap["<S9>/Orientation (theta)"] = {sid: "robot:41"};
	this.sidHashMap["robot:41"] = {rtwname: "<S9>/Orientation (theta)"};
	this.rtwnameHashMap["<S9>/Enable"] = {sid: "robot:42"};
	this.sidHashMap["robot:42"] = {rtwname: "<S9>/Enable"};
	this.rtwnameHashMap["<S9>/Bound [-pi,pi]"] = {sid: "robot:43"};
	this.sidHashMap["robot:43"] = {rtwname: "<S9>/Bound [-pi,pi]"};
	this.rtwnameHashMap["<S9>/Desired Yaw"] = {sid: "robot:44"};
	this.sidHashMap["robot:44"] = {rtwname: "<S9>/Desired Yaw"};
	this.rtwnameHashMap["<S9>/Distance"] = {sid: "robot:45"};
	this.sidHashMap["robot:45"] = {rtwname: "<S9>/Distance"};
	this.rtwnameHashMap["<S9>/Distance1"] = {sid: "robot:46"};
	this.sidHashMap["robot:46"] = {rtwname: "<S9>/Distance1"};
	this.rtwnameHashMap["<S9>/Distance2"] = {sid: "robot:47"};
	this.sidHashMap["robot:47"] = {rtwname: "<S9>/Distance2"};
	this.rtwnameHashMap["<S9>/Distance3"] = {sid: "robot:48"};
	this.sidHashMap["robot:48"] = {rtwname: "<S9>/Distance3"};
	this.rtwnameHashMap["<S9>/Mux"] = {sid: "robot:49"};
	this.sidHashMap["robot:49"] = {rtwname: "<S9>/Mux"};
	this.rtwnameHashMap["<S9>/Mux1"] = {sid: "robot:50"};
	this.sidHashMap["robot:50"] = {rtwname: "<S9>/Mux1"};
	this.rtwnameHashMap["<S9>/Stop1"] = {sid: "robot:51"};
	this.sidHashMap["robot:51"] = {rtwname: "<S9>/Stop1"};
	this.rtwnameHashMap["<S9>/Sum"] = {sid: "robot:52"};
	this.sidHashMap["robot:52"] = {rtwname: "<S9>/Sum"};
	this.rtwnameHashMap["<S9>/Sum1"] = {sid: "robot:53"};
	this.sidHashMap["robot:53"] = {rtwname: "<S9>/Sum1"};
	this.rtwnameHashMap["<S9>/Sum3"] = {sid: "robot:54"};
	this.sidHashMap["robot:54"] = {rtwname: "<S9>/Sum3"};
	this.rtwnameHashMap["<S9>/Switch1"] = {sid: "robot:55"};
	this.sidHashMap["robot:55"] = {rtwname: "<S9>/Switch1"};
	this.rtwnameHashMap["<S9>/Switch2"] = {sid: "robot:56"};
	this.sidHashMap["robot:56"] = {rtwname: "<S9>/Switch2"};
	this.rtwnameHashMap["<S9>/speed Threshold2"] = {sid: "robot:57"};
	this.sidHashMap["robot:57"] = {rtwname: "<S9>/speed Threshold2"};
	this.rtwnameHashMap["<S9>/Linear Velocity (v)"] = {sid: "robot:58"};
	this.sidHashMap["robot:58"] = {rtwname: "<S9>/Linear Velocity (v)"};
	this.rtwnameHashMap["<S9>/Angular Velocity (w)"] = {sid: "robot:59"};
	this.sidHashMap["robot:59"] = {rtwname: "<S9>/Angular Velocity (w)"};
	this.rtwnameHashMap["<S10>/u"] = {sid: "robot:57:1"};
	this.sidHashMap["robot:57:1"] = {rtwname: "<S10>/u"};
	this.rtwnameHashMap["<S10>/Compare"] = {sid: "robot:57:2"};
	this.sidHashMap["robot:57:2"] = {rtwname: "<S10>/Compare"};
	this.rtwnameHashMap["<S10>/Constant"] = {sid: "robot:57:3"};
	this.sidHashMap["robot:57:3"] = {rtwname: "<S10>/Constant"};
	this.rtwnameHashMap["<S10>/y"] = {sid: "robot:57:4"};
	this.sidHashMap["robot:57:4"] = {rtwname: "<S10>/y"};
	this.rtwnameHashMap["<S11>:1"] = {sid: "robot:4:1"};
	this.sidHashMap["robot:4:1"] = {rtwname: "<S11>:1"};
	this.rtwnameHashMap["<S11>:1:5"] = {sid: "robot:4:1:5"};
	this.sidHashMap["robot:4:1:5"] = {rtwname: "<S11>:1:5"};
	this.rtwnameHashMap["<S11>:1:6"] = {sid: "robot:4:1:6"};
	this.sidHashMap["robot:4:1:6"] = {rtwname: "<S11>:1:6"};
	this.rtwnameHashMap["<S12>:1"] = {sid: "robot:5:1"};
	this.sidHashMap["robot:5:1"] = {rtwname: "<S12>:1"};
	this.rtwnameHashMap["<S13>/Constant"] = {sid: "robot:10:51"};
	this.sidHashMap["robot:10:51"] = {rtwname: "<S13>/Constant"};
	this.rtwnameHashMap["<S13>/Enabled Subsystem"] = {sid: "robot:10:52"};
	this.sidHashMap["robot:10:52"] = {rtwname: "<S13>/Enabled Subsystem"};
	this.rtwnameHashMap["<S13>/SourceBlock"] = {sid: "robot:10:58"};
	this.sidHashMap["robot:10:58"] = {rtwname: "<S13>/SourceBlock"};
	this.rtwnameHashMap["<S13>/Out1"] = {sid: "robot:10:59"};
	this.sidHashMap["robot:10:59"] = {rtwname: "<S13>/Out1"};
	this.rtwnameHashMap["<S13>/Out2"] = {sid: "robot:10:60"};
	this.sidHashMap["robot:10:60"] = {rtwname: "<S13>/Out2"};
	this.rtwnameHashMap["<S14>/Constant"] = {sid: "robot:11:51"};
	this.sidHashMap["robot:11:51"] = {rtwname: "<S14>/Constant"};
	this.rtwnameHashMap["<S14>/Enabled Subsystem"] = {sid: "robot:11:52"};
	this.sidHashMap["robot:11:52"] = {rtwname: "<S14>/Enabled Subsystem"};
	this.rtwnameHashMap["<S14>/SourceBlock"] = {sid: "robot:11:58"};
	this.sidHashMap["robot:11:58"] = {rtwname: "<S14>/SourceBlock"};
	this.rtwnameHashMap["<S14>/Out1"] = {sid: "robot:11:59"};
	this.sidHashMap["robot:11:59"] = {rtwname: "<S14>/Out1"};
	this.rtwnameHashMap["<S14>/Out2"] = {sid: "robot:11:60"};
	this.sidHashMap["robot:11:60"] = {rtwname: "<S14>/Out2"};
	this.rtwnameHashMap["<S15>/In1"] = {sid: "robot:10:53"};
	this.sidHashMap["robot:10:53"] = {rtwname: "<S15>/In1"};
	this.rtwnameHashMap["<S15>/Enable"] = {sid: "robot:10:54"};
	this.sidHashMap["robot:10:54"] = {rtwname: "<S15>/Enable"};
	this.rtwnameHashMap["<S15>/Out1"] = {sid: "robot:10:55"};
	this.sidHashMap["robot:10:55"] = {rtwname: "<S15>/Out1"};
	this.rtwnameHashMap["<S16>/In1"] = {sid: "robot:11:53"};
	this.sidHashMap["robot:11:53"] = {rtwname: "<S16>/In1"};
	this.rtwnameHashMap["<S16>/Enable"] = {sid: "robot:11:54"};
	this.sidHashMap["robot:11:54"] = {rtwname: "<S16>/Enable"};
	this.rtwnameHashMap["<S16>/Out1"] = {sid: "robot:11:55"};
	this.sidHashMap["robot:11:55"] = {rtwname: "<S16>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
