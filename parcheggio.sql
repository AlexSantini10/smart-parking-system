-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Gen 17, 2021 alle 15:40
-- Versione del server: 10.3.27-MariaDB-0+deb10u1
-- Versione PHP: 7.3.19-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `parcheggio`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `log`
--

CREATE TABLE `log` (
  `ID` int(11) NOT NULL,
  `entrataUscita` tinyint(1) NOT NULL,
  `time` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `log`
--

INSERT INTO `log` (`ID`, `entrataUscita`, `time`) VALUES
(1, 1, '2020-12-20 16:27:03'),
(2, 1, '2020-12-20 17:13:48'),
(3, 0, '2020-12-20 17:13:55'),
(4, 0, '2020-12-20 17:20:21'),
(5, 1, '2020-12-22 16:45:51'),
(6, 1, '2020-12-22 16:46:00'),
(7, 1, '2020-12-22 16:46:00'),
(8, 1, '2020-12-22 16:46:02'),
(9, 1, '2020-12-22 16:46:04'),
(10, 1, '2020-12-22 16:46:04'),
(11, 0, '2020-12-22 16:46:08'),
(12, 1, '2020-12-22 16:46:10'),
(13, 1, '2020-12-22 16:46:10'),
(14, 0, '2020-12-22 16:46:12'),
(15, 0, '2020-12-22 16:46:14'),
(16, 0, '2020-12-22 16:46:16'),
(17, 1, '2020-12-22 16:49:45'),
(18, 1, '2020-12-22 16:49:46'),
(19, 1, '2020-12-22 16:49:47'),
(20, 1, '2020-12-22 16:49:47'),
(21, 1, '2020-12-22 18:32:43'),
(22, 1, '2020-12-22 18:35:38'),
(23, 0, '2020-12-22 18:35:41'),
(24, 0, '2020-12-22 18:35:41'),
(25, 1, '2020-12-22 18:35:44'),
(26, 1, '2020-12-22 18:35:44'),
(27, 1, '2020-12-22 18:35:45');

-- --------------------------------------------------------

--
-- Struttura della tabella `posti`
--

CREATE TABLE `posti` (
  `ID` int(11) NOT NULL,
  `postiTotali` int(11) NOT NULL,
  `postiDisponibili` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `posti`
--

INSERT INTO `posti` (`ID`, `postiTotali`, `postiDisponibili`) VALUES
(1, 100, 89);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`ID`);

--
-- Indici per le tabelle `posti`
--
ALTER TABLE `posti`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `log`
--
ALTER TABLE `log`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT per la tabella `posti`
--
ALTER TABLE `posti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
