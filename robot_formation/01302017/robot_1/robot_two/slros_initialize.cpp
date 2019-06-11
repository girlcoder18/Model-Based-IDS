#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot_two";

// For Block robot_two/camera/Subscribe1
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_two_nav_msgs_Odometry> Sub_robot_two_10;

// For Block robot_two/camera/Subscribe2
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_two_nav_msgs_Odometry> Sub_robot_two_11;

// For Block robot_two/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_two_geometry_msgs_Twist> Pub_robot_two_75;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

