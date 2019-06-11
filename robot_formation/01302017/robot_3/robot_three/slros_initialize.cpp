#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot_three";

// For Block robot_three/camera/Subscribe1
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_three_nav_msgs_Odometry> Sub_robot_three_10;

// For Block robot_three/camera/Subscribe2
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_three_nav_msgs_Odometry> Sub_robot_three_11;

// For Block robot_three/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_three_geometry_msgs_Twist> Pub_robot_three_75;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

