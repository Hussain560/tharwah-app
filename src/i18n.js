import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
  // Preview Text
  onboardingPreview: 'Interactive onboarding wizard to guide you through app features',
  authPreview: 'Secure authentication system for user access',

  // Presentation Box Titles
  firstTimeUserJourney: 'First-Time User Journey: Onboarding & Authentication',
  mainAppExperience: 'Main Application Experience (Logged-In User)',
  premiumAppExperience: 'Main Application Experience (Premium Upgrade)',
      
      // App Description
      appDescription: 'A financial companion that gives you proactive control over your spending.',
      selectLanguage: 'Select Language',
      
      // Navigation
      home: 'Home',
      analysis: 'Analysis',
      services: 'Services',
      advisor: 'AI Advisor',
      settings: 'Settings',
      
      // Home Screen
      greeting: 'Good morning',
      welcomeBack: 'Welcome back to your financial dashboard',
      totalBalance: 'Total Balance',
      availableBalance: 'Available Balance',
      addExpense: 'Add Expense',
      transfer: 'Transfer',
      request: 'Request',
      bills: 'Bills',
      quickServices: 'Quick Services',
      activeBudgets: 'Active Budgets',
      
      // Budget Categories
      rent: 'Rent',
      groceries: 'Groceries',
      transportation: 'Transportation',
      entertainment: 'Entertainment',
      dining: 'Dining Out',
      healthcare: 'Healthcare',
      utilities: 'Utilities',
      salary: 'Salary',
      
      // Status
      remaining: 'Remaining',
      locked: 'Locked',
      unlocksOn: 'Unlocks on',
      progress: 'Progress',
  // currency: 'SAR',
  // SAR icon is now used everywhere instead of the text 'SAR'.
      
      // Analysis Screen
      smartLockBudgets: 'Smart Lock Budgets',
      createNew: 'Create New',
      totalSpending: 'Total Spending',
      higherThanAverage: 'Higher than average',
      recentTransactions: 'Recent Transactions',
      july: 'July',
      august: 'August',
      september: 'September',
      october: 'October',
      
      // Services Screen
      servicesSubtitle: 'All your financial services in one place',
      requestPayment: 'Request Payment',
      splitBill: 'Split Bill',
      scanToPay: 'Scan to Pay',
      billPayments: 'Bill Payments',
      myCards: 'My Cards',
      recurringPayments: 'Recurring Payments',
      dependentsWallet: "Dependents' Wallet",
      savingsGoals: 'Savings Goals',
      recurringDeduction: 'Auto Deduction',
      loyaltyPoints: 'Loyalty Points',
      
      // Onboarding Wizard
      skip: 'Skip',
      next: 'Next',
      finish: 'Finish',
      controlSpendingTitle: 'Control Your Spending',
      controlSpendingDesc: 'Use our Smart Lock feature to proactively control when and how much you spend on different categories.',
      analyzeHabitsTitle: 'Analyze Your Habits',
      analyzeHabitsDesc: 'Get unified insights about your spending patterns with our powerful analysis tools and visual reports.',
      smartAdviceTitle: 'Get Smart Advice',
      smartAdviceDesc: 'Receive personalized AI-powered recommendations to improve your financial habits and reach your goals.',
      
      // Authentication
      welcomeToTharwah: 'Your smart financial companion',
      email: 'Email',
      password: 'Password',
      emailPlaceholder: 'Enter your email address',
      passwordPlaceholder: 'Enter your password',
      login: 'Login',
      createAccount: 'Create Account',
      forgotPassword: 'Forgot Password?',
      
      // Transactions Screen
      transactionHistory: 'Transaction History',
      today: 'Today',
      yesterday: 'Yesterday',
      
      // AI Advisor Screen
      aiAdvisor: 'AI Advisor',
      personalizedInsights: 'Personalized insights for your financial goals',
      spendingAlert: 'Spending Alert',
      diningOverspend: "You've spent 30% more on dining out this month compared to last month.",
      goodJob: 'Good Job!',
      savingsOnTrack: 'You are on track with your savings goal for this month.',
      monthlyInsight: 'Monthly Insight',
  // grocerySavings: 'You could save 80 SAR/month by switching to a different grocery store.'
  // SAR icon is now used everywhere instead of the text 'SAR'.
      smartTip: 'Smart Tip',
      budgetOptimization: 'Consider adjusting your entertainment budget to free up more funds for savings.',
      premiumInsights: 'Premium Insights',
      upgradeMessage: 'Get advanced AI insights and recommendations',
      upgradePremium: 'Upgrade to Premium',
      
      // AI Chat Screen
      aiWelcomeMessage: 'Hello! How can I help you with your finances today?',
      aiChatSubtitle: 'Get personalized financial advice powered by AI',
      suggestedPrompts: 'Suggested Questions',
      typeYourMessage: 'Type your message...',
      analyzeSpendingPrompt: 'Analyze my spending',
      saveTipsPrompt: 'How can I save more?',
      budgetHelpPrompt: 'Help with budgeting',
      goalSettingPrompt: 'Set financial goals',
      analyzeSpendingResponse: 'Based on your recent transactions, you spent 15% more on dining out this month. Consider setting a stricter budget for restaurants.',
      saveTipsResponse: 'Here are 3 ways to save more: 1) Use the Smart Lock feature on entertainment, 2) Review recurring subscriptions, 3) Set up automatic transfers to savings.',
      budgetHelpResponse: 'I recommend the 50/30/20 rule: 50% needs, 30% wants, 20% savings. Your current split is 60/35/5 - let\'s work on increasing your savings rate.',
      goalSettingResponse: 'Great! Let\'s start with a SMART goal. What would you like to save for? Emergency fund, vacation, or a major purchase?',
      aiGenericResponse: 'Thank you for your question. I\'m analyzing your financial data to provide the best personalized advice.',
      
      // Financial Health Score
      financialHealthScore: 'Your Financial Health',
      excellentHealth: 'Excellent financial health! Keep up the great work.',
      goodHealth: 'Good financial health with room for improvement.',
      needsImprovement: 'Your finances need attention. Let\'s work together!',
      getTips: 'Get Tips to Improve',
      
      // AI Analysis Modal
      aiSpendingAnalysis: 'AI Spending Analysis',
      getAiAnalysis: 'Get AI Analysis',
      aiAnalysisTitle: 'AI Spending Summary for {{month}}',
      aiAnalysisText: 'Your spending this month was 15% higher than average. The largest increase was in the "Dining Out" category. Consider setting a stricter lock on this budget to meet your savings goals.',
      
      // Settings Screen
      account: 'Account',
      preferences: 'Preferences',
      security: 'Security',
      support: 'Support',
      profile: 'Profile Information',
      linkedAccounts: 'Linked Accounts',
      notifications: 'Notifications',
      language: 'Language',
      securityPrivacy: 'Security & Privacy',
      helpSupport: 'Help & Support',
      logout: 'Logout',
      close: 'Close',
      
      // Service Screens
      amount: 'Amount',
      frequency: 'Frequency',
      weekly: 'Weekly',
      monthly: 'Monthly',
      summary: 'Summary',
      activatePlan: 'Activate Plan',
      autoDeductionSummary: 'This will deduct {{amount}} SAR {{frequency}} from your main balance.',
      
      addNewDependent: 'Add New Dependent',
      addMoney: 'Add Money',
      setLimits: 'Set Limits',
      currentBalance: 'Current Balance',
      yourDependents: 'Your Dependents',
      noDependents: 'No dependents added yet',
      addFirstDependent: 'Add your first dependent to get started',
      
      note: 'Note',
      optional: 'Optional',
      addNote: 'Add a note for this payment request...',
      generateRequest: 'Generate Request',
      requestedAmount: 'Requested Amount',
      copyLink: 'Copy Link',
      share: 'Share',
      createNewRequest: 'Create New Request',
      
      // Split Bill Screen
      splitBill: 'Split Bill',
      totalBillAmount: 'Total Bill Amount',
      splitType: 'Split Type',
      splitEvenly: 'Split Evenly',
      splitUnevenly: 'Split Unevenly',
      participants: 'Participants',
      addParticipant: 'Add Participant',
      totalBill: 'Total Bill',
      totalAssigned: 'Total Assigned',
      calculateAndShare: 'Calculate & Share',

      // Bill Payments Screen
      billPayments: 'Bill Payments',
      searchBillers: 'Search billers...',
      popularBillers: 'Popular Billers',
      paymentDetails: 'Payment Details',
      confirmPayment: 'Confirm Payment',
      accountNumber: 'Account Number',
      enterAccountNumber: 'Enter account number',
      biller: 'Biller',
      paymentSummary: 'Payment Summary',
      totalToPay: 'Total to Pay',
      proceedToPayment: 'Proceed to Payment',
      confirmAndPay: 'Confirm & Pay',
      paymentConfirmationNote: 'Please verify all details before confirming your payment. This transaction cannot be undone.',

      // Biller Categories
      telecom: 'Telecom',
      internet: 'Internet',
      government: 'Government',
      transport: 'Transport',

      // Scan to Pay Screen
      scanToPay: 'Scan to Pay',
      pointCameraAtQr: 'Point camera at QR code',
      cameraViewfinder: 'Camera Viewfinder',
      scanning: 'Scanning...',
      tapToScan: 'Tap to Scan',
      enterCodeManually: 'Enter Code Manually',
      qrCodeOrId: 'QR Code or Merchant ID',
      enterQrCodeOrMerchantId: 'Enter QR code or merchant ID...',
      manualEntryTip: 'Manual Entry',
      manualEntryDescription: 'You can enter a QR code string or merchant ID if scanning is not available.',
      processing: 'Processing...',
      processCode: 'Process Code',
      backToCamera: 'Back to Camera',
      merchantId: 'Merchant ID',
      paymentAmount: 'Payment Amount',
      suggestedAmount: 'Suggested Amount',
      merchant: 'Merchant',
      payNow: 'Pay Now',
      scanAnother: 'Scan Another',
      
      // Loyalty Points Screen
      currentPointsBalance: 'Current Points Balance',
      points: 'Points',
      redeemOptions: 'Redeem Options',
      vouchers: 'Vouchers',
      cashback: 'Cashback',
      recentPointsActivity: 'Recent Points Activity',
      redemption: 'Redemption',
      perPerson: 'per person',
      error: 'Error',
      splitError: 'Assigned amounts do not match bill total.',
      billSplitSuccess: 'Bill split successfully! Sharing details...',
      paymentOf: 'Payment of',
      to: 'to',
      paymentSuccess: 'Payment processed successfully!',
      comingSoon: 'Coming Soon',

      // My Cards Screen
      myCards: 'My Cards',
      cardHolder: 'Card Holder',
      expires: 'Expires',
      cvv: 'CVV',
      showDetails: 'Show Details',
      hideDetails: 'Hide Details',
      addToAppleWallet: 'Add to Apple Wallet',
      onlinePayments: 'Online Payments',
      onlinePaymentsDesc: 'Enable or disable online payments for this card',
      cardSecurity: 'Card Security',
      securityTip1: 'Never share your card details with anyone',
      securityTip2: 'Use secure networks for online payments',
      securityTip3: 'Monitor your transactions regularly',
      appleWalletSuccess: 'Card successfully added to Apple Wallet!',
      onlinePaymentsEnabled: 'Online payments have been enabled for this card.',
      onlinePaymentsDisabled: 'Online payments have been disabled for this card.',

      // Top Up Card Screen  
      topUpCard: 'Top Up Card',
      selectCard: 'Select Card',
      myDigitalCard: 'My Digital Card',
      card: 'Card',
      quickAmounts: 'Quick Amounts',
      topUpAmount: 'Top Up Amount',
      newBalance: 'New Balance',
      topUpNow: 'Top Up Now',
      topUpSuccessful: 'Top up successful!',
      transactionSummary: 'Transaction Summary',

      // Recurring Payments Screen
      addNewRecurringPayment: 'Add New Recurring Payment',
      activeRecurringPayments: 'Active Recurring Payments',
      nextPayment: 'Next Payment',
      edit: 'Edit',
      editPayment: 'Edit Payment',
      noRecurringPayments: 'No recurring payments set up',
      addFirstRecurringPayment: 'Add your first recurring payment to get started',
      totalMonthlyPayments: 'Total Monthly Payments',
      activePayments: 'Active Payments',

      // Savings Goals Screen
      createNewGoal: 'Create New Goal',
      addFunds: 'Add Funds',
      editGoal: 'Edit Goal',
      vacationFund: 'Vacation Fund',
      newCar: 'New Car',
      emergencyFund: 'Emergency Fund',
      totalSaved: 'Total Saved',
      of: 'of',
      savingsGoal: 'Savings Goal',
      completed: 'completed',
      remaining: 'Remaining',
      progress: 'Progress',
      noSavingsGoals: 'No savings goals created yet',
      createFirstGoal: 'Create your first savings goal to get started'
    }
  },
  ar: {
    translation: {
      // Preview Text
      onboardingPreview: 'معالج تفاعلي لإرشادك عبر ميزات التطبيق',
      authPreview: 'نظام مصادقة آمن لوصول المستخدمين',
      
      // App Description
      appDescription: 'رفيق مالي يمنحك السيطرة الاستباقية على إنفاقك.',
      selectLanguage: 'اختر اللغة',
      
      // Navigation
      home: 'الرئيسية',
      analysis: 'التحليل',
      services: 'الخدمات',
      advisor: 'المستشار',
      settings: 'الإعدادات',
      
      // Home Screen
      greeting: 'صباح الخير',
      welcomeBack: 'مرحباً بعودتك إلى لوحة التحكم المالية',
      totalBalance: 'الرصيد الكلي',
      availableBalance: 'الرصيد المتاح',
      addExpense: 'إضافة مصروف',
      transfer: 'تحويل',
      request: 'طلب',
      bills: 'الفواتير',
      quickServices: 'الخدمات السريعة',
      activeBudgets: 'الميزانيات النشطة',
      
      // Budget Categories
      rent: 'الإيجار',
      groceries: 'البقالة',
      transportation: 'المواصلات',
      entertainment: 'الترفيه',
      dining: 'المطاعم',
      healthcare: 'الرعاية الصحية',
      utilities: 'الخدمات',
      salary: 'الراتب',
      
      // Status
      remaining: 'متبقي',
      locked: 'مقفل',
      unlocksOn: 'يفتح في',
      progress: 'التقدم',
      currency: 'ريال',
      
      // Analysis Screen
      smartLockBudgets: 'الأقفال الذكية للميزانيات',
      createNew: 'إنشاء جديد',
      totalSpending: 'إجمالي الإنفاق',
      higherThanAverage: 'أعلى من المتوسط',
      recentTransactions: 'المعاملات الأخيرة',
      july: 'يوليو',
      august: 'أغسطس',
      september: 'سبتمبر',
      october: 'أكتوبر',
      
      // Services Screen
      servicesSubtitle: 'جميع خدماتك المالية في مكان واحد',
      requestPayment: 'طلب دفعة',
      splitBill: 'تقسيم الفاتورة',
      scanToPay: 'مسح للدفع',
      billPayments: 'دفع الفواتير',
      myCards: 'بطاقاتي',
      recurringPayments: 'الدفعات المتكررة',
      dependentsWallet: 'محفظة التابعين',
      savingsGoals: 'أهداف الادخار',
      recurringDeduction: 'استقطاع تلقائي',
      loyaltyPoints: 'نقاط الولاء',
      
      // Onboarding Wizard
      skip: 'تخطي',
      next: 'التالي',
      finish: 'إنهاء',
      controlSpendingTitle: 'تحكم في إنفاقك',
      controlSpendingDesc: 'استخدم ميزة القفل الذكي للتحكم الاستباقي في وقت ومقدار إنفاقك على الفئات المختلفة.',
      analyzeHabitsTitle: 'حلل عاداتك',
      analyzeHabitsDesc: 'احصل على رؤى موحدة حول أنماط إنفاقك باستخدام أدوات التحليل والتقارير المرئية القوية.',
      smartAdviceTitle: 'احصل على نصائح ذكية',
      smartAdviceDesc: 'تلقَ توصيات مخصصة مدعومة بالذكاء الاصطناعي لتحسين عاداتك المالية وتحقيق أهدافك.',
      
      // Authentication
      welcomeToTharwah: 'رفيقك المالي الذكي',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      emailPlaceholder: 'أدخل عنوان بريدك الإلكتروني',
      passwordPlaceholder: 'أدخل كلمة المرور',
      login: 'تسجيل الدخول',
      createAccount: 'إنشاء حساب',
      forgotPassword: 'نسيت كلمة المرور؟',
      
      // Transactions Screen
      transactionHistory: 'تاريخ المعاملات',
      today: 'اليوم',
      yesterday: 'أمس',
      
      // AI Advisor Screen
      aiAdvisor: 'المستشار الذكي',
      personalizedInsights: 'نصائح مخصصة لأهدافك المالية',
      spendingAlert: 'تنبيه إنفاق',
      diningOverspend: 'لقد أنفقت ٣٠٪ أكثر على المطاعم هذا الشهر مقارنة بالشهر الماضي.',
      goodJob: 'أحسنت!',
      savingsOnTrack: 'أنت على المسار الصحيح مع هدف الادخار لهذا الشهر.',
      monthlyInsight: 'نظرة شهرية',
      grocerySavings: 'يمكنك توفير ٨٠ ريال شهرياً بالتسوق من متجر بقالة مختلف.',
      smartTip: 'نصيحة ذكية',
      budgetOptimization: 'فكر في تعديل ميزانية الترفيه لتوفير المزيد من الأموال للادخار.',
      premiumInsights: 'النصائح المتميزة',
      upgradeMessage: 'احصل على نصائح وتوصيات متقدمة من الذكاء الاصطناعي',
      upgradePremium: 'الترقية للإصدار المميز',
      
      // AI Chat Screen
      aiWelcomeMessage: 'مرحباً! كيف يمكنني مساعدتك في شؤونك المالية اليوم؟',
      aiChatSubtitle: 'احصل على نصائح مالية مخصصة مدعومة بالذكاء الاصطناعي',
      suggestedPrompts: 'الأسئلة المقترحة',
      typeYourMessage: 'اكتب رسالتك...',
      analyzeSpendingPrompt: 'حلل إنفاقي',
      saveTipsPrompt: 'كيف يمكنني توفير أكثر؟',
      budgetHelpPrompt: 'ساعدني في وضع الميزانية',
      goalSettingPrompt: 'ضع أهداف مالية',
      analyzeSpendingResponse: 'بناءً على معاملاتك الأخيرة، أنفقت ١٥٪ أكثر على المطاعم هذا الشهر. فكر في وضع ميزانية أكثر صرامة للمطاعم.',
      saveTipsResponse: 'إليك ٣ طرق لتوفير أكثر: ١) استخدم ميزة القفل الذكي على الترفيه، ٢) راجع الاشتراكات المتكررة، ٣) أعد تحويلات تلقائية للادخار.',
      budgetHelpResponse: 'أنصح بقاعدة ٥٠/٣٠/٢٠: ٥٠٪ احتياجات، ٣٠٪ رغبات، ٢٠٪ ادخار. تقسيمك الحالي ٦٠/٣٥/٥ - دعنا نعمل على زيادة معدل الادخار.',
      goalSettingResponse: 'رائع! لنبدأ بهدف ذكي. لأي شيء تريد الادخار؟ صندوق طوارئ، إجازة، أو شراء كبير؟',
      aiGenericResponse: 'شكراً لسؤالك. أحلل بياناتك المالية لتقديم أفضل نصيحة مخصصة.',
      
      // Financial Health Score
      financialHealthScore: 'صحتك المالية',
      excellentHealth: 'صحة مالية ممتازة! استمر في العمل الرائع.',
      goodHealth: 'صحة مالية جيدة مع مجال للتحسين.',
      needsImprovement: 'أموالك تحتاج انتباه. دعنا نعمل معاً!',
      getTips: 'احصل على نصائح للتحسين',
      
      // AI Analysis Modal
      aiSpendingAnalysis: 'تحليل الإنفاق بالذكاء الاصطناعي',
      getAiAnalysis: 'احصل على التحليل الذكي',
      aiAnalysisTitle: 'ملخص الإنفاق الذكي لشهر {{month}}',
      aiAnalysisText: 'إنفاقك هذا الشهر كان أعلى بنسبة ١٥٪ من المتوسط. أكبر زيادة كانت في فئة "المطاعم". فكر في وضع قفل أكثر صرامة على هذه الميزانية لتحقيق أهداف الادخار.',
      
      // Settings Screen
      account: 'الحساب',
      preferences: 'التفضيلات',
      security: 'الأمان',
  support: 'الدعم',
  profile: 'معلومات الملف الشخصي',
  linkedAccounts: 'الحسابات المربوطة',
  notifications: 'الإشعارات',
  language: 'اللغة',
  securityPrivacy: 'الأمان والخصوصية',
  helpSupport: 'المساعدة والدعم',
  logout: 'تسجيل الخروج',
      close: 'إغلاق',
      
      // Service Screens
      amount: 'المبلغ',
      frequency: 'التكرار',
      weekly: 'أسبوعياً',
      monthly: 'شهرياً',
      summary: 'الملخص',
      activatePlan: 'تفعيل الخطة',
      autoDeductionSummary: 'سيتم خصم {{amount}} ريال {{frequency}} من رصيدك الرئيسي.',
      
      addNewDependent: 'إضافة تابع جديد',
      addMoney: 'إضافة أموال',
      setLimits: 'تحديد الحدود',
      currentBalance: 'الرصيد الحالي',
      yourDependents: 'التابعين لك',
      noDependents: 'لم تتم إضافة تابعين بعد',
      addFirstDependent: 'أضف أول تابع لك للبدء',
      
      note: 'ملاحظة',
      optional: 'اختياري',
      addNote: 'أضف ملاحظة لطلب الدفع هذا...',
      generateRequest: 'إنشاء الطلب',
      requestedAmount: 'المبلغ المطلوب',
      copyLink: 'نسخ الرابط',
      share: 'مشاركة',
      createNewRequest: 'إنشاء طلب جديد',
      
      // Split Bill Screen
      splitBill: 'تقسيم الفاتورة',
      totalBillAmount: 'إجمالي مبلغ الفاتورة',
      splitType: 'نوع التقسيم',
      splitEvenly: 'تقسيم متساوي',
      splitUnevenly: 'تقسيم غير متساوي',
      participants: 'المشاركون',
      addParticipant: 'إضافة مشارك',
      totalBill: 'إجمالي الفاتورة',
      totalAssigned: 'إجمالي المخصص',
      calculateAndShare: 'حساب ومشاركة',

      // Bill Payments Screen
      billPayments: 'دفع الفواتير',
      searchBillers: 'البحث في مقدمي الخدمات...',
      popularBillers: 'مقدمو الخدمات الشائعون',
      paymentDetails: 'تفاصيل الدفع',
      confirmPayment: 'تأكيد الدفع',
      accountNumber: 'رقم الحساب',
      enterAccountNumber: 'أدخل رقم الحساب',
      biller: 'مقدم الخدمة',
      paymentSummary: 'ملخص الدفع',
      totalToPay: 'إجمالي المطلوب دفعه',
      proceedToPayment: 'متابعة للدفع',
      confirmAndPay: 'تأكيد والدفع',
      paymentConfirmationNote: 'يرجى التحقق من جميع التفاصيل قبل تأكيد دفعتك. لا يمكن التراجع عن هذه المعاملة.',

      // Biller Categories
      telecom: 'الاتصالات',
      internet: 'الإنترنت',
      government: 'حكومي',
      transport: 'النقل',

      // Scan to Pay Screen
      scanToPay: 'مسح للدفع',
      pointCameraAtQr: 'وجه الكاميرا نحو رمز QR',
      cameraViewfinder: 'عدسة الكاميرا',
      scanning: 'جاري المسح...',
      tapToScan: 'اضغط للمسح',
      enterCodeManually: 'أدخل الكود يدوياً',
      qrCodeOrId: 'رمز QR أو معرف التاجر',
      enterQrCodeOrMerchantId: 'أدخل رمز QR أو معرف التاجر...',
      manualEntryTip: 'الإدخال اليدوي',
      manualEntryDescription: 'يمكنك إدخال نص رمز QR أو معرف التاجر إذا لم يكن المسح متاحاً.',
      processing: 'جاري المعالجة...',
      processCode: 'معالجة الكود',
      backToCamera: 'العودة للكاميرا',
      merchantId: 'معرف التاجر',
      paymentAmount: 'مبلغ الدفع',
      suggestedAmount: 'المبلغ المقترح',
      merchant: 'التاجر',
      payNow: 'ادفع الآن',
      scanAnother: 'مسح آخر',
      
      // Loyalty Points Screen
      currentPointsBalance: 'رصيد النقاط الحالي',
      points: 'نقاط',
      redeemOptions: 'خيارات الاستبدال',
      vouchers: 'قسائم',
      cashback: 'استرداد نقدي',
      recentPointsActivity: 'نشاط النقاط الأخير',
      redemption: 'استبدال',
      perPerson: 'للشخص الواحد',
      error: 'خطأ',
      splitError: 'المبالغ المخصصة لا تتطابق مع إجمالي الفاتورة.',
      billSplitSuccess: 'تم تقسيم الفاتورة بنجاح! جاري المشاركة...',
      paymentOf: 'دفعة بقيمة',
      to: 'لـ',
      paymentSuccess: 'تمت معالجة الدفع بنجاح!',
      comingSoon: 'قريباً',

      // My Cards Screen
      myCards: 'بطاقاتي',
      cardHolder: 'حامل البطاقة',
      expires: 'تنتهي',
      cvv: 'رمز الأمان',
      showDetails: 'إظهار التفاصيل',
      hideDetails: 'إخفاء التفاصيل',
      addToAppleWallet: 'إضافة إلى Apple Wallet',
      onlinePayments: 'الدفع عبر الإنترنت',
      onlinePaymentsDesc: 'تفعيل أو إلغاء الدفع عبر الإنترنت لهذه البطاقة',
      cardSecurity: 'أمان البطاقة',
      securityTip1: 'لا تشارك تفاصيل بطاقتك مع أي شخص',
      securityTip2: 'استخدم شبكات آمنة للدفع عبر الإنترنت',
      securityTip3: 'راقب معاملاتك بانتظام',
      appleWalletSuccess: 'تمت إضافة البطاقة إلى Apple Wallet بنجاح!',
      onlinePaymentsEnabled: 'تم تفعيل الدفع عبر الإنترنت لهذه البطاقة.',
      onlinePaymentsDisabled: 'تم إلغاء تفعيل الدفع عبر الإنترنت لهذه البطاقة.',

      // Top Up Card Screen
      topUpCard: 'شحن البطاقة',
      selectCard: 'اختيار البطاقة',
      myDigitalCard: 'بطاقتي الرقمية',
      card: 'البطاقة',
      quickAmounts: 'مبالغ سريعة',
      topUpAmount: 'مبلغ الشحن',
      newBalance: 'الرصيد الجديد',
      topUpNow: 'شحن الآن',
      topUpSuccessful: 'تم الشحن بنجاح!',
      transactionSummary: 'ملخص المعاملة',

      // Recurring Payments Screen
      addNewRecurringPayment: 'إضافة دفعة متكررة جديدة',
      activeRecurringPayments: 'الدفعات المتكررة النشطة',
      nextPayment: 'الدفعة التالية',
      edit: 'تعديل',
      editPayment: 'تعديل الدفع',
      noRecurringPayments: 'لا توجد دفعات متكررة مجدولة',
      addFirstRecurringPayment: 'أضف أول دفعة متكررة للبدء',
      totalMonthlyPayments: 'إجمالي الدفعات الشهرية',
      activePayments: 'الدفعات النشطة',

      // Savings Goals Screen
      createNewGoal: 'إنشاء هدف جديد',
      addFunds: 'إضافة أموال',
      editGoal: 'تعديل الهدف',
      vacationFund: 'صندوق العطلة',
      newCar: 'سيارة جديدة',
      emergencyFund: 'صندوق الطوارئ',
      totalSaved: 'إجمالي المدخر',
      of: 'من',
      savingsGoal: 'هدف الادخار',
      completed: 'مكتمل',
      remaining: 'المتبقي',
      progress: 'التقدم',
      noSavingsGoals: 'لم يتم إنشاء أهداف ادخار بعد',
      createFirstGoal: 'أنشئ أول هدف ادخار للبدء',
      
      // Presentation Box Titles
  firstTimeUserJourney: 'رحلة المستخدم الجديد: الإعداد والمصادقة',
  mainAppExperience: 'تجربة التطبيق الرئيسية (للمستخدم المسجل)',
  premiumAppExperience: 'تجربة التطبيق الرئيسية (الترقية المميزة)'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false // React already safes from XSS
    }
  });

// Add direction detection function
i18n.dir = () => {
  return i18n.language === 'ar' ? 'rtl' : 'ltr';
};

export default i18n;
