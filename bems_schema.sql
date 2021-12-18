-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: bems
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `10minute`
--

DROP TABLE IF EXISTS `10minute`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `10minute` (
  `id` int NOT NULL AUTO_INCREMENT,
  `object_name` char(60) NOT NULL,
  `log_time` datetime NOT NULL,
  `log_value` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=87206 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `1day`
--

DROP TABLE IF EXISTS `1day`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `1day` (
  `id` int NOT NULL AUTO_INCREMENT,
  `object_name` char(60) NOT NULL,
  `log_time` datetime NOT NULL,
  `log_value` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=583 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `1hour`
--

DROP TABLE IF EXISTS `1hour`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `1hour` (
  `id` int NOT NULL AUTO_INCREMENT,
  `object_name` char(60) NOT NULL,
  `log_time` datetime NOT NULL,
  `log_value` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14451 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `1month`
--

DROP TABLE IF EXISTS `1month`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `1month` (
  `id` int NOT NULL AUTO_INCREMENT,
  `object_name` char(60) NOT NULL,
  `log_time` datetime NOT NULL,
  `log_value` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `1year`
--

DROP TABLE IF EXISTS `1year`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `1year` (
  `id` int NOT NULL AUTO_INCREMENT,
  `object_name` char(60) NOT NULL,
  `log_time` datetime NOT NULL,
  `log_value` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `bacnet_device`
--

DROP TABLE IF EXISTS `bacnet_device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bacnet_device` (
  `id` int NOT NULL,
  `name` char(60) NOT NULL,
  `address` char(30) NOT NULL,
  `broadcast_address` char(15) NOT NULL,
  `port` int DEFAULT NULL,
  `period` int DEFAULT NULL,
  `active` int NOT NULL,
  `available` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `bacnet_station`
--

DROP TABLE IF EXISTS `bacnet_station`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bacnet_station` (
  `id` int NOT NULL,
  `object_name` char(60) NOT NULL,
  `device_id` int NOT NULL,
  `object` char(5) NOT NULL,
  `object_type` int NOT NULL,
  `object_instance` int NOT NULL,
  `value_type` int DEFAULT NULL,
  `active` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `object_name` (`object_name`),
  KEY `device_id` (`device_id`),
  CONSTRAINT `bacnet_station_ibfk_1` FOREIGN KEY (`device_id`) REFERENCES `bacnet_device` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ctrl_log`
--

DROP TABLE IF EXISTS `ctrl_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ctrl_log` (
  `id` int NOT NULL,
  `object_name` char(60) NOT NULL,
  `network_type` char(10) NOT NULL,
  `network_id` int NOT NULL DEFAULT '-1',
  `ctrl_value` float DEFAULT NULL,
  `log_time` datetime NOT NULL,
  `success` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`,`object_name`,`network_type`,`network_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `modbus_channel`
--

DROP TABLE IF EXISTS `modbus_channel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modbus_channel` (
  `id` int NOT NULL,
  `name` char(60) NOT NULL,
  `network_id` int NOT NULL,
  `function_code` int NOT NULL,
  `device_address` int NOT NULL,
  `start_address` int NOT NULL,
  `quantity` int NOT NULL,
  `active` int NOT NULL,
  `tx` int NOT NULL DEFAULT '0',
  `rx` int NOT NULL DEFAULT '0',
  `err` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `network_id` (`network_id`),
  CONSTRAINT `modbus_channel_ibfk_1` FOREIGN KEY (`network_id`) REFERENCES `modbus_network` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `modbus_data`
--

DROP TABLE IF EXISTS `modbus_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modbus_data` (
  `object_name` char(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `object_type` char(4) NOT NULL,
  `id` int NOT NULL,
  `unit` char(5) DEFAULT NULL,
  `low_limit` char(10) NOT NULL,
  `high_limit` char(10) NOT NULL,
  `active` int NOT NULL,
  `m_network` int NOT NULL,
  `m_channel` int NOT NULL,
  `m_func` int NOT NULL,
  `m_addr` char(10) NOT NULL,
  `m_bitoffset` int NOT NULL,
  `m_dattype` int NOT NULL,
  `m_r_scale` float NOT NULL,
  `m_r_offset` float NOT NULL,
  `m_w_id` int DEFAULT NULL,
  `m_w_fc` int DEFAULT NULL,
  `m_w_addr` char(10) DEFAULT NULL,
  `m_w_dattype` int DEFAULT NULL,
  `m_w_scale` float DEFAULT NULL,
  `m_w_offset` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `object_name` (`object_name`),
  KEY `m_network` (`m_network`),
  KEY `m_channel` (`m_channel`),
  CONSTRAINT `modbus_data_ibfk_1` FOREIGN KEY (`m_network`) REFERENCES `modbus_network` (`id`) ON DELETE CASCADE,
  CONSTRAINT `modbus_data_ibfk_2` FOREIGN KEY (`m_channel`) REFERENCES `modbus_channel` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `modbus_network`
--

DROP TABLE IF EXISTS `modbus_network`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modbus_network` (
  `id` int NOT NULL,
  `name` char(60) NOT NULL,
  `network_type` char(15) NOT NULL,
  `address` char(15) NOT NULL,
  `port` int DEFAULT NULL,
  `period` int DEFAULT NULL,
  `wait_time` int DEFAULT NULL,
  `active` int DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `realtime_table`
--

DROP TABLE IF EXISTS `realtime_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `realtime_table` (
  `id` int NOT NULL,
  `object_name` char(60) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `log_value` float NOT NULL,
  `ctrl_value` float DEFAULT NULL,
  `log_time` datetime NOT NULL,
  `object_type` char(5) NOT NULL,
  `network_type` char(10) NOT NULL,
  `network_id` int NOT NULL DEFAULT '-1',
  PRIMARY KEY (`id`,`object_name`,`network_type`,`network_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-18 16:34:45
