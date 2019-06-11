function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Command robot */
	this.urlHashMap["robot_cam1:65"] = "robot_cam1.h:190";
	/* <Root>/Compute robot velocity */
	this.urlHashMap["robot_cam1:29"] = "robot_cam1.h:191";
	/* <Root>/camera */
	this.urlHashMap["robot_cam1:1"] = "robot_cam1.h:184,192";
	/* <Root>/cyc_pursuit2 */
	this.urlHashMap["robot_cam1:28"] = "robot_cam1.cpp:207,216&robot_cam1.h:193";
	/* <S1>/Command Velocity Publisher */
	this.urlHashMap["robot_cam1:69"] = "robot_cam1.cpp:195,296,365,379,424,435&robot_cam1.h:194";
	/* <S1>/Linear Velocity (Slider) */
	this.urlHashMap["robot_cam1:76"] = "robot_cam1.h:195";
	/* <S2>/Proportional Controller */
	this.urlHashMap["robot_cam1:36"] = "robot_cam1.cpp:198,295&robot_cam1.h:198";
	/* <S3>/Conversion1 */
	this.urlHashMap["robot_cam1:4"] = "robot_cam1.cpp:62,298&robot_cam1.h:46,48,62,200&robot_cam1_types.h:141";
	/* <S3>/Conversion2 */
	this.urlHashMap["robot_cam1:5"] = "robot_cam1.cpp:63,175&robot_cam1.h:61,201";
	/* <S3>/Real-Imag to
Complex */
	this.urlHashMap["robot_cam1:8"] = "robot_cam1.h:165";
	/* <S3>/Real-Imag to
Complex1 */
	this.urlHashMap["robot_cam1:9"] = "robot_cam1.h:166";
	/* <S3>/Subscribe1 */
	this.urlHashMap["robot_cam1:10"] = "robot_cam1.cpp:157,173,351,363,389,395,413,422&robot_cam1.h:202";
	/* <S3>/Subscribe2 */
	this.urlHashMap["robot_cam1:11"] = "robot_cam1.cpp:140,155,201,294,337,349,381,387,402,411&robot_cam1.h:203";
	/* <S3>/To Workspace */
	this.urlHashMap["robot_cam1:12"] = "robot_cam1.h:167";
	/* <S3>/To Workspace1 */
	this.urlHashMap["robot_cam1:13"] = "robot_cam1.h:168";
	/* <S3>/To Workspace3 */
	this.urlHashMap["robot_cam1:14"] = "robot_cam1.h:169";
	/* <S3>/To Workspace4 */
	this.urlHashMap["robot_cam1:15"] = "robot_cam1.h:170";
	/* <S3>/To Workspace5 */
	this.urlHashMap["robot_cam1:16"] = "robot_cam1.h:171";
	/* <S3>/To Workspace6 */
	this.urlHashMap["robot_cam1:17"] = "robot_cam1.h:172";
	/* <S4>:1 */
	this.urlHashMap["robot_cam1:28:1"] = "robot_cam1.cpp:176";
	/* <S4>:1:4 */
	this.urlHashMap["robot_cam1:28:1:4"] = "robot_cam1.cpp:177";
	/* <S4>:1:5 */
	this.urlHashMap["robot_cam1:28:1:5"] = "robot_cam1.cpp:178";
	/* <S4>:1:6 */
	this.urlHashMap["robot_cam1:28:1:6"] = "robot_cam1.cpp:179";
	/* <S4>:1:7 */
	this.urlHashMap["robot_cam1:28:1:7"] = "robot_cam1.cpp:180";
	/* <S5>/Enable */
	this.urlHashMap["robot_cam1:72"] = "robot_cam1.cpp:196";
	/* <S5>/Blank Message */
	this.urlHashMap["robot_cam1:73"] = "robot_cam1.h:196";
	/* <S5>/Bus
Assignment1 */
	this.urlHashMap["robot_cam1:74"] = "robot_cam1.cpp:276&robot_cam1.h:56";
	/* <S5>/Publish2 */
	this.urlHashMap["robot_cam1:75"] = "robot_cam1.cpp:285,291,366,378,425,434&robot_cam1.h:197";
	/* <S6>/Slider
Gain */
	this.urlHashMap["robot_cam1:76:31"] = "robot_cam1.cpp:278,446&robot_cam1.h:81&rtmodel.h:43";
	/* <S7>/Constant */
	this.urlHashMap["robot_cam1:73:33"] = "robot_cam1.cpp:277,638&robot_cam1.h:96&rtmodel.h:235";
	/* <S8>/SinkBlock */
	this.urlHashMap["robot_cam1:75:31"] = "robot_cam1.cpp:286,287,367,377,426,427,433&robot_cam1.h:69,70";
	/* <S9>/Enable */
	this.urlHashMap["robot_cam1:42"] = "robot_cam1.cpp:199";
	/* <S9>/Bound [-pi,pi] */
	this.urlHashMap["robot_cam1:43"] = "robot_cam1.cpp:238,255";
	/* <S9>/Desired Yaw */
	this.urlHashMap["robot_cam1:44"] = "robot_cam1.cpp:247";
	/* <S9>/Distance */
	this.urlHashMap["robot_cam1:45"] = "robot_cam1.cpp:262,271";
	/* <S9>/Distance1 */
	this.urlHashMap["robot_cam1:46"] = "robot_cam1.cpp:224,233";
	/* <S9>/Distance2 */
	this.urlHashMap["robot_cam1:47"] = "robot_cam1.cpp:259";
	/* <S9>/Distance3 */
	this.urlHashMap["robot_cam1:48"] = "robot_cam1.cpp:254";
	/* <S9>/Stop1 */
	this.urlHashMap["robot_cam1:51"] = "robot_cam1.cpp:237,647&robot_cam1.h:105&rtmodel.h:244";
	/* <S9>/Sum */
	this.urlHashMap["robot_cam1:52"] = "robot_cam1.cpp:215&robot_cam1.h:58";
	/* <S9>/Sum1 */
	this.urlHashMap["robot_cam1:53"] = "robot_cam1.cpp:206&robot_cam1.h:57";
	/* <S9>/Sum3 */
	this.urlHashMap["robot_cam1:54"] = "robot_cam1.cpp:246&robot_cam1.h:59";
	/* <S9>/Switch1 */
	this.urlHashMap["robot_cam1:55"] = "robot_cam1.cpp:235,274";
	/* <S9>/Switch2 */
	this.urlHashMap["robot_cam1:56"] = "robot_cam1.cpp:240";
	/* <S9>/speed Threshold2 */
	this.urlHashMap["robot_cam1:57"] = "robot_cam1.h:199";
	/* <S9>/Linear Velocity (v) */
	this.urlHashMap["robot_cam1:58"] = "robot_cam1.cpp:641&robot_cam1.h:99&rtmodel.h:238";
	/* <S9>/Angular Velocity (w) */
	this.urlHashMap["robot_cam1:59"] = "robot_cam1.cpp:644&robot_cam1.h:102&rtmodel.h:241";
	/* <S10>/Compare */
	this.urlHashMap["robot_cam1:57:2"] = "robot_cam1.cpp:239";
	/* <S10>/Constant */
	this.urlHashMap["robot_cam1:57:3"] = "robot_cam1.cpp:236,443&robot_cam1.h:78&rtmodel.h:40";
	/* <S11>:1 */
	this.urlHashMap["robot_cam1:4:1"] = "robot_cam1.cpp:74";
	/* <S11>:1:5 */
	this.urlHashMap["robot_cam1:4:1:5"] = "robot_cam1.cpp:75";
	/* <S11>:1:6 */
	this.urlHashMap["robot_cam1:4:1:6"] = "robot_cam1.cpp:83";
	/* <S12>:1 */
	this.urlHashMap["robot_cam1:5:1"] = "msg=rtwMsg_reusableFunction&block=robot_cam1:5:1";
	/* <S13>/Constant */
	this.urlHashMap["robot_cam1:10:51"] = "robot_cam1.cpp:534&robot_cam1.h:87&rtmodel.h:131";
	/* <S13>/Enabled
Subsystem */
	this.urlHashMap["robot_cam1:10:52"] = "robot_cam1.cpp:164,172,390,394&robot_cam1.h:204";
	/* <S13>/SourceBlock */
	this.urlHashMap["robot_cam1:10:58"] = "robot_cam1.cpp:158,160,171,352,362,414,415,421&robot_cam1.h:68,72";
	/* <S14>/Constant */
	this.urlHashMap["robot_cam1:11:51"] = "robot_cam1.cpp:622&robot_cam1.h:93&rtmodel.h:219";
	/* <S14>/Enabled
Subsystem */
	this.urlHashMap["robot_cam1:11:52"] = "robot_cam1.cpp:147,154,382,386&robot_cam1.h:205";
	/* <S14>/SourceBlock */
	this.urlHashMap["robot_cam1:11:58"] = "robot_cam1.cpp:141,143,202,203,338,348,403,404,410&robot_cam1.h:67,71";
	/* <S15>/In1 */
	this.urlHashMap["robot_cam1:10:53"] = "robot_cam1.cpp:159&robot_cam1.h:54";
	/* <S15>/Enable */
	this.urlHashMap["robot_cam1:10:54"] = "robot_cam1.cpp:165";
	/* <S15>/Out1 */
	this.urlHashMap["robot_cam1:10:55"] = "robot_cam1.cpp:391,490&robot_cam1.h:84&rtmodel.h:87";
	/* <S16>/In1 */
	this.urlHashMap["robot_cam1:11:53"] = "robot_cam1.cpp:142&robot_cam1.h:53";
	/* <S16>/Enable */
	this.urlHashMap["robot_cam1:11:54"] = "robot_cam1.cpp:148";
	/* <S16>/Out1 */
	this.urlHashMap["robot_cam1:11:55"] = "robot_cam1.cpp:383,578&robot_cam1.h:90&rtmodel.h:175";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "robot_cam1"};
	this.sidHashMap["robot_cam1"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "robot_cam1:65"};
	this.sidHashMap["robot_cam1:65"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "robot_cam1:29"};
	this.sidHashMap["robot_cam1:29"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "robot_cam1:1"};
	this.sidHashMap["robot_cam1:1"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "robot_cam1:28"};
	this.sidHashMap["robot_cam1:28"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "robot_cam1:69"};
	this.sidHashMap["robot_cam1:69"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "robot_cam1:76"};
	this.sidHashMap["robot_cam1:76"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "robot_cam1:73"};
	this.sidHashMap["robot_cam1:73"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "robot_cam1:75"};
	this.sidHashMap["robot_cam1:75"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "robot_cam1:36"};
	this.sidHashMap["robot_cam1:36"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "robot_cam1:57"};
	this.sidHashMap["robot_cam1:57"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "robot_cam1:4"};
	this.sidHashMap["robot_cam1:4"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "robot_cam1:5"};
	this.sidHashMap["robot_cam1:5"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<S13>"] = {sid: "robot_cam1:10"};
	this.sidHashMap["robot_cam1:10"] = {rtwname: "<S13>"};
	this.rtwnameHashMap["<S14>"] = {sid: "robot_cam1:11"};
	this.sidHashMap["robot_cam1:11"] = {rtwname: "<S14>"};
	this.rtwnameHashMap["<S15>"] = {sid: "robot_cam1:10:52"};
	this.sidHashMap["robot_cam1:10:52"] = {rtwname: "<S15>"};
	this.rtwnameHashMap["<S16>"] = {sid: "robot_cam1:11:52"};
	this.sidHashMap["robot_cam1:11:52"] = {rtwname: "<S16>"};
	this.rtwnameHashMap["<Root>/Command robot"] = {sid: "robot_cam1:65"};
	this.sidHashMap["robot_cam1:65"] = {rtwname: "<Root>/Command robot"};
	this.rtwnameHashMap["<Root>/Compute robot velocity"] = {sid: "robot_cam1:29"};
	this.sidHashMap["robot_cam1:29"] = {rtwname: "<Root>/Compute robot velocity"};
	this.rtwnameHashMap["<Root>/camera"] = {sid: "robot_cam1:1"};
	this.sidHashMap["robot_cam1:1"] = {rtwname: "<Root>/camera"};
	this.rtwnameHashMap["<Root>/cyc_pursuit2"] = {sid: "robot_cam1:28"};
	this.sidHashMap["robot_cam1:28"] = {rtwname: "<Root>/cyc_pursuit2"};
	this.rtwnameHashMap["<S1>/robot_0_velocity"] = {sid: "robot_cam1:66"};
	this.sidHashMap["robot_cam1:66"] = {rtwname: "<S1>/robot_0_velocity"};
	this.rtwnameHashMap["<S1>/robot_0_angle"] = {sid: "robot_cam1:67"};
	this.sidHashMap["robot_cam1:67"] = {rtwname: "<S1>/robot_0_angle"};
	this.rtwnameHashMap["<S1>/enbale_r0b0t_0"] = {sid: "robot_cam1:68"};
	this.sidHashMap["robot_cam1:68"] = {rtwname: "<S1>/enbale_r0b0t_0"};
	this.rtwnameHashMap["<S1>/Command Velocity Publisher"] = {sid: "robot_cam1:69"};
	this.sidHashMap["robot_cam1:69"] = {rtwname: "<S1>/Command Velocity Publisher"};
	this.rtwnameHashMap["<S1>/Linear Velocity (Slider)"] = {sid: "robot_cam1:76"};
	this.sidHashMap["robot_cam1:76"] = {rtwname: "<S1>/Linear Velocity (Slider)"};
	this.rtwnameHashMap["<S2>/robot_0_x_des"] = {sid: "robot_cam1:30"};
	this.sidHashMap["robot_cam1:30"] = {rtwname: "<S2>/robot_0_x_des"};
	this.rtwnameHashMap["<S2>/robot_0_y_des"] = {sid: "robot_cam1:31"};
	this.sidHashMap["robot_cam1:31"] = {rtwname: "<S2>/robot_0_y_des"};
	this.rtwnameHashMap["<S2>/robot_0_x_pos"] = {sid: "robot_cam1:32"};
	this.sidHashMap["robot_cam1:32"] = {rtwname: "<S2>/robot_0_x_pos"};
	this.rtwnameHashMap["<S2>/robot_0_y_pos"] = {sid: "robot_cam1:33"};
	this.sidHashMap["robot_cam1:33"] = {rtwname: "<S2>/robot_0_y_pos"};
	this.rtwnameHashMap["<S2>/robot_0_orient"] = {sid: "robot_cam1:34"};
	this.sidHashMap["robot_cam1:34"] = {rtwname: "<S2>/robot_0_orient"};
	this.rtwnameHashMap["<S2>/Enable1"] = {sid: "robot_cam1:35"};
	this.sidHashMap["robot_cam1:35"] = {rtwname: "<S2>/Enable1"};
	this.rtwnameHashMap["<S2>/Proportional Controller"] = {sid: "robot_cam1:36"};
	this.sidHashMap["robot_cam1:36"] = {rtwname: "<S2>/Proportional Controller"};
	this.rtwnameHashMap["<S2>/robot_0_velocity"] = {sid: "robot_cam1:60"};
	this.sidHashMap["robot_cam1:60"] = {rtwname: "<S2>/robot_0_velocity"};
	this.rtwnameHashMap["<S2>/robot_0_angle"] = {sid: "robot_cam1:61"};
	this.sidHashMap["robot_cam1:61"] = {rtwname: "<S2>/robot_0_angle"};
	this.rtwnameHashMap["<S2>/enable_robot_0"] = {sid: "robot_cam1:62"};
	this.sidHashMap["robot_cam1:62"] = {rtwname: "<S2>/enable_robot_0"};
	this.rtwnameHashMap["<S3>/Bus Selector1"] = {sid: "robot_cam1:2"};
	this.sidHashMap["robot_cam1:2"] = {rtwname: "<S3>/Bus Selector1"};
	this.rtwnameHashMap["<S3>/Bus Selector2"] = {sid: "robot_cam1:3"};
	this.sidHashMap["robot_cam1:3"] = {rtwname: "<S3>/Bus Selector2"};
	this.rtwnameHashMap["<S3>/Conversion1"] = {sid: "robot_cam1:4"};
	this.sidHashMap["robot_cam1:4"] = {rtwname: "<S3>/Conversion1"};
	this.rtwnameHashMap["<S3>/Conversion2"] = {sid: "robot_cam1:5"};
	this.sidHashMap["robot_cam1:5"] = {rtwname: "<S3>/Conversion2"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex"] = {sid: "robot_cam1:8"};
	this.sidHashMap["robot_cam1:8"] = {rtwname: "<S3>/Real-Imag to Complex"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex1"] = {sid: "robot_cam1:9"};
	this.sidHashMap["robot_cam1:9"] = {rtwname: "<S3>/Real-Imag to Complex1"};
	this.rtwnameHashMap["<S3>/Subscribe1"] = {sid: "robot_cam1:10"};
	this.sidHashMap["robot_cam1:10"] = {rtwname: "<S3>/Subscribe1"};
	this.rtwnameHashMap["<S3>/Subscribe2"] = {sid: "robot_cam1:11"};
	this.sidHashMap["robot_cam1:11"] = {rtwname: "<S3>/Subscribe2"};
	this.rtwnameHashMap["<S3>/Terminator"] = {sid: "robot_cam1:63"};
	this.sidHashMap["robot_cam1:63"] = {rtwname: "<S3>/Terminator"};
	this.rtwnameHashMap["<S3>/Terminator1"] = {sid: "robot_cam1:64"};
	this.sidHashMap["robot_cam1:64"] = {rtwname: "<S3>/Terminator1"};
	this.rtwnameHashMap["<S3>/To Workspace"] = {sid: "robot_cam1:12"};
	this.sidHashMap["robot_cam1:12"] = {rtwname: "<S3>/To Workspace"};
	this.rtwnameHashMap["<S3>/To Workspace1"] = {sid: "robot_cam1:13"};
	this.sidHashMap["robot_cam1:13"] = {rtwname: "<S3>/To Workspace1"};
	this.rtwnameHashMap["<S3>/To Workspace3"] = {sid: "robot_cam1:14"};
	this.sidHashMap["robot_cam1:14"] = {rtwname: "<S3>/To Workspace3"};
	this.rtwnameHashMap["<S3>/To Workspace4"] = {sid: "robot_cam1:15"};
	this.sidHashMap["robot_cam1:15"] = {rtwname: "<S3>/To Workspace4"};
	this.rtwnameHashMap["<S3>/To Workspace5"] = {sid: "robot_cam1:16"};
	this.sidHashMap["robot_cam1:16"] = {rtwname: "<S3>/To Workspace5"};
	this.rtwnameHashMap["<S3>/To Workspace6"] = {sid: "robot_cam1:17"};
	this.sidHashMap["robot_cam1:17"] = {rtwname: "<S3>/To Workspace6"};
	this.rtwnameHashMap["<S3>/robot_0_x_pos"] = {sid: "robot_cam1:18"};
	this.sidHashMap["robot_cam1:18"] = {rtwname: "<S3>/robot_0_x_pos"};
	this.rtwnameHashMap["<S3>/robot_0_y_pos"] = {sid: "robot_cam1:19"};
	this.sidHashMap["robot_cam1:19"] = {rtwname: "<S3>/robot_0_y_pos"};
	this.rtwnameHashMap["<S3>/robot_1_x_pos"] = {sid: "robot_cam1:26"};
	this.sidHashMap["robot_cam1:26"] = {rtwname: "<S3>/robot_1_x_pos"};
	this.rtwnameHashMap["<S3>/robot_1_y_pos"] = {sid: "robot_cam1:27"};
	this.sidHashMap["robot_cam1:27"] = {rtwname: "<S3>/robot_1_y_pos"};
	this.rtwnameHashMap["<S3>/robot_0_orient"] = {sid: "robot_cam1:22"};
	this.sidHashMap["robot_cam1:22"] = {rtwname: "<S3>/robot_0_orient"};
	this.rtwnameHashMap["<S3>/Enable1"] = {sid: "robot_cam1:23"};
	this.sidHashMap["robot_cam1:23"] = {rtwname: "<S3>/Enable1"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "robot_cam1:28:1"};
	this.sidHashMap["robot_cam1:28:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "robot_cam1:28:1:4"};
	this.sidHashMap["robot_cam1:28:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "robot_cam1:28:1:5"};
	this.sidHashMap["robot_cam1:28:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:6"] = {sid: "robot_cam1:28:1:6"};
	this.sidHashMap["robot_cam1:28:1:6"] = {rtwname: "<S4>:1:6"};
	this.rtwnameHashMap["<S4>:1:7"] = {sid: "robot_cam1:28:1:7"};
	this.sidHashMap["robot_cam1:28:1:7"] = {rtwname: "<S4>:1:7"};
	this.rtwnameHashMap["<S5>/v"] = {sid: "robot_cam1:70"};
	this.sidHashMap["robot_cam1:70"] = {rtwname: "<S5>/v"};
	this.rtwnameHashMap["<S5>/w"] = {sid: "robot_cam1:71"};
	this.sidHashMap["robot_cam1:71"] = {rtwname: "<S5>/w"};
	this.rtwnameHashMap["<S5>/Enable"] = {sid: "robot_cam1:72"};
	this.sidHashMap["robot_cam1:72"] = {rtwname: "<S5>/Enable"};
	this.rtwnameHashMap["<S5>/Blank Message"] = {sid: "robot_cam1:73"};
	this.sidHashMap["robot_cam1:73"] = {rtwname: "<S5>/Blank Message"};
	this.rtwnameHashMap["<S5>/Bus Assignment1"] = {sid: "robot_cam1:74"};
	this.sidHashMap["robot_cam1:74"] = {rtwname: "<S5>/Bus Assignment1"};
	this.rtwnameHashMap["<S5>/Publish2"] = {sid: "robot_cam1:75"};
	this.sidHashMap["robot_cam1:75"] = {rtwname: "<S5>/Publish2"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "robot_cam1:76:30"};
	this.sidHashMap["robot_cam1:76:30"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/Slider Gain"] = {sid: "robot_cam1:76:31"};
	this.sidHashMap["robot_cam1:76:31"] = {rtwname: "<S6>/Slider Gain"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "robot_cam1:76:32"};
	this.sidHashMap["robot_cam1:76:32"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "robot_cam1:73:33"};
	this.sidHashMap["robot_cam1:73:33"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/Out"] = {sid: "robot_cam1:73:34"};
	this.sidHashMap["robot_cam1:73:34"] = {rtwname: "<S7>/Out"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "robot_cam1:75:29"};
	this.sidHashMap["robot_cam1:75:29"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/SignalSpecification"] = {sid: "robot_cam1:75:30"};
	this.sidHashMap["robot_cam1:75:30"] = {rtwname: "<S8>/SignalSpecification"};
	this.rtwnameHashMap["<S8>/SinkBlock"] = {sid: "robot_cam1:75:31"};
	this.sidHashMap["robot_cam1:75:31"] = {rtwname: "<S8>/SinkBlock"};
	this.rtwnameHashMap["<S9>/Desired position1"] = {sid: "robot_cam1:37"};
	this.sidHashMap["robot_cam1:37"] = {rtwname: "<S9>/Desired position1"};
	this.rtwnameHashMap["<S9>/Desired position"] = {sid: "robot_cam1:38"};
	this.sidHashMap["robot_cam1:38"] = {rtwname: "<S9>/Desired position"};
	this.rtwnameHashMap["<S9>/Position X"] = {sid: "robot_cam1:39"};
	this.sidHashMap["robot_cam1:39"] = {rtwname: "<S9>/Position X"};
	this.rtwnameHashMap["<S9>/Position Y"] = {sid: "robot_cam1:40"};
	this.sidHashMap["robot_cam1:40"] = {rtwname: "<S9>/Position Y"};
	this.rtwnameHashMap["<S9>/Orientation (theta)"] = {sid: "robot_cam1:41"};
	this.sidHashMap["robot_cam1:41"] = {rtwname: "<S9>/Orientation (theta)"};
	this.rtwnameHashMap["<S9>/Enable"] = {sid: "robot_cam1:42"};
	this.sidHashMap["robot_cam1:42"] = {rtwname: "<S9>/Enable"};
	this.rtwnameHashMap["<S9>/Bound [-pi,pi]"] = {sid: "robot_cam1:43"};
	this.sidHashMap["robot_cam1:43"] = {rtwname: "<S9>/Bound [-pi,pi]"};
	this.rtwnameHashMap["<S9>/Desired Yaw"] = {sid: "robot_cam1:44"};
	this.sidHashMap["robot_cam1:44"] = {rtwname: "<S9>/Desired Yaw"};
	this.rtwnameHashMap["<S9>/Distance"] = {sid: "robot_cam1:45"};
	this.sidHashMap["robot_cam1:45"] = {rtwname: "<S9>/Distance"};
	this.rtwnameHashMap["<S9>/Distance1"] = {sid: "robot_cam1:46"};
	this.sidHashMap["robot_cam1:46"] = {rtwname: "<S9>/Distance1"};
	this.rtwnameHashMap["<S9>/Distance2"] = {sid: "robot_cam1:47"};
	this.sidHashMap["robot_cam1:47"] = {rtwname: "<S9>/Distance2"};
	this.rtwnameHashMap["<S9>/Distance3"] = {sid: "robot_cam1:48"};
	this.sidHashMap["robot_cam1:48"] = {rtwname: "<S9>/Distance3"};
	this.rtwnameHashMap["<S9>/Mux"] = {sid: "robot_cam1:49"};
	this.sidHashMap["robot_cam1:49"] = {rtwname: "<S9>/Mux"};
	this.rtwnameHashMap["<S9>/Mux1"] = {sid: "robot_cam1:50"};
	this.sidHashMap["robot_cam1:50"] = {rtwname: "<S9>/Mux1"};
	this.rtwnameHashMap["<S9>/Stop1"] = {sid: "robot_cam1:51"};
	this.sidHashMap["robot_cam1:51"] = {rtwname: "<S9>/Stop1"};
	this.rtwnameHashMap["<S9>/Sum"] = {sid: "robot_cam1:52"};
	this.sidHashMap["robot_cam1:52"] = {rtwname: "<S9>/Sum"};
	this.rtwnameHashMap["<S9>/Sum1"] = {sid: "robot_cam1:53"};
	this.sidHashMap["robot_cam1:53"] = {rtwname: "<S9>/Sum1"};
	this.rtwnameHashMap["<S9>/Sum3"] = {sid: "robot_cam1:54"};
	this.sidHashMap["robot_cam1:54"] = {rtwname: "<S9>/Sum3"};
	this.rtwnameHashMap["<S9>/Switch1"] = {sid: "robot_cam1:55"};
	this.sidHashMap["robot_cam1:55"] = {rtwname: "<S9>/Switch1"};
	this.rtwnameHashMap["<S9>/Switch2"] = {sid: "robot_cam1:56"};
	this.sidHashMap["robot_cam1:56"] = {rtwname: "<S9>/Switch2"};
	this.rtwnameHashMap["<S9>/speed Threshold2"] = {sid: "robot_cam1:57"};
	this.sidHashMap["robot_cam1:57"] = {rtwname: "<S9>/speed Threshold2"};
	this.rtwnameHashMap["<S9>/Linear Velocity (v)"] = {sid: "robot_cam1:58"};
	this.sidHashMap["robot_cam1:58"] = {rtwname: "<S9>/Linear Velocity (v)"};
	this.rtwnameHashMap["<S9>/Angular Velocity (w)"] = {sid: "robot_cam1:59"};
	this.sidHashMap["robot_cam1:59"] = {rtwname: "<S9>/Angular Velocity (w)"};
	this.rtwnameHashMap["<S10>/u"] = {sid: "robot_cam1:57:1"};
	this.sidHashMap["robot_cam1:57:1"] = {rtwname: "<S10>/u"};
	this.rtwnameHashMap["<S10>/Compare"] = {sid: "robot_cam1:57:2"};
	this.sidHashMap["robot_cam1:57:2"] = {rtwname: "<S10>/Compare"};
	this.rtwnameHashMap["<S10>/Constant"] = {sid: "robot_cam1:57:3"};
	this.sidHashMap["robot_cam1:57:3"] = {rtwname: "<S10>/Constant"};
	this.rtwnameHashMap["<S10>/y"] = {sid: "robot_cam1:57:4"};
	this.sidHashMap["robot_cam1:57:4"] = {rtwname: "<S10>/y"};
	this.rtwnameHashMap["<S11>:1"] = {sid: "robot_cam1:4:1"};
	this.sidHashMap["robot_cam1:4:1"] = {rtwname: "<S11>:1"};
	this.rtwnameHashMap["<S11>:1:5"] = {sid: "robot_cam1:4:1:5"};
	this.sidHashMap["robot_cam1:4:1:5"] = {rtwname: "<S11>:1:5"};
	this.rtwnameHashMap["<S11>:1:6"] = {sid: "robot_cam1:4:1:6"};
	this.sidHashMap["robot_cam1:4:1:6"] = {rtwname: "<S11>:1:6"};
	this.rtwnameHashMap["<S12>:1"] = {sid: "robot_cam1:5:1"};
	this.sidHashMap["robot_cam1:5:1"] = {rtwname: "<S12>:1"};
	this.rtwnameHashMap["<S13>/Constant"] = {sid: "robot_cam1:10:51"};
	this.sidHashMap["robot_cam1:10:51"] = {rtwname: "<S13>/Constant"};
	this.rtwnameHashMap["<S13>/Enabled Subsystem"] = {sid: "robot_cam1:10:52"};
	this.sidHashMap["robot_cam1:10:52"] = {rtwname: "<S13>/Enabled Subsystem"};
	this.rtwnameHashMap["<S13>/SourceBlock"] = {sid: "robot_cam1:10:58"};
	this.sidHashMap["robot_cam1:10:58"] = {rtwname: "<S13>/SourceBlock"};
	this.rtwnameHashMap["<S13>/Out1"] = {sid: "robot_cam1:10:59"};
	this.sidHashMap["robot_cam1:10:59"] = {rtwname: "<S13>/Out1"};
	this.rtwnameHashMap["<S13>/Out2"] = {sid: "robot_cam1:10:60"};
	this.sidHashMap["robot_cam1:10:60"] = {rtwname: "<S13>/Out2"};
	this.rtwnameHashMap["<S14>/Constant"] = {sid: "robot_cam1:11:51"};
	this.sidHashMap["robot_cam1:11:51"] = {rtwname: "<S14>/Constant"};
	this.rtwnameHashMap["<S14>/Enabled Subsystem"] = {sid: "robot_cam1:11:52"};
	this.sidHashMap["robot_cam1:11:52"] = {rtwname: "<S14>/Enabled Subsystem"};
	this.rtwnameHashMap["<S14>/SourceBlock"] = {sid: "robot_cam1:11:58"};
	this.sidHashMap["robot_cam1:11:58"] = {rtwname: "<S14>/SourceBlock"};
	this.rtwnameHashMap["<S14>/Out1"] = {sid: "robot_cam1:11:59"};
	this.sidHashMap["robot_cam1:11:59"] = {rtwname: "<S14>/Out1"};
	this.rtwnameHashMap["<S14>/Out2"] = {sid: "robot_cam1:11:60"};
	this.sidHashMap["robot_cam1:11:60"] = {rtwname: "<S14>/Out2"};
	this.rtwnameHashMap["<S15>/In1"] = {sid: "robot_cam1:10:53"};
	this.sidHashMap["robot_cam1:10:53"] = {rtwname: "<S15>/In1"};
	this.rtwnameHashMap["<S15>/Enable"] = {sid: "robot_cam1:10:54"};
	this.sidHashMap["robot_cam1:10:54"] = {rtwname: "<S15>/Enable"};
	this.rtwnameHashMap["<S15>/Out1"] = {sid: "robot_cam1:10:55"};
	this.sidHashMap["robot_cam1:10:55"] = {rtwname: "<S15>/Out1"};
	this.rtwnameHashMap["<S16>/In1"] = {sid: "robot_cam1:11:53"};
	this.sidHashMap["robot_cam1:11:53"] = {rtwname: "<S16>/In1"};
	this.rtwnameHashMap["<S16>/Enable"] = {sid: "robot_cam1:11:54"};
	this.sidHashMap["robot_cam1:11:54"] = {rtwname: "<S16>/Enable"};
	this.rtwnameHashMap["<S16>/Out1"] = {sid: "robot_cam1:11:55"};
	this.sidHashMap["robot_cam1:11:55"] = {rtwname: "<S16>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
