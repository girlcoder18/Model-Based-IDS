function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Command robot */
	this.urlHashMap["robot_cam2:65"] = "robot_cam2.h:190";
	/* <Root>/Compute robot velocity */
	this.urlHashMap["robot_cam2:29"] = "robot_cam2.h:191";
	/* <Root>/camera */
	this.urlHashMap["robot_cam2:1"] = "robot_cam2.h:184,192";
	/* <Root>/cyc_pursuit2 */
	this.urlHashMap["robot_cam2:28"] = "robot_cam2.cpp:207,216&robot_cam2.h:193";
	/* <S1>/Command Velocity Publisher */
	this.urlHashMap["robot_cam2:69"] = "robot_cam2.cpp:195,296,365,379,424,435&robot_cam2.h:194";
	/* <S1>/Linear Velocity (Slider) */
	this.urlHashMap["robot_cam2:76"] = "robot_cam2.h:195";
	/* <S2>/Proportional Controller */
	this.urlHashMap["robot_cam2:36"] = "robot_cam2.cpp:198,295&robot_cam2.h:198";
	/* <S3>/Conversion1 */
	this.urlHashMap["robot_cam2:4"] = "robot_cam2.cpp:62,298&robot_cam2.h:46,48,62,200&robot_cam2_types.h:141";
	/* <S3>/Conversion2 */
	this.urlHashMap["robot_cam2:5"] = "robot_cam2.cpp:63,175&robot_cam2.h:61,201";
	/* <S3>/Real-Imag to
Complex */
	this.urlHashMap["robot_cam2:8"] = "robot_cam2.h:165";
	/* <S3>/Real-Imag to
Complex1 */
	this.urlHashMap["robot_cam2:9"] = "robot_cam2.h:166";
	/* <S3>/Subscribe1 */
	this.urlHashMap["robot_cam2:10"] = "robot_cam2.cpp:157,173,351,363,389,395,413,422&robot_cam2.h:202";
	/* <S3>/Subscribe2 */
	this.urlHashMap["robot_cam2:11"] = "robot_cam2.cpp:140,155,201,294,337,349,381,387,402,411&robot_cam2.h:203";
	/* <S3>/To Workspace */
	this.urlHashMap["robot_cam2:12"] = "robot_cam2.h:167";
	/* <S3>/To Workspace1 */
	this.urlHashMap["robot_cam2:13"] = "robot_cam2.h:168";
	/* <S3>/To Workspace3 */
	this.urlHashMap["robot_cam2:14"] = "robot_cam2.h:169";
	/* <S3>/To Workspace4 */
	this.urlHashMap["robot_cam2:15"] = "robot_cam2.h:170";
	/* <S3>/To Workspace5 */
	this.urlHashMap["robot_cam2:16"] = "robot_cam2.h:171";
	/* <S3>/To Workspace6 */
	this.urlHashMap["robot_cam2:17"] = "robot_cam2.h:172";
	/* <S4>:1 */
	this.urlHashMap["robot_cam2:28:1"] = "robot_cam2.cpp:176";
	/* <S4>:1:4 */
	this.urlHashMap["robot_cam2:28:1:4"] = "robot_cam2.cpp:177";
	/* <S4>:1:5 */
	this.urlHashMap["robot_cam2:28:1:5"] = "robot_cam2.cpp:178";
	/* <S4>:1:6 */
	this.urlHashMap["robot_cam2:28:1:6"] = "robot_cam2.cpp:179";
	/* <S4>:1:7 */
	this.urlHashMap["robot_cam2:28:1:7"] = "robot_cam2.cpp:180";
	/* <S5>/Enable */
	this.urlHashMap["robot_cam2:72"] = "robot_cam2.cpp:196";
	/* <S5>/Blank Message */
	this.urlHashMap["robot_cam2:73"] = "robot_cam2.h:196";
	/* <S5>/Bus
Assignment1 */
	this.urlHashMap["robot_cam2:74"] = "robot_cam2.cpp:276&robot_cam2.h:56";
	/* <S5>/Publish2 */
	this.urlHashMap["robot_cam2:75"] = "robot_cam2.cpp:285,291,366,378,425,434&robot_cam2.h:197";
	/* <S6>/Slider
Gain */
	this.urlHashMap["robot_cam2:76:31"] = "robot_cam2.cpp:278,446&robot_cam2.h:81&rtmodel.h:43";
	/* <S7>/Constant */
	this.urlHashMap["robot_cam2:73:33"] = "robot_cam2.cpp:277,638&robot_cam2.h:96&rtmodel.h:235";
	/* <S8>/SinkBlock */
	this.urlHashMap["robot_cam2:75:31"] = "robot_cam2.cpp:286,287,367,377,426,427,433&robot_cam2.h:69,70";
	/* <S9>/Enable */
	this.urlHashMap["robot_cam2:42"] = "robot_cam2.cpp:199";
	/* <S9>/Bound [-pi,pi] */
	this.urlHashMap["robot_cam2:43"] = "robot_cam2.cpp:238,255";
	/* <S9>/Desired Yaw */
	this.urlHashMap["robot_cam2:44"] = "robot_cam2.cpp:247";
	/* <S9>/Distance */
	this.urlHashMap["robot_cam2:45"] = "robot_cam2.cpp:262,271";
	/* <S9>/Distance1 */
	this.urlHashMap["robot_cam2:46"] = "robot_cam2.cpp:224,233";
	/* <S9>/Distance2 */
	this.urlHashMap["robot_cam2:47"] = "robot_cam2.cpp:259";
	/* <S9>/Distance3 */
	this.urlHashMap["robot_cam2:48"] = "robot_cam2.cpp:254";
	/* <S9>/Stop1 */
	this.urlHashMap["robot_cam2:51"] = "robot_cam2.cpp:237,647&robot_cam2.h:105&rtmodel.h:244";
	/* <S9>/Sum */
	this.urlHashMap["robot_cam2:52"] = "robot_cam2.cpp:215&robot_cam2.h:58";
	/* <S9>/Sum1 */
	this.urlHashMap["robot_cam2:53"] = "robot_cam2.cpp:206&robot_cam2.h:57";
	/* <S9>/Sum3 */
	this.urlHashMap["robot_cam2:54"] = "robot_cam2.cpp:246&robot_cam2.h:59";
	/* <S9>/Switch1 */
	this.urlHashMap["robot_cam2:55"] = "robot_cam2.cpp:235,274";
	/* <S9>/Switch2 */
	this.urlHashMap["robot_cam2:56"] = "robot_cam2.cpp:240";
	/* <S9>/speed Threshold2 */
	this.urlHashMap["robot_cam2:57"] = "robot_cam2.h:199";
	/* <S9>/Linear Velocity (v) */
	this.urlHashMap["robot_cam2:58"] = "robot_cam2.cpp:641&robot_cam2.h:99&rtmodel.h:238";
	/* <S9>/Angular Velocity (w) */
	this.urlHashMap["robot_cam2:59"] = "robot_cam2.cpp:644&robot_cam2.h:102&rtmodel.h:241";
	/* <S10>/Compare */
	this.urlHashMap["robot_cam2:57:2"] = "robot_cam2.cpp:239";
	/* <S10>/Constant */
	this.urlHashMap["robot_cam2:57:3"] = "robot_cam2.cpp:236,443&robot_cam2.h:78&rtmodel.h:40";
	/* <S11>:1 */
	this.urlHashMap["robot_cam2:4:1"] = "robot_cam2.cpp:74";
	/* <S11>:1:5 */
	this.urlHashMap["robot_cam2:4:1:5"] = "robot_cam2.cpp:75";
	/* <S11>:1:6 */
	this.urlHashMap["robot_cam2:4:1:6"] = "robot_cam2.cpp:83";
	/* <S12>:1 */
	this.urlHashMap["robot_cam2:5:1"] = "msg=rtwMsg_reusableFunction&block=robot_cam2:5:1";
	/* <S13>/Constant */
	this.urlHashMap["robot_cam2:10:51"] = "robot_cam2.cpp:534&robot_cam2.h:87&rtmodel.h:131";
	/* <S13>/Enabled
Subsystem */
	this.urlHashMap["robot_cam2:10:52"] = "robot_cam2.cpp:164,172,390,394&robot_cam2.h:204";
	/* <S13>/SourceBlock */
	this.urlHashMap["robot_cam2:10:58"] = "robot_cam2.cpp:158,160,171,352,362,414,415,421&robot_cam2.h:68,72";
	/* <S14>/Constant */
	this.urlHashMap["robot_cam2:11:51"] = "robot_cam2.cpp:622&robot_cam2.h:93&rtmodel.h:219";
	/* <S14>/Enabled
Subsystem */
	this.urlHashMap["robot_cam2:11:52"] = "robot_cam2.cpp:147,154,382,386&robot_cam2.h:205";
	/* <S14>/SourceBlock */
	this.urlHashMap["robot_cam2:11:58"] = "robot_cam2.cpp:141,143,202,203,338,348,403,404,410&robot_cam2.h:67,71";
	/* <S15>/In1 */
	this.urlHashMap["robot_cam2:10:53"] = "robot_cam2.cpp:159&robot_cam2.h:54";
	/* <S15>/Enable */
	this.urlHashMap["robot_cam2:10:54"] = "robot_cam2.cpp:165";
	/* <S15>/Out1 */
	this.urlHashMap["robot_cam2:10:55"] = "robot_cam2.cpp:391,490&robot_cam2.h:84&rtmodel.h:87";
	/* <S16>/In1 */
	this.urlHashMap["robot_cam2:11:53"] = "robot_cam2.cpp:142&robot_cam2.h:53";
	/* <S16>/Enable */
	this.urlHashMap["robot_cam2:11:54"] = "robot_cam2.cpp:148";
	/* <S16>/Out1 */
	this.urlHashMap["robot_cam2:11:55"] = "robot_cam2.cpp:383,578&robot_cam2.h:90&rtmodel.h:175";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "robot_cam2"};
	this.sidHashMap["robot_cam2"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "robot_cam2:65"};
	this.sidHashMap["robot_cam2:65"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "robot_cam2:29"};
	this.sidHashMap["robot_cam2:29"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "robot_cam2:1"};
	this.sidHashMap["robot_cam2:1"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "robot_cam2:28"};
	this.sidHashMap["robot_cam2:28"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "robot_cam2:69"};
	this.sidHashMap["robot_cam2:69"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "robot_cam2:76"};
	this.sidHashMap["robot_cam2:76"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "robot_cam2:73"};
	this.sidHashMap["robot_cam2:73"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "robot_cam2:75"};
	this.sidHashMap["robot_cam2:75"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "robot_cam2:36"};
	this.sidHashMap["robot_cam2:36"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "robot_cam2:57"};
	this.sidHashMap["robot_cam2:57"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "robot_cam2:4"};
	this.sidHashMap["robot_cam2:4"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "robot_cam2:5"};
	this.sidHashMap["robot_cam2:5"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<S13>"] = {sid: "robot_cam2:10"};
	this.sidHashMap["robot_cam2:10"] = {rtwname: "<S13>"};
	this.rtwnameHashMap["<S14>"] = {sid: "robot_cam2:11"};
	this.sidHashMap["robot_cam2:11"] = {rtwname: "<S14>"};
	this.rtwnameHashMap["<S15>"] = {sid: "robot_cam2:10:52"};
	this.sidHashMap["robot_cam2:10:52"] = {rtwname: "<S15>"};
	this.rtwnameHashMap["<S16>"] = {sid: "robot_cam2:11:52"};
	this.sidHashMap["robot_cam2:11:52"] = {rtwname: "<S16>"};
	this.rtwnameHashMap["<Root>/Command robot"] = {sid: "robot_cam2:65"};
	this.sidHashMap["robot_cam2:65"] = {rtwname: "<Root>/Command robot"};
	this.rtwnameHashMap["<Root>/Compute robot velocity"] = {sid: "robot_cam2:29"};
	this.sidHashMap["robot_cam2:29"] = {rtwname: "<Root>/Compute robot velocity"};
	this.rtwnameHashMap["<Root>/camera"] = {sid: "robot_cam2:1"};
	this.sidHashMap["robot_cam2:1"] = {rtwname: "<Root>/camera"};
	this.rtwnameHashMap["<Root>/cyc_pursuit2"] = {sid: "robot_cam2:28"};
	this.sidHashMap["robot_cam2:28"] = {rtwname: "<Root>/cyc_pursuit2"};
	this.rtwnameHashMap["<S1>/robot_1_velocity"] = {sid: "robot_cam2:66"};
	this.sidHashMap["robot_cam2:66"] = {rtwname: "<S1>/robot_1_velocity"};
	this.rtwnameHashMap["<S1>/robot_1_angle"] = {sid: "robot_cam2:67"};
	this.sidHashMap["robot_cam2:67"] = {rtwname: "<S1>/robot_1_angle"};
	this.rtwnameHashMap["<S1>/enbale_r0b0t_1"] = {sid: "robot_cam2:68"};
	this.sidHashMap["robot_cam2:68"] = {rtwname: "<S1>/enbale_r0b0t_1"};
	this.rtwnameHashMap["<S1>/Command Velocity Publisher"] = {sid: "robot_cam2:69"};
	this.sidHashMap["robot_cam2:69"] = {rtwname: "<S1>/Command Velocity Publisher"};
	this.rtwnameHashMap["<S1>/Linear Velocity (Slider)"] = {sid: "robot_cam2:76"};
	this.sidHashMap["robot_cam2:76"] = {rtwname: "<S1>/Linear Velocity (Slider)"};
	this.rtwnameHashMap["<S2>/robot_1_x_des"] = {sid: "robot_cam2:30"};
	this.sidHashMap["robot_cam2:30"] = {rtwname: "<S2>/robot_1_x_des"};
	this.rtwnameHashMap["<S2>/robot_1_y_des"] = {sid: "robot_cam2:31"};
	this.sidHashMap["robot_cam2:31"] = {rtwname: "<S2>/robot_1_y_des"};
	this.rtwnameHashMap["<S2>/robot_1_x_pos"] = {sid: "robot_cam2:32"};
	this.sidHashMap["robot_cam2:32"] = {rtwname: "<S2>/robot_1_x_pos"};
	this.rtwnameHashMap["<S2>/robot_1_y_pos"] = {sid: "robot_cam2:33"};
	this.sidHashMap["robot_cam2:33"] = {rtwname: "<S2>/robot_1_y_pos"};
	this.rtwnameHashMap["<S2>/robot_1_orient"] = {sid: "robot_cam2:34"};
	this.sidHashMap["robot_cam2:34"] = {rtwname: "<S2>/robot_1_orient"};
	this.rtwnameHashMap["<S2>/Enable1"] = {sid: "robot_cam2:35"};
	this.sidHashMap["robot_cam2:35"] = {rtwname: "<S2>/Enable1"};
	this.rtwnameHashMap["<S2>/Proportional Controller"] = {sid: "robot_cam2:36"};
	this.sidHashMap["robot_cam2:36"] = {rtwname: "<S2>/Proportional Controller"};
	this.rtwnameHashMap["<S2>/robot_1_velocity"] = {sid: "robot_cam2:60"};
	this.sidHashMap["robot_cam2:60"] = {rtwname: "<S2>/robot_1_velocity"};
	this.rtwnameHashMap["<S2>/robot_1_angle"] = {sid: "robot_cam2:61"};
	this.sidHashMap["robot_cam2:61"] = {rtwname: "<S2>/robot_1_angle"};
	this.rtwnameHashMap["<S2>/enable_robot_1"] = {sid: "robot_cam2:62"};
	this.sidHashMap["robot_cam2:62"] = {rtwname: "<S2>/enable_robot_1"};
	this.rtwnameHashMap["<S3>/Bus Selector1"] = {sid: "robot_cam2:2"};
	this.sidHashMap["robot_cam2:2"] = {rtwname: "<S3>/Bus Selector1"};
	this.rtwnameHashMap["<S3>/Bus Selector2"] = {sid: "robot_cam2:3"};
	this.sidHashMap["robot_cam2:3"] = {rtwname: "<S3>/Bus Selector2"};
	this.rtwnameHashMap["<S3>/Conversion1"] = {sid: "robot_cam2:4"};
	this.sidHashMap["robot_cam2:4"] = {rtwname: "<S3>/Conversion1"};
	this.rtwnameHashMap["<S3>/Conversion2"] = {sid: "robot_cam2:5"};
	this.sidHashMap["robot_cam2:5"] = {rtwname: "<S3>/Conversion2"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex"] = {sid: "robot_cam2:8"};
	this.sidHashMap["robot_cam2:8"] = {rtwname: "<S3>/Real-Imag to Complex"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex1"] = {sid: "robot_cam2:9"};
	this.sidHashMap["robot_cam2:9"] = {rtwname: "<S3>/Real-Imag to Complex1"};
	this.rtwnameHashMap["<S3>/Subscribe1"] = {sid: "robot_cam2:10"};
	this.sidHashMap["robot_cam2:10"] = {rtwname: "<S3>/Subscribe1"};
	this.rtwnameHashMap["<S3>/Subscribe2"] = {sid: "robot_cam2:11"};
	this.sidHashMap["robot_cam2:11"] = {rtwname: "<S3>/Subscribe2"};
	this.rtwnameHashMap["<S3>/Terminator"] = {sid: "robot_cam2:63"};
	this.sidHashMap["robot_cam2:63"] = {rtwname: "<S3>/Terminator"};
	this.rtwnameHashMap["<S3>/Terminator1"] = {sid: "robot_cam2:64"};
	this.sidHashMap["robot_cam2:64"] = {rtwname: "<S3>/Terminator1"};
	this.rtwnameHashMap["<S3>/To Workspace"] = {sid: "robot_cam2:12"};
	this.sidHashMap["robot_cam2:12"] = {rtwname: "<S3>/To Workspace"};
	this.rtwnameHashMap["<S3>/To Workspace1"] = {sid: "robot_cam2:13"};
	this.sidHashMap["robot_cam2:13"] = {rtwname: "<S3>/To Workspace1"};
	this.rtwnameHashMap["<S3>/To Workspace3"] = {sid: "robot_cam2:14"};
	this.sidHashMap["robot_cam2:14"] = {rtwname: "<S3>/To Workspace3"};
	this.rtwnameHashMap["<S3>/To Workspace4"] = {sid: "robot_cam2:15"};
	this.sidHashMap["robot_cam2:15"] = {rtwname: "<S3>/To Workspace4"};
	this.rtwnameHashMap["<S3>/To Workspace5"] = {sid: "robot_cam2:16"};
	this.sidHashMap["robot_cam2:16"] = {rtwname: "<S3>/To Workspace5"};
	this.rtwnameHashMap["<S3>/To Workspace6"] = {sid: "robot_cam2:17"};
	this.sidHashMap["robot_cam2:17"] = {rtwname: "<S3>/To Workspace6"};
	this.rtwnameHashMap["<S3>/robot_1_x_pos"] = {sid: "robot_cam2:18"};
	this.sidHashMap["robot_cam2:18"] = {rtwname: "<S3>/robot_1_x_pos"};
	this.rtwnameHashMap["<S3>/robot_1_y_pos"] = {sid: "robot_cam2:19"};
	this.sidHashMap["robot_cam2:19"] = {rtwname: "<S3>/robot_1_y_pos"};
	this.rtwnameHashMap["<S3>/robot_3_x_pos"] = {sid: "robot_cam2:26"};
	this.sidHashMap["robot_cam2:26"] = {rtwname: "<S3>/robot_3_x_pos"};
	this.rtwnameHashMap["<S3>/robot_3_y_pos"] = {sid: "robot_cam2:27"};
	this.sidHashMap["robot_cam2:27"] = {rtwname: "<S3>/robot_3_y_pos"};
	this.rtwnameHashMap["<S3>/robot_1_orient"] = {sid: "robot_cam2:22"};
	this.sidHashMap["robot_cam2:22"] = {rtwname: "<S3>/robot_1_orient"};
	this.rtwnameHashMap["<S3>/Enable1"] = {sid: "robot_cam2:23"};
	this.sidHashMap["robot_cam2:23"] = {rtwname: "<S3>/Enable1"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "robot_cam2:28:1"};
	this.sidHashMap["robot_cam2:28:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "robot_cam2:28:1:4"};
	this.sidHashMap["robot_cam2:28:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "robot_cam2:28:1:5"};
	this.sidHashMap["robot_cam2:28:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:6"] = {sid: "robot_cam2:28:1:6"};
	this.sidHashMap["robot_cam2:28:1:6"] = {rtwname: "<S4>:1:6"};
	this.rtwnameHashMap["<S4>:1:7"] = {sid: "robot_cam2:28:1:7"};
	this.sidHashMap["robot_cam2:28:1:7"] = {rtwname: "<S4>:1:7"};
	this.rtwnameHashMap["<S5>/v"] = {sid: "robot_cam2:70"};
	this.sidHashMap["robot_cam2:70"] = {rtwname: "<S5>/v"};
	this.rtwnameHashMap["<S5>/w"] = {sid: "robot_cam2:71"};
	this.sidHashMap["robot_cam2:71"] = {rtwname: "<S5>/w"};
	this.rtwnameHashMap["<S5>/Enable"] = {sid: "robot_cam2:72"};
	this.sidHashMap["robot_cam2:72"] = {rtwname: "<S5>/Enable"};
	this.rtwnameHashMap["<S5>/Blank Message"] = {sid: "robot_cam2:73"};
	this.sidHashMap["robot_cam2:73"] = {rtwname: "<S5>/Blank Message"};
	this.rtwnameHashMap["<S5>/Bus Assignment1"] = {sid: "robot_cam2:74"};
	this.sidHashMap["robot_cam2:74"] = {rtwname: "<S5>/Bus Assignment1"};
	this.rtwnameHashMap["<S5>/Publish2"] = {sid: "robot_cam2:75"};
	this.sidHashMap["robot_cam2:75"] = {rtwname: "<S5>/Publish2"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "robot_cam2:76:30"};
	this.sidHashMap["robot_cam2:76:30"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/Slider Gain"] = {sid: "robot_cam2:76:31"};
	this.sidHashMap["robot_cam2:76:31"] = {rtwname: "<S6>/Slider Gain"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "robot_cam2:76:32"};
	this.sidHashMap["robot_cam2:76:32"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "robot_cam2:73:33"};
	this.sidHashMap["robot_cam2:73:33"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/Out"] = {sid: "robot_cam2:73:34"};
	this.sidHashMap["robot_cam2:73:34"] = {rtwname: "<S7>/Out"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "robot_cam2:75:29"};
	this.sidHashMap["robot_cam2:75:29"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/SignalSpecification"] = {sid: "robot_cam2:75:30"};
	this.sidHashMap["robot_cam2:75:30"] = {rtwname: "<S8>/SignalSpecification"};
	this.rtwnameHashMap["<S8>/SinkBlock"] = {sid: "robot_cam2:75:31"};
	this.sidHashMap["robot_cam2:75:31"] = {rtwname: "<S8>/SinkBlock"};
	this.rtwnameHashMap["<S9>/Desired position1"] = {sid: "robot_cam2:37"};
	this.sidHashMap["robot_cam2:37"] = {rtwname: "<S9>/Desired position1"};
	this.rtwnameHashMap["<S9>/Desired position"] = {sid: "robot_cam2:38"};
	this.sidHashMap["robot_cam2:38"] = {rtwname: "<S9>/Desired position"};
	this.rtwnameHashMap["<S9>/Position X"] = {sid: "robot_cam2:39"};
	this.sidHashMap["robot_cam2:39"] = {rtwname: "<S9>/Position X"};
	this.rtwnameHashMap["<S9>/Position Y"] = {sid: "robot_cam2:40"};
	this.sidHashMap["robot_cam2:40"] = {rtwname: "<S9>/Position Y"};
	this.rtwnameHashMap["<S9>/Orientation (theta)"] = {sid: "robot_cam2:41"};
	this.sidHashMap["robot_cam2:41"] = {rtwname: "<S9>/Orientation (theta)"};
	this.rtwnameHashMap["<S9>/Enable"] = {sid: "robot_cam2:42"};
	this.sidHashMap["robot_cam2:42"] = {rtwname: "<S9>/Enable"};
	this.rtwnameHashMap["<S9>/Bound [-pi,pi]"] = {sid: "robot_cam2:43"};
	this.sidHashMap["robot_cam2:43"] = {rtwname: "<S9>/Bound [-pi,pi]"};
	this.rtwnameHashMap["<S9>/Desired Yaw"] = {sid: "robot_cam2:44"};
	this.sidHashMap["robot_cam2:44"] = {rtwname: "<S9>/Desired Yaw"};
	this.rtwnameHashMap["<S9>/Distance"] = {sid: "robot_cam2:45"};
	this.sidHashMap["robot_cam2:45"] = {rtwname: "<S9>/Distance"};
	this.rtwnameHashMap["<S9>/Distance1"] = {sid: "robot_cam2:46"};
	this.sidHashMap["robot_cam2:46"] = {rtwname: "<S9>/Distance1"};
	this.rtwnameHashMap["<S9>/Distance2"] = {sid: "robot_cam2:47"};
	this.sidHashMap["robot_cam2:47"] = {rtwname: "<S9>/Distance2"};
	this.rtwnameHashMap["<S9>/Distance3"] = {sid: "robot_cam2:48"};
	this.sidHashMap["robot_cam2:48"] = {rtwname: "<S9>/Distance3"};
	this.rtwnameHashMap["<S9>/Mux"] = {sid: "robot_cam2:49"};
	this.sidHashMap["robot_cam2:49"] = {rtwname: "<S9>/Mux"};
	this.rtwnameHashMap["<S9>/Mux1"] = {sid: "robot_cam2:50"};
	this.sidHashMap["robot_cam2:50"] = {rtwname: "<S9>/Mux1"};
	this.rtwnameHashMap["<S9>/Stop1"] = {sid: "robot_cam2:51"};
	this.sidHashMap["robot_cam2:51"] = {rtwname: "<S9>/Stop1"};
	this.rtwnameHashMap["<S9>/Sum"] = {sid: "robot_cam2:52"};
	this.sidHashMap["robot_cam2:52"] = {rtwname: "<S9>/Sum"};
	this.rtwnameHashMap["<S9>/Sum1"] = {sid: "robot_cam2:53"};
	this.sidHashMap["robot_cam2:53"] = {rtwname: "<S9>/Sum1"};
	this.rtwnameHashMap["<S9>/Sum3"] = {sid: "robot_cam2:54"};
	this.sidHashMap["robot_cam2:54"] = {rtwname: "<S9>/Sum3"};
	this.rtwnameHashMap["<S9>/Switch1"] = {sid: "robot_cam2:55"};
	this.sidHashMap["robot_cam2:55"] = {rtwname: "<S9>/Switch1"};
	this.rtwnameHashMap["<S9>/Switch2"] = {sid: "robot_cam2:56"};
	this.sidHashMap["robot_cam2:56"] = {rtwname: "<S9>/Switch2"};
	this.rtwnameHashMap["<S9>/speed Threshold2"] = {sid: "robot_cam2:57"};
	this.sidHashMap["robot_cam2:57"] = {rtwname: "<S9>/speed Threshold2"};
	this.rtwnameHashMap["<S9>/Linear Velocity (v)"] = {sid: "robot_cam2:58"};
	this.sidHashMap["robot_cam2:58"] = {rtwname: "<S9>/Linear Velocity (v)"};
	this.rtwnameHashMap["<S9>/Angular Velocity (w)"] = {sid: "robot_cam2:59"};
	this.sidHashMap["robot_cam2:59"] = {rtwname: "<S9>/Angular Velocity (w)"};
	this.rtwnameHashMap["<S10>/u"] = {sid: "robot_cam2:57:1"};
	this.sidHashMap["robot_cam2:57:1"] = {rtwname: "<S10>/u"};
	this.rtwnameHashMap["<S10>/Compare"] = {sid: "robot_cam2:57:2"};
	this.sidHashMap["robot_cam2:57:2"] = {rtwname: "<S10>/Compare"};
	this.rtwnameHashMap["<S10>/Constant"] = {sid: "robot_cam2:57:3"};
	this.sidHashMap["robot_cam2:57:3"] = {rtwname: "<S10>/Constant"};
	this.rtwnameHashMap["<S10>/y"] = {sid: "robot_cam2:57:4"};
	this.sidHashMap["robot_cam2:57:4"] = {rtwname: "<S10>/y"};
	this.rtwnameHashMap["<S11>:1"] = {sid: "robot_cam2:4:1"};
	this.sidHashMap["robot_cam2:4:1"] = {rtwname: "<S11>:1"};
	this.rtwnameHashMap["<S11>:1:5"] = {sid: "robot_cam2:4:1:5"};
	this.sidHashMap["robot_cam2:4:1:5"] = {rtwname: "<S11>:1:5"};
	this.rtwnameHashMap["<S11>:1:6"] = {sid: "robot_cam2:4:1:6"};
	this.sidHashMap["robot_cam2:4:1:6"] = {rtwname: "<S11>:1:6"};
	this.rtwnameHashMap["<S12>:1"] = {sid: "robot_cam2:5:1"};
	this.sidHashMap["robot_cam2:5:1"] = {rtwname: "<S12>:1"};
	this.rtwnameHashMap["<S13>/Constant"] = {sid: "robot_cam2:10:51"};
	this.sidHashMap["robot_cam2:10:51"] = {rtwname: "<S13>/Constant"};
	this.rtwnameHashMap["<S13>/Enabled Subsystem"] = {sid: "robot_cam2:10:52"};
	this.sidHashMap["robot_cam2:10:52"] = {rtwname: "<S13>/Enabled Subsystem"};
	this.rtwnameHashMap["<S13>/SourceBlock"] = {sid: "robot_cam2:10:58"};
	this.sidHashMap["robot_cam2:10:58"] = {rtwname: "<S13>/SourceBlock"};
	this.rtwnameHashMap["<S13>/Out1"] = {sid: "robot_cam2:10:59"};
	this.sidHashMap["robot_cam2:10:59"] = {rtwname: "<S13>/Out1"};
	this.rtwnameHashMap["<S13>/Out2"] = {sid: "robot_cam2:10:60"};
	this.sidHashMap["robot_cam2:10:60"] = {rtwname: "<S13>/Out2"};
	this.rtwnameHashMap["<S14>/Constant"] = {sid: "robot_cam2:11:51"};
	this.sidHashMap["robot_cam2:11:51"] = {rtwname: "<S14>/Constant"};
	this.rtwnameHashMap["<S14>/Enabled Subsystem"] = {sid: "robot_cam2:11:52"};
	this.sidHashMap["robot_cam2:11:52"] = {rtwname: "<S14>/Enabled Subsystem"};
	this.rtwnameHashMap["<S14>/SourceBlock"] = {sid: "robot_cam2:11:58"};
	this.sidHashMap["robot_cam2:11:58"] = {rtwname: "<S14>/SourceBlock"};
	this.rtwnameHashMap["<S14>/Out1"] = {sid: "robot_cam2:11:59"};
	this.sidHashMap["robot_cam2:11:59"] = {rtwname: "<S14>/Out1"};
	this.rtwnameHashMap["<S14>/Out2"] = {sid: "robot_cam2:11:60"};
	this.sidHashMap["robot_cam2:11:60"] = {rtwname: "<S14>/Out2"};
	this.rtwnameHashMap["<S15>/In1"] = {sid: "robot_cam2:10:53"};
	this.sidHashMap["robot_cam2:10:53"] = {rtwname: "<S15>/In1"};
	this.rtwnameHashMap["<S15>/Enable"] = {sid: "robot_cam2:10:54"};
	this.sidHashMap["robot_cam2:10:54"] = {rtwname: "<S15>/Enable"};
	this.rtwnameHashMap["<S15>/Out1"] = {sid: "robot_cam2:10:55"};
	this.sidHashMap["robot_cam2:10:55"] = {rtwname: "<S15>/Out1"};
	this.rtwnameHashMap["<S16>/In1"] = {sid: "robot_cam2:11:53"};
	this.sidHashMap["robot_cam2:11:53"] = {rtwname: "<S16>/In1"};
	this.rtwnameHashMap["<S16>/Enable"] = {sid: "robot_cam2:11:54"};
	this.sidHashMap["robot_cam2:11:54"] = {rtwname: "<S16>/Enable"};
	this.rtwnameHashMap["<S16>/Out1"] = {sid: "robot_cam2:11:55"};
	this.sidHashMap["robot_cam2:11:55"] = {rtwname: "<S16>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
