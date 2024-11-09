#include<bits/stdc++.h>
using namespace std;

const long limit = 1000000;
vector<bool> isPrime(limit+1,true);
vector<long> Primes;

void pro()
{
    isPrime[0]=isPrime[1]=false;
    for(long i=2;i<=limit;i++)
        if(isPrime[i])
        {
            Primes.push_back(i);
            for(long j=i*2;j<=limit;j+=i)
                isPrime[j]=false;
        }
    for(long i : Primes)
        cout<<i<<" ";
}
int main()
{
    pro();
}
