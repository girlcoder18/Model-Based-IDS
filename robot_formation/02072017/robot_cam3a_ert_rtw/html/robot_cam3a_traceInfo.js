function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Command robot */
	this.urlHashMap["robot_cam3a:65"] = "robot_cam3a.h:171";
	/* <Root>/Compute robot velocity */
	this.urlHashMap["robot_cam3a:29"] = "robot_cam3a.h:172";
	/* <Root>/camera */
	this.urlHashMap["robot_cam3a:1"] = "robot_cam3a.h:165,173";
	/* <Root>/cyc_pursuit2 */
	this.urlHashMap["robot_cam3a:28"] = "robot_cam3a.cpp:134,140&robot_cam3a.h:174";
	/* <S1>/Enable */
	this.urlHashMap["robot_cam3a:95"] = "msg=&block=robot_cam3a:95";
	/* <S1>/Command Velocity Publisher */
	this.urlHashMap["robot_cam3a:69"] = "robot_cam3a.cpp:126,215,259,273,291,302&robot_cam3a.h:175";
	/* <S1>/Linear Velocity (Slider) */
	this.urlHashMap["robot_cam3a:76"] = "robot_cam3a.h:176";
	/* <S2>/Proportional Controller */
	this.urlHashMap["robot_cam3a:36"] = "robot_cam3a.cpp:129,214&robot_cam3a.h:179";
	/* <S3>/Real-Imag to
Complex */
	this.urlHashMap["robot_cam3a:8"] = "robot_cam3a.h:145";
	/* <S3>/Real-Imag to
Complex1 */
	this.urlHashMap["robot_cam3a:9"] = "robot_cam3a.h:146";
	/* <S3>/Recieve */
	this.urlHashMap["robot_cam3a:77"] = "robot_cam3a.h:181";
	/* <S3>/Scope */
	this.urlHashMap["robot_cam3a:91"] = "robot_cam3a.h:147";
	/* <S3>/To Workspace */
	this.urlHashMap["robot_cam3a:12"] = "robot_cam3a.h:148";
	/* <S3>/To Workspace1 */
	this.urlHashMap["robot_cam3a:13"] = "robot_cam3a.h:149";
	/* <S3>/To Workspace3 */
	this.urlHashMap["robot_cam3a:14"] = "robot_cam3a.h:150";
	/* <S3>/To Workspace4 */
	this.urlHashMap["robot_cam3a:15"] = "robot_cam3a.h:151";
	/* <S3>/To Workspace5 */
	this.urlHashMap["robot_cam3a:16"] = "robot_cam3a.h:152";
	/* <S3>/To Workspace6 */
	this.urlHashMap["robot_cam3a:17"] = "robot_cam3a.h:153";
	/* <S4>:1 */
	this.urlHashMap["robot_cam3a:28:1"] = "robot_cam3a.cpp:119";
	/* <S4>:1:4 */
	this.urlHashMap["robot_cam3a:28:1:4"] = "robot_cam3a.cpp:120";
	/* <S4>:1:5 */
	this.urlHashMap["robot_cam3a:28:1:5"] = "robot_cam3a.cpp:121";
	/* <S4>:1:6 */
	this.urlHashMap["robot_cam3a:28:1:6"] = "robot_cam3a.cpp:122";
	/* <S4>:1:7 */
	this.urlHashMap["robot_cam3a:28:1:7"] = "robot_cam3a.cpp:123";
	/* <S5>/Enable */
	this.urlHashMap["robot_cam3a:93"] = "robot_cam3a.cpp:127";
	/* <S5>/Blank Message */
	this.urlHashMap["robot_cam3a:73"] = "robot_cam3a.h:177";
	/* <S5>/Bus
Assignment1 */
	this.urlHashMap["robot_cam3a:74"] = "robot_cam3a.cpp:195&robot_cam3a.h:50";
	/* <S5>/Publish2 */
	this.urlHashMap["robot_cam3a:75"] = "robot_cam3a.cpp:204,210,260,272,292,301&robot_cam3a.h:178";
	/* <S6>/Slider
Gain */
	this.urlHashMap["robot_cam3a:76:31"] = "robot_cam3a.cpp:197,313&robot_cam3a.h:67&rtmodel.h:43";
	/* <S7>/Constant */
	this.urlHashMap["robot_cam3a:73:33"] = "robot_cam3a.cpp:196,509&robot_cam3a.h:76&rtmodel.h:237";
	/* <S8>/SinkBlock */
	this.urlHashMap["robot_cam3a:75:31"] = "robot_cam3a.cpp:205,206,261,271,293,294,300&robot_cam3a.h:56,57";
	/* <S9>/Enable */
	this.urlHashMap["robot_cam3a:42"] = "robot_cam3a.cpp:130";
	/* <S9>/Bound [-pi,pi] */
	this.urlHashMap["robot_cam3a:43"] = "robot_cam3a.cpp:159,175";
	/* <S9>/Desired Yaw */
	this.urlHashMap["robot_cam3a:44"] = "robot_cam3a.cpp:168";
	/* <S9>/Distance */
	this.urlHashMap["robot_cam3a:45"] = "robot_cam3a.cpp:182,190";
	/* <S9>/Distance1 */
	this.urlHashMap["robot_cam3a:46"] = "robot_cam3a.cpp:146,154";
	/* <S9>/Distance2 */
	this.urlHashMap["robot_cam3a:47"] = "robot_cam3a.cpp:179";
	/* <S9>/Distance3 */
	this.urlHashMap["robot_cam3a:48"] = "robot_cam3a.cpp:174";
	/* <S9>/Stop1 */
	this.urlHashMap["robot_cam3a:51"] = "robot_cam3a.cpp:158,518&robot_cam3a.h:85&rtmodel.h:246";
	/* <S9>/Sum */
	this.urlHashMap["robot_cam3a:52"] = "robot_cam3a.cpp:139";
	/* <S9>/Sum1 */
	this.urlHashMap["robot_cam3a:53"] = "robot_cam3a.cpp:133";
	/* <S9>/Sum3 */
	this.urlHashMap["robot_cam3a:54"] = "robot_cam3a.cpp:167";
	/* <S9>/Switch1 */
	this.urlHashMap["robot_cam3a:55"] = "robot_cam3a.cpp:156,193";
	/* <S9>/Switch2 */
	this.urlHashMap["robot_cam3a:56"] = "robot_cam3a.cpp:161";
	/* <S9>/speed Threshold2 */
	this.urlHashMap["robot_cam3a:57"] = "robot_cam3a.h:180";
	/* <S9>/Linear Velocity (v) */
	this.urlHashMap["robot_cam3a:58"] = "robot_cam3a.cpp:512&robot_cam3a.h:79&rtmodel.h:240";
	/* <S9>/Angular Velocity (w) */
	this.urlHashMap["robot_cam3a:59"] = "robot_cam3a.cpp:515&robot_cam3a.h:82&rtmodel.h:243";
	/* <S10>/Compare */
	this.urlHashMap["robot_cam3a:57:2"] = "robot_cam3a.cpp:160";
	/* <S10>/Constant */
	this.urlHashMap["robot_cam3a:57:3"] = "robot_cam3a.cpp:157,310&robot_cam3a.h:64&rtmodel.h:40";
	/* <S11>/Subscribe2 */
	this.urlHashMap["robot_cam3a:78"] = "robot_cam3a.cpp:115,216,245,257,280,289&robot_cam3a.h:182";
	/* <S11>/UDP Receive */
	this.urlHashMap["robot_cam3a:81"] = "robot_cam3a.h:49";
	/* <S12>/Constant */
	this.urlHashMap["robot_cam3a:78:51"] = "robot_cam3a.cpp:493&robot_cam3a.h:73&rtmodel.h:221";
	/* <S12>/Enabled
Subsystem */
	this.urlHashMap["robot_cam3a:78:52"] = "robot_cam3a.h:183";
	/* <S12>/SourceBlock */
	this.urlHashMap["robot_cam3a:78:58"] = "robot_cam3a.cpp:116,117,213,246,256,281,282,288&robot_cam3a.h:55,58";
	/* <S13>/Out1 */
	this.urlHashMap["robot_cam3a:78:55"] = "robot_cam3a.cpp:403&robot_cam3a.h:70&rtmodel.h:132";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "robot_cam3a"};
	this.sidHashMap["robot_cam3a"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "robot_cam3a:65"};
	this.sidHashMap["robot_cam3a:65"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "robot_cam3a:29"};
	this.sidHashMap["robot_cam3a:29"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "robot_cam3a:1"};
	this.sidHashMap["robot_cam3a:1"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "robot_cam3a:28"};
	this.sidHashMap["robot_cam3a:28"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "robot_cam3a:69"};
	this.sidHashMap["robot_cam3a:69"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "robot_cam3a:76"};
	this.sidHashMap["robot_cam3a:76"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "robot_cam3a:73"};
	this.sidHashMap["robot_cam3a:73"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "robot_cam3a:75"};
	this.sidHashMap["robot_cam3a:75"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "robot_cam3a:36"};
	this.sidHashMap["robot_cam3a:36"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "robot_cam3a:57"};
	this.sidHashMap["robot_cam3a:57"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "robot_cam3a:77"};
	this.sidHashMap["robot_cam3a:77"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "robot_cam3a:78"};
	this.sidHashMap["robot_cam3a:78"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<S13>"] = {sid: "robot_cam3a:78:52"};
	this.sidHashMap["robot_cam3a:78:52"] = {rtwname: "<S13>"};
	this.rtwnameHashMap["<Root>/Command robot"] = {sid: "robot_cam3a:65"};
	this.sidHashMap["robot_cam3a:65"] = {rtwname: "<Root>/Command robot"};
	this.rtwnameHashMap["<Root>/Compute robot velocity"] = {sid: "robot_cam3a:29"};
	this.sidHashMap["robot_cam3a:29"] = {rtwname: "<Root>/Compute robot velocity"};
	this.rtwnameHashMap["<Root>/camera"] = {sid: "robot_cam3a:1"};
	this.sidHashMap["robot_cam3a:1"] = {rtwname: "<Root>/camera"};
	this.rtwnameHashMap["<Root>/cyc_pursuit2"] = {sid: "robot_cam3a:28"};
	this.sidHashMap["robot_cam3a:28"] = {rtwname: "<Root>/cyc_pursuit2"};
	this.rtwnameHashMap["<S1>/robot_3_velocity"] = {sid: "robot_cam3a:66"};
	this.sidHashMap["robot_cam3a:66"] = {rtwname: "<S1>/robot_3_velocity"};
	this.rtwnameHashMap["<S1>/robot_3_angle"] = {sid: "robot_cam3a:67"};
	this.sidHashMap["robot_cam3a:67"] = {rtwname: "<S1>/robot_3_angle"};
	this.rtwnameHashMap["<S1>/Enable"] = {sid: "robot_cam3a:95"};
	this.sidHashMap["robot_cam3a:95"] = {rtwname: "<S1>/Enable"};
	this.rtwnameHashMap["<S1>/Command Velocity Publisher"] = {sid: "robot_cam3a:69"};
	this.sidHashMap["robot_cam3a:69"] = {rtwname: "<S1>/Command Velocity Publisher"};
	this.rtwnameHashMap["<S1>/Linear Velocity (Slider)"] = {sid: "robot_cam3a:76"};
	this.sidHashMap["robot_cam3a:76"] = {rtwname: "<S1>/Linear Velocity (Slider)"};
	this.rtwnameHashMap["<S2>/robot_3_x_des"] = {sid: "robot_cam3a:30"};
	this.sidHashMap["robot_cam3a:30"] = {rtwname: "<S2>/robot_3_x_des"};
	this.rtwnameHashMap["<S2>/robot_3_y_des"] = {sid: "robot_cam3a:31"};
	this.sidHashMap["robot_cam3a:31"] = {rtwname: "<S2>/robot_3_y_des"};
	this.rtwnameHashMap["<S2>/robot_3_x_pos"] = {sid: "robot_cam3a:32"};
	this.sidHashMap["robot_cam3a:32"] = {rtwname: "<S2>/robot_3_x_pos"};
	this.rtwnameHashMap["<S2>/robot_3_y_pos"] = {sid: "robot_cam3a:33"};
	this.sidHashMap["robot_cam3a:33"] = {rtwname: "<S2>/robot_3_y_pos"};
	this.rtwnameHashMap["<S2>/robot_3_orient"] = {sid: "robot_cam3a:34"};
	this.sidHashMap["robot_cam3a:34"] = {rtwname: "<S2>/robot_3_orient"};
	this.rtwnameHashMap["<S2>/Enable"] = {sid: "robot_cam3a:35"};
	this.sidHashMap["robot_cam3a:35"] = {rtwname: "<S2>/Enable"};
	this.rtwnameHashMap["<S2>/Proportional Controller"] = {sid: "robot_cam3a:36"};
	this.sidHashMap["robot_cam3a:36"] = {rtwname: "<S2>/Proportional Controller"};
	this.rtwnameHashMap["<S2>/robot_3_velocity"] = {sid: "robot_cam3a:60"};
	this.sidHashMap["robot_cam3a:60"] = {rtwname: "<S2>/robot_3_velocity"};
	this.rtwnameHashMap["<S2>/robot_3_angle"] = {sid: "robot_cam3a:61"};
	this.sidHashMap["robot_cam3a:61"] = {rtwname: "<S2>/robot_3_angle"};
	this.rtwnameHashMap["<S2>/enable_robot_3"] = {sid: "robot_cam3a:62"};
	this.sidHashMap["robot_cam3a:62"] = {rtwname: "<S2>/enable_robot_3"};
	this.rtwnameHashMap["<S3>/Demux"] = {sid: "robot_cam3a:84"};
	this.sidHashMap["robot_cam3a:84"] = {rtwname: "<S3>/Demux"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex"] = {sid: "robot_cam3a:8"};
	this.sidHashMap["robot_cam3a:8"] = {rtwname: "<S3>/Real-Imag to Complex"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex1"] = {sid: "robot_cam3a:9"};
	this.sidHashMap["robot_cam3a:9"] = {rtwname: "<S3>/Real-Imag to Complex1"};
	this.rtwnameHashMap["<S3>/Recieve"] = {sid: "robot_cam3a:77"};
	this.sidHashMap["robot_cam3a:77"] = {rtwname: "<S3>/Recieve"};
	this.rtwnameHashMap["<S3>/Scope"] = {sid: "robot_cam3a:91"};
	this.sidHashMap["robot_cam3a:91"] = {rtwname: "<S3>/Scope"};
	this.rtwnameHashMap["<S3>/Terminator"] = {sid: "robot_cam3a:63"};
	this.sidHashMap["robot_cam3a:63"] = {rtwname: "<S3>/Terminator"};
	this.rtwnameHashMap["<S3>/Terminator1"] = {sid: "robot_cam3a:85"};
	this.sidHashMap["robot_cam3a:85"] = {rtwname: "<S3>/Terminator1"};
	this.rtwnameHashMap["<S3>/Terminator2"] = {sid: "robot_cam3a:86"};
	this.sidHashMap["robot_cam3a:86"] = {rtwname: "<S3>/Terminator2"};
	this.rtwnameHashMap["<S3>/Terminator3"] = {sid: "robot_cam3a:87"};
	this.sidHashMap["robot_cam3a:87"] = {rtwname: "<S3>/Terminator3"};
	this.rtwnameHashMap["<S3>/Terminator4"] = {sid: "robot_cam3a:88"};
	this.sidHashMap["robot_cam3a:88"] = {rtwname: "<S3>/Terminator4"};
	this.rtwnameHashMap["<S3>/Terminator5"] = {sid: "robot_cam3a:89"};
	this.sidHashMap["robot_cam3a:89"] = {rtwname: "<S3>/Terminator5"};
	this.rtwnameHashMap["<S3>/Terminator6"] = {sid: "robot_cam3a:90"};
	this.sidHashMap["robot_cam3a:90"] = {rtwname: "<S3>/Terminator6"};
	this.rtwnameHashMap["<S3>/To Workspace"] = {sid: "robot_cam3a:12"};
	this.sidHashMap["robot_cam3a:12"] = {rtwname: "<S3>/To Workspace"};
	this.rtwnameHashMap["<S3>/To Workspace1"] = {sid: "robot_cam3a:13"};
	this.sidHashMap["robot_cam3a:13"] = {rtwname: "<S3>/To Workspace1"};
	this.rtwnameHashMap["<S3>/To Workspace3"] = {sid: "robot_cam3a:14"};
	this.sidHashMap["robot_cam3a:14"] = {rtwname: "<S3>/To Workspace3"};
	this.rtwnameHashMap["<S3>/To Workspace4"] = {sid: "robot_cam3a:15"};
	this.sidHashMap["robot_cam3a:15"] = {rtwname: "<S3>/To Workspace4"};
	this.rtwnameHashMap["<S3>/To Workspace5"] = {sid: "robot_cam3a:16"};
	this.sidHashMap["robot_cam3a:16"] = {rtwname: "<S3>/To Workspace5"};
	this.rtwnameHashMap["<S3>/To Workspace6"] = {sid: "robot_cam3a:17"};
	this.sidHashMap["robot_cam3a:17"] = {rtwname: "<S3>/To Workspace6"};
	this.rtwnameHashMap["<S3>/robot_3_x_pos"] = {sid: "robot_cam3a:18"};
	this.sidHashMap["robot_cam3a:18"] = {rtwname: "<S3>/robot_3_x_pos"};
	this.rtwnameHashMap["<S3>/robot_3_y_pos"] = {sid: "robot_cam3a:19"};
	this.sidHashMap["robot_cam3a:19"] = {rtwname: "<S3>/robot_3_y_pos"};
	this.rtwnameHashMap["<S3>/robot_8_x_pos"] = {sid: "robot_cam3a:26"};
	this.sidHashMap["robot_cam3a:26"] = {rtwname: "<S3>/robot_8_x_pos"};
	this.rtwnameHashMap["<S3>/robot_8_y_pos"] = {sid: "robot_cam3a:27"};
	this.sidHashMap["robot_cam3a:27"] = {rtwname: "<S3>/robot_8_y_pos"};
	this.rtwnameHashMap["<S3>/robot_3_orient"] = {sid: "robot_cam3a:22"};
	this.sidHashMap["robot_cam3a:22"] = {rtwname: "<S3>/robot_3_orient"};
	this.rtwnameHashMap["<S3>/Enable"] = {sid: "robot_cam3a:23"};
	this.sidHashMap["robot_cam3a:23"] = {rtwname: "<S3>/Enable"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "robot_cam3a:28:1"};
	this.sidHashMap["robot_cam3a:28:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "robot_cam3a:28:1:4"};
	this.sidHashMap["robot_cam3a:28:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "robot_cam3a:28:1:5"};
	this.sidHashMap["robot_cam3a:28:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:6"] = {sid: "robot_cam3a:28:1:6"};
	this.sidHashMap["robot_cam3a:28:1:6"] = {rtwname: "<S4>:1:6"};
	this.rtwnameHashMap["<S4>:1:7"] = {sid: "robot_cam3a:28:1:7"};
	this.sidHashMap["robot_cam3a:28:1:7"] = {rtwname: "<S4>:1:7"};
	this.rtwnameHashMap["<S5>/v"] = {sid: "robot_cam3a:70"};
	this.sidHashMap["robot_cam3a:70"] = {rtwname: "<S5>/v"};
	this.rtwnameHashMap["<S5>/w"] = {sid: "robot_cam3a:71"};
	this.sidHashMap["robot_cam3a:71"] = {rtwname: "<S5>/w"};
	this.rtwnameHashMap["<S5>/Enable"] = {sid: "robot_cam3a:93"};
	this.sidHashMap["robot_cam3a:93"] = {rtwname: "<S5>/Enable"};
	this.rtwnameHashMap["<S5>/Blank Message"] = {sid: "robot_cam3a:73"};
	this.sidHashMap["robot_cam3a:73"] = {rtwname: "<S5>/Blank Message"};
	this.rtwnameHashMap["<S5>/Bus Assignment1"] = {sid: "robot_cam3a:74"};
	this.sidHashMap["robot_cam3a:74"] = {rtwname: "<S5>/Bus Assignment1"};
	this.rtwnameHashMap["<S5>/Publish2"] = {sid: "robot_cam3a:75"};
	this.sidHashMap["robot_cam3a:75"] = {rtwname: "<S5>/Publish2"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "robot_cam3a:76:30"};
	this.sidHashMap["robot_cam3a:76:30"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/Slider Gain"] = {sid: "robot_cam3a:76:31"};
	this.sidHashMap["robot_cam3a:76:31"] = {rtwname: "<S6>/Slider Gain"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "robot_cam3a:76:32"};
	this.sidHashMap["robot_cam3a:76:32"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "robot_cam3a:73:33"};
	this.sidHashMap["robot_cam3a:73:33"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/Out"] = {sid: "robot_cam3a:73:34"};
	this.sidHashMap["robot_cam3a:73:34"] = {rtwname: "<S7>/Out"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "robot_cam3a:75:29"};
	this.sidHashMap["robot_cam3a:75:29"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/SignalSpecification"] = {sid: "robot_cam3a:75:30"};
	this.sidHashMap["robot_cam3a:75:30"] = {rtwname: "<S8>/SignalSpecification"};
	this.rtwnameHashMap["<S8>/SinkBlock"] = {sid: "robot_cam3a:75:31"};
	this.sidHashMap["robot_cam3a:75:31"] = {rtwname: "<S8>/SinkBlock"};
	this.rtwnameHashMap["<S9>/Desired position1"] = {sid: "robot_cam3a:37"};
	this.sidHashMap["robot_cam3a:37"] = {rtwname: "<S9>/Desired position1"};
	this.rtwnameHashMap["<S9>/Desired position"] = {sid: "robot_cam3a:38"};
	this.sidHashMap["robot_cam3a:38"] = {rtwname: "<S9>/Desired position"};
	this.rtwnameHashMap["<S9>/Position X"] = {sid: "robot_cam3a:39"};
	this.sidHashMap["robot_cam3a:39"] = {rtwname: "<S9>/Position X"};
	this.rtwnameHashMap["<S9>/Position Y"] = {sid: "robot_cam3a:40"};
	this.sidHashMap["robot_cam3a:40"] = {rtwname: "<S9>/Position Y"};
	this.rtwnameHashMap["<S9>/Orientation (theta)"] = {sid: "robot_cam3a:41"};
	this.sidHashMap["robot_cam3a:41"] = {rtwname: "<S9>/Orientation (theta)"};
	this.rtwnameHashMap["<S9>/Enable"] = {sid: "robot_cam3a:42"};
	this.sidHashMap["robot_cam3a:42"] = {rtwname: "<S9>/Enable"};
	this.rtwnameHashMap["<S9>/Bound [-pi,pi]"] = {sid: "robot_cam3a:43"};
	this.sidHashMap["robot_cam3a:43"] = {rtwname: "<S9>/Bound [-pi,pi]"};
	this.rtwnameHashMap["<S9>/Desired Yaw"] = {sid: "robot_cam3a:44"};
	this.sidHashMap["robot_cam3a:44"] = {rtwname: "<S9>/Desired Yaw"};
	this.rtwnameHashMap["<S9>/Distance"] = {sid: "robot_cam3a:45"};
	this.sidHashMap["robot_cam3a:45"] = {rtwname: "<S9>/Distance"};
	this.rtwnameHashMap["<S9>/Distance1"] = {sid: "robot_cam3a:46"};
	this.sidHashMap["robot_cam3a:46"] = {rtwname: "<S9>/Distance1"};
	this.rtwnameHashMap["<S9>/Distance2"] = {sid: "robot_cam3a:47"};
	this.sidHashMap["robot_cam3a:47"] = {rtwname: "<S9>/Distance2"};
	this.rtwnameHashMap["<S9>/Distance3"] = {sid: "robot_cam3a:48"};
	this.sidHashMap["robot_cam3a:48"] = {rtwname: "<S9>/Distance3"};
	this.rtwnameHashMap["<S9>/Mux"] = {sid: "robot_cam3a:49"};
	this.sidHashMap["robot_cam3a:49"] = {rtwname: "<S9>/Mux"};
	this.rtwnameHashMap["<S9>/Mux1"] = {sid: "robot_cam3a:50"};
	this.sidHashMap["robot_cam3a:50"] = {rtwname: "<S9>/Mux1"};
	this.rtwnameHashMap["<S9>/Stop1"] = {sid: "robot_cam3a:51"};
	this.sidHashMap["robot_cam3a:51"] = {rtwname: "<S9>/Stop1"};
	this.rtwnameHashMap["<S9>/Sum"] = {sid: "robot_cam3a:52"};
	this.sidHashMap["robot_cam3a:52"] = {rtwname: "<S9>/Sum"};
	this.rtwnameHashMap["<S9>/Sum1"] = {sid: "robot_cam3a:53"};
	this.sidHashMap["robot_cam3a:53"] = {rtwname: "<S9>/Sum1"};
	this.rtwnameHashMap["<S9>/Sum3"] = {sid: "robot_cam3a:54"};
	this.sidHashMap["robot_cam3a:54"] = {rtwname: "<S9>/Sum3"};
	this.rtwnameHashMap["<S9>/Switch1"] = {sid: "robot_cam3a:55"};
	this.sidHashMap["robot_cam3a:55"] = {rtwname: "<S9>/Switch1"};
	this.rtwnameHashMap["<S9>/Switch2"] = {sid: "robot_cam3a:56"};
	this.sidHashMap["robot_cam3a:56"] = {rtwname: "<S9>/Switch2"};
	this.rtwnameHashMap["<S9>/speed Threshold2"] = {sid: "robot_cam3a:57"};
	this.sidHashMap["robot_cam3a:57"] = {rtwname: "<S9>/speed Threshold2"};
	this.rtwnameHashMap["<S9>/Linear Velocity (v)"] = {sid: "robot_cam3a:58"};
	this.sidHashMap["robot_cam3a:58"] = {rtwname: "<S9>/Linear Velocity (v)"};
	this.rtwnameHashMap["<S9>/Angular Velocity (w)"] = {sid: "robot_cam3a:59"};
	this.sidHashMap["robot_cam3a:59"] = {rtwname: "<S9>/Angular Velocity (w)"};
	this.rtwnameHashMap["<S10>/u"] = {sid: "robot_cam3a:57:1"};
	this.sidHashMap["robot_cam3a:57:1"] = {rtwname: "<S10>/u"};
	this.rtwnameHashMap["<S10>/Compare"] = {sid: "robot_cam3a:57:2"};
	this.sidHashMap["robot_cam3a:57:2"] = {rtwname: "<S10>/Compare"};
	this.rtwnameHashMap["<S10>/Constant"] = {sid: "robot_cam3a:57:3"};
	this.sidHashMap["robot_cam3a:57:3"] = {rtwname: "<S10>/Constant"};
	this.rtwnameHashMap["<S10>/y"] = {sid: "robot_cam3a:57:4"};
	this.sidHashMap["robot_cam3a:57:4"] = {rtwname: "<S10>/y"};
	this.rtwnameHashMap["<S11>/Subscribe2"] = {sid: "robot_cam3a:78"};
	this.sidHashMap["robot_cam3a:78"] = {rtwname: "<S11>/Subscribe2"};
	this.rtwnameHashMap["<S11>/Terminator"] = {sid: "robot_cam3a:79"};
	this.sidHashMap["robot_cam3a:79"] = {rtwname: "<S11>/Terminator"};
	this.rtwnameHashMap["<S11>/Terminator1"] = {sid: "robot_cam3a:80"};
	this.sidHashMap["robot_cam3a:80"] = {rtwname: "<S11>/Terminator1"};
	this.rtwnameHashMap["<S11>/UDP Receive"] = {sid: "robot_cam3a:81"};
	this.sidHashMap["robot_cam3a:81"] = {rtwname: "<S11>/UDP Receive"};
	this.rtwnameHashMap["<S11>/Enable"] = {sid: "robot_cam3a:82"};
	this.sidHashMap["robot_cam3a:82"] = {rtwname: "<S11>/Enable"};
	this.rtwnameHashMap["<S11>/Data"] = {sid: "robot_cam3a:83"};
	this.sidHashMap["robot_cam3a:83"] = {rtwname: "<S11>/Data"};
	this.rtwnameHashMap["<S12>/Constant"] = {sid: "robot_cam3a:78:51"};
	this.sidHashMap["robot_cam3a:78:51"] = {rtwname: "<S12>/Constant"};
	this.rtwnameHashMap["<S12>/Enabled Subsystem"] = {sid: "robot_cam3a:78:52"};
	this.sidHashMap["robot_cam3a:78:52"] = {rtwname: "<S12>/Enabled Subsystem"};
	this.rtwnameHashMap["<S12>/SourceBlock"] = {sid: "robot_cam3a:78:58"};
	this.sidHashMap["robot_cam3a:78:58"] = {rtwname: "<S12>/SourceBlock"};
	this.rtwnameHashMap["<S12>/Out1"] = {sid: "robot_cam3a:78:59"};
	this.sidHashMap["robot_cam3a:78:59"] = {rtwname: "<S12>/Out1"};
	this.rtwnameHashMap["<S12>/Out2"] = {sid: "robot_cam3a:78:60"};
	this.sidHashMap["robot_cam3a:78:60"] = {rtwname: "<S12>/Out2"};
	this.rtwnameHashMap["<S13>/In1"] = {sid: "robot_cam3a:78:53"};
	this.sidHashMap["robot_cam3a:78:53"] = {rtwname: "<S13>/In1"};
	this.rtwnameHashMap["<S13>/Enable"] = {sid: "robot_cam3a:78:54"};
	this.sidHashMap["robot_cam3a:78:54"] = {rtwname: "<S13>/Enable"};
	this.rtwnameHashMap["<S13>/Out1"] = {sid: "robot_cam3a:78:55"};
	this.sidHashMap["robot_cam3a:78:55"] = {rtwname: "<S13>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
