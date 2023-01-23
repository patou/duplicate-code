class Line {
	private double length;
	private Point  start;
	private Point  end;
	
	public Line(Point start, Point end) {
		this.start = start;
		this.end   = end;
		
		calculateLength();
	}
	
	// public
	void setStart(Point p) { this.start = p; calculateLength(); }
	void setEnd(Point p)   { this.end   = p; calculateLength(); }
	
	Point getStart()       { return start; }
	Point getEnd()         { return end;   }
	
	double getLength()     { return length; }
	
	private void calculateLength() {
		this.length  = start.distanceTo(end);
	}
};