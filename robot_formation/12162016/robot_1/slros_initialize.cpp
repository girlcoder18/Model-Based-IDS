#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot_1";

// For Block robot_1/robot_1/robot_position/robot_1_position
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_1_nav_msgs_Odometry> Sub_robot_1_4;

// For Block robot_1/robot_1/robot_position/robot_2_position
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_1_nav_msgs_Odometry> Sub_robot_1_25;

// For Block robot_1/robot_1/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_1_geometry_msgs_Twist> Pub_robot_1_173;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

