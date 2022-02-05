package com.thrymr.training;

import java.util.Scanner;

class Launch {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
			int choice,ctt=3,c=3;
			int cu=0,cuu=0;
			Scanner sc=new Scanner(System.in);

			MeghaSuperMarket g=new MeghaSuperMarket();
			
			while(true)
			{
			System.out.println("press 1 for Tamatoe");
			System.out.println("press 2 for eggs");
			System.out.println("press 3 to calculate total");
			System.out.println();
			System.out.println("enter your choice ");
			choice=sc.nextInt();
			switch(choice)
			{
			case 1:g.tamatoe();cu++;
			break;
			case 2:g.eggs();cuu++;
			break;
			case 3:	if(c<=3 && cu==0 && cuu==0)
					{
						c--;
						 if(c==0)
						{
							System.out.println("sorry! you entered more than 2 chances");
							System.exit(0);
						}
					System.out.println("please press 1 or 2 to get eggs or tamatoes and you have "+c+" chance(s) only");
					System.out.println();
					}
			if(g.sum>0 || g.su>0){		
				System.out.println("the total purchased groceries is "+(g.sum+g.su));
					int ct=3;
					int tot=0;
					while(ct>0)
					{
				System.out.println("please give me the amount for the groceries sir/madam");
				int amt=sc.nextInt();
				tot=tot+amt;
				if(tot>=(g.sum+g.su))
				{
				System.out.println("the balance you received is "+(tot-(g.sum+g.su))+" Thank you, visit again, have a nice day!");
				System.exit(0);

				}
				else if(tot<(g.sum+g.su))
				{
					ct--;
					if(ct==0)
					{
						System.out.println("sorry! your chances are over for giving correct amount");
						System.exit(0);
					}
					System.out.println("sorry! You given "+tot+" which is less amount and the remaining balance you have to give is "+((g.sum+g.su)-tot)+" sir/madam, please give the remaining balance and you have "+ct+" chances only");
					
				}
					}
			}
				break;
				
			default: if(ctt>0)
				{
				ctt--;
					if(ctt==0)
					{
						System.out.println("sorry you entered wrong option(key)");
						System.exit(0);
					}
					System.out.println("sorry, we have tamatoes and eggs only, please press 1 or 2 for tamatoes and eggs and you have "+ctt+" chance(s) only to press the key");

				}
			}
			}
	}}

class MeghaSuperMarket{

	int n1;
	int n2;
	int su;
	int sum;
	Scanner s1=new Scanner(System.in);

	void eggs() {
		// TODO Auto-generated method stub
		
		int ct=3;
		int availableQty=10;
		availableQty=availableQty-n1;
		System.out.println("the quantity of eggs is "+availableQty);
		int cost=5;
		while(true)
		{
			
		System.out.println("how much quantity of eggs do you need");
		 n1=s1.nextInt();
		if(n1<=availableQty)
		{
			//n1=n1*cost;
			su=su+(n1*cost);
			System.out.println("the cost of total eggs is "+su);
			System.out.println();
			break;
		}
		else if(ct>0)
		{
			ct--;
			if(ct==0)
			{
				System.out.println("sorry, your giving beyond the qty limit");
				System.exit(0);
			}
			System.out.println("sorry, we have "+availableQty+" eggs only so,please enter upto that limit only and you have "+ct+"chance(s) only");
			
		}
		}
	}

	void tamatoe() {
		// TODO Auto-generated method stub
		
		int ct=3;
		int availableQtyInKgs=10;

		availableQtyInKgs=availableQtyInKgs-n2;
		System.out.println("the quantity of tamtatoes is "+availableQtyInKgs+" kgs");

		int costPerKg=30;
		
		while(true)
		{
		
		System.out.println("how much quantity of total Tamatoes do you need");
		 n2=s1.nextInt();
		if(n2<=availableQtyInKgs)
		{
		//	n2=n2*costPerKg;
			sum=sum+(n2*costPerKg);
			System.out.println("the cost of Tamatoes is "+sum);
			System.out.println();
			break;
		}
		else if(ct>0)
		{
			ct--;
			if(ct==0)
			{
				System.out.println("sorry, your giving beyond the qty limit");
				System.exit(0);
			}
			System.out.println("sorry, we have "+availableQtyInKgs+" Kgs only so,please enter upto that limit only and you have "+ct+"chance(s) only");
			
		}
		}
	}
}
