#include "slros_initialize.h"

ros::NodeHandle * SLROSNodePtr;
const std::string SLROSNodeName = "robot_cam1";

// For Block robot_cam1/camera/Subscribe1
SimulinkSubscriber<geometry_msgs::PoseStamped, SL_Bus_robot_cam1_geometry_msgs_PoseStamped> Sub_robot_cam1_10;

// For Block robot_cam1/camera/Subscribe2
SimulinkSubscriber<geometry_msgs::PoseStamped, SL_Bus_robot_cam1_geometry_msgs_PoseStamped> Sub_robot_cam1_11;

// For Block robot_cam1/Command robot/Command Velocity Publisher/Publish2
SimulinkPublisher<geometry_msgs::Twist, SL_Bus_robot_cam1_geometry_msgs_Twist> Pub_robot_cam1_75;

void slros_node_init(int argc, char** argv)
{
  ros::init(argc, argv, SLROSNodeName);
  SLROSNodePtr = new ros::NodeHandle();
}

