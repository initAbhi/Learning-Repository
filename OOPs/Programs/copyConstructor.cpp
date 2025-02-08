#include "iostream"
#include "string"

using namespace std;

class Teacher
{
private:
    string id;
    int salary;

public:
    string name;
    Teacher(string name, int salary)
    {
        this->id = "1234";
        this->name = name;
        this->salary = salary;
    };
    void getTeacherDetails()
    {
        cout << "Teachers name is " << this->name << " salary is " << this->salary;
    }
};

int main()
{
    Teacher t1("Abhi", 30000);
    Teacher t2(t1);
    t1.getTeacherDetails();
    t2.getTeacherDetails();
}