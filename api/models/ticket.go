package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type TicketStatus string

const (
	PendingStatus  TicketStatus = "pending"
	DoingStatus    TicketStatus = "doing"
	ConcluedStatus TicketStatus = "conclued"
)

type Ticket struct {
	ID          string          `json:"ticket_id" gorm:"primaryKey;type:varchar(100)"`
	Name        string          `json:"ticket_name" gorm:"size:255;not null"`
	Explanation string          `json:"ticket_explain" gorm:"type:text;not null"`
	Status      TicketStatus    `json:"ticket_status" gorm:"type:varchar(20);default:pending;not null"`
	AuthorID    uint            `json:"-" gorm:"not null"`
	AuthorEmail string          `json:"author_email" gorm:"size:255;not null"`
	Images      []Image         `json:"images,omitempty" gorm:"foreignKey:TicketID"`
	History     []TicketHistory `json:"history,omitempty" gorm:"foreignKey:TicketID"`
	CreatedAt   time.Time       `json:"created_at"`
	UpdatedAt   time.Time       `json:"updated_at"`
	DeletedAt   *time.Time      `json:"-" gorm:"index"`
}

func (t *Ticket) BeforeCreate(tx *gorm.DB) error {
	t.ID = "ticket_" + uuid.New().String()
	return nil
}

type Image struct {
	ID          string     `json:"image_id" gorm:"primaryKey;type:varchar(100)"`
	TicketID    string     `json:"-" gorm:"type:varchar(100);not null"`
	Name        string     `json:"name" gorm:"size:255;not null"`
	ContentType string     `json:"type" gorm:"size:100;not null"`
	Base64      string     `json:"base64" gorm:"type:text;not null"` // Base64 encoded image content stored in DB
	UploadedAt  time.Time  `json:"uploaded_at"`
	DeletedAt   *time.Time `json:"-" gorm:"index"`
}

func (i *Image) BeforeCreate(tx *gorm.DB) error {
	i.ID = "img_" + uuid.New().String()[:8]
	return nil
}

type TicketHistory struct {
	ID        uint       `json:"-" gorm:"primaryKey"`
	TicketID  string     `json:"-" gorm:"type:varchar(100);not null"`
	Message   string     `json:"ticket_return" gorm:"type:text;not null"`
	CreatedAt time.Time  `json:"ticket_date"`
	UpdatedAt time.Time  `json:"-"`
	DeletedAt *time.Time `json:"-" gorm:"index"`
}

// Define response structures for tickets

type BasicTicketResponse struct {
	ID     string       `json:"ticket_id"`
	Name   string       `json:"ticket_name"`
	Status TicketStatus `json:"ticket_status"`
}

type DetailedTicketResponse struct {
	ID          string          `json:"ticket_id"`
	Name        string          `json:"ticket_name"`
	Status      TicketStatus    `json:"ticket_status"`
	Explanation string          `json:"ticket_explain"`
	AuthorEmail string          `json:"author_email,omitempty"`
	Images      []Image         `json:"images,omitempty"`
	History     []TicketHistory `json:"history,omitempty"`
	CreatedAt   time.Time       `json:"created_at,omitempty"`
}

// ToBasicResponse converts a Ticket to a BasicTicketResponse
func (t *Ticket) ToBasicResponse() BasicTicketResponse {
	return BasicTicketResponse{
		ID:     t.ID,
		Name:   t.Name,
		Status: t.Status,
	}
}

// ToDetailedResponse converts a Ticket to a DetailedTicketResponse
func (t *Ticket) ToDetailedResponse(includeAuthor bool) DetailedTicketResponse {
	// Inicializar History como array vazio se for nil
	history := t.History
	if history == nil {
		history = []TicketHistory{}
	}

	// Inicializar Images como array vazio se for nil
	images := t.Images
	if images == nil {
		images = []Image{}
	}

	response := DetailedTicketResponse{
		ID:          t.ID,
		Name:        t.Name,
		Status:      t.Status,
		Explanation: t.Explanation,
		Images:      images,
		History:     history,
		CreatedAt:   t.CreatedAt,
	}

	if includeAuthor {
		response.AuthorEmail = t.AuthorEmail
	}

	return response
}
