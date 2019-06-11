#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot_one";

// For Block robot_one/camera/Subscribe1
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_one_nav_msgs_Odometry> Sub_robot_one_10;

// For Block robot_one/camera/Subscribe2
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_one_nav_msgs_Odometry> Sub_robot_one_11;

// For Block robot_one/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_one_geometry_msgs_Twist> Pub_robot_one_75;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

