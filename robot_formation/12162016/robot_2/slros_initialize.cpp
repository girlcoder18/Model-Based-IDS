#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot_2";

// For Block robot_2/robot_2/robot_position/robot_0_position
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_2_nav_msgs_Odometry> Sub_robot_2_25;

// For Block robot_2/robot_2/robot_position/robot_2_position
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_2_nav_msgs_Odometry> Sub_robot_2_4;

// For Block robot_2/robot_2/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_2_geometry_msgs_Twist> Pub_robot_2_173;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

