import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";


@Entity("OR_MEMBER" ,{schema:"SEASON3_DEV" } )
@Index("UNI_UUID",["UUID",],{unique:true})
@Index("IDX_UUID",["UUID",])
@Index("INX_MEMBER_01",["UUID","USE_YN","LOGIN_TOKEN",])
export class OR_MEMBER {

    @PrimaryGeneratedColumn({
        type:"int", 
        unsigned: true,
        name:"SEQ"
        })
    SEQ:number;
        

    @Column("varchar",{ 
        nullable:false,
        unique: true,
        length:128,
        name:"UUID"
        })
    UUID:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:256,
        name:"UUID_TOKEN"
        })
    UUID_TOKEN:string | null;
        

    @Column("char",{ 
        nullable:true,
        name:"CHANNEL"
        })
    CHANNEL:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:256,
        name:"DEVICE_COMPANY"
        })
    DEVICE_COMPANY:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:256,
        name:"DEVICE_MODEL"
        })
    DEVICE_MODEL:string | null;
        

    @Column("char",{ 
        nullable:false,
        name:"MOBILE_OS"
        })
    MOBILE_OS:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:512,
        name:"MOBILE_TOKEN"
        })
    MOBILE_TOKEN:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:32,
        name:"MOBILE_VERSION"
        })
    MOBILE_VERSION:string | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:64,
        name:"MOBILE_VERSION_CODE"
        })
    MOBILE_VERSION_CODE:string | null;
        

    @Column("char",{ 
        nullable:false,
        name:"USE_YN"
        })
    USE_YN:string;
        

    @Column("datetime",{ 
        nullable:false,
        name:"LAST_LOGIN_DT"
        })
    LAST_LOGIN_DT:Date;
        

    @Column("datetime",{ 
        nullable:false,
        name:"INS_DT"
        })
    INS_DT:Date;
        

    @Column("datetime",{ 
        nullable:false,
        name:"UPD_DT"
        })
    UPD_DT:Date;
        

    @Column("datetime",{ 
        nullable:true,
        name:"DEL_DT"
        })
    DEL_DT:Date | null;
        

    @Column("varchar",{ 
        nullable:true,
        length:512,
        name:"LOGIN_TOKEN"
        })
    LOGIN_TOKEN:string | null;
        
}
