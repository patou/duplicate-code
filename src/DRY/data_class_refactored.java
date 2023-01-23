class Line {
	Point  start;
	Point  end;
	double length() {
		return start.distanceTo(end);
	}
};
