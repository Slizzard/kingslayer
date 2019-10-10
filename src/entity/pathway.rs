use serde_derive::{Deserialize, Serialize};

use crate::entity::{Closeable, Entity};

#[derive(Debug, Serialize, Deserialize)]
pub struct Pathway {
    #[serde(default)]
    name: String,
    target: String,
    desc: String,
    inspection: String,
    is_closed: Option<bool>,
    is_locked: Option<bool>,
}

impl Pathway {
    pub fn target(&self) -> &String {
        &self.target
    }

    pub fn desc(&self) -> String {
        if let Some(true) = self.is_closed {
            format!("{} The way is shut.", self.desc)
        } else if let Some(false) = self.is_closed {
            format!("{} The way is open.", self.desc)
        } else {
            self.desc.clone()
        }
    }

    pub fn is_closed(&self) -> Option<bool> {
        self.is_closed
    }

    pub fn is_locked(&self) -> Option<bool> {
        self.is_locked
    }
}

impl Entity for Pathway {
    fn name(&self) -> &String {
        &self.name
    }

    fn desc(&self) -> &String {
        &self.desc
    }

    fn inspection(&self) -> &String {
        &self.inspection
    }
}

impl Closeable for Pathway {
    fn open(&mut self) {
        if self.is_closed.is_some() {
            self.is_closed = Some(false)
        }
    }

    fn close(&mut self) {
        if self.is_closed.is_some() {
            self.is_closed = Some(true)
        }
    }
}
