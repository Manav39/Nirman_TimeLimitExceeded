// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract Meddy {

    string public HOSPITAL_NAME;

    struct MedicalRecord {
        uint256 case_no;
        string diseaseName;
        string prescription;
        uint256 consultancyFees;    
    }

    struct Doctor {
        string name;
        uint license_no;
        address docAddress;
    }

    mapping (address => MedicalRecord[]) public patient_records;
    mapping (uint256 => MedicalRecord) public records;
    Doctor[] public doctors;
    address[] public patients;


    constructor(string memory _hospital_name) {
        HOSPITAL_NAME = _hospital_name;
    }

    event Diagnosis(address indexed patient, address indexed doctor, uint256 indexed case_no, string prescription);

    function diagnosePatient(address _doctor, uint256 _case_no, uint256 _charges, string memory diseaseName, string memory prescription) public payable {
        require(msg.value > _charges, "Insufficient Fees");
        (bool success, ) = payable(_doctor).call{value: _charges}("");
        if(success){
            // MedicalRecord memory rec = 
            patient_records[msg.sender].push(MedicalRecord(_case_no,  diseaseName,  prescription, _charges));
            emit Diagnosis(msg.sender, _doctor, _case_no, prescription);
        }

    }

    function addDoctor(string memory _doctor_name, uint _license_no, address _doctor_address) public {
        doctors.push(Doctor(_doctor_name, _license_no, _doctor_address));
    }

    function addPatient(address _patient) public {
        patients.push(_patient);
    }

    function getAllDoctors() public view returns(Doctor[] memory) {
        return doctors;
    }

    function getAllPatients() public view returns(address[] memory) {
        return patients;
    }


     fallback() external payable { }
     receive() external payable { }
   
}
