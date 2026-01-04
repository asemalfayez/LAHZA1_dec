export type Language = 'en' | 'ar';

export interface I18nDictionary {
  [key: string]: {
    en: string;
    ar: string;
  };
}

export const translations: I18nDictionary = {
  // Header
  "site.title": {
    en: "LAHZA Help Center",
    ar: "مركز مساعدة لحظة"
  },
  "site.subtitle": {
    en: "User Manual & Documentation",
    ar: "دليل المستخدم والتوثيق"
  },
  "language.toggle": {
    en: "العربية",
    ar: "English"
  },

  // Role Switcher
  "role.guest": {
    en: "Guest",
    ar: "زائر"
  },
  "role.user": {
    en: "User",
    ar: "مستخدم"
  },
  "role.owner": {
    en: "Farm Owner",
    ar: "مالك المزرعة"
  },
  "role.admin": {
    en: "Admin",
    ar: "مدير"
  },
  "role.select": {
    en: "Select your role",
    ar: "اختر دورك"
  },

  // Sidebar
  "sidebar.search": {
    en: "Search sections...",
    ar: "البحث في الأقسام..."
  },
  "sidebar.menu": {
    en: "Menu",
    ar: "القائمة"
  },

  // Common
  "common.screenshot": {
    en: "Screenshot: [Insert here]",
    ar: "لقطة شاشة: [أدخل هنا]"
  },
  "common.tbd": {
    en: "TBD (To Be Determined)",
    ar: "سيتم تحديده لاحقاً"
  },
  "common.future": {
    en: "🔮 Future Feature",
    ar: "🔮 ميزة مستقبلية"
  },
  "common.tip": {
    en: "💡 Tip",
    ar: "💡 نصيحة"
  },
  "common.note": {
    en: "📝 Note",
    ar: "📝 ملاحظة"
  },
  "common.steps": {
    en: "Steps",
    ar: "الخطوات"
  },

  // Guest Sections
  "guest.title": {
    en: "Guest Access (Before Login)",
    ar: "وصول الزائر (قبل تسجيل الدخول)"
  },
  "guest.intro": {
    en: "As a guest, you can explore LAHZA platform and browse available farms before creating an account. Here's what you can access:",
    ar: "كزائر، يمكنك استكشاف منصة لحظة وتصفح المزارع المتاحة قبل إنشاء حساب. إليك ما يمكنك الوصول إليه:"
  },

  // Guest - Home
  "guest.home.title": {
    en: "Home Page",
    ar: "الصفحة الرئيسية"
  },
  "guest.home.desc": {
    en: "The landing page welcomes you to LAHZA — Jordan's premier farm and chalet booking platform.",
    ar: "تستقبلك الصفحة الرئيسية في لحظة — المنصة الأولى لحجز المزارع والشاليهات في الأردن."
  },
  "guest.home.features": {
    en: "Features on Home Page",
    ar: "ميزات الصفحة الرئيسية"
  },
  "guest.home.hero": {
    en: "Hero banner with stunning farm imagery",
    ar: "شريط ترحيبي مع صور مزارع خلابة"
  },
  "guest.home.curated": {
    en: "Curated Picks — Handpicked farms for every taste",
    ar: "اختيارات مميزة — مزارع منتقاة لكل الأذواق"
  },
  "guest.home.safe": {
    en: "Safe & Simple Booking — Smooth interface",
    ar: "حجز آمن وسهل — واجهة سلسة"
  },
  "guest.home.nature": {
    en: "Enchanting Nature — Rural vibes that last",
    ar: "طبيعة ساحرة — أجواء ريفية لا تُنسى"
  },
  "guest.home.cta": {
    en: "\"Book Now\" button redirects to login page",
    ar: "زر \"احجز الآن\" يوجهك لصفحة تسجيل الدخول"
  },

  // Guest - Browse Farms
  "guest.browse.title": {
    en: "Browse Farms (Public)",
    ar: "تصفح المزارع (عام)"
  },
  "guest.browse.desc": {
    en: "View available farms and chalets across Jordan without logging in.",
    ar: "عرض المزارع والشاليهات المتاحة في الأردن بدون تسجيل الدخول."
  },
  "guest.browse.note": {
    en: "To complete a booking, you must log in or create an account.",
    ar: "لإتمام الحجز، يجب تسجيل الدخول أو إنشاء حساب."
  },

  // Guest - About
  "guest.about.title": {
    en: "About Us",
    ar: "من نحن"
  },
  "guest.about.desc": {
    en: "Learn about LAHZA's story, mission, and the team behind the platform.",
    ar: "تعرف على قصة لحظة، رسالتها، والفريق القائم على المنصة."
  },
  "guest.about.story": {
    en: "Our Story: Making Jordan's farms accessible to everyone",
    ar: "قصتنا: جعل مزارع الأردن متاحة للجميع"
  },
  "guest.about.achievements": {
    en: "Achievements: 50+ locations, 10,000+ happy customers, 4.8 rating, 3+ years experience",
    ar: "إنجازاتنا: 50+ موقع، 10,000+ عميل سعيد، تقييم 4.8، خبرة 3+ سنوات"
  },
  "guest.about.values": {
    en: "Values: Jordanian Hospitality, Trust & Safety, Excellence",
    ar: "قيمنا: الضيافة الأردنية، الثقة والأمان، التميز"
  },
  "guest.about.team": {
    en: "Team: Asem Al-Fayez (CEO), Abdulrahman Saqer (Operations)",
    ar: "الفريق: عاصم الفايز (المدير التنفيذي)، عبدالرحمن صقر (العمليات)"
  },

  // Guest - Contact
  "guest.contact.title": {
    en: "Contact Us",
    ar: "اتصل بنا"
  },
  "guest.contact.desc": {
    en: "Get in touch with LAHZA support team for any inquiries.",
    ar: "تواصل مع فريق دعم لحظة لأي استفسارات."
  },
  "guest.contact.phone": {
    en: "Phone: 0772387115",
    ar: "الهاتف: 0772387115"
  },
  "guest.contact.whatsapp": {
    en: "WhatsApp: Direct messaging available",
    ar: "واتساب: المراسلة المباشرة متاحة"
  },
  "guest.contact.email": {
    en: "Email: jrdanfarm.gmail.com",
    ar: "البريد الإلكتروني: jrdanfarm.gmail.com"
  },
  "guest.contact.address": {
    en: "Address: Amman, Jordan",
    ar: "العنوان: عمان، الأردن"
  },
  "guest.contact.hours": {
    en: "Working Hours: Sun-Thu 9AM-6PM, Fri-Sat 10AM-4PM",
    ar: "ساعات العمل: أحد-خميس 9ص-6م، جمعة-سبت 10ص-4م"
  },
  "guest.contact.form": {
    en: "Contact form available for: General Inquiry, Booking, Technical Support, Partnership, Complaint",
    ar: "نموذج الاتصال متاح لـ: استفسار عام، حجز، دعم تقني، شراكة، شكوى"
  },

  // Guest - FAQ
  "guest.faq.title": {
    en: "FAQ",
    ar: "الأسئلة الشائعة"
  },
  "guest.faq.desc": {
    en: "Find answers to frequently asked questions.",
    ar: "اعثر على إجابات للأسئلة المتكررة."
  },
  "guest.faq.booking": {
    en: "Booking & Payment (4 questions)",
    ar: "الحجز والدفع (4 أسئلة)"
  },
  "guest.faq.farms": {
    en: "Farms & Facilities (3 questions)",
    ar: "المزارع والمرافق (3 أسئلة)"
  },
  "guest.faq.policies": {
    en: "Policies & Rules (1 question)",
    ar: "السياسات والقواعد (سؤال واحد)"
  },
  "guest.faq.support": {
    en: "Technical Support (2 questions)",
    ar: "الدعم التقني (سؤالان)"
  },

  // Guest - Terms
  "guest.terms.title": {
    en: "Terms & Conditions",
    ar: "الشروط والأحكام"
  },
  "guest.terms.desc": {
    en: "Review the terms of service for using LAHZA platform.",
    ar: "راجع شروط الخدمة لاستخدام منصة لحظة."
  },
  "guest.terms.general": {
    en: "General Terms: Age 18+, accurate information required",
    ar: "الشروط العامة: العمر 18+، معلومات دقيقة مطلوبة"
  },
  "guest.terms.booking": {
    en: "Booking: Subject to availability, cancellation 3+ days = full refund",
    ar: "الحجز: حسب التوفر، الإلغاء قبل 3+ أيام = استرداد كامل"
  },
  "guest.terms.user": {
    en: "User Responsibilities: Respect farm rules, keep property clean",
    ar: "مسؤوليات المستخدم: احترام قواعد المزرعة، الحفاظ على النظافة"
  },

  // Guest - Privacy
  "guest.privacy.title": {
    en: "Privacy Policy",
    ar: "سياسة الخصوصية"
  },
  "guest.privacy.desc": {
    en: "Learn how LAHZA protects your personal information.",
    ar: "تعرف على كيفية حماية لحظة لمعلوماتك الشخصية."
  },
  "guest.privacy.collect": {
    en: "Information Collected: Name, email, phone, payment details",
    ar: "المعلومات المجمعة: الاسم، البريد، الهاتف، بيانات الدفع"
  },
  "guest.privacy.usage": {
    en: "Usage: Booking processing, notifications, service improvement",
    ar: "الاستخدام: معالجة الحجز، الإشعارات، تحسين الخدمة"
  },
  "guest.privacy.security": {
    en: "Security: Advanced encryption, secure payment gateways",
    ar: "الأمان: تشفير متقدم، بوابات دفع آمنة"
  },

  // Guest - Loyalty
  "guest.loyalty.title": {
    en: "About Loyalty Program",
    ar: "عن برنامج الولاء"
  },
  "guest.loyalty.desc": {
    en: "Learn about LAHZA's loyalty rewards program before signing up.",
    ar: "تعرف على برنامج مكافآت الولاء في لحظة قبل التسجيل."
  },
  "guest.loyalty.note": {
    en: "Details about points earning, tiers, and rewards are available after login.",
    ar: "تفاصيل كسب النقاط والمستويات والمكافآت متاحة بعد تسجيل الدخول."
  },

  // Guest - Login CTA
  "guest.cta.title": {
    en: "Ready to Book?",
    ar: "مستعد للحجز؟"
  },
  "guest.cta.desc": {
    en: "Login or Sign up to complete your booking and access your dashboard.",
    ar: "سجل دخولك أو أنشئ حساباً لإتمام حجزك والوصول للوحة التحكم."
  },
  "guest.cta.login": {
    en: "Login as Guest (user) or Farm Owner",
    ar: "تسجيل الدخول كمستخدم أو مالك مزرعة"
  },
  "guest.cta.register": {
    en: "Create new account with email or social login (Google/Facebook)",
    ar: "إنشاء حساب جديد بالبريد أو تسجيل اجتماعي (جوجل/فيسبوك)"
  },
  "guest.cta.forgot": {
    en: "Forgot Password option available",
    ar: "خيار استعادة كلمة المرور متاح"
  },

  // User Sections
  "user.title": {
    en: "User Dashboard",
    ar: "لوحة تحكم المستخدم"
  },
  "user.intro": {
    en: "After logging in as a User, you gain access to your personal dashboard with the following features:",
    ar: "بعد تسجيل الدخول كمستخدم، تحصل على وصول للوحة التحكم الشخصية مع الميزات التالية:"
  },

  // User Dashboard
  "user.dashboard.overview": {
    en: "Dashboard Overview",
    ar: "نظرة عامة على لوحة التحكم"
  },
  "user.dashboard.stats": {
    en: "Quick Stats: View your total bookings and loyalty points at a glance.",
    ar: "إحصائيات سريعة: عرض إجمالي حجوزاتك ونقاط الولاء بلمحة سريعة."
  },
  "user.dashboard.recent": {
    en: "Recent Activity: Shortcut to your latest bookings and notifications.",
    ar: "النشاط الأخير: اختصار لآخر حجوزاتك وإشعاراتك."
  },
  "user.dashboard.actions": {
    en: "Quick Actions: Directly jump to browsing farms or managing your profile.",
    ar: "إجراءات سريعة: الانتقال مباشرة لتصفح المزارع أو إدارة ملفك الشخصي."
  },

  // User - Profile
  "user.profile.title": {
    en: "Profile & Loyalty",
    ar: "الملف الشخصي والولاء"
  },
  "user.profile.desc": {
    en: "Manage your account information and view your loyalty status.",
    ar: "إدارة معلومات حسابك وعرض حالة الولاء."
  },
  "user.profile.info": {
    en: "Account Information: View and edit your personal details",
    ar: "معلومات الحساب: عرض وتعديل بياناتك الشخصية"
  },
  "user.profile.loyalty": {
    en: "Loyalty Points & Tier: View your accumulated points and current tier",
    ar: "نقاط الولاء والمستوى: عرض نقاطك المتراكمة ومستواك الحالي"
  },
  "user.profile.loyalty.tbd": {
    en: "Tier benefits and point redemption rules: TBD",
    ar: "مزايا المستوى وقواعد استبدال النقاط: سيتم تحديدها لاحقاً"
  },
  "user.profile.settings": {
    en: "Settings: Change password, language preferences (if available)",
    ar: "الإعدادات: تغيير كلمة المرور، تفضيلات اللغة (إن توفرت)"
  },

  // User - Bookings
  "user.bookings.title": {
    en: "My Bookings",
    ar: "حجوزاتي"
  },
  "user.bookings.desc": {
    en: "View and manage all your farm bookings.",
    ar: "عرض وإدارة جميع حجوزات المزارع."
  },
  "user.bookings.current": {
    en: "View current (upcoming) bookings",
    ar: "عرض الحجوزات الحالية (القادمة)"
  },
  "user.bookings.past": {
    en: "View past (completed) bookings",
    ar: "عرض الحجوزات السابقة (المكتملة)"
  },
  "user.bookings.details": {
    en: "Booking details: Farm name, date, time, price",
    ar: "تفاصيل الحجز: اسم المزرعة، التاريخ، الوقت، السعر"
  },
  "user.bookings.status": {
    en: "Booking status: (Exact statuses TBD — e.g., Pending, Confirmed, Completed, Cancelled)",
    ar: "حالة الحجز: (الحالات الدقيقة سيتم تحديدها — مثل: معلق، مؤكد، مكتمل، ملغي)"
  },

  // User - Farm Details
  "user.farm.title": {
    en: "Browse & Farm Details",
    ar: "التصفح وتفاصيل المزرعة"
  },
  "user.farm.desc": {
    en: "Search farms and view detailed information before booking.",
    ar: "البحث عن المزارع وعرض معلومات مفصلة قبل الحجز."
  },
  "user.farm.search": {
    en: "Search and filter farms by location, amenities, price",
    ar: "البحث وتصفية المزارع حسب الموقع، المرافق، السعر"
  },
  "user.farm.images": {
    en: "View farm images gallery",
    ar: "عرض معرض صور المزرعة"
  },
  "user.farm.info": {
    en: "Farm description and amenities list",
    ar: "وصف المزرعة وقائمة المرافق"
  },
  "user.farm.location": {
    en: "Location with map (if available)",
    ar: "الموقع مع خريطة (إن توفر)"
  },
  "user.farm.reviews": {
    en: "View reviews from other guests (read-only)",
    ar: "عرض تقييمات الضيوف الآخرين (قراءة فقط)"
  },

  // User - Checkout
  "user.checkout.title": {
    en: "Confirm Farm (Checkout)",
    ar: "تأكيد الحجز (الدفع)"
  },
  "user.checkout.desc": {
    en: "Complete your booking process.",
    ar: "إتمام عملية الحجز."
  },
  "user.checkout.date": {
    en: "Select booking date and time (if available)",
    ar: "اختيار تاريخ ووقت الحجز (إن توفر)"
  },
  "user.checkout.review": {
    en: "Review total price and policies",
    ar: "مراجعة السعر الإجمالي والسياسات"
  },
  "user.checkout.confirm": {
    en: "Confirm booking and receive confirmation",
    ar: "تأكيد الحجز واستلام التأكيد"
  },
  "user.checkout.payment": {
    en: "Online Payment — 🔮 Future Feature",
    ar: "الدفع الإلكتروني — 🔮 ميزة مستقبلية"
  },

  // User - Future Features
  "user.future.title": {
    en: "Future Features (User)",
    ar: "ميزات مستقبلية (المستخدم)"
  },
  "user.future.notifications": {
    en: "Notifications: Push/email notifications for booking updates",
    ar: "الإشعارات: إشعارات فورية/بريدية لتحديثات الحجز"
  },
  "user.future.love": {
    en: "Love Feature: Save favorite farms to a wishlist",
    ar: "ميزة Love: حفظ المزارع المفضلة في قائمة الأمنيات"
  },
  "user.future.reviews": {
    en: "View Review / Review Interaction: Submit and manage reviews",
    ar: "عرض التقييم / التفاعل مع التقييمات: تقديم وإدارة التقييمات"
  },

  // Owner Sections
  "owner.title": {
    en: "Farm Owner Dashboard",
    ar: "لوحة تحكم مالك المزرعة"
  },
  "owner.intro": {
    en: "As a Farm Owner, you can list your properties and manage bookings through your dedicated dashboard.",
    ar: "كمالك مزرعة، يمكنك إدراج ممتلكاتك وإدارة الحجوزات من خلال لوحة التحكم المخصصة."
  },

  // Owner - Dashboard
  "owner.dashboard.title": {
    en: "Owner Dashboard Overview",
    ar: "نظرة عامة على لوحة التحكم"
  },
  "owner.dashboard.desc": {
    en: "Your central hub for managing farms and bookings.",
    ar: "مركزك الرئيسي لإدارة المزارع والحجوزات."
  },
  "owner.dashboard.summary": {
    en: "Summary cards: Total farms, active bookings, revenue (TBD)",
    ar: "بطاقات ملخصة: إجمالي المزارع، الحجوزات النشطة، الإيرادات (سيتم تحديدها)"
  },
  "owner.dashboard.quick": {
    en: "Quick links to Add Farm, View Bookings, Manage Farms",
    ar: "روابط سريعة لإضافة مزرعة، عرض الحجوزات، إدارة المزارع"
  },

  // Owner - Add Farm
  "owner.add.title": {
    en: "Add Farm",
    ar: "إضافة مزرعة"
  },
  "owner.add.desc": {
    en: "List a new farm or chalet on the platform.",
    ar: "إدراج مزرعة أو شاليه جديد على المنصة."
  },
  "owner.add.details": {
    en: "Fill farm details: Name, description, location, capacity",
    ar: "ملء تفاصيل المزرعة: الاسم، الوصف، الموقع، السعة"
  },
  "owner.add.images": {
    en: "Upload photos of the farm",
    ar: "رفع صور المزرعة"
  },
  "owner.add.amenities": {
    en: "Select amenities and features",
    ar: "اختيار المرافق والميزات"
  },
  "owner.add.pricing": {
    en: "Set pricing information",
    ar: "تحديد معلومات التسعير"
  },
  "owner.add.submit": {
    en: "Submit for Admin Approval",
    ar: "إرسال لموافقة المدير"
  },
  "owner.add.note": {
    en: "Your farm will be reviewed by an admin before it becomes publicly visible.",
    ar: "سيتم مراجعة مزرعتك من قبل المدير قبل أن تصبح مرئية للعامة."
  },

  // Owner - Farm Management
  "owner.manage.title": {
    en: "Farm Management",
    ar: "إدارة المزارع"
  },
  "owner.manage.desc": {
    en: "Edit and update your listed farms.",
    ar: "تعديل وتحديث المزارع المدرجة."
  },
  "owner.manage.edit": {
    en: "Edit farm details and description",
    ar: "تعديل تفاصيل ووصف المزرعة"
  },
  "owner.manage.photos": {
    en: "Update or add new photos",
    ar: "تحديث أو إضافة صور جديدة"
  },
  "owner.manage.pricing": {
    en: "Modify pricing and seasonal rates",
    ar: "تعديل الأسعار والأسعار الموسمية"
  },
  "owner.manage.availability": {
    en: "Availability/Calendar: TBD (if exists)",
    ar: "التوفر/التقويم: سيتم تحديده لاحقاً (إن وجد)"
  },

  // Owner - Bookings
  "owner.bookings.title": {
    en: "Bookings (Owner)",
    ar: "الحجوزات (المالك)"
  },
  "owner.bookings.desc": {
    en: "View and respond to incoming booking requests.",
    ar: "عرض الرد على طلبات الحجز الواردة."
  },
  "owner.bookings.view": {
    en: "View all incoming bookings for your farms",
    ar: "عرض جميع الحجوزات الواردة لمزارعك"
  },
  "owner.bookings.accept": {
    en: "Accept/Decline bookings: TBD (if feature exists)",
    ar: "قبول/رفض الحجوزات: سيتم تحديده لاحقاً (إن وجدت الميزة)"
  },
  "owner.bookings.details": {
    en: "View booking details and guest information",
    ar: "عرض تفاصيل الحجز ومعلومات الضيف"
  },
  "owner.bookings.followup": {
    en: "Follow-up actions: TBD",
    ar: "إجراءات المتابعة: سيتم تحديدها لاحقاً"
  },

  // Owner - Future Features
  "owner.future.title": {
    en: "Future Features (Owner)",
    ar: "ميزات مستقبلية (المالك)"
  },
  "owner.future.analytics": {
    en: "Analytics: View booking statistics and revenue reports",
    ar: "التحليلات: عرض إحصائيات الحجز وتقارير الإيرادات"
  },
  "owner.future.banners": {
    en: "Banners/Ads (الشعارات): Promote your farm with featured listings",
    ar: "الشعارات/الإعلانات: ترويج مزرعتك بإدراجات مميزة"
  },

  // Admin Sections
  "admin.title": {
    en: "Admin Panel",
    ar: "لوحة الإدارة"
  },
  "admin.intro": {
    en: "As an Admin, you have full control over platform users and farm listings.",
    ar: "كمدير، لديك السيطرة الكاملة على مستخدمي المنصة وإدراجات المزارع."
  },

  // Admin - Users
  "admin.users.title": {
    en: "Users Management",
    ar: "إدارة المستخدمين"
  },
  "admin.users.desc": {
    en: "View and manage all platform users.",
    ar: "عرض وإدارة جميع مستخدمي المنصة."
  },
  "admin.users.view": {
    en: "View all users (Guests/Users and Farm Owners)",
    ar: "عرض جميع المستخدمين (الضيوف/المستخدمين ومالكي المزارع)"
  },
  "admin.users.edit": {
    en: "Edit user details: TBD (if supported)",
    ar: "تعديل تفاصيل المستخدم: سيتم تحديده لاحقاً (إن كان مدعوماً)"
  },
  "admin.users.disable": {
    en: "Disable/Enable user accounts: TBD (if supported)",
    ar: "تعطيل/تفعيل حسابات المستخدمين: سيتم تحديده لاحقاً (إن كان مدعوماً)"
  },

  // Admin - Farms Approval
  "admin.farms.title": {
    en: "Farms Approval",
    ar: "موافقة المزارع"
  },
  "admin.farms.desc": {
    en: "Review and approve farm listings submitted by owners.",
    ar: "مراجعة والموافقة على إدراجات المزارع المقدمة من المالكين."
  },
  "admin.farms.pending": {
    en: "View all pending farm submissions",
    ar: "عرض جميع طلبات المزارع المعلقة"
  },
  "admin.farms.review": {
    en: "Review farm details, photos, and information",
    ar: "مراجعة تفاصيل المزرعة والصور والمعلومات"
  },
  "admin.farms.approve": {
    en: "Approve or Reject with reason: TBD (if feature exists)",
    ar: "الموافقة أو الرفض مع السبب: سيتم تحديده لاحقاً (إن وجدت الميزة)"
  },

  // Sitemap
  "sitemap.title": {
    en: "Discovered Sitemap",
    ar: "خريطة الموقع المكتشفة"
  },
  "sitemap.desc": {
    en: "Routes discovered from the LAHZA platform:",
    ar: "المسارات المكتشفة من منصة لحظة:"
  },
  "sitemap.public": {
    en: "Public Routes",
    ar: "المسارات العامة"
  },
  "sitemap.protected": {
    en: "Protected Routes (Require Login)",
    ar: "المسارات المحمية (تتطلب تسجيل الدخول)"
  },

  // Routes
  "route.home": {
    en: "/ — Home",
    ar: "/ — الرئيسية"
  },
  "route.about": {
    en: "/about — About Us",
    ar: "/about — من نحن"
  },
  "route.contact": {
    en: "/contact — Contact Us",
    ar: "/contact — اتصل بنا"
  },
  "route.faq": {
    en: "/faq — FAQ",
    ar: "/faq — الأسئلة الشائعة"
  },
  "route.terms": {
    en: "/terms — Terms & Conditions",
    ar: "/terms — الشروط والأحكام"
  },
  "route.privacy": {
    en: "/privacy — Privacy Policy",
    ar: "/privacy — سياسة الخصوصية"
  },
  "route.login": {
    en: "/login — Login",
    ar: "/login — تسجيل الدخول"
  },
  "route.register": {
    en: "/register — Register",
    ar: "/register — التسجيل"
  },
  "route.forgot": {
    en: "/forgot-password — Forgot Password",
    ar: "/forgot-password — استعادة كلمة المرور"
  },
  "route.dashboard": {
    en: "/dashboard — User/Owner Dashboard",
    ar: "/dashboard — لوحة تحكم المستخدم/المالك"
  },
  "route.profile": {
    en: "/profile — Profile",
    ar: "/profile — الملف الشخصي"
  },
  "route.bookings": {
    en: "/bookings — My Bookings",
    ar: "/bookings — حجوزاتي"
  },
  "route.farms.details": {
    en: "/farms/:id — Farm Details",
    ar: "/farms/:id — تفاصيل المزرعة"
  },
  "route.checkout": {
    en: "/checkout — Checkout",
    ar: "/checkout — الدفع"
  },
  "route.admin": {
    en: "/admin — Admin Panel",
    ar: "/admin — لوحة الإدارة"
  },

  // Footer
  "footer.version": {
    en: "Manual Version 1.0 — Last Updated: January 2026",
    ar: "إصدار الدليل 1.0 — آخر تحديث: يناير 2026"
  },
  "footer.contact": {
    en: "Need help? Contact support@lahza.jo",
    ar: "تحتاج مساعدة؟ تواصل مع support@lahza.jo"
  }
};

export const t = (key: string, lang: Language): string => {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Missing translation for key: ${key}`);
    return key;
  }
  return translation[lang] || translation['en'] || key;
};
