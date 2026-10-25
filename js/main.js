// Portfolio scripts - Ahmed Ashraf
// 1) mobile menu  2) footer year  3) scroll progress  4) active nav link
// 5) typed API card  6) reveal on scroll  7) image viewer (lightbox)

// Users who prefer less motion get the final result without animations
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

// ---------- Translations ----------
// Every data-i18n key in index.html has a value here, one object per language
const translations = {
  en: {
    "meta.title": "Ahmed Ashraf | Full-Stack Developer",
    "meta.desc":
      "Portfolio of Ahmed Ashraf, a software engineer building full-stack web applications with React, Node.js and PostgreSQL.",
    "nav.toggle": "Toggle navigation",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "lang.switch": "Switch to Arabic",

    "hero.status": "Open to junior and full-stack opportunities",
    "hero.hello": "Hello, I'm",
    "hero.name": "Ahmed Ashraf",
    "hero.role": "Software Engineer",
    "hero.text":
      "I design and develop complete systems, from the database and REST API to a clean, responsive interface. My work focuses on React, Node.js and PostgreSQL, with real features like authentication, permissions and multi-language support.",
    "hero.cta1": "View my work",
    "hero.cta2": "Get in touch",
    "hero.cv": "Download CV",
    "hero.coreStack": "Core stack",
    "hero.photoAlt": "Portrait of Ahmed Ashraf",
    "hero.apiAria": "Sample API response about Ahmed",
    "stats.projects": "Full-stack projects",
    "stats.stack": "Main stack",
    "stats.rtl": "RTL and LTR support",

    "about.eyebrow": "About me",
    "about.title": "Turning requirements into working products",
    "about.p1":
      "I am a software engineer who enjoys building complete products from scratch. I am comfortable working across the whole stack: analyzing requirements, modeling the database, writing the API, building the interface people actually use, and deploying it to a production server.",
    "about.p2":
      "I care about the details that make an application feel finished: input validation, safe data handling, role-based access, and a layout that works in both Arabic and English.",
    "about.v1.title": "End-to-end ownership",
    "about.v1.text":
      "From database modeling and REST APIs to the interface and the production deployment, I take a feature through every layer.",
    "about.v2.title": "Secure by default",
    "about.v2.text":
      "Input validation, safe data handling and role-based access are part of the design, not something added at the end.",
    "about.v3.title": "Bilingual, responsive UI",
    "about.v3.text":
      "Interfaces that work in Arabic (RTL) and English (LTR), with dark mode and layouts that hold up on phones.",

    "skills.eyebrow": "Skills",
    "skills.title": "Technologies I work with",
    "skills.frontend": "Frontend",
    "skills.backend": "Backend",
    "skills.database": "Database",
    "skills.tools": "Tools",

    "proj.eyebrow": "Projects",
    "proj.title": "Selected work",
    "proj.source": "Source code",
    "case.summary": "Case study",
    "case.problem": "Problem",
    "case.solution": "Solution",
    "case.architecture": "Architecture",
    "case.challenges": "Challenges",
    "case.result": "Result",
    "case.viewDiagram": "View diagram",
    "case.viewCert": "View certificate",

    "inv.label": "Full-stack SaaS",
    "inv.title": "Inventory and Sales Management System",
    "inv.desc":
      "A multi-tenant system that lets a store manage products, suppliers, customers, purchase invoices and sales invoices. Stock updates automatically through database transactions, and invoices can be voided with the stock effect reversed.",
    "inv.f1": "Multi-tenant design, every record scoped to a store",
    "inv.f2": "Admin and employee roles with 8 configurable permissions",
    "inv.f3": "Dashboard with sales trend chart, reports and CSV export",
    "inv.f4": "Arabic (RTL) and English (LTR) with full dark mode",
    "inv.f5": "Printable invoices with store logo and details",
    "inv.problem":
      "A store needs one place to manage products, suppliers, customers and invoices, and the stock numbers must stay correct every time an invoice is created or cancelled.",
    "inv.solution":
      "A multi-tenant web app where every record belongs to a store. Purchase and sales invoices update the stock inside database transactions, and voiding an invoice reverses its stock effect.",
    "inv.arch":
      "The interface uses Tailwind CSS and shadcn/ui. The API authenticates users with JWT, and all data is scoped to the store of the logged-in user.",
    "inv.erd.caption":
      "Inventory system database: 11 tables and their relations",
    "inv.erd.alt":
      "Entity relationship diagram of the inventory system database showing 11 tables and the relations between them",
    "inv.erd.title": "Database diagram",
    "inv.erd.sub": "11 tables and their relations",
    "inv.c1":
      "Keeping the data of each store separate in a multi-tenant design.",
    "inv.c2":
      "Building admin and employee roles with 8 configurable permissions.",
    "inv.c3":
      "Keeping stock correct when invoices are created or voided, solved with database transactions.",
    "inv.result":
      "A complete system covering products, suppliers, customers, purchase and sales invoices, a dashboard with reports and CSV export, and printable invoices. The source code is available on GitHub.",
    "inv.g1.cap": "Dashboard with stats and sales trend",
    "inv.g2.cap": "Products management",
    "inv.g3.cap": "Suppliers management",
    "inv.g4.cap": "Customers management",
    "inv.g5.cap": "Sales invoices",
    "inv.g1.alt":
      "Inventory system dashboard with statistics and a sales trend chart",
    "inv.g2.alt": "Inventory system products page",
    "inv.g3.alt": "Inventory system suppliers page",
    "inv.g4.alt": "Inventory system customers page",
    "inv.g5.alt": "Inventory system sales invoices page",

    "alu.label": "Graduation project",
    "alu.title": "Capital University Alumni Portal",
    "alu.desc":
      "A bilingual portal that connects graduates of the university to share knowledge, find opportunities and stay in touch. It includes a public landing page, a graduate area and a full control panel for administrators. Deployed to a university server.",
    "alu.f1":
      "My role: backend developer and system analyst, plus selected frontend features",
    "alu.f2":
      "Backend architecture, REST APIs, authentication and role-based access control",
    "alu.f3":
      "Alumni verification, digital document requests and real-time features with Socket.IO",
    "alu.f4":
      "AI content moderation integration, API testing and performance testing",
    "alu.f5": "Full deployment and production setup on the university server",
    "alu.problem":
      "Graduates lose touch with their university after they graduate, and the university has no simple way to stay connected with them. The gap between the two keeps growing.",
    "alu.solution":
      "A bilingual portal that keeps graduates part of the university community: a public landing page, a graduate area to share knowledge and find opportunities, and a full control panel for administrators.",
    "alu.arch":
      "Socket.IO adds the real-time features, role-based access control separates the different types of users, and an AI integration moderates the content.",
    "alu.arch.caption":
      "Alumni Portal architecture: client, server, data and services",
    "alu.arch.alt":
      "Architecture diagram of the Alumni Portal showing the React client, the Express server and the data and services layer",
    "alu.arch.title": "Architecture diagram",
    "alu.arch.sub": "Client, server, data and services",
    "alu.c1": "Role-based access control for several types of users.",
    "alu.c2": "Real-time features with Socket.IO.",
    "alu.c3": "Integrating AI content moderation into the platform.",
    "alu.c4": "Deploying and configuring the system on the university server.",
    "alu.result":
      "A complete bilingual portal with a public landing page, a graduate area and an admin control panel, deployed to a university server. The source code is available on GitHub.",
    "alu.g1.cap": "Public landing page",
    "alu.g2.cap": "Communities management",
    "alu.g3.cap": "Roles and permissions",
    "alu.g4.cap": "Alumni profile",
    "alu.g5.cap": "Graduate area in dark mode",
    "alu.g1.alt": "Alumni portal landing page with the university campus",
    "alu.g2.alt": "Alumni portal control panel communities page",
    "alu.g3.alt": "Alumni portal roles and permissions matrix",
    "alu.g4.alt": "Alumni portal graduate profile dialog",
    "alu.g5.alt":
      "Alumni portal graduate area in dark mode with Arabic interface",

    "edu.eyebrow": "Education",
    "edu.title": "Education and training",
    "edu.iti.date": "Summer training, Jul - Aug 2026",
    "edu.iti.title": "Web Development Using .NET",
    "edu.iti.place": "Information Technology Institute (ITI)",
    "edu.iti.desc":
      "Intensive 144-hour program covering web development with ASP.NET Core MVC, built around weekly hands-on labs.",
    "edu.iti.cert.caption":
      "ITI certificate: Web Development using .NET (144 hrs.)",
    "edu.iti.cert.alt":
      "ITI certificate for the Web Development using .NET course, 144 hours",
    "edu.iti.cert.title": "ITI training certificate",
    "edu.iti.cert.sub": "144 hours, 07 Jul to 09 Aug 2026",
    "edu.hu.date": "Bachelor's degree, Class of 2026",
    "edu.hu.title": "Software Engineering",
    "edu.hu.place":
      "Faculty of Computers and Artificial Intelligence, Helwan University",
    "edu.hu.desc":
      "Software engineering degree with a focus on software design, databases and quality assurance.",
    "edu.hu.grade": "Grade: Excellent",
    "edu.hu.gpa": "GPA: 3.46",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's work together",
    "contact.text":
      "I am open to junior and full-stack developer opportunities. If you have a role or a project in mind, send me a message.",
    "contact.email": "Email",
    "contact.linkedinName": "Ahmed Ashraf",
    "footer.rights": "Ahmed Ashraf. All rights reserved.",
    "footer.top": "Back to top",

    "palette.open": "Quick search",
    "palette.dialog": "Quick navigation",
    "palette.placeholder": "Type to search...",
    "palette.inputLabel": "Search sections and links",
    "palette.hint": "Up and Down to move, Enter to open, Esc to close",
    "lightbox.close": "Close image",
    "lightbox.prev": "Previous image",
    "lightbox.next": "Next image",
  },

  ar: {
    "meta.title": "أحمد أشرف | مطوّر Full-Stack",
    "meta.desc":
      "الموقع الشخصي لأحمد أشرف، مهندس برمجيات يبني تطبيقات ويب متكاملة باستخدام React وNode.js وPostgreSQL.",
    "nav.toggle": "تبديل القائمة",
    "nav.about": "نبذة",
    "nav.skills": "المهارات",
    "nav.projects": "المشاريع",
    "nav.education": "التعليم",
    "nav.contact": "تواصل معي",
    "lang.switch": "التبديل إلى الإنجليزية",

    "hero.status": "متاح لفرص العمل كمطوّر مبتدئ أو Full-Stack\u200F",
    "hero.hello": "مرحبًا، أنا",
    "hero.name": "أحمد أشرف",
    "hero.role": "مهندس برمجيات",
    "hero.text":
      "أصمّم وأطوّر أنظمة متكاملة، بدءًا من قاعدة البيانات وواجهة REST API وصولًا إلى واجهة مستخدم نظيفة ومتجاوبة. يتركّز عملي على React، وNode.js، وPostgreSQL، مع ميزات حقيقية مثل المصادقة والصلاحيات ودعم تعدد اللغات.",
    "hero.cta1": "شاهد أعمالي",
    "hero.cta2": "تواصل معي",
    "hero.cv": "تحميل السيرة الذاتية",
    "hero.coreStack": "التقنيات الأساسية",
    "hero.photoAlt": "صورة شخصية لأحمد أشرف",
    "hero.apiAria": "مثال على استجابة API عن أحمد",
    "stats.projects": "مشروعان متكاملان",
    "stats.stack": "التقنيات الرئيسية",
    "stats.rtl": "دعم الاتجاهين من اليمين إلى اليسار ومن اليسار إلى اليمين",

    "about.eyebrow": "نبذة عني",
    "about.title": "أحوّل المتطلبات إلى منتجات تعمل فعليًا",
    "about.p1":
      "أنا مهندس برمجيات أستمتع ببناء منتجات متكاملة من الصفر. أعمل بارتياح على كامل مراحل التطوير: تحليل المتطلبات، وتصميم قاعدة البيانات، وكتابة واجهة API، وبناء الواجهة التي يستخدمها الناس، ثم نشرها على خادم الإنتاج.",
    "about.p2":
      "أهتم بالتفاصيل التي تجعل التطبيق يبدو مكتملًا: التحقق من المدخلات، والتعامل الآمن مع البيانات، والتحكم في الوصول حسب الأدوار، وتصميم يعمل بالعربية والإنجليزية.",
    "about.v1.title": "مسؤولية كاملة عن المنتج",
    "about.v1.text":
      "من تصميم قاعدة البيانات وواجهات REST API إلى الواجهة والنشر على الإنتاج، أنفّذ الميزة عبر جميع الطبقات.",
    "about.v2.title": "الأمان من البداية",
    "about.v2.text":
      "التحقق من المدخلات، والتعامل الآمن مع البيانات، والتحكم في الوصول حسب الأدوار جزء من التصميم، وليست أمورًا تُضاف في النهاية.",
    "about.v3.title": "واجهة ثنائية اللغة ومتجاوبة",
    "about.v3.text":
      "واجهات تعمل بالعربية (من اليمين إلى اليسار) والإنجليزية (من اليسار إلى اليمين)، مع الوضع الداكن وتصاميم تعمل جيدًا على الهواتف.",

    "skills.eyebrow": "المهارات",
    "skills.title": "التقنيات التي أعمل بها",
    "skills.frontend": "الواجهة الأمامية",
    "skills.backend": "الواجهة الخلفية",
    "skills.database": "قواعد البيانات",
    "skills.tools": "الأدوات",

    "proj.eyebrow": "المشاريع",
    "proj.title": "أعمال مختارة",
    "proj.source": "الكود المصدري",
    "case.summary": "دراسة حالة",
    "case.problem": "المشكلة",
    "case.solution": "الحل",
    "case.architecture": "البنية التقنية",
    "case.challenges": "التحديات",
    "case.result": "النتيجة",
    "case.viewDiagram": "عرض المخطط",
    "case.viewCert": "عرض الشهادة",

    "inv.label": "نظام SaaS متكامل",
    "inv.title": "نظام إدارة المخزون والمبيعات",
    "inv.desc":
      "نظام متعدد المتاجر يتيح للمتجر إدارة المنتجات والموردين والعملاء وفواتير الشراء وفواتير البيع. يتحدّث المخزون تلقائيًا عبر معاملات قاعدة البيانات، ويمكن إلغاء الفواتير مع عكس أثرها على المخزون.",
    "inv.f1": "تصميم متعدد المتاجر، وكل سجل مرتبط بمتجر محدد",
    "inv.f2": "أدوار المدير والموظف مع 8 صلاحيات قابلة للتخصيص",
    "inv.f3": "لوحة تحكم برسم بياني لاتجاه المبيعات وتقارير وتصدير CSV",
    "inv.f4":
      "عربي (من اليمين إلى اليسار) وإنجليزي (من اليسار إلى اليمين) مع وضع داكن كامل",
    "inv.f5": "فواتير قابلة للطباعة بشعار المتجر وبياناته",
    "inv.problem":
      "يحتاج المتجر إلى مكان واحد لإدارة المنتجات والموردين والعملاء والفواتير، ويجب أن تبقى أرقام المخزون صحيحة عند إنشاء أي فاتورة أو إلغائها.",
    "inv.solution":
      "تطبيق ويب متعدد المتاجر، وكل سجل فيه ينتمي إلى متجر. تحدّث فواتير الشراء والبيع المخزون داخل معاملات قاعدة البيانات، وإلغاء الفاتورة يعكس أثرها على المخزون.",
    "inv.arch":
      "تُبنى الواجهة باستخدام Tailwind CSS، ثم shadcn/ui. وتصادق واجهة API على المستخدمين باستخدام JWT، وترتبط جميع البيانات بمتجر المستخدم المسجّل دخوله.",
    "inv.erd.caption": "قاعدة بيانات نظام المخزون: 11 جدولًا وعلاقاتها",
    "inv.erd.alt":
      "مخطط علاقات الكيانات لقاعدة بيانات نظام المخزون، ويوضح 11 جدولًا والعلاقات بينها",
    "inv.erd.title": "مخطط قاعدة البيانات",
    "inv.erd.sub": "11 جدولًا وعلاقاتها",
    "inv.c1": "فصل بيانات كل متجر عن الآخر في تصميم متعدد المتاجر.",
    "inv.c2": "بناء أدوار المدير والموظف مع 8 صلاحيات قابلة للتخصيص.",
    "inv.c3":
      "الحفاظ على صحة المخزون عند إنشاء الفواتير أو إلغائها، وتم حل ذلك باستخدام معاملات قاعدة البيانات.",
    "inv.result":
      "نظام متكامل يشمل المنتجات والموردين والعملاء وفواتير الشراء والبيع، ولوحة تحكم بالتقارير وتصدير CSV، وفواتير قابلة للطباعة. الكود المصدري متاح على GitHub.",
    "inv.g1.cap": "لوحة التحكم مع الإحصائيات واتجاه المبيعات",
    "inv.g2.cap": "إدارة المنتجات",
    "inv.g3.cap": "إدارة الموردين",
    "inv.g4.cap": "إدارة العملاء",
    "inv.g5.cap": "فواتير البيع",
    "inv.g1.alt":
      "لوحة تحكم نظام المخزون مع الإحصائيات ورسم بياني لاتجاه المبيعات",
    "inv.g2.alt": "صفحة المنتجات في نظام المخزون",
    "inv.g3.alt": "صفحة الموردين في نظام المخزون",
    "inv.g4.alt": "صفحة العملاء في نظام المخزون",
    "inv.g5.alt": "صفحة فواتير البيع في نظام المخزون",

    "alu.label": "مشروع التخرج",
    "alu.title": "بوابة خريجي جامعة العاصمة",
    "alu.desc":
      "بوابة ثنائية اللغة تربط خريجي الجامعة ليتبادلوا المعرفة ويجدوا الفرص ويبقوا على تواصل. تتضمن صفحة رئيسية عامة ومنطقة للخريجين ولوحة تحكم كاملة للمسؤولين. تم نشرها على خادم الجامعة.",
    "alu.f1":
      "دوري: مطوّر Backend ومحلل نظم، إضافةً إلى بعض ميزات الواجهة الأمامية",
    "alu.f2":
      "بنية الـ Backend وواجهات REST API والمصادقة والتحكم في الوصول حسب الأدوار",
    "alu.f3":
      "التحقق من الخريجين وطلبات الوثائق الرقمية وميزات الوقت الفعلي باستخدام Socket.IO",
    "alu.f4":
      "دمج الإشراف على المحتوى بالذكاء الاصطناعي، واختبار واجهات API واختبار الأداء",
    "alu.f5": "النشر الكامل وإعداد بيئة الإنتاج على خادم الجامعة",
    "alu.problem":
      "يفقد الخريجون صلتهم بجامعتهم بعد التخرج، وليس لدى الجامعة وسيلة بسيطة للبقاء على تواصل معهم. وتستمر الفجوة بينهما في الاتساع.",
    "alu.solution":
      "بوابة ثنائية اللغة تُبقي الخريجين جزءًا من المجتمع الجامعي: صفحة رئيسية عامة، ومنطقة للخريجين لتبادل المعرفة وإيجاد الفرص، ولوحة تحكم كاملة للمسؤولين.",
    "alu.arch":
      "تضيف Socket.IO ميزات الوقت الفعلي، ويفصل التحكم في الوصول حسب الأدوار بين أنواع المستخدمين المختلفة، ويتولى تكامل الذكاء الاصطناعي الإشراف على المحتوى.",
    "alu.arch.caption":
      "بنية بوابة الخريجين: العميل والخادم والبيانات والخدمات",
    "alu.arch.alt":
      "مخطط البنية التقنية لبوابة الخريجين، ويوضح عميل React وخادم Express وطبقة البيانات والخدمات",
    "alu.arch.title": "مخطط البنية التقنية",
    "alu.arch.sub": "العميل والخادم والبيانات والخدمات",
    "alu.c1": "التحكم في الوصول حسب الأدوار لعدة أنواع من المستخدمين.",
    "alu.c2": "ميزات الوقت الفعلي باستخدام Socket.IO.",
    "alu.c3": "دمج الإشراف على المحتوى بالذكاء الاصطناعي في المنصة.",
    "alu.c4": "نشر النظام وإعداده على خادم الجامعة.",
    "alu.result":
      "بوابة ثنائية اللغة متكاملة تضم صفحة رئيسية عامة ومنطقة للخريجين ولوحة تحكم للمسؤولين، تم نشرها على خادم الجامعة. الكود المصدري متاح على GitHub.",
    "alu.g1.cap": "الصفحة الرئيسية العامة",
    "alu.g2.cap": "إدارة المجتمعات",
    "alu.g3.cap": "الأدوار والصلاحيات",
    "alu.g4.cap": "الملف الشخصي للخريج",
    "alu.g5.cap": "منطقة الخريجين في الوضع الداكن",
    "alu.g1.alt": "الصفحة الرئيسية لبوابة الخريجين مع صورة للحرم الجامعي",
    "alu.g2.alt": "صفحة المجتمعات في لوحة تحكم بوابة الخريجين",
    "alu.g3.alt": "مصفوفة الأدوار والصلاحيات في بوابة الخريجين",
    "alu.g4.alt": "نافذة الملف الشخصي للخريج في البوابة",
    "alu.g5.alt": "منطقة الخريجين في البوابة بالوضع الداكن وبالواجهة العربية",

    "edu.eyebrow": "التعليم",
    "edu.title": "التعليم والتدريب",
    "edu.iti.date": "تدريب صيفي، يوليو - أغسطس 2026",
    "edu.iti.title": "تطوير الويب باستخدام .NET",
    "edu.iti.place": "معهد تكنولوجيا المعلومات (ITI)",
    "edu.iti.desc":
      "برنامج مكثّف مدته 144 ساعة يغطي تطوير الويب باستخدام ASP.NET Core MVC، ويعتمد على معامل تطبيقية أسبوعية.",
    "edu.iti.cert.caption": "شهادة ITI: تطوير الويب باستخدام .NET (144 ساعة)",
    "edu.iti.cert.alt": "شهادة ITI لدورة تطوير الويب باستخدام .NET، 144 ساعة",
    "edu.iti.cert.title": "شهادة التدريب من ITI",
    "edu.iti.cert.sub": "144 ساعة، من 7 يوليو إلى 9 أغسطس 2026",
    "edu.hu.date": "درجة البكالوريوس، دفعة 2026",
    "edu.hu.title": "هندسة البرمجيات",
    "edu.hu.place": "كلية الحاسبات والذكاء الاصطناعي، جامعة حلوان",
    "edu.hu.desc":
      "درجة في هندسة البرمجيات مع تركيز على تصميم البرمجيات وقواعد البيانات وضمان الجودة.",
    "edu.hu.grade": "التقدير: ممتاز",
    "edu.hu.gpa": "المعدل التراكمي: 3.46",

    "contact.eyebrow": "التواصل",
    "contact.title": "لنعمل معًا",
    "contact.text":
      "أنا متاح لفرص المطوّر المبتدئ والـ Full-Stack. إذا كانت لديك وظيفة أو مشروع في ذهنك، فأرسل لي رسالة.",
    "contact.email": "البريد الإلكتروني",
    "contact.linkedinName": "أحمد أشرف",
    "footer.rights": "أحمد أشرف. جميع الحقوق محفوظة.",
    "footer.top": "العودة للأعلى",

    "palette.open": "بحث سريع",
    "palette.dialog": "التنقل السريع",
    "palette.placeholder": "اكتب للبحث...",
    "palette.inputLabel": "ابحث في الأقسام والروابط",
    "palette.hint":
      "الأسهم للتنقل\u200F، Enter\u200F للفتح\u200F، Esc\u200F للإغلاق",
    "lightbox.close": "إغلاق الصورة",
    "lightbox.prev": "الصورة السابقة",
    "lightbox.next": "الصورة التالية",
  },
};

// ---------- Language switch ----------
let currentLang = "en";

// Reads a saved choice, and falls back to null if storage is blocked
function readSavedLang() {
  try {
    return localStorage.getItem("lang");
  } catch (error) {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem("lang", lang);
  } catch (error) {
    // Storage can be blocked, the page still works without saving
  }
}

// Replaces the text and attributes of every marked element
function applyLang(lang) {
  const dict = translations[lang];
  if (!dict) {
    return;
  }
  currentLang = lang;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Format: "attr:key;attr2:key2"
  document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
    el.getAttribute("data-i18n-attr")
      .split(";")
      .forEach(function (pair) {
        const parts = pair.split(":");
        const attr = parts[0].trim();
        const key = parts[1] ? parts[1].trim() : "";
        if (attr && dict[key] !== undefined) {
          el.setAttribute(attr, dict[key]);
        }
      });
  });

  // The button shows the language you can switch to
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = lang === "ar" ? "EN" : "AR";
  }
}

// Switch button: toggles between English and Arabic and saves the choice
const langToggle = document.getElementById("langToggle");

langToggle.addEventListener("click", function () {
  const next = currentLang === "ar" ? "en" : "ar";
  applyLang(next);
  saveLang(next);
});

// On load: use the saved language, English is the default
const savedLang = readSavedLang();
if (savedLang === "ar") {
  applyLang("ar");
}

// ---------- Mobile menu ----------
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close the menu after the user taps a link
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", closeMenu);
});

// ---------- Footer year ----------
document.getElementById("year").textContent = new Date().getFullYear();

// ---------- Scroll progress bar ----------
const progressBar = document.getElementById("scrollProgress");
let progressTicking = false;

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
  progressBar.style.setProperty("--progress", ratio.toFixed(4));
  progressTicking = false;
}

// requestAnimationFrame keeps the scroll handler light
window.addEventListener(
  "scroll",
  function () {
    if (!progressTicking) {
      progressTicking = true;
      window.requestAnimationFrame(updateProgress);
    }
  },
  { passive: true },
);
updateProgress();

// ---------- Active nav link ----------
const sectionLinks = {};
navLinks.querySelectorAll("a").forEach(function (link) {
  sectionLinks[link.getAttribute("href").slice(1)] = link;
});

function setActiveLink(id) {
  Object.keys(sectionLinks).forEach(function (key) {
    sectionLinks[key].classList.toggle("active", key === id);
  });
}

if ("IntersectionObserver" in window) {
  // A section counts as current when it crosses the middle of the screen
  const sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  Object.keys(sectionLinks).forEach(function (id) {
    const section = document.getElementById(id);
    if (section) {
      sectionObserver.observe(section);
    }
  });
}

// Nothing is highlighted while the hero is on screen
window.addEventListener(
  "scroll",
  function () {
    if (window.scrollY < 200) {
      setActiveLink("");
    }
  },
  { passive: true },
);

// ---------- Typed API card ----------
const apiBody = document.getElementById("apiBody");

// Escape characters that HTML would treat as markup
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Wrap keys, strings, numbers and booleans in colored spans
function highlightJson(text) {
  const pattern = /("(?:[^"\\]|\\.)*")(\s*:)?|\b(true|false)\b|\b(\d+)\b/g;

  return escapeHtml(text).replace(
    pattern,
    function (match, str, colon, bool, num) {
      if (str) {
        // A string followed by a colon is a key, otherwise it is a value
        return colon
          ? '<span class="j-key">' + str + "</span>" + colon
          : '<span class="j-str">' + str + "</span>";
      }
      if (bool) {
        return '<span class="j-bool">' + bool + "</span>";
      }
      return '<span class="j-num">' + num + "</span>";
    },
  );
}

function startTyping() {
  const fullText = apiBody.textContent;
  let position = 0;

  function typeNext() {
    position += 1;
    const typed = fullText.slice(0, position);
    apiBody.innerHTML = highlightJson(typed) + '<span class="caret"></span>';

    if (position < fullText.length) {
      window.setTimeout(typeNext, 22);
    }
  }

  apiBody.innerHTML = '<span class="caret"></span>';
  window.setTimeout(typeNext, 400);
}

if (apiBody) {
  if (reduceMotion || !("IntersectionObserver" in window)) {
    // Show the finished, colored JSON right away
    apiBody.innerHTML = highlightJson(apiBody.textContent);
  } else {
    // Start typing once the card is actually visible on screen
    const typeObserver = new IntersectionObserver(
      function (entries, observer) {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          startTyping();
        }
      },
      { threshold: 0.4 },
    );
    typeObserver.observe(apiBody);
  }
}

// ---------- Reveal on scroll ----------
// The animation itself lives in style.css (.reveal and .visible)
const revealTargets = document.querySelectorAll(
  ".section .eyebrow, .section h2, .about-text, .value-card, .skill-card, .project, .timeline-item, .contact-box",
);

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealTargets.forEach(function (el) {
    el.classList.add("visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealTargets.forEach(function (el, index) {
    el.classList.add("reveal");
    // Small delay between neighbours so cards appear one after another
    el.style.transitionDelay = (index % 4) * 70 + "ms";
    revealObserver.observe(el);
  });
}

// ---------- Lightbox ----------
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const closeBtn = document.getElementById("lightboxClose");
const prevBtn = document.getElementById("lightboxPrev");
const nextBtn = document.getElementById("lightboxNext");

// The images of the gallery that is currently open, and the current position
let currentShots = [];
let currentIndex = 0;

// The element that opened the viewer, so the focus can go back to it on close
let lastFocused = null;

function showImage(index) {
  // Wrap around so next on the last image goes back to the first one
  currentIndex = (index + currentShots.length) % currentShots.length;

  const shot = currentShots[currentIndex];
  const thumb = shot.querySelector("img");

  lightboxImg.src = shot.dataset.full;
  lightboxImg.alt = thumb ? thumb.alt : "";
  lightboxCaption.textContent = shot.dataset.caption || "";
}

// Tap on the image to zoom in or out, so small text in diagrams can be read
function toggleZoom() {
  lightbox.classList.toggle("zoomed");
}

function openLightbox(shots, index) {
  currentShots = shots;
  lastFocused = document.activeElement;
  showImage(index);

  // Arrows are only useful when the gallery has more than one image
  const hasMany = shots.length > 1;
  prevBtn.style.display = hasMany ? "" : "none";
  nextBtn.style.display = hasMany ? "" : "none";

  lightbox.classList.remove("zoomed");
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  // Move the focus out first, so aria-hidden never covers a focused element
  if (lastFocused) {
    lastFocused.focus();
  }
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  lightboxImg.src = "";
}

// Every gallery only navigates between its own images
document.querySelectorAll("[data-gallery]").forEach(function (gallery) {
  const shots = Array.from(gallery.querySelectorAll(".shot"));

  shots.forEach(function (shot, index) {
    shot.addEventListener("click", function () {
      openLightbox(shots, index);
    });
  });
});

lightboxImg.addEventListener("click", toggleZoom);
closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", function () {
  showImage(currentIndex - 1);
});
nextBtn.addEventListener("click", function () {
  showImage(currentIndex + 1);
});

// Click on the dark background closes the viewer
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// ---------- Quick search palette (Ctrl + K) ----------
const palette = document.getElementById("palette");
const paletteInput = document.getElementById("paletteInput");
const paletteList = document.getElementById("paletteList");
const paletteOpenBtn = document.getElementById("paletteOpen");

// Each entry has a label, a small group name, and either a selector to scroll to or a link
const paletteItems = [
  { label: "About", group: "Section", selector: "#about" },
  { label: "Skills", group: "Section", selector: "#skills" },
  { label: "Projects", group: "Section", selector: "#projects" },
  { label: "Education", group: "Section", selector: "#education" },
  { label: "Contact", group: "Section", selector: "#contact" },
  {
    label: "Inventory and Sales Management System",
    group: "Project",
    selector: ".project:not(.project-reverse)",
  },
  {
    label: "Capital University Alumni Portal",
    group: "Project",
    selector: ".project-reverse",
  },
  {
    label: "Source code: Inventory system",
    group: "Link",
    href: "https://github.com/Ahmed-ashraf1111/inventory-sales-management-system",
  },
  {
    label: "Source code: Alumni Portal",
    group: "Link",
    href: "https://github.com/Maloka-119/Alumni-Portal-project-GP",
  },
  {
    label: "GitHub profile",
    group: "Link",
    href: "https://github.com/Ahmed-ashraf1111",
  },
  {
    label: "LinkedIn profile",
    group: "Link",
    href: "https://www.linkedin.com/in/ahmed-ashraf-10002b2a5",
  },
  {
    label: "Send an email",
    group: "Link",
    href: "mailto:ahmed.ashraf.kandil2005@gmail.com",
  },
];

let paletteMatches = paletteItems;
let paletteIndex = 0;
let paletteLastFocus = null;

// Language item, added here so the array above stays untouched
paletteItems.push({
  label: "Switch language",
  group: "Action",
  action: "lang",
});

// Arabic text for the palette, keyed by the English label
const paletteArabic = {
  About: "نبذة",
  Skills: "المهارات",
  Projects: "المشاريع",
  Education: "التعليم",
  Contact: "تواصل معي",
  "Inventory and Sales Management System": "نظام إدارة المخزون والمبيعات",
  "Capital University Alumni Portal": "بوابة خريجي جامعة العاصمة",
  "Source code: Inventory system": "الكود المصدري: نظام المخزون",
  "Source code: Alumni Portal": "الكود المصدري: بوابة الخريجين",
  "GitHub profile": "ملف GitHub الشخصي",
  "LinkedIn profile": "ملف LinkedIn الشخصي",
  "Send an email": "إرسال بريد إلكتروني",
};

const paletteGroupsArabic = {
  Section: "قسم",
  Project: "مشروع",
  Link: "رابط",
  Action: "إجراء",
};

// Text shown in the list for the current language
function paletteLabel(item) {
  if (item.action === "lang") {
    return translations[currentLang]["lang.switch"];
  }
  if (currentLang === "ar" && paletteArabic[item.label]) {
    return paletteArabic[item.label];
  }
  return item.label;
}

function paletteGroup(item) {
  if (currentLang === "ar" && paletteGroupsArabic[item.group]) {
    return paletteGroupsArabic[item.group];
  }
  return item.group;
}

// Highlight the selected row, and keep it visible when moving with the arrow keys
function updateActive(scrollToRow) {
  const rows = paletteList.querySelectorAll(".palette-item");
  rows.forEach(function (row, i) {
    row.classList.toggle("active", i === paletteIndex);
  });
  if (scrollToRow && rows[paletteIndex]) {
    rows[paletteIndex].scrollIntoView({ block: "nearest" });
  }
}

function renderPalette() {
  paletteList.innerHTML = "";

  if (paletteMatches.length === 0) {
    const empty = document.createElement("li");
    empty.className = "palette-empty";
    empty.textContent = currentLang === "ar" ? "لا توجد نتائج" : "No results";
    paletteList.appendChild(empty);
    return;
  }

  paletteMatches.forEach(function (item, index) {
    const row = document.createElement("li");
    row.className = "palette-item";

    const label = document.createElement("span");
    label.textContent = paletteLabel(item);

    const group = document.createElement("small");
    group.textContent = paletteGroup(item);

    row.appendChild(label);
    row.appendChild(group);

    row.addEventListener("click", function () {
      runPaletteItem(item);
    });
    row.addEventListener("mousemove", function () {
      paletteIndex = index;
      updateActive(false);
    });

    paletteList.appendChild(row);
  });

  updateActive(false);
}

function filterPalette() {
  const query = paletteInput.value.trim().toLowerCase();

  paletteMatches = paletteItems.filter(function (item) {
    const text =
      paletteLabel(item) + " " + paletteGroup(item) + " " + item.label;
    return text.toLowerCase().includes(query);
  });

  paletteIndex = 0;
  renderPalette();
}

function openPalette() {
  paletteLastFocus = document.activeElement;
  palette.hidden = false;
  document.body.classList.add("no-scroll");
  paletteInput.value = "";
  filterPalette();
  paletteInput.focus();
}

function closePalette() {
  palette.hidden = true;
  document.body.classList.remove("no-scroll");

  // Give the focus back without making the page jump
  if (paletteLastFocus && paletteLastFocus.focus) {
    paletteLastFocus.focus({ preventScroll: true });
  }
}

function runPaletteItem(item) {
  closePalette();

  if (item.action === "lang") {
    const next = currentLang === "ar" ? "en" : "ar";
    applyLang(next);
    saveLang(next);
    return;
  }

  if (item.href) {
    if (item.href.indexOf("mailto:") === 0) {
      window.location.href = item.href;
    } else {
      window.open(item.href, "_blank", "noopener");
    }
    return;
  }

  const target = document.querySelector(item.selector);
  if (target) {
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  }
}

paletteInput.addEventListener("input", filterPalette);
paletteOpenBtn.addEventListener("click", openPalette);

// Click on the dark background closes the palette
palette.addEventListener("click", function (event) {
  if (event.target === palette) {
    closePalette();
  }
});

document.addEventListener("keydown", function (event) {
  const isShortcut =
    (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

  if (isShortcut) {
    event.preventDefault();
    // The image viewer has its own keys, so do nothing while it is open
    if (lightbox.classList.contains("open")) {
      return;
    }
    if (palette.hidden) {
      openPalette();
    } else {
      closePalette();
    }
    return;
  }

  if (palette.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closePalette();
  } else if (event.key === "ArrowDown") {
    event.preventDefault();
    if (paletteMatches.length > 0) {
      paletteIndex = (paletteIndex + 1) % paletteMatches.length;
      updateActive(true);
    }
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (paletteMatches.length > 0) {
      paletteIndex =
        (paletteIndex - 1 + paletteMatches.length) % paletteMatches.length;
      updateActive(true);
    }
  } else if (event.key === "Enter") {
    event.preventDefault();
    if (paletteMatches[paletteIndex]) {
      runPaletteItem(paletteMatches[paletteIndex]);
    }
  }
});

// Keyboard support
document.addEventListener("keydown", function (event) {
  if (!lightbox.classList.contains("open")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  } else if (event.key === "ArrowLeft") {
    showImage(currentIndex - 1);
  } else if (event.key === "ArrowRight") {
    showImage(currentIndex + 1);
  }
});
