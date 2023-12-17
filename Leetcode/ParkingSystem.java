class ParkingSystem {
    private int big;
    private int medium;
    private int small;

    public ParkingSystem(int big, int medium, int small) {
        this.big = big;
        this.medium = medium;
        this.small = small;
    }

    private boolean checkAvailability(int carType) {
        switch (carType) {
            case 1:
                return big > 0;
            case 2:
                return medium > 0;
            case 3:
                return small > 0;
            default:
                return false;
        }
    }

    private boolean parkCar(int carType) {
        switch (carType) {
            case 1:
                if (big > 0) {
                    big--;
                    return true;
                }
                break;
            case 2:
                if (medium > 0) {
                    medium--;
                    return true;
                }
                break;
            case 3:
                if (small > 0) {
                    small--;
                    return true;
                }
                break;
        }
        return false;
    }

    public boolean addCar(int carType) {
        if (carType >= 1 && carType <= 3) {
            return parkCar(carType);
        }
        return false;
    }
}
