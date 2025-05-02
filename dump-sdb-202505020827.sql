-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: sdb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `area_sdb`
--

DROP TABLE IF EXISTS `area_sdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `area_sdb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `area` varchar(255) NOT NULL,
  `max_kwh` float NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `area_sdb`
--

LOCK TABLES `area_sdb` WRITE;
/*!40000 ALTER TABLE `area_sdb` DISABLE KEYS */;
INSERT INTO `area_sdb` VALUES (1,'Casting Mesin',567.8,'2025-04-25','2025-04-25'),(2,'Casting K/F',456.7,'2025-04-25','2025-04-25');
/*!40000 ALTER TABLE `area_sdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kwh_sdb`
--

DROP TABLE IF EXISTS `kwh_sdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kwh_sdb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `v_r` float DEFAULT NULL,
  `v_s` float DEFAULT NULL,
  `v_t` float DEFAULT NULL,
  `i_r` float DEFAULT NULL,
  `i_s` float DEFAULT NULL,
  `i_t` float DEFAULT NULL,
  `kwh` float DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `sdb_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_kwh_sdb_panel_sdb` (`sdb_id`),
  CONSTRAINT `fk_kwh_sdb_panel_sdb` FOREIGN KEY (`sdb_id`) REFERENCES `panel_sdb` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kwh_sdb`
--

LOCK TABLES `kwh_sdb` WRITE;
/*!40000 ALTER TABLE `kwh_sdb` DISABLE KEYS */;
INSERT INTO `kwh_sdb` VALUES (88,'2025-04-25',220,221,219.5,10,10.1,9.9,683,'2025-04-25','2025-04-25',1),(89,'2025-04-25',220,221,219.5,10,10.1,9.9,859,'2025-04-25','2025-04-25',8),(90,'2025-04-26',220,221,219.5,10,10.1,9.9,889,'2025-04-25','2025-04-25',1),(91,'2025-04-26',220,221,219.5,10,10.1,9.9,958,'2025-04-25','2025-04-25',8),(92,'2025-04-27',220,221,219.5,10,10.1,9.9,932,'2025-04-25','2025-04-25',1),(93,'2025-04-27',220,221,219.5,10,10.1,9.9,872,'2025-04-25','2025-04-25',8),(94,'2025-04-28',220,221,219.5,10,10.1,9.9,1012,'2025-04-25','2025-04-25',1),(95,'2025-04-28',220,221,219.5,10,10.1,9.9,792,'2025-04-25','2025-04-25',8),(96,'2025-04-29',220,221,219.5,10,10.1,9.9,825,'2025-04-25','2025-04-25',1),(97,'2025-04-29',220,221,219.5,10,10.1,9.9,953,'2025-04-25','2025-04-25',8),(98,'2025-04-30',220,221,219.5,10,10.1,9.9,914,'2025-04-25','2025-04-25',1),(99,'2025-04-30',220,221,219.5,10,10.1,9.9,892,'2025-04-25','2025-04-25',8),(100,'2025-05-01',220,221,219.5,10,10.1,9.9,926,'2025-04-25','2025-04-25',1),(101,'2025-05-01',220,221,219.5,10,10.1,9.9,1002,'2025-04-25','2025-04-25',8),(102,'2025-05-02',220,221,219.5,10,10.1,9.9,792,'2025-04-25','2025-04-25',1),(103,'2025-05-02',220,221,219.5,10,10.1,9.9,887,'2025-04-25','2025-04-25',8),(104,'2025-05-03',220,221,219.5,10,10.1,9.9,999,'2025-04-25','2025-04-25',1),(105,'2025-05-03',220,221,219.5,10,10.1,9.9,902,'2025-04-25','2025-04-25',8),(106,'2025-05-04',220,221,219.5,10,10.1,9.9,980,'2025-04-25','2025-04-25',1),(107,'2025-05-04',220,221,219.5,10,10.1,9.9,1120,'2025-04-25','2025-04-25',8);
/*!40000 ALTER TABLE `kwh_sdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `master_data_mdb`
--

DROP TABLE IF EXISTS `master_data_mdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `master_data_mdb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `panel` varchar(255) DEFAULT NULL,
  `min_kwh` int DEFAULT NULL,
  `max_kwh` int DEFAULT NULL,
  `min_current` int DEFAULT NULL,
  `max_current` int DEFAULT NULL,
  `min_kva` int DEFAULT NULL,
  `max_kva` int DEFAULT NULL,
  `min_voltage` int DEFAULT NULL,
  `max_voltage` int DEFAULT NULL,
  `min_power_factor` int DEFAULT NULL,
  `max_power_factor` int DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lokasi` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `master_data_mdb`
--

LOCK TABLES `master_data_mdb` WRITE;
/*!40000 ALTER TABLE `master_data_mdb` DISABLE KEYS */;
INSERT INTO `master_data_mdb` VALUES (1,'Panel A',0,12,1,10,1,5,180,240,1,1,'2025-03-31 17:00:00','2025-04-24 17:00:00','Casting Mesin'),(2,'Panel B',0,15,1,12,1,6,190,250,1,1,'2025-03-31 17:00:00','2025-04-24 17:00:00','Casting K/F'),(3,'Panel C',0,10,1,8,1,5,185,235,1,1,'2025-03-31 17:00:00','2025-04-24 17:00:00','Area 3'),(4,'Panel D',0,14,1,10,1,6,180,240,1,1,'2025-03-31 17:00:00','2025-04-24 17:00:00','Area 4');
/*!40000 ALTER TABLE `master_data_mdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `panel_sdb`
--

DROP TABLE IF EXISTS `panel_sdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `panel_sdb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mdb_id` int DEFAULT NULL,
  `panel` varchar(255) DEFAULT NULL,
  `area` varchar(255) DEFAULT NULL,
  `area_id` int DEFAULT NULL,
  `ip_address` varchar(255) DEFAULT NULL,
  `modbus_id` int DEFAULT NULL,
  `min_v_r` float DEFAULT NULL,
  `max_v_r` float DEFAULT NULL,
  `min_v_s` float DEFAULT NULL,
  `max_v_s` float DEFAULT NULL,
  `min_v_t` float DEFAULT NULL,
  `max_v_t` float DEFAULT NULL,
  `min_kwh` float DEFAULT NULL,
  `max_kwh` float DEFAULT NULL,
  `updatedBy` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `mdb_id` (`mdb_id`),
  KEY `fk_panel_area` (`area_id`),
  CONSTRAINT `fk_panel_area` FOREIGN KEY (`area_id`) REFERENCES `area_sdb` (`id`),
  CONSTRAINT `panel_sdb_ibfk_1` FOREIGN KEY (`mdb_id`) REFERENCES `master_data_mdb` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `panel_sdb`
--

LOCK TABLES `panel_sdb` WRITE;
/*!40000 ALTER TABLE `panel_sdb` DISABLE KEYS */;
INSERT INTO `panel_sdb` VALUES (1,NULL,'SDB 1','Casting Mesin',1,'192.168.1.1',1,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(2,NULL,'SDB 7','Casting Mesin',1,'192.168.1.2',2,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(3,NULL,'SDB 12','Casting Mesin',1,'192.168.1.3',3,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(4,NULL,'SDB 19','Casting Mesin',1,'192.168.1.4',4,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(5,NULL,'SDB 25','Casting Mesin',1,'192.168.1.5',5,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(6,NULL,'SDB 26','Casting Mesin',1,'192.168.1.6',6,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(7,NULL,'SDB Model Line','Casting Mesin',1,'192.168.1.7',7,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(8,NULL,'SDB 2','Casting K/F',2,'192.168.1.8',8,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(9,NULL,'SDB 6','Casting K/F',2,'192.168.1.9',9,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(10,NULL,'SDB 13','Casting K/F',2,'192.168.1.10',10,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(11,NULL,'SDB 20','Casting K/F',2,'192.168.1.11',11,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(12,NULL,'SDB 24','Casting K/F',2,'192.168.1.12',12,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25'),(13,NULL,'SDB 27','Casting K/F',2,'192.168.1.13',13,210,240,210,240,210,240,0,100,'System','2025-04-25','2025-04-25');
/*!40000 ALTER TABLE `panel_sdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permenit_kwh_sdb`
--

DROP TABLE IF EXISTS `permenit_kwh_sdb`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permenit_kwh_sdb` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sdb_id` int NOT NULL,
  `v_r` float DEFAULT NULL,
  `v_s` float DEFAULT NULL,
  `v_t` float DEFAULT NULL,
  `i_r` float DEFAULT NULL,
  `i_s` float DEFAULT NULL,
  `i_t` float DEFAULT NULL,
  `kwh` float DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `sdb_id` (`sdb_id`),
  CONSTRAINT `permenit_kwh_sdb_ibfk_1` FOREIGN KEY (`sdb_id`) REFERENCES `panel_sdb` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permenit_kwh_sdb`
--

LOCK TABLES `permenit_kwh_sdb` WRITE;
/*!40000 ALTER TABLE `permenit_kwh_sdb` DISABLE KEYS */;
INSERT INTO `permenit_kwh_sdb` VALUES (1,1,220,230,225,10.5,11,10.8,0.25,'2025-04-25','2025-04-25'),(2,1,220.5,230.5,225.5,10.6,11.1,10.9,0.28,'2025-04-25','2025-04-25'),(3,2,225,235,230,9.8,10.2,9.9,0.3,'2025-04-25','2025-04-25'),(4,2,225.5,235.5,230.5,9.9,10.3,10,0.32,'2025-04-25','2025-04-25'),(5,3,230,240,235,10,10.5,10.2,0.35,'2025-04-25','2025-04-25'),(6,3,230.5,240.5,235.5,10.1,10.6,10.3,0.37,'2025-04-25','2025-04-25');
/*!40000 ALTER TABLE `permenit_kwh_sdb` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'sdb'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-02  8:27:34
