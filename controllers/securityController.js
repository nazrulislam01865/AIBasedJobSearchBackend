// Report Security Issue
exports.reportSecurityIssue = async (req, res) => {
    try {
      res.json({ message: "Security issue reported successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  // Get Privacy Policy
  exports.getPrivacyPolicy = async (req, res) => {
    try {
      res.json({ message: "Privacy Policy Retrieved", policy: "We respect user privacy and data security." });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  
  // Request Data Deletion
  exports.requestDataDeletion = async (req, res) => {
    try {
      res.json({ message: "User data deletion request received" });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  };
  