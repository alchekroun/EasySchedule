class PhysicalRoom extends Room{
    constructor(idRoom,capacity,site,nbRoom) {
        super(idRoom);
        this._capacity=capacity;
        this._site=site;
        this._nbRoom= nbRoom;
        this._idRoom = idRoom;
    }


    getIdRoom() {
        return this._idRoom;
    }

    setIdRoom(value) {
        this._idRoom = value;
    }


    getSite() {
        return this._site;
    }

    setSite(value) {
        this._site = value;
    }


    getNbRoom() {
        return this._nbRoom;
    }

    setNbRoom(value) {
        this._nbRoom = value;
    }


    getCapacity() {
        return this._capacity;
    }

    setCapacity(value) {
        this._capacity = value;
    }
}