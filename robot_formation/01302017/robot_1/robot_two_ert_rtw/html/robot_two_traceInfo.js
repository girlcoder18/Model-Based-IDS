function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Command robot */
	this.urlHashMap["robot_two:65"] = "robot_two.h:190";
	/* <Root>/Compute robot velocity */
	this.urlHashMap["robot_two:29"] = "robot_two.h:191";
	/* <Root>/camera */
	this.urlHashMap["robot_two:1"] = "robot_two.h:184,192";
	/* <Root>/cyc_pursuit2 */
	this.urlHashMap["robot_two:28"] = "robot_two.cpp:209,218&robot_two.h:193";
	/* <S1>/Command Velocity Publisher */
	this.urlHashMap["robot_two:69"] = "robot_two.cpp:197,299,370,384,429,440&robot_two.h:194";
	/* <S1>/Linear Velocity (Slider) */
	this.urlHashMap["robot_two:76"] = "robot_two.h:195";
	/* <S2>/Proportional Controller */
	this.urlHashMap["robot_two:36"] = "robot_two.cpp:200,298&robot_two.h:198";
	/* <S3>/Conversion1 */
	this.urlHashMap["robot_two:4"] = "robot_two.cpp:62,301&robot_two.h:46,48,62,200&robot_two_types.h:176";
	/* <S3>/Conversion2 */
	this.urlHashMap["robot_two:5"] = "robot_two.cpp:63,175&robot_two.h:61,201";
	/* <S3>/Real-Imag to
Complex */
	this.urlHashMap["robot_two:8"] = "robot_two.h:165";
	/* <S3>/Real-Imag to
Complex1 */
	this.urlHashMap["robot_two:9"] = "robot_two.h:166";
	/* <S3>/Subscribe1 */
	this.urlHashMap["robot_two:10"] = "robot_two.cpp:157,173,356,368,394,400,418,427&robot_two.h:202";
	/* <S3>/Subscribe2 */
	this.urlHashMap["robot_two:11"] = "robot_two.cpp:140,155,203,297,342,354,386,392,407,416&robot_two.h:203";
	/* <S3>/To Workspace */
	this.urlHashMap["robot_two:12"] = "robot_two.h:167";
	/* <S3>/To Workspace1 */
	this.urlHashMap["robot_two:13"] = "robot_two.h:168";
	/* <S3>/To Workspace3 */
	this.urlHashMap["robot_two:14"] = "robot_two.h:169";
	/* <S3>/To Workspace4 */
	this.urlHashMap["robot_two:15"] = "robot_two.h:170";
	/* <S3>/To Workspace5 */
	this.urlHashMap["robot_two:16"] = "robot_two.h:171";
	/* <S3>/To Workspace6 */
	this.urlHashMap["robot_two:17"] = "robot_two.h:172";
	/* <S4>:1 */
	this.urlHashMap["robot_two:28:1"] = "robot_two.cpp:176";
	/* <S4>:1:4 */
	this.urlHashMap["robot_two:28:1:4"] = "robot_two.cpp:177";
	/* <S4>:1:5 */
	this.urlHashMap["robot_two:28:1:5"] = "robot_two.cpp:178";
	/* <S4>:1:6 */
	this.urlHashMap["robot_two:28:1:6"] = "robot_two.cpp:179";
	/* <S4>:1:7 */
	this.urlHashMap["robot_two:28:1:7"] = "robot_two.cpp:180";
	/* <S5>/Enable */
	this.urlHashMap["robot_two:72"] = "robot_two.cpp:198";
	/* <S5>/Blank Message */
	this.urlHashMap["robot_two:73"] = "robot_two.h:196";
	/* <S5>/Bus
Assignment1 */
	this.urlHashMap["robot_two:74"] = "robot_two.cpp:279&robot_two.h:56";
	/* <S5>/Publish2 */
	this.urlHashMap["robot_two:75"] = "robot_two.cpp:288,294,371,383,430,439&robot_two.h:197";
	/* <S6>/Slider
Gain */
	this.urlHashMap["robot_two:76:31"] = "robot_two.cpp:281,451&robot_two.h:81&rtmodel.h:43";
	/* <S7>/Constant */
	this.urlHashMap["robot_two:73:33"] = "robot_two.cpp:280,827&robot_two.h:96&rtmodel.h:415";
	/* <S8>/SinkBlock */
	this.urlHashMap["robot_two:75:31"] = "robot_two.cpp:289,290,372,382,431,432,438&robot_two.h:69,70";
	/* <S9>/Enable */
	this.urlHashMap["robot_two:42"] = "robot_two.cpp:201";
	/* <S9>/Bound [-pi,pi] */
	this.urlHashMap["robot_two:43"] = "robot_two.cpp:241,258";
	/* <S9>/Desired Yaw */
	this.urlHashMap["robot_two:44"] = "robot_two.cpp:250";
	/* <S9>/Distance */
	this.urlHashMap["robot_two:45"] = "robot_two.cpp:265,274";
	/* <S9>/Distance1 */
	this.urlHashMap["robot_two:46"] = "robot_two.cpp:227,236";
	/* <S9>/Distance2 */
	this.urlHashMap["robot_two:47"] = "robot_two.cpp:262";
	/* <S9>/Distance3 */
	this.urlHashMap["robot_two:48"] = "robot_two.cpp:257";
	/* <S9>/Stop1 */
	this.urlHashMap["robot_two:51"] = "robot_two.cpp:240,836&robot_two.h:105&rtmodel.h:424";
	/* <S9>/Sum */
	this.urlHashMap["robot_two:52"] = "robot_two.cpp:217&robot_two.h:58";
	/* <S9>/Sum1 */
	this.urlHashMap["robot_two:53"] = "robot_two.cpp:208&robot_two.h:57";
	/* <S9>/Sum3 */
	this.urlHashMap["robot_two:54"] = "robot_two.cpp:249&robot_two.h:59";
	/* <S9>/Switch1 */
	this.urlHashMap["robot_two:55"] = "robot_two.cpp:238,277";
	/* <S9>/Switch2 */
	this.urlHashMap["robot_two:56"] = "robot_two.cpp:243";
	/* <S9>/speed Threshold2 */
	this.urlHashMap["robot_two:57"] = "robot_two.h:199";
	/* <S9>/Linear Velocity (v) */
	this.urlHashMap["robot_two:58"] = "robot_two.cpp:830&robot_two.h:99&rtmodel.h:418";
	/* <S9>/Angular Velocity (w) */
	this.urlHashMap["robot_two:59"] = "robot_two.cpp:833&robot_two.h:102&rtmodel.h:421";
	/* <S10>/Compare */
	this.urlHashMap["robot_two:57:2"] = "robot_two.cpp:242";
	/* <S10>/Constant */
	this.urlHashMap["robot_two:57:3"] = "robot_two.cpp:239,448&robot_two.h:78&rtmodel.h:40";
	/* <S11>:1 */
	this.urlHashMap["robot_two:4:1"] = "robot_two.cpp:74";
	/* <S11>:1:5 */
	this.urlHashMap["robot_two:4:1:5"] = "robot_two.cpp:75";
	/* <S11>:1:6 */
	this.urlHashMap["robot_two:4:1:6"] = "robot_two.cpp:83";
	/* <S12>:1 */
	this.urlHashMap["robot_two:5:1"] = "msg=rtwMsg_reusableFunction&block=robot_two:5:1";
	/* <S13>/Constant */
	this.urlHashMap["robot_two:10:51"] = "robot_two.cpp:631&robot_two.h:87&rtmodel.h:221";
	/* <S13>/Enabled
Subsystem */
	this.urlHashMap["robot_two:10:52"] = "robot_two.cpp:164,172,395,399&robot_two.h:204";
	/* <S13>/SourceBlock */
	this.urlHashMap["robot_two:10:58"] = "robot_two.cpp:158,160,171,357,367,419,420,426&robot_two.h:68,72";
	/* <S14>/Constant */
	this.urlHashMap["robot_two:11:51"] = "robot_two.cpp:811&robot_two.h:93&rtmodel.h:399";
	/* <S14>/Enabled
Subsystem */
	this.urlHashMap["robot_two:11:52"] = "robot_two.cpp:147,154,387,391&robot_two.h:205";
	/* <S14>/SourceBlock */
	this.urlHashMap["robot_two:11:58"] = "robot_two.cpp:141,143,204,205,343,353,408,409,415&robot_two.h:67,71";
	/* <S15>/In1 */
	this.urlHashMap["robot_two:10:53"] = "robot_two.cpp:159&robot_two.h:54";
	/* <S15>/Enable */
	this.urlHashMap["robot_two:10:54"] = "robot_two.cpp:165";
	/* <S15>/Out1 */
	this.urlHashMap["robot_two:10:55"] = "robot_two.cpp:396,541&robot_two.h:84&rtmodel.h:132";
	/* <S16>/In1 */
	this.urlHashMap["robot_two:11:53"] = "robot_two.cpp:142&robot_two.h:53";
	/* <S16>/Enable */
	this.urlHashMap["robot_two:11:54"] = "robot_two.cpp:148";
	/* <S16>/Out1 */
	this.urlHashMap["robot_two:11:55"] = "robot_two.cpp:388,721&robot_two.h:90&rtmodel.h:310";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "robot_two"};
	this.sidHashMap["robot_two"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "robot_two:65"};
	this.sidHashMap["robot_two:65"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "robot_two:29"};
	this.sidHashMap["robot_two:29"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "robot_two:1"};
	this.sidHashMap["robot_two:1"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "robot_two:28"};
	this.sidHashMap["robot_two:28"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "robot_two:69"};
	this.sidHashMap["robot_two:69"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "robot_two:76"};
	this.sidHashMap["robot_two:76"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "robot_two:73"};
	this.sidHashMap["robot_two:73"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "robot_two:75"};
	this.sidHashMap["robot_two:75"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "robot_two:36"};
	this.sidHashMap["robot_two:36"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "robot_two:57"};
	this.sidHashMap["robot_two:57"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "robot_two:4"};
	this.sidHashMap["robot_two:4"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "robot_two:5"};
	this.sidHashMap["robot_two:5"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<S13>"] = {sid: "robot_two:10"};
	this.sidHashMap["robot_two:10"] = {rtwname: "<S13>"};
	this.rtwnameHashMap["<S14>"] = {sid: "robot_two:11"};
	this.sidHashMap["robot_two:11"] = {rtwname: "<S14>"};
	this.rtwnameHashMap["<S15>"] = {sid: "robot_two:10:52"};
	this.sidHashMap["robot_two:10:52"] = {rtwname: "<S15>"};
	this.rtwnameHashMap["<S16>"] = {sid: "robot_two:11:52"};
	this.sidHashMap["robot_two:11:52"] = {rtwname: "<S16>"};
	this.rtwnameHashMap["<Root>/Command robot"] = {sid: "robot_two:65"};
	this.sidHashMap["robot_two:65"] = {rtwname: "<Root>/Command robot"};
	this.rtwnameHashMap["<Root>/Compute robot velocity"] = {sid: "robot_two:29"};
	this.sidHashMap["robot_two:29"] = {rtwname: "<Root>/Compute robot velocity"};
	this.rtwnameHashMap["<Root>/camera"] = {sid: "robot_two:1"};
	this.sidHashMap["robot_two:1"] = {rtwname: "<Root>/camera"};
	this.rtwnameHashMap["<Root>/cyc_pursuit2"] = {sid: "robot_two:28"};
	this.sidHashMap["robot_two:28"] = {rtwname: "<Root>/cyc_pursuit2"};
	this.rtwnameHashMap["<S1>/robot_1_velocity"] = {sid: "robot_two:66"};
	this.sidHashMap["robot_two:66"] = {rtwname: "<S1>/robot_1_velocity"};
	this.rtwnameHashMap["<S1>/robot_1_angle"] = {sid: "robot_two:67"};
	this.sidHashMap["robot_two:67"] = {rtwname: "<S1>/robot_1_angle"};
	this.rtwnameHashMap["<S1>/enbale_r0b0t_1"] = {sid: "robot_two:68"};
	this.sidHashMap["robot_two:68"] = {rtwname: "<S1>/enbale_r0b0t_1"};
	this.rtwnameHashMap["<S1>/Command Velocity Publisher"] = {sid: "robot_two:69"};
	this.sidHashMap["robot_two:69"] = {rtwname: "<S1>/Command Velocity Publisher"};
	this.rtwnameHashMap["<S1>/Linear Velocity (Slider)"] = {sid: "robot_two:76"};
	this.sidHashMap["robot_two:76"] = {rtwname: "<S1>/Linear Velocity (Slider)"};
	this.rtwnameHashMap["<S2>/robot_1_x_des"] = {sid: "robot_two:30"};
	this.sidHashMap["robot_two:30"] = {rtwname: "<S2>/robot_1_x_des"};
	this.rtwnameHashMap["<S2>/robot_1_y_des"] = {sid: "robot_two:31"};
	this.sidHashMap["robot_two:31"] = {rtwname: "<S2>/robot_1_y_des"};
	this.rtwnameHashMap["<S2>/robot_1_x_pos"] = {sid: "robot_two:32"};
	this.sidHashMap["robot_two:32"] = {rtwname: "<S2>/robot_1_x_pos"};
	this.rtwnameHashMap["<S2>/robot_1_y_pos"] = {sid: "robot_two:33"};
	this.sidHashMap["robot_two:33"] = {rtwname: "<S2>/robot_1_y_pos"};
	this.rtwnameHashMap["<S2>/robot_1_orient"] = {sid: "robot_two:34"};
	this.sidHashMap["robot_two:34"] = {rtwname: "<S2>/robot_1_orient"};
	this.rtwnameHashMap["<S2>/Enable1"] = {sid: "robot_two:35"};
	this.sidHashMap["robot_two:35"] = {rtwname: "<S2>/Enable1"};
	this.rtwnameHashMap["<S2>/Proportional Controller"] = {sid: "robot_two:36"};
	this.sidHashMap["robot_two:36"] = {rtwname: "<S2>/Proportional Controller"};
	this.rtwnameHashMap["<S2>/robot_1_velocity"] = {sid: "robot_two:60"};
	this.sidHashMap["robot_two:60"] = {rtwname: "<S2>/robot_1_velocity"};
	this.rtwnameHashMap["<S2>/robot_1_angle"] = {sid: "robot_two:61"};
	this.sidHashMap["robot_two:61"] = {rtwname: "<S2>/robot_1_angle"};
	this.rtwnameHashMap["<S2>/enable_robot_1"] = {sid: "robot_two:62"};
	this.sidHashMap["robot_two:62"] = {rtwname: "<S2>/enable_robot_1"};
	this.rtwnameHashMap["<S3>/Bus Selector1"] = {sid: "robot_two:2"};
	this.sidHashMap["robot_two:2"] = {rtwname: "<S3>/Bus Selector1"};
	this.rtwnameHashMap["<S3>/Bus Selector2"] = {sid: "robot_two:3"};
	this.sidHashMap["robot_two:3"] = {rtwname: "<S3>/Bus Selector2"};
	this.rtwnameHashMap["<S3>/Conversion1"] = {sid: "robot_two:4"};
	this.sidHashMap["robot_two:4"] = {rtwname: "<S3>/Conversion1"};
	this.rtwnameHashMap["<S3>/Conversion2"] = {sid: "robot_two:5"};
	this.sidHashMap["robot_two:5"] = {rtwname: "<S3>/Conversion2"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex"] = {sid: "robot_two:8"};
	this.sidHashMap["robot_two:8"] = {rtwname: "<S3>/Real-Imag to Complex"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex1"] = {sid: "robot_two:9"};
	this.sidHashMap["robot_two:9"] = {rtwname: "<S3>/Real-Imag to Complex1"};
	this.rtwnameHashMap["<S3>/Subscribe1"] = {sid: "robot_two:10"};
	this.sidHashMap["robot_two:10"] = {rtwname: "<S3>/Subscribe1"};
	this.rtwnameHashMap["<S3>/Subscribe2"] = {sid: "robot_two:11"};
	this.sidHashMap["robot_two:11"] = {rtwname: "<S3>/Subscribe2"};
	this.rtwnameHashMap["<S3>/Terminator"] = {sid: "robot_two:63"};
	this.sidHashMap["robot_two:63"] = {rtwname: "<S3>/Terminator"};
	this.rtwnameHashMap["<S3>/Terminator1"] = {sid: "robot_two:64"};
	this.sidHashMap["robot_two:64"] = {rtwname: "<S3>/Terminator1"};
	this.rtwnameHashMap["<S3>/To Workspace"] = {sid: "robot_two:12"};
	this.sidHashMap["robot_two:12"] = {rtwname: "<S3>/To Workspace"};
	this.rtwnameHashMap["<S3>/To Workspace1"] = {sid: "robot_two:13"};
	this.sidHashMap["robot_two:13"] = {rtwname: "<S3>/To Workspace1"};
	this.rtwnameHashMap["<S3>/To Workspace3"] = {sid: "robot_two:14"};
	this.sidHashMap["robot_two:14"] = {rtwname: "<S3>/To Workspace3"};
	this.rtwnameHashMap["<S3>/To Workspace4"] = {sid: "robot_two:15"};
	this.sidHashMap["robot_two:15"] = {rtwname: "<S3>/To Workspace4"};
	this.rtwnameHashMap["<S3>/To Workspace5"] = {sid: "robot_two:16"};
	this.sidHashMap["robot_two:16"] = {rtwname: "<S3>/To Workspace5"};
	this.rtwnameHashMap["<S3>/To Workspace6"] = {sid: "robot_two:17"};
	this.sidHashMap["robot_two:17"] = {rtwname: "<S3>/To Workspace6"};
	this.rtwnameHashMap["<S3>/robot_1_x_pos"] = {sid: "robot_two:18"};
	this.sidHashMap["robot_two:18"] = {rtwname: "<S3>/robot_1_x_pos"};
	this.rtwnameHashMap["<S3>/robot_1_y_pos"] = {sid: "robot_two:19"};
	this.sidHashMap["robot_two:19"] = {rtwname: "<S3>/robot_1_y_pos"};
	this.rtwnameHashMap["<S3>/robot_3_x_pos"] = {sid: "robot_two:26"};
	this.sidHashMap["robot_two:26"] = {rtwname: "<S3>/robot_3_x_pos"};
	this.rtwnameHashMap["<S3>/robot_3_y_pos"] = {sid: "robot_two:27"};
	this.sidHashMap["robot_two:27"] = {rtwname: "<S3>/robot_3_y_pos"};
	this.rtwnameHashMap["<S3>/robot_1_orient"] = {sid: "robot_two:22"};
	this.sidHashMap["robot_two:22"] = {rtwname: "<S3>/robot_1_orient"};
	this.rtwnameHashMap["<S3>/Enable1"] = {sid: "robot_two:23"};
	this.sidHashMap["robot_two:23"] = {rtwname: "<S3>/Enable1"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "robot_two:28:1"};
	this.sidHashMap["robot_two:28:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "robot_two:28:1:4"};
	this.sidHashMap["robot_two:28:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "robot_two:28:1:5"};
	this.sidHashMap["robot_two:28:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:6"] = {sid: "robot_two:28:1:6"};
	this.sidHashMap["robot_two:28:1:6"] = {rtwname: "<S4>:1:6"};
	this.rtwnameHashMap["<S4>:1:7"] = {sid: "robot_two:28:1:7"};
	this.sidHashMap["robot_two:28:1:7"] = {rtwname: "<S4>:1:7"};
	this.rtwnameHashMap["<S5>/v"] = {sid: "robot_two:70"};
	this.sidHashMap["robot_two:70"] = {rtwname: "<S5>/v"};
	this.rtwnameHashMap["<S5>/w"] = {sid: "robot_two:71"};
	this.sidHashMap["robot_two:71"] = {rtwname: "<S5>/w"};
	this.rtwnameHashMap["<S5>/Enable"] = {sid: "robot_two:72"};
	this.sidHashMap["robot_two:72"] = {rtwname: "<S5>/Enable"};
	this.rtwnameHashMap["<S5>/Blank Message"] = {sid: "robot_two:73"};
	this.sidHashMap["robot_two:73"] = {rtwname: "<S5>/Blank Message"};
	this.rtwnameHashMap["<S5>/Bus Assignment1"] = {sid: "robot_two:74"};
	this.sidHashMap["robot_two:74"] = {rtwname: "<S5>/Bus Assignment1"};
	this.rtwnameHashMap["<S5>/Publish2"] = {sid: "robot_two:75"};
	this.sidHashMap["robot_two:75"] = {rtwname: "<S5>/Publish2"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "robot_two:76:30"};
	this.sidHashMap["robot_two:76:30"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/Slider Gain"] = {sid: "robot_two:76:31"};
	this.sidHashMap["robot_two:76:31"] = {rtwname: "<S6>/Slider Gain"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "robot_two:76:32"};
	this.sidHashMap["robot_two:76:32"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "robot_two:73:33"};
	this.sidHashMap["robot_two:73:33"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/Out"] = {sid: "robot_two:73:34"};
	this.sidHashMap["robot_two:73:34"] = {rtwname: "<S7>/Out"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "robot_two:75:29"};
	this.sidHashMap["robot_two:75:29"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/SignalSpecification"] = {sid: "robot_two:75:30"};
	this.sidHashMap["robot_two:75:30"] = {rtwname: "<S8>/SignalSpecification"};
	this.rtwnameHashMap["<S8>/SinkBlock"] = {sid: "robot_two:75:31"};
	this.sidHashMap["robot_two:75:31"] = {rtwname: "<S8>/SinkBlock"};
	this.rtwnameHashMap["<S9>/Desired position1"] = {sid: "robot_two:37"};
	this.sidHashMap["robot_two:37"] = {rtwname: "<S9>/Desired position1"};
	this.rtwnameHashMap["<S9>/Desired position"] = {sid: "robot_two:38"};
	this.sidHashMap["robot_two:38"] = {rtwname: "<S9>/Desired position"};
	this.rtwnameHashMap["<S9>/Position X"] = {sid: "robot_two:39"};
	this.sidHashMap["robot_two:39"] = {rtwname: "<S9>/Position X"};
	this.rtwnameHashMap["<S9>/Position Y"] = {sid: "robot_two:40"};
	this.sidHashMap["robot_two:40"] = {rtwname: "<S9>/Position Y"};
	this.rtwnameHashMap["<S9>/Orientation (theta)"] = {sid: "robot_two:41"};
	this.sidHashMap["robot_two:41"] = {rtwname: "<S9>/Orientation (theta)"};
	this.rtwnameHashMap["<S9>/Enable"] = {sid: "robot_two:42"};
	this.sidHashMap["robot_two:42"] = {rtwname: "<S9>/Enable"};
	this.rtwnameHashMap["<S9>/Bound [-pi,pi]"] = {sid: "robot_two:43"};
	this.sidHashMap["robot_two:43"] = {rtwname: "<S9>/Bound [-pi,pi]"};
	this.rtwnameHashMap["<S9>/Desired Yaw"] = {sid: "robot_two:44"};
	this.sidHashMap["robot_two:44"] = {rtwname: "<S9>/Desired Yaw"};
	this.rtwnameHashMap["<S9>/Distance"] = {sid: "robot_two:45"};
	this.sidHashMap["robot_two:45"] = {rtwname: "<S9>/Distance"};
	this.rtwnameHashMap["<S9>/Distance1"] = {sid: "robot_two:46"};
	this.sidHashMap["robot_two:46"] = {rtwname: "<S9>/Distance1"};
	this.rtwnameHashMap["<S9>/Distance2"] = {sid: "robot_two:47"};
	this.sidHashMap["robot_two:47"] = {rtwname: "<S9>/Distance2"};
	this.rtwnameHashMap["<S9>/Distance3"] = {sid: "robot_two:48"};
	this.sidHashMap["robot_two:48"] = {rtwname: "<S9>/Distance3"};
	this.rtwnameHashMap["<S9>/Mux"] = {sid: "robot_two:49"};
	this.sidHashMap["robot_two:49"] = {rtwname: "<S9>/Mux"};
	this.rtwnameHashMap["<S9>/Mux1"] = {sid: "robot_two:50"};
	this.sidHashMap["robot_two:50"] = {rtwname: "<S9>/Mux1"};
	this.rtwnameHashMap["<S9>/Stop1"] = {sid: "robot_two:51"};
	this.sidHashMap["robot_two:51"] = {rtwname: "<S9>/Stop1"};
	this.rtwnameHashMap["<S9>/Sum"] = {sid: "robot_two:52"};
	this.sidHashMap["robot_two:52"] = {rtwname: "<S9>/Sum"};
	this.rtwnameHashMap["<S9>/Sum1"] = {sid: "robot_two:53"};
	this.sidHashMap["robot_two:53"] = {rtwname: "<S9>/Sum1"};
	this.rtwnameHashMap["<S9>/Sum3"] = {sid: "robot_two:54"};
	this.sidHashMap["robot_two:54"] = {rtwname: "<S9>/Sum3"};
	this.rtwnameHashMap["<S9>/Switch1"] = {sid: "robot_two:55"};
	this.sidHashMap["robot_two:55"] = {rtwname: "<S9>/Switch1"};
	this.rtwnameHashMap["<S9>/Switch2"] = {sid: "robot_two:56"};
	this.sidHashMap["robot_two:56"] = {rtwname: "<S9>/Switch2"};
	this.rtwnameHashMap["<S9>/speed Threshold2"] = {sid: "robot_two:57"};
	this.sidHashMap["robot_two:57"] = {rtwname: "<S9>/speed Threshold2"};
	this.rtwnameHashMap["<S9>/Linear Velocity (v)"] = {sid: "robot_two:58"};
	this.sidHashMap["robot_two:58"] = {rtwname: "<S9>/Linear Velocity (v)"};
	this.rtwnameHashMap["<S9>/Angular Velocity (w)"] = {sid: "robot_two:59"};
	this.sidHashMap["robot_two:59"] = {rtwname: "<S9>/Angular Velocity (w)"};
	this.rtwnameHashMap["<S10>/u"] = {sid: "robot_two:57:1"};
	this.sidHashMap["robot_two:57:1"] = {rtwname: "<S10>/u"};
	this.rtwnameHashMap["<S10>/Compare"] = {sid: "robot_two:57:2"};
	this.sidHashMap["robot_two:57:2"] = {rtwname: "<S10>/Compare"};
	this.rtwnameHashMap["<S10>/Constant"] = {sid: "robot_two:57:3"};
	this.sidHashMap["robot_two:57:3"] = {rtwname: "<S10>/Constant"};
	this.rtwnameHashMap["<S10>/y"] = {sid: "robot_two:57:4"};
	this.sidHashMap["robot_two:57:4"] = {rtwname: "<S10>/y"};
	this.rtwnameHashMap["<S11>:1"] = {sid: "robot_two:4:1"};
	this.sidHashMap["robot_two:4:1"] = {rtwname: "<S11>:1"};
	this.rtwnameHashMap["<S11>:1:5"] = {sid: "robot_two:4:1:5"};
	this.sidHashMap["robot_two:4:1:5"] = {rtwname: "<S11>:1:5"};
	this.rtwnameHashMap["<S11>:1:6"] = {sid: "robot_two:4:1:6"};
	this.sidHashMap["robot_two:4:1:6"] = {rtwname: "<S11>:1:6"};
	this.rtwnameHashMap["<S12>:1"] = {sid: "robot_two:5:1"};
	this.sidHashMap["robot_two:5:1"] = {rtwname: "<S12>:1"};
	this.rtwnameHashMap["<S13>/Constant"] = {sid: "robot_two:10:51"};
	this.sidHashMap["robot_two:10:51"] = {rtwname: "<S13>/Constant"};
	this.rtwnameHashMap["<S13>/Enabled Subsystem"] = {sid: "robot_two:10:52"};
	this.sidHashMap["robot_two:10:52"] = {rtwname: "<S13>/Enabled Subsystem"};
	this.rtwnameHashMap["<S13>/SourceBlock"] = {sid: "robot_two:10:58"};
	this.sidHashMap["robot_two:10:58"] = {rtwname: "<S13>/SourceBlock"};
	this.rtwnameHashMap["<S13>/Out1"] = {sid: "robot_two:10:59"};
	this.sidHashMap["robot_two:10:59"] = {rtwname: "<S13>/Out1"};
	this.rtwnameHashMap["<S13>/Out2"] = {sid: "robot_two:10:60"};
	this.sidHashMap["robot_two:10:60"] = {rtwname: "<S13>/Out2"};
	this.rtwnameHashMap["<S14>/Constant"] = {sid: "robot_two:11:51"};
	this.sidHashMap["robot_two:11:51"] = {rtwname: "<S14>/Constant"};
	this.rtwnameHashMap["<S14>/Enabled Subsystem"] = {sid: "robot_two:11:52"};
	this.sidHashMap["robot_two:11:52"] = {rtwname: "<S14>/Enabled Subsystem"};
	this.rtwnameHashMap["<S14>/SourceBlock"] = {sid: "robot_two:11:58"};
	this.sidHashMap["robot_two:11:58"] = {rtwname: "<S14>/SourceBlock"};
	this.rtwnameHashMap["<S14>/Out1"] = {sid: "robot_two:11:59"};
	this.sidHashMap["robot_two:11:59"] = {rtwname: "<S14>/Out1"};
	this.rtwnameHashMap["<S14>/Out2"] = {sid: "robot_two:11:60"};
	this.sidHashMap["robot_two:11:60"] = {rtwname: "<S14>/Out2"};
	this.rtwnameHashMap["<S15>/In1"] = {sid: "robot_two:10:53"};
	this.sidHashMap["robot_two:10:53"] = {rtwname: "<S15>/In1"};
	this.rtwnameHashMap["<S15>/Enable"] = {sid: "robot_two:10:54"};
	this.sidHashMap["robot_two:10:54"] = {rtwname: "<S15>/Enable"};
	this.rtwnameHashMap["<S15>/Out1"] = {sid: "robot_two:10:55"};
	this.sidHashMap["robot_two:10:55"] = {rtwname: "<S15>/Out1"};
	this.rtwnameHashMap["<S16>/In1"] = {sid: "robot_two:11:53"};
	this.sidHashMap["robot_two:11:53"] = {rtwname: "<S16>/In1"};
	this.rtwnameHashMap["<S16>/Enable"] = {sid: "robot_two:11:54"};
	this.sidHashMap["robot_two:11:54"] = {rtwname: "<S16>/Enable"};
	this.rtwnameHashMap["<S16>/Out1"] = {sid: "robot_two:11:55"};
	this.sidHashMap["robot_two:11:55"] = {rtwname: "<S16>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
