    class MedicalRecord {
      constructor(patientName) {
        this.patientName = patientName;
        this.records = [];
      }

      addRecord(record) {
        this.records.push(record);
      }

      editRecord(recordId, newRecord) {
        this.records = this.records.map(record => 
          record.id === recordId ? {...record, ...newRecord} : record
          );
      }

      getRecord(recordId) {
        return this.records.find(record => record.id === recordId);
      }

      deleteRecord(recordId) {
        this.records = this.records.filter(record => record.id !== recordId);
      }

      getAllRecords() {
        return this.records;
      }

      searchRecordByKeyword(keyword) {
        return this.records.filter(record => record.text.includes(keyword));
      }

      flagRecord(recordId) {
        let record = this.getRecord(recordId);
        record.flagged = true;
      }

      unflagRecord(recordId) {
        let record = this.getRecord(recordId);
        record.flagged = false;
      }
      
      dianogsisRecord(recordId) {
        // Dianogsis logic goes here...
      }

      sendToDoctor(recordId) {
        // Communication logic goes here..
      }

      archiveRecord(recordId) {
        // Archiving logic goes here...
      }
    }