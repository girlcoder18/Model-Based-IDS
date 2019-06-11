#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot_0";

// For Block robot_0/robot_0/robot_position/robot1_position
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_0_nav_msgs_Odometry> Sub_robot_0_4;

// For Block robot_0/robot_0/robot_position/robot2_position
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_0_nav_msgs_Odometry> Sub_robot_0_25;

// For Block robot_0/robot_0/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_0_geometry_msgs_Twist> Pub_robot_0_173;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

