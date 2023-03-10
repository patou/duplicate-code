def format_amount(value)
	  result = sprintf("%10.2f", value.abs)
	  if value < 0
	    result + "-"
	  else
	    result + " "
	  end
end
	
def print_balance(account)
	  printf "Debits:  %s\n", format_amount(account.debits)
	  printf "Credits: %s\n", format_amount(account.credits)
	  printf "Fees:    %s\n", format_amount(account.fees)
	  printf "         ———-\n"
	  printf "Balance: %s\n", format_amount(account.balance)
end