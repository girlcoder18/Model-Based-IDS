#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot_cam2a";

// For Block robot_cam2a/camera/Recieve/Subscribe2
SimulinkSubscriber<nav_msgs::Odometry, SL_Bus_robot_cam2a_nav_msgs_Odometry> Sub_robot_cam2a_78;

// For Block robot_cam2a/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_cam2a_geometry_msgs_Twist> Pub_robot_cam2a_75;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

