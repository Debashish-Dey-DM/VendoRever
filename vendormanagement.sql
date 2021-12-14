-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 14, 2021 at 02:12 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vendormanagement`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

CREATE TABLE `friends` (
  `id` int(100) NOT NULL,
  `user_id_1` int(100) NOT NULL,
  `user_id_2` int(100) NOT NULL,
  `status` int(11) NOT NULL,
  `type` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `user_id_1`, `user_id_2`, `status`, `type`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, 1, '2021-10-31 04:58:31', '2021-10-31 04:58:31'),
(2, 1, 3, 1, 1, '2021-10-31 04:58:31', '2021-10-31 04:58:31'),
(3, 2, 3, 1, 0, '2021-10-31 07:10:43', '2021-10-31 07:10:43'),
(4, 5, 3, 1, 0, '2021-10-31 07:10:43', '2021-10-31 07:10:43'),
(5, 5, 1, 1, 1, '2021-11-05 15:34:21', '2021-11-05 15:34:21'),
(7, 6, 1, 1, 1, '2021-11-12 07:12:40', '2021-11-12 07:12:40'),
(8, 6, 5, 1, 1, '2021-11-30 08:01:21', '2021-11-30 08:01:21'),
(9, 6, 2, 1, 0, '2021-11-30 14:28:47', '2021-11-30 14:28:47'),
(10, 6, 3, 1, 0, '2021-11-30 14:29:04', '2021-11-30 14:29:04'),
(11, 5, 2, 1, 0, '2021-12-06 10:55:44', '2021-12-06 10:55:44');

-- --------------------------------------------------------

--
-- Table structure for table `groupmembers`
--
-- Error reading structure for table vendormanagement.groupmembers: #1030 - Got error 194 &quot;Tablespace is missing for a table&quot; from storage engine InnoDB
-- Error reading data for table vendormanagement.groupmembers: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `vendormanagement`.`groupmembers`' at line 1

-- --------------------------------------------------------

--
-- Table structure for table `groups`
--
-- Error reading structure for table vendormanagement.groups: #1030 - Got error 194 &quot;Tablespace is missing for a table&quot; from storage engine InnoDB
-- Error reading data for table vendormanagement.groups: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `vendormanagement`.`groups`' at line 1

-- --------------------------------------------------------

--
-- Table structure for table `members`
--
-- Error reading structure for table vendormanagement.members: #1030 - Got error 194 &quot;Tablespace is missing for a table&quot; from storage engine InnoDB
-- Error reading data for table vendormanagement.members: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `vendormanagement`.`members`' at line 1

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--
-- Error reading structure for table vendormanagement.migrations: #1030 - Got error 194 &quot;Tablespace is missing for a table&quot; from storage engine InnoDB
-- Error reading data for table vendormanagement.migrations: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near 'FROM `vendormanagement`.`migrations`' at line 1

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone` int(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `bkash` int(100) DEFAULT NULL,
  `nagad` int(100) DEFAULT NULL,
  `rocket` int(100) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `phone`, `email`, `bkash`, `nagad`, `rocket`, `status`, `type`, `created_at`, `updated_at`) VALUES
(1, 'Debashish Dey', 'Debashish', 1315092923, 'debashish@gmail.com', 1315092923, 1315092923, 1315092923, 1, 0, '2021-10-02 14:13:20', '2021-10-02 14:13:20'),
(2, 'Jesse Pinkman', 'Jesse', 1238912689, 'jesse@gmail.com', 1238912689, 1238912689, 1238912689, 1, 0, '2021-10-22 06:57:19', '2021-10-22 06:57:19'),
(3, 'Gustavo', 'Gustavo', 1712177852, 'gusFring@gmail.com', 1712177852, 1712177852, 1712177852, 1, 0, '2021-10-23 07:20:59', '2021-10-23 07:20:59'),
(5, 'Mike', 'Mike', 1516092923, 'Mike@gmail.com', 1111111111, 1111111111, NULL, 1, 0, '2021-10-28 17:56:51', '2021-10-28 17:56:51'),
(6, 'jane', 'Jane', 1516092829, 'Jane@gmail.com', 1516092829, 1516092829, 1516092829, 1, 0, '2021-10-31 04:56:53', '2021-10-31 04:56:53'),
(7, 'Scott', 'Scott', 1813295623, 'Scott@gmail.com', NULL, NULL, NULL, 1, 0, '2021-12-06 10:57:43', '2021-12-06 10:57:43'),
(8, 'Dwight', 'Dwight', 1985632459, 'Dwight@gmail.com', 1111111111, 1985632459, NULL, 1, 0, '2021-12-06 11:07:48', '2021-12-06 11:07:48');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friends`
--
ALTER TABLE `friends`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `friends`
--
ALTER TABLE `friends`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
