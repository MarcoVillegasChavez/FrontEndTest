-- MySQL dump 10.13  Distrib 8.0.14, for Win64 (x86_64)
--
-- Host: localhost    Database: chat_room_db
-- ------------------------------------------------------
-- Server version	8.0.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chatroom`
--

DROP TABLE IF EXISTS `chatroom`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `chatroom` (
  `IdChatRoom` int(11) NOT NULL AUTO_INCREMENT,
  `IdChat` int(11) DEFAULT NULL,
  `IdUsuario` int(11) DEFAULT NULL,
  `Comentario` text,
  `Fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `LeidoInd` int(1) DEFAULT NULL,
  PRIMARY KEY (`IdChatRoom`),
  KEY `IdChat` (`IdChat`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `chatroom_ibfk_1` FOREIGN KEY (`IdChat`) REFERENCES `chats` (`IdChat`),
  CONSTRAINT `chatroom_ibfk_2` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chatroom`
--

LOCK TABLES `chatroom` WRITE;
/*!40000 ALTER TABLE `chatroom` DISABLE KEYS */;
INSERT INTO `chatroom` VALUES (19,NULL,NULL,'Que tal','2019-02-19 19:00:33',0),(20,NULL,NULL,'que tal','2019-02-19 19:01:35',0),(21,NULL,NULL,'Que tal','2019-02-19 19:04:49',0),(22,NULL,NULL,'hey','2019-02-19 19:35:46',0),(34,2,2,'hola hola hola','2019-02-19 20:20:45',0),(35,2,2,'hey','2019-02-19 21:26:24',0),(39,1,2,'Hey','2019-02-19 23:11:21',0),(40,1,2,'Que tal?','2019-02-19 23:11:44',0),(41,1,1,'Todo ok','2019-02-19 23:12:08',0),(42,2,3,'mande??','2019-02-19 23:18:40',0),(43,7,1,'Hey','2019-02-20 01:01:53',0),(44,NULL,2,'hola','2019-02-20 01:54:27',0),(45,NULL,2,'','2019-02-20 01:57:59',0),(46,21,2,'Hey','2019-02-20 02:09:21',0),(47,22,2,'Hola Bailey','2019-02-20 02:09:40',0),(48,22,3,'como estas??','2019-02-20 02:12:45',0),(49,24,4,'Hola Lupe','2019-02-20 02:30:36',0);
/*!40000 ALTER TABLE `chatroom` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chats`
--

DROP TABLE IF EXISTS `chats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `chats` (
  `IdChat` int(11) NOT NULL AUTO_INCREMENT,
  `CreadoPor` int(11) DEFAULT NULL,
  `Cliente` int(11) DEFAULT NULL,
  `FechaCreacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`IdChat`),
  KEY `CreadoPor` (`CreadoPor`),
  KEY `Cliente` (`Cliente`),
  CONSTRAINT `chats_ibfk_1` FOREIGN KEY (`CreadoPor`) REFERENCES `usuarios` (`IdUsuario`),
  CONSTRAINT `chats_ibfk_2` FOREIGN KEY (`Cliente`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chats`
--

LOCK TABLES `chats` WRITE;
/*!40000 ALTER TABLE `chats` DISABLE KEYS */;
INSERT INTO `chats` VALUES (1,1,2,'2019-02-18 22:35:17'),(2,2,1,'2019-02-19 17:00:59'),(3,3,1,'2019-02-19 22:33:19'),(4,3,NULL,'2019-02-20 00:52:33'),(5,3,NULL,'2019-02-20 00:56:47'),(6,3,NULL,'2019-02-20 00:57:13'),(7,3,NULL,'2019-02-20 01:01:46'),(8,3,NULL,'2019-02-20 01:38:55'),(9,3,NULL,'2019-02-20 01:39:41'),(10,2,NULL,'2019-02-20 01:50:31'),(11,1,NULL,'2019-02-20 01:53:57'),(12,3,NULL,'2019-02-20 01:56:42'),(13,3,NULL,'2019-02-20 01:57:55'),(14,3,NULL,'2019-02-20 02:04:47'),(15,3,NULL,'2019-02-20 02:05:31'),(16,3,NULL,'2019-02-20 02:05:49'),(17,3,NULL,'2019-02-20 02:06:38'),(18,3,NULL,'2019-02-20 02:07:39'),(19,3,NULL,'2019-02-20 02:08:03'),(20,3,NULL,'2019-02-20 02:08:45'),(21,1,NULL,'2019-02-20 02:09:17'),(22,3,NULL,'2019-02-20 02:09:32'),(23,2,NULL,'2019-02-20 02:21:29'),(24,2,NULL,'2019-02-20 02:30:30');
/*!40000 ALTER TABLE `chats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarios` (
  `IdUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(200) DEFAULT NULL,
  `UltimoAcceso` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Imagen` varchar(200) DEFAULT NULL,
  `pass` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Marco Villegas','2019-02-18 22:31:50','https://image.flaticon.com/icons/png/512/23/23146.png','123'),(2,'Guadalupe','2019-02-18 22:32:17','https://image.flaticon.com/icons/png/512/23/23146.png','123'),(3,'Baeley','2019-02-19 06:00:00','https://http2.mlstatic.com/hermosos-cachorros-pomerania-D_NQ_NP_817225-MCO25412038332_032017-F.jpg','pass'),(4,'Dunly','2019-02-19 06:00:00','https://misanimales.com/wp-content/uploads/2015/01/cascabel-gato.jpg','123');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarioschats`
--

DROP TABLE IF EXISTS `usuarioschats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `usuarioschats` (
  `IdUsuarioChat` int(11) NOT NULL AUTO_INCREMENT,
  `IdChat` int(11) DEFAULT NULL,
  `IdUsuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`IdUsuarioChat`),
  KEY `IdChat` (`IdChat`),
  KEY `IdUsuario` (`IdUsuario`),
  CONSTRAINT `usuarioschats_ibfk_1` FOREIGN KEY (`IdChat`) REFERENCES `chats` (`IdChat`),
  CONSTRAINT `usuarioschats_ibfk_2` FOREIGN KEY (`IdUsuario`) REFERENCES `usuarios` (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarioschats`
--

LOCK TABLES `usuarioschats` WRITE;
/*!40000 ALTER TABLE `usuarioschats` DISABLE KEYS */;
INSERT INTO `usuarioschats` VALUES (1,1,1),(2,1,2),(3,2,3),(4,2,1),(5,22,1),(6,22,3),(7,23,2),(8,24,2),(9,24,4);
/*!40000 ALTER TABLE `usuarioschats` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-19 21:14:23
