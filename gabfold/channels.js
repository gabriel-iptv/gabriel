const channels = {
    tv5: {
        name: 'TV5 (MPD)',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
        keyId: '2615129ef2c846a9bbd43a641c7303ef',
        key: '07c7f996b1734ea288641a68e1cfdc4d',
		type: 'mpd'
    },
	 HITS: {
        name: 'Hits',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
        keyId: 'dac605bc197e442c93f4f08595a95100',
        key: '975e27ffc1b7949721ee3ccb4b7fd3e5',
		type: 'mpd'
    },

	kapamilya: {
        name: 'kapamilya',
        url: 'http://143.44.136.110:6910/001/2/ch00000090990000001286/manifest.mpd?virtualDomain=001.live_hls.zte.com',
        keyId: '31363331363737343637333533323837',
        key: '71347339457958556439543650426e74',
		type: 'mpd'
    },

	disney: {
        name: 'disney',
        url: 'https://a77aivottepl-a.akamaihd.net/pdx-nitro/live/clients/dash/enc/zuf794yutz/out/v1/ca3534bfe4f148298b36719204d108e0/cenc.mpd',
        keyId: 'be9caaa813c5305e761c66ac63645901',
        key: '3d40f2990ec5362ca5be3a3c9bb8f8b4',
		type: 'mpd'
    },

	WarnerTV: {
        name: 'WarnerTV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd',
        keyId: '4503cf86bca3494ab95a77ed913619a0',
        key: 'afc9c8f627fb3fb255dee8e3b0fe1d71',
		type: 'mpd'
    },

	NBAPH: {
        name: 'NBAPH',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/pl_nba.mpd',
        keyId: 'f36eed9e95f140fabbc88a08abbeafff',
        key: '0125600d0eb13359c28bdab4a2ebe75a',
		type: 'mpd'
    },

	EUROSPORTS: {
        name: 'EUROSPORTS',
        url: 'https://atemeshield1-voe.sysln.id/live/eds/EUROSPORTHD/mpd/EUROSPORTHD.mpd',
        keyId: '47c03f29f04747d2a298c0ad63f3b2c1',
        key: '8b48b2cb2743b91d5f20cf2622067f3a',
		type: 'mpd'
    },

	tvmaria: {
        name: 'tvmaria',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/tvmaria_prd.mpd',
        keyId: 'fa3998b9a4de40659725ebc5151250d6',
        key: '998f1294b122bbf1a96c1ddc0cbb229f',
		type: 'mpd'
    },

	TVUP: {
        name: 'TVUP',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd',
        keyId: '83e813ccd4ca4837afd611037af02f63',
        key: 'a97c515dbcb5dcbc432bbd09d15afd41',
		type: 'mpd'
    },

	Cartoonito: {
        name: 'Cartoonito',
        url: 'https://atemecdnbalancer-voe.sysln.id/live/eds/CartoonitoHD/mpd/CartoonitoHD.mpd',
        keyId: '955574ee2b674f0fbbad818fb384c233',
        key: '51d2893619bdd062fb4c0cdaafefbf27',
		type: 'mpd'
    },

	nickelodeon: {
        name: 'Nickelodeon',
        url: 'https://linearjitp-playback.astro.com.my/dash-wv/linear/2511/default_primary.mpd',
        keyId: 'bd17afb5dc9648a39be79ee3634dd4b8',
        key: '3ecf305d54a7729299b93a3d69c02ea5',
		type: 'mpd'
    },

	moonbug: {
        name: 'moonbug',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_moonbug_kids_sd.mpd',
        keyId: '0bf00921bec94a65a124fba1ef52b1cd',
        key: '0f1488487cbe05e2badc3db53ae0f29f',
		type: 'mpd'
    },

	AXN: {
        name: 'AXN',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
        keyId: 'fd5d928f5d974ca4983f6e9295dfe410',
        key: '3aaa001ddc142fedbb9d5557be43792f',
		type: 'mpd'
    },

	GmaPinoyTV: {
        name: 'GmaPinoy',
        url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd',
        keyId: 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1',
        key: '47635b8e885e19f2ccbdff078c207058',
		type: 'mpd'

    },

	HitsMovies: {
        name: 'HitsMovies',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_hitsmovies.mpd',
        keyId: 'f56b57b32d7e4b2cb21748c0b56761a7',
        key: '3df06a89aa01b32655a77d93e09e266f',
		type: 'mpd'

    },

	TFC: {
        name: 'TFC',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-tfcasia-dash-abscbnono/7045bc3c-9492-42d4-974e-a3b217776e57/index.mpd',
        keyId: '9568cc84e1d944f38eac304517eab6fd',
        key: 'f12142af8f39b3bab79d3679d3665ebe',
		type: 'mpd'
    },

    Animax: {
        name: 'Animax',
        url: 'https://tglmp01.akamaized.net/out/v1/de55fad9216e4fe7ad8d2eed456ba1ec/manifest.mpd',
        keyId: 'edf1a715de9748638dd2fad75a419af2',
        key: '2f5a3199b26e9b693ae881af7ff864cf',
		type: 'mpd'

	
    },
	KapamilyaChannel: {
        name: 'Kapamilya',
        url: 'https://www.youtube.com/embed/EWHEyfzZtE0?autoplay=1&mute=0',
        type: 'youtube'

	},


	GMA: {
        name: 'gma',
        url: 'https://www.youtube.com/embed/Ds9QldvRuMg?autoplay=1&mute=0',
        type: 'youtube'

	},
	
    HBO: {
        name: 'HBO HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
        keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',
        key: '54c213b2b5f885f1e0290ee4131d425b',
		type: 'mpd'
    },
    bilyonaryoch: {
        name: 'Bilyonaryo',
        url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
        keyId: '227ffaf09bec4a889e0e0988704d52a2',
        key: 'b2d0dce5c486891997c1c92ddaca2cd2',
		type: 'mpd'
    },
    RPTV: {
        name: 'RPTV',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
        keyId: '1917f4caf2364e6d9b1507326a85ead6',
        key: 'a1340a251a5aa63a9b0ea5d9d7f67595',
		type: 'mpd'
    },
    truefmtv: {
        name: 'True FM TV',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
        keyId: '0559c95496d44fadb94105b9176c3579',
        key: '40d8bb2a46ffd03540e0c6210ece57ce',
		type: 'mpd'
    },
    pba_rush_hd: {
        name: 'PBA Rush',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82',
		type: 'mpd'
    },
    arirang: {
        name: 'Arirang',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
        keyId: '13815d0fa026441ea7662b0c9de00bcf',
        key: '2d99a55743677c3879a068dd9c92f824',
		type: 'mpd'
    },
    onenews_hd: {
        name: 'One News HD',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
        keyId: 'd39eb201ae494a0b98583df4d110e8dd',
        key: '6797066880d344422abd3f5eda41f45f',
		type: 'mpd'
    },
    oneph: {
        name: 'One PH',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
        keyId: '92834ab4a7e1499b90886c5d49220e46',
        key: 'a7108d9a6cfcc1b7939eb111daf09ab3',
		type: 'mpd'
    },
    onesports: {
        name: 'One Sports',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
        keyId: '53c3bf2eba574f639aa21f2d4409ff11',
        key: '3de28411cf08a64ea935b9578f6d0edd',
		type: 'mpd'
    },
    uaap_varsity: {
        name: 'UAAP Varsity',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
        keyId: '95588338ee37423e99358a6d431324b9',
        key: '6e0f50a12f36599a55073868f814e81e',
		type: 'mpd'
    },
    premiersports_hd: {
        name: 'Premier Sports',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
        keyId: 'fc19c98cb9504a0fb78b22fea0a4b814',
        key: 'ea683112a96d4ae6c32d4ea13923e8c7',
		type: 'mpd'
    },
    premier_tennishd: {
        name: 'Premier Tennis',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
        keyId: '59454adb530b4e0784eae62735f9d850',
        key: '61100d0b8c4dd13e4eb8b4851ba192cc',
		type: 'mpd'
    },
    pbo: {
        name: 'PBO',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
        keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',
        key: '31e752b441bd2972f2b98a4b1bc1c7a1',
		type: 'mpd'
    },
    viva: {
        name: 'VIVA',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
        keyId: '07aa813bf2c147748046edd930f7736e',
        key: '3bd6688b8b44e96201e753224adfc8fb',
     	type: 'mpd'
    },
    tapactionflix_hd: {
        name: 'Tap Action Flix',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        keyId: 'bee1066160c0424696d9bf99ca0645e3',
        key: 'f5b72bf3b89b9848de5616f37de040b7',
	    type: 'mpd'
    },
    thrill: {
       name: 'Thrill',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
        keyId: '928114ffb2394d14b5585258f70ed183',
        key: 'a82edc340bc73447bac16cdfed0a4c62',
		type: 'mpd'
    },
	hits_now: {
        name: 'Hits Now',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
        keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
        key: '92b0287c7042f271b266cc11ab7541f1',
		type: 'mpd'
    },
	hbo_family: {
        name: 'HBO Family',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
        keyId: '872910c843294319800d85f9a0940607',
        key: 'f79fd895b79c590708cf5e8b5c6263be',
		type: 'mpd'
    },
	cinemax: {
        name: 'Cinemax',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
        keyId: 'b207c44332844523a3a3b0469e5652d7',
        key: 'fe71aea346db08f8c6fbf0592209f955',
		type: 'mpd'
    },
	hbo_signature: {
        name: 'HBO Signature',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
        keyId: 'a06ca6c275744151895762e0346380f5',
        key: '559da1b63eec77b5a942018f14d3f56f',
		type: 'mpd'
    },
	hbo_hits: {
    name: 'HBO Hits',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
        keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',
        key: 'a8795f3bdb8a4778b7e888ee484cc7a1',
		type: 'mpd'
    },
	tvn_movies: {
    name: 'TVN Movies',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
        keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',
        key: '3471b2464b5c7b033a03bb8307d9fa35',
		type: 'mpd'
    },
	dreamworks_tag: {
    name: 'Dreamworks Tagalog',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
        keyId: '564b3b1c781043c19242c66e348699c5',
        key: 'd3ad27d7fe1f14fb1a2cd5688549fbab',
		type: 'mpd'
    },
	tvn_plus: {
    name: 'TVN',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        keyId: 'e1bde543e8a140b38d3f84ace746553e',
        key: 'b712c4ec307300043333a6899a402c10',
		type: 'mpd'
    },
	TapMovies: {
    name: 'Popup PPV HD',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd',
        keyId: '286e1c2d622c4c73b5c3d72e4a848abd',
        key: 'b7fad67599c1ce3c2fbc9d02b901be05',
		type: 'mpd'
    },
	MPTV: {
    name: 'MPTV',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
        keyId: '6aab8f40536f4ea98e7c97b8f3aa7d4e',
        key: '139aa5a55ade471faaddacc4f4de8807',
		type: 'mpd'
    },
	a2z: {
    name: 'A2Z',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
        keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
        key: 'c22f2162e176eee6273a5d0b68d19530',
		type: 'mpd'
    },
	dreamworks_hd: {
    name: 'Dreamworks HD',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        keyId: '4ab9645a2a0a47edbd65e8479c2b9669',
        key: '8cb209f1828431ce9b50b593d1f44079',
		type: 'mpd'
    },
	ptv4: {
    name: 'PTV4',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
        keyId: '71a130a851b9484bb47141c8966fb4a3',
        key: 'ad1f003b4f0b31b75ea4593844435600',
		type: 'mpd'
    },
	tap_edge: {
    name: 'TAP Edge',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd',
        keyId: '0f854034412b11edb8780242ac120002',
        key: 'af8ad1c5e3f2e1b751a4f64608f24275',
		type: 'mpd'
    },
	tap_sports: {
    name: 'TAP Sports',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',
        key: '0e7e35a07e2c12822316c0dc4873903f',
		type: 'mpd'
    },
	one_sports_plus_hd: {
    name: 'One Sports Plus HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        keyId: '322d06e9326f4753a7ec0908030c13d8',
        key: '1e3e0ca32d421fbfec86feced0efefda',
		type: 'mpd'
    },
	cctv4: {
    name: 'CCTV4',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        keyId: 'b83566836c0d4216b7107bd7b8399366',
        key: '32d50635bfd05fbf8189a0e3f6c8db09',
		type: 'mpd'
    },
	lifetime: {
    name: 'Lifetime',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
        keyId: 'cf861d26e7834166807c324d57df5119',
        key: '64a81e30f6e5b7547e3516bbf8c647d0',
		type: 'mpd'
    },
	hgtv_hd: {
    name: 'HGTV HD',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
        keyId: 'f0e3ab943318471abc8b47027f384f5a',
        key: '13802a79b19cc3485d2257165a7ef62a',
		type: 'mpd'
    },
	aljazeera: {
    name: 'Al Jazeera',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_aljazeera.mpd',
        keyId: '0f85362a412b11edb8780242ac120002',
        key: 'd643dfbbfca6dc64e7f58fd67ea4b7d5',
		type: 'mpd'
    },
	foodnetwork_hd: {
    name: 'Food Network HD',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        keyId: 'b7299ea0af8945479cd2f287ee7d530e',
        key: 'b8ae7679cf18e7261303313b18ba7a14',
		type: 'mpd'
    },
	history_hd: {
    name: 'History HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        keyId: 'a7724b7ca2604c33bb2e963a0319968a',
        key: '6f97e3e2eb2bade626e0281ec01d3675',
		type: 'mpd'
    },
	fashiontv_hd: {
    name: 'Fashion TV HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        keyId: '971ebbe2d887476398e97c37e0c5c591',
        key: '472aa631b1e671070a4bf198f43da0c7',
		type: 'mpd'
    },
	bloomberg: {
    name: 'Bloomberg',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
        keyId: 'ef7d9dcfb99b406cb79fb9f675cba426',
        key: 'b24094f6ca136af25600e44df5987af4',
		type: 'mpd'
    },

	lotus: {
    name: 'lotus',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd',
        keyId: '60dc692e64ea443a8fb5ac186c865a9b',
        key: '01bdbe22d59b2a4504b53adc2f606cc1',
		type: 'mpd'
    },
	depedchannel: {
    name: 'DepEd Channel',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
        keyId: '0f853706412b11edb8780242ac120002',
        key: '2157d6529d80a760f60a8b5350dbc4df',
		type: 'mpd'
    },
	sarisari: {
    name: 'SARISARI',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
        keyId: '0a7ab3612f434335aa6e895016d8cd2d',
        key: 'b21654621230ae21714a5cab52daeb9d',
		type: 'mpd'
    },
	buko: {
    name: 'BUKO',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
        keyId: 'd273c085f2ab4a248e7bfc375229007d',
        key: '7932354c3a84f7fc1b80efa6bcea0615',
		type: 'mpd'
    },
	KnowledgeChannel: {
    name: 'knowledge_channel',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
        keyId: '0f856fa0412b11edb8780242ac120002',
        key: '783374273ef97ad3bc992c1d63e091e7',
		type: 'mpd'
    },
	ibc13: {
    name: 'IBC13',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd',
        keyId: '04e292bc99bd4ccba89e778651914254',
        key: 'ff0a62bdf8920ce453fe680330b563a5',
		type: 'mpd'
    },
	channelnews_asia: {
    name: 'Channel News Asia',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
        keyId: 'b259df9987364dd3b778aa5d42cb9acd',
        key: '753e3dba96ab467e468269e7e33fb813',
		type: 'mpd'
    },
	cg_tagalogmovie: {
    name: 'TMC',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
        keyId: '96701d297d1241e492d41c397631d857',
        key: 'ca2931211c1a261f082a3a2c4fd9f91b',
		type: 'mpd'
    },
	SPOTV_HD: {
    name: 'SPOTV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
        key: '9c0e4191203fccb0fde34ee29999129e',
		type: 'mpd'
    },
	SPOTV_HD2: {
    name: 'SPOTV2',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        keyId: '7eea72d6075245a99ee3255603d58853',
        key: '6848ef60575579bf4d415db1032153ed',
		type: 'mpd'
    },
	animal_planet: {
    name: 'Animal Planet',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
        keyId: '436b69f987924fcbbc06d40a69c2799a',
        key: 'c63d5b0d7e52335b61aeba4f6537d54d',
		type: 'mpd'
    },
	abc_australia: {
    name: 'ABC Australia',
        url: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        keyId: '389497f9f8584a57b234e27e430e04b7',
        key: '3b85594c7f88604adf004e45c03511c0',
		type: 'mpd'
    },
	bbcearth_hd: {
    name: 'BBC Earth',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        keyId: '34ce95b60c424e169619816c5181aded',
        key: '0e2a2117d705613542618f58bf26fc8e',
		type: 'mpd'
    },
	bbcworld_news: {
    name: 'BBCWORLD News',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
        keyId: 'f59650be475e4c34a844d4e2062f71f3',
        key: '119639e849ddee96c4cec2f2b6b09b40',
		type: 'mpd'
    },
	travel_channel: {
    name: 'Travel Channel',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        keyId: 'f3047fc13d454dacb6db4207ee79d3d3',
        key: 'bdbd38748f51fc26932e96c9a2020839',
		type: 'mpd'
    },
	asianfoodnetwork: {
    name: 'Asian Food Network',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        keyId: '1619db30b9ed42019abb760a0a3b5e7f',
        key: '5921e47fb290ae263291b851c0b4b6e4',
		type: 'mpd'
    },
	taptv: {
    name: 'TAP TV',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        keyId: 'f6804251e90b4966889b7df94fdc621e',
        key: '55c3c014f2bd12d6bd62349658f24566',
		type: 'mpd'
    },
	crime_investigation: {
    name: 'Crime Investigation',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_crime_invest.mpd',
        keyId: '21e2843b561c4248b8ea487986a16d33',
        key: 'db6bb638ccdfc1ad1a3e98d728486801',
		type: 'mpd'
    },
	tech_storm: {
    name: 'Tech Storm',
        url: 'https://cdn08jtedge.indihometv.com/dassdvr/133/techstorm/manifest.mpd',
        keyId: '69646b755f3130303030303030303030',
        key: 'e4a2359b05563399f1d9adfce641724a',
		type: 'mpd'
    },
	kix_hd: {
    name: 'Kix HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd'
    },
	cartoon_net_hd: {
    name: 'Cartoon Network HD',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cartoonnetworkhd.mpd',
        keyId: 'a2d1f552ff9541558b3296b5a932136b',
        key: 'cdd48fa884dc0c3a3f85aeebca13d444',
		type: 'mpd'
    },
	nickjr: {
    name: 'Nickjr',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
        keyId: 'bab5c11178b646749fbae87962bf5113',
        key: '0ac679aad3b9d619ac39ad634ec76bc8',
		type: 'mpd'
    },
	nickelodeon: {
    name: 'Nickelodeon',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd'
    },
	blueant_extreme: {
    name: 'Rock Action',
        url: 'https://tglmp04.akamaized.net/out/v1/421a3cd3bdcd492f8f4b5efb2363ed2c/manifest.mpd',
        keyId: '2341c2ecd3cf4865881bb0fa1287de8f',
        key: 'ad45202e64f66ef36b3f60fac93cc47f',
		type: 'mpd'
    },
	rock_entertainment: {
    name: 'Rock Entertainment',
        url: 'https://tglmp02.akamaized.net/out/v1/621a7089e63144e4be7891cd9bfb10e2/manifest.mpd',
        keyId: '9229814c629b406f8de98d2f23c968a0',
        key: '40b9f250455b43b3b2ea6845ab81abca',
		type: 'mpd'
    },
	discovery: {
    name: 'Discovery',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_discovery.mpd',
        keyId: 'd9ac48f5131641a789328257e778ad3a',
        key: 'b6e67c37239901980c6e37e0607ceee6',
		type: 'mpd'
    },
	kix_hd: {
    name: 'Kix HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd'
    },
	kbs_world: {
    name: 'KBS World',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_kbsworld.mpd',
        keyId: '22ff2347107e4871aa423bea9c2bd363',
        key: 'c6e7ba2f48b3a3b8269e8bc360e60404',
		type: 'mpd'
    },
	anc: {
    name: 'ANC',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
        keyId: '4bbdc78024a54662854b412d01fafa16',
        key: '6039ec9b213aca913821677a28bd78ae',
		type: 'mpd'
    },
	teleradyo: {
    name: 'Teleradyo',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
        keyId: '47c093e0c9fd4f80839a0337da3dd876',
        key: '50547394045b3d047dc7d92f57b5fb33',
		type: 'mpd'
		 },
	cinemaone: {
        name: 'CinemaOne',
        url: 'https://cinemaone-abscbn-ono.amagi.tv/index.m3u8',
        type: 'hls'
         },	 
    cinemo: {
        name: 'CineMo!',
        url: 'https://cinemo-abscbn-ono.amagi.tv/playlist.m3u8',
        type: 'hls'
         },	 
	MYX: {
        name: 'MYX',
        url: 'https://myxnola-abscbn-ono.amagi.tv/index.m3u8',
        type: 'hls'
         },	
	Disney: {
        name: 'Disney',
        url: 'https://disney-channel.13l.link/live/Disney/index.m3u8',
        type: 'hls'
         },
	pbs: {
        name: 'pbs',
        url: 'https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/chunklist_b2000000.m3u8',
        type: 'hls'
         },
	
    };
