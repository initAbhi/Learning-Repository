#include<iostream>
#include<string>

using namespace std;

class Account {
    private:
    double balance;
    string password; //data hiding
    public: 
    Account(){
        cout<<"Hello I am constructor";
        this->accountId = "12345";
    }
    string username;
    string accountId;

    void changePassword(string newPassword) {
        this->password = newPassword;
    }
};

int main(){
    Account a1;
    // cout<<a1.accountId;
}
