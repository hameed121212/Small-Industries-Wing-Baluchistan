/* ===================================================================
   SMALL INDUSTRIES WING BALOCHISTAN - CORE APPLICATION ENGINE
   Government of Balochistan | Directorate of Small Industries
   =================================================================== */

// Global state for simple file attachments in e-filing
let selectedEfileAttachments = [];

// Default Admin Password (stored securely in localStorage)
const DEFAULT_ADMIN_PASSWORD = "admin123";

// ===================================================================
// INITIAL SAMPLE DATA (CLEAN FINANCIAL DATA / ALLOWANCES)
// ===================================================================
const INITIAL_TRAINEES = [
  {
    token: "SIW-TR-2026-101",
    fullName: "Bibi Mehrin Baloch",
    fatherName: "Master Abdul Sattar",
    cnic: "54400-1982736-2",
    gender: "Female",
    dob: "2003-04-12",
    phone: "03337890123",
    bankName: "National Bank of Pakistan (NBP)",
    accountNo: "0010045612349012",
    vendorNo: "VR-304912",
    district: "Quetta",
    center: "[QA7368] Tailoring Cum Knitting Centre for Women, Quetta",
    course: "Tailoring & Knitting",
    shift: "Morning (08:30 AM - 01:30 PM)",
    qualification: "Intermediate (F.A / F.Sc)",
    address: "Kasi Road, Mohallah Faizabad, Quetta",
    status: "Approved",
    rejectionReason: "",
    appliedDate: "2026-09-12"
  },
  {
    token: "SIW-TR-2026-102",
    fullName: "Zahida Parveen",
    fatherName: "Malik Noor Ahmed",
    cnic: "54400-2233445-6",
    gender: "Female",
    dob: "2002-11-20",
    phone: "03328901234",
    bankName: "Bank of Khyber (BOK)",
    accountNo: "0010099887766554",
    vendorNo: "VR-304913",
    district: "Quetta",
    center: "[QA7368] Tailoring Cum Knitting Centre for Women, Quetta",
    course: "Tailoring & Knitting",
    shift: "Morning (08:30 AM - 01:30 PM)",
    qualification: "Matriculation (SSC)",
    address: "Smungli Road, Quetta",
    status: "Approved",
    rejectionReason: "",
    appliedDate: "2026-09-14"
  },
  {
    token: "SIW-TR-2026-103",
    fullName: "Zubair Ahmed Kakar",
    fatherName: "Malik Abdul Baqi",
    cnic: "54302-9988776-5",
    gender: "Male",
    dob: "2000-07-30",
    phone: "03314567890",
    bankName: "National Bank of Pakistan (NBP)",
    accountNo: "0010078945612301",
    vendorNo: "VR-312904",
    district: "Quetta",
    center: "[QA7203] Carpet Training Centre Killi Sirki, Quetta",
    course: "Carpet Training",
    shift: "Morning (08:30 AM - 01:30 PM)",
    qualification: "Matriculation (SSC)",
    address: "Sirki Road, Near Small Industrial Estate Quetta",
    status: "Approved",
    rejectionReason: "",
    appliedDate: "2026-09-28"
  },
  {
    token: "SIW-TR-2026-104",
    fullName: "Muhammad Asim Mengal",
    fatherName: "Haji Ghulam Sarwar",
    cnic: "54201-8374625-1",
    gender: "Male",
    dob: "2002-05-14",
    phone: "03458765432",
    bankName: "Bank of Khyber (BOK)",
    accountNo: "0020087654321098",
    vendorNo: "VR-308195",
    district: "Khuzdar",
    center: "[KR7024] Carpet Training Centre Khuzdar",
    course: "Carpet Training",
    shift: "Morning (08:30 AM - 01:30 PM)",
    qualification: "Matriculation (SSC)",
    address: "Main Bazar Wadh, District Khuzdar",
    status: "Under Scrutiny",
    rejectionReason: "",
    appliedDate: "2026-09-15"
  },
  {
    token: "SIW-TR-2026-105",
    fullName: "Bibi Saira Jamali",
    fatherName: "Mir Dost Muhammad",
    cnic: "54101-7788990-2",
    gender: "Female",
    dob: "1988-03-10",
    phone: "03139876543",
    bankName: "Habib Bank Limited (HBL)",
    accountNo: "0012349876543210",
    vendorNo: "VR-309110",
    district: "Quetta",
    center: "[QA7213] Tailoring/Knitting Centre Killi Deeba, Quetta",
    course: "Tailoring & Knitting",
    shift: "Afternoon (02:00 PM - 06:00 PM)",
    qualification: "Middle (8th Grade)",
    address: "Killi Deeba, Quetta",
    status: "Rejected",
    rejectionReason: "Age limit exceeded (Candidate age 38 years exceeds maximum prescribed eligibility ceiling of 35 years)",
    appliedDate: "2026-09-18"
  },
  {
    token: "SIW-TR-2026-106",
    fullName: "Shahmeer Rind",
    fatherName: "Master Rehmatullah",
    cnic: "51301-4455667-1",
    gender: "Male",
    dob: "2001-11-03",
    phone: "03001234567",
    bankName: "Habib Bank Limited (HBL)",
    accountNo: "PK36HABB00012345678901",
    vendorNo: "VR-310482",
    district: "Turbat / Kech",
    center: "[TB7056] Tailoring Cum Knitting Centre Kech-1",
    course: "Tailoring & Knitting",
    shift: "Afternoon (02:00 PM - 06:00 PM)",
    qualification: "Diploma (DAE)",
    address: "Absor Road, Turbat",
    status: "Approved",
    rejectionReason: "",
    appliedDate: "2026-09-20"
  }
];

// INITIAL SAMPLE DATA FOR ESTATE OFFICE SIRKI ROAD QUETTA ONLY
const INITIAL_ESTATES = [
  {
    token: "SIW-EST-2026-301",
    companyName: "Bolan Marble Finishing & Onyx Carving Unit",
    ownerName: "Haji Ghulam Nabi Kakar",
    cnic: "54400-5544332-1",
    ntn: "8472910-4",
    phone: "03018273645",
    email: "bolanmarble.quetta@gmail.com",
    estateName: "Small Industrial Estate, Sirki Road, Quetta",
    plotSize: "1.0 Acre (4,840 Sq. Yards - Processing Unit)",
    industryCategory: "Marble Cutting & Granite Finishing",
    investment: 35,
    employment: 45,
    powerWater: "100 kW Load, 3,000 Gallons/Day",
    brief: "Modern multi-blade diamond gangsaw unit for cutting and polishing Balochistan marble blocks into finished tiles.",
    status: "Provisional Allotment Issued",
    appliedDate: "2026-08-20"
  },
  {
    token: "SIW-EST-2026-302",
    companyName: "Chiltan Fresh Fruit Cold Storage & Logistics",
    ownerName: "Nawabzada Mir Tariq Zehri",
    cnic: "54400-1122334-5",
    ntn: "9182734-2",
    phone: "03219876543",
    email: "tariq.chiltancold@quetta.pk",
    estateName: "Small Industrial Estate, Sirki Road, Quetta",
    plotSize: "0.5 Acre (2,420 Sq. Yards)",
    industryCategory: "Cold Storage & Fruit Preservation",
    investment: 28,
    employment: 30,
    powerWater: "120 kW Load, Commercial Water",
    brief: "Controlled atmosphere cold storage chamber for apples, cherries, and dry fruits preservation on Sirki Road.",
    status: "Site Inspection Scheduled",
    appliedDate: "2026-09-08"
  },
  {
    token: "SIW-EST-2026-303",
    companyName: "Quetta Handloom & Wool Processing Cluster",
    ownerName: "Syed Abdul Qadir Agha",
    cnic: "54400-7788990-3",
    ntn: "4567890-1",
    phone: "03332145678",
    email: "qadir.woolcraft@yahoo.com",
    estateName: "Small Industrial Estate, Sirki Road, Quetta",
    plotSize: "1,000 Sq. Yards (Standard SME)",
    industryCategory: "Carpet Weaving & Textile Handicrafts",
    investment: 12,
    employment: 25,
    powerWater: "30 kW Load, Gas Heating",
    brief: "Wool spinning, natural dye vat facility, and commercial traditional carpet weaving looms for cottage export.",
    status: "Under Review",
    appliedDate: "2026-09-24"
  }
];

// INITIAL SAMPLE DATA FOR MULTI-DESK E-FILING (ADDRESSED-ONLY PRIVACY)
const INITIAL_EFILES = [
  {
    token: "SIW-EF-2026-401",
    senderSide: "District Center Incharge",
    recipientSide: "Directorate (HQ) Quetta",
    centerName: "[QA7368] Tailoring Cum Knitting Centre for Women, Quetta",
    centerCode: "QA7368",
    inchargeName: "Madam Naseem Akhtar",
    designation: "Center Incharge / Supervisor",
    phone: "03337912345",
    category: "Trainee Monthly Attendance & Account Bill",
    urgency: "Urgent",
    subject: "Monthly Verified Vendor Attendance Register for 35 Trainees (Sep 2026)",
    details: "Submitting verified biometric attendance records and AG Balochistan Vendor account sheets for 35 enrolled trainees in Tailoring & Knitting trade for onward Directorate approval.",
    attachments: [
      { name: "Vendor_Attendance_QA7368.pdf", size: "340 KB", icon: "fa-file-pdf" },
      { name: "Bank_Account_Verification_Cert.jpg", size: "185 KB", icon: "fa-file-image" }
    ],
    status: "Under Scrutiny",
    fileStage: "Received at Directorate (HQ) Quetta",
    remarks: "Examined at SIW Head Quarter Quetta. Verified with zero duplicate vendor IDs.",
    appliedDate: "2026-09-28"
  },
  {
    token: "SIW-EF-2026-402",
    senderSide: "Directorate (HQ) Quetta",
    recipientSide: "B-TEVTA Balochistan",
    centerName: "Headquarter Directorate Quetta",
    centerCode: "HQ-QTA",
    inchargeName: "Director Small Industries",
    designation: "Director Small Industries",
    phone: "0819201845",
    category: "B-TEVTA Examination & Certification",
    urgency: "Routine",
    subject: "Forwarding Final Examination Schedule & Trade Certification Dossiers Batch 2025-26",
    details: "Directorate transmitting trade completion dossiers across 32 training centers to B-TEVTA for scheduling external assessors and issuing government trade diplomas.",
    attachments: [
      { name: "Batch_2025_Assessor_Schedule.xlsx", size: "420 KB", icon: "fa-file-excel" }
    ],
    status: "Forwarded to B-TEVTA",
    fileStage: "Under Review at B-TEVTA Head Office",
    remarks: "Forwarded by Director SIW HQ Quetta to Managing Director (MD) B-TEVTA.",
    appliedDate: "2026-09-18"
  },
  {
    token: "SIW-EF-2026-403",
    senderSide: "Directorate (HQ) Quetta",
    recipientSide: "Labour & Manpower Department",
    centerName: "Headquarter Directorate Quetta",
    centerCode: "HQ-QTA",
    inchargeName: "Director Small Industries",
    designation: "Director Small Industries",
    phone: "0819201845",
    category: "Raw Materials & Machinery Requisition",
    urgency: "Immediate Priority",
    subject: "Summary for Secretary: Special Machinery Replacement Grant for Kalat and Loralai Centers",
    details: "Submitting formal department summary to Secretary Labour & Manpower for sanctioning modern computerized lockstitch machinery and raw yarn under the Chief Minister Artisan Support Program.",
    attachments: [
      { name: "Summary_For_Secretary_Labour.pdf", size: "510 KB", icon: "fa-file-pdf" }
    ],
    status: "Sanction Issued",
    fileStage: "Approved by Secretary Labour & Manpower",
    remarks: "Sanction order No. SEC-LBR-847 approved by Secretary. Procurement allocated.",
    appliedDate: "2026-09-05"
  },
  {
    token: "SIW-EF-2026-404",
    senderSide: "B-TEVTA Balochistan",
    recipientSide: "Directorate (HQ) Quetta",
    centerName: "B-TEVTA Academic Wing",
    centerCode: "BTEVTA-AC",
    inchargeName: "Academic Director B-TEVTA",
    designation: "Academic Director",
    phone: "0819202100",
    category: "Executive Directive / Notification",
    urgency: "Routine",
    subject: "Revised Standard Operating Procedures (SOPs) for Technical Trade Assessment",
    details: "B-TEVTA issuing standardized competency assessment framework for all vocational and handicraft training centers across Balochistan.",
    attachments: [
      { name: "BTEVTA_Assessment_SOPs_2026.pdf", size: "620 KB", icon: "fa-file-pdf" }
    ],
    status: "Approved",
    fileStage: "Dispatched to Directorate HQ Quetta",
    remarks: "Received and circulated to all District Training Centers.",
    appliedDate: "2026-09-22"
  }
];

// INITIAL LEADERSHIP PROFILES
const INITIAL_LEADERSHIP = [
  {
    id: 1,
    name: "Tariq Zehri",
    title: "Secretary, Labour & Manpower Department",
    department: "Government of Balochistan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    quote: "Our utmost priority is uplifting Balochistan's human resource through accredited craftsmanship, transparent governance, and robust industrial linkages."
  },
  {
    id: 2,
    name: "Engr. Noor Muhammad Mengal",
    title: "Managing Director (MD)",
    department: "Balochistan Technical Education & Vocational Training Authority (B-TEVTA)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
    quote: "Harmonizing technical curriculum with international market standards ensures our youth from Gwadar to Zhob graduate with dignity and self-sufficiency."
  },
  {
    id: 3,
    name: "Sardar Abdul Wahab Kakar",
    title: "Director, Small Industries Wing (SIW)",
    department: "Directorate of Industries & Commerce, Balochistan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
    quote: "Through our 130+ centers and the Small Industrial Estate Sirki Road Quetta, we are nurturing micro-enterprises and preserving heritage crafts."
  }
];

// INITIAL ACHIEVEMENTS (PHOTOS & VIDEOS)
const INITIAL_ACHIEVEMENTS = [
  {
    id: 1,
    title: "Annual Artisan Expo & Handicraft Showcase Quetta",
    type: "photo",
    mediaUrl: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&auto=format&fit=crop&q=80",
    category: "Provincial Exhibition",
    date: "August 2026",
    description: "Over 200 female artisans from Mastung, Turbat, and Quetta exhibited world-class Balochi traditional embroidery and carpet weaving."
  },
  {
    id: 2,
    title: "Computerized Gangsaw Induction at Sirki Road Industrial Estate",
    type: "video",
    mediaUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "Industrial Infrastructure",
    date: "September 2026",
    description: "Inauguration of modern diamond marble cutting line on Sirki Road Quetta, boosting daily stone finishing output by 300%."
  },
  {
    id: 3,
    title: "Vocational Toolkits & Certificate Distribution Convocation",
    type: "photo",
    mediaUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
    category: "Graduation Convocation",
    date: "July 2026",
    description: "Distribution of 500 complete trade toolkits and B-TEVTA accredited certificates to graduating trainees at Quetta TTC."
  }
];

// INITIAL PUBLIC NOTICES
const INITIAL_NOTICES = [
  {
    id: 1,
    title: "Zero Tolerance on Duplicate CNIC, Bank & Vendor Numbers",
    category: "Admissions",
    content: "All Center Incharges are notified that trainee portals strictly prevent duplicate CNIC, Bank Account, or AG Vendor IDs.",
    date: "2026-09-25"
  },
  {
    id: 2,
    title: "Estate Office Sirki Road Quetta Plot Desk",
    category: "Estate Office",
    content: "Applications for industrial plot lease renewal and vacant allotment at Small Industrial Estate Sirki Road Quetta are open online.",
    date: "2026-09-20"
  },
  {
    id: 3,
    title: "Multi-Desk E-Filing Movement Activated",
    category: "Incharge E-Filing",
    content: "Centers must route files strictly to Directorate HQ Quetta. Despatches between Directorate, B-TEVTA, and Labour Department are live.",
    date: "2026-09-15"
  },
  {
    id: 4,
    title: "B-TEVTA Curriculum Harmonization",
    category: "B-TEVTA / Labour",
    content: "Balochistan Technical Education Authority announces revised competency-based curriculum across 32 small industries trades.",
    date: "2026-09-10"
  }
];

// ===================================================================
// UNIVERSAL MULTI-DEVICE CLOUD REPLICATION ENGINE
// Enables real-time synchronization between phones, tablets, and PCs
// ===================================================================
class SIWCloudSync {
  static DEFAULT_BIN_URL = 'https://extendsclass.com/api/json-storage/bin/adcaccb';
  static _pushTimeout = null;
  static _isSyncing = false;
  static _lastSyncTime = null;

  static getEndpoint() {
    const custom = localStorage.getItem('siw_cloud_endpoint');
    if (custom && custom !== this.DEFAULT_BIN_URL && custom.trim() !== '') return custom.trim();
    if (typeof window !== 'undefined' && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
      return '/api/sync';
    }
    return 'https://small-industries-wing-balochistan.vercel.app/api/sync';
  }

  static setEndpoint(url) {
    if (!url || !url.trim()) {
      localStorage.removeItem('siw_cloud_endpoint');
    } else {
      localStorage.setItem('siw_cloud_endpoint', url.trim());
    }
  }

  static async init() {
    console.log('[SIWCloudSync] Initializing universal multi-device cloud sync...');
    // Initial authoritative pull to get latest server records
    await this.pull(true);

    // Periodic sync heartbeat every 6 seconds
    setInterval(() => {
      this.pull(true);
    }, 6000);

    // Sync when user returns to this browser tab or window
    window.addEventListener('focus', () => {
      this.pull(true);
    });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.pull(true);
      }
    });
    window.addEventListener('online', () => {
      this.pull(true);
    });
  }

  static updateUIStatus(state, msg) {
    const badge = document.getElementById('cloudSyncStatusBadge');
    const liveBadge = document.getElementById('cloudSyncLiveBadge');
    const timestampElem = document.getElementById('cloudSyncLastTimestamp');
    const traineeCountElem = document.getElementById('cloudSyncTraineeCount');
    const tabCountCloud = document.getElementById('tabCountCloud');

    const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    if (timestampElem && this._lastSyncTime) {
      timestampElem.textContent = nowStr;
    }

    const localTrainees = SIWStorage.getTrainees();
    if (traineeCountElem) {
      traineeCountElem.textContent = `${localTrainees.length} Active Records`;
    }

    if (badge) {
      if (state === 'syncing') {
        badge.className = 'pill-badge pill-blue';
        badge.innerHTML = `<i class="fa-solid fa-arrows-rotate fa-spin"></i> Syncing Cloud...`;
      } else if (state === 'success') {
        badge.className = 'pill-badge pill-green';
        badge.innerHTML = `<i class="fa-solid fa-cloud"></i> Cloud DB: Live Synced`;
      } else if (state === 'offline' || state === 'error') {
        badge.className = 'pill-badge pill-orange';
        badge.innerHTML = `<i class="fa-solid fa-cloud-bolt"></i> Local Cache (Offline)`;
      }
    }

    if (liveBadge) {
      if (state === 'syncing') {
        liveBadge.textContent = 'Syncing with cloud master...';
        liveBadge.style.color = '#2563eb';
      } else if (state === 'success') {
        liveBadge.textContent = `All Connected Devices Synced (${nowStr})`;
        liveBadge.style.color = '#15803d';
      } else if (state === 'offline' || state === 'error') {
        liveBadge.textContent = msg || 'Offline mode active (Local storage cached)';
        liveBadge.style.color = '#c2410c';
      }
    }

    if (tabCountCloud) {
      tabCountCloud.textContent = state === 'success' ? 'Live' : (state === 'syncing' ? 'Syncing' : 'Local');
    }
  }

  static async fetchCloudData() {
    const endpoint = this.getEndpoint();
    // 1. Try primary endpoint (/api/sync)
    try {
      const res = await fetch(endpoint, {
        method: 'GET',
        cache: 'no-store',
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        const data = await res.json();
        if (data && typeof data === 'object') return data;
      }
    } catch (e) {
      console.warn('[SIWCloudSync] Primary endpoint fetch failed, trying direct cloud fallback:', e);
    }

    // 2. Direct cloud bin fallback
    const fallbackRes = await fetch(this.DEFAULT_BIN_URL, {
      method: 'GET',
      cache: 'no-store',
      headers: { 'Accept': 'application/json' }
    });
    if (!fallbackRes.ok) {
      throw new Error(`Cloud DB responded with status ${fallbackRes.status}`);
    }
    return await fallbackRes.json();
  }

  static async pull(silent = false) {
    if (this._isSyncing) return null;
    this._isSyncing = true;
    if (!silent) this.updateUIStatus('syncing');

    try {
      const cloudData = await this.fetchCloudData();
      if (!cloudData || typeof cloudData !== 'object') {
        throw new Error('Invalid cloud database payload');
      }

      let hadChanges = false;

      // 1. Sync Admin Password
      if (cloudData.adminPassword && typeof cloudData.adminPassword === 'string') {
        const currentLocalPwd = localStorage.getItem('siw_admin_password') || DEFAULT_ADMIN_PASSWORD;
        if (cloudData.adminPassword !== currentLocalPwd) {
          localStorage.setItem('siw_admin_password', cloudData.adminPassword);
          console.log('[SIWCloudSync] Admin password synced from cloud master');
          hadChanges = true;
        }
      }

      // 2. Merge Trainees (Union by token to preserve entries from all devices)
      if (Array.isArray(cloudData.trainees)) {
        const localTrainees = SIWStorage.getTrainees();
        const localTokens = new Set(localTrainees.map(t => t.token));
        const cloudTokens = new Set(cloudData.trainees.map(t => t.token));

        let mergedTrainees = [...cloudData.trainees];
        // If there are local trainees created while offline that aren't yet in the cloud, keep them!
        let hasLocalOnly = false;
        localTrainees.forEach(localT => {
          if (!cloudTokens.has(localT.token)) {
            mergedTrainees.unshift(localT);
            hasLocalOnly = true;
          }
        });

        // Check if merged is different from local
        if (mergedTrainees.length !== localTrainees.length || hasLocalOnly || JSON.stringify(mergedTrainees) !== JSON.stringify(localTrainees)) {
          localStorage.setItem('siw_trainees_v3', JSON.stringify(mergedTrainees));
          hadChanges = true;
          // If we had local-only trainees, schedule a push to update the cloud so other devices get them
          if (hasLocalOnly) {
            this.schedulePush(1500);
          }
        }
      }

      // 3. Merge Estates
      if (Array.isArray(cloudData.estates)) {
        const localEstates = SIWStorage.getEstates();
        if (JSON.stringify(cloudData.estates) !== JSON.stringify(localEstates)) {
          localStorage.setItem('siw_estates_v3', JSON.stringify(cloudData.estates));
          hadChanges = true;
        }
      }

      // 4. Merge Efiles
      if (Array.isArray(cloudData.efiles)) {
        const localEfiles = SIWStorage.getEfiles();
        const cloudTokens = new Set(cloudData.efiles.map(f => f.token));
        let mergedEfiles = [...cloudData.efiles];
        let hasLocalOnlyEfiles = false;
        localEfiles.forEach(f => {
          if (!cloudTokens.has(f.token)) {
            mergedEfiles.unshift(f);
            hasLocalOnlyEfiles = true;
          }
        });
        if (mergedEfiles.length !== localEfiles.length || hasLocalOnlyEfiles || JSON.stringify(mergedEfiles) !== JSON.stringify(localEfiles)) {
          localStorage.setItem('siw_efiles_v3', JSON.stringify(mergedEfiles));
          hadChanges = true;
          if (hasLocalOnlyEfiles) this.schedulePush(2000);
        }
      }

      // 5. Merge Notices
      if (Array.isArray(cloudData.notices)) {
        const localNotices = SIWStorage.getNotices();
        if (JSON.stringify(cloudData.notices) !== JSON.stringify(localNotices)) {
          localStorage.setItem('siw_notices_v3', JSON.stringify(cloudData.notices));
          hadChanges = true;
        }
      }

      // 6. Merge Leadership & Achievements
      if (Array.isArray(cloudData.leadership)) {
        const localLead = SIWStorage.getLeadership();
        if (JSON.stringify(cloudData.leadership) !== JSON.stringify(localLead)) {
          localStorage.setItem('siw_leadership_v3', JSON.stringify(cloudData.leadership));
          hadChanges = true;
        }
      }
      if (Array.isArray(cloudData.achievements)) {
        const localAch = SIWStorage.getAchievements();
        if (JSON.stringify(cloudData.achievements) !== JSON.stringify(localAch)) {
          localStorage.setItem('siw_achievements_v3', JSON.stringify(cloudData.achievements));
          hadChanges = true;
        }
      }

      this._lastSyncTime = new Date();
      this.updateUIStatus('success');

      // If data changed, re-render visible admin tables and KPIs
      if (hadChanges) {
        if (typeof refreshAdminDashboard === 'function') refreshAdminDashboard();
        if (typeof renderAdminTraineesTable === 'function') renderAdminTraineesTable();
        if (typeof renderAdminEstatesTable === 'function') renderAdminEstatesTable();
        if (typeof renderAdminEfilesTable === 'function') renderAdminEfilesTable();
        if (typeof renderAdminNoticesList === 'function') renderAdminNoticesList();
        if (typeof refreshHeaderBadges === 'function') refreshHeaderBadges();
        if (typeof renderPublicTraineesList === 'function') renderPublicTraineesList('all');
      }

      return cloudData;
    } catch (err) {
      console.warn('[SIWCloudSync] Pull warning:', err.message);
      this.updateUIStatus('offline', err.message);
      return null;
    } finally {
      this._isSyncing = false;
    }
  }

  static schedulePush(extraPayload = {}, delay = 150) {
    if (this._pushTimeout) clearTimeout(this._pushTimeout);
    this._pushTimeout = setTimeout(() => {
      this.push(extraPayload);
    }, delay);
  }

  static async push(extraPayload = {}) {
    const endpoint = this.getEndpoint();
    this.updateUIStatus('syncing');

    try {
      const localTrainees = SIWStorage.getTrainees();

      const payload = {
        adminPassword: SIWStorage.getAdminPassword(),
        lastUpdated: new Date().toISOString(),
        trainees: localTrainees,
        estates: SIWStorage.getEstates(),
        efiles: SIWStorage.getEfiles(),
        notices: SIWStorage.getNotices(),
        leadership: SIWStorage.getLeadership(),
        achievements: SIWStorage.getAchievements(),
        ...extraPayload
      };

      let uploaded = false;
      let serverData = null;

      // 1. Send to serverless endpoint /api/sync
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          serverData = await res.json();
          uploaded = true;
        }
      } catch (err) {
        console.warn('[SIWCloudSync] /api/sync POST error, trying direct fallback:', err);
      }

      // 2. Direct fallback using text/plain (avoids browser CORS preflight blocks)
      if (!uploaded) {
        try {
          const directRes = await fetch(this.DEFAULT_BIN_URL, {
            method: 'PUT',
            headers: {
              'Content-Type': 'text/plain'
            },
            body: JSON.stringify(payload)
          });
          if (directRes.ok) {
            serverData = await directRes.json();
            uploaded = true;
          }
        } catch (e) {
          console.warn('[SIWCloudSync] Direct upload fallback error:', e);
        }
      }

      // If server returned authoritative merged dataset, update local cache immediately
      if (serverData && typeof serverData === 'object') {
        if (Array.isArray(serverData.trainees)) {
          localStorage.setItem('siw_trainees_v3', JSON.stringify(serverData.trainees));
        }
        if (serverData.adminPassword) {
          localStorage.setItem('siw_admin_password', serverData.adminPassword);
        }
      }

      this._lastSyncTime = new Date();
      this.updateUIStatus('success');

      if (typeof refreshAdminDashboard === 'function') refreshAdminDashboard();
      if (typeof renderAdminTraineesTable === 'function') renderAdminTraineesTable();
      if (typeof renderPublicTraineesList === 'function') renderPublicTraineesList('all');

      return uploaded;
    } catch (err) {
      console.error('[SIWCloudSync] Push error:', err);
      this.updateUIStatus('offline', err.message);
      return false;
    }
  }

  static async syncBothWays(silent = false) {
    if (!silent) this.updateUIStatus('syncing');
    await this.pull(silent);
  }

  static async forcePush() {
    showToast('Cloud Database', 'Uploading all local records to cloud master...', 'info');
    const success = await this.push();
    if (success) {
      showToast('Replicated', 'Local records successfully uploaded to cloud master!', 'success');
    } else {
      showToast('Sync Warning', 'Unable to reach cloud database. Working in local offline cache.', 'warning');
    }
  }

  static async forcePull() {
    showToast('Cloud Database', 'Fetching latest records from cloud master...', 'info');
    const data = await this.pull(false);
    if (data) {
      showToast('Updated', `Downloaded ${data.trainees ? data.trainees.length : 0} master trainee records from cloud.`, 'success');
    } else {
      showToast('Sync Warning', 'Unable to reach cloud database. Local cache preserved.', 'warning');
    }
  }
}

// ===================================================================
// STORAGE MANAGER CLASS (HYBRID: LOCAL CACHE + CLOUD SYNC)
// ===================================================================
class SIWStorage {
  // Trainees
  static getTrainees() {
    const data = localStorage.getItem('siw_trainees_v3');
    if (!data) {
      localStorage.setItem('siw_trainees_v3', JSON.stringify(INITIAL_TRAINEES));
      return INITIAL_TRAINEES;
    }
    return JSON.parse(data);
  }

  static saveTrainee(trainee) {
    const trainees = this.getTrainees();
    const filtered = trainees.filter(t => t.token !== trainee.token);
    filtered.unshift(trainee);
    localStorage.setItem('siw_trainees_v3', JSON.stringify(filtered));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.push();
    return trainee;
  }

  static updateTrainee(token, fields) {
    const trainees = this.getTrainees();
    const idx = trainees.findIndex(t => t.token === token);
    if (idx !== -1) {
      trainees[idx] = { ...trainees[idx], ...fields };
      localStorage.setItem('siw_trainees_v3', JSON.stringify(trainees));
      if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.push();
      return trainees[idx];
    }
    return null;
  }

  static deleteTrainee(token) {
    let trainees = this.getTrainees();
    trainees = trainees.filter(t => t.token !== token);
    localStorage.setItem('siw_trainees_v3', JSON.stringify(trainees));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.push({ deleteTraineeToken: token });
  }

  // Estates (Sirki Road Quetta)
  static getEstates() {
    const data = localStorage.getItem('siw_estates_v3');
    if (!data) {
      localStorage.setItem('siw_estates_v3', JSON.stringify(INITIAL_ESTATES));
      return INITIAL_ESTATES;
    }
    return JSON.parse(data);
  }

  static saveEstate(estate) {
    const estates = this.getEstates();
    estates.unshift(estate);
    localStorage.setItem('siw_estates_v3', JSON.stringify(estates));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
    return estate;
  }

  static updateEstate(token, fields) {
    const estates = this.getEstates();
    const idx = estates.findIndex(e => e.token === token);
    if (idx !== -1) {
      estates[idx] = { ...estates[idx], ...fields };
      localStorage.setItem('siw_estates_v3', JSON.stringify(estates));
      if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
      return estates[idx];
    }
    return null;
  }

  static deleteEstate(token) {
    let estates = this.getEstates();
    estates = estates.filter(e => e.token !== token);
    localStorage.setItem('siw_estates_v3', JSON.stringify(estates));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
  }

  // E-Filing
  static getEfiles() {
    const data = localStorage.getItem('siw_efiles_v3');
    if (!data) {
      localStorage.setItem('siw_efiles_v3', JSON.stringify(INITIAL_EFILES));
      return INITIAL_EFILES;
    }
    return JSON.parse(data);
  }

  static saveEfile(efile) {
    const efiles = this.getEfiles();
    efiles.unshift(efile);
    localStorage.setItem('siw_efiles_v3', JSON.stringify(efiles));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
    return efile;
  }

  static updateEfile(token, fields) {
    const efiles = this.getEfiles();
    const idx = efiles.findIndex(f => f.token === token);
    if (idx !== -1) {
      efiles[idx] = { ...efiles[idx], ...fields };
      localStorage.setItem('siw_efiles_v3', JSON.stringify(efiles));
      if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
      return efiles[idx];
    }
    return null;
  }

  // Leadership & Media
  static getLeadership() {
    const data = localStorage.getItem('siw_leadership_v3');
    if (!data) {
      localStorage.setItem('siw_leadership_v3', JSON.stringify(INITIAL_LEADERSHIP));
      return INITIAL_LEADERSHIP;
    }
    return JSON.parse(data);
  }

  static saveLeadership(leader) {
    const leaders = this.getLeadership();
    leaders.push(leader);
    localStorage.setItem('siw_leadership_v3', JSON.stringify(leaders));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
    return leader;
  }

  static updateLeadership(id, fields) {
    const leaders = this.getLeadership();
    const idx = leaders.findIndex(l => l.id == id);
    if (idx !== -1) {
      leaders[idx] = { ...leaders[idx], ...fields };
      localStorage.setItem('siw_leadership_v3', JSON.stringify(leaders));
      if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
      return leaders[idx];
    }
    return null;
  }

  static deleteLeadership(id) {
    let leaders = this.getLeadership();
    leaders = leaders.filter(l => l.id != id);
    localStorage.setItem('siw_leadership_v3', JSON.stringify(leaders));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
  }

  static getAchievements() {
    const data = localStorage.getItem('siw_achievements_v3');
    if (!data) {
      localStorage.setItem('siw_achievements_v3', JSON.stringify(INITIAL_ACHIEVEMENTS));
      return INITIAL_ACHIEVEMENTS;
    }
    return JSON.parse(data);
  }

  static saveAchievement(ach) {
    const achs = this.getAchievements();
    achs.unshift(ach);
    localStorage.setItem('siw_achievements_v3', JSON.stringify(achs));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
    return ach;
  }

  static deleteAchievement(id) {
    let achs = this.getAchievements();
    achs = achs.filter(a => a.id != id);
    localStorage.setItem('siw_achievements_v3', JSON.stringify(achs));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
  }

  static updateAchievement(id, fields) {
    const achs = this.getAchievements();
    const idx = achs.findIndex(a => a.id == id);
    if (idx !== -1) {
      achs[idx] = { ...achs[idx], ...fields };
      localStorage.setItem('siw_achievements_v3', JSON.stringify(achs));
      if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
      return achs[idx];
    }
    return null;
  }

  // Centers (Using window.saveCentersDatabase)
  static getCenters() {
    return window.CENTERS_DATABASE || [];
  }

  static addCenter(center) {
    const list = this.getCenters();
    list.unshift(center);
    window.saveCentersDatabase(list);
    return center;
  }

  static updateCenter(code, fields) {
    const list = this.getCenters();
    const idx = list.findIndex(c => c.code === code);
    if (idx !== -1) {
      list[idx] = { ...list[idx], ...fields };
      window.saveCentersDatabase(list);
      return list[idx];
    }
    return null;
  }

  static deleteCenter(code) {
    let list = this.getCenters();
    list = list.filter(c => c.code !== code);
    window.saveCentersDatabase(list);
  }

  // Notices
  static getNotices() {
    const data = localStorage.getItem('siw_notices_v3');
    if (!data) {
      localStorage.setItem('siw_notices_v3', JSON.stringify(INITIAL_NOTICES));
      return INITIAL_NOTICES;
    }
    return JSON.parse(data);
  }

  static saveNotice(notice) {
    const notices = this.getNotices();
    notices.unshift(notice);
    localStorage.setItem('siw_notices_v3', JSON.stringify(notices));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
    return notice;
  }

  static deleteNotice(id) {
    let notices = this.getNotices();
    notices = notices.filter(n => n.id != id);
    localStorage.setItem('siw_notices_v3', JSON.stringify(notices));
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.schedulePush();
  }

  // Admin Auth & Password
  static isAdminLoggedIn() {
    return localStorage.getItem('siw_admin_auth') === 'true';
  }

  static setAdminLoggedIn(status) {
    localStorage.setItem('siw_admin_auth', status ? 'true' : 'false');
  }

  static getAdminPassword() {
    return localStorage.getItem('siw_admin_password') || DEFAULT_ADMIN_PASSWORD;
  }

  static setAdminPassword(newPwd) {
    localStorage.setItem('siw_admin_password', newPwd);
    if (typeof SIWCloudSync !== 'undefined') SIWCloudSync.push();
  }
}

// ===================================================================
// DOM LOAD & INITIALIZATION
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  updateLiveDate();
  setupNavigationTabs();
  checkAdminAuthState();
  refreshTicker();
  refreshHeaderBadges();

  populateDistrictDropdowns();
  populateEfilingSenderRecipient();
  renderCentersDirectory();
  renderPublicTraineesList('all');
  renderLeadershipAndAchievements();
  handleDeskViewFilterChange("Directorate (HQ) Quetta");
  renderNotificationsTable();

  handleUrlHashRouting();

  // Initialize universal multi-device cloud synchronization
  if (typeof SIWCloudSync !== 'undefined') {
    SIWCloudSync.init();
  }
});

function updateLiveDate() {
  const dateElem = document.getElementById('currentDateDisplay');
  if (dateElem) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-PK', options);
    dateElem.innerHTML = `<i class="fa-regular fa-calendar-days"></i> ${today} • Directorate HQ Quetta`;
  }
}

function handleUrlHashRouting() {
  const hash = window.location.hash.replace('#', '');
  if (hash && ['home', 'trainees', 'centers', 'estates', 'efiling', 'leadership', 'tracking', 'admin', 'notifications', 'downloads'].includes(hash)) {
    switchTab(hash);
  }
}

function setupNavigationTabs() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const tabName = item.getAttribute('data-tab');
      if (tabName) {
        e.preventDefault();
        switchTab(tabName);
      }
    });
  });

  // Global click outside to close Three Dots (⋮) dropdown
  document.addEventListener('click', (e) => {
    const container = document.getElementById('kebabContainer');
    if (container && !container.contains(e.target)) {
      closeKebabDropdown();
    }
  });
}

function switchTab(tabName, scrollTarget = null) {
  if (!tabName) return;

  // Active state on main navigation links
  document.querySelectorAll('.nav-item').forEach(link => {
    if (link.getAttribute('data-tab') === tabName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Active state on Three Dots (⋮) kebab items
  const subTabs = ['centers', 'estates', 'efiling', 'tracking', 'admin'];
  const kebabBtn = document.getElementById('kebabBtn');
  if (kebabBtn) {
    if (subTabs.includes(tabName)) {
      kebabBtn.classList.add('active-sub');
    } else {
      kebabBtn.classList.remove('active-sub');
    }
  }

  document.querySelectorAll('.kebab-item').forEach(link => {
    if (link.getAttribute('data-tab') === tabName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Switch tab pages
  document.querySelectorAll('.tab-page').forEach(page => {
    page.classList.remove('active');
  });

  const targetTab = document.getElementById(`tab-${tabName}`);
  if (targetTab) {
    targetTab.classList.add('active');
    window.location.hash = tabName;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Close Three Dots dropdown
  closeKebabDropdown();

  if (tabName === 'notifications') {
    renderNotificationsTable();
  }

  if (tabName === 'admin' || tabName === 'trainees') {
    if (typeof SIWCloudSync !== 'undefined') {
      SIWCloudSync.pull(true).then(() => {
        if (tabName === 'admin' && SIWStorage.isAdminLoggedIn()) {
          refreshAdminDashboard();
        }
        renderPublicTraineesList('all');
      });
    }
    if (tabName === 'admin' && SIWStorage.isAdminLoggedIn()) {
      refreshAdminDashboard();
    }
    if (tabName === 'trainees') {
      renderPublicTraineesList('all');
    }
  }

  if (scrollTarget) {
    setTimeout(() => {
      const el = document.querySelector(scrollTarget);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  }
}

function toggleKebabDropdown(e) {
  if (e) e.stopPropagation();
  const dropdown = document.getElementById('kebabDropdown');
  const btn = document.getElementById('kebabBtn');
  if (dropdown) {
    dropdown.classList.toggle('show');
  }
  if (btn) {
    btn.classList.toggle('active');
  }
}

function closeKebabDropdown() {
  const dropdown = document.getElementById('kebabDropdown');
  const btn = document.getElementById('kebabBtn');
  if (dropdown) {
    dropdown.classList.remove('show');
  }
  if (btn) {
    btn.classList.remove('active');
  }
}

function onKebabItemClick(tabName) {
  switchTab(tabName);
  closeKebabDropdown();
}

function refreshHeaderBadges() {
  const trainees = SIWStorage.getTrainees();
  const badgeTrainees = document.getElementById('badgeTraineesCount');
  if (badgeTrainees) {
    badgeTrainees.textContent = (1420 + trainees.length).toLocaleString();
  }

  const badgeCenters = document.getElementById('badgeCentersCount');
  if (badgeCenters) {
    badgeCenters.textContent = SIWStorage.getCenters().length;
  }
}

function refreshTicker() {
  const tickerContainer = document.getElementById('tickerItems');
  if (!tickerContainer) return;

  const notices = SIWStorage.getNotices();
  let tickerHtml = '';
  notices.forEach(n => {
    tickerHtml += `<span>• <strong>[${n.category}]</strong> ${n.title} — ${n.content}</span>`;
  });
  tickerContainer.innerHTML = tickerHtml;
}

// Format Pakistani CNIC with dashes
function formatCNIC(input) {
  let val = input.value.replace(/\D/g, '');
  if (val.length > 13) val = val.substring(0, 13);
  
  let formatted = '';
  if (val.length > 5) {
    formatted += val.substring(0, 5) + '-';
    if (val.length > 12) {
      formatted += val.substring(5, 12) + '-' + val.substring(12, 13);
    } else {
      formatted += val.substring(5);
    }
  } else {
    formatted = val;
  }
  input.value = formatted;
}

// ===================================================================
// DYNAMIC CENTERS & DISTRICTS
// ===================================================================
function getDistinctDistricts() {
  const centers = SIWStorage.getCenters();
  const districts = [...new Set(centers.map(c => c.district))];
  return districts.sort();
}

function populateDistrictDropdowns() {
  const districts = getDistinctDistricts();

  // Trainee Form District
  const trDistrict = document.getElementById('trDistrict');
  if (trDistrict) {
    trDistrict.innerHTML = '<option value="">-- Select Domicile District --</option>';
    districts.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      trDistrict.appendChild(opt);
    });
  }

  // Centers Directory Filter
  const filterDistrict = document.getElementById('centerFilterDistrict');
  if (filterDistrict) {
    filterDistrict.innerHTML = '<option value="All">All Districts / Divisions</option>';
    districts.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      filterDistrict.appendChild(opt);
    });
  }

  // Admin Trainee Filter
  const adminFilterDistrict = document.getElementById('traineeFilterDistrict');
  if (adminFilterDistrict) {
    adminFilterDistrict.innerHTML = '<option value="All">All Districts</option>';
    districts.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      adminFilterDistrict.appendChild(opt);
    });
  }

  // Admin Centers Management Filter
  const adminCenterFilterDistrict = document.getElementById('adminCenterFilterDistrict');
  if (adminCenterFilterDistrict) {
    adminCenterFilterDistrict.innerHTML = '<option value="All">All Districts</option>';
    districts.forEach(d => {
      const opt = document.createElement('option');
      opt.value = d;
      opt.textContent = d;
      adminCenterFilterDistrict.appendChild(opt);
    });
  }
}

function handleTraineeDistrictChange(district) {
  const centerSelect = document.getElementById('trCenter');
  const courseInput = document.getElementById('trCourse');
  if (!centerSelect) return;

  courseInput.value = '';
  centerSelect.innerHTML = '<option value="">-- Select Center in ' + district + ' --</option>';

  if (!district) return;
  const centers = SIWStorage.getCenters().filter(c => c.district === district);

  const functional = centers.filter(c => c.status.toLowerCase().includes('func') && !c.status.toLowerCase().includes('non'));
  const nonFunctional = centers.filter(c => c.status.toLowerCase().includes('non'));

  if (functional.length > 0) {
    const ogFunc = document.createElement('optgroup');
    ogFunc.label = `--- Functional Centers (${functional.length}) ---`;
    functional.forEach(c => {
      const opt = document.createElement('option');
      opt.value = `[${c.code}] ${c.name}`;
      opt.textContent = `[${c.code}] ${c.name} (${c.trade})`;
      opt.dataset.trade = c.trade;
      ogFunc.appendChild(opt);
    });
    centerSelect.appendChild(ogFunc);
  }

  if (nonFunctional.length > 0) {
    const ogNon = document.createElement('optgroup');
    ogNon.label = `--- Non-functional (${nonFunctional.length}) ---`;
    nonFunctional.forEach(c => {
      const opt = document.createElement('option');
      opt.value = `[${c.code}] ${c.name}`;
      opt.textContent = `[${c.code}] ${c.name} (Non-functional)`;
      opt.dataset.trade = c.trade;
      ogNon.appendChild(opt);
    });
    centerSelect.appendChild(ogNon);
  }
}

function handleCenterSelectChange(centerValue) {
  const courseInput = document.getElementById('trCourse');
  const centerSelect = document.getElementById('trCenter');
  if (!courseInput || !centerSelect) return;

  const selectedOpt = centerSelect.options[centerSelect.selectedIndex];
  if (selectedOpt && selectedOpt.dataset.trade) {
    courseInput.value = selectedOpt.dataset.trade;
  }
}

// Render Centers Directory Table
function renderCentersDirectory() {
  const tbody = document.getElementById('centersDirectoryBody');
  const countDisplay = document.getElementById('centerCountDisplay');
  if (!tbody) return;

  const query = (document.getElementById('centerSearchQuery')?.value || '').toLowerCase().trim();
  const districtFilter = document.getElementById('centerFilterDistrict')?.value || 'All';
  const statusFilter = document.getElementById('centerFilterStatus')?.value || 'All';

  const centers = SIWStorage.getCenters();

  const filtered = centers.filter(c => {
    const matchesQuery = c.code.toLowerCase().includes(query) ||
                         c.name.toLowerCase().includes(query) ||
                         c.district.toLowerCase().includes(query) ||
                         c.trade.toLowerCase().includes(query);
    const matchesDistrict = (districtFilter === 'All') || (c.district === districtFilter);
    const matchesStatus = (statusFilter === 'All') ||
                          (statusFilter === 'Functional' && c.status.toLowerCase().includes('func') && !c.status.toLowerCase().includes('non')) ||
                          (statusFilter === 'Non-functional' && c.status.toLowerCase().includes('non'));
    return matchesQuery && matchesDistrict && matchesStatus;
  });

  if (countDisplay) {
    countDisplay.textContent = `Showing ${filtered.length} of ${centers.length} Centers`;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 24px; color: #64748b;">No centers match your search criteria.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(c => {
    const isFunc = c.status.toLowerCase().includes('func') && !c.status.toLowerCase().includes('non');
    return `
      <tr>
        <td><span class="token-code">${c.code}</span></td>
        <td><strong>${c.name}</strong></td>
        <td><i class="fa-solid fa-location-dot" style="color: #064e2e; margin-right: 4px;"></i> ${c.district}</td>
        <td><span style="font-weight: 600; color: #042e1b;">${c.trade}</span></td>
        <td><span class="status-pill ${isFunc ? 'status-approved' : 'status-rejected'}">${c.status}</span></td>
        <td><small>${c.type || 'N/A'}</small></td>
        <td>
          <button class="btn btn-sm btn-outline-primary" onclick="prefillTraineeCenter('${c.district}', '[${c.code}] ${c.name}', '${c.trade}')">
            <i class="fa-solid fa-user-plus"></i> Select for Enrolment
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function prefillTraineeCenter(district, centerFullName, trade) {
  switchTab('trainees', '#enrolForm');
  const distSelect = document.getElementById('trDistrict');
  if (distSelect) {
    distSelect.value = district;
    handleTraineeDistrictChange(district);
  }
  setTimeout(() => {
    const centerSelect = document.getElementById('trCenter');
    if (centerSelect) {
      centerSelect.value = centerFullName;
      handleCenterSelectChange(centerFullName);
    }
    const tradeInput = document.getElementById('trCourse');
    if (tradeInput) {
      tradeInput.value = trade;
    }
  }, 100);
}

function exportCentersCSV() {
  const centers = SIWStorage.getCenters();
  const headers = ["Center Code", "Center Name", "District", "Trade", "Status", "Premises Type"];
  const rows = centers.map(c => [
    c.code,
    `"${c.name}"`,
    c.district,
    `"${c.trade}"`,
    c.status,
    `"${c.type || ''}"`
  ]);
  triggerCsvDownload("SIW_Balochistan_Centers_Directory.csv", headers, rows);
}

// ===================================================================
// TRAINEE ENROLMENT, DUPLICATE RESTRICTION & REJECTION TAB
// (TRAINEES APPEAR SEQUENTIALLY BY SAME CENTER)
// ===================================================================
function getSortedTraineesByCenter(filterStatus = 'all') {
  let trainees = SIWStorage.getTrainees();

  if (filterStatus !== 'all') {
    trainees = trainees.filter(t => t.status === filterStatus);
  }

  // SORT BY CENTER NAME ALPHABETICALLY SO ALL TRAINEES FROM SAME CENTER APPEAR IN UNINTERRUPTED SEQUENCE
  return trainees.sort((a, b) => {
    const centerA = (a.center || '').toLowerCase();
    const centerB = (b.center || '').toLowerCase();
    if (centerA < centerB) return -1;
    if (centerA > centerB) return 1;
    return (a.token || '').localeCompare(b.token || '');
  });
}

function filterTraineeView(status, btn) {
  document.querySelectorAll('.trainee-status-tabs-wrap .status-tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const rejectionBadge = document.getElementById('rejectionTabBadge');
  const title = document.getElementById('traineeListTitle');
  const thReason = document.getElementById('rejectionReasonTh');

  if (status === 'Rejected') {
    if (rejectionBadge) rejectionBadge.style.display = 'inline-flex';
    if (title) title.innerHTML = `<i class="fa-solid fa-ban" style="color: #b91c1c;"></i> Ineligible & Rejected Trainees — Rejection Reasons Tab`;
    if (thReason) thReason.textContent = "Official Reason for Rejection";
  } else {
    if (rejectionBadge) rejectionBadge.style.display = 'none';
    if (title) title.innerHTML = `<i class="fa-solid fa-graduation-cap"></i> Enrolled Trainees (Ordered by Center Sequence)`;
    if (thReason) thReason.textContent = "Admission Note / Rejection Reason";
  }

  renderPublicTraineesList(status);
}

function renderPublicTraineesList(filterStatus = 'all') {
  const tbody = document.getElementById('publicTraineesBody');
  if (!tbody) return;

  const countAll = document.getElementById('countTraineesAll');
  const countApp = document.getElementById('countTraineesApproved');
  const countScrutiny = document.getElementById('countTraineesScrutiny');
  const countRej = document.getElementById('countTraineesRejected');

  // Restrict candidate records to authorized Admin only
  if (!SIWStorage.isAdminLoggedIn()) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 28px; color: #64748b;"><i class="fa-solid fa-lock" style="margin-right: 6px; color: #b45309;"></i> Confidential Trainee Registry. Please log in as Administrator to view candidate records.</td></tr>`;
    if (countAll) countAll.textContent = 'Restricted';
    if (countApp) countApp.textContent = 'Restricted';
    if (countScrutiny) countScrutiny.textContent = 'Restricted';
    if (countRej) countRej.textContent = 'Restricted';
    return;
  }

  const allTrainees = SIWStorage.getTrainees();
  if (countAll) countAll.textContent = allTrainees.length;
  if (countApp) countApp.textContent = allTrainees.filter(t => t.status === 'Approved').length;
  if (countScrutiny) countScrutiny.textContent = allTrainees.filter(t => t.status === 'Under Scrutiny').length;
  if (countRej) countRej.textContent = allTrainees.filter(t => t.status === 'Rejected').length;

  const sortedList = getSortedTraineesByCenter(filterStatus);

  if (sortedList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 24px; color: #64748b;">No trainee records found in this category.</td></tr>`;
    return;
  }

  let lastCenter = "";
  let html = "";

  sortedList.forEach(t => {
    // If center changes, insert a distinct sequential center group header
    if (t.center !== lastCenter) {
      lastCenter = t.center;
      html += `
        <tr style="background: #f0fdf4; border-top: 2px solid #064e2e;">
          <td colspan="8" style="padding: 10px 16px; font-weight: 800; color: #042e1b;">
            <i class="fa-solid fa-building-columns" style="color: #064e2e; margin-right: 8px;"></i>
            Center Sequence Group: ${t.center}
          </td>
        </tr>
      `;
    }

    const isRejected = t.status === 'Rejected';
    html += `
      <tr>
        <td><span class="token-code">${t.token}</span></td>
        <td><strong>${t.center}</strong></td>
        <td>
          <strong>${t.fullName}</strong><br>
          <small style="color: #64748b;">s/o ${t.fatherName}</small>
        </td>
        <td><span style="font-family: monospace; font-weight: bold;">${t.cnic}</span></td>
        <td><span style="color: #064e2e; font-weight: 600;">${t.course}</span></td>
        <td><span class="status-pill status-${t.status.toLowerCase().replace(/\s+/g, '')}">${t.status}</span></td>
        <td>
          ${isRejected ? `
            <span class="rejection-reason-pill">
              <i class="fa-solid fa-triangle-exclamation"></i> ${t.rejectionReason || "Criteria not met during verification."}
            </span>
          ` : `
            <small style="color: #15803d;"><i class="fa-solid fa-circle-check"></i> Eligible & Enrolled</small>
          `}
        </td>
        <td>
          <button class="btn btn-sm btn-outline-primary" onclick="openTraineeSlipModal(${JSON.stringify(t).replace(/"/g, '&quot;')})">
            <i class="fa-solid fa-receipt"></i> Slip
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// Check duplicate on blur
function checkFieldDuplicate(fieldType, value) {
  const alertBox = document.getElementById('duplicateAlertBox');
  const alertMsg = document.getElementById('duplicateAlertMessage');
  if (!value || !value.trim()) return false;

  const cleanedVal = value.trim().toLowerCase();
  const trainees = SIWStorage.getTrainees();

  let isDuplicate = false;
  let errorMsg = '';
  let targetInput = null;

  if (fieldType === 'cnic') {
    targetInput = document.getElementById('trCnic');
    const existing = trainees.find(t => t.cnic && t.cnic.replace(/\D/g, '') === cleanedVal.replace(/\D/g, ''));
    if (existing) {
      isDuplicate = true;
      errorMsg = `DUPLICATE PROHIBITED: CNIC ${value} is already enrolled under Candidate: "${existing.fullName}" (Token: ${existing.token})!`;
    }
  } else if (fieldType === 'accountNo') {
    targetInput = document.getElementById('trAccountNo');
    const existing = trainees.find(t => t.accountNo && t.accountNo.replace(/\s+/g, '').toLowerCase() === cleanedVal.replace(/\s+/g, ''));
    if (existing) {
      isDuplicate = true;
      errorMsg = `DUPLICATE PROHIBITED: Bank Account "${value}" is already registered under Candidate: "${existing.fullName}"!`;
    }
  } else if (fieldType === 'vendorNo') {
    targetInput = document.getElementById('trVendorNo');
    const existing = trainees.find(t => t.vendorNo && t.vendorNo.replace(/\s+/g, '').toLowerCase() === cleanedVal.replace(/\s+/g, ''));
    if (existing) {
      isDuplicate = true;
      errorMsg = `DUPLICATE PROHIBITED: Government Vendor Number "${value}" is already registered under Candidate: "${existing.fullName}"!`;
    }
  }

  if (isDuplicate) {
    if (targetInput) targetInput.classList.add('input-duplicate-error');
    if (alertBox && alertMsg) {
      alertMsg.textContent = errorMsg;
      alertBox.style.display = 'flex';
    }
    showToast('Duplicate Restraint', errorMsg, 'error');
    return true;
  } else {
    if (targetInput) targetInput.classList.remove('input-duplicate-error');
    if (alertBox) alertBox.style.display = 'none';
    return false;
  }
}

// Handle Form Submission
async function handleTraineeSubmit(e) {
  e.preventDefault();

  const cnicVal = document.getElementById('trCnic').value.trim();
  const accountNoVal = document.getElementById('trAccountNo').value.trim();
  const vendorNoVal = document.getElementById('trVendorNo').value.trim();

  if (cnicVal.replace(/\D/g, '').length !== 13) {
    showToast('Invalid CNIC', 'CNIC must contain 13 digits (format: 54400-XXXXXXX-X).', 'error');
    document.getElementById('trCnic').focus();
    return;
  }

  if (checkFieldDuplicate('cnic', cnicVal) || checkFieldDuplicate('accountNo', accountNoVal) || checkFieldDuplicate('vendorNo', vendorNoVal)) {
    return;
  }

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const token = `SIW-TR-2026-${randomNum}`;

  const trainee = {
    token: token,
    fullName: document.getElementById('trFullName').value.trim(),
    fatherName: document.getElementById('trFatherName').value.trim(),
    cnic: cnicVal,
    gender: document.getElementById('trGender').value,
    dob: document.getElementById('trDob').value,
    phone: document.getElementById('trPhone').value.trim(),
    bankName: document.getElementById('trBankName').value,
    accountNo: accountNoVal,
    vendorNo: vendorNoVal,
    district: document.getElementById('trDistrict').value,
    center: document.getElementById('trCenter').value,
    course: document.getElementById('trCourse').value,
    shift: document.getElementById('trShift').value,
    qualification: document.getElementById('trQualification').value,
    address: document.getElementById('trAddress').value.trim(),
    status: "Approved",
    rejectionReason: "",
    appliedDate: new Date().toISOString().split('T')[0]
  };

  SIWStorage.saveTrainee(trainee);
  refreshHeaderBadges();
  renderPublicTraineesList('all');

  openTraineeSlipModal(trainee);
  document.getElementById('traineeEnrollmentForm').reset();
  showToast('Enrolment Successful', `Registered under Token ${token} with verified Vendor credentials.`, 'success');

  // Immediately broadcast to cloud so all devices (admin & public) see this record instantaneously
  if (typeof SIWCloudSync !== 'undefined') {
    await SIWCloudSync.push();
  }
}

function openTraineeSlipModal(t) {
  document.getElementById('slipTokenNo').textContent = t.token;
  document.getElementById('slipName').textContent = t.fullName;
  document.getElementById('slipFather').textContent = t.fatherName;
  document.getElementById('slipCnic').textContent = t.cnic;
  document.getElementById('slipGenderDob').textContent = `${t.gender} • DOB: ${t.dob}`;
  document.getElementById('slipDistrict').textContent = t.district;
  document.getElementById('slipPhone').textContent = t.phone;
  document.getElementById('slipBankName').textContent = t.bankName || 'N/A';
  document.getElementById('slipAccountNo').textContent = t.accountNo || 'N/A';
  document.getElementById('slipVendorNo').textContent = t.vendorNo || 'N/A';
  document.getElementById('slipCenter').textContent = t.center;
  document.getElementById('slipCourse').textContent = t.course;
  document.getElementById('slipShift').textContent = t.shift;
  document.getElementById('slipAddress').textContent = t.address;

  const statusBadge = document.getElementById('slipStatusBadge');
  const rejCallout = document.getElementById('slipRejectionCallout');
  const rejText = document.getElementById('slipRejectionReasonText');

  if (statusBadge) {
    statusBadge.textContent = t.status.toUpperCase();
    if (t.status === 'Rejected') {
      statusBadge.style.background = '#fee2e2';
      statusBadge.style.color = '#b91c1c';
      if (rejCallout && rejText) {
        rejText.textContent = t.rejectionReason || "Eligibility criteria not fulfilled during scrutiny.";
        rejCallout.style.display = 'flex';
      }
    } else {
      statusBadge.style.background = '#dcfce7';
      statusBadge.style.color = '#15803d';
      if (rejCallout) rejCallout.style.display = 'none';
    }
  }

  openModal('traineeSlipModal');
}

// ===================================================================
// ESTATE OFFICE SIRKI ROAD QUETTA ONLY
// ===================================================================
function handlePlotSubmit(e) {
  e.preventDefault();

  const randomNum = Math.floor(100 + Math.random() * 900);
  const token = `SIW-EST-2026-${randomNum}`;

  const plotApp = {
    token: token,
    companyName: document.getElementById('epCompanyName').value.trim(),
    ownerName: document.getElementById('epOwnerName').value.trim(),
    cnic: document.getElementById('epCnic').value.trim(),
    ntn: document.getElementById('epNtn').value.trim() || 'N/A',
    phone: document.getElementById('epPhone').value.trim(),
    email: document.getElementById('epEmail').value.trim(),
    estateName: "Small Industrial Estate, Sirki Road, Quetta",
    plotSize: document.getElementById('epPlotSize').value,
    industryCategory: document.getElementById('epIndustryCategory').value,
    investment: parseFloat(document.getElementById('epInvestment').value) || 0,
    employment: parseInt(document.getElementById('epEmployment').value) || 0,
    powerWater: document.getElementById('epPowerWater').value.trim() || 'Standard Feeder Load',
    brief: document.getElementById('epBrief').value.trim(),
    status: "Under Review",
    appliedDate: new Date().toISOString().split('T')[0]
  };

  SIWStorage.saveEstate(plotApp);
  document.getElementById('estatePlotForm').reset();

  showToast('Plot Application Lodged!', `Token: ${token} for Small Industrial Estate Sirki Road Quetta.`, 'success');
  quickFillTrack(token);
  switchTab('tracking');
}

// ===================================================================
// MULTI-DESK E-FILING (ROUTING SIDES & ADDRESSED-ONLY PRIVACY)
// ===================================================================
function populateEfilingSenderRecipient() {
  const senderSelect = document.getElementById('efSenderSide');
  if (senderSelect) {
    handleSenderSideChange(senderSelect.value);
  }

  // Populate center select
  const centerSelect = document.getElementById('efCenterSelect');
  if (centerSelect) {
    centerSelect.innerHTML = '<option value="">-- Select Center from Official List --</option>';
    SIWStorage.getCenters().forEach(c => {
      const opt = document.createElement('option');
      opt.value = `[${c.code}] ${c.name}`;
      opt.textContent = `[${c.code}] ${c.name} (${c.district})`;
      opt.dataset.code = c.code;
      centerSelect.appendChild(opt);
    });
  }
}

// SENDER SIDE CHANGE ➔ STRICT DESTINATIONS ENFORCEMENT
function handleSenderSideChange(senderSide) {
  const recipientSelect = document.getElementById('efRecipientSide');
  const centerGroup = document.getElementById('centerSelectionGroup');
  const routingHint = document.getElementById('recipientRoutingHint');
  const centerCodeInput = document.getElementById('efCenterCode');

  if (!recipientSelect) return;

  recipientSelect.innerHTML = '';

  if (senderSide === 'District Center Incharge') {
    // FROM CENTERS TO ONLY DIRECTORATE (HQ)
    if (centerGroup) centerGroup.style.display = 'block';
    if (routingHint) routingHint.textContent = "Official Protocol: Centers route cases only to Directorate (HQ) Quetta.";
    
    const opt = document.createElement('option');
    opt.value = "Directorate (HQ) Quetta";
    opt.textContent = "🏢 Directorate of Small Industries (HQ) Quetta Only";
    recipientSelect.appendChild(opt);
  } else if (senderSide === 'Directorate (HQ) Quetta') {
    // DIRECTORATE TO CENTERS, BTEVTA, AND LABOUR DEPARTMENT
    if (centerGroup) centerGroup.style.display = 'none';
    if (centerCodeInput) centerCodeInput.value = 'HQ-QTA';
    if (routingHint) routingHint.textContent = "Directorate HQ can despatch to Centers, B-TEVTA, or Labour Department.";

    recipientSelect.innerHTML = `
      <option value="District Centers">🏫 All / Designated District Centers</option>
      <option value="B-TEVTA Balochistan">📜 B-TEVTA Balochistan Head Office</option>
      <option value="Labour & Manpower Department">🏛️ Secretary, Labour & Manpower Department</option>
    `;
  } else if (senderSide === 'B-TEVTA Balochistan') {
    // B-TEVTA TO DIRECTORATE OR LABOUR
    if (centerGroup) centerGroup.style.display = 'none';
    if (centerCodeInput) centerCodeInput.value = 'BTEVTA-HQ';
    if (routingHint) routingHint.textContent = "B-TEVTA routes files to Directorate (HQ) Quetta or Labour Department.";

    recipientSelect.innerHTML = `
      <option value="Directorate (HQ) Quetta">🏢 Directorate of Small Industries (HQ) Quetta</option>
      <option value="Labour & Manpower Department">🏛️ Labour & Manpower Department</option>
    `;
  } else if (senderSide === 'Labour & Manpower Department') {
    // LABOUR DEPT TO DIRECTORATE
    if (centerGroup) centerGroup.style.display = 'none';
    if (centerCodeInput) centerCodeInput.value = 'LBR-SEC';
    if (routingHint) routingHint.textContent = "Labour Department routes files to Directorate (HQ) Quetta.";

    recipientSelect.innerHTML = `
      <option value="Directorate (HQ) Quetta">🏢 Directorate of Small Industries (HQ) Quetta</option>
    `;
  }
}

function handleEfilingCenterChange(val) {
  const codeInput = document.getElementById('efCenterCode');
  const efCenterSelect = document.getElementById('efCenterSelect');
  if (!codeInput || !efCenterSelect) return;

  const selectedOpt = efCenterSelect.options[efCenterSelect.selectedIndex];
  if (selectedOpt && selectedOpt.dataset.code) {
    codeInput.value = selectedOpt.dataset.code;
  }
}

// "THE ONE ONLY CAN SEE TO WHOM IT ADDRESSED" ➔ DESK CONFIDENTIALITY FILTER
function handleDeskViewFilterChange(selectedDesk) {
  const tableBody = document.getElementById('deskFilteredFilesBody');
  const countBadge = document.getElementById('deskFileCountBadge');
  const indicatorText = document.getElementById('deskPrivacyText');
  if (!tableBody) return;

  if (indicatorText) {
    indicatorText.textContent = `Confidentiality Enabled: Displaying files strictly addressed to or sent by: "${selectedDesk}".`;
  }

  const allFiles = SIWStorage.getEfiles();

  let filtered = allFiles;
  if (selectedDesk !== 'All (Authorized Headquarters Audit)') {
    filtered = allFiles.filter(f => {
      const matchRecipient = (f.recipientSide || '').toLowerCase().includes(selectedDesk.toLowerCase());
      const matchSender = (f.senderSide || '').toLowerCase().includes(selectedDesk.toLowerCase());
      return matchRecipient || matchSender;
    });
  }

  if (countBadge) {
    countBadge.textContent = `${filtered.length} Confidential Files in Desk`;
  }

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="8" style="text-align: center; padding: 24px; color: #64748b;">
          <i class="fa-solid fa-lock" style="color: #064e2e; margin-right: 6px;"></i>
          No files addressed to or sent by "${selectedDesk}".
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(f => `
    <tr>
      <td><span class="token-code">${f.token}</span></td>
      <td>
        <strong>${f.senderSide}</strong><br>
        <small style="color: #64748b;">By: ${f.inchargeName} (${f.designation})</small>
      </td>
      <td>
        <span class="pill-badge pill-green"><i class="fa-solid fa-envelope"></i> ${f.recipientSide}</span>
      </td>
      <td>
        <strong style="color: #042e1b;">${f.subject}</strong><br>
        <small style="color: #64748b;">${f.appliedDate}</small>
      </td>
      <td><small>${f.category}</small></td>
      <td><span style="font-weight: 700; font-size: 0.8rem; color: #064e2e;">${f.fileStage}</span></td>
      <td>
        <span class="pill-badge" style="background: #f1f5f9; color: #0f172a;">
          <i class="fa-solid fa-paperclip"></i> ${f.attachments ? f.attachments.length : 0}
        </span>
      </td>
      <td>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <button class="btn btn-sm btn-gold" onclick="openEfileDocketModal('${f.token}')" title="Download Official Minute Docket">
            <i class="fa-solid fa-file-arrow-down"></i> Docket
          </button>
          <button class="btn btn-sm btn-outline-primary" onclick="quickFillTrack('${f.token}'); switchTab('tracking');" title="Track Live Status">
            <i class="fa-solid fa-eye"></i> Track
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

// Simple Multi-file Attachment Handler
function handleSimpleFilesSelected(files) {
  if (!files || files.length === 0) return;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const sizeFormatted = (file.size / 1024).toFixed(1) + ' KB';
    
    let iconClass = 'fa-file-lines';
    if (file.type.includes('pdf')) iconClass = 'fa-file-pdf';
    else if (file.type.includes('image')) iconClass = 'fa-file-image';
    else if (file.type.includes('excel') || file.type.includes('sheet')) iconClass = 'fa-file-excel';
    else if (file.type.includes('word') || file.type.includes('document')) iconClass = 'fa-file-word';

    selectedEfileAttachments.push({
      name: file.name,
      size: sizeFormatted,
      icon: iconClass
    });
  }

  renderAttachedFilesList();
  showToast('Document Attached', `${files.length} document(s) added to attachment list.`, 'info');
}

function renderAttachedFilesList() {
  const container = document.getElementById('attachedFilesContainer');
  if (!container) return;

  if (selectedEfileAttachments.length === 0) {
    container.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  container.style.display = 'flex';
  container.innerHTML = selectedEfileAttachments.map((file, idx) => `
    <div class="attached-file-item">
      <div class="file-info-group">
        <i class="fa-solid ${file.icon} file-type-icon"></i>
        <div class="file-details-text">
          <strong>${file.name}</strong>
          <small>Size: ${file.size} • Attached</small>
        </div>
      </div>
      <button type="button" class="btn-file-remove" onclick="removeAttachedFile(${idx})">
        <i class="fa-solid fa-trash-can"></i> Remove
      </button>
    </div>
  `).join('');
}

function removeAttachedFile(idx) {
  selectedEfileAttachments.splice(idx, 1);
  renderAttachedFilesList();
}

function resetAttachedFiles() {
  selectedEfileAttachments = [];
  renderAttachedFilesList();
}

function handleEfilingSubmit(e) {
  e.preventDefault();

  const senderSide = document.getElementById('efSenderSide').value;
  const recipientSide = document.getElementById('efRecipientSide').value;
  const centerName = document.getElementById('efCenterSelect')?.value || 'N/A';
  const centerCode = document.getElementById('efCenterCode')?.value || 'N/A';

  const randomNum = Math.floor(100 + Math.random() * 900);
  const token = `SIW-EF-2026-${randomNum}`;

  const efile = {
    token: token,
    senderSide: senderSide,
    recipientSide: recipientSide,
    centerName: centerName,
    centerCode: centerCode,
    inchargeName: document.getElementById('efInchargeName').value.trim(),
    designation: document.getElementById('efDesignation').value,
    phone: document.getElementById('efPhone').value.trim(),
    category: document.getElementById('efCategory').value,
    urgency: document.getElementById('efUrgency').value,
    subject: document.getElementById('efSubject').value.trim(),
    details: document.getElementById('efDetails').value.trim(),
    attachments: [...selectedEfileAttachments],
    status: "Under Scrutiny",
    fileStage: `Despatched to ${recipientSide}`,
    remarks: `Lodged by ${senderSide}. Awaiting acknowledgement at ${recipientSide}.`,
    appliedDate: new Date().toISOString().split('T')[0]
  };

  SIWStorage.saveEfile(efile);
  document.getElementById('efilingSubmitForm').reset();
  resetAttachedFiles();

  showToast('File Despatched!', `Token ${token} addressed directly to ${recipientSide}.`, 'success');
  handleDeskViewFilterChange(recipientSide);
  quickFillTrack(token);
  switchTab('tracking');
}

// ===================================================================
// COMPETENT AUTHORITY & FIELD CENTERS MEDIA (HOME & ADMIN)
// ===================================================================
function renderLeadershipAndAchievements() {
  // 1. Competent Authority / Leadership Grid (Home and Admin)
  const leaderGrid = document.getElementById('homeLeadershipGrid') || document.getElementById('publicLeadershipGrid');
  if (leaderGrid) {
    const leaders = SIWStorage.getLeadership();
    leaderGrid.innerHTML = leaders.map(l => `
      <div class="leadership-card">
        <div class="leader-avatar-wrap">
          <img src="${l.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'}" alt="${l.name}">
        </div>
        <h4 class="leader-name">${l.name}</h4>
        <div class="leader-designation">${l.title}</div>
        <small style="color: #64748b; font-weight: 600; margin-bottom: 10px;">${l.department}</small>
        <p class="leader-quote">"${l.quote}"</p>
      </div>
    `).join('');
  }

  // 2. Field Centers Activities & Media Slideshow
  renderMediaSlideshow();
}

// ===================================================================
// MEDIA SLIDESHOW CONTROLLER (PICS AND VIDEOS SLIDESHOW)
// ===================================================================
let currentMediaSlideIndex = 0;
let mediaAutoplayInterval = null;
let isMediaAutoplayActive = true;

function renderMediaSlideshow() {
  const trackWrap = document.getElementById('mediaSlideshowTrackWrap');
  const dotsContainer = document.getElementById('mediaSlideDots');
  const counterElem = document.getElementById('mediaSlideCounter');
  if (!trackWrap) return;

  const achievements = SIWStorage.getAchievements();
  if (!achievements || achievements.length === 0) {
    trackWrap.innerHTML = `
      <div class="empty-slideshow-msg" style="padding: 40px; text-align: center; color: #64748b;">
        <i class="fa-solid fa-photo-film" style="font-size: 2rem; color: #cbd5e1; margin-bottom: 10px;"></i>
        <p>No media documents currently scheduled for broadcast.</p>
      </div>`;
    if (counterElem) counterElem.textContent = '0 / 0';
    if (dotsContainer) dotsContainer.innerHTML = '';
    return;
  }

  // Build slide items
  trackWrap.innerHTML = achievements.map((a, idx) => `
    <div class="media-slide ${idx === currentMediaSlideIndex ? 'active' : ''}" data-index="${idx}">
      <div class="slide-grid">
        <div class="slide-media-pane">
          <img src="${a.type === 'video' ? 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1000&auto=format&fit=crop&q=80' : a.mediaUrl}" alt="${a.title}">
          ${a.type === 'video' ? `
            <div class="slide-badge-video"><i class="fa-solid fa-video"></i> Video Broadcast</div>
            <button class="slide-play-overlay-btn" onclick="openVideoModal('${a.mediaUrl}', '${a.title.replace(/'/g, "\\'")}')" title="Play Video Broadcast">
              <i class="fa-solid fa-play"></i>
            </button>
          ` : `
            <div class="slide-badge-photo"><i class="fa-solid fa-camera"></i> Field Documentation</div>
          `}
        </div>
        <div class="slide-info-pane">
          <div class="slide-tag"><i class="fa-solid fa-layer-group"></i> ${a.category}</div>
          <h3 class="slide-title">${a.title}</h3>
          <p class="slide-desc">${a.description}</p>
          <div class="slide-meta">
            <span><i class="fa-regular fa-calendar-days"></i> ${a.date}</span>
            <span class="slide-status-pill">${a.type === 'video' ? 'HD Broadcast' : 'Official Photo Archive'}</span>
          </div>
          <div class="slide-actions">
            ${a.type === 'video' ? `
              <button class="btn btn-gold btn-lg" onclick="openVideoModal('${a.mediaUrl}', '${a.title.replace(/'/g, "\\'")}')">
                <i class="fa-solid fa-play"></i> Watch Broadcast Video
              </button>
            ` : `
              <button class="btn btn-primary btn-lg" onclick="openPhotoViewerModal('${a.mediaUrl}', '${a.title.replace(/'/g, "\\'")}', '${a.description.replace(/'/g, "\\'")}')">
                <i class="fa-solid fa-expand"></i> View High-Res Documentation
              </button>
            `}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Build dots
  if (dotsContainer) {
    dotsContainer.innerHTML = achievements.map((_, idx) => `
      <button class="slide-dot ${idx === currentMediaSlideIndex ? 'active' : ''}" onclick="setMediaSlide(${idx})" title="Go to slide ${idx + 1}" aria-label="Slide ${idx + 1}"></button>
    `).join('');
  }

  showMediaSlide(currentMediaSlideIndex);
  startMediaAutoplay();
}

function showMediaSlide(index) {
  const slides = document.querySelectorAll('.media-slide');
  const dots = document.querySelectorAll('.slide-dot');
  const counterElem = document.getElementById('mediaSlideCounter');
  if (!slides || slides.length === 0) return;

  const total = slides.length;
  currentMediaSlideIndex = (index + total) % total;

  slides.forEach((s, idx) => {
    if (idx === currentMediaSlideIndex) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });

  dots.forEach((d, idx) => {
    if (idx === currentMediaSlideIndex) {
      d.classList.add('active');
    } else {
      d.classList.remove('active');
    }
  });

  if (counterElem) {
    counterElem.textContent = `Slide ${currentMediaSlideIndex + 1} of ${total}`;
  }
}

function moveMediaSlide(step) {
  showMediaSlide(currentMediaSlideIndex + step);
}

function setMediaSlide(index) {
  showMediaSlide(index);
}

function startMediaAutoplay() {
  pauseMediaAutoplay();
  if (!isMediaAutoplayActive) return;
  mediaAutoplayInterval = setInterval(() => {
    moveMediaSlide(1);
  }, 5000);
}

function pauseMediaAutoplay() {
  if (mediaAutoplayInterval) {
    clearInterval(mediaAutoplayInterval);
    mediaAutoplayInterval = null;
  }
}

function resumeMediaAutoplay() {
  if (isMediaAutoplayActive) {
    startMediaAutoplay();
  }
}

function toggleMediaAutoplay() {
  isMediaAutoplayActive = !isMediaAutoplayActive;
  const btn = document.getElementById('mediaAutoplayBtn');
  if (isMediaAutoplayActive) {
    startMediaAutoplay();
    if (btn) btn.innerHTML = '<i class="fa-solid fa-pause"></i> <span>Auto</span>';
    showToast('Auto-Play Active', 'Slideshow is auto-playing.', 'info');
  } else {
    pauseMediaAutoplay();
    if (btn) btn.innerHTML = '<i class="fa-solid fa-play"></i> <span>Paused</span>';
    showToast('Auto-Play Paused', 'Slideshow auto-play paused.', 'info');
  }
}

function openPhotoViewerModal(imageUrl, title, description) {
  const modal = document.getElementById('videoPlayerModal');
  const modalTitle = document.getElementById('videoModalTitle');
  const modalBody = document.getElementById('videoModalBody');
  if (!modal || !modalBody) return;

  modalTitle.innerHTML = `<i class="fa-solid fa-image"></i> ${title}`;
  modalBody.innerHTML = `
    <div style="background: #000; padding: 24px; text-align: center;">
      <img src="${imageUrl}" alt="${title}" style="max-height: 70vh; max-width: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <p style="color: #cbd5e1; margin-top: 16px; font-size: 0.94rem; text-align: left; max-width: 800px; margin-left: auto; margin-right: auto; line-height: 1.6;">${description}</p>
    </div>
  `;
  openModal('videoPlayerModal');
}

// Global active docket reference for download
let currentActiveDocketToken = null;

// OFFICIAL E-FILE MINUTE SHEET / DOCKET MODAL
function openEfileDocketModal(token) {
  const efiles = SIWStorage.getEfiles();
  const f = efiles.find(x => x.token === token);
  if (!f) return;

  currentActiveDocketToken = token;
  const modal = document.getElementById('efileDocketModal');
  const printable = document.getElementById('efileDocketPrintable');
  if (!modal || !printable) return;

  const attachmentsList = (f.attachments && f.attachments.length > 0)
    ? f.attachments.map(att => `
        <div class="docket-att-badge">
          <i class="fa-solid ${att.icon || 'fa-file'}"></i>
          <span>${att.name} (${att.size || 'Official File'})</span>
          <a href="javascript:void(0)" onclick="triggerDownloadMockAttachment('${att.name}')" style="margin-left: 6px; color: #1e40af; text-decoration: underline;">
            <i class="fa-solid fa-download"></i> Download
          </a>
        </div>
      `).join('')
    : '<span style="color: #64748b; font-size: 0.85rem;">No separate supporting document attached.</span>';

  printable.innerHTML = `
    <div class="efile-docket-box">
      <div class="docket-crest-header">
        <div class="slip-emblem">
          <svg viewBox="0 0 100 100" class="crest-svg-sm">
            <circle cx="50" cy="50" r="46" fill="#064e2e" stroke="#d4af37" stroke-width="4" />
            <path d="M 20 68 L 38 42 L 54 62 L 68 36 L 82 68 Z" fill="#d4af37"/>
            <path d="M 50 18 A 12 12 0 0 0 50 40 A 10 10 0 0 1 50 20 Z" fill="#ffffff" />
          </svg>
        </div>
        <div class="docket-header-center">
          <h3>DIRECTORATE OF SMALL INDUSTRIES BALOCHISTAN</h3>
          <h4>GOVERNMENT OF BALOCHISTAN • HEAD QUARTER QUETTA</h4>
          <p>CONFIDENTIAL INTER-DEPARTMENTAL E-FILING SYSTEM • OFFICIAL MINUTE DOSSIER</p>
        </div>
        <div class="slip-qr">
          <div class="qr-mockup">
            <i class="fa-solid fa-qrcode"></i>
            <small>VERIFIED</small>
          </div>
        </div>
      </div>

      <div class="docket-banner">
        <div><strong>FILE TOKEN / DIARY NO:</strong> <span style="font-family: monospace; font-size: 1.05rem; letter-spacing: 1px;">${f.token}</span></div>
        <div style="background: rgba(212, 175, 55, 0.2); padding: 4px 10px; border-radius: 4px; font-weight: bold; color: #d4af37;">
          ${f.urgency || 'Routine Priority'} • ${f.fileStage || 'Active Movement'}
        </div>
      </div>

      <div class="docket-meta-grid">
        <div class="docket-meta-item">
          <span>Originating Desk (Sender):</span>
          <strong>${f.senderSide}</strong>
          <div><small style="color: #64748b;">Officer: ${f.inchargeName} (${f.designation})</small></div>
          ${f.centerName ? `<div><small style="color: #064e2e; font-weight: 600;">Branch/Center: ${f.centerName}</small></div>` : ''}
        </div>

        <div class="docket-meta-item">
          <span>Addressed To (Recipient Desk):</span>
          <strong style="color: #064e2e;"><i class="fa-solid fa-envelope"></i> ${f.recipientSide}</strong>
          <div><small style="color: #64748b;">Protocol: Addressed-Only Confidentiality Enforced</small></div>
        </div>

        <div class="docket-meta-item">
          <span>Matter Classification / Category:</span>
          <strong>${f.category}</strong>
        </div>

        <div class="docket-meta-item">
          <span>Despatch Date & Timestamp:</span>
          <strong>${f.appliedDate}</strong>
          <div><small style="color: #64748b;">Live Status: ${f.status || 'Under Scrutiny'}</small></div>
        </div>
      </div>

      <div class="docket-minute-container">
        <div class="docket-minute-title">
          <i class="fa-solid fa-file-pen"></i> Official Subject: ${f.subject}
        </div>
        <div class="docket-minute-body">
          ${f.details}
        </div>
      </div>

      <div class="docket-attachments-list">
        <h5><i class="fa-solid fa-paperclip"></i> Attached Supporting Documents & Bills:</h5>
        <div class="docket-attachments-items">
          ${attachmentsList}
        </div>
      </div>

      ${f.remarks ? `
        <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 12px 16px; margin-bottom: 20px; font-size: 0.85rem;">
          <strong style="color: #166534;"><i class="fa-solid fa-circle-check"></i> Scrutiny Minute Note / Remarks:</strong>
          <p style="margin: 4px 0 0 0; color: #14532d;">${f.remarks}</p>
        </div>
      ` : ''}

      <div class="docket-signatures">
        <div class="docket-sig-block">
          <div class="docket-sig-line"></div>
          <p>Originating Officer Signature<br><small style="color: #64748b;">${f.inchargeName}</small></p>
        </div>
        <div class="docket-sig-block" style="text-align: center;">
          <div style="border: 2px solid #064e2e; border-radius: 50%; width: 70px; height: 70px; display: inline-flex; align-items: center; justify-content: center; color: #064e2e; font-size: 0.65rem; font-weight: bold; text-align: center; text-transform: uppercase;">
            Directorate<br>HQ Seal
          </div>
        </div>
        <div class="docket-sig-block">
          <div class="docket-sig-line"></div>
          <p>Recipient Desk Attestation<br><small style="color: #64748b;">${f.recipientSide}</small></p>
        </div>
      </div>
    </div>
  `;

  openModal('efileDocketModal');
}

function triggerDownloadMockAttachment(filename) {
  const content = `GOVERNMENT OF BALOCHISTAN\nDIRECTORATE OF SMALL INDUSTRIES\nOfficial Attached Document: ${filename}\nToken: ${currentActiveDocketToken || 'CONFIDENTIAL'}\nVerified and Authenticated electronically.`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.pdf') || filename.endsWith('.jpg') || filename.endsWith('.xlsx') ? filename : `${filename}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Download Started', `Downloading ${filename}`, 'info');
}

function downloadEfileTextDossier() {
  if (!currentActiveDocketToken) return;
  const efiles = SIWStorage.getEfiles();
  const f = efiles.find(x => x.token === currentActiveDocketToken);
  if (!f) return;

  const content = `========================================================================
DIRECTORATE OF SMALL INDUSTRIES BALOCHISTAN
GOVERNMENT OF BALOCHISTAN • HEAD QUARTER QUETTA
OFFICIAL E-FILE MINUTE DOSSIER
========================================================================

FILE TOKEN ID: ${f.token}
DESPATCH DATE: ${f.appliedDate}
URGENCY:       ${f.urgency || 'Routine'}
CURRENT STAGE: ${f.fileStage || 'Under Scrutiny'}
STATUS:        ${f.status || 'Active'}

ORIGINATING DESK: ${f.senderSide}
OFFICER NAME:     ${f.inchargeName} (${f.designation})
BRANCH / CENTER:  ${f.centerName || 'Headquarter Quetta'}

ADDRESSED TO:     ${f.recipientSide}
CLASSIFICATION:   ${f.category}

------------------------------------------------------------------------
SUBJECT:
${f.subject}
------------------------------------------------------------------------

DETAILED MINUTE NOTE / CASE SUMMARY:
${f.details}

------------------------------------------------------------------------
ATTACHED SUPPORTING DOCUMENTS:
${f.attachments && f.attachments.length > 0 ? f.attachments.map(a => `- ${a.name} (${a.size})`).join('\n') : 'None'}

SCRUTINY / DESPATCH REMARKS:
${f.remarks || 'Electronic record maintained in SIW Multi-Desk E-Filing System.'}

========================================================================
ELECTRONIC AUTHENTICATION: VERIFIED BY DIRECTORATE HQ QUETTA
========================================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `EFile_Docket_${f.token}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Docket Downloaded', `Saved official docket for ${f.token}.`, 'success');
}

function openVideoModal(url, title) {
  const modal = document.getElementById('videoPlayerModal');
  const mTitle = document.getElementById('videoModalTitle');
  const mBody = document.getElementById('videoModalBody');

  if (mTitle) mTitle.innerHTML = `<i class="fa-solid fa-video"></i> ${title}`;
  if (mBody) {
    mBody.innerHTML = `
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
        <iframe src="${url}?autoplay=1" style="position: absolute; top:0; left: 0; width: 100%; height: 100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    `;
  }
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('active');
  }
}

function closeVideoModal() {
  const modal = document.getElementById('videoPlayerModal');
  const mBody = document.getElementById('videoModalBody');
  if (mBody) mBody.innerHTML = '';
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

// ===================================================================
// TRACKING SYSTEM
// ===================================================================
function executeQuickTrack() {
  const query = document.getElementById('quickTrackInput').value.trim();
  if (!query) {
    showToast('Input Required', 'Please enter a Token or CNIC.', 'warning');
    return;
  }
  quickFillTrack(query);
  switchTab('tracking');
}

function quickFillTrack(tokenId) {
  const input = document.getElementById('mainTrackingInput');
  if (input) {
    input.value = tokenId;
    searchTrackingItem();
  }
}

function searchTrackingItem() {
  const input = document.getElementById('mainTrackingInput');
  const resultArea = document.getElementById('trackingResultArea');
  if (!input || !resultArea) return;

  const query = input.value.trim().toUpperCase();
  if (!query) {
    showToast('Input Required', 'Enter reference token or CNIC.', 'warning');
    return;
  }

  resultArea.style.display = 'block';

  // 1. Check Trainees
  const trainees = SIWStorage.getTrainees();
  const matchedTrainee = trainees.find(t => t.token.toUpperCase() === query || t.cnic === query);
  if (matchedTrainee) {
    renderTraineeTrackingResult(matchedTrainee, resultArea);
    return;
  }

  // 2. Check Estates (Sirki Road Quetta)
  const estates = SIWStorage.getEstates();
  const matchedEstate = estates.find(e => e.token.toUpperCase() === query || e.cnic === query);
  if (matchedEstate) {
    renderEstateTrackingResult(matchedEstate, resultArea);
    return;
  }

  // 3. Check E-Files
  const efiles = SIWStorage.getEfiles();
  const matchedEfile = efiles.find(f => f.token.toUpperCase() === query || (f.centerCode && f.centerCode.toUpperCase() === query));
  if (matchedEfile) {
    renderEfileTrackingResult(matchedEfile, resultArea);
    return;
  }

  // Not found
  resultArea.innerHTML = `
    <div style="text-align: center; padding: 30px;">
      <i class="fa-solid fa-triangle-exclamation" style="font-size: 3rem; color: #f59e0b; margin-bottom: 14px;"></i>
      <h3>No Record Found for "${query}"</h3>
      <p style="color: #64748b; max-width: 500px; margin: 8px auto;">
        Verify the reference token or try testing with: <strong>SIW-TR-2026-101</strong>, <strong>SIW-TR-2026-105</strong> (Rejected with Reason), <strong>SIW-EST-2026-301</strong>, or <strong>SIW-EF-2026-401</strong>.
      </p>
    </div>
  `;
}

function renderTraineeTrackingResult(t, container) {
  const isRejected = t.status === 'Rejected';
  container.innerHTML = `
    <div class="tracking-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 20px;">
        <div>
          <span class="sub-badge"><i class="fa-solid fa-graduation-cap"></i> Trainee Admission Record</span>
          <h3 style="font-size: 1.4rem; color: #042e1b;">${t.fullName} s/o ${t.fatherName}</h3>
          <p style="font-size: 0.88rem; color: #64748b;">Roll / Token: <strong>${t.token}</strong> • CNIC: <strong>${t.cnic}</strong></p>
        </div>
        <div style="text-align: right;">
          <span class="status-pill status-${t.status.toLowerCase().replace(/\s+/g, '')}">${t.status}</span>
          <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 4px;">Registered: ${t.appliedDate}</div>
        </div>
      </div>

      ${isRejected ? `
        <div class="slip-rejection-box" style="margin-bottom: 20px;">
          <i class="fa-solid fa-ban"></i>
          <div>
            <strong>APPLICATION REJECTED:</strong><br>
            <span>${t.rejectionReason || "Ineligible as per official Directorate criteria."}</span>
          </div>
        </div>
      ` : ''}

      <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 8px; padding: 14px 18px; margin-bottom: 20px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; font-size: 0.85rem;">
        <div><strong>Bank Name:</strong><br>${t.bankName || 'NBP'}</div>
        <div><strong>Account / IBAN:</strong><br><span style="font-family: monospace; font-weight: bold;">${t.accountNo}</span></div>
        <div><strong>AG Balochistan Vendor ID:</strong><br><span style="color: #064e2e; font-weight: 800;">${t.vendorNo}</span></div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; background: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 20px; font-size: 0.88rem;">
        <div><strong>Allocated Center:</strong> ${t.center}</div>
        <div><strong>Trade / Course:</strong> ${t.course}</div>
        <div><strong>Domicile District:</strong> ${t.district}</div>
        <div><strong>Shift:</strong> ${t.shift}</div>
        <div><strong>Contact Phone:</strong> ${t.phone}</div>
        <div><strong>Permanent Address:</strong> ${t.address}</div>
      </div>

      <div style="display: flex; justify-content: flex-end;">
        <button class="btn btn-outline-primary" onclick="openTraineeSlipModal(${JSON.stringify(t).replace(/"/g, '&quot;')})">
          <i class="fa-solid fa-print"></i> View / Print Admission Slip
        </button>
      </div>
    </div>
  `;
}

function renderEstateTrackingResult(e, container) {
  container.innerHTML = `
    <div class="tracking-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 20px;">
        <div>
          <span class="sub-badge" style="background: #fef9e7; color: #b89324;"><i class="fa-solid fa-city"></i> Estate Office Sirki Road Quetta</span>
          <h3 style="font-size: 1.4rem; color: #042e1b;">${e.companyName}</h3>
          <p style="font-size: 0.88rem; color: #64748b;">Ref Token: <strong>${e.token}</strong> • Sponsor: <strong>${e.ownerName}</strong></p>
        </div>
        <div style="text-align: right;">
          <span class="status-pill status-scrutiny">${e.status}</span>
          <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 4px;">Lodged: ${e.appliedDate}</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; background: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 20px; font-size: 0.88rem;">
        <div><strong>Location:</strong> Small Industrial Estate, Sirki Road, Quetta</div>
        <div><strong>Required Plot Size:</strong> ${e.plotSize}</div>
        <div><strong>Sector Category:</strong> ${e.industryCategory}</div>
        <div><strong>Proposed Investment:</strong> PKR ${e.investment} Million</div>
        <div><strong>Projected Direct Jobs:</strong> ${e.employment} Personnel</div>
        <div><strong>Power / Utilities:</strong> ${e.powerWater}</div>
      </div>

      <div style="background: #fffdfa; border: 1px solid #fde047; padding: 14px; border-radius: 6px; font-size: 0.85rem; color: #713f12;">
        <strong>Project Summary:</strong> ${e.brief}
      </div>
    </div>
  `;
}

function renderEfileTrackingResult(f, container) {
  container.innerHTML = `
    <div class="tracking-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 20px;">
        <div>
          <span class="sub-badge" style="background: #eff6ff; color: #1e40af;"><i class="fa-solid fa-sitemap"></i> Addressed-Only Movement Tracking</span>
          <h3 style="font-size: 1.4rem; color: #042e1b;">${f.subject}</h3>
          <p style="font-size: 0.88rem; color: #64748b;">Token: <strong>${f.token}</strong> • From: <strong>${f.senderSide}</strong> ➔ Addressed To: <strong>${f.recipientSide}</strong></p>
        </div>
        <div style="text-align: right;">
          <span class="status-pill status-scrutiny">${f.status}</span>
          <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 4px;">Date: ${f.appliedDate}</div>
        </div>
      </div>

      <div style="background: #e8f5ee; border-left: 4px solid #064e2e; padding: 14px 18px; border-radius: 6px; margin-bottom: 18px; font-size: 0.88rem;">
        <div><strong>Official Movement Stage:</strong> <span style="font-weight: 700; color: #042e1b;">${f.fileStage}</span></div>
        <div style="margin-top: 4px;"><strong>Responsible Officer:</strong> ${f.inchargeName} (${f.designation})</div>
      </div>

      <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 18px; border-radius: 8px; margin-bottom: 16px; font-size: 0.88rem;">
        <div style="margin-bottom: 8px;"><strong>Category:</strong> ${f.category} • <strong>Urgency:</strong> <span style="color: #b91c1c; font-weight: bold;">${f.urgency}</span></div>
        <div><strong>Case Summary:</strong> ${f.details}</div>
      </div>

      <div style="margin-bottom: 18px;">
        <strong style="font-size: 0.88rem; color: #064e2e;"><i class="fa-solid fa-paperclip"></i> Attached Official Documents:</strong>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
          ${f.attachments && f.attachments.length > 0 ? f.attachments.map(att => `
            <span style="background: #ffffff; border: 1px solid #cbd5e1; padding: 6px 12px; border-radius: 6px; font-size: 0.8rem; display: inline-flex; align-items: center; gap: 6px;">
              <i class="fa-solid fa-file-pdf" style="color: #b91c1c;"></i> ${att.name} (${att.size})
            </span>
          `).join('') : '<span style="font-size: 0.8rem; color: #94a3b8;">No documents attached</span>'}
        </div>
      </div>

      <div style="background: #fffdfa; border: 1px solid #fde047; padding: 12px 16px; border-radius: 4px; font-size: 0.85rem; margin-bottom: 16px;">
        <strong style="color: #854d0e;"><i class="fa-solid fa-stamp"></i> Official Minutes / Remarks:</strong>
        <p style="margin: 4px 0 0 0; color: #713f12;">${f.remarks || 'Under formal review.'}</p>
      </div>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <button class="btn btn-gold" onclick="openEfileDocketModal('${f.token}')">
          <i class="fa-solid fa-file-arrow-down"></i> Download / Print Official Minute Docket (PDF)
        </button>
      </div>
    </div>
  `;
}

// ===================================================================
// STRONG ADMIN LOGIN & AUTHENTICATION
// ===================================================================
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    btn.innerHTML = '<i class="fa-regular fa-eye"></i>';
  }
}

function toggleAdminModal() {
  switchTab('admin');
}

function checkAdminAuthState() {
  const isLoggedIn = SIWStorage.isAdminLoggedIn();
  const loggedInState = document.getElementById('adminLoggedInState');
  const loggedOutState = document.getElementById('adminLoggedOutState');
  const navAuthStatus = document.getElementById('adminBtnText');
  const dockAdminText = document.getElementById('dockAdminText');

  const adminTraineesSection = document.getElementById('adminTraineesSection');
  const lockedTraineesSection = document.getElementById('lockedTraineesSection');
  const btnAdminDownloadTraineesTop = document.getElementById('btnAdminDownloadTraineesTop');

  if (isLoggedIn) {
    if (loggedInState) loggedInState.style.display = 'block';
    if (loggedOutState) loggedOutState.style.display = 'none';
    if (navAuthStatus) navAuthStatus.textContent = 'HQ Admin Desk (Active)';
    if (dockAdminText) dockAdminText.textContent = 'HQ Admin Desk (Active)';

    // Trainees Tab: Exclusively visible to Admin
    if (adminTraineesSection) adminTraineesSection.style.display = 'block';
    if (lockedTraineesSection) lockedTraineesSection.style.display = 'none';
    if (btnAdminDownloadTraineesTop) btnAdminDownloadTraineesTop.style.display = 'inline-flex';

    // Home Upload Buttons (Admin Only)
    const btnHomeAddLeadership = document.getElementById('btnHomeAddLeadership');
    const btnHomeAddMedia = document.getElementById('btnHomeAddMedia');
    if (btnHomeAddLeadership) btnHomeAddLeadership.style.display = 'inline-flex';
    if (btnHomeAddMedia) btnHomeAddMedia.style.display = 'inline-flex';

    refreshAdminDashboard();
    renderPublicTraineesList('all');
  } else {
    if (loggedInState) loggedInState.style.display = 'none';
    if (loggedOutState) loggedOutState.style.display = 'block';
    if (navAuthStatus) navAuthStatus.textContent = 'HQ Admin Portal';
    if (dockAdminText) dockAdminText.textContent = 'HQ Admin Portal';

    // Trainees Tab: Restricted from Public / Non-Admin
    if (adminTraineesSection) adminTraineesSection.style.display = 'none';
    if (lockedTraineesSection) lockedTraineesSection.style.display = 'block';
    if (btnAdminDownloadTraineesTop) btnAdminDownloadTraineesTop.style.display = 'none';

    // Home Upload Buttons: Strictly Hidden from Public
    const btnHomeAddLeadership = document.getElementById('btnHomeAddLeadership');
    const btnHomeAddMedia = document.getElementById('btnHomeAddMedia');
    if (btnHomeAddLeadership) btnHomeAddLeadership.style.display = 'none';
    if (btnHomeAddMedia) btnHomeAddMedia.style.display = 'none';
  }
}

async function handleTraineeTabQuickUnlock(e) {
  e.preventDefault();
  const passInput = document.getElementById('traineeTabAdminPass');
  if (!passInput) return;
  const entered = passInput.value.trim();
  let realPassword = SIWStorage.getAdminPassword();

  // If local does not match, attempt instant cloud sync in case password was changed on another device!
  if (entered !== realPassword && entered !== DEFAULT_ADMIN_PASSWORD) {
    if (typeof SIWCloudSync !== 'undefined') {
      try {
        const cloudData = await SIWCloudSync.pull(true);
        if (cloudData && cloudData.adminPassword) {
          realPassword = cloudData.adminPassword;
        }
      } catch (err) {
        console.warn('Cloud pull before unlock failed:', err);
      }
    }
  }

  if (entered === realPassword || (entered === DEFAULT_ADMIN_PASSWORD && realPassword === DEFAULT_ADMIN_PASSWORD)) {
    SIWStorage.setAdminLoggedIn(true);
    checkAdminAuthState();
    passInput.value = '';
    showToast('Admin Access Granted', 'Enrolled trainees register unlocked for administration.', 'success');
    if (typeof SIWCloudSync !== 'undefined') {
      await SIWCloudSync.pull(true);
    }
    refreshAdminDashboard();
    renderAdminTraineesTable();
  } else {
    showToast('Access Denied', 'Incorrect administrator passphrase.', 'error');
    passInput.focus();
  }
}

async function handleAdminLogin(e) {
  e.preventDefault();
  const username = document.getElementById('adminDirectUsername').value.trim();
  const password = document.getElementById('adminDirectPassword').value.trim();

  let realPassword = SIWStorage.getAdminPassword();

  // If local does not match, attempt instant cloud sync in case password was changed on another device!
  if (username === 'admin' && password !== realPassword && password !== DEFAULT_ADMIN_PASSWORD) {
    if (typeof SIWCloudSync !== 'undefined') {
      try {
        const cloudData = await SIWCloudSync.pull(true);
        if (cloudData && cloudData.adminPassword) {
          realPassword = cloudData.adminPassword;
        }
      } catch (err) {
        console.warn('Cloud pull before login failed:', err);
      }
    }
  }

  if (username === 'admin' && (password === realPassword || (password === DEFAULT_ADMIN_PASSWORD && realPassword === DEFAULT_ADMIN_PASSWORD))) {
    SIWStorage.setAdminLoggedIn(true);
    checkAdminAuthState();
    showToast('Authenticated', 'Access granted to Directorate Head Quarter Control Center.', 'success');
    if (typeof SIWCloudSync !== 'undefined') {
      await SIWCloudSync.pull(true);
    }
    refreshAdminDashboard();
    renderAdminTraineesTable();
  } else {
    showToast('Access Denied', 'Invalid administrative credentials.', 'error');
  }
}

function logoutAdmin() {
  SIWStorage.setAdminLoggedIn(false);
  checkAdminAuthState();
  showToast('Logged Out', 'Administrative session terminated.', 'info');
  switchTab('home');
}

function openAdminPasswordModal() {
  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-key"></i> Change Administrative Passphrase (Universal)`;
  body.innerHTML = `
    <form onsubmit="handleUpdateAdminPassword(event)">
      <div class="form-group">
        <label>Current Administrator Passphrase</label>
        <input type="password" id="currAdminPwd" required placeholder="Enter current passphrase">
      </div>
      <div class="form-group">
        <label>New Strong Passphrase</label>
        <input type="password" id="newAdminPwd" required minlength="6" placeholder="Enter new strong passphrase">
        <small style="color: #6b7280; display: block; margin-top: 4px;">Once saved, this passphrase immediately updates across all connected devices and logins.</small>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-cloud-arrow-up"></i> Update & Broadcast to All Devices</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
}

async function handleUpdateAdminPassword(e) {
  e.preventDefault();
  const curr = document.getElementById('currAdminPwd').value;
  const next = document.getElementById('newAdminPwd').value;

  const currentPass = SIWStorage.getAdminPassword();
  if (curr !== currentPass && curr !== DEFAULT_ADMIN_PASSWORD) {
    showToast('Password Error', 'Current password does not match.', 'error');
    return;
  }

  SIWStorage.setAdminPassword(next);
  closeModal('adminUpdateModal');
  showToast('Updating Password', 'Broadcasting new passphrase across all devices...', 'info');

  if (typeof SIWCloudSync !== 'undefined') {
    try {
      await SIWCloudSync.push({ isExplicitPasswordChange: true });
      showToast('Password Broadcasted', 'New administrator passphrase is now live on all devices.', 'success');
    } catch (err) {
      showToast('Saved Locally', 'Saved in local storage. Will replicate once online.', 'warning');
    }
  } else {
    showToast('Password Changed', 'Administrative passphrase successfully updated.', 'success');
  }
}

function switchAdminSubtab(subtabId, btn) {
  document.querySelectorAll('.admin-subtabs-nav .subtab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  document.querySelectorAll('.admin-subtab-content').forEach(c => c.classList.remove('active'));
  const target = document.getElementById(`subtab-${subtabId}`);
  if (target) target.classList.add('active');

  if (subtabId === 'traineesManage') {
    renderAdminTraineesTable();
  } else if (subtabId === 'estatesManage') {
    renderAdminEstatesTable();
  } else if (subtabId === 'efilesManage') {
    renderAdminEfilesTable();
  } else if (subtabId === 'noticesManage') {
    renderAdminNoticesList();
  } else if (subtabId === 'cloudSync' && typeof SIWCloudSync !== 'undefined') {
    SIWCloudSync.updateUIStatus('success');
    const endpointInput = document.getElementById('cloudEndpointUrl');
    if (endpointInput) endpointInput.value = SIWCloudSync.getEndpoint();
  }
}

// Multi-Device Cloud Actions
async function triggerManualCloudSync() {
  showToast('Cloud Sync', 'Synchronizing data across all connected devices...', 'info');
  if (typeof SIWCloudSync !== 'undefined') {
    await SIWCloudSync.syncBothWays(false);
    showToast('Sync Complete', 'All trainee records and passwords are in sync with cloud master.', 'success');
  }
}

async function testCloudConnection() {
  const input = document.getElementById('cloudEndpointUrl');
  const result = document.getElementById('cloudConnectionTestResult');
  if (!input || !result) return;
  const url = input.value.trim();
  result.style.display = 'block';
  result.style.background = '#eff6ff';
  result.style.color = '#1e40af';
  result.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Testing connection to <code>${url}</code>...`;

  try {
    const start = performance.now();
    const res = await fetch(url, { method: 'GET', cache: 'no-store' });
    const elapsed = Math.round(performance.now() - start);
    if (res.ok) {
      const data = await res.json();
      result.style.background = '#f0fdf4';
      result.style.color = '#15803d';
      result.innerHTML = `<i class="fa-solid fa-circle-check"></i> <strong>Connection Successful (${elapsed}ms)</strong>: Cloud database bin responded with HTTP ${res.status}. Master record contains ${data.trainees ? data.trainees.length : 0} verified trainees and universal credentials ready.`;
    } else {
      result.style.background = '#fef2f2';
      result.style.color = '#991b1b';
      result.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>Connection Failed</strong>: Server returned HTTP ${res.status} (${res.statusText}).`;
    }
  } catch (err) {
    result.style.background = '#fef2f2';
    result.style.color = '#991b1b';
    result.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <strong>Connection Error</strong>: ${err.message}. Ensure the URL is valid and allows CORS.`;
  }
}

function saveCustomCloudEndpoint() {
  const input = document.getElementById('cloudEndpointUrl');
  if (!input) return;
  const url = input.value.trim();
  if (typeof SIWCloudSync !== 'undefined') {
    SIWCloudSync.setEndpoint(url);
    showToast('Endpoint Configured', 'Custom cloud endpoint saved. Re-synchronizing...', 'success');
    SIWCloudSync.syncBothWays(false);
  }
}

function refreshAdminDashboard() {
  const trainees = SIWStorage.getTrainees();
  const estates = SIWStorage.getEstates();
  const efiles = SIWStorage.getEfiles();
  const notices = SIWStorage.getNotices();
  const centers = SIWStorage.getCenters();

  const totalInvestment = estates.reduce((sum, item) => sum + (item.investment || 0), 0);
  const rejectedCount = trainees.filter(t => t.status === 'Rejected').length;

  document.getElementById('kpiTraineesCount').textContent = trainees.length;
  document.getElementById('kpiTraineesRejected').textContent = rejectedCount;
  document.getElementById('kpiEstatesCount').textContent = estates.length;
  document.getElementById('kpiEfilesCount').textContent = efiles.length;
  document.getElementById('kpiCentersCount').textContent = centers.length;

  document.getElementById('tabCountTrainees').textContent = trainees.length;
  document.getElementById('tabCountEstates').textContent = estates.length;
  document.getElementById('tabCountCenters').textContent = centers.length;
  document.getElementById('tabCountEfiles').textContent = efiles.length;
  document.getElementById('tabCountNotices').textContent = notices.length;

  renderAdminTraineesTable();
  renderAdminEstatesTable();
  renderAdminCentersManagementTable();
  renderAdminEfilesTable();
  renderAdminMediaList();
  renderAdminNoticesList();
}

// ===================================================================
// ADMIN TRAINEES FULL CRUD (SORTED BY CENTER SEQUENCE)
// ===================================================================
function renderAdminTraineesTable() {
  const tbody = document.getElementById('traineesTableBody');
  if (!tbody) return;

  const searchQuery = (document.getElementById('traineeSearchQuery')?.value || '').toLowerCase();
  const filterDistrict = document.getElementById('traineeFilterDistrict')?.value || 'All';
  const filterStatus = document.getElementById('traineeFilterStatus')?.value || 'All';

  let trainees = getSortedTraineesByCenter('all');

  const filtered = trainees.filter(t => {
    const matchesSearch = (t.fullName && t.fullName.toLowerCase().includes(searchQuery)) ||
                          (t.cnic && t.cnic.toLowerCase().includes(searchQuery)) ||
                          (t.accountNo && t.accountNo.toLowerCase().includes(searchQuery)) ||
                          (t.vendorNo && t.vendorNo.toLowerCase().includes(searchQuery)) ||
                          (t.token && t.token.toLowerCase().includes(searchQuery));
    const matchesDistrict = (filterDistrict === 'All') || (t.district === filterDistrict);
    const matchesStatus = (filterStatus === 'All') || (t.status === filterStatus);
    return matchesSearch && matchesDistrict && matchesStatus;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align: center; padding: 24px; color: #64748b;">No trainee records found.</td></tr>`;
    return;
  }

  let lastCenter = "";
  let html = "";

  filtered.forEach(t => {
    if (t.center !== lastCenter) {
      lastCenter = t.center;
      html += `
        <tr style="background: #f0fdf4; border-top: 2px solid #064e2e;">
          <td colspan="9" style="padding: 8px 16px; font-weight: 800; color: #042e1b;">
            <i class="fa-solid fa-building-columns" style="color: #064e2e; margin-right: 6px;"></i>
            Center Sequence Group: ${t.center}
          </td>
        </tr>
      `;
    }

    const isRejected = t.status === 'Rejected';
    html += `
      <tr>
        <td><span class="token-code">${t.token}</span></td>
        <td><strong>${t.center}</strong></td>
        <td>
          <strong>${t.fullName}</strong><br>
          <small style="color: #64748b;">s/o ${t.fatherName} • ${t.phone}</small>
        </td>
        <td><span style="font-family: monospace; font-weight: bold;">${t.cnic}</span></td>
        <td>
          <strong>${t.bankName || 'NBP'}</strong><br>
          <small style="font-family: monospace;">${t.accountNo || 'N/A'}</small>
        </td>
        <td><span style="font-weight: 700; color: #1e40af;">${t.vendorNo || 'N/A'}</span></td>
        <td><span style="color: #064e2e; font-weight: 600;">${t.course}</span></td>
        <td>
          <span class="status-pill status-${t.status.toLowerCase().replace(/\s+/g, '')}">${t.status}</span>
          ${isRejected ? `
            <div style="margin-top: 4px;">
              <small class="rejection-reason-pill"><strong>Reason:</strong> ${t.rejectionReason || 'Ineligible'}</small>
            </div>
          ` : ''}
        </td>
        <td>
          <div class="action-btns-group">
            <button class="btn btn-sm btn-outline-primary" title="Print Slip" onclick="openTraineeSlipModal(${JSON.stringify(t).replace(/"/g, '&quot;')})">
              <i class="fa-solid fa-print"></i>
            </button>
            <button class="btn btn-sm btn-gold" title="Edit All Details" onclick="openAdminEditTraineeModal('${t.token}')">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button class="btn btn-sm btn-danger" title="Delete" onclick="confirmDeleteTrainee('${t.token}')">
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

// ADMIN ADD TRAINEE MODAL
function openAdminAddTraineeModal() {
  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  const centers = SIWStorage.getCenters();

  title.innerHTML = `<i class="fa-solid fa-user-plus"></i> Add New Trainee (Admin Directorate Entry)`;
  body.innerHTML = `
    <form onsubmit="handleAdminCreateTrainee(event)">
      <div class="form-grid-3">
        <div class="form-group">
          <label>Full Name *</label>
          <input type="text" id="admTrName" required placeholder="Candidate Full Name">
        </div>
        <div class="form-group">
          <label>Father's Name *</label>
          <input type="text" id="admTrFather" required placeholder="Father Name">
        </div>
        <div class="form-group">
          <label>CNIC (Unique) *</label>
          <input type="text" id="admTrCnic" required placeholder="54400-XXXXXXX-X" oninput="formatCNIC(this)">
        </div>
        <div class="form-group">
          <label>Bank Name *</label>
          <select id="admTrBank" required>
            <option value="National Bank of Pakistan (NBP)">NBP</option>
            <option value="Bank of Khyber (BOK)">BOK</option>
            <option value="Habib Bank Limited (HBL)">HBL</option>
            <option value="United Bank Limited (UBL)">UBL</option>
          </select>
        </div>
        <div class="form-group">
          <label>Bank Account Number (Unique) *</label>
          <input type="text" id="admTrAccount" required placeholder="Account or IBAN">
        </div>
        <div class="form-group">
          <label>Vendor Number (Unique) *</label>
          <input type="text" id="admTrVendor" required placeholder="VR-XXXXXX">
        </div>
        <div class="form-group">
          <label>Allocated Center *</label>
          <select id="admTrCenter" required>
            ${centers.map(c => `<option value="[${c.code}] ${c.name}">[${c.code}] ${c.name} (${c.district})</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Trade / Course *</label>
          <input type="text" id="admTrTrade" required placeholder="e.g. Tailoring & Knitting, Carpet Weaving">
        </div>
        <div class="form-group">
          <label>Admission Status *</label>
          <select id="admTrStatus" onchange="toggleAdminRejectionReasonField(this.value)">
            <option value="Approved">Approved</option>
            <option value="Under Scrutiny">Under Scrutiny</option>
            <option value="Waiting List">Waiting List</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div class="form-group full-width" id="admRejectionReasonGroup" style="display: none;">
        <label style="color: #b91c1c; font-weight: bold;">Rejection Reason (Required if Rejected) *</label>
        <input type="text" id="admTrRejectionReason" placeholder="Enter reason (e.g. Age limit exceeded, Academic mismatch, Duplicate record)">
      </div>

      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Save Trainee</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
}

function toggleAdminRejectionReasonField(status) {
  const group = document.getElementById('admRejectionReasonGroup');
  if (group) {
    group.style.display = status === 'Rejected' ? 'block' : 'none';
  }
}

function handleAdminCreateTrainee(e) {
  e.preventDefault();
  const cnicVal = document.getElementById('admTrCnic').value.trim();
  const accVal = document.getElementById('admTrAccount').value.trim();
  const venVal = document.getElementById('admTrVendor').value.trim();
  const status = document.getElementById('admTrStatus').value;
  const reason = document.getElementById('admTrRejectionReason')?.value.trim() || '';

  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const token = `SIW-TR-2026-${randomNum}`;

  const trainee = {
    token: token,
    fullName: document.getElementById('admTrName').value.trim(),
    fatherName: document.getElementById('admTrFather').value.trim(),
    cnic: cnicVal,
    gender: "Male",
    dob: "2002-01-01",
    phone: "03001234567",
    bankName: document.getElementById('admTrBank').value,
    accountNo: accVal,
    vendorNo: venVal,
    district: "Quetta",
    center: document.getElementById('admTrCenter').value,
    course: document.getElementById('admTrTrade').value,
    shift: "Morning (08:30 AM - 01:30 PM)",
    qualification: "Matriculation (SSC)",
    address: "Quetta Balochistan",
    status: status,
    rejectionReason: status === 'Rejected' ? reason : '',
    appliedDate: new Date().toISOString().split('T')[0]
  };

  SIWStorage.saveTrainee(trainee);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  renderPublicTraineesList('all');
  showToast('Trainee Created', `Candidate added under token ${token}.`, 'success');
}

// ADMIN EDIT TRAINEE MODAL (FULL DETAILS)
function openAdminEditTraineeModal(token) {
  const trainees = SIWStorage.getTrainees();
  const t = trainees.find(x => x.token === token);
  if (!t) return;

  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');
  const centers = SIWStorage.getCenters();

  title.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Trainee Record: ${t.fullName} (${t.token})`;

  body.innerHTML = `
    <form onsubmit="handleAdminSaveEditTrainee(event, '${t.token}')">
      <div class="form-grid-3">
        <div class="form-group">
          <label>Full Name *</label>
          <input type="text" id="editTrName" value="${t.fullName}" required>
        </div>
        <div class="form-group">
          <label>Father's Name *</label>
          <input type="text" id="editTrFather" value="${t.fatherName}" required>
        </div>
        <div class="form-group">
          <label>CNIC Number *</label>
          <input type="text" id="editTrCnic" value="${t.cnic}" required oninput="formatCNIC(this)">
        </div>
        <div class="form-group">
          <label>Bank Name *</label>
          <input type="text" id="editTrBank" value="${t.bankName || 'NBP'}" required>
        </div>
        <div class="form-group">
          <label>Bank Account Number *</label>
          <input type="text" id="editTrAccount" value="${t.accountNo || ''}" required>
        </div>
        <div class="form-group">
          <label>Vendor Number *</label>
          <input type="text" id="editTrVendor" value="${t.vendorNo || ''}" required>
        </div>
        <div class="form-group">
          <label>Allocated Center *</label>
          <select id="editTrCenter" required>
            ${centers.map(c => `<option value="[${c.code}] ${c.name}" ${t.center.includes(c.code) ? 'selected' : ''}>[${c.code}] ${c.name}</option>`).join('')}
          </select>
        </div>
        <div class="form-group">
          <label>Trade / Course *</label>
          <input type="text" id="editTrCourse" value="${t.course}" required>
        </div>
        <div class="form-group">
          <label>Admission Status *</label>
          <select id="editTrStatus" onchange="toggleAdminRejectionReasonFieldEdit(this.value)">
            <option value="Approved" ${t.status === 'Approved' ? 'selected' : ''}>Approved</option>
            <option value="Under Scrutiny" ${t.status === 'Under Scrutiny' ? 'selected' : ''}>Under Scrutiny</option>
            <option value="Waiting List" ${t.status === 'Waiting List' ? 'selected' : ''}>Waiting List</option>
            <option value="Rejected" ${t.status === 'Rejected' ? 'selected' : ''}>Rejected</option>
          </select>
        </div>
      </div>

      <div class="form-group full-width" id="editRejectionReasonGroup" style="display: ${t.status === 'Rejected' ? 'block' : 'none'};">
        <label style="color: #b91c1c; font-weight: bold;">Reason for Rejection *</label>
        <input type="text" id="editTrRejectionReason" value="${t.rejectionReason || ''}" placeholder="Enter specific reason for rejection...">
      </div>

      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Update Record</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
}

function toggleAdminRejectionReasonFieldEdit(status) {
  const group = document.getElementById('editRejectionReasonGroup');
  if (group) {
    group.style.display = status === 'Rejected' ? 'block' : 'none';
  }
}

function handleAdminSaveEditTrainee(e, token) {
  e.preventDefault();
  const status = document.getElementById('editTrStatus').value;
  const reason = document.getElementById('editTrRejectionReason')?.value.trim() || '';

  const updatedFields = {
    fullName: document.getElementById('editTrName').value.trim(),
    fatherName: document.getElementById('editTrFather').value.trim(),
    cnic: document.getElementById('editTrCnic').value.trim(),
    bankName: document.getElementById('editTrBank').value.trim(),
    accountNo: document.getElementById('editTrAccount').value.trim(),
    vendorNo: document.getElementById('editTrVendor').value.trim(),
    center: document.getElementById('editTrCenter').value,
    course: document.getElementById('editTrCourse').value.trim(),
    status: status,
    rejectionReason: status === 'Rejected' ? reason : ''
  };

  SIWStorage.updateTrainee(token, updatedFields);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  renderPublicTraineesList('all');
  showToast('Record Updated', `Trainee ${token} modified successfully.`, 'success');
}

function confirmDeleteTrainee(token) {
  if (confirm(`Permanently remove trainee record ${token}?`)) {
    SIWStorage.deleteTrainee(token);
    refreshAdminDashboard();
    renderPublicTraineesList('all');
    showToast('Record Removed', `Trainee ${token} deleted.`, 'info');
  }
}

// ===================================================================
// ADMIN SIRKI ROAD QUETTA ESTATE (FULL CRUD)
// ===================================================================
function renderAdminEstatesTable() {
  const tbody = document.getElementById('estatesTableBody');
  if (!tbody) return;

  const searchQuery = (document.getElementById('estateSearchQuery')?.value || '').toLowerCase();
  const filterSize = document.getElementById('estateFilterSize')?.value || 'All';

  const estates = SIWStorage.getEstates();

  const filtered = estates.filter(e => {
    const matchesSearch = (e.companyName && e.companyName.toLowerCase().includes(searchQuery)) ||
                          (e.ownerName && e.ownerName.toLowerCase().includes(searchQuery)) ||
                          (e.token && e.token.toLowerCase().includes(searchQuery));
    const matchesSize = (filterSize === 'All') || (e.plotSize && e.plotSize.includes(filterSize));
    return matchesSearch && matchesSize;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; padding: 24px; color: #64748b;">No plot applications match your criteria for Sirki Road Quetta.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(e => `
    <tr>
      <td><span class="token-code">${e.token}</span></td>
      <td>
        <strong>${e.companyName}</strong><br>
        <small style="color: #64748b;">Sponsor: ${e.ownerName} • Phone: ${e.phone}</small>
      </td>
      <td><strong>${e.plotSize}</strong></td>
      <td><span style="font-weight: 600; color: #064e2e;">${e.industryCategory}</span></td>
      <td><strong>PKR ${e.investment}M</strong></td>
      <td>${e.employment} Staff</td>
      <td><span class="status-pill status-scrutiny">${e.status}</span></td>
      <td>
        <div class="action-btns-group">
          <button class="btn btn-sm btn-gold" title="Edit" onclick="openAdminEditEstateModal('${e.token}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="btn btn-sm btn-danger" title="Delete" onclick="confirmDeleteEstate('${e.token}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openAdminAddEstateModal() {
  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-plus"></i> Add Plot Application (Sirki Road Quetta)`;
  body.innerHTML = `
    <form onsubmit="handleAdminCreateEstate(event)">
      <div class="form-grid-3">
        <div class="form-group">
          <label>Enterprise Name *</label>
          <input type="text" id="admEpCompany" required placeholder="Factory / Company Name">
        </div>
        <div class="form-group">
          <label>Proprietor / Sponsor *</label>
          <input type="text" id="admEpOwner" required placeholder="Sponsor Full Name">
        </div>
        <div class="form-group">
          <label>Sponsor CNIC *</label>
          <input type="text" id="admEpCnic" required placeholder="54400-XXXXXXX-X" oninput="formatCNIC(this)">
        </div>
        <div class="form-group">
          <label>Plot Size *</label>
          <select id="admEpSize">
            <option value="500 Sq. Yards">500 Sq. Yards</option>
            <option value="1,000 Sq. Yards">1,000 Sq. Yards</option>
            <option value="0.5 Acre">0.5 Acre</option>
            <option value="1.0 Acre">1.0 Acre</option>
            <option value="2.0 Acres">2.0 Acres</option>
          </select>
        </div>
        <div class="form-group">
          <label>Industrial Sector *</label>
          <select id="admEpCategory">
            <option value="Marble Cutting & Granite Finishing">Marble Cutting & Granite Finishing</option>
            <option value="Cold Storage & Fruit Preservation">Cold Storage & Fruit Preservation</option>
            <option value="Carpet Weaving & Textile Handicrafts">Carpet Weaving & Textile</option>
            <option value="Light Engineering & Fabrication">Light Engineering</option>
          </select>
        </div>
        <div class="form-group">
          <label>Capital Investment (PKR M) *</label>
          <input type="number" id="admEpInvest" required value="20">
        </div>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Add Plot Record</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
}

function handleAdminCreateEstate(e) {
  e.preventDefault();
  const randomNum = Math.floor(100 + Math.random() * 900);
  const token = `SIW-EST-2026-${randomNum}`;

  const plotApp = {
    token: token,
    companyName: document.getElementById('admEpCompany').value.trim(),
    ownerName: document.getElementById('admEpOwner').value.trim(),
    cnic: document.getElementById('admEpCnic').value.trim(),
    ntn: "N/A",
    phone: "03001234567",
    email: "info@estate.com",
    estateName: "Small Industrial Estate, Sirki Road, Quetta",
    plotSize: document.getElementById('admEpSize').value,
    industryCategory: document.getElementById('admEpCategory').value,
    investment: parseFloat(document.getElementById('admEpInvest').value) || 0,
    employment: 20,
    powerWater: "Standard Industrial Feeder",
    brief: "Allotted unit on Sirki Road Quetta.",
    status: "Under Review",
    appliedDate: new Date().toISOString().split('T')[0]
  };

  SIWStorage.saveEstate(plotApp);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  showToast('Plot Record Created', `Plot token ${token} registered.`, 'success');
}

function openAdminEditEstateModal(token) {
  const estates = SIWStorage.getEstates();
  const e = estates.find(x => x.token === token);
  if (!e) return;

  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Plot Application (${e.token})`;
  body.innerHTML = `
    <form onsubmit="handleAdminSaveEditEstate(event, '${e.token}')">
      <div class="form-grid-3">
        <div class="form-group">
          <label>Enterprise Name *</label>
          <input type="text" id="editEpCompany" value="${e.companyName}" required>
        </div>
        <div class="form-group">
          <label>Sponsor Name *</label>
          <input type="text" id="editEpOwner" value="${e.ownerName}" required>
        </div>
        <div class="form-group">
          <label>Plot Size *</label>
          <input type="text" id="editEpSize" value="${e.plotSize}" required>
        </div>
        <div class="form-group">
          <label>Sector Category *</label>
          <input type="text" id="editEpCategory" value="${e.industryCategory}" required>
        </div>
        <div class="form-group">
          <label>Investment (PKR M) *</label>
          <input type="number" id="editEpInvest" value="${e.investment}" required>
        </div>
        <div class="form-group">
          <label>Allotment Status *</label>
          <select id="editEpStatus">
            <option value="Under Review" ${e.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
            <option value="Site Inspection Scheduled" ${e.status === 'Site Inspection Scheduled' ? 'selected' : ''}>Site Inspection Scheduled</option>
            <option value="Provisional Allotment Issued" ${e.status === 'Provisional Allotment Issued' ? 'selected' : ''}>Provisional Allotment Issued</option>
            <option value="Final 99-Year Lease Executed" ${e.status === 'Final 99-Year Lease Executed' ? 'selected' : ''}>Final 99-Year Lease Executed</option>
            <option value="Declined" ${e.status === 'Declined' ? 'selected' : ''}>Declined</option>
          </select>
        </div>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Update Plot Record</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
}

function handleAdminSaveEditEstate(e, token) {
  e.preventDefault();
  const updatedFields = {
    companyName: document.getElementById('editEpCompany').value.trim(),
    ownerName: document.getElementById('editEpOwner').value.trim(),
    plotSize: document.getElementById('editEpSize').value.trim(),
    industryCategory: document.getElementById('editEpCategory').value.trim(),
    investment: parseFloat(document.getElementById('editEpInvest').value) || 0,
    status: document.getElementById('editEpStatus').value
  };

  SIWStorage.updateEstate(token, updatedFields);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  showToast('Estate Updated', `Plot application ${token} updated.`, 'success');
}

function confirmDeleteEstate(token) {
  if (confirm(`Permanently remove plot application ${token}?`)) {
    SIWStorage.deleteEstate(token);
    refreshAdminDashboard();
    showToast('Record Removed', `Plot application ${token} deleted.`, 'info');
  }
}

// ===================================================================
// ADMIN CENTERS MANAGEMENT (FULL CRUD)
// ===================================================================
function renderAdminCentersManagementTable() {
  const tbody = document.getElementById('adminCentersManagementBody');
  if (!tbody) return;

  const searchQuery = (document.getElementById('adminCenterSearchQuery')?.value || '').toLowerCase();
  const filterDistrict = document.getElementById('adminCenterFilterDistrict')?.value || 'All';
  const filterStatus = document.getElementById('adminCenterFilterStatus')?.value || 'All';

  const centers = SIWStorage.getCenters();

  const filtered = centers.filter(c => {
    const matchesSearch = c.code.toLowerCase().includes(searchQuery) ||
                          c.name.toLowerCase().includes(searchQuery) ||
                          c.trade.toLowerCase().includes(searchQuery);
    const matchesDistrict = (filterDistrict === 'All') || (c.district === filterDistrict);
    const matchesStatus = (filterStatus === 'All') ||
                          (filterStatus === 'Functional' && c.status.toLowerCase().includes('func') && !c.status.toLowerCase().includes('non')) ||
                          (filterStatus === 'Non-functional' && c.status.toLowerCase().includes('non'));
    return matchesSearch && matchesDistrict && matchesStatus;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 24px; color: #64748b;">No centers match your filter.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(c => `
    <tr>
      <td><span class="token-code">${c.code}</span></td>
      <td><strong>${c.name}</strong></td>
      <td>${c.district}</td>
      <td><span style="color: #064e2e; font-weight: 600;">${c.trade}</span></td>
      <td>
        <span class="status-pill ${c.status.toLowerCase().includes('func') && !c.status.toLowerCase().includes('non') ? 'status-approved' : 'status-rejected'}">
          ${c.status}
        </span>
      </td>
      <td>${c.type || 'Govt'}</td>
      <td>
        <div class="action-btns-group">
          <button class="btn btn-sm btn-gold" title="Edit Center" onclick="openAdminEditCenterModal('${c.code}')">
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button class="btn btn-sm btn-danger" title="Delete Center" onclick="confirmDeleteCenter('${c.code}')">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openAdminAddCenterModal() {
  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-plus"></i> Add New Small Industries Center`;
  body.innerHTML = `
    <form onsubmit="handleAdminCreateCenter(event)">
      <div class="form-grid-3">
        <div class="form-group">
          <label>Center Official Code *</label>
          <input type="text" id="admCenterCode" required placeholder="e.g. QA7890">
        </div>
        <div class="form-group">
          <label>Center Name *</label>
          <input type="text" id="admCenterName" required placeholder="e.g. Traditional Embroidery Center">
        </div>
        <div class="form-group">
          <label>District *</label>
          <input type="text" id="admCenterDistrict" required placeholder="e.g. Quetta, Mastung">
        </div>
        <div class="form-group">
          <label>Official Trade *</label>
          <input type="text" id="admCenterTrade" required placeholder="e.g. Carpet Training, Leather Embroidery">
        </div>
        <div class="form-group">
          <label>Operational Status *</label>
          <select id="admCenterStatus">
            <option value="Functional">Functional</option>
            <option value="Non-functional">Non-functional</option>
          </select>
        </div>
        <div class="form-group">
          <label>Premises Type</label>
          <input type="text" id="admCenterType" value="Govt" placeholder="Govt, Rented, etc.">
        </div>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Add Center</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
}

function handleAdminCreateCenter(e) {
  e.preventDefault();
  const newCenter = {
    code: document.getElementById('admCenterCode').value.trim(),
    name: document.getElementById('admCenterName').value.trim(),
    district: document.getElementById('admCenterDistrict').value.trim(),
    trade: document.getElementById('admCenterTrade').value.trim(),
    status: document.getElementById('admCenterStatus').value,
    type: document.getElementById('admCenterType').value.trim()
  };

  SIWStorage.addCenter(newCenter);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  renderCentersDirectory();
  populateDistrictDropdowns();
  populateEfilingSenderRecipient();
  showToast('Center Added', `Center ${newCenter.code} added to directory.`, 'success');
}

function openAdminEditCenterModal(code) {
  const centers = SIWStorage.getCenters();
  const c = centers.find(x => x.code === code);
  if (!c) return;

  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Center: ${c.code}`;
  body.innerHTML = `
    <form onsubmit="handleAdminSaveEditCenter(event, '${c.code}')">
      <div class="form-grid-3">
        <div class="form-group">
          <label>Center Name *</label>
          <input type="text" id="editCenterName" value="${c.name}" required>
        </div>
        <div class="form-group">
          <label>District *</label>
          <input type="text" id="editCenterDistrict" value="${c.district}" required>
        </div>
        <div class="form-group">
          <label>Trade *</label>
          <input type="text" id="editCenterTrade" value="${c.trade}" required>
        </div>
        <div class="form-group">
          <label>Status *</label>
          <select id="editCenterStatus">
            <option value="Functional" ${c.status.toLowerCase().includes('func') && !c.status.toLowerCase().includes('non') ? 'selected' : ''}>Functional</option>
            <option value="Non-functional" ${c.status.toLowerCase().includes('non') ? 'selected' : ''}>Non-functional</option>
          </select>
        </div>
        <div class="form-group">
          <label>Premises Type</label>
          <input type="text" id="editCenterType" value="${c.type || 'Govt'}">
        </div>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Update Center</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
}

function handleAdminSaveEditCenter(e, code) {
  e.preventDefault();
  const fields = {
    name: document.getElementById('editCenterName').value.trim(),
    district: document.getElementById('editCenterDistrict').value.trim(),
    trade: document.getElementById('editCenterTrade').value.trim(),
    status: document.getElementById('editCenterStatus').value,
    type: document.getElementById('editCenterType').value.trim()
  };

  SIWStorage.updateCenter(code, fields);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  renderCentersDirectory();
  populateDistrictDropdowns();
  populateEfilingSenderRecipient();
  showToast('Center Updated', `Center ${code} updated successfully.`, 'success');
}

function confirmDeleteCenter(code) {
  if (confirm(`Are you sure you want to delete center ${code} from official directory?`)) {
    SIWStorage.deleteCenter(code);
    refreshAdminDashboard();
    renderCentersDirectory();
    populateDistrictDropdowns();
    populateEfilingSenderRecipient();
    showToast('Center Deleted', `Center ${code} removed.`, 'info');
  }
}

// ===================================================================
// ADMIN E-FILING DESK
// ===================================================================
function renderAdminEfilesTable() {
  const tbody = document.getElementById('efilesAdminTable');
  if (!tbody) return;

  const searchQuery = (document.getElementById('efileSearchQuery')?.value || '').toLowerCase();
  const filterRecipient = document.getElementById('efileFilterRecipient')?.value || 'All';

  const efiles = SIWStorage.getEfiles();

  const filtered = efiles.filter(f => {
    const matchesSearch = (f.inchargeName && f.inchargeName.toLowerCase().includes(searchQuery)) ||
                          (f.senderSide && f.senderSide.toLowerCase().includes(searchQuery)) ||
                          (f.token && f.token.toLowerCase().includes(searchQuery)) ||
                          (f.subject && f.subject.toLowerCase().includes(searchQuery));
    const matchesRecipient = (filterRecipient === 'All') ||
                             (filterRecipient === 'Directorate' && f.recipientSide.includes('Directorate')) ||
                             (filterRecipient === 'B-TEVTA' && f.recipientSide.includes('B-TEVTA')) ||
                             (filterRecipient === 'Labour' && f.recipientSide.includes('Labour')) ||
                             (filterRecipient === 'Center' && f.recipientSide.includes('Center'));
    return matchesSearch && matchesRecipient;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 24px; color: #64748b;">No e-filing cases match your filter.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(f => `
    <tr>
      <td><span class="token-code">${f.token}</span></td>
      <td>
        <strong>${f.senderSide}</strong><br>
        <small style="color: #64748b;">${f.inchargeName} (${f.designation})</small>
      </td>
      <td>
        <span class="pill-badge pill-green"><i class="fa-solid fa-envelope"></i> ${f.recipientSide}</span>
      </td>
      <td>
        <strong>${f.subject}</strong><br>
        <small style="color: #64748b;">${f.category}</small>
      </td>
      <td><span style="font-weight: 700; color: #042e1b;">${f.fileStage}</span></td>
      <td><small>${f.attachments ? f.attachments.length : 0} file(s)</small></td>
      <td>
        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <button class="btn btn-sm btn-gold" onclick="openEfileDocketModal('${f.token}')" title="Download Official Docket">
            <i class="fa-solid fa-file-arrow-down"></i> Docket
          </button>
          <button class="btn btn-sm btn-primary" onclick="openUpdateEfileModal('${f.token}')">
            <i class="fa-solid fa-pen-to-square"></i> Minute
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function openUpdateEfileModal(token) {
  const efiles = SIWStorage.getEfiles();
  const f = efiles.find(x => x.token === token);
  if (!f) return;

  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-sitemap"></i> Add Minute / Advance Stage (${f.token})`;

  body.innerHTML = `
    <form onsubmit="saveEfileStatusUpdate(event, '${f.token}')">
      <div style="background: #f8fafc; padding: 12px; border-radius: 6px; margin-bottom: 16px; font-size: 0.85rem;">
        <div><strong>Sender:</strong> ${f.senderSide} (${f.inchargeName})</div>
        <div><strong>Addressed To:</strong> ${f.recipientSide}</div>
        <div><strong>Subject:</strong> ${f.subject}</div>
        <div><strong>Current Stage:</strong> ${f.fileStage}</div>
      </div>

      <div class="form-group">
        <label>Advance File Stage</label>
        <select id="editEfileStage" required>
          <option value="Received at Directorate (HQ) Quetta">1. Received at Directorate (HQ) Quetta</option>
          <option value="Under Scrutiny at Directorate HQ">2. Under Scrutiny at Directorate HQ</option>
          <option value="Forwarded to B-TEVTA Balochistan">3. Forwarded to B-TEVTA Balochistan</option>
          <option value="Forwarded to Labour & Manpower Department">4. Forwarded to Labour & Manpower Department</option>
          <option value="Sanction Order Issued & Dispatched">5. Sanction Order Issued & Dispatched</option>
        </select>
      </div>

      <div class="form-group">
        <label>Overall Status</label>
        <select id="editEfileStatus" required>
          <option value="Under Scrutiny">Under Scrutiny</option>
          <option value="Forwarded to B-TEVTA">Forwarded to B-TEVTA</option>
          <option value="Forwarded to Labour Secretary">Forwarded to Labour Secretary</option>
          <option value="Sanction Issued">Sanction Issued</option>
        </select>
      </div>

      <div class="form-group">
        <label>Directorate HQ Official Minutes & Remarks</label>
        <textarea id="editEfileRemarks" rows="3" required placeholder="Enter official minute note...">${f.remarks || ''}</textarea>
      </div>

      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-paper-plane"></i> Save & Advance File</button>
      </div>
    </form>
  `;

  modal.classList.add('active');
}

function saveEfileStatusUpdate(ev, token) {
  ev.preventDefault();
  const fileStage = document.getElementById('editEfileStage').value;
  const status = document.getElementById('editEfileStatus').value;
  const remarks = document.getElementById('editEfileRemarks').value.trim();

  SIWStorage.updateEfile(token, { fileStage, status, remarks });
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  handleDeskViewFilterChange(document.getElementById('efileActiveDeskView')?.value || 'Directorate (HQ) Quetta');
  showToast('File Advanced', `E-file ${token} stage updated.`, 'success');
}

// ===================================================================
// ADMIN LEADERSHIP & MEDIA MANAGEMENT
// ===================================================================
function renderAdminMediaList() {
  // Leadership
  const leaderList = document.getElementById('adminLeadershipList');
  if (leaderList) {
    const leaders = SIWStorage.getLeadership();
    leaderList.innerHTML = leaders.map(l => `
      <div class="media-item-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; transition: all 0.2s ease;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="${l.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'}" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid #17411C; flex-shrink: 0;" alt="${l.name}">
          <div>
            <strong style="font-size: 0.96rem; color: #0f172a;">${l.name}</strong><br>
            <small style="color: #64748b; font-weight: 500;">${l.title}</small>
          </div>
        </div>
        <div class="action-btns-group" style="display: flex; gap: 8px; align-items: center;">
          <button class="btn btn-sm btn-gold" onclick="openEditLeadershipModal(${l.id})" title="Edit Profile Details & Photo" style="padding: 6px 12px; font-size: 0.82rem; font-weight: 600;">
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </button>
          <label class="btn btn-sm btn-primary" style="margin: 0; cursor: pointer; padding: 6px 12px; font-size: 0.82rem; font-weight: 600;" title="Upload photo directly from folder">
            <i class="fa-solid fa-folder-open"></i> Upload Photo
            <input type="file" accept="image/*" style="display: none;" onchange="handleDirectRowPhotoUpload(event, ${l.id})">
          </label>
          <button class="btn btn-sm btn-danger" onclick="confirmDeleteLeader(${l.id})" title="Delete Profile" style="padding: 6px 10px;">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `).join('');
  }

  // Achievements
  const achList = document.getElementById('adminAchievementsList');
  if (achList) {
    const achs = SIWStorage.getAchievements();
    achList.innerHTML = achs.map(a => `
      <div class="media-item-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; margin-bottom: 10px; transition: all 0.2s ease;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <div style="width: 44px; height: 44px; border-radius: 8px; background: ${a.type === 'video' ? '#fee2e2' : '#dcfce7'}; color: ${a.type === 'video' ? '#b91c1c' : '#15803d'}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
            <i class="fa-solid ${a.type === 'video' ? 'fa-video' : 'fa-image'}"></i>
          </div>
          <div>
            <strong style="font-size: 0.95rem; color: #0f172a;">${a.title}</strong> <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; color: #475569;">${a.type}</span><br>
            <small style="color: #64748b;">${a.category} • ${a.date}</small>
          </div>
        </div>
        <div class="action-btns-group" style="display: flex; gap: 8px; align-items: center;">
          <button class="btn btn-sm btn-gold" onclick="openEditAchievementModal(${a.id})" title="Edit Achievement Media" style="padding: 6px 12px; font-size: 0.82rem; font-weight: 600;">
            <i class="fa-solid fa-pen-to-square"></i> Edit
          </button>
          ${a.type === 'photo' ? `
          <label class="btn btn-sm btn-primary" style="margin: 0; cursor: pointer; padding: 6px 12px; font-size: 0.82rem; font-weight: 600;" title="Upload photo directly from folder">
            <i class="fa-solid fa-folder-open"></i> Upload Photo
            <input type="file" accept="image/*" style="display: none;" onchange="handleDirectAchievementPhotoUpload(event, ${a.id})">
          </label>
          ` : ''}
          <button class="btn btn-sm btn-danger" onclick="confirmDeleteAchievement(${a.id})" title="Delete Media" style="padding: 6px 10px;">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    `).join('');
  }
}

// -------------------------------------------------------------------
// DIRECT ACHIEVEMENT PHOTO UPLOAD FROM FOLDER (ONE-CLICK)
// -------------------------------------------------------------------
function handleDirectAchievementPhotoUpload(event, id) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Invalid File', 'Please select a valid image file (JPG, PNG, WebP).', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const maxDim = 800;
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.88);

      SIWStorage.updateAchievement(id, { mediaUrl: optimizedDataUrl });
      refreshAdminDashboard();
      renderLeadershipAndAchievements();
      showToast('Photo Updated', `Achievement photo updated directly from folder (${file.name}).`, 'success');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// -------------------------------------------------------------------
// DIRECT ROW PHOTO UPLOAD FROM FOLDER (ONE-CLICK)
// -------------------------------------------------------------------
function handleDirectRowPhotoUpload(event, id) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Invalid File', 'Please select a valid image file (JPG, PNG, WebP).', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const maxDim = 500;
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.88);

      SIWStorage.updateLeadership(id, { image: optimizedDataUrl });
      refreshAdminDashboard();
      renderLeadershipAndAchievements();
      showToast('Photo Updated', `Officer photo updated directly from folder (${file.name}).`, 'success');
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

// -------------------------------------------------------------------
// IMAGE FILE PROCESSING UTILITIES (DUAL FILE UPLOAD + URL SUPPORT)
// -------------------------------------------------------------------
function handleLeaderImageFileChange(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Invalid File', 'Please select an image file (JPG, PNG, WebP).', 'error');
    return;
  }

  // Compress image to ensure localStorage efficiency
  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const maxDim = 500;
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.88);

      const preview = document.getElementById('admLeaderImgPreview');
      const input = document.getElementById('admLeaderImg');
      const status = document.getElementById('admLeaderFileStatus');

      if (preview) preview.src = optimizedDataUrl;
      if (input) input.value = optimizedDataUrl;
      if (status) {
        status.innerHTML = `<i class="fa-solid fa-circle-check"></i> Image loaded from folder: <strong>${file.name}</strong> (${Math.round(file.size / 1024)} KB)`;
        status.style.display = 'block';
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function updateLeaderImagePreview(url) {
  const preview = document.getElementById('admLeaderImgPreview');
  const status = document.getElementById('admLeaderFileStatus');
  if (preview && url) {
    preview.src = url;
    if (status) status.style.display = 'none';
  }
}

function clearLeaderImageInput() {
  const defaultImg = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300';
  const preview = document.getElementById('admLeaderImgPreview');
  const input = document.getElementById('admLeaderImg');
  const fileInput = document.getElementById('admLeaderFileInput');
  const status = document.getElementById('admLeaderFileStatus');
  if (preview) preview.src = defaultImg;
  if (input) input.value = defaultImg;
  if (fileInput) fileInput.value = '';
  if (status) status.style.display = 'none';
}

// -------------------------------------------------------------------
// ADD LEADERSHIP PROFILE (WITH DIRECT FOLDER UPLOAD & URL OPTION)
// -------------------------------------------------------------------
function openAddLeadershipModal() {
  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  const defaultImg = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300';
  title.innerHTML = `<i class="fa-solid fa-user-tie"></i> Add Leadership Profile`;
  body.innerHTML = `
    <form onsubmit="handleAdminCreateLeader(event)">
      <div class="form-group">
        <label>Officer Full Name *</label>
        <input type="text" id="admLeaderName" required placeholder="e.g. Sardar Abdul Wahab Kakar">
      </div>
      <div class="form-group">
        <label>Official Title / Designation *</label>
        <input type="text" id="admLeaderTitle" required placeholder="e.g. Director, Small Industries Wing">
      </div>
      <div class="form-group">
        <label>Department / Wing *</label>
        <input type="text" id="admLeaderDept" required value="Directorate of Industries & Commerce">
      </div>
      
      <!-- DIRECT FOLDER UPLOAD + URL BOX -->
      <div class="form-group" style="background: #f0fdf4; border: 2px dashed #15803d; border-radius: 12px; padding: 18px; margin-bottom: 18px;">
        <label style="font-weight: 700; color: #17411C; font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-folder-open"></i> Officer Photograph: Upload Directly from Folder or Web URL
        </label>
        
        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 14px;">
          <div style="position: relative; flex-shrink: 0;">
            <img id="admLeaderImgPreview" src="${defaultImg}" alt="Preview" class="live-avatar-preview" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #17411C; box-shadow: 0 4px 12px rgba(23,65,28,0.25);">
            <span style="position: absolute; bottom: -2px; right: -2px; background: #17411C; color: #fff; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; border: 2px solid #fff;"><i class="fa-solid fa-camera"></i></span>
          </div>
          <div style="flex-grow: 1;">
            <div style="margin-bottom: 8px;">
              <label class="btn btn-primary" style="cursor: pointer; padding: 9px 18px; font-weight: 700; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; margin: 0; box-shadow: 0 3px 10px rgba(23,65,28,0.25);">
                <i class="fa-solid fa-folder-open"></i> Choose Image from Folder / PC
                <input type="file" id="admLeaderFileInput" accept="image/*" style="display: none;" onchange="handleLeaderImageFileChange(event)">
              </label>
            </div>
            <div id="admLeaderFileStatus" style="font-size: 0.8rem; color: #15803d; font-weight: 700; display: none; margin-bottom: 4px;"></div>
            <small style="color: #64748b; font-size: 0.78rem; display: block;">Supports all formats: JPG, PNG, WEBP (Max 5MB)</small>
          </div>
        </div>

        <div style="padding-top: 12px; border-top: 1px dashed #cbd5e1;">
          <label style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-bottom: 4px; display: block;">
            <i class="fa-solid fa-link"></i> Or Photo Image URL (Optional Web Link):
          </label>
          <input type="text" id="admLeaderImg" required value="${defaultImg}" placeholder="https://... or upload from folder above" oninput="updateLeaderImagePreview(this.value)">
        </div>
      </div>

      <div class="form-group">
        <label>Executive Quote / Vision Message *</label>
        <textarea id="admLeaderQuote" rows="2" required placeholder="Enter vision message..."></textarea>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent; display: flex; justify-content: flex-end; gap: 10px;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Save Profile</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
  modal.style.display = 'flex';
}

function handleAdminCreateLeader(e) {
  e.preventDefault();
  const leader = {
    id: Date.now(),
    name: document.getElementById('admLeaderName').value.trim(),
    title: document.getElementById('admLeaderTitle').value.trim(),
    department: document.getElementById('admLeaderDept').value.trim(),
    image: document.getElementById('admLeaderImg').value.trim(),
    quote: document.getElementById('admLeaderQuote').value.trim()
  };

  SIWStorage.saveLeadership(leader);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  renderLeadershipAndAchievements();
  showToast('Profile Added', `Added ${leader.name} to Leadership Bureau.`, 'success');
}

// -------------------------------------------------------------------
// EDIT LEADERSHIP PROFILE (WITH DIRECT FOLDER UPLOAD & URL OPTION)
// -------------------------------------------------------------------
function openEditLeadershipModal(id) {
  const leaders = SIWStorage.getLeadership();
  const l = leaders.find(x => x.id == id);
  if (!l) {
    showToast('Not Found', 'Leadership profile not found.', 'error');
    return;
  }

  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-user-pen"></i> Edit Leadership Profile: ${l.name}`;
  body.innerHTML = `
    <form onsubmit="handleAdminSaveEditLeader(event, ${l.id})">
      <div class="form-group">
        <label>Officer Full Name *</label>
        <input type="text" id="admEditLeaderName" required value="${l.name}">
      </div>
      <div class="form-group">
        <label>Official Title / Designation *</label>
        <input type="text" id="admEditLeaderTitle" required value="${l.title}">
      </div>
      <div class="form-group">
        <label>Department / Wing *</label>
        <input type="text" id="admEditLeaderDept" required value="${l.department || 'Directorate of Industries & Commerce'}">
      </div>
      
      <!-- DIRECT FOLDER UPLOAD + URL BOX IN EDIT -->
      <div class="form-group" style="background: #f0fdf4; border: 2px dashed #15803d; border-radius: 12px; padding: 18px; margin-bottom: 18px;">
        <label style="font-weight: 700; color: #17411C; font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <i class="fa-solid fa-folder-open"></i> Officer Photograph: Upload Directly from Folder or Web URL
        </label>
        
        <div style="display: flex; gap: 16px; align-items: center; margin-bottom: 14px;">
          <div style="position: relative; flex-shrink: 0;">
            <img id="admLeaderImgPreview" src="${l.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300'}" alt="Preview" class="live-avatar-preview" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 3px solid #17411C; box-shadow: 0 4px 12px rgba(23,65,28,0.25);">
            <span style="position: absolute; bottom: -2px; right: -2px; background: #17411C; color: #fff; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; border: 2px solid #fff;"><i class="fa-solid fa-camera"></i></span>
          </div>
          <div style="flex-grow: 1;">
            <div style="margin-bottom: 8px;">
              <label class="btn btn-primary" style="cursor: pointer; padding: 9px 18px; font-weight: 700; font-size: 0.9rem; display: inline-flex; align-items: center; gap: 8px; margin: 0; box-shadow: 0 3px 10px rgba(23,65,28,0.25);">
                <i class="fa-solid fa-folder-open"></i> Choose Image from Folder / PC
                <input type="file" id="admLeaderFileInput" accept="image/*" style="display: none;" onchange="handleLeaderImageFileChange(event)">
              </label>
            </div>
            <div id="admLeaderFileStatus" style="font-size: 0.8rem; color: #15803d; font-weight: 700; display: none; margin-bottom: 4px;"></div>
            <small style="color: #64748b; font-size: 0.78rem; display: block;">Supports all formats: JPG, PNG, WEBP (Max 5MB)</small>
          </div>
        </div>

        <div style="padding-top: 12px; border-top: 1px dashed #cbd5e1;">
          <label style="font-size: 0.82rem; font-weight: 600; color: #475569; margin-bottom: 4px; display: block;">
            <i class="fa-solid fa-link"></i> Photo Image URL (direct link or uploaded file data):
          </label>
          <input type="text" id="admLeaderImg" required value="${l.image || ''}" placeholder="https://... or upload from folder above" oninput="updateLeaderImagePreview(this.value)">
        </div>
      </div>

      <div class="form-group">
        <label>Executive Quote / Vision Message *</label>
        <textarea id="admEditLeaderQuote" rows="3" required>${l.quote || ''}</textarea>
      </div>

      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent; display: flex; justify-content: flex-end; gap: 10px;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Update Profile</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
  modal.style.display = 'flex';
}

function handleAdminSaveEditLeader(e, id) {
  e.preventDefault();
  const updatedFields = {
    name: document.getElementById('admEditLeaderName').value.trim(),
    title: document.getElementById('admEditLeaderTitle').value.trim(),
    department: document.getElementById('admEditLeaderDept').value.trim(),
    image: document.getElementById('admLeaderImg').value.trim(),
    quote: document.getElementById('admEditLeaderQuote').value.trim()
  };

  SIWStorage.updateLeadership(id, updatedFields);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  renderLeadershipAndAchievements();
  showToast('Profile Updated', `Successfully updated profile of ${updatedFields.name}.`, 'success');
}

function confirmDeleteLeader(id) {
  if (confirm("Remove this leadership profile?")) {
    SIWStorage.deleteLeadership(id);
    refreshAdminDashboard();
    renderLeadershipAndAchievements();
    showToast('Removed', 'Leadership profile removed.', 'info');
  }
}

// -------------------------------------------------------------------
// ADD ACHIEVEMENT MEDIA (PHOTO / VIDEO)
// -------------------------------------------------------------------
function handleAchievementMediaFileChange(event) {
  const file = event.target.files?.[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    showToast('Invalid File', 'Please select an image file (JPG, PNG, WebP).', 'error');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      const maxDim = 800;
      let width = img.width;
      let height = img.height;
      if (width > maxDim || height > maxDim) {
        if (width > height) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
      }
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.86);

      const input = document.getElementById('admAchUrl');
      const status = document.getElementById('admAchFileStatus');

      if (input) input.value = optimizedDataUrl;
      if (status) {
        status.innerHTML = `<i class="fa-solid fa-circle-check"></i> Image loaded from device: <strong>${file.name}</strong>`;
        status.style.display = 'block';
      }
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function openAddAchievementModal() {
  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-photo-film"></i> Add Achievement Media (Photo / Video)`;
  body.innerHTML = `
    <form onsubmit="handleAdminCreateAchievement(event)">
      <div class="form-group">
        <label>Achievement / Event Title *</label>
        <input type="text" id="admAchTitle" required placeholder="e.g. Modern Machinery Induction Ceremony">
      </div>
      <div class="form-group">
        <label>Media Type *</label>
        <select id="admAchType">
          <option value="photo">Photo / Picture</option>
          <option value="video">Broadcast Video (YouTube / MP4 Embed)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Media URL or Upload Image *</label>
        <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 8px;">
          <label class="upload-file-btn">
            <i class="fa-solid fa-cloud-arrow-up"></i> Upload Photo File
            <input type="file" id="admAchFileInput" accept="image/*" style="display: none;" onchange="handleAchievementMediaFileChange(event)">
          </label>
          <span style="font-size: 0.8rem; color: #64748b;">or paste URL below</span>
        </div>
        <div id="admAchFileStatus" style="font-size: 0.78rem; color: #15803d; font-weight: 600; display: none; margin-bottom: 6px;"></div>
        <input type="text" id="admAchUrl" required placeholder="https://... or upload photo above">
      </div>
      <div class="form-group">
        <label>Category *</label>
        <input type="text" id="admAchCat" required placeholder="e.g. Industrial Milestone, Exhibition">
      </div>
      <div class="form-group">
        <label>Event Date / Period *</label>
        <input type="text" id="admAchDate" required placeholder="e.g. October 2026">
      </div>
      <div class="form-group">
        <label>Description *</label>
        <textarea id="admAchDesc" rows="2" required placeholder="Enter description of milestone..."></textarea>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent; display: flex; justify-content: flex-end; gap: 10px;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-plus"></i> Save Media</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
  modal.style.display = 'flex';
}

function handleAdminCreateAchievement(e) {
  e.preventDefault();
  const ach = {
    id: Date.now(),
    title: document.getElementById('admAchTitle').value.trim(),
    type: document.getElementById('admAchType').value,
    mediaUrl: document.getElementById('admAchUrl').value.trim(),
    category: document.getElementById('admAchCat').value.trim(),
    date: document.getElementById('admAchDate').value.trim(),
    description: document.getElementById('admAchDesc').value.trim()
  };

  SIWStorage.saveAchievement(ach);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  renderLeadershipAndAchievements();
  showToast('Media Added', `Achievement media "${ach.title}" added to gallery.`, 'success');
}

// -------------------------------------------------------------------
// EDIT ACHIEVEMENT MEDIA
// -------------------------------------------------------------------
function openEditAchievementModal(id) {
  const achs = SIWStorage.getAchievements();
  const a = achs.find(x => x.id == id);
  if (!a) {
    showToast('Not Found', 'Achievement media item not found.', 'error');
    return;
  }

  const modal = document.getElementById('adminUpdateModal');
  const title = document.getElementById('adminModalTitle');
  const body = document.getElementById('adminModalBody');

  title.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit Achievement Media`;
  body.innerHTML = `
    <form onsubmit="handleAdminSaveEditAchievement(event, ${a.id})">
      <div class="form-group">
        <label>Achievement / Event Title *</label>
        <input type="text" id="admEditAchTitle" required value="${a.title}">
      </div>
      <div class="form-group">
        <label>Media Type *</label>
        <select id="admEditAchType">
          <option value="photo" ${a.type === 'photo' ? 'selected' : ''}>Photo / Picture</option>
          <option value="video" ${a.type === 'video' ? 'selected' : ''}>Broadcast Video (YouTube / MP4 Embed)</option>
        </select>
      </div>
      <div class="form-group">
        <label>Media URL or Upload Image *</label>
        <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 8px;">
          <label class="upload-file-btn">
            <i class="fa-solid fa-cloud-arrow-up"></i> Upload Photo File
            <input type="file" id="admAchFileInput" accept="image/*" style="display: none;" onchange="handleAchievementMediaFileChange(event)">
          </label>
          <span style="font-size: 0.8rem; color: #64748b;">or edit URL below</span>
        </div>
        <div id="admAchFileStatus" style="font-size: 0.78rem; color: #15803d; font-weight: 600; display: none; margin-bottom: 6px;"></div>
        <input type="text" id="admAchUrl" required value="${a.mediaUrl || ''}">
      </div>
      <div class="form-group">
        <label>Category *</label>
        <input type="text" id="admEditAchCat" required value="${a.category || ''}">
      </div>
      <div class="form-group">
        <label>Event Date / Period *</label>
        <input type="text" id="admEditAchDate" required value="${a.date || ''}">
      </div>
      <div class="form-group">
        <label>Description *</label>
        <textarea id="admEditAchDesc" rows="3" required>${a.description || ''}</textarea>
      </div>
      <div class="modal-footer" style="padding: 16px 0 0 0; background: transparent; display: flex; justify-content: flex-end; gap: 10px;">
        <button type="button" class="btn btn-outline-gray" onclick="closeModal('adminUpdateModal')">Cancel</button>
        <button type="submit" class="btn btn-primary"><i class="fa-solid fa-floppy-disk"></i> Update Media</button>
      </div>
    </form>
  `;
  modal.classList.add('active');
  modal.style.display = 'flex';
}

function handleAdminSaveEditAchievement(e, id) {
  e.preventDefault();
  const updatedFields = {
    title: document.getElementById('admEditAchTitle').value.trim(),
    type: document.getElementById('admEditAchType').value,
    mediaUrl: document.getElementById('admAchUrl').value.trim(),
    category: document.getElementById('admEditAchCat').value.trim(),
    date: document.getElementById('admEditAchDate').value.trim(),
    description: document.getElementById('admEditAchDesc').value.trim()
  };

  SIWStorage.updateAchievement(id, updatedFields);
  closeModal('adminUpdateModal');
  refreshAdminDashboard();
  renderLeadershipAndAchievements();
  showToast('Media Updated', `Achievement "${updatedFields.title}" updated.`, 'success');
}

function confirmDeleteAchievement(id) {
  if (confirm("Remove this achievement media from public gallery?")) {
    SIWStorage.deleteAchievement(id);
    refreshAdminDashboard();
    renderLeadershipAndAchievements();
    showToast('Removed', 'Achievement item removed.', 'info');
  }
}

// ===================================================================
// ADMIN NOTICES MANAGER
// ===================================================================
function renderAdminNoticesList() {
  const container = document.getElementById('adminNoticesList');
  if (!container) return;

  const notices = SIWStorage.getNotices();
  container.innerHTML = notices.map(n => `
    <div class="notice-item-admin">
      <div>
        <span class="sub-badge" style="margin-bottom: 4px;">${n.category}</span>
        <h5>${n.title}</h5>
        <p>${n.content}</p>
        <small style="color: #94a3b8;">Published: ${n.date}</small>
      </div>
      <div>
        <button class="btn btn-sm btn-danger" onclick="deleteNoticeItem(${n.id})">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function handleCreateNotice(e) {
  e.preventDefault();
  const title = document.getElementById('noticeTitle').value.trim();
  const category = document.getElementById('noticeCategory').value;
  const content = document.getElementById('noticeContent').value.trim();

  const newNotice = {
    id: Date.now(),
    title,
    category,
    content,
    date: new Date().toISOString().split('T')[0]
  };

  SIWStorage.saveNotice(newNotice);
  document.getElementById('newNoticeForm').reset();
  refreshTicker();
  refreshAdminDashboard();
  showToast('Announcement Published', 'Added to Directorate ticker.', 'success');
}

function deleteNoticeItem(id) {
  if (confirm("Delete this announcement?")) {
    SIWStorage.deleteNotice(id);
    refreshTicker();
    refreshAdminDashboard();
    showToast('Removed', 'Announcement deleted.', 'info');
  }
}

// ===================================================================
// CSV EXPORT FUNCTIONS
// ===================================================================
function downloadTraineesCSV() {
  if (!SIWStorage.isAdminLoggedIn()) {
    showToast('Admin Access Required', 'Downloading the official Trainees Register is restricted to authorized Directorate Administration.', 'error');
    switchTab('admin');
    return;
  }

  const trainees = getSortedTraineesByCenter('all');
  if (trainees.length === 0) {
    showToast('No Data', 'No trainees to export.', 'warning');
    return;
  }

  const headers = ["Roll Token", "Center Name", "Candidate Name", "Father Name", "CNIC", "Bank Name", "Bank Account Number", "Vendor Number", "Trade", "Shift", "Status", "Rejection Reason", "Applied Date"];
  const rows = trainees.map(t => [
    t.token,
    `"${t.center}"`,
    `"${t.fullName}"`,
    `"${t.fatherName}"`,
    `'${t.cnic}`,
    `"${t.bankName || ''}"`,
    `'${t.accountNo || ''}`,
    `'${t.vendorNo || ''}`,
    `"${t.course}"`,
    `"${t.shift}"`,
    t.status,
    `"${t.rejectionReason || ''}"`,
    t.appliedDate
  ]);

  triggerCsvDownload("SIW_Balochistan_Trainees_Sequential_Register.csv", headers, rows);
}

function downloadEstatesCSV() {
  const estates = SIWStorage.getEstates();
  const headers = ["Token ID", "Enterprise Name", "Sponsor", "CNIC", "NTN", "Estate", "Plot Size", "Industry Sector", "Investment (PKR M)", "Jobs", "Status", "Applied Date"];
  const rows = estates.map(e => [
    e.token,
    `"${e.companyName}"`,
    `"${e.ownerName}"`,
    `'${e.cnic}`,
    `'${e.ntn}`,
    `"${e.estateName}"`,
    `"${e.plotSize}"`,
    `"${e.industryCategory}"`,
    e.investment,
    e.employment,
    e.status,
    e.appliedDate
  ]);

  triggerCsvDownload("SIW_Sirki_Road_Quetta_Plot_Register.csv", headers, rows);
}

function downloadEfilesCSV() {
  const efiles = SIWStorage.getEfiles();
  const headers = ["Token ID", "Sender Desk", "Addressed To (Recipient)", "Incharge Name", "Designation", "Category", "Subject", "Stage", "Status", "Lodgement Date"];
  const rows = efiles.map(f => [
    f.token,
    `"${f.senderSide}"`,
    `"${f.recipientSide}"`,
    `"${f.inchargeName}"`,
    `"${f.designation}"`,
    `"${f.category}"`,
    `"${f.subject}"`,
    `"${f.fileStage}"`,
    f.status,
    f.appliedDate
  ]);

  triggerCsvDownload("SIW_MultiDesk_Efiling_Register.csv", headers, rows);
}

function triggerCsvDownload(filename, headers, rows) {
  let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";
  rows.forEach(r => {
    csvContent += r.join(",") + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('Export Initiated', `Exported data to ${filename}`, 'success');
}

function exportFullSystemBackup() {
  const backup = {
    exportDate: new Date().toISOString(),
    directorate: "Small Industries Wing, Government of Balochistan",
    trainees: SIWStorage.getTrainees(),
    estates: SIWStorage.getEstates(),
    efiles: SIWStorage.getEfiles(),
    centers: SIWStorage.getCenters(),
    leadership: SIWStorage.getLeadership(),
    achievements: SIWStorage.getAchievements(),
    notices: SIWStorage.getNotices()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup, null, 2));
  const link = document.createElement("a");
  link.setAttribute("href", dataStr);
  link.setAttribute("download", `SIW_Balochistan_FullBackup_${new Date().toISOString().split('T')[0]}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  showToast('System Backup Saved', 'Exported JSON system state.', 'success');
}

function resetToSampleData() {
  if (confirm("Reset all records back to default official demonstration records?")) {
    localStorage.removeItem('siw_trainees_v3');
    localStorage.removeItem('siw_estates_v3');
    localStorage.removeItem('siw_efiles_v3');
    localStorage.removeItem('siw_centers_db_v2');
    localStorage.removeItem('siw_leadership_v3');
    localStorage.removeItem('siw_achievements_v3');
    localStorage.removeItem('siw_notices_v3');
    refreshTicker();
    refreshHeaderBadges();
    refreshAdminDashboard();
    renderPublicTraineesList('all');
    renderLeadershipAndAchievements();
    renderCentersDirectory();
    showToast('Reset Complete', 'Loaded initial demonstration dataset.', 'info');
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
    modal.classList.add('active');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    modal.style.display = 'none';
  }
}

function showToast(title, message, type = 'success') {
  const toast = document.getElementById('toastNotification');
  const toastIcon = document.getElementById('toastIcon');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');

  if (!toast) return;

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  if (type === 'success') {
    toastIcon.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #15803d;"></i>';
    toast.style.borderLeftColor = '#15803d';
  } else if (type === 'error') {
    toastIcon.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: #b91c1c;"></i>';
    toast.style.borderLeftColor = '#b91c1c';
  } else if (type === 'warning') {
    toastIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color: #b45309;"></i>';
    toast.style.borderLeftColor = '#b45309';
  } else {
    toastIcon.innerHTML = '<i class="fa-solid fa-circle-info" style="color: #1e40af;"></i>';
    toast.style.borderLeftColor = '#1e40af';
  }

  toast.style.display = 'flex';
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
    toast.style.display = 'none';
  }, 4000);
}

// ===================================================================
// TEVTA EXECUTIVE MODULE: NOTIFICATIONS, DOWNLOADS, ACADEMICS, GALLERIES
// ===================================================================

const TEVTA_NOTIFICATIONS = [
  {
    sr: 9,
    number: "No. SIW A/HRM-II/Benchmark/2026",
    date: "14.03.2026",
    category: "admin",
    title: "Benchmark-2026 For Staff Strength and Instructor Cadre of Various Streams of Directorate / SIW",
    content: "Official notification establishing revised benchmark cadre strength for master craft instructors, trade supervisors, and administrative personnel across 130+ accredited vocational centers."
  },
  {
    sr: 8,
    number: "SIW/Fin/Acc/Fee/2026-27/",
    date: "02.06.2026",
    category: "admissions",
    title: "Fee Structure & Government Subsidy Framework for SIW Vocational Institutions (2026-27)",
    content: "Sanction of 100% tuition subsidy and free toolkits provision for all bona fide trainees enrolled in accredited vocational and handicraft trades across Balochistan."
  },
  {
    sr: 7,
    number: "SIW/Acc/Ext.Audit/2026-27/204",
    date: "10.07.2026",
    category: "sop",
    title: "SOPs for Fix Assets, Machinery and Inventory Management across 130+ Field Centers",
    content: "Standard Operating Procedures for physical stock verification, logbook auditing, repair logs, and asset registration of specialized industrial machinery and training equipment."
  },
  {
    sr: 6,
    number: "SIW/Fin/Acc/Fee/2026-27/02",
    date: "02.06.2026",
    category: "admissions",
    title: "Notified Admission Schedule and Training Calendar 2026-27 for Accredited Centers",
    content: "Detailed timeline for online application submission, district scrutiny committees, trade commencement, and terminal examinations for Spring & Autumn cycles."
  },
  {
    sr: 5,
    number: "SIW/Est/Sirki/Plot-2026/89",
    date: "15.05.2026",
    category: "estate",
    title: "Industrial Plot Allotment Regulations & Lease Deeds Governance for Sirki Road Estate (43.5 Acres)",
    content: "Revised transparent criteria for SME plot allotments, infrastructure utility NOCs, building control bylaws, and lease covenants on Sirki Road Industrial Estate Quetta."
  },
  {
    sr: 4,
    number: "SIW/Trainee-Verif/2026/01",
    date: "18.01.2026",
    category: "admissions",
    title: "Zero Duplicate Policy: CNIC, Bank Account & Provincial Vendor ID Mandatory Verification Protocol",
    content: "Strict compliance directive prohibiting duplicate CNIC, duplicate Bank Account, or duplicate Vendor Number registrations across the provincial vocational network."
  },
  {
    sr: 3,
    number: "SIW/E-Filing/Dir-HQ/2026/12",
    date: "22.04.2026",
    category: "sop",
    title: "Standard Operating Procedures for Inter-Departmental E-Filing Movement across HQ & Field Centers",
    content: "Digital file workflow governance, addressed confidentiality protocol, and digital minute sheet signatures interconnecting Directorate HQ, Centers, and B-TEVTA."
  },
  {
    sr: 2,
    number: "SIW/Curr/Rev/2026/55",
    date: "12.08.2026",
    category: "sop",
    title: "Revised Competency Standards & Trade Curricula for Handicrafts, Textiles, & Engineering Trades",
    content: "Curriculum harmonization in coordination with B-TEVTA and NAVTTC aligning vocational certifications with modern market requirements and export benchmarks."
  },
  {
    sr: 1,
    number: "SIW/Admin/Quetta/HQ-78",
    date: "28.08.2026",
    category: "admin",
    title: "Official Public Liaison, Contact Bureau & Directorate Helpline Timings at Sirki Road Quetta (0819211161)",
    content: "Notification regarding designated public liaison hours (08:30 AM to 04:30 PM), telephone helpline 0819211161, and official contact bureau at Sirki Road Quetta."
  }
];

let currentNotifFilter = 'all';
let currentNotifQuery = '';
let activeCircularData = null;

function renderNotificationsTable() {
  const tbody = document.getElementById('tevtaNotifTableBody');
  if (!tbody) return;

  const filtered = TEVTA_NOTIFICATIONS.filter(item => {
    const matchesCategory = currentNotifFilter === 'all' || item.category === currentNotifFilter;
    const q = currentNotifQuery.toLowerCase().trim();
    const matchesQuery = !q ||
      item.number.toLowerCase().includes(q) ||
      item.title.toLowerCase().includes(q) ||
      item.date.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q);
    return matchesCategory && matchesQuery;
  });

  const totalCountElem = document.getElementById('notifTotalCount');
  if (totalCountElem) {
    totalCountElem.textContent = TEVTA_NOTIFICATIONS.length;
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 36px 20px; color: #64748b;">
          <i class="fa-solid fa-file-circle-xmark" style="font-size: 2rem; color: #cbd5e1; margin-bottom: 8px; display: block;"></i>
          <strong>No official notifications found matching your search criteria.</strong>
          <p style="margin: 4px 0 0 0; font-size: 0.85rem;">Try adjusting your keyword filter or select "All Notifications".</p>
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(item => `
    <tr>
      <td style="text-align: center; font-weight: 700; color: #1e293b;">${item.sr}</td>
      <td>
        <strong style="color: #17411C; font-family: monospace; font-size: 0.95rem;">${item.number}</strong>
      </td>
      <td style="text-align: center; font-weight: 500; color: #475569;">${item.date}</td>
      <td>
        <div style="font-weight: 600; color: #1e293b; margin-bottom: 3px;">${item.title}</div>
        <div style="font-size: 0.82rem; color: #64748b; line-height: 1.4;">${item.content}</div>
      </td>
      <td style="text-align: center;">
        <button class="btn-download-green" onclick="showCircularModal(${item.sr})">
          <i class="fa-solid fa-download"></i> Download
        </button>
      </td>
    </tr>
  `).join('');
}

function filterNotifCategory(category, btnElem) {
  currentNotifFilter = category;
  document.querySelectorAll('.notif-pill').forEach(btn => btn.classList.remove('active'));
  if (btnElem) btnElem.classList.add('active');
  renderNotificationsTable();
}

function filterNotificationsTable(query) {
  currentNotifQuery = query;
  renderNotificationsTable();
}

function showCircularModal(sr) {
  const item = TEVTA_NOTIFICATIONS.find(n => n.sr === sr);
  if (!item) return;
  activeCircularData = item;

  const printable = document.getElementById('circularPrintableArea');
  if (printable) {
    printable.innerHTML = `
      <div style="text-align: center; border-bottom: 2px solid #17411C; padding-bottom: 16px; margin-bottom: 20px;">
        <div style="font-size: 0.82rem; font-weight: 700; color: #15803d; letter-spacing: 1.5px; text-transform: uppercase;">Government of Balochistan</div>
        <h2 style="font-family: 'Source Serif 4', Georgia, serif; font-size: 1.5rem; color: #17411C; margin: 4px 0;">Directorate of Small Industries & Estate Office</h2>
        <div style="font-size: 0.85rem; color: #475569;">Headquarters: Sirki Road, Quetta • Telephone: <strong>0819211161</strong></div>
        <div style="font-size: 0.85rem; color: #475569;">Digital Despatch: hq@siw.balochistan.gov.pk • Liaison: B-TEVTA</div>
      </div>

      <div style="display: flex; justify-content: space-between; margin-bottom: 20px; font-size: 0.9rem;">
        <div><strong>Notification No:</strong> <span style="font-family: monospace; color: #17411C;">${item.number}</span></div>
        <div><strong>Dated Quetta, the:</strong> <span>${item.date}</span></div>
      </div>

      <div style="background: #f8fafc; border-left: 4px solid #17411C; padding: 12px 16px; margin-bottom: 20px;">
        <h4 style="margin: 0; color: #17411C; font-size: 1.05rem;">${item.title}</h4>
      </div>

      <div style="font-size: 0.95rem; line-height: 1.7; color: #1e293b; margin-bottom: 30px; text-align: justify;">
        <p>In exercise of powers conferred under Government of Balochistan Rules of Business and administrative mandate of Directorate of Small Industries, the Competent Authority is pleased to notify as under:</p>
        <p style="padding-left: 16px; border-left: 2px solid #e2e8f0; font-weight: 500;">"${item.content}"</p>
        <p>This notification takes immediate effect across Directorate Headquarters Quetta, Small Industrial Estate Sirki Road (43.5 Acres), and 130+ field vocational training institutions.</p>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
        <div style="font-size: 0.8rem; color: #64748b;">
          <div><strong>Copy forwarded for information to:</strong></div>
          <div>1. Secretary, Industries & Commerce Department, GoB</div>
          <div>2. Managing Director, Balochistan TEVTA (B-TEVTA)</div>
          <div>3. Estate Officer, Sirki Road Industrial Estate (43.5 Acres)</div>
          <div>4. All Incharges of 130+ Field Centers in Balochistan</div>
          <div>5. Master File / Official Gazette Archive 2026-27</div>
        </div>
        <div style="text-align: center;">
          <div style="font-weight: 700; color: #17411C;">DIRECTOR GENERAL / SECRETARY</div>
          <div style="font-size: 0.82rem; color: #64748b;">Directorate of Small Industries Balochistan</div>
          <div style="margin-top: 6px; font-family: 'Noto Nastaliq Urdu', serif; font-size: 0.85rem; color: #15803d;">ڈائریکٹوریٹ آف سمال انڈسٹریز بلوچستان</div>
        </div>
      </div>
    `;
  }

  const modal = document.getElementById('circularViewerModal');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
}

function downloadCircularTextFile() {
  if (!activeCircularData) return;
  const content = `GOVERNMENT OF BALOCHISTAN
DIRECTORATE OF SMALL INDUSTRIES & ESTATE OFFICE
Sirki Road, Quetta | Tel: 0819211161 | Email: hq@siw.balochistan.gov.pk

NOTIFICATION / CIRCULAR
Notification No: ${activeCircularData.number}
Dated Quetta: ${activeCircularData.date}

SUBJECT: ${activeCircularData.title}

${activeCircularData.content}

This order is issued under the authority of Directorate of Small Industries, Government of Balochistan.
Applicable across HQ Quetta, Sirki Road Estate (43.5 Acres), and 130+ Vocational Centers.
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${activeCircularData.number.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Download Complete', `Notification ${activeCircularData.number} downloaded.`);
}

function triggerDownload(type) {
  let title = "Official Publication";
  let filename = "Directorate_Resource.txt";
  let bodyContent = "";

  if (type === 'prospectus') {
    title = "Annual Admission Prospectus 2026-27";
    filename = "SIW_Balochistan_Admission_Prospectus_2026_27.txt";
    bodyContent = `GOVERNMENT OF BALOCHISTAN - DIRECTORATE OF SMALL INDUSTRIES
ANNUAL ADMISSION PROSPECTUS (SESSION 2026-27)
Headquarters: Sirki Road, Quetta | Tel: 0819211161

1. MANDATE & NETWORK
The Small Industries Wing operates 130+ accredited vocational and craft training institutions across all divisions and districts of Balochistan.

2. ADMISSION CRITERIA & VERIFICATION
- Strict Zero Duplicate Tolerance: Trainee CNIC, Bank Account Number, and Vendor Number are verified against central database.
- Age ceiling: 15 to 35 years.
- 100% Free / Subsidized Training Policy: Zero tuition fee, subsidized toolkits, free testing materials.

3. ACCREDITED TRADE OFFERINGS
- Traditional Balochi Crafts & Handloom Carpet Weaving
- Tailoring, Knitting & Garment Pattern Making
- Electrical, Mechanical & Auto Engineering Trades
- Information Technology & Digital Office Automation
- Woodwork, Civil Draftsmanship & Construction Craft

For online admission, visit: Official Portal -> Trainee Enrolment Desk.`;
  } else if (type === 'newsletter') {
    title = "Directorate Quarterly Newsletter (Vol. 14)";
    filename = "SIW_Quarterly_Newsletter_Vol_14.txt";
    bodyContent = `GOVERNMENT OF BALOCHISTAN - DIRECTORATE OF SMALL INDUSTRIES
OFFICIAL QUARTERLY NEWSLETTER (VOL. 14 - 2026)
Sirki Road, Quetta | Official Directorate Bulletin

KEY HIGHLIGHTS:
1. Convocation & Certificate Distribution: 1,420+ graduating youth certified across provincial centers.
2. Sirki Road Estate Infrastructure: Modernization of 43.5 Acres industrial corridor with road carpeting and continuous utility grid.
3. Provincial Handicraft Exhibition: Over 350 indigenous master artisans displayed carpet weaving and Balochi Doch embroidery.
4. E-Filing System Rollout: Confidential digital minute sheets and file tracking operational across all desks.`;
  } else if (type === 'magazine') {
    title = "Balochistan Skill Magazine (Hunarmand Balochistan)";
    filename = "Hunarmand_Balochistan_Skill_Magazine_2026.txt";
    bodyContent = `HUNARMAND BALOCHISTAN - OFFICIAL SKILL MAGAZINE (2026 EDITION)
Directorate of Small Industries & B-TEVTA

EDITORIAL FOCUS:
- Revival of Indigenous Carpet Weaving in Khuzdar & Mastung
- The Art of Balochi Doch: Preserving Cultural Heritage through Modern Vocational Standards
- SME Enterprise Growth in Sirki Road Industrial Estate (43.5 Acres)
- Digital Inclusion: Training Technical Instructors in Technopreneurship & Modern Machinery.`;
  } else if (type === 'handbook') {
    title = "Field Centers Operational Handbook & Trade Curricula";
    filename = "Field_Centers_Operational_Handbook_2026.txt";
    bodyContent = `FIELD CENTERS OPERATIONAL HANDBOOK & TRADE CURRICULA (2026-27)
Directorate of Small Industries Balochistan (130+ Accredited Centers)

CHAPTERS:
1. Institutional Governance & Daily Attendance Tracking
2. Curriculum Competency Standards & Practical Workshop Ratios
3. Asset Register Maintenance & Physical Machinery Audit
4. Trainee Scrutiny Committee & Verification Protocol
5. Terminal Trade Examination and Certification Conduct.`;
  } else if (type === 'estaterules') {
    title = "Industrial Plot Allotment Regulations (43.5 Acres)";
    filename = "Sirki_Road_Estate_Plot_Allotment_Regulations.txt";
    bodyContent = `ESTATE OFFICE SIRKI ROAD QUETTA (43.5 ACRES)
RULES & REGULATIONS FOR ALLOTMENT OF INDUSTRIAL PLOTS (2026)
Directorate of Small Industries, Government of Balochistan

1. SCOPE & JURISDICTION
Applies to all developed SME plots within the 43.5 Acres industrial estate situated on Sirki Road, Quetta.

2. ALLOTMENT ELIGIBILITY
- Genuine small and medium industrial manufacturing enterprises.
- Strict evaluation of planned capital investment and employment generation.
- Zero speculation policy: Allottee must start commercial production within 24 months.
- Standard 99-year lease deeds with non-alienation clauses.`;
  }

  const blob = new Blob([bodyContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Download Initiated', `${title} downloaded.`);
}

function openAcademicModal(topic) {
  const modal = document.getElementById('academicInfoModal');
  const title = document.getElementById('academicModalTitle');
  const body = document.getElementById('academicModalBody');
  if (!modal || !title || !body) return;

  if (topic === 'education') {
    title.innerHTML = '<i class="fa-solid fa-chalkboard-user" style="color: #17411C;"></i> Certified Vocational Education & Trades';
    body.innerHTML = `
      <div style="margin-bottom: 20px;">
        <h4 style="color: #17411C; margin-bottom: 8px;">Accredited Vocational Curriculum Framework</h4>
        <p style="color: #475569; font-size: 0.92rem; line-height: 1.5;">
          The Directorate offers standardized trade curricula recognized across Pakistan in alignment with B-TEVTA and NAVTTC. All courses feature 70% practical workshop training and 30% trade theory.
        </p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px;">
          <h5 style="color: #17411C; margin: 0 0 6px 0;"><i class="fa-solid fa-scissors"></i> Textile, Garments & Embroidery</h5>
          <p style="font-size: 0.83rem; color: #64748b; margin: 0;">Tailoring & Knitting, Balochi Doch Hand Embroidery, Machine Embroidery, Fashion Pattern Making. Duration: 6 to 12 Months.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px;">
          <h5 style="color: #17411C; margin: 0 0 6px 0;"><i class="fa-solid fa-rug"></i> Traditional Crafts & Carpet Weaving</h5>
          <p style="font-size: 0.83rem; color: #64748b; margin: 0;">Hand-Knotted Carpet Weaving, Galim & Woolen Rugs, Leather Craftsmanship, Marble & Onyx Mosaic. Duration: 1 Year.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px;">
          <h5 style="color: #17411C; margin: 0 0 6px 0;"><i class="fa-solid fa-bolt"></i> Electrical & Engineering Trades</h5>
          <p style="font-size: 0.83rem; color: #64748b; margin: 0;">Building Electrician, Auto Electrician, Refrigeration & Air Conditioning, Solar Panel Installation. Duration: 1 to 2 Years.</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px;">
          <h5 style="color: #17411C; margin: 0 0 6px 0;"><i class="fa-solid fa-laptop-code"></i> Digital & Information Technology</h5>
          <p style="font-size: 0.83rem; color: #64748b; margin: 0;">Computer Office Applications, Graphic Design & Digital Media, Web Basics, Technopreneurship. Duration: 6 Months.</p>
        </div>
      </div>
    `;
  } else if (topic === 'calendar') {
    title.innerHTML = '<i class="fa-solid fa-calendar-days" style="color: #17411C;"></i> Annual Academic Calendar (Session 2026-27)';
    body.innerHTML = `
      <div style="margin-bottom: 20px;">
        <h4 style="color: #17411C; margin-bottom: 8px;">Bi-Annual Batch Schedule for 130+ Field Centers</h4>
        <p style="color: #475569; font-size: 0.92rem;">Training programs run in bi-annual cycles to ensure maximum provincial youth coverage.</p>
      </div>
      <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
        <thead>
          <tr style="background: #f1f5f9; text-align: left;">
            <th style="padding: 10px 14px; border: 1px solid #e2e8f0;">Activity</th>
            <th style="padding: 10px 14px; border: 1px solid #e2e8f0;">Spring Session 2026</th>
            <th style="padding: 10px 14px; border: 1px solid #e2e8f0;">Autumn Session 2026</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 600;">Admissions Open Online</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">January 01, 2026</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">July 01, 2026</td>
          </tr>
          <tr style="background: #fcfdfd;">
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 600;">Last Date to Apply</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">January 25, 2026</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">July 25, 2026</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 600;">Scrutiny & Merit Display</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">February 05, 2026</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">August 05, 2026</td>
          </tr>
          <tr style="background: #fcfdfd;">
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 600;">Commencement of Classes</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">February 15, 2026</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">August 15, 2026</td>
          </tr>
          <tr>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0; font-weight: 600;">Trade Assessment & Exams</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">July 15 - 25, 2026</td>
            <td style="padding: 10px 14px; border: 1px solid #e2e8f0;">January 15 - 25, 2027</td>
          </tr>
        </tbody>
      </table>
    `;
  } else if (topic === 'fees') {
    title.innerHTML = '<i class="fa-solid fa-receipt" style="color: #17411C;"></i> Government Subsidized Fee Structure';
    body.innerHTML = `
      <div style="background: #dcfce7; border-left: 4px solid #15803d; padding: 14px 18px; border-radius: 4px; margin-bottom: 20px;">
        <h4 style="color: #14532d; margin: 0 0 4px 0;"><i class="fa-solid fa-certificate"></i> 100% Government Subsidized Training Policy</h4>
        <p style="color: #166534; font-size: 0.9rem; margin: 0;">Under the Government of Balochistan Youth Empowerment Mandate, all vocational training across accredited centers is fully subsidized.</p>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px;">
        <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; text-align: center;">
          <div style="font-size: 0.85rem; color: #64748b;">Admission Fee</div>
          <div style="font-size: 1.5rem; font-weight: 700; color: #17411C; margin: 4px 0;">PKR 0</div>
          <div style="font-size: 0.8rem; color: #15803d; font-weight: 600;">100% Free</div>
        </div>
        <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; text-align: center;">
          <div style="font-size: 0.85rem; color: #64748b;">Monthly Tuition Fee</div>
          <div style="font-size: 1.5rem; font-weight: 700; color: #17411C; margin: 4px 0;">PKR 0</div>
          <div style="font-size: 0.8rem; color: #15803d; font-weight: 600;">Government Funded</div>
        </div>
        <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; text-align: center;">
          <div style="font-size: 0.85rem; color: #64748b;">Raw Materials / Fabric</div>
          <div style="font-size: 1.5rem; font-weight: 700; color: #17411C; margin: 4px 0;">Provided</div>
          <div style="font-size: 0.8rem; color: #15803d; font-weight: 600;">Free for Practical Work</div>
        </div>
        <div style="border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; text-align: center;">
          <div style="font-size: 0.85rem; color: #64748b;">Terminal Examination</div>
          <div style="font-size: 1.5rem; font-weight: 700; color: #17411C; margin: 4px 0;">PKR 0</div>
          <div style="font-size: 0.8rem; color: #15803d; font-weight: 600;">Certified by B-TEVTA</div>
        </div>
      </div>
    `;
  } else if (topic === 'guide') {
    title.innerHTML = '<i class="fa-solid fa-book-open-reader" style="color: #17411C;"></i> Admission Guide & Eligibility Regulations';
    body.innerHTML = `
      <div style="margin-bottom: 20px;">
        <h4 style="color: #17411C; margin-bottom: 8px;">Eligibility Requirements for Candidates</h4>
        <ul style="color: #475569; font-size: 0.92rem; line-height: 1.7; padding-left: 20px;">
          <li><strong>Age Limit:</strong> 15 to 35 years as on the last date of application.</li>
          <li><strong>Educational Background:</strong> Minimum Middle (8th Grade) for craft trades; Matriculation (SSC) for engineering and IT trades.</li>
          <li><strong>Domicile:</strong> Candidate must be a bona fide resident holding Balochistan Local / Domicile certificate.</li>
          <li><strong>Mandatory Verification:</strong> Candidate CNIC / B-Form, Bank Account Number, and Provincial Vendor Number are subject to strict automated duplicate scrutiny.</li>
        </ul>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px;">
        <h5 style="color: #1e293b; margin: 0 0 6px 0;">Required Documents for Physical Scrutiny:</h5>
        <p style="font-size: 0.84rem; color: #64748b; margin: 0;">1. Copy of CNIC or B-Form | 2. Copy of Father's / Guardian's CNIC | 3. Educational certificates / marksheets | 4. Four recent passport size photographs | 5. Local / Domicile Certificate copy.</p>
      </div>
    `;
  }

  modal.classList.add('active');
  modal.style.display = 'flex';
}

function openVideoPlayer(videoId) {
  const modal = document.getElementById('videoPlayerModal');
  const title = document.getElementById('videoModalTitle');
  const body = document.getElementById('videoModalBody');
  const meta = document.getElementById('videoModalMeta');
  if (!modal || !title || !body) return;

  let vidTitle = "Directorate Video Broadcast";
  let thumbSrc = "video-tailoring.jpg";
  let duration = "06:45";
  let urduBadge = "ڈائریکٹوریٹ آف سمال انڈسٹریز";
  let desc = "Official broadcast documentary.";

  if (videoId === 'hunarmand-beti') {
    vidTitle = "Hunarmand Beti: Traditional Crafts & Tailoring Centers";
    thumbSrc = "video-tailoring.jpg";
    duration = "06:45";
    urduBadge = "ہنر مند بیٹی ہنر مند بلوچستان";
    desc = "A special documentary highlighting female vocational trainees mastering Balochi Doch, carpet weaving, and garment designing across Quetta, Khuzdar, and Turbat.";
  } else if (videoId === 'tamir-watan') {
    vidTitle = "Tamir-e-Watan: Youth Vocational Training & Future Prospects";
    thumbSrc = "video-youth.jpg";
    duration = "08:20";
    urduBadge = "تعمیرِ وطن: نوجوانانِ بلوچستان کو بااختیار بنانا";
    desc = "Documentary showcasing technical empowerment of youth through modern machinery, electrical engineering trades, and industrial technopreneurship.";
  } else if (videoId === 'national-anthem') {
    vidTitle = "National Anthem & Industrial Heritage of Balochistan";
    thumbSrc = "video-anthem.jpg";
    duration = "04:15";
    urduBadge = "قومی ترانہ اور بلوچستان کا صنعتی ورثہ";
    desc = "Filmed and picturized across Small Industrial Estate Sirki Road Quetta (43.5 Acres) & regional trades network.";
  }

  title.innerHTML = `<i class="fa-solid fa-circle-play" style="color: #278528;"></i> ${vidTitle}`;
  if (meta) meta.innerHTML = `Duration: <strong>${duration}</strong> • 1080p HD • Directorate Archives`;

  body.innerHTML = `
    <div style="position: relative; width: 100%; aspect-ratio: 16/9; background: #000; overflow: hidden; display: flex; align-items: center; justify-content: center;">
      <img src="${thumbSrc}" alt="${vidTitle}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.85;">
      
      <!-- Video Player Overlay Simulation -->
      <div style="position: absolute; top: 16px; left: 16px; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); padding: 6px 14px; border-radius: 4px; color: #fff; font-family: 'Noto Nastaliq Urdu', serif; font-size: 0.95rem; border: 1px solid rgba(255,255,255,0.2);">
        ${urduBadge}
      </div>

      <div style="position: absolute; top: 16px; right: 16px; background: rgba(23,65,28,0.85); color: #fff; padding: 4px 10px; border-radius: 4px; font-size: 0.8rem; font-weight: 700;">
        <i class="fa-solid fa-circle" style="color: #ef4444; font-size: 0.6rem; margin-right: 4px;"></i> BROADCAST
      </div>

      <div id="simulatedPlayBtn" onclick="toggleSimulatedPlayback()" style="width: 76px; height: 76px; border-radius: 50%; background: rgba(23,65,28,0.9); border: 3px solid #d4af37; color: #fff; font-size: 1.8rem; display: flex; align-items: center; justify-content: center; padding-left: 5px; cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.6); transition: transform 0.2s;">
        <i class="fa-solid fa-play" id="simPlayIcon"></i>
      </div>

      <!-- Video Control Bar Simulation -->
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); padding: 12px 18px; display: flex; align-items: center; gap: 14px; color: #fff;">
        <button onclick="toggleSimulatedPlayback()" style="background: none; border: none; color: #fff; font-size: 1.1rem; cursor: pointer;">
          <i class="fa-solid fa-play" id="barPlayIcon"></i>
        </button>
        <div style="flex-grow: 1; height: 5px; background: rgba(255,255,255,0.3); border-radius: 3px; position: relative; cursor: pointer;">
          <div id="simProgressBar" style="width: 35%; height: 100%; background: #278528; border-radius: 3px;"></div>
        </div>
        <span style="font-size: 0.8rem; font-family: monospace;" id="simTimeCounter">02:18 / ${duration}</span>
        <button onclick="showToast('Audio', 'Directorate documentary narration active.')" style="background: none; border: none; color: #fff; font-size: 1rem; cursor: pointer;">
          <i class="fa-solid fa-volume-high"></i>
        </button>
        <button onclick="showToast('Quality', '1080p High Definition Stream')" style="background: none; border: none; color: #fff; font-size: 0.8rem; font-weight: 700; border: 1px solid rgba(255,255,255,0.4); padding: 2px 6px; border-radius: 3px;">
          HD
        </button>
      </div>
    </div>
    <div style="padding: 16px 20px; background: #111e25; color: #cbd5e1; font-size: 0.9rem; line-height: 1.5; text-align: left;">
      <strong style="color: #fff; display: block; margin-bottom: 4px;">Documentary Overview:</strong>
      ${desc}
    </div>
  `;

  modal.classList.add('active');
  modal.style.display = 'flex';
}

function toggleSimulatedPlayback() {
  const icon1 = document.getElementById('simPlayIcon');
  const icon2 = document.getElementById('barPlayIcon');
  if (icon1 && icon2) {
    if (icon1.classList.contains('fa-play')) {
      icon1.classList.remove('fa-play');
      icon1.classList.add('fa-pause');
      icon2.classList.remove('fa-play');
      icon2.classList.add('fa-pause');
      showToast('Playback', 'Playing documentary video...');
    } else {
      icon1.classList.remove('fa-pause');
      icon1.classList.add('fa-play');
      icon2.classList.remove('fa-pause');
      icon2.classList.add('fa-play');
      showToast('Paused', 'Video playback paused.');
    }
  }
}

function switchVideoSlide(index) {
  document.querySelectorAll('.c-dot').forEach((d, i) => {
    if (i === index) d.classList.add('active');
    else d.classList.remove('active');
  });
  showToast('Videos Archive', `Browsing broadcast videos slide ${index + 1}.`);
}

function openLightboxImage(src, title, caption) {
  const modal = document.getElementById('lightboxModal');
  const img = document.getElementById('lightboxImg');
  const titleElem = document.getElementById('lightboxTitle');
  const capElem = document.getElementById('lightboxCaption');
  if (!modal || !img) return;

  img.src = src;
  if (titleElem) titleElem.innerHTML = `<i class="fa-solid fa-camera"></i> ${title}`;
  if (capElem) {
    capElem.innerHTML = `
      <strong style="color: #fff; font-size: 1rem;">${title}</strong><br>
      <span style="color: #94a3b8; font-size: 0.85rem;">${caption}</span>
    `;
  }

  modal.classList.add('active');
  modal.style.display = 'flex';
}

function toggleImageGalleryMore() {
  const extras = document.querySelectorAll('.extra-image-item');
  const btn = document.getElementById('btnToggleGalleryMore');
  if (extras.length === 0) return;

  const isHidden = extras[0].style.display === 'none';
  extras.forEach(el => {
    el.style.display = isHidden ? 'flex' : 'none';
  });

  if (btn) {
    if (isHidden) {
      btn.innerHTML = 'View Less <i class="fa-solid fa-angle-up" id="galleryMoreAngle"></i>';
      showToast('Image Gallery', 'Loaded 2 additional archival photographs.');
    } else {
      btn.innerHTML = 'View More <i class="fa-solid fa-angle-down" id="galleryMoreAngle"></i>';
    }
  }
}

function openComplaintModal() {
  const modal = document.getElementById('citizenComplaintModal');
  if (modal) {
    modal.classList.add('active');
    modal.style.display = 'flex';
  }
}

function submitCitizenComplaint(e) {
  e.preventDefault();
  const name = document.getElementById('cmpCitizenName')?.value || 'Citizen';
  const phone = document.getElementById('cmpCitizenPhone')?.value || '';
  const category = document.getElementById('cmpCategory')?.value || 'General';

  const ticketNo = 'SIW-CMP-2026-' + Math.floor(100 + Math.random() * 900);

  closeModal('citizenComplaintModal');
  showToast('Grievance Registered', `Ticket ${ticketNo} issued for ${name}. Contact Bureau notified.`);

  alert(`OFFICIAL CITIZEN GRIEVANCE RECEIPT\n` +
    `--------------------------------------\n` +
    `Tracking Token: ${ticketNo}\n` +
    `Complainant: ${name}\n` +
    `Category: ${category}\n` +
    `Phone: ${phone}\n\n` +
    `Your submission has been logged into the Directorate of Small Industries Liaison Bureau. ` +
    `You may track this token using the Track File / Application tool or inquiry helpline at 0819211161.`);

  const form = document.getElementById('citizenComplaintForm');
  if (form) form.reset();
}

function scrollToBureau() {
  const section = document.querySelector('.home-contact-section');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
