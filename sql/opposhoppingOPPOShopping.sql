-- phpMyAdmin SQL Dump
-- version 3.3.7
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2020 年 02 月 15 日 11:59
-- 服务器版本: 5.1.50
-- PHP 版本: 5.2.14

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `opposhopping`
--

-- --------------------------------------------------------

--
-- 表的结构 `goodsinfo`
--

CREATE TABLE IF NOT EXISTS `goodsinfo` (
  `goodsId` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `goodsName` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `goodsType` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `goodsImg` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong1` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong2` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong3` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong4` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong5` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong6` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong7` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong8` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong9` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong10` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong11` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong12` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `beiyong13` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `goodsinfo`
--

INSERT INTO `goodsinfo` (`goodsId`, `goodsName`, `goodsType`, `goodsPrice`, `goodsCount`, `goodsDesc`, `goodsImg`, `beiyong1`, `beiyong2`, `beiyong3`, `beiyong4`, `beiyong5`, `beiyong6`, `beiyong7`, `beiyong8`, `beiyong9`, `beiyong10`, `beiyong11`, `beiyong12`, `beiyong13`) VALUES
('0002', 'OPPO Enco Q1 无线降噪耳机 极夜黑', 'è€³æœº', 99, 100, 'ANCåŒé‡ä¸»åŠ¨é™å™ªã€æœ€é•¿22å°æ—¶è¶…é•¿ç»­èˆªã€ä¸‰ç§æ²‰æµ¸å¼ç«‹ä½“éŸ³æ•ˆï¼', 'https://dsfs.oppo.com/archives/201909/201909061009335d71c4c9a1805.png', 'https://dsfs.oppo.com/archives/201908/201908210808195d5d3703b8738.png', 'https://dsfs.oppo.com/archives/201908/201908210808235d5d3707a7b18.png', 'https://dsfs.oppo.com/archives/201908/201908210808395d5d3717beb07.png', 'https://dsfs.oppo.com/archives/201909/_thumbnail/thumbnail_201909061009335d71c4c9a1805.png', 'https://dsfs.oppo.com/archives/201908/_thumbnail/thumbnail_201908210808195d5d3703b8738.png', 'https://dsfs.oppo.com/archives/201908/_thumbnail/thumbnail_201908210808235d5d3707a7b18.png', 'https://dsfs.oppo.com/archives/201908/_thumbnail/thumbnail_201908210808395d5d3717beb07.png', '', '', '', '', '', ''),
('0001', 'Reno3元气版8G+128G流光金', 'æ‰‹æœº', 3999, 10, 'æ–°å“å¼€å”®ï¼Œåˆ°æ‰‹ ï¿¥699ã€‚', 'https://dsfs.oppo.com/archives/202001/202001230301325e294f1c6aa17.png', 'https://dsfs.oppo.com/archives/202001/202001230301325e294f1c6aa17.png', 'https://dsfs.oppo.com/archives/202001/202001230301375e294f215c988.png', 'https://dsfs.oppo.com/archives/202001/202001230301415e294f25c77f6.png', 'https://dsfs.oppo.com/archives/202001/202001230301465e294f2ae7447.png', 'https://dsfs.oppo.com/archives/202001/_thumbnail/thumbnail_202001230301325e294f1c6aa17.png', 'https://dsfs.oppo.com/archives/202001/_thumbnail/thumbnail_202001230301375e294f215c988.png', 'https://dsfs.oppo.com/archives/202001/_thumbnail/thumbnail_202001230301415e294f25c77f6.png', 'https://dsfs.oppo.com/archives/202001/_thumbnail/thumbnail_202001230301465e294f2ae7447.png', 'Reno3 å…ƒæ°”ç‰ˆ 8G+128G  æµå…‰é‡‘', 'ã€æ–°å“é¢„å®šé™æ—¶ç«‹å‡100å…ƒ | é¢„å®šåŠ èµ O-Freshè€³æœº+åŠå¹´å»¶ä¿ã€‘', '2æœˆ14æ—¥10:00æ­£å¼å¼€å”®ï¼Œä¸€ä½“åŒ–åŒæ¨¡5Gï¼Œ4800ä¸‡è¶…æ¸…å››æ‘„ï¼Œè§†é¢‘è¶…çº§åŒé˜²æŠ–ï¼ŒVOOC ', '', ''),
('0003', 'OPPO Enco Free 真无线耳机 恬白', '耳机', 699, 123, 'åŠ èµ è€³æœºä¿æŠ¤å¥—ã€æ–°å“å¼€å”®ã€‘æ™’å•æœ‰ç¤¼ï¼šèµ é€è…¾è®¯è§†é¢‘æœˆå¡1ä»½ã€‚2æœˆ6-15å·ä¸‹å', 'https://dsfs.oppo.com/archives/201912/201912131012515df2f3df1f942.png', 'https://dsfs.oppo.com/archives/201912/201912131012545df2f3e242a66.png', 'https://dsfs.oppo.com/archives/201912/201912131012575df2f3e51c1e7.png', 'https://dsfs.oppo.com/archives/201912/201912131012005df2f3e843194.png', 'https://dsfs.oppo.com/archives/201912/_thumbnail/thumbnail_201912131012515df2f3df1f942.png', 'https://dsfs.oppo.com/archives/201912/_thumbnail/thumbnail_201912131012545df2f3e242a66.png', 'https://dsfs.oppo.com/archives/201912/_thumbnail/thumbnail_201912131012575df2f3e51c1e7.png', 'https://dsfs.oppo.com/archives/201912/_thumbnail/thumbnail_201912131012005df2f3e843194.png', '', '', '', '', '', ''),
('0004', 'Find X 兰博基尼版', '手机', 9999, 12, 'æ›²é¢å…¨æ™¯å±ï¼Œéªé¾™845ã€‚', 'https://dsfs.oppo.com/archives/201808/201808100608445b6d64682c122.png', 'https://dsfs.oppo.com/archives/201808/201808070208285b69372006462.png', 'https://dsfs.oppo.com/archives/201808/201808070208305b693722c8de4.png', 'https://dsfs.oppo.com/archives/201808/201808100608095b6d648147923.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808100608445b6d64682c122.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808070208285b69372006462.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808070208305b693722c8de4.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808100608095b6d648147923.png', '', '', '', '', '', ''),
('0005', 'Find X 波尔多红', '手机', 4999, 12, 'æ›²é¢å…¨æ™¯å±ï¼Œéªé¾™845ã€‚', 'https://dsfs.oppo.com/archives/201808/201808070108145b69347edb7a1.png', 'https://dsfs.oppo.com/archives/201808/201808070108195b693483762d2.png', 'https://dsfs.oppo.com/archives/201808/201808070108235b6934875b306.png', 'https://dsfs.oppo.com/archives/201808/201808070108285b69348c2fc19.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808070108145b69347edb7a1.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808070108195b693483762d2.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808070108235b6934875b306.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808070108285b69348c2fc19.png', '', '', '', '', '', ''),
('0006', 'Reno2 Z 8G+128G 晨雾白', '手机', 3999, 12, '8GB+128GBå¤§å†…å­˜ç»„åˆï¼ŒæŠ¤çœ¼å…¨æ™¯å±ï¼Œ4800ä¸‡å¤œæ‹å››æ‘„ã€4000mAhå¤§ç”µé‡ã€‚', 'https://dsfs.oppo.com/archives/201910/201910170310255da812b5a5dd2.png', 'https://dsfs.oppo.com/archives/201910/201910170310295da812b9bfad6.png', 'https://dsfs.oppo.com/archives/201910/201910170310335da812bd43bfe.png', 'https://dsfs.oppo.com/archives/201910/201910170310365da812c0b62a3.png', 'https://dsfs.oppo.com/archives/201910/_thumbnail/thumbnail_201910170310255da812b5a5dd2.png', 'https://dsfs.oppo.com/archives/201910/_thumbnail/thumbnail_201910170310295da812b9bfad6.png', 'https://dsfs.oppo.com/archives/201910/_thumbnail/thumbnail_201910170310335da812bd43bfe.png', 'https://dsfs.oppo.com/archives/201910/_thumbnail/thumbnail_201910170310365da812c0b62a3.png', '', '', '', '', '', ''),
('0007', 'R17 Pro 雾光渐变色', '手机', 6999, 120, 'è¶…çº§é—ªå……ï¼Œè¶…å¼ºå¤œæ‹ã€‚', 'https://dsfs.oppo.com/archives/201808/201808220608135b7d3559b4f3e.png', 'https://dsfs.oppo.com/archives/201808/201808220608185b7d355e16636.png', 'https://dsfs.oppo.com/archives/201808/201808220608225b7d3562147d3.png', 'https://dsfs.oppo.com/archives/201808/201808220608265b7d356667660.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808220608135b7d3559b4f3e.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808220608185b7d355e16636.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808220608225b7d3562147d3.png', 'https://dsfs.oppo.com/archives/201808/_thumbnail/thumbnail_201808220608265b7d356667660.png', '', '', '', '', '', ''),
('0008', '三脚架蓝牙自拍杆 雅致黑', '配件', 59, 1200, 'è“ç‰™5.1é¥æŽ§ã€360Â°æ‰‹æœºæ”¯æž¶ã€é˜²æŠ–åŠ¨ã€å®‰å“/è‹¹æžœé€šç”¨ã€‚', 'https://dsfs.oppo.com/archives/201906/201906110306365cff5e784705e.png', 'https://dsfs.oppo.com/archives/201906/201906110306275cff5e6fe156c.png', 'https://dsfs.oppo.com/archives/201906/201906110306405cff5e7c072a1.png', '', 'https://dsfs.oppo.com/archives/201906/_thumbnail/thumbnail_201906110306365cff5e784705e.png', 'https://dsfs.oppo.com/archives/201906/_thumbnail/thumbnail_201906110306275cff5e6fe156c.png', 'https://dsfs.oppo.com/archives/201906/_thumbnail/thumbnail_201906110306405cff5e7c072a1.png', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `loging`
--

CREATE TABLE IF NOT EXISTS `loging` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `name` varchar(30) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `pwd` int(30) NOT NULL COMMENT '用户密码',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci COMMENT='用户登录表' AUTO_INCREMENT=63 ;

--
-- 转存表中的数据 `loging`
--

INSERT INTO `loging` (`id`, `name`, `pwd`) VALUES
(62, '123456', 123456),
(61, '123456', 0);

-- --------------------------------------------------------

--
-- 表的结构 `shoppingcart`
--

CREATE TABLE IF NOT EXISTS `shoppingcart` (
  `vipName` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `goodsId` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- 转存表中的数据 `shoppingcart`
--


-- --------------------------------------------------------

--
-- 表的结构 `vip`
--

CREATE TABLE IF NOT EXISTS `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `sex` char(2) DEFAULT '女',
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `vip`
--

INSERT INTO `vip` (`username`, `userpass`, `sex`, `age`) VALUES
('123', '111111', '女', 21);
