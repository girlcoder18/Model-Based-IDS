function RTW_Sid2UrlHash() {
	this.urlHashMap = new Array();
	/* <Root>/Command robot */
	this.urlHashMap["robot_one:65"] = "robot_one.h:190";
	/* <Root>/Compute robot velocity */
	this.urlHashMap["robot_one:29"] = "robot_one.h:191";
	/* <Root>/camera */
	this.urlHashMap["robot_one:1"] = "robot_one.h:184,192";
	/* <Root>/cyc_pursuit2 */
	this.urlHashMap["robot_one:28"] = "robot_one.cpp:209,218&robot_one.h:193";
	/* <S1>/Command Velocity Publisher */
	this.urlHashMap["robot_one:69"] = "robot_one.cpp:197,299,370,384,429,440&robot_one.h:194";
	/* <S1>/Linear Velocity (Slider) */
	this.urlHashMap["robot_one:76"] = "robot_one.h:195";
	/* <S2>/Proportional Controller */
	this.urlHashMap["robot_one:36"] = "robot_one.cpp:200,298&robot_one.h:198";
	/* <S3>/Conversion1 */
	this.urlHashMap["robot_one:4"] = "robot_one.cpp:62,301&robot_one.h:46,48,62,200&robot_one_types.h:176";
	/* <S3>/Conversion2 */
	this.urlHashMap["robot_one:5"] = "robot_one.cpp:63,175&robot_one.h:61,201";
	/* <S3>/Real-Imag to
Complex */
	this.urlHashMap["robot_one:8"] = "robot_one.h:165";
	/* <S3>/Real-Imag to
Complex1 */
	this.urlHashMap["robot_one:9"] = "robot_one.h:166";
	/* <S3>/Subscribe1 */
	this.urlHashMap["robot_one:10"] = "robot_one.cpp:157,173,356,368,394,400,418,427&robot_one.h:202";
	/* <S3>/Subscribe2 */
	this.urlHashMap["robot_one:11"] = "robot_one.cpp:140,155,203,297,342,354,386,392,407,416&robot_one.h:203";
	/* <S3>/To Workspace */
	this.urlHashMap["robot_one:12"] = "robot_one.h:167";
	/* <S3>/To Workspace1 */
	this.urlHashMap["robot_one:13"] = "robot_one.h:168";
	/* <S3>/To Workspace3 */
	this.urlHashMap["robot_one:14"] = "robot_one.h:169";
	/* <S3>/To Workspace4 */
	this.urlHashMap["robot_one:15"] = "robot_one.h:170";
	/* <S3>/To Workspace5 */
	this.urlHashMap["robot_one:16"] = "robot_one.h:171";
	/* <S3>/To Workspace6 */
	this.urlHashMap["robot_one:17"] = "robot_one.h:172";
	/* <S4>:1 */
	this.urlHashMap["robot_one:28:1"] = "robot_one.cpp:176";
	/* <S4>:1:4 */
	this.urlHashMap["robot_one:28:1:4"] = "robot_one.cpp:177";
	/* <S4>:1:5 */
	this.urlHashMap["robot_one:28:1:5"] = "robot_one.cpp:178";
	/* <S4>:1:6 */
	this.urlHashMap["robot_one:28:1:6"] = "robot_one.cpp:179";
	/* <S4>:1:7 */
	this.urlHashMap["robot_one:28:1:7"] = "robot_one.cpp:180";
	/* <S5>/Enable */
	this.urlHashMap["robot_one:72"] = "robot_one.cpp:198";
	/* <S5>/Blank Message */
	this.urlHashMap["robot_one:73"] = "robot_one.h:196";
	/* <S5>/Bus
Assignment1 */
	this.urlHashMap["robot_one:74"] = "robot_one.cpp:279&robot_one.h:56";
	/* <S5>/Publish2 */
	this.urlHashMap["robot_one:75"] = "robot_one.cpp:288,294,371,383,430,439&robot_one.h:197";
	/* <S6>/Slider
Gain */
	this.urlHashMap["robot_one:76:31"] = "robot_one.cpp:281,451&robot_one.h:81&rtmodel.h:43";
	/* <S7>/Constant */
	this.urlHashMap["robot_one:73:33"] = "robot_one.cpp:280,827&robot_one.h:96&rtmodel.h:415";
	/* <S8>/SinkBlock */
	this.urlHashMap["robot_one:75:31"] = "robot_one.cpp:289,290,372,382,431,432,438&robot_one.h:69,70";
	/* <S9>/Enable */
	this.urlHashMap["robot_one:42"] = "robot_one.cpp:201";
	/* <S9>/Bound [-pi,pi] */
	this.urlHashMap["robot_one:43"] = "robot_one.cpp:241,258";
	/* <S9>/Desired Yaw */
	this.urlHashMap["robot_one:44"] = "robot_one.cpp:250";
	/* <S9>/Distance */
	this.urlHashMap["robot_one:45"] = "robot_one.cpp:265,274";
	/* <S9>/Distance1 */
	this.urlHashMap["robot_one:46"] = "robot_one.cpp:227,236";
	/* <S9>/Distance2 */
	this.urlHashMap["robot_one:47"] = "robot_one.cpp:262";
	/* <S9>/Distance3 */
	this.urlHashMap["robot_one:48"] = "robot_one.cpp:257";
	/* <S9>/Stop1 */
	this.urlHashMap["robot_one:51"] = "robot_one.cpp:240,836&robot_one.h:105&rtmodel.h:424";
	/* <S9>/Sum */
	this.urlHashMap["robot_one:52"] = "robot_one.cpp:217&robot_one.h:58";
	/* <S9>/Sum1 */
	this.urlHashMap["robot_one:53"] = "robot_one.cpp:208&robot_one.h:57";
	/* <S9>/Sum3 */
	this.urlHashMap["robot_one:54"] = "robot_one.cpp:249&robot_one.h:59";
	/* <S9>/Switch1 */
	this.urlHashMap["robot_one:55"] = "robot_one.cpp:238,277";
	/* <S9>/Switch2 */
	this.urlHashMap["robot_one:56"] = "robot_one.cpp:243";
	/* <S9>/speed Threshold2 */
	this.urlHashMap["robot_one:57"] = "robot_one.h:199";
	/* <S9>/Linear Velocity (v) */
	this.urlHashMap["robot_one:58"] = "robot_one.cpp:830&robot_one.h:99&rtmodel.h:418";
	/* <S9>/Angular Velocity (w) */
	this.urlHashMap["robot_one:59"] = "robot_one.cpp:833&robot_one.h:102&rtmodel.h:421";
	/* <S10>/Compare */
	this.urlHashMap["robot_one:57:2"] = "robot_one.cpp:242";
	/* <S10>/Constant */
	this.urlHashMap["robot_one:57:3"] = "robot_one.cpp:239,448&robot_one.h:78&rtmodel.h:40";
	/* <S11>:1 */
	this.urlHashMap["robot_one:4:1"] = "robot_one.cpp:74";
	/* <S11>:1:5 */
	this.urlHashMap["robot_one:4:1:5"] = "robot_one.cpp:75";
	/* <S11>:1:6 */
	this.urlHashMap["robot_one:4:1:6"] = "robot_one.cpp:83";
	/* <S12>:1 */
	this.urlHashMap["robot_one:5:1"] = "msg=rtwMsg_reusableFunction&block=robot_one:5:1";
	/* <S13>/Constant */
	this.urlHashMap["robot_one:10:51"] = "robot_one.cpp:631&robot_one.h:87&rtmodel.h:221";
	/* <S13>/Enabled
Subsystem */
	this.urlHashMap["robot_one:10:52"] = "robot_one.cpp:164,172,395,399&robot_one.h:204";
	/* <S13>/SourceBlock */
	this.urlHashMap["robot_one:10:58"] = "robot_one.cpp:158,160,171,357,367,419,420,426&robot_one.h:68,72";
	/* <S14>/Constant */
	this.urlHashMap["robot_one:11:51"] = "robot_one.cpp:811&robot_one.h:93&rtmodel.h:399";
	/* <S14>/Enabled
Subsystem */
	this.urlHashMap["robot_one:11:52"] = "robot_one.cpp:147,154,387,391&robot_one.h:205";
	/* <S14>/SourceBlock */
	this.urlHashMap["robot_one:11:58"] = "robot_one.cpp:141,143,204,205,343,353,408,409,415&robot_one.h:67,71";
	/* <S15>/In1 */
	this.urlHashMap["robot_one:10:53"] = "robot_one.cpp:159&robot_one.h:54";
	/* <S15>/Enable */
	this.urlHashMap["robot_one:10:54"] = "robot_one.cpp:165";
	/* <S15>/Out1 */
	this.urlHashMap["robot_one:10:55"] = "robot_one.cpp:396,541&robot_one.h:84&rtmodel.h:132";
	/* <S16>/In1 */
	this.urlHashMap["robot_one:11:53"] = "robot_one.cpp:142&robot_one.h:53";
	/* <S16>/Enable */
	this.urlHashMap["robot_one:11:54"] = "robot_one.cpp:148";
	/* <S16>/Out1 */
	this.urlHashMap["robot_one:11:55"] = "robot_one.cpp:388,721&robot_one.h:90&rtmodel.h:310";
	this.getUrlHash = function(sid) { return this.urlHashMap[sid];}
}
RTW_Sid2UrlHash.instance = new RTW_Sid2UrlHash();
function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "robot_one"};
	this.sidHashMap["robot_one"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<S1>"] = {sid: "robot_one:65"};
	this.sidHashMap["robot_one:65"] = {rtwname: "<S1>"};
	this.rtwnameHashMap["<S2>"] = {sid: "robot_one:29"};
	this.sidHashMap["robot_one:29"] = {rtwname: "<S2>"};
	this.rtwnameHashMap["<S3>"] = {sid: "robot_one:1"};
	this.sidHashMap["robot_one:1"] = {rtwname: "<S3>"};
	this.rtwnameHashMap["<S4>"] = {sid: "robot_one:28"};
	this.sidHashMap["robot_one:28"] = {rtwname: "<S4>"};
	this.rtwnameHashMap["<S5>"] = {sid: "robot_one:69"};
	this.sidHashMap["robot_one:69"] = {rtwname: "<S5>"};
	this.rtwnameHashMap["<S6>"] = {sid: "robot_one:76"};
	this.sidHashMap["robot_one:76"] = {rtwname: "<S6>"};
	this.rtwnameHashMap["<S7>"] = {sid: "robot_one:73"};
	this.sidHashMap["robot_one:73"] = {rtwname: "<S7>"};
	this.rtwnameHashMap["<S8>"] = {sid: "robot_one:75"};
	this.sidHashMap["robot_one:75"] = {rtwname: "<S8>"};
	this.rtwnameHashMap["<S9>"] = {sid: "robot_one:36"};
	this.sidHashMap["robot_one:36"] = {rtwname: "<S9>"};
	this.rtwnameHashMap["<S10>"] = {sid: "robot_one:57"};
	this.sidHashMap["robot_one:57"] = {rtwname: "<S10>"};
	this.rtwnameHashMap["<S11>"] = {sid: "robot_one:4"};
	this.sidHashMap["robot_one:4"] = {rtwname: "<S11>"};
	this.rtwnameHashMap["<S12>"] = {sid: "robot_one:5"};
	this.sidHashMap["robot_one:5"] = {rtwname: "<S12>"};
	this.rtwnameHashMap["<S13>"] = {sid: "robot_one:10"};
	this.sidHashMap["robot_one:10"] = {rtwname: "<S13>"};
	this.rtwnameHashMap["<S14>"] = {sid: "robot_one:11"};
	this.sidHashMap["robot_one:11"] = {rtwname: "<S14>"};
	this.rtwnameHashMap["<S15>"] = {sid: "robot_one:10:52"};
	this.sidHashMap["robot_one:10:52"] = {rtwname: "<S15>"};
	this.rtwnameHashMap["<S16>"] = {sid: "robot_one:11:52"};
	this.sidHashMap["robot_one:11:52"] = {rtwname: "<S16>"};
	this.rtwnameHashMap["<Root>/Command robot"] = {sid: "robot_one:65"};
	this.sidHashMap["robot_one:65"] = {rtwname: "<Root>/Command robot"};
	this.rtwnameHashMap["<Root>/Compute robot velocity"] = {sid: "robot_one:29"};
	this.sidHashMap["robot_one:29"] = {rtwname: "<Root>/Compute robot velocity"};
	this.rtwnameHashMap["<Root>/camera"] = {sid: "robot_one:1"};
	this.sidHashMap["robot_one:1"] = {rtwname: "<Root>/camera"};
	this.rtwnameHashMap["<Root>/cyc_pursuit2"] = {sid: "robot_one:28"};
	this.sidHashMap["robot_one:28"] = {rtwname: "<Root>/cyc_pursuit2"};
	this.rtwnameHashMap["<S1>/robot_0_velocity"] = {sid: "robot_one:66"};
	this.sidHashMap["robot_one:66"] = {rtwname: "<S1>/robot_0_velocity"};
	this.rtwnameHashMap["<S1>/robot_0_angle"] = {sid: "robot_one:67"};
	this.sidHashMap["robot_one:67"] = {rtwname: "<S1>/robot_0_angle"};
	this.rtwnameHashMap["<S1>/enbale_r0b0t_0"] = {sid: "robot_one:68"};
	this.sidHashMap["robot_one:68"] = {rtwname: "<S1>/enbale_r0b0t_0"};
	this.rtwnameHashMap["<S1>/Command Velocity Publisher"] = {sid: "robot_one:69"};
	this.sidHashMap["robot_one:69"] = {rtwname: "<S1>/Command Velocity Publisher"};
	this.rtwnameHashMap["<S1>/Linear Velocity (Slider)"] = {sid: "robot_one:76"};
	this.sidHashMap["robot_one:76"] = {rtwname: "<S1>/Linear Velocity (Slider)"};
	this.rtwnameHashMap["<S2>/robot_0_x_des"] = {sid: "robot_one:30"};
	this.sidHashMap["robot_one:30"] = {rtwname: "<S2>/robot_0_x_des"};
	this.rtwnameHashMap["<S2>/robot_0_y_des"] = {sid: "robot_one:31"};
	this.sidHashMap["robot_one:31"] = {rtwname: "<S2>/robot_0_y_des"};
	this.rtwnameHashMap["<S2>/robot_0_x_pos"] = {sid: "robot_one:32"};
	this.sidHashMap["robot_one:32"] = {rtwname: "<S2>/robot_0_x_pos"};
	this.rtwnameHashMap["<S2>/robot_0_y_pos"] = {sid: "robot_one:33"};
	this.sidHashMap["robot_one:33"] = {rtwname: "<S2>/robot_0_y_pos"};
	this.rtwnameHashMap["<S2>/robot_0_orient"] = {sid: "robot_one:34"};
	this.sidHashMap["robot_one:34"] = {rtwname: "<S2>/robot_0_orient"};
	this.rtwnameHashMap["<S2>/Enable1"] = {sid: "robot_one:35"};
	this.sidHashMap["robot_one:35"] = {rtwname: "<S2>/Enable1"};
	this.rtwnameHashMap["<S2>/Proportional Controller"] = {sid: "robot_one:36"};
	this.sidHashMap["robot_one:36"] = {rtwname: "<S2>/Proportional Controller"};
	this.rtwnameHashMap["<S2>/robot_0_velocity"] = {sid: "robot_one:60"};
	this.sidHashMap["robot_one:60"] = {rtwname: "<S2>/robot_0_velocity"};
	this.rtwnameHashMap["<S2>/robot_0_angle"] = {sid: "robot_one:61"};
	this.sidHashMap["robot_one:61"] = {rtwname: "<S2>/robot_0_angle"};
	this.rtwnameHashMap["<S2>/enable_robot_0"] = {sid: "robot_one:62"};
	this.sidHashMap["robot_one:62"] = {rtwname: "<S2>/enable_robot_0"};
	this.rtwnameHashMap["<S3>/Bus Selector1"] = {sid: "robot_one:2"};
	this.sidHashMap["robot_one:2"] = {rtwname: "<S3>/Bus Selector1"};
	this.rtwnameHashMap["<S3>/Bus Selector2"] = {sid: "robot_one:3"};
	this.sidHashMap["robot_one:3"] = {rtwname: "<S3>/Bus Selector2"};
	this.rtwnameHashMap["<S3>/Conversion1"] = {sid: "robot_one:4"};
	this.sidHashMap["robot_one:4"] = {rtwname: "<S3>/Conversion1"};
	this.rtwnameHashMap["<S3>/Conversion2"] = {sid: "robot_one:5"};
	this.sidHashMap["robot_one:5"] = {rtwname: "<S3>/Conversion2"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex"] = {sid: "robot_one:8"};
	this.sidHashMap["robot_one:8"] = {rtwname: "<S3>/Real-Imag to Complex"};
	this.rtwnameHashMap["<S3>/Real-Imag to Complex1"] = {sid: "robot_one:9"};
	this.sidHashMap["robot_one:9"] = {rtwname: "<S3>/Real-Imag to Complex1"};
	this.rtwnameHashMap["<S3>/Subscribe1"] = {sid: "robot_one:10"};
	this.sidHashMap["robot_one:10"] = {rtwname: "<S3>/Subscribe1"};
	this.rtwnameHashMap["<S3>/Subscribe2"] = {sid: "robot_one:11"};
	this.sidHashMap["robot_one:11"] = {rtwname: "<S3>/Subscribe2"};
	this.rtwnameHashMap["<S3>/Terminator"] = {sid: "robot_one:63"};
	this.sidHashMap["robot_one:63"] = {rtwname: "<S3>/Terminator"};
	this.rtwnameHashMap["<S3>/Terminator1"] = {sid: "robot_one:64"};
	this.sidHashMap["robot_one:64"] = {rtwname: "<S3>/Terminator1"};
	this.rtwnameHashMap["<S3>/To Workspace"] = {sid: "robot_one:12"};
	this.sidHashMap["robot_one:12"] = {rtwname: "<S3>/To Workspace"};
	this.rtwnameHashMap["<S3>/To Workspace1"] = {sid: "robot_one:13"};
	this.sidHashMap["robot_one:13"] = {rtwname: "<S3>/To Workspace1"};
	this.rtwnameHashMap["<S3>/To Workspace3"] = {sid: "robot_one:14"};
	this.sidHashMap["robot_one:14"] = {rtwname: "<S3>/To Workspace3"};
	this.rtwnameHashMap["<S3>/To Workspace4"] = {sid: "robot_one:15"};
	this.sidHashMap["robot_one:15"] = {rtwname: "<S3>/To Workspace4"};
	this.rtwnameHashMap["<S3>/To Workspace5"] = {sid: "robot_one:16"};
	this.sidHashMap["robot_one:16"] = {rtwname: "<S3>/To Workspace5"};
	this.rtwnameHashMap["<S3>/To Workspace6"] = {sid: "robot_one:17"};
	this.sidHashMap["robot_one:17"] = {rtwname: "<S3>/To Workspace6"};
	this.rtwnameHashMap["<S3>/robot_0_x_pos"] = {sid: "robot_one:18"};
	this.sidHashMap["robot_one:18"] = {rtwname: "<S3>/robot_0_x_pos"};
	this.rtwnameHashMap["<S3>/robot_0_y_pos"] = {sid: "robot_one:19"};
	this.sidHashMap["robot_one:19"] = {rtwname: "<S3>/robot_0_y_pos"};
	this.rtwnameHashMap["<S3>/robot_1_x_pos"] = {sid: "robot_one:26"};
	this.sidHashMap["robot_one:26"] = {rtwname: "<S3>/robot_1_x_pos"};
	this.rtwnameHashMap["<S3>/robot_1_y_pos"] = {sid: "robot_one:27"};
	this.sidHashMap["robot_one:27"] = {rtwname: "<S3>/robot_1_y_pos"};
	this.rtwnameHashMap["<S3>/robot_0_orient"] = {sid: "robot_one:22"};
	this.sidHashMap["robot_one:22"] = {rtwname: "<S3>/robot_0_orient"};
	this.rtwnameHashMap["<S3>/Enable1"] = {sid: "robot_one:23"};
	this.sidHashMap["robot_one:23"] = {rtwname: "<S3>/Enable1"};
	this.rtwnameHashMap["<S4>:1"] = {sid: "robot_one:28:1"};
	this.sidHashMap["robot_one:28:1"] = {rtwname: "<S4>:1"};
	this.rtwnameHashMap["<S4>:1:4"] = {sid: "robot_one:28:1:4"};
	this.sidHashMap["robot_one:28:1:4"] = {rtwname: "<S4>:1:4"};
	this.rtwnameHashMap["<S4>:1:5"] = {sid: "robot_one:28:1:5"};
	this.sidHashMap["robot_one:28:1:5"] = {rtwname: "<S4>:1:5"};
	this.rtwnameHashMap["<S4>:1:6"] = {sid: "robot_one:28:1:6"};
	this.sidHashMap["robot_one:28:1:6"] = {rtwname: "<S4>:1:6"};
	this.rtwnameHashMap["<S4>:1:7"] = {sid: "robot_one:28:1:7"};
	this.sidHashMap["robot_one:28:1:7"] = {rtwname: "<S4>:1:7"};
	this.rtwnameHashMap["<S5>/v"] = {sid: "robot_one:70"};
	this.sidHashMap["robot_one:70"] = {rtwname: "<S5>/v"};
	this.rtwnameHashMap["<S5>/w"] = {sid: "robot_one:71"};
	this.sidHashMap["robot_one:71"] = {rtwname: "<S5>/w"};
	this.rtwnameHashMap["<S5>/Enable"] = {sid: "robot_one:72"};
	this.sidHashMap["robot_one:72"] = {rtwname: "<S5>/Enable"};
	this.rtwnameHashMap["<S5>/Blank Message"] = {sid: "robot_one:73"};
	this.sidHashMap["robot_one:73"] = {rtwname: "<S5>/Blank Message"};
	this.rtwnameHashMap["<S5>/Bus Assignment1"] = {sid: "robot_one:74"};
	this.sidHashMap["robot_one:74"] = {rtwname: "<S5>/Bus Assignment1"};
	this.rtwnameHashMap["<S5>/Publish2"] = {sid: "robot_one:75"};
	this.sidHashMap["robot_one:75"] = {rtwname: "<S5>/Publish2"};
	this.rtwnameHashMap["<S6>/u"] = {sid: "robot_one:76:30"};
	this.sidHashMap["robot_one:76:30"] = {rtwname: "<S6>/u"};
	this.rtwnameHashMap["<S6>/Slider Gain"] = {sid: "robot_one:76:31"};
	this.sidHashMap["robot_one:76:31"] = {rtwname: "<S6>/Slider Gain"};
	this.rtwnameHashMap["<S6>/y"] = {sid: "robot_one:76:32"};
	this.sidHashMap["robot_one:76:32"] = {rtwname: "<S6>/y"};
	this.rtwnameHashMap["<S7>/Constant"] = {sid: "robot_one:73:33"};
	this.sidHashMap["robot_one:73:33"] = {rtwname: "<S7>/Constant"};
	this.rtwnameHashMap["<S7>/Out"] = {sid: "robot_one:73:34"};
	this.sidHashMap["robot_one:73:34"] = {rtwname: "<S7>/Out"};
	this.rtwnameHashMap["<S8>/In1"] = {sid: "robot_one:75:29"};
	this.sidHashMap["robot_one:75:29"] = {rtwname: "<S8>/In1"};
	this.rtwnameHashMap["<S8>/SignalSpecification"] = {sid: "robot_one:75:30"};
	this.sidHashMap["robot_one:75:30"] = {rtwname: "<S8>/SignalSpecification"};
	this.rtwnameHashMap["<S8>/SinkBlock"] = {sid: "robot_one:75:31"};
	this.sidHashMap["robot_one:75:31"] = {rtwname: "<S8>/SinkBlock"};
	this.rtwnameHashMap["<S9>/Desired position1"] = {sid: "robot_one:37"};
	this.sidHashMap["robot_one:37"] = {rtwname: "<S9>/Desired position1"};
	this.rtwnameHashMap["<S9>/Desired position"] = {sid: "robot_one:38"};
	this.sidHashMap["robot_one:38"] = {rtwname: "<S9>/Desired position"};
	this.rtwnameHashMap["<S9>/Position X"] = {sid: "robot_one:39"};
	this.sidHashMap["robot_one:39"] = {rtwname: "<S9>/Position X"};
	this.rtwnameHashMap["<S9>/Position Y"] = {sid: "robot_one:40"};
	this.sidHashMap["robot_one:40"] = {rtwname: "<S9>/Position Y"};
	this.rtwnameHashMap["<S9>/Orientation (theta)"] = {sid: "robot_one:41"};
	this.sidHashMap["robot_one:41"] = {rtwname: "<S9>/Orientation (theta)"};
	this.rtwnameHashMap["<S9>/Enable"] = {sid: "robot_one:42"};
	this.sidHashMap["robot_one:42"] = {rtwname: "<S9>/Enable"};
	this.rtwnameHashMap["<S9>/Bound [-pi,pi]"] = {sid: "robot_one:43"};
	this.sidHashMap["robot_one:43"] = {rtwname: "<S9>/Bound [-pi,pi]"};
	this.rtwnameHashMap["<S9>/Desired Yaw"] = {sid: "robot_one:44"};
	this.sidHashMap["robot_one:44"] = {rtwname: "<S9>/Desired Yaw"};
	this.rtwnameHashMap["<S9>/Distance"] = {sid: "robot_one:45"};
	this.sidHashMap["robot_one:45"] = {rtwname: "<S9>/Distance"};
	this.rtwnameHashMap["<S9>/Distance1"] = {sid: "robot_one:46"};
	this.sidHashMap["robot_one:46"] = {rtwname: "<S9>/Distance1"};
	this.rtwnameHashMap["<S9>/Distance2"] = {sid: "robot_one:47"};
	this.sidHashMap["robot_one:47"] = {rtwname: "<S9>/Distance2"};
	this.rtwnameHashMap["<S9>/Distance3"] = {sid: "robot_one:48"};
	this.sidHashMap["robot_one:48"] = {rtwname: "<S9>/Distance3"};
	this.rtwnameHashMap["<S9>/Mux"] = {sid: "robot_one:49"};
	this.sidHashMap["robot_one:49"] = {rtwname: "<S9>/Mux"};
	this.rtwnameHashMap["<S9>/Mux1"] = {sid: "robot_one:50"};
	this.sidHashMap["robot_one:50"] = {rtwname: "<S9>/Mux1"};
	this.rtwnameHashMap["<S9>/Stop1"] = {sid: "robot_one:51"};
	this.sidHashMap["robot_one:51"] = {rtwname: "<S9>/Stop1"};
	this.rtwnameHashMap["<S9>/Sum"] = {sid: "robot_one:52"};
	this.sidHashMap["robot_one:52"] = {rtwname: "<S9>/Sum"};
	this.rtwnameHashMap["<S9>/Sum1"] = {sid: "robot_one:53"};
	this.sidHashMap["robot_one:53"] = {rtwname: "<S9>/Sum1"};
	this.rtwnameHashMap["<S9>/Sum3"] = {sid: "robot_one:54"};
	this.sidHashMap["robot_one:54"] = {rtwname: "<S9>/Sum3"};
	this.rtwnameHashMap["<S9>/Switch1"] = {sid: "robot_one:55"};
	this.sidHashMap["robot_one:55"] = {rtwname: "<S9>/Switch1"};
	this.rtwnameHashMap["<S9>/Switch2"] = {sid: "robot_one:56"};
	this.sidHashMap["robot_one:56"] = {rtwname: "<S9>/Switch2"};
	this.rtwnameHashMap["<S9>/speed Threshold2"] = {sid: "robot_one:57"};
	this.sidHashMap["robot_one:57"] = {rtwname: "<S9>/speed Threshold2"};
	this.rtwnameHashMap["<S9>/Linear Velocity (v)"] = {sid: "robot_one:58"};
	this.sidHashMap["robot_one:58"] = {rtwname: "<S9>/Linear Velocity (v)"};
	this.rtwnameHashMap["<S9>/Angular Velocity (w)"] = {sid: "robot_one:59"};
	this.sidHashMap["robot_one:59"] = {rtwname: "<S9>/Angular Velocity (w)"};
	this.rtwnameHashMap["<S10>/u"] = {sid: "robot_one:57:1"};
	this.sidHashMap["robot_one:57:1"] = {rtwname: "<S10>/u"};
	this.rtwnameHashMap["<S10>/Compare"] = {sid: "robot_one:57:2"};
	this.sidHashMap["robot_one:57:2"] = {rtwname: "<S10>/Compare"};
	this.rtwnameHashMap["<S10>/Constant"] = {sid: "robot_one:57:3"};
	this.sidHashMap["robot_one:57:3"] = {rtwname: "<S10>/Constant"};
	this.rtwnameHashMap["<S10>/y"] = {sid: "robot_one:57:4"};
	this.sidHashMap["robot_one:57:4"] = {rtwname: "<S10>/y"};
	this.rtwnameHashMap["<S11>:1"] = {sid: "robot_one:4:1"};
	this.sidHashMap["robot_one:4:1"] = {rtwname: "<S11>:1"};
	this.rtwnameHashMap["<S11>:1:5"] = {sid: "robot_one:4:1:5"};
	this.sidHashMap["robot_one:4:1:5"] = {rtwname: "<S11>:1:5"};
	this.rtwnameHashMap["<S11>:1:6"] = {sid: "robot_one:4:1:6"};
	this.sidHashMap["robot_one:4:1:6"] = {rtwname: "<S11>:1:6"};
	this.rtwnameHashMap["<S12>:1"] = {sid: "robot_one:5:1"};
	this.sidHashMap["robot_one:5:1"] = {rtwname: "<S12>:1"};
	this.rtwnameHashMap["<S13>/Constant"] = {sid: "robot_one:10:51"};
	this.sidHashMap["robot_one:10:51"] = {rtwname: "<S13>/Constant"};
	this.rtwnameHashMap["<S13>/Enabled Subsystem"] = {sid: "robot_one:10:52"};
	this.sidHashMap["robot_one:10:52"] = {rtwname: "<S13>/Enabled Subsystem"};
	this.rtwnameHashMap["<S13>/SourceBlock"] = {sid: "robot_one:10:58"};
	this.sidHashMap["robot_one:10:58"] = {rtwname: "<S13>/SourceBlock"};
	this.rtwnameHashMap["<S13>/Out1"] = {sid: "robot_one:10:59"};
	this.sidHashMap["robot_one:10:59"] = {rtwname: "<S13>/Out1"};
	this.rtwnameHashMap["<S13>/Out2"] = {sid: "robot_one:10:60"};
	this.sidHashMap["robot_one:10:60"] = {rtwname: "<S13>/Out2"};
	this.rtwnameHashMap["<S14>/Constant"] = {sid: "robot_one:11:51"};
	this.sidHashMap["robot_one:11:51"] = {rtwname: "<S14>/Constant"};
	this.rtwnameHashMap["<S14>/Enabled Subsystem"] = {sid: "robot_one:11:52"};
	this.sidHashMap["robot_one:11:52"] = {rtwname: "<S14>/Enabled Subsystem"};
	this.rtwnameHashMap["<S14>/SourceBlock"] = {sid: "robot_one:11:58"};
	this.sidHashMap["robot_one:11:58"] = {rtwname: "<S14>/SourceBlock"};
	this.rtwnameHashMap["<S14>/Out1"] = {sid: "robot_one:11:59"};
	this.sidHashMap["robot_one:11:59"] = {rtwname: "<S14>/Out1"};
	this.rtwnameHashMap["<S14>/Out2"] = {sid: "robot_one:11:60"};
	this.sidHashMap["robot_one:11:60"] = {rtwname: "<S14>/Out2"};
	this.rtwnameHashMap["<S15>/In1"] = {sid: "robot_one:10:53"};
	this.sidHashMap["robot_one:10:53"] = {rtwname: "<S15>/In1"};
	this.rtwnameHashMap["<S15>/Enable"] = {sid: "robot_one:10:54"};
	this.sidHashMap["robot_one:10:54"] = {rtwname: "<S15>/Enable"};
	this.rtwnameHashMap["<S15>/Out1"] = {sid: "robot_one:10:55"};
	this.sidHashMap["robot_one:10:55"] = {rtwname: "<S15>/Out1"};
	this.rtwnameHashMap["<S16>/In1"] = {sid: "robot_one:11:53"};
	this.sidHashMap["robot_one:11:53"] = {rtwname: "<S16>/In1"};
	this.rtwnameHashMap["<S16>/Enable"] = {sid: "robot_one:11:54"};
	this.sidHashMap["robot_one:11:54"] = {rtwname: "<S16>/Enable"};
	this.rtwnameHashMap["<S16>/Out1"] = {sid: "robot_one:11:55"};
	this.sidHashMap["robot_one:11:55"] = {rtwname: "<S16>/Out1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
