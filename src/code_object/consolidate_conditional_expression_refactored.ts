disabilityAmount(): number {
  if (this.isNotEligibleForDisability()) {
    return 0;
  }
  // Compute the disability amount.
  // ...
}

isNotEligibleForDisability(): boolean {
  return this.seniority < 2 
        || this.monthsDisabled > 12 
        || this.isPartTime;
}