#include<iostream>
#include<string>

using namespace std;

class Teacher {
    public:
    string name;
    int age;
    int salary;
    string dept;

    //methods - 
    public:
    void changeDept(string newDept){
        dept = newDept;
    }
};

int main(){
    cout<< "Hello, World!" << endl;
    Teacher t1;
    t1.changeDept("Math");
    cout<<t1.dept;
}