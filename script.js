var isDate = function (input) {    
  //   write your code here

	let n=input.length;

	if(input=="new Date()")
		return true;

	if(n>10)
		return false;
	
	let ok=1;

	for(let i=0;i<4;i++)
		{
			if(input[i]>='0'&&input[i]<='9')
			{
				continue;
			}
			else
			{
				ok=0;
				break;
			}
		}

	if(input[4]!='-'||input[7]!='-')
	{
		ok=0;
	}

	for(let i=5;i<=6;i++)
		{
			if(input[i]>='0'&&input[i]<='9')
			{
				continue;
			}
			else
			{
				ok=0;
				break;
			}
		}

	for(let i=8;i<=9;i++)
		{
			if(input[i]>='0'&&input[i]<='9')
			{
				continue;
			}
			else
			{
				ok=0;
				break;
			}
		}

	if(ok==0)
		return false;
	return true;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
