package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type User struct {
	ID              primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Organisation_ID int                `json:"organisation_id,omitempty"`
	Team            int                `json:"team,omitempty"`
	Firstname       string             `json:"firstname,omitempty"`
	Lastname        string             `json:"lastname,omitempty"`
	Email           string             `json:"email,omitempty"`
	Password        string             `json:"password,omitempty"`
}
