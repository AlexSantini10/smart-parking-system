-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Creato il: Gen 17, 2021 alle 19:49
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
(1, 100, 100);

-- --------------------------------------------------------

--
-- Struttura della tabella `toUpdate`
--

CREATE TABLE `toUpdate` (
  `ID` int(11) NOT NULL,
  `isToUpdate` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `toUpdate`
--

INSERT INTO `toUpdate` (`ID`, `isToUpdate`) VALUES
(1, 0);

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
-- Indici per le tabelle `toUpdate`
--
ALTER TABLE `toUpdate`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `log`
--
ALTER TABLE `log`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT per la tabella `posti`
--
ALTER TABLE `posti`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT per la tabella `toUpdate`
--
ALTER TABLE `toUpdate`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
