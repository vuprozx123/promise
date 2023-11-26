#include <iostream>
#include <string.h>
using namespace std;

class Nhansu{
	private:
		double ID;
		string Name;
	public:
		Nhansu(){
			ID=0;
			Name="";
		}
		void input(){
			cout<<"Nhap ID:";	cin>>this->ID;cin.ignore();
			cout<<"Nhap Ho va ten:";  getline(cin,Name);
		}
		void output(){
			cout<<"Id\t"<<"Name\n";
			cout<<ID<<"\t"<<Name<<endl;
			}
		double getID(){
			return ID;
		}
		string getNAME(){
			return Name;
		}
};
class Congnhan:	public Nhansu{
	private:
		long long workday,wage;
		string levelCN;
	public:
		Congnhan(){
			workday=0;
			wage=500000;
			levelCN="";
		}
		void inputCN(){
            Nhansu::input();
			cout<<"Nhap ngay cong:";    cin>>workday;cin.ignore();
			cout<<"Nhap tay nghe(Yeu,Trung Binh,Gioi):";    getline(cin,levelCN);
		}
		long long salary(){
			return workday*wage;
		}
		void outputCN(){
			Nhansu::output();
            cout<<"Ngay cong\tMuc luong\tTay nghe\tLuong\n";
            cout<<workday<<"\t\t"<<wage<<"\t\t"<<levelCN<<"\t\t"<<salary()<<endl;
		}
		double getworkday(){
			return workday;
		}
		long long getwage(){
            return wage;
        }
		string getlevelCN(){
            return levelCN;
        }
};
class Canbo : public Nhansu{
	private:
		float subsidy;
		string specialize,levelCB;
	public:
        Canbo(){
			subsidy=0;
			specialize="";
			levelCB="";
		}
		void inputCB(){
			Nhansu::input();
            cout<<"Nhap tien phu cap:";    cin>>subsidy;cin.ignore();
            cout<<"Nhap chuyen mon(CV,CVC,CG):";    getline(cin,specialize);
            cout<<"Nhap trinh do(Yeu,Trung Binh,Gioi):";    getline(cin,levelCB);
		}
		void outputCB(){
			Nhansu::output();
            cout<<"He so luong\tTien phu cap\tChuyen mon\tTrinh Do\n";
            cout<<getspecialize()<<"\t\t"<<getsubsidy()<<"\t\t"<<specialize<<"\t\t"<<getlevelCB()<<endl;
		}
		float getsubsidy(){
            return subsidy;
		}
		float getspecialize(){
            if(specialize=="CV"){
				return 0.4;
			}
			else if(specialize=="CVC"){
				return 0.6;
				}
			else if(specialize=="CG"){
				return 1;
        		}
			}
		string getlevelCB(){
            return levelCB;
        }
		float salaryCB(){
			if (specialize=="CV"){
				return 0.4*1490000+getsubsidy();
				}
			else if (specialize=="CVC"){
                return 0.6*1490000+getsubsidy();
                }
			else{
                return 1490000+getsubsidy();
                }
			}
};
int main(){
	int n,k;
	cout<<"Nhap so Cong nhan:";	cin>>n;
	cout<<"Nhap so Can bo:"; cin>>k;
	Congnhan cn[n];
	Canbo cb[k];
	cout<<"Nhap thong tin cong nhan:"<<endl;
	for(int i=0; i<n; i++){
		cn[i].inputCN();
	}
	cout<<"Nhap thong tin can bo:"<<endl;
	for(int i=0; i<k; i++){
		cb[i].inputCB();
    }
	cout<<"Danh sach cong nhan:"<<endl;
	for(int i=0; i<n; i++){
		cn[i].outputCN();
    }
	cout<<"Danh sach can bo:"<<endl;
	for(int i=0; i<k; i++){
		cb[i].outputCB();
    }
	return 0;
}