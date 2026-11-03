// Candidate-app translations. Default language: Hindi. Keys are used via data-t="key" on static elements and t('key') in JS.
export const LANGS = { hi: 'हिंदी', mr: 'मराठी', en: 'English' };
export const DEFAULT_LANG = 'hi';
export const T = {
  hi: {
    // landing
    hero: 'आपके घर के पास नर्सिंग और केयर की नौकरियाँ', heroSub: '1 मिनट में रजिस्टर करें। हमारी टीम 24 घंटे में कॉल करेगी। नौकरियाँ WhatsApp पर मिलेंगी।',
    role1: 'केयरगिवर (Caregiver)', role1d: 'बुज़ुर्गों की देखभाल, ऑपरेशन के बाद, बिस्तर पर मरीज़', role2: 'नर्स (GNM / ANM / BSc)', role2d: 'होम ICU, इंजेक्शन, घाव की ड्रेसिंग', role3: 'फिज़ियोथेरेपिस्ट (Physio)', role3d: 'घर पर विज़िट, रिहैब, चलने-फिरने में मदद',
    register: '1 मिनट में रजिस्टर करें', login: 'पहले से रजिस्टर हैं? लॉग इन करें', footer: 'YORO Health की सेवा', staff: 'स्टाफ लॉगिन',
    // phone / pin
    phoneTitle: 'आपका मोबाइल नंबर', phoneSub: 'यही नंबर आपका लॉगिन है। कोई SMS/OTP नहीं — बस 4 अंकों का PIN चुनें।', phoneLbl: 'मोबाइल नंबर', phonePh: '10 अंकों का नंबर',
    pinEnter: 'अपना 4 अंकों का PIN डालें', pinForgot: 'PIN भूल गए? YORO को WhatsApp/कॉल करें', changeNo: 'नंबर बदलें', continueBtn: 'आगे बढ़ें', loginBtn: 'लॉग इन', terms: 'आगे बढ़ने पर आप Yoro Jobs की शर्तों और प्राइवेसी नीति से सहमत हैं।',
    welcomeBack: 'वापसी पर स्वागत', err10: '10 अंकों का मोबाइल नंबर डालें।', errPin: 'अपना 4 अंकों का PIN डालें।', errWrongPin: 'PIN गलत है। फिर से कोशिश करें या YORO को कॉल करके रीसेट करवाएँ।', errNet: 'कनेक्ट नहीं हो पाया। इंटरनेट जाँचें और फिर कोशिश करें।',
    // register
    step2: 'चरण 2 / 2', regTitle: 'बस 3 बातें', regSub: 'शुरू करने के लिए इतना ही चाहिए। बाकी सब वैकल्पिक है।', nameLbl: 'पूरा नाम (आधार के अनुसार)', namePh: 'आपका नाम', pinLbl: '4 अंकों का PIN चुनें (लॉगिन के लिए)', pinPh: 'PIN', pinAgain: 'फिर से',
    iAm: 'मैं हूँ', cityLbl: 'आपका शहर', areaLbl: 'आपका इलाका', useTyped: 'यही इलाका चुनें', areaLbl0: '', gps: '📍 मेरी लोकेशन लें', areaPh: 'अपना इलाका लिखें', registerBtn: 'रजिस्टर करें',
    errName: 'कृपया अपना नाम लिखें।', errPin4: '4 अंकों का PIN चुनें।', errPinMatch: 'दोनों PIN मेल नहीं खाते।', errRole: 'Caregiver, Nurse या Physio चुनें।', errArea: 'सूची से अपना इलाका चुनें या लोकेशन लें।', errReg: 'रजिस्टर नहीं हो पाया। इंटरनेट जाँचें और फिर कोशिश करें।',
    pinned: 'लोकेशन सेट:', pinnedGps: 'आपकी लोकेशन सेट हो गई, सबसे पास का इलाका:', wrongArea: 'गलत है? ऊपर अपना इलाका लिखें।', gpsFinding: 'लोकेशन ढूँढ रहे हैं…', gpsFail: 'लोकेशन नहीं मिली — इलाका लिखें', registered: 'रजिस्टर हो गया! हमारी टीम 24 घंटे में कॉल करेगी।',
    // home
    namaste: 'नमस्ते,', verified: 'YORO वेरिफाइड', notVerified: 'अभी वेरिफाइड नहीं', inVerification: 'वेरिफिकेशन चल रहा है', availTitle: 'काम के लिए उपलब्ध', availOn: 'रिक्रूटर आपको देख सकते हैं', availOff: 'जॉब अलर्ट से छिपे हुए',
    jobsNear: 'आपके पास की नौकरियाँ', within: 'के {r} km के अंदर', seeAll: 'सभी देखें ›', seeAllN: 'सभी {n} नौकरियाँ देखें', finding: 'आपके पास की नौकरियाँ ढूँढ रहे हैं…',
    noJobs: 'अभी {r} km के अंदर कोई {role} नौकरी नहीं है', noJobsSub: 'नई नौकरी आते ही हम WhatsApp करेंगे। प्रोफ़ाइल पूरी करें ताकि आप पहले चुने जाएँ।',
    completeProfile: 'अपनी प्रोफ़ाइल पूरी करें', completeBtn: 'प्रोफ़ाइल पूरी करें ›', nextPhoto: 'अगला: अपनी फोटो जोड़ें', nextId: 'अगला: वेरिफाइड होने के लिए आधार अपलोड करें', nextPrefs: 'अगला: शिफ्ट की पसंद बताएँ', nextExp: 'अगला: अपना अनुभव जोड़ें', nextPersonal: 'अगला: व्यक्तिगत जानकारी', profileDone: 'प्रोफ़ाइल पूरी 🎉',
    idReady: '🛡 आपका YORO ID कार्ड तैयार है', idShow: 'क्लाइंट के घर पर दिखाएँ', view: 'देखें',
    w1: 'वेरिफाइड बनें', w1d: 'आधार अपलोड करें → हम जाँचेंगे → परिवार आपको पहले देखेंगे।', w2: 'समय पर पैसा', w2d: 'काम शुरू करने से पहले पैसा तय। कोई कमीशन नहीं।', w3: 'घर के पास', w3d: 'आपके इलाके से दूरी के हिसाब से नौकरियाँ।', w4: 'असली इंसान', w4d: 'हर नौकरी से पहले हमारा रिक्रूटर आपको कॉल करेगा।',
    help: 'मदद चाहिए?', helpSub: 'WhatsApp +91 92725 71708 या ईमेल care@yorohealth.com', logout: 'लॉग आउट',
    // profile
    myProfile: 'मेरी प्रोफ़ाइल', profileSub: 'हर कार्ड पूरा करने पर नौकरी जल्दी मिलती है', yourPhoto: 'आपकी फोटो', photoSub: 'YORO ID कार्ड के लिए ज़रूरी। चेहरा साफ दिखे।', add: 'जोड़ें', change: 'बदलें',
    prefs: 'काम की पसंद', prefsSub: 'फुल/पार्ट-टाइम, दिन/रात, समय · +15%', exp: 'अनुभव और कौशल', expSub: 'साल, कौशल, पिछला अस्पताल · +15%', docs: 'दस्तावेज़', docsSub: 'आधार / PAN, सर्टिफिकेट · इससे आप वेरिफाइड बनते हैं', personal: 'व्यक्तिगत जानकारी', personalSub: 'लिंग, भाषाएँ, पता · +10%', account: 'खाता',
    // jobs
    jobsTitle: 'आपके पास की नौकरियाँ', fAll: 'सभी', fDay: 'दिन', fNight: 'रात', f5: '5 km के अंदर', noJobsList: 'अभी {r} km के अंदर कोई {role} नौकरी नहीं है। नई आते ही हम WhatsApp पर बताएँगे।',
    new: 'नई', kmAway: '{d} km दूर', starts: 'शुरू', perUnit: { shift: 'प्रति शिफ्ट', month: 'प्रति माह', visit: 'प्रति विज़िट', hour: 'प्रति घंटा' }, shiftWord: 'शिफ्ट', shifts: { Day: 'दिन', Night: 'रात', '24-hr': '24 घंटे', Visit: 'विज़िट' },
    kmFromYou: 'आपसे {d} km', addrLater: 'सही पता काम तय होने के बाद बताया जाएगा।', pay: 'पैसा', shift: 'शिफ्ट', duration: 'अवधि', startsOn: 'शुरू', about: 'मरीज़ के बारे में', skills: 'ज़रूरी कौशल', verifiedOnly: 'इस परिवार ने सिर्फ वेरिफाइड उम्मीदवार माँगे हैं। वेरिफाइड होने के लिए आधार अपलोड करें।',
    interested: 'मुझे यह काम चाहिए', youAre: 'आपकी स्थिति: {s}', noForm: 'कोई फॉर्म नहीं। हमारा रिक्रूटर कॉल करके पक्का करेगा।', interestSent: 'भेज दिया। रिक्रूटर आपको कॉल करेगा।',
    status: { interested: 'इच्छुक', shortlisted: 'शॉर्टलिस्ट', assigned: 'काम मिला', rejected: 'नहीं चुना गया', withdrawn: 'वापस लिया' },
    nav: { home: 'होम', jobs: 'नौकरियाँ', profile: 'प्रोफ़ाइल' },
    roles: { Caregiver: 'केयरगिवर', Nurse: 'नर्स', Physio: 'फिज़ियो' },
    genderOnly: { Female: 'सिर्फ महिला', Male: 'सिर्फ पुरुष' },
    installTitle: 'Yoro Jobs ऐप इंस्टॉल करें', installSub: 'होम स्क्रीन पर आइकन — एक टैप में खोलें', installBtn: 'इंस्टॉल', installed: 'ऐप इंस्टॉल हो गया! होम स्क्रीन पर Yoro Jobs आइकन देखें।', installMenu: 'Chrome में ⋮ मेनू दबाएँ → "होम स्क्रीन में जोड़ें" / "ऐप इंस्टॉल करें"', iosHint: 'Safari में नीचे Share (⬆️) बटन दबाएँ → "Add to Home Screen" चुनें।',
  },
  mr: {
    hero: 'तुमच्या घराजवळ नर्सिंग आणि केअरच्या नोकऱ्या', heroSub: '1 मिनिटात नोंदणी करा. आमची टीम 24 तासांत कॉल करेल. नोकऱ्या WhatsApp वर मिळतील.',
    role1: 'केअरगिव्हर (Caregiver)', role1d: 'वृद्धांची काळजी, ऑपरेशननंतर, अंथरुणावरचे रुग्ण', role2: 'नर्स (GNM / ANM / BSc)', role2d: 'होम ICU, इंजेक्शन, जखमेची ड्रेसिंग', role3: 'फिजिओथेरपिस्ट (Physio)', role3d: 'घरी भेट, रिहॅब, हालचालीत मदत',
    register: '1 मिनिटात नोंदणी करा', login: 'आधीच नोंदणी केली आहे? लॉग इन करा', footer: 'YORO Health ची सेवा', staff: 'स्टाफ लॉगिन',
    phoneTitle: 'तुमचा मोबाइल नंबर', phoneSub: 'हाच नंबर तुमचा लॉगिन आहे. SMS/OTP नाही — फक्त 4 अंकी PIN निवडा.', phoneLbl: 'मोबाइल नंबर', phonePh: '10 अंकी नंबर',
    pinEnter: 'तुमचा 4 अंकी PIN टाका', pinForgot: 'PIN विसरलात? YORO ला WhatsApp/कॉल करा', changeNo: 'नंबर बदला', continueBtn: 'पुढे जा', loginBtn: 'लॉग इन', terms: 'पुढे गेल्यास तुम्ही Yoro Jobs च्या अटी आणि गोपनीयता धोरणाशी सहमत आहात.',
    welcomeBack: 'पुन्हा स्वागत', err10: '10 अंकी मोबाइल नंबर टाका.', errPin: 'तुमचा 4 अंकी PIN टाका.', errWrongPin: 'PIN चुकीचा आहे. पुन्हा प्रयत्न करा किंवा YORO ला कॉल करून रीसेट करा.', errNet: 'कनेक्ट होऊ शकले नाही. इंटरनेट तपासा आणि पुन्हा प्रयत्न करा.',
    step2: 'पायरी 2 / 2', regTitle: 'फक्त 3 गोष्टी', regSub: 'सुरुवातीला एवढंच पुरे. बाकी सर्व ऐच्छिक.', nameLbl: 'पूर्ण नाव (आधारप्रमाणे)', namePh: 'तुमचे नाव', pinLbl: '4 अंकी PIN निवडा (लॉगिनसाठी)', pinPh: 'PIN', pinAgain: 'पुन्हा',
    iAm: 'मी आहे', cityLbl: 'तुमचे शहर', areaLbl: 'तुमचा भाग', useTyped: 'हाच भाग निवडा', areaLbl0: '', gps: '📍 माझे लोकेशन घ्या', areaPh: 'तुमचा भाग लिहा', registerBtn: 'नोंदणी करा',
    errName: 'कृपया तुमचे नाव लिहा.', errPin4: '4 अंकी PIN निवडा.', errPinMatch: 'दोन्ही PIN जुळत नाहीत.', errRole: 'Caregiver, Nurse किंवा Physio निवडा.', errArea: 'यादीतून तुमचा भाग निवडा किंवा लोकेशन घ्या.', errReg: 'नोंदणी होऊ शकली नाही. इंटरनेट तपासा आणि पुन्हा प्रयत्न करा.',
    pinned: 'लोकेशन सेट:', pinnedGps: 'तुमचे लोकेशन सेट झाले, जवळचा भाग:', wrongArea: 'चुकीचे? वर तुमचा भाग लिहा.', gpsFinding: 'लोकेशन शोधत आहे…', gpsFail: 'लोकेशन मिळाले नाही — भाग लिहा', registered: 'नोंदणी झाली! आमची टीम 24 तासांत कॉल करेल.',
    namaste: 'नमस्कार,', verified: 'YORO व्हेरिफाइड', notVerified: 'अजून व्हेरिफाइड नाही', inVerification: 'व्हेरिफिकेशन सुरू आहे', availTitle: 'कामासाठी उपलब्ध', availOn: 'रिक्रूटर तुम्हाला पाहू शकतात', availOff: 'जॉब अलर्टपासून लपवलेले',
    jobsNear: 'तुमच्या जवळच्या नोकऱ्या', within: 'पासून {r} km च्या आत', seeAll: 'सर्व पहा ›', seeAllN: 'सर्व {n} नोकऱ्या पहा', finding: 'जवळच्या नोकऱ्या शोधत आहे…',
    noJobs: 'सध्या {r} km च्या आत {role} नोकरी नाही', noJobsSub: 'नवीन नोकरी येताच आम्ही WhatsApp करू. प्रोफाइल पूर्ण करा म्हणजे तुम्हाला आधी निवडले जाईल.',
    completeProfile: 'तुमची प्रोफाइल पूर्ण करा', completeBtn: 'प्रोफाइल पूर्ण करा ›', nextPhoto: 'पुढे: तुमचा फोटो जोडा', nextId: 'पुढे: व्हेरिफाइड होण्यासाठी आधार अपलोड करा', nextPrefs: 'पुढे: शिफ्टची पसंती सांगा', nextExp: 'पुढे: तुमचा अनुभव जोडा', nextPersonal: 'पुढे: वैयक्तिक माहिती', profileDone: 'प्रोफाइल पूर्ण 🎉',
    idReady: '🛡 तुमचे YORO ID कार्ड तयार आहे', idShow: 'क्लायंटच्या घरी दाखवा', view: 'पहा',
    w1: 'व्हेरिफाइड व्हा', w1d: 'आधार अपलोड करा → आम्ही तपासू → कुटुंबे तुम्हाला आधी पाहतील.', w2: 'वेळेवर पैसे', w2d: 'काम सुरू करण्याआधी पैसे ठरलेले. कमिशन नाही.', w3: 'घराजवळ', w3d: 'तुमच्या भागापासूनच्या अंतरानुसार नोकऱ्या.', w4: 'खरा माणूस', w4d: 'प्रत्येक नोकरीआधी आमचा रिक्रूटर तुम्हाला कॉल करेल.',
    help: 'मदत हवी?', helpSub: 'WhatsApp +91 92725 71708 किंवा ईमेल care@yorohealth.com', logout: 'लॉग आउट',
    myProfile: 'माझी प्रोफाइल', profileSub: 'प्रत्येक कार्ड पूर्ण केल्यावर नोकरी लवकर मिळते', yourPhoto: 'तुमचा फोटो', photoSub: 'YORO ID कार्डसाठी आवश्यक. चेहरा स्पष्ट दिसावा.', add: 'जोडा', change: 'बदला',
    prefs: 'कामाची पसंती', prefsSub: 'फुल/पार्ट-टाइम, दिवस/रात्र, वेळ · +15%', exp: 'अनुभव आणि कौशल्ये', expSub: 'वर्षे, कौशल्ये, आधीचे हॉस्पिटल · +15%', docs: 'कागदपत्रे', docsSub: 'आधार / PAN, प्रमाणपत्र · यामुळे तुम्ही व्हेरिफाइड होता', personal: 'वैयक्तिक माहिती', personalSub: 'लिंग, भाषा, पत्ता · +10%', account: 'खाते',
    jobsTitle: 'तुमच्या जवळच्या नोकऱ्या', fAll: 'सर्व', fDay: 'दिवस', fNight: 'रात्र', f5: '5 km च्या आत', noJobsList: 'सध्या {r} km च्या आत {role} नोकरी नाही. नवीन येताच WhatsApp वर कळवू.',
    new: 'नवीन', kmAway: '{d} km दूर', starts: 'सुरू', perUnit: { shift: 'प्रति शिफ्ट', month: 'प्रति महिना', visit: 'प्रति भेट', hour: 'प्रति तास' }, shiftWord: 'शिफ्ट', shifts: { Day: 'दिवस', Night: 'रात्र', '24-hr': '24 तास', Visit: 'भेट' },
    kmFromYou: 'तुमच्यापासून {d} km', addrLater: 'नक्की पत्ता काम ठरल्यावर सांगितला जाईल.', pay: 'पैसे', shift: 'शिफ्ट', duration: 'कालावधी', startsOn: 'सुरू', about: 'रुग्णाबद्दल', skills: 'आवश्यक कौशल्ये', verifiedOnly: 'या कुटुंबाने फक्त व्हेरिफाइड उमेदवार मागितले आहेत. व्हेरिफाइड होण्यासाठी आधार अपलोड करा.',
    interested: 'मला हे काम हवे', youAre: 'तुमची स्थिती: {s}', noForm: 'फॉर्म नाही. आमचा रिक्रूटर कॉल करून नक्की करेल.', interestSent: 'पाठवले. रिक्रूटर तुम्हाला कॉल करेल.',
    status: { interested: 'इच्छुक', shortlisted: 'शॉर्टलिस्ट', assigned: 'काम मिळाले', rejected: 'निवड झाली नाही', withdrawn: 'मागे घेतले' },
    nav: { home: 'होम', jobs: 'नोकऱ्या', profile: 'प्रोफाइल' },
    roles: { Caregiver: 'केअरगिव्हर', Nurse: 'नर्स', Physio: 'फिजिओ' },
    genderOnly: { Female: 'फक्त महिला', Male: 'फक्त पुरुष' },
    installTitle: 'Yoro Jobs ॲप इन्स्टॉल करा', installSub: 'होम स्क्रीनवर आयकॉन — एका टॅपमध्ये उघडा', installBtn: 'इन्स्टॉल', installed: 'ॲप इन्स्टॉल झाले! होम स्क्रीनवर Yoro Jobs आयकॉन पहा.', installMenu: 'Chrome मध्ये ⋮ मेनू दाबा → "होम स्क्रीनवर जोडा" / "ॲप इन्स्टॉल करा"', iosHint: 'Safari मध्ये खाली Share (⬆️) बटण दाबा → "Add to Home Screen" निवडा.',
  },
  en: {
    hero: 'Nursing & care jobs near your home', heroSub: 'Register in 1 minute. Our team calls you within 24 hours. Jobs come to you on WhatsApp.',
    role1: 'Caregiver', role1d: 'Elder care, post-op, bedridden patients', role2: 'Nurse (GNM / ANM / BSc)', role2d: 'Home ICU, injections, wound care', role3: 'Physiotherapist', role3d: 'Home visits, rehab, mobility',
    register: 'Register in 1 minute', login: 'Already registered? Log in', footer: 'A YORO Health service', staff: 'Staff login',
    phoneTitle: 'Your mobile number', phoneSub: 'This number is your login. No SMS, no OTP — just a 4-digit PIN you choose.', phoneLbl: 'Mobile number', phonePh: '10-digit number',
    pinEnter: 'Enter your 4-digit PIN', pinForgot: 'Forgot your PIN? WhatsApp or call YORO on', changeNo: 'Change number', continueBtn: 'Continue', loginBtn: 'Log in', terms: 'By continuing you agree to the Yoro Jobs terms and privacy policy.',
    welcomeBack: 'Welcome back', err10: 'Enter a 10-digit mobile number.', errPin: 'Enter your 4-digit PIN.', errWrongPin: 'Wrong PIN. Try again, or call YORO to reset it.', errNet: 'Could not connect. Check your internet and try again.',
    step2: 'Step 2 of 2', regTitle: 'Just 3 things', regSub: "That's all we need to start. Everything else is optional.", nameLbl: 'Full name (as on Aadhaar)', namePh: 'Your name', pinLbl: 'Choose a 4-digit PIN (you will use it to log in)', pinPh: 'PIN', pinAgain: 'Again',
    iAm: 'I am a', cityLbl: 'Your city', areaLbl: 'Your area', useTyped: 'Use this area', areaLbl0: '', gps: '📍 Use my current location', areaPh: 'Type your area', registerBtn: 'Register',
    errName: 'Please enter your name.', errPin4: 'Choose a 4-digit PIN.', errPinMatch: 'The two PINs do not match.', errRole: 'Please choose Caregiver, Nurse or Physio.', errArea: 'Please pick your area from the list or use your location.', errReg: 'Could not register. Check your internet and try again.',
    pinned: 'Pinned:', pinnedGps: 'Pinned at your location, nearest area:', wrongArea: 'Wrong? Type your area above.', gpsFinding: 'Finding you…', gpsFail: 'Could not get location — type your area', registered: 'Registered! Our team will call you within 24 h.',
    namaste: 'Namaste,', verified: 'YORO Verified', notVerified: 'not yet verified', inVerification: 'verification in progress', availTitle: 'Available for work', availOn: 'Recruiters can see you', availOff: 'Hidden from job alerts',
    jobsNear: 'Jobs near you', within: 'Within {r} km of', seeAll: 'See all ›', seeAllN: 'See all {n} jobs', finding: 'Finding jobs near you…',
    noJobs: 'No {role} jobs within {r} km right now', noJobsSub: 'We will WhatsApp you the moment one is posted. Complete your profile so you are picked first.',
    completeProfile: 'Complete your profile', completeBtn: 'Complete profile ›', nextPhoto: 'Next: add your photo', nextId: 'Next: upload Aadhaar to get verified', nextPrefs: 'Next: tell us your shift preference', nextExp: 'Next: add your experience', nextPersonal: 'Next: personal details', profileDone: 'Profile complete 🎉',
    idReady: '🛡 Your YORO ID card is ready', idShow: "Show it at the client's home", view: 'View',
    w1: 'Get verified', w1d: 'Upload Aadhaar → we verify → families see you first.', w2: 'Paid on time', w2d: 'Pay is fixed before you start. No commission cut.', w3: 'Near your home', w3d: 'Jobs matched by distance from your area.', w4: 'A real person', w4d: 'Our recruiter calls you before every job.',
    help: 'Need help?', helpSub: 'WhatsApp +91 92725 71708 or email care@yorohealth.com', logout: 'Log out',
    myProfile: 'My profile', profileSub: 'Each card you complete gets you jobs faster', yourPhoto: 'Your photo', photoSub: 'Needed for your YORO ID card. Face clearly visible.', add: 'Add', change: 'Change',
    prefs: 'Work preference', prefsSub: 'Full/part-time, day/night, timings · +15%', exp: 'Experience & skills', expSub: 'Years, skills, previous employer · +15%', docs: 'Documents', docsSub: 'Aadhaar / PAN, certificate · gets you verified', personal: 'Personal details', personalSub: 'Gender, languages, address · +10%', account: 'Account',
    jobsTitle: 'Jobs near you', fAll: 'All', fDay: 'Day', fNight: 'Night', f5: 'Within 5 km', noJobsList: "No open {role} jobs within {r} km right now. We'll message you on WhatsApp when one comes up.",
    new: 'NEW', kmAway: '{d} km away', starts: 'Starts', perUnit: { shift: '/ shift', month: '/ month', visit: '/ visit', hour: '/ hour' }, shiftWord: 'shift', shifts: { Day: 'Day', Night: 'Night', '24-hr': '24-hr', Visit: 'Visit' },
    kmFromYou: '{d} km from you', addrLater: 'Exact address shared after you are assigned.', pay: 'PAY', shift: 'SHIFT', duration: 'DURATION', startsOn: 'STARTS', about: 'About the patient', skills: 'Skills needed', verifiedOnly: 'This family asked for verified candidates only. Upload your Aadhaar to get verified.',
    interested: "I'm interested", youAre: 'You are {s}', noForm: 'No form. Our recruiter calls you to confirm.', interestSent: 'Interest sent. Recruiter will call you.',
    status: { interested: 'interested', shortlisted: 'shortlisted', assigned: 'assigned', rejected: 'not selected', withdrawn: 'withdrawn' },
    nav: { home: 'Home', jobs: 'Jobs', profile: 'Profile' },
    roles: { Caregiver: 'Caregiver', Nurse: 'Nurse', Physio: 'Physio' },
    genderOnly: { Female: 'Female only', Male: 'Male only' },
    installTitle: 'Install the Yoro Jobs app', installSub: 'Icon on your home screen — open in one tap', installBtn: 'Install', installed: 'App installed! Look for the Yoro Jobs icon on your home screen.', installMenu: 'In Chrome, tap the ⋮ menu → "Add to Home screen" / "Install app"', iosHint: 'In Safari, tap the Share (⬆️) button at the bottom → "Add to Home Screen".',
  },
};
let lang = DEFAULT_LANG;
try { const saved = localStorage.getItem('yj-lang'); if (saved && T[saved]) lang = saved; } catch (e) { }
export const getLang = () => lang;
export function setLang(l) { if (!T[l]) return; lang = l; try { localStorage.setItem('yj-lang', l); } catch (e) { } document.documentElement.lang = l === 'en' ? 'en' : l === 'mr' ? 'mr' : 'hi'; applyStatic(); }
export function t(key, vars) { let v = key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), T[lang]); if (v === undefined) v = key.split('.').reduce((o, k) => (o == null ? undefined : o[k]), T.en); if (typeof v !== 'string') return v ?? key; return vars ? v.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '') : v; }
export function applyStatic() {
  document.documentElement.lang = lang === 'en' ? 'en' : lang === 'mr' ? 'mr' : 'hi';
  document.querySelectorAll('[data-t]').forEach((el) => { const v = t(el.dataset.t); if (typeof v === 'string') el.textContent = v; });
  document.querySelectorAll('[data-tp]').forEach((el) => { el.placeholder = t(el.dataset.tp); });
  document.querySelectorAll('[data-lang]').forEach((b) => b.classList.toggle('on', b.dataset.lang === lang));
}
