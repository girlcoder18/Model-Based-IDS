function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Command robot */
	this.urlHashMap["robot_cam1a:65"] = "robot_cam1a.h:170";
	/* <Root>/Compute robot velocity */
	this.urlHashMap["robot_cam1a:29"] = "robot_cam1a.h:171";
	/* <Root>/camera */
	this.urlHashMap["robot_cam1a:1"] = "robot_cam1a.h:164,172";
	/* <Root>/cyc_pursuit2 */
	this.urlHashMap["robot_cam1a:28"] = "robot_cam1a.cpp:144,151&robot_cam1a.h:173";
	/* <S1>/Command Velocity Publisher */
	this.urlHashMap["robot_cam1a:69"] = "robot_cam1a.cpp:136,226,270,284,302,313&robot_cam1a.h:174";
	/* <S1>/Linear Velocity (Slider) */
	this.urlHashMap["robot_cam1a:76"] = "robot_cam1a.h:175";
	/* <S2>/Proportional Controller */
	this.urlHashMap["robot_cam1a:36"] = "robot_cam1a.cpp:139,225&robot_cam1a.h:178";
	/* <S3>/Real-Imag to
Complex */
	this.urlHashMap["robot_cam1a:8"] = "robot_cam1a.h:145";
	/* <S3>/Real-Imag to
Complex1 */
	this.urlHashMap["robot_cam1a:9"] = "robot_cam1a.h:146";
	/* <S3>/Recieve */
	this.urlHashMap["robot_cam1a:87"] = "robot_cam1a.h:180";
	/* <S3>/To Workspace */
	this.urlHashMap["robot_cam1a:12"] = "robot_cam1a.h:147";
	/* <S3>/To Workspace1 */
	this.urlHashMap["robot_cam1a:13"] = "robot_cam1a.h:148";
	/* <S3>/To Workspace3 */
	this.urlHashMap["robot_cam1a:14"] = "robot_cam1a.h:149";
	/* <S3>/To Workspace4 */
	this.urlHashMap["robot_cam1a:15"] = "robot_cam1a.h:150";
	/* <S3>/To Workspace5 */
	this.urlHashMap["robot_cam1a:16"] = "robot_cam1a.h:151";
	/* <S3>/To Workspace6 */
	this.urlHashMap["robot_cam1a:17"] = "robot_cam1a.h:152";
	/* <S4>:1 */
	this.urlHashMap["robot_cam1a:28:1"] = "robot_cam1a.cpp:119";
	/* <S4>:1:4 */
	this.urlHashMap["robot_cam1a:28:1:4"] = "robot_cam1a.cpp:120";
	/* <S4>:1:5 */
	this.urlHashMap["robot_cam1a:28:1:5"] = "robot_cam1a.cpp:121";
	/* <S4>:1:6 */
	this.urlHashMap["robot_cam1a:28:1:6"] = "robot_cam1a.cpp:122";
	/* <S4>:1:7 */
	this.urlHashMap["robot_cam1a:28:1:7"] = "robot_cam1a.cpp:123";
	/* <S5>/Enable */
	this.urlHashMap["robot_cam1a:72"] = "robot_cam1a.cpp:137";
	/* <S5>/Blank Message */
	this.urlHashMap["robot_cam1a:73"] = "robot_cam1a.h:176";
	/* <S5>/Bus
Assignment1 */
	this.urlHashMap["robot_cam1a:74"] = "robot_cam1a.cpp:206&robot_cam1a.h:50";
	/* <S5>/Publish2 */
	this.urlHashMap["robot_cam1a:75"] = "robot_cam1a.cpp:215,221,271,283,303,312&robot_cam1a.h:177";
	/* <S6>/Slider
Gain */
	this.urlHashMap["robot_cam1a:76:31"] = "robot_cam1a.cpp:208,324&robot_cam1a.h:67&rtmodel.h:43";
	/* <S7>/Constant */
	this.urlHashMap["robot_cam1a:73:33"] = "robot_cam1a.cpp:207,520&robot_cam1a.h:76&rtmodel.h:237";
	/* <S8>/SinkBlock */
	this.urlHashMap["robot_cam1a:75:31"] = "robot_cam1a.cpp:216,217,272,282,304,305,311&robot_cam1a.h:56,57";
	/* <S9>/Enable */
	this.urlHashMap["robot_cam1a:42"] = "robot_cam1a.cpp:140";
	/* <S9>/Bound [-pi,pi] */
	this.urlHashMap["robot_cam1a:43"] = "robot_cam1a.cpp:170,186";
	/* <S9>/Desired Yaw */
	this.urlHashMap["robot_cam1a:44"] = "robot_cam1a.cpp:179";
	/* <S9>/Distance */
	this.urlHashMap["robot_cam1a:45"] = "robot_cam1a.cpp:193,201";
	/* <S9>/Distance1 */
	this.urlHashMap["robot_cam1a:46"] = "robot_cam1a.cpp:157,165";
	/* <S9>/Distance2 */
	this.urlHashMap["robot_cam1a:47"] = "robot_cam1a.cpp:190";
	/* <S9>/Distance3 */
	this.urlHashMap["robot_cam1a:48"] = "robot_cam1a.cpp:185";
	/* <S9>/Stop1 */
	this.urlHashMap["robot_cam1a:51"] = "robot_cam1a.cpp:169,529&robot_cam1a.h:85&rtmodel.h:246";
	/* <S9>/Sum */
	this.urlHashMap["robot_cam1a:52"] = "robot_cam1a.cpp:150";
	/* <S9>/Sum1 */
	this.urlHashMap["robot_cam1a:53"] = "robot_cam1a.cpp:143";
	/* <S9>/Sum3 */
	this.urlHashMap["robot_cam1a:54"] = "robot_cam1a.cpp:178";
	/* <S9>/Switch1 */
	this.urlHashMap["robot_cam1a:55"] = "robot_cam1a.cpp:167,204";
	/* <S9>/Switch2 */
	this.urlHashMap["robot_cam1a:56"] = "robot_cam1a.cpp:172";
	/* <S9>/speed Threshold2 */
	this.urlHashMap["robot_cam1a:57"] = "robot_cam1a.h:179";
	/* <S9>/Linear Velocity (v) */
	this.urlHashMap["robot_cam1a:58"] = "robot_cam1a.cpp:523&robot_cam1a.h:79&rtmodel.h:240";
	/* <S9>/Angular Velocity (w) */
	this.urlHashMap["robot_cam1a:59"] = "robot_cam1a.cpp:526&robot_cam1a.h:82&rtmodel.h:243";
	/* <S10>/Compare */
	this.urlHashMap["robot_cam1a:57:2"] = "robot_cam1a.cpp:171";
	/* <S10>/Constant */
	this.urlHashMap["robot_cam1a:57:3"] = "robot_cam1a.cpp:168,321&robot_cam1a.h:64&rtmodel.h:40";
	/* <S11>/Subscribe2 */
	this.urlHashMap["robot_cam1a:11"] = "robot_cam1a.cpp:115,227,256,268,291,300&robot_cam1a.h:181";
	/* <S11>/UDP Receive */
	this.urlHashMap["robot_cam1a:86"] = "robot_cam1a.h:49";
	/* <S12>/Constant */
	this.urlHashMap["robot_cam1a:11:51"] = "robot_cam1a.cpp:504&robot_cam1a.h:73&rtmodel.h:221";
	/* <S12>/Enabled
Subsystem */
	this.urlHashMap["robot_cam1a:11:52"] = "robot_cam1a.h:182";
	/* <S12>/SourceBlock */
	this.urlHashMap["robot_cam1a:11:58"] = "robot_cam1a.cpp:116,117,224,257,267,292,293,299&robot_cam1a.h:55,58";
	/* <S13>/Out1 */
	this.urlHashMap["robot_cam1a:11:55"] = "robot_cam1a.cpp:414&robot_cam1a.h:70&rtmodel.h:132";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "robot_cam1a"};
	this.sidHashMap["robot_cam1a"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "robot_cam1a:65"};
	this.sidHashMap["robot_cam1a:65"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "robot_cam1a:29"};
	this.sidHashMap["robot_cam1a:29"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "robot_cam1a:1"};
	this.sidHashMap["robot_cam1a:1"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "robot_cam1a:28"};
	this.sidHashMap["robot_cam1a:28"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "robot_cam1a:69"};
	this.sidHashMap["robot_cam1a:69"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "robot_cam1a:76"};
	this.sidHashMap["robot_cam1a:76"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "robot_cam1a:73"};
	this.sidHashMap["robot_cam1a:73"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "robot_cam1a:75"};
	this.sidHashMap["robot_cam1a:75"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "robot_cam1a:36"};
	this.sidHashMap["robot_cam1a:36"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "robot_cam1a:57"};
	this.sidHashMap["robot_cam1a:57"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "robot_cam1a:87"};
	this.sidHashMap["robot_cam1a:87"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "robot_cam1a:11"};
	this.sidHashMap["robot_cam1a:11"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<S13>"] = {sid: "robot_cam1a:11:52"};
	this.sidHashMap["robot_cam1a:11:52"] = {rtwname: "<S13>"};
	this.rtwnameHashMap["<Root>/Command robot"] = {sid: "robot_cam1a:65"};
	this.sidHashMap["robot_cam1a:65"] = {rtwname: "<Root>/Command robot"};
	this.rtwnameHashMap["<Root>/Compute robot velocity"] = {sid: "robot_cam1a:29"};
	this.sidHashMap["robot_cam1a:29"] = {rtwname: "<Root>/Compute robot velocity"};
	this.rtwnameHashMap["<Root>/camera"] = {sid: "robot_cam1a:1"};
	this.sidHashMap["robot_cam1a:1"] = {rtwname: "<Root>/camera"};
	this.rtwnameHashMap["<Root>/cyc_pursuit2"] = {sid: "robot_cam1a:28"};
	this.sidHashMap["robot_cam1a:28"] = {rtwname: "<Root>/cyc_pursuit2"};
	this.rtwnameHashMap["<S1>/robot_0_velocity"] = {sid: "robot_cam1a:66"};
	this.sidHashMap["robot_cam1a:66"] = {rtwname: "<S1>/robot_0_velocity"};
	this.rtwnameHashMap["<S1>/robot_0_angle"] = {sid: "robot_cam1a:67"};
	this.sidHashMap["robot_cam1a:67"] = {rtwname: "<S1>/robot_0_angle"};
	this.rtwnameHashMap["<S1>/enbale_r0b0t_0"] = {sid: "robot_cam1a:68"};
	this.sidHashMap["robot_cam1a:68"] = {rtwname: "<S1>/enbale_r0b0t_0"};
	this.rtwnameHashMap["<S1>/Command Velocity Publisher"] = {sid: "robot_cam1a:69"};
	this.sidHashMap["robot_cam1a:69"] = {rtwname: "<S1>/Command Velocity Publisher"};
	this.rtwnameHashMap["<S1>/Linear Velocity (Slider)"] = {sid: "robot_cam1a:76"};
	this.sidHashMap["robot_cam1a:76"] = {rtwname: "<S1>/Linear Velocity (Slider)"};
	this.rtwnameHashMap["<S2>/robot_0_x_des"] = {sid: "robot_cam1a:30"};
	this.sidHashMap["robot_cam1a:30"] = {rtwname: "<S2>/robot_0_x_des"};
	this.rtwnameHashMap["<S2>/robot_0_y_des"] = {sid: "robot_cam1a:31"};
	this.sidHashMap["robot_cam1a:31"] = {rtwname: "<S2>/robot_0_y_des"};
	this.rtwnameHashMap["<S2>/robot_0_x_pos"] = {sid: "robot_cam1a:32"};
	this.sidHashMap["robot_cam1a:32"] = {rtwname: "<S2>/robot_0_x_pos"};
	this.rtwnameHashMap["<S2>/robot_0_y_pos"] = {sid: "robot_cam1a:33"};
	this.sidHashMap["robot_cam1a:33"] = {rtwname: "<S2>/robot_0_y_pos"};
	this.rtwnameHashMap["<S2>/robot_0_orient"] = {sid: "robot_cam1a:34"};
	this.sidHashMap["robot_cam1a:34"] = {rtwname: "<S2>/robot_0_orient"};
	this.rtwnameHashMap["<S2>/Enable1"] = {sid: "robot_cam1a:35"};
	this.sidHashMap["robot_cam1a:35"] = {rtwname: "<S2>/Enable1"};
	this.rtwnameHashMap["<S2>/Proportional Controller"] = {sid: "robot_cam1a:36"};
	this.sidHashMap["robot_cam1a:36"] = {rtwname: "<S2>/Proportional Controller"};
	this.rtwnameHashMap["<S2>/robot_0_velocity"] = {sid: "robot_cam1a:60"};
	this.sidHashMap["robot_cam1a:60"] = {rtwname: "<S2>/robot_0_velocity"};
	this.rtwnameHashMap["<S2>/robot_0_angle"] = {sid: "robot_cam1a:61"};
	this.sidHashMap["robot_cam1a:61"] = {rtwname: "<S2>/robot_0_angle"};
	this.rtwnameHashMap["<S2>/enable_robot_0"] = {sid: "robot_cam1a:62"};
	this.sidHashMap["robot_cam1a:62"] = {rtwname: "<S2>/enable_robot_0"};
	this.rtwnameHashMap["<S3>/Demux"] = {sid: "robot_cam1a:94"};
	this.sidHashMap["robot_cam1a:94"] = {rtwname: "<S3>/Demux"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex"] = {sid: "robot_cam1a:8"};
	this.sidHashMap["robot_cam1a:8"] = {rtwname: "<S3>/Real-Imag to Complex"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex1"] = {sid: "robot_cam1a:9"};
	this.sidHashMap["robot_cam1a:9"] = {rtwname: "<S3>/Real-Imag to Complex1"};
	this.rtwnameHashMap["<S3>/Recieve"] = {sid: "robot_cam1a:87"};
	this.sidHashMap["robot_cam1a:87"] = {rtwname: "<S3>/Recieve"};
	this.rtwnameHashMap["<S3>/Terminator"] = {sid: "robot_cam1a:63"};
	this.sidHashMap["robot_cam1a:63"] = {rtwname: "<S3>/Terminator"};
	this.rtwnameHashMap["<S3>/Terminator1"] = {sid: "robot_cam1a:95"};
	this.sidHashMap["robot_cam1a:95"] = {rtwname: "<S3>/Terminator1"};
	this.rtwnameHashMap["<S3>/Terminator2"] = {sid: "robot_cam1a:96"};
	this.sidHashMap["robot_cam1a:96"] = {rtwname: "<S3>/Terminator2"};
	this.rtwnameHashMap["<S3>/Terminator3"] = {sid: "robot_cam1a:97"};
	this.sidHashMap["robot_cam1a:97"] = {rtwname: "<S3>/Terminator3"};
	this.rtwnameHashMap["<S3>/Terminator4"] = {sid: "robot_cam1a:98"};
	this.sidHashMap["robot_cam1a:98"] = {rtwname: "<S3>/Terminator4"};
	this.rtwnameHashMap["<S3>/Terminator5"] = {sid: "robot_cam1a:99"};
	this.sidHashMap["robot_cam1a:99"] = {rtwname: "<S3>/Terminator5"};
	this.rtwnameHashMap["<S3>/Terminator6"] = {sid: "robot_cam1a:100"};
	this.sidHashMap["robot_cam1a:100"] = {rtwname: "<S3>/Terminator6"};
	this.rtwnameHashMap["<S3>/To Workspace"] = {sid: "robot_cam1a:12"};
	this.sidHashMap["robot_cam1a:12"] = {rtwname: "<S3>/To Workspace"};
	this.rtwnameHashMap["<S3>/To Workspace1"] = {sid: "robot_cam1a:13"};
	this.sidHashMap["robot_cam1a:13"] = {rtwname: "<S3>/To Workspace1"};
	this.rtwnameHashMap["<S3>/To Workspace3"] = {sid: "robot_cam1a:14"};
	this.sidHashMap["robot_cam1a:14"] = {rtwname: "<S3>/To Workspace3"};
	this.rtwnameHashMap["<S3>/To Workspace4"] = {sid: "robot_cam1a:15"};
	this.sidHashMap["robot_cam1a:15"] = {rtwname: "<S3>/To Workspace4"};
	this.rtwnameHashMap["<S3>/To Workspace5"] = {sid: "robot_cam1a:16"};
	this.sidHashMap["robot_cam1a:16"] = {rtwname: "<S3>/To Workspace5"};
	this.rtwnameHashMap["<S3>/To Workspace6"] = {sid: "robot_cam1a:17"};
	this.sidHashMap["robot_cam1a:17"] = {rtwname: "<S3>/To Workspace6"};
	this.rtwnameHashMap["<S3>/robot_0_x_pos"] = {sid: "robot_cam1a:18"};
	this.sidHashMap["robot_cam1a:18"] = {rtwname: "<S3>/robot_0_x_pos"};
	this.rtwnameHashMap["<S3>/robot_0_y_pos"] = {sid: "robot_cam1a:19"};
	this.sidHashMap["robot_cam1a:19"] = {rtwname: "<S3>/robot_0_y_pos"};
	this.rtwnameHashMap["<S3>/robot_1_x_pos"] = {sid: "robot_cam1a:26"};
	this.sidHashMap["robot_cam1a:26"] = {rtwname: "<S3>/robot_1_x_pos"};
	this.rtwnameHashMap["<S3>/robot_1_y_pos"] = {sid: "robot_cam1a:27"};
	this.sidHashMap["robot_cam1a:27"] = {rtwname: "<S3>/robot_1_y_pos"};
	this.rtwnameHashMap["<S3>/robot_0_orient"] = {sid: "robot_cam1a:22"};
	this.sidHashMap["robot_cam1a:22"] = {rtwname: "<S3>/robot_0_orient"};
	this.rtwnameHashMap["<S3>/Enable1"] = {sid: "robot_cam1a:23"};
	this.sidHashMap["robot_cam1a:23"] = {rtwname: "<S3>/Enable1"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "robot_cam1a:28:1"};
	this.sidHashMap["robot_cam1a:28:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "robot_cam1a:28:1:4"};
	this.sidHashMap["robot_cam1a:28:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "robot_cam1a:28:1:5"};
	this.sidHashMap["robot_cam1a:28:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:6"] = {sid: "robot_cam1a:28:1:6"};
	this.sidHashMap["robot_cam1a:28:1:6"] = {rtwname: "<S4>:1:6"};
	this.rtwnameHashMap["<S4>:1:7"] = {sid: "robot_cam1a:28:1:7"};
	this.sidHashMap["robot_cam1a:28:1:7"] = {rtwname: "<S4>:1:7"};
	this.rtwnameHashMap["<S5>/v"] = {sid: "robot_cam1a:70"};
	this.sidHashMap["robot_cam1a:70"] = {rtwname: "<S5>/v"};
	this.rtwnameHashMap["<S5>/w"] = {sid: "robot_cam1a:71"};
	this.sidHashMap["robot_cam1a:71"] = {rtwname: "<S5>/w"};
	this.rtwnameHashMap["<S5>/Enable"] = {sid: "robot_cam1a:72"};
	this.sidHashMap["robot_cam1a:72"] = {rtwname: "<S5>/Enable"};
	this.rtwnameHashMap["<S5>/Blank Message"] = {sid: "robot_cam1a:73"};
	this.sidHashMap["robot_cam1a:73"] = {rtwname: "<S5>/Blank Message"};
	this.rtwnameHashMap["<S5>/Bus Assignment1"] = {sid: "robot_cam1a:74"};
	this.sidHashMap["robot_cam1a:74"] = {rtwname: "<S5>/Bus Assignment1"};
	this.rtwnameHashMap["<S5>/Publish2"] = {sid: "robot_cam1a:75"};
	this.sidHashMap["robot_cam1a:75"] = {rtwname: "<S5>/Publish2"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "robot_cam1a:76:30"};
	this.sidHashMap["robot_cam1a:76:30"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/Slider Gain"] = {sid: "robot_cam1a:76:31"};
	this.sidHashMap["robot_cam1a:76:31"] = {rtwname: "<S6>/Slider Gain"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "robot_cam1a:76:32"};
	this.sidHashMap["robot_cam1a:76:32"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "robot_cam1a:73:33"};
	this.sidHashMap["robot_cam1a:73:33"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/Out"] = {sid: "robot_cam1a:73:34"};
	this.sidHashMap["robot_cam1a:73:34"] = {rtwname: "<S7>/Out"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "robot_cam1a:75:29"};
	this.sidHashMap["robot_cam1a:75:29"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/SignalSpecification"] = {sid: "robot_cam1a:75:30"};
	this.sidHashMap["robot_cam1a:75:30"] = {rtwname: "<S8>/SignalSpecification"};
	this.rtwnameHashMap["<S8>/SinkBlock"] = {sid: "robot_cam1a:75:31"};
	this.sidHashMap["robot_cam1a:75:31"] = {rtwname: "<S8>/SinkBlock"};
	this.rtwnameHashMap["<S9>/Desired position1"] = {sid: "robot_cam1a:37"};
	this.sidHashMap["robot_cam1a:37"] = {rtwname: "<S9>/Desired position1"};
	this.rtwnameHashMap["<S9>/Desired position"] = {sid: "robot_cam1a:38"};
	this.sidHashMap["robot_cam1a:38"] = {rtwname: "<S9>/Desired position"};
	this.rtwnameHashMap["<S9>/Position X"] = {sid: "robot_cam1a:39"};
	this.sidHashMap["robot_cam1a:39"] = {rtwname: "<S9>/Position X"};
	this.rtwnameHashMap["<S9>/Position Y"] = {sid: "robot_cam1a:40"};
	this.sidHashMap["robot_cam1a:40"] = {rtwname: "<S9>/Position Y"};
	this.rtwnameHashMap["<S9>/Orientation (theta)"] = {sid: "robot_cam1a:41"};
	this.sidHashMap["robot_cam1a:41"] = {rtwname: "<S9>/Orientation (theta)"};
	this.rtwnameHashMap["<S9>/Enable"] = {sid: "robot_cam1a:42"};
	this.sidHashMap["robot_cam1a:42"] = {rtwname: "<S9>/Enable"};
	this.rtwnameHashMap["<S9>/Bound [-pi,pi]"] = {sid: "robot_cam1a:43"};
	this.sidHashMap["robot_cam1a:43"] = {rtwname: "<S9>/Bound [-pi,pi]"};
	this.rtwnameHashMap["<S9>/Desired Yaw"] = {sid: "robot_cam1a:44"};
	this.sidHashMap["robot_cam1a:44"] = {rtwname: "<S9>/Desired Yaw"};
	this.rtwnameHashMap["<S9>/Distance"] = {sid: "robot_cam1a:45"};
	this.sidHashMap["robot_cam1a:45"] = {rtwname: "<S9>/Distance"};
	this.rtwnameHashMap["<S9>/Distance1"] = {sid: "robot_cam1a:46"};
	this.sidHashMap["robot_cam1a:46"] = {rtwname: "<S9>/Distance1"};
	this.rtwnameHashMap["<S9>/Distance2"] = {sid: "robot_cam1a:47"};
	this.sidHashMap["robot_cam1a:47"] = {rtwname: "<S9>/Distance2"};
	this.rtwnameHashMap["<S9>/Distance3"] = {sid: "robot_cam1a:48"};
	this.sidHashMap["robot_cam1a:48"] = {rtwname: "<S9>/Distance3"};
	this.rtwnameHashMap["<S9>/Mux"] = {sid: "robot_cam1a:49"};
	this.sidHashMap["robot_cam1a:49"] = {rtwname: "<S9>/Mux"};
	this.rtwnameHashMap["<S9>/Mux1"] = {sid: "robot_cam1a:50"};
	this.sidHashMap["robot_cam1a:50"] = {rtwname: "<S9>/Mux1"};
	this.rtwnameHashMap["<S9>/Stop1"] = {sid: "robot_cam1a:51"};
	this.sidHashMap["robot_cam1a:51"] = {rtwname: "<S9>/Stop1"};
	this.rtwnameHashMap["<S9>/Sum"] = {sid: "robot_cam1a:52"};
	this.sidHashMap["robot_cam1a:52"] = {rtwname: "<S9>/Sum"};
	this.rtwnameHashMap["<S9>/Sum1"] = {sid: "robot_cam1a:53"};
	this.sidHashMap["robot_cam1a:53"] = {rtwname: "<S9>/Sum1"};
	this.rtwnameHashMap["<S9>/Sum3"] = {sid: "robot_cam1a:54"};
	this.sidHashMap["robot_cam1a:54"] = {rtwname: "<S9>/Sum3"};
	this.rtwnameHashMap["<S9>/Switch1"] = {sid: "robot_cam1a:55"};
	this.sidHashMap["robot_cam1a:55"] = {rtwname: "<S9>/Switch1"};
	this.rtwnameHashMap["<S9>/Switch2"] = {sid: "robot_cam1a:56"};
	this.sidHashMap["robot_cam1a:56"] = {rtwname: "<S9>/Switch2"};
	this.rtwnameHashMap["<S9>/speed Threshold2"] = {sid: "robot_cam1a:57"};
	this.sidHashMap["robot_cam1a:57"] = {rtwname: "<S9>/speed Threshold2"};
	this.rtwnameHashMap["<S9>/Linear Velocity (v)"] = {sid: "robot_cam1a:58"};
	this.sidHashMap["robot_cam1a:58"] = {rtwname: "<S9>/Linear Velocity (v)"};
	this.rtwnameHashMap["<S9>/Angular Velocity (w)"] = {sid: "robot_cam1a:59"};
	this.sidHashMap["robot_cam1a:59"] = {rtwname: "<S9>/Angular Velocity (w)"};
	this.rtwnameHashMap["<S10>/u"] = {sid: "robot_cam1a:57:1"};
	this.sidHashMap["robot_cam1a:57:1"] = {rtwname: "<S10>/u"};
	this.rtwnameHashMap["<S10>/Compare"] = {sid: "robot_cam1a:57:2"};
	this.sidHashMap["robot_cam1a:57:2"] = {rtwname: "<S10>/Compare"};
	this.rtwnameHashMap["<S10>/Constant"] = {sid: "robot_cam1a:57:3"};
	this.sidHashMap["robot_cam1a:57:3"] = {rtwname: "<S10>/Constant"};
	this.rtwnameHashMap["<S10>/y"] = {sid: "robot_cam1a:57:4"};
	this.sidHashMap["robot_cam1a:57:4"] = {rtwname: "<S10>/y"};
	this.rtwnameHashMap["<S11>/Subscribe2"] = {sid: "robot_cam1a:11"};
	this.sidHashMap["robot_cam1a:11"] = {rtwname: "<S11>/Subscribe2"};
	this.rtwnameHashMap["<S11>/Terminator"] = {sid: "robot_cam1a:92"};
	this.sidHashMap["robot_cam1a:92"] = {rtwname: "<S11>/Terminator"};
	this.rtwnameHashMap["<S11>/Terminator1"] = {sid: "robot_cam1a:93"};
	this.sidHashMap["robot_cam1a:93"] = {rtwname: "<S11>/Terminator1"};
	this.rtwnameHashMap["<S11>/UDP Receive"] = {sid: "robot_cam1a:86"};
	this.sidHashMap["robot_cam1a:86"] = {rtwname: "<S11>/UDP Receive"};
	this.rtwnameHashMap["<S11>/Enable"] = {sid: "robot_cam1a:88"};
	this.sidHashMap["robot_cam1a:88"] = {rtwname: "<S11>/Enable"};
	this.rtwnameHashMap["<S11>/Data"] = {sid: "robot_cam1a:90"};
	this.sidHashMap["robot_cam1a:90"] = {rtwname: "<S11>/Data"};
	this.rtwnameHashMap["<S12>/Constant"] = {sid: "robot_cam1a:11:51"};
	this.sidHashMap["robot_cam1a:11:51"] = {rtwname: "<S12>/Constant"};
	this.rtwnameHashMap["<S12>/Enabled Subsystem"] = {sid: "robot_cam1a:11:52"};
	this.sidHashMap["robot_cam1a:11:52"] = {rtwname: "<S12>/Enabled Subsystem"};
	this.rtwnameHashMap["<S12>/SourceBlock"] = {sid: "robot_cam1a:11:58"};
	this.sidHashMap["robot_cam1a:11:58"] = {rtwname: "<S12>/SourceBlock"};
	this.rtwnameHashMap["<S12>/Out1"] = {sid: "robot_cam1a:11:59"};
	this.sidHashMap["robot_cam1a:11:59"] = {rtwname: "<S12>/Out1"};
	this.rtwnameHashMap["<S12>/Out2"] = {sid: "robot_cam1a:11:60"};
	this.sidHashMap["robot_cam1a:11:60"] = {rtwname: "<S12>/Out2"};
	this.rtwnameHashMap["<S13>/In1"] = {sid: "robot_cam1a:11:53"};
	this.sidHashMap["robot_cam1a:11:53"] = {rtwname: "<S13>/In1"};
	this.rtwnameHashMap["<S13>/Enable"] = {sid: "robot_cam1a:11:54"};
	this.sidHashMap["robot_cam1a:11:54"] = {rtwname: "<S13>/Enable"};
	this.rtwnameHashMap["<S13>/Out1"] = {sid: "robot_cam1a:11:55"};
	this.sidHashMap["robot_cam1a:11:55"] = {rtwname: "<S13>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
